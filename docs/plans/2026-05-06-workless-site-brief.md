# Workless — Site Brief

**Data:** 2026-05-06
**Status:** Aprovado pelo Fabio. Pronto pra entrar em SDC (Story Development Cycle).
**Próximo:** Sitemap + Wireframe → Copy → Build via SDC → Deploy EasyPanel
**Doc relacionado:** `2026-05-06-workless-design.md` (branding completo)

---

## 1. Objetivo do site

| Tipo | Objetivo |
|---|---|
| **Primário** | Gerar lead qualificado: empresário PME → conversa de 30 min agendada |
| **Secundário** | Validar credibilidade — "ele entrega de verdade, não é mais um wrapper de GPT" |
| **Não-objetivo (V1)** | Vender direto online. Compra requer conversa humana. |

---

## 2. Audiência (ICP)

| Perfil | Detalhes |
|---|---|
| **Quem** | Empresário de PME 5-50 funcionários, Brasil |
| **Estado mental** | Sente dor de processo manual, ouviu falar de IA, está em fase de "considerar" |
| **Orçamento** | R$3-15k pra primeiro projeto (cabe Plano Pioneiro) |
| **Atitude** | Cético com hype de IA, quer prova concreta de entrega |

---

## 3. Páginas — V1 (Single Page)

### Estrutura recomendada pra começar

```
/  (home, single page scrollável)
├── 1. Hero
│   ├── Posicionamento V2 (hero principal)
│   ├── Promessa V1 (subtítulo curto)
│   └── CTA primário: "Agendar conversa de 30 min"
│
├── 2. Para quem é
│   ├── 3 personas curtas: PME 5-50 func, dono cansado de planilha,
│   │   gestor que perde equipe em tarefa repetitiva
│   └── Inimigo implícito: "jeito manual antigo"
│
├── 3. O que entregamos
│   ├── Card 1: Chatbot WhatsApp + IA (com hexágono outline)
│   ├── Card 2: Automação de Operação (com hexágono outline)
│   └── Card 3: SaaS sob medida (sob consulta)
│
├── 4. Como funciona (Promessa em 3 passos)
│   ├── 1. Conversa de 30 min
│   ├── 2. Proposta em 48h
│   └── 3. Automação rodando em até 4 semanas
│
├── 5. Caso real (JNC anonimizado)
│   ├── Resumo: SaaS multi-tenant, 9+ famílias, Chatbot IA WhatsApp eval 96,67%
│   ├── Stack tecnológico
│   └── "Construído sozinho em 6 meses com IA orquestrada"
│
├── 6. Plano Pioneiro
│   ├── Headline: "3 vagas com 50% off pros primeiros clientes"
│   ├── Como funciona: 50% off em troca de case study + indicação
│   └── CTA secundário: "Quero ser pioneiro"
│
└── 7. CTA Final
    ├── "Vamos conversar?" (botão grande)
    ├── Link Calendly
    └── Botão WhatsApp direto
```

**Tempo de build estimado:** 5-7 dias (1 dia/seção + integração + deploy)

### V2 (depois de V1, quando tiver 2+ casos)

```
/             (home enxuta)
/sobre        (manifesto + Fabio + processo)
/casos        (JNC + Workless project #1, #2)
/ofertas      (detalhe das 3 ofertas)
/contato      (form + WhatsApp + Calendly)
```

---

## 4. Funil de conversão

```
Origem do tráfego
   ↓ LinkedIn DM / Indicação / Cold WhatsApp
   ↓
Visita ao site (10-30s pra entender)
   ↓
Hero comunica posicionamento → "esse cara faz X"
   ↓
Scroll → Como funciona + Caso JNC (gera confiança)
   ↓
Plano Pioneiro (gatilho de escassez: 3 vagas)
   ↓
CTA primário: "Agendar conversa de 30 min"
   ↓
Calendly (preferencial) OU WhatsApp direto
   ↓
Reunião 30 min → Proposta em 48h → Cliente
```

---

## 5. Calls to action

| CTA | Texto | Onde aparece |
|---|---|---|
| **Primário** | "Agendar conversa de 30 min" | Hero, fim do site |
| **Secundário** | "Mandar mensagem no WhatsApp" | Rodapé, navegação fixa |
| **Pioneiro** | "Quero ser pioneiro" | Seção Plano Pioneiro |

---

## 6. Métricas de sucesso (primeiros 60 dias)

