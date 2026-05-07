# Story WS.1: Setup repo + Next.js scaffold + Design Tokens

## Status
Draft

## Epic
WORKLESS-V1

## Story
Como **@dev**, eu quero **scaffold inicial do projeto Workless com stack idêntica ao JNC (Next.js 14 + Tailwind + Manrope + dark-first)** com **paleta verde-elétrico + grafite**, para que **as próximas stories tenham fundação sólida pra construir componentes e seções**.

## Acceptance Criteria

1. ✅ Estrutura monorepo: `package.json` root + `apps/web/`
2. ✅ Next.js 14.2 App Router instalado
3. ✅ Tailwind CSS configurado com tokens Workless
4. ✅ TypeScript 5 + tsconfig estrito
5. ✅ Manrope (UI) + JetBrains Mono (técnico) carregadas via `next/font`
6. ✅ `globals.css` com design tokens da paleta Workless (dark + light)
7. ✅ `next.config.mjs` com `output: 'standalone'` + headers de segurança (CSP, HSTS, X-Frame-Options)
8. ✅ `npm run dev` funciona localmente em http://localhost:3000
9. ✅ `tsc --noEmit` passa sem erros
10. ✅ `npm run lint` passa sem erros

## Tasks/Subtasks

- [ ] Criar `package.json` root (workspace)
- [ ] Criar `apps/web/` com Next.js scaffold (`create-next-app`)
- [ ] Adaptar `globals.css` copiando estrutura do JNC + paleta Workless
- [ ] Criar `tailwind.config.ts` com tokens (cores, radius, fontes)
- [ ] Criar `lib/tokens.ts` (tokens TypeScript pra uso em componentes)
- [ ] Configurar `next.config.mjs` (standalone + headers + CSP transitional)
- [ ] Configurar `tsconfig.json` (strict + paths)
- [ ] Adicionar `.gitignore` (node_modules, .next, .env)
- [ ] Criar `app/layout.tsx` com Manrope + dark mode default
- [ ] Criar `app/page.tsx` placeholder ("Workless V1 in progress")
- [ ] Validar: `npm run dev` + `npx tsc --noEmit` + `npm run lint`

## Dev Notes

**Tokens Workless (dark mode primário):**
- `--background: #0A0E0D`
- `--foreground: #F5FFFE`
- `--primary: #00D9A3` (verde-elétrico)
- `--accent: #3B82F6` (azul-elétrico)
- `--surface: rgba(20, 30, 28, 0.50)` (com glass)

**Headers segurança (next.config.mjs):**
```js
{ key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
{ key: 'X-Frame-Options', value: 'SAMEORIGIN' },
{ key: 'X-Content-Type-Options', value: 'nosniff' },
{ key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://assets.calendly.com https://plausible.io; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://plausible.io; frame-src https://calendly.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self'" }
```

## Testing
- `npm run dev` → http://localhost:3000 mostra placeholder com background dark + texto verde-elétrico
- DevTools Network: Manrope + JetBrains carregados
- Tailwind classes funcionam (testar `bg-primary`)

## Dependencies
**Blocked by:** Nenhuma
**Blocks:** WS.2, WS.3...WS.8

## Estimated Effort
3-4 horas

## Change Log

| Date | Event | Actor |
|---|---|---|
| 2026-05-07 | Drafted | Sm (@sm) — YOLO |
