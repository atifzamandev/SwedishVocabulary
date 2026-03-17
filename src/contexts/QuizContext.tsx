import { createContext, useContext, useReducer, useCallback, useEffect } from 'react'
import type { ReactNode } from 'react'
import type { QuizState, QuizStatus } from '@/types/quiz'
import type { Category } from '@/utils/constants'
import { generateQuestions } from '@/utils/quizData'
import { checkNewAchievement } from '@/utils/achievements'

const INITIAL_LIVES = 3
const HS_KEY = 'swvocab_highscore'

const makeInitialState = (): QuizState => ({
  category: null,
  questions: [],
  currentIndex: 0,
  score: 0,
  lives: INITIAL_LIVES,
  highScore: Number(localStorage.getItem(HS_KEY) ?? 0),
  streak: 0,
  maxStreak: 0,
  correctCount: 0,
  sessionAchievementIds: [],
  selectedAnswer: null,
  isCorrect: null,
  status: 'idle',
  unlockedAchievementIds: [],
  newAchievementId: null,
})

type QuizAction =
  | { type: 'START_QUIZ'; category: Category }
  | { type: 'SELECT_ANSWER'; index: number }
  | { type: 'NEXT_QUESTION' }
  | { type: 'CLEAR_NEW_ACHIEVEMENT' }
  | { type: 'RESET' }

const withAchievement = (next: QuizState, extra?: Partial<QuizState>): QuizState => {
  const merged = { ...next, ...extra }
  const id = checkNewAchievement(
    merged.correctCount,
    merged.streak,
    merged.score,
    merged.lives,
    merged.status as QuizStatus,
    merged.questions,
    merged.unlockedAchievementIds
  )
  if (!id) return merged
  return {
    ...merged,
    newAchievementId: id,
    unlockedAchievementIds: [...merged.unlockedAchievementIds, id],
    sessionAchievementIds: [...merged.sessionAchievementIds, id],
  }
}

const quizReducer = (state: QuizState, action: QuizAction): QuizState => {
  switch (action.type) {
    case 'START_QUIZ':
      return withAchievement({
        ...makeInitialState(),
        highScore: state.highScore,
        unlockedAchievementIds: state.unlockedAchievementIds,
        category: action.category,
        questions: generateQuestions(action.category),
        status: 'answering',
        sessionAchievementIds: [],
        newAchievementId: null,
      })

    case 'SELECT_ANSWER': {
      if (state.status !== 'answering') return state
      const current = state.questions[state.currentIndex]
      const isCorrect = action.index === current.correctIndex
      const newScore = isCorrect ? state.score + current.pointValue : state.score
      const newLives = isCorrect ? state.lives : state.lives - 1
      const newStreak = isCorrect ? state.streak + 1 : 0
      const next: QuizState = {
        ...state,
        score: newScore,
        lives: newLives,
        highScore: Math.max(state.highScore, newScore),
        streak: newStreak,
        maxStreak: Math.max(state.maxStreak, newStreak),
        correctCount: isCorrect ? state.correctCount + 1 : state.correctCount,
        selectedAnswer: action.index,
        isCorrect,
        status: (newLives <= 0 ? 'finished' : 'answered') as QuizStatus,
        newAchievementId: null,
      }
      return withAchievement(next)
    }

    case 'NEXT_QUESTION': {
      if (state.status !== 'answered') return state
      const nextIndex = state.currentIndex + 1
      const isFinished = nextIndex >= state.questions.length
      const next: QuizState = {
        ...state,
        currentIndex: nextIndex,
        selectedAnswer: null,
        isCorrect: null,
        status: (isFinished ? 'finished' : 'answering') as QuizStatus,
        newAchievementId: null,
      }
      return isFinished ? withAchievement(next) : next
    }

    case 'CLEAR_NEW_ACHIEVEMENT':
      return { ...state, newAchievementId: null }

    case 'RESET':
      return { ...makeInitialState(), highScore: state.highScore }

    default:
      return state
  }
}

interface QuizContextValue {
  state: QuizState
  startQuiz: (category: Category) => void
  selectAnswer: (index: number) => void
  nextQuestion: () => void
  clearNewAchievement: () => void
  reset: () => void
}

const QuizContext = createContext<QuizContextValue | null>(null)

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(quizReducer, undefined, makeInitialState)

  useEffect(() => {
    localStorage.setItem(HS_KEY, String(state.highScore))
  }, [state.highScore])

  const startQuiz = useCallback(
    (category: Category) => dispatch({ type: 'START_QUIZ', category }),
    []
  )
  const selectAnswer = useCallback(
    (index: number) => dispatch({ type: 'SELECT_ANSWER', index }),
    []
  )
  const nextQuestion = useCallback(() => dispatch({ type: 'NEXT_QUESTION' }), [])
  const clearNewAchievement = useCallback(() => dispatch({ type: 'CLEAR_NEW_ACHIEVEMENT' }), [])
  const reset = useCallback(() => dispatch({ type: 'RESET' }), [])

  return (
    <QuizContext.Provider
      value={{ state, startQuiz, selectAnswer, nextQuestion, clearNewAchievement, reset }}
    >
      {children}
    </QuizContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useQuizContext = () => {
  const ctx = useContext(QuizContext)
  if (!ctx) throw new Error('useQuizContext must be used within QuizProvider')
  return ctx
}
