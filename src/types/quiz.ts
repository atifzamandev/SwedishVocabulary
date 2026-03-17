import type { Category } from '@/utils/constants'

export interface QuizQuestion {
  id: string
  englishWord: string
  swedishWord: string
  emoji: string
  options: string[]
  correctIndex: number
  pointValue: number
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
}

export type QuizStatus = 'idle' | 'answering' | 'answered' | 'finished'

export interface QuizState {
  category: Category | null
  questions: QuizQuestion[]
  currentIndex: number
  score: number
  lives: number
  highScore: number
  streak: number
  maxStreak: number
  correctCount: number
  sessionAchievementIds: string[]
  selectedAnswer: number | null
  isCorrect: boolean | null
  status: QuizStatus
  unlockedAchievementIds: string[]
  newAchievementId: string | null
}
