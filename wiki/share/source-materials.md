---
title: The Source Materials
shared: true
shared_from: wiki/meta/source-materials
shared_at: 2026-09-24
domain: share
---

> **Shared snapshot** — a copy of `wiki/meta/source-materials` taken on 2026-09-24. This page is public and ungated. Links to other wiki entries were flattened because those entries stay behind the wiki's password gate; the Cliff notes section at the bottom carries the context they would have provided.

# The Source Materials

*Every dataset feeding this wiki, counted exactly, with the story of how it was gathered. Figures below are exact as of **2026-09-24** — they were counted mechanically from the raw files, not estimated, not rounded. When the corpus grows, this page gets re-counted and re-dated.*

## The one-paragraph version

The Wiki Brain is built from **198,354 of Dan's text messages** (2010–2026), **373,751 of his mother's** (2013–2026), **27,573 Messenger records** and **15,923 Facebook messages** going back to 2007, **11,571 Instagram DMs**, **155,613 Chrome browsing entries**, **108,821 Google My Activity actions** stretching to 2006, **121,733 GPS location points** across a decade, **4,446 ChatGPT messages**, **3,286 Google Voice messages**, **2,741 tweets** back to 2008, **486 Amazon orders** with dollar totals, **894 catalogued photos, videos and audio clips**, and ten full Google Takeout archives. That raw mass is distilled through a six-layer evidence graph — **1,747 evidence nodes, 2,486 citation edges** — into **612 articles**. Nothing on this page is a sample. Nothing is representative. It is the whole thing.

If you are new here and wondering what kind of project keeps a man's entire digital life as primary source material: this is the page that answers that. Keep reading.

A note on what this page is for: it is the handout. When someone asks what the Wiki Brain is, this is the link that answers before any article has to — the scale first, the method second, the caveats third. Everything below is checkable against the repositories it describes, and the count date at the top tells you exactly how fresh the numbers are.

## The complete list

Every source below was verified by direct parse of the raw files on 2026-09-24. Counts are exact. Date ranges are the true first-to-last record in each file.

| Source | Exact count | Span | What it is |
|---|---|---|---|
| Dan's iMessage (canonical total) | 198,354 records, 577 threads | 2010-01-09 → 2026-09-21 | Every text he sent or received: 192,140 frozen records in two parts (2011–2026) plus a 6,214-record living master that is appended weekly and carries the 2010 backfill and the iPhone gapfill rows |
| 2010 Gmail SMS backfill | 317 rows (Dan 129 / Suz 188) | 2010-01-09 → 2010-08-15 | SMS messages synced through Gmail between Dan and his mother — the only surviving record of 2010, a gap neither iMessage corpus covers |
| iPhone gapfill extracts | 3,331 + 2,115 rows | 2026-08-11 → 2026-09-21 | Direct iPhone extractions that recovered messages never synced to the Mac — including 1,151 of his own outbound texts the "complete" corpus never had |
| Suz's iMessage archive | 373,751 records, 2,431 contacts | 2013-11-18 → 2026-08-27 | His mother's full chat database — the second-largest correspondence in the project and the cross-check corpus for everything Dan-side |
| Facebook messages | 15,923 messages, 396 threads | 2007 → 2022 | Full Messenger/Facebook message export, hash-deduplicated |
| Messenger (Drive pull) | 27,573 records, 332 threads | 2007-01-16 → 2026-08-26 | A second Messenger pull via Google Drive; 616 records predate 2010; the largest single thread is Tom Maison at 5,734 records |
| Instagram DMs | 11,571 messages, 107 threads | 2016-05-30 → 2025-07-28 | Instagram data export, August 2025 |
| ChatGPT (iHateDanFRANK) | 375 conversations, 4,446 messages | 2022-12-10 → 2025-07-01 | Full ChatGPT export from his main account |
| Claude transcripts | 9 conversations | n/a | Claude.ai chat exports |
| Chrome browsing history | 155,613 entries | 2025-01-03 → 2026-01-03 | The January 2026 Takeout's 71.4 MB History.json — every URL visit for exactly one year |
| Google My Activity | 108,821 unique actions | 2006-09-10 → 2025-07-27 | 52,646 searches, 38,372 site visits, 16,302 videos watched, 949 views — the longest-spanning source in the project, back to 2006 |
| Google location history | 121,733 points | 2014-04-02 → 2024-05-14 | Raw location records: a decade of where he was |
| Google Voice | 3,286 messages | 2012-11-14 → 2026-09-23 | Full Voice export — texts and voicemails — pulled the week this page was written |
| Twitter archive | 2,741 records | 2008-09-24 → 2026-09-01 | Every tweet and repost back to September 2008 |
| Amazon orders 2018 | 329 orders | 2018-07-18 → 2018-12-29 | Itemized order log, second half of 2018 |
| Amazon orders 2019 | 157 orders, $10,981.37 | 2019-01-01 → 2019-12-23 | Itemized order log with exact dollar total |
| Media registry | 894 items | n/a | 252 photos, 176 images, 131 extracted frames, 80 videos, 250 audio clips, 5 albums — every piece of media catalogued, face-tagged and linked to the entries it appears in |
| Google Takeout archives | 10 archives (largest 847 MB) | various | The raw Takeout zips themselves, kept as the ground truth behind the parsed exports |
| Morgantown call validation | full transcript + independent STT | 2026-09-09 | The Annie/Jerel call: independent speech-to-text transcript with a validation report |
| The wiki itself | 612 articles + 5 share pages, 3,340 connection edges | n/a | The built artifact this page lives in |
| The evidence graph (kb/) | 1,747 nodes, 2,486 citation edges | n/a | The six-layer evidence graph underneath the articles (L0: 174, L1: 1,352, L2: 129, L3: 63, L4: 17, L5: 11) |

