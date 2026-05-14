'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Gift } from 'lucide-react'

export default function LeverHero() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="lever"
      ref={sectionRef}
      className="relative py-24 md:py-40 px-4 md:px-6 bg-[#ED1C24] overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#ED1C24] via-[#D91920] to-[#B91419]" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-black/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className={`mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <span className="inline-flex items-center gap-2 bg-white/10 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full border border-white/20">
            <Gift className="w-4 h-4" />
            The Lever · 100-Battery Giveaway
          </span>
        </div>

        {/* Main headline */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
            Free Hinen 8.9kWh All-in-One.
            <span className="block">First 100 installers.</span>
            <span className="block text-[#FFB8B8]">Thirty days only.</span>
          </h2>
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            This is the headline of the entire sprint. It&apos;s also, frankly, an industry-breaking move. No UK manufacturer has put a free-product offer in front of installers at this scale.
          </p>
          <p className="text-sm md:text-base text-[#FFE0E0] max-w-xl mx-auto mt-4 italic">
            100 bundles · ~£2,060 each (Hinen direct cost) · ~£206K total Hinen-side commitment.
          </p>
        </div>

        {/* CTA Button */}
        <a 
          href="#how-it-works"
          className={`mt-10 md:mt-12 inline-flex items-center gap-2 md:gap-3 bg-white hover:bg-slate-100 text-[#ED1C24] px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-xl group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '500ms' }}
        >
          How It Works
          <ChevronDown className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  )
}
