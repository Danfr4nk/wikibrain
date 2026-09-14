+++
id            = "dat:0065-hyperreflexivity-session-mid-2025-unverified"
layer         = 1
type          = "datum"
title         = "The hyperreflexivity AI session is dated to mid-2025 by an employment datum, but its underlying chat exports are not held in this repo"
claim         = "wiki/health/hyperreflexivity.md is built on two related AI-chat exports (raw/self/dox-md/Breaking the anxiety avoidance cycle.md and Breaking the anxiety avoidance cycle (1).md, ~4,200 lines combined) in which Dan asks an AI for a clinical read on his social anxiety; the session is dated to roughly mid-2025 on an internal employment reference (\"let's establish i've been working for the first time since june 2024 for the last 2 weeks. tomorrow i will hit 40 hours for this week\") cross-referenced against the Au Za'atar page's dating of the involuntary job loss (hours cut June–August 2024, unemployment filed August 8, 2024) — nearly eleven months unemployed before returning to full-time work. The dox-md source files are not in this repo's raw/ tree, and the session's verbatim quotes appear nowhere else in the corpus except inside this page's own text, so every quotation on the page (the hyperreflexivity mechanism description, the \"no comment\" on whether the Suboxone is prescribed or self-managed, the two-teeth loss, the three compounding 2025 losses) rests on the wiki's own transcription and is unverified here."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "From wiki/health/hyperreflexivity.md in corpus__3.txt (line ~7199). Verified that raw/self/dox-md/ is absent from this repo's raw/ tree (find returned nothing) and that the quoted lines (\"the more i pay attention\", \"hit 40 hours\", \"most detrmiental of all\") occur in whole.txt only inside this page's own body (lines ~1002, ~1062) — no independent transcription of the chat exports exists in the corpus. One corroborating fragment elsewhere: whole.txt line ~19962 quotes \"No and no\" from Breaking the anxiety avoidance cycle (1).md in a different page's writeup, showing the chats existed and were mined by the wiki, without independently verifying any of this page's quotes."
importance    = 3
tags          = ["health", "old-wiki", "mental-health", "provenance", "unverified"]
created       = "2026-09-09"

[when]
start = "2025-06"
end   = "2025-08"
+++

## What is and is not checkable

**Checkable in principle:** the dating chain. The employment datum inside
the session plus the Au Za'atar unemployment dates place it mid-2025; the
Au Za'atar side of that chain belongs to `wiki/work/au-zaatar`, outside this
worker's page list.

**Not checkable here:** every verbatim quotation. The exports are referenced
as sources but not held, and no other corpus page re-transcribes them. The
one external trace of the chats — the \"No and no\" denial quoted on an
unrelated page — confirms the files were real and mined, not that any line
here is quoted correctly.

## What the page claims that this node does not endorse

The page records the AI's inference that Dan's \"no comment\" on the
prescribed-vs-self-managed question means the supply is unmanaged and feeds
a parallel vigilance layer. That is a model's reading of a non-answer,
preserved in the corpus as such, and this node does not promote it to a
finding. Likewise the page's claim of \"no confirmed treatment engagement\"
is an absence claim over a corpus this pass does not exhaustively search —
recorded, not adopted.
