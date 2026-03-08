import NavBrand from '@/components/NavBrand'
import NavActions from '@/components/NavActions'

export default function Header() {
  return (
    <header className="bg-nav-gradient h-20 flex items-center justify-between px-6 md:px-15 shadow-md">
      <NavBrand />
      <NavActions />
    </header>
  )
}
