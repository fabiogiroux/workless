# Story WS.10: Deploy EasyPanel + DNS + Repo GitHub

## Status
Draft

## Epic
WORKLESS-V1

## Story
Como **@devops (Gage)**, eu quero **deployar Workless em produção** com domínio próprio + SSL + CI/CD automático.

## Acceptance Criteria

1. ✅ Domínio `workless.com.br` registrado no Registro.br
2. ✅ Repo `fabiogiroux/workless` criado no GitHub (privado V1)
3. ✅ Código pushado pra `master` no GitHub
4. ✅ EasyPanel: novo serviço Next.js standalone configurado
5. ✅ Webhook GitHub → EasyPanel auto-deploy ativo
6. ✅ DNS Cloudflare: A record + proxy ativo
7. ✅ SSL Cloudflare automático (Full strict)
8. ✅ Site responde 200 em https://workless.com.br
9. ✅ Headers de segurança presentes (testar via curl)
10. ✅ Lighthouse mobile ≥ 90 em prod

## Tasks/Subtasks

- [ ] @devops: registrar workless.com.br no Registro.br (Fabio paga ~R$40)
- [ ] @devops: criar repo `fabiogiroux/workless` no GitHub
- [ ] @devops: `git init` + commit inicial + push pra master
- [ ] @devops: criar serviço EasyPanel novo (mesmo VPS administrator do JNC)
- [ ] @devops: configurar build (Next.js standalone) e env vars (se houver)
- [ ] @devops: configurar webhook GitHub → EasyPanel
- [ ] @devops: DNS Cloudflare (A record apontando pro IP origem 62.169.27.232)
- [ ] @devops: SSL: ativar Cloudflare proxy (laranja) + Full Strict
- [ ] @devops: validar deploy via curl + browser
- [ ] @qa: rodar Lighthouse mobile + desktop em prod
- [ ] @qa: validar OG preview no LinkedIn e WhatsApp
- [ ] Criar `README.md` com guia de setup local + deploy

## Dev Notes

**EasyPanel service:**
- Type: Next.js (ou Node)
- Build: `npm install && npm run build`
- Start: `npm run start`
- Port: 3000

**Cloudflare DNS:**
```
A    workless.com.br      62.169.27.232    Proxied (laranja)
A    www.workless.com.br  62.169.27.232    Proxied (laranja)
```

**SSL:** Full strict (Cloudflare → origem com cert válido).

## Dependencies
**Blocked by:** WS.9 + gate_qa_passed (Lighthouse ≥ 90)
**Blocks:** Nenhuma

## Estimated Effort
2-4 horas (depende de tempo de DNS propagar)

## Change Log

| Date | Event | Actor |
|---|---|---|
| 2026-05-07 | Drafted | Sm (@sm) — YOLO |
