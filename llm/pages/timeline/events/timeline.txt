---
domain: timeline
page_type: event
status: archived
date_created: 2026-06-22
date_modified: 2026-09-26
sources: ["raw/self/dox-md/LIFE_EVENTS_CALENDAR.md — ⚠ Source reference unresolved — original target no longer exists in current corpus.", "raw/self/dox-md/LIFE REPORT.md — ⚠ Source reference unresolved — original target no longer exists in current corpus.", "raw/self/context-core/CONTEXT_CORE_EXPANDED.md — ⚠ Source reference unresolved — original target no longer exists in current corpus.", "raw/self/dox-md/operating_manual.md — ⚠ Source reference unresolved — original target no longer exists in current corpus.", "raw/self/dox-md/BFS_BOOTLOADER_v2.md — ⚠ Source reference unresolved — original target no longer exists in current corpus.", "raw/self/message-csv/*", "raw/self/facebook/facebook-ihatedanfrank/ — ⚠ Source reference unresolved — original target no longer exists in current corpus.", "raw/wiki/new-wiki/wikibrain/wiki/self/chats/gemini-18.md", "raw/self/dox-md/FAVORITES DATA (2).md — ⚠ Source reference unresolved — original target no longer exists in current corpus.", "raw/self/dox-md/Annie 10-Year Trauma Bond Aura Illness Forensic Report.md — ⚠ Source reference unresolved — original target no longer exists in current corpus.", "raw/self/dox-md/CATO_BOOTLOADER_DANFRANK.md — ⚠ Source reference unresolved — original target no longer exists in current corpus.", "raw/self/ancestry/ — ⚠ Source reference unresolved — original target no longer exists in current corpus.", "raw/imessage/messages-part1-2011-2019.csv", "raw/imessage/messages-part2-2019-2026.csv", "raw/drive-sweep/20260911/gdocs/google-drive-export/LIFE_EVENTS_EXTRACTED.md.from-gdoc.txt", "kb/data/0542-2025-collapse-volume-replicated-anomaly-flagged.md"]
connections:
  - page: wiki/self/context-core
    type: evidences
    claim: "Both pages are built in part from the same raw extraction — LIFE_EVENTS_CALENDAR.md — with context-core as the curated, cross-checked read and this page as the near-raw event list; context-core's Residence timeline section has already resolved several date conflicts this page's own auto-extraction carries uncorrected."
  - page: wiki/people/johnny-dealer
    type: evidenced-by
    claim: "The 2018 peak of 254 events resolves to a named supply node rather than to a diffuse bad year: the handle carrying that period's logistics is +17243223678, which is what lets the event spike be read as a procurement pattern instead of a mood."
related: ["wiki/timeline/periods/dec-2025-spike", "wiki/timeline/periods/2021-2023-employment-block", "wiki/people/annie-ulmer", "wiki/people/alexis-armel", "wiki/timeline/periods/2015-2016-annie-relationship-start", "wiki/timeline/periods/2017-poverty-floor", "wiki/timeline/periods/2018-deep-cycle", "wiki/timeline/periods/2025-collapse", "wiki/self/message-corpora/master-message-dump", "wiki/mind/synthesis/attachment-trauma-bond", "wiki/self/facebook/messages", "wiki/mind/concepts/forensic-method", "wiki/self/ancestry", "wiki/timeline/master-timeline", "wiki/timeline/index", "wiki/timeline/annie-record", "wiki/mind/synthesis/bond-switch-2015", "wiki/timeline/periods/2020-2021-market-era", "wiki/timeline/periods/covid-era-2020", "wiki/self/message-corpora/source-coverage-index", "wiki/self/concepts/claude-code", "wiki/meta/complete-log-doctrine", "wiki/mind/concepts/attachment-model", "wiki/mind/synthesis/spatial-behavior", "wiki/people/jerad-friedline", "wiki/people/fran-coldren"]
tags: [relationships, infidelity, financial-stress, career, ai-collaboration, forensic-analysis, digital-footprint]
---

# Master Life Events Timeline

