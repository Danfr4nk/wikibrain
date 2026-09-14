+++
id         = "evt:2025-11-kristin-ends"
layer      = 2
type       = "event"
title      = "The Kristin relationship ends over 0; the Dec 9 block holds"
cites      = ["dat:0803-kristin-terminal-sixteen-minutes-corroborated", "dat:0801-kristin-thread-held-corpus-count-20014", "dat:0304-kristin-date-range-revision-november-end"]
confidence = "moderate"
importance = 5
tags       = ["kristin-prentiss", "severance", "annie-decade"]
created    = "2026-09-09"

[when]
start  = "2025-11-02"
end    = "2025-12-10"
+++

<!-- prose for humans; the frontmatter is for machines -->

[[edges]]
rel         = "about"
target      = "ent:kristin-prentiss"
strength    = "strong"
asserted_by = "self"

[[edges]]
rel         = "followed"
target      = "evt:2025-08-kristin-starts"
strength    = "strong"
asserted_by = "self"
note        = "Pure sequence: the relationship's start precedes its end. No causal claim."

## What happened

The Kristin relationship ended over **$40** — the wiki's causal framing,
carried as page-attributed testimony — across two message beats on
**2025-11-02** (14:33 ET) and **2025-11-04** (21:56–21:57 ET), timed in
the terminal-table verification
[`dat:0803`](../data/0803-kristin-terminal-sixteen-minutes-corroborated.md).
November ran 53 messages — the withdrawal month — and a 2026-08-16
corpus analysis moved the relationship's end to **November 2025** (the
old page's 2025-09-01 → 2025-12-10 dating was an explicit "best-effort
timestamp of first and last sighting"; the re-analysis itself is not
re-verifiable here)
[`dat:0304`](../data/0304-kristin-date-range-revision-november-end.md).
The close played out in December: a **171-row burst on Dec 9** ending in
the terminal sixteen minutes — her *"All this is screenshotted. Blocking
you now. Don't contact me again or an officer will be reaching out. Thank
you"* (23:55:49 UTC) against his *"mr. officer i live at 337 saratoga
drive"* (23:56:19 UTC) — verified message-for-message
[`dat:0803`](../data/0803-kristin-terminal-sixteen-minutes-corroborated.md).
The Dec 9, 2025 block has held permanently: the record's one clean
severance, against which the Annie pattern is measured.

## Dated sequence

- **2025-11-02 14:33 ET:** the first $40 message (19:33 UTC held)
  [`dat:0803`](../data/0803-kristin-terminal-sixteen-minutes-corroborated.md).
- **2025-11-04 21:56–21:57 ET:** the second $40 beat (02:56–02:57 UTC held)
  — the dispute that ended it, per the page's causal story.
- **2025-11 (month):** 53 messages — the withdrawal month
  [`dat:0801`](../data/0801-kristin-thread-held-corpus-count-20014.md).
- **2025-12-09:** 171-row burst; the terminal sixteen minutes, 18:40–18:56
  ET, verified beat for beat — her IC3 complaint link (23:45:24 UTC), the
  IPR Center referral form (23:51:04 UTC), her block threat (23:55:49 UTC),
  his address taunt (23:56:19 UTC). No charges documented on either side
  [`dat:0803`](../data/0803-kristin-terminal-sixteen-minutes-corroborated.md).
- **2025-12-10 20:29 ET:** the thread's final held row (2025-12-11 01:29:12
  UTC) — consistent with the page's "final message on 10 December" once
  UTC→EST is applied
  [`dat:0801`](../data/0801-kristin-thread-held-corpus-count-20014.md).

## Evidence for

- The terminal sixteen minutes corroborate **message-for-message** with one
  explicit clock translation (page times are EST; corpus is UTC−5 in
  December) — the strongest verification tier this wiki has
  [`dat:0803`](../data/0803-kristin-terminal-sixteen-minutes-corroborated.md).
- The November withdrawal is measured, not inferred: 53 messages exactly
  [`dat:0801`](../data/0801-kristin-thread-held-corpus-count-20014.md).

## Evidence against / limits

- The **$40 causal story is thin in the held record.** The Nov 2/4 beats
  are timed; the claim that the relationship "ended over $40" is the
  page's, carried as testimony, with no independent corroboration of what
  the $40 consisted of
  (`ent:kristin-prentiss` carries the same caveat).
- The November end date is a **reported conclusion, not a re-verified
  one**: the 22,018-message 2026-08-16 pass is not held here
  [`dat:0304`](../data/0304-kristin-date-range-revision-november-end.md).

## Contradictions the ingest found

- The end-date revision chain (2025-09-01 → 2025-12-10 "best-effort" →
  November 2025) is the third instance in the ingest of the wiki
  correcting its own first/last-sighting heuristics against a fuller pass;
  the November date supersedes but awaits the flagged re-derivation from
  the held corpus
  [`dat:0304`](../data/0304-kristin-date-range-revision-november-end.md).

## Open questions

- What the $40 dispute actually consisted of — the causal story behind the
  number.
- Whether the final Dec 10 row is a post-block message from her or Dan's
  outbound tail.
- Recompute the last-contact date directly from the held corpus to test
  the "ended in November" conclusion (flagged, not done).

## Cross-links

- `ent:kristin-prentiss` — person node; `ent:tom-maison` — the introducer.
- `evt:2025-08-kristin-starts` — the relationship's open.
