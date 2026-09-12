+++
id            = "dat:0948-ally-corpus-count-correction"
layer         = 1
type          = "datum"
title         = "Ally thread: 2,073 rows in current held corpus, 2018-12-17 to 2026-09-07 — page's 1,987 is a stale snapshot"
claim         = "The current held corpus contains **2,073 Ally-thread rows**, ranging **2018-12-17 20:59:53 UTC to 2026-09-07 18:00:07 UTC**. The destiny page's **1,987** figure is snapshot-specific and stale against the current export — not wrong for its time, but not current. The same staleness pattern applies to the astrology page's 1,987 figure and its 907-message Ally count in the top-20 table (dat:0951): counts from older snapshots drift as the corpus is re-exported. Per the standing rule, counts are derived from the dated record, never carried as constants."
cites         = ["src:imessage-corpus-2026"]
confidence    = "high"
extraction    = "Handle-scoped count and min/max date_sent over corpus/messages.csv (192,140 records), Ally thread. The 1,987 figure appears in the destiny page (corpus__3.txt line 74984) and the astrology page (line 75346). Timestamps UTC."
importance    = 2
tags          = ["ally-lubin", "corpus-counts", "stale-snapshot", "correction"]
created       = "2026-09-10"
+++

## Notes

- The 86-row gap between 1,987 and 2,073 spans the August 2026 burst and subsequent re-export; the corpus is a live artifact and any page's count is a timestamped claim, not a constant.

## Cross-references

- [`dat:0945`](0945-ally-2026-08-18-burst-verified.md) — the verified burst counts.
- [`dat:0951`](0951-astrology-top-20-table-unheld.md) — the astrology page's table built on the older snapshot.
