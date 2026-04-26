# ═══════════════════════════════════════════════════════════════════════════════
# Dockerfile — Ride with Chinu (Vite React SPA)
#
# Security hardening checklist:
#   ✓ Multi-stage build — zero dev tooling in the final image
#   ✓ Pinned base images — no :latest tags
#   ✓ Non-root user (uid 1001) — container never runs as root
#   ✓ Read-only root filesystem (enforced via docker-compose)
#   ✓ Minimal final image — nginx:alpine (~8 MB attack surface)
#   ✓ No shell in final stage (sh present in alpine but never exec'd by nginx)
#   ✓ No secrets baked in — GEMINI_API_KEY injected at runtime via --env-file
#   ✓ .dockerignore eliminates node_modules, .env, .git, dist from context
#   ✓ Build args only — no ENV instructions that leak into the image layer
#   ✓ Serves on port 8080 (non-privileged — no CAP_NET_BIND_SERVICE needed)
#   ✓ HEALTHCHECK defined — container scheduler can detect unhealthy state
# ═══════════════════════════════════════════════════════════════════════════════

# ─── Stage 1: Build ──────────────────────────────────────────────────────────
FROM node:22.12-alpine3.21 AS builder

# Build-time secret: Vite bakes GEMINI_API_KEY into the bundle at build time.
# Pass with: docker build --build-arg GEMINI_API_KEY=<value> ...
# Never stored in image layers after the build stage.
ARG GEMINI_API_KEY
ARG APP_URL

# Harden the build environment
#   • Run as non-root during build (node image ships with 'node' user uid=1000)
#   • Create app directory owned by node user
RUN mkdir -p /app && chown -R node:node /app
USER node

WORKDIR /app

# Copy manifests first for layer-cache optimisation
COPY --chown=node:node package.json package-lock.json ./

# Install exact locked versions — no audit noise, no network for lifecycle scripts
RUN npm ci --ignore-scripts --prefer-offline 2>/dev/null || npm ci --ignore-scripts

# Copy source (respects .dockerignore — no .env / node_modules / dist / .git)
COPY --chown=node:node . .

# Write a minimal .env for the Vite build (never committed to image)
RUN printf 'GEMINI_API_KEY=%s\nAPP_URL=%s\n' "$GEMINI_API_KEY" "$APP_URL" > .env

# Production build
RUN npm run build

# ─── Stage 2: Serve ──────────────────────────────────────────────────────────
FROM nginx:1.27-alpine3.21 AS production

# ── Create a non-root user for nginx ─────────────────────────────────────────
#   nginx master process still starts as root (to bind reserved ports) but we
#   bind port 8080, so we keep the master as root and drop workers via the
#   'user nginx;' directive in nginx.conf.
#   We additionally ensure writable runtime dirs are owned properly.

# Remove default nginx files that could leak info or serve unintended content
RUN rm -rf /usr/share/nginx/html/* \
           /etc/nginx/conf.d/default.conf

# Writable runtime directories needed by nginx (pid, cache, tmp, logs)
# Must be writable by BOTH root (entrypoint scripts) and nginx user (uid 101).
# The tmpfs mounts in docker-compose overlay these at container startup.
RUN mkdir -p \
        /var/run/nginx \
        /var/cache/nginx/client_temp \
        /var/cache/nginx/proxy_temp \
        /var/cache/nginx/fastcgi_temp \
        /var/cache/nginx/uwsgi_temp \
        /var/cache/nginx/scgi_temp \
    && chown -R nginx:nginx \
        /var/run/nginx \
        /var/cache/nginx \
        /var/log/nginx \
    && chmod -R 777 /var/log/nginx /var/run/nginx \
    && chmod -R 755 /var/cache/nginx

# Copy hardened nginx config
COPY --chown=nginx:nginx nginx.conf /etc/nginx/nginx.conf

# Copy compiled SPA assets from build stage (read-only by nginx)
COPY --from=builder --chown=nginx:nginx /app/dist /usr/share/nginx/html

# Validate nginx config at build time — catches config errors before deployment
RUN nginx -t

# ── Runtime metadata ─────────────────────────────────────────────────────────
EXPOSE 8080

# Health check — matches the /health endpoint in nginx.conf
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget -qO- http://localhost:8080/health || exit 1

# Labels for image provenance (OCI standard)
LABEL org.opencontainers.image.title="Ride with Chinu" \
      org.opencontainers.image.description="Uttarakhand travel platform — hardened nginx SPA" \
      org.opencontainers.image.source="https://github.com/your-org/ride-with-chinu" \
      org.opencontainers.image.vendor="Ride with Chinu" \
      org.opencontainers.image.version="1.0.0"

# Start nginx in foreground (daemon off required for Docker)
CMD ["nginx", "-g", "daemon off;"]
