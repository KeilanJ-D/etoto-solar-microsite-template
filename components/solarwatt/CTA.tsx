'use client'

import { useEffect, useRef, useState } from 'react'
import { Zap, Mail, Award, ArrowRight } from 'lucide-react'
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-40 px-4 md:px-6 bg-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#0066B3]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#F5921E]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-[#0066B3]/10 rounded-full animate-float hidden md:block"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${4 + i}s`,
          }}
        />
      ))}
      
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Dual branding */}
        <div className={`flex items-center justify-center gap-4 md:gap-6 mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center">
              <span className="text-white font-black text-lg">E</span>
            </div>
            <span className="font-black text-slate-900 text-xl tracking-tight">ETOTO</span>
          </div>
          <span className="text-slate-300 text-2xl font-light">×</span>
          <Image
            src="/logos/solarwatt-logo.png"
            alt="SOLARWATT"
            width={140}
            height={32}
            className="h-8 w-auto"
          />
        </div>

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
          
          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#0066B3]/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#0066B3]" />
              </div>
            </div>
            <p className="text-lg md:text-xl font-semibold text-slate-900">
              Keilan James-Devereux
            </p>
            <p className="text-slate-500">
              Co-Founder & CRO, ETOTO Media
            </p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Award className="w-4 h-4 text-[#F5921E]" />
              <p className="text-xs text-slate-400">
                Winner BDM of the Year, 2026 SEEE Awards
              </p>
            </div>
            <a 
              href="mailto:keilan.jd@etotomedia.com"
              className="inline-flex items-center gap-2 mt-4 text-[#0066B3] hover:text-[#004d8a] font-bold text-lg transition-colors duration-300 group"
            >
              keilan.jd@etotomedia.com
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Quote */}
        <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-slate-900 rounded-2xl p-8 text-center relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#0066B3]/20 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-[#F5921E]" />
                <Image
                  src="/logos/bmw-solarwatt-color.png"
                  alt="BMW"
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain brightness-0 invert opacity-60"
                />
              </div>
              <p className="text-white/90 text-lg leading-relaxed italic">
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
      </div>
    </section>
  )
}
