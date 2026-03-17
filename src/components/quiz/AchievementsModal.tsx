import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ACHIEVEMENTS } from '@/utils/achievements'
import { useQuiz } from '@/hooks/useQuiz'

interface AchievementsModalProps {
  onClose: () => void
}

export default function AchievementsModal({ onClose }: AchievementsModalProps) {
  const { unlockedAchievements } = useQuiz()
  const unlockedIds = new Set(unlockedAchievements.map((a) => a.id))

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-card shadow-2xl w-full max-w-sm p-6">
        <h2 className="text-xl font-bold text-text-heading mb-5 text-center">🏆 Achievements</h2>

        <div className="space-y-2">
          {ACHIEVEMENTS.map((achievement) => {
            const unlocked = unlockedIds.has(achievement.id)
            return (
              <div
                key={achievement.id}
                className={cn(
                  'flex items-center gap-3 p-3 rounded-btn border transition-all',
                  unlocked
                    ? 'bg-yellow-50 border-yellow-300'
                    : 'bg-gray-50 border-gray-200 opacity-55'
                )}
              >
                <span className={cn('text-2xl shrink-0', !unlocked && 'grayscale')}>
                  {achievement.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <p
                    className={cn(
                      'text-sm font-bold truncate',
                      unlocked ? 'text-text-heading' : 'text-gray-400'
                    )}
                  >
                    {achievement.title}
                  </p>
                  <p className="text-xs text-text-muted">{achievement.description}</p>
                </div>
                {unlocked && <span className="text-green-500 font-bold shrink-0">✓</span>}
              </div>
            )
          })}
        </div>

        <Button
          onClick={onClose}
          className="w-full mt-5 bg-brand-blue-btn hover:bg-brand-blue text-white rounded-btn cursor-pointer"
        >
          Close
        </Button>
      </div>
    </div>
  )
}
