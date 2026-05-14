'use client'

import { useEffect, useRef, useState } from 'react'
import { Users, Target, MapPin, Megaphone, Zap, TrendingUp, Building2 } from 'lucide-react'
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

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-4 md:px-6 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EF4136]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#EF4136] text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Megaphone className="w-4 h-4" />
            Track B · External · Sponsored Installer Programme
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-3">
            £15K sponsored ad spend.{' '}
            <span className="text-[#EF4136]">Two installers. Three months.</span>
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto">
            <Image src="/logos/solarwatt-logo.png" alt="SOLARWATT" width={80} height={20} className="h-4 md:h-5 inline mx-1 align-middle" style={{ width: 'auto' }} />
            shows up directly in front of UK homeowners through sponsored campaigns.
          </p>
        </div>

        {/* Cost model - visual */}
        <div className={`grid grid-cols-3 gap-3 md:gap-4 mb-12 md:mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-slate-100 rounded-2xl p-4 md:p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-slate-600" />
            </div>
            <p className="text-2xl md:text-3xl font-black text-slate-900">£2.5K</p>
            <p className="text-[10px] md:text-xs text-slate-500 font-medium mt-1">Installer pays ETOTO/m</p>
          </div>
          <div className="bg-[#006068] rounded-2xl p-4 md:p-6 text-center text-white">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-3">
              <Megaphone className="w-6 h-6" />
            </div>
            <p className="text-2xl md:text-3xl font-black">£2.5K</p>
            <p className="text-[10px] md:text-xs text-white/70 font-medium mt-1">
              <Image src="/logos/solarwatt-logo.png" alt="SOLARWATT" width={60} height={14} className="h-3 inline brightness-0 invert" style={{ width: 'auto' }} /> funds ads/m
            </p>
          </div>
          <div className="bg-[#EF4136] rounded-2xl p-4 md:p-6 text-center text-white">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-3">
              <Target className="w-6 h-6" />
            </div>
            <p className="text-2xl md:text-3xl font-black">£5K</p>
            <p className="text-[10px] md:text-xs text-white/70 font-medium mt-1">Effective total/m</p>
          </div>
        </div>

        {/* The two installers */}
        <div className={`grid md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Green Energy Solar */}
          <div className="group bg-white border-2 border-[#006068]/20 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="bg-[#006068]/5 px-5 py-3 border-b border-[#006068]/10 flex items-center justify-between">
              <span className="text-[10px] md:text-xs font-bold text-[#006068] bg-[#006068]/10 px-3 py-1 rounded-full">ETOTO Recommendation</span>
              <Image src="/logos/green-energy-solar.png" alt="Green Energy Solar" width={80} height={30} className="h-6 object-contain opacity-80" style={{ width: 'auto' }} />
            </div>
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#006068] text-white font-black text-lg flex items-center justify-center">1</div>
                <div>
                  <p className="font-bold text-slate-900">Green Energy Solar</p>
                  <p className="text-xs text-slate-500 flex items-center gap-1"><MapPin className="w-3 h-3" />Wales + West Midlands</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">Wales&apos; #1 installer. Already integrated with CRM, SolaFlow and reporting.</p>
              <p className="text-xs text-[#006068] font-semibold mt-3">Day 1 ready · The brand-defending installer</p>
            </div>
          </div>
          
          {/* SOLARWATT's Choice */}
          <div className="group bg-white border-2 border-[#EF4136]/20 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="bg-[#EF4136]/5 px-5 py-3 border-b border-[#EF4136]/10 flex items-center justify-between">
              <span className="text-[10px] md:text-xs font-bold text-[#EF4136] bg-[#EF4136]/10 px-3 py-1 rounded-full">To Be Selected</span>
              <Image src="/logos/solarwatt-logo.png" alt="SOLARWATT" width={80} height={20} className="h-5 object-contain opacity-80" style={{ width: 'auto' }} />
            </div>
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#EF4136] text-white font-black text-lg flex items-center justify-center">2</div>
                <div>
                  <p className="font-bold text-slate-900">SOLARWATT&apos;s Choice</p>
                  <p className="text-xs text-slate-500 flex items-center gap-1"><MapPin className="w-3 h-3" />South-East / London</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">One installer from existing Premium Partner network, onboarded by ETOTO.</p>
              <p className="text-xs text-[#EF4136] font-semibold mt-3">Geography TBD · The growth-acceleration installer</p>
            </div>
          </div>
        </div>

        {/* Results projection */}
        <div className={`bg-slate-900 rounded-2xl p-6 md:p-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-slate-400 text-xs md:text-sm font-semibold uppercase tracking-wider text-center mb-6">Projected Results · 3 Months</p>
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-[#006068] flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl md:text-4xl font-black text-white">70-100</p>
              <p className="text-[10px] md:text-xs text-slate-400 mt-1">Leads/installer/month</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-[#EF4136] flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl md:text-4xl font-black text-white">420-600</p>
              <p className="text-[10px] md:text-xs text-slate-400 mt-1">Total leads across both</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#006068] to-[#EF4136] flex items-center justify-center mx-auto mb-3">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl md:text-4xl font-black text-white">84-120</p>
              <p className="text-[10px] md:text-xs text-slate-400 mt-1">
                <Image src="/logos/solarwatt-logo.png" alt="SOLARWATT" width={60} height={14} className="h-3 inline brightness-0 invert" style={{ width: 'auto' }} /> installs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
