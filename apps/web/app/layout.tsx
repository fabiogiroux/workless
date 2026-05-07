import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Manrope, JetBrains_Mono } from "next/font/google"
import { BRAND } from "@/lib/constants"
import { organizationSchema, localBusinessSchema } from "@/lib/seo"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: `${BRAND.name} — Automação e IA sob medida em semanas`,
  description: BRAND.description,
  metadataBase: new URL(BRAND.url),
  openGraph: {
    title: `${BRAND.name} — Automação e IA sob medida em semanas`,
    description: BRAND.description,
    url: BRAND.url,
    siteName: BRAND.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — Automação e IA sob medida em semanas`,
    description: BRAND.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#0A0E0D",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`dark ${manrope.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
      </head>
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
        <Script
          defer
          data-domain="workless.com.br"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
