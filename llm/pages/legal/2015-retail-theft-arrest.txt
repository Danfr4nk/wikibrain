---
domain: legal
page_type: event
title: "The Combos Incident (2015 Retail Theft)"
aliases: ["the Combos incident", "stealing combos"]
status: closed
knowledge: mixed
importance: normal
date_created: 2026-07-13
date_modified: 2026-09-21
sources:
  - raw/legal/captures/2026-08-02_200741_the-arrest-the-real-one.md — ⚠ Source reference unresolved — original target no longer exists in current corpus.
  - raw/mind/captures/2026-08-02_122411_perspective-complete-objective.md — ⚠ Source reference unresolved — original target no longer exists in current corpus.
  - raw/self/dox-scan/all_imessages_complete_dump.txt — ⚠ Source reference unresolved — original target no longer exists in current corpus.
  - raw/self/message-csv/imessage_ALL_both_all_now.csv — ⚠ Source reference unresolved — original target no longer exists in current corpus.
  - "raw/self/facebook/facebook-ihatedanfrank/messages/inbox/christocoan_2cxo0swo3g/message_1.html — ⚠ Source reference unresolved — original target no longer exists in current corpus."
  - corpus/manifest.json
  - corpus/derived/summary.json
  - corpus/derived/threads.csv
  - kb/events/2015-combos-retail-theft.md
  - kb/data/0030-combos-corroborated-first-person.md
  - kb/data/0072-retail-theft-arrest-split-from-possession.md
  - kb/data/0016-old-wiki-conflated-two-legal-matters.md
  - kb/data/0031-dui-belongs-to-the-other-speaker.md
  - kb/data/0070-ard-disposition-and-da-bar.md
  - kb/patterns/reasoning-sound-provenance-unreliable.md
related:
  - wiki/legal/2015-possession-arrest
  - wiki/legal/index
  - wiki/mind/concepts/acquisition-drive
  - wiki/timeline/events/uniontown-hospital-vape-alarm
  - wiki/people/annie-ulmer
  - wiki/people/jack-connor
  - wiki/timeline/annie-record
  - wiki/people/christo-coan
  - wiki/mind/concepts/the-endpoint-requirement
tags: [legal, relationships, uniontown-era, forensic-analysis, digital-footprint]
connections:
  - page: wiki/legal/2015-possession-arrest
    type: follows
    claim: "The real arrest came a few weeks before this and carried the lawyer, the ARD and the hearing that this page wrongly claimed until 2026-08-03 — the theft is the smaller of two separate 2015 legal matters, not the one that produced a booking."
  - page: wiki/mind/concepts/acquisition-drive
    type: evidences
    claim: "Snack food pursued as far as a criminal citation is the drive's signature output shape: cost-benefit ratios that make no sense are the expected result of a system optimising for completion rather than for value."
  - page: wiki/timeline/events/uniontown-hospital-vape-alarm
    type: parallels
    claim: "Three years apart, the same shape twice: a trivially small want run to completion and producing charging paperwork wildly out of proportion to anything gained — Combos in 2015, one drag of nicotine in 2018."
  - page: wiki/people/annie-ulmer
    type: co-occurs
    claim: "The theft landed at the exact genesis of the relationship and was metabolised into a running couple's joke, which is the earliest documented instance of the pair converting Dan's legal trouble into shared comedy."
  - page: wiki/timeline/annie-record
    type: contradicts
    claim: "The day-by-day record dates the barracks visit and the 'Fuckin combos' line to 2015-12-08, while dat:0030 dates the same line to 2015-12-09 and the possession page's case timeline runs the barracks trips Dec 9–11 — three sources, two calendars, one unreconciled day."
  - page: wiki/people/christo-coan
    type: contradicts
    claim: "This page has cited the Christo Coan Facebook thread as a source since 2026-07-13, and the only legal content that thread holds is the 'I already got a DUI' line that dat:0031 reattributes to Christo himself — so the citation supports nothing on this page."
