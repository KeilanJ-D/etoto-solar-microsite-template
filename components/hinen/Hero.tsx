'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, Info, Zap, Target, TrendingUp } from 'lucide-react'
import { useCountUp } from '@/hooks/use-animate-on-scroll'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [showStats, setShowStats] = useState(false)
  const [expandedStat, setExpandedStat] = useState<number | null>(null)
  
  const installers = useCountUp(300, 1500, showStats)
  const investment = useCountUp(165, 1200, showStats)
  const ltv = useCountUp(58, 1800, showStats)

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => setShowStats(true), 800)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    { 
      value: installers, 
      suffix: '', 
      label: 'Onboarded Installers', 
      color: '#ED1C24',
      icon: Target,
      context: '300 Hinen-approved installer partners signed and onboarded by Day 90 of the sprint. Sourced through ETOTO\'s 5,500-strong MCS-accredited installer marketing list — the largest in the UK.'
    },
    { 
      value: investment, 
      prefix: '£', 
      suffix: 'K', 
      label: 'ETOTO Sprint Cash', 
      color: '#1A1A1A',
      icon: TrendingUp,
      context: '£165K all-in across 90 days. £24K retainer + £20K production + £90K paid Meta + £20K KOL programme + £10K Birmingham BBQ + £1K contingency. £550 per onboarded installer — vs £750-£1,500 industry benchmark for B2B installer acquisition.'
    },
    { 
      value: ltv, 
      suffix: ':1', 
      label: 'LTV : CAC Ratio', 
      color: '#10B981',
      icon: TrendingUp,
      context: '~£24M projected installer LTV across 5 years vs ~£410K total Hinen-side commitment (£165K ETOTO + £224K product + £21K Q1 points redemptions). 58:1 ratio. Plus a permanent loyalty engine that compounds beyond Year 1.'
    },
  ]

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-6 py-16 md:py-20 bg-gradient-to-br from-white via-slate-50/50 to-red-50/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 md:w-96 md:h-96 bg-[#ED1C24]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 md:w-[500px] md:h-[500px] bg-[#1A1A1A]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#ED1C24]/3 to-[#1A1A1A]/3 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-[#ED1C24]/20 rounded-full animate-float hidden md:block"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 4) * 20}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${4 + i * 0.5}s`,
          }}
        />
      ))}

      {/* Logos - ETOTO × HINEN */}
      <div className={`flex items-center gap-4 md:gap-8 mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
        <div className="bg-slate-900 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 shadow-xl hover:scale-105 transition-transform">
          <Image
            src="/logos/etoto-logo.png"
            alt="ETOTO Media"
            width={40}
            height={40}
            className="w-8 h-8 md:w-10 md:h-10"
          />
        </div>
        <span className="text-[#ED1C24] font-black text-xl md:text-3xl animate-pulse">×</span>
        <div className="bg-white rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 shadow-xl border border-slate-200 hover:scale-105 transition-transform">
          <Image
            src="/logos/hinen-logo.png"
            alt="HINEN"
            width={120}
            height={40}
            loading="eager"
            className="h-8 md:h-10"
            style={{ width: 'auto' }}
          />
        </div>
      </div>

      {/* Badge */}
      <div className={`mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <span className="inline-flex items-center gap-2 bg-[#ED1C24]/10 text-[#ED1C24] text-xs md:text-sm font-semibold px-4 py-2 rounded-full">
          <Zap className="w-4 h-4" />
          ETOTO Media × HINEN — Sprint v4 · The Simplified Plan
        </span>
      </div>

      {/* Main headline */}
      <div className={`text-center max-w-5xl transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6 text-balance">
          One offer. One month.
          <span className="block bg-gradient-to-r from-[#ED1C24] to-[#B91419] bg-clip-text text-transparent">
            One hundred installers.
          </span>
          <span className="block text-slate-900">
            Then a points engine that runs forever.
          </span>
        </h1>
        <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Re-scoped on Hinen marketing&apos;s feedback. Tighter, simpler, sharper — but with a <span className="font-semibold text-slate-900">permanent installer-loyalty engine</span> launching on the back of a single 90-day sprint.
        </p>
        <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto mt-3">
          Prepared for Steve, Candy, Nikita and the Hinen UK board.
        </p>
      </div>

      {/* Animated stats with expandable context */}
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mt-10 md:mt-14 w-full max-w-3xl transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <div 
              key={i} 
              className="text-center relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div 
                className="px-2 md:px-6 py-4 md:py-6 bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer"
                onClick={() => setExpandedStat(expandedStat === i ? null : i)}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2 transition-transform group-hover:scale-110 group-hover:rotate-6" style={{ backgroundColor: `${stat.color}15` }}>
                  <Icon className="w-5 h-5" style={{ color: stat.color }} />
                </div>
                <p className="text-2xl md:text-5xl font-black transition-transform group-hover:scale-110" style={{ color: stat.color }}>
                  {stat.prefix}{stat.value}{stat.suffix}
                </p>
                <p className="text-xs md:text-sm text-slate-500 font-medium mt-1 md:mt-2">{stat.label}</p>
                <button className="mt-2 inline-flex items-center gap-1 text-xs text-slate-400 hover:text-[#ED1C24] transition-colors">
                  <Info className="w-3 h-3" />
                  <span className="hidden md:inline">View details</span>
                  <span className="md:hidden">Details</span>
                </button>
              </div>
              
              {/* Expanded context */}
              {expandedStat === i && (
                <div className="absolute top-full left-0 right-0 mt-2 z-20 bg-slate-900 text-white text-xs md:text-sm p-4 rounded-xl shadow-2xl animate-fade-in-up">
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-[#ED1C24] flex-shrink-0 mt-0.5" />
                    <p className="leading-relaxed">{stat.context}</p>
                  </div>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-900 rotate-45" />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* CTA Button */}
      <a 
        href="#what-we-heard"
        className={`mt-10 md:mt-12 inline-flex items-center gap-2 md:gap-3 bg-[#ED1C24] hover:bg-[#B91419] text-white px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-[#ED1C24]/30 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ transitionDelay: '700ms' }}
      >
        See the Full Sprint
        <ChevronDown className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-1 transition-transform" />
      </a>

      {/* Scroll indicator */}
      <div className={`absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-slate-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
