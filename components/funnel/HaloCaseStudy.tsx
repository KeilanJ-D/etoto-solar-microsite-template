'use client'

import { useEffect, useRef, useState } from 'react'
import { TrendingUp, Users, PoundSterling, Calendar, Globe, CheckCircle, ExternalLink } from 'lucide-react'
import { useCountUp } from '@/hooks/use-animate-on-scroll'

export default function HaloCaseStudy() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const adSpend = useCountUp(54508, 2000, isVisible)
  const totalLeads = useCountUp(1744, 2000, isVisible)
  const revenue = useCountUp(2.68, 2000, isVisible)

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

  return (
    <section ref={sectionRef} className="py-16 md:py-28 px-4 md:px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-10 md:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[var(--ec-accent)]/10 text-[var(--ec-accent)] text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <TrendingUp className="w-4 h-4" />
            Live Case Study
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            What Happens When We Build a Website That Converts
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
            Halo Renewables. One of our clients. Their website went live exactly one year ago today. Here&apos;s what happened.
          </p>
        </div>

        {/* Hero stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white border border-slate-100 rounded-xl md:rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <PoundSterling className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <p className="text-3xl md:text-4xl font-black text-slate-900">£{adSpend.toLocaleString()}</p>
            <p className="text-sm text-slate-500 mt-1">Total ad spend since Oct 2024</p>
          </div>
          <div className="bg-white border border-slate-100 rounded-xl md:rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <Users className="w-8 h-8 text-[var(--ec-accent)] mx-auto mb-3" />
            <p className="text-3xl md:text-4xl font-black text-[var(--ec-accent)]">{totalLeads.toLocaleString()}</p>
            <p className="text-sm text-slate-500 mt-1">Total leads (1,499 FB + 245 web)</p>
          </div>
          <div className="bg-white border border-slate-100 rounded-xl md:rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <p className="text-3xl md:text-4xl font-black text-green-600">£{revenue.toFixed(2)}M</p>
            <p className="text-sm text-slate-500 mt-1">Tracked revenue (218 deals)</p>
          </div>
        </div>

        {/* The website impact */}
        <div className={`bg-slate-900 rounded-xl md:rounded-2xl p-6 md:p-8 mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-6 h-6 text-[var(--ec-accent)]" />
            <h3 className="text-xl font-bold text-white">The Website Impact</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-slate-800 rounded-xl p-5">
              <p className="text-sm text-slate-400 mb-2">Last 30 days</p>
              <div className="flex items-baseline gap-4">
                <div>
                  <p className="text-2xl font-black text-white">77</p>
                  <p className="text-xs text-slate-500">Facebook leads</p>
                </div>
                <span className="text-slate-600">+</span>
                <div>
                  <p className="text-2xl font-black text-[var(--ec-accent)]">31</p>
                  <p className="text-xs text-slate-500">Website leads</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 rounded-xl p-5">
              <p className="text-sm text-slate-400 mb-2">Since website launch (25 Mar 2025)</p>
              <p className="text-3xl font-black text-[var(--ec-accent)]">245</p>
              <p className="text-xs text-slate-500">Passive website leads — zero additional spend</p>
            </div>
          </div>

          <div className="bg-[var(--ec-accent)]/20 border border-[var(--ec-accent)]/30 rounded-xl p-5">
            <p className="text-white font-semibold mb-2">Website generates an extra 40% lead volume — passively</p>
            <p className="text-slate-300 text-sm">
              No SEO. No Google Ads. Facebook only since October 2024. The website just captures the demand we create with paid ads.
              <span className="text-[var(--ec-accent)] font-semibold"> That&apos;s ~20 extra leads per month for free.</span>
            </p>
          </div>
        </div>

        {/* How it works */}
        <div className={`bg-white border border-slate-100 rounded-xl md:rounded-2xl p-6 md:p-8 mb-10 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-lg font-bold text-slate-900 mb-6">How It Works</h3>
          
          <div className="space-y-4">
            {[
              'Someone sees your Facebook ad',
              'They are interested but not ready to convert on Facebook',
              'They Google your company name (due diligence)',
              'They land on your website',
              'They see the same offers, same products, same social proof',
              'They convert there — because the website answered the questions that stopped them converting on Facebook',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--ec-accent)] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <p className="text-slate-600">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded-lg">
            <p className="text-slate-700 text-sm">
              <span className="font-semibold text-red-600">Without a proper website:</span> those people Google you, see a basic site that doesn&apos;t inspire confidence, and leave. 
              <span className="font-semibold"> With our website, they convert. That&apos;s 31 leads last month that would have been lost.</span>
            </p>
          </div>
        </div>

        {/* The punchline */}
        <div className={`bg-gradient-to-r from-[var(--ec-accent)] to-[#0B7B70] rounded-xl md:rounded-2xl p-6 md:p-8 text-white text-center mb-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Calendar className="w-10 h-10 mx-auto mb-4 opacity-80" />
          <p className="text-xl md:text-2xl font-bold mb-2">
            We built Matt&apos;s website. On this day one year ago, it went live.
          </p>
          <p className="text-white/80 max-w-2xl mx-auto">
            Since then, it has generated <span className="font-bold text-white">245 leads passively — 20 extra leads per month</span> — without spending a single extra pound. That&apos;s what a website built for conversion does. It works 24/7 as a second conversion point for every pound you spend on Facebook.
          </p>
        </div>

        {/* Portfolio references */}
        <div className={`transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-lg font-bold text-slate-900 text-center mb-6">Portfolio Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://halo-renewables.co.uk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white border border-slate-100 rounded-xl p-5 hover:shadow-lg hover:border-[var(--ec-accent)]/30 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-slate-900">halo-renewables.co.uk</span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[var(--ec-accent)] transition-colors" />
              </div>
              <p className="text-sm text-slate-500 mb-2">Simple, stripped back, Sigenergy-focused.</p>
              <p className="text-xs text-[var(--ec-accent)] font-medium">31 web leads/month with zero SEO or Google Ads</p>
            </a>
            <a 
              href="https://foreuk.co.uk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white border border-slate-100 rounded-xl p-5 hover:shadow-lg hover:border-[var(--ec-accent)]/30 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-slate-900">foreuk.co.uk</span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[var(--ec-accent)] transition-colors" />
              </div>
              <p className="text-sm text-slate-500 mb-2">Feature-rich, working EV shop, product pages, case studies, offers.</p>
              <p className="text-xs text-[var(--ec-accent)] font-medium">The full build example</p>
            </a>
          </div>
          <p className="text-center text-sm text-slate-500 mt-4">
            <span className="font-semibold">Todd</span> — your site can look like either of these, plus the chameleon brand identity you&apos;re building. That&apos;s what Option B delivers.
          </p>
        </div>
      </div>
    </section>
  )
}
