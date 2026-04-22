import { HeroSection } from "@/components/hero-section"
import { ShopSection } from "@/components/shop-section"
import { TheDropSection } from "@/components/the-drop-section"
import { WhyDewySection } from "@/components/why-dewy-section"
import { RitualSection } from "@/components/ritual-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ShopSection />
      <TheDropSection />
      <WhyDewySection />
      <RitualSection />
      <FooterSection />
    </main>
  )
}
