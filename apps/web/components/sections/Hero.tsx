import { Button } from "@/components/ui/Button"
import { HexagonPattern } from "@/components/ui/Hexagon"
import { calendlyLink, whatsappLink } from "@/lib/constants"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[80vh] md:min-h-[70vh] flex items-center pt-24 pb-16 overflow-hidden"
    >
      <HexagonPattern density="low" />

      <div className="container-page relative">
        <div className="max-w-4xl">
          <p className="anim-fade-in mb-6 inline-flex items-center gap-2 text-sm font-mono text-foreground-muted">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Agência de IA · Para PMEs que crescem sem contratar mais
          </p>

          <h1 className="anim-slide-up text-hero text-balance">
            Quantas horas por semana você perde em tarefas que
            <span className="block text-primary mt-2">uma IA poderia fazer?</span>
          </h1>

          <p className="anim-slide-up text-lg md:text-xl text-foreground-muted mt-8 max-w-2xl text-balance" style={{ animationDelay: "100ms" }}>
            A Workless automatiza o que mais te consome — atendimento, operação, relatórios. Em até 4 semanas, rodando na sua empresa.
          </p>

          <div className="anim-slide-up mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4" style={{ animationDelay: "200ms" }}>
            <Button asLink href={calendlyLink("hero")} external size="lg">
              Quero uma proposta gratuita
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Button>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-primary transition-colors text-sm"
            >
              ou manda mensagem no WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
