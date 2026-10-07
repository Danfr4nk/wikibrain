---
domain: mind
page_type: synthesis
status: active
knowledge: earned
tier: major
title: "Read-Receipt Forensics — chat.db Metadata and Its Traps"
aliases: ["read receipts", "date_read", "chat.db metadata"]
tags: [forensic-analysis, digital-footprint]
date_created: 2026-08-09
date_modified: 2026-10-07
changelog:
  - "2026-10-07: Expanded to major tier (>=3,000 words); restructured to canonical template v1."
sources: []
synthesizes:
  - wiki/mind/concepts/forensic-method
  - wiki/timeline/events/august-2026-unmasking
  - wiki/mind/profile/big-five-psychometrics
connections:
  - page: wiki/mind/concepts/reassurance-architecture
    type: instance-of
    claim: "Read-receipt timestamp analysis is the developed form of measurement substituting for reassurance, and it is a strictly worse substitute: it establishes that she was awake and cannot establish that the rule still holds."
  - page: wiki/mind/concepts/forensic-method
    type: component-of
    claim: "Three instrument-level defects found in a single extraction session, each of which silently produces a confident wrong answer rather than an error — the failure mode the method is least protected against."
  - page: wiki/timeline/events/august-2026-unmasking
    type: supplies
    claim: "Every wakefulness claim on that page depends on the directional asymmetry defined here; read the column as one thing and the same data yields the opposite conclusion."
  - page: wiki/timeline/events/august-2026-unmasking
    type: evidences
    claim: "Every claim about her wakefulness rests on chat.db date_read values whose directional asymmetry that page defines; read the wrong way the same column produces the opposite conclusion."
  - page: wiki/mind/profile/big-five-psychometrics
    type: caused-by
    claim: "This page's own reassurance-architecture citation — read-receipt analysis as 'measurement substituting for reassurance' — is one hop from its actual source: Trust at the 9th percentile, corpus-confirmed at 1.96x raised suspicion, is why a confirmation does not carry forward and a device-level metadata query gets run in the first place. Named directly here rather than left implicit."
  - { target: "[[wiki/mind/synthesis/instrument-is-subject]]", type: contextualizes, claim: "The instrument-is-subject page sets the evidentiary standard this forensic method has to meet." }
  - { target: "[[wiki/mind/synthesis/the-unbroken-bond]]", type: references, claim: "The unmasking case at the heart of M4 unfolded inside the bond the unbroken-bond page describes." }
  - page: wiki/self/message-corpora/source-coverage-index
    type: instantiates
    claim: "Read-receipt forensics is the worked instance of the coverage index's standing warning: an instrument returning a confident answer its extraction silently corrupted — date_read read the wrong way yields the opposite conclusion with no error raised."
  - page: wiki/mind/synthesis/message-circadian-latency
    type: parallels
    claim: "Read-receipt forensics is a timestamp cut of the message corpus parallel to the latency page: it defines date_read's directional asymmetry in chat.db, while the latency page measures reply timing from the same message rows."

---

# Read-Receipt Forensics — chat.db Metadata and Its Traps

On the night of August 8–9, 2026, Dan ran a metadata extraction directly against his own macOS Messages database and read the result as a behavioural instrument: 230 rows of the Annie 212 thread, 24 hours, with the columns Apple keeps but no client ever shows — `date_read`, `date_delivered`, `reply_to_guid`, `thread_originator_guid`. The question he was trying to settle was a physical one: was she awake. The answer the timestamps returned shaped the night that followed, and that night is why the unmasking page carries the alias "the read-receipt night."

What this page records is not the night itself but the four defects found inside the instrument during the single session that ran it. Three of them share a failure mode that is rare in this repository and worth its own page: each one **silently produces a confident wrong answer rather than an error**. A zero-row result reads as a finding. A directional column reads as undirectional. An auto-populated field reads as intentional. Nothing raises. The forensic method's exposure is not to hard failures — it is to instruments that lie quietly, and that lie in the direction of whatever is already suspected.

