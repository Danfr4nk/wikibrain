+++
id            = "dat:0628-garrett-claire-husband-nine-of-ten-held"
layer         = 1
type          = "datum"
title         = "Garrett (Claire's husband, Annie's brother-in-law): 9 of the page's 10 mentions verified verbatim; four dated specifics absent from the held corpus"
claim         = "**Verified verbatim in the held iMessage corpus.** The Garrett page claims *\"ten mentions in eleven years\"*; a full-text scan of the held corpus (192,140 rows) returns **9** rows containing 'garrett', all consistent with the page: *\"Hahah idk um garretts wife\"* (2017-01-19 14:48:49, Dan-sent — the marriage-establishing line); *\"garrett works for jim shorkey right\"* (2017-10-03 15:25:37, Dan-sent — the Jim Shorkey dealership employment); *\"So Claire said she didn't mind. Then she said that Garrett is being weird about it because it's literally like three of his friends and their girlfrie…\"* (2018-04-29 00:42:29, from Annie's handle — the 'Garrett is being weird' glimpse); *\"Okay… well Claire Garrett and the kids are here for dinner.\"* (2025-08-02 22:20:04 — the dinner at Annie's parents, 17 days before the severance); plus four post-closure 2025-12 → 2026-08 mentions (Garrett's work Christmas party, Monday late work, dance pickup, kids drop-off). **Not in the held corpus:** *\"Claire and Garrett are here\"* (2018-10-21); *\"Garrett's dad died\"* (~2024-05-09); the 2025-03-17 weather-delay school run; the 2025-07-05 'show'; and the 2021 *\"my uncle Garrett\"* message from an unrelated correspondent (the page's 'second Garrett, kept separate'). Those five specifics rest on the unheld dumps (`all_imessages_complete_dump.txt`, the 2025 CSV slices); the tenth mention is likewise in the unheld portion. The page's own *Gaps* (surname unrecorded, marriage date, the 'show', whether Dan has an independent relationship with him) are all intact — the held record adds nothing to close them. Handle redacted per the corpus [phone redacted] convention."
attributed_to = "src:old-wiki-export-2026-09-04"
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
confidence    = "high"
extraction    = "Direct Python scan of corpus/messages.csv for 'garrett' (case-insensitive): 9 rows, dates 2017-01-19 → 2026-08-13, transcribed above with sender fields. Negative scans for 'garretts dad', 'dad died' (Garrett-linked), 'weather delay', 'uncle garrett' → no Garrett-relevant rows. The Garrett page (corpus__3.txt line 57305, 90 lines) is present verbatim in raw/old-wiki-export-2026-09-04/whole.txt, including the infobox ('Ten mentions in eleven years; surname unrecorded') and the 'A second Garrett, kept separate' section."
importance    = 3
tags          = ["corroborated-primary", "garrett", "claire-ulmer", "imessage", "family"]
created       = "2026-09-09"

[when]
start = "2017-01-19"
end   = "2026-08-13"
+++

## What this establishes

The page's two load-bearing identity facts — Claire is married to Garrett,
and he works at Jim Shorkey — are both Dan's own words in the held corpus,
dated 2017. The page's structural claim (*\"the reason four pages in this
wiki are filed under single names\"* — the surname never appears) is
consistent with the held record: none of the nine mentions supplies a
surname. The 'thinness is the finding' reading survives the check: nine
mentions across the held slice, all reported by Annie or Suz or Dan
second-hand, none a direct Dan↔Garrett exchange — the held corpus contains
no thread in which Garrett himself speaks.

## What it does not establish

The page's first_contact infobox date (2016-04-06) has no anchor in the
held corpus — no 2016 'garrett' row exists — so it comes from the unheld
dumps. The four dated incident claims and the second-Garrett firewall are
likewise unheld here; the firewall matters for future ingest (a 'Garrett'
mention from an unrelated 2021 correspondent must not be folded in), and
this node records it so a later pass does not.
