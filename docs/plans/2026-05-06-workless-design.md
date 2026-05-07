# Workless — Design de Marca (Brainstorm consolidado)

**Data:** 2026-05-06
**Status:** Branding fechado nas 8 dimensões. Próximo passo: site + material de venda.

---

## 1. Identidade

```yaml
nome: Workless
categoria: Agência de IA
descricao_curta: "Automação e IA sob medida. Em semanas."
fundador: Fabio Giroux
tipo_negocio: agência de serviços (consultoria + execução)
modelo_inicial: Plano Pioneiro (50% off pros 3 primeiros clientes)
```

---

## 2. Posicionamento

### Versão Documento (interno)

> A Workless é uma agência de IA pra empresário de PME (5-50 funcionários) que tem processos manuais consumindo tempo da equipe — atendimento WhatsApp, planilhas, fluxos repetitivos. Automatizamos isso usando IA, sob medida, com entrega em semanas. Atendemos quem não cabe no orçamento de uma agência grande nem quer carregar o custo de um dev CLT.

### Versão Site / Hero

> **A Workless usa IA pra automatizar processos manuais da sua empresa.**
> **Em semanas, sob medida.**

### Versão DM / WhatsApp / Bio

> **Automatizo processos manuais com IA. Sob medida, em semanas.**

---

## 3. Promessa

### Versão site (3ª pessoa)

> **Você conta o problema. A Workless entrega a proposta em 48h.**
> **Em até 4 semanas, sua automação está rodando.**

### Versão DM/cold (1ª pessoa)

> **Você me conta o problema. Em 48h te entrego a proposta.**
> **Em até 4 semanas, automação rodando.**

---

## 4. Inimigo

**O que Workless luta contra:** o jeito manual antigo de operar — empresas rodando em planilha + atendimento no braço. Dia a dia que toma o tempo da equipe e não escala.

---

## 5. Manifesto

> **Tempo é o ativo mais escasso de qualquer empresa.**
> **Cada hora que sua equipe gasta em planilha e tarefa repetitiva é uma hora a menos pensando no negócio.**
> **A Workless existe pra devolver esse tempo.**

---

## 6. Tom de voz

### 5 atributos

| Atributo | Significado |
|---|---|
| **Direto** | Vai ao ponto, sem rodeio |
| **Profissional** | Trata cliente como adulto, parceiro de negócio |
| **Humano** | Não robotizado, reconhece dor real |
| **Pragmático** | Foca em entrega, não em hype |
| **Confiante** | Sem exagero, mas com segurança |

### Vocabulário SIM ✅ / NÃO ❌

| ✅ Workless DIZ | ❌ Workless NÃO DIZ |
|---|---|
| Automatizar | Soluções (genérico) |
| Processos manuais | Operação (frio, vago) |
| Tarefas repetitivas | Otimização (jargão) |
| Em semanas | Em breve / rapidamente |
| Sob medida | Customizado (estrangeirismo) |
| Sua empresa | Vocês (genérico) |
| Construímos / entregamos | Implementamos (técnico) |
| Workless (institucional) | Nós, da Workless (formal demais) |
| Eu (DM pessoal) | Cara / véi / mano (informal) |
| Resultado | Disrupção / inovação (clichê) |
| IA / Inteligência Artificial | AI-powered (gringo) |

---

## 7. Identidade Visual

### Direção macro

- **Modo:** Dark-first (modo claro disponível)
- **Vibe:** IA tech moderno, minimalista, profissional sem ser frio
- **Inspiração:** Linear-meets-Anthropic com toques Alura (hexágonos sutis)
- **Base estrutural:** copia tokens do JNC Design System (Tailwind + glass effect + design tokens)

### Paleta — Verde-elétrico + Grafite

#### Dark mode (primário)