This page is the index card for an instrument that no longer exists. In the
first half of 2026 a script read Dan's text-message archive and wrote out a
calendar of his life — **1,104 events on 633 dates, 28 November 2015 to
23 March 2026**, each tagged with an emoji category like 💔 Relationship or
⚖️ Legal. The file was called `LIFE_EVENTS_CALENDAR.md`. For two months it
was the wiki's spine: period pages were drafted from it, syntheses quoted its
category totals, and this page held its summary and a sample of its rows.

Then the wiki replaced it. `bin/wiki-timeline`, a rule-based extractor that
reads the wiki's own pages rather than raw messages, was built explicitly as
*"Replaced the broken LIFE_EVENTS_CALENDAR.md"*
([[wiki/self/concepts/claude-code]]), and its output,
[[wiki/timeline/master-timeline]], now holds **8,139 events across 81 years
from 497 pages**. The calendar file itself was not carried into this
repository: it is cited by forty-six pages and held by none. The one
file on Drive with a matching name, `LIFE_EVENTS_EXTRACTED.md`, converts to
three lines and no events
(`raw/drive-sweep/20260911/gdocs/google-drive-export/LIFE_EVENTS_EXTRACTED.md.from-gdoc.txt`).

So this page cannot print the calendar. What it can do — and what this
rewrite does — is say what the calendar was, check every row of it that
survives here against the complete message record, and measure what its
numbers were actually counting. The short answer to the last question is:
**mostly, how much Dan was texting.**

## What the calendar was

The page's own summary of its source, as carried since June 2026:

| Field | Value |
|---|---|
| Messages scanned | 175,358 |
| Event entries | 1,104 |
| Unique dates | 633 |
| Date range | 2015-11-28 → 2026-03-23 |
| Contacts referenced | 66 |

**The 175,358 is a known file.** [[wiki/self/message-corpora/source-coverage-index]]
lists `MASTER_MESSAGES_DB_DUMP.csv` at exactly 175,358 rows, 2011-03-18 →
2026-03-25, ten columns — and **no handle column: "cannot attribute."** That
single fact explains most of what went wrong with the calendar. A script
reading that file could see each message's text, time and a sent/received
flag. It could not see who the other person was. So when it found a sentence
that sounded like an event, it could not tell whether it was Dan's life or
Annie's, or whether the sender was describing today or 2009.

**Why it starts in November 2015.** The dump's nominal start is 2011, but the held corpus has only seven rows
before 28 November 2015 — one 2011 attachment and six scattered November 2015
messages — and the Annie thread begins that night. For the calendar's purposes, Dan's life
started when the phone database did. Everything before is invisible to it:
[[wiki/timeline/periods/nyc-first-era-2010-2013]],
[[wiki/timeline/periods/uniontown-return-2013-2015]], Full Sail, the dark
years. The "Contacts referenced: 66" figure cannot mean counterparties, since
the file carried none; it most plausibly counts names found in message text.

**The held corpus covers the same window almost exactly.** Between the
calendar's first and last dates (28 November 2015 to 23 March 2026) the
authoritative export holds **175,196 rows** — 162 fewer than the 175,358 the
calendar scanned, a difference of under a tenth of a percent
(`raw/imessage/messages-part1-2011-2019.csv`,
`raw/imessage/messages-part2-2019-2026.csv`). The calendar and this rewrite
are reading, in effect, the same messages; the difference is that the corpus
knows who sent them.

**How much a speaker-blind reader gets wrong, before it reads a word.** Of
those 175,196 messages, **86,278 (49.2%) were received**, not sent. And
**91,435 (52.2%)** sit in Annie's three handles, of which 44,484 are hers. An
extractor that cannot see the sender and treats every first-person sentence as
Dan's will, on those proportions alone, assign roughly half its first-person
events to the wrong life — and most of those to one particular other life.
That is not a hypothesis about the calendar's errors. It is the base rate its
errors should be judged against, and the row checks below land under it.

## What the numbers measured

The calendar's year totals, as this page and the period pages carried them,
set against the held corpus's message count for the same year:

