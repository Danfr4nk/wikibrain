+++
id            = "dat:0672-jason-bermejo-mohler-exchange-absent-held"
layer         = 1
type          = "datum"
title         = "The 2025-10-06 Mohler-transition exchange is absent from the held corpus"
claim         = "The page's REVISED note (2026-07-19) — correcting 'Jamie Mohler' from Jason's girlfriend to a fourth member of the Full Sail cohort — hinges on a 2025-10-06 exchange in Jason's thread: Dan telling Jason which Full Sail-era friends his mother remembers (*'Jester = forgettable / Dunn = gross and forgettable / Mohler = a literal woman'*) with Jason answering *'Haha she badass.'* The page's connections block cites this exchange twice as 'the primary corpus corroboration of Mohler's transition.' Neither *'literal woman'* nor *'she badass'* (any case) appears anywhere in the held 192,140-row messages.csv — not in Jason's thread, not anywhere. The exchange, and therefore both the transition corroboration and the girlfriend-misread correction, rest on the page's unheld source CSVs, not on anything checkable here."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Case-insensitive substring search over the full text field of corpus/messages.csv for 'literal woman' and 'she badass': zero hits. REVISED note read at corpus__3.txt lines 58882-58892; the two connection claims at lines 58766-58772 and 58784-58787. The 2025-10-06 date is the page's; October 2025 is well covered in the held corpus (4,369 records in 2024; October 2025 falls in a dense period), so this is not the 2022-style gap — the material is in a different pull."
importance    = 4
tags          = ["jason-bermejo", "jamie-mohler", "old-wiki", "corpus", "gap"]
created       = "2026-09-09"

[when]
start = "2025-10-06"
end   = "2025-10-06"
+++

## Why this is load-bearing

This is not a trivia line — it is the cited evidence for a transition
and for a retracted relationship claim, referenced from two connection
edges and presumably from the Jamie Mohler page itself. A correction
whose evidence is unheld is a correction on credit. The note is
internally careful (it describes exactly what was misread and why), and
the operator's own confirmation of Mohler's transition may exist
elsewhere, but *this page's* documentary basis for it cannot be
reproduced from held sources. Whoever ingests wiki/people/jamie-mohler
should treat the 2025-10-06 exchange as attested-but-unheld.

## What would settle it

The page's stated sources — MASTER_MESSAGES_DB_DUMP.csv and the
20260714 imessage_export CSV — are the pulls that should contain it. If
those surface, the exchange is the first thing to re-run, along with the
February 2026 message counts
([`dat:0671`](0671-jason-bermejo-thread-metrics-stale.md)).
