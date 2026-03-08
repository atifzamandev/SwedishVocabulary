export default function Footer() {
  return (
    <footer className="bg-footer-bg flex flex-col sm:flex-row items-center justify-between gap-2 px-6 md:px-15 py-5 sm:py-0 sm:h-20">
      <div className="text-text-muted flex gap-5 text-sm md:text-base">
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
        <a href="#" className="hover:underline">
          Help
        </a>
      </div>
      <span className="text-text-muted text-sm md:text-base">© 2026 SwedishVocab.com</span>
    </footer>
  )
}
