'use client'

import { useEffect, useRef, useState } from 'react'
import { Mic } from 'lucide-react'

const voices = [
  { num: '01', name: 'Jay', role: 'Hinen UK Technical Lead', speaks: 'Technical-lead installers · design engineers', embedded: 'Production · no extra fee' },
  { num: '02', name: 'Phil', role: 'MCJ Energy · Installer-Owner', speaks: 'Owner-operators + SME installers', embedded: 'Production · no extra fee' },
  { num: '03', name: 'Taj', role: 'PowerWarehouse · Distributor', speaks: 'Installers shopping kit + price', embedded: 'Production · no extra fee' },
  { num: '04', name: 'ETOTO Media', role: 'Marketing Partner', speaks: 'Wider installer network + curious manufacturers', embedded: 'Production · no extra fee' },
  { num: '05', name: 'Homeowner Case Study', role: 'Real Install · Talking Head', speaks: 'Installer prospects + B2C demand', embedded: 'Production · no extra fee' },
  { num: '06', name: 'Keilan James-Devereux', role: 'Industry Voice', speaks: 'Industry-credibility-led audiences + LinkedIn', embedded: 'Production · no extra fee', isNew: true, credentials: 'Winner · Regional BDM/Director of the Year 2026 + ETOTO Highly Commended for Consultancy of the Year (SEEE Awards)' },
]

export default function SixNamedVoices() {
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
      id="voices"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 md:px-6 bg-slate-50 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#ED1C24]/10 text-[#ED1C24] text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Mic className="w-4 h-4" />
            The Voice Roster
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Six named voices.
            <span className="block text-[#ED1C24]">Plus fourteen KOLs (next section).</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Nikita asked how we expand creator coverage. The OG five plus Keilan as the new sixth — embedded in the production sprint at no extra fee.
          </p>
        </div>

        {/* Voice Cards Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {voices.map((voice, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-2xl p-5 md:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                voice.isNew ? 'border-2 border-[#ED1C24]' : 'border border-slate-100'
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {voice.isNew && (
                <div className="absolute -top-3 right-4 bg-[#ED1C24] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                  NEW
                </div>
              )}
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-[#ED1C24]/10 text-[#ED1C24] font-black text-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {voice.num}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-900 text-base md:text-lg truncate">{voice.name}</h3>
                  <p className="text-xs text-[#ED1C24] font-semibold uppercase tracking-wide">{voice.role}</p>
                </div>
              </div>
              
              {voice.credentials && (
                <p className="text-xs text-amber-600 font-medium mt-3 bg-amber-50 rounded-lg p-2">
                  {voice.credentials}
                </p>
              )}
              
              <div className="mt-4 pt-4 border-t border-slate-100">
                <p className="text-[10px] text-slate-400 uppercase tracking-wide font-semibold mb-1">Speaks to</p>
                <p className="text-sm text-slate-600">{voice.speaks}</p>
              </div>
              
              <div className="mt-3">
                <p className="text-[10px] text-slate-400 uppercase tracking-wide font-semibold mb-1">Embedded in</p>
                <p className="text-xs text-slate-500">{voice.embedded}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
