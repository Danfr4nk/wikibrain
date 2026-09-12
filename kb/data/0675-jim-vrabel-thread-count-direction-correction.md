+++
id            = "dat:0675-jim-vrabel-thread-count-direction-correction"
layer         = 1
type          = "datum"
title         = "Jim Vrabel thread is 612 two-way messages, not 313 one-way"
claim         = "The page's Corpus Dimensions table — 313 messages, direction 'marked \"Received\" throughout' and therefore 'read as one-way (Jim to Dan)' — repeats the Jay Lauer count error. The held corpus holds **612 messages** on the thread: **313 from Jim, 299 from Dan**, spanning **2018-03-27 to 2020-09-15** (the last message's 2020-09-15 UTC date is September 14 in local time, matching the page's end date). The direction field is not unreliable in the held pull — Dan's 299 messages are properly marked from_me=1. The 313 is the inbound half only. The texture quotes verify verbatim: *'My Mom is still up so I'll meet up in the alley'* (2018-10-06 06:52:02 UTC) and *'I only have the purple haze it has the highest THC but it's an Indica'* (2018-10-30 01:06:05 UTC, from Jim). The page's qualitative read — a dealer relationship with genuine late-night-hangout texture, near-nightly coordination around his mother's sleep schedule — is consistent with a two-way 612-message thread and is if anything understated by the one-way framing."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Thread located in corpus/messages.csv via 'meet up in the alley' (612 rows; handle withheld per redaction convention — page carries it as [phone redacted]). Direction counts from the CSV is_from_me field. Date range from min/max UTC date_sent. Texture quotes located by exact-substring search, transcribed verbatim."
importance    = 3
tags          = ["jim-vrabel", "old-wiki", "corpus", "correction", "count-correction"]
created       = "2026-09-09"

[when]
start = "2018-03-27"
end   = "2020-09-14"
+++

## The pattern

This is now the third instance of the same error class in this batch:
[`dat:0673`](0673-jay-lauer-direction-and-count-corrections.md) (116 vs
212) and the James thread metrics
([`dat:0671`](0671-jason-bermejo-thread-metrics-stale.md)) show pages
built on pulls where one direction was missing or distrusted, carrying
the received-only count forward as the total. The held corpus
distinguishes directions reliably on all three threads. Any remaining
'Direction unreliable — read as one-way' table in the wiki should be
re-counted against the held pull rather than trusted.
