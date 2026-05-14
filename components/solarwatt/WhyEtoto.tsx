'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Banknote,
  Building2,
  Megaphone,
  ShieldCheck,
  TrendingUp,
  Zap,
} from 'lucide-react'
import { useCountUp } from '@/hooks/use-animate-on-scroll'
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
      { threshold: 0.2 },
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
              className="h-6 md:h-7 opacity-70"
              style={{ width: 'auto' }}
            />
            <span className="text-slate-300 text-xl">×</span>
            <Image
              src="/logos/etoto-logo.png"
              alt="ETOTO Media"
              width={40}
              height={40}
              className="w-9 h-9 md:w-10 md:h-10"
            />
          </div>
          
          <span className="inline-flex items-center gap-2 bg-[#006068]/10 text-[#006068] text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            Why ETOTO is the right partner
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 text-balance leading-tight">
            <Image src="/logos/solarwatt-logo.png" alt="SOLARWATT" width={140} height={32} className="h-6 md:h-8 inline mx-2 align-middle" style={{ width: 'auto' }} />
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
        <div className={`grid md:grid-cols-3 gap-4 md:gap-6 mb-20 md:mb-28 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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

        {/* ============================================ */}
        {/* AWARDS SECTION - PROMINENT & CELEBRATED */}
        {/* ============================================ */}
        <div ref={awardsRef} className="relative">
          {/* Decorative glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 via-amber-50/30 to-amber-100/50 rounded-3xl blur-3xl -z-10 scale-110" />
          
          {/* Header - more prominent */}
          <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${awardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs md:text-sm font-bold px-5 py-2.5 rounded-full mb-6 shadow-lg shadow-amber-500/30">
              The Only Agency in Our Space to Be Recognised
            </div>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4">
              2026 Industry Recognition
            </h3>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              Officially recognised by the <span className="font-semibold text-amber-600">South East Energy Efficiency Awards</span> — 
              the first and only marketing agency in UK renewables to receive this honour.
            </p>
          </div>
          
          {/* Awards layout - badge images + photo side by side */}
          <div className={`grid lg:grid-cols-2 gap-6 md:gap-8 items-stretch transition-all duration-700 delay-200 ${awardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Left: Award badge images stacked */}
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Award 1 - Winner Badge */}
              <div className="group relative bg-gradient-to-br from-amber-50 via-white to-amber-50 border-2 border-amber-300 rounded-3xl p-6 md:p-8 hover:shadow-2xl hover:shadow-amber-200/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="flex items-center gap-6">
                  <div className="shrink-0 w-28 h-28 md:w-36 md:h-36 relative group-hover:scale-105 transition-transform">
                    <Image
                      src="/awards/businessdev-winner.png"
                      alt="Business Development Manager / Director - Winner - South East Energy Efficiency Awards 2026"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-black text-slate-900 leading-tight mb-2">
                      Business Development Director of the Year
                    </h4>
                    <p className="text-sm md:text-base text-slate-700 font-semibold">
                      Keilan James-Devereux, Co-Founder
                    </p>
                    <p className="text-xs text-amber-600 font-semibold mt-2">South East Energy Efficiency Awards 2026</p>
                  </div>
                </div>
              </div>
              
              {/* Award 2 - Highly Commended Badge */}
              <div className="group relative bg-gradient-to-br from-slate-50 via-white to-amber-50/50 border-2 border-amber-200 rounded-3xl p-6 md:p-8 hover:shadow-2xl hover:shadow-amber-200/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="flex items-center gap-6">
                  <div className="shrink-0 w-28 h-28 md:w-36 md:h-36 relative group-hover:scale-105 transition-transform">
                    <Image
                      src="/awards/energycons-hc.jpg"
                      alt="Energy Consultant / Consultancy - Highly Commended - South East Energy Efficiency Awards 2026"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-black text-slate-900 leading-tight mb-2">
                      Energy Consultancy of the Year
                    </h4>
                    <div className="flex items-center gap-2 mb-2">
                      <Image
                        src="/logos/etoto-logo.png"
                        alt="ETOTO Media"
                        width={24}
                        height={24}
                        className="w-5 h-5 md:w-6 md:h-6"
                      />
                    </div>
                    <p className="text-xs text-amber-600 font-semibold mt-2">South East Energy Efficiency Awards 2026</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right: Awards photo - larger and more prominent */}
            <div className={`relative rounded-3xl overflow-hidden group min-h-[350px] md:min-h-[420px] shadow-2xl shadow-amber-200/30 transition-all duration-700 delay-300 ${awardsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <Image
                src="/awards/etoto-eea-awards.jpeg"
                alt="ETOTO Media - South East Energy Efficiency Awards 2026"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src="/logos/etoto-logo.png"
                    alt="ETOTO"
                    width={36}
                    height={36}
                    className="w-8 h-8 md:w-9 md:h-9"
                  />
                </div>
                <p className="text-amber-300 text-xs font-semibold">Award-Winning Marketing Agency</p>
                <p className="text-white/80 text-sm md:text-base font-medium mt-1">
                  South East Energy Efficiency Awards 2026
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
