'use client'

import { useEffect, useRef, useState } from 'react'
import { Filter, ChevronRight } from 'lucide-react'

export default function HundredWinners() {
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
      id="hundred-winners"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 md:px-6 bg-slate-50 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#ED1C24]/10 text-[#ED1C24] text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Filter className="w-4 h-4" />
            100 Winners · 500+ Leads
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
            100 win the bundle.
            <span className="block text-[#ED1C24]">500+ become trade accounts.</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            The giveaway is the lever. The lever produces a much wider funnel than the prize pool implies. Realistic forecast: 300-800 installer registrations during Days 1-30. Only the top 100 get the bundle. The other 200-700 enter the Points System, the email programme, the wider sales funnel — and convert across Months 2 and 3.
          </p>
        </div>

        {/* Funnel Diagram */}
        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Top - Wide Band */}
          <div className="bg-[#ED1C24] text-white rounded-t-2xl p-6 md:p-8 text-center">
            <p className="text-2xl md:text-4xl font-black mb-2">300-800</p>
            <p className="text-sm md:text-base font-semibold mb-4">Trade-account registrations during Days 1-30</p>
            <div className="flex flex-wrap justify-center gap-2 text-xs md:text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">All complete the registration form</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">All become trade accounts</span>
            </div>
          </div>

          {/* Middle - Split */}
          <div className="grid md:grid-cols-[1fr,2fr] gap-0.5 bg-slate-200">
            {/* Winners */}
            <div className="bg-slate-900 text-white p-6 md:p-8">
              <p className="text-4xl md:text-5xl font-black mb-2">100</p>
              <p className="text-sm font-semibold mb-4">Receive free 8.9kWh All-in-One on first kit purchase</p>
              <div className="flex items-center gap-2 text-xs text-white/70">
                <ChevronRight className="w-4 h-4 text-[#ED1C24]" />
                <span>Auto-enrolled in Points System at top tier</span>
              </div>
            </div>

            {/* Non-Winners */}
            <div className="bg-slate-100 text-slate-900 p-6 md:p-8">
              <p className="text-4xl md:text-5xl font-black text-slate-400 mb-2">200-700</p>
              <p className="text-sm font-semibold mb-4">Enter Points System at standard tier</p>
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#ED1C24]" />
                  <span>Routed into email nurture</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#ED1C24]" />
                  <span>Re-engaged via paid retargeting</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#ED1C24]" />
                  <span>Converted via 14.4kWh push and Premier badge in Months 2-3</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom - Converging */}
          <div className="bg-slate-900 text-white rounded-b-2xl p-6 md:p-8 text-center">
            <p className="text-sm md:text-base text-slate-400 mb-2">All 300-800 are now Hinen-approved trade installers</p>
            <p className="text-lg md:text-xl font-bold">
              Day 90 target: <span className="text-[#ED1C24]">300 onboarded</span> with verified first kit purchase
            </p>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className={`mt-12 md:mt-16 bg-[#ED1C24] text-white rounded-2xl p-6 md:p-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="font-bold text-base md:text-lg mb-2">Nothing is wasted</h3>
          <p className="text-white/90 text-sm md:text-base leading-relaxed">
            The 200-700 non-winners are NOT a write-off. They&apos;ve registered. They have a Hinen trade account. They&apos;re in the email programme. They&apos;re in the Points System earning toward their first redemption. They get bombarded by KOL content, testimonials, the 14.4kWh push, the BBQ event, and the Premier badge launch. The lever creates the lead pool — the rest of the engine converts it.
          </p>
        </div>
      </div>
    </section>
  )
}
