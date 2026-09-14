+++
id            = "dat:0299-libby-titus-death-unverifiable-in-held-corpus"
layer         = 1
type          = "datum"
title         = "Libby Titus's 2024-10-13 death is on the wiki but has no record in the held iMessage corpus"
claim         = "The master timeline's Tier-1 entry for **2024-10-13** states that Libby Titus — Steely Dan's musical partner and Annie's client — died at age 77. The old wiki carries this on the annie-ulmer and 307-e-76th pages. The held iMessage corpus (corpus/messages.csv) contains **zero** rows matching 'Libby died', 'libby t-i-t-u-s', or any 'Titus' surname; its eight 'libby' hits are unrelated (2021–2023 messages about libby products, a 2022 'LIBBY' text, an Annie 'libby 3' fragment). The death is therefore not corroborated by any held source — it is an old-wiki claim with no re-verifiable provenance in this repository."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "low"
extraction    = "Observed directly: searched corpus/messages.csv for 'libby' (8 hits, all unrelated — verified by reading each), 'titus' (0), 'Libby died' (0). The old-wiki-export lines for the claim are in the annie-ulmer/307-e-76th sections (whole.txt); the master-timeline Tier-1 entry sits at corpus__3.txt ~115800. No corroboration attempt via web was made in this pass."
importance    = 3
tags          = ["master-timeline", "libby-titus", "death", "corpus-gap", "unverified"]
created       = "2026-09-09"

[when]
start = "2024-10-13"
end   = "2024-10-13"
+++

## What would verify it

The death of a public figure (Steely Dan announced Titus's death in October
2024) is checkable against contemporary news and the announcement itself — a
web check is flagged, not performed here. What the kb should record in the
meantime: the wiki's date/age claim has *no* held-source support, so it must
not be treated as corroborated.
