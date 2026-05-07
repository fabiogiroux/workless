import { Card } from "@/components/ui/Card"
import { Hexagon } from "@/components/ui/Hexagon"
import { whatsappLink } from "@/lib/constants"

const ofertas = [
  {
    title: "Seu atendimento no automático, 24h por dia",
    description: "WhatsApp respondendo, qualificando e agendando — mesmo quando você está dormindo.",
    bullets: [
      "IA treinada com as informações da sua empresa",
      "Linguagem natural (não parece robô)",
      "Integração com seu sistema atual",
    ],
    cta: "Quanto custa pra minha empresa?",
  },
  {
    title: "Chega de copiar, colar e mandar e-mail",
    description: "Identifique os processos que mais travam sua operação. A gente automatiza.",
    bullets: [
      "Fluxos integrados ponta a ponta",
      "Dashboard simples pra você acompanhar",
      "Dados centralizados, sem duplicação",
    ],
    cta: "Quero saber o que dá pra automatizar",
  },
  {
    title: "Seu próprio produto digital — sem equipe de TI",
    description: "Quando a automação não basta e você precisa de uma solução que só existe pra você.",
    bullets: [
      "Multi-tenant, auth, billing",
      "IA integrada por padrão",
      "Construído com Claude Code (mesmo stack do JNC)",
    ],
    cta: "Quero entender como funciona",
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
            Três caminhos. Você escolhe pelo que dói mais agora.
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
                <a
                  href={whatsappLink(o.cta)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  {o.cta} →
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
