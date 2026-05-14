'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, Info, Zap, Battery, Sun, Building2 } from 'lucide-react'
import { useCountUp } from '@/hooks/use-animate-on-scroll'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [showStats, setShowStats] = useState(false)
  const [expandedStat, setExpandedStat] = useState<number | null>(null)
  
  const installers = useCountUp(40, 1500, showStats)
  const investment = useCountUp(63, 1200, showStats)
  const ltv = useCountUp(76, 1800, showStats)

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
      color: '#006068',
      icon: Building2,
      context: 'Target: 40 SOLARWATT-installing partners by 31 Dec 2026. Using ETOTO\'s 5,500-strong MCS-accredited installer marketing list — the largest in the UK.'
    },
    { 
      value: investment, 
      prefix: '£', 
      suffix: 'K', 
      label: 'Total Investment', 
      color: '#EF4136',
      icon: Sun,
      context: '£48K internal (£8K/m × 6 months) + £15K external sponsored ad spend. Cost per onboarded installer: £1,575.'
    },
    { 
      value: ltv, 
      suffix: ':1', 
      label: 'LTV:CAC Ratio', 
      color: '#10B981',
      icon: Battery,
      context: '~£4.8M projected installer LTV vs £63K commitment. 40 installers × £120,000 5-year LTV each = £4.8M wholesale revenue.'
    },
  ]

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-6 py-16 md:py-20 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 md:w-96 md:h-96 bg-[#006068]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 md:w-[500px] md:h-[500px] bg-[#EF4136]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#006068]/3 to-[#EF4136]/3 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-[#006068]/20 rounded-full animate-float hidden md:block"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 4) * 20}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${4 + i * 0.5}s`,
          }}
        />
      ))}

      {/* Logos - ETOTO × SOLARWATT with actual logos */}
      <div className={`flex items-center gap-4 md:gap-8 mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
        <div className="bg-slate-900 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 shadow-xl hover:scale-105 transition-transform">
          <div className="flex items-center gap-2">
            <Image
              src="/logos/etoto-logo.png"
              alt="ETOTO Media"
              width={40}
              height={40}
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <span className="text-white font-black text-lg md:text-2xl tracking-tight">ETOTO</span>
          </div>
        </div>
        <span className="text-[#006068] font-black text-xl md:text-3xl animate-pulse">×</span>
        <div className="bg-white rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 shadow-xl border border-slate-200 hover:scale-105 transition-transform">
          <Image
            src="/logos/solarwatt-logo.png"
            alt="SOLARWATT"
            width={180}
            height={40}
            className="h-8 md:h-10 w-auto"
          />
        </div>
      </div>

      {/* BMW trust badge */}
      <div className={`mb-4 transition-all duration-700 delay-50 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <div className="flex items-center gap-3 bg-slate-100 border border-slate-200 px-4 py-2 rounded-full">
          <Image
            src="/logos/bmw-solarwatt-color.png"
            alt="BMW"
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
          />
          <span className="text-xs md:text-sm text-slate-600 font-medium">BMW-backed battery technology</span>
        </div>
      </div>

      {/* Badge */}
      <div className={`mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <span className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-600 text-xs md:text-sm font-medium px-4 py-2 rounded-full shadow-sm">
          <span className="w-2 h-2 bg-[#006068] rounded-full animate-pulse" />
          The 6-Month Go-to-Market Sprint
        </span>
      </div>

      {/* Main headline */}
      <div className={`text-center max-w-5xl transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6 text-balance">
          BMW-Backed. German Engineered.
          <span className="block text-[#006068] relative">
            UK-Installer Ready by 2026.
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#006068]/20" viewBox="0 0 200 8" preserveAspectRatio="none">
              <path d="M0,5 Q50,0 100,5 T200,5" fill="none" stroke="currentColor" strokeWidth="3" className="animate-draw" />
            </svg>
          </span>
        </h1>
        <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          A two-track go-to-market sprint to land <span className="font-semibold text-slate-900">40 SOLARWATT-installing partners</span> by year-end — plus a sponsored installer programme that puts SOLARWATT directly in front of UK homeowners.
        </p>
        <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto mt-3">
          Prepared for Peter Bachmann, Neal Goddard, Paula Harris & William Harris.
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
                <button className="mt-2 inline-flex items-center gap-1 text-xs text-slate-400 hover:text-[#006068] transition-colors">
                  <Info className="w-3 h-3" />
                  <span className="hidden md:inline">View details</span>
                  <span className="md:hidden">Details</span>
                </button>
              </div>
              
              {/* Expanded context */}
              {expandedStat === i && (
                <div className="absolute top-full left-0 right-0 mt-2 z-20 bg-slate-900 text-white text-xs md:text-sm p-4 rounded-xl shadow-2xl animate-fade-in-up">
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-[#EF4136] flex-shrink-0 mt-0.5" />
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
        href="#why-solarwatt"
        className={`mt-10 md:mt-12 inline-flex items-center gap-2 md:gap-3 bg-[#006068] hover:bg-[#004d4d] text-white px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-[#006068]/30 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
