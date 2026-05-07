const stats = [
  { value: "9+", label: "famílias pagantes" },
  { value: "96,67%", label: "eval IA aprovado" },
  { value: "6 meses", label: "solo com IA orquestrada" },
]

const stack = ["Next.js", "Prisma", "PostgreSQL", "Anthropic", "Cloudflare"]

export function CasoJNC() {
  return (
    <section id="caso-real" className="py-20 md:py-28 bg-surface-2/30">
      <div className="container-page">
        <div className="max-w-3xl mb-10 md:mb-14">
          <p className="text-sm font-mono text-primary uppercase tracking-wider mb-4">
            Caso real
          </p>
          <h2 className="text-section-title text-balance">
            SaaS multi-tenant em produção, construído sozinho
          </h2>
          <p className="text-lg text-foreground-muted mt-4 text-balance">
            Plataforma de gestão financeira familiar com chatbot IA via WhatsApp,
            cobrança recorrente e infraestrutura própria. Tudo construído com IA orquestrada (Claude Code + agentes especializados).
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

        <p className="text-sm text-foreground-muted/70 italic">
          Detalhes do cliente sob NDA. Stack e métricas reais.
        </p>
      </div>
    </section>
  )
}
