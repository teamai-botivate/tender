# syntax=docker/dockerfile:1

# Debian-based (glibc) images: Next.js/Turbopack's native SWC bindings don't
# ship for musl (Alpine), so alpine fails the build. Use *-slim instead.

# ---- deps: install dependencies only (cached separately from source changes) ----
FROM node:20-slim AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --no-audit --no-fund

# ---- builder: build the Next.js app (frontend pages + /api routes) ----
FROM node:20-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- runner: minimal image that serves both frontend and API from one process ----
FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN groupadd --system --gid 1001 nodejs \
  && useradd --system --uid 1001 --gid nodejs nextjs

# Static assets served directly by the Next.js server
COPY --from=builder /app/public ./public

# Standalone server output (includes only the files needed to run `node server.js`)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

# Render provides PORT at runtime; Next's standalone server reads it automatically.
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