---

# The Combos Incident (2015 Retail Theft)

In 2015, a few weeks after
[[wiki/legal/2015-possession-arrest|the possession arrest]], Dan stole
Combos snacks and was cited for retail theft. It is the smaller of two
separate legal matters he accumulated that year, and it is the one the
corpus talks about — almost entirely as a joke.

Everything specific about the act is missing and is likely to stay missing:
no store, no date, no charge grading, no disposition. What survives is four
days of December 2015 text — 2015-12-09 to 2015-12-12 — in which a
twenty-seven-year-old man deals with the paperwork of one legal matter, gets
ribbed by a trooper about the other, admits the theft in writing to somebody
who is not a lawyer, and turns the whole thing into a bit with a woman he had
met the previous month. That is the event this page can actually document,
and it is a different event from the theft.

> **REVISED [2026-08-03] — this page was two events wearing one name.**
> Until today it was titled "2015 Arrest (Retail Theft / 'The Combos
> Incident')" and carried the lawyer, the ARD application, the Judge Wagner
> hearing, the barracks trips and the family drama around them, all
> attributed to a snack-food theft. Per the operator, the Combos theft and
> the possession arrest are **both real and separate**, weeks apart, and the
> arrest — with its three drug charges and the DA's categorical bar on ARD
> for cocaine cases — is the one that produced all of that machinery. The
> case material has moved to [[wiki/legal/2015-possession-arrest]]. What
> stays here is the theft itself and what the corpus actually records about
> it. Nothing has been deleted; the conclusions built on the old framing are
> corrected in place on the pages that carried them.

> **RETIRED [2026-09-21] — "the corpus contains no contemporaneous account**
> **of the theft" is withdrawn.** That sentence was the load-bearing claim of
> every earlier version of this page, and it is false. A corpus search run
> 2026-09-09 ([`dat:0030`](../../kb/data/0030-combos-corroborated-first-person.md),
> [`dat:0072`](../../kb/data/0072-retail-theft-arrest-split-from-possession.md))
> returned outbound December 2015 rows including a flat first-person
> admission — *"Because I took combos"* — sent inside the same week as the
> barracks trips. The complete log is printed below. The page also had its
> *strongest* evidence one step wrong in the other direction: the trooper's
> line was not a captured utterance but Dan quoting it afterwards. The event
> is better attested than this page claimed and the quotation is weaker than
> this page claimed, which is the same finding twice — the reasoning was
> sound and the provenance was not
> ([`pat:reasoning-sound-provenance-unreliable`](../../kb/patterns/reasoning-sound-provenance-unreliable.md)).
> The `kb` event node was upgraded `low → moderate` on the same evidence
> ([`evt:2015-combos-retail-theft`](../../kb/events/2015-combos-retail-theft.md)).

## The complete corpus log for "combos"

Per M3 this is the whole log, not a summary. Every row the authoritative
corpus is reported to hold containing the string `combos`, in order, with the
node that reports it. The corpus itself (`corpus/messages.csv`) is gitignored
and not present in this checkout, so these rows are carried at the fidelity of
the nodes that ran the grep, not re-derived here.

| # | Date | Direction | Text as reported | Reported by |
|---|---|---|---|---|
| 1 | 2015-12-09 | outbound | *"To go fix the combos incident"* | dat:0030, dat:0072, [[wiki/timeline/master-timeline]] |
| 2 | 2015-12-09 | outbound | *"Fuckin combos"* | dat:0030, dat:0072 |
| 3 | 2015-12-11 | outbound (19:22:13) | *"DID YOU STEAL MORE COMBOD"* | dat:0072 (timestamp), dat:0030 |
| 4 | 2015-12-11 | outbound | *"COMBOS"* — the typo corrected | dat:0030, dat:0072 |
| 5 | 2015-12-11 | outbound | *"Because I took combos"* | dat:0030, dat:0072 |
| 6 | 2015-12-12 | inbound | *"I wonder if stealing combos"* — truncates there | dat:0072 |
| 7 | 2026-01-14 | not stated | a later, unrelated use | dat:0072 |
| 8 | 2026-01-14 | not stated | a later, unrelated use | dat:0072 |

