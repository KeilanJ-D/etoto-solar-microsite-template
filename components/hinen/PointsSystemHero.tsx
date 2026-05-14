'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown, RefreshCcw } from 'lucide-react'

export default function PointsSystemHero() {
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
      id="points-system"
      ref={sectionRef}
      className="relative py-24 md:py-40 px-4 md:px-6 bg-[#ED1C24] overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#ED1C24] via-[#D91920] to-[#B91419]" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-black/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className={`mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <span className="inline-flex items-center gap-2 bg-white/10 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full border border-white/20">
                <RefreshCcw className="w-4 h-4" />
                The Hinen Points System · The Lifetime Engine
              </span>
            </div>

            <p className={`text-xs md:text-sm uppercase tracking-widest text-white/60 font-semibold mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              BEYOND THE GIVEAWAY
            </p>

            {/* Main headline */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                The simplest rebate is one
                <span className="block text-[#FFB8B8]">that keeps installers loyal forever.</span>
              </h2>
              <p className="text-base md:text-lg text-white/90 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Sigenergy do this brilliantly. Every purchase through a bonded distributor earns points; points redeem for kit, ad budget, premium status, training. We launch the same engine on the back of the giveaway — so the sprint isn&apos;t a 1-month promo, it&apos;s the launch of the permanent installer-loyalty programme that compounds Hinen&apos;s network for years.
              </p>
            </div>

            {/* CTA Button */}
            <a 
              href="#points-earn-redeem"
              className={`mt-8 inline-flex items-center gap-2 md:gap-3 bg-white hover:bg-slate-100 text-[#ED1C24] px-6 md:px-8 py-3 md:py-4 text-base font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-xl group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '500ms' }}
            >
              See Earn + Redeem
              <ChevronDown className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Right - Circular Diagram */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Center Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <div className="text-center px-4">
                    <p className="text-xs md:text-sm font-bold text-[#ED1C24] uppercase tracking-wide">The Lifetime</p>
                    <p className="text-xs md:text-sm font-bold text-[#ED1C24] uppercase tracking-wide">Engine</p>
                  </div>
                </div>
              </div>

              {/* Nodes */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 bg-white/20 border border-white/40 text-white px-4 py-2 rounded-full text-xs md:text-sm font-bold">
                EARN POINTS
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white/20 border border-white/40 text-white px-4 py-2 rounded-full text-xs md:text-sm font-bold">
                REDEEM
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 bg-white/20 border border-white/40 text-white px-4 py-2 rounded-full text-xs md:text-sm font-bold">
                RE-ENGAGE
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white/20 border border-white/40 text-white px-4 py-2 rounded-full text-xs md:text-sm font-bold">
                REPEAT
              </div>

              {/* Circular arrows (using CSS) */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                />
              </svg>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-3 gap-2 mt-8 text-center text-white/80">
              <div>
                <p className="text-xs font-bold text-white">Immediate Value</p>
                <p className="text-[10px] mt-1">Free product · cash rebates · ad budget credits</p>
              </div>
              <div>
                <p className="text-xs font-bold text-white">Long-Term Value</p>
                <p className="text-[10px] mt-1">Repeat-purchase loyalty · lifetime installer relationship</p>
              </div>
              <div>
                <p className="text-xs font-bold text-white">Strategic Value</p>
                <p className="text-[10px] mt-1">Compounding network moat · lower competitor switching</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
