'use client'

import { useEffect, useRef, useState } from 'react'
import { Users } from 'lucide-react'

const categories = [
  { category: 'Lifestyle / home improvement', volume: '4 KOLs', profile: '10K-80K followers · IG + TikTok', allocation: '1 paid hero · 3 gifted' },
  { category: 'Tech / unboxing reviewers', volume: '4 KOLs', profile: '30K-200K followers · YouTube + IG', allocation: '1 paid hero · 3 gifted' },
  { category: 'DIY / electrical creators', volume: '3 KOLs', profile: '20K-150K followers · YouTube + TikTok', allocation: '1 paid hero · 2 gifted' },
  { category: 'Renewable energy creators', volume: '3 KOLs', profile: '10K-60K followers · IG + LinkedIn', allocation: '1 paid hero · 2 gifted' },
]

export default function FourteenKOLs() {
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
      id="kols"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 md:px-6 bg-white overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#ED1C24]/10 text-[#ED1C24] text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4" />
            Fourteen KOLs · Four Categories
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Fourteen KOLs.
            <span className="block">Four categories.</span>
            <span className="block text-[#ED1C24]">ETOTO sources every one.</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left - Table */}
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="text-left p-4 text-xs font-bold text-slate-500 uppercase tracking-wide">Category</th>
                    <th className="text-left p-4 text-xs font-bold text-slate-500 uppercase tracking-wide hidden md:table-cell">Volume</th>
                    <th className="text-left p-4 text-xs font-bold text-[#ED1C24] uppercase tracking-wide">Allocation</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((item, i) => (
                    <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                      <td className="p-4">
                        <p className="font-semibold text-slate-900 text-sm">{item.category}</p>
                        <p className="text-xs text-slate-500 mt-1">{item.profile}</p>
                      </td>
                      <td className="p-4 text-slate-600 text-sm hidden md:table-cell">{item.volume}</td>
                      <td className="p-4 text-slate-900 font-medium text-sm">{item.allocation}</td>
                    </tr>
                  ))}
                  <tr className="bg-[#ED1C24]/5">
                    <td className="p-4 font-bold text-slate-900 text-sm">TOTAL</td>
                    <td className="p-4 font-bold text-slate-900 text-sm hidden md:table-cell">14 KOLs</td>
                    <td className="p-4 font-black text-[#ED1C24] text-sm">4 paid hero · 10 gifted</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right - Tier Cards */}
          <div className="space-y-4">
            {/* Paid Hero */}
            <div className="bg-white rounded-2xl border-2 border-[#ED1C24] p-5 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#ED1C24] text-white font-bold text-xs rounded-lg flex items-center justify-center">4</div>
                <h3 className="font-bold text-slate-900">PAID HERO</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wide font-semibold mb-1">What ETOTO + Hinen provide</p>
                  <ul className="text-slate-600 space-y-1">
                    <li>Free Hinen 8.9kWh battery (gifted)</li>
                    <li>£2,500 flat fee</li>
                    <li>ETOTO production crew shoots WITH them for 1 full day</li>
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wide font-semibold mb-1">What the creator delivers</p>
                  <ul className="text-slate-600 space-y-1">
                    <li>1 hero piece (60-90s) + 4-6 cut-downs</li>
                    <li>Co-licensed for paid amplification on Hinen&apos;s account</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Gifted Seed */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-slate-200 text-slate-700 font-bold text-xs rounded-lg flex items-center justify-center">10</div>
                <h3 className="font-bold text-slate-900">GIFTED SEED</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wide font-semibold mb-1">What ETOTO + Hinen provide</p>
                  <ul className="text-slate-600 space-y-1">
                    <li>Free Hinen 8.9kWh battery (gifted)</li>
                    <li>£150 admin fee</li>
                    <li>ETOTO content brief</li>
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wide font-semibold mb-1">What the creator delivers</p>
                  <ul className="text-slate-600 space-y-1">
                    <li>3 organic posts across 90 days</li>
                    <li className="text-xs text-slate-500">Unboxing/install reveal · Educational/tariff strategy · Testimonial</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className={`mt-8 bg-slate-900 rounded-2xl p-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-[#ED1C24] font-bold text-sm mb-2">ETOTO&apos;s commitment on the shortlist</h3>
          <p className="text-white/90 text-sm leading-relaxed">
            We deliver a 30+ creator shortlist (with channel links + estimated partnership terms) within 7 days of sprint sign-off. Hinen approves down to the final 14.
          </p>
        </div>
      </div>
    </section>
  )
}
