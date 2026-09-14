+++
id            = "dat:0795-kanye-west-2013-retraction-tweet-verified"
layer         = 1
type          = "datum"
title         = "Kanye West: the 2013 'most racist person/rapper' retraction tweet verifies verbatim; the 11-track count is the old wiki's assertion"
claim         = "Two residual claims from the artist page resolve differently. **(1) Verified.** The 25 August 2013 reassessment quoted in the page's frontmatter — *\"I remembr a 2005 conversation wherein we determined Kanye to be the most racist person/rapper on earth. We didn't have any idea\"* — is verbatim in the old wiki's twitter-2013 archive block at **2013-08-25 17:19:32 UTC** (= 13:19 EDT), tweet id `371683271416872961`, a reply to @skezmarsky (0 likes, 0 replies, 0 reposts). The page's description — 'a 2005 teenage judgement recalled and retracted in public eight years later' — matches the tweet's own framing. **(2) Unheld.** The '11 tracks — second only to JPEGMAFIA in the hip-hop cluster' count rests on `raw/self/favorites/FAVS MASTERLIST.csv`, which is not held in this repository; see dat:0438 for the masterlist totals (2,016 entries) that are likewise the old wiki's pipeline numbers. Per standing governance the count is a snapshot of the masterlist export, not a living total."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Tweet row read from corpus__3.txt lines 90145-90149 (twitter 2013 page, status 371683271416872961, timestamp and text match exactly); the page's frontmatter connection cites wiki/self/twitter/2013 at corpus__3.txt line 11473. The tweet's 2005-conversation framing and the page's 'eight years later' reading are mutually consistent (2005 → Aug 2013). FAVS MASTERLIST.csv: repo-wide find returned nothing; only the old wiki's derived counts are available (dat:0438)."
importance    = 2
tags          = ["kanye-west", "twitter", "favorites", "old-wiki", "unverified-count"]
created       = "2026-09-09"

[when]
date = "2013-08-25"
+++

## What the check confirms

The retraction tweet is the page's strongest dated evidence that the Kanye
attachment was once critical rather than continuous — a contemporaneous,
platform-timestamped first-person statement, not a dossier inference.

## What it does not confirm

The interpretive superstructure (production-lineage framing, 'no uncomplicated
engagement' post-2016) is the page author's reading and carries no independent
evidence. The 11-track figure cannot be recomputed without the CSV.
