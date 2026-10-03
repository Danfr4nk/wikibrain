---
domain: self
page_type: synthesis
title: "Message Corpus Coverage Map"
aliases: ["corpus coverage map", "channel-coverage-gaps", "message-corpus-coverage-map"]
tier: major
status: active
knowledge: earned
date_created: 2026-10-03
date_modified: 2026-10-03
sources:
  - kb/sources/imessage-corpus-2026.md
  - kb/sources/imessage-complete-dump-2025-08-11.md
  - kb/sources/facebook-export-2026-06-23.md
  - kb/sources/facebook-export-20260908.md
  - kb/data/1502-corpus-coverage-hole-2025.md
  - kb/data/0028-prescriber-quotes-partly-unverifiable.md
  - kb/data/1449-valeria-imessage-coverage-hole.md
  - kb/data/0164-annie-record-coverage-and-progress.md
  - raw/SOURCES.md
  - raw/INVENTORY-GAPS-2026-09-13.md
connections:
  - page: wiki/mind/synthesis/operator-threat-model
    type: cites
    claim: "The threat model's confident-error instances all turn on holes this map inventories; checking an absence claim against this page is the gate the model prescribes."
  - page: wiki/health/suboxone-dose-curve
    type: cites
    claim: "The dose curve's Facebook window (fourteen occurrences, 2011-2021, one counterparty) and its June 2025 corpus hole are instances of the coverage shapes mapped here."
  - page: wiki/mind/synthesis/annie-decade-synthesis
    type: cites
    claim: "The Annie decade's 2020-11 to 2024-12 hole — five messages in four years — is the largest single-relationship hole on this map."
tags: [corpus, coverage, method, forensic-analysis, negative-data]
importance: 5
changelog:
  - 2026-10-03: Restructured to canonical template v1; new page from _gap-candidates-dose-curve.md candidate 4 and kb/sources inventory
---

# Message Corpus Coverage Map

Every "absence" claim in this wiki — that a message was never sent, a quote was never written, a period was quiet, a person was not around — is a claim about what a corpus could have observed. This page is the dated inventory against which those claims can be checked: which channels cover which years, where the holes are, how stale each export is, and what kind of absence each hole can and cannot support.

The map is built from two structures that do not always agree: the knowledge base's source records under kb/sources/ (207 files describing what was acquired, when, and with what reliability) and the raw archive's own inventory in raw/SOURCES.md and raw/INVENTORY-GAPS-2026-09-13.md, which was measured from the working trees rather than read off a prior manifest [raw/INVENTORY-GAPS-2026-09-13.md]. Where the two disagree, the bytes win and the disagreement is recorded in the Conflicts section below.

The governing distinction, stated everywhere the current repository enforces it and inherited from the prior wiki's ledger, is between never-observed and known-not-to-occur [kb/data/1502-corpus-coverage-hole-2025.md; kb/data/0028-prescriber-quotes-partly-unverifiable.md]. An absence in a covered month with a dense channel is evidence. An absence in a hole is no observation at all. This page's work is to make the difference checkable without re-deriving it each time — to turn "we searched and found nothing" into a claim that names the instrument, the window, and the instrument's coverage of that window.

## How to use this map

A future absence claim should be able to answer three questions from this page alone. First: which channel was searched? The iMessage authoritative corpus, the 2025-08-11 complete dump, the Facebook exports, the Twitter archive, and the Messenger Drive records are distinct channels with distinct windows, and a search of one says nothing about the others. Second: what does that channel hold for the claimed window? The tables below give monthly and yearly densities where the KB measured them. Third: is the absence never-observed or known-not-to-occur? The KB's dat nodes already model the answer in specific cases — the prescriber quotes in June 2025, the Valeria affair window, the Annie hole — and this page collects the general rule behind them: if the channel held zero or near-zero rows for the window, the absence supports nothing.

