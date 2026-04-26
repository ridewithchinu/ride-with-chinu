/**
 * SecurityHeaders
 *
 * Captures the set of HTTP security headers applied by:
 *   Clinithink.NetworkService.Domain.Middlewares.CustomResponseHeaderMiddleware
 *
 * In a browser / frontend context these are enforced by the hosting server
 * (Nginx, Azure Static Web Apps, Vercel, etc.).  This interface documents
 * the expected values so they can be validated in integration tests or
 * replicated in server config files.
 *
 * ─── Reference implementation (C#) ──────────────────────────────────────────
 *   httpContext.Response.Headers.Add("X-Content-Type-Options", "nosniff");
 *   httpContext.Response.Headers.Add("X-Xss-Protection",       "1; mode=block");
 *   httpContext.Response.Headers.Add("X-Frame-Options",        "SAMEORIGIN");
 *   httpContext.Response.Headers.Add("Content-Security-Policy", <from config>);
 */
export interface SecurityHeaders {
  /**
   * Prevents MIME-type sniffing.
   * Expected value: `"nosniff"`
   */
  'X-Content-Type-Options': 'nosniff';

  /**
   * Instructs browsers to block reflected XSS.
   * Expected value: `"1; mode=block"`
   */
  'X-Xss-Protection': '1; mode=block';

  /**
   * Controls framing / clickjacking protection.
   * Expected value: `"SAMEORIGIN"`
   */
  'X-Frame-Options': 'SAMEORIGIN';

  /**
   * Content Security Policy sourced from `appsettings.json → Policy.ContentSecurityPolicy`.
   *
   * Production value from reference:
   *   "script-src 'self' https://login.microsoftonline.com;
   *    style-src  'self';
   *    img-src    'self';
   *    default-src 'self' https://login.microsoftonline.com;
   *    connect-src 'self' https://login.microsoftonline.com
   *                       https://aurorateststorageacc.blob.core.windows.net;"
   */
  'Content-Security-Policy': string;
}

/**
 * P3P privacy header added by AntiXssMiddleware (CrossSiteScriptingValidation.AddHeaders).
 *
 * Applied on XSS error responses.
 */
export interface P3PHeader {
  P3P: string;
}

/**
 * Canonical production CSP from the NetworkService reference.
 * Adjust allowed hosts for your deployment environment.
 */
export const REFERENCE_CSP =
  "script-src 'self' https://login.microsoftonline.com;" +
  "style-src 'self';" +
  "img-src 'self';" +
  "default-src 'self' https://login.microsoftonline.com;" +
  "connect-src 'self' https://login.microsoftonline.com;";

/**
 * AbstractResponseHeaderGuard
 *
 * Abstract base representing the CustomResponseHeaderMiddleware contract.
 * Concrete implementations apply/validate these headers in the target
 * runtime environment (Vite dev server, Nginx, CDN rules, etc.).
 *
 * @abstract
 */
export abstract class AbstractResponseHeaderGuard {
  /**
   * Returns the Content-Security-Policy string to be applied.
   * Override to source from environment variables or a config service.
   */
  protected abstract getContentSecurityPolicy(): string;

  /**
   * Returns the full header map that every response must carry.
   * Mirrors the four headers set in `CustomResponseHeaderMiddleware.Invoke`.
   */
  public buildHeaders(): SecurityHeaders {
    return {
      'X-Content-Type-Options': 'nosniff',
      'X-Xss-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': this.getContentSecurityPolicy(),
    };
  }

  /**
   * Validate that a given response carries the required security headers.
   * Returns an array of missing / incorrect header names.
   */
  public audit(responseHeaders: Record<string, string>): string[] {
    const required = this.buildHeaders();
    const missing: string[] = [];

    for (const [key, expected] of Object.entries(required)) {
      const actual = responseHeaders[key.toLowerCase()] ?? responseHeaders[key];
      if (!actual) {
        missing.push(`MISSING: ${key}`);
      } else if (key !== 'Content-Security-Policy' && actual !== expected) {
        missing.push(`MISMATCH: ${key} (got "${actual}", expected "${expected}")`);
      }
    }

    return missing;
  }
}
