'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, Camera, BarChart3, Mail, Linkedin, Database, Users, Sparkles } from 'lucide-react'

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
    { icon: Camera, title: 'Hero content shoot', cadence: '1 production day per month', description: '1 hero piece (60-90s) + 4-6 short-form cut-downs + install b-roll + product photography' },
    { icon: BarChart3, title: 'Paid Meta management', cadence: 'Daily optimisation', description: 'Brand awareness + engagement + installer lead-gen campaigns running across Facebook + Instagram + Reels' },
    { icon: Mail, title: 'Email to MCS-accredited list', cadence: '2 sends per week (8/m)', description: 'SOLARWATT-branded sends to ETOTO\'s 5,500-installer list — the largest MCS-accredited installer marketing list in UK' },
    { icon: Linkedin, title: 'LinkedIn organic management', cadence: '4 posts per week', description: 'SOLARWATT UK page + amplification across team profiles. Repurposes monthly content for B2B reach.' },
    { icon: Database, title: 'CRM + reporting layer', cadence: 'Always-on', description: 'SOLARWATT sub-account inside ETOTO\'s CRM. Live pipeline visibility. Manual weekly performance pack delivered every Monday morning.' },
    { icon: Users, title: 'Strategy + ops', cadence: 'Bi-weekly catchups', description: '60-min ETOTO + SOLARWATT calls. Funnel review, creative refresh, monthly target tracking, escalation handling.' },
  ]

  const budgetBreakdown = [
    { line: 'ETOTO retainer', perMonth: '£5,000', total: '£30,000', notes: 'All workstreams above. Fixed scope. No monthly variables.' },
    { line: 'Paid Meta ad budget', perMonth: '£3,000', total: '£18,000', notes: 'Paid directly to Meta. ETOTO manages spend across the funnel stages.' },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-28 px-4 md:px-6 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#0066B3] text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Track A · Internal · The Acquisition Engine
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            £8,000 a Month. <span className="text-[#0066B3]">Forty Installers in Six.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-3xl mx-auto">
            The Internal track is ETOTO&apos;s standard installer-acquisition playbook, applied to SOLARWATT. Same model we use for the manufacturers in our active book today. Same engine that produced the <span className="font-semibold text-slate-700">£358K of installer ad spend / 23.9M impressions / 11,020 leads / 214,817 ThruPlay</span> benchmark dataset across our last 36 months of management.
          </p>
        </div>

        {/* Workstreams */}
        <div className={`mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-lg font-bold text-slate-900 mb-6">What ETOTO delivers every month</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {workstreams.map((item, index) => {
              const Icon = item.icon
              return (
                <div 
                  key={index}
                  className="bg-slate-50 border border-slate-100 rounded-xl p-5 hover:shadow-lg transition-all duration-300"
                  style={{ transitionDelay: `${300 + index * 50}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0066B3]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#0066B3]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <span className="text-xs bg-[#0066B3]/10 text-[#0066B3] px-2 py-1 rounded-full whitespace-nowrap">{item.cadence}</span>
                      </div>
                      <p className="text-sm text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Budget breakdown */}
        <div className={`mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-lg font-bold text-slate-900 mb-6">Where the £8,000/m goes</h3>
          <div className="bg-slate-900 rounded-xl md:rounded-2xl overflow-hidden">
            <div className="grid grid-cols-4 gap-4 px-6 py-4 bg-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wide">
              <div>Line</div>
              <div>Per Month</div>
              <div>6-Month Total</div>
              <div>Notes</div>
            </div>
            {budgetBreakdown.map((item, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 px-6 py-4 border-t border-slate-800">
                <div className="text-white font-semibold">{item.line}</div>
                <div className="text-[#0066B3] font-bold">{item.perMonth}</div>
                <div className="text-white">{item.total}</div>
                <div className="text-sm text-slate-400">{item.notes}</div>
              </div>
            ))}
            <div className="grid grid-cols-4 gap-4 px-6 py-4 border-t-2 border-[#0066B3] bg-[#0066B3]/10">
              <div className="text-white font-bold">TOTAL · INTERNAL TRACK</div>
              <div className="text-[#0066B3] font-black">£8,000</div>
              <div className="text-white font-bold">£48,000</div>
              <div className="text-sm text-slate-300">All-in to SOLARWATT for 6 months.</div>
            </div>
          </div>
        </div>

        {/* Soft incentive */}
        <div className={`bg-gradient-to-br from-blue-50 to-slate-50 border border-[#0066B3]/20 rounded-xl md:rounded-2xl p-6 md:p-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-[#0066B3]" />
            <h3 className="text-xl font-bold text-slate-900">The Soft Incentive That Closes the Installer</h3>
          </div>
          <p className="text-slate-600 leading-relaxed mb-6">
            Every onboarded installer in the first cohort of 40 receives:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white rounded-lg p-4 border border-slate-100">
              <Check className="w-5 h-5 text-[#0066B3] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900">Free Advanced Training Day</p>
                <p className="text-sm text-slate-600">At the SOLARWATT UK Shepperton centre — hands-on with the kit, certified by SOLARWATT trainers, builds installer competence and loyalty in one move.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-lg p-4 border border-slate-100">
              <Check className="w-5 h-5 text-[#0066B3] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900">Free Showroom Display Unit</p>
                <p className="text-sm text-slate-600">Panel cut-away or Battery vision module for their office, branded SOLARWATT, visible to every customer who walks in.</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-[#0066B3] font-semibold mt-6">
            Premium-brand-aligned. No product giveaway, no margin dilution. Pure brand-immersion.
          </p>
        </div>
      </div>
    </section>
  )
}
