const pillars = [
  {
    emoji: "🧪",
    title: "Actually Works",
    desc: "Formulated with ingredients your derm would approve.",
  },
  {
    emoji: "💌",
    title: "Made for Real Life",
    desc: "Fits into your routine, not the other way around.",
  },
  {
    emoji: "🌀",
    title: "No Fluff",
    desc: "No fillers, no nonsense, no 47-step routine required.",
  },
]

export function WhyDewySection() {
  return (
    <section id="why" className="py-24 px-6 md:px-16 bg-[#F9F7F4]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="font-sans text-sm font-medium tracking-widest text-[#1A1A1A]/50 uppercase mb-3">
            Our deal ✦
          </p>
          <h2 className="font-serif font-extrabold text-5xl md:text-6xl text-[#1A1A1A] text-balance">
            We&apos;re not like<br />other serums.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group rounded-3xl p-8 md:p-10 bg-white border border-[#F4C6D4]/30 hover:border-[#C9B8E8] hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl mb-6" role="img" aria-label={pillar.title}>
                {pillar.emoji}
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#1A1A1A] mb-3">{pillar.title}</h3>
              <p className="font-sans text-base text-[#1A1A1A]/60 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
