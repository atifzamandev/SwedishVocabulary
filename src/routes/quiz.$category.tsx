import { createFileRoute } from '@tanstack/react-router'
import QuizPage from '@/pages/QuizPage'
import { SLUG_TO_CATEGORY } from '@/utils/constants'

export const Route = createFileRoute('/quiz/$category')({
  component: QuizRoute,
})

function QuizRoute() {
  const { category: slug } = Route.useParams()
  const category = SLUG_TO_CATEGORY[slug]

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-text-heading text-lg font-semibold">
          Category &quot;{slug}&quot; not found.
        </p>
      </div>
    )
  }

  return <QuizPage category={category} />
}
