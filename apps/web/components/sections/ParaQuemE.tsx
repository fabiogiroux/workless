import { Card } from "@/components/ui/Card"
import { Hexagon } from "@/components/ui/Hexagon"

const personas = [
  {
    title: "Dono de PME com 5 a 50 funcionários",
    pain: "Você gere tudo, responde tudo, resolve tudo. Cada hora no operacional é uma hora fora do estratégico.",
  },
  {
    title: "Gestor que vive apagando incêndio",
    pain: "Sabe que tem processo pra automatizar, mas não sabe por onde começar — e tem medo de gastar com tecnologia que não funciona.",
  },
  {
    title: "Empreendedor que já perdeu cliente por demora",
    pain: "WhatsApp cheio, atendimento lento, cliente impaciente. Você precisaria de mais uma pessoa — ou de um sistema que trabalha no lugar dela.",
  },
]

export function ParaQuemE() {
  return (
    <section id="para-quem" className="py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-section-title text-balance">
            Você se encaixa <span className="text-primary">aqui?</span>
          </h2>
          <p className="text-lg text-foreground-muted mt-4">
            Se você se reconhece em um desses perfis, a gente tem o que você precisa.
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
