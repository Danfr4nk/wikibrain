+++
id            = "dat:0125-end-fight-stale-attribution"
layer         = 1
type          = "datum"
title         = "End-fight page: quotes confirmed verbatim, but the 'sic semper lupanis' exit line is Dan's, not Annie's — a correction the main page made that this page missed"
claim         = "Quote checks against the held corpus (+12124702449): Dan's *\"too bad so sad you just couldn't give me any decency and now there's a poison pill baked in\"* (2026-06-01 00:08:19), *\"I saved you from fucking DYING when you were shooting coke and you would sell me out to virtue signal your loyalty to someone else?\"* (04:25:59), and *\"and you will never unring this bell. Have a nice life. Do not forget that you did this to me tonight on top of what you did to me over the last year\"* (04:22:46) are all verbatim, correctly attributed to Dan. **The page's closing attribution is wrong:** *\"Goodbye forever. This was not how it should have ended but. sic semper lupanis.\"* (2026-06-01 04:27:49 UTC = **00:27:49 EDT**, exactly the page's 'June 1 00:27' in local time) is **sent by Dan**, not Annie. The main annie-ulmer.md page already corrected this on 2026-08-13 ('the June 1 exit line is Dan's, not Annie's' — deep-export audit); the end-fight page was never updated and still presents it as 'Annie's.' Volume cross-check: the held corpus holds 666 messages for May 31–June 1 (601 Dan / 65 Annie), consistent with the page's 468 + 121 + ~40 across its two unheld exports. The June 15–16 epilogue's Tuquick defection ('compulsive liar') is corroborated by the Annie page chronology; the fine-tuned-AI-model and Spotify-crate details rest on the page's unheld sources."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page read directly (corpus__3.txt line 106299, 71 lines). bin/corpus-query on corpus/messages.csv: 'sic semper lupanis' → 1 hit (+12124702449, 2026-06-01 04:27:49, Me); 'unring this bell' → 1 hit (04:22:46, Me, with '…on top of what you did to me over the last year' tail the page omits); 'poison pill baked in' → 1 hit (00:08:19, Me); 'I saved you from fucking DYING' → 1 hit (04:25:59, Me). --who +12124702449 --from 2026-05-31 --to 2026-06-01 → 666 matches (601/65). The 2026-08-13 correction is in annie-ulmer.md's changelog (corpus__3.txt ~line 49685)."
importance    = 5
tags          = ["end-fight", "annie-ulmer", "attribution", "stale-page", "corroborated-partial", "old-wiki", "2026"]
created       = "2026-09-09"
+++

## Why this is the most important finding of the batch

Misattributing the relationship's final exit line inverts its meaning:
as Annie's line it reads as her closing the door; as Dan's line — sent
three minutes after the 'unring this bell' message — it reads as Dan
performing finality to himself, in the same breath as 601 other
messages that night. The wiki corrected this on the main page a month
before the export; the event page kept the error. **Any downstream
synthesis quoting the exit line as Annie's (e.g. readings of the
closure's agency) is reasoning from a superseded attribution.**

## Coordination note

This is the second stale-correction finding in this batch (cf. dat:0123:
the impact analysis's 'none have been applied' queue). The wiki's
correction machinery works on individual pages but does not propagate:
end-fight.md and the impact analysis both froze while annie-ulmer.md
moved on. A propagation pass over event pages that quote the June 1
closure is warranted — at minimum end-fight.md and group-chat-closure.
