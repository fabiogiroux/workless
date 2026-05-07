# Story WS.7: Caso JNC anonimizado + Plano Pioneiro

## Status
Draft

## Epic
WORKLESS-V1

## Story
Como **@dev**, eu quero **mostrar o caso real (JNC anonimizado)** pra validar credibilidade + **Plano Pioneiro** com escassez explícita.

## Acceptance Criteria

### Caso JNC

1. ✅ Headline: "Caso real: SaaS multi-tenant em produção"
2. ✅ Stats em destaque:
   - "9+ famílias pagantes"
   - "Eval IA 96,67%"
   - "6 meses solo com IA orquestrada"
3. ✅ Stack tecnológico em badges: Next.js, Prisma, PostgreSQL, Anthropic, Cloudflare
4. ✅ Disclaimer: "Detalhes do cliente sob NDA. Stack e métricas reais."

### Plano Pioneiro

1. ✅ Banner destacado em verde-elétrico
2. ✅ Headline: "Plano Pioneiro: 3 vagas com 50% off"
3. ✅ Subtítulo: "Estamos abrindo agora. Pioneiros entram com preço especial em troca de poder usar o projeto como exemplo (anonimizado se preferir)."
4. ✅ Indicador escassez: "Vagas restantes: 3 de 3" (V1 hardcoded)
5. ✅ CTA "Quero ser pioneiro" → Calendly com UTM `?utm_source=site&utm_campaign=v1&utm_content=pioneiro`

## Tasks/Subtasks

- [ ] `components/sections/CasoJNC.tsx` — stats + badges + disclaimer
- [ ] `components/sections/PlanoPioneiro.tsx` — banner + indicator + CTA
- [ ] Stats grandes em Manrope ExtraBold 48px primary
- [ ] Badges: pills com cor surface-2

## Dependencies
**Blocked by:** WS.2
**Blocks:** -

## Estimated Effort
3-4 horas

## Change Log

| Date | Event | Actor |
|---|---|---|
| 2026-05-07 | Drafted | Sm (@sm) — YOLO |