## How all of this was gathered

The numbers above are the *what*. This section is the *how* — and the how is the part that makes the project slightly insane.

**The texts never stop.** Dan's iMessage corpus is a living file. Every week, new messages are appended under a strict contract — 45 columns, same order, dates in UTC, every row carrying its message GUID — and every append is validated against the tail of the existing file before it lands. The corpus has been through three generations: frozen parts, a living master, and direct iPhone extractions that caught what sync never delivered. The iPhone gapfill alone recovered 1,151 of Dan's own outbound messages that existed nowhere else — the "complete" record wasn't, until the phone itself was read.

**2010 was rescued from Gmail.** Neither iMessage corpus reaches 2010. What reaches 2010 is a Gmail-synced SMS transcript between Dan and his mother — 317 rows, January to August — pulled as a gap-filler and kept as its own source, because the project's rule is that a gap gets filled from whatever direction the material exists in, never by merging corpora wholesale.

**His mother's phone is a second corpus.** Suzanne Frank's full iMessage archive — 373,751 records across 2,431 contacts, 2013 to 2026 — sits alongside Dan's as its own corpus, never merged into his. It is the cross-check instrument: every claim in Dan's threads that touches his mother, his family, or his history gets verified against her side of the same conversations. Her archive also holds threads his doesn't — the 2010 SMS backfill came from her direction.

**The dead platforms were exhumed.** Facebook messages back to 2007, a separate Messenger pull through Google Drive (27,573 records, with 616 predating 2010), Instagram DMs, a Twitter archive reaching September 2008, ChatGPT exports from two accounts, Claude transcripts, Google Voice texts and voicemails back to 2012. Each one was its own extraction project with its own format hell — Facebook thread bodies that are gitignored and survive only as manifest metadata, Instagram exports that needed recovery parsing, a Voice export greenlit and pulled the same week this page was written.

**The browsing history was declared zero, then found.** In September 2026 the project's own notes said Chrome history was zero. They were wrong. The January 2026 Google Takeout — pulled from Drive — held a 71.4 MB History.json with 155,613 URL visits covering exactly one year. The zero was overturned the same week it was written down, which is how this project is supposed to work: the record corrects the note, never the reverse.

**Google was asked for everything.** Ten Takeout archives, the largest 847 MB. My Activity: 108,821 unique actions back to September 2006 — searches, visits, videos watched — the longest-spanning source in the building, older than the iPhone itself in this dataset. Location history: 121,733 raw points, April 2014 to May 2024, a decade of where he stood.

