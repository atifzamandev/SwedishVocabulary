import { cn } from '@/lib/utils'
import { useQuiz } from '@/hooks/useQuiz'

const LABELS = ['A', 'B', 'C', 'D'] as const

export default function AnswerGrid() {
  const { currentQuestion, selectedAnswer, status, selectAnswer } = useQuiz()

  if (!currentQuestion) return null

  const getOptionStyle = (index: number): string => {
    if (status === 'answering') {
      return 'bg-white border-gray-300 text-text-heading hover:border-brand-blue hover:bg-blue-50 cursor-pointer active:scale-[0.98]'
    }
    if (index === currentQuestion.correctIndex) {
      return 'bg-green-500 border-green-500 text-white'
    }
    if (index === selectedAnswer) {
      return 'bg-red-400 border-red-400 text-white'
    }
    return 'bg-white border-gray-200 text-gray-400 opacity-60'
  }

  const getLabelStyle = (index: number): string => {
    if (status === 'answering') return 'bg-gray-100 text-gray-500'
    if (index === currentQuestion.correctIndex) return 'bg-white/25 text-white'
    if (index === selectedAnswer) return 'bg-white/25 text-white'
    return 'bg-gray-100 text-gray-400'
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {currentQuestion.options.map((option, index) => (
        <button
          key={index}
          disabled={status !== 'answering'}
          onClick={() => selectAnswer(index)}
          className={cn(
            'flex items-center gap-2.5 px-4 py-3 border-2 rounded-btn text-left font-medium transition-all duration-200',
            getOptionStyle(index)
          )}
        >
          <span
            className={cn(
              'w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors',
              getLabelStyle(index)
            )}
          >
            {LABELS[index]}
          </span>
          <span className="text-sm">{option}</span>
        </button>
      ))}
    </div>
  )
}