| Year | Calendar events | Held-corpus messages | Events per 1,000 messages | Rank by events | Rank by messages |
|---|---:|---:|---:|---:|---:|
| 2015 (Nov–Dec) | ≥ 39 in December (as sampled) | 13,745 | — | — | — |
| 2016 | 78 | 20,279 | 3.8 | 6 | 3 |
| 2017 | 85 | 17,550 | 4.8 | 5 | 5 |
| 2018 | 254 | 40,500 | 6.3 | 2 | 2 |
| 2019 | 158 | 20,166 | 7.8 | 3 | 4 |
| 2020 | 68 | 6,327 | 10.7 | 7 | 7 |
| 2021 | 5 | 282 | 17.7 | 9 | 9 |
| 2022 | not stated | **0** | — | — | — |
| 2023 | not stated | 960 | — | — | — |
| 2024 | 55 | 4,369 | 12.6 | 8 | 8 |
| 2025 | 259 | 41,203 | 6.3 | 1 | 1 |
| 2026 (to 23 Mar) | 86 | 9,821 | 8.8 | 4 | 6 |

Across the nine years with both figures, **the correlation between calendar
events and message volume is r = 0.96.** The two biggest years by events are
the two biggest by messages, and in the same order; the three smallest are the
same three; the 2018/2025 pair that the period pages treat as the twin peaks of Dan's life is also the pair where he sent the most texts. The rate of
events per thousand messages drifts upward as volume falls — which is what a
detector with a fixed floor of stock phrases would do — but the rank order is
almost entirely volume.

This does not make the calendar useless. It makes it a **volume meter with a
vocabulary**: it tells you when the archive is loud and what kinds of words
are in it. It does not tell you when life was dense. The wiki has leaned on it
for the second reading several times:

- [[wiki/timeline/periods/2018-deep-cycle]] and
  [[wiki/mind/synthesis/spatial-behavior]] count *"LIFE events calendar: 254
  events, highest year it covers"* as one of **three independent
  instruments** agreeing on 2018, alongside the whole-corpus message count
  (40,514) and GPS place visits. The first two are not independent. They are
  the same archive counted twice. The GPS agreement stands on its own.
- [[wiki/timeline/periods/2021-2023-employment-block]] reads the calendar's
  *"near-silence for these years (5 events in 2021, against 254 in 2018)"* as
  *"not a gap in the record but the shape of the era itself — low mobility,
  one anchor institution."* The held corpus has **282 messages in 2021, none at
  all from May 2021 through December 2022, and six in January 2023.**
  [`CORPUS_POLICY.md`](../../../CORPUS_POLICY.md) names this directly: *"2021 has
  282 messages and 2022 has none. That reflects the source database."* During
  the same years the location history logs roughly 690 shifts at Au Za'atar.
  The calendar's silence is the phone database's silence. The era's shape
  comes from the location record, not from here.
- [[wiki/timeline/periods/2025-collapse]] carries the calendar's 2025
  distribution (*August 30 / September 97 / October 58*) and has already
  flagged that the generated index disagrees (*73 / 71 / 37*). The held corpus
  for those months is 3,950 / 18,605 / 8,428 messages — September is the
  archive's single loudest month in eleven years. The calendar's September
  peak is the corpus's September peak
  ([`dat:0542`](../../../kb/data/0542-2025-collapse-volume-replicated-anomaly-flagged.md)).

**What the missing years say.** The known annual figures sum to 1,048 of the
1,104 events. That leaves **56 for November–December 2015, 2022 and 2023
combined**. If the "39 in December" the page quoted was the whole month, fewer
than twenty are left for November 2015 and two calendar years. With no messages
in 2022, that is exactly what a volume meter would produce.

## The rows that survive, checked

The previous version of this page printed a "sample events" list drawn from
the calendar plus the operating manual, a Facebook cross-read and a Gemini
biography. Every checkable row is checked here against the held corpus. The
calendar's defining error type — **right words, wrong owner or wrong date** —
recurs in almost every row that has one.

**28 November 2015 — "Lex cheated on me 2 weeks in after I moved her to fla."**
Dan did send it, at 7:08 p.m. on 28 November (`2015-11-29 0:08:18` UTC). He
was describing how his relationship with [[wiki/people/alexis-armel|Alexis]]
began in **2009**. The calendar tagged it as a 2015 cheating event. Corrected
on 2026-08-15 ([[wiki/mind/synthesis/bond-switch-2015]]); every 💔
Cheating/Affair total inherits the defect.

