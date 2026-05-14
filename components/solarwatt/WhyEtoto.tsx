'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Award,
  Banknote,
  Building2,
  Megaphone,
  ShieldCheck,
  TrendingUp,
  Zap,
} from 'lucide-react'
import { useCountUp } from '@/hooks/use-animate-on-scroll'
import { ETOTO_AWARDS, ETOTO_STATS } from '@/lib/etoto-data'
import Image from 'next/image'

export default function WhyEtoto() {
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
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const totalSold = useCountUp(200, 1600, isVisible)
  const installers = useCountUp(200, 1400, isVisible)
  const monthlySales = useCountUp(6, 1200, isVisible)
  const cps = useCountUp(500, 1500, isVisible)

  const pillars = [
    {
      icon: Megaphone,
      title: 'Renewables-only since day one',
      body:
        'No e-com, no SaaS, no real-estate side hustle. Every campaign we run is for a UK solar, battery, ASHP or air-con installer. The portfolio averages we project for SOLARWATT installers are real because they are our averages.',
      accent: '#0066B3',
    },
    {
      icon: Building2,
      title: 'Manufacturer-grade execution',
      body:
        'We are the only UK marketing partner running the full ad-creative-website-CRM-finance stack inside renewables. That is why SOLARWATT is here — we already speak the language of premium kit, MCS, BUS grants and quoting flow.',
      accent: '#0066B3',
    },
    {
      icon: ShieldCheck,
      title: 'Skin in the game with every installer',
      body:
        'Installers we onboard for SOLARWATT keep working with us long after this sprint. Our 200+ installer relationships, plus the 5,500-strong MCS list, are the moat that makes the 40-installer target realistic in 6 months.',
      accent: '#F5921E',
    },
  ]

  const stats = [
    {
      value: totalSold,
      prefix: '£',
      suffix: 'M+',
      label: 'Sold for installers since 2023',
      icon: Banknote,
      color: '#0066B3',
    },
    {
      value: installers,
      suffix: '+',
      label: 'UK installers worked with',
      icon: Building2,
      color: '#0066B3',
    },
    {
      value: monthlySales,
      prefix: '£',
      suffix: 'M+',
      label: 'Monthly portfolio sales',
      icon: TrendingUp,
      color: '#F5921E',
    },
    {
      value: cps,
      prefix: '<£',
      suffix: '',
      label: 'Average cost per sale',
      icon: Zap,
      color: '#10B981',
    },
  ]

  return (
    <section
      id="why-etoto"
      ref={sectionRef}
      className="relative py-16 md:py-28 px-4 md:px-6 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute top-1/3 -right-20 w-72 h-72 md:w-96 md:h-96 bg-[#0066B3]/5 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#F5921E]/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#0066B3]/20 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header with dual branding */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Dual logo strip */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-8">
            <Image
              src="/logos/solarwatt-logo.png"
              alt="SOLARWATT"
              width={140}
              height={32}
              className="h-6 md:h-8 w-auto opacity-80"
            />
            <span className="text-slate-300 text-2xl font-light">×</span>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-slate-900 flex items-center justify-center">
                <span className="text-white font-black text-sm md:text-base">E</span>
              </div>
              <span className="font-black text-slate-900 text-lg md:text-xl tracking-tight">ETOTO</span>
            </div>
          </div>
          
          <span className="inline-flex items-center gap-2 bg-[#0066B3]/10 text-[#0066B3] text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            Why ETOTO is the right partner
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 text-balance">
            SOLARWATT picked the agency{' '}
            <span className="text-[#0066B3]">200+ installers already trust.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
            This is not a generalist agency learning solar on the job. ETOTO has spent three years building
            the largest paid-acquisition engine in UK renewables. SOLARWATT plugs into infrastructure that
            already exists.
          </p>
        </div>

        {/* Animated stat strip */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-14 md:mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={i}
                className="group bg-white border border-slate-100 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-9 h-9 md:w-11 md:h-11 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 transition-transform group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: `${stat.color}15` }}
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" style={{ color: stat.color }} />
                </div>
                <p
                  className="text-2xl md:text-4xl font-black tabular-nums leading-none"
                  style={{ color: stat.color }}
                >
                  {stat.prefix}
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="text-[10px] md:text-xs text-slate-500 font-semibold uppercase tracking-wide mt-2 md:mt-3 leading-snug">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>

        {/* Three pillars */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-14 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={i}
                className="group bg-gradient-to-br from-white to-slate-50/40 border border-slate-100 rounded-xl md:rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ transitionDelay: `${500 + i * 100}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundColor: `${p.accent}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: p.accent }} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.body}</p>
              </div>
            )
          })}
        </div>

        {/* Awards section - simplified: 2 cards + image inline */}
        <div
          className={`transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-8">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
              2026 Industry Recognition
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 items-stretch">
            {/* Award cards */}
            {ETOTO_AWARDS.map((award, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-xl p-5 md:p-6 flex items-start gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[#F5921E]/10 border border-[#F5921E]/20 flex items-center justify-center">
                  <Award className="h-6 w-6 text-[#F5921E]" />
                </div>
                <div className="min-w-0">
                  <p className="text-base md:text-lg font-bold text-slate-900 leading-snug">{award.title}</p>
                  <p className="text-xs md:text-sm text-slate-600 mt-1.5 leading-snug">{award.recipient}</p>
                  <p className="text-[10px] md:text-xs text-slate-400 mt-1 leading-snug">
                    {award.ceremony}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Awards photo */}
            <div className="relative rounded-xl overflow-hidden group h-full min-h-[200px]">
              <Image
                src="/awards/etoto-eea-awards.jpeg"
                alt="ETOTO Media - South East Energy Efficiency Awards 2026"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white/90 text-xs font-semibold">South East Energy Efficiency Awards 2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Side-stat line */}
        <div
          className={`text-center mt-10 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            {ETOTO_STATS.proofPoints.installedCapacityMWp} MWp installed ·{' '}
            {ETOTO_STATS.proofPoints.annualGenerationGWh.toLocaleString()} GWh / year ·{' '}
            {ETOTO_STATS.proofPoints.co2OffsetTonnes.toLocaleString()} tonnes CO₂ offset
          </p>
        </div>
      </div>
    </section>
  )
}
