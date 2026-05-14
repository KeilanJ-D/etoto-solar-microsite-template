'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, Award, ArrowRight } from 'lucide-react'
import Image from 'next/image'

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
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-40 px-4 md:px-6 bg-white relative overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#006068]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#EF4136]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-3xl mx-auto relative">
        {/* Dual branding with ETOTO logo */}
        <div className={`flex items-center justify-center gap-4 md:gap-6 mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <Image
            src="/logos/etoto-logo-black.png"
            alt="ETOTO Media"
            width={120}
            height={40}
            className="h-8 md:h-10"
            style={{ width: 'auto' }}
          />
          <span className="text-slate-300 text-2xl">×</span>
          <Image
            src="/logos/solarwatt-logo.png"
            alt="SOLARWATT"
            width={140}
            height={32}
            className="h-7 md:h-8"
            style={{ width: 'auto' }}
          />
        </div>

        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-2 leading-tight">
            BMW-backed technology.
          </h2>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-2 leading-tight">
            German engineering heritage.
          </h2>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-[#006068] mb-8 leading-tight">
            UK installers ready by December.
          </h2>
        </div>

        <div className={`text-center mt-12 md:mt-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-base md:text-lg text-slate-600 mb-10 max-w-lg mx-auto">
            Ready to dominate the UK installer market? Let&apos;s start the 6-month sprint.
          </p>
          
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-xl bg-[#006068]/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-[#006068]" />
            </div>
            <p className="text-lg md:text-xl font-bold text-slate-900">Keilan James-Devereux</p>
            <p className="text-slate-500 text-sm">Co-Founder & CRO, ETOTO Media</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Award className="w-4 h-4 text-amber-500" />
              <p className="text-xs text-slate-400">Winner BDM of the Year, 2026 SEEE Awards</p>
            </div>
            <a 
              href="mailto:keilan.jd@etotomedia.com"
              className="inline-flex items-center gap-2 mt-4 text-[#006068] hover:text-[#004d4d] font-bold text-base md:text-lg transition-colors group"
            >
              keilan.jd@etotomedia.com
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Quote */}
        <div className={`mt-12 md:mt-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-slate-900 rounded-2xl p-6 md:p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#006068]/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Image
                  src="/logos/etoto-logo-black.png"
                  alt="ETOTO Media"
                  width={100}
                  height={32}
                  className="h-6 brightness-0 invert"
                  style={{ width: 'auto' }}
                />
                <span className="text-white/30 text-lg">×</span>
                <Image
                  src="/logos/solarwatt-logo.png"
                  alt="SOLARWATT"
                  width={100}
                  height={24}
                  className="h-5 brightness-0 invert opacity-80"
                  style={{ width: 'auto' }}
                />
              </div>
              <p className="text-white/90 text-sm md:text-base leading-relaxed italic">
                &ldquo;We built this proposal because we believe SOLARWATT is the right brand at the right time. BMW battery technology, 30 years of German solar engineering, and a UK market wide open for a premium alternative to Tesla. This is the window. Let&apos;s take it.&rdquo;
              </p>
              <p className="text-[#006068] font-semibold text-sm mt-4">— The ETOTO Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
