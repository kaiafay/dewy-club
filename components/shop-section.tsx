"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
  {
    name: "Morning Meeting",
    desc: "Brightening Vitamin C Serum",
    price: "$34",
    image: "/images/products/morning-meeting.webp",
    alt: "Vitamin C serum bottle on a clean white surface",
    overlay: "#FFF0F250",
    ingredients: ["Vitamin C", "Niacinamide", "Hyaluronic Acid"],
    checkoutUrl: "https://buy.stripe.com/test_fZufZg0zC1aa1DJ8y08Vi00",
  },
  {
    name: "Soft Launch",
    desc: "Lightweight Daily Moisturizer",
    price: "$28",
    image: "/images/products/soft-launch.webp",
    alt: "Light moisturizer in a minimalist jar",
    ingredients: ["Ceramide Complex", "Squalane", "Peptides"],
    checkoutUrl: "https://buy.stripe.com/test_7sY4gycik8CC96bcOg8Vi01",
  },
  {
    name: "The Dewy Drop",
    desc: "Hydrating Face Mist",
    price: "$22",
    image: "/images/products/dewy-drop.webp",
    alt: "Hydrating face mist spray bottle",
    ingredients: ["Glycerin", "Aloe Vera", "Rose Water"],
    checkoutUrl: "https://buy.stripe.com/test_eVqaEW4PS7yycineWo8Vi02",
  },
  {
    name: "5pm Slump",
    desc: "Under-Eye Patches (8 pairs)",
    price: "$18",
    image: "/images/products/5pm-slump.webp",
    alt: "Under-eye patches laid out on a clean surface",
    overlay: "#FFF0F270",
    filter: "contrast(1.2) brightness(0.95)",
    ingredients: ["Collagen", "Caffeine", "Retinol"],
    checkoutUrl: "https://buy.stripe.com/test_4gM5kC6Y09GGeqv5lO8Vi03",
  },
  {
    name: "Night Shift",
    desc: "Overnight Retinol Cream",
    price: "$38",
    image: "/images/products/night-shift.webp",
    alt: "Retinol cream jar against a soft background",
    filter: "contrast(0.85)",
    ingredients: ["Retinol 0.3%", "Bakuchiol", "Peptide Complex"],
    checkoutUrl: "https://buy.stripe.com/test_28EcN41DG3iifuzdSk8Vi04",
  },
  {
    name: "Sunday Reset",
    desc: "Exfoliating Mask",
    price: "$30",
    image: "/images/products/sunday-reset.webp",
    alt: "Exfoliating face mask product on a white surface",
    ingredients: ["AHA/BHA Blend", "Kaolin Clay", "Willow Bark"],
    checkoutUrl: "https://buy.stripe.com/test_00wdR8gyA5qq1DJ5lO8Vi05",
  },
];

export function ShopSection() {
  const [openIngredientsKey, setOpenIngredientsKey] = useState<string | null>(
    null,
  );

  return (
    <section
      id="shop"
      className="overflow-hidden py-24 px-6 md:px-16 bg-[#F9F7F4]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="font-sans text-sm font-medium tracking-widest text-[#1A1A1A]/50 uppercase mb-3">
            The lineup ✦
          </p>
          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#1A1A1A] text-balance">
            Six products, one routine.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
          {products.map((product) => {
            const isIngredientsOpen = openIngredientsKey === product.name;

            return (
              <div
                key={product.name}
                className="group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Product image — tap to toggle ingredients */}
                <div
                  role="button"
                  tabIndex={0}
                  aria-expanded={isIngredientsOpen}
                  aria-label={`${product.name} photo. Tap for key ingredients.`}
                  className="relative overflow-hidden aspect-square bg-[#F9F7F4] cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A]/30 focus-visible:ring-inset"
                  onClick={() =>
                    setOpenIngredientsKey((k) =>
                      k === product.name ? null : product.name,
                    )
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setOpenIngredientsKey((k) =>
                        k === product.name ? null : product.name,
                      );
                    }
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                    style={
                      product.filter ? { filter: product.filter } : undefined
                    }
                  />
                  {product.overlay && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ backgroundColor: product.overlay }}
                    />
                  )}

                  <div
                    className={[
                      "absolute inset-0 z-10 flex flex-col justify-end p-3 md:p-4 text-[#1A1A1A] transition-transform duration-300 ease-out",
                      "bg-[rgba(244,198,212,0.72)] backdrop-blur-md",
                      isIngredientsOpen
                        ? "translate-y-0"
                        : "translate-y-full pointer-events-none",
                    ].join(" ")}
                  >
                    <p className="font-sans text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase text-[#1A1A1A]/70 mb-2">
                      Key Ingredients
                    </p>
                    <ul className="font-sans text-xs md:text-sm font-medium leading-relaxed space-y-1">
                      {product.ingredients.map((ing) => (
                        <li key={ing}>{ing}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-3 md:p-5 flex flex-col flex-1 gap-1 md:gap-2">
                  <h3 className="font-serif font-bold text-sm md:text-lg text-[#1A1A1A] leading-tight">
                    {product.name}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-[#1A1A1A]/60 leading-relaxed flex-1">
                    {product.desc}
                  </p>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-2 md:mt-3 gap-2">
                    <span className="font-serif font-bold text-base md:text-xl text-[#1A1A1A]">
                      {product.price}
                    </span>
                    <a
                      href={product.checkoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex w-full items-center justify-center gap-1 rounded-full px-3 py-2 font-sans text-xs font-semibold text-[#1A1A1A] transition-shadow duration-200 hover:shadow-md md:w-auto md:gap-1.5 md:px-4 md:text-sm"
                      style={{ backgroundColor: "#F4C6D4" }}
                    >
                      Buy Now
                      <span className="inline-block transition-transform duration-300 group-hover/btn:rotate-45">
                        ✦
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
