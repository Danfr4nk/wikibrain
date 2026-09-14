+++
id         = "dat:semantic-location-history-discovery-2026-09-12"
layer      = 1
type       = "datum"
title      = "Semantic Location History corpus recovered: 8 trees, 96 unique months, 4 distinct db snapshots"
claim      = "An all-Drive search on 2026-09-12 recovered 8 'Semantic Location History' folder trees (2014-2024 coverage) and 4 semantic_location.db copies, after an initial name search falsely reported the corpus absent."
cites      = ["src:semantic-location-history-2026-09-12"]
confidence = "high"
importance = 4
tags       = ["location-history", "discovery", "drive"]
created    = "2026-09-12"
+++

The initial Drive name search returned nothing and was reported as absence. A second search with shared-drive/all-Drive coverage found 8 folder trees (newest modified 2026-09-08, oldest 2024-05-14, plus 2026-06-10 through 2026-07-13 variants) and 4 semantic_location.db copies. Lesson: the first search silently excluded shared-folder material; future discovery must use all-Drive coverage.

Dedup: 96 unique month JSONs (2014: 5, 2015: 8, 2016: 7, 2017: 9, 2018: 12, 2019: 12, 2020: 9, 2021: 6, 2022: 12, 2023: 12, 2024: 4), 39,214,729 bytes total incl. db files, sha256-verified. 671 duplicate references recorded in manifest.json (same name+size across trees); every Drive file ID preserved. The 4 semantic_location.db copies are NOT identical (4 distinct sha256) — each is a separate snapshot. The newest (2026-09-08) tree's 2018 folder lacks 2018_NOVEMBER.json (11 months); older trees include it. 4 .DS_Store junk files failed download (not data).
