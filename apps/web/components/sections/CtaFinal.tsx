import { Button } from "@/components/ui/Button"
import { HexagonPattern } from "@/components/ui/Hexagon"
import { whatsappLink } from "@/lib/constants"

export function CtaFinal() {
  return (
    <section id="contato" className="relative py-24 md:py-32 overflow-hidden">
      <HexagonPattern density="medium" />

      <div className="container-page relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-hero text-balance">
            Qual processo você mais quer parar de fazer{" "}
            <span className="text-primary">no braço?</span>
          </h2>

          <p className="text-lg md:text-xl text-foreground-muted mt-6 text-balance">
            Me conta isso em 30 minutos. Eu te digo o que dá pra automatizar, quanto custa e quanto tempo leva. Sem compromisso, sem apresentação, sem enrolação.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asLink href={whatsappLink("Quero uma proposta gratuita")} external size="xl">
              Quero uma proposta gratuita
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Button>
          </div>

          <p className="mt-6 text-sm text-foreground-muted/70">
            Resposta em até 24h. Proposta em até 48h.
          </p>
        </div>
      </div>
    </section>
  )
}
