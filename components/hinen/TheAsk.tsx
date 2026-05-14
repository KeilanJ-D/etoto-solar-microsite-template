"use client";

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { Check } from "lucide-react";

export default function TheAsk() {
  const { ref, isVisible } = useAnimateOnScroll();

  const deliverables = [
    "90-day market activation campaign",
    "100 winners solar giveaway execution",
    "SolaFlow platform integration",
    "14 KOL partnerships + 6 named voices",
    "Full-funnel content creation",
    "Installer network coordination",
    "Weekly reporting + optimization",
    "Dedicated account team",
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-6 py-20"
    >
      <div
        className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            The Ask
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            What we need from Hinen to make this happen.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#ED1C24]/20 to-[#ED1C24]/5 border border-[#ED1C24]/30 rounded-3xl p-10 mb-12">
          <div className="text-center mb-10">
            <div className="text-[#ED1C24] text-sm font-semibold uppercase tracking-wider mb-2">
              Sprint 3 Investment
            </div>
            <div className="text-6xl md:text-7xl font-bold text-white mb-4">
              $150,000
            </div>
            <p className="text-gray-400">
              90-day program, all-inclusive of media, creative, and platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {deliverables.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 bg-[#10B981] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-400 text-sm">
            Payment terms: 50% upfront, 50% at day 45. Additional media spend
            billed at cost + 15%.
          </p>
        </div>
      </div>
    </section>
  );
}
