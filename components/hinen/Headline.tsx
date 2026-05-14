'use client'

import { useEffect, useRef, useState } from 'react'
import { Target, Gift, Globe, PoundSterling } from 'lucide-react'
import { useCountUp } from '@/hooks/use-animate-on-scroll'

export default function Headline() {
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

  const installers = useCountUp(300, 1500, isVisible)
  const systems = useCountUp(100, 1200, isVisible)
  const reach = useCountUp(10, 1400, isVisible)
  const cash = useCountUp(165, 1600, isVisible)

  const stats = [
    {
      icon: Target,
      value: installers,
      suffix: '',
      label: 'Onboarded Installers',
      sub: 'Hinen-approved by Day 90',
      color: '#ED1C24',
    },
    {
      icon: Gift,
      value: systems,
      suffix: '',
      label: 'Free 8.9kWh Systems',
      sub: 'First 100 installers · 30 days only',
      color: '#1A1A1A',
    },
    {
      icon: Globe,
      value: reach,
      suffix: 'M+',
      label: 'UK Reach',
      sub: 'Paid + KOL + organic + email',
      color: '#ED1C24',
    },
    {
      icon: PoundSterling,
      value: cash,
      prefix: '£',
      suffix: 'K',
      label: 'ETOTO Sprint Cash',
      sub: 'All-in 90 days · £550 per installer',
      color: '#10B981',
      highlight: true,
    },
  ]

  return (
    <section
      id="headline"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 md:px-6 bg-slate-50 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#ED1C24]/10 text-[#ED1C24] text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Target className="w-4 h-4" />
            Sprint v4 in Four Numbers
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Sprint v4 in four numbers.
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every line of this microsite exists to make those four numbers real.
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={i}
                className={`group relative bg-white rounded-2xl p-5 md:p-8 border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  stat.highlight 
                    ? 'border-[#F5A623] shadow-lg shadow-[#F5A623]/10' 
                    : 'border-slate-100'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {stat.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F5A623] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                    FINANCIAL OUTCOME
                  </div>
                )}
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${stat.color}10` }}
                >
                  <Icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: stat.color }} />
                </div>
                <p className="text-3xl md:text-5xl lg:text-6xl font-black tabular-nums" style={{ color: stat.color }}>
                  {stat.prefix}{stat.value}{stat.suffix}
                </p>
                <p className="text-sm md:text-base font-bold text-slate-900 mt-2">{stat.label}</p>
                <p className="text-xs md:text-sm text-slate-500 mt-1">{stat.sub}</p>
              </div>
            )
          })}
        </div>

        {/* Footer Note */}
        <p className={`text-center text-xs md:text-sm text-slate-500 mt-8 md:mt-12 max-w-3xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          £165K is ETOTO sprint cash — retainer + production + ad budget + KOL programme + BBQ. Hinen-side product cost (the giveaway and KOL gifts) sits separately at internal cost — see section 19.
        </p>
      </div>
    </section>
  )
}