The map also records staleness, because a channel's newest export date bounds what any cross-channel claim can span. As of the September 13, 2026 audit, Facebook's newest export is five days old, Takeout's is two months, Instagram's is thirteen months, ChatGPT's is thirteen months, and Location's data ends twenty-eight months before the audit date [raw/INVENTORY-GAPS-2026-09-13.md]. Any claim spanning late 2025 to the present that believes it drew on all channels drew, in fact, on Facebook, iMessage, and Takeout while Instagram, ChatGPT, and Location were silent.

## The authoritative iMessage corpus and its limits

The authoritative message record is the complete Messages export staged as corpus/messages.csv: 192,140 rows, 2011-03-19 to 2026-09-07, forty-five columns, zero malformed rows on parse, integrity recorded in corpus/manifest.json and re-pullable by bin/wb-corroborate --pull with sha256 verification against the manifest [kb/sources/imessage-corpus-2026.md; raw/INVENTORY-GAPS-2026-09-13.md]. It is the instrument bin/wb-corroborate runs against, and it is gitignored by design: it contains the phone numbers, email addresses, and private words of 498 people who did not choose to be published, and derived layers may cite it but may not reproduce it [kb/sources/imessage-corpus-2026.md].

Authoritative describes recency and structure, not completeness. Over the window both it and the superseded dump cover — 2011-03 to 2025-08 — the authoritative corpus holds 129,262 messages while the dump holds 217,573. The superseded dump carries 88,311 more [kb/data/1502-corpus-coverage-hole-2025.md]. The shortfall is concentrated where it matters most for recent absence claims. By month in 2025 the corpus against the dump reads: January 380 to 1,910; February 255 to 3,042; March 166 to 4,461; April 76 to 3,607; May 120 to 5,454; June 35 to 4,898; July 107 to 3,541; only August reverses — 3,950 to 937 — because the dump ends August 11 [kb/data/1502-corpus-coverage-hole-2025.md]. June 2025 carries thirty-five messages total against 21,290 outbound across the year in the corpus's own accounting [kb/data/0028-prescriber-quotes-partly-unverifiable.md]. Any claim bin/wb-corroborate marked uncorroborated for a 2025 date was tested against a corpus holding between thirty-five and 380 messages a month for that year, where the dump holds thousands. Those results are not wrong. They are uninformative, and they were not labelled as such until this datum [kb/data/1502-corpus-coverage-hole-2025.md].

The corpus also has hard holes that predate the 2025 thinning. A direct month-bucket count over all 192,140 rows shows zero rows for every month from May 2021 through December 2022 — April 2021 has three rows, March 2021 has one, January 2023 has six, February 2023 has zero [kb/data/1449-valeria-imessage-coverage-hole.md]. The entire Valeria affair window, August 2021 to mid-2022, falls inside that hole. Later-dated claims about that thread — September 2023 with 102 rows, November 2024 with 367 rows, July 2025 with 107 rows — fall in covered months and still produce no rows; those are uncorroborated rather than missing-data, and the distinction is the datum's whole output [kb/data/1449-valeria-imessage-coverage-hole.md]. Zero senders containing "valeria" appear anywhere in the file.

At the single-day scale, the holes are absolute. The corpus holds zero messages on June 8, 2025 and zero on June 12, 2025 — the two dates three of the four prescriber quotes the prior wiki cited are dated to [kb/data/0028-prescriber-quotes-partly-unverifiable.md]. June 8 holds 272 messages in the dump and June 12 holds 200 there; all four quotes, including the three the authoritative corpus could not verify, are present verbatim in the dump [kb/data/1502-corpus-coverage-hole-2025.md]. Absence there is never-observed, and the datum is explicit that treating those two as refuted would be the exact error the system exists to prevent, committed while verifying somebody else's.

## The 2025-08-11 complete dump

