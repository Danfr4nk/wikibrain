+++
id            = "dat:0288-forewarn-legal-table-provenance"
layer         = 1
type          = "datum"
title         = "The timeline's Tier-1 traffic/DUI entries trace to the 2026-08-08 FOREWARN lookup's collapsed 'record, 2008–2025' table — third-party background-check data, not docket documents held here"
claim         = "The master timeline's Tier-1 legal entries — 2009-06-13 vehicle equipment/render inoperative (guilty plea); 2010-06-06 expired licence + control devices (guilty / guilty plea); 2010-07-07 inspection + obstructed window (1 guilty plea, 1 not guilty); 2019-02-03 DUI #1 general impairment + BAC .16+ + 4 traffic (ARD — county); 2024-06-29 DUI #2 general impairment + 4 traffic (guilty pleas, all five) — all derive from a single table in the old wiki export, 'The record, 2008–2025', built from a **FOREWARN lookup returning 64 records**, collapsed by offense date to ≈9 incident clusters / ≈20 distinct charges (the table also lists 2008-10-31 turning/signal, 2008-11-20 disorderly conduct, 2009-07-19 harassment, 2025-04-05 criminal mischief). The FOREWARN report itself is not held in this repository; the table is the only record of it. No PA UJS docket-level verification was performed in this pass (no browser access)."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Observed directly: raw/old-wiki-export-2026-09-04/whole.txt lines 53215–53235 contain the collapsed table with the exact charge/disposition strings the timeline entries repeat (whole.txt:53223–53228; timeline corpus__3.txt ~110640–110650, 116050–116058). The same FOREWARN lookup (2026-08-08) is the instrument that identified Tuquick as Jerel Wayne Coles (dat:0073), and the export text notes the operator's own capture 'correctly establishes that these are heavily duplicated across PA court-data sources ... Collapsed by offense date'. find for '*forewarn*' files in this repo returns nothing — the report is not held here."
importance    = 4
tags          = ["master-timeline", "legal", "dui", "traffic", "forewarn", "provenance", "unverified"]
created       = "2026-09-09"

[when]
start = "2008-10-31"
end   = "2025-04-05"
+++

## What this establishes and what it does not

**Established:** the timeline's legal entries have a single, named, dated
provenance — an operator-commissioned FOREWARN background check run 2026-08-08
— and the wiki deliberately reports the *collapsed* reading (≈9 clusters, ≈20
charges) rather than the raw 64-record count, with the reasoning stated on the
page (avoiding the retracted 187:4-style impressive-number error).

**Not established here:** that the underlying dockets say what FOREWARN says.
FOREWARN aggregates Administrative Office of Courts / Unified Judicial System /
Court of Common Pleas data, and the export acknowledges heavy duplication
across sources and procedural stages. The 2025-04-05 criminal mischief row
(filed 2025-05-06, disposition unavailable) is the freshest and least
corroborated. A PA UJS portal check of the docket numbers would move these from
third-party-lookup to primary-record; that check needs browser access and is
flagged for a later pass.

## Cross-references

- [`dat:0069`](0069-possession-arrest-night-and-blotter.md), [`dat:0070`](0070-ard-disposition-and-da-bar.md), [`dat:0071`](0071-arrest-breath-test-and-feb-17-coincidence.md), [`dat:0072`](0072-retail-theft-arrest-split-from-possession.md) — the 2015 possession/retail-theft arrests, separately sourced.
- [`dat:0073`](0073-coles-address-threat-exchange-2026-08-17.md) — the same FOREWARN lookup identifying Coles.
- [`dat:0117`](0117-annie-dui-2025-10-26-stop-details.md) — Annie's own 2025-10-26 DUI, distinct from Dan's DUIs #1/#2.
- [`dat:0031`](0031-dui-belongs-to-the-other-speaker.md) — a DUI belonging to someone else in a thread, not Dan's.
