'use client'

import { useEffect, useRef, useState } from 'react'
import { Eye, BarChart3, FileText, Calendar, Database, Clock } from 'lucide-react'

export default function CRMVisibility() {
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

  const visibilityLayers = [
    { 
      icon: Database, 
      layer: 'Internal track funnel', 
      shows: 'MCS installer leads · qualified opportunities · scheduled SOLARWATT calls · onboarded installers', 
      updated: 'Real-time',
      color: '#0066B3'
    },
    { 
      icon: BarChart3, 
      layer: 'External track funnel', 
      shows: 'Homeowner leads per installer · cost per lead · install-conversion attribution', 
      updated: 'Real-time',
      color: '#F5921E'
    },
    { 
      icon: Eye, 
      layer: 'Ad-spend reporting (native)', 
      shows: 'Meta + LinkedIn ad performance · creative-level breakdown · CPL trends · spend pacing', 
      updated: 'Daily',
      color: '#10B981'
    },
    { 
      icon: FileText, 
      layer: 'Manual weekly performance pack', 
      shows: 'Curated narrative + trend analysis + next-week priorities · delivered every Monday morning', 
      updated: 'Weekly',
      color: '#8B5CF6'
    },
    { 
      icon: Calendar, 
      layer: 'Monthly board summary', 
      shows: 'Top-line metrics framed for BMW/SOLARWATT board reporting · 1-page pdf · delivered start of each month', 
      updated: 'Monthly',
      color: '#EC4899'
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-28 px-4 md:px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Eye className="w-4 h-4" />
            CRM + Visibility for SOLARWATT
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            One CRM. Both Tracks Visible.
          </h2>
          <h3 className="text-xl md:text-2xl text-[#0066B3] font-bold mb-4">
            Full Transparency for SOLARWATT and BMW.
          </h3>
          <p className="text-base md:text-lg text-slate-500 max-w-3xl mx-auto">
            Every lead from both Internal and External tracks lands in ETOTO&apos;s CRM with full source attribution. SOLARWATT gets a sub-account with read access for Peter, Neal, Paula, William and any nominated team members. Live counters, native ad-spend reporting, weekly performance pack.
          </p>
        </div>

        {/* Visibility layers */}
        <div className={`mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-lg font-bold text-slate-900 mb-6">What SOLARWATT Sees in the CRM</h3>
          <div className="space-y-4">
            {visibilityLayers.map((item, index) => {
              const Icon = item.icon
              return (
                <div 
                  key={index}
                  className="bg-white border border-slate-100 rounded-xl p-5 hover:shadow-lg transition-all duration-300 flex items-start gap-4"
                  style={{ transitionDelay: `${300 + index * 75}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${item.color}15` }}>
                    <Icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="font-bold text-slate-900">{item.layer}</h4>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 flex items-center gap-1" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                        <Clock className="w-3 h-3" />
                        {item.updated}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">{item.shows}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Data ownership note */}
        <div className={`bg-[#0066B3]/10 border border-[#0066B3]/20 rounded-xl p-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-slate-700 text-sm leading-relaxed">
            <span className="font-semibold text-[#0066B3]">ETOTO does not retain sole control of any data.</span> SOLARWATT retains the right to export every installer record, every lead record, and every ad-account performance file at any point during or after the engagement — in one click.
          </p>
        </div>
      </div>
    </section>
  )
}
