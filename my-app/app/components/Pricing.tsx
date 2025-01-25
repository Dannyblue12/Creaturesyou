import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    price: 29,
    features: ["5 team members", "Basic analytics", "24/7 support", "10GB storage"],
  },
  {
    name: "Pro",
    price: 99,
    features: [
      "Unlimited team members",
      "Advanced analytics",
      "Priority support",
      "100GB storage",
      "Custom integrations",
    ],
  },
  {
    name: "Enterprise",
    price: 299,
    features: [
      "Unlimited everything",
      "Dedicated account manager",
      "Custom development",
      "On-premise deployment option",
    ],
  },
]

export default function Pricing() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Choose the plan that's right for your team
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-lg bg-white p-8 shadow-lg ring-1 ring-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
                ${plan.price}
                <span className="text-base font-medium text-gray-500">/mo</span>
              </p>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-6 w-6 flex-shrink-0 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 w-full">Get started</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

