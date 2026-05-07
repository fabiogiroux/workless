"use client"

import * as React from "react"
import { Button } from "@/components/ui/Button"
import { calendlyLink } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { href: "#para-quem", label: "Pra quem é" },
    { href: "#ofertas", label: "Ofertas" },
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#caso-real", label: "Caso real" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-glass border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="container-page flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="text-xl md:text-2xl font-extrabold text-primary tracking-tight">
          workless<span className="text-foreground">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-foreground-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asLink href={calendlyLink("navbar")} external size="sm">
            Agendar conversa
          </Button>
        </div>

        <button
          aria-label="Abrir menu"
          className="md:hidden p-2 text-foreground"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <ul className="container-page py-4 flex flex-col gap-4 text-foreground-muted">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-2 hover:text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Button asLink href={calendlyLink("navbar_mobile")} external size="md" className="w-full">
                Agendar conversa
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
