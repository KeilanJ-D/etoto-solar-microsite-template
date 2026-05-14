'use client'

import { useRef, useEffect, useState } from 'react'
import { Star, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const reviews = [
  { name: "Matthew Butler", time: "a day ago", text: "We've been working with Etoto Media for all of our marketing, from paid Meta ads through to our website and SEO, and the results have been excellent. Unbelievably great team, highly driven and so easy to get along with, best in the industry." },
  { name: "Energy Concerns", time: "4 weeks ago", text: "ETOTO Media have genuinely exceeded my expectations in such a short period of time. The genuine care from the team to ensure your success while delivering exactly what they preach is second to none. After countless failed attempts with other agencies, ETOTO are the real deal." },
  { name: "Rory Pack", time: "a month ago", text: "Great company to work alongside." },
  { name: "Aid", badge: "Local Guide", time: "a month ago", text: "Known the guys for a few years now, they were patient waiting for me to finally commit, but I can honestly say onboarding was easy and I feel like I have 24hour access to the team when needed." },
  { name: "Simon Jakins", time: "a month ago", text: "Had a call with Alex today, great guy no pushy sales just great honest advice, really like the service they provide and very knowledgeable!" },
  { name: "Donovan Fawcett", badge: "Local Guide", time: "2 months ago", text: "An Incredible company to work with. A great group of very intelligent hard working and capable individuals, worked alongside them in a variety of marketing campaigns from local to national commercial. Very driven and a pleasure to work alongside." },
  { name: "John Bloomfield", time: "2 months ago", text: "Great team especially Keilan who is also a menace on the dance floor. They have exceeded our expectations and we are very happy with the service so far. We are about 5 months in and the increase in enquiries is very noticeable." },
  { name: "Finn J.W.", time: "a year ago", text: "ETOTO talk a BIG game on the sales call but you'll find out why. I have just finished my first month with ETOTO. Before they took over my marketing, results were mediocre. Now they're exceptional." },
  { name: "David Ewen", time: "a year ago", text: "Our company started using ETOTO Media in May of this year and the amount of high quality leads we have received since has been amazing (over 120). We had many chats and zoom calls with the team before getting started." },
  { name: "Daniel Millar", time: "a year ago", text: "The Etoto team are a pleasure to work with and absolutely deliver, after working with a few agencies Etoto are who we have stuck with. The quality of leads and supporting software they provide is unmatched." },
  { name: "Georgia Memon", badge: "Local Guide", time: "a year ago", text: "The most fantastic, ambitious, committed team. I have had the pleasure of working with Keilan and Alex over the 5 months. It's been an incredible experience." },
  { name: "Richard Murray", time: "2 years ago", text: "A breath of fresh air; creative ideas, excellent communication and top-class marketing & Industry knowledge. After multiple failed trails with other companies, it seems we've now found the one." },
]

function ReviewCard({ review, index }: { review: typeof reviews[0], index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={cardRef}
      className={`group bg-white rounded-2xl p-4 md:p-5 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#EF4136] to-[#c9352c] flex items-center justify-center text-white font-bold text-sm shrink-0">
          {review.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-slate-900 text-xs md:text-sm truncate">{review.name}</p>
          <div className="flex items-center gap-1.5">
            {review.badge && (
              <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">{review.badge}</span>
            )}
            <span className="text-[9px] text-slate-400">{review.time}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-0.5 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-slate-600 text-xs md:text-sm leading-relaxed line-clamp-3">{review.text}</p>
    </div>
  )
}

export default function Reviews() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image
              src="/logos/etoto-logo-black.png"
              alt="ETOTO Media"
              width={140}
              height={46}
              className="h-10 md:h-12"
              style={{ width: 'auto' }}
            />
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-3">
            What Our Clients Say
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            <span className="font-bold text-slate-700">35+ verified Google reviews</span> · 100% 5-star
          </p>
        </div>

        {/* Reviews grid - 4 rows of 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} index={index} />
          ))}
        </div>

        {/* CTA to Google */}
        <div className={`mt-10 md:mt-12 text-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a 
            href="https://www.google.com/search?q=etoto+media+reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-semibold text-sm hover:bg-slate-800 transition-colors"
          >
            View all reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
