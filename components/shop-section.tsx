import Image from "next/image"

const products = [
  {
    name: "Morning Meeting",
    desc: "Brightening Vitamin C Serum",
    price: "$34",
    image: "/images/products/morning-meeting.webp",
    alt: "Vitamin C serum bottle on a clean white surface",
  },
  {
    name: "Soft Launch",
    desc: "Lightweight Daily Moisturizer",
    price: "$28",
    image: "/images/products/soft-launch.webp",
    alt: "Light moisturizer in a minimalist jar",
  },
  {
    name: "The Dewy Drop",
    desc: "Hydrating Face Mist",
    price: "$22",
    image: "/images/products/dewy-drop.webp",
    alt: "Hydrating face mist spray bottle",
  },
  {
    name: "5pm Slump",
    desc: "Under-Eye Patches (8 pairs)",
    price: "$18",
    image: "/images/products/5pm-slump.webp",
    alt: "Under-eye patches laid out on a clean surface",
  },
  {
    name: "Night Shift",
    desc: "Overnight Retinol Cream",
    price: "$38",
    image: "/images/products/night-shift.webp",
    alt: "Retinol cream jar against a soft background",
  },
  {
    name: "Sunday Reset",
    desc: "Exfoliating Mask",
    price: "$30",
    image: "/images/products/sunday-reset.webp",
    alt: "Exfoliating face mask product on a white surface",
  },
]

export function ShopSection() {
  return (
    <section id="shop" className="py-24 px-6 md:px-16 bg-[#F9F7F4]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="font-sans text-sm font-medium tracking-widest text-[#1A1A1A]/50 uppercase mb-3">
            The lineup ✦
          </p>
          <h2 className="font-serif font-extrabold text-5xl md:text-6xl text-[#1A1A1A] text-balance">
            The Full Lineup.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Product image */}
              <div className="relative overflow-hidden aspect-square bg-[#F9F7F4]">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "#F4C6D420" }}
                />
              </div>

              {/* Card content */}
              <div className="p-5 flex flex-col flex-1 gap-2">
                <h3 className="font-serif font-bold text-lg text-[#1A1A1A] leading-tight">{product.name}</h3>
                <p className="font-sans text-sm text-[#1A1A1A]/60 leading-relaxed flex-1">{product.desc}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="font-serif font-bold text-xl text-[#1A1A1A]">{product.price}</span>
                  <a
                    href="#"
                    className="inline-flex items-center rounded-full px-4 py-2 font-sans font-semibold text-sm text-[#1A1A1A] transition-all duration-200 hover:scale-105 hover:shadow-md"
                    style={{ backgroundColor: "#F4C6D4" }}
                  >
                    Buy Now ✦
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
