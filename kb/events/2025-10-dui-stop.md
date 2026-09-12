+++
id         = "evt:2025-10-dui-stop"
layer      = 2
type       = "event"
title      = "Annie DUI stop, Uniontown (2025-10-26)"
cites      = ["dat:0117-annie-dui-2025-10-26-stop-details", "dat:0300-tom-2025-10-11-traffic-stop-unverifiable-in-held-corpus"]
confidence = "moderate"
importance = 4
tags       = ["legal", "dui", "annie-ulmer"]
created    = "2026-09-09"

[when]
date   = "2025-10-26"

[[edges]]
rel         = "about"
target      = "ent:annie-ulmer"
strength    = "moderate"
asserted_by = "other"
note        = "The docket names Anne Louise Ulmer; the stop is filed as hers, with an attribution wrinkle carried in open questions."

[[edges]]
rel         = "preceded"
target      = "evt:2024-06-dui-2"
strength    = "moderate"
asserted_by = "other"
note        = "The other 2020s DUI matter (Dan's); the two must stay distinct per the dat:0016 lesson."
+++

## What happened

On 2025-10-26 at ~00:49, Anne Louise Ulmer was stopped by PSP Troop B at Route
40 / N Mount Vernon Ave, Uniontown — high beams on, straddling lanes, turning
into a closed Walgreens lot; strong odor of alcohol, watery eyes; "Tito and
Soda" admitted; only the HGN field test administered (broken ankle cited for
skipping the rest); breath-test attempt failed; refused chemical testing after
the DL-26B was read verbatim. Charged under docket
**MJ-14101-CR-0000631-2025**: DUI general impairment plus three summary
counts. Complaint filed 2025-11-04; affidavit sworn 2025-11-11; preliminary
hearing before the local MDJ; no further disposition on record
([`dat:0117`](../data/0117-annie-dui-2025-10-26-stop-details.md)).

## Dated sequence

- **2025-10-26 ~00:49** — the stop.
- **2025-11-04** — complaint filed.
- **2025-11-11** — affidavit sworn.
- **2026-01** — proceedings ran into January 2026 (operator record).

## Evidence

- **For:** the page's DUI section, itself sourced to
  `raw/self/dox-md/ulmer_dui_megadoc.md` — **not held** in this repository.
  The docket number appears exactly once in the entire 2026-09-04 corpus. The
  docket format is consistent with a Fayette County magisterial-district
  filing (format plausibility, not verification). The operator's record
  independently notes proceedings into January 2026.
- **Limits:** no held message corroborates any stop detail; live PA UJS
  verification was not performed; trooper and MDJ names are withheld from this
  node per the third-party-identifier policy (see
  [`dat:0117`](../data/0117-annie-dui-2025-10-26-stop-details.md)).

## Contradictions and disambiguation

- **This is Annie's stop, not Dan's:** the docket names Anne Louise Ulmer.
  Keep distinct from Dan's DUI #1 (2019,
  [`evt:2019-02-dui-1`](2019-02-dui-1.md)) and DUI #2 (2024,
  [`evt:2024-06-dui-2`](2024-06-dui-2.md)) — the
  old-wiki-conflated-matters lesson of
  [`dat:0016`](../data/0016-old-wiki-conflated-two-legal-matters.md).
- **Attribution wrinkle (open):** the operator's standing record lists the Oct
  26, 2025 stop with proceedings into Jan 2026 under Dan's legal line;
  [`dat:0117`](../data/0117-annie-dui-2025-10-26-stop-details.md) reads that
  line as Annie's proceedings. A PA UJS lookup of MJ-14101-CR-0000631-2025
  would settle it definitively; meanwhile the docket names Annie, and the
  event is filed as hers.
- Fifteen days earlier (2025-10-11), Tom was pulled over in Fayette County on
  suspicion of DUI — old-wiki testimony with zero held-corpus hits
  ([`dat:0300`](../data/0300-tom-2025-10-11-traffic-stop-unverifiable-in-held-corpus.md));
  the timeline presents the two as a coincidence cluster.

## Open questions

- PA UJS portal verification of the docket: charges and disposition after
  January 2026.
- Whether Dan was present at the stop (unrecorded).

## Cross-links

- [`ent:annie-ulmer`](../entities/annie-ulmer.md).
- [`evt:2019-02-dui-1`](2019-02-dui-1.md),
  [`evt:2024-06-dui-2`](2024-06-dui-2.md) — Dan's own DUI matters.