Three further lines sit immediately around row 3 and do not themselves
contain the search string, so they are logged separately rather than folded
into the table above: *"he was a nice dude"*, sent directly after the typo
correction (dat:0030); Dan's *"sitting here waiting AGAIN"*, which dat:0030
places as the setting for row 5; and, from the Annie day-record rather than
the grep, *"I'm at the state police barracks / Scarrrry stuff haha"* and
*"Fuckin combos / I learnt me lesson!"*
([[wiki/timeline/annie-record]]).

### The count does not add up, and the discrepancy is recorded rather than smoothed

The two nodes that ran the same search disagree with each other and one
disagrees with itself.

- `dat:0030` reports **8 hits, five of them in December 2015**.
- `dat:0072` reports **eight rows**, then itemises **seven from 2015-12-09
  to 2015-12-12 and two from 2026-01-14** — which is nine.

Three numbers are in play for one grep: eight total, five in December, seven
in December. The most economical reconciliation is that one node counted the
`COMBOD` typo row (which does not contain the string) and the other did not,
and that one of the two 2026 rows is a duplicate or a quote of the other —
but that is an inference, and neither node states it. The corpus is not in
this repository, so nobody can settle it by looking; per
[`CORPUS_POLICY.md`](../../CORPUS_POLICY.md) the fix is a re-run of
`bin/corpus-query --text "combos" --stats` against a manifest-verified export,
and it has not been run. Until it is, **the December cluster is established
and its exact cardinality is not**, and no claim on this page rests on the
difference between five rows and seven.

## Why the act itself is unrecoverable: the corpus does not cover 2015

The theft happened in 2015, a few weeks after a filing the county blotter
dates to February 17–19, 2015 ([[wiki/legal/2015-possession-arrest]]). The
message corpus has essentially no coverage of that window, and the derived
statistics in this repository establish it without needing the corpus itself.

`corpus/derived/summary.json` gives the complete per-year distribution of all
192,140 messages. Printed in full:

| Year | Messages |
|---|---:|
| 2011 | 1 |
| 2012 | *(no rows)* |
| 2013 | *(no rows)* |
| 2014 | *(no rows)* |
| 2015 | 13,745 |
| 2016 | 20,279 |
| 2017 | 17,550 |
| 2018 | 40,500 |
| 2019 | 20,166 |
| 2020 | 6,327 |
| 2021 | 282 |
| 2022 | *(no rows)* |
| 2023 | 960 |
| 2024 | 4,369 |
| 2025 | 41,203 |
| 2026 | 26,758 |
| **Total** | **192,140** |

The table is complete rather than partial, and it proves it: the listed years
sum to exactly 192,140, which is the row count `corpus/manifest.json` records
for the sha256-verified file. The years with no key are therefore genuinely
empty, not omitted. **Exactly one message in the entire corpus predates 2015.**

`corpus/derived/threads.csv` narrows it further. Of 577 threads, exactly one
has a `first_message` earlier than 2015-11-01: a 193-message thread running
2011-03-19 → 2026-05-01. Every other thread in the corpus opens on 2015-11-12
or later; the next four start 2015-11-17, 2015-11-27, 2015-11-28 and
2015-11-29. So at most 193 messages could sit anywhere in the eleven months
between the February 2015 filing and mid-November 2015, and the year table
says at most one of them predates 2015 at all.

This settles the shape of the gap, which is more useful than another lament
about it. The theft, the citation, the store and the disposition all fall
inside a window the authoritative record does not reach. The December 2015
rows are not a thin account of the event; they are a complete account of its
**aftermath**, and the event is simply outside the archive. That distinction
is exactly the one [`CORPUS_POLICY.md`](../../CORPUS_POLICY.md) exists to
enforce — *in a fragment, absence of evidence looks exactly like evidence of
absence* — and here the absence is measurable rather than assumed.

