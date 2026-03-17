import type { Achievement, QuizStatus, QuizQuestion } from '@/types/quiz'

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first-correct',
    title: 'First Correct!',
    description: 'Get your very first answer correct',
    icon: '🎯',
  },
  {
    id: 'on-fire',
    title: 'On Fire!',
    description: 'Get 3 correct answers in a row',
    icon: '🔥',
  },
  {
    id: 'streak-master',
    title: 'Streak Master',
    description: 'Get 5 correct answers in a row',
    icon: '⚡',
  },
  {
    id: 'high-scorer',
    title: 'High Scorer',
    description: 'Score 500 or more points',
    icon: '🏆',
  },
  {
    id: 'perfect-round',
    title: 'Perfect Round!',
    description: 'Complete a quiz without losing any lives',
    icon: '⭐',
  },
  {
    id: 'all-correct',
    title: 'Flawless Victory',
    description: 'Answer every question correctly',
    icon: '💎',
  },
]

export const checkNewAchievement = (
  correctCount: number,
  streak: number,
  score: number,
  lives: number,
  status: QuizStatus,
  questions: QuizQuestion[],
  unlockedIds: string[]
): string | null => {
  const not = (id: string) => !unlockedIds.includes(id)

  if (not('first-correct') && correctCount === 1) return 'first-correct'
  if (not('on-fire') && streak === 3) return 'on-fire'
  if (not('streak-master') && streak === 5) return 'streak-master'
  if (not('high-scorer') && score >= 500) return 'high-scorer'

  if (status === 'finished') {
    if (not('perfect-round') && lives >= 3) return 'perfect-round'
    if (not('all-correct') && questions.length > 0 && correctCount === questions.length)
      return 'all-correct'
  }

  return null
}