The complete dump is a text export generated August 11, 2025 at 05:01: 28,905,037 bytes, sha256 0512212e..., 226,060 lines and 217,573 dated records in pipe-delimited form — timestamp, direction, handle, chat, text, attachment, service, flags — spanning 2011-03-18 to 2025-08-11 [kb/sources/imessage-complete-dump-2025-08-11.md]. It was present in this repository from the September 11, 2026 Drive sweep, compressed inside raw/drive-sweep/20260911/misc-zip/Archive 2.zip alongside six split parts, while raw/SOURCES.md recorded the same filename as blocked behind a Drive sharing change on dox-scan/ [kb/sources/imessage-complete-dump-2025-08-11.md; raw/INVENTORY-GAPS-2026-09-13.md]. Extracted and verified September 13, 2026, it scanned clean for credentials.

The dump and the authoritative corpus overlap for fourteen years and diverge in what they are good for. The corpus is sha256-pinned, column-structured, and runs to September 7, 2026 where the dump stops August 11, 2025. The dump is more complete over the window both cover, by 88,311 messages. The point the datum insists on is not that the dump should replace the corpus. It is that "authoritative" was doing work "most recent" had earned and "most complete" had not, and nothing in the pipeline distinguished the two [kb/data/1502-corpus-coverage-hole-2025.md]. Future searches for 2011 to August 2025 material should run against both and report which produced the result; searches for September 2025 onward can run only against the corpus, because the dump does not reach there.

The dump's arrival also settled a provenance question that had been framed as the decisive test for the reasoning-sound-provenance-unreliable pattern: if the four unverifiable quotes were in the dump and not in the authoritative export, the finding would be about coverage rather than provenance, a much less alarming conclusion [kb/data/1502-corpus-coverage-hole-2025.md]. All four were in the dump. What that means for the pattern is deliberately left open by the datum — it supplies the measurement and does not make the judgement about a published conclusion [kb/data/1502-corpus-coverage-hole-2025.md].

## Facebook: two generations and a distinct channel

Facebook is the corpus's independent channel — a different company, a different export, the only thing that can catch a systematic error in the iMessage record [kb/sources/facebook-export-2026-06-23.md]. Two generations are held.

The June 2026 generation was generated June 23, 2026 and held in Google Drive as an 82-megabyte zip and an unzipped tree; the tree was made publicly readable September 9, 2026, which made anonymous per-file retrieval possible, while the zip remains private and past the connector's size limit, so bulk retrieval is still unavailable [kb/sources/facebook-export-2026-06-23.md]. It spans years the iMessage corpus does not — the corpus holds no messages at all for most of 2021 and 2022, and this export covers that window [kb/sources/facebook-export-2026-06-23.md]. Its structure is one folder per conversation under messages/inbox/, plus message_requests/, filtered_threads/, and legacy_threads/, each message a block of speaker name, rule, text, and timestamp. Nothing in the text carries the speaker. Extract a line without its block and attribution is gone — the exact mechanism by which the prior wiki recorded another person's DUI as a fact about the subject [kb/sources/facebook-export-2026-06-23.md].

The September 2026 generation, generated September 8, 2026, is newer and larger: two parts in raw/facebook/export-20260908-a and export-20260908-b, 1,470 files per the source record and 4,404 files total across both exports plus a separately held ross-thompson/ tree, roughly seventy-seven megabytes per part in gdoc-converted text and posts trees, with message span including 2007-era content [kb/sources/facebook-export-20260908.md; raw/INVENTORY-GAPS-2026-09-13.md]. The ingested source is this generation. raw/SOURCES.md still references the June generation as the ingested Facebook source in places — a superseded pointer the audit flags [raw/INVENTORY-GAPS-2026-09-13.md].

Facebook's coverage ends in September 2022 in the archive's message span for corroboration purposes: fourteen occurrences of suboxone between 2011 and 2021, all in threads with one counterparty, with the 2013 dosage figure and the 2011 appointment both caught by this channel and by no other [kb/data/1502-corpus-coverage-hole-2025.md; wiki/health/suboxone-dose-curve]. The channel that ever named the dose stops covering the period just when the logistics questions get interesting. For any claim dated after September 2022, Facebook absence is not a search result. It is the channel's edge.

