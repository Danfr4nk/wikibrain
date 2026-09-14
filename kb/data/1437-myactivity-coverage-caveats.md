+++
id = "dat:1437-myactivity-coverage-caveats"
layer = 1
type = "datum"
title = "MyActivity coverage caveats: what the log cannot show"
claim = "MyActivity has four load-bearing limits: (1) the 2023-2024 volume collapse is a logging change, not behavior - post-2022 data cannot evidence absence; (2) coverage ends 2025-07-27, so the Oct-Dec 2025 dance-music re-entry is entirely outside this source; (3) YouTube 'Watched' titles are polluted with ad impressions ('From Google Ads' entries, e.g. the 22x top 'watch' is a donation ad); (4) only Google-signed-in activity is captured - Spotify, Twitter/X, and iMessage behavior are invisible here by construction."
cites = ["src:myactivity-2026-09-12"]
confidence = "high"
tags = ["myactivity", "methodology", "coverage", "caveats"]
importance = 3
created = "2026-09-12"

[[edges]]
rel = "about"
target = "ent:dan"
strength = "strong"
asserted_by = "llm"
+++

**Evidence class:** methodological note on src:myactivity-2026-09-12.

1. **The 2023-2024 collapse is artifact, not behavior.** Searches fall from 8,638/yr (2020) to 73 (all of 2024); visits from thousands to 2; passive watch-logging from 2,246 (2023) to 570 (2024). No behavior change suppresses passive logging across every product at once. Any argument of the form "he stopped searching for X after 2022" is invalid against this source.
2. **The re-entry is out of frame.** The dance-music re-entry (first crate wave Oct 31, 2025) postdates the last record (2025-07-27) by three months. MyActivity can show the collapse window but not the comeback.
3. **Ad pollution in watches.** The single most-watched "video" (22x) is a donation ad; other top entries are ad titles flagged "From Google Ads" in the source HTML. Title-frequency analysis of watches must filter these.
4. **Product blindness.** Search 51k, YouTube 16.5k, YouTube Music 2.5k, Wikipedia 2.2k, Reddit ~1.2k, Maps 678, Twitter 456, Pornhub 485, XVideos 252 - but Spotify (his primary music platform), X/Twitter app usage, and all messaging are outside this log. Absence here is not absence everywhere.
5. **Dedup is approximate.** 9,434 cross-file duplicates removed on (timestamp, action, text, url); near-duplicate actions seconds apart (e.g. double searches) are preserved as separate records, which is correct - he really did search "bernie sanders" twice in the same minute.
