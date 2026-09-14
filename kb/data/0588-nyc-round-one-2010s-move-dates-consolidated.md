+++
id            = "dat:0588-nyc-round-one-2010s-move-dates-consolidated"
layer         = 1
type          = "datum"
title         = "NYC Round One (2010–2013): the three anchor move tweets verify verbatim against the corpus's twitter archive; the page's own gaps (Suboxone start, May 2013 departure, scrape-floor counts) stand"
claim         = "The 2010s/NYC-1 period page matches the old-wiki export (2026-09-04, including the 2026-09-02 Twitter-revision) apart from separator formatting. Its tweet-anchored move dates verify against the corpus's twitter-2010 and twitter-2012 archive sections in corpus__3.txt: **2010-02-28 20:30:43 UTC** — *'peace out, florida. it's been real.'* (the departure; page says 20:30); **2012-03-29 19:40:59 UTC** — *'Goodbye, Brooklyn!'* (page: 19:40); **2012-03-30 19:55:24 UTC** — *'Hello, Manhattan.'* (page: 19:55). Cross-reference: the Pro Tools certification sequence the page opens with was already verified to the second by another worker in **dat:0726** (fail 2010-01-25, pass 2010-01-26 19:40:41, 'Brooklyn here we come!!' 10m26s later) — not re-covered here. **The page's stated limits stand and are not softened:** (a) the Suboxone start year (~Jan 2010 vs 2011) is pinned only from memory, with no medication named in the tweet window; (b) the May 2013 departure is *not* fixed by the tweets — the last city-placing tweet is 2012-11-18 and the date rests on context-core plus the July 2013 'i just moved back' line to EJ Rags; (c) the 2010–2012 yearly counts (265/225/205) are live-scrape reconstructions — floors, not totals. The twitter archive itself is not present in raw/ (no raw/self/twitter/ in this repo); the corpus__3.txt twitter-2010/2011/2012 page sections are the held copy checked here."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page body read from corpus__3.txt line 117224 (251 lines); byte-compared against raw/old-wiki-export-2026-09-04/whole.txt — only separator-formatting differences. Tweet rows read from the corpus's twitter-2010 section (line 83184) and twitter-2012 section (line 87278): departure tweet 2010-02-28 20:30:43 UTC with x.com status id 9790456643; 'Goodbye, Brooklyn!' 2012-03-29 19:40:59 UTC, status 185451506303111170; 'Hello, Manhattan.' 2012-03-30 19:55:24 UTC, status 185817524024250370. All verbatim, timestamps to the second."
importance    = 3
tags          = ["nyc-round-one", "2010s", "twitter", "old-wiki", "timeline"]
created       = "2026-09-09"

[when]
start = "2010-01-25"
end   = "2013-05-31"
+++

## What the check confirms

The page's headline dates — the three it claims the Twitter archive
settled — are all platform-timestamped and verbatim. The 2026-09-02
revision's core move (resting the page on dated public originals rather
than on the Gemini-_58 reconstruction and the wrong Facebook 'places
lived' field) is sound on the evidence checked.

## What it does not confirm

Everything the page itself flags: the Suboxone start, the May 2013
departure date, the 764-count completeness, and the interpretive layer
(the 'systemic rupture' framing, the Williamsburg Foursquare geography,
the chiptune-to-EDM progression, the LCD Soundsystem MSG anchor) —
none of which were re-checked here. The 764-count and the NYC-reference
percentages (8.8/8.9/10.2/0.3) are page-computed and filed as such.
