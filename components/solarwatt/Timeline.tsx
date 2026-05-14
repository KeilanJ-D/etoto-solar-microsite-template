'use client'

import { useEffect, useRef, useState } from 'react'
import { Calendar, CheckCircle, Zap, Users } from 'lucide-react'

export default function Timeline() {
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

  const months = [
    {
      month: 'M1',
      internal: 'Asset build · CRM setup · domain warm · first hero shoot · Meta cap',
      external: 'Onboard Green Energy Solar + SOLARWATT-pick installer · brief Wave 1 creative',
      installers: '0-3',
    },
    {
      month: 'M2',
      internal: 'Full Meta velocity · email programme live · LinkedIn cadence · 2nd hero shoot',
      external: 'External campaigns LIVE · sponsored ad spend in market · homeowner leads flowing',
      installers: '5-8',
    },
    {
      month: 'M3',
      internal: 'Onboarding cohort 1 · soft-incentive Shepperton training day delivered · 3rd hero shoot',
      external: 'External campaigns at peak · creative refresh · CRM lead routing tested',
      installers: '12-16',
    },
    {
      month: 'M4',
      internal: 'Cohort 2 onboarded · LinkedIn thought leadership push · 4th hero shoot',
      external: 'External programme close-out · final lead push · 3-month results pack',
      installers: '20-26',
    },
    {
      month: 'M5',
      internal: 'Cohort 3 onboarded · SOLARWATT case-study content (existing Premium Partners) · 5th hero shoot',
      external: 'Track B winds down · ETOTO produces \'what worked\' case study',
      installers: '28-34',
    },
    {
      month: 'M6',
      internal: 'Final cohort onboarded · year-end push · 6th hero shoot · Year-2 retainer scoping conversation',
      external: 'Track B closed · case study published as marketing asset',
      installers: '40',
      target: true,
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-28 px-4 md:px-6 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#0066B3]/10 text-[#0066B3] text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Calendar className="w-4 h-4" />
            The 6-Month Timeline
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            What Lands Every Month.
          </h2>
          <h3 className="text-xl md:text-2xl text-[#0066B3] font-bold mb-4">
            From Kick-off to 40 Installers.
          </h3>
          <p className="text-base md:text-lg text-slate-500 max-w-3xl mx-auto">
            This is the sprint timeline ETOTO works against from Day 1 of approval. Both tracks visible. Cumulative installer counts assume Month 1 is build + warm + ramp.
          </p>
        </div>

        {/* Timeline table - Desktop */}
        <div className={`hidden md:block bg-white rounded-xl md:rounded-2xl overflow-hidden border border-slate-100 shadow-lg transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 px-6 py-4 bg-slate-900 text-xs font-semibold text-white uppercase tracking-wide">
            <div>Month</div>
            <div className="text-[#0066B3]">Internal Track Activity</div>
            <div className="text-[#F5921E]">External Track Activity</div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Users className="w-3 h-3" />
                Cumulative Installers
              </div>
            </div>
          </div>

          {/* Rows */}
          {months.map((item, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-4 gap-4 px-6 py-5 border-t border-slate-100 hover:bg-slate-50 transition-colors ${item.target ? 'bg-[#10B981]/5' : ''}`}
              style={{ transitionDelay: `${300 + index * 50}ms` }}
            >
              <div className={`font-black text-2xl ${item.target ? 'text-[#10B981]' : 'text-slate-900'}`}>{item.month}</div>
              <div className="text-sm text-slate-600">{item.internal}</div>
              <div className="text-sm text-slate-600">{item.external}</div>
              <div className="text-center">
                <span className={`inline-flex items-center justify-center px-4 py-2 rounded-full font-bold ${item.target ? 'bg-[#10B981] text-white text-lg' : 'bg-slate-100 text-slate-700'}`}>
                  {item.installers}
                  {item.target && <CheckCircle className="w-4 h-4 ml-1" />}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline cards - Mobile */}
        <div className={`md:hidden space-y-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {months.map((item, index) => (
            <div 
              key={index}
              className={`bg-white border rounded-xl p-5 ${item.target ? 'border-[#10B981] bg-[#10B981]/5' : 'border-slate-100'}`}
              style={{ transitionDelay: `${300 + index * 50}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`font-black text-2xl ${item.target ? 'text-[#10B981]' : 'text-slate-900'}`}>{item.month}</span>
                <span className={`inline-flex items-center px-3 py-1 rounded-full font-bold text-sm ${item.target ? 'bg-[#10B981] text-white' : 'bg-slate-100 text-slate-700'}`}>
                  {item.installers} installers
                  {item.target && <CheckCircle className="w-3 h-3 ml-1" />}
                </span>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold text-[#0066B3] uppercase tracking-wide mb-1">Internal</p>
                  <p className="text-sm text-slate-600">{item.internal}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#F5921E] uppercase tracking-wide mb-1">External</p>
                  <p className="text-sm text-slate-600">{item.external}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress visualization */}
        <div className={`mt-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-slate-100 rounded-full h-4 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#0066B3] via-[#F5921E] to-[#10B981] rounded-full" style={{ width: '100%' }} />
          </div>
          <div className="flex justify-between mt-2 text-xs text-slate-500 font-medium">
            <span>Kick-off</span>
            <span>Month 3</span>
            <span className="text-[#10B981] font-bold">40 Installers</span>
          </div>
        </div>
      </div>
    </section>
  )
}
