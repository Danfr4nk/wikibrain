+++
id            = "dat:0195-oddball-2013-08-30-tweet-corroborates-attendance"
layer         = 1
type          = "datum"
title         = "The 22:54 Vine post from the Oddball show is directly read in the corpus's twitter/2013 page"
claim         = "The post the old wiki cited to date the Aug 30, 2013 Oddball Comedy & Curiosity Festival attendance is now directly readable in this repository's own corpus text: at **2013-08-31 02:54:20 UTC** (22:54 EDT, Aug 30) the operator posted *\"Frogs and Katie Fletcher at #oddballcomedyfest Pittsburgh\"* with a Vine link (https://vine.co/v/h5mzueimp9b). It is platform-timestamped, first-party, names the festival and the city, and names the companion (Katie Fletcher) — what no ticket records. This extends [`dat:0152`](0152-chappelle-oddball-2013-08-30-appearance.md), which had the same post only through the old wiki's assertion; the open item it named (\"pulling `raw/self/twitter/` and re-reading the post\") is now partially closed: the post itself was found in corpus__3.txt even though the archive file was not pulled."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Read directly from corpus__3.txt line 88821 ff (PAGE wiki/self/twitter/2013.md): the entry '**2013-08-31 02:54:20 UTC** · [373639864820203520](https://x.com/danfrank/status/373639864820203520)' carries text 'Frogs and Katie Fletcher at #oddballcomedyfest Pittsburgh' and vine URL https://vine.co/v/h5mzueimp9b, transcribed verbatim above. UTC-to-Eastern conversion (02:54 UTC Aug 31 = 22:54 EDT Aug 30) matches the old wiki's stated 22:54 timestamp exactly (whole.txt lines 1949, 61262-61328). The katie-fletcher page (corpus__3.txt 61262-61328) lists this as the last of six contemporaneous 2013 posts naming her. The Vine itself is unrecoverable (Vine is defunct; the URL was not followed)."
importance    = 3
tags          = ["concert-record", "contemporaneous-record", "attribution", "corroboration"]
created       = "2026-09-09"

[when]
start = "2013-08-30"
end   = "2013-08-30"
+++

## What changes relative to dat:0152

That node filed the attendance as moderate-confidence because the 22:54 post
was asserted by the prior wiki while the twitter archive sat unpulled. This
node closes that gap for the post: the text, timestamp, and Vine link are now
on this repository's own disk (inside the corpus text), and the 22:54 EDT
reading the old wiki gave the post is confirmed by the platform timestamp.
The Vine video content itself is not recoverable and was not relied on.

## What remains open from dat:0152

The concert log (`table.csv`) is still unheld, so the \"ticket\" leg of the
old wiki's three-record claim rests on the prior wiki alone, and the 2026
retelling is thirteen years post-hoc. The attendance now stands on two
primary legs (ticket per prior wiki, contemporaneous post read directly) —
enough to move the claim from moderate toward high without inventing
confirmation the ticket leg does not have.
