+++
id         = "dat:nyc-2-suboxone-volume-census-20260927"
layer      = 1
type       = "datum"
title      = "Suboxone mention-volume by year in the FTS5 corpus: the regimen goes silent 2020-2024, loud in 2025-2026"
claim      = "FTS5 full-text census of 'suboxone' across the 779,358-document corpus index (master-messages, iphone-gapfill-1/2, ally-annie-iphone, suz-imessage, voice-takeout, annie-thread): mentions by year are 2015:6, 2017:1, 2019:5, 2020:2, 2021:1, 2023:2, 2025:30, 2026:18 (2022 and 2024: zero). The era's two dated in-window mentions are 2019-04-10 ('im almost out of suboxone', 2 months post-move) and sparse 2020-23 rows. The regimen's near-absence from the 2020-2024 record — against 48 mentions in 2025-2026 — is consistent with uninterrupted maintenance in its logistics-only shape: a drug you take daily without incident generates no messages. The 2025 spike sits inside the terminal-phase record, not the era's stable years."
cites      = ["src:imessage-corpus-2026"]
confidence = "moderate"
source_type = "message-corpus"
provenance = "FTS5 index ~/workspace/corpus-index/corpus.db, 779,358 docs as of 2026-09-24"
reliability = "primary"
extraction = "python3 + sqlite3: SELECT substr(d.date,1,4), COUNT(*) FROM docs_fts f JOIN docs d ON f.rowid=d.id WHERE f.text MATCH 'suboxone' GROUP BY 1. Dedup caveat: gapfill-1/2 overlap master-messages on some rows (2015 duplicates observed), so counts are document-mentions, not unique messages."
importance = 4
tags       = ["suboxone", "timeline", "chemical-architecture"]
created    = "2026-09-27"
updated    = "2026-09-28"

[when]
date   = "2026-09-27"
start  = "2015-01-01"
end    = "2026-09-27"
+++

<!-- prose for humans; the frontmatter is for machines -->

## Correction 2026-09-28 — uniqueness pass (work-0159)

The node's own dedup caveat was resolved by a uniqueness pass
(inference_audit work-0159, executed 2026-09-28). Dedup key: (date
truncated to the minute, lowercased sender, lowercased full text). Of
the 65 document-mentions, **26 are cross-corpus duplicates** — 21
master-messages × iphone-gapfill-2, 3 master-messages ×
iphone-gapfill-1, 2 master-messages × ally-annie-iphone — leaving **39
unique messages**.

Unique-message census by year: **2015:3, 2017:1, 2019:3, 2020:2,
2021:1, 2023:2, 2025:16, 2026:11** (2022 and 2024: zero). The shape
the claim describes survives dedup — near-silence 2020-24 against a
2025-26 spike — but the spike magnitudes were roughly double-counted:
2025 30→16, 2026 18→11, 2015 6→3, 2019 5→3. The 2020-24 silence is
unchanged (no duplicates there). The frontmatter `claim` above retains
the original document-mention counts for provenance; the unique-message
counts in this correction are the preferred reading going forward.
Query: FTS5 `docs_fts MATCH 'suboxone'` over 779,358 docs as of
2026-09-28.
