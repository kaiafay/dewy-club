"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const products = [
  "Morning Meeting",
  "Soft Launch",
  "The Dewy Drop",
  "5pm Slump",
  "Night Shift",
  "Sunday Reset",
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
        setIsFlipping(false);
      }, 250);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY.current) {
        setNavVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setNavVisible(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex flex-col">
      {/* Fixed nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-white/95 backdrop-blur-sm transition-transform duration-300 ${
          navVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <span className="font-serif font-bold text-xl text-[#1A1A1A] tracking-tight leading-tight">
          Dewy Club
        </span>
        <div className="flex items-center gap-4">
          <a
            href="#shop"
            className="font-sans text-sm whitespace-nowrap text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors"
          >
            Shop
          </a>
          <a
            href="#why"
            className="font-sans text-sm whitespace-nowrap text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors"
          >
            About
          </a>
          <a
            href="#ritual"
            className="font-sans text-sm whitespace-nowrap text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors"
          >
            Skin Quiz
          </a>
        </div>
      </nav>

      {/* Spacer to prevent content from sliding under fixed nav */}
      <div className="h-20" aria-hidden="true" />

      {/* Hero content */}
      <div className="flex-1 grid md:grid-cols-2 gap-0">
        {/* Left — copy */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-0">
          <p className="font-sans text-sm font-medium tracking-widest text-[#1A1A1A]/50 uppercase mb-4">
            Skincare, simplified ✦
          </p>
          <h1 className="font-serif font-extrabold text-5xl sm:text-6xl lg:text-8xl xl:text-9xl leading-none tracking-tight text-[#1A1A1A] mb-8">
            Dewy
            <br />
            Club.
          </h1>

          {/* Slot machine */}
          <div className="flex items-center gap-3 mb-10">
            <span className="font-sans text-base text-[#1A1A1A]/60 whitespace-nowrap hidden lg:inline">
              Currently obsessed with:
            </span>
            <span className="font-sans text-base text-[#1A1A1A]/60 whitespace-nowrap lg:hidden">
              Obsessed with:
            </span>
            <div
              className="relative overflow-hidden rounded-full px-4 py-1.5 w-28 sm:w-36 md:w-44 flex justify-center whitespace-nowrap"
              style={{ backgroundColor: "#F9E4B7" }}
            >
              <div
                className="font-sans font-semibold text-xs sm:text-sm md:text-base text-[#1A1A1A] transition-all duration-200"
                style={{
                  transform: isFlipping ? "translateY(-5px)" : "translateY(0)",
                  opacity: isFlipping ? 0 : 1,
                  transition: "transform 0.2s ease-out, opacity 0.18s ease-out",
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
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-sans font-semibold text-[#1A1A1A] transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "#F4C6D4" }}
            >
              Shop the Drop ✦
            </a>
            <span className="font-sans text-sm text-[#1A1A1A]/50">
              Fewer steps, better skin.
            </span>
          </div>
        </div>

        {/* Right — image */}
        <div className="relative min-h-[50vh] md:min-h-[100dvh] overflow-hidden hidden md:block">
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
  );
}