A distinct channel from the Facebook export is the Messenger Drive records: 27,573 Facebook, Instagram, and TikTok direct-message records across 331 threads, 2007 to 2026, held at raw/messenger-drive-2026-09-12/ in the RAWLOGS tree and listed in the audit as a family absent from the stated inventory [raw/INVENTORY-GAPS-2026-09-13.md]. Together with raw/messenger-2026-09-12/ it forms the Messenger-side coverage that the Facebook export's inbox folders do not duplicate. Searches that enumerate sources from a list rather than from the tree miss both families entirely [raw/INVENTORY-GAPS-2026-09-13.md].

## Twitter, Instagram, ChatGPT, and Takeout

Twitter holds 2,741 tweets in raw/twitter/, spanning 2008-09-24 to 2026-09-01, parsed from archive.jsonl [raw/INVENTORY-GAPS-2026-09-13.md]. The stated range in the carried-over inventory — August 2013 to April 2026 — is wrong in both directions: nearly five years of early material (2008 to 2013) is present and unaccounted for, and five months at the recent end likewise. Reposts holds five records, not a second corpus comparable to the tweets [raw/INVENTORY-GAPS-2026-09-13.md]. The prior wiki's Suboxone day-zero correction and its nicotine chronology both rest on this archive [raw/SOURCES.md]. Any analysis that scoped itself to the stated range excluded real data it held.

Instagram's full export was pulled August 24, 2025: 1,215 files, 626 megabytes, nine top-level sections [raw/INVENTORY-GAPS-2026-09-13.md]. It is the oldest export generation in the set, thirteen months stale at the audit date. ChatGPT holds two exports dated August 5, 2025 — dfrank88 at 288 megabytes and iHateDanFRANK at 201 megabytes, 754 files and 488 megabytes total — also thirteen months stale [raw/INVENTORY-GAPS-2026-09-13.md]. Takeout holds ten archives spanning May 14, 2024 to July 22, 2026, 588 files and 856 megabytes, two months stale at audit [raw/INVENTORY-GAPS-2026-09-13.md]. Its YouTube component — watch history, search history, thirty-nine playlists, comments, subscriptions, channel metadata, and two uploaded videos — sits inside the 856 megabytes and was absent from the stated inventory [raw/INVENTORY-GAPS-2026-09-13.md].

Four Takeout files were never ingested, harvested from the ingest manifests' own skip lists: Search MyActivity.html at 103.8 megabytes, past GitHub's 100-megabyte blob cap; Chrome MyActivity.html at 45.8 megabytes, requiring a Git-based push; and two performance videos at 503.5 and 269.9 megabytes [raw/INVENTORY-GAPS-2026-09-13.md]. The two MyActivity files are the material loss: full Google Search and Chrome history is the densest behavioural-timeline channel available, and both are outside every repository. They exist only inside a 17.8-megabyte Drive zip that returns a sign-in page on anonymous fetch — the same blocker that gated the complete dump before it was found in the archive [raw/INVENTORY-GAPS-2026-09-13.md]. The three sub-38-megabyte files initially described as omitted for size were recovered by native git push in nine seconds, byte-exact from RAWLOGS with hashes re-verified; the 36-to-38-megabyte ceiling is a Git Data API limit, not a repository limit [raw/INVENTORY-GAPS-2026-09-13.md].

## Location, Google Chat, Gmail, and the Sammy batches

Location history holds 121,733 records from April 2, 2014 to May 14, 2024 in raw/location/ [raw/INVENTORY-GAPS-2026-09-13.md]. It ends May 14, 2024 — two years and four months of no independent positional corroboration against a message corpus running to September 7, 2026. raw/SOURCES.md nominates location as the independent-corroboration channel precisely because it is mechanically produced rather than composed. The entire 2024 to 2026 period — including the Morgantown call, the August 2026 block retraction, and the Creative License dispute — has no such channel. A fresh Timeline export closes the gap in one pull [raw/INVENTORY-GAPS-2026-09-13.md].

