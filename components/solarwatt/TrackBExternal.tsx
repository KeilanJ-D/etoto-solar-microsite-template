'use client'

import { useEffect, useRef, useState } from 'react'
import { Users, Target, MapPin, Check, ExternalLink, Megaphone, Building2, Sparkles } from 'lucide-react'
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

  const costModel = [
    { component: 'Installer-paid ETOTO retainer', note: '(NOT a SOLARWATT cost)', perMonth: '£2,500', per3Months: '£7,500', bothTotal: '£15,000 (paid by installers)', icon: Users },
    { component: 'SOLARWATT-funded ad budget', note: '', perMonth: '£2,500', per3Months: '£7,500', bothTotal: '£15,000 (paid by SOLARWATT)', icon: Megaphone },
    { component: 'Effective monthly spend per installer', note: '', perMonth: '£5,000', per3Months: '£15,000', bothTotal: '£30,000 across both installers', highlight: true, icon: Target },
  ]

  const installers = [
    {
      id: 1,
      name: 'Green Energy Solar (Wales)',
      tag: 'ETOTO Recommendation',
      tagColor: '#0066B3',
      logo: '/logos/green-energy-solar.png',
      description: 'Wales\' #1 installer by both install volume and credibility. Existing ETOTO retainer client — already integrated with the CRM, the SolarFlow tool and our reporting infrastructure.',
      readiness: 'Onboardable on Day 1 of Track B.',
      geography: 'Wales, into the West Midlands.',
      role: 'The brand-defending installer.',
    },
    {
      id: 2,
      name: 'SOLARWATT\'s Choice',
      tag: 'To Be Selected',
      tagColor: '#F5921E',
      logo: '/logos/solarwatt-logo.png',
      description: 'One installer from SOLARWATT\'s existing Premium Partner network, selected by SOLARWATT and onboarded by ETOTO.',
      readiness: 'Geography to be agreed.',
      geography: 'We recommend a region with no overlap to Green Energy Solar — e.g. South-East England or Greater London.',
      role: 'The growth-acceleration installer.',
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-28 px-4 md:px-6 bg-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#F5921E]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-[#0066B3]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#F5921E] text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Megaphone className="w-4 h-4" />
            Track B · External · The Sponsored Installer Programme
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            £15,000 of Sponsored Ad Spend. <span className="text-[#F5921E]">Two Installers. Three Months.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-3xl mx-auto">
            Track B is where SOLARWATT shows up in front of UK homeowners directly — not through ETOTO&apos;s installer-facing channels, but through two sponsored installer partners running SOLARWATT-branded campaigns to consumer audiences. SOLARWATT funds the ad budget. The installers fund their own ETOTO retainer. Everyone wins.
          </p>
        </div>

        {/* Cost model */}
        <div className={`mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#F5921E]" />
            How the Model Works
          </h3>
          <div className="bg-slate-900 rounded-xl md:rounded-2xl overflow-hidden">
            <div className="grid grid-cols-5 gap-2 md:gap-4 px-4 md:px-6 py-4 bg-slate-800 text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-wide">
              <div className="col-span-2">Component</div>
              <div className="text-center">Per Installer/Mo</div>
              <div className="text-center hidden md:block">Per Installer · 3 Mo</div>
              <div className="text-center">Both · Total</div>
            </div>
            {costModel.map((item, index) => {
              const Icon = item.icon
              return (
                <div 
                  key={index} 
                  className={`grid grid-cols-5 gap-2 md:gap-4 px-4 md:px-6 py-4 border-t border-slate-800 transition-all hover:bg-white/5 ${item.highlight ? 'bg-[#F5921E]/10' : ''} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="col-span-2 flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.highlight ? 'bg-[#F5921E]/30' : 'bg-white/10'}`}>
                      <Icon className={`w-4 h-4 ${item.highlight ? 'text-[#F5921E]' : 'text-slate-400'}`} />
                    </div>
                    <div>
                      <span className="text-white font-semibold text-sm">{item.component}</span>
                      {item.note && <span className="text-slate-500 text-xs block">{item.note}</span>}
                    </div>
                  </div>
                  <div className={`text-center text-sm flex items-center justify-center ${item.highlight ? 'text-[#F5921E] font-bold' : 'text-white'}`}>{item.perMonth}</div>
                  <div className={`text-center text-sm hidden md:flex items-center justify-center ${item.highlight ? 'text-[#F5921E] font-bold' : 'text-white'}`}>{item.per3Months}</div>
                  <div className={`text-center text-xs md:text-sm flex items-center justify-center ${item.highlight ? 'text-[#F5921E] font-bold' : 'text-slate-300'}`}>{item.bothTotal}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* The two installers */}
        <div className={`mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Users className="w-5 h-5 text-[#0066B3]" />
            The Two Installers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {installers.map((installer, index) => (
              <div 
                key={installer.id}
                className={`group bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black group-hover:scale-110 transition-transform" style={{ backgroundColor: installer.tagColor }}>
                      {installer.id}
                    </div>
                    <div>
                      <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: `${installer.tagColor}20`, color: installer.tagColor }}>
                        {installer.tag}
                      </span>
                    </div>
                  </div>
                  {/* Logo */}
                  <div className="h-10 flex items-center">
                    <Image
                      src={installer.logo}
                      alt={installer.name}
                      width={100}
                      height={40}
                      className="h-8 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{installer.name}</h4>
                <p className="text-sm text-slate-600 mb-4">{installer.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: installer.tagColor }} />
                    <p className="text-sm text-slate-600"><span className="font-semibold">Readiness:</span> {installer.readiness}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: installer.tagColor }} />
                    <p className="text-sm text-slate-600"><span className="font-semibold">Geography:</span> {installer.geography}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-200">
                  <p className="text-sm font-semibold flex items-center gap-2" style={{ color: installer.tagColor }}>
                    <Sparkles className="w-4 h-4" />
                    {installer.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results projection */}
        <div className={`bg-gradient-to-r from-[#F5921E] to-[#e07d0a] rounded-xl md:rounded-2xl p-6 md:p-8 text-white transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold">What Each Installer Produces in the 3 Months</h3>
          </div>
          <p className="text-white/90 leading-relaxed mb-4">
            At our actual blended £50-£75 per UK homeowner solar lead (the benchmark across our managed accounts), £5,000/m of effective spend per installer = <span className="font-bold text-white">~70-100 leads per installer per month</span> = <span className="font-bold text-white">~210-300 leads per installer</span> across the 3-month sponsored window.
          </p>
          <div className="bg-white/10 rounded-lg p-4 border border-white/20">
            <p className="text-lg font-semibold mb-2">
              Across both installers: ~420-600 UK homeowner leads, all branded SOLARWATT.
            </p>
            <p className="text-sm text-white/80">
              The installers convert those leads into installs at their own conversion rates — typically 1-in-5 lead-to-sale for solar. So <span className="font-bold text-white">~84-120 UK SOLARWATT installs</span> across the 3 months from this track alone, with brand visibility into ~420-600 UK households who didn&apos;t convert but now know SOLARWATT exists.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
