'use client'

import { useEffect, useRef, useState } from 'react'
import { FileText, Download, Clock, TrendingUp, Sparkles } from 'lucide-react'

const blogs = [
  {
    id: 1,
    title: 'Solar Panels Leicester: Costs, Savings & What to Expect in 2026',
    keywords: ['solar panels leicester'],
    wordCount: 650,
    readTime: '3 min',
    searchVolume: '~720/mo',
  },
  {
    id: 2,
    title: 'Fox ESS EP12 Review: An Installer\'s Honest Assessment',
    keywords: ['fox ess ep12 review'],
    wordCount: 650,
    readTime: '3 min',
    searchVolume: '~480/mo',
  },
  {
    id: 3,
    title: 'Solar Panels and EV Chargers Together: The Complete Leicester Guide',
    keywords: ['solar ev charger leicester'],
    wordCount: 650,
    readTime: '3 min',
    searchVolume: '~260/mo',
  },
  {
    id: 4,
    title: 'Best Solar Battery 2026: Fox ESS vs Sigenergy vs GivEnergy vs Tesla',
    keywords: ['best solar battery uk 2026'],
    wordCount: 650,
    readTime: '3 min',
    searchVolume: '~1,900/mo',
  },
  {
    id: 5,
    title: 'UK Solar Panel Grants & Funding in 2026: What\'s Actually Available',
    keywords: ['solar panel grants uk 2026'],
    wordCount: 650,
    readTime: '3 min',
    searchVolume: '~2,400/mo',
  },
  {
    id: 6,
    title: 'Sigenergy Battery Review: Is the 5-in-1 System Worth It?',
    keywords: ['sigenergy battery review'],
    wordCount: 650,
    readTime: '3 min',
    searchVolume: '~390/mo',
  },
  {
    id: 7,
    title: 'Are Solar Panels Worth It in Leicester? Real Savings Breakdown',
    keywords: ['solar panels worth it leicester'],
    wordCount: 650,
    readTime: '3 min',
    searchVolume: '~590/mo',
  },
  {
    id: 8,
    title: 'AIKO 475W Solar Panel Review: Why We Install Them',
    keywords: ['aiko solar panel review'],
    wordCount: 650,
    readTime: '3 min',
    searchVolume: '~320/mo',
  },
  {
    id: 9,
    title: 'Smart Export Guarantee Rates 2026: Complete UK Guide',
    keywords: ['seg rates 2026'],
    wordCount: 650,
    readTime: '3 min',
    searchVolume: '~880/mo',
  },
  {
    id: 10,
    title: 'MCS, RECC, NAPIT, Trustmark — What Solar Accreditations Mean',
    keywords: ['mcs certified solar installer'],
    wordCount: 650,
    readTime: '3 min',
    searchVolume: '~590/mo',
  },
]

const totalWords = 6498

export default function BlogShowcase() {
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
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="blogs" className="py-20 md:py-32 px-4 md:px-6 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--ec-accent)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E8192C]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[var(--ec-accent)]/20 text-[var(--ec-accent)] text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            SEO Content Library
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4">
            10 Articles. Written for Energy Concerns.
            <br />
            <span className="text-[var(--ec-accent)]">Ready to Publish.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            Your SEO foundation. Publish these on your current site while the new one is being built — start ranking immediately.
          </p>
        </div>

        {/* Stats bar */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { label: 'Articles', value: '10', icon: FileText },
            { label: 'Total Words', value: totalWords.toLocaleString(), icon: FileText },
            { label: 'Combined Search Volume', value: '~7,800/mo', icon: TrendingUp },
            { label: 'Time to Create', value: '<2hrs', icon: Clock },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
              <stat.icon className="w-5 h-5 text-[var(--ec-accent)] mx-auto mb-2" />
              <p className="text-2xl md:text-3xl font-black text-white">{stat.value}</p>
              <p className="text-xs text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6 transition-all duration-500 hover:bg-white/10 hover:border-[var(--ec-accent)]/30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-[var(--ec-accent)] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {blog.id}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 text-xs text-slate-400">
                    <span>{blog.readTime} read</span>
                    <span className="text-[var(--ec-accent)] font-medium">{blog.searchVolume}</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-3 line-clamp-2">
                    {blog.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {blog.keywords.map((kw, i) => (
                      <span key={i} className="text-xs bg-white/10 text-slate-300 px-2 py-1 rounded">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download CTA */}
        <div className={`text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex flex-col items-center gap-6 bg-gradient-to-br from-[var(--ec-accent)] to-[#0B7B70] rounded-2xl p-8 md:p-10 shadow-2xl shadow-[var(--ec-accent)]/20">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Download All 10 Articles
              </h3>
              <p className="text-white/80 text-sm md:text-base max-w-md">
                Markdown files ready to copy and paste directly into your blog.
              </p>
            </div>
            <a 
              href="/ec-blogs.zip" 
              download="energy-concerns-blog-content.zip"
              className="inline-flex items-center gap-3 bg-white text-[var(--ec-accent)] px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <Download className="w-5 h-5" />
              Download ZIP (6.5k words)
            </a>
            <p className="text-white/60 text-xs">
              10 markdown files ready for instant publishing
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
