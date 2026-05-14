'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCircle, PoundSterling, Calendar, Target, Users, Rocket, Key, Briefcase, Building2, Monitor, UserCheck, Database } from 'lucide-react'
import { useCountUp } from '@/hooks/use-animate-on-scroll'
import Image from 'next/image'

export default function TheAsk() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const investment = useCountUp(63, 1500, isVisible)
  const daysToFirstAd = useCountUp(14, 1200, isVisible)
  const installers = useCountUp(40, 1500, isVisible)
  const leads = useCountUp(5, 1200, isVisible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const metrics = [
    { icon: PoundSterling, prefix: '£', value: investment, suffix: 'K', label: 'SOLARWATT Cash', sublabel: 'all-in across 6 months · £1,575 per onboarded installer', color: '#0066B3' },
    { icon: Calendar, value: daysToFirstAd, suffix: 'd', label: 'Time to First Ad Live', sublabel: 'from signed approval', color: '#F5921E' },
    { icon: Target, value: installers, suffix: '', label: 'Sprint Outcome', sublabel: 'Onboarded installer partners by 31 Dec 2026', color: '#10B981' },
    { icon: Users, prefix: '~', value: leads, suffix: 'K', label: 'Brand Presence', sublabel: 'UK homeowner leads + impressions across both tracks', color: '#8B5CF6' },
  ]

  const requirements = [
    { icon: Briefcase, text: 'Approval of the £63K SOLARWATT commitment across the two tracks.' },
    { icon: Key, text: 'Sign-off on the soft incentive (Shepperton training day + free showroom display unit) for the first 40 onboarded installers.' },
    { icon: Building2, text: 'Confirmation of SOLARWATT\'s pick for the second External track installer (we name Green Energy Solar as the first).' },
    { icon: Monitor, text: 'Admin partner access to SOLARWATT\'s existing UK Meta Business Manager + LinkedIn Campaign Manager + IG/FB business accounts + solarwatt.co.uk domain (for landing page embed).' },
    { icon: UserCheck, text: 'Confirmation of Neal Goddard or nominated SOLARWATT UK lead as named contact for installer-onboarding 1:1s.' },
    { icon: Database, text: 'Approval of CRM access for Peter, Neal, Paula, William + any other nominated SOLARWATT team members.' },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-28 px-4 md:px-6 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066B3]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F5921E]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-white/10 rounded-full animate-float hidden md:block"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${5 + i}s`,
          }}
        />
      ))}

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header with logos */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image
              src="/logos/solarwatt-logo.png"
              alt="SOLARWATT"
              width={120}
              height={28}
              className="h-6 md:h-7 w-auto brightness-0 invert opacity-80"
            />
          </div>
          <span className="inline-flex items-center gap-2 bg-[#0066B3] text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Rocket className="w-4 h-4" />
            The Ask + What We Need From SOLARWATT
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Approve the Sprint. <span className="text-[#0066B3]">First Ad Live in 14 Days.</span>
          </h2>
        </div>

        {/* Key metrics */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 hover:-translate-y-2 transition-all duration-300"
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 transition-transform group-hover:scale-110 group-hover:rotate-6" style={{ backgroundColor: `${metric.color}20` }}>
                  <Icon className="w-5 h-5" style={{ color: metric.color }} />
                </div>
                <p className="text-2xl md:text-3xl font-black text-white">
                  {metric.prefix}{metric.value}{metric.suffix}
                </p>
                <p className="text-sm font-semibold text-white mt-1">{metric.label}</p>
                <p className="text-xs text-slate-400 mt-1">{metric.sublabel}</p>
              </div>
            )
          })}
        </div>

        {/* Requirements */}
        <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-6 md:p-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-xl font-bold text-white mb-6">What We Need From SOLARWATT to Start the Clock</h3>
          <div className="space-y-4">
            {requirements.map((req, index) => {
              const Icon = req.icon
              return (
                <div 
                  key={index}
                  className={`flex items-start gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${500 + index * 80}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0066B3]/20 border border-[#0066B3]/30 text-[#0066B3] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-start gap-3 pt-2">
                    <span className="w-6 h-6 rounded-full bg-[#0066B3] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed">{req.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Start CTA */}
        <div className={`mt-10 text-center transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 bg-[#10B981] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer">
            <CheckCircle className="w-6 h-6" />
            Ready to Start the 6-Month Sprint
          </div>
        </div>
      </div>
    </section>
  )
}
