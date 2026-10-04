---
domain: self
page_type: synthesis
title: "Message Corpus Coverage Map"
aliases: ["corpus coverage map", "channel-coverage-gaps", "message-corpus-coverage-map"]
tier: major
status: active
knowledge: earned
date_created: 2026-10-03
date_modified: 2026-10-04
sources:
  - kb/sources/imessage-corpus-2026.md
  - kb/sources/imessage-complete-dump-2025-08-11.md
  - kb/sources/facebook-export-2026-06-23.md
  - kb/sources/facebook-export-20260908.md
  - kb/data/1502-corpus-coverage-hole-2025.md
  - kb/data/0028-prescriber-quotes-partly-unverifiable.md
  - kb/data/1449-valeria-imessage-coverage-hole.md
  - kb/data/0164-annie-record-coverage-and-progress.md
  - kb/data/0025-old-wiki-prescriber-exists-routing-only.md
  - kb/data/0033-2011-suboxone-appointment-with-screening.md
  - kb/data/0054-facebook-archive-completed-and-recounted.md
  - kb/data/0055-facebook-corroborates-the-2010-maintenance-start.md
  - kb/data/0056-corpus-timestamps-are-not-zero-padded.md
  - kb/data/0057-morgantown-audio-contradiction-reproduces.md
  - raw/SOURCES.md
  - raw/INVENTORY-GAPS-2026-09-13.md
connections:
  - page: wiki/mind/synthesis/operator-threat-model
    type: cites
    claim: "The threat model's confident-error instances all turn on holes this map inventories; checking an absence claim against this page is the gate the model prescribes."
  - page: wiki/health/suboxone-dose-curve
    type: cites
    claim: "The dose curve's Facebook window (fourteen occurrences, 2011-2021, one counterparty) and its June 2025 corpus hole are instances of the coverage shapes mapped here."
  - page: wiki/health/suboxone-dose-curve
    type: supplies
    claim: "That page's fourth condition for the sixteen-year silence — 'the corpus's channels do not cover the interval evenly' — is asserted there in one paragraph and measured here in full. This is the coverage map its channel argument needs, and the map it could not carry without becoming a corpus page."
  - page: wiki/mind/synthesis/annie-decade-synthesis
    type: cites
    claim: "The Annie decade's 2020-11 to 2024-12 hole — five messages in four years — is the largest single-relationship hole on this map."
  - page: wiki/self/message-corpora/source-coverage-index
    type: extends
    claim: "That page is the per-file ledger: 52 message sources, what each holds, where each filename lies. This page is the per-year view across all channels, built after the authoritative export and the 2025-08-11 dump were both measured, and it carries the finding that index predates — the two largest artifacts are blind in complementary halves of 2025."
  - page: wiki/self/message-corpora/message-request-blind-spot
    type: component-of
    claim: "That page is the doctrine for absence claims: which zeros are admissible and how to phrase them. This page is the lookup table that doctrine's preflight requires — the denominators, by channel and by year, that a zero has to be stated against."
  - page: wiki/meta/instruments/index
    type: instantiates
    claim: "The instruments rule that an instrument must state its own limits in a section that cannot be dropped, applied to the archive as a whole rather than to any one tool."
  - page: wiki/mind/synthesis/steady-state-invisibility
    type: parallels
    claim: "Two independent reasons the record is silent about a thing. That page holds the behavioral reason — a daily constant does not get narrated. This page holds the mechanical one — the channel that would have caught it was not running that year. Any silence in this wiki needs both checked before it is read."
  - page: wiki/mind/synthesis/supply-graph-vs-chain
    type: contextualizes
    claim: "Its epistemic floor — three 2025 prescriber quotes unverifiable against the authoritative export — is a coverage fact, not a provenance fact, and this page carries the measurement that shows why."
  - page: wiki/people/kristin
    type: evidenced-by
    claim: "The worked demonstration of a ceiling: a 22,018-message relationship that the wiki's designated miner reported as zero matches rather than as an error, because the dump it runs on stops before the relationship starts."
tags: [corpus, coverage, method, forensic-analysis, negative-data]
importance: 5
changelog:
  - 2026-10-03: Restructured to canonical template v1; new page from _gap-candidates-dose-curve.md candidate 4 and kb/sources inventory
  - 2026-10-04: Merged wiki/self/corpus/channel-coverage-gaps into this page as a union (the two pages were parallel treatments of the same corpus-coverage reference); the per-year complete log, the coverage grid, the worked cases, the falsifiers, the open-gaps list and the five-point absence checklist folded in. channel-coverage-gaps is now a superseded pointer to this page.
---

# Message Corpus Coverage Map

Every "absence" claim in this wiki — that a message was never sent, a quote was never written, a period was quiet, a person was not around — is a claim about what a corpus could have observed. This page is the dated inventory against which those claims can be checked: which channels cover which years, where the holes are, how stale each export is, and what kind of absence each hole can and cannot support.

The map is built from two structures that do not always agree: the knowledge base's source records under kb/sources/ (207 files describing what was acquired, when, and with what reliability) and the raw archive's own inventory in raw/SOURCES.md and raw/INVENTORY-GAPS-2026-09-13.md, which was measured from the working trees rather than read off a prior manifest [raw/INVENTORY-GAPS-2026-09-13.md]. Where the two disagree, the bytes win and the disagreement is recorded in the Conflicts section below.

The governing distinction, stated everywhere the current repository enforces it and inherited from the prior wiki's ledger, is between never-observed and known-not-to-occur [kb/data/1502-corpus-coverage-hole-2025.md; kb/data/0028-prescriber-quotes-partly-unverifiable.md]. An absence in a covered month with a dense channel is evidence. An absence in a hole is no observation at all. This page's work is to make the difference checkable without re-deriving it each time — to turn "we searched and found nothing" into a claim that names the instrument, the window, and the instrument's coverage of that window. There is no channel in this archive that covers the run, and there is no year in the run that every channel covers; the archive's two largest artifacts — the export the tooling calls authoritative and the dump it supersedes — are blind in complementary halves of a single year, 2025, and that year is the one the recent work reasons about most [kb/data/1502-corpus-coverage-hole-2025.md].

## How to use this map

A future absence claim should be able to answer three questions from this page alone. First: which channel was searched? The iMessage authoritative corpus, the 2025-08-11 complete dump, the Facebook exports, the Twitter archive, and the Messenger Drive records are distinct channels with distinct windows, and a search of one says nothing about the others. Second: what does that channel hold for the claimed window? The tables below give monthly and yearly densities where the KB measured them. Third: is the absence never-observed or known-not-to-occur? The KB's dat nodes already model the answer in specific cases — the prescriber quotes in June 2025, the Valeria affair window, the Annie hole — and this page collects the general rule behind them: if the channel held zero or near-zero rows for the window, the absence supports nothing.

