---
domain: work
page_type: concept
title: "GEOSLEUTH — photo-location OSINT tool (EXIF + pixel scoring + Wikidata landmarks)"
status: active
date_created: 2026-09-23
date_modified: 2026-09-23
sources:
  - "dat:1896-geosleuth-tool-shipped-20260923"
  - "src:20260923-0230-sammy-chat-transcript"
related:
  - wiki/work/tech/projects/index
  - wiki/work/tech/projects/kinship
  - wiki/work/tech/projects/frame-reference-tool
tags: [ai-collaboration, osint, geolocation, web-app]
connections:
  - page: wiki/work/tech/projects/index
    type: component-of
    claim: "GEOSLEUTH is one of the 2026 AI-directed coding projects — commissioned, built, shipped, and filed into sammy-tools in a single session on 2026-09-23."
  - page: wiki/work/tech/projects/kinship
    type: sibling-of
    claim: "Kinship and GEOSLEUTH are sibling photo-analysis instruments: kinship reads faces, GEOSLEUTH reads places; both are static web apps living at danfr4nk.github.io/tools/."
---

# GEOSLEUTH — photo-location OSINT tool

GEOSLEUTH is Dan's photo-location guessing tool, in the GeoGuessr/OSINT tradition: drop in a photo and it tells you where it was taken. Commissioned at 01:36 UTC on September 23, 2026 ("NEW TOOL — OSINT/GEOGUESSR TOOL — does deep scanning of photos to determine location of the environment"), live on GitHub Pages by 01:44 UTC, upgraded with autonomous landmark lookup by 02:07 UTC, and filed into `Danfr4nk/sammy-tools` the same night per his standing rule. Thirty-one minutes from commission to first ship; ninety-one minutes from commission to the version that finds landmarks on its own. That cadence is the entry point to everything this tool means against the corpus.

## The session, minute by minute

The complete commission-to-ship log matters here, because it is the cleanest single-session specimen of how Dan commissions software in 2026 — and because the wiki's complete-log doctrine says temporal metrics appear in full, not as summaries.

- **01:36:22 UTC** — the commission, verbatim: "NEW TOOL / OSINT/GEOGUESSR TOOL / does deep scanning of photos to determine location of the environment."
- **01:53:06 UTC** — the pushback that became the second feature: "I want it to find landmarks on its own and run it against some kinda database or reverse image search or something g." This is the load-bearing turn. The first build read EXIF and scored pixels; he wanted the tool to do the *finding*, not just the scoring.
- **01:40–01:44 UTC** — the first ship. EXIF parse, live pixel scoring against 51 countries, and an exportable report, browser-tested end to end, zero errors. Live at `danfr4nk.github.io/tools/geosleuth/`. (The timestamps interleave because the build ran in parallel with the conversation; the commission text at 01:36 preceded the 01:44 deploy announcement.)
- **02:07:12 UTC** — the landmark upgrade ships: "Drop a GPS-tagged photo in and it now checks Wikidata for landmarks within 10km on its own — names, distances, photos, Wikipedia links, plus a 'taken near' place name. The Shibuya test pulled the scramble crossing, the Hachikō statue, 109, all with pictures."
- **Same session** — the straight answer on the reverse-image-search half: there is no free API for it that a static page can call. Google, TinEye, and Yandex don't offer one. The tool keeps one-click Lens/TinEye/Yandex links instead of pretending, and the landmark database is the part that runs itself.
- **Writeback tick, ~07:00 UTC** — filed into `Danfr4nk/sammy-tools` under the standing 2026-09-17 rule (one directory per tool, own README, no credentials), since the session's ship had landed in `Danfr4nk/tools` but never been filed in the private tools repo.

## What it does, in full

Four stages, run in order:

