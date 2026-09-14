+++
id            = "dat:0440-charles-davenport-four-message-2010-thread"
layer         = 1
type          = "datum"
title         = "Charles Davenport: a four-message Facebook thread, Jan 24 – Dec 8, 2010, at the seam of Dan's Brooklyn move"
claim         = "Charles Davenport is an early NYC Facebook contact whose entire documented relationship with Dan is a four-message thread spanning 2010-01-24 to 2010-12-08. The earliest message is Dan's (Jan 24, 2010): *\"hey if you're going to be around at some point today let me know, i'm in need of another run down there\"* — answered the same evening by Charles: *\"im here...wats your #..phones on.\"* A May 1 exchange is a pure check-in (*\"how are?\"*, *\"how everything n the nyc?\"*); a December 8 exchange is casual banter (*\"love yo pic...cute,\" \"no homo lol\"*). The thread metadata corroborates the count and date range; the quotes come from the old wiki's transcription of the Facebook HTML file, which is not held in this repo. Gaps: how they know each other, what 'down there' refers to, no contact beyond 2010."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:facebook-export-2026-06-23"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 53177 (62 lines); byte-identical to raw/old-wiki-export-2026-09-04/whole.txt lines 46857-46907 (verbatim match verified programmatically). Thread shape corroborated at metadata level: raw/facebook-threads/MANIFEST.json (src:facebook-export-2026-06-23) carries one Charles Davenport thread with 4 messages / 4 message blocks, from_dan=1, years ['2010','2010'] — matching the page's '4 (Facebook)' and 2010-01-24–2010-12-08 range. The message contents themselves live in the gitignored Facebook HTML exports and were not re-checkable here; the quotations above are the old wiki's transcriptions. Relationship-to-Dan is recorded as 'unknown' on the page's infobox."
importance    = 2
tags          = ["people", "facebook", "nyc-era", "old-wiki", "manifest-corroborated"]
created       = "2026-09-09"

[when]
start = "2010-01-24"
end   = "2010-12-08"
+++

## What the check confirms

The thread's shape is corroborated twice: the page's own corpus-record table
(4 messages, Jan 24–Dec 8 2010) and the independently generated
Facebook-manifest metadata (4 messages, 4 blocks, one counterpart, both ends
in 2010). The MANIFEST's from_dan=1 is consistent with the page's account that
the earliest message is Dan's.

## What it does not confirm

The quotes are not independently verified — they arrive via the prior wiki's
reading of a file this repository deliberately does not hold (gitignored
Facebook contents). The contextual claims — 'the same window Dan relocated to
Brooklyn and started at Ishlab', 'one of the earliest-dated exchanges in the
Facebook message corpus' — are the page's framing and were not checked against
the move timeline here. 'Down there' is genuinely unexplained on the record
(the page itself flags it), so no reading of it is filed.