| Métrica | Meta |
|---|---|
| Visitas/mês | 100-300 (orgânico + LinkedIn + DM) |
| Click no CTA primário | 5-15% das visitas |
| Reuniões agendadas | 5-10/mês |
| Propostas enviadas | 3-5/mês |
| Clientes fechados | 1-2/mês |
| Conversão visit → cliente | ~1-2% |

---

## 7. Restrições técnicas

| Item | Decisão |
|---|---|
| **Stack** | Next.js 14 + Tailwind + TypeScript (mesmo JNC) |
| **UI Components** | Reutiliza Design System JNC (tokens + glass + Manrope) |
| **Paleta** | Verde-elétrico `#00D9A3` + Grafite + dark-first (do design doc) |
| **Hosting** | EasyPanel (mesmo VPS administrator, novo serviço) |
| **Domínio** | workless.com.br (registrar via Registro.br, ~R$40/ano) |
| **CDN/SSL** | Cloudflare proxied (igual JNC) |
| **Analytics** | Plausible (~R$50/mês) ou Google Analytics free |
| **Forms/Calendly** | Calendly free + WhatsApp Business |
| **Email transacional** | Resend (igual JNC, mesma API key se mesma org) |
| **Prazo V1** | 5-7 dias úteis |
| **Repo Git** | Novo repo `fabiogiroux/workless` no GitHub |
| **CI/CD** | Push → EasyPanel deploy automático |

---

## 8. Referências visuais

| Referência | O que pegar |
|---|---|
| **Linear.app** | Minimalismo, dark mode, sans-serif moderna |
| **Anthropic.com** | Tom IA-themed, tipografia, hierarquia de informação |
| **Conta Azul** | Profissional + acessível, vibe BR |
| **Alura** (pedido Fabio) | Hexágonos sutis, identidade IA |
| **Stripe.com** | Estrutura de seções, animações sutis, legibilidade |
| **JNC LP** (sua) | Glass effect, caustic blobs, padrão de cards |

---

## 9. O que NÃO tem (V1)

- ❌ Blog (vem depois — build in public)
- ❌ Chat live
- ❌ Login/cadastro
- ❌ Pagamento online (compra requer conversa)
- ❌ Multi-idioma (só PT-BR)
- ❌ Animações pesadas (degrada performance)
- ❌ Vídeo de fundo no hero
- ❌ Carrossel de depoimentos (sem volume ainda)
- ❌ Newsletter signup (sem audiência ainda)

---

## 10. SEO básico (V1)

| Item | Implementação |
|---|---|
| Meta tags | `<title>` + `<meta description>` |
| Open Graph | Preview pra WhatsApp/LinkedIn (imagem 1200×630) |
| Sitemap.xml | Auto-gerado pelo Next.js |
| robots.txt | Allow all |
| Schema.org | Organization + LocalBusiness (BR) |
| Pagespeed | Meta: Lighthouse > 90 mobile |
| Mobile-first | Obrigatório (60%+ tráfego BR é mobile) |
| HTTPS | Cloudflare automático |

---

## 11. Próximos documentos (após este Brief)

| # | Documento | Quando |
|---|---|---|
| 1 | **Sitemap + Wireframe** | Próxima sessão |
| 2 | **Copy doc** (texto de cada seção) | Após wireframe |
| 3 | **Component library mapping** (quais components do JNC reutiliza) | Antes do build |
| 4 | **Implementation plan** (SDC stories) | Antes do build |
| 5 | **Deploy guide EasyPanel** | Antes do deploy |

---

## 12. Decisões registradas

- ✅ V1 single page primeiro, V2 expansão depois de fechar 2+ clientes
- ✅ Stack copiada do JNC (Next.js + Tailwind + Manrope + glass)
- ✅ Paleta diferente (verde-elétrico + grafite vs teal + roxo do JNC)
- ✅ Hosting EasyPanel mesmo VPS
- ✅ Domínio próprio (workless.com.br)
- ✅ Calendly + WhatsApp como conversão (não form custom)

---

## 13. Status e próximo passo

```yaml
site_brief: ✅ aprovado 2026-05-06
proximo_documento: Sitemap + Wireframe
proximo_processo: SDC (Story Development Cycle) pra criar e deployar site
prazo_total_v1: 5-7 dias úteis (após começar SDC)
deploy_target: EasyPanel (workless.com.br)
```

### Frase pra retomar próxima sessão

```
"Orion, retoma Workless. Site Brief aprovado em
docs/plans/2026-05-06-workless-site-brief.md.
Quero rodar o fluxo SDC pra criar o site e deployar no EasyPanel."
```

---

**End of Site Brief.**
