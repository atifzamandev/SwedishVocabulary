import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { useQuiz } from '@/hooks/useQuiz'

export default function AnswerInput() {
  const { currentQuestion, status, selectAnswer, nextQuestion } = useQuiz()
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (status !== 'answering') return
    const typed = e.target.value
    setValue(typed)

    // Auto-submit when typed text exactly matches any option (case-insensitive)
    const matchIndex = currentQuestion?.options.findIndex((opt) => opt === typed.trim()) ?? -1

    if (matchIndex !== -1) {
      selectAnswer(matchIndex)
    }
  }

  // Listen on window so Enter still works after the input is disabled
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && status === 'answered') {
        nextQuestion()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [status, nextQuestion])

  const isAnswered = status !== 'answering'
  const trimmed = value.trim()
  const hasNoMatch =
    !isAnswered &&
    trimmed.length > 0 &&
    (currentQuestion?.options.every((opt) => opt !== trimmed) ?? false)

  return (
    <div className="mt-4">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
        disabled={isAnswered}
        autoFocus
        placeholder="Type the Swedish translation..."
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        className={cn(
          'w-full px-4 py-3 border-2 rounded-btn text-sm font-medium transition-all duration-200 outline-none',
          isAnswered
            ? 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed'
            : hasNoMatch
              ? 'bg-white border-red-400 text-text-heading placeholder:text-gray-400'
              : 'bg-white border-brand-blue/40 text-text-heading placeholder:text-gray-400 focus:border-brand-blue focus:shadow-sm'
        )}
      />
      <p
        className={cn(
          'text-xs mt-1.5 text-center',
          hasNoMatch ? 'text-red-500' : 'text-text-muted'
        )}
      >
        {isAnswered
          ? 'Press Enter to continue'
          : hasNoMatch
            ? 'No match — check your spelling and capitalisation'
            : 'Type the correct Swedish word to submit'}
      </p>
    </div>
  )
}
