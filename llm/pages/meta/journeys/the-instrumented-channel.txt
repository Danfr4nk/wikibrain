---
domain: meta
page_type: journey
title: "The Instrumented Channel"
status: active
knowledge: derived
date_created: 2026-08-26
date_modified: 2026-09-25
sources:
  - raw/imessage/messages-part1-2011-2019.csv
  - raw/imessage/messages-part2-2019-2026.csv
  - kb/data/0053-old-wiki-instruments-corrected-each-other.md
  - kb/data/0078-instrumented-channel-journey-thesis.md
  - kb/data/0528-contact-gini-inbound-replication-2026-09-09.md
  - kb/data/0529-contact-gini-per-year-replication.md
  - kb/data/0531-contact-gini-two-sided-unverifiable.md
  - kb/data/1292-block-unblock-loop-severance-recount-129-128.md
  - kb/data/1383-closing-the-set-rule.md
  - kb/data/1802-held-corpus-timestamps-are-utc-not-local.md
tags: [forensic-analysis, digital-footprint, personality-profile, relationships, attachment, consistency]
journey:
  stops:
    - page: wiki/mind/concepts/node-locking
      note: "The earliest instrument: an AI-memory protocol that froze a relationship's facts into 'relational source code' before any of this was wiki content."
    - page: wiki/mind/synthesis/read-receipt-forensics
      note: "The finest-grained instrument — chat.db metadata — and the one that documents its own traps most explicitly, including that a device's signal does not identify its author."
    - page: wiki/mind/synthesis/message-circadian-latency
      note: "The same corpus recut from scratch; its own headline was found running backwards, retracted, and re-derived — here extended to every year the corpus holds."
    - page: wiki/mind/synthesis/single-channel
      note: "The volume instrument. Its two-sided coefficient was withdrawn as unverifiable on 2026-09-13 and is re-derived here from the held corpus at 0.9632; its evaluative leg was falsified."
    - page: wiki/mind/synthesis/block-unblock-loop
      note: "The severance instrument — its relapse rate re-derived from 87% to 100%, its June 2026 prediction falsified at 52 days, its Kristin control row superseded. Every failure kept on the page."
---

# The Instrumented Channel

This wiki did not simply record Dan's highest-volume relationship. It built a
sequence of instruments to measure it — a memory-lock protocol, a metadata
forensics pass, a latency recut, a concentration measure, a severance model —
and in every case the instrument, once built, turned out to measure something
wider than the one channel it was built for. This journey follows them in the
order they were built, because the pattern is in the sequence.

The channel is the one with [[wiki/people/annie-ulmer|Annie]]. In the
authoritative corpus it is **97,864 of 192,140 messages — 50.9% of everything
Dan's Messages database holds across fifteen years**: 94,220 rows on her two
phone handles and 3,644 inbound rows from her AOL iMessage address
(`raw/imessage/messages-part1-2011-2019.csv`, `…/messages-part2-2019-2026.csv`,
counted 2026-09-25). The next-largest thread, at 20,009 rows, is about a fifth of it.

The journey as first written (2026-08-26) carried five summaries of its stops.
By 2026-09-25 four of the five were stale against their own stop pages, and
one was reporting a figure its stop page had already retracted. This version
re-reads each stop, corrects the summaries, and re-runs the two measurements
that can be re-run from the held corpus. One of those re-runs recovers a
finding the wiki had withdrawn. The thesis survives in a stronger form than
the original stated: **every instrument in the sequence has had a headline
figure corrected, withdrawn or re-derived, and every correction is still
visible on its page.**

## Stop 1 — locking the channel into memory

[[wiki/mind/concepts/node-locking|Node locking]] predates the wiki. It is a
protocol Dan ran directly against AI chat sessions: he delivers granular
"Node X:" observations and commands the model to *"lock these nodes into your
profile"* verbatim and unconsolidated, the model answers *"Write Operation
Successful,"* and the locked set is exported to other models. The 20.8 MB
Gemini activity archive carries about 403 "node", 1,041 "profile" and 2,258
"lock" mentions; the pinned DANFRANK-ISMS chat holds 77+ nodes
([[wiki/mind/concepts/node-locking]], citing
[[wiki/self/gemini-activity/gemini-activity]]; counts not re-derived).

