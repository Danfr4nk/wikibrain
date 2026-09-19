---
domain: self
page_type: synthesis
title: "Channel Coverage Gaps: Which Instrument Can See Which Year"
status: active
knowledge: derived
date_created: 2026-09-17
date_modified: 2026-09-17
sources:
  - src:imessage-corpus-2026
  - src:imessage-complete-dump-2025-08-11
  - src:facebook-export-2026-06-23
  - src:facebook-export-20260908
  - src:messenger-drive-2026-09-12
  - src:old-wiki-export-2026-09-04
  - src:wikitest-rebuild-session-2026-09-09
  - kb/data/1502-corpus-coverage-hole-2025.md
  - kb/data/0028-prescriber-quotes-partly-unverifiable.md
  - kb/data/0054-facebook-archive-completed-and-recounted.md
  - kb/data/0056-corpus-timestamps-are-not-zero-padded.md
  - kb/data/0057-morgantown-audio-contradiction-reproduces.md
synthesizes:
  - wiki/self/message-corpora/source-coverage-index
  - wiki/self/message-corpora/message-request-blind-spot
  - wiki/self/message-corpora/master-message-dump
  - wiki/health/suboxone-dose-curve
  - wiki/meta/instruments/index
related:
  - wiki/self/message-corpora/source-coverage-index
  - wiki/self/message-corpora/message-request-blind-spot
  - wiki/health/suboxone-dose-curve
tags: [forensic-analysis, digital-footprint]
connections:
  - page: wiki/health/suboxone-dose-curve
    type: supplies
    claim: "That page's fourth condition for the sixteen-year silence — 'the corpus's channels do not cover the interval evenly' — is asserted there in one paragraph and measured here in full. This is the coverage map its channel argument needs, and the map it could not carry without becoming a corpus page."
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
---

# Channel Coverage Gaps: Which Instrument Can See Which Year

[[wiki/self/index|self]]

Every claim in this wiki that something did not happen is a claim about an
instrument's window. There is no channel in this archive that covers the run,
and there is no year in the run that every channel covers. The archive's two
largest artifacts — the export the tooling calls authoritative and the dump it
supersedes — are blind in complementary halves of a single year, **2025**, and
that year is the one the recent work reasons about most
**[ATTESTED, `kb/data/1502-corpus-coverage-hole-2025.md`]**.

This page is the lookup table. It states, per channel and per year, what can be
seen and what cannot, and it states the four ways the gaps hide themselves. It
is the page every `never_observed` in this wiki should be checked against before
it is written, and the page the [[wiki/health/suboxone-dose-curve|dose curve]]
needed when it filed *"the corpus's channels do not cover the interval evenly"*
as the fourth of four reasons for a sixteen-year silence and then had to move on
**[ATTESTED, wiki/health/suboxone-dose-curve]**.

**Why the profile layer does not bear on this page.** `SYNTHESIS_SPEC.md` asks a
synthesis to reason from the cognitive profile. This one does not, on purpose:
its subject is the instruments, not the person. Nothing here would change if the
subject were someone else. The one place a profile claim would belong — why this
archive over-collects and under-audits — is
[[wiki/mind/synthesis/intake-constancy]]'s ground, not this page's.

## 1. The rule this page exists to enforce

`CORPUS_POLICY.md` states the failure mode in one line: **in a fragment, absence
of evidence looks exactly like evidence of absence**, and a partial export never
announces what it left out **[ATTESTED, `CORPUS_POLICY.md`]**. The architecture
carries the same distinction as a typed field — `never_observed`,
`explicitly_rejected` and `known_not_to_occur` are three different states and
the system refuses to flatten them **[ATTESTED, `ARCHITECTURE.md`]**.

Both documents state the rule. Neither supplies the numbers a reader needs to
apply it. A rule that says *check the coverage* without a coverage table is an
instruction to remember something nobody has written down. That is the gap this
page closes.

## 2. The two corpora, side by side

The wiki cites two different totals as "the corpus" and they are two different
artifacts:

