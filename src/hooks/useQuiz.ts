import { useQuizContext } from '@/contexts/QuizContext'
import { ACHIEVEMENTS } from '@/utils/achievements'

export const useQuiz = () => {
  const { state, startQuiz, selectAnswer, nextQuestion, clearNewAchievement, reset } =
    useQuizContext()

  const currentQuestion = state.questions[state.currentIndex] ?? null
  const totalQuestions = state.questions.length

  const unlockedAchievements = ACHIEVEMENTS.filter((a) =>
    state.unlockedAchievementIds.includes(a.id)
  )
  const sessionAchievements = ACHIEVEMENTS.filter((a) => state.sessionAchievementIds.includes(a.id))
  const newAchievement = ACHIEVEMENTS.find((a) => a.id === state.newAchievementId) ?? null

  return {
    category: state.category,
    status: state.status,
    currentQuestion,
    currentIndex: state.currentIndex,
    totalQuestions,
    score: state.score,
    lives: state.lives,
    highScore: state.highScore,
    streak: state.streak,
    maxStreak: state.maxStreak,
    correctCount: state.correctCount,
    selectedAnswer: state.selectedAnswer,
    isCorrect: state.isCorrect,
    unlockedAchievements,
    sessionAchievements,
    newAchievement,
    startQuiz,
    selectAnswer,
    nextQuestion,
    clearNewAchievement,
    reset,
  }
}
