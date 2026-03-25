'use client'

import { useEffect, useRef, useState } from 'react'
import { Calculator, XCircle, CheckCircle, Zap } from 'lucide-react'

const contactFormCaptures = [
  'Name',
  'Email',
  'Phone',
  '"Message" (usually empty)',
]

const solaflowCaptures = [
  'Property type + roof details',
  'Energy usage estimate',
  'System recommendation',
  'Full contact details',
  'Preferred contact time',
  'Postcode + coordinates',
  'Budget expectation',
]

const pricingConfig = [
  { item: 'Solar panels + inverter', price: '£1,000/kW' },
  { item: 'Fox ESS EP12 (11.52 kWh)', price: '£2,600' },
  { item: 'Fox ESS EP6 (5.76 kWh)', price: '£1,600' },
  { item: 'Sigenergy 10.0', price: '£2,800' },
]

export default function SolaFlowPreview() {
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
    <section ref={sectionRef} className="py-16 md:py-28 px-4 md:px-6 bg-slate-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--ec-accent)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E8192C]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-10 md:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[var(--ec-accent)]/20 text-[var(--ec-accent)] text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Calculator className="w-4 h-4" />
            Your Solar Calculator — Live Preview
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4">
            Try It. It&apos;s Configured With <span className="text-[var(--ec-accent)]">Your Real Pricing.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto">
            This is SolaFlow — branded to Energy Concerns, configured with your product range and pricing. This replaces your contact form.
          </p>
        </div>

        {/* Iframe */}
        <div className={`mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="rounded-xl md:rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
            <iframe
              src="https://energyconcernsltd.solaflow.co.uk"
              width="100%"
              height="800"
              frameBorder="0"
              className="bg-white"
              title="SolaFlow Calculator Preview"
            />
          </div>
        </div>

        {/* Pricing config */}
        <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-6 mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm font-semibold text-[var(--ec-accent)] uppercase tracking-wide mb-4">Your SolaFlow pricing is live:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pricingConfig.map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-lg md:text-xl font-bold text-white">{item.price}</p>
                <p className="text-xs text-slate-400">{item.item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Current contact form */}
          <div className="bg-red-950/30 border border-red-900/50 rounded-xl md:rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <XCircle className="w-6 h-6 text-red-400" />
              <h3 className="font-bold text-white">What your contact form captures</h3>
            </div>
            <div className="space-y-2">
              {contactFormCaptures.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-red-400 text-xs mt-4 font-medium">Cold lead, no intelligence</p>
          </div>

          {/* SolaFlow */}
          <div className="bg-teal-950/30 border border-teal-900/50 rounded-xl md:rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-[var(--ec-accent)]" />
              <h3 className="font-bold text-white">What SolaFlow captures</h3>
            </div>
            <div className="space-y-2">
              {solaflowCaptures.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--ec-accent)]" />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-[var(--ec-accent)] text-xs mt-4 font-medium">Warm lead, pre-qualified, system-matched</p>
          </div>
        </div>

        {/* CTA callout */}
        <div className={`bg-[var(--ec-accent)]/20 border border-[var(--ec-accent)]/30 rounded-xl md:rounded-2xl p-6 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-[var(--ec-accent)]" />
            <p className="text-white font-semibold">Ready to go live</p>
          </div>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto">
            Once we have your WordPress login, this goes live on the current site <span className="text-[var(--ec-accent)] font-semibold">within hours</span>. Your leads will never be cold again.
          </p>
        </div>
      </div>
    </section>
  )
}
