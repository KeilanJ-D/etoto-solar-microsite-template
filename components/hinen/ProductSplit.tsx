'use client'

import { useEffect, useRef, useState } from 'react'
import { Layers } from 'lucide-react'

const comparison = [
  { dimension: 'Position', v89: 'Entry-tier · headline of giveaway · volume play', v144: 'Premium-tier · larger homes · EV households · AOV play' },
  { dimension: 'Anchor in the sprint', v89: 'Free with first kit (the 100-installer lever)', v144: 'Lead-gen + Hinen Approved Premier badge incentive' },
  { dimension: 'Spend allocation', v89: '60% (~£54K of paid + KOL weight)', v144: '40% (~£36K of paid + KOL weight)' },
  { dimension: 'Creative production', v89: '60% of hero shoots + cut-downs', v144: '40% of hero shoots + cut-downs · premium aesthetic' },
  { dimension: 'KOL allocation', v89: '9 of 14 KOLs feature 8.9kWh primary', v144: '5 of 14 KOLs feature 14.4kWh primary' },
  { dimension: 'Email cadence (32 sends)', v89: '20 sends 8.9-led', v144: '12 sends 14.4-led' },
  { dimension: 'Expected installer mix', v89: '~200 of 300 onboarded', v144: '~100 of 300 onboarded' },
]

export default function ProductSplit() {
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
      id="product-split"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 md:px-6 bg-slate-50 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#ED1C24]/10 text-[#ED1C24] text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Layers className="w-4 h-4" />
            Product Split · 8.9 vs 14.4
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
            60% to 8.9kWh.
            <span className="block">40% to 14.4kWh.</span>
            <span className="block text-[#ED1C24]">One sprint, two narratives.</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            8.9kWh leads on volume and is the entry-tier hero of the giveaway. 14.4kWh leads on AOV and is positioned to higher-spec installers + larger-property homeowners.
          </p>
        </div>

        {/* Comparison Table */}
        <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-slate-50 text-xs font-bold text-slate-500 uppercase tracking-wide w-1/4">Dimension</th>
                  <th className="text-left p-4 bg-[#ED1C24]/10 text-xs font-bold text-[#ED1C24] uppercase tracking-wide w-[37.5%]">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 bg-[#ED1C24] text-white font-bold rounded-lg flex items-center justify-center text-[10px]">60%</span>
                      8.9kWh All-in-One
                    </div>
                  </th>
                  <th className="text-left p-4 bg-[#F5A623]/10 text-xs font-bold text-[#F5A623] uppercase tracking-wide w-[37.5%]">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 bg-[#F5A623] text-white font-bold rounded-lg flex items-center justify-center text-[10px]">40%</span>
                      14.4kWh High-Capacity
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-t border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 font-semibold text-slate-900 text-sm">{row.dimension}</td>
                    <td className="p-4 text-slate-700 text-sm bg-[#ED1C24]/5">{row.v89}</td>
                    <td className="p-4 text-slate-700 text-sm bg-[#F5A623]/5">{row.v144}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-slate-200">
                  <td className="p-4 font-bold text-slate-900 text-sm">Position summary</td>
                  <td className="p-4 bg-[#ED1C24]/10">
                    <span className="inline-block bg-[#ED1C24] text-white text-xs font-bold px-3 py-1 rounded-full">Entry-tier · volume play</span>
                  </td>
                  <td className="p-4 bg-[#F5A623]/10">
                    <span className="inline-block bg-[#F5A623] text-white text-xs font-bold px-3 py-1 rounded-full">Premium · AOV play</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden">
            {/* 8.9kWh */}
            <div className="p-4 bg-[#ED1C24]/5 border-b border-slate-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-10 h-10 bg-[#ED1C24] text-white font-bold rounded-lg flex items-center justify-center">60%</span>
                <div>
                  <p className="font-bold text-slate-900">8.9kWh All-in-One</p>
                  <p className="text-xs text-[#ED1C24]">Entry-tier · volume play</p>
                </div>
              </div>
              {comparison.map((row, i) => (
                <div key={i} className="py-2 border-t border-slate-100 first:border-0">
                  <p className="text-xs text-slate-500 font-semibold mb-1">{row.dimension}</p>
                  <p className="text-sm text-slate-700">{row.v89}</p>
                </div>
              ))}
            </div>

            {/* 14.4kWh */}
            <div className="p-4 bg-[#F5A623]/5">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-10 h-10 bg-[#F5A623] text-white font-bold rounded-lg flex items-center justify-center">40%</span>
                <div>
                  <p className="font-bold text-slate-900">14.4kWh High-Capacity</p>
                  <p className="text-xs text-[#F5A623]">Premium · AOV play</p>
                </div>
              </div>
              {comparison.map((row, i) => (
                <div key={i} className="py-2 border-t border-slate-100 first:border-0">
                  <p className="text-xs text-slate-500 font-semibold mb-1">{row.dimension}</p>
                  <p className="text-sm text-slate-700">{row.v144}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
