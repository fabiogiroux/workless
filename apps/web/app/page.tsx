import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { ParaQuemE } from "@/components/sections/ParaQuemE"
import { Ofertas } from "@/components/sections/Ofertas"
import { ComoFunciona } from "@/components/sections/ComoFunciona"
import { CasoJNC } from "@/components/sections/CasoJNC"
import { PlanoPioneiro } from "@/components/sections/PlanoPioneiro"
import { CtaFinal } from "@/components/sections/CtaFinal"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ParaQuemE />
        <Ofertas />
        <ComoFunciona />
        <CasoJNC />
        <PlanoPioneiro />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
