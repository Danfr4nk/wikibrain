+++
id          = "int:texting-deviance-audit"
layer       = 3
type        = "interpretation"
title       = "The texting-deviance complaint record: recipients named the processing load seven years before the audit did"
perspective = "llm"
cites       = ["dat:1112-texting-deviance-audit-complaint-record-verified",
               "dat:0891-deviance-audit-structure-and-boundary",
               "dat:0024-old-wiki-happiness-counter-measure"]
confidence  = "moderate"
importance  = 4
tags        = ["texting", "deviance", "interpretation"]
created     = "2026-09-09"
updated     = "2026-09-09"
falsifiers  = [
  "The deep export (imessage_export_deep_20260813.csv, 183,787 rows) becomes held and the headline measurements don't reproduce — words/message, FK grade, TTR, the 3.05x words-per-turn ratio — in which case the statistical half of the audit was an artefact of that extract and only the complaint record stands.",
  "A recipient-side control set: if complaints about unreadable text walls appear at comparable rates in the contacts' messages *about other people*, the complaint record measures a general texting-era irritation rather than his specific style.",
  "The six complaints turn out to be the complete universe of such complaints across 183,787 rows — a rate of ~0.003% — which would make the behaviour statistically negligible even if real.",
]
alternatives = [
  "The complaints may be measuring relationship friction expressed through the medium: Annie's two complaints (2026-02-19, 2026-08-08) land inside the relationship's terminal window, and \"I can't read these paragraphs\" may be \"I can't deal with you right now\" routed through the texting register.",
  "The behaviour may be an adaptation to being ignored: the audit's own 54.7%-vs-93.8% answer-rate cost curve implies essays get answered less — but the direction of causality is open. Long texts could be a response to low response rates, not their cause.",
]

[when]
date = "2026-09-09"
+++

## The thesis

The Texting Deviance Audit's most load-bearing temporal claim verified
**verbatim**: recipients complained about unreadable text walls starting in
2019 — six years before the 2025 escalation the audit measured. Six complaint
quotations from four counterparties (a PA contact 2019-01-28, Tom
2025-09-01, Kristin 2025-09-06 and 2025-12-08, Annie 2026-02-19 and
2026-08-08) are all verbatim in the held corpus, plus a 2017 de-escalation
request ("Dan please try to calm down. Please...", 2017-07-02) the page
didn't even include
([`dat:1112`](../data/1112-texting-deviance-audit-complaint-record-verified.md)).

The interpretation: the register of the complaints is consistent across four
unrelated people and seven years — not *"you talk too much"* but *"I can't
read this"*: a claim about **processing load**, about paragraphs upon
paragraphs arriving faster than a recipient can parse. That is a stable
behavioural fact, legible to its targets long before any instrument
quantified it. The complaints are the primary record; the audit's
statistics (15.03 words/message in 2026, the 3.05x words-per-turn ratio,
the 11.2%/44.3% STACKED-ESSAY mode) are the late-arriving instrument.

## What verified and what didn't

- **Verified:** all six quoted complaints, verbatim, with handles matching
  the page's attributions; the two de-escalation requests; the 2019 row
  confirming the complaint predates the measured 2025 escalation by six
  years. Two UTC-vs-Eastern dating slips (the Dec 2025 and Aug 2026 rows
  land a day earlier in Eastern) — honest, minor.
- **Not verifiable:** the headline measurements come from
  `imessage_export_deep_20260813.csv` (183,787 parsed rows), which is not
  held in this repo's raw/ tree. The numbers are page-attributed testimony,
  not re-derived (dat:1112). The audit's nine-complaint/four-person
  headline tally rests on the page's own count; the held corpus confirms
  six plus the 2017 extra.
- **The audit's own boundary applies here too.** The August 2025 deviance
  audit was single-model, no inter-rater check, a sketch baseline ("35-year
  old American male, some college, ISTJ/ESTJ-typical"), delivered at 92%
  stated confidence as "a living edge case"
  ([`dat:0891`](../data/0891-deviance-audit-structure-and-boundary.md)).
  The complaint record survives without the audit; the audit's scores do
  not survive without the audit.

## The evidence against the thesis

- **Attribution of the 2019 PA contact is the page's.** The handle
  +17249204125 carries no display name in the held CSV (dat:1112). The
  earliest, most load-bearing row has the weakest attribution.
- **Annie's complaints are relationship-loaded.** "Do you not understand how
  overwhelming it is getting paragraph after paragraph" (2026-02-19) and "I
  can't ready these paragraphs upon paragraphs" (2026-08-08) arrive inside
  the terminal window of an eleven-year relationship ending August 2026.
  They may measure the relationship's death, with texting as the available
  register.
- **Six complaints in seven years is thin as a base rate.** Against
  183,787 parsed rows in the deep export (unheld), six documented
  complaints is a rate so low it raises the opposite question: given the
  volume, why did only six recipients ever say it out loud? Either the
  behaviour is tolerated by most, or the untyped irritation the page flags
  as its own open gap is real and large — both cut against the
  complaints-as-representative reading.

## How this bears on the audit

This is the second of the audit's claims with primary backing (the other
being the contact Gini). But note the asymmetry: the Gini replicated
*quantitatively* on a different export; the texting-deviance statistics did
not replicate because the export they were computed on is unavailable. The
complaint record is stronger than the audit's numbers — verbatim,
multi-counterparty, seven years — and the audit's numbers are weaker than
the complaint record. If you keep one, keep the quotes.

## Open questions

- The page's own key gap: the 2020–2024 trough. Why did the complaints
  cluster 2019, then 2025–2026? Did the behaviour dip, or did recipients
  stop saying it?
- The answer-rate cost curve (54.7% vs 93.8%) — causality direction.
- Whether the unheld deep export can ever be located; without it the
  statistics stay testimony.

## Cross-links

- [`int:contact-gini-0-9556`](contact-gini-0-9556.md) — the other texting-side
  measurement, which replicated where this one's statistics couldn't.
- [`dat:1112`](../data/1112-texting-deviance-audit-complaint-record-verified.md) —
  the verification record; quotes and timestamps.
- [`dat:0891`](../data/0891-deviance-audit-structure-and-boundary.md) — the
  audit's structure and the two-claims-survive boundary.
