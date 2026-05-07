/**
 * Workless — Constants centralizados
 * Edite aqui quando contatos finais forem definidos.
 */

// CTAs externos
export const CALENDLY_URL = "https://calendly.com/workless/30min"
export const WHATSAPP_PHONE = "5511999999999" // TODO: Fabio confirmar telefone final
export const WHATSAPP_MESSAGE_DEFAULT = "Olá! Vim do site da Workless e quero conversar sobre automação."

export function whatsappLink(message: string = WHATSAPP_MESSAGE_DEFAULT) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
}

export function calendlyLink(utmContent?: string) {
  const url = new URL(CALENDLY_URL)
  url.searchParams.set("utm_source", "site")
  url.searchParams.set("utm_campaign", "v1")
  if (utmContent) url.searchParams.set("utm_content", utmContent)
  return url.toString()
}

// Brand
export const BRAND = {
  name: "Workless",
  category: "Agência de IA",
  tagline: "Automação e IA sob medida. Em semanas.",
  description:
    "A Workless usa IA pra automatizar processos manuais da sua empresa. Em semanas, sob medida. Conversa de 30 min sem compromisso.",
  url: "https://workless.com.br",
  linkedin: "https://www.linkedin.com/in/fabiogiroux/", // TODO: Fabio confirmar URL final
}
