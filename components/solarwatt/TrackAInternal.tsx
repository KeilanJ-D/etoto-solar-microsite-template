'use client'

import { useEffect, useRef, useState } from 'react'
import { Camera, BarChart3, Mail, Linkedin, Database, Users, Sparkles, Check, TrendingUp, Target } from 'lucide-react'
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
    { icon: Camera, title: 'Hero content shoot', stat: '1/month', description: '60-90s hero + 4-6 cut-downs + install b-roll' },
    { icon: BarChart3, title: 'Paid Meta management', stat: 'Daily', description: 'Brand awareness + engagement + installer lead-gen' },
    { icon: Mail, title: 'Email to MCS list', stat: '8/month', description: '5,500 installer database — largest in UK' },
    { icon: Linkedin, title: 'LinkedIn organic', stat: '4/week', description: 'UK page + team amplification' },
    { icon: Database, title: 'CRM + reporting', stat: 'Always-on', description: 'Live pipeline + weekly Monday pack' },
    { icon: Users, title: 'Strategy calls', stat: 'Bi-weekly', description: 'Funnel review + creative refresh' },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-28 px-4 md:px-6 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#006068]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#EF4136]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#006068] text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Target className="w-4 h-4" />
            Track A · Internal · The Acquisition Engine
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            £8,000/month.{' '}
            <span className="inline-flex items-center gap-2">
              <span className="text-[#006068]">Forty</span>
              <Image src="/logos/solarwatt-logo.png" alt="SOLARWATT" width={140} height={32} className="h-6 md:h-8 w-auto inline" />
              <span className="text-[#006068]">installers in six.</span>
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
            The same engine that produced <span className="font-bold text-slate-700">£358K ad spend · 23.9M impressions · 11,020 leads</span> across 36 months.
          </p>
        </div>

        {/* Visual workstreams grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {workstreams.map((item, index) => {
            const Icon = item.icon
            return (
              <div 
                key={index}
                className="group relative bg-white border border-slate-100 rounded-2xl p-5 md:p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                style={{ transitionDelay: `${300 + index * 80}ms` }}
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#006068]/10 to-transparent rounded-bl-full" />
                
                <div className="relative">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-[#006068] to-[#004d4d] flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div className="inline-block bg-[#006068]/10 text-[#006068] text-xs font-bold px-2 py-1 rounded-full mb-3">
                    {item.stat}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm md:text-base mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Budget visual */}
        <div className={`bg-slate-900 rounded-2xl md:rounded-3xl p-6 md:p-10 mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-10">
            <div className="flex-1">
              <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Where £8K/month goes</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#006068] flex items-center justify-center">
                    <span className="text-white font-black text-xl">£5K</span>
                  </div>
                  <div>
                    <p className="text-white font-bold">ETOTO retainer</p>
                    <p className="text-slate-400 text-sm">All workstreams above. Fixed scope.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#EF4136] flex items-center justify-center">
                    <span className="text-white font-black text-xl">£3K</span>
                  </div>
                  <div>
                    <p className="text-white font-bold">Paid Meta ad budget</p>
                    <p className="text-slate-400 text-sm">Paid directly to Meta. ETOTO manages.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 6-month total */}
            <div className="text-center md:text-right">
              <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">6-Month Total</p>
              <p className="text-5xl md:text-7xl font-black text-white">£48K</p>
              <p className="text-[#006068] font-bold mt-2">All-in for 40 installers</p>
            </div>
          </div>
        </div>

        {/* Soft incentive - visual cards */}
        <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-[#EF4136]" />
            <h3 className="text-xl font-bold text-slate-900">The Soft Incentive That Closes</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="group relative bg-gradient-to-br from-[#006068] to-[#004d4d] rounded-2xl p-6 text-white overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg mb-2">Free Advanced Training Day</h4>
                <p className="text-white/80 text-sm">At Shepperton centre — hands-on with the kit, certified by trainers, builds competence and loyalty.</p>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-[#EF4136] to-[#c9352c] rounded-2xl p-6 text-white overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg mb-2">Free Showroom Display Unit</h4>
                <p className="text-white/80 text-sm">Panel cut-away or Battery module for their office — visible to every customer who walks in.</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-[#006068] font-semibold mt-4 text-center">
            Premium-brand-aligned. No product giveaway. Pure brand-immersion.
          </p>
        </div>
      </div>
    </section>
  )
}
