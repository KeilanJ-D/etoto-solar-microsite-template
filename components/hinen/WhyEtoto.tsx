"use client";

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import Image from "next/image";
import { Award, TrendingUp, Users, Zap } from "lucide-react";

export default function WhyEtoto() {
  const { ref, isVisible } = useAnimateOnScroll();

  const achievements = [
    {
      icon: Award,
      stat: "#1",
      label: "Solar Lead Generator",
      desc: "Australia's largest independent solar marketing company",
    },
    {
      icon: TrendingUp,
      stat: "50K+",
      label: "Leads Generated",
      desc: "Qualified solar leads delivered in the last 12 months",
    },
    {
      icon: Users,
      stat: "200+",
      label: "Installer Partners",
      desc: "Nationwide network of vetted installation partners",
    },
    {
      icon: Zap,
      stat: "8+",
      label: "Brand Launches",
      desc: "Successfully launched brands into the Australian market",
    },
  ];

  return (
    <section ref={ref} className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex justify-center mb-8">
            <Image
              src="/logos/etoto-logo-white.svg"
              alt="ETOTO"
              width={150}
              height={50}
              className="h-12 w-auto brightness-0"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Why Partner with ETOTO?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We don&apos;t just generate leads. We build market presence, create
            brand affinity, and deliver measurable business outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => (
            <div
              key={i}
              className={`bg-gray-50 rounded-2xl p-6 text-center transition-all duration-700 hover:shadow-lg ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 bg-[#ED1C24]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-[#ED1C24]" />
              </div>
              <div className="text-4xl font-bold text-[#1A1A1A] mb-1">
                {item.stat}
              </div>
              <div className="text-[#ED1C24] font-semibold mb-2">
                {item.label}
              </div>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 bg-[#1A1A1A] rounded-3xl p-10 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Brands We&apos;ve Launched in Australia
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From unknown to market leaders. We&apos;ve helped international
            solar and battery brands establish dominance in the Australian
            market through integrated marketing and lead generation.
          </p>
        </div>
      </div>
    </section>
  );
}
