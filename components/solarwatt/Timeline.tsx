'use client'

import { useEffect, useRef, useState } from 'react'
import { Calendar, CheckCircle, Rocket, Users, Zap, Target, TrendingUp, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Timeline() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleMonths, setVisibleMonths] = useState<number[]>([])
  const [activeMonth, setActiveMonth] = useState<number>(0)
  const sectionRef = useRef<HTMLElement>(null)
  const monthRefs = useRef<(HTMLDivElement | null)[]>([])

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

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    monthRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleMonths(prev => [...prev, index])
              observer.disconnect()
            }
          },
          { threshold: 0.3 }
        )
        observer.observe(ref)
        observers.push(observer)
      }
    })
    return () => observers.forEach(o => o.disconnect())
  }, [isVisible])

  const months = [
    {
      month: 'M1',
      title: 'Build + Ramp',
      icon: Rocket,
      color: '#006068',
      internal: ['Asset build', 'CRM setup', 'Domain warm', 'First hero shoot', 'Meta cap'],
      external: ['Onboard installers', 'Brief Wave 1 creative'],
      installers: '0-3',
      progress: 5,
    },
    {
      month: 'M2',
      title: 'Full Velocity',
      icon: Zap,
      color: '#006068',
      internal: ['Full Meta velocity', 'Email programme live', 'LinkedIn cadence', '2nd hero shoot'],
      external: ['Campaigns LIVE', 'Homeowner leads flowing'],
      installers: '5-8',
      progress: 20,
    },
    {
      month: 'M3',
      title: 'First Cohort',
      icon: Users,
      color: '#EF4136',
      internal: ['Onboarding cohort 1', 'Shepperton training day', '3rd hero shoot'],
      external: ['Campaigns at peak', 'Creative refresh'],
      installers: '12-16',
      progress: 40,
    },
    {
      month: 'M4',
      title: 'Scale Up',
      icon: TrendingUp,
      color: '#EF4136',
      internal: ['Cohort 2 onboarded', 'LinkedIn thought leadership', '4th hero shoot'],
      external: ['Final lead push', '3-month results pack'],
      installers: '20-26',
      progress: 60,
    },
    {
      month: 'M5',
      title: 'Momentum',
      icon: Target,
      color: '#006068',
      internal: ['Cohort 3 onboarded', 'Case-study content', '5th hero shoot'],
      external: ['Track B winds down', '"What worked" case study'],
      installers: '28-34',
      progress: 80,
    },
    {
      month: 'M6',
      title: 'Target Hit',
      icon: CheckCircle,
      color: '#10B981',
      internal: ['Final cohort', 'Year-end push', '6th hero shoot', 'Year-2 scoping'],
      external: ['Case study published'],
      installers: '40+',
      progress: 100,
      target: true,
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-28 px-4 md:px-6 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#006068]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#EF4136]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#006068]/10 text-[#006068] text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Calendar className="w-4 h-4" />
            The 6-Month Roadmap
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            What Lands Every Month.
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
            From kick-off to <span className="font-bold text-[#006068]">40 installers</span>. 
            <span className="block mt-2 text-sm text-slate-400">40 isn&apos;t a stretch — it&apos;s the floor. We consistently over-deliver.</span>
          </p>
        </div>

        {/* Month selector - horizontal scroll on mobile */}
        <div className={`flex justify-center gap-2 md:gap-3 mb-10 overflow-x-auto pb-2 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {months.map((item, index) => {
            const Icon = item.icon
            const isActive = activeMonth === index
            return (
              <button
                key={index}
                onClick={() => setActiveMonth(index)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  isActive 
                    ? 'bg-slate-900 text-white shadow-lg scale-105' 
                    : item.target 
                      ? 'bg-[#10B981]/10 text-[#10B981] hover:bg-[#10B981]/20' 
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:shadow'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.month}</span>
                {item.target && <CheckCircle className="w-3.5 h-3.5" />}
              </button>
            )
          })}
        </div>


        {/* Expanded month detail - shows when a month is selected */}
        {activeMonth !== null && (
          <div className={`mb-10 transition-all duration-500 ${visibleMonths.includes(activeMonth) ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            {(() => {
              const item = months[activeMonth]
              const Icon = item.icon
              return (
                <div className={`bg-white rounded-3xl border-2 p-6 md:p-8 shadow-xl ${item.target ? 'border-[#10B981]' : 'border-slate-100'}`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: `${item.color}15` }}
                      >
                        <Icon className="w-8 h-8" style={{ color: item.color }} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-black text-3xl" style={{ color: item.color }}>{item.month}</span>
                          <ArrowRight className="w-5 h-5 text-slate-300" />
                          <span className="font-bold text-xl text-slate-700">{item.title}</span>
                        </div>
                        <p className="text-slate-500 text-sm">Month {activeMonth + 1} of 6</p>
                      </div>
                    </div>
                    <div className={`px-5 py-3 rounded-xl font-black text-2xl ${item.target ? 'bg-[#10B981] text-white' : 'bg-slate-100 text-slate-700'}`}>
                      {item.installers} <span className="text-sm font-semibold opacity-70">installers</span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-[#006068]/5 rounded-2xl p-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#006068] mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#006068]" />
                        Internal Track
                      </p>
                      <ul className="space-y-2.5">
                        {item.internal.map((activity, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                            <CheckCircle className="w-4 h-4 text-[#006068] shrink-0" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[#EF4136]/5 rounded-2xl p-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#EF4136] mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#EF4136]" />
                        External Track
                      </p>
                      <ul className="space-y-2.5">
                        {item.external.map((activity, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                            <CheckCircle className="w-4 h-4 text-[#EF4136] shrink-0" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {item.target && (
                    <div className="mt-6 pt-6 border-t border-[#10B981]/20 flex items-center justify-center gap-3">
                      <CheckCircle className="w-6 h-6 text-[#10B981]" />
                      <span className="font-bold text-[#10B981] text-lg">Target achieved — 40 
                        <Image src="/logos/solarwatt-logo.png" alt="SOLARWATT" width={90} height={22} className="h-5 inline mx-2" style={{ width: 'auto' }} />
                        installers onboarded
                      </span>
                    </div>
                  )}
                </div>
              )
            })()}
          </div>
        )}

        {/* Month cards grid - compact overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {months.map((item, index) => {
            const Icon = item.icon
            const isVisibleMonth = visibleMonths.includes(index)
            const isActive = activeMonth === index
            
            return (
              <div
                key={index}
                ref={(el) => { monthRefs.current[index] = el }}
                onClick={() => setActiveMonth(index)}
                className={`cursor-pointer group bg-white border-2 rounded-2xl p-4 transition-all duration-500 ${
                  isVisibleMonth ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${isActive ? 'border-slate-900 shadow-xl scale-105' : item.target ? 'border-[#10B981]/50 hover:border-[#10B981]' : 'border-slate-100 hover:border-slate-200 hover:shadow-lg'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.target ? 'bg-[#10B981] text-white' : 'bg-slate-100 text-slate-600'}`}>
                    {item.installers}
                  </span>
                </div>
                <p className="font-black text-xl mb-1" style={{ color: item.color }}>{item.month}</p>
                <p className="text-xs text-slate-500 font-medium">{item.title}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom reinforcement */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg font-bold text-slate-700">
            40 is the <span className="text-[#006068]">floor</span>, not the ceiling. 
            <span className="block text-sm text-slate-500 font-normal mt-1">We under-promise and always over-deliver.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
