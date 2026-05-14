'use client'

import { useEffect, useRef, useState } from 'react'
import { Coins, Gift } from 'lucide-react'

const earnRules = [
  { trigger: 'Trade account registration (one-time bonus)', points: '100' },
  { trigger: 'Per £1 of wholesale spend through a bonded distributor', points: '1' },
  { trigger: 'Bonus on 1st kit order placed', points: '+500' },
  { trigger: 'Bonus on 5th kit order placed', points: '+1,000' },
  { trigger: 'Bonus on 10th kit order placed', points: '+2,500' },
  { trigger: 'Customer 5-star review tagged to installer', points: '+250' },
  { trigger: 'Hinen Approved Premier status (annual review)', points: '+5,000' },
]

const redemptions = [
  { item: '£100 ETOTO ad budget credit', points: '1,000', value: '£100' },
  { item: 'Free Hinen 5kWh battery', points: '2,500', value: '~£700 wholesale' },
  { item: 'Free Hinen 8.9kWh All-in-One bundle', points: '5,000', value: '~£2,060 wholesale' },
  { item: '£1,000 cash rebate (via distributor credit)', points: '10,000', value: '£1,000' },
  { item: '£2,500 ad budget + co-branded creative pack', points: '15,000', value: '~£3,500 value' },
  { item: 'Hinen Approved Premier status (12 months)', points: '20,000', value: 'Priority leads + premium support' },
]

export default function PointsEarnRedeem() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
    <section
      id="points-earn-redeem"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 md:px-6 bg-white overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 bg-[#F5A623]/20 text-[#F5A623] text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Coins className="w-4 h-4" />
            Points System · Earn + Redeem
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
            How installers earn.
            <span className="block text-[#ED1C24]">How they redeem.</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left - Earn Rules */}
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-lg">
            <div className="bg-slate-50 p-4 border-b border-slate-100 flex items-center gap-2">
              <Coins className="w-5 h-5 text-[#F5A623]" />
              <h3 className="font-bold text-slate-900">Earn Rules</h3>
            </div>
            <div className="divide-y divide-slate-50">
              {earnRules.map((rule, i) => (
                <div key={i} className="flex justify-between items-center p-4 hover:bg-slate-50/50 transition-colors">
                  <p className="text-sm text-slate-700 pr-4">{rule.trigger}</p>
                  <p className="text-sm font-bold text-[#F5A623] whitespace-nowrap">{rule.points} pts</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Redemption Catalogue */}
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-lg">
            <div className="bg-slate-50 p-4 border-b border-slate-100 flex items-center gap-2">
              <Gift className="w-5 h-5 text-[#ED1C24]" />
              <h3 className="font-bold text-slate-900">Redemption Catalogue</h3>
            </div>
            <div className="divide-y divide-slate-50">
              {redemptions.map((item, i) => (
                <div key={i} className="p-4 hover:bg-slate-50/50 transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-sm font-semibold text-slate-900 pr-4">{item.item}</p>
                    <p className="text-sm font-bold text-[#ED1C24] whitespace-nowrap">{item.points} pts</p>
                  </div>
                  <p className="text-xs text-slate-500">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className={`mt-8 bg-slate-900 rounded-2xl p-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-[#F5A623] font-bold text-sm mb-2">Why the Giveaway Winners Are Locked In Immediately</h3>
          <p className="text-white/90 text-sm leading-relaxed">
            The 100 giveaway winners are auto-enrolled at top tier on registration. Their first kit purchase alone lands them ~3,500 points — enough to redeem a free 5kWh battery inside Month 2. They see the value of the engine instantly. They stay.
          </p>
        </div>
      </div>
    </section>
  )
}