The rule has a stated form in the repository's own governing documents, and this page is the numbers both of them lack. `CORPUS_POLICY.md` states the failure mode in one line: **in a fragment, absence of evidence looks exactly like evidence of absence**, and a partial export never announces what it left out [CORPUS_POLICY.md]. The architecture carries the same distinction as a typed field — `never_observed`, `explicitly_rejected` and `known_not_to_occur` are three different states and the system refuses to flatten them [ARCHITECTURE.md]. Both documents state the rule. Neither supplies the numbers a reader needs to apply it. A rule that says *check the coverage* without a coverage table is an instruction to remember something nobody has written down. That is the gap this page closes.

Operationally, an absence claim in this wiki is admissible when it carries all five of the following. Anything short of five is a claim about the pull, not about the world.

1. **The instrument** — which artifact was searched, by path, not by the word "the corpus."
2. **The window** — the artifact's measured span, and whether the claim's date sits inside it.
3. **The denominator** — how many messages that artifact holds for the period. *Zero in a month holding 35* and *zero in a month holding 4,898* are not the same zero.
4. **The attribution capacity** — whether the artifact has a handle column at all, and if so, whether the handle was verified against device access.
5. **The status word** — `never_observed`, `explicitly_rejected` or `known_not_to_occur`, never a bare "there is no evidence."

The canonical phrasings live on [[wiki/self/message-corpora/message-request-blind-spot]]; this page supplies the numbers those phrasings have to name.

The map also records staleness, because a channel's newest export date bounds what any cross-channel claim can span. As of the September 13, 2026 audit, Facebook's newest export is five days old, Takeout's is two months, Instagram's is thirteen months, ChatGPT's is thirteen months, and Location's data ends twenty-eight months before the audit date [raw/INVENTORY-GAPS-2026-09-13.md]. Any claim spanning late 2025 to the present that believes it drew on all channels drew, in fact, on Facebook, iMessage, and Takeout while Instagram, ChatGPT, and Location were silent.

One scope note: this page does not reason from the cognitive profile, on purpose. `SYNTHESIS_SPEC.md` asks a synthesis to reason from the profile; this one's subject is the instruments, not the person, and nothing here would change if the subject were someone else. The one place a profile claim would belong — why this archive over-collects and under-audits — is [[wiki/mind/synthesis/intake-constancy]]'s ground, not this page's.

## The authoritative iMessage corpus and its limits

The authoritative message record is the complete Messages export staged as corpus/messages.csv: 192,140 rows, 2011-03-19 to 2026-09-07, forty-five columns, zero malformed rows on parse, integrity recorded in corpus/manifest.json and re-pullable by bin/wb-corroborate --pull with sha256 verification against the manifest [kb/sources/imessage-corpus-2026.md; raw/INVENTORY-GAPS-2026-09-13.md]. It is the instrument bin/wb-corroborate runs against, and it is gitignored by design: it contains the phone numbers, email addresses, and private words of 498 people who did not choose to be published, and derived layers may cite it but may not reproduce it [kb/sources/imessage-corpus-2026.md].

The wiki cites two different totals as "the corpus" and they are two different artifacts:

| | Authoritative export | 2025-08-11 complete dump |
| :--- | :--- | :--- |
| Path | `corpus/messages.csv` (gitignored); `raw/imessage/messages-part{1,2}-*.csv` | `raw/drive-sweep/20260911/misc-zip/Archive 2.zip` → `all_imessages_complete_dump.txt` |
| Rows | **192,140** | **217,573** dated records |
| Span | 2011-03-19 → 2026-09-07 | 2011-03-18 → 2025-08-11 |
| sha256 | `2c53c540…` (manifest-pinned) | `0512212efbb86d41…` |
| Handle column | yes — 498 counterparty handles, 156 resolved to a name | **no** — cannot attribute |
| Blind where | most of 2025-01 → 2025-07 | everything after 2025-08-11 |

[corpus/derived/summary.json; corpus/manifest.json; kb/data/1502-corpus-coverage-hole-2025.md; raw/INVENTORY-GAPS-2026-09-13.md]

The 217,573 figure is the one carried on [[wiki/self/concepts/wiki-brain]], [[wiki/self/context-core]] and [[wiki/self/concepts/llm]] as *the corpus*. It is the dump. The 192,140 figure is what bin/wb-corroborate actually runs against [kb/data/1502-corpus-coverage-hole-2025.md]. The wiki's headline number and the wiki's working instrument are not the same object, and the difference is not a rounding error: it is 25,433 records and a missing handle column. dat:1502 states the consequence in the form that matters: *"`authoritative` was doing work here that `most recent` had earned and `most complete` had not, and nothing in the pipeline distinguished the two"* [kb/data/1502-corpus-coverage-hole-2025.md].

Authoritative describes recency and structure, not completeness. Over the window both it and the superseded dump cover — 2011-03 to 2025-08 — the authoritative corpus holds 129,262 messages while the dump holds 217,573. The superseded dump carries 88,311 more [kb/data/1502-corpus-coverage-hole-2025.md]. The shortfall is concentrated where it matters most for recent absence claims. By month in 2025 the corpus against the dump reads: January 380 to 1,910; February 255 to 3,042; March 166 to 4,461; April 76 to 3,607; May 120 to 5,454; June 35 to 4,898; July 107 to 3,541; only August reverses — 3,950 to 937 — because the dump ends August 11 [kb/data/1502-corpus-coverage-hole-2025.md]. June 2025 carries thirty-five messages total against 21,290 outbound across the year in the corpus's own accounting [kb/data/0028-prescriber-quotes-partly-unverifiable.md]. Any claim bin/wb-corroborate marked uncorroborated for a 2025 date was tested against a corpus holding between thirty-five and 380 messages a month for that year, where the dump holds thousands. Those results are not wrong. They are uninformative, and they were not labelled as such until this datum [kb/data/1502-corpus-coverage-hole-2025.md].

The corpus also has hard holes that predate the 2025 thinning. A direct month-bucket count over all 192,140 rows shows zero rows for every month from May 2021 through December 2022 — April 2021 has three rows, March 2021 has one, January 2023 has six, February 2023 has zero [kb/data/1449-valeria-imessage-coverage-hole.md]. The entire Valeria affair window, August 2021 to mid-2022, falls inside that hole. Later-dated claims about that thread — September 2023 with 102 rows, November 2024 with 367 rows, July 2025 with 107 rows — fall in covered months and still produce no rows; those are uncorroborated rather than missing-data, and the distinction is the datum's whole output [kb/data/1449-valeria-imessage-coverage-hole.md]. Zero senders containing "valeria" appear anywhere in the file.

At the single-day scale, the holes are absolute. The corpus holds zero messages on June 8, 2025 and zero on June 12, 2025 — the two dates three of the four prescriber quotes the prior wiki cited are dated to [kb/data/0028-prescriber-quotes-partly-unverifiable.md]. June 8 holds 272 messages in the dump and June 12 holds 200 there; all four quotes, including the three the authoritative corpus could not verify, are present verbatim in the dump [kb/data/1502-corpus-coverage-hole-2025.md]. Absence there is never-observed, and the datum is explicit that treating those two as refuted would be the exact error the system exists to prevent, committed while verifying somebody else's.

