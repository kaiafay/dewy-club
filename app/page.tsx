"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { ShopSection } from "@/components/shop-section"
import { TheDropSection } from "@/components/the-drop-section"
import { WhyDewySection } from "@/components/why-dewy-section"
import { RitualSection } from "@/components/ritual-section"
import { FooterSection } from "@/components/footer-section"
import { SkinQuizModal } from "@/components/skin-quiz-modal"

export default function Home() {
  const [quizOpen, setQuizOpen] = useState(false)

  return (
    <main>
      <HeroSection onOpenQuiz={() => setQuizOpen(true)} />
      <ShopSection />
      <TheDropSection />
      <WhyDewySection />
      <RitualSection onOpenQuiz={() => setQuizOpen(true)} />
      <FooterSection onOpenQuiz={() => setQuizOpen(true)} />
      <SkinQuizModal open={quizOpen} onOpenChange={setQuizOpen} />
    </main>
  )
}
