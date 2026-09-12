+++
id          = "int:contact-gini-0-9556"
layer       = 3
type        = "interpretation"
title       = "The contact Gini as the one claim that survives: relational concentration is structural, not a skill"
perspective = "llm"
cites       = ["dat:0528-contact-gini-inbound-replication-2026-09-09",
               "dat:0529-contact-gini-per-year-replication",
               "dat:0530-contact-gini-node-volumes-spot-check",
               "dat:0531-contact-gini-two-sided-unverifiable",
               "dat:0891-deviance-audit-structure-and-boundary"]
confidence  = "high"
importance  = 5
tags        = ["contact-gini", "deviance", "interpretation"]
created     = "2026-09-09"
updated     = "2026-09-09"
falsifiers  = [
  "A recomputation on a later or richer export that re-derives outbound attribution (recipient handles restored) returns a symmetric two-sided Gini substantially below 0.9 — the thesis about concentration is about inbound measurement only, and a real two-sided number could cut either way.",
  "The per-year replication breaks on a per-year basis: if the 0.95–0.96 band turns out to be driven by one or two anomalous years (2015–2016 relationship onset, 2025–2026 severance), the structural claim weakens into an episode claim.",
  "A comparison population (other heavy iMessage users' Gini coefficients) shows 0.95+ is ordinary for long-duration text histories with one long-term partner — then the number is a property of the medium and the relationship, not of him.",
]
alternatives = [
  "The Gini may be almost entirely a relationship artifact: Annie's thread is 97,768 unique messages out of a 217,573-record corpus, so any eleven-year single-partner history concentrated in one medium would concentrate the inbound Gini by construction — no deviance needed.",
  "The metric may be measuring export completeness rather than life: the held corpus's 2021 slice is 282 rows with a November void, Suz's thread has zero rows in two months — uneven capture across contacts inflates concentration beyond the real imbalance.",
]

[when]
date = "2026-09-09"
+++

## The thesis

The contact-Gini figure — **0.9556 inbound over 498 handles** ([`dat:0528`](../data/0528-contact-gini-inbound-replication-2026-09-09.md)),
replicated independently from the held corpus against the old wiki's 0.9601,
with per-year tables replicating row-for-row in most years
([`dat:0529`](../data/0529-contact-gini-per-year-replication.md)) and node
volumes spot-checking clean ([`dat:0530`](../data/0530-contact-gini-node-volumes-spot-check.md)) —
is the most measurement-solid number in the corpus. The deviance audit's own
boundary is explicit: of all its domain scores and outlier verdicts, exactly
two claims survive independent recomputation against a real comparison
population — relational concentration and graded numeric confidence in casual
text — "and one of the two is a liability, not a skill"
([`dat:0891`](../data/0891-deviance-audit-structure-and-boundary.md)).

The interpretation: this is not a capability being measured. A Gini of 0.95+
with top-1 share at 33.6% and top-5 at 68.0% is **the shape of where a life is
lived**. It says most of his inbound human contact comes from a handful of
handles — a partner of eleven years, a mother, a best friend, a dealer — and
the long tail of 493 other handles is essentially rounding. That is a fact
about social structure, not about performance. The audit measured it as
deviance ("Relationships 88", edge case); the replication shows it is simply
true, and truths about structure should not be scored as deviations from a
normed 35-year-old.

## The evidence for

- **Two exports, one band.** The old wiki computed 0.9601 on MASTER_DUMP
  (184,359 rows); the independent recomputation on held messages.csv
  (192,140 rows) returned 0.9556. Different extracts, ~8,000 rows apart, the
  coefficient lands within 0.005. Handle count matches exactly (498) —
  possibly partly coincidental across exports, but the coefficient agreement
  is not.
- **Per-year stability.** The per-year replication holds across 2015–2026
  (dat:0529), so this is not an artefact of one high-volume year. It is a
  decade-long structural feature.
- **The audit's boundary is load-bearing.** Of everything the August 2025
  self-commissioned deviance audit claimed at 92% stated confidence, the page
  itself says only two survive recomputation. This node is one of them, which
  makes it the audit's best claim and simultaneously the one the audit most
  clearly miscast: a liability, not a skill.

## The evidence against (the thesis, not the number)

- **Two-sided imputation is impossible.** All 99,360 outbound rows in the
  held corpus carry no contact handle; the symmetric-architecture claims on
  the page are re-derivation from the unheld MASTER_DUMP
  ([`dat:0531`](../data/0531-contact-gini-two-sided-unverifiable.md)). What
  survived replication is strictly *inbound* concentration. Any reading about
  his outbound behaviour — how many people he writes to, whether he writes
  back — is unmeasured here.
- **The relationship-artifact alternative is strong.** Annie's thread alone is
  97,768 unique messages. A Gini computed over all contacts will necessarily
  concentrate when one eleven-year partner lives in the same medium as the
  corpus. The number may be measuring "has a long-term partner and archives
  iMessage," which is not a personality trait.
- **Capture unevenness inflates it.** The corpus has documented structural
  gaps (2021 nearly void; Suz thread zero rows in 2016-06 and 2020-05;
  unheld bursts). Missing data is not randomly distributed across contacts,
  and missingness that hits the long tail harder than the top handles pushes
  the measured Gini up.

## What the number does for the corpus

It is the anchor the rest of the deviance audit can be checked against. The
audit's "living edge case" verdict at 92% confidence rests on single-model
judgments with no inter-rater check, predates the June 2026 closure, and
reasons about its own commissioner — an instrument grading its client
([`dat:0891`](../data/0891-deviance-audit-structure-and-boundary.md)). The
Gini is the one claim the audit made that doesn't need the audit. Everything
else in that dossier can be held against this standard: does it replicate on
a different export, or does it only exist inside the instrument?

## Open questions

- A two-sided Gini, if the MASTER_DUMP export ever becomes held, would either
  strengthen or reshape this: symmetric concentration (few senders, few
  recipients) vs asymmetric (broadcasts to many, hears from few).
- A comparison population is the missing falsifier — no one has computed the
  contact Gini of an ordinary heavy text user's archive, so "extreme" is
  asserted, not shown.
- Whether the top-5 composition is stable across the 2015–2026 window or
  whether the severance (Dec 2026, 120-day horizon test) moves the number
  after the corpus window.

## Cross-links

- [`dat:0891`](../data/0891-deviance-audit-structure-and-boundary.md) — the
  boundary that isolates this as one of two surviving claims.
- [`dat:0531`](../data/0531-contact-gini-two-sided-unverifiable.md) — the
  outbound attribution gap, the limit of the number.
- [`int:texting-deviance-audit`](texting-deviance-audit.md) — the other
  texting-side measurement, whose complaints verify but whose statistics
  don't.
