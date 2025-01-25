import { Laptop, ProjectorIcon, Award, Users } from "lucide-react"

const features = [
  {
    icon: Laptop,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience in data science and AI.",
  },
  {
    icon: ProjectorIcon,
    title: "Hands-on Projects",
    description: "Apply your skills to real-world scenarios and build an impressive portfolio.",
  },
  {
    icon: Award,
    title: "Industry Certification",
    description: "Earn recognized certificates to boost your career prospects in the data field.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a vibrant community of learners and mentors for collaborative growth.",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#1a237e]">Why Choose CreaturesYou?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6">
                <feature.icon className="w-12 h-12 mx-auto text-[#ff4757]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1a237e]">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

