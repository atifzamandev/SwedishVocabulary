import NavBrand from '@/components/NavBrand'
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

      {/* Category Tabs */}
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

      {/* Score display */}
      <div className="flex items-center gap-3 text-white shrink-0">
        <div className="flex items-center gap-1.5 bg-white/15 rounded-full px-3 py-1.5">
          <span className="text-base">🪙</span>
          <span className="font-bold text-sm tabular-nums">{score}</span>
        </div>
        <div className="hidden sm:flex items-center gap-1">
          <span className="text-yellow-300 text-sm">⭐</span>
          <span className="text-xs font-medium opacity-90">High Score: {highScore}</span>
        </div>
      </div>
    </header>
  )
}
