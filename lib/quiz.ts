import { getProductById, products, type Product } from "@/lib/products"

export type QuizAnswer = {
  id: string
  label: string
  tags: string[]
}

export type QuizQuestion = {
  id: string
  prompt: string
  answers: QuizAnswer[]
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "skin-feel",
    prompt: "How does your skin usually feel by midday?",
    answers: [
      { id: "tight", label: "Tight or flaky", tags: ["dry", "hydrate"] },
      { id: "shiny", label: "Shiny in the T-zone", tags: ["oily", "acne"] },
      { id: "mixed", label: "Dry in some spots, oily in others", tags: ["combo"] },
      { id: "calm", label: "Pretty balanced, honestly", tags: ["combo", "brighten"] },
    ],
  },
  {
    id: "main-concern",
    prompt: "What's your main skin vibe right now?",
    answers: [
      { id: "dull", label: "Dull / needs a glow-up", tags: ["brighten", "am"] },
      { id: "breakouts", label: "Breakouts & texture", tags: ["acne", "oily", "weekly"] },
      { id: "fine-lines", label: "Fine lines / firmness", tags: ["aging", "pm"] },
      { id: "parched", label: "Parched / thirsty", tags: ["hydrate", "dry", "calm"] },
    ],
  },
  {
    id: "sensitivity",
    prompt: "How does your skin handle actives?",
    answers: [
      { id: "tough", label: "Bring it on", tags: ["aging", "acne", "weekly"] },
      { id: "cautious", label: "I go slow", tags: ["sensitive", "hydrate"] },
      { id: "reactive", label: "Everything makes it mad", tags: ["sensitive", "calm", "hydrate"] },
    ],
  },
  {
    id: "goal",
    prompt: "What do you want most from your ritual?",
    answers: [
      { id: "glow", label: "That lit-from-within look", tags: ["brighten", "am"] },
      { id: "calm-skin", label: "Calm, comfy skin", tags: ["calm", "hydrate", "sensitive"] },
      { id: "clear", label: "Clearer, smoother texture", tags: ["acne", "weekly", "oily"] },
      { id: "age-grace", label: "Long game (firm + bounce)", tags: ["aging", "pm"] },
    ],
  },
  {
    id: "time-of-day",
    prompt: "When do you actually do skincare?",
    answers: [
      { id: "morning", label: "Mornings, mostly", tags: ["am"] },
      { id: "night", label: "Nights, mostly", tags: ["pm"] },
      { id: "both", label: "I try for both", tags: ["am", "pm"] },
      { id: "whenever", label: "Whenever I remember", tags: ["am", "extra"] },
    ],
  },
  {
    id: "extra",
    prompt: "How extra do you want this routine?",
    answers: [
      { id: "minimal", label: "Keep it simple", tags: ["hydrate"] },
      { id: "solid", label: "Solid everyday staples", tags: ["brighten", "hydrate"] },
      { id: "treat", label: "Give me a little treat", tags: ["extra", "tired"] },
      { id: "weekend", label: "I love a weekly reset", tags: ["weekly", "extra", "acne"] },
    ],
  },
]

const TREATMENT_IDS = [
  "morning-meeting",
  "night-shift",
  "sunday-reset",
  "5pm-slump",
] as const

const SUPPORT_IDS = ["dewy-drop", "5pm-slump", "sunday-reset"] as const

const CONCERN_COPY: Record<string, { eyebrow: string; headline: string }> = {
  brighten: {
    eyebrow: "Your glow ritual",
    headline: "Built for that lit-from-within look",
  },
  hydrate: {
    eyebrow: "Your calm hydration ritual",
    headline: "Soft, quenched, never crunchy",
  },
  calm: {
    eyebrow: "Your calm hydration ritual",
    headline: "Gentle steps for sensitive skin",
  },
  acne: {
    eyebrow: "Your clear-skin ritual",
    headline: "Texture-smoothing, no drama",
  },
  aging: {
    eyebrow: "Your long-game ritual",
    headline: "Firm, bounce, overnight work",
  },
  tired: {
    eyebrow: "Your revive ritual",
    headline: "For the 5pm face that needs a reset",
  },
  default: {
    eyebrow: "Your dewy ritual",
    headline: "Three steps, zero overthinking",
  },
}

const CONCERN_PRIORITY = [
  "brighten",
  "hydrate",
  "calm",
  "acne",
  "aging",
  "tired",
] as const

export type QuizRecommendation = {
  products: Product[]
  eyebrow: string
  headline: string
  winningConcern: string
}

function scoreProducts(tagCounts: Record<string, number>): Map<string, number> {
  const scores = new Map<string, number>()
  for (const product of products) {
    let score = 0
    for (const tag of product.tags) {
      score += tagCounts[tag] ?? 0
    }
    scores.set(product.id, score)
  }
  return scores
}

function pickTop(
  ids: readonly string[],
  scores: Map<string, number>,
  exclude?: string,
): string {
  const ranked = ids
    .filter((id) => id !== exclude)
    .sort((a, b) => (scores.get(b) ?? 0) - (scores.get(a) ?? 0))
  return ranked[0] ?? ids[0]
}

function winningConcern(tagCounts: Record<string, number>): string {
  let best = "default"
  let bestScore = 0
  for (const concern of CONCERN_PRIORITY) {
    const score = tagCounts[concern] ?? 0
    if (score > bestScore) {
      bestScore = score
      best = concern
    }
  }
  return best
}

/** Maps answer ids keyed by question id → 3-product ritual. */
export function recommend(
  answers: Record<string, string>,
): QuizRecommendation {
  const tagCounts: Record<string, number> = {}

  for (const question of quizQuestions) {
    const answerId = answers[question.id]
    const answer = question.answers.find((a) => a.id === answerId)
    if (!answer) continue
    for (const tag of answer.tags) {
      tagCounts[tag] = (tagCounts[tag] ?? 0) + 1
    }
  }

  const scores = scoreProducts(tagCounts)
  const treatmentId = pickTop(TREATMENT_IDS, scores)
  const supportId = pickTop(SUPPORT_IDS, scores, treatmentId)
  const baseId = "soft-launch"

  const ritualIds = [treatmentId, baseId, supportId]
  const ritualProducts = ritualIds
    .map((id) => getProductById(id))
    .filter((p): p is Product => Boolean(p))

  const concern = winningConcern(tagCounts)
  const copy = CONCERN_COPY[concern] ?? CONCERN_COPY.default

  return {
    products: ritualProducts,
    eyebrow: copy.eyebrow,
    headline: copy.headline,
    winningConcern: concern,
  }
}
