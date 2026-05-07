# Workless V1 — Specification

**Project:** Workless Site V1 (single page institucional)
**Authors:** Morgan (@pm) + Uma (@ux-design-expert) + Aria (@architect)
**Date:** 2026-05-07
**Phase:** 4 (Write Spec)
**Mode:** YOLO

---

## 1. Vision

Site institucional single page da Workless — agência de IA pra automação de processos manuais em PMEs. Objetivo: capturar empresário B2B em estado "considerando IA" e converter em conversa de 30 min via Calendly ou WhatsApp.

---

## 2. Goals

| ID | Goal |
|---|---|
| FR-G1 | Comunicar posicionamento Workless em ≤ 5 segundos no primeiro scroll |
| FR-G2 | Conduzir empresário PME a CTA primário ("Agendar conversa") em ≤ 30 segundos |
| FR-G3 | Validar credibilidade via case JNC anonimizado |
| FR-G4 | Criar urgência saudável via Plano Pioneiro (3 vagas) |
| FR-G5 | Performance Lighthouse ≥ 90 mobile, ≥ 95 desktop |

---

## 3. Functional Requirements (FR)

### FR-1 — Hero (acima da dobra)

- FR-1.1 Logo Workless no canto superior esquerdo (wordmark verde-elétrico)
- FR-1.2 Posicionamento V2: "A Workless usa IA pra automatizar processos manuais da sua empresa. Em semanas, sob medida."
- FR-1.3 Sub-headline: Promessa V1 (3ª pessoa) "Você conta o problema. A Workless entrega a proposta em 48h. Em até 4 semanas, sua automação está rodando."
- FR-1.4 CTA primário: botão "Agendar conversa de 30 min" → Calendly
- FR-1.5 CTA secundário (link): "Ou mande mensagem no WhatsApp"
- FR-1.6 Background pattern: hexágonos translúcidos 3-5% opacidade (sutil, não dominante)
- FR-1.7 Glass effect em qualquer card visível
- FR-1.8 Responsivo mobile-first (375px) → desktop (1440px+)

### FR-2 — Para quem é

- FR-2.1 3 personas curtas em cards: "Dono de PME 5-50 funcionários", "Gestor cansado de planilha", "Empresário com processo repetitivo"
- FR-2.2 Cada card tem ícone hexagonal outline + 1 frase + 1 dor concreta
- FR-2.3 Inimigo implícito: "jeito manual antigo"

### FR-3 — O que entregamos (3 ofertas)

- FR-3.1 Card 1: "Chatbot WhatsApp + IA" — atendimento 24/7 sem soar robotizado
- FR-3.2 Card 2: "Automação de Operação" — planilha vira sistema, fluxos integrados
- FR-3.3 Card 3: "SaaS sob medida" — sob consulta (sinaliza upsell, não primary)
- FR-3.4 Cada card: ícone hexagonal outline + título + 2-3 bullets + faixa de preço (Plano Pioneiro)
- FR-3.5 Hexágonos como assinatura visual da seção

### FR-4 — Como funciona (Promessa em 3 passos)

- FR-4.1 3 colunas/cards numerados: 1. Conversa 30 min, 2. Proposta em 48h, 3. Automação em até 4 semanas
- FR-4.2 Linha conectora horizontal entre os passos (desktop) ou vertical (mobile)
- FR-4.3 Cada passo: número + título + descrição curta

### FR-5 — Caso real (JNC anonimizado)

- FR-5.1 Headline: "Caso real: SaaS multi-tenant em produção"
- FR-5.2 Stats em destaque: "9+ famílias pagantes", "Eval IA 96,67%", "6 meses solo com IA orquestrada"
- FR-5.3 Stack tecnológico em badges (Next.js, Prisma, PostgreSQL, Anthropic, Cloudflare)
- FR-5.4 Disclaimer: "Detalhes do cliente sob NDA, dados ilustrativos"

### FR-6 — Plano Pioneiro

- FR-6.1 Banner destacado: "3 vagas com 50% off pros primeiros clientes"
- FR-6.2 Texto explicativo: troca = case study (anonimizado se preferir) + indicação
- FR-6.3 CTA: "Quero ser pioneiro" → mesmo Calendly do CTA primário (com tag UTM)
- FR-6.4 Indicador visual de escassez: "Vagas restantes: 3 de 3"

### FR-7 — CTA Final

- FR-7.1 Headline grande: "Vamos conversar?"
- FR-7.2 Botão primário grande "Agendar conversa de 30 min"
- FR-7.3 Link secundário: WhatsApp wa.me/55XXX
- FR-7.4 Footer minimalista: marca + links sociais (LinkedIn) + ano

### FR-8 — Navbar

- FR-8.1 Sticky no topo (transparente, vira solid no scroll)
- FR-8.2 Logo esquerda + CTA direita "Agendar conversa"
- FR-8.3 Links âncora pra seções: "Para quem é", "Ofertas", "Como funciona", "Caso real"
- FR-8.4 Mobile: hamburger menu

### FR-9 — SEO + Open Graph

- FR-9.1 `<title>`: "Workless — Automação e IA sob medida em semanas"
- FR-9.2 `<meta description>`: posicionamento V3 (155 chars max)
- FR-9.3 OG image 1200×630 (gerada via opengraph-image.tsx Next.js)
- FR-9.4 Schema.org Organization + LocalBusiness BR
- FR-9.5 sitemap.xml + robots.txt
- FR-9.6 Canonical URL

### FR-10 — Analytics + Conversão

- FR-10.1 Plausible ou GA4 instalado
- FR-10.2 Eventos trackados: visit, click_cta_primary, click_cta_secondary, click_pioneiro
- FR-10.3 Calendly com UTM parameters (origem, campaign)
- FR-10.4 WhatsApp link com mensagem pré-preenchida