> **Sourcing note.** The 2026-08-09 session ran against the operator's local `chat.db`, not against an export filed in this repository's `raw/`. The derived table this page's counts are drawn from — the 230-row `annie_metadata_24h.csv` extract, with the method and its traps described below — has not been filed as of 2026-10-07 (`raw/self/message-csv/` on main currently holds only the separate `aug-sep-2026-imessage-export` family). `sources:` is left empty rather than pointing at a file that does not exist on disk, per `bin/wiki-lint`'s source check. Filing that export is the standing open item. Treat every figure below as derived from that pending source.

## The night the instrument was run

The unmasking page's figures are recomputed from the 230-row extract (ROWID 228148–228378) and depend entirely on the column semantics this page defines. In compressed form, the record is:

**Read-receipt coverage (hers, on his messages).** First receipt 2026-08-08 23:10:40, last 2026-08-09 02:24:54. Before the window: 64 sent messages, 0 receipts. After: 2 sent messages, 0 receipts. Inside the window, her read latency on 44 reads runs a median of 0 seconds, with 34 of 44 reads landing in ≤2 seconds — a phone in a hand, thread live. Merged with her outbound sends, the largest gaps in her activity are 23:23:57 → 00:26:49 (62.9 min), 01:04:19 → 02:24:54 (80.6 min), and 02:25:52 → 03:41:32 (75.7 min). Volume from 19:30 to 00:30 runs 44 of his messages against 18 of hers at a 24.6:1 character ratio (4,697 vs 191), her median message length 8 characters.

**What the receipts were made to decide.** The sleep claims entered the conversation at 00:28:56 and were tested against the gaps: four of the five sleep statements were authored mid-burst at zero-second read latency and fail; the fifth, "I seriously did fall asleep?" at 03:41:32, follows the genuine 75.7-minute absence and is likely literally true. The eight-timestamp list presented at 00:30:43 as the product of "the research" verifies 8/8 against her own outbound message times — but the claim it was supposed to falsify had been made two minutes after the list's window closed, and each listed moment was her sending one- and two-word fragments, not claiming sleep. The page's surviving finding is not a lie about sleep but a refusal to narrow: a defensible 63-minute window existed in the record (23:23:57 → 00:26:49) and was never invoked across three explicit invitations. And one thing the receipts could not settle stayed unsettled: whether receipts were toggled off at ~02:25 — fifty-eight seconds after his "I see you figured out that you had read receipts on" at 02:01:59 — or the thread was simply left unopened. The `reply_to_guid` argument that would have decided it is void, per M2 below.

**The directional asymmetry is load-bearing for all of this.** Read the `date_read` column as one undifferentiated thing and the conclusion is that the counterparty was continuously active all day. She was not visible at all before 23:10:40. Half the column is a log of the operator's own behaviour. That is M1, and it is the fact this page exists to prevent forgetting.

## M1 — `date_read` is directional and asymmetric

The single most consequential fact about the column, and it is not documented anywhere obvious.

```
ON is_from_me = 1  (messages you SENT)
    date_read = when THE OTHER PARTY opened your message.
    Requires THEIR read receipts to be ON. Absent entirely otherwise.

ON is_from_me = 0  (messages you RECEIVED)
    date_read = when YOU opened their message.
    Recorded LOCALLY, ALWAYS, regardless of anyone's settings.
```

Observed in the 2026-08-08/09 extract:

```
RECEIVED rows with date_read :  81 / 101   (all of them are Dan)
SENT     rows with date_read :  44 / 129   (all of them are her)
```

Two asymmetries are stacked here and only the first is the famous one. The first: on received rows, `date_read` is the operator reading her messages — logged locally, always, nothing to do with her settings. The second, quieter one: on sent rows, `date_read` exists only if *her* read receipts are on, which makes the column's population on that side a behavioural fact about the counterparty's configuration, not a neutral timestamp. Sixty-four of his sent messages before 23:10:40 carry no receipt at all. That absence is not evidence she was not looking — it is evidence of nothing either way, because the column cannot distinguish "receipts off" from "thread unopened."

