import { cn } from '@/lib/utils'
import { useQuiz } from '@/hooks/useQuiz'

export default function FeedbackBanner() {
  const { status, isCorrect, currentQuestion } = useQuiz()

  if ((status !== 'answered' && status !== 'finished') || isCorrect === null) return null

  return (
    <div
      className={cn(
        'mt-4 py-3 px-4 rounded-btn text-center animate-quiz-feedback',
        isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
      )}
    >
      {isCorrect ? (
        <>
          <p className={cn('text-base font-bold text-green-600')}>Correct! 🎉</p>
          <p className="text-sm font-semibold text-green-500">
            + {currentQuestion?.pointValue ?? 50} Points!
          </p>
        </>
      ) : (
        <>
          <p className="text-base font-bold text-red-500">Wrong! 😢</p>
          {currentQuestion && (
            <p className="text-sm text-gray-600">
              The answer was:{' '}
              <span className="font-bold text-text-heading">
                {currentQuestion.options[currentQuestion.correctIndex]}
              </span>
            </p>
          )}
        </>
      )}
    </div>
  )
}
