"use client"

import Image from "next/image"
import { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import {
  quizQuestions,
  recommend,
  type QuizRecommendation,
} from "@/lib/quiz"

type SkinQuizModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SkinQuizModal({ open, onOpenChange }: SkinQuizModalProps) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [result, setResult] = useState<QuizRecommendation | null>(null)

  const totalSteps = quizQuestions.length
  const showingResults = result !== null
  const question = quizQuestions[step]
  const selectedAnswer = question ? answers[question.id] : undefined
  const progressValue = showingResults
    ? 100
    : ((step + (selectedAnswer ? 1 : 0)) / totalSteps) * 100

  function resetQuiz() {
    setStep(0)
    setAnswers({})
    setResult(null)
  }

  function handleOpenChange(next: boolean) {
    if (!next) {
      resetQuiz()
    }
    onOpenChange(next)
  }

  function selectAnswer(answerId: string) {
    if (!question) return
    setAnswers((prev) => ({ ...prev, [question.id]: answerId }))
  }

  function goNext() {
    if (!question || !selectedAnswer) return
    if (step >= totalSteps - 1) {
      setResult(recommend({ ...answers, [question.id]: selectedAnswer }))
      return
    }
    setStep((s) => s + 1)
  }

  function goBack() {
    if (showingResults) {
      setResult(null)
      setStep(totalSteps - 1)
      return
    }
    if (step > 0) setStep((s) => s - 1)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="max-h-[min(90dvh,640px)] gap-0 overflow-y-auto border-0 bg-[#F9F7F4] p-0 sm:max-w-lg rounded-3xl"
        style={{ color: "#1A1A1A" }}
      >
        <div className="px-6 pt-6 pb-4 sm:px-8 sm:pt-8">
          <DialogHeader className="gap-3 text-left">
            <p className="font-sans text-xs font-medium tracking-[0.2em] text-[#1A1A1A]/50 uppercase">
              {showingResults ? result.eyebrow : "Skin Quiz ✦"}
            </p>
            <DialogTitle className="font-serif font-extrabold text-2xl sm:text-3xl text-[#1A1A1A] leading-tight text-balance">
              {showingResults
                ? result.headline
                : question?.prompt ?? "Find your ritual"}
            </DialogTitle>
            <DialogDescription className="font-sans text-sm text-[#1A1A1A]/60">
              {showingResults
                ? "Three products. One routine. Shop what fits."
                : `Question ${step + 1} of ${totalSteps}`}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-5">
            <Progress
              value={progressValue}
              className="h-1.5 bg-[#1A1A1A]/10 [&>[data-slot=progress-indicator]]:bg-[#F4C6D4]"
            />
          </div>
        </div>

        <div className="px-6 pb-6 sm:px-8 sm:pb-8">
          {showingResults ? (
            <div className="space-y-4">
              {result.products.map((product, index) => (
                <div
                  key={product.id}
                  className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm"
                >
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-[#F9F7F4]">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      className="object-cover"
                      style={
                        product.filter ? { filter: product.filter } : undefined
                      }
                    />
                    {product.overlay && (
                      <div
                        className="absolute inset-0"
                        style={{ backgroundColor: product.overlay }}
                      />
                    )}
                    <span className="absolute left-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#C9B8E8] font-sans text-[10px] font-bold text-[#1A1A1A]">
                      {index + 1}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-serif font-bold text-sm text-[#1A1A1A] leading-tight">
                      {product.name}
                    </p>
                    <p className="font-sans text-xs text-[#1A1A1A]/55 mt-0.5 truncate">
                      {product.desc}
                    </p>
                    <p className="font-serif font-bold text-sm text-[#1A1A1A] mt-1">
                      {product.price}
                    </p>
                  </div>
                  <a
                    href={product.checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-shrink-0 items-center rounded-full px-3 py-2 font-sans text-xs font-semibold text-[#1A1A1A] transition-shadow hover:shadow-md"
                    style={{ backgroundColor: "#F4C6D4" }}
                  >
                    Shop
                  </a>
                </div>
              ))}

              <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:justify-between">
                <button
                  type="button"
                  onClick={resetQuiz}
                  className="font-sans text-sm font-medium text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors py-2"
                >
                  Retake quiz
                </button>
                <button
                  type="button"
                  onClick={() => handleOpenChange(false)}
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 font-sans text-sm font-semibold text-[#1A1A1A] transition-all hover:scale-[1.02] hover:shadow-md"
                  style={{ backgroundColor: "#F9E4B7" }}
                >
                  Done ✦
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {question?.answers.map((answer) => {
                const isSelected = selectedAnswer === answer.id
                return (
                  <button
                    key={answer.id}
                    type="button"
                    onClick={() => selectAnswer(answer.id)}
                    className={[
                      "w-full rounded-2xl px-4 py-3.5 text-left font-sans text-sm font-medium transition-all duration-200",
                      isSelected
                        ? "bg-[#F4C6D4] text-[#1A1A1A] shadow-md scale-[1.01]"
                        : "bg-white text-[#1A1A1A]/80 hover:bg-white/90 hover:shadow-sm",
                    ].join(" ")}
                  >
                    {answer.label}
                  </button>
                )
              })}

              <div className="flex items-center justify-between gap-3 pt-4">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={step === 0}
                  className="font-sans text-sm font-medium text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors disabled:opacity-30 disabled:pointer-events-none py-2"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={!selectedAnswer}
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 font-sans text-sm font-semibold text-[#1A1A1A] transition-all hover:scale-[1.02] hover:shadow-md disabled:opacity-40 disabled:pointer-events-none disabled:hover:scale-100"
                  style={{ backgroundColor: "#F4C6D4" }}
                >
                  {step >= totalSteps - 1 ? "See my ritual ✦" : "Continue"}
                </button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