What was locked is itself a finding: the master set is Dan's own minimal model
of the relationship's collapse. *Separation Logistics* (the February 2025 move
back from New York), *The Loop* (pursuit and withdrawal), *The Betty Event*
(the dog's death, dated 24 June 2025), *The Signals* (blackouts, read-receipt
cutoffs), the *Eli Incident*, the *Uniontown Generational Loop*, a
bio-and-psychometrics node locked for transfer to Grok, and the *Master Annie
Record*, tagged as *"relational source code"* — the vocabulary of a database
schema naming its primary table.

The instrument outgrew its target in one specific way. The Eli node is locked
in full and then **purged at the export boundary** — *"no - do not include any
information about eli"*, answered by *"The 'Eli' variable has been purged from
the dataset."* The node-locking page reads this as the only place in Dan's
system where a delete operation exists: write-only for people, read-write for
machines, with the caveat on the same page that the purge is redaction, not
revocation — the source session keeps the full node. That asymmetry became a
concept of its own ([[wiki/mind/concepts/no-delete-operation]]). A protocol
for remembering one relationship produced the wiki's clearest statement of
how Dan handles forgetting in general.

**State of the stop:** its counts are relayed, not re-derived; the Gemini
session transcripts are unheld. Nothing on it has been falsified. It is the
one stop whose figures the wiki has not been in a position to check.

## Stop 2 — what the metadata actually says

[[wiki/mind/synthesis/read-receipt-forensics]] is one extraction session
against the raw chat.db on 2026-08-09. It documents four defects, three of
which *"silently produce a confident wrong answer rather than an error"*:

