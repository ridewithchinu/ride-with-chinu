# 🏔️ Ride with Chinu

A comprehensive, high-performance React (Vite) single-page application built for the **Ride with Chinu** travel and pilgrimage platform, specifically focusing on Uttarakhand and Char Dham Yatra queries.

---

## 🌟 Capabilities

This application is built as a highly optimized static SPA with several key capabilities:

1. **High-Resolution Asset Loading**
   - The map and destination views handle dozens of high-quality photos (4K hero images, destination pools) seamlessly without stalling the browser.
2. **SEO & Indexing Ready**
   - Pre-configured `sitemap.xml`, `robots.txt`, and Google Search Console verification files exist directly in the `public/` directory ensuring rapid crawler consumption.
3. **Advanced Security Posture**
   - Implements the strict Defence-in-Depth architectural patterns originating from the `.NET` NetworkService architecture, translated for a stateless SPA frontend.
4. **Hardened Docker Distribution**
   - Runs on a zero-privilege Nginx alpine container ensuring robust DOS protection, rate limiting, and filesystem immutability in production.

---

## 🖼️ Image Loading Architecture (Public Folder)

In Vite, assets placed in the `public/` folder are served as-is, meaning they do not get fingerprinted or injected into the Javascript bundle.

### How we handle images:
1. **The `public/images/` boundary** 
   We migrated 129+ regional 4K assets, hero banners, and destination pool images directly into `public/images/`.
2. **The `LazyImage` Component**
   Instead of using raw `<img>` tags, all images use the `src/components/ui/LazyImage.tsx` wrapper. This provides intersection-observer based lazy loading, graceful fallback blurring, and prevents the layout from shifting while the image downloads.
3. **Nginx Unlimited Asset Access**
   By default, a single page might request 50+ image thumbnails simultaneously. Rate-limiting this breaks the UI. 
   Our `nginx.conf` specifically white-lists `/images/` to bypass document rate limits. It attaches a `30-day immutable public` cache header so the user completely avoids re-downloading images during subsequent visits.

---

## 🔒 Security Posture

Inside `src/security/`, we have replicated the core abstract classes from our `.NET` API security layer to act as the standard for future client-side and edge-function implementations:

- **Two-Tier Rate Limiting (`AbstractAccessRateLimiter`)**: Replicates the global IP budget + per-endpoint cooldown logic.
- **Anti-XSS Validation (`AbstractAntiXssGuard`)**: Replicates the 4-tier string character heuristics.
- **Role-Based Authorization (`AbstractAuthorizationContext`)**: Stores the AD App-Role token values for strict Zero-Trust implementations.

**At the Server Level (Nginx):**
The `nginx.conf` actively enforces this right now:
- **Global Rate Limiting (`zone=global_per_ip`)**: 15 requests per minute budget for API/navigation paths.
- **Document Burst Limit (`zone=document_per_ip`)**: Prevents rapid index.html F5-spam crawls.
- **Security Headers**: Injects Strict-Transport-Security, X-Frame-Options (`SAMEORIGIN`), X-Content-Type-Options (`nosniff`), and a strict Content Security Policy (`script-src 'self'`).

---

## 🐳 Docker Deployment

The application runs via a multi-stage Dockerfile that compiles the React application using Node, and serves it using an Nginx worker running completely as a non-root User (UID 101).

### Running Locally

We have configured `docker-compose.yml` to automatically read from a local `.env` file and mount the container to port `8080` (bypassing Windows Port 80 Admin Elevation).

1. Copy the environment file:
   ```bash
   cp .env.example .env
   # Open .env and add your GEMINI_API_KEY
   ```
2. Build and start the hardened container:
   ```bash
   docker compose up -d --build
   ```
3. Test the setup:
   - Application View: `http://localhost:8080`
   - Healthcheck: `http://localhost:8080/health`

### Security Hardening in Docker
- **Read-Only Filesystem**: The `read_only: true` attribute is set. An attacker cannot write a payload to disk.
- **TMPFS Mounts**: Nginx cache and PID execution happens exclusively in RAM (`tmpfs` mounts under `/var/run` and `/var/cache`).
- **Zero Capabilities**: `cap_drop: ALL` ensures the container has zero deep Linux kernel permissions.
- **No Setuid**: `no-new-privileges: true` ensures even if an attacker dropped an executable, they cannot grant it Root privileges.
