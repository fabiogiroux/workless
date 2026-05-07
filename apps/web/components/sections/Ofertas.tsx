import { Card } from "@/components/ui/Card"
import { Hexagon } from "@/components/ui/Hexagon"

const ofertas = [
  {
    title: "Chatbot WhatsApp + IA",
    description: "Atendimento 24/7 sem soar robotizado.",
    bullets: [
      "FAQ inteligente com contexto",
      "Linguagem natural via LLM (Anthropic / OpenAI)",
      "Integração com seu sistema",
    ],
    pricing: "R$ 1.250 a R$ 6.000 (Plano Pioneiro)",
    deadline: "2 a 4 semanas",
  },
  {
    title: "Automação de Operação",
    description: "Planilha vira sistema. Processos rodam no automático.",
    bullets: [
      "Fluxos integrados ponta a ponta",
      "Dashboard simples pra você acompanhar",
      "Dados centralizados, sem duplicação",
    ],
    pricing: "R$ 1.250 a R$ 9.000 (Plano Pioneiro)",
    deadline: "2 a 8 semanas",
  },
  {
    title: "SaaS sob medida",
    description: "Quando seu processo merece virar produto digital próprio.",
    bullets: [
      "Multi-tenant, auth, billing",
      "IA orquestrada por trás",
      "Construído sozinho com Claude Code",
    ],
    pricing: "Sob consulta",
    deadline: "Conversa inicial gratuita",
  },
]

export function Ofertas() {
  return (
    <section id="ofertas" className="py-20 md:py-28 bg-surface-2/30">
      <div className="container-page">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-section-title text-balance">
            O que a <span className="text-primary">Workless</span> entrega
          </h2>
          <p className="text-lg text-foreground-muted mt-4">
            Três caminhos pra tirar o trabalho manual do dia a dia da sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ofertas.map((o) => (
            <Card key={o.title} variant="glass" className="flex flex-col">
              <div className="mb-6">
                <Hexagon size={72} variant="outline" strokeWidth={1.2} />
              </div>

              <h3 className="text-2xl font-bold text-balance">{o.title}</h3>
              <p className="text-foreground-muted mt-2 text-balance">{o.description}</p>

              <ul className="mt-6 space-y-2 text-sm">
                {o.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-border">
                <p className="text-sm font-semibold text-primary">{o.pricing}</p>
                <p className="text-xs text-foreground-muted mt-1 font-mono">{o.deadline}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
