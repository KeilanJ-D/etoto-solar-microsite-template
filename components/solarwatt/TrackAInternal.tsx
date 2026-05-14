'use client'

import { useEffect, useRef, useState } from 'react'
import { Camera, BarChart3, Mail, Linkedin, Database, Users, Check, Target, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function TrackAInternal() {
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
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const workstreams = [
    { icon: Camera, title: 'Hero Content', stat: '1/month', color: '#006068' },
    { icon: BarChart3, title: 'Paid Meta', stat: 'Daily', color: '#006068' },
    { icon: Mail, title: 'Email to MCS', stat: '8/month', color: '#EF4136' },
    { icon: Linkedin, title: 'LinkedIn', stat: '4/week', color: '#0A66C2' },
    { icon: Database, title: 'CRM + Reports', stat: 'Always-on', color: '#10B981' },
    { icon: Users, title: 'Strategy Calls', stat: 'Bi-weekly', color: '#006068' },
  ]

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-4 md:px-6 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#006068]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#006068] text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Target className="w-4 h-4" />
            Track A · Internal · The Acquisition Engine
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-3">
            £8,000/month.{' '}
            <span className="text-[#006068]">Forty</span>{' '}
            <Image src="/logos/solarwatt-logo.png" alt="SOLARWATT" width={120} height={28} className="h-5 md:h-7 w-auto inline align-middle mx-1" />{' '}
            <span className="text-[#006068]">installers.</span>
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto">
            The same engine that delivered <span className="font-bold text-slate-700">£358K spend · 23.9M impressions · 11,020 leads</span> across 36 months.
          </p>
        </div>

        {/* Visual workstreams - clean icon grid */}
        <div className={`grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 mb-12 md:mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {workstreams.map((item, index) => {
            const Icon = item.icon
            return (
              <div 
                key={index}
                className="group bg-white border border-slate-100 rounded-2xl p-4 md:p-5 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${item.color}10` }}
                >
                  <Icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: item.color }} />
                </div>
                <p className="text-xs md:text-sm font-bold text-slate-900 mb-1">{item.title}</p>
                <p className="text-[10px] md:text-xs text-slate-500 font-medium">{item.stat}</p>
              </div>
            )
          })}
        </div>

        {/* Budget breakdown - visual cards */}
        <div className={`grid md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-[#006068] rounded-2xl p-6 md:p-8 text-white">
            <p className="text-4xl md:text-5xl font-black mb-2">£5K</p>
            <p className="text-white/90 font-semibold mb-1">ETOTO Retainer</p>
            <p className="text-white/60 text-sm">All workstreams. Fixed scope. Per month.</p>
          </div>
          <div className="bg-[#EF4136] rounded-2xl p-6 md:p-8 text-white">
            <p className="text-4xl md:text-5xl font-black mb-2">£3K</p>
            <p className="text-white/90 font-semibold mb-1">Paid Meta Budget</p>
            <p className="text-white/60 text-sm">Paid directly to Meta. ETOTO manages.</p>
          </div>
        </div>

        {/* 6-month total */}
        <div className={`bg-slate-900 rounded-2xl p-6 md:p-8 text-center mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-slate-400 text-xs md:text-sm font-semibold uppercase tracking-wider mb-2">6-Month Total · Track A</p>
          <p className="text-5xl md:text-6xl font-black text-white">£48K</p>
          <p className="text-[#006068] font-bold mt-2">All-in for 40 installers</p>
        </div>

        {/* Soft incentives - clean cards */}
        <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-[#EF4136]" />
            <h3 className="text-lg font-bold text-slate-900">The Soft Incentive That Closes</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-slate-100 rounded-2xl p-5 md:p-6 flex items-start gap-4 hover:shadow-lg transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#006068]/10 flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 text-[#006068]" />
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">Free Advanced Training Day</p>
                <p className="text-sm text-slate-500">Shepperton centre — hands-on with the kit, certified by trainers.</p>
              </div>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-5 md:p-6 flex items-start gap-4 hover:shadow-lg transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#EF4136]/10 flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 text-[#EF4136]" />
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">Free Showroom Display Unit</p>
                <p className="text-sm text-slate-500">Panel cut-away or Battery module for their office.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
