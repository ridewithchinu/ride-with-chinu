/**
 * AbstractAntiXssGuard
 *
 * Replicates the pattern-matching logic of:
 *   Clinithink.NetworkService.Domain.Middlewares.AntiXssMiddleware
 *   Clinithink.NetworkService.Domain.Middlewares.CrossSiteScriptingValidation
 *
 * The same four starting-character heuristics from the .NET source are
 * preserved verbatim so that the detection surface is identical.
 *
 * Usage
 * ─────
 * Sub-classes must implement `handleViolation` to define what happens when
 * a dangerous string is found (e.g., throw an error, redirect, log, etc.).
 *
 * @abstract
 */
export abstract class AbstractAntiXssGuard {

  // ─── Pattern table (mirrors CrossSiteScriptingValidation.StartingChars) ────
  private static readonly STARTING_CHARS = ['<', '&', '.', '='] as const;

  // ─── Public API ─────────────────────────────────────────────────────────────

  /**
   * Inspect a request's URL path, query string, and body.
   * Returns `true` if the request is safe, `false` if a violation was found
   * (after calling `handleViolation`).
   *
   * @param url          Request path (e.g. "/api/resource").
   * @param queryString  Raw query string (URL-decoded before scanning).
   * @param body         Stringified request body (JSON / form data).
   */
  public async inspect(
    url: string,
    queryString: string,
    body: string,
  ): Promise<boolean> {
    // Check XSS in URL
    if (url && AbstractAntiXssGuard.isDangerousString(url)) {
      await this.handleViolation('URL contains potentially dangerous characters');
      return false;
    }

    // Check XSS in query string (decode first, matching UrlDecode in .NET)
    if (queryString) {
      const decoded = decodeURIComponent(queryString);
      if (AbstractAntiXssGuard.isDangerousString(decoded)) {
        await this.handleViolation(
          'Query string contains potentially dangerous characters',
        );
        return false;
      }
    }

    // Check XSS in body
    if (body && AbstractAntiXssGuard.isDangerousString(body)) {
      await this.handleViolation('Request body contains potentially dangerous characters');
      return false;
    }

    return true;
  }

  // ─── Abstract hook ───────────────────────────────────────────────────────────

  /**
   * Called when a dangerous pattern is detected.
   * Implement to log, reject, or otherwise respond to the violation.
   *
   * The .NET implementation responds with HTTP 400 and the message
   * "Malicious special character pattern found".
   */
  protected abstract handleViolation(reason: string): Promise<void>;

  // ─── Static helpers (mirrors CrossSiteScriptingValidation) ──────────────────

  /**
   * Returns `true` if the string contains a pattern that looks like an
   * XSS attack, CSRF probe, or path-traversal attempt.
   *
   * Algorithm mirrors `IsDangerousString` + `CharacterCheck` verbatim.
   */
  public static isDangerousString(s: string): boolean {
    let i = 0;
    while (i < s.length) {
      const n = AbstractAntiXssGuard.indexOfAny(s, AbstractAntiXssGuard.STARTING_CHARS, i);
      if (n < 0 || n === s.length - 1) return false;

      if (AbstractAntiXssGuard.characterCheck(s, n)) return true;
      i = n + 1;
    }
    return false;
  }

  /** Equivalent of `String.IndexOfAny` from C#. */
  private static indexOfAny(s: string, chars: readonly string[], from: number): number {
    for (let i = from; i < s.length; i++) {
      if ((chars as string[]).includes(s[i])) return i;
    }
    return -1;
  }

  /**
   * Per-character XSS heuristic — mirrors `CharacterCheck`.
   *
   * '<'  → followed by letter, '!', '/', '?'  → HTML tag / comment
   * '&'  → followed by '#' or '&'             → HTML entity
   * '.'  → preceded OR followed by traversal  → path traversal
   * '='  → followed by '=' or '*'             → expression injection
   */
  private static characterCheck(s: string, n: number): boolean {
    const next = s[n + 1];
    switch (s[n]) {
      case '<':
        return /[a-zA-Z!/?]/.test(next);
      case '&':
        return next === '#' || next === '&';
      case '.':
        return s[n - 1] === '.' || next === '\\' || next === '/';
      case '=':
        return next === '=' || next === '*';
      default:
        return false;
    }
  }
}
