'use client'

import { useEffect, useRef, useState } from 'react'
import { FileText, TrendingDown, Zap, XCircle } from 'lucide-react'

export default function BlogProblem() {
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
    <section ref={sectionRef} className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block bg-[#FEE2E2] text-[#DC2626] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Content Strategy
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#1A1A2E] mb-4">
            Your Blog Doesn&apos;t Exist.
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            It&apos;s not dead — it was never born.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Current state */}
          <div className={`bg-[#FEF2F2] border border-[#FECACA] rounded-2xl p-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#FEE2E2] flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-[#DC2626]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A2E]">Current State</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-[#DC2626] mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1A1A2E]">You have 0 blog posts</p>
                  <p className="text-sm text-[#64748B]">Not even one. Nothing for Google to index.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-[#DC2626] mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1A1A2E]">Zero topical authority</p>
                  <p className="text-sm text-[#64748B]">No content clusters, no keyword presence, no expertise signals.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-[#DC2626] mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1A1A2E]">No SEO for 12+ months</p>
                  <p className="text-sm text-[#64748B]">Google has nothing to rank. Your competitors are pulling ahead.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Competitor comparison */}
          <div className={`bg-slate-50 border border-slate-200 rounded-2xl p-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center">
                <FileText className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A2E]">Your Competitors</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-100">
                <span className="font-medium text-slate-700">Geo Green Power</span>
                <span className="text-sm font-semibold text-[var(--ec-accent)]">20+ blog posts, 100+ total pages</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-100">
                <span className="font-medium text-slate-700">Spectrum Energy</span>
                <span className="text-sm font-semibold text-[var(--ec-accent)]">23 town pages + articles</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-100">
                <span className="font-medium text-slate-700">Solar & Battery Company</span>
                <span className="text-sm font-semibold text-[var(--ec-accent)]">&quot;Hundreds of articles&quot;</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                <span className="font-medium text-slate-700">You</span>
                <span className="text-sm font-bold text-[#DC2626]">0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Solution teaser */}
        <div className={`bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl p-8 mb-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#DCFCE7] flex items-center justify-center">
              <Zap className="w-5 h-5 text-[#16A34A]" />
            </div>
            <h3 className="text-lg font-bold text-[#1A1A2E]">The Good News</h3>
          </div>
          <p className="text-[#166534]">
            We&apos;ve already written <span className="font-bold">10 SEO-optimised articles</span> for you — 6,498 words of high-quality, keyword-targeted content ready to publish on your blog today. Scroll down to see them.
          </p>
        </div>

        {/* Bottom message */}
        <div className={`bg-gradient-to-r from-[#1A1A2E] to-[#2D2D44] rounded-2xl p-8 text-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-white/90 text-lg md:text-xl font-medium">
            Every competitor in Leicester is publishing content. 
            <span className="text-[var(--ec-accent)] font-bold"> Your website has literally nothing for Google to index</span> beyond a handful of service pages.
          </p>
        </div>
      </div>
    </section>
  )
}
