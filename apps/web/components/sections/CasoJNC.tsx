const stats = [
  { value: "9+", label: "famílias pagantes" },
  { value: "96,67%", label: "aprovação na avaliação da IA" },
  { value: "6 meses", label: "do zero ao ar, solo com IA" },
]

const stack = ["Next.js", "Prisma", "PostgreSQL", "Anthropic", "Cloudflare"]

export function CasoJNC() {
  return (
    <section id="caso-real" className="py-20 md:py-28 bg-surface-2/30">
      <div className="container-page">
        <div className="max-w-3xl mb-10 md:mb-14">
          <p className="text-sm font-mono text-primary uppercase tracking-wider mb-4">
            O que eu construí antes de abrir a Workless
          </p>
          <h2 className="text-section-title text-balance">
            SaaS multi-tenant em produção, construído sozinho
          </h2>
          <p className="text-lg text-foreground-muted mt-4 text-balance">
            Em 6 meses, construí do zero uma plataforma de gestão financeira para casais — com chatbot de IA via WhatsApp, cobrança recorrente, multi-tenant e infraestrutura própria. Sozinho. Com IA orquestrada.
          </p>
          <p className="text-lg text-foreground-muted mt-3 text-balance">
            O chatbot responde perguntas financeiras, registra gastos e envia resumos — tudo por WhatsApp, sem abrir o app.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-primary pl-5">
              <div className="text-kpi font-extrabold text-primary leading-none">
                {s.value}
              </div>
              <p className="text-foreground-muted mt-2">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {stack.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-3 py-1.5 rounded-pill bg-surface-3 border border-border text-foreground-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <p className="text-sm text-foreground-muted/70">
          Cliente sob NDA. Stack e métricas reais.{" "}
          <span className="text-primary font-medium">Isso é o que a Workless entrega pra você.</span>
        </p>
      </div>
    </section>
  )
}
