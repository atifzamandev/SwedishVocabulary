import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const footerLinks = [
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Help', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-footer-bg">
      <Separator />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-6 md:px-15 py-4 sm:h-16">
        <nav className="flex items-center gap-1">
          {footerLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={cn(
                buttonVariants({ variant: 'link', size: 'sm' }),
                'text-text-muted hover:text-text-heading px-2'
              )}
            >
              {label}
            </a>
          ))}
        </nav>
        <p className="text-text-muted text-sm">© 2026 SwedishVocab.com</p>
      </div>
    </footer>
  )
}