| Token | Cor | Uso |
|---|---|---|
| `--background` | `#0A0E0D` | Fundo principal |
| `--surface` | `rgba(20, 30, 28, 0.50)` | Cards (com glass effect) |
| `--surface-2` | `#101615` | Cards opacos |
| `--surface-3` | `#1A2220` | Hover state |
| `--foreground` | `#F5FFFE` | Texto principal |
| `--foreground-muted` | `#7A9890` | Texto secundário |
| `--primary` | `#00D9A3` | CTA, botões, links |
| `--primary-fg` | `#0A0E0D` | Texto sobre primary |
| `--accent` | `#3B82F6` | Links, hover, info |
| `--accent-muted` | `rgba(59, 130, 246, 0.12)` | Background de hover |
| `--border` | `rgba(0, 217, 163, 0.20)` | Bordas |
| `--ring` | `#00D9A3` | Focus ring |
| `--positive` | `#10B981` | Sucesso |
| `--negative` | `#EF4444` | Erro |
| `--neutral` | `#3B82F6` | Info |
| `--warning` | `#F59E0B` | Aviso |

#### Light mode (secundário)

| Token | Cor | Uso |
|---|---|---|
| `--background` | `#FAFCFB` | Fundo |
| `--surface` | `rgba(255, 255, 255, 0.70)` | Cards |
| `--foreground` | `#0A2924` | Texto |
| `--primary` | `#00B488` | CTA (versão mais escura pra contraste) |
| `--accent` | `#2563EB` | Links |

### Tipografia

| Uso | Fonte | Quando |
|---|---|---|
| **UI principal** | Manrope (sans-serif) | Hero, body, headers, botões |
| **Mono / técnico** | JetBrains Mono ou Geist Mono | Stats, números, código curto, acento técnico |

Tamanhos sugeridos:
- Hero: 56-72px (mobile 36-44px), Manrope ExtraBold
- H1: 40-48px, Manrope Bold
- H2: 28-32px, Manrope Bold
- Body: 16-18px, Manrope Regular
- Caption: 14px, Manrope Medium
- Mono: 13-15px, JetBrains Mono

### Border-radius

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | 8px | Inputs, botões pequenos |
| `--radius-md` | 12px | Cards padrão |
| `--radius-lg` | 16px | Cards grandes, modals |
| `--radius-pill` | 999px | Pills, badges |

### Hexágonos — uso

Aplicar **com parcimônia** pra evitar gimmick. 3 contextos:

1. **Ícones de feature/oferta**: cada oferta dentro de hexágono outline com 1px stroke verde-elétrico
2. **Pattern sutil de fundo**: hexágonos translúcidos (3-5% opacidade) em seções específicas (hero secundário, "como funciona"). Inspiração: Alura, circuit board.
3. **Cards de cases**: cantos sutilmente chanfrados (não hexágono completo) pra diferenciar visualmente sem ser exagero

NÃO usar:
- Hexágonos coloridos vibrantes
- Tudo hexagonal (cards, botões, fotos) — vira poluição

### Glass effect

Manter padrão JNC:
- Surface translúcida com `backdrop-filter: blur(12px)`
- Border 1px com `--border`
- Hover: aumenta intensidade do border + sombra suave verde-elétrico

### Componentes-chave

#### Botão primário
```css
background: var(--primary)         /* #00D9A3 */
color: var(--primary-fg)           /* #0A0E0D — texto preto sobre verde */
border-radius: var(--radius-sm)
padding: 12px 24px
font-weight: 600
hover: brightness(1.1) + scale(1.02)
```

#### Card padrão (com glass)
```css
background: var(--surface)
backdrop-filter: blur(12px)
border: 1px solid var(--border)
border-radius: var(--radius-md)
padding: 24px
hover: border-color: var(--primary)
```

#### Hero
```
Background: --background
Texto principal: 56-72px Manrope ExtraBold, --foreground
Subtexto: 18-20px Manrope Medium, --foreground-muted
CTA: botão primary
Background pattern (opcional): hexágonos sutis 3% opacidade
```

---

## 8. Aplicação prática — onde cada coisa aparece

