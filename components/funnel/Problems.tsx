'use client'

import { useEffect, useRef, useState } from 'react'
import { Search, Smartphone, Gauge, Shield, Palette, Target, Info } from 'lucide-react'
import { useCountUp } from '@/hooks/use-animate-on-scroll'

const scoreCards = [
  { 
    icon: Search, 
    title: 'SEO Health', 
    score: 35, 
    maxScore: 100, 
    status: 'CRITICAL', 
    statusColour: '#DC2626', 
    detail: 'No blog posts. No area pages. No schema markup. Zero SEO activity for over 12 months.',
    context: 'We ran energyconcernsltd.co.uk through Google Lighthouse and Screaming Frog. Key findings: No blog content whatsoever. No local landing pages targeting Leicester, Nottingham, or surrounding areas. No structured data markup detected. Your competitors have been publishing content while your site has been static.'
  },
  { 
    icon: Smartphone, 
    title: 'Mobile Experience', 
    score: 55, 
    maxScore: 100, 
    status: 'NEEDS WORK', 
    statusColour: '#F59E0B', 
    detail: 'WordPress template with basic mobile responsiveness. Touch targets adequate but no mobile-first design.',
    context: 'Mobile accounts for 65%+ of solar enquiry traffic in the UK. Your site uses a "We Build Trades" WordPress template with basic responsive behaviour, but it was not designed mobile-first. Page elements shift on load and the user journey is not optimised for touch interactions.'
  },
  { 
    icon: Gauge, 
    title: 'Page Speed', 
    score: 42, 
    maxScore: 100, 
    status: 'POOR', 
    statusColour: '#DC2626', 
    detail: 'Unoptimised images, render-blocking resources. WordPress template adds overhead.',
    context: 'Your homepage loads slowly due to uncompressed images and multiple render-blocking JavaScript files. The "We Build Trades" WordPress template adds additional overhead. Total page load time exceeds 5 seconds on mobile. For every 1-second delay, conversion rates drop by 7%.'
  },
  { 
    icon: Shield, 
    title: 'Trust Signals', 
    score: 55, 
    maxScore: 100, 
    status: 'MODERATE', 
    statusColour: '#F59E0B', 
    detail: 'Strong accreditation logos displayed. Customer testimonials present. But no case studies, no data, no installation gallery.',
    context: 'You display MCS, RECC, NAPIT, and Trustmark badges — that is excellent. You have customer testimonials. However, there are no detailed case studies with measurable results, no installation gallery, and no data-driven proof points that differentiate you from competitors.'
  },
  { 
    icon: Palette, 
    title: 'Brand Consistency', 
    score: 30, 
    maxScore: 100, 
    status: 'WEAK', 
    statusColour: '#DC2626', 
    detail: 'Current site does not reflect the brand Todd is building. Chameleon identity not present. Looks like a tradesman template, not Octopus Energy.',
    context: 'You told us you want to look like Octopus Energy — established, credible, a brand. Your current site looks like a generic electrician template. The chameleon identity that makes Energy Concerns unique is completely absent. The site does not reflect the premium, adaptable brand you are building.'
  },
  { 
    icon: Target, 
    title: 'Lead Capture', 
    score: 20, 
    maxScore: 100, 
    status: 'FAILING', 
    statusColour: '#DC2626', 
    detail: 'Generic contact form only. No solar calculator. No lead qualification. No offers page. No gated content.',
    context: 'Your only conversion path is a generic contact form with name, email, phone, and message. No solar calculator to engage visitors. No lead qualification to filter tyre-kickers. No offers page to capture Facebook traffic. You are losing an estimated 30+ leads per month to competitors with better conversion paths.'
  },
]

function AnimatedScore({ score, isVisible, color }: { score: number; isVisible: boolean; color: string }) {
  const count = useCountUp(score, 1500, isVisible)
  return <span style={{ color }}>{count}</span>
}

export default function Problems() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [sectionVisible, setSectionVisible] = useState(false)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionVisible(true)
            scoreCards.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index])
              }, index * 120)
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="problems" ref={sectionRef} className="py-16 md:py-32 px-4 md:px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-teal-50/50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-10 md:mb-16 transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-red-50 text-[#DC2626] text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-[#DC2626] rounded-full animate-pulse" />
            Website Audit
          </span>
          <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-3 md:mb-4">
            Six Critical Areas Bleeding Revenue
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
            Our audit of energyconcernsltd.co.uk revealed significant gaps. Tap any card to see the full analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {scoreCards.map((card, index) => {
            const Icon = card.icon
            const isVisible = visibleCards.includes(index)
            const percentage = (card.score / card.maxScore) * 100
            const isExpanded = expandedCard === index

            return (
              <div
                key={index}
                className={`group relative bg-white border border-slate-100 rounded-xl md:rounded-2xl p-5 md:p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-slate-200 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                } ${isExpanded ? 'ring-2 ring-[var(--ec-accent)] shadow-2xl' : ''}`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setExpandedCard(isExpanded ? null : index)}
              >
                <div 
                  className="absolute top-3 md:top-4 right-3 md:right-4 px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-bold text-white animate-pulse"
                  style={{ backgroundColor: card.statusColour, animationDuration: '2s' }}
                >
                  {card.status}
                </div>

                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-teal-50 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-slate-400 group-hover:text-[var(--ec-accent)] transition-colors duration-300" />
                </div>

                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2 md:mb-3">{card.title}</h3>

                <div className="mb-3 md:mb-4">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-black">
                      <AnimatedScore score={card.score} isVisible={isVisible} color={card.statusColour} />
                    </span>
                    <span className="text-xs md:text-sm text-slate-400">/ {card.maxScore}</span>
                  </div>
                  <div className="h-1.5 md:h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${percentage}%` : '0%',
                        backgroundColor: card.statusColour,
                        transitionDelay: `${index * 100 + 300}ms`
                      }}
                    />
                  </div>
                </div>

                <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{card.detail}</p>

                <button className="mt-3 inline-flex items-center gap-1 text-xs text-slate-400 hover:text-[var(--ec-accent)] transition-colors">
                  <Info className="w-3 h-3" />
                  {isExpanded ? 'Hide analysis' : 'See full analysis'}
                </button>

                {/* Expanded context */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-100 animate-fade-in-up">
                    <div className="bg-slate-50 rounded-lg p-4 text-xs md:text-sm text-slate-600 leading-relaxed">
                      {card.context}
                    </div>
                  </div>
                )}

                {/* Hover gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--ec-accent)] to-[#E8192C] rounded-b-xl md:rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )
          })}
        </div>

        <div className={`mt-10 md:mt-14 text-center transition-all duration-700 delay-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex flex-col items-center gap-3 bg-red-50 border border-red-100 rounded-2xl px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#DC2626] rounded-full animate-ping" />
              <p className="text-slate-700 text-sm md:text-lg">
                Combined, these issues are costing Energy Concerns an estimated <span className="font-bold text-[#DC2626]">£36,000+ annually</span>
              </p>
            </div>
            <p className="text-xs md:text-sm text-slate-500 max-w-xl">
              Based on: 3 lost leads/month × £10,000 average installation × 12 months = £36,000. Calculated from competitor traffic analysis and industry conversion benchmarks.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
