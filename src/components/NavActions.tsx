import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function NavActions() {
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        className={cn(
          'bg-brand-blue-btn hover:bg-brand-blue-btn/90 text-white',
          'text-sm md:text-base font-medium px-4 md:px-6 h-10 rounded-btn cursor-pointer'
        )}
      >
        Log In
      </Button>
      <Button
        className={cn(
          'bg-brand-blue-bright hover:bg-brand-blue-bright/90 text-white',
          'text-sm md:text-base font-medium px-4 md:px-6 h-10 rounded-btn cursor-pointer'
        )}
      >
        Sign Up
      </Button>
    </div>
  )
}
