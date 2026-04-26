import { AccessRateLimiter, DEFAULT_RATE_LIMITER_CONFIG } from './models/AccessRateLimiter';
import { UserAcessRate } from './models/UserAcessRate';
import { RateLimitAttribute } from './models/RateLimitAttribute';

// ─── Types ───────────────────────────────────────────────────────────────────

/** Key used to identify a client (IP address or user identifier). */
type ClientKey = string;

/** Key used to identify an endpoint (URL path). */
type EndpointKey = string;

// ─── Abstract Base ────────────────────────────────────────────────────────────

/**
 * AbstractAccessRateLimiter
 *
 * Faithfully replicates the two-tier throttling contract of the reference
 * `AccessRateLimiterMiddlware` from the Clinithink NetworkService project.
 *
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Tier 1 – Global throttle (CanProcessClientRequest)
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *   Every request is first checked against the rolling request budget
 *   (`UserRequestAccessLimit` calls per `TimeSpanForRequest` minutes).
 *   If the budget is exhausted the call is rejected with 429 immediately.
 *
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Tier 2 – Per-endpoint cooldown (InvokeAsync)
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *   Requests that pass Tier 1 are checked against a per-(client, endpoint)
 *   timestamp.  The cooldown duration comes from:
 *     • `RateLimitAttribute.RateLimitPerSecond`  (endpoint override), or
 *     • `AccessRateLimiter.DefaultRateLimitPerSecond` (global default).
 *
 * Sub-classes must provide concrete cache implementations via the abstract
 * `getFromCache` / `setInCache` / `removeFromCache` methods.
 *
 * @abstract
 */
export abstract class AbstractAccessRateLimiter {
  /** Rate-limiter configuration (injected from config / environment). */
  protected readonly config: AccessRateLimiter;

  constructor(config: AccessRateLimiter = DEFAULT_RATE_LIMITER_CONFIG) {
    this.config = config;
  }

  // ─── Abstract cache primitives (must be implemented by sub-classes) ─────────

  /**
   * Read a value from the cache.
   * Returns `undefined` if the key does not exist or has expired.
   */
  protected abstract getFromCache<T>(key: string): T | undefined;

  /**
   * Write / overwrite a value in the cache with a sliding expiration.
   *
   * @param key       Cache key.
   * @param value     Value to store.
   * @param ttlMs     Time-to-live in milliseconds (sliding expiry).
   */
  protected abstract setInCache<T>(key: string, value: T, ttlMs: number): void;

  /** Remove an entry from the cache. */
  protected abstract removeFromCache(key: string): void;

  // ─── Public API ──────────────────────────────────────────────────────────────

  /**
   * Main guard — mirrors `InvokeAsync` in the .NET middleware.
   *
   * Returns `{ allowed: true }` when the request may proceed.
   * Returns `{ allowed: false, status: 429 }` when throttled.
   *
   * @param clientKey      Remote IP / user identifier.
   * @param endpointKey    URL path of the endpoint being called.
   * @param decorator      Optional per-endpoint rate-limit override.
   */
  public checkRequest(
    clientKey: ClientKey,
    endpointKey: EndpointKey,
    decorator?: RateLimitAttribute,
  ): { allowed: boolean; status?: 429 } {
    // ── Tier 1: Global request budget ────────────────────────────────────────
    if (!this.canProcessClientRequest(clientKey)) {
      return { allowed: false, status: 429 };
    }

    // No endpoint-specific decorator → fall through.
    if (!decorator) {
      return { allowed: true };
    }

    // ── Tier 2: Per-endpoint cooldown ─────────────────────────────────────────
    const endpointDictKey = `user${clientKey}`;
    const perEndpointMap = this.getPerEndpointMap(endpointDictKey);
    const lastCall = perEndpointMap.get(endpointKey) ?? new Date(0);

    const cooldownSeconds =
      decorator.RateLimitPerSecond > 0
        ? decorator.RateLimitPerSecond
        : this.config.DefaultRateLimitPerSecond;

    const now = new Date();
    const nextAllowedAt = new Date(lastCall.getTime() + cooldownSeconds * 1_000);

    if (nextAllowedAt > now) {
      return { allowed: false, status: 429 };
    }

    // Update timestamp for this endpoint.
    perEndpointMap.delete(endpointKey);
    perEndpointMap.set(endpointKey, now);
    this.setInCache(
      endpointDictKey,
      perEndpointMap,
      this.config.TimeSpanForRequest * 60 * 1_000,
    );

    return { allowed: true };
  }

  // ─── Private helpers ─────────────────────────────────────────────────────────

  /**
   * Tier-1 check — mirrors `CanProcessUserRequest`.
   *
   * Returns true if the client still has quota in the current window.
   * Resets the window when `TimeSpanForRequest` minutes have elapsed since
   * the first call in the window.
   */
  private canProcessClientRequest(clientKey: ClientKey): boolean {
    const ttlMs = this.config.TimeSpanForRequest * 60 * 1_000;
    const now = new Date();

    const stored = this.getFromCache<UserAcessRate>(clientKey);
    let record: UserAcessRate;

    if (
      !stored ||
      new Date(stored.StartingApiCallTime).getTime() + ttlMs < now.getTime()
    ) {
      // Window has expired (or never started) → start a fresh window.
      record = {
        AcessRateCount: 1,
        StartingApiCallTime: now,
        PreviousApiCallTime: now,
      };
      this.setInCache(clientKey, record, ttlMs);
      return true;
    }

    if (stored.AcessRateCount < this.config.UserRequestAccessLimit) {
      stored.AcessRateCount += 1;
      stored.PreviousApiCallTime = now;
      this.setInCache(clientKey, stored, ttlMs);
      return true;
    }

    return false; // Budget exhausted.
  }

  /**
   * Retrieves (or initialises) the per-endpoint timestamp dictionary for a
   * given client.  Mirrors `GetUserApiCallsLimiterDictonary`.
   */
  private getPerEndpointMap(
    key: string,
  ): Map<EndpointKey, Date> {
    const ttlMs = this.config.TimeSpanForRequest * 60 * 1_000;
    const existing = this.getFromCache<Map<EndpointKey, Date>>(key);
    if (existing) return existing;

    const fresh = new Map<EndpointKey, Date>();
    this.setInCache(key, fresh, ttlMs);
    return fresh;
  }
}
