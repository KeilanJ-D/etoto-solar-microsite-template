'use client'

import { useEffect, useRef, useState } from 'react'
import { Database } from 'lucide-react'

const entryPoints = [
  { name: 'Hinen UK landing pages', location: 'uk.hinen.com (ETOTO builds, Hinen hosts)', captures: 'Long-form trade-account registration' },
  { name: 'Meta lead forms', location: 'Inside paid ad creative (no autofill)', captures: '7-step qualifier · contact captured last' },
  { name: 'Quiz funnels (Perspective)', location: 'Embedded in Hinen UK + ad landing pages', captures: 'Property + intent profile' },
]

const routingSteps = [
  { num: '01', owner: 'Self-serve', desc: 'Lead captures via one of 3 entry points' },
  { num: '02', owner: 'ETOTO automation', desc: 'Auto-tag with source · welcome SMS/email fires within 60s' },
  { num: '03', owner: 'ETOTO team', desc: 'ETOTO triage screens within 1 hour (MCS + region match)' },
  { num: '04', owner: 'Jay + Hinen UK', desc: 'Qualified lead routed to Jay for 1:1' },
  { num: '05', owner: 'Hinen UK', desc: 'On conversion, Hinen UK confirms distributor by region' },
  { num: '06', owner: 'Distributor + ETOTO', desc: 'Distributor fulfils kit (free 8.9kWh OR points redemption)' },
  { num: '07', owner: 'ETOTO automation', desc: 'Lead moves to \'Onboarded\' · enrolled in Points System' },
]

export default function CRMRouting() {
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
      id="crm-routing"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 md:px-6 bg-white overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#ED1C24]/10 text-[#ED1C24] text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Database className="w-4 h-4" />
            CRM · Entry Points + Routing
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
            One CRM. Three doors.
            <span className="block text-[#ED1C24]">Seven steps to onboarded.</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left - Entry Points */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4">Three Entry Points</h3>
            <div className="space-y-4">
              {entryPoints.map((ep, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <p className="font-bold text-slate-900 text-sm mb-1">{ep.name}</p>
                  <p className="text-xs text-slate-500 mb-2">{ep.location}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#ED1C24] font-semibold uppercase">Captures:</span>
                    <span className="text-xs text-slate-600">{ep.captures}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Routing Steps */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4">How It Routes</h3>
            <div className="space-y-2">
              {routingSteps.map((step, i) => (
                <div key={i} className="flex gap-3 group">
                  <div className="w-8 h-8 flex-shrink-0 bg-[#ED1C24] text-white font-bold text-xs rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.num}
                  </div>
                  <div className="flex-1 py-1">
                    <p className="text-[10px] text-[#ED1C24] font-semibold uppercase tracking-wide">{step.owner}</p>
                    <p className="text-sm text-slate-700">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className={`mt-12 bg-[#ED1C24] text-white rounded-2xl p-6 md:p-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="font-bold text-base mb-2">The Hinen UK Loop</h3>
          <p className="text-white/90 text-sm leading-relaxed">
            Handover point is step 4. ETOTO surfaces qualified, region-matched, MCS-verified installers to Jay&apos;s inbox. Jay (and Hinen UK) own the 1:1 onboarding conversation. ~1,200 leads → ~25% stacked conversion (qualifier 70% × Jay close 55% × distributor match 65%) = ~300 onboarded.
          </p>
        </div>
      </div>
    </section>
  )
}
