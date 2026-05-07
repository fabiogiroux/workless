# Epic: Workless V1 — Site Institucional

**Epic ID:** `WORKLESS-V1`
**Created by:** Morgan (@pm)
**Created at:** 2026-05-07
**Status:** Draft (10 stories drafted, prontas pra @po validate + @dev implement)
**Mode:** YOLO

---

## Overview

Criar e deployar site institucional V1 da Workless — agência de IA pra automação de processos manuais em PMEs. Single page com 7 seções, deploy em EasyPanel, domínio workless.com.br.

---

## Goals

| ID | Goal |
|---|---|
| FR-G1 | Comunicar posicionamento em ≤ 5s |
| FR-G2 | Conduzir ao CTA primário em ≤ 30s |
| FR-G3 | Validar credibilidade via case JNC anonimizado |
| FR-G4 | Plano Pioneiro com escassez (3 vagas) |
| FR-G5 | Lighthouse ≥ 90 mobile, ≥ 95 desktop |

---

## Stories (10)

| ID | Title | Lead | Effort | Status |
|---|---|---|---|---|
| WS.1 | Setup repo + Next.js scaffold + Design Tokens | @dev | 3-4h | Draft |
| WS.2 | Componentes base (Button, Card, Hexagon) + Navbar + Footer | @dev | 4-5h | Draft |
| WS.3 | Seção Hero | @dev | 3-4h | Draft |
| WS.4 | Seção "Para quem é" | @dev | 2-3h | Draft |
| WS.5 | Seção "O que entregamos" (3 ofertas) | @dev | 3-4h | Draft |
| WS.6 | Seção "Como funciona" (3 passos) | @dev | 2-3h | Draft |
| WS.7 | Caso JNC anonimizado + Plano Pioneiro | @dev | 3-4h | Draft |
| WS.8 | CTA Final + Calendly + WhatsApp | @dev | 1-2h | Draft |
| WS.9 | SEO + Open Graph + Analytics | @dev | 2-3h | Draft |
| WS.10 | Deploy EasyPanel + DNS + repo GitHub | @devops | 2-4h | Draft |

**Total esforço:** 25-36 horas (3-5 dias úteis).

---

## Acceptance Criteria do Epic

- ✅ 10 stories Done
- ✅ Lighthouse ≥ 90 mobile (Performance, Accessibility, BP, SEO)
- ✅ Lighthouse ≥ 95 desktop
- ✅ Responsivo OK em 375px / 768px / 1440px
- ✅ CTAs funcionais (Calendly + WhatsApp)
- ✅ Site no ar em workless.com.br com SSL
- ✅ Headers segurança presentes (CSP, HSTS, X-Frame-Options)
- ✅ OG preview validado no LinkedIn / WhatsApp

---

## Stakeholders

- Decision maker: Fabio Giroux
- Architect: Aria
- UX: Uma
- Implementer: Dex
- Validator: Quinn
- Push authority: Gage

---

## References

- `docs/plans/2026-05-06-workless-design.md` — Branding completo
- `docs/plans/2026-05-06-workless-site-brief.md` — Site Brief
- `docs/specs/01-complexity.json` (STANDARD class)
- `docs/specs/02-spec.md` (10 FRs + 12 NFRs + 11 ACs)
- `docs/specs/03-critique.json` (APPROVED 4.6/5)
- `docs/specs/04-implementation-plan.yaml` (estratégia + dependências + gates)

---

## Status Log

| Date | Event | Actor |
|---|---|---|
| 2026-05-07 | Epic criado em Draft. Spec Pipeline 6/6 fases completas. 10 stories drafted. | Morgan (@pm) — YOLO |