Google Chat holds nine files at 852 kilobytes: seven distinct chats with two byte-identical duplicate pairs, plus attachment-system-collapse.md at 104 kilobytes, present but unlisted in the carried-over inventory [raw/INVENTORY-GAPS-2026-09-13.md]. Gmail holds a single file at twenty kilobytes, the Creative License and Kevin McKiernan thread dated August 2026 [raw/INVENTORY-GAPS-2026-09-13.md]. The Sammy chat-scrape batches hold 260 files at sixty-one megabytes: twenty-five batches from September 11 to 13, 2026, plus a location-history batch, at raw/sammy/ [raw/INVENTORY-GAPS-2026-09-13.md]. Ten photo-ingest directories dated September 2026 — Annie in five batches plus a sixth, Rick, Zac, a Virginia grow, and a 2037 batch at roughly one hundred kilobytes total — and four photo and document sets at 3.6 megabytes covering the 307 East 76th Street lease signing (February 25, 2019), Fran Coldren photographs and Diane letters (2015 and 2017), Frank's Auto Supermarket, and Legion of Skanks tapings (December 23, 2019 and August 25, 2020) are also in the archive and were absent from the stated inventory [raw/INVENTORY-GAPS-2026-09-13.md].

The Drive sweep of September 11, 2026 holds 220 files at 319 megabytes across fifteen subfolders [raw/INVENTORY-GAPS-2026-09-13.md]. Several subfolders are names rather than corpora: spotify holds one file (Your Top Songs 2025 at thirty-two kilobytes), goodreads one library export at fifty-six kilobytes, telegram two CSVs at twelve kilobytes total, twitter a sample superseded by raw/twitter/, takeout-index an index HTML rather than the archives it indexes, and chatgpt-export one file overlapping raw/chatgpt/ at unknown margin [raw/INVENTORY-GAPS-2026-09-13.md]. Citing any of those as a channel overstates coverage. The sweep's misc-zip Archive 2.zip was the archive's one unknown object and, when opened September 13, 2026, proved to hold the complete dump described above [raw/INVENTORY-GAPS-2026-09-13.md].

## The relationship holes that matter most

Two holes dominate absence reasoning in the current wiki because they sit inside its most-cited relationships.

The Annie hole is the largest single-relationship gap: November 2020 to December 2024 holds five messages in four years, against dense coverage from November 28, 2015 to October 2020 and again from March 2025 to June 5, 2026 across four handles [kb/data/0164-annie-record-coverage-and-progress.md]. The Annie Record — a hand-read chronology, not an extraction — covers 97,768 unique messages in that span, and the page is explicit that the hole is a hole in the record, not a quiet period in the relationship: four years of a ten-year relationship have no surviving two-sided message data in any export, and no synthesis may treat the gap as an observation [kb/data/0164-annie-record-coverage-and-progress.md]. Reading progress as of August 18, 2026 stood at 18,512 of 97,768 (18.9%), read through January 24, 2016 [kb/data/0164-annie-record-coverage-and-progress.md].

The Valeria hole is the cleanest instance of the partial-data pattern: zero rows May 2021 through December 2022 in the authoritative corpus, with the affair window entirely inside it, and later-dated claims in covered months still absent [kb/data/1449-valeria-imessage-coverage-hole.md]. The split the datum draws — affair-era texts as missing-data, later claims as uncorroborated — is the template for any absence claim that spans a hole boundary. A claim that does not state which side of the boundary it falls on has not yet been checked against this map.

Smaller holes shape specific findings. February 2010 holds ten Facebook messages against a monthly median of thirty-two — partial coverage in which suboxone does not occur, and the silence carries no weight either way [kb/data/1502-corpus-coverage-hole-2025.md]. November 2024 holds 367 messages against a median of 1,123 — partial again — in the window the bankruptcy's missing quote is dated to [raw/SOURCES.md; kb/data/1502-corpus-coverage-hole-2025.md]. June 2025, as above, is near-total. The dose curve's page inventories the same shape channel by channel: Facebook's fourteen suboxone occurrences ending in 2021, the authoritative corpus's June 2025 hole, Twitter never naming a dose [wiki/health/suboxone-dose-curve].

## Staleness and the enumeration trap

