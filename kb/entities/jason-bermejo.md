+++
id          = "ent:jason-bermejo"
layer       = 2
type        = "entity"
entity_kind = "person"
title       = "Jason Bermejo"
cites       = ["dat:0671-jason-bermejo-thread-metrics-stale",
               "dat:0672-jason-bermejo-mohler-exchange-absent-held"]
confidence  = "high"
importance  = 4
created     = "2026-09-09"
tags        = ["friends", "full-sail"]
+++

## Summary

Jason Bermejo is Dan's Full Sail-era friend (2008–), described as "the era's
most durable friendship" — still at message-volume peak in 2025, with no
rupture on record across eighteen years. He is Dan's formative music
influence in the old wiki's telling: the one who introduced Dan to Kid Cudi
and to DIY production. The held corpus gives the thread at 761 messages
(493 Dan-sent, 268 received), running 2017-01-20 → 2026-06-03 — the page's
metrics describe an older, smaller pull. The two claims the page leans on
most heavily about Jason's role in Dan's history — the Kid Cudi
introduction and the Jamie Mohler transition exchange — both rest on unheld
sources; the Mohler exchange is absent from the held corpus entirely, making
its correction "on credit."

## Role in the record

The longest-running creative friendship: music taste and production talk
across the NYC years and the Uniontown return. The thread's February 2026
spike (283 messages — still the all-time monthly peak, next is 2019-04 at
109) shows the channel "re-entered in force" near the corpus end. Jason's
thread also independently timestamps Gabe's death: Dan's *"I had to put gabe
down today"* at 2023-10-30 21:45:44 UTC — correcting the looser "Nov 2023"
carried in summary memory
([`dat:0671`](../data/0671-jason-bermejo-thread-metrics-stale.md)).

## Timeline (held-corpus anchored)

- **2008**: Full Sail — the era's start (unheld testimony; the held thread
  opens in 2017).
- **2017-01-20 → 2026-06-03**: held 1:1 thread — 761 rows, 493 sent /
  268 received.
- **2019-04-24**: a Kid Cudi mention in the thread — the only held
  Cudi-related row; nothing about who introduced whom.
- **2023-10-30 21:45:44 UTC (17:45 EDT)**: Dan — *"I had to put gabe down
  today"*. Eric Jester's independent same-evening condolence at 22:06:05
  UTC: *"I'm so sorry man. He was the cat that made me love cats!"*
  (cross-link [`ent:eric-jester`](eric-jester.md)).
- **2025-03-17 03:31:01 UTC**: the Oscar Lindquist coincidence telling —
  *"i swear to god i was waiting tables in nyc and oscar was at one of my
  tables"*.
- **Feb 2026**: 283 messages — the thread's peak month (the page's "400+"
  figure does not reproduce; the qualitative claim survives).

## Evidence for and against the key claims

**Thread metrics — stale page figures, corrected.** The page's Corpus
Dimensions table (451+ messages, ~187/264 sent/received, Feb 2026 at 400+)
does not reproduce. The held thread is fuller in total (761) yet smaller
on the February peak (283), so the page's numbers describe an older,
smaller pull: its stated sources are unheld CSVs
(MASTER_MESSAGES_DB_DUMP.csv, an imessage_export 20260714 CSV,
interspersed_messages.csv). Neither number can be treated as current.

**The Kid Cudi introduction — unheld.** The claim rests on the unheld
operator-note capture
(`raw/self/captures/2026-07-19_operator-note-full-sail-mohler.md`). The
held thread contains one 2019-04-24 Cudi mention and nothing about who
introduced whom ([`dat:0671`](../data/0671-jason-bermejo-thread-metrics-stale.md)).

**The 2025-10-06 Mohler-transition exchange — absent from held.**
The page's REVISED note (2026-07-19) correcting "Jamie Mohler" from Jason's
girlfriend to a fourth Full Sail cohort member hinges on a 2025-10-06
exchange (*"Jester = forgettable / Dunn = gross and forgettable / Mohler =
a literal woman"* … *"Haha she badass."*). Case-insensitive search for
"literal woman" and "she badass" across the full 192,140-row held corpus:
zero hits — not in Jason's thread, not anywhere. Both the
transition corroboration and the girlfriend-misread correction rest on the
page's unheld CSVs
([`dat:0672`](../data/0672-jason-bermejo-mohler-exchange-absent-held.md)).

## Contradictions and corrections the ingest found

The count-correction pattern here is the same staleness class as the James
Dee page ([`dat:0670`](../data/0670-james-dee-post-july-contact-contradicts-dormancy.md)):
pages built on the dox-scan-era pulls carry metrics the held corpus now
exceeds or contradicts. The Mohler case is the sharper lesson: a
correction whose evidence is unheld is a correction on credit — the page is
internally careful about what was misread, but its documentary basis for
the transition cannot be reproduced from held sources. Whoever ingests
`wiki/people/jamie-mohler` should treat the 2025-10-06 exchange as
attested-but-unheld.

## Open questions

- Whether the Mohler 2025-10-06 exchange and the February 2026 message
  counts survive in the unheld pulls (MASTER_MESSAGES_DB_DUMP.csv, the
  20260714 imessage_export) — the first things to re-run if those surface.
- The Kid Cudi introduction and the DIY-production lineage: testimony only,
  uncorroborated in the held thread.
- Whether contact continued past 2026-06-03; the February 2026 spike
  suggests an active channel near the corpus end.

## Cross-links

[`ent:eric-jester`](eric-jester.md) — Full Sail cohort, Gabe condolence ·
[`ent:dan`](dan.md) ·
[`dat:0671`](../data/0671-jason-bermejo-thread-metrics-stale.md),
[`dat:0672`](../data/0672-jason-bermejo-mohler-exchange-absent-held.md)
