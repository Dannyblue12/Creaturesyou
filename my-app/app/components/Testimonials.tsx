"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "The Machine Learning Mastery course was challenging but incredibly rewarding. I now feel confident in applying ML techniques to real-world problems.",
    author: "Robert L.",
    role: "AI Engineer",
  },
  {
    quote:
      "CreaturesYou's Data Science course completely transformed my career. The hands-on projects and expert guidance gave me the skills I needed to land my dream job.",
    author: "Jessica M.",
    role: "Data Analyst",
  },
  {
    quote:
      "As a business owner, the AI for Business course opened my eyes to the potential of AI in my industry. It's been a game-changer for my company.",
    author: "Emma S.",
    role: "CEO",
  },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-[#4a90e2] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Students Say</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center">
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 z-10 text-white/80 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={40} />
            </button>

            <div className="overflow-hidden px-12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 text-center ${
                    index === currentTestimonial ? "opacity-100" : "opacity-0 absolute top-0 left-0"
                  }`}
                >
                  <blockquote className="text-2xl italic mb-8 leading-relaxed">"{testimonial.quote}"</blockquote>
                  <cite className="not-italic">
                    <div className="font-bold text-xl mb-2">{testimonial.author}</div>
                    <div className="text-white/80">{testimonial.role}</div>
                  </cite>
                </div>
              ))}
            </div>

            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 z-10 text-white/80 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={40} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

