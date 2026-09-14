+++
id          = "src:exportify-csvs-2026-09-11"
layer       = 0
type        = "source"
title       = "Exportify CSV haul (15 files, pulled 2026-09-11)"
source_type = "document"
acquired    = "2026-09-11"
provenance  = "Spotify playlist exports made by Dan via Exportify (session dated 2025-12-29 20:54 EST per his Chrome history in the Google Takeout archive), stored in his Google Drive, pulled to ~/workspace/your_files/playlists/exportify/. Standard Exportify header: Track URI, Track Name, Album Name, Artist Name(s), Release Date, Duration (ms), Popularity, Explicit, Added By, Added At, Genres."
reliability = "primary"
location    = "~/workspace/your_files/playlists/exportify/"
confidence  = "high"
importance  = 4
created     = "2026-09-11"
tags        = ["music", "playlist", "raw-data", "exportify"]
+++

## Contents

| File | Rows | What it is |
|---|---|---|
| Liked_Songs_big.CSV | 1,403 | Liked snapshot, newest Added At 2025-11-10; holds 498 URIs absent from both later exports |
| Liked_Songs.csv | 1,391 | Liked snapshot, newest 2026-06-02 (strict subset of the June export) |
| SPOTIFY_LIKED_2025-2026_JUNE.csv | 1,415 | Liked snapshot, newest 2026-06-09 |
| canonical_liked_songs.csv | 1,913 | Union of the three Liked exports by Track URI (derived deliverable) |
| 2025_MASTER_CRATE_exportify.csv | 170 | Crate snapshot; content reflects ~2025-11-11 |
| MASTER_COLLECTED_CRATES.csv | 489 | Merged super-crate |
| Your_Top_Songs_2025_b.csv | 100 | Spotify's own Top Songs 2025 |
| FINDERS_FEE_VIP_CRATE.csv | 52 | VIP crate |
| MaxOut.csv | 59 | VIP crate |
| ULTRA_DEMi.csv | 42 | VIP crate |
| GOODBYE_BPD_GIRLZ.csv | 40 | VIP crate (liquid dnb) |
| FALL_2025_MEGAMIX.csv | 41 | VIP crate |
| ALPHABET_BOYS_JAN26.csv | 63 | VIP crate |
| flat_circle_mix.csv | 87 | VIP crate |
| what_huh.csv | 65 | VIP crate |
| FATSO_FLATSO.csv | 25 | VIP crate (pure liquid dnb) |

Row counts are data rows (header excluded). The `Added At` column is the
dated listening history the whole v2 analysis rests on.
