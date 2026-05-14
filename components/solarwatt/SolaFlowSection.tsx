'use client'

import { useEffect, useRef, useState } from 'react'
import { ExternalLink, MapPin, Sparkles, TrendingUp, Zap } from 'lucide-react'
import { ETOTO_LINKS } from '@/lib/etoto-data'
import Image from 'next/image'

export default function SolaFlowSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: MapPin,
      title: 'Satellite roof pinning',
      body:
        'Homeowner drops a pin on their actual roof. Coordinates feed accurate panel placement, shading and string-design estimates — pre-populated with SOLARWATT panels.',
    },
    {
      icon: TrendingUp,
      title: 'Live SOLARWATT savings forecast',
      body:
        'The 25-year ROI, payback period and self-consumption maths update in real time with SOLARWATT panel and Battery vision specs — not a generic spreadsheet.',
    },
    {
      icon: Zap,
      title: 'Lead → installer CRM in one tap',
      body:
        'Every qualified lead routes straight into the matched SOLARWATT installer\'s CRM, UTM-tagged so SOLARWATT sees which installers are converting which campaigns.',
    },
  ]

  return (
    <section
      id="solaflow"
      ref={sectionRef}
      className="relative py-16 md:py-28 px-4 md:px-6 bg-gradient-to-b from-slate-50/40 to-white overflow-hidden"
    >
      {/* Animated blobs */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-[#0066B3]/5 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#F5921E]/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-6xl mx-auto">
        {/* Header with logos */}
        <div
          className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          /* BMW + SOLARWATT trust badge - removed per request */
          
          <span className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live tool · embedded for SOLARWATT
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 text-balance">
            We&apos;ll bake SOLARWATT into{' '}
            <span className="text-[#0066B3]">SolaFlow</span> for every installer.
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
            SolaFlow is ETOTO&apos;s customer-facing quote engine. It already runs across 200+ UK
            installers. Every SOLARWATT-installing partner we onboard gets SolaFlow pre-loaded with
            the SOLARWATT panel + Battery vision configuration — so the customer sees a SOLARWATT
            quote, not a generic one.
          </p>
        </div>

        {/* Feature trio */}
        <div
          className={`grid lg:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-10 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div
                key={i}
                className="group bg-white border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl p-5 md:p-6"
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[#0066B3]/10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-4 w-4 md:h-5 md:w-5 text-[#0066B3]" />
                </div>
                <h3 className="font-black text-base md:text-lg text-slate-900 leading-tight">{f.title}</h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed mt-2">{f.body}</p>
              </div>
            )
          })}
        </div>

        {/* Live embed */}
        <div
          className={`bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xl transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Browser-chrome bar */}
          <div className="flex items-center justify-between gap-3 px-4 md:px-6 py-3 md:py-4 border-b border-slate-100 bg-slate-50/50">
            <div className="flex items-center gap-3 min-w-0">
              <div className="hidden sm:flex h-9 w-9 rounded-xl bg-[#0066B3]/10 items-center justify-center shrink-0">
                <Sparkles className="h-4 w-4 text-[#0066B3]" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-black text-sm md:text-base text-slate-900 truncate">
                    SolaFlow demo · live
                  </span>
                  <span className="hidden sm:inline-flex bg-emerald-100 text-emerald-700 border border-emerald-200 text-[10px] md:text-xs font-bold px-2 py-0.5 rounded-full">
                    LIVE
                  </span>
                </div>
                <span className="text-[10px] md:text-[11px] text-slate-500 truncate block font-mono">
                  vercel-solar-estimator.vercel.app
                </span>
              </div>
            </div>
            <a
              href={ETOTO_LINKS.solaflowDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-full border border-slate-300 hover:bg-slate-900 hover:text-white hover:border-slate-900 font-bold text-xs md:text-sm transition-all shrink-0 hover:scale-105"
            >
              <span className="hidden sm:inline">Open in new tab</span>
              <span className="sm:hidden">Open</span>
              <ExternalLink className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </a>
          </div>

          {/* Iframe */}
          <div className="relative bg-slate-50">
            {!iframeLoaded && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex items-center gap-3 text-slate-500 text-sm md:text-base font-semibold">
                  <span className="w-3 h-3 rounded-full bg-[#0066B3] animate-pulse" />
                  Loading SolaFlow...
                </div>
              </div>
            )}
            <iframe
              src={ETOTO_LINKS.solaflowDemo}
              title="SolaFlow — live solar quote builder demo"
              className="w-full h-[600px] sm:h-[720px] md:h-[820px] block"
              loading="lazy"
              allow="geolocation; clipboard-write"
              onLoad={() => setIframeLoaded(true)}
            />
          </div>
        </div>

        {/* What SOLARWATT gets */}
        <div
          className={`mt-10 md:mt-12 grid sm:grid-cols-3 gap-3 md:gap-4 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            {
              label: 'Pre-loaded',
              value: 'SOLARWATT panel + Battery vision specs baked into every quote',
            },
            {
              label: 'Real-time',
              value: 'Every installer sees lead activity routed to their CRM',
            },
            {
              label: 'Tagged',
              value: 'utm_source=solarwatt-proposal so every lead is attributable to the sprint',
            },
          ].map((item, i) => (
            <div key={i} className="group bg-white border border-slate-100 rounded-xl p-4 md:p-5 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.14em] text-[#0066B3] mb-2">
                {item.label}
              </div>
              <p className="text-xs md:text-sm font-semibold text-slate-700 leading-snug">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
