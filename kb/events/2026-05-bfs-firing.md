+++
id         = "evt:2026-05-bfs-firing"
layer      = 2
type       = "event"
title      = "BFS Foods termination over the disputed 0 drawer shortage (May 2026)"
cites      = ["dat:0496-bfs-foods-job-and-drawer-dispute", "dat:0206-brandon-hill-bfs-drawer-shortage", "dat:0249-anita-bfs-gm-shortage-claim"]
confidence = "moderate"
importance = 4
tags       = ["work", "bfs-foods", "dispute"]
created    = "2026-09-09"

[when]
approx = "Sunday 2026-05-17 (incident shift; reconstructed) through the following Monday"
start  = "2026-05-10"
end    = "2026-05-24"

[[edges]]
rel         = "about"
target      = "ent:dan"
strength    = "strong"
asserted_by = "external"

[[edges]]
rel         = "followed"
target      = "evt:2026-08-11-bfs-rehire-offered"
strength    = "strong"
asserted_by = "other"
note        = "The termination's reversal, 2026-08-11."
+++

## What happened

After a roughly month-long cashier stint at BFS Foods (Bruceton Farm Service
convenience store + company-owned Little Caesars, same Uniontown building),
late April to mid-May 2026, Dan Frank was terminated over a disputed **$50
drawer shortage** — delivered off-books by assistant manager Brandon Hill
(*"your drawer was short last night, I paid it out of my own pocket, you owe
me… that's money that would go to food for my daughter"*), with GM Anita as
the locus of the claim
([`dat:0496`](../data/0496-bfs-foods-job-and-drawer-dispute.md),
[`dat:0206`](../data/0206-brandon-hill-bfs-drawer-shortage.md),
[`dat:0249`](../data/0249-anita-bfs-gm-shortage-claim.md)).

**Note on this article's id:** it was renamed 2026-09-09 from
`evt:2026-08-bfs-firing` to `evt:2026-05-bfs-firing` because every piece of
evidence dates the termination to **mid-May 2026**. August 11, 2026 is the
*reversal* of the termination (covered on
[`evt:2026-08-11-bfs-rehire-offered`](2026-08-11-bfs-rehire-offered.md)); the
2026-08-26 date is the page's CORRECTED-sequence revision. The dates below
follow the evidence.

## Dated sequence (CORRECTED [2026-08-26] revision)

- **late 2026-04** — hired as gas-station cashier.
- **~2026-05-13** — Nick Mattie sighting (temporal anchor,
  [`dat:0496`](../data/0496-bfs-foods-job-and-drawer-dispute.md)).
- **2026-05-15** — Tom's Pittsburgh "after court" delivery promise; the
  supply chain begins stringing Dan along (Friday–Sunday).
- **Sunday, mid-May (reconstructed as 2026-05-17)** — the incident shift. Dan
  took over at 3 PM roughly 72+ hours into Suboxone withdrawal, after three
  independent suppliers burned him across four days (Tom promised "after
  court," "after a nap," "after weed whacking"; a second contact took payment
  Sunday night and never delivered). Cornered on the shift he ran an explicit
  expected-value calculation on sourcing from a daily "obvious junkie"
  customer — a ~$35 stake against a perceived 30–40% return probability,
  "positive EV given how high the utility of a strip was in his state" — the
  man took the ~$35 and never came back: the third burn in four days. The
  shift also carried the gas-lady fraud vector (~$15 fuel + ~$12.50 cigarettes
  on a refunded card via prepay drive-off through a no-dispense void). Brandon
  closed the shift, printed the CSR (read even), then called Dan in back with
  the $50 demand.
- **Monday, mid-May** — the corrected order: at 5 PM Anita told him "you work
  at 8 tonight" (the 36→7 hours cut) **before** any $50 awareness; only
  afterward did Brandon deliver the demand. Brandon independently corroborated
  the cut was not tied to the money — a 12:50 AM text volunteered the
  reduction was because "Anita was in one of her moods."
  ([`dat:0496`](../data/0496-bfs-foods-job-and-drawer-dispute.md)).

## Evidence

- **For:** the page's account (old-wiki export, CORRECTED 2026-08-26
  sequence), with Dan's own mid-session correction: *"i didn't refuse to pay
  it and i am not even sure when my hours were cut exactly. i knew it had to
  be after friday night but before monday."* The retaliation theory's death is
  the page's own self-correction: *"the textbook retaliation shape isn't
  actually documented — it's a reconstruction that may compress what was
  actually a fuzzier sequence."*
- **What survives the correction:** the demand was still off-books and
  illegal regardless of whether Dan explicitly refused it; the hours cut is
  still the real wrong, whatever its cause.
- **Held-corpus corroboration:** Tom's *"I need to sell a sub, 20 bucks."*
  (messages.csv id 220882, 2026-05-09 05:46:01 UTC)
  ([`dat:0496`](../data/0496-bfs-foods-job-and-drawer-dispute.md)).
- **Limits:** the BFS dispute documents (`raw/legal/bfs-dispute/`, the
  dox-md drawer files) are not held in this repository; the quotes and the
  incident reconstruction are text-fidelity-verified against the prior wiki
  only ([`dat:0206`](../data/0206-brandon-hill-bfs-drawer-shortage.md),
  [`dat:0249`](../data/0249-anita-bfs-gm-shortage-claim.md)).
- **Legal posture:** the WPCL claim was inchoate (no deduction exists until
  money is paid, so not paying *was* the defense); never escalated past the
  dispute.

## Contradictions

- **Old vs corrected sequence:** the first analysis — refusal, then a same-day
  36→7 cut as retaliation — "is not the sequence Dan later confirmed." The
  cut came first; the retaliation theory is dead as a documented sequence
  ([`dat:0496`](../data/0496-bfs-foods-job-and-drawer-dispute.md)).
- **The $50 figure itself:** gas $15 + Newports ~$12.50 refunded + Brandon's
  $15 phantom tender ≈ $45, rounded to $50 — "the first version of the figure
  that makes internal sense." Dan's own fifteen/fifty speech-impediment theory:
  Brandon pronounces the two nearly identically
  ([`dat:0206`](../data/0206-brandon-hill-bfs-drawer-shortage.md)).

## Open questions

- Exact incident-shift date (Sunday mid-May; 2026-05-17 is reconstructed from
  the May 13/May 15/May 20 anchors, not primary).
- Final payroll disposition; whether the $50 was ever paid or pursued.
- Anita's surname and her corporate-hierarchy position (gaps per the page,
  [`dat:0249`](../data/0249-anita-bfs-gm-shortage-claim.md)).

## Cross-links

- [`evt:2026-08-11-bfs-rehire-offered`](2026-08-11-bfs-rehire-offered.md) —
  the reversal.
- Brandon Hill and Anita are carried at the people level on
  [`dat:0206`](../data/0206-brandon-hill-bfs-drawer-shortage.md) and
  [`dat:0249`](../data/0249-anita-bfs-gm-shortage-claim.md); first names and
  workplace roles only, per the ingest convention.
