"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "As a business owner, the AI for Business course opened my eyes to the potential of AI in my industry. It's been a game-changer for my company.",
    author: "Emma S.",
    role: "CEO",
  },
  {
    quote:
      "The Machine Learning Mastery course was challenging but incredibly rewarding. I now feel confident in applying ML techniques to real-world problems.",
    author: "Robert L.",
    role: "AI Engineer",
  },
]

export default function ServiceTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-[#4a90e2]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-16">What Our Students Say</h2>
        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={40} />
          </button>

          <div className="px-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 text-center ${
                  index === currentTestimonial ? "opacity-100" : "opacity-0 absolute inset-0"
                }`}
              >
                <blockquote className="text-2xl italic text-white mb-8">"{testimonial.quote}"</blockquote>
                <cite className="not-italic text-white">
                  <div className="font-bold text-xl mb-2">{testimonial.author}</div>
                  <div className="text-white/80">{testimonial.role}</div>
                </cite>
              </div>
            ))}
          </div>

          <button
            onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      </div>
    </section>
  )
}

