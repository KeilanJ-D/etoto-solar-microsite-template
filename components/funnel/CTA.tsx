'use client'

import { useEffect, useRef, useState } from 'react'

export default function CTA() {
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-40 px-4 md:px-6 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 pointer-events-none" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-2 leading-[1.1]">
            You&apos;ve got the expertise.
          </h2>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-2 leading-[1.1]">
            You&apos;ve got the reputation.
          </h2>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#0D9488] mb-8 leading-[1.1]">
            Let&apos;s make Google see it.
          </h2>
        </div>

        <div className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-xl mx-auto">
            Ready to dominate Leicester&apos;s solar market? Let&apos;s talk about next steps.
          </p>
          
          <div className="space-y-3">
            <p className="text-lg md:text-xl font-semibold text-slate-900">
              Keilan James-Devereux
            </p>
            <p className="text-slate-500">
              Co-Founder & CRO, ETOTO Media
            </p>
            <a 
              href="mailto:keilan.jd@etotomedia.com"
              className="inline-block text-[#0D9488] hover:text-[#0B7A70] font-medium text-lg transition-colors duration-300 hover:underline"
            >
              keilan.jd@etotomedia.com
            </a>
          </div>
        </div>

        {/* Quote */}
        <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center">
            <p className="text-slate-600 text-lg leading-relaxed italic">
              &ldquo;We built this page because we believe in what Energy Concerns is doing. 
              You&apos;re not just another solar company — you&apos;re the local experts who 
              genuinely care about getting it right for homeowners.&rdquo;
            </p>
            <p className="text-[#0D9488] font-semibold mt-4">
              — The ETOTO Team
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
