+++
id            = "dat:1200-gore-vidal-claims-attributed-not-held"
layer         = 1
type          = "datum"
title         = "Gore Vidal page's concrete claims are old-wiki testimony; zero hits in the held slice"
claim         = "The wiki/interests/gore-vidal page's concrete, dated claims — the Cato-bootloader litmus test (*\"Have they heard of DJ Shadow or read Gore Vidal?\"*), the 2025-05-05 hypothetical-groomsmen joke (*\"the ghost of gore vidal\"* alongside *\"a bag of cocaine, the first 3 fall out boy albums\"*), and the 2025-05-29/30 bookshelf texts (*\"OMG he's got the gore vidal historical fiction series\"*; *\"those gore vidal books are all the way on the left of the book shelf\"*) — are all present in the old-wiki export (whole.txt: 9 hits, including line 4619 and 108977-108979 carrying the 2025-05-05 joke). Zero rows in the held corpus (corpus/messages.csv, 192,140 rows) contain 'gore vidal' or the quoted text. The page sources them to the dox-scan iMessage dump and Gemini activity exports, which are not held in this repository. The interpretation built on top (Vidal as identity anchor, social sorting key, ideology-profile touchstone) is therefore carried exactly as the old wiki asserts it — internally consistent in the export, but not independently re-verifiable in this pass."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "low"
extraction    = "Page body read from wave-6 slice (wiki/interests/gore-vidal.md, 79 lines from whole.txt:13479). Old-wiki export grep 2026-09-10: 'gore vidal' -> 9 hits including the 2025-05-05 groomsmen joke and the shelf texts; 'I don't hear the narrative' check not applicable (separate page). Held corpus grep for 'gore vidal' and for each quoted fragment -> zero rows."
importance    = 2
tags          = ["gore-vidal", "testimony", "unheld-source", "ideology"]
created       = "2026-09-10"

[when]
start = "2025-05-05"
end   = "2025-05-30"
+++

## What would change this filing

The 2025-05 texts fall inside the held corpus's date range (2011–2026), so
their absence from the held slice is informative but not decisive: they may
live on a different handle/channel than the 192,140-row export. If the
dox-scan dump becomes held, this node should be re-checked — the export
itself is the named source.
