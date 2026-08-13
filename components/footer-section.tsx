"use client"

import { useState } from "react"

export function FooterSection({ onOpenQuiz }: { onOpenQuiz: () => void }) {
  const [email, setEmail] = useState("")

  return (
    <footer
      className="py-16 px-6 md:px-16"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Main footer row */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 items-start pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <span className="font-serif font-extrabold text-2xl text-white">Dewy Club</span>
            <p className="font-sans text-sm text-white/40 mt-2 leading-relaxed">
              Built for the committed.<br />And the chaotic.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col md:items-center gap-3" aria-label="Footer navigation">
            <a
              href="#shop"
              className="font-sans text-sm text-white/60 hover:text-white transition-colors"
            >
              Shop
            </a>
            <a
              href="#why"
              className="font-sans text-sm text-white/60 hover:text-white transition-colors"
            >
              About
            </a>
            <button
              type="button"
              onClick={onOpenQuiz}
              className="font-sans text-sm text-white/60 hover:text-white transition-colors text-left md:text-center"
            >
              Skin Quiz
            </button>
          </nav>

          {/* Newsletter */}
          <div>
            <p className="font-sans text-sm font-semibold text-white mb-3">
              Join the club. Get early drops.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 rounded-full px-4 py-2.5 bg-white/10 border border-white/20 font-sans text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#F4C6D4] transition-colors min-w-0"
                aria-label="Email address"
              />
              <button
                type="button"
                onClick={() => setEmail("")}
                className="group/btn inline-flex flex-shrink-0 items-center gap-1 rounded-full px-4 py-2.5 font-sans font-semibold text-sm text-[#1A1A1A] transition-shadow duration-200 hover:shadow-md"
                style={{ backgroundColor: "#F4C6D4" }}
              >
                <span className="hidden lg:inline">Join the Club</span>
                <span className="lg:hidden">Join</span>
                <span className="inline-block transition-transform duration-300 group-hover/btn:rotate-45">
                  ✦
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/30">
            © 2025 Dewy Club. All rights reserved.
          </p>
          <p className="font-sans text-xs text-white/20">
            Your skin deserved better. Now it has it.
          </p>
        </div>
      </div>
    </footer>
  )
}