## Complete log — the authoritative export, by year

Every year the export holds, with no year omitted and the zeros stated as zeros. Years absent from `messages_per_year` are shown at 0 because the listed years sum to exactly 192,140, which forecloses the alternative reading that the key was merely dropped [DERIVED: summation of `corpus/derived/summary.json → messages_per_year`; 1 + 13,745 + 20,279 + 17,550 + 40,500 + 20,166 + 6,327 + 282 + 960 + 4,369 + 41,203 + 26,758 = 192,140, matching `messages`].

| Year | Messages | Share | Note |
| :--- | ---: | ---: | :--- |
| 2011 | 1 | 0.0005% | the whole year is one message |
| 2012 | **0** | — | absent from the export entirely |
| 2013 | **0** | — | absent from the export entirely |
| 2014 | **0** | — | absent from the export entirely |
| 2015 | 13,745 | 7.2% | begins 2015-11-12; the year is really seven weeks |
| 2016 | 20,279 | 10.6% | |
| 2017 | 17,550 | 9.1% | |
| 2018 | 40,500 | 21.1% | the record's densest year |
| 2019 | 20,166 | 10.5% | |
| 2020 | 6,327 | 3.3% | |
| 2021 | 282 | 0.1% | |
| 2022 | **0** | — | absent from the export entirely |
| 2023 | 960 | 0.5% | |
| 2024 | 4,369 | 2.3% | |
| 2025 | 41,203 | 21.4% | see "2025, month by month" below — the distribution inside the year is the finding |
| 2026 | 26,758 | 13.9% | through 2026-09-07 |
| **Total** | **192,140** | 100% | |

[ATTESTED, `corpus/derived/summary.json`; shares DERIVED by division.]

**A correction to `CORPUS_POLICY.md`, flagged not applied.** That document names its gap years as *"2021 has 282 messages and 2022 has none"* [CORPUS_POLICY.md]. The summary shows **four** years at zero, not one: **2012, 2013, 2014 and 2022**. The policy's own statement of its coverage holes is incomplete by three years, and those three sit directly on top of the period the [[wiki/health/suboxone-dose-curve|dose curve]] calls its most important interval — the 2013 dosage figure falls inside a year the authoritative export does not hold at all. That figure survives only because it was caught on Facebook [kb/data/0055-facebook-corroborates-the-2010-maintenance-start.md]. This page does not edit `CORPUS_POLICY.md`; the correction is filed here and in Conflicts below, because a governing document is amended deliberately or not at all.

**The 2011–2015 blackout, measured.** The export's earliest row is 2011-03-19; its second-earliest thread opens **2015-11-12** [DERIVED: `first_message` column of `corpus/derived/threads.csv`, sorted]. Between one message in March 2011 and the second week of November 2015 the authoritative export holds nothing. That is four years and eight months in which any iMessage-sourced absence claim is uninformative by construction.

## The 2025-08-11 complete dump

The complete dump is a text export generated August 11, 2025 at 05:01: 28,905,037 bytes, sha256 0512212e..., 226,060 lines and 217,573 dated records in pipe-delimited form — timestamp, direction, handle, chat, text, attachment, service, flags — spanning 2011-03-18 to 2025-08-11 [kb/sources/imessage-complete-dump-2025-08-11.md]. It was present in this repository from the September 11, 2026 Drive sweep, compressed inside raw/drive-sweep/20260911/misc-zip/Archive 2.zip alongside six split parts, while raw/SOURCES.md recorded the same filename as blocked behind a Drive sharing change on dox-scan/ [kb/sources/imessage-complete-dump-2025-08-11.md; raw/INVENTORY-GAPS-2026-09-13.md]. Extracted and verified September 13, 2026, it scanned clean for credentials.

The dump and the authoritative corpus overlap for fourteen years and diverge in what they are good for. The corpus is sha256-pinned, column-structured, and runs to September 7, 2026 where the dump stops August 11, 2025. The dump is more complete over the window both cover, by 88,311 messages. The point the datum insists on is not that the dump should replace the corpus. It is that "authoritative" was doing work "most recent" had earned and "most complete" had not, and nothing in the pipeline distinguished the two [kb/data/1502-corpus-coverage-hole-2025.md]. Future searches for 2011 to August 2025 material should run against both and report which produced the result; searches for September 2025 onward can run only against the corpus, because the dump does not reach there.

The dump's arrival also settled a provenance question that had been framed as the decisive test for the reasoning-sound-provenance-unreliable pattern: if the four unverifiable quotes were in the dump and not in the authoritative export, the finding would be about coverage rather than provenance, a much less alarming conclusion [kb/data/1502-corpus-coverage-hole-2025.md]. All four were in the dump. What that means for the pattern is deliberately left open by the datum — it supplies the measurement and does not make the judgement about a published conclusion [kb/data/1502-corpus-coverage-hole-2025.md].

## 2025, month by month, both artifacts

The year the two corpora disagree about. Corpus figures are from the authoritative export; dump figures from `all_imessages_complete_dump.txt`, which ends 2025-08-11 [kb/data/1502-corpus-coverage-hole-2025.md].

| Month | Authoritative export | 2025-08-11 dump | Dump surplus |
| :--- | ---: | ---: | ---: |
| 2025-01 | 380 | 1,910 | +1,530 |
| 2025-02 | 255 | 3,042 | +2,787 |
| 2025-03 | 166 | 4,461 | +4,295 |
| 2025-04 | 76 | 3,607 | +3,531 |
| 2025-05 | 120 | 5,454 | +5,334 |
| 2025-06 | 35 | 4,898 | +4,863 |
| 2025-07 | 107 | 3,541 | +3,434 |
| 2025-08 (to 08-11) | 3,950 | 937 | −3,013 |
| **Jan–Aug total** | **5,089** | **27,850** | **+22,761** |
| 2025-09 → 12 | **36,114** | — (dump ends) | — |
| **2025 total** | **41,203** | — | — |

[Monthly rows ATTESTED, `kb/data/1502-corpus-coverage-hole-2025.md`; the Jan–Aug sums, the surplus column and the Sep–Dec residual DERIVED by arithmetic against `corpus/derived/summary.json → messages_per_year["2025"]` = 41,203.]

Three things follow, and they are the page's core result. **First, the export's 2025 is a fourth quarter.** 36,114 of 41,203 messages — **87.6%** — fall after 2025-08-31 [DERIVED]. The export's January-through-July 2025 is 1,139 messages, roughly the volume of four ordinary days in 2018. **Second, the dump is the better instrument for the first seven months of 2025 and the export is the only instrument for the last four.** Neither covers the year. Over the window both cover, the dump holds 88,311 messages the export does not [kb/data/1502-corpus-coverage-hole-2025.md]. **Third, the dump cannot attribute.** It has no handle column [wiki/self/message-corpora/source-coverage-index]. So for January–July 2025 the archive can establish *that* a message exists and *what it says* and cannot establish *who it was to* from that artifact alone. Presence and volume, never authorship — which is exactly the constraint the source index already states and which nothing in the wiki's 2025 claims carries.

