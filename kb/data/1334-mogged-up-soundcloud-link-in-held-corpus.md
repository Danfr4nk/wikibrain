+++
id            = "dat:1334-mogged-up-soundcloud-link-in-held-corpus"
layer         = 1
type          = "datum"
title         = "The Uffie 'MOGGED UP' SoundCloud link exists in the held message corpus"
claim         = "corpus/messages.csv row 216206 carries the URL soundcloud.com/mogzartmusic/uffie-the-art-of-uff-mogged-up, sent by Dan on 2026-03-10 20:25:15 UTC. This is the only held-corpus occurrence of the string 'mogged up' as a series brand: the release is hosted on the MOGZART channel, not a standalone Mogged Up account."
cites         = ["src:imessage-corpus-2026"]
measurement   = true
confidence    = "high"
extraction    = "Direct Python scan of corpus/messages.csv (203,625 rows) for the regex /mogged.?up/i plus 'mogzartmusic': 5 total hits, all from Dan; only row 216206 contains the Uffie track slug. The page names this exact slug, so the body string matches."
importance    = 3
tags          = ["music-production", "mogged-up", "soundcloud", "aliases"]
created       = "2026-09-09"

[when]
date = "2026-03-10"
+++

The one link `wiki/interests/music/aliases/mogged-up` cites as its
confirmation exists verbatim in the held corpus. What the scan also shows is
that **no other trace of the Mogged Up brand** appears in the corpus: five
`mogzartmusic` URL hits across 2025–2026 are all ordinary MOGZART tracks, and
no message ever names Mogged Up as an alias, a project, or an account.

The corpus attests the branding string, not the release-vehicle history.