One further caution belongs with it. December 2015 itself is **well** covered:
`dat:0030` records 4,088 messages that month against a corpus median month of
1,123, which is why a null result in December would have been informative. It
was not null. The inference runs only one way: the December silence on the
store and the charge grading is real silence, while the February-to-October
silence is no evidence of anything.

## The two 2015 matters, side by side

| | Possession arrest | Combos theft |
|---|---|---|
| Date | On or shortly before 2015-02-17 | "A few weeks" later; undated |
| Dating evidence | Fayette/Greene county court blotter, filings Feb 17–19, age given as 26 | Operator testimony only |
| Charges | Three: controlled substance (residue), small amount of marijuana, paraphernalia | Retail theft; grading unknown |
| Court | MDJ Michael Metros, MDJ-14-1-01 | Not established |
| Docket | Unknown | Unknown |
| Counsel | [[wiki/people/jack-connor|Jack Connor]], several thousand dollars | Not established |
| Disposition | ARD approved 2016-02-17 before Judge Wagner; ~six months probation | Not established |
| Contemporaneous text | Dec 2015 – Feb 2016 case-management messages | Six December 2015 rows |

The asymmetry is the finding. The *smaller* matter — the one that obtained
snack food — is the one with the memorable name, the running joke and the
decade of afterlife. The *larger* matter, which produced a booking, a hired
lawyer, a categorical DA policy fight and a diversion programme, had no
nickname at all until this wiki gave it one, and for three weeks in 2026 it
was filed under the snack food's name. Salience in the record tracks how
funny a thing was, not how serious it was, and that is a property of the
archive rather than of the events.

## The December window: a complete day-by-day log

This is the whole documented window, assembled from the Annie day-record
([[wiki/timeline/annie-record]]), the corpus grep nodes, and the possession
page's case timeline. Times are as each source prints them; the wiki writes
local time and the corpus stores UTC, five hours ahead in winter
([`CORPUS_POLICY.md`](../../CORPUS_POLICY.md) §Timestamps), so the corpus row
at 19:22:13 on 2015-12-11 is 14:22:13 Eastern.

| Date | What the record holds | Source |
|---|---|---|
| 2015-11-28 | The Annie thread opens — the archive floor for everything below | corpus/derived/threads.csv |
| 2015-11-29 | Annie sends *"YOU ARE MY EVERYTHING"* on day three of the record | [[wiki/mind/synthesis/attachment-trauma-bond]] |
| 2015-12-03 | The bar confrontation with [[wiki/people/alexis-armel|Alexis]]; the switch is public | annie-record |
| 2015-12-08, 09:14–09:29 | Annie in opiate withdrawal; Dan: *"This is why I still have to take those fucking things"* | annie-record |
| 2015-12-08, 12:23 | *"I'm at the state police barracks / Scarrrry stuff haha"* — collecting replacement paperwork | annie-record |
| 2015-12-08, 12:26–12:27 | *"Fuckin combos / I learnt me lesson!"* | annie-record |
| 2015-12-08, 23:05–23:29 | The quit-cocaine pact: *"I will promise (pinky) to not ever suggest it or talk about it"* | annie-record |
| 2015-12-09, 11:08–11:09 | *"I have to run out / To go fix the combos incident"* | annie-record, master-timeline, dat:0030 |
| 2015-12-09 | *"Fuckin combos"* logged under this date by the corpus grep | dat:0030, dat:0072 |
| 2015-12-09, 11:39 | Suz collects him; they buy Annie a present and a Christmas tree | annie-record |
| 2015-12-09, 13:57 | Alexis to Annie: *"You don't need to come in"*; Annie quits CT's | annie-record |
| 2015-12-09 → 12-11 | Barracks trips to replace lost case paperwork; ARD application filed | possession page, dat:0070 |
| 2015-12-11, 00:43 | *"we had our first full no-problems day"* | annie-record |
| 2015-12-11, 19:22:13 UTC | *"DID YOU STEAL MORE COMBOD"* → *"COMBOS"* → *"he was a nice dude"* | dat:0072, dat:0030 |
| 2015-12-11 | *"Because I took combos"*, sent while *"sitting here waiting AGAIN"* | dat:0030 |
| 2015-12-12 | Inbound: *"I wonder if stealing combos"* | dat:0072 |
| 2016-01-20 | ARD office visit to check application status | possession page, dat:0070 |
| 2016-01-25 | First fine instalment — *"$70 more to pay a month from now"* | possession page, dat:0070 |
| 2016-02-17 | Hearing before Judge Wagner; ARD approved; remaining fines paid | possession page, dat:0070 |
| 2016-02-17 | *"My combos are paid off"* — **not located in the corpus** | this page's transcription; dat:0072 |
| ~2016-08 | Expected end of six-month probation → expungement eligibility | possession page, dat:0070 |

