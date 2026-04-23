export function RitualSection() {
  return (
    <section
      id="ritual"
      className="overflow-hidden py-28 px-6 md:px-16"
      style={{ backgroundColor: "#C9B8E8" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-sans text-sm font-medium tracking-widest text-[#1A1A1A]/50 uppercase mb-5">
          Build Your Ritual ✦
        </p>
        <h2 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#1A1A1A] mb-6 text-balance leading-tight">
          Not sure where<br />to start?
        </h2>
        <p className="font-sans text-lg text-[#1A1A1A]/70 leading-relaxed mb-10 text-pretty">
          Take our 60-second skin quiz and we&apos;ll build your routine for you.
        </p>

        <div className="relative inline-flex flex-col items-center gap-4">
          <a
            href="#"
            className="inline-flex items-center rounded-full px-5 py-3 text-sm md:px-10 md:py-5 md:text-lg font-sans font-semibold text-[#1A1A1A] transition-all duration-200 hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: "#F4C6D4", color: "#1A1A1A" }}
          >
            Take the Quiz ✦
          </a>

          {/* Coming Soon badge */}
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center rounded-full px-4 py-1.5 font-sans font-bold text-xs tracking-widest text-[#1A1A1A] uppercase"
              style={{ backgroundColor: "#F9E4B7" }}
            >
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
