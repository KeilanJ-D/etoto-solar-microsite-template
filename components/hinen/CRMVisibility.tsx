'use client'

import { useEffect, useRef, useState } from 'react'
import { Eye, Users, BarChart3, TrendingUp, FileText } from 'lucide-react'

const accessCards = [
  { num: '01', title: 'Hinen Sub-Account', icon: Users, desc: 'Steve, Candy, Nikita, Jay + any nominated Hinen team members get individual logins inside ETOTO\'s CRM. Read access to the full sprint pipeline.', highlight: false },
  { num: '02', title: 'Live Dashboard', icon: BarChart3, desc: 'Spots remaining (giveaway), leads in funnel, qualified opportunities, scheduled calls, onboarded installers, points balances. Real-time.', highlight: true },
  { num: '03', title: 'Native Ad-Spend Reporting', icon: TrendingUp, desc: 'Meta + LinkedIn ad performance feeds straight into the CRM next to lead-source attribution. No separate platform login needed to see ad performance vs lead outcomes.', highlight: false },
  { num: '04', title: 'Manual Weekly Report', icon: FileText, desc: 'On top of live data, ETOTO produces a curated weekly performance pack delivered every Monday morning to all nominated Hinen recipients.', highlight: false },
]

export default function CRMVisibility() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="crm-visibility"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 md:px-6 bg-slate-50 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#ED1C24]/10 text-[#ED1C24] text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Eye className="w-4 h-4" />
            CRM · Visibility for Hinen
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Everything Hinen needs.
            <span className="block text-[#ED1C24]">None of the noise.</span>
          </h2>
        </div>

        {/* Four Card Grid */}
        <div className={`grid md:grid-cols-2 gap-4 md:gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {accessCards.map((card, i) => {
            const Icon = card.icon
            return (
              <div
                key={i}
                className={`group bg-white rounded-2xl p-5 md:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                  card.highlight ? 'border-2 border-[#ED1C24] shadow-lg' : 'border border-slate-100'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {card.highlight && (
                  <div className="absolute -top-3 right-4 bg-[#ED1C24] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                    HIGHLIGHTED
                  </div>
                )}
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${
                    card.highlight ? 'bg-[#ED1C24] text-white' : 'bg-[#ED1C24]/10 text-[#ED1C24]'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide mb-1">Access {card.num}</p>
                    <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2">{card.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
