'use client'

import { useEffect, useRef, useState } from 'react'
import { Calendar, Building2, Sparkles, Zap, Calculator } from 'lucide-react'

export default function Transition() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const meetingPoints = [
    { icon: Building2, text: 'Your site lost you a commercial job — it looks "too residential." Your new site needs a commercial section.' },
    { icon: Sparkles, text: 'You want to look like Octopus Energy — established, credible, a brand, not just an electrician.' },
    { icon: Zap, text: 'Your chameleon identity is your differentiator — "we adapt solutions to your home." It needs to be everywhere.' },
    { icon: Calculator, text: 'SolaFlow is configured with your pricing — it needs embedding on your site this week.' },
  ]

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--ec-accent)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E8192C] rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Eyebrow */}
        <div className={`flex items-center justify-center gap-2 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Calendar className="w-4 h-4 text-[var(--ec-accent)]" />
          <span className="text-sm font-medium text-slate-400 tracking-wide uppercase">
            25th March 2026 — Website Strategy Call
          </span>
        </div>

        {/* Main headline */}
        <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black text-center mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          We&apos;ve Talked. <span className="text-[var(--ec-accent)]">Now Let&apos;s Build.</span>
        </h2>

        {/* Body text */}
        <p className={`text-lg md:text-xl text-slate-300 text-center max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Everything above was from the audit. On today&apos;s call, we went deeper. Here&apos;s what we heard — and what we&apos;re going to do.
        </p>

        {/* Meeting context cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {meetingPoints.map((point, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-[var(--ec-accent)]/30 transition-all duration-300"
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--ec-accent)]/20 flex items-center justify-center flex-shrink-0">
                <point.icon className="w-5 h-5 text-[var(--ec-accent)]" />
              </div>
              <p className="text-slate-200 text-sm md:text-base leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>

        {/* Chameleon callout */}
        <div className={`mt-10 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center gap-3 bg-[var(--ec-accent)]/20 border border-[var(--ec-accent)]/30 rounded-full px-6 py-3">
            <span className="text-2xl">🦎</span>
            <p className="text-sm text-slate-200">
              <span className="font-semibold text-[var(--ec-accent)]">The chameleon adapts.</span> So does your new website.
            </p>
          </div>
        </div>

        {/* Divider arrow */}
        <div className={`flex justify-center mt-12 transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="w-12 h-12 rounded-full border-2 border-[var(--ec-accent)] flex items-center justify-center animate-bounce">
            <svg className="w-5 h-5 text-[var(--ec-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
