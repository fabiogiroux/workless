const passos = [
  {
    n: "01",
    title: "Conversa de 30 min",
    description: "Você me conta o problema. Sem compromisso, sem proposta enrolada.",
  },
  {
    n: "02",
    title: "Proposta em 48h",
    description: "Te entrego escopo, prazo e preço claros. Sem surpresa depois.",
  },
  {
    n: "03",
    title: "Automação em até 4 semanas",
    description: "Construo, valido com você semanalmente, e entrego rodando.",
  },
]

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-section-title text-balance">Como funciona</h2>
          <p className="text-lg text-foreground-muted mt-4">
            Da primeira conversa à automação rodando: três passos simples.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* linha conectora desktop */}
          <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40" />

          {passos.map((p) => (
            <div key={p.n} className="relative">
              <div className="text-kpi font-mono font-extrabold text-primary leading-none">
                {p.n}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mt-4 text-balance">{p.title}</h3>
              <p className="text-foreground-muted mt-2 text-balance">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
