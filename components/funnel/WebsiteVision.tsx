'use client'

import { useEffect, useRef, useState } from 'react'
import { Sparkles, ExternalLink, Check, ArrowRight, Star } from 'lucide-react'

const inspirationSites = [
  {
    name: 'Midland Solar',
    url: 'midland-solar.co.uk',
    quote: '"Modern, interactive, feels like an up-to-date website"',
    whatWeTake: 'Clean layout, product showcases, visual energy',
    whatWeAdd: 'CRO fundamentals. Every interactive element serves a conversion purpose — not just decoration.',
  },
  {
    name: 'Heatable',
    url: 'heatable.co.uk',
    quote: '"Simple, clean, avoids over-complication"',
    whatWeTake: 'Clear navigation, strong CTAs, content-led trust',
    whatWeAdd: 'Solar-specific functionality — SolaFlow calculator, product comparison pages, package offers.',
  },
  {
    name: 'Octopus Energy',
    url: 'octopus.energy',
    quote: '"I want us to feel like Octopus Energy"',
    whatWeTake: 'Character-driven branding (chameleon = octopus), playful but professional, educates and builds loyalty',
    whatWeAdd: 'Local authority. Octopus is national. Energy Concerns is Leicester/Notts — that is a strength, not a weakness.',
  },
]

const options = [
  {
    title: 'Upgrade Current Site',
    price: '£2,500',
    timeline: '2 weeks from brand delivery',
    bestFor: 'Fast turnaround, budget-conscious, solid foundation',
    features: [
      'Keep existing WordPress foundation',
      'Redesign with new branding (once designer delivers)',
      'Embed SolaFlow calculator',
      'Add product pages (Fox ESS, Sigenergy, AIKO)',
      'Add area pages (Leicester, Nottingham, key towns)',
      'Add offers/packages page',
      'Improve mobile experience and page speed',
      'Publish 10 blog articles',
    ],
    featured: false,
  },
  {
    title: 'Full New Build',
    price: '£5,000',
    timeline: '4 weeks from brand delivery',
    bestFor: 'The Octopus Energy vision. Built for scale.',
    features: [
      'Built from scratch',
      'Full chameleon brand implementation throughout',
      'SolaFlow as native feature (not iframe bolt-on)',
      'Commercial solar section (no more losing commercial jobs)',
      'Package/offers pages designed to convert Facebook traffic',
      'Interactive product comparisons',
      'Full blog with content management',
      'EV charger section with pricing',
    ],
    featured: true,
    portfolio: ['foreuk.co.uk', 'halo-renewables.co.uk'],
  },
]

export default function WebsiteVision() {
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
    <section ref={sectionRef} className="py-16 md:py-28 px-4 md:px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--ec-accent)] via-[#E8192C] to-[var(--ec-accent)]" />
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-10 md:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-teal-50 text-[var(--ec-accent)] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            Website Vision
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            What Your New Website Looks Like
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
            Based on the sites you love, the brand you&apos;re building, and the conversion architecture that actually generates leads.
          </p>
        </div>

        {/* Inspiration cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {inspirationSites.map((site, index) => (
            <div 
              key={site.name}
              className="bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl p-5 md:p-6 hover:shadow-lg hover:border-[var(--ec-accent)]/30 transition-all duration-300"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-900">{site.name}</h3>
                <a 
                  href={`https://${site.url}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-[var(--ec-accent)] flex items-center gap-1 transition-colors"
                >
                  {site.url}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              
              <p className="text-sm text-[var(--ec-accent)] font-medium italic mb-4">{site.quote}</p>
              
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">What we take</p>
                  <p className="text-sm text-slate-600">{site.whatWeTake}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--ec-accent)] uppercase tracking-wide mb-1">What we add</p>
                  <p className="text-sm text-slate-700">{site.whatWeAdd}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Option cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {options.map((option, index) => (
            <div 
              key={option.title}
              className={`relative rounded-xl md:rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl ${
                option.featured 
                  ? 'bg-slate-900 text-white border-2 border-[var(--ec-accent)]' 
                  : 'bg-white border-2 border-slate-200'
              }`}
            >
              {option.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--ec-accent)] text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" fill="white" />
                  RECOMMENDED
                </div>
              )}
              
              <div className="mb-6">
                <h3 className={`text-xl md:text-2xl font-bold mb-2 ${option.featured ? 'text-white' : 'text-slate-900'}`}>
                  {option.title}
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className={`text-3xl md:text-4xl font-black ${option.featured ? 'text-[var(--ec-accent)]' : 'text-slate-900'}`}>
                    {option.price}
                  </span>
                  <span className={`text-sm ${option.featured ? 'text-slate-400' : 'text-slate-500'}`}>one-off</span>
                </div>
                <p className={`text-sm ${option.featured ? 'text-slate-400' : 'text-slate-500'}`}>
                  Timeline: {option.timeline}
                </p>
              </div>
              
              <div className="space-y-2 mb-6">
                {option.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${option.featured ? 'text-[var(--ec-accent)]' : 'text-green-500'}`} />
                    <span className={`text-sm ${option.featured ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className={`pt-4 border-t ${option.featured ? 'border-slate-700' : 'border-slate-100'}`}>
                <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${option.featured ? 'text-slate-500' : 'text-slate-400'}`}>
                  Best for
                </p>
                <p className={`text-sm font-medium ${option.featured ? 'text-white' : 'text-slate-700'}`}>
                  {option.bestFor}
                </p>
              </div>
              
              {option.portfolio && (
                <div className={`mt-4 pt-4 border-t ${option.featured ? 'border-slate-700' : 'border-slate-100'}`}>
                  <p className={`text-xs font-semibold uppercase tracking-wide mb-2 ${option.featured ? 'text-slate-500' : 'text-slate-400'}`}>
                    Portfolio examples
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {option.portfolio.map((site) => (
                      <a 
                        key={site}
                        href={`https://${site}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-xs px-3 py-1 rounded-full flex items-center gap-1 transition-colors ${
                          option.featured 
                            ? 'bg-slate-800 text-slate-300 hover:text-[var(--ec-accent)]' 
                            : 'bg-slate-100 text-slate-600 hover:text-[var(--ec-accent)]'
                        }`}
                      >
                        {site}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Recommendation callout */}
        <div className={`bg-teal-50 border border-teal-100 rounded-xl md:rounded-2xl p-6 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-2 mb-2">
            <ArrowRight className="w-5 h-5 text-[var(--ec-accent)]" />
            <p className="text-slate-800 font-semibold">Our recommendation</p>
          </div>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
            <span className="font-semibold">Option B is the full Octopus Energy vision.</span> Option A gets you 80% there at half the cost. Either way, SolaFlow goes live on the current site this week — there&apos;s no gap.
          </p>
        </div>
      </div>
    </section>
  )
}
