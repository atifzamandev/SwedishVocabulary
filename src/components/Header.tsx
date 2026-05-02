import NavBrand from '@/components/NavBrand'
import NavActions from '@/components/NavActions'
import HamburgerMenu from '@/components/HamburgerMenu'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function Header() {
  return (
    <header className="bg-nav-gradient h-16 md:h-20 flex items-center justify-between px-4 md:px-15 shadow-md">
      <NavBrand />

      {/* Desktop nav */}
      <div className="hidden md:block">
        <NavActions />
      </div>

      {/* Mobile hamburger */}
      <HamburgerMenu>
        {(close) => (
          <div className="flex flex-col p-2">
            <Button
              onClick={close}
              className={cn(
                'justify-start bg-transparent hover:bg-gray-50 text-text-heading shadow-none',
                'font-medium text-sm px-4 py-3 h-auto rounded-btn cursor-pointer'
              )}
            >
              Log In
            </Button>
            <Button
              onClick={close}
              className={cn(
                'justify-start bg-brand-blue-bright hover:bg-brand-blue-bright/90 text-white',
                'font-medium text-sm px-4 py-3 h-auto mt-1 rounded-btn cursor-pointer'
              )}
            >
              Sign Up
            </Button>
          </div>
        )}
      </HamburgerMenu>
    </header>
  )
}
