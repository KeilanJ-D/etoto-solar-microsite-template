'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="py-10 md:py-12 px-4 md:px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Dual branding */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <span className="text-slate-900 font-black text-sm">E</span>
              </div>
              <span className="text-white font-black tracking-tight">ETOTO</span>
            </div>
            <span className="text-white/30 text-xl font-light">×</span>
            <Image
              src="/logos/solarwatt-logo.png"
              alt="SOLARWATT"
              width={120}
              height={28}
              className="h-6 brightness-0 invert opacity-80"
              style={{ width: 'auto' }}
            />
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white/40 text-xs md:text-sm">
              Prepared for Peter Bachmann, Neal Goddard, Paula Harris & William Harris
            </p>
            <p className="text-white/30 text-[10px] md:text-xs mt-1">
              May 2026 — Confidential — v1.0
            </p>
          </div>
        </div>
        
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logos/bmw-solarwatt-color.png"
              alt="BMW"
              width={24}
              height={24}
              className="h-6 w-6 object-contain brightness-0 invert opacity-50"
            />
            <p className="text-white/30 text-xs md:text-sm">
              © 2026 ETOTO Media × SOLARWATT. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <a href="https://etotomedia.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#0066B3] text-xs md:text-sm transition-colors">
              etotomedia.com
            </a>
            <a href="https://solarwatt.co.uk" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#0066B3] text-xs md:text-sm transition-colors">
              solarwatt.co.uk
            </a>
            <a href="mailto:keilan.jd@etotomedia.com" className="text-white/40 hover:text-[#0066B3] text-xs md:text-sm transition-colors">
              keilan.jd@etotomedia.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
