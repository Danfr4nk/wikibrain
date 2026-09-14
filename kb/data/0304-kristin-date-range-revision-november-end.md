+++
id            = "dat:0304-kristin-date-range-revision-november-end"
layer         = 1
type          = "datum"
title         = "Kristin relationship end date revised: old wiki dated 2025-09-01 → 2025-12-10; 2026-08-16 corpus analysis moved the end to November"
claim         = "The master timeline's Tier-1 entry for **2026-08-16** records that Claude's analysis of 22,018 messages from the Kristin corpus found the relationship ended in **November 2025** — the old page's dating of 2025-09-01 → 2025-12-10 was a *\"best-effort timestamp of first and last sighting\"* (her profile: *\"The old page dated the relationship 2025-09-01 → 2025-12-10\"*). The old wiki export confirms the prior range (whole.txt:15625, date_range_start 2025-09-01 / date_range_end 2025-12-10; 15631–15652, 15658). The re-analysis itself (the 22,018-message pass) is not re-verifiable in this repository — only its reported conclusion is on the wiki. Filed as a revision-chain record, not as an independently verified end date."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "low"
extraction    = "Observed directly: master-timeline entry at corpus__3.txt ~116560 ('2026-08-16 — Kristin end date revision'); old-wiki-export whole.txt:15625 (frontmatter date_range_start/date_range_end), 15631–15658 (the revision text and 'best-effort timestamp' framing). No independent re-run of the 22,018-message analysis was performed here; the held corpus does contain 2025 Kristin rows, but recomputing the relationship's last-contact date is a separate analysis task flagged, not done."
importance    = 3
tags          = ["master-timeline", "kristin-prentiss", "date-revision", "revision-chain", "unverified"]
created       = "2026-09-09"

[when]
start = "2025-11-01"
end   = "2025-12-10"
+++

## Why the revision chain is recorded

The Kristin dating is the third instance in this wave of the wiki correcting
its own first/last-sighting heuristics against a fuller corpus pass (after the
graduation and Tan-Calabrese cases). The *pattern* — 'best-effort timestamp of
first and last sighting' revised by a dedicated analysis pass — is the datum
as much as the November date. A future pass could re-derive the last-contact
date from the held corpus directly; until then the November end is the wiki's
reported conclusion, not a corroborated fact.
