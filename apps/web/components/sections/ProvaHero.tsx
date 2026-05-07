export function ProvaHero() {
  return (
    <section className="py-8 border-y border-border bg-surface-2/20">
      <div className="container-page">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <p className="text-xs font-mono text-foreground-muted uppercase tracking-wider whitespace-nowrap">
            Caso real entregue
          </p>
          <div className="w-px h-6 bg-border hidden md:block" />
          <p className="text-sm text-foreground-muted text-balance">
            Plataforma de gestão financeira com chatbot IA via WhatsApp —{" "}
            <span className="text-foreground font-medium">9 famílias pagantes</span>,{" "}
            <span className="text-foreground font-medium">96,67% de aprovação</span>,{" "}
            construída do zero em{" "}
            <span className="text-foreground font-medium">6 meses</span> com IA.{" "}
            <span className="text-primary font-medium">Isso é o que a Workless entrega.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
