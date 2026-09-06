# Sunward growth battle plan

## North-star funnel

`qualified visit → Studio start → property/quiz complete → roof design → system selected → quote created → qualified acceptance / consultation`

Primary KPI: **quote creation rate from qualified sessions**.
Secondary KPIs: Studio-start rate, property/quiz completion, design completion, quote-start rate, qualified acceptance, CAC by source, return/resume rate, mobile completion rate.
Guardrails: no fake urgency, no fake savings, no fake reviews, no hidden pricing, no indexation of thin/automated local pages, no binding acceptance before approved pricebook/contracts.

## Highest leverage — execute first

1. **Make Studio the product, not a side tool**
   - Every meaningful content route offers `Design my system` and a secondary `See the numbers` path.
   - Preserve UTM / click IDs through the session.
   - Give returning users a resume path.
   - Keep a live system/price summary visible through Studio.

2. **Instrument the whole journey**
   - page_view
   - engaged_cta_shown
   - internal_click
   - studio_step_view / studio_step_change
   - property_lookup_focus / submit
   - manual_property_selected
   - roof_autofill / roof_clear
   - system_change
   - quote_primary_action
   - web_vitals
   These currently push to `dataLayer`, a local diagnostic log, and can optionally beacon to a first-party endpoint when configured.

3. **Reduce uncertainty at each decision**
   - Intent-aware coaching through every Studio stage.
   - Product-fit labels based on the user's answers, framed as a fit rather than a universal ranking.
   - Honest survey / geometry / tariff caveats at the moment they matter.
   - Itemised quote and easy edit-back rather than a dead-end form.

4. **Mobile completion first**
   - Persistent mobile Studio navigation.
   - Sticky CTA sits above mobile nav.
   - Minimum 40–44px tap targets for added controls.
   - No heavyweight 3D framework dependency.

5. **Performance budget**
   - Dependency-free growth layer.
   - Lazy/decode non-critical images.
   - content-visibility on long sections where supported.
   - reduced-motion support.
   - real-user LCP / CLS / INP measurement ready.
   Target: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at p75 once production telemetry is connected.

## Medium leverage

1. **Search intent architecture**
   - Core commercial pages: solar PV, battery storage, solar + battery, tariffs, product pages.
   - Studio is the conversion destination, not an SEO doorway.
   - Local pages remain drafts/noindex until they contain genuine local evidence and are reviewed.
   - Avoid generating near-duplicate postcode/town pages purely to rank.

2. **Internal-link system**
   - Content pages offer four meaningful next actions: design, economics, batteries, local coverage.
   - Commercial pages should link down-funnel into Studio and laterally to relevant explanations.

3. **Trust architecture**
   - Product-source links.
   - Clearly labelled assumptions and model confidence.
   - No testimonials/review counts until real verified data exists.
   - Publish methodology, quote assumptions, privacy, complaints and installer standards before launch.

4. **Acquisition landing strategy**
   - Paid search/social should deep-link to Studio with the source and campaign preserved.
   - Creative should sell the outcome: `see your roof + choose your battery + see your price`, not generic “free quote”.
   - Build distinct campaign messages for solar-first, battery-first, EV/heat-pump households and tariff optimisers; use one product experience underneath.

5. **Retention / remarketing readiness**
   - Local device resume now.
   - Later: consented email save-and-resume link, quote expiry nudges, abandoned-design sequences and product-change alerts.

## Lower leverage / polish

- Consistent spacing, radii, typography and button hierarchy.
- Better empty/error/loading states.
- Keyboard/focus and reduced-motion QA.
- OpenGraph/social imagery per major route.
- Favicon/app icon polish.
- Print-friendly quote.
- Product microcopy and comparison-table refinement.
- Breadcrumbs where they genuinely help navigation.
- Image alt text and dimensions.
- 404 / 500 recovery paths into Studio.

## SEO launch checklist

- Production robots/indexing enabled only after QA.
- Canonicals use the final production domain.
- XML sitemap contains only canonical, indexable pages.
- Local draft pages excluded until reviewed.
- Organization / WebSite / Breadcrumb structured data only where accurate; no fabricated review schema.
- Unique title, H1, description and useful main content per indexable route.
- Search Console + Bing Webmaster Tools connected.
- Core Web Vitals monitored by template/page type.

## Acquisition experiments, in order

A. Homepage CTA: `Find my solar potential` vs `Design my system`.
B. Studio entry: postcode first vs goals first.
C. Quote CTA: `See my quote` vs `Price this design`.
D. Product chooser: user-fit recommendation present vs absent.
E. Paid creative: interactive-design promise vs savings promise.
F. Save/resume capture after design vs after quote.

Decision rule: one meaningful change per experiment, segment mobile/desktop and acquisition source, optimise for completed quotes/qualified acceptance rather than raw button clicks.
