'use client'

import { useEffect, useRef, useState } from 'react'
import { Clock, Zap, Mail, Globe, FileText, CheckCircle } from 'lucide-react'

export default function Month1Reality() {
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
    { name: 'Meta paid ad budget ramp', days1to7: '~£40/day cap', days8to14: '~£100/day · scaling on signal', days15to30: 'Full ~£100/day rate (£3K/m)', icon: Zap },
    { name: 'Email domain warm-up', days1to7: 'DNS + initial sends', days8to14: 'Volume escalation', days15to30: 'Full sending capacity to MCS list', icon: Mail },
    { name: 'Hero content production', days1to7: 'Pre-production + scripting', days8to14: 'Shoot day · raw capture', days15to30: 'Edit + cut-down library + paid creative live', icon: FileText },
    { name: 'Organic content + LinkedIn', days1to7: 'Daily posting starts Day 1', days8to14: 'Cadence sustained', days15to30: 'Weekly cycles in flow', icon: Globe },
    { name: 'CRM build + SOLARWATT sub-account setup', days1to7: 'Configure + onboarding flow wired', days8to14: 'SOLARWATT team logins + training', days15to30: 'Full reporting layer live', icon: CheckCircle },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-28 px-4 md:px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Clock className="w-4 h-4" />
            Track A · Month 1 Reality
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Month 1 Isn&apos;t 30 Days of Full Spend.
          </h2>
          <h3 className="text-xl md:text-2xl text-[#0066B3] font-bold mb-4">
            It&apos;s 30 Days of Building the Engine While It Warms.
          </h3>
          <p className="text-base md:text-lg text-slate-500 max-w-3xl mx-auto">
            Fresh Meta ad accounts cap at ~£40/day for the first 14-21 days while Meta verifies the account and learns the audience. Email domains need warming. Content needs shooting and editing. The CRM needs setup. We do all of this in parallel while paid ramps — so Month 2 hits at full power, not in recovery mode.
          </p>
        </div>

        {/* Timeline table */}
        <div className={`bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-slate-100 mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 px-4 md:px-6 py-4 bg-slate-900 text-xs font-semibold text-slate-400 uppercase tracking-wide">
            <div>Workstream</div>
            <div className="text-center">Days 1-7</div>
            <div className="text-center">Days 8-14</div>
            <div className="text-center">Days 15-30</div>
          </div>
          
          {/* Rows */}
          {workstreams.map((item, index) => {
            const Icon = item.icon
            return (
              <div 
                key={index} 
                className="grid grid-cols-4 gap-4 px-4 md:px-6 py-4 border-t border-slate-100 hover:bg-slate-50 transition-colors"
                style={{ transitionDelay: `${300 + index * 50}ms` }}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-[#0066B3] flex-shrink-0 hidden md:block" />
                  <span className="text-sm font-medium text-slate-900">{item.name}</span>
                </div>
                <div className="text-center text-xs md:text-sm text-slate-600 bg-yellow-50 rounded-lg py-2 px-1">{item.days1to7}</div>
                <div className="text-center text-xs md:text-sm text-slate-600 bg-blue-50 rounded-lg py-2 px-1">{item.days8to14}</div>
                <div className="text-center text-xs md:text-sm text-slate-900 font-semibold bg-green-50 rounded-lg py-2 px-1">{item.days15to30}</div>
              </div>
            )
          })}
        </div>

        {/* Exception note */}
        <div className={`bg-[#0066B3]/10 border border-[#0066B3]/20 rounded-xl p-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h4 className="font-bold text-slate-900 mb-2">One Exception</h4>
          <p className="text-slate-600 text-sm leading-relaxed">
            If SOLARWATT&apos;s existing UK Meta Business Manager has actively been running paid spend in the last 90 days, the warm-up cap may be lifted on Day 1 of access. We confirm at access handover. <span className="font-semibold text-[#0066B3]">If lifted, we accelerate. If not, we ramp as planned and Month 2 fires at full velocity.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
