import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CategoryCardProps {
  title: string
  emoji: string
  bg: string
  onStart?: () => void
}

export default function CategoryCard({ title, emoji, bg, onStart }: CategoryCardProps) {
  return (
    <div
      className={cn(bg, 'rounded-card min-h-55 shadow-md flex flex-col items-center p-4 md:p-5')}
    >
      <div className="flex-1 flex items-center justify-center text-6xl md:text-7xl py-3">
        {emoji}
      </div>
      <p className="text-text-heading font-bold text-sm md:text-base mb-3 text-center">{title}</p>
      <Button
        onClick={onStart}
        className="bg-card-btn-green hover:bg-card-btn-green/90 text-white text-sm font-semibold rounded-btn w-full cursor-pointer"
      >
        Start
      </Button>
    </div>
  )
}
