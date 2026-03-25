import { createWriteStream, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import archiver from 'archiver';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const blogs = [
  {
    filename: '01-solar-panels-leicester-2026.md',
    content: `# Solar Panels Leicester: Costs, Savings & What to Expect in 2026

*By Energy Concerns | March 2026 | 4 min read*

If you're a homeowner in Leicester or Leicestershire thinking about solar panels, the first question is always the same: how much will it actually cost, and what will I save?

Here's an honest breakdown from a local installer who does this every day.

## What Solar Panels Cost in Leicester in 2026

A fully installed residential solar panel system in Leicester typically costs between £5,500 and £12,000, depending on the system size and whether you include battery storage.

| System | Panels | Cost (installed) | Best For |
|---|---|---|---|
| 3 kW | ~7 panels | £5,500–£6,500 | 2-bed, low usage |
| 4 kW | ~9 panels | £6,500–£8,000 | 3-bed semi (most common) |
| 5 kW | ~11 panels | £8,000–£9,500 | 4-bed, higher usage |
| 5 kW + battery | ~11 panels + 5.7kWh | £9,500–£12,000 | Maximum self-consumption |

These prices include everything: panels, inverter, mounting, electrical work, scaffolding (if needed), MCS certification, and commissioning. VAT is 0% on residential solar installations through March 2027.

## What You'll Actually Save

Leicester receives approximately 1,100–1,300 sunshine hours per year — above the UK average, and more than enough to make solar a strong investment. A south-facing 4 kW system in Leicester generates roughly 3,700 kWh annually.

At current electricity prices (around 25p/kWh under the Ofgem cap), with a typical 40% self-consumption rate and Smart Export Guarantee payments of 12–15p/kWh, a 4 kW system saves approximately £600–£800 per year.

With battery storage, self-consumption jumps to 70–80%, and annual savings rise to £800–£1,100. Payback period for most Leicester homes: 7–10 years, with 15–20 years of near-free electricity remaining under warranty.

## Why Leicester Is Better for Solar Than You Think

The East Midlands receives more sunshine than the UK average. Leicester typically gets more solar hours than Manchester, Leeds, or Glasgow. Modern panels work on daylight, not direct sunshine — they generate electricity on cloudy days too, just at reduced output.

The typical 3-bed semi in Leicester suburbs like Oadby, Wigston, Braunstone, or Birstall has a pitched roof with enough space for a 4–5 kW system. That's the sweet spot for most families.

## The 0% VAT Window

Residential solar installations currently carry 0% VAT. This is scheduled to end in March 2027, at which point VAT will return to 5%. On a £10,000 system, that's a £500 saving you'll lose if you wait.

Combined with Smart Export Guarantee payments (you get paid for electricity you export to the grid) and falling panel prices, 2026 is genuinely one of the strongest financial cases for solar in Leicester.

## What to Look For in a Leicester Installer

Check for MCS certification — it's mandatory for accessing SEG payments. Look for RECC membership (the Renewable Energy Consumer Code), which means the installer follows strict consumer protection standards. Additional accreditations like NAPIT, Trustmark, and City & Guilds indicate electrical competence and government-endorsed quality.

At Energy Concerns, we hold all five. We're based in Leicester, we've been installing solar across Leicestershire and Nottinghamshire for years, and we're not going anywhere when you need warranty support.

**Get a free, no-obligation quote** — call us on 07702 499623 or use our online solar calculator to see what a system would cost for your home.

---

*Energy Concerns Ltd is an MCS-certified solar installer based in Leicester, serving residential and commercial clients across Leicestershire and Nottinghamshire.*`
  },
  {
    filename: '02-fox-ess-ep12-review.md',
    content: `# Fox ESS EP12 Review: An Installer's Honest Assessment

*By Energy Concerns | March 2026 | 4 min read*

We install Fox ESS batteries every week. The EP12 is our go-to recommendation for homeowners who want serious storage capacity without the premium price tag of Tesla or Sigenergy. Here's what we actually think after fitting dozens of them.

## What Is the Fox ESS EP12?

The EP12 is an 11.52 kWh high-voltage lithium iron phosphate (LiFePO4) battery designed for residential solar systems. It pairs with Fox ESS hybrid inverters and stores surplus solar energy for use in the evening when electricity rates are highest.

Key specifications: 11.52 kWh usable capacity, LiFePO4 chemistry (the safest available), 6,000+ cycle life (roughly 16 years of daily cycling), IP65 rated (can be installed in a garage or outside), 10-year warranty, and a built-in self-heating element for UK winters.

That last point matters more than most people realise. LiFePO4 batteries lose charging efficiency in cold temperatures. The EP12's integrated heater means it maintains performance even in an unheated garage in January — a genuine advantage for UK installations.

## What We Like

**Value for money.** At the price point we install these, the EP12 offers more usable storage per pound than almost anything else on the market. You're getting 11.52 kWh of genuine, usable capacity.

**LiFePO4 chemistry.** No thermal runaway risk. No cobalt. No concerns about indoor installation safety. We're comfortable fitting these in garages, utility rooms, and even lofts where ventilation is limited.

**The self-heating element.** Fox ESS thought about UK conditions when they designed this. The battery maintains its own operating temperature, which means consistent performance year-round — not just in summer.

**Modular expansion.** If you start with one EP12 and want more storage later, you can add a second unit without replacing the inverter. Straightforward expansion path.

## What Could Be Better

**The monitoring app.** Fox ESS's monitoring platform works, but it's not as polished as GivEnergy's or Tesla's. Data updates every 5 minutes rather than real-time, and the interface feels dated. It does the job — it just doesn't delight.

**Firmware updates.** Occasional firmware updates can cause temporary glitches. Nothing serious in our experience, but GivEnergy handles over-the-air updates more smoothly.

**Aesthetics.** It's a functional-looking white box. Not ugly, but not the design statement that a Tesla Powerwall or Sigenergy SigenStor makes on your wall. If you care about how your battery looks, this isn't the showpiece option.

## EP12 vs the Competition

Compared to GivEnergy's 9.5 kWh battery, the EP12 offers more storage at a similar price point. GivEnergy wins on app quality and Octopus tariff integration, but the EP12 wins on raw capacity and the self-heating feature.

Compared to Tesla Powerwall 3, the EP12 is roughly half the price for similar capacity. Tesla wins on brand recognition and the all-in-one design, but Fox ESS gives you more flexibility and better value.

Compared to Sigenergy's SigenStor, the EP12 is a standalone battery, not a 5-in-1 system. Sigenergy offers deeper integration (built-in EV charger, 100% depth of discharge, 10,000+ cycles), but at a higher price. If you want an all-in-one energy hub, Sigenergy wins. If you want excellent battery storage at a competitive price, Fox ESS is the smarter choice.

## Who Should Choose the EP12?

The EP12 is ideal if you want substantial battery storage without the premium of Tesla or Sigenergy, you have a garage or utility room for installation, you want LiFePO4 safety and longevity, and you value function over form.

It's less ideal if you're obsessed with app quality, you want a design statement on your wall, or you need an integrated EV charging solution (in which case, look at Sigenergy).

## Our Recommendation

For most Leicester and Leicestershire homeowners adding battery storage to a solar system, the Fox ESS EP12 is the sweet spot of capacity, reliability, and value. We install it more than any other battery — and our customers consistently report excellent performance.

**Want to discuss whether the EP12 is right for your home?** Get in touch for a free consultation.

---

*Energy Concerns Ltd installs Fox ESS battery systems across Leicester and Nottinghamshire. MCS certified, NAPIT registered.*`
  },
  {
    filename: '03-solar-ev-charger-leicester.md',
    content: `# Solar Panels and EV Chargers Together: The Complete Leicester Guide

*By Energy Concerns | March 2026 | 4 min read*

If you've got an electric car — or you're planning to get one — combining solar panels with an EV charger is one of the smartest energy investments you can make. At Energy Concerns, we install both, and we see the savings firsthand. Here's how it works.

## Why Solar + EV Is a No-Brainer

The average UK household spends £600–£900 per year charging an EV from the grid. With solar panels, you can charge your car for free during daylight hours — or store surplus solar in a battery and charge overnight from stored energy rather than grid electricity.

Even on days when solar generation is low, smart tariffs like Intelligent Octopus Go offer overnight rates of just 8p/kWh. Compare that to the standard 25p/kWh day rate and the maths speaks for itself.

A typical Leicester household with a 4 kW solar system, a 5.7 kWh battery, and an EV charger can reduce their combined electricity and fuel costs by £1,500–£2,000 per year compared to grid electricity and petrol.

## Which EV Charger Works Best with Solar?

The most popular solar-compatible EV charger in the UK is the myenergi Zappi. It can automatically divert surplus solar energy to your car, so you charge from free sunshine rather than paying for grid electricity. When there's no solar available, it charges normally.

Other options include the Ohme Home Pro (works well with Octopus smart tariffs), the Hypervolt (clean design, app-controlled), and Sigenergy's built-in DC charger — which is integrated directly into their SigenStor battery system, eliminating the need for a separate wall-mounted charger entirely.

## How the System Works Together

During the day, your solar panels generate electricity. Your home uses what it needs. Surplus goes to your battery or your EV charger — whichever you prioritise. Any remaining excess gets exported to the grid and you're paid via the Smart Export Guarantee (currently 12–15p/kWh depending on supplier).

In the evening, your battery powers the house while your EV charges at cheap overnight rates. The result: you're almost never buying electricity at the full daytime rate.

With a smart setup, your energy management system decides the most cost-effective route for every kilowatt-hour automatically. No manual intervention needed.

## The Cost of Installing Both

If you're installing solar and an EV charger at the same time, here's a realistic breakdown for a Leicester home:

| Component | Typical Cost |
|---|---|
| 4 kW solar system (9 panels) | £6,500–£8,000 |
| Fox ESS EP6 battery (5.76 kWh) | £2,500–£3,500 |
| EV charger (Zappi or similar) | £800–£1,200 installed |
| **Total** | **£9,800–£12,700** |

Solar and battery carry 0% VAT through March 2027. EV chargers are subject to 5% VAT when installed alongside energy-saving works.

## Planning Permission and Regulations

You don't need planning permission for a standard EV charger installation in Leicester, provided the charger doesn't face a highway and has an automatic disconnection device. Solar panels are also permitted development in most cases.

All EV charger installations must comply with the IET Wiring Regulations (BS 7671) and should be carried out by a qualified, registered electrician. At Energy Concerns, we're NAPIT registered and City & Guilds qualified — your installation will be compliant and certified.

## Why Get Both from the Same Installer?

When one company handles your solar, battery, and EV charger, the whole system is designed to work together. Separate installers mean separate systems that may not communicate properly, and finger-pointing when something doesn't work as expected.

We design the complete energy system as a single package: panels, battery, charger, and energy management — all configured to minimise your costs and maximise your self-consumption.

**Thinking about solar and an EV charger?** Call Energy Concerns for a free site assessment covering both — we'll design a system that powers your home and your car.

---

*Energy Concerns Ltd installs solar panels, battery storage, and EV chargers across Leicester and Nottinghamshire.*`
  },
  {
    filename: '04-best-solar-battery-2026.md',
    content: `# Best Solar Battery 2026: Fox ESS vs Sigenergy vs GivEnergy vs Tesla

*By Energy Concerns | March 2026 | 4 min read*

Choosing a solar battery in 2026 means navigating a crowded market. Four brands dominate the conversation in the UK: Fox ESS, Sigenergy, GivEnergy, and Tesla. We install Fox ESS and Sigenergy — but we'll give you an honest comparison of all four so you can make an informed decision.

## The Quick Comparison

| Feature | Fox ESS EP12 | Sigenergy SigenStor | GivEnergy 9.5 | Tesla Powerwall 3 |
|---|---|---|---|---|
| Capacity | 11.52 kWh | 4.8–38.4 kWh (modular) | 9.5 kWh | 13.5 kWh |
| Chemistry | LiFePO4 | LiFePO4 | LiFePO4 | LiFePO4 |
| Cycle Life | 6,000+ | 10,000+ | 6,000+ | ~5,000 |
| Depth of Discharge | 90% | 100% | 100% | 100% |
| Built-in EV Charger | No | Yes (DC, up to 25kW) | No | No |
| Backup Power | With add-on | Yes (0ms switchover) | With add-on | Yes |
| IP Rating | IP65 | IP66 | IP65 | IP67 |
| Warranty | 10 years | 10 years (ext. to 15) | 12 years | 10 years |
| Price Range | ££ | £££ | ££ | £££ |
| App Quality | Functional | Good | Excellent | Good |

## Fox ESS: Best Value

The EP12 gives you 11.52 kWh of storage at a price that undercuts the competition. LiFePO4 chemistry with a self-heating element for UK winters. The monitoring app isn't the prettiest, but the hardware is solid and the value per kWh of storage is hard to beat. Best for homeowners who want maximum storage without breaking the budget.

## Sigenergy: Best All-in-One

The SigenStor is genuinely different — a 5-in-1 system that combines solar inverter, battery, EV DC charger, power conversion, and energy management in one unit. If you have an EV or plan to get one, Sigenergy eliminates the need for a separate charger. It offers 100% depth of discharge (you use every kWh you store) and 10,000+ cycle life. The premium price buys genuine integration that no competitor matches.

## GivEnergy: Best App Experience

GivEnergy has built a loyal following in the UK largely because of its excellent monitoring app and seamless integration with Octopus energy tariffs. The 9.5 kWh battery is well-built and the 12-year warranty is the longest standard offering in this comparison. The trade-off: smaller capacity than Fox ESS or Tesla at a similar price point.

## Tesla Powerwall 3: Best Brand

Tesla's brand recognition is unmatched. The Powerwall 3 integrates a solar inverter and 13.5 kWh of storage in a sleek unit. It looks good, works well, and the Tesla name carries weight when you sell your house. The downsides: it's expensive for the capacity, has the shortest estimated cycle life in this comparison, and Tesla's UK support infrastructure isn't always responsive.

## Our Recommendation

For most Leicester homeowners on a budget, the Fox ESS EP12 gives you the most storage for your money. If you want the ultimate integrated system with EV charging built in, Sigenergy is worth the premium. GivEnergy is the safe bet with the best app experience. Tesla is the brand play — you're paying for the name as much as the technology.

We install Fox ESS and Sigenergy because we believe they offer the best combination of value, performance, and reliability for UK homes. But the right battery depends on your priorities — and we're happy to talk through the options.

**Book a free battery consultation** with Energy Concerns to discuss which system suits your home and usage patterns.

---

*Energy Concerns Ltd is an MCS-certified installer of Fox ESS and Sigenergy battery systems, based in Leicester.*`
  },
  {
    filename: '05-uk-solar-grants-2026.md',
    content: `# UK Solar Panel Grants & Funding in 2026: What's Actually Available

*By Energy Concerns | March 2026 | 4 min read*

"Can I get a grant for solar panels?" It's one of the most common questions we hear. The honest answer in 2026 is: there's no universal free solar panel grant for everyone, but there are several financial incentives that significantly reduce the cost. Here's exactly what's available.

## 0% VAT — The Biggest Saving Right Now

The single most impactful incentive is the 0% VAT rate on residential solar panel and battery storage installations. This has been in place since April 2022 and runs through March 2027. On a typical £8,000 system, you're saving £400 compared to the normal 5% rate — or £1,600 compared to the standard 20% rate.

This applies to both supply and installation when done by an MCS-certified installer. It also covers battery storage retrofits (added since February 2024). But it does not cover standalone EV charger installations — those are subject to 5% VAT when installed alongside energy-saving measures, or 20% standalone.

The key date: 31 March 2027. After that, VAT returns to 5%. If you're considering solar, this deadline matters.

## Smart Export Guarantee (SEG)

Once your solar panels are installed, you can earn money by exporting surplus electricity to the grid. Under the Smart Export Guarantee, your energy supplier pays you for every unit you export.

The best fixed rates in 2026: Ecotricity at 16p/kWh, Good Energy and British Gas at around 15p/kWh. If you have a battery and use Octopus Flux, you can earn up to 29p/kWh during peak hours (4–7pm) by exporting stored energy when it's most valuable.

For a typical 4 kW system without a battery, expect £150–£350 per year in export income. With a battery on a smart tariff, this can rise to £400–£600.

You need a smart meter and MCS certification to access SEG payments.

## Warm Homes: Local Grant (Leicestershire)

Leicestershire County Council runs the Warm Homes: Local Grant scheme, offering fully funded solar panels, insulation, and heat pumps for eligible homeowners. To qualify, your household income must be under £36,000 and your home must have an EPC rating of D–G.

The scheme is currently paused due to high demand, but Year 2 funding may reopen from April 2026. If you think you qualify, register your interest with the council now.

A similar scheme operates in Nottinghamshire, with nearly £18 million secured across eight councils for energy efficiency improvements including free solar panels.

## The Warm Homes Plan

The government's flagship Warm Homes Plan (backed by £15 billion in funding) aims to upgrade 5 million homes by 2030. Consumer loans at zero or low interest rates for solar panels and batteries are expected to launch around 2027 — available to all households regardless of income.

This isn't available yet, but it's worth knowing about. If you can't afford the full upfront cost, interest-free finance options are already available through many installers, including us.

## What About ECO4?

The ECO4 scheme ended on 31 March 2026 and will not be extended. A successor scheme (ECO5) is expected but details remain pending. ECO4 provided free solar panels to qualifying low-income households through energy supplier funding.

## The Bottom Line for Leicester Homeowners

There's no "free solar panels for everyone" grant in 2026. But the combination of 0% VAT (saving £400–£1,600), SEG income (£150–£600/year), potential council funding (if eligible), and upcoming government loans means the financial case for solar has never been stronger.

**Want to know exactly what you'd pay after all incentives?** Use our online solar calculator or call us for a free quote.

---

*Energy Concerns Ltd is MCS certified and can help you access all available financial incentives. Based in Leicester, serving Leicestershire and Nottinghamshire.*`
  },
  {
    filename: '06-sigenergy-battery-review.md',
    content: `# Sigenergy Battery Review: Is the 5-in-1 System Worth It?

*By Energy Concerns | March 2026 | 4 min read*

Sigenergy is the newest name in UK solar batteries — and the most ambitious. Their SigenStor isn't just a battery. It's a 5-in-1 energy hub that combines your solar inverter, battery storage, EV charger, power conversion, and energy management system into a single wall-mounted unit. We install them. Here's our honest take.

## What Makes Sigenergy Different

Every other battery on the market does one job: store electricity. The SigenStor does five jobs. That's not marketing — it's genuinely different engineering. You get a hybrid solar inverter, battery management, a DC EV charger capable of up to 25kW (faster than most home AC chargers), an energy management system that optimises your tariff automatically, and backup power with essentially instant switchover.

One unit. One installation. One app. If you're planning solar, battery, and an EV charger — Sigenergy replaces three separate purchases with one.

## The Specs That Matter

Battery capacity scales from 4.8 kWh to 38.4 kWh in modular increments. Chemistry is LiFePO4 — the safest and most durable option. Cycle life is rated at 10,000+ cycles, which is significantly higher than Fox ESS (6,000+) or Tesla (~5,000). Depth of discharge is 100% — meaning every kWh of rated capacity is genuinely usable. IP66 weather rating means outdoor installation is fine.

The backup power switchover is rated at 0 milliseconds. During a grid outage, your lights don't even flicker.

## What We Like

The EV charger integration is the standout feature. Most homeowners who want solar, a battery, and an EV charger end up buying three separate products from potentially three different brands, wired together by an electrician hoping they'll communicate properly. Sigenergy gives you all three engineered as a single system. Less wiring, fewer failure points, cleaner installation.

The 100% depth of discharge matters more than people realise. If a battery is rated at 10 kWh but only allows 90% discharge, you actually have 9 kWh. With Sigenergy, 10 kWh means 10 kWh.

The app and energy management are genuinely smart. The system learns your usage patterns and optimises when to charge, discharge, and export based on your specific energy tariff. On Octopus Flux or Agile, this translates into real money saved.

## What You Should Know

Sigenergy is a young company, founded in 2022. They've grown rapidly and the technology is proven, but they don't have the decade-long UK track record of Fox ESS or GivEnergy. We're confident in the product based on our installation experience, but it's fair to acknowledge the brand is newer.

The price is higher than a standalone Fox ESS battery. If you don't need an EV charger and want the cheapest storage possible, Fox ESS is better value. Sigenergy's premium is justified when you factor in the EV charger and integrated inverter — but only if you'll actually use those features.

The ecosystem is relatively closed. Sigenergy works best as a complete system. If you want to mix and match components from different manufacturers, it's not the most flexible choice.

## Who Should Choose Sigenergy?

Sigenergy is the right choice if you want a clean, integrated system that handles solar, battery, and EV charging in one unit. It's particularly powerful for EV owners on smart tariffs — the combination of solar generation, battery arbitrage, and intelligent EV charging can dramatically reduce your total energy and transport costs.

It's less ideal if budget is the primary concern, if you don't have an EV, or if you specifically prefer the GivEnergy or Tesla ecosystem.

## Our Verdict

For homeowners who want the most complete, future-proof energy system available in the UK, Sigenergy is the best option on the market. It costs more upfront, but it replaces multiple products and delivers genuine integration that no competitor matches.

**Interested in Sigenergy?** Contact Energy Concerns for a consultation — we'll help you decide whether the SigenStor or a Fox ESS setup is the better fit.

---

*Energy Concerns Ltd installs Sigenergy and Fox ESS systems across Leicester and Nottinghamshire.*`
  },
  {
    filename: '07-solar-worth-it-leicester.md',
    content: `# Are Solar Panels Worth It in Leicester? Real Savings from East Midlands Homes

*By Energy Concerns | March 2026 | 4 min read*

"Will I actually save money?" It's the question every Leicester homeowner asks before committing to solar. The answer, based on current electricity prices, local sunshine data, and real installation costs: yes. Here's the maths.

## Leicester's Solar Advantage

The East Midlands receives above-average solar irradiance for the UK. Nottingham logs approximately 1,499 sunshine hours annually, and Leicester is comparable. That's more than Manchester, Leeds, Birmingham, or Glasgow.

A south-facing 4 kW system in Leicester generates roughly 3,600–3,800 kWh per year. East-west facing roofs generate about 85% of that — still very productive.

The typical 3-bed semi-detached house in Leicester — whether you're in Oadby, Braunstone, Wigston, or Birstall — has more than enough roof space for a 4–5 kW system.

## The Savings Breakdown

Using current figures (Ofgem cap at 24.67p/kWh from April 2026, Octopus SEG at 12p/kWh export):

**Solar panels only (4 kW, no battery):**
Self-consumption at 40%: 1,480 kWh × 24.67p = £365 saved
Export at 60%: 2,220 kWh × 12p = £266 earned
Total annual benefit: ~£631
System cost: ~£7,000
Payback: ~11 years

**Solar + Fox ESS EP6 battery (5.76 kWh):**
Self-consumption at 75%: 2,775 kWh × 24.67p = £685 saved
Export at 25%: 925 kWh × 12p = £111 earned
Tariff arbitrage savings: ~£180/year
Total annual benefit: ~£976
System cost: ~£9,500
Payback: ~9.7 years

**With smart tariff (Octopus Flux) + battery:**
Peak export (4–7pm) at 29p/kWh adds significant value
Battery charges at off-peak (8p/kWh), discharges at peak
Additional annual saving: £200–£400
Total annual benefit: ~£1,200–£1,400
Payback: ~7–8 years

After payback, you're generating free electricity for 15–20 more years under panel warranty. At current rates, that's £12,000–£25,000 in lifetime savings.

## But What About Cloudy Days?

This is the most common concern we hear in Leicester. Modern solar panels generate electricity from daylight, not direct sunshine. On a heavily overcast day, output drops to roughly 10–25% of peak — but it doesn't stop.

Over a full year, the cloudy days are already factored into the generation estimates above. The 3,700 kWh annual figure accounts for Leicester's actual weather patterns, including every grey January day.

Winter output is lower (roughly 10–15% of annual total in December/January), but with a battery and a smart tariff, winter economics actually improve — you charge cheap overnight and use stored energy during expensive peak hours regardless of solar generation.

## The Electricity Price Factor

Here's what makes solar particularly compelling right now: electricity prices have roughly doubled in the past five years and show no sign of returning to pre-2022 levels. Every year that unit rates increase, your solar savings increase proportionally. Your system generates the same amount of electricity regardless of what the grid charges — so rising prices make your investment more valuable over time.

The people who installed solar five years ago are saving significantly more per year now than they were when they installed. The same will be true for panels installed in 2026 when electricity inevitably costs more in 2031.

## The Honest Answer

For a Leicester homeowner with a suitable roof, current electricity prices, and a 10+ year timeline, solar panels are one of the strongest investments available. The payback period is reasonable, the lifetime savings are substantial, and the 0% VAT window through March 2027 makes 2026 a particularly good year to act.

The only scenario where solar doesn't make sense: if you're planning to move within 3–5 years, have a heavily shaded or north-facing roof, or genuinely can't afford the upfront cost (though finance options exist).

**Find out what you'd save** — use our online solar calculator or book a free site survey.

---

*Energy Concerns Ltd — Leicester's local solar installer. MCS certified, RECC, NAPIT, Trustmark, City & Guilds.*`
  },
  {
    filename: '08-aiko-475w-panel-review.md',
    content: `# AIKO 475W Solar Panel Review: Why We Install Them

*By Energy Concerns | March 2026 | 4 min read*

Most solar installers in Leicester use the same handful of panel brands — Trina, Longi, JA Solar, Jinko. They're solid, reliable panels. But at Energy Concerns, we've chosen to install AIKO Neostar 475W panels as our primary offering. Here's why.

## What Makes AIKO Different

AIKO produces All Back Contact (ABC) N-type solar panels. In plain English: the electrical contacts that normally sit on the front of the cell — those thin silver lines you can see on most panels — are moved entirely to the back. This means zero front-side shading, higher energy yield, and a clean all-black appearance.

The Neostar 475W achieves 23.8% cell efficiency — the highest in its residential class. For comparison, a typical Trina Vertex panel achieves around 22%. That might sound like a small difference, but over 25 years across 9–12 panels, it translates to thousands of additional kilowatt-hours generated.

## The Specs

Each panel delivers 475W of power from 54 half-cut N-type ABC cells. Weight is 20.6kg — standard for a panel this size. The temperature coefficient is -0.28%/°C, which means better performance in cool UK weather compared to most competitors. AIKO backs each panel with a 12-year product warranty and a 30-year performance guarantee.

One technical advantage worth highlighting: AIKO's cell-level partial shade optimisation. If one corner of a panel is shaded (by a chimney, tree branch, or dormer window), the rest of the panel continues generating at full capacity. Most conventional panels lose disproportionate output from even small areas of shading. For UK roofs with chimneys and nearby trees, this is a genuine practical advantage.

## Why 475W Matters for Leicester Homes

Most Leicester semi-detached homes have limited south-facing roof space. With 475W panels, you need fewer panels to achieve the same system size. A 4.275 kW system requires just 9 AIKO panels — whereas you'd need 10–11 standard 400W panels for similar output.

Fewer panels means less roof coverage, simpler installation, lower mounting hardware costs, and a cleaner visual result. For terraced houses in central Leicester or Edwardian semis in Stoneygate, where roof space is constrained, this efficiency advantage is especially valuable.

## AIKO vs Other Brands

Compared to Trina Vertex S+ (435W, 22.3% efficiency, 25-year warranty), AIKO offers higher output per panel, longer warranty, and better shade performance. Trina is cheaper per panel — but you need more of them.

Compared to Jinko Tiger Neo (440W, 22.5% efficiency, 25-year warranty), the gap narrows. Jinko is an excellent panel. AIKO's advantages are the ABC technology (better shade handling), the all-black aesthetic, and the 30-year guarantee.

Compared to Canadian Solar (420W, 22% efficiency, 25-year warranty), AIKO is a clear step up in both performance and warranty. The price premium is modest relative to the efficiency gain.

## The All-Black Aesthetic

This matters more than the industry admits. Solar panels are on your roof for 25–30 years. AIKO's all-black, gridline-free design is the best-looking residential panel available. No visible silver lines, no blue tint — just clean black rectangles. On a slate or dark-tiled roof, they blend in beautifully.

For homeowners in Leicester conservation areas (New Walk, Stoneygate, Clarendon Park), where visual appearance of any external modification is scrutinised, AIKO panels present the most sympathetic aesthetic option.

## Our Experience

We've installed AIKO panels across dozens of Leicester and Leicestershire homes. Customer feedback is consistently positive — particularly around the shade performance (many Leicester homes have chimney stacks creating partial shade) and the visual appearance.

The only downside: AIKO is a relatively new brand in the UK market. They don't have the household name recognition of Trina or Jinko. But the technology is proven, the warranty is the longest available, and the performance data speaks for itself.

**Want to see AIKO panels on a local installation?** Get in touch and we'll arrange a visit.

---

*Energy Concerns Ltd installs AIKO Neostar solar panels across Leicester and Nottinghamshire.*`
  },
  {
    filename: '09-seg-rates-2026.md',
    content: `# Smart Export Guarantee Rates 2026: How to Earn the Most from Solar

*By Energy Concerns | March 2026 | 4 min read*

Once your solar panels are installed, you can earn money by selling surplus electricity back to the grid. The Smart Export Guarantee (SEG) makes this possible — but the rate you get varies enormously depending on which supplier you're with. The difference between the best and worst tariff can be over £400 per year. Here's how to maximise your earnings.

## How the SEG Works

When your solar panels produce more electricity than your home is using, the surplus is exported to the national grid through your smart meter. Under the SEG, your energy supplier is legally required to pay you for this exported electricity.

You need two things to qualify: an MCS-certified solar installation (Energy Concerns is MCS certified — your installation will qualify automatically) and a smart meter capable of recording exports.

## The Best SEG Rates in 2026

Rates change regularly, but as of March 2026:

**Best fixed-rate tariffs (you need to be their customer):**
- Ecotricity Smart Export: 16p/kWh
- Good Energy Solar Savings: 15.1p/kWh
- British Gas Export and Earn Plus: 15p/kWh
- Octopus Outgoing Fixed: 12p/kWh (dropped from 15p in March)

**Best time-of-use tariffs (requires battery):**
- Intelligent Octopus Flux: up to 32.17p/kWh during 4–7pm peak
- Standard Octopus Flux: up to 29.32p/kWh peak
- These pay you more for exporting during high-demand hours

**Best open tariffs (no supplier switching needed):**
- E.ON Next Flex Export: 6p/kWh
- ScottishPower SmartGen: 6p/kWh
- Pozitive Energy: 5p/kWh

The gap between 16p/kWh and 5p/kWh on a system exporting 2,500 kWh per year is £275. That's worth 10 minutes of switching.

## How Much Can You Actually Earn?

For a typical 4 kW system in Leicester:

**Without battery (exporting ~60% of generation):**
Export volume: ~2,200 kWh/year
At 15p/kWh (Good Energy): ~£330/year
At 12p/kWh (Octopus): ~£264/year
At 6p/kWh (E.ON open tariff): ~£132/year

**With battery (exporting ~25% of generation):**
Export volume: ~925 kWh/year
At 15p/kWh: ~£139/year
But self-consumption savings are much higher — you're keeping more electricity and avoiding the 25p/kWh import cost.

**With battery on Octopus Flux (smart export):**
Export during peak (4–7pm) at 29p/kWh: much higher value per unit
Import during off-peak at 8p/kWh: buy cheap, sell expensive
Combined benefit: £400–£600/year from smart tariff arbitrage alone

## Should You Prioritise Export Income or Self-Consumption?

Self-consumption is almost always more valuable than exporting. Every kWh you use from your panels saves you 25p (the import rate). Every kWh you export earns you 12–16p (the export rate). The maths is clear: using your own electricity is worth 60–100% more than selling it.

This is why battery storage changes the economics dramatically. Without a battery, you export most of your generation because you're at work when the panels produce most. With a battery, you store the surplus and use it in the evening — turning 12p exports into 25p savings.

The exception: Octopus Flux and similar time-of-use tariffs where peak export rates (29p+) actually exceed the import cost. With a battery on Flux, strategic exporting during 4–7pm is genuinely more valuable than self-consumption at standard rates.

## How to Get Started

Step 1: Get an MCS-certified solar installation (we handle this).
Step 2: Ensure you have a smart meter (contact your supplier if not).
Step 3: Register for your supplier's SEG tariff (usually an online form).
Step 4: Compare rates and switch to the best-paying supplier if worthwhile.

The registration process is simple and your installer can guide you through it. Energy Concerns includes SEG registration support as standard.

**Ready to start earning from your roof?** Get in touch for a free solar quote.

---

*Energy Concerns Ltd — MCS-certified solar installers in Leicester. We help our customers access the best SEG rates available.*`
  },
  {
    filename: '10-solar-accreditations-explained.md',
    content: `# MCS, RECC, NAPIT, Trustmark — What Solar Accreditations Actually Mean

*By Energy Concerns | March 2026 | 4 min read*

Solar installers throw around accreditation logos like confetti. MCS. RECC. NAPIT. Trustmark. City & Guilds. But what do they actually mean? And which ones should you care about when choosing an installer in Leicester?

Here's a plain-English guide to every accreditation that matters — and why we hold all five.

## MCS (Microgeneration Certification Scheme)

**What it means:** The installer meets government-recognised standards for installing solar panels and battery storage. MCS certification requires a Quality Management System, a Nominated Technical Person with proven competence, regular independent audits, and use of MCS-certified products only.

**Why it matters to you:** MCS certification is mandatory for accessing Smart Export Guarantee payments. Without it, your energy supplier won't pay you for the electricity you export. It's also required for most council funding schemes and will be necessary for the upcoming Warm Homes Plan consumer loans.

**Bottom line:** If your installer isn't MCS certified, walk away. It's non-negotiable.

## RECC (Renewable Energy Consumer Code)

**What it means:** The installer follows a strict code of practice for consumer protection. RECC members must provide clear, honest quotations, a 14-day cooling-off period for contracts signed at home, an independent dispute resolution process, and marketing that doesn't exaggerate claims or savings.

**Why it matters to you:** RECC is your safety net. If something goes wrong — a dispute over pricing, quality concerns, or an installer who disappears — RECC provides an independent complaints process and resolution mechanism. Non-RECC installers offer no equivalent consumer protection.

**Bottom line:** RECC membership means the installer takes consumer rights seriously. It's not just a logo — it's a binding commitment to fair treatment.

## NAPIT (National Association of Professional Inspectors and Testers)

**What it means:** The installer's electricians are qualified, competent, and regularly assessed. NAPIT is a government-approved Competent Person Scheme for electrical installations. Members can self-certify electrical work without involving local authority building control.

**Why it matters to you:** Solar panel installation involves connecting high-voltage DC circuits to your home's electrical system. NAPIT registration means the electricians doing this work have been independently verified as competent. It also means your electrical work is automatically certified — no separate building control inspection needed.

**Bottom line:** This is about safety. Your solar installer is wiring a power generation system into your home. You want the electrician to be independently verified, not self-taught.

## Trustmark

**What it means:** The installer is endorsed by the government-backed Trustmark scheme for home improvements. Trustmark registration requires financial stability checks, complaints monitoring, and adherence to a code of conduct.

**Why it matters to you:** Trustmark is the government's quality mark for home improvement trades. It's required for some grant-funded installations and provides an additional layer of assurance that the business is financially stable and meets quality standards.

**Bottom line:** Trustmark registration gives you confidence that the company is established, solvent, and not a fly-by-night operation that might not exist when you need warranty support in five years.

## City & Guilds

**What it means:** The installer's team holds formal qualifications in electrical installation, renewable energy systems, or both. City & Guilds is the UK's leading vocational qualification body — these aren't certificates from a weekend course.

**Why it matters to you:** Formal qualifications prove that the people working on your roof and in your consumer unit have been trained to a nationally recognised standard. It's the difference between an experienced professional and someone who watched YouTube tutorials.

**Bottom line:** Qualifications matter when someone is installing a 400-volt DC system on your property.

## Why We Hold All Five

At Energy Concerns, we don't hold these accreditations to collect logos for our website. Each one serves a purpose: MCS gives you access to financial incentives. RECC protects your consumer rights. NAPIT certifies our electrical competence. Trustmark endorses our business quality. City & Guilds validates our training.

Very few Leicester installers hold all five. Most hold MCS (it's the minimum) and perhaps one other. We hold all five because we believe quality should be verifiable, not just claimed.

**Looking for an accredited Leicester installer?** Contact Energy Concerns — we're happy to show our certifications and explain exactly what each one guarantees.

---

*Energy Concerns Ltd — MCS, RECC, NAPIT, Trustmark, and City & Guilds accredited. Leicester's most credentialed solar installer.*`
  }
];

const outputPath = join(__dirname, '..', 'public', 'ec-blogs.zip');

// Create the zip file
const output = createWriteStream(outputPath);
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
  console.log(`ZIP file created: ${archive.pointer()} bytes`);
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

// Add each blog file to the archive
blogs.forEach(blog => {
  archive.append(blog.content, { name: blog.filename });
});

archive.finalize();