The audit's staleness table is the map's second axis [raw/INVENTORY-GAPS-2026-09-13.md]. Facebook at five days and Takeout at two months are current; Instagram and ChatGPT at thirteen months and Location's data at twenty-eight months are not. A cross-channel claim about late 2025 or 2026 that lists Instagram, ChatGPT, or Location among its sources without noting their end dates overstates its own coverage by up to two years.

The enumeration trap is the audit's methodological finding: eight source families sit in raw/ and were absent from the stated inventory, so anything that enumerates sources from a list rather than from the tree misses them — the Sammy batches, the Messenger Drive records, the YouTube histories inside Takeout, the Morgantown call audio with its independent transcript and validation report as separate sources, the photo-ingest batches, the My Activity dumps separate from Takeout, and the miscellaneous August-September 2026 slices [raw/INVENTORY-GAPS-2026-09-13.md]. The two repositories also disagree on where an ingest batch lives: twenty-four directories under RAWLOGS raw/sammy/ live at wikibrain raw/ slug in the other tree, thirteen by mirror commits and eleven by native RAWLOGS batch commits predating the mirror, with photo-ingest-20260912-annie-01 sitting under raw/sammy/ in both as the tell [raw/INVENTORY-GAPS-2026-09-13.md]. A tool that walks raw/ on RAWLOGS sees thirteen top-level entries against wikibrain's thirty-six — a third of the archive. This page enumerates from the trees as the audit measured them, and future updates should do the same.

The iMessage corpus itself exists in three divergent forms with no stated authority: the RAWLOGS byte-original at 47.8 megabytes, private; the wikibrain two-part split, public, carrying an xai-REDACTED-ROTATE-ME substitution whose recombination reproduces all 192,140 records but whose bytes are not the original bytes; and corpus/messages.csv, gitignored, re-pulled and sha256-checked against a manifest pinning the unredacted hash [raw/INVENTORY-GAPS-2026-09-13.md]. The public copy will never match the manifest hash by construction. That is defensible and, until the audit, was not written down as intended behaviour. Two xAI API keys across eight files need rotating; redaction was applied to the public copy only, and the live keys remain in RAWLOGS [raw/INVENTORY-GAPS-2026-09-13.md].

## Conflicts in the record

**Authoritative versus complete.** The corpus bin/wb-corroborate treats as authoritative holds 129,262 messages over 2011-03 to 2025-08 while the superseded dump holds 217,573 over the same window [kb/data/1502-corpus-coverage-hole-2025.md]. The corpus is more recent and better structured; the dump is more complete. Neither description is wrong. An absence claim that names only "the corpus" without specifying which artifact was searched is ambiguous in exactly the window where the two diverge most.

**Stated Twitter range.** August 2013 to April 2026 in the carried inventory against 2008-09-24 to 2026-09-01 parsed from archive.jsonl [raw/INVENTORY-GAPS-2026-09-13.md]. The inventory understated the archive by nearly five years at the early end. Any analysis scoped to the stated range excluded data it held.

**Facebook generation.** raw/SOURCES.md references the June 2026 export as the ingested Facebook source; the archive holds the September 2026 generation as the ingested source [raw/INVENTORY-GAPS-2026-09-13.md; kb/sources/facebook-export-20260908.md]. The June pointer is superseded. The archive holds 4,404 files at 234 megabytes across both September parts; the source record's 1,470 files per part describes the September generation's parts, and the 2,927 and 1,475 split in the audit describes the same tree counted differently. Both counts are carried here as measured; the tree, not either count, is the authority.

**Four-hour offset.** The prior wiki writes timestamps in UTC; the authoritative corpus is local. In August the offset is four hours, in winter five [kb/data/1502-corpus-coverage-hole-2025.md]. Every timestamp quoted from the prior wiki is ahead of the same message in the corpus by that amount until converted. Searches by stated time that do not convert will miss their target and report absence where a shift would find presence.

