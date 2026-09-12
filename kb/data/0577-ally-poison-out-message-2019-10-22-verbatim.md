+++
id            = "dat:0577-ally-poison-out-message-2019-10-22-verbatim"
layer         = 1
type          = "datum"
title         = "The 2019-10-22 'get the poison out' message is the operator's own, verbatim in the held corpus"
claim         = "The erotic-architecture page's live-test section quotes the operator (2019-10-22): *\"you don't even have the decency to allow me to see you naked so i can get the poison out.\"* The full message is **verbatim in the held corpus** (`corpus/messages.csv` row 110946, `is_from_me=1`, `date_sent` **2019-10-22 06:33:01 UTC** = 02:33 EDT Oct 22, so the page's date holds in both zones): *\"what a perfectly appropriate ending of a convo to sum up our history. me sending you money and confessing i think you're the most perfect and literally my dream girl and you don't even have the decency to allow me to see you naked so i can get the poison out\"*."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Row located by direct Python CSV scan of corpus/messages.csv (192,140 held records) for 'poison out' — 4 hits; row 110946 matches the page's quote. date_sent '2019-10-22 6:33:01' (UTC; held corpus is UTC per the timestamp convention; 06:33 UTC = 02:33 EDT, same calendar date). is_from_me=1 (the operator's own message). Full text transcribed verbatim above. The page's rendering (corpus__3.txt line ~21841+238, '## The live test' section) quotes the tail clause correctly; the export's Ally timeline (whole.txt line 107601) places the same quote in October 2019 ('closing the same night, that he wants a photograph \"so i can get the poison out\"'). The page's frontmatter connection (corpus__3.txt lines 21841+, ally-lubin evidenced-by) treats this as the explicit 'get the poison out' statement of the inaccessibility mechanism."
importance    = 3
tags          = ["ally-lubin", "imessage", "verbatim-quote", "erotic-architecture"]
created       = "2026-09-09"

[when]
start = "2019-10-22"
end   = "2019-10-22"
+++

## What the check confirms

The quote is real, the operator's, and correctly dated: no timezone
displacement (06:33 UTC Oct 22 is Oct 22 in Eastern). The page's use of
it — as Dan's own explicit statement that arousal in the Ally channel
runs on inaccessibility ('get the poison out' rather than consummate) —
is faithful to the full text, which makes the money-confession and the
naked-photo demand part of the same closing-night message. The full
message is longer than the quoted clause and worth keeping whole: the
'perfectly appropriate ending of a convo to sum up our history' frame is
part of the datum.

## What it does not confirm

The page's prospective falsification test (the August 2026 elopement
pitch, the August 21 love letter, the ninety-day window after August 19,
2026) is forward-looking from the page's creation and is not evidence;
it is recorded here only as the page's own stated test, not as data. The
Ally-side events themselves belong to wiki/people/ally-lubin, outside
this ingest.
