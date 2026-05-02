import NavBrand from '@/components/NavBrand'
import HamburgerMenu from '@/components/HamburgerMenu'
import { cn } from '@/lib/utils'
import { CATEGORIES } from '@/utils/constants'
import type { Category } from '@/utils/constants'
import { useQuiz } from '@/hooks/useQuiz'

interface QuizHeaderProps {
  activeCategory: Category | null
}

export default function QuizHeader({ activeCategory }: QuizHeaderProps) {
  const { score, highScore, startQuiz } = useQuiz()

  return (
    <header className="bg-nav-gradient h-16 md:h-20 flex items-center justify-between px-4 md:px-10 shadow-md gap-4">
      <NavBrand />

      {/* Desktop: category tabs */}
      <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
        {CATEGORIES.map(({ title }) => (
          <button
            key={title}
            onClick={() => startQuiz(title as Category)}
            className={cn(
              'px-3 py-1.5 rounded-full text-sm font-semibold transition-colors cursor-pointer',
              activeCategory === title
                ? 'bg-white text-brand-blue shadow-sm'
                : 'text-white/90 hover:bg-white/20'
            )}
          >
            {title}
          </button>
        ))}
      </nav>

      {/* Desktop: score display */}
      <div className="hidden md:flex items-center gap-3 text-white shrink-0">
        <div className="flex items-center gap-1.5 bg-white/15 rounded-full px-3 py-1.5">
          <span className="text-base">🪙</span>
          <span className="font-bold text-sm tabular-nums">{score}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-yellow-300 text-sm">⭐</span>
          <span className="text-xs font-medium opacity-90">High Score: {highScore}</span>
        </div>
      </div>

      {/* Mobile: score pill + hamburger */}
      <div className="flex items-center gap-2 md:hidden">
        <div className="flex items-center gap-1.5 bg-white/15 rounded-full px-3 py-1.5 text-white">
          <span className="text-sm">🪙</span>
          <span className="font-bold text-sm tabular-nums">{score}</span>
        </div>

        <HamburgerMenu>
          {(close) => (
            <div className="flex flex-col">
              {/* Category switcher */}
              <p className="text-xs font-semibold text-text-muted uppercase tracking-wide px-4 pt-3 pb-1">
                Switch Category
              </p>
              {CATEGORIES.map(({ title, emoji }) => (
                <button
                  key={title}
                  onClick={() => {
                    startQuiz(title as Category)
                    close()
                  }}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors cursor-pointer text-left',
                    activeCategory === title
                      ? 'bg-blue-50 text-brand-blue font-semibold'
                      : 'text-text-heading hover:bg-gray-50'
                  )}
                >
                  <span className="text-lg">{emoji}</span>
                  {title}
                  {activeCategory === title && (
                    <span className="ml-auto text-brand-blue text-xs">✓</span>
                  )}
                </button>
              ))}

              {/* High score */}
              <div className="border-t border-gray-100 px-4 py-3 flex items-center gap-2 text-sm text-text-muted">
                <span className="text-yellow-400">⭐</span>
                <span>
                  Best: <span className="font-bold text-text-heading">{highScore}</span>
                </span>
              </div>
            </div>
          )}
        </HamburgerMenu>
      </div>
    </header>
  )
}
