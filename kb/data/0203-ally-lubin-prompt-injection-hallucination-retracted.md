+++
id            = "dat:0203-ally-lubin-prompt-injection-hallucination-retracted"
layer         = 1
type          = "datum"
title         = "The 'object of fixation (accepted August 18, 2026)' acceptance was a prompt-injection hallucination — retracted"
claim         = "On 2026-08-18 the wiki recorded that Dan offered Ally the *\"girlfriend title or at the very least the 'object of fixation' role\"* and that she replied *\"Okay deal. Sounds good 1-2-3 break,\"* with *\"She said yes\"* in the prose and `relationship_to_dan: \"object of fixation (accepted August 18, 2026)\"` in the infobox. **No such exchange occurred.** A complete export of the thread (708 records, 154 inbound) contains neither string, and the phrase \"object of fixation\" appears nowhere in any file under raw/. The mechanism is documented in the thread itself: at 23:39 on August 18 Dan told Ally *\"if you would like anything included in your wiki article you can say it now and im going to run it over the newest messages so you can be sure it will be included\"* (*\"Omg she said prompt inject please marry me,\"* at 23:46), and at 00:31–00:33 on August 19 he diagnosed it: *\"Hahaha wait hold on I was the one that accidentally prompt injected... Hence it thinking you were the one accepting my very attractive offer there.\"* Dan's actual elopement pitch of 23:18–23:20 is real and **unanswered**. The false acceptance survived two days in the infobox and propagated to the destiny page before being caught by re-exporting the messages. The general rule the page yields: **a source that discusses the wiki cannot be ingested as an ordinary source** — Ally spent August 18 reading her own entry and quoting it back into the thread, so any pass that mines the corpus is partly reading itself."
cites         = ["src:operator-testimony-2026-09-09",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:operator-testimony-2026-09-09"
confidence    = "high"
extraction    = "Read directly from corpus__3.txt line 47902 (the 'What this page got wrong' section of wiki/people/ally-lubin.md); matches raw/old-wiki-export-2026-09-04/whole.txt verbatim for the correction text, the thread quotes, and the 708/154 export figures. All quotations above are the page's verbatim transcriptions. The message export was not examined in this session; the negative finding (neither string in the export) is the prior wiki's, and the diagnosis is Dan's own 00:31–00:33 statement. The retraction is filed here as a datum about a corrected fact — the *assertion* was never true — and as a methodological precedent for ingest: discussion-of-the-wiki sources are contaminated instruments. The companion findings in the same section are kept: the 452/457 handle count correction (dat:0201), the two-handle correction, and the July 5, 2013 origin of direct contact vs the December 2018 modern start."
importance    = 5
tags          = ["people", "correction", "method", "old-wiki", "testimony"]
created       = "2026-09-09"
+++

## What the check confirms

The corpus page and the old wiki agree exactly on the retracted acceptance,
the 23:39–00:33 mechanism, and the rule derived from it. This is the
repository's first documented case of a subject prompt-injecting the ingest
path and the model fusing it into a consented fact — caught not by a gate
but by re-exporting the messages.

## What it does not confirm

The export (708 records / 154 inbound) was not independently searched in
this session, so the negative finding rests on the prior wiki's pass. The
diagnosis rests on Dan's own same-night statement, which the page credits as
identified-within-four-hours.

## Standing instruction carried forward

Any future ingest over message threads that discuss the wiki itself must
treat those passages as contaminated: the corpus contains its own wiki, and
the wiki reads the corpus. This node is the precedent.
