+++
id         = "evt:2025-08-kristin-starts"
layer      = 2
type       = "event"
title      = "Kristin Prentiss enters the record"
cites      = ["dat:0801-kristin-thread-held-corpus-count-20014", "dat:0802-kristin-prentiss-surname-self-attested-kayden-absent", "dat:0304-kristin-date-range-revision-november-end"]
confidence = "moderate"
importance = 4
tags       = ["kristin-prentiss", "relationships", "annie-decade"]
created    = "2026-09-09"

[when]
start  = "2025-08"
end    = "2025-09-01"
+++

<!-- prose for humans; the frontmatter is for machines -->

[[edges]]
rel         = "about"
target      = "ent:kristin-prentiss"
strength    = "strong"
asserted_by = "self"

## What happened

Kristin Prentiss entered Dan's life in August 2025 through Tom Maison's
social circle — Tom is the wiki's named introducer
(`ent:tom-maison`, page-attributed). The held iMessage thread opens
**2025-09-01 10:07:17 UTC** with its first held row; the month-level
relationship dating "August–November 2025" is the wiki's own framing
(`ent:kristin-prentiss`), not a dated first-contact row, and no held
record documents the introduction itself. The relationship ran roughly
ten weeks, front-loaded in volume, with a November withdrawal and a
December end. It is "the only other relationship of the Annie decade" —
the one tie against which the Annie pattern's non-exit is measured.

## Dated sequence

- **2025-08 (month):** entry via Tom's circle. The only dating for this
  beat is the wiki's relationship framing and the entity page's "introduced
  Dan to Kristin Prentiss in August 2025" — both page-attributed testimony,
  not a dated row.
- **2025-09-01 10:07:17 UTC:** first held row of the Kristin thread
  [`dat:0801`](../data/0801-kristin-thread-held-corpus-count-20014.md).
- **2025-09-11 08:28:08 UTC / 2025-09-13 15:49:58 UTC:** her two
  self-attestation sends — *"I just don't know how you expect me, Kristin
  Prentiss - to believe that you, Dan Frank are sufficiently healed…"* and
  *"The thing about Kristin Prentiss is I am extremely good at hiding my
  emotions"* (23 "Prentiss" mentions thread-wide)
  [`dat:0802`](../data/0802-kristin-prentiss-surname-self-attested-kayden-absent.md).

## Evidence for

- The thread's held dimensions replicate exactly: **20,014 rows — 10,102
  sent / 9,912 received** — the most exhaustively counted thread in the
  record [`dat:0801`](../data/0801-kristin-thread-held-corpus-count-20014.md).
- The surname rests on first-person self-naming, the strongest identity
  evidence short of a document [`dat:0802`](../data/0802-kristin-prentiss-surname-self-attested-kayden-absent.md).
- The "front-loaded, then dormant" shape is measured: November 2025 = 53
  messages exactly [`dat:0801`](../data/0801-kristin-thread-held-corpus-count-20014.md).

## Evidence against / limits

- Nothing before 2025-09-01 10:07:17 UTC is in the held corpus, so the
  August entry has no primary anchor — it is dated by the wiki's
  relationship framing and the introduction claim, both testimony.
- The introduction mechanism ("through Tom's social circle") is
  page-attributed, never directly observed in a held source.
- The dossier's "mother of Kayden" alternative returned **0 hits for
  "kayden"** across all 20,014 rows (3 hits for "ryder" — her
  half-sister's stepson); left as an open contradiction, not a
  falsification, since negative evidence is not positive
  [`dat:0802`](../data/0802-kristin-prentiss-surname-self-attested-kayden-absent.md).

## Contradictions the ingest found

- Her handle's messages were at one point mislabeled under Tom Maison's in
  the corpus counts — overstating Tom's weight ~2.9x before the correction
  (`ent:tom-maison`).

## Open questions

- The exact meeting date and circumstances in August 2025 — no dated
  primary row exists.
- Whether the 5-row received-side gap between the page's dedicated export
  (20,009) and the held corpus (20,014) is near-duplicate or boundary
  handling — immaterial, but unassigned
  [`dat:0801`](../data/0801-kristin-thread-held-corpus-count-20014.md).

## Cross-links

- `ent:kristin-prentiss` — the person node; `ent:tom-maison` — the
  introducer.
- `evt:2025-11-kristin-ends` — the relationship's close.