**29 November 2015 — "Met Annie Ulmer at Uniontown Country Club golf course
2am rain."** The page attributed this to the operating manual plus the
calendar. No row in the held corpus places a meeting at the country club at
2 a.m. in rain. In April 2018 Dan told [[wiki/people/new-jim-shaffer|Jim
Shaffer]] a different version: that Alexis *"started working with, and
reintroduces me to Annie ulmer"* in November 2015. Both may be true; neither
is the calendar's to settle.

**"I met someone that instantly changed my life and showed me that I was
really unhappy."** Verified: Dan, 3:28 a.m. on 29 November 2015 (`2015-11-29
8:28:34` UTC).

**"Fuck my friends. Fuck birthday dinner."** Verified — but **it is Annie's**,
not Dan's: inbound from her handle at 6:47 p.m. on 28 November 2015
(`2015-11-28 23:47:54` UTC), in full *"Fuck my friends. Fuck birthday dinner.
Fucking going drinking. I wanna be with you."* The page placed it inside Dan's
"genesis" line as though it were his.

**December 2015 — "Call him and be like. Listen I broke up with lex, I'm in
love with Annie Ulmer."** Verified — and **also Annie's**. On 2 December
(`2015-12-02 20:42:06` UTC) Dan says he is nervous about calling his father;
Annie suggests the script: *"Call him and be like. Listen I broke up with lex,
I'm in love with Annie Ulmer and he was probz faint."* The calendar filed a
suggested phone call as the breakup. Dan's own reference comes on 8 December, by which point it had happened:
*"That was the night before I broke up with lex"* (`2015-12-08 15:06:10` UTC).

**January 2016 — "Quit Job"; "Fran hospitalized"; "Holiday gathering (Caitlin
cousin)"; "Engagement tease Valentine's"; "You know that you've changed my
life."** *"Wow. I quit / I literally fuckig quit"* is Annie's (`2016-01-06
2:38` UTC). *"Fran admitted to the hospital again tonight :("* is Dan's
(`2016-01-07 22:10:59` UTC). The cousin Caitlin is Annie's cousin, mentioned
by Annie. The Valentine's rings are Annie's messages. *"You know that you've
changed my life"* is Dan's (`2016-01-06 1:16:16` UTC). Five rows: two Dan's,
three Annie's, all filed as Dan's life.

**January 2017 — "Debt/Financial Crisis (overdrawn $600 by Annie acct refs)."**
Annie, 5 January 2017: *"Her account is overdrawn by $600"* — about a third
woman whose check was being routed through Annie's account (`2017-01-05
20:23:21` UTC). Not Dan's account, not Annie's.
[[wiki/timeline/periods/2017-poverty-floor]] carries it as the year's opening
fact.

**January 2017 — "Flight/Airport shooter ref."** Verified as reference: Dan,
6 January 2017, *"There was a shooting at ft lauderdale airport / That's the
airport gram goes to lol."* A news event, not a life event.

**January 2017 — "Moved to Virginia Ave with Annie."** Verified: Dan to a
friend, 20 January 2017 local, *"Annie and I moved into scerba's old place on
Virginia Ave."* This sits awkwardly against Dan telling Jim Shaffer in April
2018 that he and Annie had *"lived together since august 2017"*. Both are in
Dan's words; the record does not reconcile them. (The held corpus has **no rows
at all for August 2017**; see the log below.)

**January 2017 — "Death threat message."** Not located by a search for the obvious phrasings in January–February 2017.

**April 2017 — "Pet Loss (Sabrina put down)."** Verified: Dan, 11 April 2017,
*"now I have to go with my mom to put Sabrina down"* — in the same message as
*"still tying to process jay,"* which is the week of
[[wiki/people/jay-lauer|Jay Lauer]]'s overdose.

**2018 — "Multiple dealers (Johnny +17243223678), financial velocity (Cash
App limits, ATM 1am)."** The connection to [[wiki/people/johnny-dealer]] is
the page's typed edge and is left standing. The line *"Johnny had my card and
got money out after midnight"*, which [[wiki/timeline/periods/2018-deep-cycle]]
dates to 14 April 2018, is in the held corpus once — on **15 April 2019**, inbound from one of
Annie's handles, as a recollection (*"Remember Johnny had my card…"*).
The event may be 2018; the row is 2019.

**2020–21 — "Market era (FSLY tip from Jerad, GME/AMC, CCIV loss $6k day)."**
Verified in outline: [[wiki/people/jerad-friedline|Jerad]]'s *"Buy FSLY and do
not touch for 2-3 years"* (`2020-09-21 0:03:28` UTC); CCIV puts and calls in
February 2021. The full thirteen-row record is on
[[wiki/timeline/periods/2020-2021-market-era]].

**2024 — "Political obsession (Trump attempt 800 msgs in 6wks with
Jerad)."** Verified in size, not in subject: the Jerad thread holds **866
messages between 13 July and 24 August 2024** — six weeks from the day of the
Butler assassination attempt. Of those, **39** contain the word "Trump." The
volume is real; "political obsession" is a reading of it.

**August 2025 — "Burning ritual ('One more load to burn...'); Wall of Despair;
Unconditional love monologues; GPS proxy."** All verified. *"One more load to
burn and I will finally have rid this place of anything that has ever come
from you"* — Dan to Annie, 2 August (`2025-08-02 19:19:45` UTC). *"my wall of
despair"* — Dan to Tom, 2 August local. *"this is what unconditional love
looks like"* — Dan to Annie, 3 August. *"You really think that the problem is
me having your GPS"* — 7 August.

**1 June 2026 — "'Goodbye forever...' from annie logs + received 'Daniel, i
just want to say that i am extremely sorry.'"** The first is **Dan's**, not
from Annie: *"Goodbye forever. This was not how it should have ended but. /
sic semper lupanis."* (12:27 a.m., 1 June; `2026-06-01 4:27:49` UTC). The
second is Annie's, but **four days later** — 12:37 a.m. on 5 June (`2026-06-05
4:37:42` UTC). This row is also outside the calendar's own range, which ends
23 March 2026; it was added to this page from another source.

**Tally.** Of the rows above that could be checked, most are real messages.
At least seven are assigned to the wrong speaker, the wrong person or the
wrong year. That ratio is the calendar in miniature: **its recall was good and its
attribution was blind**, which is exactly what a handle-less source predicts.

## What the calendar got right

It would be easy to read the above as a verdict against the calendar. It is
not one, and the record does not support one.

**Its recall was real.** Almost every quoted phrase the page carried is in the corpus, word for word,
most of them within a day of where the calendar put it. For an
unattended script reading 175,000 rows with no speaker field, that is a good
result. The August 2025 cluster — the burning, the wall, the unconditional-love
messages, the GPS fight — is exactly right, dated to the right week, and in the
right thread. The corpus agrees that August–October 2025 is the loudest
stretch in the archive, and the calendar found it first.

**Its categories named the right territory.** Relationship, financial, health
and legal are the four subjects that dominate the archive on any reading;
every hand-built period page since has organised itself around the same four.
The error was in the counts assigned to each, not in the map.

**Its failure was structural, not careless.** The two defects that recur —
tagging a message by the date it was sent rather than the date it describes,
and treating every message as Dan's — are both properties of the file it was
given, not of the reading. A script with the handle column and a rule for
retrospective tense would have avoided most of what is listed above. That is
the wiki's standing lesson in one instrument: *take the argument, verify the
quote* ([`README.md`](../../../README.md)). The calendar's arguments — 2018
and 2025 were the heaviest years, relationships dominated — survive. Its quotes, checked, belong to someone other than Dan about a third of the
time — under the half the base rate allows, because the page's sample leaned
toward his own lines.

## Categories, as carried

The category distribution below is the calendar's and cannot be re-derived
here. It is kept because other pages cite it, and flagged for what each row is
now known to contain.

| Category | Count | Subcategories named | Status |
|---|---:|---|---|
| 💔 Relationship | 266 | Cheating/Affair 84, Breakup 52, Got Back 35, Engagement 35 | Cheating/Affair is an upper bound (send-date defect); speaker-blind throughout |
| 🏥 Health | 108 | Addiction/Recovery 55, Hospital 23, Diagnosis 7 | Includes Fran's hospitalisations and others' |
| 💰 Financial | 105 | Debt/Financial Crisis 65, Financial Milestone 35 | The January 2017 $600 row is a third party's |
| ⚖️ Legal | 100 | Arrest 26, Court 23, Lawyer 33 | Cannot separate Dan's matters from others' (Alexis, Zac Shumar, Jim Shaffer, the elder Kezmarsky all appear in these years) |
| Others | — | Mental 70, Education 54, Death 51, Career 44, Housing 43, Travel 37 | — |

[[wiki/mind/concepts/attachment-model]] already relabelled the 266 and 84 as
*"corpus-wide totals … context for scale, not Annie figures"* (corrected
2026-08-10). [[wiki/mind/synthesis/attachment-trauma-bond]] still reads them as
the distribution of *"documented life events spanning the decade."*

## How the calendar relates to what replaced it

Three chronologies now exist, and they measure different things.

- **The calendar** (this page) — events found in message text, speaker-blind,
  November 2015 to March 2026. Not held.
- **[[wiki/timeline/master-timeline]]** — dated statements found in the
  structural positions of wiki pages, 1796 to 2027. It measures the wiki's
  attention: one event discussed on six pages is six entries, which is why it
  finds **689** entries in 2025 against the calendar's 259
  ([[wiki/timeline/periods/2025-collapse]]).
- **[[wiki/timeline/annie-record]]** — the hand-read chronology of the Annie
  thread, built by reading messages in order and keeping only things that
  happened, each with the line that proves it. The method the other two cannot
  replace.

[[wiki/self/context-core]]'s residence section is the curated read that
resolved several of the calendar's date conflicts; where the two disagree, it
wins.

## The periods, against the record

The period labels this page carried are kept. Each is set against the held
corpus and the page that now carries it.

| Period | Calendar said | Held corpus | Now carried by |
|---|---|---|---|
| Nov 2015 – 2016 | Relationship formation; 39 events in Dec 2015; 78 in 2016 | Dec 2015 is the busiest month of 2015–17 (12,355) | [[wiki/timeline/periods/2015-2016-annie-relationship-start]] |
| 2017 | Poverty floor; 85 events | 17,550; **August 2017 has no rows** | [[wiki/timeline/periods/2017-poverty-floor]] |
| 2018 | Peak, 254 events | 40,500 — the loudest year until 2025 | [[wiki/timeline/periods/2018-deep-cycle]] |
| 2019 | NYC move, 158 events | 20,166 | [[wiki/places/307-e-76th-st]] |
| 2020 | Market era, 68 events | 6,327; Oct–Dec 2020 under 100 a month | [[wiki/timeline/periods/2020-2021-market-era]], [[wiki/timeline/periods/covid-era-2020]] |
| 2021–2023 | Employment block, 5 events in 2021 | 282 / 0 / 960 — a database gap | [[wiki/timeline/periods/2021-2023-employment-block]] |
| 2024 | Political obsession, 55 events | 4,369; July alone 1,123 | — |
| 2025 | Collapse, 259 events | 41,203 — the loudest year on record | [[wiki/timeline/periods/2025-collapse]], [[wiki/timeline/periods/dec-2025-spike]] |
| 2026 (to Mar) | Closure, 86 events | 9,821 to 23 March | [[wiki/timeline/events/group-chat-closure]], [[wiki/people/annie-ulmer]] |

## Coverage and limits

- **The calendar is not held.** Every figure attributed to it on this page is
  the calendar's as relayed by the wiki, not re-derived. Its per-row list of
  1,104 events cannot be printed; the complete log below is the message record
  it was built from, which can.
- **The r = 0.96 is nine points.** It is strong and it is small. It uses the
  held corpus as a stand-in for the dump the calendar actually read; the two
  cover the same window within half a percent but are not the same file.
- **Verification here is of rows, not of events.** A row being real does not
  make the calendar's category right, and a row being mis-attributed does not
  make the underlying event false.
- **Times.** The corpus stores UTC; dates in prose are Eastern. Rows are
  identified by corpus timestamp where quoted.
- **Not re-checked in this pass:** the operating-manual and Gemini-biography
  rows (the BFS drawer shortage, Anita and Brandon, the Gemini "early 2025 PA
  return"), and the Facebook registration and friend-count figures. Those
  sources are not held.

## Appendix — complete monthly log of the message record behind the calendar

Every month of the calendar's window, from the held corpus (UTC months).
Consecutive empty months are collapsed to one line. Sent = Dan.

| Month | Messages | Sent | Received | Note |
|---|---:|---:|---:|---|
| 2015-11 | 1,390 | 719 | 671 | Calendar begins 28 Nov |
| 2015-12 | 12,355 | 6,584 | 5,771 | |
| 2016-01 | 5,836 | 2,930 | 2,906 | |
| 2016-02 | 178 | 91 | 87 | |
| 2016-03 | 1,438 | 692 | 746 | |
| 2016-04 | 1,917 | 874 | 1,043 | |
| 2016-05 | 5,882 | 2,758 | 3,124 | |
| 2016-06 | 484 | 221 | 263 | |
| 2016-07 | 494 | 265 | 229 | |
| 2016-08 | 362 | 229 | 133 | |
| 2016-09 | 18 | 9 | 9 | |
| 2016-10 | 3 | 2 | 1 | |
| 2016-11 | 1,483 | 795 | 688 | |
| 2016-12 | 2,184 | 1,164 | 1,020 | |
| 2017-01 | 1,419 | 720 | 699 | |
| 2017-02 | 803 | 393 | 410 | |
| 2017-03 | 169 | 89 | 80 | |
| 2017-04 | 2,443 | 1,179 | 1,264 | |
| 2017-05 | 1,968 | 978 | 990 | |
| 2017-06 | 1,302 | 635 | 667 | |
| 2017-07 | 1,394 | 719 | 675 | |
| 2017-08 | 0 | 0 | 0 | no rows in the held corpus |
| 2017-09 | 398 | 208 | 190 | |
| 2017-10 | 2,769 | 1,361 | 1,408 | |
| 2017-11 | 3,099 | 1,528 | 1,571 | |
| 2017-12 | 1,786 | 926 | 860 | |
| 2018-01 | 2,336 | 1,182 | 1,154 | |
| 2018-02 | 2,792 | 1,450 | 1,342 | |
| 2018-03 | 2,493 | 1,183 | 1,310 | |
| 2018-04 | 4,868 | 2,512 | 2,356 | Fran dies 4 Apr |
| 2018-05 | 4,569 | 2,343 | 2,226 | |
| 2018-06 | 5,315 | 2,640 | 2,675 | Busiest month of 2018 |
| 2018-07 | 1,561 | 758 | 803 | |
| 2018-08 | 2,365 | 1,139 | 1,226 | |
| 2018-09 | 3,293 | 1,542 | 1,751 | |
| 2018-10 | 4,231 | 2,216 | 2,015 | |
| 2018-11 | 4,034 | 2,065 | 1,969 | |
| 2018-12 | 2,643 | 1,181 | 1,462 | |
| 2019-01 | 2,398 | 1,217 | 1,181 | |
| 2019-02 | 2,102 | 1,099 | 1,003 | 307 E 76th lease-signing photos, 25 Feb |
| 2019-03 | 1,340 | 722 | 618 | "I moved back to nyc" (to Jim Shaffer, 26 Mar) |
| 2019-04 | 1,771 | 864 | 907 | |
| 2019-05 | 2,814 | 1,264 | 1,550 | |
| 2019-06 | 2,062 | 847 | 1,215 | |
| 2019-07 | 1,502 | 631 | 871 | |
| 2019-08 | 2,867 | 1,383 | 1,484 | |
| 2019-09 | 1,008 | 485 | 523 | |
| 2019-10 | 1,291 | 668 | 623 | |
| 2019-11 | 501 | 182 | 319 | |
| 2019-12 | 510 | 178 | 332 | |
| 2020-01 | 435 | 142 | 293 | |
| 2020-02 | 637 | 256 | 381 | |
| 2020-03 | 1,277 | 602 | 675 | |
| 2020-04 | 902 | 399 | 503 | |
| 2020-05 | 268 | 90 | 178 | |
| 2020-06 | 399 | 227 | 172 | |
| 2020-07 | 25 | 16 | 9 | |
| 2020-08 | 918 | 442 | 476 | |
| 2020-09 | 1,353 | 911 | 442 | FSLY tip, 20 Sep |
| 2020-10 | 93 | 51 | 42 | |
| 2020-11 | 15 | 12 | 3 | |
| 2020-12 | 5 | 3 | 2 | |
| 2021-01 | 116 | 65 | 51 | |
| 2021-02 | 162 | 86 | 76 | CCIV, GME |
| 2021-03 | 1 | 0 | 1 | |
| 2021-04 | 3 | 3 | 0 | |
| 2021-05 – 2022-12 | 0 | 0 | 0 | no rows in the held corpus (20 months) |
| 2023-01 | 6 | 6 | 0 | |
| 2023-02 – 2023-07 | 0 | 0 | 0 | no rows in the held corpus (6 months) |
| 2023-08 | 98 | 44 | 54 | |
| 2023-09 | 102 | 56 | 46 | |
| 2023-10 | 211 | 130 | 81 | |
| 2023-11 | 72 | 30 | 42 | |
| 2023-12 | 471 | 242 | 229 | |
| 2024-01 | 23 | 18 | 5 | |
| 2024-02 | 8 | 5 | 3 | |
| 2024-03 | 15 | 14 | 1 | |
| 2024-04 | 13 | 8 | 5 | |
| 2024-05 | 109 | 63 | 46 | |
| 2024-06 | 356 | 207 | 149 | |
| 2024-07 | 1,123 | 589 | 534 | Butler attempt, 13 Jul |
| 2024-08 | 981 | 490 | 491 | |
| 2024-09 | 542 | 232 | 310 | |
| 2024-10 | 421 | 175 | 246 | |
| 2024-11 | 367 | 186 | 181 | |
| 2024-12 | 411 | 188 | 223 | |
| 2025-01 | 380 | 190 | 190 | |
| 2025-02 | 255 | 146 | 109 | |
| 2025-03 | 166 | 84 | 82 | |
| 2025-04 | 76 | 20 | 56 | |
| 2025-05 | 120 | 61 | 59 | |
| 2025-06 | 35 | 15 | 20 | |
| 2025-07 | 107 | 49 | 58 | |
| 2025-08 | 3,950 | 2,115 | 1,835 | Burning ritual, 2 Aug |
| 2025-09 | 18,605 | 9,746 | 8,859 | Loudest month in the window |
| 2025-10 | 8,428 | 4,014 | 4,414 | |
| 2025-11 | 2,784 | 1,550 | 1,234 | |
| 2025-12 | 6,297 | 3,300 | 2,997 | |
| 2026-01 | 3,924 | 2,140 | 1,784 | |
| 2026-02 | 3,739 | 2,349 | 1,390 | |
| 2026-03 | 3,193 | 1,944 | 1,249 | Calendar ends 23 Mar |
| **Window total** | **176,237** | | | Calendar scanned 175,358 |

## Sources

Index: [[wiki/timeline/index]].

- `raw/imessage/messages-part1-2011-2019.csv`, `raw/imessage/messages-part2-2019-2026.csv`
  — every verified row and the monthly log.
- `raw/drive-sweep/20260911/gdocs/google-drive-export/LIFE_EVENTS_EXTRACTED.md.from-gdoc.txt`
  — the only Drive file by a matching name; empty.
- [[wiki/self/message-corpora/source-coverage-index]] — the 175,358-row
  `MASTER_MESSAGES_DB_DUMP.csv` and its missing handle column.
- [[wiki/self/concepts/claude-code]] — the calendar's retirement.
- [`dat:0542`](../../../kb/data/0542-2025-collapse-volume-replicated-anomaly-flagged.md)
  — 2025 volume replication and month shape.
- [`CORPUS_POLICY.md`](../../../CORPUS_POLICY.md) — the 2021–2022 gap.
- [[wiki/meta/complete-log-doctrine]] — why the log is printed.
