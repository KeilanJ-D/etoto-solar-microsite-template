'use client'

import { useEffect, useRef, useState } from 'react'
import { Award, Banknote, Building2, Eye, TrendingUp, Zap } from 'lucide-react'
import { useCountUp } from '@/hooks/use-animate-on-scroll'
import Image from 'next/image'

const namedAccounts = [
  { name: 'UPS Solar', desc: 'National installer · highest spend in dataset' },
  { name: 'Infinity Renewables Group', desc: 'National · scaled to £40K/m' },
  { name: 'MCJ Energy Solutions', desc: 'Phil Sign · Hinen-already-installing' },
  { name: 'Halo Renewables', desc: 'Matt · 87 systems last month' },
  { name: 'EVLM Renewables', desc: 'Father-son · 4/m → 5/wk' },
  { name: 'ETOTO Media', desc: 'Our own account' },
  { name: 'The Solar Bureau', desc: 'Regional SME' },
  { name: 'Solar Solutions Oxford', desc: 'Regional SME' },
  { name: 'YEERS Advertising', desc: '1-person installer' },
]

export default function TrackRecord() {
  const [isVisible, setIsVisible] = useState(false)
  const [awardsVisible, setAwardsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const awardsRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !awardsVisible) {
          setAwardsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (awardsRef.current) observer.observe(awardsRef.current)
    return () => observer.disconnect()
  }, [awardsVisible])

  const adSpend = useCountUp(358, 1600, isVisible)
  const impressions = useCountUp(23, 1400, isVisible)
  const leads = useCountUp(11020, 1500, isVisible)
  const thruPlays = useCountUp(214817, 1700, isVisible)

  const stats = [
    { value: adSpend, prefix: '£', suffix: 'K', label: 'Total Ad Spend', sub: 'Across 9 accounts · last 36 months', icon: Banknote, color: '#ED1C24' },
    { value: impressions, suffix: '.9M', label: 'Impressions Served', sub: 'UK installers + homeowners', icon: Eye, color: '#1A1A1A' },
    { value: leads.toLocaleString(), label: 'Lead-Gen Leads', sub: 'Meta lead form submits', icon: Building2, color: '#ED1C24' },
    { value: thruPlays.toLocaleString(), label: 'Video ThruPlays', sub: 'Warm video-engaged audiences', icon: TrendingUp, color: '#10B981' },
  ]

  return (
    <section
      id="track-record"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 md:px-6 bg-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#ED1C24]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-slate-100 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#ED1C24]/10 text-[#ED1C24] text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Award className="w-4 h-4" />
            Track Record · The Engine Behind the Model
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Receipts.
            <span className="block text-[#ED1C24]">Named and verifiable.</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every benchmark in this proposal is sourced from Meta Ads Manager exports across nine of the installer ad accounts ETOTO actively manages. Names below — Hinen welcome to verify directly with any of them.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className={`grid lg:grid-cols-2 gap-8 md:gap-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left - Stats */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={i}
                  className="group bg-white border border-slate-100 rounded-2xl p-4 md:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${stat.color}10` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: stat.color }} />
                  </div>
                  <p className="text-2xl md:text-3xl font-black tabular-nums" style={{ color: stat.color }}>
                    {stat.prefix}{typeof stat.value === 'number' ? stat.value : stat.value}{stat.suffix}
                  </p>
                  <p className="text-xs md:text-sm font-bold text-slate-900 mt-1">{stat.label}</p>
                  <p className="text-[10px] md:text-xs text-slate-500 mt-0.5">{stat.sub}</p>
                </div>
              )
            })}
          </div>

          {/* Right - Named Accounts */}
          <div className="bg-slate-50 rounded-2xl p-5 md:p-8">
            <h3 className="text-sm md:text-base font-bold text-slate-900 mb-4">The 9 named accounts</h3>
            <div className="space-y-3">
              {namedAccounts.map((account, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="w-2 h-2 rounded-full bg-[#ED1C24] mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{account.name}</p>
                    <p className="text-xs text-slate-500">{account.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 italic mt-6">
              Reference calls to MCJ, Halo or EVLM available on request.
            </p>
          </div>
        </div>

        {/* Awards Section */}
        <div ref={awardsRef} className="relative mt-20 md:mt-28">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 via-amber-50/30 to-amber-100/50 rounded-3xl blur-3xl -z-10 scale-110" />
          
          <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${awardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs md:text-sm font-bold px-5 py-2.5 rounded-full mb-6 shadow-lg shadow-amber-500/30">
              The Only Agency in Our Space to Be Recognised
            </div>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4">
              2026 Industry Recognition
            </h3>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              Officially recognised by the <span className="font-semibold text-amber-600">South East Energy Efficiency Awards</span> — the first and only marketing agency in UK renewables to receive this honour.
            </p>
          </div>
          
          <div className={`grid lg:grid-cols-2 gap-6 md:gap-8 items-stretch transition-all duration-700 delay-200 ${awardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="group relative bg-gradient-to-br from-amber-50 via-white to-amber-50 border-2 border-amber-300 rounded-3xl p-6 md:p-8 hover:shadow-2xl hover:shadow-amber-200/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="flex items-center gap-6">
                  <div className="shrink-0 w-28 h-28 md:w-36 md:h-36 relative group-hover:scale-105 transition-transform">
                    <Image
                      src="/awards/businessdev-winner.png"
                      alt="Business Development Manager / Director - Winner - South East Energy Efficiency Awards 2026"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-black text-slate-900 leading-tight mb-2">
                      Business Development Director of the Year
                    </h4>
                    <p className="text-sm md:text-base text-slate-700 font-semibold">
                      Keilan James-Devereux, Co-Founder
                    </p>
                    <p className="text-xs text-amber-600 font-semibold mt-2">South East Energy Efficiency Awards 2026</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative bg-gradient-to-br from-slate-50 via-white to-amber-50/50 border-2 border-amber-200 rounded-3xl p-6 md:p-8 hover:shadow-2xl hover:shadow-amber-200/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="flex items-center gap-6">
                  <div className="shrink-0 w-28 h-28 md:w-36 md:h-36 relative group-hover:scale-105 transition-transform">
                    <Image
                      src="/awards/energycons-hc.jpg"
                      alt="Energy Consultant / Consultancy - Highly Commended - South East Energy Efficiency Awards 2026"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-black text-slate-900 leading-tight mb-2">
                      Energy Consultancy of the Year
                    </h4>
                    <div className="flex items-center gap-2 mb-2">
                      <Image
                        src="/logos/etoto-logo.png"
                        alt="ETOTO Media"
                        width={24}
                        height={24}
                        className="w-5 h-5 md:w-6 md:h-6"
                      />
                    </div>
                    <p className="text-xs text-amber-600 font-semibold mt-2">South East Energy Efficiency Awards 2026</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`relative rounded-3xl overflow-hidden group min-h-[350px] md:min-h-[420px] shadow-2xl shadow-amber-200/30 transition-all duration-700 delay-300 ${awardsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <Image
                src="/awards/etoto-eea-awards.jpeg"
                alt="ETOTO Media - South East Energy Efficiency Awards 2026"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src="/logos/etoto-logo.png"
                    alt="ETOTO"
                    width={36}
                    height={36}
                    className="w-8 h-8 md:w-9 md:h-9"
                  />
                </div>
                <p className="text-amber-300 text-xs font-semibold">Award-Winning Marketing Agency</p>
                <p className="text-white/80 text-sm md:text-base font-medium mt-1">
                  South East Energy Efficiency Awards 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
