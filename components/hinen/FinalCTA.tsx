"use client";

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  const { ref, isVisible } = useAnimateOnScroll();

  return (
    <section
      ref={ref}
      className="min-h-screen bg-[#ED1C24] flex items-center justify-center px-6 py-20"
    >
      <div
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="flex justify-center gap-8 mb-12">
          <Image
            src="/logos/etoto-logo-white.svg"
            alt="ETOTO"
            width={120}
            height={40}
            className="h-10 w-auto brightness-0 invert"
          />
          <span className="text-white/50 text-4xl font-light">×</span>
          <Image
            src="/logos/hinen-logo.png"
            alt="Hinen"
            width={120}
            height={40}
            className="h-10 w-auto brightness-0 invert"
          />
        </div>

        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
          Let&apos;s Build
          <br />
          Something Big
        </h2>

        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          90 days to prove the model. 100 winners to create momentum. One
          partnership to reshape how Hinen enters the Australian market.
        </p>

        <a
          href="mailto:keilan@etoto.com.au?subject=Hinen%20×%20ETOTO%20Sprint%203"
          className="inline-flex items-center gap-3 bg-white text-[#ED1C24] px-10 py-5 rounded-full text-xl font-semibold hover:bg-white/90 transition-colors group"
        >
          Start the Conversation
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </a>

        <p className="text-white/60 mt-8 text-sm">
          keilan@etoto.com.au | Ready to align on timing and next steps
        </p>
      </div>
    </section>
  );
}
