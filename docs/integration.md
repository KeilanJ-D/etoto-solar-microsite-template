# Runtime connections and release limits

## Searchland

The ChatGPT connector was checked against the public Millmead House council building in Guildford. Geocoding returned UPRN 100062331014; the containing building query returned nested roof records: 703.6 m² aggregate roof area, 289.3 m² east-facing area, 40.1 m² south-facing area, four floors and 49 addresses. This confirms why the UI must not treat whole-building totals as one home's measured roof.

The API adapter supports JSON and MCP SSE responses, requests only building/EPC/planning context, batches field catalogues, checks exact UPRN geocoding and rejects ambiguous building matches. Article 4, TPO and DNO context are optional checks with explicit checked/unknown status. Absence of returned constraints is not planning approval.

Required server environment configuration:

- `SEARCHLAND_MCP_URL`: approved HTTPS endpoint on `mcp.searchland.co.uk`
- `SEARCHLAND_API_KEY`: bearer credential, when required by that endpoint
- `SEARCHLAND_CUSTOMER_USE_APPROVED=true`: only after customer use is authorised

The existing Vercel connector cannot currently access the ETOTO team scope. This release does not pretend those values are configured. `/api/studio-property` reports readiness; the UI offers manual configuration when unavailable. The connected ChatGPT Searchland session is never exported or repurposed as a website credential.

## Commercial quotation

All values in the included pricebook are illustrative, not supplier quotations. The preview branch rejects binding acceptance even if production-like environment gates are accidentally set.

A future production release requires an approved pricebook, identified contracting entity and contract terms, a signing secret, validated installation scope and an approved durable acceptance service. The retained server code validates signature, expiry, terms and pricebook versions, recomputes the total and requires a durable receipt matching the quote. Acceptance uses a quote-specific idempotency key. Production compliance, engineering review and payment integration are separate launch work.

## User follow-ups

Save/email/print are self-service export functions. Survey requests and preview acceptance are explicitly saved on the current device only. No live lead sending or order backend is represented. An actual survey booking flow requires a configured booking service and installer availability.

## Energy estimates

The monthly model reconciles generation, direct use, battery charge and losses, export and remaining demand. Baseline south-facing generation is an editable-design assumption of 950 kWh/kWp, modified by orientation, tilt and shading. Existing solar uses its own approximate baseline; existing batteries are excluded until specified. Battery-only tariff shifting assumes 280 potential cycles and 90% round-trip efficiency. It is not an hourly dispatch model. Ranges are sensitivity bands, not confidence intervals or guarantees. Finance, inflation, degradation, maintenance and replacement costs are excluded and disclosed to the homeowner.
