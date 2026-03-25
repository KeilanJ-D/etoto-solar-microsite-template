'use client'

import Hero from '@/components/funnel/Hero'
import Problems from '@/components/funnel/Problems'
import GeographicCoverage from '@/components/funnel/GeographicCoverage'
import SEOProblems from '@/components/funnel/SEOProblems'
import LeakyFunnel from '@/components/funnel/LeakyFunnel'
import BlogProblem from '@/components/funnel/BlogProblem'

import Transition from '@/components/funnel/Transition'

import WebsiteVision from '@/components/funnel/WebsiteVision'
import SolaFlowPreview from '@/components/funnel/SolaFlowPreview'
import BlogShowcase from '@/components/funnel/BlogShowcase'

import HaloCaseStudy from '@/components/funnel/HaloCaseStudy'

import WebsiteRoadmap from '@/components/funnel/WebsiteRoadmap'

import Investment from '@/components/funnel/Investment'
import FAQ from '@/components/funnel/FAQ'
import NextSteps from '@/components/funnel/NextSteps'

import Reviews from '@/components/funnel/Reviews'
import CTA from '@/components/funnel/CTA'
import Footer from '@/components/funnel/Footer'

export default function AuditFunnel() {
  return (
    <main className="bg-[#FAFBFC] min-h-screen overflow-x-hidden">
      {/* ================================
          PART 1: THE AUDIT
          ================================ */}
      <Hero />
      <Problems />
      <GeographicCoverage />
      <SEOProblems />
      <LeakyFunnel />
      <BlogProblem />
      
      {/* ================================
          TRANSITION
          ================================ */}
      <Transition />
      
      {/* ================================
          PART 2: THE VISION & PROOF
          ================================ */}
      <WebsiteVision />
      <SolaFlowPreview />
      <BlogShowcase />
      <HaloCaseStudy />
      
      {/* ================================
          PART 3: THE ROADMAP
          ================================ */}
      <WebsiteRoadmap />
      
      {/* ================================
          PART 4: THE OFFER
          ================================ */}
      <Investment />
      <FAQ />
      <NextSteps />
      
      {/* ================================
          PART 5: TRUST & CLOSE
          ================================ */}
      <Reviews />
      <CTA />
      <Footer />
    </main>
  )
}
