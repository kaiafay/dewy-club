"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const products = [
  "Morning Meeting",
  "Soft Launch",
  "The Dewy Drop",
  "5pm Slump",
  "Night Shift",
  "Sunday Reset",
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % products.length)
        setIsFlipping(false)
      }, 250)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <span className="font-serif font-bold text-xl text-[#1A1A1A] tracking-tight">Dewy Club</span>
        <div className="flex items-center gap-8">
          <a href="#shop" className="font-sans text-sm text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors">Shop</a>
          <a href="#why" className="font-sans text-sm text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors">About</a>
          <a href="#ritual" className="font-sans text-sm text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors">Skin Quiz</a>
        </div>
      </nav>

      {/* Hero content */}
      <div className="flex-1 grid md:grid-cols-2 gap-0">
        {/* Left — copy */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-0">
          <p className="font-sans text-sm font-medium tracking-widest text-[#1A1A1A]/50 uppercase mb-4">
            Skincare, but make it ✦
          </p>
          <h1 className="font-serif font-extrabold text-7xl md:text-8xl lg:text-9xl leading-none tracking-tight text-[#1A1A1A] mb-8">
            Dewy<br />Club.
          </h1>

          {/* Slot machine */}
          <div className="flex items-center gap-3 mb-10 flex-wrap">
            <span className="font-sans text-base text-[#1A1A1A]/60 whitespace-nowrap">
              Currently obsessed with:
            </span>
            <div
              className="relative overflow-hidden rounded-full px-4 py-1.5"
              style={{ backgroundColor: "#F9E4B7" }}
            >
              <div
                className="font-sans font-semibold text-base text-[#1A1A1A] transition-all duration-200"
                style={{
                  transform: isFlipping ? "translateY(-100%)" : "translateY(0)",
                  opacity: isFlipping ? 0 : 1,
                  transition: "transform 0.2s ease-in-out, opacity 0.15s ease-in-out",
                }}
              >
                {products[currentIndex]}
              </div>
            </div>
          </div>

          <p className="font-serif font-semibold text-2xl md:text-3xl text-[#1A1A1A] mb-10 text-balance leading-snug">
            Your skin&apos;s new situationship.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#shop"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-sans font-semibold text-[#1A1A1A] text-base transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "#F4C6D4" }}
            >
              Shop the Drop ✦
            </a>
            <span className="font-sans text-sm text-[#1A1A1A]/50">No 47-step routine required.</span>
          </div>
        </div>

        {/* Right — image */}
        <div className="relative min-h-[50vh] md:min-h-screen overflow-hidden">
          <Image
            src="/images/hero-photo.webp"
            alt="Bright airy skincare flatlay on a light background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
