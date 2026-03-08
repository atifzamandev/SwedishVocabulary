import Footer from '../components/Footer'

const categories = [
  {
    title: 'Body Parts',
    bg: 'bg-card-body',
    emoji: '🧍',
  },
  {
    title: 'Fruits',
    bg: 'bg-card-fruits',
    emoji: '🍎',
  },
  {
    title: 'Vegetables',
    bg: 'bg-card-vegetables',
    emoji: '🥦',
  },
  {
    title: 'Groceries',
    bg: 'bg-card-groceries',
    emoji: '🛒',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* ── Navbar ───────────────────────────────────────── */}
      <nav
        className="flex items-center justify-between px-6 md:px-15 shadow-md"
        style={{ background: 'linear-gradient(to right, #2F5EA8, #3E7BD8)', height: '80px' }}
      >
        <span className="text-white font-bold text-lg md:text-2xl tracking-tight leading-tight">
          Learn Swedish Vocabulary
        </span>

        <div className="flex gap-2 md:gap-3">
          <button
            className="text-white text-sm md:text-base font-medium px-4 md:px-6 py-2 rounded-lg cursor-pointer transition-opacity hover:opacity-90"
            style={{ background: '#3C6ED3' }}
          >
            Log In
          </button>
          <button
            className="text-white text-sm md:text-base font-medium px-4 md:px-6 py-2 rounded-lg cursor-pointer transition-opacity hover:opacity-90"
            style={{ background: '#5DA7FF' }}
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* ── Main ─────────────────────────────────────────── */}
      <main
        className="flex-1 flex flex-col"
        style={{ background: 'linear-gradient(to bottom, #2E66B6 0%, #9EC6E8 55%, #d6ecf7 100%)' }}
      >
        {/* Hero */}
        <section className="flex flex-col items-center text-center px-6 pt-14 pb-10 md:pt-20 md:pb-14">
          <h1
            className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight max-w-2xl"
            style={{ color: '#1F4E8C' }}
          >
            Learn Swedish Vocabulary!
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-xl" style={{ color: '#3A5C7A' }}>
            Improve your Swedish vocabulary through fun, interactive games free!
          </p>
          <button
            className="mt-8 text-white font-bold text-lg md:text-xl px-10 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            style={{
              background: 'linear-gradient(to right, #6EDC64, #3FAE3F)',
              minWidth: '200px',
              boxShadow: '0 4px 16px rgba(63,174,63,0.35)',
            }}
          >
            Start Learning
          </button>
        </section>

        {/* Category Cards */}
        <section className="px-6 pb-16 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {categories.map(({ title, bg, emoji }) => (
              <div
                key={title}
                className={`${bg} rounded-card shadow-md flex flex-col items-center p-4 md:p-5`}
                style={{ minHeight: '220px' }}
              >
                <div className="flex-1 flex items-center justify-center text-6xl md:text-7xl py-3">
                  {emoji}
                </div>
                <p
                  className="font-bold text-sm md:text-base mb-3 text-center"
                  style={{ color: '#1F4E8C' }}
                >
                  {title}
                </p>
                <button
                  className="text-white text-sm font-semibold px-6 py-2 rounded-lg w-full cursor-pointer transition-opacity hover:opacity-90"
                  style={{ background: '#4CAF50' }}
                >
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
