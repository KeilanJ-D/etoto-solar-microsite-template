'use client'

import { useEffect, useRef, useState } from 'react'
import { MapPin, Check, X } from 'lucide-react'

const towns = [
  { name: 'Leicester', status: 'strong', leads: 'HQ (limited ranking)' },
  { name: 'Loughborough', status: 'none', leads: '0 pages' },
  { name: 'Hinckley', status: 'none', leads: '0 pages' },
  { name: 'Nottingham', status: 'none', leads: '0 pages' },
  { name: 'Wigston', status: 'none', leads: '0 pages' },
  { name: 'Oadby', status: 'none', leads: '0 pages' },
  { name: 'Coalville', status: 'none', leads: '0 pages' },
  { name: 'Melton Mowbray', status: 'none', leads: '0 pages' },
  { name: 'Market Harborough', status: 'none', leads: '0 pages' },
  { name: 'Ashby-de-la-Zouch', status: 'none', leads: '0 pages' },
]

export default function GeographicCoverage() {
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

  const strongTowns = towns.filter(c => c.status === 'strong')
  const missingTowns = towns.filter(c => c.status === 'none')

  return (
    <section ref={sectionRef} className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-10 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-teal-50 text-[var(--ec-accent)] text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <MapPin className="w-4 h-4" />
            Geographic Coverage
          </span>
          <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-3 md:mb-4">
            Where Your Leads Should Be Coming From
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
            You cover Leicester and Nottinghamshire, but you have zero area-specific pages. Your biggest local competitor has 23.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {/* Strong Coverage */}
          <div className={`bg-white rounded-xl md:rounded-2xl border border-slate-100 p-5 md:p-6 shadow-sm transition-all duration-700 delay-100 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-5 md:mb-6">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm md:text-base">Current Coverage</h3>
                <p className="text-xs md:text-sm text-slate-500">Where you have some presence</p>
              </div>
            </div>
            <div className="space-y-2 md:space-y-3">
              {strongTowns.map((town, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 md:p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-600" />
                    <span className="font-medium text-green-700 text-sm md:text-base">{town.name}</span>
                  </div>
                  <span className="text-xs md:text-sm text-green-600 font-semibold">{town.leads}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Missing Opportunities */}
          <div className={`bg-white rounded-xl md:rounded-2xl border border-slate-100 p-5 md:p-6 shadow-sm transition-all duration-700 delay-200 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-5 md:mb-6">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-red-100 flex items-center justify-center">
                <X className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm md:text-base">Missing Opportunities</h3>
                <p className="text-xs md:text-sm text-slate-500">Zero dedicated pages for these areas</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {missingTowns.map((town, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 md:p-3 bg-red-50/50 rounded-lg opacity-80 hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-400" />
                    <span className="font-medium text-slate-600 text-sm md:text-base">{town.name}</span>
                  </div>
                  <span className="text-xs text-red-500 font-semibold">{town.leads}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom insight */}
        <div className={`mt-8 md:mt-12 bg-gradient-to-r from-[var(--ec-accent)] to-[#0B7B70] rounded-xl md:rounded-2xl p-5 md:p-8 text-white text-center transition-all duration-700 delay-500 hover:shadow-2xl hover:shadow-[var(--ec-accent)]/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg md:text-2xl font-bold mb-1 md:mb-2">
            Spectrum Energy Systems has 23 town-level pages across Leicestershire.
          </p>
          <p className="text-white/80 text-sm md:text-base">
            You have <span className="font-bold text-white">zero</span>. Every one of those towns is a keyword they rank for and you don&apos;t.
          </p>
        </div>
      </div>
    </section>
  )
}