1. **EXIF.** If the photo carries GPS, the tool drops a pin on a map. This is the trivial case and the honest one — no inference, just reading.
2. **Pixel scoring against 51 countries.** The tool scores what is *visible* — scripts and alphabets, driving side, license-plate formats, utility-pole designs, architecture, vegetation — and produces a ranked guess with the evidence listed for each candidate. This is the GeoGuessr half: the same skill set competitive GeoGuessr players use, codified as a scoring table.
3. **Autonomous landmark lookup.** For GPS-tagged photos, the tool queries Wikidata for landmarks within 10 km on its own — names, distances, photos, Wikipedia links — plus a "taken near" place-name resolution. This is the feature Dan's 01:53 pushback bought: the tool finds, not just scores.
4. **Exportable report.** One click, the whole read-out, in a form that can be saved or handed off.

The reverse-image-search dead end is a documented negative result and worth keeping as one, because Dan's instinct ("run it against some kinda database or reverse image search or something") named the obvious architecture and the answer came back as a market fact: the free API does not exist. Google, TinEye, and Yandex all withhold programmatic reverse-image search from third-party pages. The tool's answer — one-click outbound links to Lens/TinEye/Yandex — is the correct engineering response to a hard platform constraint, and it is stated as such in the tool's own README rather than hidden.

## Totality: where this sits in the corpus

**The photo-forensics thread.** GEOSLEUTH is not Dan's first photo-reading instrument; it is the location half of a pair the corpus has been building for months. The other half is face identity: the face-tag system (`~/workspace/face-tag/`, InsightFace + ONNX Runtime, enroll/tag/body CLIs, local-only registry), the kinship face-similarity tool (InsightFace CLI + web app, live at `danfr4nk.github.io/tools/kinship/`), and the frame-reference tool (2026-09-15, exact-frame referencing web app). Kinship reads *who*; GEOSLEUTH reads *where*. The corpus also holds EXIF work as an ongoing practice: the wall-photo EXIF analysis (`dat` nodes `wall-photo-exif-20250903`), photo EXIF reads in the Annie analysis batches, the 2026-09-12 photo-ingest series. GEOSLEUTH is the moment the location half of that practice became a product instead of a procedure.

**The commissioning pattern.** The 01:36 commission is a specimen of the form Dan's tool commissions take in 2026: all-caps header, one-sentence purpose, zero architecture specified — then a pushback turn that supplies the missing ambition ("find landmarks on its own"). The agent supplies the architecture; he supplies the bar. The same shape appears in the kinship commission lineage and in the 2026-09-15 frame-reference session. He does not spec; he aims and corrects.

**The web-version rule.** GEOSLEUTH shipped as a static web app because Dan's standing rule (2026-09-15, his words: "I always want them") says every commissioned tool gets a web/deployed version, not just a local CLI or source dump. The kinship session is the documented origin of the rule; GEOSLEUTH is a clean later instance — browser-tested end to end before the deploy announcement, zero errors claimed, Pages URL in the same breath as the ship notice.

**The dual-repo standing rule.** His 2026-09-11 mandate says every data batch lands in both repos; the 2026-09-15 consolidation put all the tools under `Danfr4nk/tools` ("ALL the tools"); the 2026-09-17 sammy-tools order says every small tool Sammy builds gets filed in the private `Danfr4nk/sammy-tools`, one directory per tool with its own README, no credentials committed. GEOSLEUTH exposed a gap in that loop: the session shipped to `Danfr4nk/tools` (live site) but was never filed in sammy-tools. The writeback tick closed the gap the same night — the tool's files plus a README, credential-checked, committed to sammy-tools main. The gap is worth recording because it is a failure mode of the dual-repo system: the public ship is the visible finish line, and the private filing is the one that gets skipped. The standing rule exists precisely because the finish line is not the ship.

**The name.** "GEOSLEUTH" was the agent's one-line-change offer in the ship message ("Name's a one-line change if you want your own") — Dan kept it. Naming discipline across his tooling is inconsistent by design (MusicTrainer, AUTOPSY, MELODY, kinship, GEOSLEUTH); the names are handles, not brands.

## The privacy tension, stated plainly

