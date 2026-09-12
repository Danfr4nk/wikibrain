+++
id            = "dat:0807-libby-arc-absent-held-corpus"
layer         = 1
type          = "datum"
title         = "Libby arc: zero held-corpus rows — 'Libby died' (2024-10-16) and the Steely Dan link are never_observed in the iMessage record"
claim         = "The Libby page's two most checkable anchors — Dan writing *\"Libby died\"* on **2024-10-16** and pasting the Steely Dan announcement URL on **2024-11-01** — have **zero hits** in the held corpus: a case-insensitive scan of all 192,140 rows returns 0 rows containing 'Libby died' and 0 containing 'steelydan.com/news/libby'. Only 2 rows contain 'libby' at all: a 2025-09-11 Dan message about 'libby dems' in the House, and a 2026-09-06 Annie-handle message about coming home 'after being with Libby from 8am-3:30pm' — apparently a different, later Libby, not Titus. This is `never_observed` in the held channel, not `known_not_to_occur`: the page's sources are fragment exports not held here, and the held corpus's 2024 coverage for the Annie thread is partial at best. Recorded so a future reader does not mistake the absence of a held-corpus instance for evidence the messages never happened."
cites         = ["src:imessage-corpus-2026"]
measurement   = true
confidence    = "moderate"
extraction    = "Direct Python scans of corpus/messages.csv (192,140 rows), 2026-09-09: 'libby' → 2 rows (2025-09-11 02:22:52 is_from_me=1: 'They were trying to do a moment of silence in the house of reps today and some libby dems screamed about it'; 2026-09-06 05:12:11 from the Annie handle: 'Why didn't you show this and be the partner i desperately needed. I would | Come home after being with Libby from 8am-3:30pm. Straight to work until 10/11pm.'). 'Libby died' → 0; 'steelydan.com/news/libby' → 0; 'Libby Fagen' → 0. The page's 'Libby died' passage at corpus__3.txt lines 62513-62520."
importance    = 2
tags          = ["libby-titus", "imessage", "negative", "measurement"]
created       = "2026-09-09"
+++

## What this means

The entire Libby Titus employment arc — the most consequential correction on
the Annie page (she was not unemployed for a full year after the 2023 firing)
— is load-bearing on exports this repository does not hold. The held corpus
cannot supply it and cannot refute it. The 2026-09-06 'Libby' from the Annie
handle is a live loose end: if that is the same workplace context the page
describes, it is not — Titus died in 2024. Noted, not resolved.
