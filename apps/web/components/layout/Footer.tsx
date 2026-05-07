import { BRAND } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t border-border py-10 md:py-14">
      <div className="container-page flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-xl font-extrabold text-primary tracking-tight">
            workless<span className="text-foreground">.</span>
          </p>
          <p className="text-sm text-foreground-muted mt-2">
            {BRAND.category} · Automação e IA sob medida.
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-2 text-sm text-foreground-muted">
          <a
            href={BRAND.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <p>© {new Date().getFullYear()} {BRAND.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
