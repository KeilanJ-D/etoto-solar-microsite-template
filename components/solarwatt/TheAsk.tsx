'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCircle, PoundSterling, Calendar, Target, Users, Rocket } from 'lucide-react'
import { useCountUp } from '@/hooks/use-animate-on-scroll'

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
    'Approval of the £63K SOLARWATT commitment across the two tracks.',
    'Sign-off on the soft incentive (Shepperton training day + free showroom display unit) for the first 40 onboarded installers.',
    'Confirmation of SOLARWATT\'s pick for the second External track installer (we name Green Energy Solar as the first).',
    'Admin partner access to SOLARWATT\'s existing UK Meta Business Manager + LinkedIn Campaign Manager + IG/FB business accounts + solarwatt.co.uk domain (for landing page embed).',
    'Confirmation of Neal Goddard or nominated SOLARWATT UK lead as named contact for installer-onboarding 1:1s.',
    'Approval of CRM access for Peter, Neal, Paula, William + any other nominated SOLARWATT team members.',
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-28 px-4 md:px-6 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066B3] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F5921E] rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center"
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <Icon className="w-6 h-6 mx-auto mb-3" style={{ color: metric.color }} />
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
            {requirements.map((req, index) => (
              <div 
                key={index}
                className="flex items-start gap-4"
                style={{ transitionDelay: `${500 + index * 50}ms` }}
              >
                <div className="w-8 h-8 rounded-full bg-[#0066B3] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed pt-1">{req}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Start CTA */}
        <div className={`mt-10 text-center transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 bg-[#10B981] text-white px-8 py-4 rounded-full font-bold text-lg">
            <CheckCircle className="w-6 h-6" />
            Ready to Start the 6-Month Sprint
          </div>
        </div>
      </div>
    </section>
  )
}
