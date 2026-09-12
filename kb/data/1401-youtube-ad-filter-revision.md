+++
id            = "dat:1401-youtube-ad-filter-revision"
layer         = 1
type          = "datum"
title         = "YouTube watch history: 14.1% of 'watches' are ad impressions, and the Nov 2025 - Feb 2026 gap is a coverage artifact"
claim         = "The YouTube watch-history page carries two 2026-07-20 revisions that downgrade its own figures. (1) A re-parse found 14.1% of the old export's 15,149 'Watched' entries are Google Ads ('From Google Ads' tagged, no real engagement) — true videos genuinely watched is closer to 13,011, and every per-year/per-channel table (2012 peak 3,538; 2023 2,622; 17,302 total watched; 4,146 unique channels) is Watched-block counts, not ad-filtered counts: an upper bound, not engagement. (2) The fresh export through 2026-07-20 surfaces a ~100-day near-total gap in this account's real watches, 2025-11-08 to 2026-02-15 — exactly one real video watched ('Man in Cave (Reupload)', Nov 8), everything else (78 events) ad impressions in dense back-to-back clusters — but the operator confirms multiple YouTube accounts share the Google login and he was almost certainly watching on a different one; the gap is a single-account coverage limitation, not a behavioral gap. The broader caveat: every number on the page is single-account data; total real watching is confirmed higher. The June-July 2026 'explosion' (1,036 events June, 1,616 July to the 20th) is 80.3% / 96.4% ads — real watches: 204 in June, 58 in July to the 20th. What survives the revisions: the era structure (2011-13 O&A/archive peak; 2014-21 lull; 2022+ left-commentary resurgence — Vaush 177 in 2023, Mr. Beat 98 in 2023, Majority Report 157), and the Aug 2025 - Jul 2026 real-watch-only channel ranking: Breaking Points 112, LastWeekTonight 95, Majority Report 93, Tor's Cabinet of Curiosities 91, We're In Hell 42, JREG 23."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read from corpus__3.txt line 101507 (341 lines); all sections read. The two Google Takeout HTML exports are not held in this repo — all counts, the 14.1% ad share, the 100-day gap, and the operator's multi-account correction are the page's testimony. The page also notes a minor discrepancy (240 ad-URLs at the July 2025 export boundary missing from the new export; spot-checked as ad rows, not a data-integrity concern)."
importance    = 4
tags          = ["youtube", "watch-history", "intake", "old-wiki", "attribution"]
created       = "2026-09-09"

[when]
start = "2007-01-01"
end   = "2026-07-20"
+++

The intake-constancy implication is live: the page notes its 11.58
watches/active-day figure is a single-account lower bound, contradicting the
'verified constant' presentation, unresolved pending a consolidated
multi-account export. New-to-the-corpus channel names the page adds: Tor's
Cabinet of Curiosities, We're In Hell, JREG, STRANGE AEONS, exurb1a, DJ Peach
Cobbler — plus a late-June 2026 cluster of 2000s pop-punk nostalgia (Green
Day and Fall Out Boy 'AOL Sessions' live videos, June 30).
