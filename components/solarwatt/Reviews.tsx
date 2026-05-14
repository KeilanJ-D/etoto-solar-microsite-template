'use client'

import { useRef, useEffect, useState } from 'react'
import { Star, Quote, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const reviews = [
  { name: "Matthew Butler", time: "a day ago", text: "We've been working with Etoto Media for all of our marketing, from paid Meta ads through to our website and SEO, and the results have been excellent. Unbelievably great team, highly driven and so easy to get along with, best in the industry.", featured: true },
  { name: "Energy Concerns", time: "4 weeks ago", text: "ETOTO Media have genuinely exceeded my expectations in such a short period of time. The genuine care from the team to ensure your success while delivering exactly what they preach is second to none. After countless failed attempts with other agencies, ETOTO are the real deal.", featured: true },
  { name: "Rory Pack", time: "a month ago", text: "Great company to work alongside" },
  { name: "Aid", badge: "Local Guide", time: "a month ago", text: "Known the guys for a few years now, they were patient waiting for me to finally commit, but I can honestly say onboarding was easy and I feel like I have 24hour access to the team when needed." },
  { name: "Simon Jakins", time: "a month ago", text: "Had a call with Alex today, great guy no pushy sales just great honest advice, really like the service they provide and very knowledgeable!" },
  { name: "Donovan Fawcett", badge: "Local Guide", time: "2 months ago", text: "An Incredible company to work with. A great group of very intelligent hard working and capable individuals, worked alongside them in a variety of marketing campaigns from local to national commercial. Very driven and a pleasure to work alongside. Highly recommend." },
  { name: "John Bloomfield", time: "2 months ago", text: "Great team especially Keilan who is also a menace on the dance floor. They have exceeded our expectations and we are very happy with the service so far. We are about 5 months in and the increase in enquiries is very noticeable" },
  { name: "Finn J.W.", time: "a year ago", text: "ETOTO talk a BIG game on the sales call but you'll find out why. I have just finished my first month with ETOTO. Before they took over my marketing, results were mediocre. Now they're exceptional.", featured: true },
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
      className={`group bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#EF4136] to-[#c9352c] flex items-center justify-center text-white font-bold text-base flex-shrink-0 group-hover:scale-110 transition-transform">
          {review.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-slate-900 text-sm truncate">{review.name}</p>
          <div className="flex items-center gap-2">
            {review.badge && (
              <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{review.badge}</span>
            )}
            <span className="text-[10px] text-slate-400">{review.time}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">{review.text}</p>
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

  const featuredReviews = reviews.filter(r => r.featured)
  const otherReviews = reviews.filter(r => !r.featured)

  return (
    <section ref={sectionRef} className="py-16 md:py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image
              src="/logos/etoto-logo.png"
              alt="ETOTO Media"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <div className="text-left">
              <p className="font-black text-slate-900">ETOTO Media</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-sm text-slate-600 ml-1">5.0</span>
              </div>
            </div>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-500 text-base md:text-lg">
            <span className="font-bold text-slate-700">40+ verified Google reviews</span> · 100% 5-star
          </p>
        </div>

        {/* Featured reviews - large cards */}
        <div className={`grid md:grid-cols-3 gap-6 mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {featuredReviews.map((review, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-[#EF4136] to-[#c9352c] rounded-2xl p-6 md:p-8 text-white overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Decorative quote */}
              <Quote className="absolute top-4 right-4 w-16 h-16 text-white/10" />
              
              <div className="relative">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-300 text-amber-300" />
                  ))}
                </div>
                <p className="text-white/95 text-base md:text-lg leading-relaxed mb-6 font-medium">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-xs text-white/70">{review.time}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other reviews - grid */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-10">
          {otherReviews.slice(0, 6).map((review, index) => (
            <ReviewCard key={index} review={review} index={index} />
          ))}
        </div>

        {/* More reviews - smaller */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {otherReviews.slice(6).map((review, index) => (
            <div 
              key={index}
              className="bg-white border border-slate-100 rounded-xl p-4 hover:shadow-lg transition-all"
            >
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-600 line-clamp-2 mb-2">{review.text}</p>
              <p className="text-[10px] font-semibold text-slate-900">{review.name}</p>
            </div>
          ))}
        </div>

        {/* CTA to Google */}
        <div className={`mt-10 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a 
            href="https://www.google.com/search?q=etoto+media+reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors"
          >
            View all reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
