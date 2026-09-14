+++
id         = "evt:2021-22-valeria-affair"
layer      = 2
type       = "event"
title      = "Valeria Iglesias Cid affair — the decade's one unauthorized infidelity (winter 2021–22 peak)"
cites      = ["dat:1259-valeria-iglesias-cid", "dat:0626-institutional-out-feb-2026-quote-unheld-dansynth"]
confidence = "low"
importance = 3
tags       = ["relationships", "infidelity", "au-zaatar"]
created    = "2026-09-09"
rechecked  = "2026-09-10"

[when]
start  = "2021"
end    = "2022"

[[edges]]
rel         = "about"
target      = "ent:valeria-iglesias-cid"
strength    = "moderate"
asserted_by = "other"
note        = "Page testimony only; the held corpus cannot supply the affair's SMS-side evidence."
+++

## What happened

Per the old wiki's account: Dan Frank's affair with Valeria Iglesias Cid,
19-year-old Au Za'atar hostess, peaking in **winter 2021–22** — "the decade's
one unauthorized infidelity." It was covered by the night-class alibi, a
fictitious 9pm college schedule he held for roughly 2021–23
([`dat:0626`](../data/0626-institutional-out-feb-2026-quote-unheld-dansynth.md)).
The page's Instagram-side findings — 4,884 messages, Nov 2020–Aug 2025, with
a Dec 2021–Mar 2022 peak — depend on an Instagram JSON source the page names
but which is not held in this repository ([`dat:1259`](../data/1259-valeria-iglesias-cid.md)).

Dan's own words, per the relationship record: *"would have literally moved
to chile for her i swear to god."* He swore his feelings to her on Milo — the
oath object.

## Dated sequence (all page testimony)

- **2020-11 – 2025-08** — the page's stated message span (Instagram source,
  unheld).
- **2021-12 – 2022-03** — the affair's peak ("winter 2021–22"), per the page.
- **2025-12-27** — the sole held-corpus occurrence of "valeria": Dan-sent
  *"Me encanta valeria"* ([`dat:1259`](../data/1259-valeria-iglesias-cid.md)).

## Evidence

- **For:** page testimony only — the old wiki's account, consistent with the
  operator's own record (the wiki-brain corpus; see
  [`ent:valeria-iglesias-cid`](../entities/valeria-iglesias-cid.md)).
- **Against:** all four of the page's iMessage anchors are **absent** from the
  held corpus: "Hey I'm in ny" (2023-09-02) — 0 hits; the 2024-11-03
  re-contact to Annie's handle — 0 hits; "The kiss 😂" (2025-07-17) — 0 hits;
  "valeria virus" — 0 hits. The string "valeria" appears exactly once
  corpus-wide (the 2025-12-27 line above). The +56-style handle the page
  associates with her carries only four rows: three inbound on 2025-09-10
  ("Hey", "I'm going to ny", "I think you're in Penn") and one Dan-sent
  "Miss u" on 2026-02-15 ([`dat:1259`](../data/1259-valeria-iglesias-cid.md)).

The held iMessage record cannot supply the page's SMS-side evidence. **This
event is carried as page testimony, explicitly so** — per the ingest rule.

## Contradictions

None internal; the contradiction is evidential: a detailed affair narrative
with zero held-corpus support beyond one late line.

## Open questions

- The Instagram JSON (`raw/self/instagram/`) named by the page is not held
  here; the 4,884-message figure and the Dec 2021–Mar 2022 peak are
  unverified.
- Whether any held message beyond the single 2025-12-27 line touches the
  relationship.

## Cross-links

- [`ent:valeria-iglesias-cid`](../entities/valeria-iglesias-cid.md) — the
  consolidated relationship record.
- [`ent:au-zaatar`](../entities/au-zaatar.md) — the workplace.
- [`evt:2021-03-au-zaatar-hired`](2021-03-au-zaatar-hired.md),
  [`evt:2024-08-au-zaatar-exit`](2024-08-au-zaatar-exit.md).
