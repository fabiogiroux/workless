import { Card } from "@/components/ui/Card"
import { Hexagon } from "@/components/ui/Hexagon"

const personas = [
  {
    title: "Dono de PME 5-50 funcionários",
    pain: "Sua equipe gasta horas em planilha, e-mail e processo que poderia rodar sozinho.",
  },
  {
    title: "Gestor cansado de processo manual",
    pain: "Você sabe que dá pra automatizar, mas não sabe por onde começar nem quem chamar.",
  },
  {
    title: "Empresário com tarefa repetitiva",
    pain: "WhatsApp lotado, atendimento sobrecarregado, e a operação não escala.",
  },
]

export function ParaQuemE() {
  return (
    <section id="para-quem" className="py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-section-title text-balance">
            Pra quem a <span className="text-primary">Workless</span> é
          </h2>
          <p className="text-lg text-foreground-muted mt-4">
            Empresários que sentem na pele que tempo é o ativo mais escasso da empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {personas.map((p) => (
            <Card key={p.title} variant="glass">
              <Hexagon size={48} variant="outline" />
              <h3 className="text-xl font-bold mt-6 text-balance">{p.title}</h3>
              <p className="text-foreground-muted mt-3 text-balance">{p.pain}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
