'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCircle, PoundSterling, Calendar, Target, Rocket, ArrowRight, Key, Users, CreditCard, BarChart3, Phone, Database } from 'lucide-react'
import { useCountUp } from '@/hooks/use-animate-on-scroll'
import Image from 'next/image'

export default function TheAsk() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredReq, setHoveredReq] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const investment = useCountUp(63, 1500, isVisible)
  const daysToFirstAd = useCountUp(14, 1200, isVisible)
  const installers = useCountUp(40, 1500, isVisible)

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

  const requirements = [
    { icon: CreditCard, title: '£63K commitment', detail: 'Across both tracks over 6 months', color: '#006068' },
    { icon: CheckCircle, title: 'Soft incentive sign-off', detail: 'Training day + display unit approved', color: '#006068' },
    { icon: Users, title: 'Second installer pick', detail: 'Confirm Track B installer #2', color: '#EF4136' },
    { icon: Key, title: 'Platform access', detail: 'Meta + LinkedIn + domain admin', color: '#006068' },
    { icon: Phone, title: 'Named contact', detail: 'For installer onboarding 1:1s', color: '#EF4136' },
    { icon: Database, title: 'CRM access', detail: 'For SOLARWATT team visibility', color: '#10B981' },
  ]

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-4 md:px-6 bg-slate-900 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#006068]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#EF4136]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#EF4136] text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Rocket className="w-4 h-4" />
            Approve the Sprint
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-3">
            First Ad Live in{' '}
            <span className="text-[#006068]">{daysToFirstAd} days</span>
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-lg mx-auto">
            40 installers in 6 months isn&apos;t optimistic — it&apos;s the floor. We under-promise and over-deliver.
          </p>
        </div>

        {/* Key metrics */}
        <div className={`grid grid-cols-3 gap-3 md:gap-4 mb-12 md:mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-[#006068] rounded-2xl p-5 md:p-6 text-center">
            <PoundSterling className="w-8 h-8 text-white/50 mx-auto mb-2" />
            <p className="text-4xl md:text-5xl font-black text-white">£{investment}K</p>
            <p className="text-xs md:text-sm text-white/70 font-medium mt-1">
              <Image src="/logos/solarwatt-logo.png" alt="SOLARWATT" width={60} height={14} className="h-3 md:h-4 inline brightness-0 invert" style={{ width: 'auto' }} /> investment
            </p>
          </div>
          <div className="bg-[#EF4136] rounded-2xl p-5 md:p-6 text-center">
            <Calendar className="w-8 h-8 text-white/50 mx-auto mb-2" />
            <p className="text-4xl md:text-5xl font-black text-white">{daysToFirstAd}</p>
            <p className="text-xs md:text-sm text-white/70 font-medium mt-1">Days to first ad</p>
          </div>
          <div className="bg-slate-800 border border-[#10B981]/30 rounded-2xl p-5 md:p-6 text-center">
            <Target className="w-8 h-8 text-[#10B981]/70 mx-auto mb-2" />
            <p className="text-4xl md:text-5xl font-black text-[#10B981]">{installers}</p>
            <p className="text-xs md:text-sm text-slate-400 font-medium mt-1">
              <Image src="/logos/solarwatt-logo.png" alt="SOLARWATT" width={60} height={14} className="h-3 md:h-4 inline brightness-0 invert" style={{ width: 'auto' }} /> installers
            </p>
          </div>
        </div>

        {/* Requirements - interactive grid */}
        <div className={`mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-center text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-500 mb-6">
            What we need to start the clock
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {requirements.map((req, i) => {
              const Icon = req.icon
              const isHovered = hoveredReq === i
              return (
                <div
                  key={i}
                  className={`relative bg-white/5 border rounded-2xl p-4 md:p-5 cursor-pointer transition-all duration-300 ${isHovered ? 'bg-white/10 border-white/30 scale-[1.02]' : 'border-white/10 hover:border-white/20'}`}
                  onMouseEnter={() => setHoveredReq(i)}
                  onMouseLeave={() => setHoveredReq(null)}
                  onClick={() => setHoveredReq(isHovered ? null : i)}
                >
                  <div className="flex items-start gap-3">
                    <div 
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform ${isHovered ? 'scale-110' : ''}`}
                      style={{ backgroundColor: `${req.color}20` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: req.color }} />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm md:text-base">{req.title}</p>
                      <p className={`text-xs text-slate-400 mt-0.5 transition-all duration-300 ${isHovered ? 'opacity-100 max-h-20' : 'opacity-60 max-h-0 md:max-h-20 overflow-hidden'}`}>
                        {req.detail}
                      </p>
                    </div>
                  </div>
                  {isHovered && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#10B981] animate-pulse" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 bg-[#10B981] text-white px-8 py-4 rounded-full font-bold text-base md:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer group">
            <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />
            Ready to Start the Sprint
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="text-slate-500 text-xs md:text-sm mt-4">
            We&apos;ve done this before. 40 is conservative.
          </p>
        </div>
      </div>
    </section>
  )
}
