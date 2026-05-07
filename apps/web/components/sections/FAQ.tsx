"use client"

import { useState } from "react"

const faqs = [
  {
    q: "Quanto tempo leva pra entregar?",
    a: "A maioria das automações fica pronta em até 4 semanas. Antes de fechar qualquer coisa, eu te entrego um escopo com prazo fixo. Se não cumprir, o problema é meu, não seu.",
  },
  {
    q: "É muito caro pra uma empresa do meu tamanho?",
    a: "Depende do que você quer automatizar. Por isso a conversa inicial é gratuita — se não fizer sentido financeiro pra você, eu falo na hora. Não tem sentido fechar algo que não vai pagar o investimento.",
  },
  {
    q: "E se não funcionar pra minha empresa?",
    a: "A proposta é feita sob medida depois da conversa. Se eu não enxergar como resolver seu problema, digo antes de cobrar qualquer coisa. Não existe 'produto genérico' aqui.",
  },
  {
    q: "Preciso ter equipe de TI ou sistema específico?",
    a: "Não. A maioria dos clientes não tem TI interno. Eu conecto com o que você já usa — WhatsApp, Google Sheets, e-mail, ERP, ou o que for. Sem exigir nada novo.",
  },
  {
    q: "Como funciona depois que a automação é entregue?",
    a: "Você recebe a solução funcionando e suporte nos primeiros 30 dias. Se der problema nesse período, corrijo sem custo adicional. Depois, você decide se quer manutenção contínua ou não.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-28 bg-surface-2/30">
      <div className="container-page">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-section-title text-balance">Perguntas frequentes</h2>
          <p className="text-lg text-foreground-muted mt-4">
            Se tiver outra dúvida, me manda no WhatsApp.
          </p>
        </div>

        <div className="max-w-3xl space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-surface-2/50 transition-colors"
              >
                <span className="font-semibold text-base">{faq.q}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-foreground-muted">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
