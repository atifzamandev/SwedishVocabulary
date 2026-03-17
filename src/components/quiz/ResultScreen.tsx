import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useQuiz } from '@/hooks/useQuiz'
import { useNavigate } from '@tanstack/react-router'
import { CATEGORY_CONFIG } from '@/utils/constants'

const getGrade = (
  correctCount: number,
  total: number
): { grade: string; color: string; bg: string; message: string } => {
  const pct = total > 0 ? correctCount / total : 0
  if (pct === 1)
    return {
      grade: 'S',
      color: 'text-yellow-500',
      bg: 'bg-yellow-50',
      message: 'Perfect Score! 🌟',
    }
  if (pct >= 0.8)
    return { grade: 'A', color: 'text-green-500', bg: 'bg-green-50', message: 'Excellent! 🎉' }
  if (pct >= 0.6)
    return { grade: 'B', color: 'text-blue-500', bg: 'bg-blue-50', message: 'Well Done! 👍' }
  if (pct >= 0.4)
    return {
      grade: 'C',
      color: 'text-orange-500',
      bg: 'bg-orange-50',
      message: 'Keep Practicing! 💪',
    }
  return { grade: 'D', color: 'text-red-500', bg: 'bg-red-50', message: 'Try Again! 🔁' }
}

export default function ResultScreen() {
  const {
    score,
    highScore,
    correctCount,
    totalQuestions,
    maxStreak,
    sessionAchievements,
    category,
    startQuiz,
    reset,
  } = useQuiz()
  const navigate = useNavigate()

  const { grade, color, bg, message } = getGrade(correctCount, totalQuestions)
  const isNewHighScore = score > 0 && score >= highScore

  const handleHome = () => {
    reset()
    navigate({ to: '/' })
  }

  const handlePlayAgain = () => {
    if (category) startQuiz(category)
  }

  const categorySlug = category ? CATEGORY_CONFIG[category].slug : null

  return (
    <div className="bg-white rounded-card shadow-2xl w-full max-w-md p-8 text-center mx-4 animate-quiz-feedback">
      {/* Grade badge */}
      <div
        className={cn('inline-flex items-center justify-center w-24 h-24 rounded-full mb-4', bg)}
      >
        <span className={cn('text-6xl font-black', color)}>{grade}</span>
      </div>

      <p className="text-xl font-bold text-text-heading mb-1">{message}</p>
      {isNewHighScore && (
        <p className="text-sm text-yellow-500 font-semibold mb-4">🌟 New High Score: {score}!</p>
      )}

      {/* Category label */}
      {category && (
        <p className="text-sm text-text-muted mb-5">
          {CATEGORY_CONFIG[category].emoji} {category}
        </p>
      )}

      {/* Stats grid */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { label: 'Score', value: score, icon: '🪙' },
          { label: 'Correct', value: `${correctCount}/${totalQuestions}`, icon: '✅' },
          { label: 'Best Streak', value: maxStreak, icon: '🔥' },
        ].map(({ label, value, icon }) => (
          <div key={label} className="bg-blue-50 rounded-btn p-3">
            <div className="text-2xl mb-1">{icon}</div>
            <div className="font-bold text-text-heading text-lg tabular-nums">{value}</div>
            <div className="text-xs text-text-muted">{label}</div>
          </div>
        ))}
      </div>

      {/* Session achievements */}
      {sessionAchievements.length > 0 && (
        <div className="mb-6 p-3 bg-yellow-50 rounded-btn border border-yellow-200">
          <p className="text-xs font-semibold text-yellow-700 mb-2 uppercase tracking-wide">
            Achievements Unlocked
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            {sessionAchievements.map((a) => (
              <span
                key={a.id}
                title={a.description}
                className="bg-white border border-yellow-300 rounded-full px-2.5 py-1 text-xs flex items-center gap-1 font-medium"
              >
                {a.icon} {a.title}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* High score display if not a new record */}
      {!isNewHighScore && highScore > 0 && (
        <p className="text-xs text-text-muted mb-5">
          ⭐ Your best: <span className="font-bold">{highScore}</span>
        </p>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        <Button
          onClick={handlePlayAgain}
          disabled={!categorySlug}
          className="flex-1 bg-cta-gradient hover:opacity-90 text-white font-bold rounded-btn-lg cursor-pointer"
        >
          Play Again
        </Button>
        <Button
          onClick={handleHome}
          variant="outline"
          className="flex-1 border-brand-blue text-brand-blue hover:bg-blue-50 rounded-btn-lg cursor-pointer"
        >
          Home
        </Button>
      </div>
    </div>
  )
}