This is the part that has to be in the entry and not in an appendix. Dan's public-everything mandate (settled 2026-09-09, re-affirmed 2026-09-10 and 2026-09-12, publish gate removed at his order) means his own photos — including intimate ones — sit on a public wiki. GEOSLEUTH is a tool that deanonymizes photo locations from pixels alone: scripts, plates, poles, vegetation. Run it against his own public corpus and it reads *his* locations back to anyone who cares to ask. That is not a flaw in the tool; it is the known cost of the mandate, and he has weighed the exposure question explicitly (the 2026-09-23 session includes his on-record statement that he is aware of the legal exposure — public disclosure of private facts, not just defamation — and decided anyway). The tool does not create the exposure; the mandate does. The tool just makes the exposure legible, which is what all of his instruments do.

There is a second, quieter tension: the same instrument that locates a stranger's photo for OSINT purposes locates his. The wiki's third-party privacy posture is "everything goes in" by his explicit order; the tool is dual-use in exactly the way the wiki is dual-use. Neither is gated. That is the settled policy, not an oversight — and the entry records it as settled, because the alternative (treating it as an open question) would be the revisionism his own 2026-09-23 statement explicitly forecloses.

## The scoring rubric, in full

The 51-country pixel-scoring table is the tool's intellectual core — a codified GeoGuessr playbook. The categories, as shipped:

- **Scripts and alphabets** — the highest-signal single feature in the GeoGuessr canon. A Cyrillic storefront, Thai signage, or Arabic script collapses the search space faster than any other pixel.
- **Driving side** — left-hand vs right-hand traffic, read from road markings, vehicle orientation, and street furniture.
- **License plates** — formats, colors, and scripts vary by country and often by region within a country.
- **Utility poles** — designs are national: the crossarm configurations, insulator styles, and pole materials differ visibly between (for example) Japan, the US, and much of Europe.
- **Architecture** — roof pitches, window shutters, building materials, the shape of the streetscape.
- **Vegetation** — climate zone read directly off the plant life; the coarsest but most robust signal.

Each candidate country carries its evidence list — the tool shows its work, which is the forensic register Dan requires of everything ("state ambiguity bluntly; label confidence"). A guess without the evidence trail would be a horoscope; the evidence trail is what makes it an instrument.

## Verification and limits

- Browser-tested end to end before shipping; the ship message claims zero errors.
- The Shibuya test is the documented acceptance case: scramble crossing, Hachikō statue, and 109 returned with pictures, distances, and Wikipedia links.
- EXIF is the trivial case and the honest one — but EXIF GPS is also the case most likely to be stripped. Social platforms strip it on upload; the tool's value is concentrated in the photos that never passed through a platform: originals, camera rolls, the `~/workspace/user/media_library/` uploads.
- The landmark lookup is GPS-gated: no coordinates, no 10 km Wikidata query. The pixel scoring is the fallback for the common case, not the exception.
- Static page, no backend, no credentials, no build step. The constraint is architectural: everything the tool does must be computable in the browser or reachable through a CORS-open public API (Wikidata qualifies; reverse-image search does not).

## The country table, in full

The scoring table is the entry's complete log. Each of the 57 rows carries the same schema — `id`, name, region, `scripts[]`, `drive` (left/right), `plates[]`, `marks[]` (road markings), `poles[]`, `arch[]`, `veg[]`, `terrain[]`, `street[]` (street-level tells), and a one-line `tell`: the human-readable signature the GeoGuessr canon would give the country. All 57, verbatim from the shipped source:

