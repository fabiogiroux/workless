# Story WS.9: SEO + Open Graph + Analytics

## Status
Draft

## Epic
WORKLESS-V1

## Story
Como **@dev**, eu quero **SEO completo + OG image + analytics** pra que site seja achável, compartilhável e mensurável.

## Acceptance Criteria

1. ✅ `<title>`: "Workless — Automação e IA sob medida em semanas"
2. ✅ `<meta description>`: "A Workless usa IA pra automatizar processos manuais da sua empresa. Em semanas, sob medida. Conversa de 30 min sem compromisso."
3. ✅ Open Graph:
   - `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:type`
   - Imagem gerada via `app/opengraph-image.tsx` (Next.js dynamic OG)
4. ✅ Twitter Card: `summary_large_image`
5. ✅ Schema.org Organization + LocalBusiness (BR) em JSON-LD
6. ✅ `app/sitemap.ts` gerando sitemap.xml automaticamente
7. ✅ `app/robots.ts` (Allow all)
8. ✅ Canonical URL
9. ✅ Plausible OU GA4 instalado (default Plausible)
10. ✅ Eventos custom trackados: `visit`, `click_cta_primary`, `click_cta_secondary`, `click_pioneiro`

## Tasks/Subtasks

- [ ] `app/layout.tsx` — metadata object com title/description/og
- [ ] `app/opengraph-image.tsx` — gerar OG dinâmico (logo + tagline)
- [ ] `app/sitemap.ts` — listar / como única URL V1
- [ ] `app/robots.ts` — allow all
- [ ] `lib/seo.ts` — helpers (Schema.org JSON-LD)
- [ ] `lib/analytics.ts` — wrapper Plausible/GA com helpers
- [ ] Adicionar tags Plausible em layout.tsx (script async)
- [ ] Validar com Lighthouse SEO ≥ 95

## Dev Notes

**Plausible setup:**
```html
<script defer data-domain="workless.com.br" src="https://plausible.io/js/script.js"></script>
```

Custo Plausible: ~R$50/mês ou plano free 30d trial.

**OG image inicial:** texto "Workless" + tagline + paleta verde-elétrico em fundo grafite.

## Dependencies
**Blocked by:** WS.3, WS.8 (precisa Hero e CTA Final pra extrair texto pro OG)
**Blocks:** WS.10

## Estimated Effort
2-3 horas

## Change Log

| Date | Event | Actor |
|---|---|---|
| 2026-05-07 | Drafted | Sm (@sm) — YOLO |
