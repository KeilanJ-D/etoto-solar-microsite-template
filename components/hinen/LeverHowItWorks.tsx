'use client'

import { useEffect, useRef, useState } from 'react'
import { Workflow } from 'lucide-react'

const steps = [
  { num: '01', owner: 'ETOTO marketing', desc: 'Installer sees the offer (paid Meta · KOL post · email · distributor referral · BBQ)' },
  { num: '02', owner: 'ETOTO builds, Hinen hosts', desc: 'Installer clicks through to a Hinen-branded landing page on uk.hinen.com' },
  { num: '03', owner: 'Self-serve · ETOTO form', desc: 'Installer registers a Hinen UK trade account via the landing page' },
  { num: '04', owner: 'Hinen approves · ETOTO CRM tracks', desc: 'Trade account approved · CRM logs registration with full source attribution' },
  { num: '05', owner: 'Jay · Hinen UK', desc: 'Installer invited to place inaugural kit order through participating distributor' },
  { num: '06', owner: 'Distributor · Hinen reimburses', desc: 'Free 8.9kWh All-in-One bundle added at distributor level (Hinen reimburses internally)' },
  { num: '07', owner: 'ETOTO automation', desc: 'Installer auto-enrolled in Hinen Points System at top tier' },
]

const bundleItems = [
  { name: 'Hinen 8.9kWh High Voltage Battery Module', cost: '£1,275' },
  { name: 'Hinen 8000W Single-Phase Hybrid Inverter All-in-One', cost: '£710' },
  { name: 'BMS + Base for All-in-One', cost: '£75' },
]

export default function LeverHowItWorks() {
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
      id="how-it-works"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 md:px-6 bg-white overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#ED1C24]/10 text-[#ED1C24] text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Workflow className="w-4 h-4" />
            The Lever · How It Works
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Seven steps.
            <span className="block text-[#ED1C24]">One free bundle.</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className={`grid lg:grid-cols-2 gap-8 md:gap-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left - Steps */}
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="group flex gap-4 bg-white border border-slate-100 rounded-xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-12 h-12 flex-shrink-0 bg-[#ED1C24] text-white font-black text-lg rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <div>
                  <p className="text-[10px] text-[#ED1C24] font-semibold uppercase tracking-wide mb-1">{step.owner}</p>
                  <p className="text-sm text-slate-700">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Bundle Table */}
          <div>
            <div className="bg-slate-50 rounded-2xl p-5 md:p-8 mb-6">
              <h3 className="text-sm md:text-base font-bold text-slate-900 mb-4">What&apos;s in the bundle</h3>
              <div className="space-y-3">
                {bundleItems.map((item, i) => (
                  <div key={i} className="flex justify-between items-start gap-4 py-2 border-b border-slate-200 last:border-0">
                    <p className="text-sm text-slate-700">{item.name}</p>
                    <p className="text-sm font-bold text-slate-900 whitespace-nowrap">{item.cost}</p>
                  </div>
                ))}
                <div className="pt-3 border-t-2 border-slate-300">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-semibold text-slate-700">Per bundle · Hinen direct</p>
                    <p className="text-lg font-black text-slate-900">~£2,060</p>
                  </div>
                </div>
                <div className="bg-[#ED1C24] text-white rounded-xl p-4 mt-4">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-semibold">100 bundles · total Hinen commit</p>
                    <p className="text-xl font-black">~£206,000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Callout */}
            <div className="bg-slate-900 rounded-2xl p-6">
              <h3 className="text-[#ED1C24] font-bold text-sm mb-2">Expected Demand vs Supply</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                300-800 trade-account registrations forecast across the 30-day window, against 100 free bundles. Scarcity is part of the marketing — every ad shows the live count remaining. Installers outside the top 100 route straight into the Points System. Nothing is wasted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
