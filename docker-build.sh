#!/usr/bin/env sh
# ─────────────────────────────────────────────────────────────────────────────
# docker-build.sh — Secure build + run helper for Ride with Chinu
#
# Usage:
#   ./docker-build.sh            → build + run (interactive)
#   ./docker-build.sh --push     → build + push to registry
#   GEMINI_API_KEY=xxx ./docker-build.sh
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

IMAGE_NAME="ride-with-chinu"
IMAGE_TAG="${IMAGE_TAG:-latest}"
REGISTRY="${REGISTRY:-}"   # set to your registry, e.g. ghcr.io/your-org

# ── 1. Verify required build arg ─────────────────────────────────────────────
if [ -z "${GEMINI_API_KEY:-}" ]; then
  echo "ERROR: GEMINI_API_KEY env var is required for the build." >&2
  exit 1
fi

FULL_IMAGE="${REGISTRY:+$REGISTRY/}${IMAGE_NAME}:${IMAGE_TAG}"

echo "==> Building ${FULL_IMAGE} ..."

# ── 2. Build — secrets stay in build args, never persist in layers ────────────
docker build \
  --target production \
  --build-arg GEMINI_API_KEY="${GEMINI_API_KEY}" \
  --build-arg APP_URL="${APP_URL:-http://localhost}" \
  --label "build.date=$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
  --label "build.sha=$(git rev-parse --short HEAD 2>/dev/null || echo unknown)" \
  --no-cache \
  -t "${FULL_IMAGE}" \
  .

echo "==> Build complete: ${FULL_IMAGE}"

# ── 3. Scan for vulnerabilities (requires docker scout or trivy) ──────────────
if command -v trivy >/dev/null 2>&1; then
  echo "==> Scanning image with Trivy ..."
  trivy image --exit-code 1 --severity HIGH,CRITICAL "${FULL_IMAGE}"
elif docker scout version >/dev/null 2>&1; then
  echo "==> Scanning image with Docker Scout ..."
  docker scout cves "${FULL_IMAGE}"
else
  echo "WARN: No vulnerability scanner found. Install trivy or docker scout." >&2
fi

# ── 4. Optionally push ───────────────────────────────────────────────────────
if [ "${1:-}" = "--push" ]; then
  echo "==> Pushing ${FULL_IMAGE} ..."
  docker push "${FULL_IMAGE}"
fi

echo "==> Done. Run with: docker compose up -d"
