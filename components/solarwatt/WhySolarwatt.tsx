'use client'

import { useEffect, useRef, useState } from 'react'
import { Battery, Clock, Layers, Zap, Sparkles } from 'lucide-react'
import Image from 'next/image'

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
      description: 'SOLARWATT Battery vision contains BMW battery cells — the same components used in BMW electric vehicles, manufactured under joint development since 2013.',
      highlight: 'No competitor has that pedigree.',
      color: '#006068',
    },
    {
      icon: Clock,
      title: '30 Years of Solar Specialism',
      description: 'Founded 1993. 10 millionth panel installed (Suffolk, UK, 2023). Tesla Energy is a 9-year-old division; SOLARWATT is a 32-year-old solar company.',
      highlight: 'Different league.',
      color: '#006068',
    },
    {
      icon: Layers,
      title: 'Full-Stack Ecosystem',
      description: 'Panels, battery, inverter, manager, EV charger, heat pump, Home app — one supplier, one app, one warranty layer.',
      highlight: 'Complete-system pitch nobody else has.',
      color: '#EF4136',
    },
  ]

  return (
    <section id="why-solarwatt" ref={sectionRef} className="py-20 md:py-32 px-4 md:px-6 bg-white relative overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#006068]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Logo strip with ETOTO */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Image
              src="/logos/etoto-logo-black.png"
              alt="ETOTO Media"
              width={120}
              height={40}
              className="h-8 md:h-9"
              style={{ width: 'auto' }}
            />
            <span className="text-slate-300 text-xl">×</span>
            <Image
              src="/logos/solarwatt-logo.png"
              alt="SOLARWATT"
              width={140}
              height={32}
              className="h-7 md:h-8"
              style={{ width: 'auto' }}
            />
          </div>
          
          <span className="inline-flex items-center gap-2 bg-[#006068]/10 text-[#006068] text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            Why SOLARWATT Wins This Moment
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            BMW-backed technology.
            <span className="block">German engineering heritage.</span>
            <span className="block text-[#006068]">UK installers ready by December.</span>
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto">
            The UK residential storage market is in its biggest specification reset since GivEnergy. SOLARWATT is the premium European brand with the heritage to take that slot.
          </p>
        </div>

        {/* Three reasons - clean cards */}
        <div className={`grid md:grid-cols-3 gap-4 md:gap-5 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div 
                key={index}
                className="group bg-slate-50 border border-slate-100 rounded-2xl p-5 md:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${reason.color}10` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: reason.color }} />
                  </div>
                  {index === 0 && (
                    <Image
                      src="/logos/bmw-solarwatt-color.png"
                      alt="BMW"
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain opacity-60"
                    />
                  )}
                </div>
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">{reason.title}</h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-3">{reason.description}</p>
                <p className="text-xs md:text-sm font-semibold flex items-center gap-1.5" style={{ color: reason.color }}>
                  <Sparkles className="w-3.5 h-3.5" />
                  {reason.highlight}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
