import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function FeaturedWork() {
  const works = [
    {
      title: 'Cyberpunk Character',
      category: 'Character Design',
      image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&h=400&fit=crop',
    },
    {
      title: 'Sci-Fi Environment',
      category: '3D Environment',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop',
    },
    {
      title: 'Product Visualization',
      category: 'Product Render',
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&h=400&fit=crop',
    },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore a selection of my latest 3D art and VFX projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {works.map((work, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-video bg-gray-800 cursor-pointer"
            >
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {work.title}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {work.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105"
          >
            View All Projects
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
