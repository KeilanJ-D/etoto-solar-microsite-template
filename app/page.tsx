import Hero from "@/components/hinen/Hero";
import WhatWeHeard from "@/components/hinen/WhatWeHeard";
import Headline from "@/components/hinen/Headline";
import TrackRecord from "@/components/hinen/TrackRecord";
import WhyEtoto from "@/components/hinen/WhyEtoto";
import ShapeOf90Days from "@/components/hinen/ShapeOf90Days";
import Month1Reality from "@/components/hinen/Month1Reality";
import LeverHero from "@/components/hinen/LeverHero";
import LeverHowItWorks from "@/components/hinen/LeverHowItWorks";
import HundredWinners from "@/components/hinen/HundredWinners";
import ReachArchitecture from "@/components/hinen/ReachArchitecture";
import SixNamedVoices from "@/components/hinen/SixNamedVoices";
import FourteenKOLs from "@/components/hinen/FourteenKOLs";
import PointsSystemHero from "@/components/hinen/PointsSystemHero";
import PointsEarnRedeem from "@/components/hinen/PointsEarnRedeem";
import ProductSplit from "@/components/hinen/ProductSplit";
import CRMRouting from "@/components/hinen/CRMRouting";
import CRMVisibility from "@/components/hinen/CRMVisibility";
import SolaFlowHero from "@/components/hinen/SolaFlowHero";
import LaneDefinition from "@/components/hinen/LaneDefinition";
import CommercialsOverview from "@/components/hinen/CommercialsOverview";
import QuestionsForHinen from "@/components/hinen/QuestionsForHinen";
import TheAsk from "@/components/hinen/TheAsk";
import FinalCTA from "@/components/hinen/FinalCTA";
import Footer from "@/components/hinen/Footer";

export default function HinenProposalPage() {
  return (
    <main className="bg-[#1A1A1A] min-h-screen overflow-x-hidden">
      {/* Opening */}
      <Hero />
      <WhatWeHeard />
      <Headline />

      {/* ETOTO Credibility */}
      <WhyEtoto />
      <TrackRecord />

      {/* The 90-Day Plan */}
      <ShapeOf90Days />
      <Month1Reality />

      {/* Lever 1: 100 Winners */}
      <LeverHero />
      <LeverHowItWorks />
      <HundredWinners />

      {/* Reach Architecture */}
      <ReachArchitecture />
      <SixNamedVoices />
      <FourteenKOLs />

      {/* Points System */}
      <PointsSystemHero />
      <PointsEarnRedeem />

      {/* Product & CRM */}
      <ProductSplit />
      <CRMRouting />
      <CRMVisibility />

      {/* Platform */}
      <SolaFlowHero />
      <LaneDefinition />

      {/* Commercials & Close */}
      <CommercialsOverview />
      <QuestionsForHinen />
      <TheAsk />
      <FinalCTA />
      <Footer />
    </main>
  );
}
