import Footer from '../components/Footer'

const categories = [
  { title: 'Body Parts', bg: 'bg-card-body', emoji: '🧍' },
  { title: 'Fruits', bg: 'bg-card-fruits', emoji: '🍎' },
  { title: 'Vegetables', bg: 'bg-card-vegetables', emoji: '🥦' },
  { title: 'Groceries', bg: 'bg-card-groceries', emoji: '🛒' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* ── Navbar ───────────────────────────────────────── */}
      <nav className="bg-nav-gradient h-20 flex items-center justify-between px-6 md:px-15 shadow-md">
        <span className="text-white font-bold text-lg md:text-2xl tracking-tight leading-tight">
          Learn Swedish Vocabulary
        </span>

        <div className="flex gap-2 md:gap-3">
          <button className="bg-brand-blue-btn text-white text-sm md:text-base font-medium px-4 md:px-6 py-2 rounded-btn cursor-pointer transition-opacity hover:opacity-90">
            Log In
          </button>
          <button className="bg-brand-blue-bright text-white text-sm md:text-base font-medium px-4 md:px-6 py-2 rounded-btn cursor-pointer transition-opacity hover:opacity-90">
            Sign Up
          </button>
        </div>
      </nav>

      {/* ── Main ─────────────────────────────────────────── */}
      <main className="bg-hero-gradient flex-1 flex flex-col">
        {/* Hero */}
        <section className="flex flex-col items-center text-center px-6 pt-14 pb-10 md:pt-20 md:pb-14">
          <h1 className="text-text-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight max-w-2xl">
            Learn Swedish Vocabulary!
          </h1>
          <p className="text-text-subtitle mt-4 text-base sm:text-lg md:text-xl max-w-xl">
            Improve your Swedish vocabulary through fun, interactive games free!
          </p>
          <button className="bg-cta-gradient shadow-cta mt-8 min-w-[200px] text-white font-bold text-lg md:text-xl px-10 py-4 rounded-btn-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer">
            Start Learning
          </button>
        </section>

        {/* Category Cards */}
        <section className="px-6 pb-16 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {categories.map(({ title, bg, emoji }) => (
              <div
                key={title}
                className={`${bg} rounded-card min-h-[220px] shadow-md flex flex-col items-center p-4 md:p-5`}
              >
                <div className="flex-1 flex items-center justify-center text-6xl md:text-7xl py-3">
                  {emoji}
                </div>
                <p className="text-text-heading font-bold text-sm md:text-base mb-3 text-center">
                  {title}
                </p>
                <button className="bg-card-btn-green text-white text-sm font-semibold px-6 py-2 rounded-btn w-full cursor-pointer transition-opacity hover:opacity-90">
                  Start
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────────── */}
      <Footer />
    </div>
  )
}
