/**
 * UserAcessRate — In-memory tracking record for a single IP address.
 *
 * One instance is stored per remote IP in the cache and is updated on every
 * request that passes the global throttle check.
 *
 * Mirrors: Clinithink.NetworkService.Domain.Model.UserAcessRate
 */
export interface UserAcessRate {
  /** Running total of API calls made by this IP in the current window. */
  AcessRateCount: number;

  /**
   * Timestamp of the very first request in the current window.
   * Used to determine when the window has expired and should reset.
   */
  StartingApiCallTime: Date;

  /** Timestamp of the most recent request from this IP. */
  PreviousApiCallTime: Date;
}
