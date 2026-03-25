'use client'

import { useEffect, useRef, useState } from 'react'
import { Calendar, CheckCircle, Zap, Palette, Globe, TrendingUp } from 'lucide-react'

const roadmap = [
  {
    phase: 'Phase 1',
    title: 'This Week',
    subtitle: 'Immediate improvements',
    color: '#E8192C',
    projection: 'SolaFlow live within 48 hours of receiving login',
    items: [
      { text: 'Embed SolaFlow on current WordPress site (need your login)', icon: Zap },
      { text: 'Publish 10 blog articles on current site', icon: CheckCircle },
      { text: 'Start generating leads through improved conversion path', icon: TrendingUp },
      { text: 'Video content from Karim edited and deployed with ads', icon: CheckCircle },
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Next Week',
    subtitle: 'Brand arrives Monday',
    color: '#F5921E',
    projection: 'Design direction locked by end of week',
    items: [
      { text: 'New brand identity from designer reviewed and approved', icon: Palette },
      { text: 'Brand applied to ad creative', icon: CheckCircle },
      { text: 'Joel gets the same brief for comparison', icon: CheckCircle },
      { text: 'Website option decided: upgrade (£2,500) or new build (£5,000)', icon: CheckCircle },
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Website Build',
    subtitle: '2-4 weeks from brand sign-off',
    color: 'var(--ec-accent)',
    projection: 'Site live 2-4 weeks after brand approval',
    items: [
      { text: 'New site designed with chameleon branding', icon: Palette },
      { text: 'SolaFlow natively integrated', icon: Zap },
      { text: 'Product pages: Fox ESS EP12, EP6, Sigenergy 10.0, AIKO 475W', icon: CheckCircle },
      { text: 'Area pages: Leicester, Nottingham, Loughborough, Hinckley, etc.', icon: Globe },
      { text: 'Package/offers pages for Facebook traffic conversion', icon: TrendingUp },
      { text: 'Commercial section (never lose another commercial job)', icon: CheckCircle },
      { text: 'EV charger section with pricing', icon: CheckCircle },
    ],
  },
  {
    phase: 'Phase 4',
    title: 'SEO Strategy',
    subtitle: 'Once site is live + revenue flowing',
    color: '#22C55E',
    projection: 'SEO starts compounding within 3 months of site launch',
    items: [
      { text: 'Donovan from SEO Dons takes over SEO', icon: TrendingUp },
      { text: 'We build the site, he optimises it for ranking', icon: CheckCircle },
      { text: 'Weekly content published through the blog', icon: CheckCircle },
      { text: 'Local SEO targeting Leicester + Nottinghamshire towns', icon: Globe },
    ],
  },
]

export default function WebsiteRoadmap() {
  const [isVisible, setIsVisible] = useState(false)
  const [activePhase, setActivePhase] = useState(0)
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
    <section ref={sectionRef} className="py-16 md:py-28 px-4 md:px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E8192C] via-[#F5921E] via-[var(--ec-accent)] to-[#22C55E]" />
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Calendar className="w-4 h-4" />
            Website & Content Roadmap
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Here&apos;s What Happens and When
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
            From immediate improvements to full site launch — a clear timeline.
          </p>
        </div>

        {/* Phase selector */}
        <div className={`flex flex-wrap justify-center gap-2 md:gap-4 mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {roadmap.map((phase, index) => (
            <button
              key={index}
              onClick={() => setActivePhase(index)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                activePhase === index 
                  ? 'text-white shadow-lg' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
              style={{ backgroundColor: activePhase === index ? phase.color : undefined }}
            >
              {phase.phase}
            </button>
          ))}
        </div>

        {/* Active phase card */}
        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {roadmap.map((phase, index) => (
            <div
              key={index}
              className={`bg-white border-2 rounded-2xl overflow-hidden transition-all duration-500 ${
                activePhase === index ? 'opacity-100 scale-100' : 'hidden'
              }`}
              style={{ borderColor: phase.color }}
            >
              {/* Header */}
              <div className="p-6 md:p-8 border-b" style={{ borderColor: `${phase.color}30` }}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-4 h-4 rounded-full" style={{ backgroundColor: phase.color }} />
                      <h3 className="text-xl md:text-2xl font-black text-slate-900">{phase.title}</h3>
                    </div>
                    <p className="text-slate-500">{phase.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">What Happens</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {phase.items.map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div 
                        key={i}
                        className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 hover:bg-slate-100 transition-colors"
                      >
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${phase.color}15` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: phase.color }} />
                        </div>
                        <span className="text-sm font-medium text-slate-700 leading-tight">{item.text}</span>
                      </div>
                    )
                  })}
                </div>

                {/* Projection */}
                <div className="bg-slate-900 rounded-xl p-4 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Projection</p>
                    <p className="text-sm text-white font-medium">{phase.projection}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SEO recommendation */}
        <div className={`mt-10 bg-teal-50 border border-teal-100 rounded-xl md:rounded-2xl p-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[var(--ec-accent)]/20 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-[var(--ec-accent)]" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Our SEO Recommendation</h3>
              <p className="text-slate-600 text-sm">
                <span className="font-semibold">&quot;Let us build the site. Let Don do the SEO strategy.&quot;</span>
                <br />
                We build websites optimised for conversion — they turn paid traffic into leads. Donovan builds sites optimised for SEO — they rank well and generate organic traffic. The ideal setup: we build, Don optimises. You get both.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
