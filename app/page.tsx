'use client'

import Hero from '@/components/solarwatt/Hero'
import WhySolarwatt from '@/components/solarwatt/WhySolarwatt'
import WhyEtoto from '@/components/solarwatt/WhyEtoto'
import CaseStudies from '@/components/solarwatt/CaseStudies'
import Headline from '@/components/solarwatt/Headline'
import TwoTrackStructure from '@/components/solarwatt/TwoTrackStructure'
import TrackAInternal from '@/components/solarwatt/TrackAInternal'
import Month1Reality from '@/components/solarwatt/Month1Reality'
import TrackBExternal from '@/components/solarwatt/TrackBExternal'
import SolaFlowSection from '@/components/solarwatt/SolaFlowSection'
import CRMVisibility from '@/components/solarwatt/CRMVisibility'
import Investment from '@/components/solarwatt/Investment'
import Timeline from '@/components/solarwatt/Timeline'
import TheAsk from '@/components/solarwatt/TheAsk'
import Reviews from '@/components/solarwatt/Reviews'
import CTA from '@/components/solarwatt/CTA'
import Footer from '@/components/solarwatt/Footer'

export default function SolarwattProposal() {
  return (
    <main className="bg-[#FAFBFC] min-h-screen overflow-x-hidden">
      {/* ================================
          PART 1: THE OPPORTUNITY
          ================================ */}
      <Hero />
      <WhySolarwatt />
      
      {/* ================================
          PART 1.5: WHY ETOTO (NEW)
          ================================ */}
      <WhyEtoto />
      <CaseStudies />
      
      <Headline />
      
      {/* ================================
          PART 2: THE TWO-TRACK STRUCTURE
          ================================ */}
      <TwoTrackStructure />
      <TrackAInternal />
      <Month1Reality />
      <TrackBExternal />
      
      {/* ================================
          PART 2.5: SOLAFLOW DEMO (NEW)
          ================================ */}
      <SolaFlowSection />
      
      {/* ================================
          PART 3: VISIBILITY & INVESTMENT
          ================================ */}
      <CRMVisibility />
      <Investment />
      
      {/* ================================
          PART 4: THE TIMELINE & ASK
          ================================ */}
      <Timeline />
      <TheAsk />
      
      {/* ================================
          PART 5: TRUST & CLOSE
          ================================ */}
      <Reviews />
      <CTA />
      <Footer />
    </main>
  )
}
