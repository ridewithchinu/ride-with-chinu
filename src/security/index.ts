/**
 * @file index.ts — Security context barrel export
 *
 * Single entry-point for all security abstractions that replicate the
 * Clinithink NetworkService security layer.
 *
 * Import everything you need from here:
 *   import { AbstractAccessRateLimiter, AuthorizationPolicies } from '@/security';
 */

// ── Rate Limiting ────────────────────────────────────────────────────────────
export { AbstractAccessRateLimiter } from './AbstractAccessRateLimiter';
export { AccessRateLimiter, DEFAULT_RATE_LIMITER_CONFIG } from './models/AccessRateLimiter';
export { UserAcessRate } from './models/UserAcessRate';
export { RateLimitAttribute, LimiterType } from './models/RateLimitAttribute';

// ── Anti-XSS ────────────────────────────────────────────────────────────────
export { AbstractAntiXssGuard } from './AbstractAntiXssGuard';

// ── Security Response Headers ────────────────────────────────────────────────
export {
  AbstractResponseHeaderGuard,
  SecurityHeaders,
  P3PHeader,
  REFERENCE_CSP,
} from './AbstractResponseHeaderGuard';

// ── Error Handling ───────────────────────────────────────────────────────────
export { AbstractErrorHandler } from './AbstractErrorHandler';

// ── Authorization ────────────────────────────────────────────────────────────
export {
  AbstractAuthorizationContext,
  AuthorizationPolicies,
  AuthorizePolicy,
  AuthorizationPolicy,
  AuthorizePolicies,
  ADClaimTypes,
  UserRolesConstant,
} from './AbstractAuthorizationContext';
