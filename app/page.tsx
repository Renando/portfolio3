import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import Stats from '@/components/stats'
import FeaturedWork from '@/components/featured-work'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Stats />
      <FeaturedWork />
      <Footer />
    </main>
  )
}
