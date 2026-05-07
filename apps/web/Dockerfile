FROM node:20-alpine AS base

# ── deps ──────────────────────────────────────────────────────────────────────
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
COPY apps/web/package.json ./apps/web/
RUN npm ci

# ── builder ───────────────────────────────────────────────────────────────────
FROM base AS builder
WORKDIR /app
# Copy full deps stage (inclui node_modules raiz + apps/web/node_modules)
COPY --from=deps /app ./
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build --workspace=apps/web

# ── runner ────────────────────────────────────────────────────────────────────
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# standalone output — server.js usa __dirname (apps/web/) como base
COPY --from=builder /app/apps/web/.next/standalone ./
# estáticos devem ficar em apps/web/.next/static (relativo ao server.js)
COPY --from=builder /app/apps/web/.next/static ./apps/web/.next/static
# public deve ficar em apps/web/public (relativo ao server.js)
COPY --from=builder /app/apps/web/public ./apps/web/public

EXPOSE 3000
# standalone monorepo: server.js fica em apps/web/ não na raiz
CMD ["node", "apps/web/server.js"]