### The unreconciled day

Three sources place the barracks visit and the *"Fuckin combos"* line on two
different days:

- The Annie day-record puts the barracks message and *"Fuckin combos / I
  learnt me lesson!"* on **2015-12-08**, timed 12:23 and 12:26–12:27, and
  separately records the *"go fix the combos incident"* errand on
  **2015-12-09**.
- `dat:0030` and `dat:0072`, working from the authoritative corpus, put
  *"Fuckin combos"* on **2015-12-09**, alongside *"To go fix the combos
  incident"*.
- The possession page's case timeline runs the barracks trips **Dec 9–11**,
  which excludes the 8th entirely.

Nothing here is a large error and it is worth one paragraph rather than ten.
Two readings survive: either the day-record's Dec 8 entry is displaced by a
day, or the barracks material genuinely spans Dec 8–11 and the case timeline
under-reports its first day. The grep is the stronger instrument, because it
reads timestamps rather than reconstructing a narrative, so the corpus dating
is preferred here and the day-record's is recorded rather than overwritten.
What it costs is small — one day in a four-day cluster — and what it
demonstrates is not: a page-level narrative and a machine count of the same
messages can disagree quietly, and only printing both catches it.

### The two quotations this page cannot stand behind

**"My combos are paid off" (Feb 17, 2016)** was, for a year, this page's only
evidence that the theft had a fine and that the fine was cleared. `dat:0072`
looked for it in the authoritative corpus and did not find it. The line may
come from a superseded extract, from a channel the corpus does not hold, or
from a transcription that drifted; the node does not adjudicate and neither
does this page. **The claim that a Combos fine was ever paid is now
unsupported**, which also reopens the question the possession page flags:
whether the January and February 2016 payments belong to the drug case, to
the theft, or to both running concurrently. With the "paid off" line
withdrawn, the only documented fine payments in 2016 attach to the possession
case, and the theft's financial resolution is unknown rather than inferred.

**"I wonder if stealing combos counts as poison"** is Annie's tease, and only
its first seven words verify. The corpus row truncates at *"I wonder if
stealing combos"*; the *"counts as poison"* ending is this wiki's
transcription (`dat:0072`). The background-check framing that made the joke
legible — that Dan was being screened for something and Annie was asking
whether a snack theft would disqualify him — is not in the corpus row either.
It is retained above as the wiki's reading of a truncated line, flagged as
such, because the reading is plausible and the words are not established.

Both are instances of the same pattern the extraction work names outright:
*take the argument, verify the quote*
([`pat:reasoning-sound-provenance-unreliable`](../../kb/patterns/reasoning-sound-provenance-unreliable.md)).
Four of the first six prior-wiki claims checked against independent sources
turned up a quotation that did not sit where the page put it. This page has
now contributed two of its own.

