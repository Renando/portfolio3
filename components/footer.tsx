import Link from 'next/link'
import {
  Palette,
  Linkedin,
  Instagram,
  Youtube,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Rena</span>
              <span className="text-cyan-400">ndo</span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              3D Artist & VFX Specialist crafting immersive digital experiences
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link
                href="/about"
                className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
              >
                About Me
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/experience"
                className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
              >
                Experience
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="ArtStation"
              >
                <Palette size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} Renando. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
