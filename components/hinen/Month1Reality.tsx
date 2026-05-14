'use client'

import { useEffect, useRef, useState } from 'react'
import { AlertCircle, Check, Clock } from 'lucide-react'

const workstreams = [
  {
    name: 'Meta paid ad budget ramp',
    days1_7: '~£40/day cap (Meta limits new accounts)',
    days8_14: '~£100-300/day · scaling on signal',
    days15_30: 'Full ~£333/day rate (£10K/m budget)',
  },
  {
    name: 'Email domain warm-up (instantly.ai)',
    days1_7: 'Configure + DNS + initial sends',
    days8_14: 'Volume escalation · sender reputation building',
    days15_30: 'Full sending capacity to MCS list',
  },
  {
    name: 'Hero content production',
    days1_7: 'Pre-production · scripting · location prep',
    days8_14: 'Shoot day(s) · raw capture',
    days15_30: 'Edit + cut-down library + paid creative live',
  },
  {
    name: 'Organic content + LinkedIn',
    days1_7: 'Daily posting starts Day 1 (no warm-up needed)',
    days8_14: 'Cadence sustained',
    days15_30: 'Weekly content cycles in flow',
  },
  {
    name: 'CRM build + Hinen sub-account',
    days1_7: 'Configure · entry points wired',
    days8_14: 'Hinen team logins issued · training session',
    days15_30: 'Full reporting layer live',
  },
  {
    name: 'KOL outreach + briefing',
    days1_7: 'Shortlist delivered · contracts initiated',
    days8_14: 'Wave 1 KOLs (5 creators) onboarded',
    days15_30: 'Wave 1 KOLs posting live',
  },
]

export default function Month1Reality() {
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
      id="month-1-reality"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 md:px-6 bg-amber-50/30 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#F59E0B]/20 text-[#F59E0B] text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <AlertCircle className="w-4 h-4" />
            Month 1 Reality · Build + Warm + Ramp
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Month 1 isn&apos;t 30 days of full spend.
            <span className="block text-[#ED1C24]">It&apos;s 30 days of building the engine while it warms.</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Fresh Meta ad accounts cap at ~£40/day for the first 14-21 days. Email domains need warming. Content needs shooting and editing. The CRM needs setup. We do all of this in parallel while paid ramps — so Month 2 hits at full power, not in recovery mode.
          </p>
        </div>

        {/* Timeline Table */}
        <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="text-left p-4 text-xs font-bold text-slate-500 uppercase tracking-wide">Workstream</th>
                  <th className="text-left p-4 text-xs font-bold text-slate-500 uppercase tracking-wide">Days 1-7</th>
                  <th className="text-left p-4 text-xs font-bold text-slate-500 uppercase tracking-wide">Days 8-14</th>
                  <th className="text-left p-4 text-xs font-bold text-[#ED1C24] uppercase tracking-wide">Days 15-30</th>
                </tr>
              </thead>
              <tbody>
                {workstreams.map((ws, i) => (
                  <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 font-semibold text-slate-900 text-sm">{ws.name}</td>
                    <td className="p-4 text-slate-600 text-sm">{ws.days1_7}</td>
                    <td className="p-4 text-slate-600 text-sm">{ws.days8_14}</td>
                    <td className="p-4 text-slate-900 font-medium text-sm bg-[#ED1C24]/5">{ws.days15_30}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden divide-y divide-slate-100">
            {workstreams.map((ws, i) => (
              <div key={i} className="p-4">
                <h4 className="font-bold text-slate-900 text-sm mb-3">{ws.name}</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-400 font-semibold">Days 1-7</p>
                      <p className="text-xs text-slate-600">{ws.days1_7}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-400 font-semibold">Days 8-14</p>
                      <p className="text-xs text-slate-600">{ws.days8_14}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 bg-[#ED1C24]/5 -mx-4 px-4 py-2">
                    <Check className="w-4 h-4 text-[#ED1C24] mt-0.5" />
                    <div>
                      <p className="text-xs text-[#ED1C24] font-semibold">Days 15-30</p>
                      <p className="text-xs text-slate-900 font-medium">{ws.days15_30}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two Callouts */}
        <div className={`grid md:grid-cols-2 gap-4 mt-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-slate-900 rounded-2xl p-6">
            <h3 className="text-[#ED1C24] font-bold text-sm mb-2">Why the Meta cap matters</h3>
            <p className="text-white/90 text-sm leading-relaxed">
              Meta limits how much fresh ad accounts can spend per day in the first 14-21 days while it learns the audience and verifies account quality. Push £1K/day from Day 1 = disapprovals, account flags, wasted spend. We ramp cleanly. By Day 21 we&apos;re at full velocity.
            </p>
          </div>
          <div className="bg-slate-900 rounded-2xl p-6">
            <h3 className="text-[#ED1C24] font-bold text-sm mb-2">One exception</h3>
            <p className="text-white/90 text-sm leading-relaxed">
              If Hinen&apos;s existing UK Meta Business Manager has actively been running ad spend in the last 90 days, the warm-up cap may be lifted on Day 1 of access. We confirm at access handover. If lifted, we accelerate. If not, we ramp as planned.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
