import { Button } from '@/components/ui/button'
import { useQuiz } from '@/hooks/useQuiz'

interface QuizFooterProps {
  onShowStats: () => void
  onShowAchievements: () => void
}

export default function QuizFooter({ onShowStats, onShowAchievements }: QuizFooterProps) {
  const { status, nextQuestion } = useQuiz()

  return (
    <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-200">
      <Button
        onClick={nextQuestion}
        disabled={status !== 'answered'}
        className="bg-brand-blue-btn hover:bg-brand-blue text-white px-8 rounded-btn font-semibold disabled:opacity-40 cursor-pointer"
      >
        Next
      </Button>

      <div className="flex items-center gap-2">
        <button
          onClick={onShowStats}
          className="flex items-center gap-1.5 px-3 py-2 rounded-btn border border-gray-200 hover:bg-gray-50 text-text-muted text-sm font-medium transition-colors cursor-pointer"
        >
          <span>📊</span>
          <span className="hidden sm:inline">Stats</span>
        </button>
        <button
          onClick={onShowAchievements}
          className="flex items-center gap-1.5 px-3 py-2 rounded-btn border border-gray-200 hover:bg-gray-50 text-text-muted text-sm font-medium transition-colors cursor-pointer"
        >
          <span>🏆</span>
          <span className="hidden sm:inline">Achievements</span>
        </button>
      </div>
    </div>
  )
}