## The trooper, and what the joke is evidence of

The strongest thing this page holds remains the trooper's line, and it has to
be described precisely now that its provenance is known. On 2015-12-11 Dan
typed **"DID YOU STEAL MORE COMBOD"**, corrected it to **"COMBOS"**, and
added **"he was a nice dude."** Read in sequence that is a man recounting,
the same day, what a state trooper said to him while handling paperwork on a
different case.

The inference the page has always drawn from it survives: a trooper does not
make that joke about nothing. Two things had to be true for the remark to
occur — the theft was real and chargeable, and it was known to the same
barracks handling the possession matter. Neither is established by any other
route, and the corpus's own December clustering supports the setting: the
Combos rows sit inside exactly the days `dat:0070` gives for the barracks
paperwork visits.

What changed on 2026-09-09 is the evidential class, not the conclusion. The
page presented a captured utterance and what exists is a same-day first-person
report of an utterance. That is still good evidence — same-day recall of a
remark made to your face is near the top of the testimony range — but it is
testimony, and the page had it filed as a recording. `dat:0030` calls this the
template for the whole extraction effort: the claim went in as *the prior wiki
asserted a trooper said X* and came out as *Dan reported a trooper saying X,
and separately admitted the act in writing at the time*. Both the correction
and the confirmation required going to a different source. Neither was
reachable by reading the page harder.

The admission is the stronger row and it has never been quoted on this page
before. *"Because I took combos"* is a flat first-person statement of the act,
dated, sent inside the week of the barracks trips, to somebody who was not a
lawyer, while he sat waiting on the other case. It converts the theft from an
event attested only by other people's jokes into an event the subject stated
in writing at the time.

## Why it is a good instance of the drive

Combos remain the corpus's cleanest small-stakes illustration of
[[wiki/mind/concepts/acquisition-drive|the acquisition drive]], and the
corrections above sharpen the reading rather than weakening it. A want worth a
few dollars ran to completion until it produced a criminal citation. That page
puts the mechanism plainly: once a want becomes a decided outcome, the pursuit
runs "at all costs and challenges," and the engine cannot be aimed by anybody
else. Cost-benefit ratios that make no sense are not anomalies in such a
system; they are its expected output, because value is not the quantity being
optimised. Completion is.

The rate is the better evidence, and it is what the 2026-08-03 split
delivered. Before the split, 2015 held one anomalous night. After it, 2015
holds **two separate chargeable incidents a few weeks apart** — a saved bag
corner good for a 10% bump and one hitter's worth of marijuana carried on a
3am errand, and then snack food taken from a shop. The drive was not producing
an incident; it was producing a frequency. The acquisition-drive page's
episode table now runs both 2015 rows side by side for exactly this reason.

The 2018 parallel completes the shape. Three years later one drag of nicotine
in a hospital bathroom produced a building-wide fire alarm, four fire trucks,
an escort off the property and a filed summary case
([[wiki/timeline/events/uniontown-hospital-vape-alarm]]). As of 2026-08-22 the
2018 half of that parallel is documented to the docket number —
MJ-14101-NT-0000082-2018, filed 4/5/2018, before Magisterial District Judge
Michael M. Metros of MDJ-14-1-01 — while this half still has none. The
asymmetry is worth naming: **the better-evidenced instance of the drive is the
one that obtained less.**

### The disproportion ledger

Every documented instance of a want running to charging paperwork, with what
the record can prove about each:

| Event | Obtained | Paperwork | Docket | Disposition |
|---|---|---|---|---|
| 2015-02 possession | A 10% bump's worth of residue; ~one hitter of marijuana | Three charges, arrest, booking | Not known; court known (MDJ-14-1-01) | ARD, 2016-02-17 |
| 2015, weeks later — this page | Combos | A retail-theft citation | Not known | Not known |
| 2018-04 hospital vape | One drag of nicotine | One local-ordinance smoking count | MJ-14101-NT-0000082-2018 | Not known — plea lines blank |

