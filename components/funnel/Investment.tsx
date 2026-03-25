'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, Sparkles, Star } from 'lucide-react'

const options = [
  {
    title: 'Upgrade Current Site',
    price: '£2,500',
    priceNote: 'one-off',
    timeline: '2 weeks from brand delivery',
    bestFor: 'Fast turnaround, budget-conscious, solid foundation',
    features: [
      'New branding applied to existing WordPress',
      'SolaFlow calculator embedded',
      'Product pages (Fox ESS, Sigenergy, AIKO)',
      'Area pages (Leicester, Nottingham, key towns)',
      'Blog functionality + 10 articles published',
      'Mobile optimisation + speed improvements',
      'Improved conversion paths',
    ],
    featured: false,
  },
  {
    title: 'Full New Build',
    price: '£5,000',
    priceNote: 'one-off',
    timeline: '4 weeks from brand delivery',
    bestFor: 'The Octopus Energy vision. Built for scale.',
    features: [
      'Complete redesign from scratch',
      'Full chameleon brand implementation',
      'SolaFlow as native feature',
      'Commercial solar section',
      'Package/offers pages (the CRO goldmine)',
      'Interactive product comparisons',
      'Full blog + case studies',
      'EV charger section with pricing',
    ],
    featured: true,
  },
]

const bothInclude = [
  '10 SEO blog articles (already written)',
  'SolaFlow calculator (already configured)',
  'Ongoing ad management (existing £2,500/mo retainer)',
  'CRM infrastructure + lead automation',
]

export default function Investment() {
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
      { threshold: 0.15 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-28 px-4 md:px-6 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[var(--ec-accent)]/10 text-[var(--ec-accent)] text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            The Investment
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Two Options. Both Include Everything You Need.
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
            Choose based on budget and timeline. Either way, SolaFlow and the 10 blog articles go live this week.
          </p>
        </div>

        {/* Option cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
                  <span className={`text-sm ${option.featured ? 'text-slate-400' : 'text-slate-500'}`}>{option.priceNote}</span>
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
            </div>
          ))}
        </div>

        {/* Both include */}
        <div className={`bg-slate-100 rounded-xl md:rounded-2xl p-6 mb-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="font-bold text-slate-900 mb-4">Both Options Include:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {bothInclude.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[var(--ec-accent)] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-600">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendation callout */}
        <div className={`bg-teal-50 border border-teal-100 rounded-xl md:rounded-2xl p-6 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-slate-700 text-sm md:text-base">
            <span className="font-semibold">Our recommendation:</span> We&apos;d go with Option B. It&apos;s the full vision. But Option A is a smart move if you want results fast and budget&apos;s tight. 
            <span className="font-semibold text-[var(--ec-accent)]"> Either way, SolaFlow goes live this week.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
