import { useState, useEffect, useRef } from 'react'

interface HamburgerMenuProps {
  children: (close: () => void) => React.ReactNode
}

export default function HamburgerMenu({ children }: HamburgerMenuProps) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        close()
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [open])

  return (
    <div ref={menuRef} className="relative md:hidden">
      {/* Hamburger / Close button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-btn hover:bg-white/20 transition-colors cursor-pointer"
      >
        <span
          className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`}
        />
        <span
          className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${open ? 'opacity-0' : ''}`}
        />
        <span
          className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`}
        />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-card shadow-xl border border-gray-100 overflow-hidden z-50 animate-quiz-feedback">
          {children(close)}
        </div>
      )}
    </div>
  )
}
