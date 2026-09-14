+++
id            = "dat:0666-bacharach-discovery-timeline-unverifiable-held"
layer         = 1
type          = "datum"
title         = "The February 2021 Bacharach discovery timeline is unverifiable from held sources"
claim         = "The page's dated discovery table — **2021-02-06 13:39** Dan to Suz *\"I was listening to a podcast and Jake Bacharach was the guest lol\"*; **2021-02-11 22:01** Dan forwards Bacharach's reply to Suz; **2021-02-12 06:44** Dan sends Tom the link — cannot be verified from the held corpus. The held messages.csv contains 162 February 2021 records (2021 is nearly absent overall: 282 records for the whole year), and none mentions Bacharach, the podcast, or the forwarded reply. The page's stated sources for the exchange are `raw/self/dox-scan/all_imessages_complete_dump.txt` and `raw/self/dox-scan/dan tom 2010 2022.txt` — neither is held in this repository's `raw/` tree. The timestamps (hour-level precision, no timezone stated) are therefore carried on the old wiki's attestation alone, as is the full text of Bacharach's reply — the only primary-source sample of his voice in the corpus, including the teenage TV-commercial-for-Rick-Frank's-store confirmation that anchors the whole chain."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 57767 (282 lines); whole.txt carries the same page (page marker 'wiki/people/jacob-bacharach.md' verified present in whole.txt). Held-corpus check: exact-substring searches for 'Jake Bacharach was the guest', '-from Jacob Bacharach' and 'Doorposts of Your House' over corpus/messages.csv returned zero hits; year histogram of date_sent shows 2021 = 282 records total (vs 40,500 in 2018). The dox-scan sources named on the page are absent from this repository's raw/ tree (which holds only old-wiki-export-2026-09-04, facebook-threads/MANIFEST.json, and the morgantown-call materials)."
importance    = 4
tags          = ["jacob-bacharach", "old-wiki", "corpus", "gap", "unverifiable"]
created       = "2026-09-09"

[when]
start = "2021-02-06"
end   = "2021-02-12"
+++

## What this means for the flagship exhibit

This is the uncomfortable node on the page the wiki calls its flagship
demonstration of the forensic method: the dated spine of the discovery —
the hour-level timestamps, the commercial-job confirmation, the reply
itself — rests on raw dumps that are cited but not held. The page's
correction record (four confident model readings killed by Dan) is
internally coherent and cross-page consistent (the Saratoga page carries
the same neighbor relationship at corpus line 72711-72723), but the
primary material underneath it is one export request away from being
checkable. If `all_imessages_complete_dump.txt` surfaces, these
timestamps become the first thing to re-run.

## Related gaps, same page

The same unheld-source pattern covers: the two Bacharach YouTube items
at **2022-11-10 01:13–01:15** (source: YouTube watch history export, not
held); the **26 Bacharach searches across 2021–2023** (source:
`browser_history_analysis.txt`, not held); the Jan 2, 2022 Joe Oshnack
recommendation (source: Facebook export — the held facebook-threads dir
contains only MANIFEST.json); the December 2025 improbability-pricing
sessions and the interactive HTML artifact (source: bootloader/AI session
transcripts, not held); the February 2026 Belmont-Circle-adjacency
statement (session, not held); and Gemini's May-2020 Suz-sale date from
an unshown deed lookup (page flags it unverified itself).