| | Authoritative export | 2025-08-11 complete dump |
| :--- | :--- | :--- |
| Path | `corpus/messages.csv` (gitignored); `raw/imessage/messages-part{1,2}-*.csv` | `raw/drive-sweep/20260911/misc-zip/Archive 2.zip` → `all_imessages_complete_dump.txt` |
| Rows | **192,140** | **217,573** dated records |
| Span | 2011-03-19 → 2026-09-07 | 2011-03-18 → 2025-08-11 |
| sha256 | `2c53c540…` (manifest-pinned) | `0512212efbb86d41…` |
| Handle column | yes — 498 counterparty handles, 156 resolved to a name | **no** — cannot attribute |
| Blind where | most of 2025-01 → 2025-07 | everything after 2025-08-11 |

**[ATTESTED, `corpus/derived/summary.json`, `corpus/manifest.json`,
`kb/data/1502-corpus-coverage-hole-2025.md`, `raw/INVENTORY-GAPS-2026-09-13.md`]**

The 217,573 figure is the one carried on [[wiki/self/concepts/wiki-brain]],
[[wiki/self/context-core]] and [[wiki/self/concepts/llm]] as *the corpus*
**[ATTESTED, those pages]**. It is the dump. The 192,140 figure is what
`bin/wb-corroborate` actually runs against **[ATTESTED,
`kb/data/1502-corpus-coverage-hole-2025.md`]**. The wiki's headline number and
the wiki's working instrument are not the same object, and the difference is not
a rounding error: it is 25,433 records and a missing handle column.

dat:1502 states the consequence in the form that matters: *"`authoritative` was
doing work here that `most recent` had earned and `most complete` had not, and
nothing in the pipeline distinguished the two"* **[ATTESTED,
`kb/data/1502-corpus-coverage-hole-2025.md`]**.

## 3. Complete log — the authoritative export, by year

Every year the export holds, with no year omitted and the zeros stated as zeros.
Years absent from `messages_per_year` are shown at 0 because the listed years sum
to exactly 192,140, which forecloses the alternative reading that the key was
merely dropped **[DERIVED: summation of `corpus/derived/summary.json →
messages_per_year`; 1 + 13,745 + 20,279 + 17,550 + 40,500 + 20,166 + 6,327 + 282
+ 960 + 4,369 + 41,203 + 26,758 = 192,140, matching `messages`]**.

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
| 2025 | 41,203 | 21.4% | see §4 — the distribution inside the year is the finding |
| 2026 | 26,758 | 13.9% | through 2026-09-07 |
| **Total** | **192,140** | 100% | |

**[ATTESTED, `corpus/derived/summary.json`; shares DERIVED by division.]**

**A correction to `CORPUS_POLICY.md`, flagged not applied.** That document names
its gap years as *"2021 has 282 messages and 2022 has none"* **[ATTESTED,
`CORPUS_POLICY.md`]**. The summary shows **four** years at zero, not one:
**2012, 2013, 2014 and 2022**. The policy's own statement of its coverage holes
is incomplete by three years, and those three sit directly on top of the period
the [[wiki/health/suboxone-dose-curve|dose curve]] calls its most important
interval — the 2013 dosage figure falls inside a year the authoritative export
does not hold at all. That figure survives only because it was caught on
Facebook **[ATTESTED, `kb/data/0055-facebook-corroborates-the-2010-maintenance-start.md`]**.
This page does not edit `CORPUS_POLICY.md`; the correction is filed here and in
§10 as a gap, because a governing document is amended deliberately or not at all.

**The 2011–2015 blackout, measured.** The export's earliest row is 2011-03-19;
its second-earliest thread opens **2015-11-12** **[DERIVED: `first_message`
column of `corpus/derived/threads.csv`, sorted]**. Between one message in March
2011 and the second week of November 2015 the authoritative export holds
nothing. That is four years and eight months in which any iMessage-sourced
absence claim is uninformative by construction.

## 4. Complete log — 2025, month by month, both artifacts

The year the two corpora disagree about. Corpus figures are from the
authoritative export; dump figures from `all_imessages_complete_dump.txt`, which
ends 2025-08-11 **[ATTESTED, `kb/data/1502-corpus-coverage-hole-2025.md`]**.

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

**[Monthly rows ATTESTED, `kb/data/1502-corpus-coverage-hole-2025.md`; the Jan–Aug
sums, the surplus column and the Sep–Dec residual DERIVED by arithmetic against
`corpus/derived/summary.json → messages_per_year["2025"]` = 41,203.]**