| Local | O que mostra |
|---|---|
| **Hero do site** | Posicionamento V2 + CTA |
| **Logo no topo** | "Workless" wordmark verde-elétrico (sem ícone) |
| **Bio LinkedIn** | Posicionamento V3 + Manifesto curto |
| **WhatsApp Business "sobre"** | Posicionamento V3 |
| **Apresentação PDF** | Manifesto (slide 1) + Posicionamento (slide 2) + Ofertas (slide 3-4) + Caso JNC (slide 5) + Plano Pioneiro (slide 6) |
| **DM cold** | Promessa V1 (1ª pessoa) |
| **E-mail outbound** | Promessa V1 + caso resumido |
| **Página "Sobre"** | Manifesto completo + Inimigo + por que Workless existe |
| **Página "Como funciona"** | Promessa em passo a passo numerado |

---

## 9. Stack de ofertas (recap rápido)

### Pacotes — Chatbot WhatsApp + IA

| Pacote | Pioneiro (50% off) | Preço cheio | Prazo |
|---|---|---|---|
| Atendimento Express | R$1.250-2.000 | R$2.500-4.000 | 2 sem |
| Conversacional IA ⭐ | R$2.250-3.500 | R$4.500-7.000 | 3 sem |
| Operacional | R$3.500-6.000 | R$7.000-12.000 | 4 sem |

Retainer pós-entrega: R$250-750/mês (pioneiro) / R$500-1.500/mês (cheio)

### Pacotes — Automação de Operação

| Pacote | Pioneiro | Preço cheio | Prazo |
|---|---|---|---|
| Automação Pontual | R$1.250-2.500 | R$2.500-5.000 | 2 sem |
| Pacote Operacional ⭐ | R$2.500-5.000 | R$5.000-10.000 | 4 sem |
| Sistema Interno | R$5.000-9.000 | R$10.000-18.000 | 6-8 sem |

Retainer: R$500-1.500/mês (pioneiro) / R$1.000-3.000/mês (cheio)

### Upsell — SaaS sob medida (após cliente já contratou)

| Pacote | Pioneiro | Preço cheio | Prazo |
|---|---|---|---|
| MVP SaaS | R$7.500-17.500 | R$15.000-35.000 | 8-12 sem |

---

## 10. Plano Pioneiro

> "Estou abrindo a Workless agora. Tô com **3 vagas no Plano Pioneiro** — 50% de desconto na primeira contratação. Em troca, você me ajuda virando exemplo de cliente. Posso anonimizar se preferir. Depois desses 3, preço volta pra tabela normal."

**Critério de saída:** após 3 clientes pioneiros fechados, preço sobe pra tabela cheia. Pioneiro só pra os primeiros 3 reais.

---

## 11. Caso real disponível (anonimizado)

> SaaS de gestão financeira familiar multi-tenant em produção. 9+ famílias pagantes (R$33,90/mês recurring). Chatbot IA via WhatsApp processando mensagens 24/7 (eval 96,67%). Trial Netflix-style com cobrança automática. Stack: Next.js + Prisma + PostgreSQL + Anthropic + Cloudflare. Construído sozinho em ~6 meses usando IA orquestrada (Claude Code + agentes especializados).

---

## 12. Status e próximos passos

### Fechado nesta sessão (2026-05-06)

- ✅ Posicionamento (3 versões)
- ✅ Promessa (2 variantes)
- ✅ Inimigo
- ✅ Manifesto
- ✅ Tom de voz + vocabulário SIM/NÃO
- ✅ Identidade visual (paleta, tipografia, hexágonos, componentes)
- ✅ Stack de ofertas + pricing pioneiro/cheio
- ✅ Plano Pioneiro estruturado
- ✅ Caso JNC (anonimizado) pronto pra usar

### Próximo passo (próxima sessão)

1. **Site Workless** — versão lean primeiro (Notion publicado em 1 dia) → versão completa (Next.js próprio em 3-5 dias)
2. **LinkedIn pessoal atualizado** com novo posicionamento
3. **WhatsApp Business** com foto + bio + catálogo
4. **Apresentação PDF 1 página** pra mandar prospects
5. **Vídeo demo curto** (3-5 min mostrando JNC + processo)
6. **Lista de 50 contatos próximos** pra prospect Canal #1

### Frase pra retomar próxima sessão

```
"Orion, retoma branding Workless.
Doc fechado em docs/plans/2026-05-06-workless-design.md.
Vamos pra próximo passo: criar site Workless lean (Notion ou Next próprio)."
```

---

**End of design doc.**
