import { useEffect, useState } from 'react'
import { QuizProvider } from '@/contexts/QuizContext'
import { useQuiz } from '@/hooks/useQuiz'
import QuizHeader from '@/components/quiz/QuizHeader'
import QuizProgress from '@/components/quiz/QuizProgress'
import AnswerGrid from '@/components/quiz/AnswerGrid'
import AnswerInput from '@/components/quiz/AnswerInput'
import FeedbackBanner from '@/components/quiz/FeedbackBanner'
import QuizFooter from '@/components/quiz/QuizFooter'
import StatsModal from '@/components/quiz/StatsModal'
import AchievementsModal from '@/components/quiz/AchievementsModal'
import AchievementToast from '@/components/quiz/AchievementToast'
import ResultScreen from '@/components/quiz/ResultScreen'
import type { Category } from '@/utils/constants'

interface QuizPageInnerProps {
  category: Category
}

const QuizPageInner = ({ category }: QuizPageInnerProps) => {
  const { status, startQuiz, currentQuestion } = useQuiz()
  const [showStats, setShowStats] = useState(false)
  const [showAchievements, setShowAchievements] = useState(false)

  useEffect(() => {
    startQuiz(category)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category])

  return (
    <div className="min-h-screen flex flex-col">
      <QuizHeader activeCategory={category} />

      <main className="bg-hero-image flex-1 flex items-center justify-center py-8 px-4">
        {status === 'finished' ? (
          <ResultScreen />
        ) : (
          <div className="w-full max-w-xl">
            {/* Quiz card */}
            <div className="bg-white rounded-card shadow-2xl overflow-hidden">
              {/* Card header bar */}
              <div className="bg-brand-blue px-5 py-3">
                <p className="text-white font-bold">Translate the Word!</p>
              </div>

              {/* Card body */}
              <div className="p-5">
                <QuizProgress />

                {/* Word + emoji display */}
                {currentQuestion && (
                  <div className="flex flex-col items-center gap-2 my-6">
                    <span className="text-8xl leading-none">{currentQuestion.emoji}</span>
                    <span className="text-3xl font-bold text-text-heading mt-1">
                      {currentQuestion.englishWord}
                    </span>
                  </div>
                )}

                <AnswerGrid />
                <AnswerInput />
                <FeedbackBanner />
                <QuizFooter
                  onShowStats={() => setShowStats(true)}
                  onShowAchievements={() => setShowAchievements(true)}
                />
              </div>
            </div>
          </div>
        )}
      </main>

      {showStats && <StatsModal onClose={() => setShowStats(false)} />}
      {showAchievements && <AchievementsModal onClose={() => setShowAchievements(false)} />}
      <AchievementToast />
    </div>
  )
}

interface QuizPageProps {
  category: Category
}

export default function QuizPage({ category }: QuizPageProps) {
  return (
    <QuizProvider>
      <QuizPageInner category={category} />
    </QuizProvider>
  )
}