---

## 4. Non-Functional Requirements (NFR)

| ID | Requirement |
|---|---|
| NFR-1 | Lighthouse Performance ≥ 90 mobile, ≥ 95 desktop |
| NFR-2 | First Contentful Paint ≤ 1.5s |
| NFR-3 | Largest Contentful Paint ≤ 2.5s |
| NFR-4 | Cumulative Layout Shift ≤ 0.1 |
| NFR-5 | Bundle JS inicial ≤ 200KB gzip |
| NFR-6 | Mobile-first (375px → 1440px+) |
| NFR-7 | Acessibilidade WCAG AA (contraste, focus rings, alt texts) |
| NFR-8 | CSP strict (sem unsafe-eval) |
| NFR-9 | HSTS preload + headers de segurança |
| NFR-10 | SEO score Lighthouse ≥ 95 |
| NFR-11 | Suporta dark + light mode (default dark) |
| NFR-12 | Build standalone Next.js pra EasyPanel deploy |

---

## 5. UX Flows (Uma)

### Flow 1 — Visita orgânica

```
Visitante chega via LinkedIn / DM
  ↓
Vê Hero (5s) — entende posicionamento
  ↓
Scroll: Para quem é (10s) — se identifica
  ↓
Scroll: Ofertas (15s) — vê preços Plano Pioneiro
  ↓
Scroll: Como funciona (10s) — entende processo
  ↓
Scroll: Caso JNC (15s) — gera confiança
  ↓
Scroll: Plano Pioneiro (10s) — sente urgência
  ↓
Click CTA: agenda Calendly OU envia WhatsApp
```

### Flow 2 — Visita rápida (skim)

```
Visitante chega → Hero (2s) → CTA primário direto
  ↓
Calendly aberto
```

### Hierarquia visual

1. **Hero** — peso máximo (60-70vh, headline grande)
2. **Plano Pioneiro** — segundo destaque (cor de acento + escassez)
3. **CTA Final** — terceiro (botão grande, espaço generoso)
4. **Ofertas / Como funciona** — peso médio
5. **Para quem é / Caso real** — peso menor (suporte)

### Microinterações

- Hover em cards: aumenta border-color + sombra suave verde-elétrico
- Hover em botões primary: brightness(1.1) + scale(1.02)
- Scroll smooth entre âncoras
- Hexágono pattern: parallax sutil (opcional V1.5)
- Navbar: transparente → solid no scroll com transição 200ms

### Edge cases UX

- JS desabilitado: site funciona (CSS-only, links funcionam)
- Conexão lenta: skeleton ausente (SSR completo entrega HTML)
- Mobile pequeno (320px): tudo legível, CTAs accessíveis
- Print: layout limpo, sem hexágonos de fundo

---

## 6. Constraints (CON)

| ID | Constraint |
|---|---|
| CON-1 | Stack copiada do JNC (Next.js + Tailwind + Manrope) — não adotar nova lib sem necessidade |
| CON-2 | Sem CMS — conteúdo hardcoded em components (Site V1 single page) |
| CON-3 | Sem backend custom — Calendly e WhatsApp são externos |
| CON-4 | Sem auth, sem login, sem cadastro |
| CON-5 | Sem multi-idioma — só PT-BR |
| CON-6 | Sem animações pesadas (Framer Motion mínimo, só fades/scales) |
| CON-7 | Sem vídeo de fundo no hero |
| CON-8 | Cores hardcoded em design tokens (não permitir por usuário) |
| CON-9 | Mobile breakpoint 375px (iPhone SE) — testar mínimo |
| CON-10 | Deploy via push pra master + EasyPanel webhook auto |

---

## 7. Acceptance Criteria (AC)

O site V1 está pronto pra deploy quando:

- AC-1 Todas 7 seções implementadas com conteúdo coerente ao Site Brief
- AC-2 Lighthouse mobile ≥ 90 em Performance, Accessibility, Best Practices, SEO
- AC-3 Lighthouse desktop ≥ 95 em todas as categorias
- AC-4 Responsivo testado em 3 viewports: 375px, 768px, 1440px
- AC-5 CTA primário funciona (abre Calendly em nova aba)
- AC-6 CTA secundário WhatsApp abre wa.me com mensagem pré-preenchida
- AC-7 Open Graph preview validado em LinkedIn / WhatsApp
- AC-8 Headers de segurança presentes (CSP, HSTS, X-Frame-Options)
- AC-9 Sitemap.xml e robots.txt acessíveis
- AC-10 Build sem erros + typecheck + lint OK
- AC-11 Deploy EasyPanel funcionando em workless.com.br com SSL

---

## 8. Out of Scope (V1)

- Blog
- Páginas /sobre, /casos, /contato separadas (V2)
- Chat live
- Login/cadastro
- Pagamento online
- Multi-idioma
- Vídeo de fundo
- Carrossel de depoimentos
- Newsletter signup
- A/B testing
- Cookie consent banner (não usa cookies próprios além de analytics)

---

## 9. References

- `docs/plans/2026-05-06-workless-design.md` — Branding completo (8 dimensões)
- `docs/plans/2026-05-06-workless-site-brief.md` — Site Brief aprovado
- `docs/specs/01-complexity.json` — Assess Aria (STANDARD class)
- JNC Design System (Story 16.4) — base estrutural a copiar/adaptar
- Linear.app, Anthropic.com, Conta Azul, Alura — referências visuais

---

**Status:** APPROVED for Phase 5 (critique) by Morgan + Uma + Aria.
**Next:** Quinn executa critique → Aria gera implementation plan → Morgan cria epic + stories.
