'use client'

import { useEffect, useRef, useState } from 'react'
import { Users, Target, MapPin, Megaphone, Building2, Sparkles, ArrowRight, Zap, TrendingUp } from 'lucide-react'
import Image from 'next/image'

export default function TrackBExternal() {
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

  const installers = [
    {
      id: 1,
      name: 'Green Energy Solar',
      region: 'Wales + West Midlands',
      tag: 'ETOTO Recommendation',
      tagColor: '#006068',
      logo: '/logos/green-energy-solar.png',
      description: 'Wales\' #1 installer. Already integrated with CRM, SolaFlow and reporting.',
      readiness: 'Day 1 ready',
      role: 'The brand-defending installer',
    },
    {
      id: 2,
      name: 'SOLARWATT\'s Choice',
      region: 'South-East / London',
      tag: 'To Be Selected',
      tagColor: '#EF4136',
      logo: '/logos/solarwatt-logo.png',
      description: 'One installer from existing Premium Partner network, onboarded by ETOTO.',
      readiness: 'Geography TBD',
      role: 'The growth-acceleration installer',
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-28 px-4 md:px-6 bg-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#EF4136]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-[#006068]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#EF4136] text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Megaphone className="w-4 h-4" />
            Track B · External · Sponsored Installer Programme
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            £15K sponsored ad spend.{' '}
            <span className="text-[#EF4136]">Two installers. Three months.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
            <Image src="/logos/solarwatt-logo.png" alt="SOLARWATT" width={100} height={24} className="h-5 w-auto inline mx-1" />
            shows up in front of UK homeowners directly through sponsored campaigns.
          </p>
        </div>

        {/* Visual cost model */}
        <div className={`grid md:grid-cols-3 gap-4 md:gap-6 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-slate-100 rounded-2xl p-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-slate-200 flex items-center justify-center mx-auto mb-4">
              <Users className="w-7 h-7 text-slate-600" />
            </div>
            <p className="text-3xl font-black text-slate-900">£2.5K/m</p>
            <p className="text-sm text-slate-600 font-semibold mt-1">Installer pays ETOTO</p>
            <p className="text-xs text-slate-400 mt-2">Per installer retainer</p>
          </div>
          
          <div className="bg-[#006068] rounded-2xl p-6 text-center text-white">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
              <Megaphone className="w-7 h-7" />
            </div>
            <p className="text-3xl font-black">£2.5K/m</p>
            <p className="text-sm font-semibold mt-1 opacity-90">
              <Image src="/logos/solarwatt-logo.png" alt="SOLARWATT" width={80} height={20} className="h-4 w-auto inline brightness-0 invert mx-1" />
              funds ads
            </p>
            <p className="text-xs opacity-70 mt-2">Per installer ad budget</p>
          </div>
          
          <div className="bg-gradient-to-br from-[#EF4136] to-[#c9352c] rounded-2xl p-6 text-center text-white">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
              <Target className="w-7 h-7" />
            </div>
            <p className="text-3xl font-black">£5K/m</p>
            <p className="text-sm font-semibold mt-1 opacity-90">Effective total</p>
            <p className="text-xs opacity-70 mt-2">Per installer combined</p>
          </div>
        </div>

        {/* Arrow showing flow */}
        <div className={`flex justify-center mb-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-3 text-slate-400">
            <span className="text-sm font-semibold">2 installers × 3 months</span>
            <ArrowRight className="w-5 h-5" />
            <span className="text-lg font-black text-[#006068]">£15K total from SOLARWATT</span>
          </div>
        </div>

        {/* The two installers - visual cards */}
        <div className={`grid md:grid-cols-2 gap-6 mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {installers.map((installer, index) => (
            <div 
              key={installer.id}
              className="group relative bg-white border-2 border-slate-100 rounded-2xl md:rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              style={{ transitionDelay: `${500 + index * 150}ms` }}
            >
              {/* Header strip */}
              <div className="px-6 py-4 border-b border-slate-100" style={{ backgroundColor: `${installer.tagColor}10` }}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ backgroundColor: installer.tagColor }}>
                    {installer.tag}
                  </span>
                  <Image
                    src={installer.logo}
                    alt={installer.name}
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-2xl shrink-0" style={{ backgroundColor: installer.tagColor }}>
                    {installer.id}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">{installer.name}</h4>
                    <div className="flex items-center gap-1 text-slate-500 text-sm mt-1">
                      <MapPin className="w-4 h-4" />
                      {installer.region}
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm mb-4">{installer.description}</p>
                
                <div className="flex items-center gap-2 text-sm">
                  <Sparkles className="w-4 h-4" style={{ color: installer.tagColor }} />
                  <span className="font-semibold" style={{ color: installer.tagColor }}>{installer.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results projection - visual */}
        <div className={`bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl md:rounded-3xl p-6 md:p-10 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#006068] flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <p className="text-4xl font-black text-white">70-100</p>
              <p className="text-slate-400 text-sm mt-1">Leads/installer/month</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#EF4136] flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <p className="text-4xl font-black text-white">420-600</p>
              <p className="text-slate-400 text-sm mt-1">Total leads across both</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#006068] to-[#EF4136] flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <p className="text-4xl font-black text-white">84-120</p>
              <p className="text-slate-400 text-sm mt-1">
                <Image src="/logos/solarwatt-logo.png" alt="SOLARWATT" width={80} height={20} className="h-4 w-auto inline brightness-0 invert mx-1" />
                installs
              </p>
            </div>
          </div>
          <p className="text-center text-slate-500 text-sm mt-8">
            All branded <Image src="/logos/solarwatt-logo.png" alt="SOLARWATT" width={80} height={20} className="h-4 w-auto inline brightness-0 invert mx-1" /> — even non-converters now know the brand exists.
          </p>
        </div>
      </div>
    </section>
  )
}
