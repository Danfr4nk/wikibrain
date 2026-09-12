+++
id          = "src:spotify-api-session-2026-09-11"
layer       = 0
type        = "source"
title       = "Spotify API library session, 2026-09-11 (dfrank88)"
source_type = "other"
acquired    = "2026-09-11"
provenance  = "Live Spotify partner-API session against Dan's connected account (dfrank88): 124 flat library entries paginated (an earlier response's total_items field read 98 — discrepancy retained, unresolved). Playlist contents fetched via paginated item endpoints (10/page). Spotify's API exposes no folder hierarchy and no per-track play counts."
reliability = "primary"
confidence  = "high"
importance  = 3
created     = "2026-09-11"
tags        = ["music", "spotify", "api-observation"]

[when]
date = "2026-09-11"
+++

## What was observed

- Dated monthly playlist series runs 2011 → HOLIDAY 2020, then jumps to
  2025 material. No playlist title containing `2021` or `21` appeared
  across all paginated entries; no 2021–2024 titled entries at all.
- Track counts via pagination: HOLIDAY 2020 = 46, Jan 2012 = 8, AUGUST
  2017 = 5, FALL 18 = 39, Sep 2011 = 21, 2025 YEARLIST = 30, FALL 19 = 20.
- Liked Songs: 1,642 items (account-level count).
- Play counts are not exposed by the API — Dan's "songs I heard once"
  claim about 2020 cannot be checked here; only Last.fm scrobbles could
  confirm it (username Skier8869; profile unreachable without the link).
