export type Product = {
  id: string
  name: string
  desc: string
  price: string
  image: string
  alt: string
  ingredients: string[]
  checkoutUrl: string
  tags: string[]
  overlay?: string
  filter?: string
}

export const products: Product[] = [
  {
    id: "morning-meeting",
    name: "Morning Meeting",
    desc: "Brightening Vitamin C Serum",
    price: "$34",
    image: "/images/products/morning-meeting.webp",
    alt: "Vitamin C serum bottle on a clean white surface",
    overlay: "#FFF0F250",
    ingredients: ["Vitamin C", "Niacinamide", "Hyaluronic Acid"],
    checkoutUrl: "https://buy.stripe.com/test_fZufZg0zC1aa1DJ8y08Vi00",
    tags: ["brighten", "am", "combo", "oily", "dry", "acne"],
  },
  {
    id: "soft-launch",
    name: "Soft Launch",
    desc: "Lightweight Daily Moisturizer",
    price: "$28",
    image: "/images/products/soft-launch.webp",
    alt: "Light moisturizer in a minimalist jar",
    ingredients: ["Ceramide Complex", "Squalane", "Peptides"],
    checkoutUrl: "https://buy.stripe.com/test_7sY4gycik8CC96bcOg8Vi01",
    tags: ["hydrate", "dry", "combo", "sensitive", "am", "pm"],
  },
  {
    id: "dewy-drop",
    name: "The Dewy Drop",
    desc: "Hydrating Face Mist",
    price: "$22",
    image: "/images/products/dewy-drop.webp",
    alt: "Hydrating face mist spray bottle",
    ingredients: ["Glycerin", "Aloe Vera", "Rose Water"],
    checkoutUrl: "https://buy.stripe.com/test_eVqaEW4PS7yycineWo8Vi02",
    tags: ["hydrate", "dry", "sensitive", "am", "extra", "calm"],
  },
  {
    id: "5pm-slump",
    name: "5pm Slump",
    desc: "Under-Eye Patches (8 pairs)",
    price: "$18",
    image: "/images/products/5pm-slump.webp",
    alt: "Under-eye patches laid out on a clean surface",
    overlay: "#FFF0F270",
    filter: "contrast(1.2) brightness(0.95)",
    ingredients: ["Collagen", "Caffeine", "Retinol"],
    checkoutUrl: "https://buy.stripe.com/test_4gM5kC6Y09GGeqv5lO8Vi03",
    tags: ["aging", "tired", "pm", "extra", "brighten"],
  },
  {
    id: "night-shift",
    name: "Night Shift",
    desc: "Overnight Retinol Cream",
    price: "$38",
    image: "/images/products/night-shift.webp",
    alt: "Retinol cream jar against a soft background",
    filter: "contrast(0.85)",
    ingredients: ["Retinol 0.3%", "Bakuchiol", "Peptide Complex"],
    checkoutUrl: "https://buy.stripe.com/test_28EcN41DG3iifuzdSk8Vi04",
    tags: ["aging", "pm", "dry", "combo", "brighten"],
  },
  {
    id: "sunday-reset",
    name: "Sunday Reset",
    desc: "Exfoliating Mask",
    price: "$30",
    image: "/images/products/sunday-reset.webp",
    alt: "Exfoliating face mask product on a white surface",
    ingredients: ["AHA/BHA Blend", "Kaolin Clay", "Willow Bark"],
    checkoutUrl: "https://buy.stripe.com/test_00wdR8gyA5qq1DJ5lO8Vi05",
    tags: ["acne", "oily", "weekly", "brighten", "extra"],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}
