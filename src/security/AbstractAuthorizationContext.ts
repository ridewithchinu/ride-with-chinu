/**
 * Authorization Policies — role claim values checked against the JWT.
 *
 * Mirrors: Clinithink.NetworkService.Shared.Constants.AuthorizationPolicies
 * These strings are the actual values stored in the Azure AD app-role claim
 * (`http://schemas.microsoft.com/ws/2008/06/identity/claims/role`).
 */
export const AuthorizationPolicies = {
  NetworkClient: 'NetworkClient',
  ClinithinkSuperUser: 'Super.User',
  OrganisationAdmin: 'Organisation.Admin',
  OperationalTelemetryReader: 'Operational.Telemetry.Reader',
  EngineTelemetryReader: 'Engine.Telemetry.Reader',
  ResourceRead: 'Resource.Read',
  ResourceWrite: 'Resource.Write',
  ResourceManager: 'Resource.Manager',
} as const;

export type AuthorizationPolicy = typeof AuthorizationPolicies[keyof typeof AuthorizationPolicies];

/**
 * Authorize Policies — named policy identifiers used on route decorators.
 *
 * Mirrors: Clinithink.NetworkService.Shared.Constants.AuthorizePolicies
 * These are internal policy names registered in AddAuthorizationAndPolicies().
 */
export const AuthorizePolicies = {
  NetworkClient: 'NetworkClient',
  ClinithinkSuperUser: 'ClinithinkSuperUser',
  OrganisationAdmin: 'OrganisationAdmin',
  OperationalTelemetryReader: 'OperationalTelemetryReader',
  EngineTelemetryReader: 'EngineTelemetryReader',
  EngineOrOperationalTelemetryReader: 'EngineOrOperationalTelemetryReader',
  ClinithinkSuperUserOrOrganisationAdmin: 'ClinithinkSuperUserOrOrganisationAdmin',
  ResourceRead: 'ResourceRead',
  ResourceWrite: 'ResourceWrite',
  ResourceManager: 'ResourceManager',
} as const;

export type AuthorizePolicy = typeof AuthorizePolicies[keyof typeof AuthorizePolicies];

/**
 * AD Claim Types — JWT claim URI constants used during policy evaluation.
 *
 * Mirrors: Clinithink.NetworkService.Domain.Constants.ADClaimTypes
 */
export const ADClaimTypes = {
  /** Azure Object Identifier claim (`oid`). */
  ObjectIdentifier: 'http://schemas.microsoft.com/identity/claims/objectidentifier',
  /** App-role claim evaluated by all authorization policies. */
  RegisterdClaim: 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role',
} as const;

/**
 * User Role Constants — human-readable role names used in service logic.
 *
 * Mirrors: Clinithink.NetworkService.Domain.Constants.UserRolesConstant
 */
export const UserRolesConstant = {
  ClinithinkSuperUser: 'Super.User',
  OrganisationAdmin: 'Organisation.Admin',
} as const;

// ─── Abstract Authorization Context ─────────────────────────────────────────

/**
 * AbstractAuthorizationContext
 *
 * Mirrors the authorization and policy setup from `AddAuthorizationAndPolicies`
 * and the global `AuthorizeFilter` applied in `Program.cs`.
 *
 * All API routes require an authenticated user by default
 * (`RequireAuthenticatedUser`).  Individual routes additionally require one
 * or more role claims to be present in the JWT.
 *
 * Sub-classes must implement `getClaims` to extract the caller's role claims
 * from the current authentication context (e.g. MSAL, session, cookie).
 *
 * @abstract
 */
export abstract class AbstractAuthorizationContext {

  // ─── Abstract hook ───────────────────────────────────────────────────────

  /**
   * Return the list of role claims present in the current user's token.
   * Maps to the `RegisterdClaim` / roles array in the Azure AD JWT.
   */
  protected abstract getClaims(): string[];

  // ─── Public API ──────────────────────────────────────────────────────────

  /** Returns true if the user is authenticated (has any claims). */
  public isAuthenticated(): boolean {
    return this.getClaims().length > 0;
  }

  /**
   * Returns true if the user holds **any** of the specified role claim values.
   * Mirrors `RequireClaim(ADClaimTypes.RegisterdClaim, new List<string> { ... })`.
   *
   * @param allowedRoles  One or more `AuthorizationPolicies.*` values.
   */
  public hasRole(...allowedRoles: AuthorizationPolicy[]): boolean {
    const userClaims = this.getClaims();
    return allowedRoles.some(role => userClaims.includes(role));
  }

  /**
   * Convenience guard — throws if the user does not hold the required role.
   * Use in service-layer code to replicate controller-level `[Authorize(Policy)]`.
   */
  public requireRole(...allowedRoles: AuthorizationPolicy[]): void {
    if (!this.isAuthenticated()) {
      throw Object.assign(new Error('Unauthenticated'), { name: 'UnauthorizedError', status: 401 });
    }
    if (!this.hasRole(...allowedRoles)) {
      throw Object.assign(new Error('Forbidden'), { name: 'ForbiddenError', status: 403 });
    }
  }
}
