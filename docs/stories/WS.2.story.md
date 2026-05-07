# Story WS.2: Componentes base + Navbar + Footer

## Status
Draft

## Epic
WORKLESS-V1

## Story
Como **@dev**, eu quero **construir a biblioteca mínima de componentes UI (Button, Card, Hexagon) + layout (Navbar, Footer)** para que **as 7 seções subsequentes possam se compor sem reescrever primitivas**.

## Acceptance Criteria

1. ✅ `Button` com variantes `primary` / `secondary` / `ghost` + sizes (sm, md, lg)
2. ✅ `Card` com variante `glass` (backdrop-filter blur + border)
3. ✅ `Hexagon` SVG component com props `size`, `opacity`, `stroke`, `fill`
4. ✅ `Navbar` sticky com logo esquerda + CTA direita; transparente → solid no scroll
5. ✅ `Navbar` mobile: hamburger menu funcional
6. ✅ `Footer` mínimo com marca + LinkedIn + ano (2026)
7. ✅ Todos componentes responsivos
8. ✅ Hover states aplicados (Card hover muda border-color, Button hover muda brightness)
9. ✅ Acessibilidade: focus rings visíveis, aria-labels apropriados

## Tasks/Subtasks

- [ ] `components/ui/Button.tsx` — variantes, sizes, asChild prop
- [ ] `components/ui/Card.tsx` — base + glass variant
- [ ] `components/ui/Hexagon.tsx` — SVG reutilizável
- [ ] `components/layout/Navbar.tsx` — sticky + scroll-aware + mobile menu
- [ ] `components/layout/Footer.tsx` — mínimo
- [ ] Aplicar Navbar e Footer em `app/layout.tsx`
- [ ] Validar visual em viewport 375px / 768px / 1440px

## Dev Notes

**Hexagon SVG path:**
```svg
<polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" />
```

**Navbar scroll trick:** detectar scroll > 50px → adicionar classe `bg-background/80 backdrop-blur-md`.

**Estilo Button primary:**
- `bg-primary text-primary-fg`
- hover: `brightness(1.1) scale(1.02)`
- focus: ring-2 ring-primary

## Testing
- Storybook não obrigatório V1 — testar manualmente em `app/page.tsx`
- Validar hover, focus, mobile menu

## Dependencies
**Blocked by:** WS.1
**Blocks:** WS.3, WS.4, WS.5, WS.6, WS.7, WS.8

## Estimated Effort
4-5 horas

## Change Log

| Date | Event | Actor |
|---|---|---|
| 2026-05-07 | Drafted | Sm (@sm) — YOLO |
