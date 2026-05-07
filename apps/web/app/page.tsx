import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { ProvaHero } from "@/components/sections/ProvaHero"
import { ParaQuemE } from "@/components/sections/ParaQuemE"
import { Ofertas } from "@/components/sections/Ofertas"
import { PlanoPioneiro } from "@/components/sections/PlanoPioneiro"
import { ComoFunciona } from "@/components/sections/ComoFunciona"
import { CasoJNC } from "@/components/sections/CasoJNC"
import { FAQ } from "@/components/sections/FAQ"
import { CtaFinal } from "@/components/sections/CtaFinal"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProvaHero />
        <ParaQuemE />
        <Ofertas />
        <PlanoPioneiro />
        <ComoFunciona />
        <CasoJNC />
        <FAQ />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