The trap is aggregation. Summarised across directions, the column says *someone* opened *something* 125 times in a day, and the natural reading is counterparty activity. Split by `is_from_me`, the picture is the operator reading her messages all afternoon and her visible only in a three-and-a-quarter-hour window starting at 23:10:40. Same data, opposite conclusion, no error raised.

**Rule:** always split by `is_from_me` before computing any latency statistic. Never aggregate across directions. Every wakefulness claim on the unmasking page depends on this rule; read the column as one thing and the same data yields the opposite conclusion.

## M2 — `reply_to_guid` is not a reply marker

```
reply_to_guid == guid of the immediately preceding message :  179 / 181
reply_to_guid pointing anywhere else (a true inline reply) :    2 / 181
thread_originator_guid populated (the real marker)         :    2 / 230
```

`reply_to_guid` is **auto-populated with the previous message in the thread.** It carries no intent. The genuine inline-reply marker is `thread_originator_guid`.

**Consequence:** any argument of the form *"she replied inline to message X, therefore she had the thread open, therefore the absence of a read receipt means she disabled them"* is **void**. That argument was built and then withdrawn during the 2026-08-09 session — one of the session's three confident-wrong intermediate conclusions, caught and killed inside the same session rather than published.

**Action owed (standing):** audit the corpus for prior analysis that treated `reply_to_guid` as intentional threading. Any such claim needs rechecking. This is the only one of the four defects whose blast radius extends beyond the session: M1 and M3 corrupt queries, M2 corrupts *interpretations already written*. The unmasking page holds one open question — receipts toggled off at ~02:25 or thread left unopened — that the voided argument would have settled, and it is left explicitly undetermined rather than filled in. That restraint is the page's demonstration that the rule is real rather than decorative.

## M3 — SQLite type-affinity trap

`strftime('%s', ...)` returns **TEXT**. When compared against a **computed expression** — which carries no column affinity — SQLite ranks INTEGER below TEXT unconditionally, so the predicate is **silently false for every row**.

Reproduced directly:

```
expression >= strftime('%s','now','-24 hours')                 →  0 rows
expression >= CAST(strftime('%s','now','-24 hours') AS INTEGER) →  1 row
```

This produced a zero-byte export that initially read as a substantive finding about the data rather than a bug in the query. No error was raised. The failure is worth stating plainly because of what it exploits: a zero-row result is the one output that *looks* like a conclusion rather than a failure. An exception interrupts you; an empty file confirms you. The session initially treated it as evidence — something the data did not contain — before the query was checked.

**Canonical form** — cast explicitly, and keep the arithmetic on the right so the index on `m.date` is usable:

```sql
AND m.date >= (CAST(strftime('%s','now','-24 hours') AS INTEGER) - 978307200) * 1000000000
```

Note also that a column *with* INTEGER affinity coerces the TEXT operand correctly, so the same comparison works in one query and fails in another. That inconsistency is what makes it dangerous: the pattern is learned on a query where it works, then applied where it silently doesn't. Portability is the trap.

## M4 — Absence of metadata is weak evidence in this corpus

```
SENT rows with NO delivered_at at all :  41 / 129
```

Clustered rather than random — a device-sync artifact (Mac vs. phone), not a signal about the counterparty. **Any argument from a missing timestamp must carry this caveat.** The record is incomplete by construction.

M4 is the least mechanical of the four and the one whose reach kept growing after the session. In the session it meant: do not argue from a missing `delivered_at` that something failed to deliver. By 2026-08-20 it had a harder case one level up: **the presence of a signal does not identify its author** — which is the subject of the next section. The principle is the same at both levels: the absence of a signal is weak evidence, and so is its presence, when the instrument cannot see who or what produced it.

## The higher-order case: a receipt proves a device was unlocked, not who was holding it

