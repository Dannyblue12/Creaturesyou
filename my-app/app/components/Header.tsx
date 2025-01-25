"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.svg" alt="CreaturesYou Logo" className="h-8 w-auto" />
          <span className="text-2xl font-bold text-primary">CreaturesYou</span>
        </Link>
        <nav
          className={`md:flex ${isMenuOpen ? "flex" : "hidden"} flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}
        >
          <Link href="/services" className="text-gray-700 hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/#courses" className="text-gray-700 hover:text-primary transition-colors">
            Courses
          </Link>
          <Link href="/#features" className="text-gray-700 hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="/#pricing" className="text-gray-700 hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="#" className="btn btn-primary">
            Get Started
          </Link>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}

