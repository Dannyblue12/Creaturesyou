"use client"

import { useState } from "react"
import { Star, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "all", name: "All" },
  { id: "development", name: "Development" },
  { id: "design", name: "Design" },
  { id: "business", name: "Business" },
  { id: "marketing", name: "Marketing" },
]

const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    category: "development",
    duration: "12 weeks",
    students: 15420,
    rating: 4,
    price: 79.99,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20250123-202040-ZZcHLqCjmViSDZyhh0QIJRn58K9dF5.png",
  },
  {
    id: 2,
    title: "UX/UI Design Masterclass",
    instructor: "Michael Chen",
    category: "design",
    duration: "8 weeks",
    students: 8750,
    rating: 4,
    price: 89.99,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20250123-202040-ZZcHLqCjmViSDZyhh0QIJRn58K9dF5.png",
  },
  {
    id: 3,
    title: "Business Analytics Fundamentals",
    instructor: "Emma Thompson",
    category: "business",
    duration: "10 weeks",
    students: 6320,
    rating: 5,
    price: 99.99,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20250123-202040-ZZcHLqCjmViSDZyhh0QIJRn58K9dF5.png",
  },
  {
    id: 4,
    title: "Digital Marketing Strategy",
    instructor: "David Lee",
    category: "marketing",
    duration: "6 weeks",
    students: 4890,
    rating: 4,
    price: 69.99,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20250123-202040-ZZcHLqCjmViSDZyhh0QIJRn58K9dF5.png",
  },
]

export default function ServiceCourses() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredCourses = courses.filter((course) => activeCategory === "all" || course.category === activeCategory)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="relative h-48">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/90 to-blue-500/90"
                  style={{
                    backgroundImage: `url(${course.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.instructor}</p>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < course.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">({course.students.toLocaleString()} students)</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <span className="text-2xl font-bold">${course.price}</span>
                </div>
                <Button className="w-full">Learn More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

