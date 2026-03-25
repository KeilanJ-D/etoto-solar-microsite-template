'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What about the branding — should we wait for the designer?',
    answer: 'No. SolaFlow and the blog articles go live on the current site this week regardless. The new branding applies to the website build, not the immediate improvements. Once the designer delivers, we apply it to everything.',
  },
  {
    question: 'Can we do SEO at the same time as the website?',
    answer: 'SEO is a separate, ongoing cost. Our recommendation: let us build the site with SEO foundations baked in (schema, meta descriptions, blog structure, area pages). Then Donovan from SEO Dons takes over the ongoing optimisation. Build first, SEO second — but the site will be ready for SEO from day one.',
  },
  {
    question: 'What if I don\'t like the design?',
    answer: 'Tell us. We\'d rather fix it than lose you. You\'ll see the design before we build. If the chameleon branding from your designer doesn\'t translate well, we iterate until it does. Your baby, your call.',
  },
  {
    question: 'How do the package offers work on the website?',
    answer: 'We create a dedicated offers page showing fixed-price solar packages. When someone clicks a Facebook ad showing a package deal, but doesn\'t convert on Facebook, they Google you. They land on the offers page and see the same deal. They convert there. That\'s how Halo gets 31 extra leads per month from their website.',
  },
  {
    question: 'What\'s the difference between Don\'s websites and yours?',
    answer: 'Don builds websites optimised for SEO — they rank well and generate organic traffic. We build websites optimised for conversion — they turn paid traffic into leads at the highest possible rate. The ideal setup: we build the site, Don does the SEO. You get both.',
  },
  {
    question: 'Can the site handle commercial enquiries too?',
    answer: 'Yes. Option B includes a dedicated commercial solar section with its own enquiry path. You told us you lost a commercial job because the site looked too residential. That won\'t happen again.',
  },
]

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
            Questions We Know You Have
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900">
            Straight Answers
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-slate-200 rounded-xl overflow-hidden transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${100 + index * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <p className="px-5 pb-5 text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
