'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronRight, ExternalLink, Play, Sparkles, Trophy, Video, X } from 'lucide-react'
import { ETOTO_CASE_STUDIES, ETOTO_CLIENTS, ETOTO_LINKS, type CaseStudy } from '@/lib/etoto-data'

type Filter = 'all' | 'solar' | 'air-source' | 'air-con'

export default function CaseStudies() {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState<Filter>('all')
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

  const filtered = useMemo(() => {
    const list =
      filter === 'all'
        ? ETOTO_CASE_STUDIES
        : ETOTO_CASE_STUDIES.filter((s) => s.technologies.includes(filter))
    return [...list].sort((a, b) => Number(!!b.featured) - Number(!!a.featured))
  }, [filter])

  const filters: { id: Filter; label: string }[] = [
    { id: 'all', label: 'All wins' },
    { id: 'solar', label: 'Solar' },
    { id: 'air-source', label: 'Air Source' },
    { id: 'air-con', label: 'Air Con' },
  ]

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

        {/* Filter chips */}
        <div
          className={`flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold border transition-all duration-300 ${
                filter === f.id
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-105'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-[#0066B3] hover:text-[#0066B3] hover:scale-105'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Case study grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-12 md:mb-16">
          {filtered.map((study, i) => (
            <button
              key={study.id}
              type="button"
              onClick={() => setOpenStudy(study)}
              className={`group text-left bg-white rounded-2xl border border-slate-100 hover:border-[#0066B3]/30 hover:shadow-xl transition-all duration-500 overflow-hidden hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + i * 60}ms` }}
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
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {study.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-[10px] md:text-[11px] font-bold text-white capitalize tracking-wide"
                    >
                      {t.replace('-', ' ')}
                    </span>
                  ))}
                </div>
                {study.youtubeId && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/95 group-hover:bg-white group-hover:scale-125 flex items-center justify-center shadow-2xl transition-all duration-300">
                      <Play className="h-5 w-5 md:h-6 md:w-6 text-[#0066B3] ml-0.5" />
                    </div>
                  </div>
                )}
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
                <div className="font-black text-sm md:text-base text-slate-900 leading-tight">{study.client}</div>
                <div className="text-[11px] md:text-sm text-slate-600 font-medium mt-1.5 leading-snug">
                  {study.headline}
                </div>
                {study.metrics && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {study.metrics.map((m) => (
                      <span
                        key={m.label}
                        className="px-2 py-1 rounded-md bg-slate-50 border border-slate-100 text-[10px] md:text-[11px] group-hover:bg-[#0066B3]/5 transition-colors"
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

        {/* Client portfolio wall */}
        <div
          className={`transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-6">
            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
              A few of the {ETOTO_CLIENTS.length}+ installers we&apos;re actively running campaigns for
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3 max-w-5xl mx-auto">
            {ETOTO_CLIENTS.map((client, i) => (
              <div
                key={client.name}
                className="group relative overflow-hidden rounded-xl border border-slate-100 bg-slate-50/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: '0 0 20px 6px rgba(0, 102, 179, 0.06)',
                  transitionDelay: `${i * 50}ms`,
                }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 md:pb-6">
                    <span className="text-white font-bold text-xs md:text-sm text-center px-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      {client.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <div className="mt-10 md:mt-12 grid sm:grid-cols-2 gap-3 md:gap-4 max-w-3xl mx-auto">
            <a
              href={ETOTO_LINKS.videoFolder}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 px-5 md:px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center gap-3 min-w-0">
                <Video className="w-5 h-5 text-[#F5921E] shrink-0" />
                <span className="text-sm md:text-base truncate">See our video content portfolio</span>
              </span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={ETOTO_LINKS.webDesignPortfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 px-5 md:px-6 py-4 rounded-xl bg-white border-2 border-slate-200 hover:border-[#0066B3] text-slate-900 hover:text-[#0066B3] font-bold transition-all hover:-translate-y-1"
            >
              <span className="flex items-center gap-3 min-w-0">
                <ChevronRight className="w-5 h-5 text-[#0066B3] shrink-0" />
                <span className="text-sm md:text-base truncate">See websites we&apos;ve built</span>
              </span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
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