## Facebook: two generations and a distinct channel

Facebook is the corpus's independent channel — a different company, a different export, the only thing that can catch a systematic error in the iMessage record [kb/sources/facebook-export-2026-06-23.md]. Two generations are held.

The June 2026 generation was generated June 23, 2026 and held in Google Drive as an 82-megabyte zip and an unzipped tree; the tree was made publicly readable September 9, 2026, which made anonymous per-file retrieval possible, while the zip remains private and past the connector's size limit, so bulk retrieval is still unavailable [kb/sources/facebook-export-2026-06-23.md]. It spans years the iMessage corpus does not — the corpus holds no messages at all for most of 2021 and 2022, and this export covers that window [kb/sources/facebook-export-2026-06-23.md]. Its structure is one folder per conversation under messages/inbox/, plus message_requests/, filtered_threads/, and legacy_threads/, each message a block of speaker name, rule, text, and timestamp — 403 threads holding 15,558 parseable messages in the archive's own recount [kb/data/0054-facebook-archive-completed-and-recounted.md]. Nothing in the text carries the speaker. Extract a line without its block and attribution is gone — the exact mechanism by which the prior wiki recorded another person's DUI as a fact about the subject [kb/sources/facebook-export-2026-06-23.md].

The September 2026 generation, generated September 8, 2026, is newer and larger: two parts in raw/facebook/export-20260908-a and export-20260908-b, 1,470 files per the source record and 4,404 files total across both exports plus a separately held ross-thompson/ tree, roughly seventy-seven megabytes per part in gdoc-converted text and posts trees, with message span including 2007-era content [kb/sources/facebook-export-20260908.md; raw/INVENTORY-GAPS-2026-09-13.md]. The ingested source is this generation. raw/SOURCES.md still references the June generation as the ingested Facebook source in places — a superseded pointer the audit flags [raw/INVENTORY-GAPS-2026-09-13.md].

Facebook's coverage ends in September 2022 in the archive's message span for corroboration purposes: fourteen occurrences of suboxone between 2011 and 2021, all in threads with one counterparty, with the 2013 dosage figure and the 2011 appointment both caught by this channel and by no other [kb/data/1502-corpus-coverage-hole-2025.md; wiki/health/suboxone-dose-curve]. The channel that ever named the dose stops covering the period just when the logistics questions get interesting. For any claim dated after September 2022, Facebook absence is not a search result. It is the channel's edge.

A distinct channel from the Facebook export is the Messenger Drive records: 27,573 Facebook, Instagram, and TikTok direct-message records across 331 threads, 2007 to 2026, held at raw/messenger-drive-2026-09-12/ in the RAWLOGS tree and listed in the audit as a family absent from the stated inventory [raw/INVENTORY-GAPS-2026-09-13.md]. Together with raw/messenger-2026-09-12/ it forms the Messenger-side coverage that the Facebook export's inbox folders do not duplicate. Searches that enumerate sources from a list rather than from the tree miss both families entirely [raw/INVENTORY-GAPS-2026-09-13.md].

## Twitter, Instagram, ChatGPT, and Takeout

Twitter holds 2,741 tweets in raw/twitter/, spanning 2008-09-24 to 2026-09-01, parsed from archive.jsonl [raw/INVENTORY-GAPS-2026-09-13.md]. The stated range in the carried-over inventory — August 2013 to April 2026 — is wrong in both directions: nearly five years of early material (2008 to 2013) is present and unaccounted for, and five months at the recent end likewise. Reposts holds five records, not a second corpus comparable to the tweets [raw/INVENTORY-GAPS-2026-09-13.md]. The prior wiki's Suboxone day-zero correction and its nicotine chronology both rest on this archive [raw/SOURCES.md]. Any analysis that scoped itself to the stated range excluded real data it held.

Instagram's full export was pulled August 24, 2025: 1,215 files, 626 megabytes, nine top-level sections [raw/INVENTORY-GAPS-2026-09-13.md]. It is the oldest export generation in the set, thirteen months stale at the audit date. ChatGPT holds two exports dated August 5, 2025 — dfrank88 at 288 megabytes and iHateDanFRANK at 201 megabytes, 754 files and 488 megabytes total — also thirteen months stale [raw/INVENTORY-GAPS-2026-09-13.md]. Takeout holds ten archives spanning May 14, 2024 to July 22, 2026, 588 files and 856 megabytes, two months stale at audit [raw/INVENTORY-GAPS-2026-09-13.md]. Its YouTube component — watch history, search history, thirty-nine playlists, comments, subscriptions, channel metadata, and two uploaded videos — sits inside the 856 megabytes and was absent from the stated inventory [raw/INVENTORY-GAPS-2026-09-13.md].

Four Takeout files were never ingested, harvested from the ingest manifests' own skip lists: Search MyActivity.html at 103.8 megabytes, past GitHub's 100-megabyte blob cap; Chrome MyActivity.html at 45.8 megabytes, requiring a Git-based push; and two performance videos at 503.5 and 269.9 megabytes [raw/INVENTORY-GAPS-2026-09-13.md]. The two MyActivity files are the material loss: full Google Search and Chrome history is the densest behavioural-timeline channel available, and both are outside every repository. They exist only inside a 17.8-megabyte Drive zip that returns a sign-in page on anonymous fetch — the same blocker that gated the complete dump before it was found in the archive [raw/INVENTORY-GAPS-2026-09-13.md]. The three sub-38-megabyte files initially described as omitted for size were recovered by native git push in nine seconds, byte-exact from RAWLOGS with hashes re-verified; the 36-to-38-megabyte ceiling is a Git Data API limit, not a repository limit [raw/INVENTORY-GAPS-2026-09-13.md]. A separate, smaller My Activity pull does exist in the archive — five gzipped dumps at ten megabytes, pulled 2026-09-12 [raw/INVENTORY-GAPS-2026-09-13.md] — but it is a partial behavioural timeline, not the two un-ingested HTML files, and the two should not be conflated.

## Location, Google Chat, Gmail, and the Sammy batches

Location history holds 121,733 records from April 2, 2014 to May 14, 2024 in raw/location/ [raw/INVENTORY-GAPS-2026-09-13.md]. It ends May 14, 2024 — two years and four months of no independent positional corroboration against a message corpus running to September 7, 2026. raw/SOURCES.md nominates location as the independent-corroboration channel precisely because it is mechanically produced rather than composed. The entire 2024 to 2026 period — including the Morgantown call, the August 2026 block retraction, and the Creative License dispute — has no such channel. A fresh Timeline export closes the gap in one pull [raw/INVENTORY-GAPS-2026-09-13.md].

