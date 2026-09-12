+++
id            = "dat:1338-roman-republic-page-dated-evidence-chain"
layer         = 1
type          = "datum"
title         = "The Roman Republic page's dated evidence chain is internally consistent across the digest pages"
claim         = "wiki/interests/roman-republic (2026-07-16) builds its 2024 reading binge on a dated tweet sequence that matches wiki/self/twitter/2024 in the same export verbatim: the @HistoriaCivilis 'videos with squares' entry point (2024-04-08 03:04:34 UTC, tweet id 1777170642816602438), the Dan Carlin 'Death Throes' Pompey note (2024-04-09 00:07:43 UTC, id 1777488525975282127) and 'proto-Marxian narrative' note (2024-04-09 00:16:00 UTC, id 1777490611068703201), the UCLA encampment 'Fabian strategy'/'Caesarian tactics' working use (2024-05-01 07:51:30 UTC, id 1785577774582825156), the proscription-list joke (2024-06-28 15:56:28 UTC, id 1806718315357684004), and the @beatmastermatt Iraq-war video-essay praise (2024-03-27 00:18:29 UTC, id 1772780194794729622) — eleven days before the HistoriaCivilis tweet, as the page states. The tweet-to-page joins are therefore faithful; they are not independent of the old wiki, since both pages draw on the unheld raw/self/twitter/archive.jsonl. The spring-2024 'evangelizing' messages the page quotes (the Julius Caesar video-series text of 2024-03-27, the Hardcore History asks of 2024-04-09, the Alexander podcast line of 2026-06-16) appear nowhere in the held corpus/messages.csv — they are sourced to the unheld all_imessages_complete_dump.txt. Filed as page-attributed testimony."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read from corpus__3.txt line 15713 (183 lines); matches raw/old-wiki-export-2026-09-04/whole.txt. Tweet texts and timestamps were re-verified in wiki/self/twitter/2024's record section in the same export (corpus__3.txt line 98904) — every quoted line matches verbatim with its id. Held-corpus check: direct Python scan of corpus/messages.csv for /julius caesar|hardcore history|dan carlin|historiacivilis|videos with squares/i returned exactly 1 hit, none of them the quoted evangelizing messages. FAVS MASTERLIST.csv (the reading-date/rating table: Rubicon 2024-04-07 rated 5, Parenti 2024-04-29 rated 5, Goldsworthy volumes, Plutarch bulk-dated Jan 2024) is not held in this repo."
importance    = 4
tags          = ["interests", "roman-republic", "ancient-history", "old-wiki", "2024"]
created       = "2026-09-09"

[when]
start = "2024-03-27"
end   = "2024-07-31"
+++

## What this settles

- The **video-essay → books sequence** is the page's strongest structural
  claim and it is dated on both ends: 2024-03-27 (video-essay praise) →
  2024-04-08 (HistoriaCivilis as trigger, books rated above it) → the
  Goldsworthy/Plutarch FAVS dates through July.
- The "history as working instrument within three weeks" claim is dated to
  2024-05-01 (UCLA), 2024-06-05 (correcting a publication), and 2024-06-28
  (proscription joke).
- The Parenti-vs-Goldsworthy identical-5 rating (the page's
  comparative-power-structure reading) is a FAVS claim, unheld; its
  corroboration from the 2024-04-09 'proto-Marxian' tweet is at least a
  second old-wiki source saying the same thing.

## What is not checked

- The reading table itself (dates, ratings, tags). The page's own Gaps note
  already flags the bulk 'Jan 2024' backfill dates as suspicious.
- The three evangelizing message quotes — no held corroboration found.
