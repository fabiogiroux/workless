# Workless — Site Institucional V1

Agência de IA. Site single page deployado em EasyPanel + workless.com.br.

## Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS + Manrope + JetBrains Mono
- **Hosting:** EasyPanel (mesmo VPS administrator do JNC)
- **DNS / SSL:** Cloudflare proxied
- **Analytics:** Plausible
- **CTAs externos:** Calendly + WhatsApp Business

## Setup local

```bash
cd /home/administrator/projects/workless
npm install
npm run dev          # http://localhost:3000
npm run build        # build standalone
npm run typecheck    # tsc --noEmit
npm run lint         # next lint
```

## Estrutura

```
workless/
├── apps/web/              # Next.js app
│   ├── app/               # App Router pages + layout + OG + sitemap + robots
│   ├── components/        # UI + layout + sections
│   ├── lib/               # constants, utils, seo helpers
│   └── public/            # assets estáticos
└── docs/
    ├── plans/             # branding doc + site brief
    ├── specs/             # spec pipeline (complexity, spec, critique, plan)
    └── stories/           # epic + 10 stories
```

## Deploy EasyPanel

### Pré-requisitos

1. Domínio `workless.com.br` registrado no Registro.br
2. Repo `fabiogiroux/workless` criado no GitHub (privado V1)
3. Acesso ao EasyPanel do VPS administrator

### Configurar EasyPanel

1. Criar novo serviço → Tipo: **Node.js (custom)**
2. Source: **GitHub** → conectar repo `fabiogiroux/workless`
3. Build:
   ```
   Build command: npm install && npm run build
   Start command: npm run start
   Working dir:  apps/web
   Port:         3000
   ```
4. Environment variables: nenhuma obrigatória pra V1
5. Domains: workless.com.br + www.workless.com.br

### DNS Cloudflare

```
A    workless.com.br      62.169.27.232    Proxied (laranja)
A    www.workless.com.br  62.169.27.232    Proxied (laranja)
```

SSL: Full (strict) automático Cloudflare.

### Validação pós-deploy

```bash
# Health check
curl -I https://workless.com.br/

# Headers de segurança devem aparecer:
# - strict-transport-security
# - content-security-policy
# - x-frame-options
# - x-content-type-options

# Lighthouse mobile (target ≥ 90)
# Acessar via Chrome DevTools → Lighthouse → mobile → todas as 4 categorias
```

## Próximos passos pós-deploy

- [ ] Configurar Calendly: criar evento "30 min — Workless"
- [ ] Confirmar telefone WhatsApp em `apps/web/lib/constants.ts`
- [ ] Confirmar URL LinkedIn em `apps/web/lib/constants.ts`
- [ ] Submeter HSTS preload em hstspreload.org após confirmar HTTPS estável
- [ ] Configurar Plausible (criar conta + adicionar domínio)
- [ ] Validar OG preview em LinkedIn / WhatsApp

## Roadmap

**V1 (atual):** Single page institucional + 7 seções
**V2 (após 2 clientes fechados):** páginas separadas /sobre, /casos, /contato + blog build-in-public
**V3 (após 5 clientes):** A/B test, customer dashboard, área de membros pioneiros

## Documentação

- `docs/plans/2026-05-06-workless-design.md` — Branding completo (8 dimensões)
- `docs/plans/2026-05-06-workless-site-brief.md` — Site Brief
- `docs/specs/01-complexity.json` — Assess de complexidade
- `docs/specs/02-spec.md` — Spec formal
- `docs/specs/03-critique.json` — Critique QA
- `docs/specs/04-implementation-plan.yaml` — Plano de implementação
- `docs/stories/epics/epic-workless-v1.md` — Epic
- `docs/stories/WS.{1-10}.story.md` — Stories individuais

---

Construído sozinho com IA orquestrada (Claude Code + agentes especializados AIOX).
