import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import CategoryCard from '@/components/CategoryCard'
import { CATEGORIES } from '@/utils/constants'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* ── Header ───────────────────────────────────────── */}
      <Header />

      {/* ── Main ─────────────────────────────────────────── */}
      <main className="bg-hero-image flex-1 flex flex-col">
        {/* Hero */}
        <HeroSection />

        {/* Category Cards */}
        <section className="px-6 pb-16 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {CATEGORIES.map(({ title, bg, emoji }) => (
              <CategoryCard key={title} title={title} bg={bg} emoji={emoji} />
            ))}
          </div>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────────── */}
      <Footer />
    </div>
  )
}
