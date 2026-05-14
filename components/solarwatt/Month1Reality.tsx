'use client'

import { useEffect, useRef, useState } from 'react'
import { Clock, Zap, Mail, Globe, FileText, CheckCircle } from 'lucide-react'

export default function Month1Reality() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

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

  // Individual item observers
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleItems(prev => [...prev, index])
              observer.disconnect()
            }
          },
          { threshold: 0.4 }
        )
        observer.observe(ref)
        observers.push(observer)
      }
    })
    return () => observers.forEach(o => o.disconnect())
  }, [isVisible])

  const workstreams = [
    { 
      name: 'Meta Ad Ramp', 
      icon: Zap, 
      color: '#006068',
      phases: [
        { day: 'Days 1-7', status: '~£40/day cap', progress: 30 },
        { day: 'Days 8-14', status: '~£100/day scaling', progress: 60 },
        { day: 'Days 15-30', status: 'Full velocity', progress: 100 },
      ]
    },
    { 
      name: 'Email Domain', 
      icon: Mail, 
      color: '#EF4136',
      phases: [
        { day: 'Days 1-7', status: 'DNS + initial sends', progress: 35 },
        { day: 'Days 8-14', status: 'Volume escalation', progress: 70 },
        { day: 'Days 15-30', status: 'Full capacity', progress: 100 },
      ]
    },
    { 
      name: 'Hero Content', 
      icon: FileText, 
      color: '#006068',
      phases: [
        { day: 'Days 1-7', status: 'Pre-production', progress: 25 },
        { day: 'Days 8-14', status: 'Shoot day', progress: 60 },
        { day: 'Days 15-30', status: 'Edit + live', progress: 100 },
      ]
    },
    { 
      name: 'Organic + LinkedIn', 
      icon: Globe, 
      color: '#0A66C2',
      phases: [
        { day: 'Days 1-7', status: 'Posting starts', progress: 50 },
        { day: 'Days 8-14', status: 'Cadence sustained', progress: 75 },
        { day: 'Days 15-30', status: 'Weekly cycles', progress: 100 },
      ]
    },
    { 
      name: 'CRM Setup', 
      icon: CheckCircle, 
      color: '#10B981',
      phases: [
        { day: 'Days 1-7', status: 'Configure + onboard', progress: 40 },
        { day: 'Days 8-14', status: 'Team training', progress: 70 },
        { day: 'Days 15-30', status: 'Full reporting', progress: 100 },
      ]
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-4 md:px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-slate-900 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Clock className="w-4 h-4" />
            Track A · Month 1 Reality
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-3">
            Month 1 Isn&apos;t 30 Days of Full Spend.
          </h2>
          <p className="text-lg md:text-xl text-[#006068] font-bold mb-4">
            It&apos;s 30 Days of Building the Engine While It Warms.
          </p>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto">
            Fresh Meta accounts cap at ~£40/day for 14-21 days. Email domains need warming. Content needs shooting. We do it all in parallel — so Month 2 fires at full velocity.
          </p>
        </div>

        {/* Visual roadmap */}
        <div className={`space-y-4 md:space-y-5 mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {workstreams.map((item, index) => {
            const Icon = item.icon
            const isItemVisible = visibleItems.includes(index)
            return (
              <div
                key={index}
                ref={(el) => { itemRefs.current[index] = el }}
                className={`bg-white rounded-2xl border border-slate-100 p-4 md:p-5 transition-all duration-500 ${isItemVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <p className="font-bold text-slate-900 text-sm md:text-base">{item.name}</p>
                </div>
                
                {/* Progress phases */}
                <div className="grid grid-cols-3 gap-2 md:gap-3">
                  {item.phases.map((phase, phaseIndex) => (
                    <div key={phaseIndex} className="relative">
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
                        <div 
                          className="h-full rounded-full transition-all duration-1000"
                          style={{ 
                            width: isItemVisible ? `${phase.progress}%` : '0%',
                            backgroundColor: item.color,
                            transitionDelay: `${(index * 100) + (phaseIndex * 200)}ms`
                          }}
                        />
                      </div>
                      <p className="text-[10px] md:text-xs font-semibold text-slate-400">{phase.day}</p>
                      <p className="text-[10px] md:text-xs text-slate-600 mt-0.5">{phase.status}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Exception note */}
        <div className={`bg-[#006068]/10 border border-[#006068]/20 rounded-2xl p-5 md:p-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-bold text-slate-900 mb-2 text-sm md:text-base">One Exception</p>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            If SOLARWATT&apos;s existing UK Meta Business Manager has been running spend in the last 90 days, the warm-up cap may be lifted Day 1. We confirm at access handover. <span className="font-semibold text-[#006068]">If lifted, we accelerate. If not, Month 2 fires at full velocity.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
