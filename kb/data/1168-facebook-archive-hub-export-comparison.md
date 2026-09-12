+++
id            = "dat:1168-facebook-archive-hub-export-comparison"
layer         = 1
type          = "datum"
title         = "Facebook archive hub: the held manifest's June 2026 export counts differ from the page's 2022-export figures — different exports, both recorded"
claim         = "The Facebook Archive hub page describes the ihatedanfrank export as a 79 MB zip generated Sep 5, 2022 (2007–2022) with 403 message threads (271 inbox, 128 filtered, 3 requests), ~617–659 friends, ~229–234 pages liked, ~627 media items across 17+ albums, and 339 off-Facebook tracking files. The held repository does not contain that 2022 export — raw/facebook-threads/ holds only MANIFEST.json for a **June 2026 export** reporting **396 threads and 15,923 total messages** (fetched 2026-09-09, metadata only, no bodies). The thread counts (403 vs. 396) come from different exports four years apart and are not the same measurement, so they neither contradict nor corroborate each other; both are recorded. The page's identity-field table (registered Tuesday, January 9, 2007; DOB Nov 1, 1988; handles ihatedanfrank/danfrank/danfr4nk; Full Sail 2010; Annie relationship since November 28, 2015) is the page's attributed testimony from the unheld export. The page's places-lived contradiction (Facebook 'Brooklyn from Jan 3, 2010' vs. tweet-record Florida departure Feb 28, 2010) is already covered as a standalone contradiction at [dat:0289](0289-brooklyn-move-date-discrepancy.md) and is not re-derived here; the page resolves it the same way, as self-entered profile field (testimony) vs. platform-timestamped record."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "low"
extraction    = "Page body read directly from corpus__3.txt line 77761 (115 lines); the old-wiki export carries it verbatim. raw/facebook-threads/MANIFEST.json was inspected directly: fields threads=396, total_messages=15923, fetched=2026-09-09, with an explicit note that contents are gitignored and only metadata is held. The 2022-export figures (403 threads, 79 MB) cannot be re-read from any held file."
importance    = 3
tags          = ["facebook", "archive", "testimony", "unheld-source", "corpus-gap", "manifest"]
created       = "2026-09-10"

[when]
start = "2007-01-09"
end   = "2022-09-05"
+++

## Notes

- If the June 2026 Facebook export bodies are ever fetched into held storage, the page's four sub-pages (messages, posts, friends, interests) become re-verifiable; until then the hub's quantitative spine (thread counts, friend counts, media counts) stays attributed testimony.
- The sub-page wiki/self/facebook/messages.md etc. are assigned to other workers' waves; this node covers only the hub page.
