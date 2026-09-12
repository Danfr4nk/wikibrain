+++
id            = "dat:1345-tuquick-aug17-19-reopening-current-corpus"
layer         = 1
type          = "datum"
title         = "The August 17-19 Tuquick reopening verifies in the current corpus at 40 handle rows; the address and mother-threat lines are verbatim"
claim         = "In the current corpus/messages.csv the Tuquick handle's August activity is 37 rows on 2026-08-17 and 3 on 2026-08-19 — 40 rows, not the page's '97 further messages across August 17-19' (that figure comes from the page's unheld merged export). The escalation the page describes does verify, nearly verbatim, in the held slice: address vicinity sent unprompted — 'Morgantown st by BFS' (message id 229911, 2026-08-17 16:16:11 UTC, handle; the page quotes it exactly at 12:16 ET); the full street address (229937, 16:26:21 UTC, handle, '463 Morgantown st ?' — the page quotes '463 Morgantown st'); Dan's own read of it as an implied threat — 'So why are you sending me my address? Its an implied threat and any court would read it as such' (229963, 16:43:38 UTC, Dan); and the conditional threat naming his mother — 'I have stuff to ruin you and your mom , soon as you do something I don't like I'm gonna show you' (229969, 16:48:09 UTC, handle; the page's quoted wording differs but the content is the same). Not in the held corpus at all: the page's claimed Dan line 'Please come see me' (16:48:40) — the only 'Please come see me' string in 192,140 rows is a 2016 message (110579). The August 20 call/voicemail claims are page-attributed. The 2026-08-19 02:55:59 line (231150) is 'Threatening Annie because she doesn't love your cock snorting cuck ass' — an Annie-directed taunt, not the page's described Dan/mother threat. Addresses and phone digits are not reproduced in this node."
cites         = ["src:imessage-corpus-2026", "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Direct Python scan of corpus/messages.csv on 2026-09-11 with header-derived indexes and normalized zero-padding on date_sent. Handle [phone redacted] rows by date re-derived from scratch. Anchor strings searched verbatim. Caution: a 2026-09-10 inspection of what may have been a different slice reported 86+11 rows; the current file has 37+3 — this node's numbers are from the file as it exists now."
importance    = 5
tags          = ["tuquick", "annie-ulmer", "corpus", "threats", "august-2026", "verification"]
created       = "2026-09-09"

[when]
start = "2026-08-17"
end   = "2026-08-19"
+++

## What holds and what slips

- **Holds:** the address send (unprompted, in the exact minute the page
  claims), the street-address follow-up, Dan naming it an implied threat,
  the conditional mother-threat.
- **Slips:** the message *count* (40 vs 97) and the page's exact quote
  *forms* — the page's merged export carried strings the held slice does
  not, and vice versa.
- **Absent:** the 'Please come see me' Dan line the page quotes — no such
  row exists in the held corpus.

## Held open

The merged-export CSVs (imessage_2124702449_both_all_now.csv etc.) that the
page's quotes were drawn from are not held here. The August 20 phone-call
and voicemail claims rest on those files alone.
