import { Button } from "@/components/ui/Button"
import { calendlyLink } from "@/lib/constants"

export function PlanoPioneiro() {
  return (
    <section id="plano-pioneiro" className="py-20 md:py-28">
      <div className="container-page">
        <div className="relative rounded-lg border-2 border-primary bg-gradient-to-br from-primary/10 via-surface to-surface-2/50 p-8 md:p-14 overflow-hidden">
          {/* decorative hexagon top right */}
          <div className="absolute -top-12 -right-12 opacity-10 pointer-events-none">
            <svg width="240" height="240" viewBox="0 0 100 100" fill="none">
              <polygon
                points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                className="text-primary"
              />
            </svg>
          </div>

          <div className="relative max-w-3xl">
            <p className="text-sm font-mono text-primary uppercase tracking-wider mb-4">
              Plano Pioneiro
            </p>
            <h2 className="text-section-title text-balance">
              3 vagas com <span className="text-primary">50% de desconto</span> pros primeiros clientes
            </h2>
            <p className="text-lg text-foreground-muted mt-6 text-balance">
              A Workless está abrindo agora. Pioneiros entram com preço especial em troca de poder usar o projeto como exemplo (anonimizado se preferir) e indicar 1 contato relevante.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-3 text-sm font-mono text-foreground-muted">
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
                Vagas restantes: <span className="text-primary font-bold">3 de 3</span>
              </div>

              <div className="hidden sm:block w-px h-6 bg-border" />

              <Button asLink href={calendlyLink("pioneiro")} external size="lg">
                Quero ser pioneiro
              </Button>
            </div>

            <p className="text-xs text-foreground-muted/70 mt-6">
              Após esses 3, preço volta pra tabela normal.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
