'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, Sparkles, PoundSterling, Calculator, TrendingUp, Users, Percent, DollarSign, Building2, BarChart3 } from 'lucide-react'
import { useCountUp } from '@/hooks/use-animate-on-scroll'
import Image from 'next/image'

export default function Investment() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const totalInvestment = useCountUp(63, 1500, isVisible)
  const projectedLTV = useCountUp(4.8, 1500, isVisible)
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

  const commitmentTable = [
    { bucket: 'Internal · ETOTO retainer', detail: '£5,000/m × 6 months', amount: '£30,000', icon: Users },
    { bucket: 'Internal · Paid Meta ad budget', detail: '£3,000/m × 6 months · paid directly to Meta', amount: '£18,000', icon: BarChart3 },
    { bucket: 'External · Sponsored installer ads', detail: '£2,500/m × 2 installers × 3 months · paid to Meta', amount: '£15,000', icon: TrendingUp },
  ]

  const ltvTable = [
    { calculation: 'Installs per installer per year (post-onboarding average)', assumption: '~10 systems', value: '10 / year', icon: Building2 },
    { calculation: 'SOLARWATT wholesale revenue per system (premium-AOV blend)', assumption: '~£3,000', value: '£3,000 / system', icon: DollarSign },
    { calculation: 'Annual wholesale revenue per installer', assumption: '10 × £3,000', value: '£30,000 / year', icon: TrendingUp },
    { calculation: '5-year LTV per installer (assuming 80% retention)', assumption: '£30K × 5 × 0.80', value: '£120,000', icon: Calculator },
    { calculation: 'LTV across 40 onboarded installers', assumption: '40 × £120,000', value: '£4,800,000', icon: Sparkles },
    { calculation: 'LTV-to-CAC ratio', assumption: '£4.8M ÷ £63K', value: '~76 : 1', highlight: true, icon: Percent },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-28 px-4 md:px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#0066B3]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Header with key metrics */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image
              src="/logos/solarwatt-logo.png"
              alt="SOLARWATT"
              width={100}
              height={24}
              className="h-5 md:h-6 w-auto opacity-60"
            />
          </div>
          <span className="inline-flex items-center gap-2 bg-[#0066B3]/10 text-[#0066B3] text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <PoundSterling className="w-4 h-4" />
            Total SOLARWATT Commitment + LTV Math
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            £{totalInvestment}K In. <span className="text-[#10B981]">~£{projectedLTV}M Out.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
            LTV-to-CAC of <span className="font-black text-[#10B981]">{ltvRatio} to 1</span>. The headline commercial picture for the BMW board paper.
          </p>
        </div>

        {/* Commitment table */}
        <div className={`mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <PoundSterling className="w-5 h-5 text-[#0066B3]" />
            Total SOLARWATT Cash Commitment Across 6 Months
          </h3>
          <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden border border-slate-100 shadow-lg">
            <div className="grid grid-cols-4 gap-4 px-6 py-4 bg-slate-100 text-xs font-semibold text-slate-500 uppercase tracking-wide">
              <div className="col-span-1"></div>
              <div>Bucket</div>
              <div>Detail</div>
              <div className="text-right">Amount</div>
            </div>
            {commitmentTable.map((item, index) => {
              const Icon = item.icon
              return (
                <div 
                  key={index} 
                  className={`grid grid-cols-4 gap-4 px-6 py-4 border-t border-slate-100 hover:bg-slate-50 transition-colors ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="col-span-1 flex items-center">
                    <div className="w-8 h-8 rounded-lg bg-[#0066B3]/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#0066B3]" />
                    </div>
                  </div>
                  <div className="text-sm font-medium text-slate-900">{item.bucket}</div>
                  <div className="text-sm text-slate-600">{item.detail}</div>
                  <div className="text-sm font-semibold text-slate-900 text-right">{item.amount}</div>
                </div>
              )
            })}
            <div className="grid grid-cols-4 gap-4 px-6 py-4 border-t-2 border-[#0066B3] bg-[#0066B3]/5">
              <div className="col-span-1 flex items-center">
                <div className="w-8 h-8 rounded-lg bg-[#0066B3] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="text-sm font-bold text-slate-900">TOTAL SOLARWATT COMMITMENT</div>
              <div className="text-sm text-slate-600">All-in across 6 months</div>
              <div className="text-lg font-black text-[#0066B3] text-right">£63,000</div>
            </div>
          </div>
        </div>

        {/* LTV Math */}
        <div className={`mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-2 mb-4">
            <Calculator className="w-5 h-5 text-[#10B981]" />
            <h3 className="text-lg font-bold text-slate-900">LTV Math (Per Onboarded Installer)</h3>
          </div>
          <div className="bg-slate-900 rounded-xl md:rounded-2xl overflow-hidden">
            <div className="grid grid-cols-4 gap-4 px-6 py-4 bg-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wide">
              <div className="col-span-1"></div>
              <div>Calculation</div>
              <div>Modelling Assumption</div>
              <div className="text-right">Value</div>
            </div>
            {ltvTable.map((item, index) => {
              const Icon = item.icon
              return (
                <div 
                  key={index} 
                  className={`grid grid-cols-4 gap-4 px-6 py-4 border-t border-slate-800 transition-all ${item.highlight ? 'bg-[#10B981]/20' : 'hover:bg-white/5'} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${400 + index * 80}ms` }}
                >
                  <div className="col-span-1 flex items-center">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.highlight ? 'bg-[#10B981]/30' : 'bg-white/10'}`}>
                      <Icon className={`w-4 h-4 ${item.highlight ? 'text-[#10B981]' : 'text-slate-400'}`} />
                    </div>
                  </div>
                  <div className={`text-sm ${item.highlight ? 'text-white font-semibold' : 'text-slate-300'}`}>{item.calculation}</div>
                  <div className="text-sm text-slate-400">{item.assumption}</div>
                  <div className={`text-sm text-right ${item.highlight ? 'text-[#10B981] font-black text-lg' : 'text-white font-semibold'}`}>{item.value}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Boardroom sentence */}
        <div className={`bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl md:rounded-2xl p-6 md:p-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#006068]/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#006068]" />
            </div>
            <h3 className="text-lg font-bold text-white">The Outcome</h3>
          </div>
          <p className="text-white/90 leading-relaxed text-lg">
            By <span className="font-bold text-white">December 2026</span>, <span className="font-bold text-[#006068]">40 additional installers</span> in the UK will be advertising and selling <Image src="/logos/solarwatt-logo.png" alt="SOLARWATT" width={100} height={24} className="h-5 w-auto inline brightness-0 invert mx-1" /> to the masses. Working with the right agency, this could equate to an average of <span className="font-bold text-[#10B981]">12+ SOLARWATT Vision systems</span> being sold, per installer, extra, per month. That&apos;s almost <span className="font-bold text-[#EF4136]">6,000 Vision systems per year</span>, from 2027.
          </p>
          <p className="text-slate-500 text-xs mt-6 italic">
            Cost modelled against published distributor wholesale pricing. SOLARWATT-direct AOV may vary on confirmation — model conservative on £3K/system to leave room for upside.
          </p>
        </div>
      </div>
    </section>
  )
}