Three things follow, and they are the page's core result.

**First, the export's 2025 is a fourth quarter.** 36,114 of 41,203 messages —
**87.6%** — fall after 2025-08-31 **[DERIVED]**. The export's January-through-July
2025 is 1,139 messages, roughly the volume of four ordinary days in 2018.

**Second, the dump is the better instrument for the first seven months of 2025
and the export is the only instrument for the last four.** Neither covers the
year. Over the window both cover, the dump holds 88,311 messages the export does
not **[ATTESTED, `kb/data/1502-corpus-coverage-hole-2025.md`]**.

**Third, the dump cannot attribute.** It has no handle column
**[ATTESTED, [[wiki/self/message-corpora/source-coverage-index]]]**. So for
January–July 2025 the archive can establish *that* a message exists and *what it
says* and cannot establish *who it was to* from that artifact alone. Presence and
volume, never authorship — which is exactly the constraint the source index
already states and which nothing in the wiki's 2025 claims carries.

## 5. The channel inventory

Every channel in `raw/`, its measured span, and what it can be asked. Spans are
from the 2026-09-13 audit, which measured the artifacts rather than reading a
manifest **[ATTESTED, `raw/INVENTORY-GAPS-2026-09-13.md`]**.

| Channel | Measured span | Size | What it can answer |
| :--- | :--- | :--- | :--- |
| iMessage — authoritative export | 2011-03-19 → 2026-09-07 | 192,140 rows, 45 cols | who/what/when, with the year-holes in §3 |
| iMessage — 2025-08-11 dump | 2011-03-18 → 2025-08-11 | 217,573 records | what/when only; no handle column |
| Facebook messages | 2007 → 2022, export ≈ Sep 2022 | 403 threads, 15,558 parseable messages | the 2011–2015 blackout; speaker is structural |
| Facebook account export | pulled 2026-09-08 | 4,404 files, 234 MB | posts, friends, non-message surfaces |
| Messenger / IG / TikTok DMs | 2007 → 2026 | 27,573 records, 331 threads | a channel distinct from the Facebook export |
| Instagram | export generated 2025-08-24 | 1,215 files, 626 MB | nothing after Aug 2025 |
| Twitter | **2008-09-24 → 2026-09-01** | 2,741 tweets; reposts = 5 records | public self-report across the whole run |
| Gmail bodies | 2001-09-11 → 2014-12-29 | 22,860 rows | the only channel reaching before 2007 |
| Gmail — Creative License thread | Aug 2026 | 1 file, 20 KB | one dispute, nothing else |
| Google Chat | 7 distinct chats | 9 files, 852 KB | named conversations only |
| ChatGPT | exports 2025-08-05 | 754 files, 488 MB | nothing after Aug 2025 |
| Location / Timeline | **2014-04-02 → 2024-05-14** | 121,733 records | independent positional corroboration, dead since May 2024 |
| Takeout | 2024-05-14 → 2026-07-22 | 588 files, 856 MB | YouTube, activity, with the holes in §6 |
| My Activity (separate dump) | pulled 2026-09-12 | 5 gzipped dumps, 10 MB | behavioural timeline, partial |
| Sammy chat batches | 2026-09-11 → 2026-09-13 | 260 files, 61 MB | the present work only |
| Morgantown call audio | 2026-08-16 | 13 MB, 15:27 | one conversation, three participants |

**[ATTESTED, `raw/INVENTORY-GAPS-2026-09-13.md`; Facebook thread and message
counts from `kb/data/0054-facebook-archive-completed-and-recounted.md`; Gmail
bodies span from [[wiki/self/message-corpora/source-coverage-index]]; Facebook
message-era span from [[wiki/self/facebook/messages]].]**

**Two stated ranges in the prior inventory were wrong and the audit corrected
them.** Twitter was recorded as *Aug 2013 → Apr 2026*; it actually runs
2008-09-24 → 2026-09-01, so nearly five years of early material was present and
unaccounted for by the list any analysis scoped itself against **[ATTESTED,
`raw/INVENTORY-GAPS-2026-09-13.md` G6]**. Location was recorded as *from Apr
2014* with no end; it stops 2024-05-14, which removes independent positional
corroboration from the entire period the recent work is about **[ATTESTED, G4]**.

