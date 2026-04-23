import Image from "next/image"

export function TheDropSection() {
  return (
    <section
      id="the-drop"
      className="overflow-hidden py-0"
      style={{ backgroundColor: "#F9E4B7" }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 min-h-[600px]">
        {/* Left — image */}
        <div className="relative overflow-hidden min-h-[400px] md:min-h-[600px] rounded-none">
          <Image
            src="/images/products/night-shift.webp"
            alt="Night Shift overnight retinol cream product photography"
            fill
            className="object-cover"
            style={{ filter: "contrast(0.85)" }}
          />
        </div>

        {/* Right — copy */}
        <div className="flex flex-col justify-center px-6 md:px-16 py-16 md:py-20">
          <p className="font-sans text-sm font-medium tracking-widest text-[#1A1A1A]/50 uppercase mb-5">
            Featured Drop ✦
          </p>
          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#1A1A1A] leading-tight mb-6 text-balance">
            While you sleep,<br />it works.
          </h2>
          <p className="font-sans text-base text-[#1A1A1A]/70 leading-relaxed mb-10 max-w-md">
            Night Shift is your overnight reset. Retinol, barrier support, and a texture so good you&apos;ll actually look forward to bedtime.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://buy.stripe.com/test_28EcN41DG3iifuzdSk8Vi04"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full px-5 py-3 text-sm md:px-8 md:py-4 md:text-base font-sans font-semibold text-[#1A1A1A] transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "#F4C6D4", color: "#1A1A1A" }}
            >
              Add to Routine ✦
            </a>
            <span className="font-sans text-sm text-[#1A1A1A]/50">$38 — free shipping</span>
          </div>
        </div>
      </div>
    </section>
  )
}