**Repository layout.** The mirror policy as written — preserving subdirectory layout exactly — does not describe the twenty-four-directory divergence between RAWLOGS raw/sammy/ and wikibrain raw/ [raw/INVENTORY-GAPS-2026-09-13.md]. Either RAWLOGS adopts the slug layout or the policy is rewritten to say the layouts differ on purpose. Moving trees on an audit's reading of a convention is how an archive gets scrambled, and the audit deliberately does not action the choice. Enumeration from either tree alone is partial until it is settled.

**Duplicate and lossy forms.** Google Chat's j6-chat duplicates and the Ross Thompson thread's HTML-to-Docs conversion — which drops a photo attachment, a SoundCloud link, an inline IP, the export footer, and all block structure — are catalogued as traps for anything that counts [raw/INVENTORY-GAPS-2026-09-13.md]. In a Facebook export nothing in the message text carries the speaker; the HTML is the source of record and the conversion is not. Thirty-eight files whose bytes already existed under a different name were deduplicated at ingest, so filename-based enumeration overcounts relative to the archive.

## Assessment

The coverage map's central finding is that the wiki's most-used instrument is also its most uneven one. The authoritative iMessage corpus is the best-structured and most recent message record the repository holds, and it is missing a twenty-month hole in 2021-2022, near-total thinning through 2025, and eighty-eight thousand messages the superseded dump holds over the same span. Facebook covers the 2021-2022 hole and ends in 2022. The dump covers the 2025 thinning and ends in August 2025. Location ends in May 2024. No single channel covers the whole period the wiki reasons about, and the channels' edges fall in different years, which is precisely why an absence claim that does not name its channel and window cannot be evaluated.

The practical consequence is procedural. Before an absence claim is published — that a quote was never written, a period was quiet, a contact did not happen — the claim should name the artifact searched, the window's density in that artifact from the tables above, and whether the search also ran against the dump for pre-August-2025 windows. The dat nodes this page cites already model the discipline in specific cases. This page exists so the discipline does not have to be re-derived from them each time.

## See also

- [[wiki/mind/synthesis/operator-threat-model]] — the threat model whose confident-error instances this map makes checkable.
- [[wiki/health/suboxone-dose-curve]] — one regimen's bearings inventoried channel by channel against the holes mapped here.
- [[wiki/mind/synthesis/annie-decade-synthesis]] — the decade whose four-year hole is this map's largest single-relationship gap.

## References

- kb/sources/imessage-corpus-2026.md — the authoritative corpus: 192,140 rows, 2011-03-19 to 2026-09-07, forty-five columns, manifest-verified, gitignored by design.
- kb/sources/imessage-complete-dump-2025-08-11.md — the complete dump: 217,573 dated records, 2011-03-18 to 2025-08-11, found inside Archive 2.zip after being recorded as blocked.
- kb/sources/facebook-export-2026-06-23.md — the June 2026 Facebook generation: publicly readable tree, private zip, block-structure attribution rule.
- kb/sources/facebook-export-20260908.md — the September 2026 Facebook generation: two parts, 2007-era span, the currently ingested source.
- kb/data/1502-corpus-coverage-hole-2025.md — the 88,311-message shortfall, the 2025 monthly densities, and the four prescriber quotes found verbatim in the dump.
- kb/data/0028-prescriber-quotes-partly-unverifiable.md — the prescriber verification: one verified, two in zero-message days, June 2025 at thirty-five messages.
- kb/data/1449-valeria-imessage-coverage-hole.md — the twenty-month hole: zero rows May 2021 to December 2022 and the missing-data versus uncorroborated split.
- kb/data/0164-annie-record-coverage-and-progress.md — the Annie Record: 97,768 messages, the November 2020 to December 2024 hole, and the 18.9% read progress.
- raw/SOURCES.md — the raw source inventory: the eleven named sources, export staleness, and the reachable-but-not-pulled Drive folders.
- raw/INVENTORY-GAPS-2026-09-13.md — the measured audit: the verified inventory, the eight unlisted families, and gaps G1 through G9 with the recovered files.
- _gap-candidates-dose-curve.md — the seed: candidate four, a dated inventory of which channels cover which years, from which this page was built.