- **M1** — `date_read` is directional. On sent rows it records when the
  *other* party read Dan's message and exists only if their receipts are on;
  on received rows it records when *Dan* read theirs, always. In the extract,
  81 of 101 received rows carried it (all Dan's own reading) against 44 of 129
  sent rows. Read as one column it says the counterparty was active all day;
  she was not visible before 23:10:40.
- **M2** — `reply_to_guid` is auto-filled with the previous message (179 of
  181). The real inline-reply marker is `thread_originator_guid` (2 of 230).
  An argument built on the former was made and withdrawn in the same session.
- **M3** — an SQLite type-affinity trap: `strftime('%s', …)` returns TEXT, a
  computed INTEGER compared against it is always less, and the query returns
  zero rows with no error. The zero-row file was read as a finding before it
  was read as a bug.
- **M4** — missing metadata is weak evidence: 41 of 129 sent rows had no
  delivery time at all, clustered by device sync.

The instrument outgrew its target twice. First, the four defects are
properties of Apple's database, not of any relationship, and the same class
of failure has since been found four times in this repository's own tooling —
substring matching that returned "heard", "hardstyle" and "card" for a search
on "ard", a coverage tool that called a 35-message month covered, a
publication gate that leaked a withheld node id
([`dat:0053`](../../../kb/data/0053-old-wiki-instruments-corrected-each-other.md)).
Second, on 2026-08-20 the page gained the corollary that matters most for
everything after it: **the presence of a signal does not identify its
author.** At least six inbound rows on Annie's handle in July–August 2026 were
typed by [[wiki/people/jerel-coles|Jerel Coles]] holding her phone, in three
windows (2026-07-26 05:39–05:57, 2026-08-16 23:42–23:53, 2026-08-18
21:46–21:50), and nothing in the schema marks them. A read receipt proves a
device was unlocked and looking. It does not prove whose eyes.

**State of the stop:** its counts come from a 230-row extract,
`annie_metadata_24h.csv`, that was never filed to `raw/`. The defects are
schema properties and reproducible on any chat.db; the counts are not
re-checkable here. One framing on a linked page (an "unanswered" 03:41
message) was a scope artifact of the 24-hour window and was corrected on the
page. That correction is M4 applied to a page's framing rather than to a row.

## Stop 3 — the same corpus, recut

[[wiki/mind/synthesis/message-circadian-latency]] was built fresh from the raw
export rather than summarised from earlier pages. Its headline was a
**nine-to-one latency asymmetry**: Dan answering Annie in a minute, Annie
answering Dan in nine, n = 31,612. On 2026-08-23 the page retracted it. The
outbound half replicated; the inbound half was off by a factor of about
seventeen, traceable to a direction-field bug in the export the page had
tried to avoid by using a second file that is not in the repository. On every
held export, under two methods, **Dan is the slower correspondent.**

**The prior version of this journey got this stop wrong.** It said the
channel's counterparty *"answered faster than Dan in every year measured,
2015 through 2026 — a merged-handle median mutual latency of nine minutes
across 31,612 replies."* The direction is right. The number is the retracted
one — nine minutes and 31,612 are the figures the correction killed — and
"every year 2015 through 2026" claims years the corpus does not hold (below).
[`dat:0053`](../../../kb/data/0053-old-wiki-instruments-corrected-each-other.md)
inherited the same sentence from this page; it is flagged in the changelog.

### The complete log, re-derived

Re-run on 2026-09-25 against the authoritative corpus. Channel = Annie's two
phone handles (`+17244346811`, `+12124702449`), individual threads only. Method
A from the stop page: each change of speaker is one reply; latency is the gap
from the last message of one run to the first message of the next. Year is
Eastern. Message length is characters of text.

| Year | Dan sent | Annie sent | Dan's reply, median (n) | Annie's reply, median (n) | Slower | Dan median length | Annie median length |
|---|---:|---:|---:|---:|---|---:|---:|
| 2015 | 7,241 | 6,394 | 15 s (3,832) | 12 s (3,832) | Dan | 25 | 17 |
| 2016 | 6,420 | 6,150 | 27 s (3,395) | 19 s (3,394) | Dan | 27 | 18 |
| 2017 | 7,151 | 7,409 | 30 s (3,635) | 19 s (3,635) | Dan | 24 | 19 |
| 2018 | 10,821 | 11,198 | 27 s (5,256) | 19 s (5,256) | Dan | 25 | 19 |
| 2019 | 2 | 2 | — (0) | n = 1 | — | 32 | 0 |
| 2020 | 0 | 0 | — | — | — | — | — |
| 2021 | 0 | 0 | — | — | — | — | — |
| 2022 | 3 | 0 | n = 1 | — | — | 7 | — |
| 2023 | 0 | 0 | — | — | — | — | — |
| 2024 | 0 | 0 | — | — | — | — | — |
| 2025 | 6,396 | 5,859 | 103 s (2,713) | 46 s (2,713) | Dan | 36 | 18 |
| 2026 (to 09-07) | 11,537 | 7,637 | 55 s (4,042) | 28 s (4,042) | Dan | 48 | 18 |
| **All** | **49,571** | **44,649** | **30 s (22,874)** | **19 s (22,873)** | **Dan** | | |

Source: `raw/imessage/messages-part1-2011-2019.csv`,
`raw/imessage/messages-part2-2019-2026.csv`. The 2015–2018 medians match the
stop page's own per-year replication to within one second (its 15/11, 27/18,
29/18, 26/19). The 3,644 AOL-address rows (April–August 2016, May–August 2018)
are excluded from latency because Dan's side of that thread carries no thread
identifier.

Three things the full log adds to the stop page.

**The gap is real and it is the corpus's, not the relationship's.**
2019–2024 hold seven messages on these handles. The relationship ran through
those years; the database the corpus was exported from does not hold them
([`CORPUS_POLICY.md`](../../../CORPUS_POLICY.md) §Known limits: 2021 has 282
messages corpus-wide and 2022 none). "Every year" is eight measured years out
of twelve, and the claim is now stated that way.

**The asymmetry holds in every measured year and widens at the end.** Annie's
median reply is faster than Dan's in all six years with data. In 2015–2018 the
ratio is 1.25–1.6×; in 2025 it is 2.2×, in 2026 2.0×. The earlier reading of a
relationship where he waited on her is inverted by every year the corpus
holds.

**The deficit is length, and it grows.** Dan's median message is 24–27
characters in 2015–2018 and Annie's 17–19. In 2026 Dan's is 48 and hers is
still 18. Her replies stay fast and short; his get slower and longer. That is
the finding [[wiki/mind/concepts/reassurance-architecture]] was rebuilt on —
what was missing was never response, it was content — and the full log shows
the gap between them more than tripling in the final year.

