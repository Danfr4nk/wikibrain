+++
id            = "dat:1021-favs-masterlist-counts-and-breadth-retraction"
layer         = 1
type          = "datum"
title         = "FAVS MASTERLIST: 1,860 tracks / 1,477 artists / 1.26 per artist; the 'built for breadth' temperament claim is retracted by the page itself"
claim         = "The Music Favorites page relays the FAVS MASTERLIST counts: 1,860 tracks across 1,477 unique artists (~1.26 tracks/artist), inclusion-only with no numeric ratings, drawn from two Origins: 1,384 'SPOTIFY LIKED 2025–2026' rows and a 463-track manually curated 'MUSIC LIST (start-2024)' holding the emo/pop-punk cluster. Release-year distribution: 2025 = 530, 2026 = 197, 2024 = 145, 2023 = 88, 2022 = 51, 2017 = 51, 2021 = 45, 2020 = 40, 2019 = 38. Top-count artists: JPEGMAFIA 13, Kanye West 11, My Chemical Romance 9, New Found Glory 8, Elliott Smith 7, rSUN 7, LYNY 7, Taking Back Sunday / Fall Out Boy / Say Anything / Knock2 / Effin / Mau P 6 each. The page's own postscript retracts its opening inference: the 1.26 average is kept as a count but 'built for breadth' is retired as a claim about how attention works — the same 86.6% singleton rate is the book shelf's, produced there by two subjects read through forty-four hands. What the page keeps: the two-wave structure (archived manual catalog vs live Spotify feed — 871 of 1,383 dated Spotify rows are 2024 or later) and the three parallel clusters (experimental/abrasive hip-hop, emo/pop-punk/indie rock, electronic/bass). The CSV is not held in this repo (raw/self/favorites/FAVS MASTERLIST.csv absent), so all figures are relayed through the prior wiki; the corpus page and old-wiki export match verbatim."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read from corpus__3.txt line 12638 (183 lines); the counts, year table, top-artist table, Origin split (1,384 / 463), and the 'built for breadth' retraction paragraph match raw/old-wiki-export-2026-09-04/whole.txt lines 6415-6424 verbatim. FAVS MASTERLIST.csv was not found under raw/ or elsewhere in this repo (confirmed by the coordinator's known-gaps list). Cross-reference: dat:0482 covers the successor eclecticism page's Architecture B version of the same library (two waves, three clusters, eighteen-year continuity); the year-top table and the breadth-retraction postscript are unique to this page."
importance    = 3
tags          = ["music", "favorites", "counts", "old-wiki", "attribution", "retraction"]
created       = "2026-09-09"

[when]
start = "2024-01-01"
end   = "2026-08-01"
+++

## What survives, what doesn't

**Counts** (all relayed, all text-identical between the corpus snapshot
and the old-wiki export): the two ingestion waves, the release-year
concentration (530 + 197 = 727 of 1,860 in 2025–2026, i.e. 39% of the
library in roughly eighteen months), and the top-artist table.

**Retracted by the page itself** (2026-09-01-eclecticism rewrite,
carried back onto this page): "a library built for breadth" as a claim
about how attention works. The inference was the page's own, and the page
withdrew it — a correction-propagation instance done right, unlike the
stale-copy cases documented elsewhere (see the coordinator notes on
end-fight.md and full-sail).

## What it does not confirm

No independent re-derivation of any figure was possible — the CSV is not
held. The three-cluster functional reading (hip-hop / emo / bass as
parallel maintenance) and the music-reactivation-recovery window reading
are the prior wiki's synthesis, preserved here as its attributed
testimony. Continuity anchors (2007 statuses, Elliott Smith Aug 2013,
Electric Zoo 2010) overlap dat:0482; they are not re-checked here.
