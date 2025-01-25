"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    title: "Data Science Excellence",
    description: "Unlock the power of data",
    image:
      "https://vorv4jye8h09tbza.public.blob.vercel-storage.com/images%20(40)-VCIiVw2HDn1E2vee0nFkdFZ9RFTFrR.jpeg",
  },
  {
    title: "Machine Learning Mastery",
    description: "Build intelligent solutions",
    image:
      "https://vorv4jye8h09tbza.public.blob.vercel-storage.com/images%20(41)-Y2sVgVtPaSn0SYoqUkuqwWzLolRul6.jpeg",
  },
  {
    title: "AI Innovation",
    description: "Shape the future of technology",
    image:
      "https://vorv4jye8h09tbza.public.blob.vercel-storage.com/images%20(42)-2ZBfLnm1keD9NCXW1tqBXXKuoYH8GY.jpeg",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const touchStart = useRef(0)
  const touchEnd = useRef(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const difference = touchStart.current - touchEnd.current
    if (Math.abs(difference) > 50) {
      // Minimum swipe distance
      if (difference > 0) {
        // Swipe left
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      } else {
        // Swipe right
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      }
    }
  }

  return (
    <section
      className="relative h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(219, 112, 147, 0.9), 
                rgba(102, 51, 153, 0.9)
              ),
              url(${slide.image}) center/cover no-repeat
            `,
          }}
        >
          <div className="container mx-auto h-full flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">{slide.title}</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">{slide.description}</p>
            <Button className="bg-[#ff4757] hover:bg-[#ff6b81] text-white rounded-full px-8 py-6 text-lg">
              Explore Courses →
            </Button>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