## Stop 4 — one channel, several domains

[[wiki/mind/synthesis/single-channel]] measures concentration: a contact Gini
near 0.96, meaning almost all relational volume runs through one node. Its
governing claim is that the same shape appears in other domains — creative
aliases held one at a time, one LLM as an external processor, one evaluative
axis for everything.

**Two corrections the prior journey did not carry.** First, on 2026-09-13 the
stop page withdrew its **two-sided** Gini (0.9591–0.9636) as unverifiable,
because every outbound row in the held corpus has an empty `sender` field
([`dat:0531`](../../../kb/data/0531-contact-gini-two-sided-unverifiable.md)); only
the inbound 0.9556 over 498 handles was replicated
([`dat:0528`](../../../kb/data/0528-contact-gini-inbound-replication-2026-09-09.md)).
Second, the **evaluative leg was falsified** on 2026-08-19: Dan's curated taste
record has a creator-level Gini of 0.188 for music (1,860 entries, 1,477
artists), 0.166 for books and 0.000 for art, against the contact graph's 0.96
([`dat:1383`](../../../kb/data/1383-closing-the-set-rule.md);
[[wiki/mind/synthesis/closing-the-set]]). Concentration is relational. It does
not extend to culture. "Four domains" is three.

### The two-sided figure, recovered

The withdrawal was right about the `sender` field and missed the
`chat_identifier` column, which names the thread's counterparty on outbound
rows. In the held corpus **94,449 of 99,360 outbound rows (95.1%)** carry one;
362 are group-thread rows, set aside here. Re-run on 2026-09-25:

| Measure | Messages | Handles | Gini | Top-1 share |
|---|---:|---:|---:|---:|
| Inbound, by `sender` | 92,780 | 498 | **0.9556** | 33.6% |
| Outbound, by `chat_identifier`, individual threads | 94,087 | 260 | **0.9441** | 33.6% |
| Two-sided (union of handles) | 186,867 | 538 | **0.9632** | — |

The inbound row reproduces `dat:0528` exactly — the same 498 handles and
0.9556 — which validates the method. The two-sided coefficient, **0.9632**,
lands inside the range the stop page withdrew (0.9591–0.9636). The finding
that was removed for lack of evidence is supported by the held corpus after
all. The outbound side is narrower than the inbound in handles (260 against
498): he writes to about half as many people as write to him. 278 inbound
handles never appear as an outbound thread, accounting for 7,242 inbound
messages. That funnel differs from the stop page's unheld figure (193 handles,
486 messages) and is reported here, not reconciled — the AOL-address thread
alone moves 3,644 rows into the no-reply column because its outbound side is
unattributed.

### The per-year log

Every year the held corpus holds, Eastern time, individual threads for
outbound. The inbound column reproduces
[`dat:0529`](../../../kb/data/0529-contact-gini-per-year-replication.md) row for row.

| Year | Inbound msgs / handles / Gini | Outbound msgs / handles / Gini | Two-sided msgs / handles / Gini | Two-sided top-1 |
|---|---|---|---|---:|
| 2011 | 0 / 0 / — | 1 / 1 / — | 1 / 1 / — | 100.0% |
| 2012–2014 | 0 / 0 / — | 0 / 0 / — | 0 / 0 / — | — |
| 2015 | 6,488 / 11 / 0.9019 | 7,321 / 9 / 0.8831 | 13,809 / 12 / 0.9108 | 98.7% |
| 2016 | 10,209 / 25 / 0.9082 | 7,024 / 23 / 0.9213 | 17,233 / 28 / 0.9220 | 73.0% |
| 2017 | 8,815 / 65 / 0.9252 | 8,723 / 59 / 0.9182 | 17,538 / 70 / 0.9286 | 83.0% |
| 2018 | 20,295 / 146 / 0.9353 | 19,554 / 86 / 0.9128 | 39,849 / 159 / 0.9436 | 55.3% |
| 2019 | 10,628 / 189 / 0.9019 | 9,436 / 88 / 0.8916 | 20,064 / 204 / 0.9229 | 44.4% |
| 2020 | 3,161 / 108 / 0.8405 | 1,961 / 55 / 0.7864 | 5,122 / 122 / 0.8548 | 16.5% |
| 2021 | 128 / 3 / 0.4635 | 152 / 4 / 0.5461 | 280 / 5 / 0.6471 | 70.4% |
| 2022 | 0 / 0 / — | 6 / 2 / 0.0000 | 6 / 2 / 0.0000 | 50.0% |
| 2023 | 452 / 32 / 0.7460 | 501 / 23 / 0.7224 | 953 / 34 / 0.7808 | 47.8% |
| 2024 | 2,198 / 48 / 0.8633 | 2,174 / 19 / 0.8144 | 4,372 / 50 / 0.8853 | 41.7% |
| 2025 | 19,947 / 71 / 0.9537 | 21,315 / 22 / 0.8683 | 41,262 / 73 / **0.9572** | 48.5% |
| 2026 (to 09-07) | 10,459 / 23 / 0.9046 | 15,919 / 17 / 0.8739 | 26,378 / 27 / 0.9136 | 72.8% |

