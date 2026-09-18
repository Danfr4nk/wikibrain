+++
id         = "dat:1789-suz-corpus-business-filter"
layer      = 1
type       = "datum"
title      = "Suz-corpus business-message filter (Dan's instruction)"
claim      = "Dan instructed that clearly-business realtor/client messages in Suz's archive are excluded from the wiki-brain pipeline; personal threads are never line-filtered."
cites      = ["src:sammy-chat-transcript-20260918-1430"]
confidence = "high"
reliability = "primary"
importance = 4
created    = "2026-09-18"

[when]
date   = "2026-09-18"
+++

Dan's suggestion, particulars designed by Sammy, his veto standing. Operational spec: (1) blank-contact sent-only rows (~35k, 2014-2026) excluded as business by default; a later handle-ID pass resolving one to a personal contact flips it back in. (2) Unidentified high-volume transactional numbers excluded once content-confirmed as client logistics; until confirmed, held out of the pipeline and flagged for ID. (3) Real-estate transactional content (showings, listings, closings, MLS numbers, property addresses) in otherwise-unidentified threads. (4) Personal threads (Dee, Annie, Dan, family) are NEVER line-filtered — 'everything goes in' holds at full strength inside personal correspondence. (5) Content wins on edge cases: a business row carrying personal substance goes in. (6) The filter logs exclusion counts by category so the exclusion is auditable, never silent; the source TSV is never modified — the filter lives in the pipeline, not the archive. Rationale: third-party privacy (clients' numbers and transaction details), not an importance judgment. NOT a standing order on par with the CUMTHREAD3 carve-out.
