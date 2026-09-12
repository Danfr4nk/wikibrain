+++
id            = "dat:1344-tuquick-june15-defection-partially-verified"
layer         = 1
type          = "datum"
title         = "The Tuquick defection pivot verifies; two of the page's four 'verbatim' June 15 quotes do not exist in the held slice"
claim         = "The held corpus/messages.csv holds 297 rows from the Tuquick [phone redacted] handle: 204 on 2026-06-01, 25 on 2026-06-15, 1 on 2026-06-16, 1 on 2026-07-08, 12 on 2026-07-17, 13 on 2026-07-26, 1 on 2026-08-13, 37 on 2026-08-17, 3 on 2026-08-19. The June 15 defection pivot the Tuquick page builds on is corpus-attested: 'You can have her back ? She's no good (trauma bond to the cuck)' (message id 224136, 2026-06-15 17:14:58 UTC, handle) and 'She's a compulsive liar with a drug addiction' (224137, 17:15:12 UTC, handle), plus 'you can have her back something is seriously wrong with her in her thirties...' (224167, 18:03:12 UTC) and repeated 'You can have her back' lines on 2026-07-26 (224947, 224951). But the page's 'claimed verbatim' quoting does not survive a whole-corpus string search: 'She's a compulsive liar and you two deserve each other fr,' 'You could keep her because I don't want her,' and 'You got a girlfriend for life now kiddo. Have fun tryna keep her out of other niggas face' occur nowhere in the 192,140-row corpus. The held lines differ from the quoted forms. Likewise the page's June 1 group-chat quotes ('Get her you said you had her,' 'She's not at my house bro,' 'You can have her back ?' at 04:00–04:03) are absent; the closest held lines in that window are 'Nah you can have her' (223922, 04:15:33 UTC) and 'Nah not worth it , there's normal girls in the world' (223933, 04:18:16 UTC). The page's sources are the unheld merged CSV exports (imessage_2124702449_both_all_now.csv and siblings), which are larger than the held slice — its quotes read as drawn from that larger export. The pivot is true; the verbatim-ness is not corroborated."
cites         = ["src:imessage-corpus-2026", "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Direct Python scan of corpus/messages.csv on 2026-09-11 with header-derived column indexes (message_id/date_sent/sender/text). The date_sent field is inconsistently zero-padded, so timestamps were normalized before windowing. Handle identified by known anchor texts ('Morgantown st by BFS'). Whole-corpus substring searches for each quoted line returned the mid numbers above or zero hits. Caution for downstream: an earlier inspection (2026-09-10) reported 354 handle rows; the current file yields 297 — cite the current file's numbers, not the earlier count. Row counts here are message_ids in this file."
importance    = 5
tags          = ["tuquick", "annie-ulmer", "corpus", "june-2026", "verification", "quote-mismatch"]
created       = "2026-09-09"

[when]
date = "2026-06-15"
+++

## Why this matters

The page explicitly labels its quotes 'claimed verbatim.' The held slice
confirms the *events* (the June 15 reversal, the offer to return Annie, the
'compulsive liar' framing) but not the *strings*. Any future quote
attribution for the Tuquick thread should carry the caveat that the held
slice and the merged export the page drew on differ in content.

## Held open

The merged-export CSVs that carry the page's exact quoted lines are not in
this repo's corpus/ tree. Their location is unknown; the page's quotes may
be fully accurate against them.