## 6. The coverage grid

Read down a year to see which instruments were running. `●` = substantive
coverage, `◐` = thin or partial, `○` = none.

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

**[DERIVED from §3, §4 and §5. The dump's per-year density before 2025 is not
individually measured in this tree — only its span and its 2025 monthly counts
are — so `●` for 2012–2024 asserts coverage of the window, not a volume.]**

**The grid's one clean reading:** there is no row where every column is filled,
and there are two rows — 2012–2014 and 2022 — where the wiki's primary instrument
is blank and the finding rests entirely on channels most pages never cite.

## 7. Four ways a gap hides itself

Coverage holes are not the only silent failure. Four more are recorded with the
evidence that found them, and each produces a wrong answer that looks right.

**1. The hour is unpadded in 44% of rows.** `2026-08-19 1:09:33`, not `01:09:33`
**[ATTESTED, `kb/data/0056-corpus-timestamps-are-not-zero-padded.md`]**. A text
comparison selects nothing and a text sort scrambles the day, because `9:00:00`
sorts after `10:00:00`. The first ten characters are fixed-width and safe; the
whole string is not.

**2. The wiki's times are UTC and the corpus is local.** Four hours apart in
summer, five in winter **[ATTESTED,
`kb/data/0057-morgantown-audio-contradiction-reproduces.md`]**. A message the
wiki cites at 11:25 is at 07:25 in the corpus. Any attempt to locate a
wiki-quoted message by its stated time lands on the wrong message or on nothing,
and nothing about the result looks wrong. dat:0057's own first attempt at the
Morgantown day selected nothing until the rows were ordered by parsed timestamp
rather than by string — both traps firing at once.

**3. 3,086 messages cannot be placed in a thread.** `threads.csv` sums to
**189,054** across 577 threads against the summary's 192,140 — a shortfall of
exactly **3,086**, which is the summary's `unattributable_to_a_thread` figure
**[DERIVED: `awk` sum over `corpus/derived/threads.csv`; ATTESTED figure from
`corpus/derived/summary.json`]**. They are sent messages carrying no counterparty
field. Per-thread totals are therefore **floors, not counts**. The same
arithmetic runs on attachments: threads sum to 8,044 against the summary's 8,120,
so 76 attachment-carrying messages are also unplaceable **[DERIVED]**.

**4. A handle is not a person.** At least six inbound rows attributed to Annie's
handle were typed by [[wiki/people/jerel-coles|Jerel Coles]] on her phone, across
three episodes, all during crises — which is the worst possible distribution,
because the handle is least reliable exactly where the corpus's highest-stakes
claims are drawn from **[ATTESTED,
[[wiki/self/message-corpora/source-coverage-index]]]**. This moves no count and
every attribution.

To those four the source index adds two more of its own: **four indexed sources
are empty** — header row, no data, filename plausible, path resolving — and
**eighteen carry a name that claims more coverage than the file holds**, with the
`_all_now` / `_all_time` suffix unreliable as a class **[ATTESTED, that page]**.

## 8. Three worked cases