At least six inbound rows on Annie's 212 handle across July–August 2026 were typed by Jerel Coles holding her phone, in three separate episodes, all during crises. The coverage index files the register:

| Date | Rows |
|---|---|
| 2026-07-26 05:39–05:57 | "The cuck never gives up" · "Had her fuck old men for drugs" · the "video proof" accusation |
| 2026-08-16 23:42–23:53 | "She's a slut hahahahaja" · "Scared to answer" · "You made me fuck guys for money" · "Call her" · "You think I care ?" |
| 2026-08-18 21:46–21:50 | "She's with me man chill lmfao" · "Still moaning" · "No body cares junkie" · "Do you wanna talk to her answer 😂😂😂" |

The August 16 episode is independently closed: the recording documents Coles audible on a live call from her phone at ~23:37, and he types on her handle minutes later — "She's a slut hahahahaja" at 23:42:57, "Scared to answer" at 23:43:48, "You made me fuck guys for money" at 23:45:10, then "Call her" / "You think I care ?" at 23:53 — the same dare he makes aloud on the tape. The Morgantown page notes that one analysis applied the attribution rule to the accusations and then dropped it one exchange later, attributing the 23:53 messages to Annie with its own transcript showing otherwise.

There is no column for this. Read-receipt analysis is especially exposed to it, because a receipt proves a *device* was unlocked and looking — and this corpus now contains documented periods in which the person holding that device was not its owner. The distribution is the worst possible: the handle is least reliable exactly where the corpus's highest-stakes claims are drawn from, because all three episodes occur during crises. Note the interaction with M1: the directional asymmetry lets you establish *that she was awake* from sent-side receipts; the third-party episodes establish that *awake* does not resolve to *her*. Two different people can satisfy "awake" on the same device, and the metadata cannot tell you which.

The practical consequence is a fourth preflight question for the source coverage index's standard three — not just *what window*, *what handles*, *what columns*, but **who else had physical access to the device in this window**. For an iMessage corpus that question has no column and can only be answered from content; the three episodes above were each identifiable from register alone, and whether earlier ones exist has not been checked — the only detector available is register.

**Recommended addition to the extraction recipe, unimplemented.** Before drawing a behavioural inference from device-level metadata in any window, check whether the window overlaps a known third-party-access episode. The three known ones are 2026-07-26 05:39–05:57, 2026-08-16 23:42–23:53 and 2026-08-18 21:46–21:50. This was written as a recommendation in the 2026-08-20 re-check and has not been implemented since.

## Why the queries get run

This page's own prior citation — read-receipt analysis as "measurement substituting for reassurance," via the reassurance architecture — names the mechanism without naming its source. The 2026-08-28 constitution pass made the one hop explicit: [[wiki/mind/profile/big-five-psychometrics]]'s **Trust at the 9th percentile**, corpus-confirmed at **1.96x raised suspicion language**, is why a confirmation does not carry forward as a prior and a device-metadata query gets run in the first place. The reassurance page phrases it as "confirmations do not carry as priors: each check-in's result decays, so the loop must re-run." The read-receipt query is the loop's developed form — and, as the connection claims, a strictly worse substitute: it establishes that she was awake, and it cannot establish that the rule still holds.

