'use client'

import { useEffect, useRef, useState } from 'react'
import { Globe } from 'lucide-react'
import { useCountUp } from '@/hooks/use-animate-on-scroll'

const reachSources = [
  { source: 'Paid Meta (FB + IG + Reels)', mechanism: '£90K · 3 funnel stages', reach: '4.5M – 7M imps · 1.5M – 2.5M reach' },
  { source: 'KOL programme (14 creators)', mechanism: '£20K · ETOTO sources + manages', reach: '1M – 3M reach' },
  { source: '6 named voices', mechanism: 'Embedded in production · cross-post', reach: '0.5M – 1.5M reach' },
  { source: 'Hinen-owned organic', mechanism: '4× weekly · 5 channels · 90 days', reach: '0.8M – 1.5M reach' },
  { source: 'Email to ETOTO MCS list', mechanism: '5,500 installers · 32 sends', reach: '176K imps · ~50K opens' },
  { source: 'Birmingham BBQ · earned media', mechanism: 'Pre + day-of + recap content', reach: '100K – 500K reach' },
]

export default function ReachArchitecture() {
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

  const reachCount = useCountUp(10, 1500, isVisible)

  return (
    <section
      id="reach-architecture"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 md:px-6 bg-white overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#ED1C24]/10 text-[#ED1C24] text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Globe className="w-4 h-4" />
            The 10M Reach Architecture
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Where the ten million comes from.
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Reach at this scale needs every channel pulling the same direction. Layered architecture lands ~10M with cushion.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className={`grid lg:grid-cols-[2fr,1fr] gap-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left - Table */}
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="text-left p-4 text-xs font-bold text-slate-500 uppercase tracking-wide">Reach Source</th>
                    <th className="text-left p-4 text-xs font-bold text-slate-500 uppercase tracking-wide hidden md:table-cell">Mechanism</th>
                    <th className="text-left p-4 text-xs font-bold text-[#ED1C24] uppercase tracking-wide">Reach Contribution</th>
                  </tr>
                </thead>
                <tbody>
                  {reachSources.map((item, i) => (
                    <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                      <td className="p-4">
                        <p className="font-semibold text-slate-900 text-sm">{item.source}</p>
                        <p className="text-xs text-slate-500 md:hidden mt-1">{item.mechanism}</p>
                      </td>
                      <td className="p-4 text-slate-600 text-sm hidden md:table-cell">{item.mechanism}</td>
                      <td className="p-4 text-slate-900 font-medium text-sm">{item.reach}</td>
                    </tr>
                  ))}
                  <tr className="bg-[#ED1C24]/5">
                    <td className="p-4 font-bold text-slate-900 text-sm" colSpan={2}>Total across 90 days · mid-point ~10M</td>
                    <td className="p-4 font-black text-[#ED1C24] text-sm">~7M – 13M+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right - Big Stat + Callout */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-[#ED1C24] to-[#B91419] rounded-2xl p-6 md:p-8 text-center text-white">
              <p className="text-xs uppercase tracking-wide text-white/70 font-semibold mb-2">Total 90-Day Reach</p>
              <p className="text-5xl md:text-7xl font-black mb-2">{reachCount}M+</p>
              <p className="text-sm text-white/80">UK · mid-point of 7M-13M range</p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6">
              <h3 className="text-[#ED1C24] font-bold text-sm mb-2">Why this isn&apos;t paid-only</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Hitting 10M reach on paid alone at our blended £15 CPM = ~£150K of paid spend just for impressions. The architecture above lets us hit 10M with £90K of paid Meta — KOLs, Hinen&apos;s own channels, named voices and earned event coverage do the rest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