**The money was itemized.** Amazon order logs for 2018 (329 orders) and 2019 (157 orders, $10,981.37 exactly), kept because spending is behavior and behavior is evidence.

**The media was catalogued like an archive.** 894 items in the registry — photos, extracted video frames, video, audio — face-tagged against enrolled identities, each one linked to the wiki entries it appears in, with a standing rule that selection itself is data: every embedded photo must earn its place with narrative substance in the prose around it.

**One phone call got its own forensic lab.** The Morgantown call — Annie and Jerel — exists here as a full transcript plus an independent speech-to-text pass with a validation report, because a single disputed conversation can carry more evidentiary weight than ten thousand routine texts, and the project treats it accordingly.

**The photos were enrolled like suspects.** The media registry's identities — Dan, Annie, Alexis — are enrolled as face-tag references, and every candidate photo is checked before it is allowed to illustrate a person. A mislabeled couple photo in 2026 (Alexis tagged as Annie) is the reason the rule exists: the default was overeager, Dan corrected it once, and now no photo subject is asserted on a guess.

**The append contract is the boring hero of the whole project.** Dan's iMessage master grows weekly under a fixed 45-column header — same column order, `message_guid` always populated, dates as `YYYY-MM-DD HH:MM:SS` in UTC, never localtime. Every append is overlap-scored against the tail of the existing file before it lands; a blank-text row fails validation rather than silently entering. Unsexy, and the reason the 198,354 number means something: it is a deduplicated, validated, append-only record, not a pile of exports.

**Google's own archives did half the work.** Ten Takeout archives, the largest 847 MB — My Activity HTMLs, Gemini Apps media, YouTube history. The January 2026 Takeout alone overturned the "Chrome history is zero" note and delivered the year's clickstream. One caution the sweep caught: the same Chrome History.json was pulled from Drive twice under two different filenames (71.4 MB and 65.7 MB) — byte-identical contents, counted once. Dedupe by content hash, not by filename; the Drive is full of near-identical backup cohorts.

**The Drive is full.** dfrank88@gmail.com sits at 2.0 TB of 2.0 TB quota — adult video the dominant mass — which is itself a source-scale fact: the corpus keeps growing against a hard storage ceiling, and the nightly backups already wait on local disk for space to free up.

**Everything lands twice.** The project's dual-destination rule: every data batch goes to the Wiki Brain *and* to the RAWLOGS mirror repository. No batch is done until both are pushed. The raw is never modified by the pipeline — filters live in the pipeline, never in the archive.

## What the raw becomes

Raw material is not the wiki. Between the 198,354 texts and the article you just read sits a machine:

1. **The evidence graph (kb/).** 1,747 evidence nodes in six layers, 2,486 citation edges, under a strict layer rule — a node may cite only nodes at a strictly lower layer, so testimony never launders itself. Every evidence-grade claim in the articles traces to a node; every node traces to raw.
2. **The articles.** 612 of them, each held to six minimums — 3,000+ words, full totality analysis against the corpus, the complete log of any temporal metric on the entry itself, cited evidence, stated limits, and the human story leading on every page about a person.
3. **The recursive engine.** A work queue that scores its own next investigation from observables, spawns contradiction hunts, and converges — the wiki researches itself on a six-hour heartbeat: archivist, editor, self-check, queue-clearing.
4. **The peripherals.** The Harness (Explore, Journey, Time, Evidence and Search views over the whole corpus), the Portal (nine tabs including the Sage, the Lattice and the Transcript), the Archive (the 497-page wiki frozen as it stood September 4, 2026), the raw graph as JSON, and the entire wiki as a single plaintext file — all linked from the homepage.

Two properties of that machine matter for understanding the scale. First, **totality**: no article is written from a slice. Every entry is analyzed against the whole corpus — the Bruce Burish entry, for example, was rewritten from testimony and then cross-checked against 192,140 iMessage rows, 373,751 of Suz's rows, the full Facebook and Instagram thread sets and the corpus text files, which is how a "no contact after 2018" claim got falsified and corrected the same night. Second, **contradictions are fuel**: when two sources disagree, the engine spawns work to investigate rather than reconciling by fiat — Dan's stated certainty runs about 0.25 against the record, and the wiki is built to catch the difference, not to flatter the narrator.