Google Chat holds nine files at 852 kilobytes: seven distinct chats with two byte-identical duplicate pairs, plus attachment-system-collapse.md at 104 kilobytes, present but unlisted in the carried-over inventory [raw/INVENTORY-GAPS-2026-09-13.md]. Gmail holds a single file at twenty kilobytes, the Creative License and Kevin McKiernan thread dated August 2026 [raw/INVENTORY-GAPS-2026-09-13.md]. A second Gmail form is recorded in the per-file ledger: a bodies channel spanning 2001-09-11 to 2014-12-29, 22,860 rows — the only channel reaching before 2007 [wiki/self/message-corpora/source-coverage-index]. The audit's single-file count and the ledger's bodies channel do not describe the same artifact; the disagreement is carried in Conflicts below, and any citation of "Gmail" that does not say which form it searched is ambiguous in the same way an unqualified "the corpus" is.

The Sammy chat-scrape batches hold 260 files at sixty-one megabytes: twenty-five batches from September 11 to 13, 2026, plus a location-history batch, at raw/sammy/ [raw/INVENTORY-GAPS-2026-09-13.md]. Ten photo-ingest directories dated September 2026 — Annie in five batches plus a sixth, Rick, Zac, a Virginia grow, and a 2037 batch at roughly one hundred kilobytes total — and four photo and document sets at 3.6 megabytes covering the 307 East 76th Street lease signing (February 25, 2019), Fran Coldren photographs and Diane letters (2015 and 2017), Frank's Auto Supermarket, and Legion of Skanks tapings (December 23, 2019 and August 25, 2020) are also in the archive and were absent from the stated inventory [raw/INVENTORY-GAPS-2026-09-13.md].

The Drive sweep of September 11, 2026 holds 220 files at 319 megabytes across fifteen subfolders [raw/INVENTORY-GAPS-2026-09-13.md]. Several subfolders are names rather than corpora: spotify holds one file (Your Top Songs 2025 at thirty-two kilobytes), goodreads one library export at fifty-six kilobytes, telegram two CSVs at twelve kilobytes total, twitter a sample superseded by raw/twitter/, takeout-index an index HTML rather than the archives it indexes, and chatgpt-export one file overlapping raw/chatgpt/ at unknown margin [raw/INVENTORY-GAPS-2026-09-13.md]. Citing any of those as a channel overstates coverage. The sweep's misc-zip Archive 2.zip was the archive's one unknown object and, when opened September 13, 2026, proved to hold the complete dump described above [raw/INVENTORY-GAPS-2026-09-13.md]. The Morgantown call audio sits as its own small channel: one conversation, three participants, 13 megabytes, recorded 2026-08-16 [raw/INVENTORY-GAPS-2026-09-13.md].

## The coverage grid

Read down a year to see which instruments were running. `●` = substantive coverage, `◐` = thin or partial, `○` = none.

| Year | iMessage (export) | iMessage (dump) | Facebook msgs | Twitter | Location | Gmail bodies |
| :--- | :-: | :-: | :-: | :-: | :-: | :-: |
| 2001–2006 | ○ | ○ | ○ | ○ | ○ | ● |
| 2007 | ○ | ○ | ◐ | ○ | ○ | ● |
| 2008 | ○ | ○ | ◐ | ◐ | ○ | ● |
| 2009 | ○ | ○ | ◐ | ● | ○ | ● |
| 2010 | ○ | ○ | ● | ● | ○ | ● |
| 2011 | ◐ (1 msg) | ◐ | ● | ● | ○ | ● |
| 2012 | ○ | ◐ | ● | ● | ○ | ● |
| 2013 | ○ | ◐ | ● | ● | ○ | ● |
| 2014 | ○ | ◐ | ● | ● | ◐ (from Apr) | ◐ (to Dec) |
| 2015 | ◐ (from Nov) | ● | ● | ● | ● | ○ |
| 2016–2019 | ● | ● | ● | ● | ● | ○ |
| 2020 | ◐ | ● | ● | ● | ● | ○ |
| 2021 | ◐ (282) | ● | ◐ | ● | ● | ○ |
| 2022 | ○ | ● | ◐ (export ends) | ● | ● | ○ |
| 2023 | ◐ (960) | ● | ○ | ● | ● | ○ |
| 2024 | ◐ (4,369) | ● | ○ | ● | ◐ (to May) | ○ |
| 2025 Jan–Jul | ◐ (1,139) | ● | ○ | ● | ○ | ○ |
| 2025 Aug–Dec | ● | ○ (ends 08-11) | ○ | ● | ○ | ○ |
| 2026 | ● | ○ | ○ | ● (to 09-01) | ○ | ○ |

