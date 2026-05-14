'use client'

import { useEffect, useRef, useState } from 'react'
import { Calendar, CheckCircle, Rocket, Users, Zap, Target, TrendingUp } from 'lucide-react'
import Image from 'next/image'

export default function Timeline() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleMonths, setVisibleMonths] = useState<number[]>([])
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

  // Individual month observers for scroll-triggered reveal
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
    },
    {
      month: 'M2',
      title: 'Full Velocity',
      icon: Zap,
      color: '#006068',
      internal: ['Full Meta velocity', 'Email programme live', 'LinkedIn cadence', '2nd hero shoot'],
      external: ['Campaigns LIVE', 'Homeowner leads flowing'],
      installers: '5-8',
    },
    {
      month: 'M3',
      title: 'First Cohort',
      icon: Users,
      color: '#EF4136',
      internal: ['Onboarding cohort 1', 'Shepperton training day', '3rd hero shoot'],
      external: ['Campaigns at peak', 'Creative refresh'],
      installers: '12-16',
    },
    {
      month: 'M4',
      title: 'Scale Up',
      icon: TrendingUp,
      color: '#EF4136',
      internal: ['Cohort 2 onboarded', 'LinkedIn thought leadership', '4th hero shoot'],
      external: ['Final lead push', '3-month results pack'],
      installers: '20-26',
    },
    {
      month: 'M5',
      title: 'Momentum',
      icon: Target,
      color: '#006068',
      internal: ['Cohort 3 onboarded', 'Case-study content', '5th hero shoot'],
      external: ['Track B winds down', '\'What worked\' case study'],
      installers: '28-34',
    },
    {
      month: 'M6',
      title: 'Target Hit',
      icon: CheckCircle,
      color: '#10B981',
      internal: ['Final cohort', 'Year-end push', '6th hero shoot', 'Year-2 scoping'],
      external: ['Case study published'],
      installers: '40',
      target: true,
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-28 px-4 md:px-6 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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

        {/* Animated roadmap */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#006068] via-[#EF4136] to-[#10B981] rounded-full md:-translate-x-1/2" />

          {/* Month cards */}
          <div className="space-y-8 md:space-y-12">
            {months.map((item, index) => {
              const Icon = item.icon
              const isLeft = index % 2 === 0
              const isVisibleMonth = visibleMonths.includes(index)
              
              return (
                <div
                  key={index}
                  ref={(el) => { monthRefs.current[index] = el }}
                  className={`relative flex items-start gap-4 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg md:-translate-x-1/2 z-10 transition-all duration-500 ${isVisibleMonth ? 'scale-100' : 'scale-0'}`} style={{ backgroundColor: item.color }} />
                  
                  {/* Spacer for mobile */}
                  <div className="w-12 md:hidden" />
                  
                  {/* Card */}
                  <div className={`flex-1 md:w-[calc(50%-2rem)] transition-all duration-700 ${isVisibleMonth ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className={`group bg-white border-2 rounded-2xl p-5 md:p-6 hover:shadow-xl transition-all duration-300 ${item.target ? 'border-[#10B981] shadow-lg shadow-[#10B981]/20' : 'border-slate-100 hover:border-slate-200'}`}>
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6" style={{ backgroundColor: `${item.color}15` }}>
                          <Icon className="w-6 h-6" style={{ color: item.color }} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-black text-2xl" style={{ color: item.color }}>{item.month}</span>
                            <span className="text-slate-400 text-sm">·</span>
                            <span className="font-semibold text-slate-700">{item.title}</span>
                          </div>
                        </div>
                        <div className={`ml-auto px-3 py-1 rounded-full font-bold text-sm ${item.target ? 'bg-[#10B981] text-white' : 'bg-slate-100 text-slate-600'}`}>
                          {item.installers}
                        </div>
                      </div>
                      
                      {/* Activities */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-[#006068] mb-2">Internal</p>
                          <ul className="space-y-1">
                            {item.internal.map((activity, i) => (
                              <li key={i} className="text-xs text-slate-600 flex items-start gap-1">
                                <span className="w-1 h-1 rounded-full bg-[#006068] mt-1.5 shrink-0" />
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-[#EF4136] mb-2">External</p>
                          <ul className="space-y-1">
                            {item.external.map((activity, i) => (
                              <li key={i} className="text-xs text-slate-600 flex items-start gap-1">
                                <span className="w-1 h-1 rounded-full bg-[#EF4136] mt-1.5 shrink-0" />
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {item.target && (
                        <div className="mt-4 pt-4 border-t border-[#10B981]/20 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-[#10B981]" />
                          <span className="font-bold text-[#10B981]">Target achieved — 40 
                            <Image src="/logos/solarwatt-logo.png" alt="SOLARWATT" width={80} height={20} className="h-4 w-auto inline mx-1" />
                            installers
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Spacer for desktop */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              )
            })}
          </div>
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
