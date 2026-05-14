"use client";

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { HelpCircle } from "lucide-react";

export function QuestionsForHinen() {
  const { ref, isVisible } = useAnimateOnScroll();

  const questions = [
    {
      q: "What's your ideal cost per qualified lead?",
      context:
        "Understanding your unit economics helps us optimize campaign targeting and budget allocation.",
    },
    {
      q: "Which installer network will handle leads?",
      context:
        "We need to understand capacity, coverage areas, and response time expectations.",
    },
    {
      q: "What's your product launch timeline?",
      context:
        "Aligning creative development and media buying with your go-to-market schedule.",
    },
    {
      q: "How do you currently track attribution?",
      context:
        "SolaFlow integrates with existing systems or can serve as your primary attribution platform.",
    },
    {
      q: "What content assets exist today?",
      context:
        "Product photography, spec sheets, case studies—we'll audit what's available and fill gaps.",
    },
  ];

  return (
    <section ref={ref} className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-[#ED1C24]/10 border border-[#ED1C24]/30 rounded-full px-4 py-2 mb-8">
            <HelpCircle className="w-4 h-4 text-[#ED1C24]" />
            <span className="text-[#ED1C24] text-sm font-medium">
              Questions for You
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Before We Begin
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A few things we need to understand to tailor this engagement
            perfectly to Hinen&apos;s needs.
          </p>
        </div>

        <div className="space-y-6">
          {questions.map((item, i) => (
            <div
              key={i}
              className={`bg-gray-50 rounded-2xl p-6 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#ED1C24] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
                    {item.q}
                  </h3>
                  <p className="text-gray-500">{item.context}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
