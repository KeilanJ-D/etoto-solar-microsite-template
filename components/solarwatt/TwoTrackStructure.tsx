'use client'

import { useEffect, useRef, useState } from 'react'
import { Users, Home, PoundSterling, Calendar, Megaphone, Building2 } from 'lucide-react'

export default function TwoTrackStructure() {
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

  const tracks = [
    {
      id: 'A',
      name: 'Internal',
      color: '#0066B3',
      goal: 'Land 40 SOLARWATT-installing partners by 31 Dec 2026',
      audience: 'UK MCS-accredited installers (5,500-strong list ETOTO already markets to)',
      costToSolarwatt: '£8K/m all-in (£5K retainer + £3K paid Meta) × 6 months = £48K',
      costToInstallers: 'Free — the goal is to onboard them',
      channels: 'Paid Meta, email to MCS list, LinkedIn organic, monthly content shoot',
      duration: 'Months 1-6 (full sprint)',
      runsThrough: 'ETOTO directly · SOLARWATT brand only',
      outcome: '40 onboarded installer partners + permanent acquisition engine',
    },
    {
      id: 'B',
      name: 'External',
      color: '#F5921E',
      goal: 'Get SOLARWATT branded campaigns into UK homeowner feeds via 2 sponsored installers',
      audience: 'UK homeowners in catchment of 2 sponsored installers',
      costToSolarwatt: '£2.5K/m sponsored ad budget × 2 installers × 3 months = £15K',
      costToInstallers: '£2.5K/m retainer per installer (paid by installer to ETOTO)',
      channels: 'Paid Meta to homeowners, sponsored content, ETOTO-managed installer ads',
      duration: 'Months 2-4 (3-month sponsored cycle)',
      runsThrough: 'Two installer partners (Green Energy Solar + 1 SOLARWATT pick)',
      outcome: 'UK consumer-facing brand presence + ~5K installer leads to the 2 partners + CRM visibility',
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-28 px-4 md:px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#0066B3]/10 text-[#0066B3] text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Megaphone className="w-4 h-4" />
            The Two-Track Structure
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Two Parallel Tracks. <span className="text-[#0066B3]">One 40-Installer Outcome.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-3xl mx-auto">
            Every activity in this proposal sits on one of two tracks. <span className="font-semibold">INTERNAL</span> is what ETOTO does for SOLARWATT directly — the installer-acquisition engine. <span className="font-semibold">EXTERNAL</span> is the sponsored installer programme — SOLARWATT-funded ad spend running through two carefully-selected installer partners reaching UK homeowners directly.
          </p>
        </div>

        {/* Track cards */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {tracks.map((track, index) => (
            <div 
              key={track.id}
              className="bg-white rounded-xl md:rounded-2xl border-2 overflow-hidden shadow-lg hover:shadow-xl transition-all"
              style={{ borderColor: track.color, transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Track header */}
              <div className="px-6 py-4 flex items-center gap-3" style={{ backgroundColor: track.color }}>
                <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-black text-lg">
                  {track.id}
                </span>
                <div>
                  <p className="text-white font-bold text-lg">Track {track.id} · {track.name}</p>
                </div>
              </div>

              {/* Track content */}
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Goal</p>
                  <p className="text-slate-900 font-semibold">{track.goal}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Audience</p>
                  <p className="text-sm text-slate-600">{track.audience}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Cost to SOLARWATT</p>
                    <p className="text-sm text-slate-600">{track.costToSolarwatt}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Cost to Installers</p>
                    <p className="text-sm text-slate-600">{track.costToInstallers}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Channels</p>
                  <p className="text-sm text-slate-600">{track.channels}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Duration</p>
                    <p className="text-sm text-slate-600">{track.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Runs Through</p>
                    <p className="text-sm text-slate-600">{track.runsThrough}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">What SOLARWATT Gets Back</p>
                  <p className="text-sm font-semibold" style={{ color: track.color }}>{track.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why both tracks */}
        <div className={`bg-slate-900 rounded-xl md:rounded-2xl p-6 md:p-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-xl font-bold text-white mb-4">Why Both Tracks at Once</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#0066B3]/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-[#0066B3]" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Internal Alone</p>
                <p className="text-sm text-slate-400">Gets you 40 installers but no consumer brand build.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#F5921E]/20 flex items-center justify-center flex-shrink-0">
                <Home className="w-5 h-5 text-[#F5921E]" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">External Alone</p>
                <p className="text-sm text-slate-400">Gets you UK consumer visibility but no installer network to sell to them.</p>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
            <p className="text-slate-300 text-sm leading-relaxed">
              <span className="font-semibold text-white">Run together</span>, the consumer awareness from External feeds the installer pitch in Internal (&ldquo;my customers are already asking about SOLARWATT&rdquo;), and the installer network onboarded by Internal becomes the future expansion layer for External. <span className="text-[#0066B3] font-semibold">They compound.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
