'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, Sparkles, PoundSterling, Calculator } from 'lucide-react'

export default function Investment() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
    { bucket: 'Internal · ETOTO retainer', detail: '£5,000/m × 6 months', amount: '£30,000' },
    { bucket: 'Internal · Paid Meta ad budget', detail: '£3,000/m × 6 months · paid directly to Meta', amount: '£18,000' },
    { bucket: 'External · Sponsored installer ads', detail: '£2,500/m × 2 installers × 3 months · paid to Meta', amount: '£15,000' },
  ]

  const ltvTable = [
    { calculation: 'Installs per installer per year (post-onboarding average)', assumption: '~10 systems', value: '10 / year' },
    { calculation: 'SOLARWATT wholesale revenue per system (premium-AOV blend)', assumption: '~£3,000', value: '£3,000 / system' },
    { calculation: 'Annual wholesale revenue per installer', assumption: '10 × £3,000', value: '£30,000 / year' },
    { calculation: '5-year LTV per installer (assuming 80% retention)', assumption: '£30K × 5 × 0.80', value: '£120,000' },
    { calculation: 'LTV across 40 onboarded installers', assumption: '40 × £120,000', value: '£4,800,000' },
    { calculation: 'LTV-to-CAC ratio', assumption: '£4.8M ÷ £63K', value: '~76 : 1', highlight: true },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-28 px-4 md:px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#0066B3]/10 text-[#0066B3] text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <PoundSterling className="w-4 h-4" />
            Total SOLARWATT Commitment + LTV Math
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            £63,000 In. <span className="text-[#10B981]">~£4.8 Million Out.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
            LTV-to-CAC of 76 to 1. The headline commercial picture for the BMW board paper.
          </p>
        </div>

        {/* Commitment table */}
        <div className={`mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-lg font-bold text-slate-900 mb-4">Total SOLARWATT Cash Commitment Across 6 Months</h3>
          <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden border border-slate-100 shadow-lg">
            <div className="grid grid-cols-3 gap-4 px-6 py-4 bg-slate-100 text-xs font-semibold text-slate-500 uppercase tracking-wide">
              <div>Bucket</div>
              <div>Detail</div>
              <div className="text-right">Amount</div>
            </div>
            {commitmentTable.map((item, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 px-6 py-4 border-t border-slate-100">
                <div className="text-sm font-medium text-slate-900">{item.bucket}</div>
                <div className="text-sm text-slate-600">{item.detail}</div>
                <div className="text-sm font-semibold text-slate-900 text-right">{item.amount}</div>
              </div>
            ))}
            <div className="grid grid-cols-3 gap-4 px-6 py-4 border-t-2 border-[#0066B3] bg-[#0066B3]/5">
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
            <div className="grid grid-cols-3 gap-4 px-6 py-4 bg-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wide">
              <div>Calculation</div>
              <div>Modelling Assumption</div>
              <div className="text-right">Value</div>
            </div>
            {ltvTable.map((item, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-3 gap-4 px-6 py-4 border-t border-slate-800 ${item.highlight ? 'bg-[#10B981]/20' : ''}`}
              >
                <div className={`text-sm ${item.highlight ? 'text-white font-semibold' : 'text-slate-300'}`}>{item.calculation}</div>
                <div className="text-sm text-slate-400">{item.assumption}</div>
                <div className={`text-sm text-right ${item.highlight ? 'text-[#10B981] font-black text-lg' : 'text-white font-semibold'}`}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Boardroom sentence */}
        <div className={`bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl md:rounded-2xl p-6 md:p-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-[#F5921E]" />
            <h3 className="text-lg font-bold text-white">The Boardroom Sentence (For BMW)</h3>
          </div>
          <p className="text-white/90 leading-relaxed text-lg">
            SOLARWATT invests <span className="font-bold text-[#0066B3]">£63,000</span> across 6 months to acquire <span className="font-bold text-white">40 onboarded UK installer partners</span> and unlock approximately <span className="font-bold text-[#10B981]">£4.8 million</span> of installer-driven UK wholesale revenue across the next 5 years. <span className="font-bold text-[#F5921E]">LTV-to-CAC ratio of 76:1.</span> Plus a sponsored installer programme that surfaces SOLARWATT brand to ~420-600 UK homeowners directly. Plus a permanent CRM-tracked partner network that compounds beyond Year 1.
          </p>
          <p className="text-slate-500 text-xs mt-6 italic">
            Cost modelled against published distributor wholesale pricing. SOLARWATT-direct AOV may vary on confirmation — model conservative on £3K/system to leave room for upside.
          </p>
        </div>
      </div>
    </section>
  )
}
