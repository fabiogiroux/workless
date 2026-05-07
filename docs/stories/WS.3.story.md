# Story WS.3: Seção Hero

## Status
Draft

## Epic
WORKLESS-V1

## Story
Como **@dev**, eu quero **construir a Hero do site** — primeiro impacto do visitante — comunicando posicionamento + promessa + CTA primário em ≤ 5 segundos de leitura.

## Acceptance Criteria

1. ✅ Headline: "A Workless usa IA pra automatizar processos manuais da sua empresa."
2. ✅ Sub-headline: "Em semanas, sob medida."
3. ✅ Promessa abaixo (3ª pessoa): "Você conta o problema. A Workless entrega a proposta em 48h. Em até 4 semanas, sua automação está rodando."
4. ✅ CTA primário: botão grande "Agendar conversa de 30 min" → Calendly (`https://calendly.com/workless/30min` placeholder)
5. ✅ Link secundário: "Ou mande mensagem no WhatsApp" → wa.me com mensagem pré-preenchida
6. ✅ Background: hexágonos translúcidos (3-5% opacidade) — usar `Hexagon` component em pattern
7. ✅ Hero ocupa ~70vh desktop, ~80vh mobile
8. ✅ Tipografia: headline em Manrope ExtraBold 56-72px (mobile 36-44px)
9. ✅ Responsivo: 3 viewports validados

## Tasks/Subtasks

- [ ] `components/sections/Hero.tsx`
- [ ] Background pattern com `<Hexagon>` repetidos
- [ ] Botão CTA primário usando `<Button variant="primary" size="lg">`
- [ ] Link WhatsApp com `wa.me/55XXX?text=...` (placeholder telefone)
- [ ] Aplicar em `app/page.tsx`
- [ ] Validar contraste WCAG AA (texto branco em fundo dark)

## Dev Notes

**Calendly URL placeholder:** `https://calendly.com/workless/30min` — substituir após Fabio criar evento.

**WhatsApp telefone placeholder:** `wa.me/5511999999999?text=Ol%C3%A1!%20Vim%20do%20site%20da%20Workless` — Fabio confirma número final pré-deploy.

**Hexagon pattern:** posicionar absolute, distribuir grid 6×4 com opacity 0.03-0.05.

## Dependencies
**Blocked by:** WS.2
**Blocks:** WS.9 (SEO precisa Hero existir)

## Estimated Effort
3-4 horas

## Change Log

| Date | Event | Actor |
|---|---|---|
| 2026-05-07 | Drafted | Sm (@sm) — YOLO |
