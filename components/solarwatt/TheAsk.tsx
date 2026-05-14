'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCircle, PoundSterling, Calendar, Target, Users, Rocket, ArrowRight, Sparkles } from 'lucide-react'
import { useCountUp } from '@/hooks/use-animate-on-scroll'
import Image from 'next/image'

export default function TheAsk() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeReq, setActiveReq] = useState(0)
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
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Auto-cycle through requirements
  useEffect(() => {
    if (!isVisible) return
    const interval = setInterval(() => {
      setActiveReq(prev => (prev + 1) % 6)
    }, 3000)
    return () => clearInterval(interval)
  }, [isVisible])

  const requirements = [
    { emoji: '💰', text: '£63K commitment across both tracks' },
    { emoji: '🎓', text: 'Sign-off on soft incentive (training + display unit)' },
    { emoji: '🤝', text: 'Confirm second External track installer pick' },
    { emoji: '🔑', text: 'Admin access to Meta + LinkedIn + domain' },
    { emoji: '📞', text: 'Named contact for installer onboarding 1:1s' },
    { emoji: '📊', text: 'CRM access for the SOLARWATT team' },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-28 px-4 md:px-6 bg-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#006068]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#EF4136]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/10 rounded-full animate-float hidden md:block"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 4) * 20}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${4 + i}s`,
          }}
        />
      ))}

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#EF4136] text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Rocket className="w-4 h-4" />
            Approve the Sprint
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            First Ad Live in{' '}
            <span className="text-[#006068] inline-flex items-baseline">
              {daysToFirstAd}
              <span className="text-2xl md:text-4xl ml-1">days</span>
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            40 installers in 6 months isn&apos;t optimistic — it&apos;s the floor. We under-promise and over-deliver.
          </p>
        </div>

        {/* Big metrics - visual */}
        <div className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="group relative bg-gradient-to-br from-[#006068] to-[#004d4d] rounded-3xl p-8 text-center overflow-hidden hover:scale-[1.02] transition-transform">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <PoundSterling className="w-10 h-10 text-white/50 mx-auto mb-4" />
              <p className="text-5xl md:text-6xl font-black text-white">£{investment}K</p>
              <p className="text-white/70 font-semibold mt-2">
                <Image src="/logos/solarwatt-logo.png" alt="SOLARWATT" width={80} height={20} className="h-4 w-auto inline brightness-0 invert mx-1" />
                investment
              </p>
              <p className="text-xs text-white/50 mt-1">All-in across 6 months</p>
            </div>
          </div>
          
          <div className="group relative bg-gradient-to-br from-[#EF4136] to-[#c9352c] rounded-3xl p-8 text-center overflow-hidden hover:scale-[1.02] transition-transform">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <Calendar className="w-10 h-10 text-white/50 mx-auto mb-4" />
              <p className="text-5xl md:text-6xl font-black text-white">{daysToFirstAd}</p>
              <p className="text-white/70 font-semibold mt-2">Days to first ad</p>
              <p className="text-xs text-white/50 mt-1">From signed approval</p>
            </div>
          </div>
          
          <div className="group relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-8 text-center overflow-hidden hover:scale-[1.02] transition-transform border border-[#10B981]/30">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#10B981]/20 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <Target className="w-10 h-10 text-[#10B981]/70 mx-auto mb-4" />
              <p className="text-5xl md:text-6xl font-black text-[#10B981]">{installers}</p>
              <p className="text-white/70 font-semibold mt-2">
                <Image src="/logos/solarwatt-logo.png" alt="SOLARWATT" width={80} height={20} className="h-4 w-auto inline brightness-0 invert mx-1" />
                installers
              </p>
              <p className="text-xs text-white/50 mt-1">By 31 Dec 2026</p>
            </div>
          </div>
        </div>

        {/* Requirements - animated carousel style */}
        <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-10 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-[#EF4136]" />
            <h3 className="text-xl font-bold text-white">What we need to start the clock</h3>
          </div>
          
          {/* Progress dots */}
          <div className="flex justify-center gap-2 mb-8">
            {requirements.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveReq(i)}
                className={`w-2 h-2 rounded-full transition-all ${activeReq === i ? 'bg-[#EF4136] w-8' : 'bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>

          {/* Active requirement */}
          <div className="relative h-24 md:h-20">
            {requirements.map((req, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-500 ${activeReq === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
              >
                <span className="text-4xl">{req.emoji}</span>
                <p className="text-lg md:text-xl text-white font-medium">{req.text}</p>
              </div>
            ))}
          </div>

          {/* All requirements list - smaller */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8 pt-8 border-t border-white/10">
            {requirements.map((req, i) => (
              <div
                key={i}
                onClick={() => setActiveReq(i)}
                className={`flex items-center gap-2 p-3 rounded-xl cursor-pointer transition-all ${activeReq === i ? 'bg-white/10 border border-white/20' : 'hover:bg-white/5'}`}
              >
                <span className="text-xl">{req.emoji}</span>
                <span className={`text-xs ${activeReq === i ? 'text-white' : 'text-white/60'}`}>{i + 1}. {req.text.split(' ').slice(0, 3).join(' ')}...</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 bg-[#10B981] text-white px-8 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer group">
            <CheckCircle className="w-6 h-6" />
            Ready to Start the Sprint
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="text-slate-500 text-sm mt-4">
            We&apos;ve done this before. 40 is conservative.
          </p>
        </div>
      </div>
    </section>
  )
}
