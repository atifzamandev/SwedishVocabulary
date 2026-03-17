import { useEffect } from 'react'
import { useQuiz } from '@/hooks/useQuiz'

export default function AchievementToast() {
  const { newAchievement, clearNewAchievement } = useQuiz()

  useEffect(() => {
    if (!newAchievement) return
    const timer = setTimeout(clearNewAchievement, 3000)
    return () => clearTimeout(timer)
  }, [newAchievement, clearNewAchievement])

  if (!newAchievement) return null

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-quiz-toast pointer-events-none">
      <div className="bg-yellow-400 text-yellow-900 rounded-card shadow-2xl px-5 py-3 flex items-center gap-3 whitespace-nowrap">
        <span className="text-2xl">{newAchievement.icon}</span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider opacity-70">
            Achievement Unlocked!
          </p>
          <p className="font-bold text-sm">{newAchievement.title}</p>
        </div>
      </div>
    </div>
  )
}