**The prescriber quotes: a three-stage epistemic history.** The prior wiki's
census quoted four messages establishing a prescriber
**[ATTESTED as the census's claim, `kb/data/0025-old-wiki-prescriber-exists-routing-only.md`]**.
A 2026-09-09 verification against the authoritative export found one verbatim and
three absent — two of them on days the export holds **zero** messages, inside a
June 2025 that holds 35 messages in total **[ATTESTED,
`kb/data/0028-prescriber-quotes-partly-unverifiable.md`]**. dat:0028 refused to
call them refuted and filed them `never_observed`. On 2026-09-13 the dump was
opened and **all four quotes are present verbatim**, with 272 messages on
2025-06-08 and 200 on 2025-06-12 **[ATTESTED,
`kb/data/1502-corpus-coverage-hole-2025.md`]**. The caution was vindicated rather
than merely prudent, and the finding turned out to be about coverage, not
provenance. This is the page's type specimen: the same three messages read as
*unsupported* and as *confirmed* depending only on which artifact was open.

**The Kristin ceiling.** `all_imessages_complete_dump.txt` ends 2025-08-10 in the
source index's measurement, and it is the default for `bin/mine-messages`. A
22,018-message relationship beginning after that date returns **zero matches
rather than an error**, so a query about a post-August-2025 thread is
indistinguishable from a query about someone who never existed, and the page
built on the fallback file went unchallenged for two months **[ATTESTED,
[[wiki/self/message-corpora/source-coverage-index]]]**. The export covers that
relationship — 20,015 messages in a thread running 2025-09-01 → 2025-12-11
**[ATTESTED, `corpus/derived/threads.csv`]**. Two artifacts, one relationship,
and the instrument that was running by default was the blind one.

**The 2011 Facebook appointment.** A 2011-08-04 Facebook message describes a
scheduled Suboxone appointment with a urine screen administered there
**[ATTESTED, `kb/data/0033-2011-suboxone-appointment-with-screening.md`]**.
Neither the prior wiki's census nor the authoritative export surfaced it: the
census ran on a superseded dump and the export holds one message in all of 2011.
dat:0033 draws the conclusion this page is built to generalise — *"the marginal
value of a fourth message extract is near zero, and the marginal value of a first
Facebook thread was a fact nothing else could see"* **[ATTESTED, that node]**.
Breadth of channel beats depth of channel wherever the grid in §6 has a hole.

## 9. What an absence claim has to state

The operational output. An absence claim in this wiki is admissible when it
carries all five:

1. **The instrument** — which artifact was searched, by path, not by the word
   "the corpus."
2. **The window** — the artifact's measured span, and whether the claim's date
   sits inside it.
3. **The denominator** — how many messages that artifact holds for the period.
   *Zero in a month holding 35* and *zero in a month holding 4,898* are not the
   same zero.
4. **The attribution capacity** — whether the artifact has a handle column at
   all, and if so, whether the handle was verified against device access.
5. **The status word** — `never_observed`, `explicitly_rejected` or
   `known_not_to_occur`, never a bare "there is no evidence."

Anything short of five is a claim about the pull, not about the world. The
canonical phrasings live on
[[wiki/self/message-corpora/message-request-blind-spot]]; this page supplies the
numbers those phrasings have to name.

## 10. Falsifiers

Concrete enough to go and look for.

1. **A year-by-year density count of the 2025-08-11 dump.** §6 marks 2012–2024
   `●` for the dump on span alone. If the dump turns out to be thin in 2012–2014
   as well, the archive has no instrument for those years and every claim resting
   on them is weaker than this page says.
2. **A Timeline re-export.** One pull closes the 2024-05 → present positional
   hole. If it lands and the positions contradict message-derived location
   claims for 2024–2026, the grid's `○` column becomes a correction queue.
3. **A Facebook export generation after Sep 2022.** The message channel's end is
   an export boundary, not a behavioural one. A later generation would test
   whether the 2022 iMessage zero is a device artifact or a real quiet period.
4. **A second device-access episode found earlier in the record.** The three
   Coles episodes were each identifiable from register alone; whether there are
   others before 2026 has not been checked **[ATTESTED,
   [[wiki/self/message-corpora/source-coverage-index]]]**. Any earlier instance
   moves attributions in the corpus's densest years.
5. **The un-ingested Search and Chrome history.** Both `MyActivity.html` files sit
   in a private Drive zip; one sharing change opens them **[ATTESTED,
   `raw/INVENTORY-GAPS-2026-09-13.md` G2]**. They are the densest behavioural
   channel available and they are outside every repository, so this grid has a
   column it cannot draw.

## 11. Gaps

1. **`CORPUS_POLICY.md` names one gap year and the data shows four.** 2012, 2013
   and 2014 are at zero and unmentioned there. Filed here; not edited there.
2. **The dump's per-year density is unmeasured in this tree.** Only its span and
   its 2025 monthly counts exist as measurements.
3. **Instagram and ChatGPT are thirteen months stale** as of the 2026-09-13
   audit, so any cross-channel claim spanning late 2025 to now draws on
   Facebook/iMessage/Takeout while believing it drew on all channels **[ATTESTED,
   `raw/INVENTORY-GAPS-2026-09-13.md` G5]**.
4. **Overlap between `drive-sweep/chatgpt*` and `raw/chatgpt/` is unquantified**
   **[ATTESTED, that audit §5]**, so the ChatGPT row's size is not a deduplicated
   figure.
5. **Timezone is asserted, not measured, for 50 of 52 indexed message sources.**
   Only the two 2026-08-13 exports were validated, on 42,895 text-matched pairs
   **[ATTESTED, [[wiki/self/message-corpora/source-coverage-index]]]**. A source
   silently exported in UTC would not be caught.
6. **The 3,086 unattributable rows have no disposition.** They are counted and
   excluded; nobody has decided whether they can be attributed by content or
   should be marked permanently floating.
7. **No channel covers 2012–2014 in this tree's own measurements.** The Facebook
   archive is asserted to cover it from its stated era; per-year Facebook counts
   were not computed here.

## 12. Limits of record

- **Observed:** 192,140 rows and their per-year distribution; 577 threads summing
  to 189,054; 52 unique threads' worth of attachment counts summing to 8,044; the
  2025 monthly split against the dump; the 2026-09-13 channel inventory's spans
  and file counts; 403 Facebook threads and 15,558 parseable messages.
- **Calculated:** every share and subtotal in §3 and §4; the 87.6% fourth-quarter
  concentration; the 22,761-message Jan–Aug surplus; the 3,086 and 76 shortfalls.
- **Inferred:** the §6 grid's `●`/`◐`/`○` assignments for channels whose per-year
  density was not measured; the reading that 2012–2014's absence from
  `messages_per_year` means zero rather than an omitted key — sound, because the
  listed years sum exactly to the stated total, but still an inference.
- **Unknown:** the dump's per-year density before 2025; Facebook's per-year
  message distribution; whether the 2022 iMessage zero is a device artifact or a
  quiet period; the content of the two un-ingested `MyActivity.html` files;
  whether device-access contamination exists before 2026.
- **Not reproduced here:** `bin/corpus-verify` was not run in the session that
  wrote this page, so the corpus's current agreement with its manifest is
  asserted from `corpus/manifest.json` rather than re-checked. `README.md` also
  records that the `raw/` cited by the reconstructed pages is not the `raw/` in
  this tree — roughly 237 `raw/…` paths in the page corpus resolve to nothing
  **[ATTESTED, `README.md`]**. That does not make their claims false; it makes
  them unverified, which is a different and recoverable state.
- **No media.** This page embeds no photographs. Its subject is file spans and
  row counts, and there is no image in the archive that carries a coverage fact.
  The Sources section below is therefore a path list, not a thumbnail table.

## Sources

- `corpus/derived/summary.json` — per-year counts, thread and handle totals
- `corpus/derived/threads.csv` — 577 thread rows, spans, per-thread volumes
- `corpus/manifest.json` — size, sha256, row count, columns
- `CORPUS_POLICY.md` — the two tiers, the known limits, the gap-year statement
  this page corrects
- `raw/INVENTORY-GAPS-2026-09-13.md` — the measured channel inventory, G1–G9
- [`dat:1502`](../../../kb/data/1502-corpus-coverage-hole-2025.md) — the 2025
  coverage hole, month by month
- [`dat:0028`](../../../kb/data/0028-prescriber-quotes-partly-unverifiable.md) —
  the verification that failed usefully
- [`dat:0054`](../../../kb/data/0054-facebook-archive-completed-and-recounted.md)
  — the Facebook archive, enumerated to exhaustion
- [`dat:0056`](../../../kb/data/0056-corpus-timestamps-are-not-zero-padded.md) —
  the unpadded hour
- [`dat:0057`](../../../kb/data/0057-morgantown-audio-contradiction-reproduces.md)
  — the UTC/local offset
- [[wiki/self/message-corpora/source-coverage-index]] — the per-file ledger
- [[wiki/self/message-corpora/message-request-blind-spot]] — the absence doctrine
- [[wiki/health/suboxone-dose-curve]] — the page whose fourth condition this one
  measures
- [[wiki/mind/synthesis/steady-state-invisibility]] — the behavioral half of every
  silence this page gives the mechanical half of
- [[wiki/health/suboxone-prescriber-arc]] — §8's first worked case, read on its own
  timeline rather than as a coverage example
