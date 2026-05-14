'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
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

// Confetti particle component
function ConfettiParticle({ color, delay, left }: { color: string; delay: number; left: number }) {
  return (
    <div
      className="absolute w-3 h-3 rounded-sm animate-confetti-fall pointer-events-none"
      style={{
        backgroundColor: color,
        left: `${left}%`,
        animationDelay: `${delay}s`,
        transform: `rotate(${Math.random() * 360}deg)`,
      }}
    />
  )
}

export default function WhyEtoto() {
  const [isVisible, setIsVisible] = useState(false)
  const [awardsVisible, setAwardsVisible] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
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

  // Awards section observer for confetti trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !awardsVisible) {
          setAwardsVisible(true)
          setShowConfetti(true)
          // Hide confetti after animation
          setTimeout(() => setShowConfetti(false), 4000)
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

  // Generate confetti particles
  const confettiColors = ['#EF4136', '#FFD700', '#006068', '#F5921E', '#FFD700', '#EF4136']
  const confettiParticles = Array.from({ length: 50 }, (_, i) => ({
    color: confettiColors[i % confettiColors.length],
    delay: Math.random() * 0.5,
    left: Math.random() * 100,
  }))

  return (
    <section
      id="why-etoto"
      ref={sectionRef}
      className="relative py-16 md:py-28 px-4 md:px-6 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute top-1/3 -right-20 w-72 h-72 md:w-96 md:h-96 bg-[#006068]/5 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#EF4136]/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-6xl mx-auto">
        {/* Header with dual branding */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
            <Image
              src="/logos/etoto-logo.png"
              alt="ETOTO Media"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12"
            />
          </div>
          
          <span className="inline-flex items-center gap-2 bg-[#006068]/10 text-[#006068] text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            Why ETOTO is the right partner
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 text-balance">
            <Image src="/logos/solarwatt-logo.png" alt="SOLARWATT" width={160} height={36} className="h-7 md:h-9 w-auto inline mx-2" />
            picked the agency{' '}
            <span className="text-[#006068]">200+ installers already trust.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Not a generalist agency learning solar. Three years building the largest paid-acquisition engine in UK renewables.
          </p>
        </div>

        {/* Animated stat strip */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-14 md:mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
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
                <p className="text-2xl md:text-4xl font-black tabular-nums leading-none" style={{ color: stat.color }}>
                  {stat.prefix}{stat.value}{stat.suffix}
                </p>
                <p className="text-[10px] md:text-xs text-slate-500 font-semibold uppercase tracking-wide mt-2 md:mt-3 leading-snug">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>

        {/* Three pillars */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-14 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={i}
                className="group bg-gradient-to-br from-white to-slate-50/40 border border-slate-100 rounded-xl md:rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
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

        {/* Awards section with confetti */}
        <div ref={awardsRef} className="relative">
          {/* Confetti container */}
          {showConfetti && (
            <div className="absolute inset-x-0 -top-10 h-[500px] overflow-hidden pointer-events-none z-20">
              {confettiParticles.map((particle, i) => (
                <ConfettiParticle key={i} {...particle} />
              ))}
            </div>
          )}

          <div className={`text-center mb-8 transition-all duration-700 ${awardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.18em] text-[#EF4136]">
              2026 Industry Recognition
            </p>
          </div>
          
          <div className={`grid md:grid-cols-3 gap-4 md:gap-6 items-stretch transition-all duration-700 ${awardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Award cards */}
            {ETOTO_AWARDS.map((award, i) => (
              <div
                key={i}
                className="group bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200/50 rounded-xl p-5 md:p-6 flex items-start gap-4 hover:shadow-xl hover:-translate-y-2 hover:border-amber-300 transition-all duration-300"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-base md:text-lg font-bold text-slate-900 leading-snug">{award.title}</p>
                  <p className="text-xs md:text-sm text-slate-600 mt-1.5 leading-snug">{award.recipient}</p>
                  <p className="text-[10px] md:text-xs text-amber-600 font-semibold mt-1 leading-snug">
                    {award.ceremony}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Awards photo */}
            <div className="relative rounded-xl overflow-hidden group h-full min-h-[200px] shadow-lg">
              <Image
                src="/awards/etoto-eea-awards.jpeg"
                alt="ETOTO Media - South East Energy Efficiency Awards 2026"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white font-semibold text-sm">South East Energy Efficiency Awards 2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Side-stat line */}
        <div className={`text-center mt-10 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