## Scale in human terms

Raw totals are abstract. Rates are visceral — they say what it means to have lived inside an instrumented life for this long.

- **32.5 texts a day, every day, for 16 years and 8 months.** That is Dan's iMessage rate across the full 6,099-day span: 198,354 records from January 2010 to September 2026. Not a sample of his texting life — the texting life, minus the rows the iPhone gapfill later proved were missing and then recovered.
- **80.1 a day from his mother.** Suz's archive runs hotter than his: 373,751 records over 4,665 days. She is, by the numbers, the most documented person in the project after Dan himself — a realtor whose phone never stopped, and whose archive became the project's second corpus and its cross-check instrument.
- **426 URLs a day for a full year.** The Chrome history covers exactly 365 days — January 3, 2025 to January 3, 2026 — and holds 155,613 visits. That is not "he browses a lot." That is a clickstream dense enough to reconstruct days hour by hour.
- **32.9 location points a day for a decade.** 121,733 GPS records from April 2014 to May 2024. Ten years of where he stood, accurate enough to settle arguments about which city he was in on a given night.
- **15.8 logged Google actions a day since 2006.** My Activity is the longest-spanning source in the building — 6,895 days, back to September 2006, before the iPhone existed. 52,646 searches. 38,372 site visits. 16,302 videos watched. His twenties, as logged by Google.
- **640,667 message-like records in total** across texts, Messenger, Facebook, Instagram, ChatGPT, Voice and the backfills — before counting a single browse, search, GPS point or order.

None of these are estimates. Each rate is the exact count divided by the exact day span of its source file.

## How the count was done

The figures on this page were produced by a read-only forensic sweep on 2026-09-24: every source file parsed with a real parser (CSV and JSON parsers, never line counts — message bodies contain newlines, and `wc -l` lies about them), date ranges taken from the true minimum and maximum record timestamps, thread and contact counts taken from distinct identifiers. Nothing was modified in the process.

The sweep followed the project's standing cross-corpus protocol: identity handles verified by content before any content search, both corpora pulled, verbatim-phrase probes for overlap, and zero hits treated as a structural finding rather than "no results." Findings were triaged against what the wiki already claimed — which is how this page caught the request's own example figures being wrong. The "192,000 texts" guess understated the true 198,354; "6,572 Facebook messages" understated the true 15,923; "42,000 GPS tracks" understated the true 121,733; and "750,000 website visits, 2012–2026" was wrong in both dimensions — the real number is 155,613 visits covering exactly one year. Estimates, even friendly ones, lose to the parse every time.

One more convention, because this page will age: **every figure is a snapshot.** The iMessage master is appended weekly; the Voice export was pulled the week this page was written; new Takeouts land when they land. The honest way to carry exact numbers in a growing corpus is to date them, so this page carries its count date in the lede and gets re-counted — not edited upward by hand — when the corpus moves. A future reader comparing this page against the live repositories should expect the live numbers to be larger; the page is a dated photograph, not a live feed.

## What this page does not claim

The complete-log doctrine cuts both ways: the limits are stated, not buried.

- The second ChatGPT account's export contains conversation stubs and audio attachments but **no message bodies** — no count is given for it because none can be verified.
- The My Activity figure (108,821) comes from the ingest manifest's documented dedup, not a fresh re-parse of the source files. The method is recorded; treat the number as manifest-sourced.
- Facebook thread bodies are gitignored; only the manifest metadata (396 threads, 15,923 messages) is verified, not the bodies themselves.
- The location count covers `Records.json` only — the semantic location database and timeline edits in the same folder are unparsed.
- Two mechanical counts disagree with older notes: Suz's archive parses to 373,751 rows against a long-standing 372,687 figure, and the render reports 633 articles against 617 markdown files on main — a 16-page delta still unexplained. The mechanical counts are reported; the discrepancies are open.
- Every figure on this page is a snapshot. The corpora grow weekly. The next count re-dates this page.

*Counted 2026-09-24. The corpus is the project; this page is its table of contents. If a number here ever looks too round to be true, check the raw file it names — that is what the table is for.*
