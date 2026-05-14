/**
 * ETOTO Media — content & data for the SolarWatt proposal microsite.
 *
 * Drop this file into lib/etoto-data.ts and import wherever needed.
 * Single source of truth for ETOTO's stats, case studies, awards, and
 * the client portfolio used in the proof sections.
 */

export type Technology = "solar" | "air-source" | "air-con"

/* ---------- ETOTO portfolio stats ---------- */
export const ETOTO_STATS = {
  asOfDate: "2026-05-01",
  totalSalesGenerated: 200_000_000, // £200M+ since 2023
  installersWorkedWith: 200, // 200+
  monthlyPortfolioSales: 6_000_000, // £6M+/month across portfolio
  avgCostPerSale: 500, // sub £500 avg CPS
  avgMonthlySalesUplift: 12, // 12+ sales / month per client
  proofPoints: {
    installedCapacityMWp: 108, // 108 MWp delivered
    annualGenerationGWh: 102.6, // 102.6 GWh / year
    co2OffsetTonnes: 23_700, // 23,700 tonnes CO₂ offset
  },
} as const

/* ---------- 2026 awards ---------- */
export const ETOTO_AWARDS = [
  {
    year: 2026,
    title: "Business Development Director of the Year",
    ceremony: "South East Energy Efficiency Awards 2026",
    recipient: "Keilan James-Devereux, Co-Founder",
  },
  {
    year: 2026,
    title: "Highly Commended — Energy Consultancy of the Year",
    ceremony: "South East Energy Efficiency Awards 2026",
    recipient: "ETOTO Media",
  },
] as const

/* ---------- Case study videos (YouTube) + featured stats ---------- */
export interface CaseStudy {
  id: string
  client: string
  headline: string
  thumbnail?: string // path inside /public
  youtubeId?: string // YouTube video ID
  technologies: Technology[]
  metrics?: { label: string; value: string }[]
  featured?: boolean
}

export const ETOTO_CASE_STUDIES: CaseStudy[] = [
  {
    id: "halo",
    client: "Halo Renewables",
    headline: "67 deals closed in a single month",
    thumbnail: "/case-studies/halo-renewables.png",
    youtubeId: "cIuNH45hxVg",
    technologies: ["solar"],
    metrics: [{ label: "Deals / month", value: "67" }],
    featured: true,
  },
  {
    id: "ab-renewables",
    client: "AB Renewables",
    headline: "£4,000,000 in sales delivered",
    thumbnail: "/case-studies/ab-renewables.png",
    youtubeId: "ipBXG6yk5KA",
    technologies: ["solar"],
    metrics: [{ label: "Total sales", value: "£4M" }],
  },
  {
    id: "jem",
    client: "JEM Energy",
    headline: "Our first solar client — still with us 2+ years later",
    thumbnail: "/case-studies/jem-energy.png",
    youtubeId: "TmYby-YVlOA",
    technologies: ["solar"],
  },
  {
    id: "genbatt",
    client: "Genbatt",
    headline: "20+ MWp of battery storage delivered",
    thumbnail: "/case-studies/genbatt.png",
    youtubeId: "PnPr8OfpfFA",
    technologies: ["solar"],
  },
  {
    id: "ups-solar",
    client: "UPS Solar",
    headline: "CPA cut 77% — £1,300 → £300 after switching agencies",
    technologies: ["solar"],
    metrics: [
      { label: "Before CPA", value: "£1,300" },
      { label: "With ETOTO", value: "£300" },
    ],
    featured: true,
  },
  {
    id: "uk-renewables",
    client: "UK Renewables",
    headline: "Scaled from 1-man-band to 3 install teams — 10–12 heat pumps / month",
    technologies: ["air-source"],
    metrics: [
      { label: "Install teams", value: "1 → 3" },
      { label: "Heat pumps / mo", value: "10–12" },
    ],
    featured: true,
  },
  {
    id: "tempest-aircon",
    client: "Hayden — Tempest Air Con",
    headline: "From 'mates laughing at the pub' to ≈£100k in AC sales in under 3 months",
    technologies: ["air-con"],
    metrics: [
      { label: "Sales", value: "≈£100k" },
      { label: "Timeframe", value: "<3 months" },
    ],
    featured: true,
  },
]

/* ---------- 12 client logos (paths inside /public) ---------- */
export const ETOTO_CLIENTS = [
  { name: "Halo Renewables", image: "/clients/halo-renewables.jpeg" },
  { name: "Project Green Energy", image: "/clients/project-green-energy.png" },
  { name: "The Solar Bureau", image: "/clients/solar-bureau.png" },
  { name: "Rollings Renewables", image: "/clients/rollings-renewables.png" },
  { name: "UPS Solar", image: "/clients/ups-solar.png" },
  { name: "Generate Solar EV", image: "/clients/generate-solar-ev.png" },
  { name: "Infinity Renewables Group", image: "/clients/infinity-renewables.png" },
  { name: "EVLM Renewables", image: "/clients/evlm-renewables.png" },
  { name: "Fore UK", image: "/clients/fore-uk.png" },
  { name: "UK Renewables", image: "/clients/uk-renewables.png" },
  { name: "Taggas", image: "/clients/taggas.png" },
  { name: "21 Degrees", image: "/clients/21-degrees.png" },
] as const

/* ---------- External assets ---------- */
export const ETOTO_LINKS = {
  videoFolder:
    "https://drive.google.com/drive/folders/1-JPXfx-5eJiB1KZ2uPpcBy2iJnszelnj?utm_source=solarwatt-proposal&utm_medium=microsite",
  webDesignPortfolio: "https://etotomedia.com/web-design/",
  bookACall: "https://calendly.com/alex-p-etotomedia/intro-alex-etoto-media",
  websiteHome: "https://etotomedia.com/",
  solaflowDemo:
    "https://vercel-solar-estimator.vercel.app?utm_source=solarwatt-proposal&utm_medium=iframe&utm_campaign=microsite",
} as const
