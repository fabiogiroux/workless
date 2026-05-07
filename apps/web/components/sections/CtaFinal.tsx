import { Button } from "@/components/ui/Button"
import { HexagonPattern } from "@/components/ui/Hexagon"
import { calendlyLink, whatsappLink } from "@/lib/constants"

export function CtaFinal() {
  return (
    <section id="contato" className="relative py-24 md:py-32 overflow-hidden">
      <HexagonPattern density="medium" />

      <div className="container-page relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-hero text-balance">
            Vamos <span className="text-primary">conversar?</span>
          </h2>

          <p className="text-lg md:text-xl text-foreground-muted mt-6 text-balance">
            30 minutos. Sem compromisso. Posso te dizer logo se faz sentido pra sua empresa.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asLink href={calendlyLink("cta_final")} external size="xl">
              Agendar conversa de 30 min
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Button>
          </div>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-foreground-muted hover:text-primary transition-colors"
          >
            Ou mande mensagem no WhatsApp →
          </a>
        </div>
      </div>
    </section>
  )
}
