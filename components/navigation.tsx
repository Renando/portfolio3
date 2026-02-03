'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight">
            <span className="text-white">Rena</span>
            <span className="text-cyan-400">ndo</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium transition-colors duration-200 text-cyan-400"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors duration-200 text-gray-300 hover:text-white"
            >
              About
            </Link>
            <Link
              href="/experience"
              className="text-sm font-medium transition-colors duration-200 text-gray-300 hover:text-white"
            >
              Experience
            </Link>
            <Link
              href="/portfolio"
              className="text-sm font-medium transition-colors duration-200 text-gray-300 hover:text-white"
            >
              Portfolio
            </Link>
            <Link
              href="/testimonials"
              className="text-sm font-medium transition-colors duration-200 text-gray-300 hover:text-white"
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors duration-200 text-gray-300 hover:text-white"
            >
              Contact
            </Link>
          </div>

          <button
            className="md:hidden text-white hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  )
}
