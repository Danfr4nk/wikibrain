+++
id            = "dat:0671-jason-bermejo-thread-metrics-stale"
layer         = 1
type          = "datum"
title         = "Jason Bermejo thread metrics on the page are stale against the held corpus"
claim         = "The page's Corpus Dimensions table — 451+ messages, 2017-01-20 – 2026-03-21, ~187/264 sent/received, peak month Feb 2026 at 400+ messages — does not reproduce from the held corpus. The held 1:1 thread (handle withheld per redaction convention; page carries it redacted) contains **761 messages** spanning **2017-01-20 to 2026-06-03**, **493 sent / 268 received**, with **February 2026 at 283 messages** — still the thread's peak month, but not 400+. The page's figures describe an older, smaller pull (its stated sources are unheld CSVs: MASTER_MESSAGES_DB_DUMP.csv, an imessage_export 20260714 CSV, interspersed_messages.csv); the held corpus is strictly fuller in total yet smaller on the February peak, so neither number can be treated as current. Verified against the same held thread: Dan's *'I had to put gabe down today'* at **2023-10-30 21:45:44 UTC** (17:45 EDT) with Eric Jester's independent same-evening condolence at 22:06:05 UTC (*'I'm so sorry man. He was the cat that made me love cats!'*); and the Oscar Lindquist coincidence telling at **2025-03-17 03:31:01 UTC** (*'i swear to god i was waiting tables in nyc and oscar was at one of my tables'*). The Gabe date also corrects the looser 'Nov 2023' carried in summary memory — the held record is October 30."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Thread located in corpus/messages.csv by distinctive-text search ('pabloPERCasso', 2026-02-02); all 761 rows with the thread's chat_identifier enumerated with UTC date_sent. Month histogram computed from date_sent. Gabe and Jester messages located by exact-substring search; Oscar message likewise. The page's source CSVs are not in this repository's raw/ tree."
importance    = 3
tags          = ["jason-bermejo", "old-wiki", "corpus", "count-correction"]
created       = "2026-09-09"

[when]
start = "2017-01-20"
end   = "2026-06-03"
+++

## Reading

This is the same staleness class as the James page
([`dat:0670`](0670-james-dee-post-july-contact-contradicts-dormancy.md)):
pages built on the dox-scan-era pulls carry metrics the held corpus now
exceeds or contradicts. The February 2026 spike is real (283 is still
the thread's all-time monthly peak by a wide margin — next is 2019-04 at
109), so the page's qualitative claim ('re-entered in force,' 'all-time
peak') survives; only the '400+' figure does not.

## Not verified here

The Kid Cudi introduction claim rests on the unheld operator-note
capture (`raw/self/captures/2026-07-19_operator-note-full-sail-mohler.md`);
the thread contains a 2019-04-24 Kid Cudi mention but nothing about who
introduced whom. The Mohler-transition exchange is absent from the held
corpus entirely — see
[`dat:0672`](0672-jason-bermejo-mohler-exchange-absent-held.md).
