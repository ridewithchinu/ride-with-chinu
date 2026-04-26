/**
 * AbstractErrorHandler
 *
 * Replicates the centralised exception-to-HTTP-status mapping of:
 *   Clinithink.NetworkService.Domain.Middlewares.ErrorHandlerMiddleware
 *
 * The .NET implementation catches all unhandled exceptions, logs them with
 * Serilog, and returns a structured `ApiResponse<string>` JSON body with an
 * appropriate HTTP status code.
 *
 * This abstract class mirrors that contract for the client-side / edge layer.
 * Sub-classes implement `logError` (e.g. Sentry, console, Azure App Insights)
 * and `sendErrorResponse` (e.g. return a fetch Response, throw an Axios error).
 *
 * Error → Status mapping (mirrors the switch-case):
 *   ApplicationException (bad input)   → 400 Bad Request
 *   KeyNotFoundException (not found)   → 404 Not Found
 *   Any other error                    → 500 Internal Server Error
 *
 * @abstract
 */
export abstract class AbstractErrorHandler {

  // ─── Abstract hooks ───────────────────────────────────────────────────────

  /** Log the error to your observability platform. */
  protected abstract logError(error: Error, message: string): void;

  /**
   * Emit the error response to the caller.
   *
   * @param statusCode  HTTP status code (400 / 404 / 500).
   * @param message     Human-readable error message.
   */
  protected abstract sendErrorResponse(statusCode: number, message: string): void;

  // ─── Public API ───────────────────────────────────────────────────────────

  /**
   * Handle an error, log it, and dispatch the appropriate HTTP response.
   * Mirrors the catch block of `ErrorHandlerMiddleware.Invoke`.
   */
  public handle(error: Error): void {
    this.logError(error, error.message);
    const statusCode = AbstractErrorHandler.mapErrorToStatus(error);
    this.sendErrorResponse(statusCode, error.message);
  }

  // ─── Static helpers ───────────────────────────────────────────────────────

  /**
   * Maps an error type to an HTTP status code.
   * Mirrors the switch-case in the .NET middleware verbatim.
   */
  public static mapErrorToStatus(error: Error): 400 | 404 | 500 {
    if (error instanceof RangeError || error.name === 'ApplicationException') {
      return 400; // Bad Request
    }
    if (error instanceof RangeError || error.name === 'KeyNotFoundException') {
      return 404; // Not Found
    }
    return 500; // Internal Server Error
  }

  /**
   * Build a structured error payload matching `ApiResponse<string>.Fail(message)`.
   * Keeps the response shape consistent with the backend contract.
   */
  public static buildErrorPayload(message: string): {
    success: boolean;
    data: null;
    message: string;
  } {
    return { success: false, data: null, message };
  }
}
