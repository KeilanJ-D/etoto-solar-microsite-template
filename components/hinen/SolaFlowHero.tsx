"use client";

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";

export function SolaFlowHero() {
  const { ref, isVisible } = useAnimateOnScroll();

  return (
    <section
      ref={ref}
      className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-6 py-20"
    >
      <div
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="inline-flex items-center gap-2 bg-[#ED1C24]/10 border border-[#ED1C24]/30 rounded-full px-4 py-2 mb-8">
          <span className="text-[#ED1C24] text-sm font-medium">Platform</span>
        </div>

        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
          <span className="text-[#ED1C24]">SolaFlow</span>
          <br />
          Powers Everything
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Our proprietary platform connects every touchpoint—from first click to
          installed system. Real-time visibility, automated routing, and
          complete attribution.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Lead Capture",
              desc: "Multi-channel intake with instant qualification",
            },
            {
              title: "Smart Routing",
              desc: "AI-powered assignment to optimal installers",
            },
            {
              title: "Full Attribution",
              desc: "Track every touchpoint from ad to install",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="text-white font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
