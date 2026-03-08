import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 pt-14 pb-10 md:pt-20 md:pb-14 gap-5 min-h-90">
      <h1 className="text-text-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight max-w-2xl font-sans">
        Learn Swedish Vocabulary!
      </h1>

      <p className="text-text-subtitle text-base sm:text-lg md:text-xl max-w-xl">
        Improve your Swedish vocabulary through fun, interactive games free!
      </p>

      <Button className="bg-cta-gradient shadow-cta w-60 h-15 text-white font-bold text-lg md:text-[22px] rounded-btn-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer">
        Start Learning
      </Button>
    </section>
  )
}
