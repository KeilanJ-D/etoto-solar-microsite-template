"use client";

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { Zap, Users, TrendingUp, ArrowRight } from "lucide-react";

export default function LaneDefinition() {
  const { ref, isVisible } = useAnimateOnScroll();

  const lanes = [
    {
      name: "Performance Lane",
      icon: Zap,
      color: "#ED1C24",
      desc: "Hot leads from paid media, SEO, and direct response campaigns",
      volume: "High intent, immediate follow-up",
      routing: "Top-tier installers only",
    },
    {
      name: "Referral Lane",
      icon: Users,
      color: "#F5A623",
      desc: "Word-of-mouth, installer referrals, and loyalty program leads",
      volume: "Pre-qualified, warm introduction",
      routing: "Original referrer priority",
    },
    {
      name: "Brand Lane",
      icon: TrendingUp,
      color: "#10B981",
      desc: "Content engagement, social followers, event attendees",
      volume: "Nurture sequence, education-first",
      routing: "Geographic matching",
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen bg-white flex items-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Three Lanes, One Goal
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every lead type gets specialized treatment. Different sources,
            different journeys, same destination: installed systems.
          </p>
        </div>

        <div className="space-y-6">
          {lanes.map((lane, i) => (
            <div
              key={i}
              className={`bg-gray-50 rounded-2xl p-8 transition-all duration-700 hover:shadow-lg ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${lane.color}15` }}
                >
                  <lane.icon
                    className="w-8 h-8"
                    style={{ color: lane.color }}
                  />
                </div>

                <div className="flex-1">
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: lane.color }}
                  >
                    {lane.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{lane.desc}</p>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <ArrowRight className="w-4 h-4" />
                      <span>{lane.volume}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <ArrowRight className="w-4 h-4" />
                      <span>{lane.routing}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