Two things follow that neither event page states alone. First, all three
entries are unresolved at the disposition column, and two of the three are
unresolved at the docket column, so the wiki's account of Dan's legal history
is an account of its *inputs* and not of its outcomes. Second, the one
disposition that is established — the ARD — belongs to the matter this page
spent three weeks wrongly claiming, which is the specific reason the
conflation was hard to catch: the merged version was the only one with an
ending.

The endpoint concept makes the same point from the other side.
[[wiki/mind/concepts/the-endpoint-requirement]] holds that the drive completes
toward defined external endpoints rather than toward wants. A shoplifted
packet has a perfect endpoint — the object is in hand or it is not, and the
transaction closes in seconds. That is precisely the class of pursuit this
engine finishes, and it is why an appetite that stalls on multi-year projects
did not stall here.

## A citation on this page that supports nothing

Since 2026-07-13 this page has listed
`raw/self/facebook/facebook-ihatedanfrank/messages/inbox/christocoan_2cxo0swo3g/message_1.html`
among its sources. That thread's only legal content is a single October 19,
2017 line — *"hell yeah I already got a DUI I'm not getting any more of those
:D thanks bro"* — which the wiki carried for months as evidence of an
otherwise undocumented DUI in Dan's record.

It is not his. `dat:0031` parsed all 76 message blocks in the exported thread
on the export's own speaker structure and found the line at 17:58:15 belongs
to **Christo Coan**, twenty-four seconds after Dan's *"everyone welcome to
crash here so we can all get properly fugged up"* at 17:57:51. Christo is
accepting an offer of somewhere to sleep and giving his own prior DUI as the
reason he will not drive. The *"thanks bro"* is the tell.

The source line stays in the frontmatter, because deleting it would erase the
record of why it was ever there, and because the thread remains a real
document in the archive. What changes is the claim attached to it: **nothing
on this page rests on that file**, and [[wiki/legal/index]]'s note that "a
single October 2017 message references an otherwise unrecorded prior DUI" is
superseded by `dat:0031`. The general rule the node draws is the one this page
most needed and had twice: *a quotation is not evidence until it carries who
said it.*

## What the conflation taught the system

The single most useful thing recovered from the legal material is not a fact
about Dan at all. For three weeks the prior wiki asserted, in the ordinary
declarative voice it used for everything else, that a Combos theft produced a
criminal defence, a diversion programme and a magistrate's hearing. Downstream
pages built on it. Nothing internal caught it, because the error was
consistent, plausible, and cited sources that genuinely existed
([`dat:0016`](../../kb/data/0016-old-wiki-conflated-two-legal-matters.md)).

Two properties of the correction were kept deliberately. **It was closed by
the operator, not by the system** — the revision block says "per the operator,"
and no amount of internal cross-referencing would have surfaced it, because
the conflation sat upstream of everything that could have checked it. Both
matters were real, both were 2015, and the merged account was internally
coherent. **And nothing was deleted.** The wrong version is still legible on
this page, which is the only reason the datum recording the error can exist at
all.

That is the concrete argument for the `testimony` machinery in
[`ARCHITECTURE.md`](../../ARCHITECTURE.md). Had the 497 pages been ingested as
fact, this error would have entered the evidence layer as an event with a
lawyer attached to a snack theft, wearing the same badge as a measurement and
indistinguishable in shape from the 496 pages that were right. Ingested as
testimony, it enters as *a thing the prior wiki asserted* — true, checkable,
and quarantined at L1. The `kb` event node keeps its own superseded assessment
unedited for the same reason: what it got wrong is the instructive part,
because it reasoned carefully from a false premise about what the corpus
contained, and no amount of care on the page could have caught that.

## Gaps

