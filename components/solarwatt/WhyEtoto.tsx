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
  const [awardsVisible, setAwardsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const awardsRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !awardsVisible) {
          setAwardsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )
    if (awardsRef.current) observer.observe(awardsRef.current)
    return () => observer.disconnect()
  }, [awardsVisible])

  const totalSold = useCountUp(200, 1600, isVisible)
  const installers = useCountUp(200, 1400, isVisible)
  const monthlySales = useCountUp(6, 1200, isVisible)
  const cps = useCountUp(500, 1500, isVisible)

  const pillars = [
    {
      icon: Megaphone,
      title: 'Renewables-only since day one',
      body: 'No e-com, no SaaS. Every campaign is for UK solar, battery, ASHP or air-con installers.',
      accent: '#006068',
    },
    {
      icon: Building2,
      title: 'Manufacturer-grade execution',
      body: 'The only UK partner running the full ad-creative-website-CRM-finance stack in renewables.',
      accent: '#006068',
    },
    {
      icon: ShieldCheck,
      title: 'Skin in the game',
      body: 'Our 200+ installer relationships + 5,500 MCS list make 40 installers realistic in 6 months.',
      accent: '#EF4136',
    },
  ]

  const stats = [
    { value: totalSold, prefix: '£', suffix: 'M+', label: 'Sold for installers', icon: Banknote, color: '#006068' },
    { value: installers, suffix: '+', label: 'UK installers', icon: Building2, color: '#006068' },
    { value: monthlySales, prefix: '£', suffix: 'M+', label: 'Monthly sales', icon: TrendingUp, color: '#EF4136' },
    { value: cps, prefix: '<£', suffix: '', label: 'Avg cost per sale', icon: Zap, color: '#10B981' },
  ]

  return (
    <section
      id="why-etoto"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#006068]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-[#EF4136]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 md:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Image
              src="/logos/solarwatt-logo.png"
              alt="SOLARWATT"
              width={120}
              height={28}
              className="h-6 md:h-7 w-auto opacity-70"
            />
            <span className="text-slate-300 text-xl">×</span>
            <Image
              src="/logos/etoto-logo.png"
              alt="ETOTO Media"
              width={44}
              height={44}
              className="w-10 h-10 md:w-11 md:h-11"
            />
          </div>
          
          <span className="inline-flex items-center gap-2 bg-[#006068]/10 text-[#006068] text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            Why ETOTO is the right partner
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 text-balance leading-tight">
            <Image src="/logos/solarwatt-logo.png" alt="SOLARWATT" width={140} height={32} className="h-6 md:h-8 w-auto inline mx-2 align-middle" />
            picked the agency{' '}
            <span className="text-[#006068]">200+ installers already trust.</span>
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Not a generalist agency learning solar. Three years building the largest paid-acquisition engine in UK renewables.
          </p>
        </div>

        {/* Stats grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-16 md:mb-20 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={i}
                className="group bg-white border border-slate-100 rounded-2xl p-4 md:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${stat.color}10` }}
                >
                  <Icon className="w-5 h-5" style={{ color: stat.color }} />
                </div>
                <p className="text-2xl md:text-3xl font-black tabular-nums" style={{ color: stat.color }}>
                  {stat.prefix}{stat.value}{stat.suffix}
                </p>
                <p className="text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>

        {/* Three pillars */}
        <div className={`grid md:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={i}
                className="group bg-white border border-slate-100 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${p.accent}10` }}
                >
                  <Icon className="w-6 h-6" style={{ color: p.accent }} />
                </div>
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.body}</p>
              </div>
            )
          })}
        </div>

        {/* Awards section - clean, no box wrapper */}
        <div ref={awardsRef}>
          <div className={`text-center mb-8 transition-all duration-700 ${awardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
              2026 Industry Recognition
            </p>
          </div>
          
          <div className={`grid md:grid-cols-3 gap-4 md:gap-6 items-stretch transition-all duration-700 ${awardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {ETOTO_AWARDS.map((award, i) => (
              <div
                key={i}
                className="group bg-gradient-to-br from-amber-50 to-white border border-amber-200/60 rounded-2xl p-5 md:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm md:text-base font-bold text-slate-900 leading-snug">{award.title}</p>
                    <p className="text-xs text-slate-600 mt-1">{award.recipient}</p>
                    <p className="text-[10px] text-amber-600 font-semibold mt-1">{award.ceremony}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Awards photo */}
            <div className="relative rounded-2xl overflow-hidden group min-h-[180px] shadow-lg">
              <Image
                src="/awards/etoto-eea-awards.jpeg"
                alt="ETOTO Media - South East Energy Efficiency Awards 2026"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white font-semibold text-xs md:text-sm">South East Energy Efficiency Awards 2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Side-stat line */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
            {ETOTO_STATS.proofPoints.installedCapacityMWp} MWp installed · {ETOTO_STATS.proofPoints.annualGenerationGWh.toLocaleString()} GWh / year · {ETOTO_STATS.proofPoints.co2OffsetTonnes.toLocaleString()} tonnes CO₂ offset
          </p>
        </div>
      </div>
    </section>
  )
}
