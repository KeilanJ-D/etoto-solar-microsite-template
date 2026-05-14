'use client'

import { useEffect, useRef, useState } from 'react'
import { Calendar, Check, Rocket, TrendingUp, Zap } from 'lucide-react'

const phases = [
  {
    phase: 'PHASE 1 · LAUNCH',
    days: 'Days 1-30',
    items: [
      '100-battery giveaway live',
      'Trade-account drive',
      'Wave 1 KOLs activated',
      'Paid + organic at peak intensity',
    ],
    commit: '~£206K (100 bundles)',
    target: '100 cumulative',
    highlight: true,
  },
  {
    phase: 'PHASE 2 · COMPOUND',
    days: 'Days 31-60',
    items: [
      'Hinen Points System launches publicly',
      '14.4kWh push begins',
      'Birmingham BBQ · Day 45',
      'Wave 2 KOLs activated',
    ],
    commit: '~£18K (14 KOL gifts) + points redemptions begin',
    target: '+100 → 200 cumulative',
    highlight: false,
  },
  {
    phase: 'PHASE 3 · SUSTAIN',
    days: 'Days 61-90',
    items: [
      'Hinen Approved Premier badge launches',
      'Wave 3 KOLs activated',
      'Sprint close-out content',
      'Points programme handover',
    ],
    commit: 'Points redemptions only (variable)',
    target: '+100 → 300 cumulative',
    highlight: false,
  },
]

export default function ShapeOf90Days() {
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
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="shape-of-90-days"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 md:px-6 bg-slate-50 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#ED1C24]/10 text-[#ED1C24] text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Calendar className="w-4 h-4" />
            The Shape of 90 Days
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Three months. One outcome.
            <span className="block text-[#ED1C24]">No cadence stacked on cadence.</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            v3 had a 30/60/90 offer cadence with three different offers in three blocks. v4 has ONE offer that fires in Month 1, then ONE points system that sustains across Months 2 and 3.
          </p>
        </div>

        {/* Three Phases */}
        <div className={`grid lg:grid-cols-3 gap-4 md:gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {phases.map((phase, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden ${
                phase.highlight 
                  ? 'bg-[#ED1C24] text-white' 
                  : 'bg-white border-2 border-[#ED1C24]/20'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="p-5 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  {phase.highlight ? (
                    <Rocket className="w-5 h-5" />
                  ) : i === 1 ? (
                    <TrendingUp className="w-5 h-5 text-[#ED1C24]" />
                  ) : (
                    <Zap className="w-5 h-5 text-[#ED1C24]" />
                  )}
                  <span className={`text-xs font-bold uppercase tracking-wide ${phase.highlight ? 'text-white/80' : 'text-[#ED1C24]'}`}>
                    {phase.phase}
                  </span>
                </div>
                
                <p className={`text-2xl md:text-3xl font-black mb-4 ${phase.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {phase.days}
                </p>
                
                <div className="space-y-2 mb-6">
                  {phase.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${phase.highlight ? 'text-white/80' : 'text-[#ED1C24]'}`} />
                      <span className={`text-sm ${phase.highlight ? 'text-white/90' : 'text-slate-600'}`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className={`pt-4 border-t ${phase.highlight ? 'border-white/20' : 'border-slate-100'}`}>
                  <div className="mb-3">
                    <p className={`text-[10px] uppercase tracking-wide font-semibold ${phase.highlight ? 'text-white/60' : 'text-slate-400'}`}>
                      Hinen Product Commit
                    </p>
                    <p className={`text-sm font-bold ${phase.highlight ? 'text-white' : 'text-slate-900'}`}>
                      {phase.commit}
                    </p>
                  </div>
                  <div>
                    <p className={`text-[10px] uppercase tracking-wide font-semibold ${phase.highlight ? 'text-white/60' : 'text-slate-400'}`}>
                      Onboarded Target
                    </p>
                    <p className={`text-lg font-black ${phase.highlight ? 'text-white' : 'text-[#ED1C24]'}`}>
                      {phase.target}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className={`mt-12 md:mt-16 bg-slate-900 rounded-2xl p-6 md:p-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-[#ED1C24] font-bold text-sm md:text-base mb-2">Why this is simpler than v3</h3>
          <p className="text-white/90 text-sm md:text-base leading-relaxed">
            v3 had three blocks × three different offers × three creative refreshes. v4 has ONE offer (the 100-battery giveaway) and ONE points system that sustains. Customer-facing message is one story across the 90 days. Distributor fulfilment has one route. Internal Hinen comms have one narrative for the board.
          </p>
        </div>
      </div>
    </section>
  )
}
