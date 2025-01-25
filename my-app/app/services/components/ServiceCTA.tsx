import { Button } from "@/components/ui/button"

export default function ServiceCTA() {
  return (
    <section className="py-20 bg-[#ff4757]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Data Science Journey?</h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Join thousands of students who are transforming their careers with CreaturesYou.
        </p>
        <Button className="bg-white text-[#ff4757] hover:bg-white/90 text-lg px-8 py-6 rounded-full">
          Get Started Today
        </Button>
      </div>
    </section>
  )
}

