'use client'

import { useEffect, useRef, useState } from 'react'
import { MessageSquare, ArrowRight } from 'lucide-react'

const feedbackItems = [
  {
    youSaid: 'Promotional structure feels overly complex',
    weDid: 'One offer · free 8.9kWh All-in-One to first 100 installers · 30 days only',
    where: 'The Lever (sections 7-9)',
  },
  {
    youSaid: 'Push reach toward 10 million',
    weDid: 'Re-scoped to 10M+ UK reach · paid + KOLs + Hinen-owned + email',
    where: 'Reach Architecture (section 10)',
  },
  {
    youSaid: 'Five voices is too few',
    weDid: '6 named voices (Keilan added as 6th) + 14 ETOTO-sourced KOLs',
    where: 'Voices + KOLs (sections 11-12)',
  },
  {
    youSaid: 'Simplify the rebate mechanic',
    weDid: 'The Hinen Points System — Sigenergy-style · lifetime engine',
    where: 'Points System (sections 13-14)',
  },
  {
    youSaid: 'Confirm 8.9 vs 14.4 allocation',
    weDid: '60/40 split · 8.9 carries the lever · 14.4 leads premium AOV',
    where: 'Product Split (section 15)',
  },
  {
    youSaid: 'More amplification on high-quality content',
    weDid: 'Engagement amplification 3.2× uplift to £24K of paid Meta',
    where: 'Commercials (section 20)',
  },
]

export default function WhatWeHeard() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
    <section
      id="what-we-heard"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 md:px-6 bg-white overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#ED1C24]/10 text-[#ED1C24] text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <MessageSquare className="w-4 h-4" />
            Nikita&apos;s Marketing Review · 13 May
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Six things you said.
            <span className="block text-[#ED1C24]">Six things we changed.</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Nikita&apos;s email of 13 May was the right kind of feedback — sharp, specific, board-ready. v4 takes every piece of it and bakes it into a simpler, sharper plan.
          </p>
        </div>

        {/* Feedback Grid */}
        <div className={`grid gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {feedbackItems.map((item, i) => (
            <div 
              key={i}
              className="group bg-white border border-slate-100 rounded-xl md:rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="grid md:grid-cols-[1fr,2fr,1fr] gap-4 md:gap-0">
                {/* You Said */}
                <div className="relative p-4 md:p-6 border-l-4 border-[#ED1C24]">
                  <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wide font-semibold mb-2">You Said</p>
                  <p className="text-sm md:text-base text-slate-700 font-medium">{item.youSaid}</p>
                </div>
                
                {/* We Did */}
                <div className="relative p-4 md:p-6 bg-slate-50 flex items-center">
                  <ArrowRight className="hidden md:block w-5 h-5 text-[#ED1C24] absolute -left-2.5 bg-white rounded-full" />
                  <div>
                    <p className="text-[10px] md:text-xs text-[#ED1C24] uppercase tracking-wide font-semibold mb-2">We Did in v4</p>
                    <p className="text-sm md:text-base text-slate-900 font-semibold">{item.weDid}</p>
                  </div>
                </div>
                
                {/* Where */}
                <div className="p-4 md:p-6 flex items-center justify-start md:justify-end">
                  <div className="text-right">
                    <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wide font-semibold mb-2">Where in Deck</p>
                    <p className="text-xs md:text-sm text-slate-500">{item.where}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className={`mt-12 md:mt-16 bg-slate-900 rounded-2xl p-6 md:p-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-[#ED1C24] font-bold text-sm md:text-base mb-2">The Simple Read</h3>
          <p className="text-white/90 text-sm md:text-base leading-relaxed">
            v4 is half the moving parts of v3 with the same outcome — 300 onboarded installers — plus a permanent points loyalty engine that keeps the network compounding long after Day 90.
          </p>
        </div>
      </div>
    </section>
  )
}
