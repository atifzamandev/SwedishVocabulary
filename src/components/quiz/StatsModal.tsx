import { Button } from '@/components/ui/button'
import { useQuiz } from '@/hooks/useQuiz'

interface StatsModalProps {
  onClose: () => void
}

export default function StatsModal({ onClose }: StatsModalProps) {
  const { score, highScore, correctCount, totalQuestions, maxStreak, lives, streak } = useQuiz()
  const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0

  const rows = [
    { label: 'Current Score', value: score, icon: '🪙' },
    { label: 'High Score', value: highScore, icon: '⭐' },
    { label: 'Correct Answers', value: `${correctCount} / ${totalQuestions}`, icon: '✅' },
    { label: 'Accuracy', value: `${accuracy}%`, icon: '🎯' },
    { label: 'Current Streak', value: streak, icon: '🔥' },
    { label: 'Best Streak', value: maxStreak, icon: '⚡' },
    { label: 'Lives Remaining', value: lives, icon: '❤️' },
  ]

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-card shadow-2xl w-full max-w-sm p-6">
        <h2 className="text-xl font-bold text-text-heading mb-5 text-center">📊 Your Stats</h2>

        <div className="space-y-2">
          {rows.map(({ label, value, icon }) => (
            <div
              key={label}
              className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
            >
              <span className="flex items-center gap-2 text-sm text-text-subtitle">
                <span>{icon}</span>
                {label}
              </span>
              <span className="font-bold text-text-heading tabular-nums">{value}</span>
            </div>
          ))}
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