The distinction matters because it separates what the instrument measures from what it is being asked to prove. `date_read` on a sent row can establish that a device was opened within seconds of a message arriving — the median-0s window, 34 of 44 reads in ≤2 seconds, is as good as this kind of evidence gets. What it is asked to prove, on nights like August 8–9, is wakefulness as a proxy for contact with the third party, and then contact as a proxy for the story. Each hop is weaker than the last, and the last one has a documented confound (the phone in someone else's hand). The profile reading does not excuse the inference and does not invalidate the instrument; it explains why, when a verbal confirmation decays, the next step is a database query rather than another question. The reassurance architecture's negative finding is relevant here too: across eleven years of his outbound text there are zero "do you love me" / "are we ok" / "am i crazy" / "i cant do this" against hundreds of procedural requests — "call me," "you up," "you there." He does not ask for compliments; he asks for a channel. Read-receipt forensics is the channel asked to testify.

## Placement: the instrument's kin and the extraction recipe

This page's closest sibling is [[wiki/mind/synthesis/message-circadian-latency]]: a timestamp cut of the same corpus running the orthogonal instrument. The latency page measures reply timing and, after its 2026-08-23 correction, holds that Annie answered faster than Dan in every year from 2015 through the final weeks of 2026 — 2026 at 15 seconds against his 27. Read-receipt forensics measures what a single metadata column can and cannot establish about wakefulness. The two are consistent rather than redundant: she could be the faster correspondent *and* the median-0s reader on a given night; the latency series covers years, the receipt window covers hours. Both are cuts of `message` rows; neither borrows authority from the other.

The page is also the worked instance of the source coverage index's standing warning: an instrument returning a confident answer its extraction silently corrupted. The coverage index's own catalog extends the taxonomy this page starts — sources that cannot attribute (22 of 52 with no handle column), four empty sources cited but carrying nothing, eighteen sources whose filenames overstate their coverage — and its standing rule sharpens M4's: every claim dated after 2025-08-10 carries exposure, because the one dump whose direction field is trustworthy ends 2025-08-10 and the designated instrument reports post-date absence as zero matches rather than an error. The final trap the index found on 2026-08-20 is the one this page's higher-order case is built on: a handle is not a person.

And within the forensic method, this page supplies the flagship exhibit for the method's named failure class. `kb/patterns/partial-data-confident-error.md` states it generally — incomplete evidence does not announce itself as incomplete, it yields conclusions carrying the confidence of well-founded ones. The forensic-method page applies it to this session directly: "a single extraction session against chat.db produced four defects, three yielding confident wrong intermediate conclusions with no error raised." The direction-of-suspicion clause is the part that generalises least and warns most: the instruments did not lie randomly; they lied toward the interpretation already on the table.

## Extraction recipe

Full-metadata pull for a single handle, macOS. Copy the database first — reading it live risks a lock, and the `-wal` file holds messages not yet checkpointed into the main file.

```bash
cp ~/Library/Messages/chat.db* /tmp/ ; sqlite3 -header -csv /tmp/chat.db "
SELECT datetime(m.date/1000000000+978307200,'unixepoch','localtime') sent_at,
  CASE m.is_from_me WHEN 1 THEN 'SENT' ELSE 'RECEIVED' END direction,
  CASE WHEN m.date_delivered>0 THEN datetime(m.date_delivered/1000000000+978307200,'unixepoch','localtime') END delivered_at,
  CASE WHEN m.date_read>0 THEN datetime(m.date_read/1000000000+978307200,'unixepoch','localtime') END read_at,
  CASE WHEN m.date_read>0 THEN (m.date_read-m.date)/1000000000 END secs_to_read,
  m.is_read, m.is_delivered, m.is_sent, m.is_delayed, m.error, m.item_type,
  m.associated_message_type, m.thread_originator_guid, m.service, m.guid, m.ROWID,
  COALESCE(m.text,'') text
FROM message m
WHERE m.ROWID IN (SELECT message_id FROM chat_message_join WHERE chat_id IN
   (SELECT chat_id FROM chat_handle_join WHERE handle_id IN (<ROWIDs>)))
AND m.date >= (CAST(strftime('%s','now','-24 hours') AS INTEGER)-978307200)*1000000000
ORDER BY m.date;" > ~/Desktop/out.csv
```

Resolve handle ROWIDs first — a contact may have several, and a `LIKE '%digits%'` pattern will sweep in unrelated numbers:

```bash
sqlite3 /tmp/chat.db "SELECT ROWID, id FROM handle WHERE id LIKE '%<digits>%';"
```

Requires **Full Disk Access** on the terminal. Without it the `cp` fails; do not suppress its stderr, or the failure presents as an empty result set — another member of the zero-row-reads-as-finding family.

`m.text` is NULL for most recent messages on Monterey — the body lives in `attributedBody` as a serialised `NSAttributedString`. This extract is for metadata; pull text separately and join on timestamp.

Two recipe-level limits carried from the sessions since: `secs_to_read` inherits M1's asymmetry (on received rows it measures the operator, not the counterparty — split before computing), and the window inherits M4's scope artifact (absence of traffic at an extraction window's edge looks like absence of traffic, which the 2026-08-20 re-check found applied to a page's *framing*, not just a row).

## Conflicts in the record

- **2026-08-18 — premise moved, conclusion unaffected and slightly strengthened.** [[wiki/mind/concepts/forensic-method]] moved: its claim that the July 2026 Leviathan dashboards were the method's first outward deployment was corrected to 2025-07-11 ([[wiki/timeline/events/james-analysis-pdf]]), and it gained a terminal step, [[wiki/mind/concepts/the-handed-mirror]]. Neither touches this page, which is about four defects in `chat.db` metadata extraction and the class of error they produce. The correction is in fact the same species of finding at a different level: a confident wrong answer that raised no error, held for two months because a cited source had been read to eleven percent of its length. The instrument that lied quietly there was a reading pass rather than a query.
- **2026-08-20 — scope correction on the worked example.** The unmasking page framed August 8–9 as ending with an unanswered message at 03:41:32. The fuller export filed 2026-08-20 shows the exchange resumed at 08:19 the same morning and ran all day. That is a scope artifact of the 24-hour metadata extract, not an error in the method — but it is exactly the failure mode **M4** warns about, applied to a page's *framing* rather than to a single row: the absence of traffic at the edge of an extraction window looks like the absence of traffic.
- **2026-08-20 — M4 gains its strongest case.** The August 16–19 window supplies a harder version of M4's lesson one level up: **the presence of a signal does not identify its author.** At least six inbound rows on the 212 handle across July–August 2026 were typed by Coles holding her phone in three episodes (2026-07-26 05:39–05:57, 2026-08-16 23:42–23:53, 2026-08-18 21:46–21:50), all during crises. One is an accusation of sexual exploitation against Dan that a naive read files as Annie's own testimony. The recommended extraction-recipe addition (check third-party-access overlap before drawing behavioural inferences) remains unimplemented.
- **2026-08-23 — premise moved by one typed edge, conclusion unaffected.** [[wiki/mind/concepts/forensic-method]] gained an `instance-of` edge on 2026-08-23 into [[wiki/mind/profile/texting-deviance-audit]]. No content this page depends on changed. The new instance rhymes with this page's subject: the audit's decisive move was a control that disconfirmed the hypothesis being tested — Dan's *first* messages in a turn start lowercase at the same rate as his continuations, so the lowercase opener is habit, not sentence-fragmentation. That is the same class of check whose absence produced the four `chat.db` defects catalogued here.
- **2026-08-26 — premise moved by one typed edge, conclusion unaffected.** [[wiki/mind/concepts/forensic-method]] gained an `instance-of` edge into the new [[wiki/mind/profile/lexicon]] page — the same evidence-cite/authority-invoke/render-a-finding machinery documented there for crisis analysis, observed running on a compliment instead. Nothing about `chat.db` metadata extraction is downstream of that finding.
- **2026-08-28 — the constitution pass.** Run against the eleven registers in `SYNTHESIS_SPEC.md`. Register 2 (personality profile) moved the conclusion: Trust at the 9th percentile, corpus-confirmed at 1.96x raised suspicion, is the one hop the page's reassurance-architecture citation left implicit — a confirmation that doesn't carry forward as a prior is why a device-metadata query gets run in the first place, and it is now named rather than gestured at. Registers 1, 3–11 were checked and do not bear on a page whose four defects are properties of a database schema; the pass recorded this explicitly rather than manufacturing a fit. What survived: all four defects, the recipe, every re-check — none required a profile-layer citation to stand. What it did not do: manufacture a cognitive-stack connection to a page whose actual content is a SQL type-coercion bug.
- **2026-10-07 — the filing open item stands.** The original page flagged the missing `annie_metadata_24h.csv` filing in the wiki's queue; the queue pointer's root-level target was not found on main as of this restructure, and `raw/self/message-csv/` still holds only the separate `aug-sep-2026-imessage-export` family. The standing open items are unchanged from 2026-08-09: file the extract, and audit prior corpus analyses that used `reply_to_guid` as a threading signal.

## Assessment

The record supports the page's core judgment, and it supports it in the strongest register this wiki has: the defects are properties of the database schema, not of any interpretation, so no profile-layer citation was needed for them to stand. What earns this a page rather than a footnote is the failure mode — three of four defects produced confident and wrong intermediate conclusions inside one session with no error raised, and each of the three lied in the direction of what was already suspected. The forensic method's exposure is to instruments that lie quietly; the session that found all four in one night is the reason the method page names the exposure in those exact words.

Two caveats survive at the level of the method's own honesty rules. The receipt column's directional asymmetry lets the analyst establish that a device was awake; the third-party episodes establish that *awake* does not resolve to *her* — so the worked case's central finding carries a permanent attribution asterisk the metadata cannot close. And the recommendation the 2026-08-20 re-check wrote down — check third-party-access overlap before drawing behavioural inferences from device-level metadata — is still unimplemented, which means the page's strongest practical safeguard is the one it does not yet enforce.

## See also

- [[wiki/timeline/events/august-2026-unmasking]] — the night the instrument was run; "the read-receipt night."
- [[wiki/timeline/events/august-2026-morgantown-call]] — the August 16 episode that settled the third-party-access question.
- [[wiki/mind/concepts/forensic-method]] — the failure class this page exemplifies: instruments that lie quietly.
- [[wiki/mind/concepts/reassurance-architecture]] — why the queries get run: measurement substituting for reassurance.
- [[wiki/mind/synthesis/message-circadian-latency]] — the parallel timestamp cut: reply timing across years.
- [[wiki/self/message-corpora/source-coverage-index]] — the trap taxonomy this page instantiates; "a handle is not a person."
- [[wiki/mind/synthesis/instrument-is-subject]] — the evidentiary standard this forensic method has to meet.
- [[wiki/people/jerel-coles]] — the third party behind the third-party-access episodes.

## References

- `wiki/timeline/events/august-2026-unmasking.md` — the worked case; all worked-case figures (coverage window, latencies, gaps, volume, sleep-claim tests) recomputed from the 230-row extract; carries the sourcing note on the unfiled exports.
- `wiki/timeline/events/august-2026-morgantown-call.md` — the August 16, 2026 episode: Coles audible on a live call and typing on her handle, closing the third-party-access question.
- `wiki/mind/concepts/forensic-method.md` — the failure class ("silently produce a confident wrong answer rather than an error") and its partial-data lineage (`kb/patterns/partial-data-confident-error.md`).
- `wiki/mind/concepts/reassurance-architecture.md` — "measurement substituting for reassurance"; the zero-canonical-questions negative finding and the procedural register.
- `wiki/mind/profile/big-five-psychometrics.md` — Trust at the 9th percentile, corpus-audited at 1.96x raised suspicion language (dat:0890).
- `wiki/self/message-corpora/source-coverage-index.md` — the three documented Coles-access episodes; "a handle is not a person"; the trap taxonomy (unattributable, empty, and over-named sources).
- `wiki/mind/synthesis/message-circadian-latency.md` — the parallel timestamp cut; the 2026-08-23 correction (she answered faster than Dan in every year, 2015–2026).
- `wiki/mind/synthesis/instrument-is-subject.md` — the evidentiary standard; residue versus testimony grading.
- Unresolved-source warning, carried forward: the 230-row `annie_metadata_24h.csv` extract and the same-day 212 thread export named by the unmasking page have not been filed to `raw/` as of 2026-10-07. All figures derived from them are marked accordingly.
