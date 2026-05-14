'use client'

import { useEffect, useRef, useState } from 'react'
import { Battery, Award, Layers, Shield, Clock, Zap } from 'lucide-react'

export default function WhySolarwatt() {
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

  const reasons = [
    {
      icon: Battery,
      title: 'BMW Battery Technology',
      description: 'SOLARWATT Battery vision contains BMW battery cells — the same high-quality components used in BMW electric vehicles, manufactured under joint development since 2013. Designed by BMW. Built by SOLARWATT. Installed by UK partners.',
      highlight: 'No competitor has that pedigree.',
    },
    {
      icon: Clock,
      title: '30 Years of Solar Specialism',
      description: 'Founded 1993. 10 millionth panel installed (Suffolk, UK, 2023). German Innovation Award 2026 winner for the SOLARWATT Home app. Tesla Energy is a 9-year-old division; SOLARWATT is a 32-year-old solar company with BMW battery technology inside it.',
      highlight: 'Different league.',
    },
    {
      icon: Layers,
      title: 'Full-Stack Ecosystem',
      description: 'Panels, battery, inverter, manager, EV charger, heat pump, Home app — one supplier, one app, one warranty layer. Tesla Energy is missing the heat pump, missing the panel manufacturing scale, missing the battery technology heritage.',
      highlight: 'Complete-system pitch nobody else has.',
    },
  ]

  return (
    <section id="why-solarwatt" ref={sectionRef} className="py-16 md:py-28 px-4 md:px-6 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#0066B3]/10 text-[#0066B3] text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            Why SOLARWATT Wins This Moment
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            The UK Installer Market Is <span className="text-[#0066B3]">Wide Open</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-3xl mx-auto">
            The UK residential storage market is in the middle of its biggest specification reset since GivEnergy. Installers are actively looking for the next default kit. SOLARWATT is the one premium European brand with the heritage, technology partnership, and engineering credibility to take that slot.
          </p>
        </div>

        {/* Three reasons */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50/30 border border-slate-100 rounded-xl md:rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#0066B3]/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#0066B3]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{reason.description}</p>
                <p className="text-sm font-semibold text-[#0066B3]">{reason.highlight}</p>
              </div>
            )
          })}
        </div>

        {/* Head-to-head with Tesla */}
        <div className={`bg-slate-900 rounded-xl md:rounded-2xl p-6 md:p-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-[#F5921E]" />
            <h3 className="text-xl font-bold text-white">The Head-to-Head with Tesla</h3>
          </div>
          <p className="text-slate-300 leading-relaxed mb-6">
            Tesla owns the brand awareness. SOLARWATT owns the engineering. The UK installer choosing what to put on a quote is asking three questions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-white font-semibold mb-1">&ldquo;Will it last 25 years?&rdquo;</p>
              <p className="text-xs text-slate-400">SOLARWATT: German engineering + BMW cells</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-white font-semibold mb-1">&ldquo;Will the customer trust the brand?&rdquo;</p>
              <p className="text-xs text-slate-400">Tesla wins today — but not for long</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-white font-semibold mb-1">&ldquo;Will my margin work?&rdquo;</p>
              <p className="text-xs text-slate-400">SOLARWATT: Premium positioning = premium margin</p>
            </div>
          </div>
          <div className="bg-[#0066B3]/20 border border-[#0066B3]/30 rounded-lg p-4">
            <p className="text-white font-semibold">
              The work below wins SOLARWATT all three by the end of 2026.
            </p>
          </div>
        </div>

        {/* 6-month window callout */}
        <div className={`mt-8 text-center transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 bg-[#F5921E]/10 border border-[#F5921E]/20 rounded-full px-6 py-3">
            <Award className="w-5 h-5 text-[#F5921E]" />
            <p className="text-sm text-slate-700">
              <span className="font-semibold text-[#F5921E]">We have a 6-month window</span> to lock this in before someone else does.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