Source: `raw/imessage/messages-part{1,2}-*.csv`. Years below a few hundred
messages (2011, 2021, 2022) are export residue and are not interpreted.

The log sharpens the stop page's dynamic claim. **2025 is the
highest-volume year in the corpus (41,262 messages) and the most concentrated
year above the evidence floor (two-sided 0.9572)** — the stop page's 0.9576
from its unheld export, reproduced to three decimals. The year the channel was
failing is the year the most traffic was pushed through it. In 2025 Dan wrote
to 22 handles and received from 71. The instrument built to measure one channel
ends up describing how Dan's whole correspondence responds to stress: it
narrows.

**What the stop still cannot answer** is its own falsifier 3 — whether the
concentration is architecture or circumstance (a small county, a narrow social
field). A per-era split is now cheap: the table above already separates the
Uniontown years, the New York cohabitation (2019–2020 in the corpus, thinly)
and the return. It has not been interpreted here because the 2019–2024 hole
removes most of the comparison era.

## Stop 5 — the severance model

[[wiki/mind/synthesis/block-unblock-loop]] models how Dan's relationships end,
or fail to. It was built mainly from the Annie channel's block and unblock
history and it states, in its own words, that it is **not partner-specific**:
the 2014 precedent with [[wiki/people/tom|Tom]] predates Annie by a year, and
the model's controls are other people.

Its numbers have been corrected more than once. The dossier-era figures were
127 exit declarations against 110 re-engagements, an 87% relapse rate. A
primary recount across the 95,067-row merged Annie corpus found **129
episodes** — 258 Dan-sent severance messages, grouped at 24 hours — of which
**128 have a later message and all 128 resumed**. Median time to resumption:
**36 seconds**. 89.1% inside an hour, 99.2% inside a day, longest gap in eleven
years **46 hours** ([`dat:1292`](../../../kb/data/1292-block-unblock-loop-severance-recount-129-128.md);
[[wiki/mind/synthesis/severance-declarations]]). The 87% is withdrawn; the page
still prints both figures, which `dat:1292` records as an internal
inconsistency.

Against that base rate, the model made a real prediction: that the severance
of **1 June 2026** — Dan's own sign-off at 00:27:49 — would hold. It held for
**52 days**, twenty-seven times the longest gap in the preceding decade, and
then failed on 23 July, reopened through [[wiki/people/milo|Milo]], the dog
they co-held — a channel carrying no money, drugs or logistics. The page kept
the failure and rewrote its rule around it: the exit can be executed; the
co-held object is never deleted.

**The prior journey got one control wrong.** It gave
[[wiki/people/kristin|Kristin]] as the held-block case, *"whose severance
survived because no dependency ran through it."* That row is superseded on the
stop page: she attempted contact on 26 August 2026 through Messenger requests
that went unseen, and Dan re-entered the channel on 12 September 2026. The
Kristin row no longer controls for anything. [[wiki/people/menore|Menore]] —
closed by geography with a farewell text on 20 February 2025, no block —
remains the clean no-block control, marked provisional on elapsed time. The
Tom row is provisional the same way.

### The severance sequence, complete as the record holds it

