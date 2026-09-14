+++
id            = "dat:1204-the-office-held-verified-idiom-and-unheld-naming-finding"
layer         = 1
type          = "datum"
title         = "The Office page: 'that's what she said' verified in held corpus; Schrute Farms 2019 line already in dat:0617; 2008 naming-infrastructure finding rests on the unheld tweet archive"
claim         = "The wiki/interests/the-office page's idiom-level claim verifies: *\"i think that's what she said\"* is in the held corpus at 2017-05-24 17:27:54 UTC, outbound — exactly matching the page's date. The Schrute Farms secret-show memory (*\"one time i went to a secret show in buffalo where fall out boy performed as 'schrute farms'\"*, 2019-09-02 01:44:32 UTC = 2019-09-01 EDT) is already filed with full provenance in dat:0617 and is not re-derived here. The page's actual finding — that the show operated as naming infrastructure (the Winter Park apartment called 'schrute farms' in the account's third tweet, 2008-09-24; the kitten shortlist 'ari, dwight, or mose?', 2008-10-24; 'dwight marries angela', 2008-12-05) — rests on the tweet archive, which is not held in this repository; the page's own stated falsifier (nothing dates the apartment's name relative to the November 2007 show, so 'he took it from the gig' is a reading, not a record) is preserved as the honest boundary. The Michael Scott political-lens material (Sondland testimony analogy, 'Next pres was Dwight d Eisenhower' 2024-06-27) is from the 2019 Twitter-analysis doc and the 2024 archive — neither held here — and the Eisenhower line returns zero held rows."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read from wave-6 slice (wiki/interests/the-office.md, 128 lines from whole.txt:16031). Held scans 2026-09-10: 'i think that's what she said' -> exactly one row (2017-05-24 17:27:54 UTC, is_from_me=1); 'Next pres was Dwight d Eisenhower' -> zero rows. The 2008 tweets are quoted on the page from the tweet archive; archive.jsonl is not in this repository's raw/ tree. dat:0617 covers the 2019-09-01 EDT Schrute Farms iMessage verbatim."
importance    = 3
tags          = ["the-office", "corroborated", "twitter", "testimony", "unheld-source"]
created       = "2026-09-10"

[when]
start = "2007-11-19"
end   = "2019-09-01"
+++

## Division of labor with dat:0617

dat:0617 holds the 2019 iMessage verification. This node holds the page's
*other* two findings: the held-verified 2017 idiom instance, and the
unheld 2008 naming-infrastructure finding with its own stated falsifier —
filed as attributed testimony, not as re-verified fact.
