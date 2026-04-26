/**
 * LimiterType — Strategy selector for the rate-limit decorator.
 *
 * Mirrors: Clinithink.NetworkService.Domain.Enums.LimiterType
 *
 * Currently only `PerUser` is defined.  Additional strategies (e.g. PerRole,
 * PerOrganization) should be added here and implemented in AccessRateLimiter.
 */
export enum LimiterType {
  /** Each unique remote IP is throttled independently. */
  PerUser = 1,
}

/**
 * RateLimitAttribute — Decorator metadata applied to individual API routes
 * that require a custom throttle override.
 *
 * When present on a route, the middleware uses `RateLimitPerSecond` as the
 * minimum inter-request gap for that specific endpoint instead of
 * `AccessRateLimiter.DefaultRateLimitPerSecond`.
 *
 * A value of 0 (default) means "fall back to the global default."
 *
 * Mirrors: Clinithink.NetworkService.Domain.Model.RateLimitAttribute
 *
 * @example
 * // Axios interceptor usage (client-side guard)
 * const attrs: RateLimitAttribute = { StrategyType: LimiterType.PerUser, RateLimitPerSecond: 5 };
 */
export interface RateLimitAttribute {
  /** Which limiting strategy to apply. */
  StrategyType: LimiterType;

  /**
   * Endpoint-specific cooldown in **seconds**.
   * 0 → use `AccessRateLimiter.DefaultRateLimitPerSecond`.
   */
  RateLimitPerSecond: number;
}
