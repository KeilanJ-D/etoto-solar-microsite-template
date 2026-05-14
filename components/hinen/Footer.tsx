"use client";

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import Image from "next/image";

export default function Footer() {
  const { ref, isVisible } = useAnimateOnScroll();

  return (
    <footer
      ref={ref}
      className="bg-[#1A1A1A] border-t border-white/10 px-6 py-16"
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <Image
              src="/logos/etoto-logo-white.svg"
              alt="ETOTO"
              width={100}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-white/30">×</span>
            <Image
              src="/logos/hinen-logo.png"
              alt="Hinen"
              width={100}
              height={32}
              className="h-8 w-auto brightness-0 invert"
            />
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              Confidential proposal prepared for Hinen
            </p>
            <p className="text-gray-500 text-xs mt-1">
              © {new Date().getFullYear()} ETOTO Digital. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-500">
            <span>Performance Marketing</span>
            <span>•</span>
            <span>Lead Generation</span>
            <span>•</span>
            <span>Brand Activation</span>
            <span>•</span>
            <span>SolaFlow Platform</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
