import { cn } from '@/lib/utils'
import { useQuiz } from '@/hooks/useQuiz'

export default function QuizProgress() {
  const { currentIndex, totalQuestions, score, lives } = useQuiz()
  const questionNumber = Math.min(currentIndex + 1, totalQuestions)

  return (
    <div className="flex items-start justify-between gap-4 mb-4">
      {/* Segmented progress bar */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-semibold text-text-muted">Question</span>
          <span className="text-sm font-bold text-text-heading tabular-nums">
            {questionNumber} / {totalQuestions}
          </span>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <div
              key={i}
              className={cn(
                'h-2 flex-1 rounded-full transition-colors duration-300',
                i < currentIndex
                  ? 'bg-card-btn-green'
                  : i === currentIndex
                    ? 'bg-brand-blue-btn'
                    : 'bg-gray-200'
              )}
            />
          ))}
        </div>
      </div>

      {/* Score & Lives */}
      <div className="flex items-center gap-3 text-sm font-semibold shrink-0 pt-1">
        <span className="text-green-600 flex items-center gap-1">
          <span>✓</span>
          <span className="tabular-nums">{score}</span>
        </span>
        <span className="text-red-500 flex items-center gap-1">
          <span>✗</span>
          <span className="tabular-nums">{lives}</span>
        </span>
      </div>
    </div>
  )
}
