import ServiceHero from "./components/ServiceHero"
import ServiceCourses from "./components/ServiceCourses"
import ServiceFeatures from "./components/ServiceFeatures"
import ServiceTestimonials from "./components/ServiceTestimonials"
import ServiceCTA from "./components/ServiceCTA"

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <ServiceHero />
      <ServiceCourses />
      <ServiceFeatures />
      <ServiceTestimonials />
      <ServiceCTA />
    </div>
  )
}

