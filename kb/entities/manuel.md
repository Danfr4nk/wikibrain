+++
id          = "ent:manuel"
layer       = 2
type        = "entity"
title       = "Manuel"
entity_kind = "person"
cites       = ["dat:0810-manuel-thread-count-correction-quotes-verified",
               "dat:0452-au-zaatar-employment-block-41-months"]
confidence  = "high"
importance  = 3
created     = "2026-09-09"
tags        = ["people", "au-zaatar"]
+++

<!-- prose for humans; the frontmatter is for machines -->

## Summary

Manuel is an Au Za'atar coworker turned genuine friend (2023–2026), the
friendship conducted mostly in Spanish — Spanish-language banter, cocaine
jokes, and check-ins on Valeria and Annie. Of the crew, he is the one whose
friendship most clearly outlasted the job's August 2024 end: the thread runs
to February 2026, and the record keeps him as a live friend, not a former
coworker.

## The record

The held corpus carries the full two-sided thread at **99 rows — 65 sent, 34
received** — spanning 2023-08-13 to 2026-02-25 UTC, on the numeric handle the
page redacts
([`dat:0810`](../data/0810-manuel-thread-count-correction-quotes-verified.md)).
The page reported 45 messages (11 sent, 34 received) from
`MASTER_MESSAGES_DB_DUMP.csv` and claimed direction was 'reliably recorded
here.' The **received count matches exactly (34)**, which pins the
discrepancy: the fragment export dropped Dan's 54 outbound rows and kept 11
mislabeled ones. Same failure family as the Christian Hanson thread — the
fragment export's direction metadata is not to be trusted, and two pages in
the same ingest wave now show it silently discarding Dan's outbound side.

The page's date range and relationship beats all re-verify — the thread opens
August 2023 and the final exchange is February 2026 — and the quoted texture
lines are verbatim in the held corpus:

- **2023-10-30** — *"William shankespeare es aburrido el no usa perico y el chapo"*
- **2025-12-23** — *"okay I'm calling ICE"* / *"Vale, voy a llamar a ICE"*
- **2025-12-27** — *"Y tenemos tres gramas de perico"* and *"Me encanta valeria"*
- **2026-02-23** (Dan) — *"Yo soy el mencho"*

The 'Me encanta valeria' and 'tres gramas' rows sit in the same December 2025
exchange the page describes; the Valeria and Annie check-ins are real.

## Evidence for and against

**Held (high confidence):** the two-sided thread, its full span, and every
texture quote above. The relationship's substance — coworker turned genuine
friend, the Spanish, the friendship surviving the job — is intact.

**Not re-checked / not filed:** the page's attribution of the thread's origin
('October 2023 message referencing Tarik telling him to stay') was not
individually verified. **Manuel's last name remains unfiled** — no source in
the held corpus or the page supplies it. The 'different Manuel' in jack-rusko's
2017 thread is the page's own disambiguation and is not contradicted here.

## Contradictions and open questions

- The count correction matters only methodologically, but it matters:
  MASTER_MESSAGES_DB_DUMP silently presented a one-third thread as the whole
  one, and the page trusted its direction column. Any other thread counted
  from that export inherits the doubt.
- Last name, the thread's October 2023 origin story, and anything before
  2023-08-13 are open.

## Cross-links

- [`dat:0810`](../data/0810-manuel-thread-count-correction-quotes-verified.md) — count correction, verbatim quotes
- [`dat:0452`](../data/0452-au-zaatar-employment-block-41-months.md) — the employment block
- [`ent:tarik-fallous`](tarik-fallous.md) — the page attributes the thread's origin to Tarik telling Manuel to stay
- [`ent:valeria-iglesias-cid`](valeria-iglesias-cid.md) — the 'Me encanta valeria' line's subject; her held evidence is thin
- [`ent:dimitri`](dimitri.md), [`ent:ismaila-barry`](ismaila-barry.md) — the rest of the crew
