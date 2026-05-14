"use client";

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";

export default function CommercialsOverview() {
  const { ref, isVisible } = useAnimateOnScroll();

  return (
    <section
      ref={ref}
      className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-6 py-20"
    >
      <div
        className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="inline-flex items-center gap-2 bg-[#F5A623]/10 border border-[#F5A623]/30 rounded-full px-4 py-2 mb-8">
          <span className="text-[#F5A623] text-sm font-medium">
            The Commercial Model
          </span>
        </div>

        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
          Simple, Aligned,
          <br />
          <span className="text-[#ED1C24]">Performance-Based</span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
          No retainers. No complicated fee structures. You pay for results, we
          deliver outcomes.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-left">
            <div className="text-[#ED1C24] text-sm font-semibold uppercase tracking-wider mb-4">
              Cost Per Lead
            </div>
            <div className="text-5xl font-bold text-white mb-4">$85-120</div>
            <p className="text-gray-400">
              Qualified leads delivered to your CRM, ready for installer
              follow-up. Price varies by market and product category.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-left">
            <div className="text-[#F5A623] text-sm font-semibold uppercase tracking-wider mb-4">
              Cost Per Acquisition
            </div>
            <div className="text-5xl font-bold text-white mb-4">$450-600</div>
            <p className="text-gray-400">
              Pay only for converted sales. Full attribution tracking from first
              touch to signed contract.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-[#10B981]/10 border border-[#10B981]/30 rounded-2xl p-6 inline-block">
          <p className="text-[#10B981] font-medium">
            All pricing includes full SolaFlow platform access, creative
            support, and dedicated account management.
          </p>
        </div>
      </div>
    </section>
  );
}
