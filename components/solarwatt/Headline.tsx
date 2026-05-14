'use client'

import { useEffect, useRef, useState } from 'react'
import { useCountUp } from '@/hooks/use-animate-on-scroll'
import { Target, Calendar, PoundSterling, TrendingUp } from 'lucide-react'

export default function Headline() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const installers = useCountUp(40, 1500, isVisible)
  const months = useCountUp(6, 1200, isVisible)
  const investment = useCountUp(63, 1500, isVisible)
  const ltvRatio = useCountUp(76, 1800, isVisible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const metrics = [
    {
      icon: Target,
      value: installers,
      suffix: '',
      label: 'Onboarded Installers',
      sublabel: 'Installing SOLARWATT kit by 31 Dec 2026',
      color: '#0066B3',
    },
    {
      icon: Calendar,
      value: months,
      suffix: ' mo',
      label: 'Window to Deliver',
      sublabel: 'Internal sprint runs M1-M6, external M2-M4',
      color: '#0066B3',
    },
    {
      icon: PoundSterling,
      value: investment,
      prefix: '£',
      suffix: 'K',
      label: 'SOLARWATT Cash',
      sublabel: '£48K internal + £15K external sponsored ad spend',
      color: '#F5921E',
    },
    {
      icon: TrendingUp,
      value: ltvRatio,
      suffix: ':1',
      label: 'LTV : CAC',
      sublabel: '~£4.8M projected installer LTV vs £63K commitment',
      color: '#10B981',
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-28 px-4 md:px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            The Headline
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            The Whole Sprint, <span className="text-[#0066B3]">In Four Numbers</span>
          </h2>
        </div>

        {/* Four metrics */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div 
                key={index}
                className="bg-white border border-slate-100 rounded-xl md:rounded-2xl p-5 md:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <Icon className="w-6 h-6 mx-auto mb-3" style={{ color: metric.color }} />
                <p className="text-2xl md:text-4xl font-black" style={{ color: metric.color }}>
                  {metric.prefix}{metric.value}{metric.suffix}
                </p>
                <p className="text-sm font-semibold text-slate-900 mt-2">{metric.label}</p>
                <p className="text-xs text-slate-500 mt-1">{metric.sublabel}</p>
              </div>
            )
          })}
        </div>

        {/* The multiplier */}
        <div className={`bg-gradient-to-r from-[#0066B3] to-[#004d8a] rounded-xl md:rounded-2xl p-6 md:p-8 text-white transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-xl font-bold mb-4">The Multiplier</h3>
          <p className="text-white/90 leading-relaxed">
            SOLARWATT invests <span className="font-bold text-white">£63,000</span> across 6 months. In return: <span className="font-bold text-white">40 onboarded installer partners</span>, a permanent UK installer-acquisition engine, <span className="font-bold text-white">~10 million UK paid + organic impressions</span>, two sponsored UK installer accounts running SOLARWATT-branded campaigns to homeowners, and a CRM-tracked partner network worth <span className="font-bold text-white">~£4.8M of installer-driven UK wholesale revenue</span> across the next 5 years.
          </p>
          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-lg font-semibold">
              £1,575 per onboarded installer at the headline target.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