Reproduced from [[wiki/mind/synthesis/severance-declarations]] §The severance
sequence, which is the only dated sequence in the wiki. The 129 individual
episodes are counted there but **not listed on any page**; their row-level
catalog exists only for August–September 2026 (that page's appendix). This is
recorded as a gap below rather than filled.

| Date | Utterance / event | Gap to resumption | Status |
|---|---|---|---|
| 2014-09-10 | To Tom: *"I'm done… not doing this stupid fucking dance"* | 5 days (*"yo looking to purchase"*) | Declaration (pre-Annie proof of grammar) |
| 2015-12-01 | *"Annie Ulmer from now on its just you and me"* | — | Founding rule, positive pole |
| 2015–2026 | 129 episodes, 258 messages (24-hour rule) | Median 36 s; max 46 h | The series |
| 2026-05-18 | To Tom: *"I'm unblocking you for the moment… otherwise fuck you"* | Same day | Declaration in reverse |
| 2026-06-01 00:27 | *"Goodbye forever… sic semper lupanis"* (Dan's; corrected 08-13) | 52 days (27× the prior max) | **Enacted** — failed on the dog, 07-23 |
| 2026-07-26 05:04 | *"whatever goodbye annie"* | 18 min (shortest on record) | Declaration |
| 2026-07-28 11:48 | Parent-email threat announced | 12 h of bargaining; never sent | Declaration (trade-rule case) |
| 2026-08-15→19 | ~25 declarations (*"Goodbye"* × n, *"I'm blocking you then"*, *"This is goodbye forever"* × 2) | 2 s–8 min | Declarations, zero toggles |
| 2026-08-19 | Group-chat clearing; pre-closes the Milo route | Live (patch under test) | Self-aware declaration |
| 2026-08-26 | Claimed block, reported held | 0 s of non-contact (never enacted) | Non-event (retracted 09-11) |
| 2026-08-28→09-07 | Block-claims to Ally (*"since I blocked her"*, *"I just blocked her again"*) | Channel live throughout | Witness-channel declarations |

The stop page draws one more boundary that belongs in the journey: a severance
claim made to a third party is not an episode. On 2025-09-15 Dan told his
sister he had *"finally ended things with annie after a long, slow
relationship death march"* while the channel carried 2,480 messages that week
— the corpus's only third-party "ended things" statement, falsified as a
breakup by the channel record (dat:1555, via
[[wiki/mind/synthesis/block-unblock-loop]] §Ledger boundary).

**How the stop outgrew its target.** The model was built for one relationship
and its final rule — execution and deletion are different operations, and
only the first is available — is stated for all of them. The same pattern
appears on the witness channel in September, when the declarations move from
Annie to Ally.

## What the sequence shows

The original thesis was that each instrument was a correction or a
generalisation of the one before. Read against the stop pages as they stand
now, the sequence shows something more specific.

| Stop | Headline as first built | Current state | How it moved |
|---|---|---|---|
| Node locking | 403 / 1,041 / 2,258 mentions; 77+ nodes | Unchanged; unverifiable here | Not re-derived (source unheld) |
| Read-receipt forensics | Four defects; one worked example | Defects stand; example rescoped; authorship corollary added | Corrected in framing; extended |
| Latency | 9× asymmetry, Annie slower | Retracted; Dan slower in all 6 measured years | Reversed, then re-derived (this page extends to every held year) |
| Single channel | Two-sided 0.959–0.964; four domains | Two-sided withdrawn 09-13, re-derived here at 0.9632; evaluative leg falsified | Withdrawn, then recovered; narrowed to three domains |
| Block/unblock | 127/110, 87%; June severance will hold | 129/128, 100%; prediction failed at 52 days; Kristin row superseded | Re-derived; falsified; kept |

Five instruments, five revisions, no deletions. Two of the revisions ran in
opposite directions on the same kind of error: the latency headline was a
confident number that did not replicate, and the two-sided Gini was a correct
number withdrawn because the check looked in the wrong column. Both errors
were silent. Both were found by going back to the rows. That is the rule
[[wiki/mind/synthesis/read-receipt-forensics]] states for chat.db — instruments
lie quietly, in both directions — applied to the wiki's own instruments.

The generalisation half of the thesis holds, with one exception.
Node locking produced the no-delete concept; read-receipt forensics produced
a class of tooling defect this repository keeps finding in itself; the latency
recut produced the length finding; the concentration measure produced a
model of how the whole correspondence responds to load; the severance model
produced a rule stated for every relationship. The exception is the
single-channel page's evaluative domain, where the concentration did not
generalise — the first counter-instance this journey's own falsifier asked
for, and it was on a stop, not on a new instrument.

## Falsifiers

- **Coincident convergence.** If the five instruments converged on one number
  by accident, the "one structure, five angles" reading would weaken. They do
  not share a number — a Gini, a latency median and a resumption count are not
  commensurable — and that remains the argument that the convergence is
  structural.
- **A stop that does not generalise.** The original falsifier. It has now
  occurred once, inside stop 4 (the evaluative leg). One counter-instance
  narrows the thesis to "most instruments outgrew their target"; a second
  full stop failing to generalise would retire it.
- **A replication that fails.** The two re-derivations on this page (latency
  per year; Gini two-sided) are reproducible from the held corpus with the
  method stated. A re-run on the same files that does not reproduce them
  falsifies this page's corrections, not the stop pages.

## Coverage limits

- **Measured years.** The Annie channel is measured in 2015–2018 and
  2025–2026. 2019–2024 hold seven messages on its handles; no statement about
  those years is made from this corpus.
- **Stop 1's figures and stop 2's counts** rest on sources not held here (the
  Gemini HTML archive; the unfiled 230-row metadata extract).
- **Outbound attribution** uses `chat_identifier`, which names the thread, not
  a recipient. For individual threads these are the same; group threads (362
  outbound rows) are excluded. 4,911 outbound rows carry no thread identifier
  and are unattributed; [`CORPUS_POLICY.md`](../../../CORPUS_POLICY.md) counts
  3,086 unplaceable sent rows by a different rule, and the difference is not
  reconciled here.
- **The AOL-address thread** (3,644 inbound rows) is in the channel's volume
  and out of its latency, because only one side of it is attributable.
- **The 129 episodes** are relayed from the stop page's recount; their
  row-level list is not printed anywhere in the wiki.
- **`RETRACTED.md` §latency-9x-asymmetry**, cited by stop 3, is not present in
  this repository's `RETRACTED.md`; the retraction is documented on the stop
  page itself.
- **Hashes.** The frozen part files hold exactly the 192,140 rows the manifest
  records; their SHA-256 was not compared against `corpus/manifest.json`,
  which describes the single-file form.

## Sources

- Up: [[wiki/meta/journeys/index|Journeys index]].
- Corpus re-derivations (volume, latency, length, Gini): `raw/imessage/messages-part1-2011-2019.csv`, `raw/imessage/messages-part2-2019-2026.csv`, run 2026-09-25 with Python `csv` and `zoneinfo`, UTC stored times converted to America/New_York per [`dat:1802`](../../../kb/data/1802-held-corpus-timestamps-are-utc-not-local.md).
- kb: [`dat:0053`](../../../kb/data/0053-old-wiki-instruments-corrected-each-other.md), [`dat:0078`](../../../kb/data/0078-instrumented-channel-journey-thesis.md), [`dat:0528`](../../../kb/data/0528-contact-gini-inbound-replication-2026-09-09.md), [`dat:0529`](../../../kb/data/0529-contact-gini-per-year-replication.md), [`dat:0531`](../../../kb/data/0531-contact-gini-two-sided-unverifiable.md), [`dat:1292`](../../../kb/data/1292-block-unblock-loop-severance-recount-129-128.md), [`dat:1383`](../../../kb/data/1383-closing-the-set-rule.md).
- Stops: [[wiki/mind/concepts/node-locking]], [[wiki/mind/synthesis/read-receipt-forensics]], [[wiki/mind/synthesis/message-circadian-latency]], [[wiki/mind/synthesis/single-channel]], [[wiki/mind/synthesis/block-unblock-loop]]; supporting: [[wiki/mind/synthesis/severance-declarations]], [[wiki/mind/concepts/contact-gini]], [[wiki/mind/synthesis/closing-the-set]].
- No photographs bear on this journey; none are embedded.
