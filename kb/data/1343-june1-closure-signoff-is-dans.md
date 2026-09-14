+++
id            = "dat:1343-june1-closure-signoff-is-dans"
layer         = 1
type          = "datum"
title         = "The 'sic semper lupanis' June 1 sign-off is Dan's message in the held corpus"
claim         = "The June 1, 2026 closure run in the held corpus/messages.csv is an unbroken Dan outbound sequence from row 223934 (2026-06-01 04:21:47 UTC, 'I'm ashamed to have thought you were the person you clearly are not') through row 223939 (2026-06-01 04:27:49 UTC): 'Goodbye forever. This was not how it should have ended but. sic semper lupanis.' Every row in the window is sender 'Me' (Dan); 04:21:47–04:27:49 UTC is 00:21:47–00:27:49 EDT, exactly the window the fallout-verdict page names. This confirms the page's 2026-08-13 misattribution correction: the sign-off was never Annie's. It also confirms the earlier closure-night exchange (rows 223817–223933, 04:00:08–04:18:16 UTC) was a three-party group chat including the [phone redacted] handle and [phone redacted], with Tuquick's lines ('You can have her back ?', 'She's a compulsive liar', etc. arriving two weeks later) distinct from it."
cites         = ["src:imessage-corpus-2026"]
measurement   = true
confidence    = "high"
extraction    = "Direct Python scan of corpus/messages.csv on 2026-09-09: searched /sic semper/i (single hit, row 223939, sender Me) and enumerated all rows with date_sent in '2026-06-01 4:' — 123 rows 223817–223939, of which 223934–223939 are all sender 'Me' with no interleaving. The senders in the earlier window are 'Me', [phone redacted], and [phone redacted]. Timestamp conversion per the standing rule: corpus/messages.csv = UTC, old-wiki = Eastern; 04:27:49 UTC = 00:27:49 EDT."
importance    = 5
tags          = ["annie-ulmer", "corpus", "closure", "june-2026", "verification"]
created       = "2026-09-09"

[when]
date = "2026-06-01"
+++

The page's correction needed no corroboration beyond reading the source: the
sign-off is Dan's, in a run where Annie's number says nothing after
04:11:29 UTC ("Understood"). The correction is exactly the kind of
row-level check this repository exists for — and the held slice had it all
along.
