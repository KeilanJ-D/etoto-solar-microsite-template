# Sunward Studio preview

Sunward is a UK homeowner solar and battery planning experience. This branch is an isolated, non-indexed, non-binding preview. **Do not merge it into `energy-concerns-microsite`.**

## Run

Node 22+, no runtime dependencies.

```sh
npm run build
npm run dev -- --host 0.0.0.0 --port 4173
npm test
```

Builds retain the existing Sunward exploration, tariff, guide and local routes and publish Studio at `/studio/`. Vercel's existing Git integration deploys `sunward-v2-preview` automatically. Do not deploy this branch as the production project.

## Source

The earlier compressed source bundle has been recovered as normal editable files. `src`, `content`, `data`, `public` and `scripts` contain the retained website. `studio-app` owns the new consumer interface, `studio-src` the catalogue, roof grids, technical visualisation, recommendations and energy balance. `api` contains the Vercel property and estimate handlers. `growth` connects existing exploration routes to the Studio.

There is no freeform product placement. A technical model illustrates tested roof planes, with slot-based panel editing. Real manufacturer product art appears in the product and installation views. Candidate battery zones are identified separately from the roof model; they are not surveyed installation positions.

## Preview behaviour

- Estimates use illustrative allowances and an explicitly simple monthly energy balance.
- A server estimate always recalculates from the submitted design. Client totals are ignored.
- Vercel preview environments and the `sunward-v2-preview` branch cannot enable binding acceptance.
- Save downloads a standalone HTML estimate. Print supports browser PDF export. Email opens a user-controlled email draft; it does not send automatically.
- Survey requests and acceptance demonstrations are explicitly device-local. No appointment or order is created.
- Device-local designs are restored, with a manual fallback when storage or property lookup is unavailable.

## Property integration

Searchland is connected to the assistant, but that connection does not supply credentials to the Vercel app. The server adapter requires a separately authorised Searchland endpoint and credentials in the preview environment. No credentials are stored in the source or browser. Read `docs/integration.md` before enabling customer lookups.

Manufacturer sources, verified on 7 September 2026, are recorded in `docs/product-sources.json`. Product art is optimised locally; no runtime product hotlinks are required. Confirm applicable manufacturer marketing permissions before commercial publication.

## Verification

`npm test` checks 128 house/roof/panel/orientation combinations, in both camera views, tight roof dimensions, pitched geometry, keep-clear zones, energy conservation, pricing, signatures, preview acceptance gates and actual Searchland response normalisation. Build guards keep the Studio scripts/styles below 45 KB gzip and all product images below 200 KB. Visual QA covers desktop plus 390 px and 360 px CSS viewports. Device frames are available only through the local development server at `/__qa?width=390`; they are not deployed.

## Product and tariff experience

The trust layer in `src/trust` adds real manufacturer imagery, four official click-to-load films, an eight-product comparison catalogue, product specification pages and thirteen supplier tariff examples. Official facts and eligibility were checked on 7 September 2026. Provenance is retained in `docs/media-sources.json` and `docs/tariff-sources.json`. No supplier affiliation, installer-exclusive export entitlement or conversion uplift is claimed.

The tariff matcher explains its shortlist by solar/battery/EV/heating setup. The whole-bill calculator includes standing charges and export credits using editable assumptions; EV-only credits and percentage offers cannot become whole-home p/kWh presets. Tariff suggestions in Studio leave the estimate inputs under the visitor’s control.

Manufacturer video is requested only after activation. LONGi and AIKO do not supply selectable caption files on the checked sources; written summaries and original source links accompany the films. Preview pages remain excluded from indexing; production SEO publication remains a separate gate.
