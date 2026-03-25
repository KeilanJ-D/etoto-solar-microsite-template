'use client'

import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Calendar, FileText, Rocket, ArrowRight } from 'lucide-react'

export default function NextSteps() {
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

  const steps = [
    {
      icon: MessageCircle,
      title: 'Reply to This Page',
      description: 'Let us know your thoughts — questions, feedback, or ready to proceed.',
    },
    {
      icon: Calendar,
      title: 'Schedule a Call',
      description: '15-minute chat to discuss the options and answer any questions.',
    },
    {
      icon: FileText,
      title: 'Choose Your Path',
      description: 'Option A (upgrade existing) or Option B (fresh SolaFlow build).',
    },
    {
      icon: Rocket,
      title: 'We Get to Work',
      description: 'Implementation begins within 48 hours of sign-off.',
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-28 px-4 md:px-6 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            What Happens Next
          </h2>
          <p className="text-base md:text-lg text-slate-500">
            Four simple steps to transform your online presence
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4 md:space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-[#0D9488] hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-4 md:gap-6 p-5 md:p-6">
                    {/* Step number + icon */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#0D9488]/10 flex items-center justify-center group-hover:bg-[#0D9488] transition-colors duration-300">
                          <Icon className="w-6 h-6 md:w-7 md:h-7 text-[#0D9488] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-[#0D9488] text-white text-xs font-bold flex items-center justify-center">
                          {index + 1}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-sm md:text-base text-slate-500">{step.description}</p>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0 hidden md:flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-[#0D9488] transition-colors duration-300" />
                    </div>
                  </div>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 md:left-7 top-full w-0.5 h-4 md:h-6 bg-slate-200" />
                )}
              </div>
            )
          })}
        </div>

        {/* Call to action note */}
        <div className={`mt-10 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-[#0D9488] rounded-xl p-6 text-center">
            <p className="text-xl md:text-2xl font-bold text-white mb-2">
              No pressure. Just a conversation.
            </p>
            <p className="text-teal-100 text-sm md:text-base">
              We built this because we believe in what you&apos;re doing. Let&apos;s chat about how we can help Energy Concerns reach more homeowners.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