[DERIVED from the by-year log, the 2025 monthly table and the channel inventory above. The dump's per-year density before 2025 is not individually measured in this tree — only its span and its 2025 monthly counts are — so `●` for 2012–2024 asserts coverage of the window, not a volume.]

The grid's one clean reading: there is no row where every column is filled, and there are two rows — 2012–2014 and 2022 — where the wiki's primary instrument is blank and the finding rests entirely on channels most pages never cite. Two stated ranges in the prior inventory were wrong and the audit corrected them: Twitter was recorded as *Aug 2013 → Apr 2026* where it actually runs 2008-09-24 → 2026-09-01 [raw/INVENTORY-GAPS-2026-09-13.md G6], and Location was recorded as *from Apr 2014* with no end where it stops 2024-05-14, removing independent positional corroboration from the entire period the recent work is about [G4].

## How gaps hide themselves

Coverage holes are not the only silent failure. Four more are recorded with the evidence that found them, and each produces a wrong answer that looks right.

**1. The hour is unpadded in 44% of rows.** `2026-08-19 1:09:33`, not `01:09:33` [kb/data/0056-corpus-timestamps-are-not-zero-padded.md]. A text comparison selects nothing and a text sort scrambles the day, because `9:00:00` sorts after `10:00:00`. The first ten characters are fixed-width and safe; the whole string is not.

**2. The wiki's times are UTC and the corpus is local.** Four hours apart in summer, five in winter [kb/data/0057-morgantown-audio-contradiction-reproduces.md]. A message the wiki cites at 11:25 is at 07:25 in the corpus. Any attempt to locate a wiki-quoted message by its stated time lands on the wrong message or on nothing, and nothing about the result looks wrong. dat:0057's own first attempt at the Morgantown day selected nothing until the rows were ordered by parsed timestamp rather than by string — both traps firing at once.

**3. 3,086 messages cannot be placed in a thread.** `threads.csv` sums to **189,054** across 577 threads against the summary's 192,140 — a shortfall of exactly **3,086**, which is the summary's `unattributable_to_a_thread` figure [DERIVED: `awk` sum over `corpus/derived/threads.csv`; ATTESTED figure from `corpus/derived/summary.json`]. They are sent messages carrying no counterparty field. Per-thread totals are therefore **floors, not counts**. The same arithmetic runs on attachments: threads sum to 8,044 against the summary's 8,120, so 76 attachment-carrying messages are also unplaceable [DERIVED].

**4. A handle is not a person.** At least six inbound rows attributed to Annie's handle were typed by [[wiki/people/jerel-coles|Jerel Coles]] on her phone, across three episodes, all during crises — which is the worst possible distribution, because the handle is least reliable exactly where the corpus's highest-stakes claims are drawn from [wiki/self/message-corpora/source-coverage-index]. This moves no count and every attribution.

To those four the source index adds two more of its own: **four indexed sources are empty** — header row, no data, filename plausible, path resolving — and **eighteen carry a name that claims more coverage than the file holds**, with the `_all_now` / `_all_time` suffix unreliable as a class [wiki/self/message-corpora/source-coverage-index].

## The relationship holes that matter most

Two holes dominate absence reasoning in the current wiki because they sit inside its most-cited relationships.

The Annie hole is the largest single-relationship gap: November 2020 to December 2024 holds five messages in four years, against dense coverage from November 28, 2015 to October 2020 and again from March 2025 to June 5, 2026 across four handles [kb/data/0164-annie-record-coverage-and-progress.md]. The Annie Record — a hand-read chronology, not an extraction — covers 97,768 unique messages in that span, and the page is explicit that the hole is a hole in the record, not a quiet period in the relationship: four years of a ten-year relationship have no surviving two-sided message data in any export, and no synthesis may treat the gap as an observation [kb/data/0164-annie-record-coverage-and-progress.md]. Reading progress as of August 18, 2026 stood at 18,512 of 97,768 (18.9%), read through January 24, 2016 [kb/data/0164-annie-record-coverage-and-progress.md].

The Valeria hole is the cleanest instance of the partial-data pattern: zero rows May 2021 through December 2022 in the authoritative corpus, with the affair window entirely inside it, and later-dated claims in covered months still absent [kb/data/1449-valeria-imessage-coverage-hole.md]. The split the datum draws — affair-era texts as missing-data, later claims as uncorroborated — is the template for any absence claim that spans a hole boundary. A claim that does not state which side of the boundary it falls on has not yet been checked against this map.

Smaller holes shape specific findings. February 2010 holds ten Facebook messages against a monthly median of thirty-two — partial coverage in which suboxone does not occur, and the silence carries no weight either way [kb/data/1502-corpus-coverage-hole-2025.md]. November 2024 holds 367 messages against a median of 1,123 — partial again — in the window the bankruptcy's missing quote is dated to [raw/SOURCES.md; kb/data/1502-corpus-coverage-hole-2025.md]. June 2025, as above, is near-total. The dose curve's page inventories the same shape channel by channel: Facebook's fourteen suboxone occurrences ending in 2021, the authoritative corpus's June 2025 hole, Twitter never naming a dose [wiki/health/suboxone-dose-curve].

## Worked cases

The prescriber quotes are this page's type specimen and are covered in full in the corpus sections above: quoted by the prior wiki's census [kb/data/0025-old-wiki-prescriber-exists-routing-only.md], verified against the authoritative export on 2026-09-09 with one verbatim and three absent — two of them on days the export holds zero messages [kb/data/0028-prescriber-quotes-partly-unverifiable.md] — refused the label "refuted," and then found verbatim in the dump on 2026-09-13 [kb/data/1502-corpus-coverage-hole-2025.md]. The caution was vindicated rather than merely prudent, and the finding turned out to be about coverage, not provenance: the same three messages read as *unsupported* and as *confirmed* depending only on which artifact was open. The case read on its own timeline lives at [[wiki/health/suboxone-prescriber-arc]]. Two further cases show the same shapes running in other directions.

**The Kristin ceiling.** `all_imessages_complete_dump.txt` ends 2025-08-10 in the source index's measurement, and it is the default for `bin/mine-messages`. A 22,018-message relationship beginning after that date returns **zero matches rather than an error**, so a query about a post-August-2025 thread is indistinguishable from a query about someone who never existed, and the page built on the fallback file went unchallenged for two months [wiki/self/message-corpora/source-coverage-index]. The export covers that relationship — 20,015 messages in a thread running 2025-09-01 → 2025-12-11 [corpus/derived/threads.csv]. Two artifacts, one relationship, and the instrument that was running by default was the blind one.

**The 2011 Facebook appointment.** A 2011-08-04 Facebook message describes a scheduled Suboxone appointment with a urine screen administered there [kb/data/0033-2011-suboxone-appointment-with-screening.md]. Neither the prior wiki's census nor the authoritative export surfaced it: the census ran on a superseded dump and the export holds one message in all of 2011. dat:0033 draws the conclusion this page is built to generalise — *"the marginal value of a fourth message extract is near zero, and the marginal value of a first Facebook thread was a fact nothing else could see"* [kb/data/0033-2011-suboxone-appointment-with-screening.md]. Breadth of channel beats depth of channel wherever the grid above has a hole.

## Staleness and the enumeration trap

The audit's staleness table is the map's second axis [raw/INVENTORY-GAPS-2026-09-13.md]. Facebook at five days and Takeout at two months are current; Instagram and ChatGPT at thirteen months and Location's data at twenty-eight months are not. A cross-channel claim about late 2025 or 2026 that lists Instagram, ChatGPT, or Location among its sources without noting their end dates overstates its own coverage by up to two years.

The enumeration trap is the audit's methodological finding: eight source families sit in raw/ and were absent from the stated inventory, so anything that enumerates sources from a list rather than from the tree misses them — the Sammy batches, the Messenger Drive records, the YouTube histories inside Takeout, the Morgantown call audio with its independent transcript and validation report as separate sources, the photo-ingest batches, the My Activity dumps separate from Takeout, and the miscellaneous August-September 2026 slices [raw/INVENTORY-GAPS-2026-09-13.md]. The two repositories also disagree on where an ingest batch lives: twenty-four directories under RAWLOGS raw/sammy/ live at wikibrain raw/ slug in the other tree, thirteen by mirror commits and eleven by native RAWLOGS batch commits predating the mirror, with photo-ingest-20260912-annie-01 sitting under raw/sammy/ in both as the tell [raw/INVENTORY-GAPS-2026-09-13.md]. A tool that walks raw/ on RAWLOGS sees thirteen top-level entries against wikibrain's thirty-six — a third of the archive. This page enumerates from the trees as the audit measured them, and future updates should do the same.

The iMessage corpus itself exists in three divergent forms with no stated authority: the RAWLOGS byte-original at 47.8 megabytes, private; the wikibrain two-part split, public, carrying an xai-REDACTED-ROTATE-ME substitution whose recombination reproduces all 192,140 records but whose bytes are not the original bytes; and corpus/messages.csv, gitignored, re-pulled and sha256-checked against a manifest pinning the unredacted hash [raw/INVENTORY-GAPS-2026-09-13.md]. The public copy will never match the manifest hash by construction. That is defensible and, until the audit, was not written down as intended behaviour. Two xAI API keys across eight files need rotating; redaction was applied to the public copy only, and the live keys remain in RAWLOGS [raw/INVENTORY-GAPS-2026-09-13.md].

## Open gaps and falsifiers

Concrete gaps, stated so they can be closed or falsified rather than remembered.

1. **`CORPUS_POLICY.md` names one gap year and the data shows four.** 2012, 2013 and 2014 are at zero in the authoritative export and unmentioned there. Filed above and in Conflicts; not edited there.
2. **The dump's per-year density is unmeasured in this tree.** Only its span and its 2025 monthly counts exist as measurements; the coverage grid's pre-2025 dump cells assert window coverage, not volume. A year-by-year density count of the 2025-08-11 dump either confirms those cells or shows 2012–2014 has no instrument at all, weakening every claim resting on those years.
3. **Facebook's per-year message distribution was not computed here.** The archive is asserted to cover 2012–2014 from its stated era; no per-year counts back the assertion in this tree's own measurements.
4. **Overlap between `drive-sweep/chatgpt*` and `raw/chatgpt/` is unquantified** [raw/INVENTORY-GAPS-2026-09-13.md §5], so the ChatGPT row's size is not a deduplicated figure.
5. **Timezone is asserted, not measured, for 50 of 52 indexed message sources.** Only the two 2026-08-13 exports were validated, on 42,895 text-matched pairs [wiki/self/message-corpora/source-coverage-index]. A source silently exported in UTC would not be caught.
6. **The 3,086 unattributable rows have no disposition.** They are counted and excluded; nobody has decided whether they can be attributed by content or should be marked permanently floating.
7. **Instagram and ChatGPT are thirteen months stale** as of the 2026-09-13 audit [raw/INVENTORY-GAPS-2026-09-13.md G5], so any cross-channel claim spanning late 2025 to now draws on Facebook/iMessage/Takeout while believing it drew on all channels.
8. **A Timeline re-export would close the positional hole.** One pull covers 2024-05 → present. If it lands and the positions contradict message-derived location claims for 2024–2026, the grid's `○` Location column becomes a correction queue.
9. **A Facebook export generation after Sep 2022 would test the 2022 zero.** The message channel's end is an export boundary, not a behavioural one; a later generation decides whether the 2022 iMessage zero is a device artifact or a real quiet period.
10. **A second device-access episode found earlier in the record would move attributions.** The three Coles episodes were each identifiable from register alone; whether there are others before 2026 has not been checked [wiki/self/message-corpora/source-coverage-index].
11. **The un-ingested Search and Chrome history remains outside every repository.** Both `MyActivity.html` files sit in a private Drive zip; one sharing change opens them [raw/INVENTORY-GAPS-2026-09-13.md G2]. They are the densest behavioural channel available, so this grid has a column it cannot draw.

## Limits of this page

- **Observed:** 192,140 rows and their per-year distribution; 577 threads summing to 189,054; 52 unique threads' worth of attachment counts summing to 8,044; the 2025 monthly split against the dump; the 2026-09-13 channel inventory's spans and file counts; 403 Facebook threads and 15,558 parseable messages.
- **Calculated:** every share and subtotal in the by-year and 2025 tables; the 87.6% fourth-quarter concentration; the 22,761-message Jan–Aug surplus; the 3,086 and 76 shortfalls.
- **Inferred:** the coverage grid's `●`/`◐`/`○` assignments for channels whose per-year density was not measured; the reading that 2012–2014's absence from `messages_per_year` means zero rather than an omitted key — sound, because the listed years sum exactly to the stated total, but still an inference.
- **Unknown:** the dump's per-year density before 2025; Facebook's per-year message distribution; whether the 2022 iMessage zero is a device artifact or a quiet period; the content of the two un-ingested `MyActivity.html` files; whether device-access contamination exists before 2026.
- **Not re-checked in the sessions that wrote this page:** `bin/corpus-verify` was not run, so the corpus's current agreement with its manifest is asserted from `corpus/manifest.json` rather than re-verified. `README.md` also records that the `raw/` cited by the reconstructed pages is not the `raw/` in this tree — roughly 237 `raw/…` paths in the page corpus resolve to nothing [README.md]. That does not make their claims false; it makes them unverified, which is a different and recoverable state.
- **No media.** This page embeds no photographs. Its subject is file spans and row counts, and there is no image in the archive that carries a coverage fact.

## Conflicts in the record

**Authoritative versus complete.** The corpus bin/wb-corroborate treats as authoritative holds 129,262 messages over 2011-03 to 2025-08 while the superseded dump holds 217,573 over the same window [kb/data/1502-corpus-coverage-hole-2025.md]. The corpus is more recent and better structured; the dump is more complete. Neither description is wrong. An absence claim that names only "the corpus" without specifying which artifact was searched is ambiguous in exactly the window where the two diverge most.

**Stated Twitter range.** August 2013 to April 2026 in the carried inventory against 2008-09-24 to 2026-09-01 parsed from archive.jsonl [raw/INVENTORY-GAPS-2026-09-13.md]. The inventory understated the archive by nearly five years at the early end. Any analysis scoped to the stated range excluded data it held.

**Facebook generation.** raw/SOURCES.md references the June 2026 export as the ingested Facebook source; the archive holds the September 2026 generation as the ingested source [raw/INVENTORY-GAPS-2026-09-13.md; kb/sources/facebook-export-20260908.md]. The June pointer is superseded. The archive holds 4,404 files at 234 megabytes across both September parts; the source record's 1,470 files per part describes the September generation's parts, and the 2,927 and 1,475 split in the audit describes the same tree counted differently. Both counts are carried here as measured; the tree, not either count, is the authority.

**Four-hour offset.** The prior wiki writes timestamps in UTC; the authoritative corpus is local. In August the offset is four hours, in winter five [kb/data/1502-corpus-coverage-hole-2025.md]. Every timestamp quoted from the prior wiki is ahead of the same message in the corpus by that amount until converted. Searches by stated time that do not convert will miss their target and report absence where a shift would find presence.

**Repository layout.** The mirror policy as written — preserving subdirectory layout exactly — does not describe the twenty-four-directory divergence between RAWLOGS raw/sammy/ and wikibrain raw/ [raw/INVENTORY-GAPS-2026-09-13.md]. Either RAWLOGS adopts the slug layout or the policy is rewritten to say the layouts differ on purpose. Moving trees on an audit's reading of a convention is how an archive gets scrambled, and the audit deliberately does not action the choice. Enumeration from either tree alone is partial until it is settled.

**Duplicate and lossy forms.** Google Chat's j6-chat duplicates and the Ross Thompson thread's HTML-to-Docs conversion — which drops a photo attachment, a SoundCloud link, an inline IP, the export footer, and all block structure — are catalogued as traps for anything that counts [raw/INVENTORY-GAPS-2026-09-13.md]. In a Facebook export nothing in the message text carries the speaker; the HTML is the source of record and the conversion is not. Thirty-eight files whose bytes already existed under a different name were deduplicated at ingest, so filename-based enumeration overcounts relative to the archive.

**CORPUS_POLICY gap years.** `CORPUS_POLICY.md` names its known coverage holes as 2021 (282 messages) and 2022 (none). The export's own per-year summary shows four zero years — 2012, 2013, 2014 and 2022 [corpus/derived/summary.json]. The policy understates its holes by three years, and the three sit on the dose curve's most important interval. This page records the correction; the policy itself is unamended, because a governing document is amended deliberately or not at all.

**Gmail's two forms.** The 2026-09-13 audit counts Gmail as a single twenty-kilobyte file, the August 2026 Creative License and Kevin McKiernan thread [raw/INVENTORY-GAPS-2026-09-13.md]. The per-file ledger records a Gmail bodies channel of 22,860 rows spanning 2001-09-11 to 2014-12-29 [wiki/self/message-corpora/source-coverage-index]. Both are carried here as measured. Until the two are reconciled, a citation of "Gmail" that does not name the form searched is ambiguous across thirteen years of coverage.

**Dump end date.** The kb source record dates the complete dump's span to 2025-08-11 [kb/sources/imessage-complete-dump-2025-08-11.md]; the source index measures its last record at 2025-08-10 [wiki/self/message-corpora/source-coverage-index]. One day, two measurements. This page uses 2025-08-11 for the span and keeps the index's 08-10 where the Kristin case depends on it; nothing turns on the day except searches scoped to it.

**Merger of the two coverage pages (2026-10-04).** Until today the wiki carried two full treatments of this same reference function: this page (created 2026-10-03, built from the kb/sources inventory and _gap-candidates-dose-curve.md) and wiki/self/corpus/channel-coverage-gaps (created 2026-09-17, built from corpus/derived and the per-file ledger). A Jev overlap pass scored the pair 0.78 — near-total claim-space overlap — and human spot-check sustained the merge as the pass's one genuine duplicate. The two pages have been united here as a single text: the by-year complete log, the coverage grid, the worked cases, the falsifiers, the open-gaps list, the five-point absence checklist and the limits-of-record all entered this page from channel-coverage-gaps, whose text lives on inside this union; channel-coverage-gaps is now a superseded pointer to this page. Facts the two pages stated differently — the CORPUS_POLICY gap years, Gmail's two forms, the dump's end date — are carried above as conflicts rather than silently resolved.

## Assessment

The coverage map's central finding is that the wiki's most-used instrument is also its most uneven one. The authoritative iMessage corpus is the best-structured and most recent message record the repository holds, and it is missing a twenty-month hole in 2021-2022, near-total thinning through 2025, and eighty-eight thousand messages the superseded dump holds over the same span. Facebook covers the 2021-2022 hole and ends in 2022. The dump covers the 2025 thinning and ends in August 2025. Location ends in May 2024. No single channel covers the whole period the wiki reasons about, and the channels' edges fall in different years, which is precisely why an absence claim that does not name its channel and window cannot be evaluated.

The practical consequence is procedural. Before an absence claim is published — that a quote was never written, a period was quiet, a contact did not happen — the claim should name the artifact searched, the window's density in that artifact from the tables above, and whether the search also ran against the dump for pre-August-2025 windows. The dat nodes this page cites already model the discipline in specific cases. This page exists so the discipline does not have to be re-derived from them each time.

## See also

- [[wiki/mind/synthesis/operator-threat-model]] — the threat model whose confident-error instances this map makes checkable.
- [[wiki/health/suboxone-dose-curve]] — one regimen's bearings inventoried channel by channel against the holes mapped here.
- [[wiki/mind/synthesis/annie-decade-synthesis]] — the decade whose four-year hole is this map's largest single-relationship gap.
- [[wiki/self/message-corpora/source-coverage-index]] — the per-file ledger this page's per-year view extends.
- [[wiki/self/message-corpora/message-request-blind-spot]] — the absence doctrine whose canonical phrasings this page's tables supply the numbers for.
- [[wiki/mind/synthesis/steady-state-invisibility]] — the behavioral half of every silence this page gives the mechanical half of.

## References

- kb/sources/imessage-corpus-2026.md — the authoritative corpus: 192,140 rows, 2011-03-19 to 2026-09-07, forty-five columns, manifest-verified, gitignored by design.
- kb/sources/imessage-complete-dump-2025-08-11.md — the complete dump: 217,573 dated records, 2011-03-18 to 2025-08-11, found inside Archive 2.zip after being recorded as blocked.
- kb/sources/facebook-export-2026-06-23.md — the June 2026 Facebook generation: publicly readable tree, private zip, block-structure attribution rule.
- kb/sources/facebook-export-20260908.md — the September 2026 Facebook generation: two parts, 2007-era span, the currently ingested source.
- kb/data/1502-corpus-coverage-hole-2025.md — the 88,311-message shortfall, the 2025 monthly densities, and the four prescriber quotes found verbatim in the dump.
- kb/data/0028-prescriber-quotes-partly-unverifiable.md — the prescriber verification: one verified, two in zero-message days, June 2025 at thirty-five messages.
- kb/data/1449-valeria-imessage-coverage-hole.md — the twenty-month hole: zero rows May 2021 to December 2022 and the missing-data versus uncorroborated split.
- kb/data/0164-annie-record-coverage-and-progress.md — the Annie Record: 97,768 messages, the November 2020 to December 2024 hole, and the 18.9% read progress.
- kb/data/0025-old-wiki-prescriber-exists-routing-only.md — the prior wiki census's prescriber claim, the first stage of the worked case.
- kb/data/0033-2011-suboxone-appointment-with-screening.md — the 2011 Facebook appointment: the fact only a first Facebook thread could see.
- kb/data/0054-facebook-archive-completed-and-recounted.md — the Facebook archive enumerated to exhaustion: 403 threads, 15,558 parseable messages.
- kb/data/0055-facebook-corroborates-the-2010-maintenance-start.md — the Facebook catch behind the 2013 dosage figure the export cannot hold.
- kb/data/0056-corpus-timestamps-are-not-zero-padded.md — the unpadded hour in 44% of rows.
- kb/data/0057-morgantown-audio-contradiction-reproduces.md — the UTC/local offset and the Morgantown day it hid.
- raw/SOURCES.md — the raw source inventory: the eleven named sources, export staleness, and the reachable-but-not-pulled Drive folders.
- raw/INVENTORY-GAPS-2026-09-13.md — the measured audit: the verified inventory, the eight unlisted families, and gaps G1 through G9 with the recovered files.
- CORPUS_POLICY.md — the two tiers, the known limits, and the gap-year statement this page corrects.
- corpus/derived/summary.json — per-year counts, thread and handle totals.
- corpus/derived/threads.csv — 577 thread rows, spans, per-thread volumes.
- [[wiki/self/message-corpora/source-coverage-index]] — the per-file ledger: 52 message sources, what each holds, where each filename lies.
- [[wiki/self/message-corpora/message-request-blind-spot]] — the absence doctrine: which zeros are admissible and how to phrase them.
- [[wiki/health/suboxone-prescriber-arc]] — the prescriber case read on its own timeline rather than as a coverage example.
- _gap-candidates-dose-curve.md — the seed: candidate four, a dated inventory of which channels cover which years, from which this page was built.