**Everything about the act.** The store, the date, the value of the goods, the
charge grading, and the disposition are all absent, as is any statement of how
the theft was resolved — by fine, by summary citation, or folded into the
possession case's disposition. With *"My combos are paid off"* withdrawn as
unlocated, there is now **no evidence at all that a Combos fine was ever
assessed or cleared.**

**The interval and the order.** That the theft fell "a few weeks" after the
arrest, and in that order, rests on the operator alone. No independent source
sequences the two.

**The docket.** No court record for either 2015 matter has been retrieved.
Both are answerable from outside the corpus by a Fayette County docket search,
and the 2018 summons shows what that returns when someone does it: a docket
number, a citation number, a filing date, a named judge and an address of
record. Knowing the magisterial district is not knowing the case — MDJS
dockets are per-case — so the 2018 discovery of Metros does not supply this
one's number.

**The grep.** The eight-versus-five-versus-seven arithmetic above is open and
is cheap to close: one `bin/corpus-query --text "combos" --stats` run against
a `bin/corpus-verify`-clean export.

**The recipients.** None of the six December rows is attributed to a
counterparty on this page. Row 6 is inbound and is attributed to Annie by the
surrounding narrative rather than by a handle. Who rows 1–5 were sent to is
not recorded here, and it matters for row 5: a written admission of a theft
reads differently depending on whether it went to a partner, a friend, or a
group thread.

**The two 2026-01-14 rows** are logged as "a later, unrelated use" and nobody
has read them. They are the only rows in the log that could still be checked
against a memory eight months old rather than eleven years old.

## Limits of record

The corpus is not in this repository and must not be — 192,140 messages
carrying the phone numbers, addresses and private words of roughly 498 people
who did not choose to be published
([`corpus/README.md`](../../corpus/README.md)). Everything above that quotes a
corpus row is carried at the fidelity of `dat:0030` and `dat:0072`, both run
2026-09-09 against a sha256-verified export, and not re-derived in this pass.
`dat:0072`'s extraction note gives the file as 203,626 rows while
`corpus/manifest.json` records 192,140; the discrepancy is unexplained here and
is flagged rather than reconciled, since a CSV line count and a message count
are different quantities in this corpus and the node does not say which it
means.

The `raw/` material this page cites — the two 2026-08-02 captures, the
`all_imessages_complete_dump.txt` scan, the `imessage_ALL_both_all_now.csv`
extract — is **not in this tree**. The reconstruction recovered the export and
the source ledgers, not the files the pages were written against. Those
citations resolve to nothing, which makes the claims resting on them
unverified rather than false. The `.csv` and dump sources are additionally
shelved under [`CORPUS_POLICY.md`](../../CORPUS_POLICY.md) and may support no
claim about the past, only a claim about what was previously believed.

No court record, no store record and no police record has ever been consulted
for this matter. Every word above traces to Dan's own text, Dan's own later
telling, or a machine count of Dan's own text.

## Epistemic ledger

- **Primary-verified (authoritative corpus):** the six December 2015 rows,
  including the *"Because I took combos"* admission and the same-day
  recounting of the trooper's line (dat:0030, dat:0072). The **absence** of
  2015 pre-November coverage (corpus/derived/summary.json, threads.csv,
  manifest.json — internally consistent to the row).
- **Operator testimony:** that the theft happened, that it was of Combos, that
  it was cited as retail theft, that it fell a few weeks after the arrest, and
  the order of the two.
- **Old-wiki testimony, now unverified:** *"My combos are paid off"*; the
  *"counts as poison"* ending of Annie's tease; the background-check framing.
- **Withdrawn:** "the corpus contains no contemporaneous account of the
  theft"; the trooper's line as a captured utterance; the October 2017 DUI as
  Dan's.
- **Contested and held open:** the barracks date (Dec 8 vs Dec 9); the hit
  count (8 vs 5 vs 7+2); which case the 2016 fine payments belong to.
- **Unestablished, full stop:** store, date, value, grading, disposition,
  docket, whether any fine existed.
