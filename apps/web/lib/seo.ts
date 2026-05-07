import { BRAND } from "@/lib/constants"

/**
 * Schema.org Organization JSON-LD
 * Inserir em <head> via dangerouslySetInnerHTML script tag.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.name,
    url: BRAND.url,
    description: BRAND.description,
    sameAs: [BRAND.linkedin],
  }
}

/**
 * Schema.org LocalBusiness (Brasil)
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND.name,
    url: BRAND.url,
    description: BRAND.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
    },
    priceRange: "R$ 1.250 — R$ 35.000",
  }
}
