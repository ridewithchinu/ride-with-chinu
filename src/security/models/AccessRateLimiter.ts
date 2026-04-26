/**
 * AccessRateLimiter — Configuration model for the two-tier rate limiter.
 *
 * Maps to `appsettings.json → AccessRateLimiter` section in the reference
 * NetworkService implementation.
 *
 * Tier 1 – Global per-IP throttle  (UserRequestAccessLimit / TimeSpanForRequest)
 * Tier 2 – Per-endpoint cooldown   (DefaultRateLimitPerSecond or RateLimitAttribute.RateLimitPerSecond)
 */
export interface AccessRateLimiter {
  /**
   * Minimum gap (in seconds) that must elapse between two consecutive calls
   * to the same endpoint by the same client.
   * Used as the fallback when the endpoint has no [RateLimit] decorator.
   *
   * @example 1  → at most one request per second per endpoint per IP
   */
  DefaultRateLimitPerSecond: number;

  /**
   * Maximum total number of API requests a single IP may make within
   * one `TimeSpanForRequest` window.
   *
   * @example 15 → 15 requests per minute per IP (cross-endpoint)
   */
  UserRequestAccessLimit: number;

  /**
   * Duration of the sliding window, expressed in **minutes**.
   * Both the global request counter and the per-endpoint timestamp dictionaries
   * are cached with a sliding expiration of this value.
   *
   * @example 1 → 1-minute sliding window
   */
  TimeSpanForRequest: number;
}

/** Default production configuration (mirrors appsettings.json). */
export const DEFAULT_RATE_LIMITER_CONFIG: AccessRateLimiter = {
  DefaultRateLimitPerSecond: 1,
  UserRequestAccessLimit: 15,
  TimeSpanForRequest: 1,
};
