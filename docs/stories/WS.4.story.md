# Story WS.4: Seção "Para quem é"

## Status
Draft

## Epic
WORKLESS-V1

## Story
Como **@dev**, eu quero **3 cards de personas** que façam o visitante se identificar imediatamente ("isso aqui é pra mim").

## Acceptance Criteria

1. ✅ Headline da seção: "Pra quem a Workless é"
2. ✅ 3 cards lado-a-lado (desktop) ou stack (mobile):
   - **Persona 1:** "Dono de PME 5-50 funcionários" — Dor: "Sua equipe gasta horas em planilha"
   - **Persona 2:** "Gestor cansado de processo manual" — Dor: "Você sabe que tem como automatizar mas não sabe por onde começar"
   - **Persona 3:** "Empresário com tarefa repetitiva" — Dor: "WhatsApp lotado, atendimento sobrecarregado, e a operação não escala"
3. ✅ Cada card: ícone hexagonal outline (verde-elétrico) + título + frase de dor
4. ✅ Layout: grid 3-col desktop, 1-col mobile
5. ✅ Hover: border do card vira primary

## Tasks/Subtasks

- [ ] `components/sections/ParaQuemE.tsx`
- [ ] 3 cards usando `<Card variant="glass">` + `<Hexagon outline>`
- [ ] Aplicar em `app/page.tsx` (entre Hero e Ofertas)

## Dependencies
**Blocked by:** WS.2
**Blocks:** -

## Estimated Effort
2-3 horas

## Change Log

| Date | Event | Actor |
|---|---|---|
| 2026-05-07 | Drafted | Sm (@sm) — YOLO |