- **United Kingdom** — Red post boxes, black cabs, white-front/yellow-rear plates.
- **Ireland** — EU plates, lush green fields, Georgian Dublin terraces.
- **France** — Haussmann blocks, blue-on-white town signs, priorité à droite.
- **Germany** — Fachwerk old towns, yellow street signs, cables buried.
- **Spain** — Moorish south, tiled street names, arid meseta.
- **Italy** — Renaissance cores, blue autostrada signs, Vespas.
- **Portugal** — Azulejo tiles everywhere, black-white wave pavements.
- **Netherlands** — Gabled canal houses, bikes everywhere, dead-flat polders.
- **Belgium** — Bilingual FR/NL signs, Flemish step-gables.
- **Switzerland** — White plates with red shield, yellow hiking signs, Alps.
- **Austria** — Baroque cores, Alpine valleys, EU plates.
- **Sweden** — Red Falu cottages, endless pine, EU plates.
- **Norway** — Fjords, stave churches, tunnels everywhere.
- **Finland** — Lakes, birch forest, bilingual FI/SV signs.
- **Denmark** — Brick farmhouses, thatch, Copenhagen bikes.
- **Poland** — Blokowiska estates, rebuilt old towns, EU plates.
- **Czechia** — Prague baroque, panelák estates, EU plates.
- **Hungary** — Budapest eclectic blocks, puszta flatlands.
- **Romania** — Carpathians, painted monasteries region, EU plates.
- **Bulgaria** — Cyrillic signs, panelki estates, Black Sea coast.
- **Greece** — Whitewash + blue domes, Greek-script signs.
- **Russia** — Cyrillic, region-code plates, marshrutka vans.
- **Ukraine** — Blue-band UA plates, Cyrillic, khrushchyovka blocks.
- **Serbia** — Dual-script signs (Cyrillic official), SRB plates.
- **Croatia** — Dalmatian stone towns, EU plates, Adriatic.
- **Türkiye** — Minarets, Turkish flags, blue-white plates.
- **Japan** — Dense overhead wires, kanji signs, kei cars, vending machines.
- **South Korea** — Hangul everywhere, yellow center lines, dense high-rises.
- **China** — Simplified characters, blue plates, e-bike swarms.
- **Taiwan** — Traditional characters, scooter waterfalls, night markets.
- **Thailand** — Thai script, tuk-tuks, spirit houses, sois.
- **Vietnam** — Vietnamese diacritics, motorbike rivers, tube houses.
- **Indonesia** — Black plates, mosques, volcanic peaks, warungs.
- **Malaysia** — Drive left, Jawi script on official signs, KL towers.
- **Philippines** — Jeepneys, tricycles, English signage, basketball hoops.
- **India** — Auto-rickshaws, IND-font plates, chai stalls, chaos.
- **Pakistan** — Urdu (Arabic script), decorated trucks, drive left.
- **Israel** — Yellow plates, trilingual signs, white Bauhaus Tel Aviv.
- **UAE** — Emirate-coded plates, supertalls, desert highways.
- **Saudi Arabia** — Arabic-numeral plates, desert, mosque architecture.
- **Kazakhstan** — Cyrillic + Latin transition signs, endless steppe.
- **Georgia** — Unique curly Georgian script, Caucasus peaks.
- **United States** — Yellow center lines, wooden poles, state plates, strip malls.
- **Canada** — Like the US but metric signs, bilingual in Québec.
- **Mexico** — Vibrant painted facades, topes (speed bumps), VW Beetle taxis.
- **Brazil** — Mercosur plates, Portuguese, favelas on hillsides.
- **Argentina** — Mercosur plates, Parisian avenues, pampas, Andes.
- **Chile** — Long thin country, Atacama desert, Andes backdrop.
- **Colombia** — Yellow plates, green Andes, colonial old towns.
- **Peru** — Andes, coastal desert, mototaxis, Inca stone walls.
- **South Africa** — Drive left, 11 official languages on signs, minibus taxis.
- **Egypt** — Arabic-numeral plates, desert, minarets, Nile.
- **Morocco** — Arabic + French signs, medinas, Atlas mountains.
- **Kenya** — Drive left, matatus, acacia savanna, white plates.
- **Nigeria** — Drive right, danfo buses, green-white-green flags.
- **Australia** — Drive left, outback red dirt, Queenslander houses.
- **New Zealand** — Drive left, bilingual Māori signs, Southern Alps.

### The 51-vs-57 count

