# Story WS.8: CTA Final + integrações Calendly e WhatsApp

## Status
Draft

## Epic
WORKLESS-V1

## Story
Como **@dev**, eu quero **CTA final grande** que captura quem chegou até o fim do site, integrando Calendly + WhatsApp.

## Acceptance Criteria

1. ✅ Headline grande: "Vamos conversar?"
2. ✅ Subtítulo: "30 minutos. Sem compromisso. Posso te dizer logo se faz sentido pra sua empresa."
3. ✅ Botão primário grande: "Agendar conversa de 30 min" → Calendly com UTM `?utm_source=site&utm_campaign=v1&utm_content=cta_final`
4. ✅ Link secundário: "Ou mande mensagem no WhatsApp" → wa.me/55XXX com mensagem pré-preenchida
5. ✅ Centralizado, ocupa ~50vh, padding generoso
6. ✅ Background: padrão hexagonal mais denso que Hero (5-7% opacidade)

## Tasks/Subtasks

- [ ] `components/sections/CtaFinal.tsx`
- [ ] Botão `<Button variant="primary" size="xl">` (criar size xl em Button se não existe)
- [ ] Mensagem WhatsApp pré-preenchida URL-encoded:
  `https://wa.me/5511999999999?text=Ol%C3%A1!%20Vim%20do%20site%20da%20Workless%20e%20quero%20conversar%20sobre%20automa%C3%A7%C3%A3o.`
- [ ] Aplicar em `app/page.tsx` (última seção antes do Footer)

## Dev Notes

- Calendly URL final: configurar evento "30 min — Workless" na conta Calendly do Fabio
- WhatsApp número final: definir antes do deploy (telefone Workless ou pessoal Fabio?)

## Dependencies
**Blocked by:** WS.2
**Blocks:** WS.9

## Estimated Effort
1-2 horas

## Change Log

| Date | Event | Actor |
|---|---|---|
| 2026-05-07 | Drafted | Sm (@sm) — YOLO |
