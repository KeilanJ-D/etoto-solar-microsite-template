'use client'

import { useEffect, useRef, useState } from 'react'
import { Play, Sparkles, Trophy, X } from 'lucide-react'
import { type CaseStudy } from '@/lib/etoto-data'

// Only the 4 video testimonials to keep
const FEATURED_STUDIES: CaseStudy[] = [
  {
    id: "jem",
    client: "JEM Energy",
    headline: "Our first solar client — still with us 2+ years later",
    thumbnail: "/case-studies/jem-energy.png",
    youtubeId: "TmYby-YVlOA",
    technologies: ["solar"],
    featured: true,
  },
  {
    id: "ab-renewables",
    client: "AB Renewables",
    headline: "£4,000,000 in sales delivered",
    thumbnail: "/case-studies/ab-renewables.png",
    youtubeId: "ipBXG6yk5KA",
    technologies: ["solar"],
    metrics: [{ label: "Total sales", value: "£4M" }],
  },
  {
    id: "genbatt",
    client: "Genbatt",
    headline: "20+ MWp of battery storage delivered",
    thumbnail: "/case-studies/genbatt.png",
    youtubeId: "PnPr8OfpfFA",
    technologies: ["solar"],
  },
  {
    id: "halo",
    client: "Halo Renewables",
    headline: "67 deals closed in a single month",
    thumbnail: "/case-studies/halo-renewables.png",
    youtubeId: "cIuNH45hxVg",
    technologies: ["solar"],
    metrics: [{ label: "Deals / month", value: "67" }],
    featured: true,
  },
]

export default function CaseStudies() {
  const [isVisible, setIsVisible] = useState(false)
  const [openStudy, setOpenStudy] = useState<CaseStudy | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="etoto-case-studies"
      ref={sectionRef}
      className="relative py-16 md:py-28 px-4 md:px-6 bg-white overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066B3]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F5921E]/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 bg-[#0066B3]/10 text-[#0066B3] text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Trophy className="w-4 h-4" />
            Receipts, not testimonials
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 text-balance">
            The kind of installers we&apos;ll onboard for{' '}
            <span className="text-[#0066B3]">SOLARWATT.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Every installer below is paying ETOTO right now. The 40 SOLARWATT partners we land in this
            sprint will look exactly like these — already serious, already MCS-accredited, already
            scaling.
          </p>
        </div>

        {/* Video testimonials grid - 4 videos only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {FEATURED_STUDIES.map((study, i) => (
            <button
              key={study.id}
              type="button"
              onClick={() => setOpenStudy(study)}
              className={`group text-left bg-white rounded-2xl border border-slate-100 hover:border-[#0066B3]/30 hover:shadow-xl transition-all duration-500 overflow-hidden hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden">
                {study.thumbnail ? (
                  <img
                    src={study.thumbnail}
                    alt={`${study.client} — ${study.headline}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-100 via-blue-50/50 to-slate-100 flex items-center justify-center">
                    <Trophy className="w-12 h-12 text-slate-300" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/95 group-hover:bg-white group-hover:scale-125 flex items-center justify-center shadow-2xl transition-all duration-300">
                    <Play className="h-6 w-6 md:h-7 md:w-7 text-[#0066B3] ml-1" />
                  </div>
                </div>
                
                {study.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F5921E] text-white text-[10px] md:text-[11px] font-bold shadow-lg animate-pulse">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4 md:p-5">
                <div className="font-black text-base md:text-lg text-slate-900 leading-tight">{study.client}</div>
                <div className="text-sm text-slate-600 font-medium mt-1.5 leading-snug">
                  {study.headline}
                </div>
                {study.metrics && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {study.metrics.map((m) => (
                      <span
                        key={m.label}
                        className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-xs group-hover:bg-[#0066B3]/5 transition-colors"
                      >
                        <span className="text-slate-500 font-semibold">{m.label}: </span>
                        <span className="text-[#0066B3] font-black">{m.value}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Video modal */}
      {openStudy && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={() => setOpenStudy(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${openStudy.client} case study`}
        >
          <div
            className="w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {openStudy.youtubeId ? (
                <div className="aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${openStudy.youtubeId}?autoplay=1&rel=0`}
                    title={`${openStudy.client} case study video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center">
                  <Trophy className="w-16 h-16 text-white/30" />
                </div>
              )}
              <button
                type="button"
                onClick={() => setOpenStudy(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 hover:bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                aria-label="Close"
              >
                <X className="h-4 w-4 text-slate-900" />
              </button>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black text-slate-900">{openStudy.client}</h3>
              <p className="text-sm md:text-base text-slate-700 mt-2 leading-relaxed">{openStudy.headline}</p>
              {openStudy.metrics && (
                <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-3">
                  {openStudy.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl bg-[#0066B3]/5 border border-[#0066B3]/10 p-3"
                    >
                      <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wide">
                        {m.label}
                      </div>
                      <div className="text-lg md:text-xl font-black text-[#0066B3] mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
