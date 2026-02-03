import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-orange-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.1),transparent_50%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-4 py-2 mb-6">
              <Sparkles size={16} className="text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">
                Available for Freelance
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
                Renando
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              3D Artist & VFX Specialist
            </h2>

            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Crafting Immersive Digital Worlds
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-3 bg-cyan-400 text-black font-semibold rounded-full hover:bg-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50 hover:scale-105"
              >
                View Portfolio
                <ArrowRight size={20} className="ml-2" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-orange-400 text-orange-400 font-semibold rounded-full hover:bg-orange-400 hover:text-black transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.15),transparent_70%)]"></div>

              <div className="text-center z-10">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Sparkles size={40} className="text-black" />
                </div>
                <p className="text-gray-400 text-sm">Interactive 3D Character</p>
                <p className="text-gray-500 text-xs mt-2">
                  [Spline embed will be integrated here]
                </p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-48 h-48 border-2 border-cyan-400/20 rounded-full animate-ping"
                  style={{ animationDuration: '3s' }}
                ></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-64 h-64 border-2 border-orange-400/20 rounded-full animate-ping"
                  style={{ animationDuration: '4s' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-cyan-400 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
