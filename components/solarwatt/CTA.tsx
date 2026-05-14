'use client'

import { useEffect, useRef, useState } from 'react'
import { Zap } from 'lucide-react'

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
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pointer-events-none" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-2 leading-[1.1]">
            BMW-backed technology.
          </h2>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-2 leading-[1.1]">
            German engineering heritage.
          </h2>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#0066B3] mb-8 leading-[1.1]">
            UK installers ready by December.
          </h2>
        </div>

        <div className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-xl mx-auto">
            Ready to dominate the UK installer market? Let&apos;s start the 6-month sprint.
          </p>
          
          <div className="space-y-3">
            <p className="text-lg md:text-xl font-semibold text-slate-900">
              Keilan James-Devereux
            </p>
            <p className="text-slate-500">
              Co-Founder & CRO, ETOTO Media
            </p>
            <p className="text-xs text-slate-400">
              Winner BDM of the Year, 2026 SEEE Awards
            </p>
            <a 
              href="mailto:keilan.jd@etotomedia.com"
              className="inline-block text-[#0066B3] hover:text-[#004d8a] font-medium text-lg transition-colors duration-300 hover:underline"
            >
              keilan.jd@etotomedia.com
            </a>
          </div>
        </div>

        {/* Quote */}
        <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center">
            <p className="text-slate-600 text-lg leading-relaxed italic">
              &ldquo;We built this proposal because we believe SOLARWATT is the right brand at the right time. 
              BMW battery technology, 30 years of German solar engineering, and a UK market wide open for a premium alternative to Tesla. 
              This is the window. Let&apos;s take it.&rdquo;
            </p>
            <p className="text-[#0066B3] font-semibold mt-4">
              — The ETOTO Team
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