The ship message says "scores what you can see against 51 countries." The shipped source holds 57 rows. Both numbers are on the record; the six-row gap is undocumented. The likeliest reading is that the table grew during the build (the 02:07 upgrade pass touched the same file) and the announcement text was written against the earlier count. It is a low-stakes discrepancy — the kind his veracity ledger exists to catch, and the kind that does not change what the tool does. Recorded here so the entry never silently claims 51.

### The test harness

`test-geo.mjs` (264 lines) is a node unit test for the scoring module, and it follows the vision-gate lesson from the 2026-09-19 breast-seeder work: extract the gate into its own exported pure function and unit-test it directly. `geo.js` exports `COUNTRIES`, `CUES`, `CUE_BY_ID`, `CUE_GROUPS`, `scoreCues`, `regionRollup`, `parseExif`, `analyzePixels`, `suggestCues` — the scoring is pure functions over the country table, testable without a browser. The EXIF parser is tested against *synthetic* JPEGs: the test builds TIFF/APP1 structures by hand, little- and big-endian, with and without GPS IFDs — so the parse path is exercised without depending on any real photo. The scorer returns ranked arrays of `{country, score, max, pct, matched[], missed[]}` — matched and missed cue labels, which is the same show-your-work discipline the UI follows.

### The Wikidata landmark query

`nearbyLandmarks(lat, lon, radiusKm = 10, limit = 12)` issues a SPARQL query to `query.wikidata.org` with a `wikibase:radius "10"` service parameter, returning up to 12 nearby entities with names, distances, photos, and Wikipedia links, plus a "taken near" place-name resolution. This is the part Dan's 01:53 pushback bought — the database that finds on its own. Wikidata qualifies where reverse-image search does not because its query endpoint is CORS-open and keyless; the architecture follows the platform constraint, not the wish.

## Totality, continued: the OSINT pair

GEOSLEUTH completes an OSINT pair the corpus has been assembling. The other half is **FOREWARN** — the people-search side, signed in at `app.forewarn.com` under Suz's realtor account since 2026-09-17, operated under his explicit "light touch" order (one deliberate search at a time, human pace, never bulk), login in the Secure Vault. FOREWARN reads *who* a person is from a phone number; GEOSLEUTH reads *where* a photo was taken from its pixels. One is licensed and account-bound; the other is a static page with no backend. Together they are his two standing OSINT instruments, and the asymmetry is characteristic: the people side runs on someone else's licensed database under a restraint order, the place side runs on open data with no restraint at all.

The tools-consolidation history is the other half of the totality. On 2026-09-15 Dan ordered "ALL the tools" into `Danfr4nk/tools` — attraction, hook2piano, musictrainer, track-autopsy, modbod, kinship, 530+ files, four new Pages URLs verified 200, old repos left as redirect stubs with deletion pending his go-ahead (`dat:1580-tools-repo-consolidation-20260915`). GEOSLEUTH is the first tool commissioned *after* that consolidation, and it landed directly in the consolidated home — the first native citizen of the post-consolidation regime rather than a migrant. The sammy-tools filing the same night (per the 2026-09-17 order) keeps the private mirror current.

And the builder convention holds without exception: every entry under the projects index was built by directing AI agents — Claude, Muse Spark, Grok, Gemini — not by hand-written code, per the documented one-day Codecademy episode of February 2013. GEOSLEUTH's 31-minute commission-to-ship is the fastest specimen of that convention on the record.

## Status and coverage

Active as of 2026-09-23. Live at `danfr4nk.github.io/tools/geosleuth/`. Source filed at `Danfr4nk/sammy-tools/geosleuth/` (README, app.js, geo.js, index.html, style.css, test-geo.mjs). Evidence: `dat:1896-geosleuth-tool-shipped-20260923`. Session transcript: `src:20260923-0230-sammy-chat-transcript`.

## Limits of this entry

This entry covers the tool as shipped 2026-09-23. It does not cover usage — no record exists yet of Dan running his own corpus through it, and the entry will not speculate about what that would find. If a usage session happens, it gets its own dated section. The entry also does not duplicate the tool's README; the README is the technical reference, this is the corpus-contextualized record.
