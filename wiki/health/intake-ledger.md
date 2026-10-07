---
domain: health
page_type: dataset
title: "The Intake Ledger"
aliases: ["intake ledger", "the ledger", "intake record"]
status: active
importance: high
knowledge: derived
date_created: 2026-08-31
date_modified: 2026-10-07
tier: major
changelog:
  - date: 2026-10-07
    note: "Expanded to major tier and restructured to canonical article template v1: story-first lede, narrative body sections, Corrections folded into the reading of the log, limits folded into the epistemology section, Conflicts in the record placed low, Assessment added. No ledger figure was hand-edited — every number and table is carried over unchanged from intake/events.jsonl; the expansion adds interpretation, not data."
chart:
  kind: bar
  title: "Intake events by hour of day, whole ledger"
  x: { label: "Hour (local)", type: category }
  y: { label: "Events logged", type: number }
  series:
    - name: "Logged events"
      points:
        "00": 2
        "01": 0
        "02": 2
        "03": 0
        "04": 0
        "05": 0
        "06": 0
        "07": 0
        "08": 0
        "09": 0
        "10": 0
        "11": 0
        "12": 0
        "13": 0
        "14": 0
        "15": 0
        "16": 0
        "17": 0
        "18": 0
        "19": 0
        "20": 2
        "21": 0
        "22": 2
        "23": 1
sources:
  - intake/events.jsonl
  - raw/health/intake/intake_unit_01M1AJ47K2HKZ8TZZ75CPNGFJ7.md
  - raw/health/intake/intake_unit_01M1AS32B01HGPPF276RK4M7SE.md
  - raw/health/intake/intake_unit_01M1B1QNV7J0YC01MVHR2A1936.md
  - raw/health/intake/intake_unit_01M1B8GCGVKYT6RG453B89K2JY.md
connections:
  - page: wiki/health/cocaine
    type: evidenced-by
    claim: "The ledger is the first-party dated record the cocaine page's measured-night section is drawn from; the dosage arc above that section is self-report and this is not."
  - page: wiki/health/chemical-architecture
    type: evidenced-by
    claim: "Supplies the first dated measurement behind the two rows of the stack table marked Daily — cocaine and cannabis — which were otherwise description taken from Dan's own account of his system."
---

# The Intake Ledger

[[wiki/health/index|health]] · [[wiki/health/cocaine|Cocaine]] · [[wiki/health/chemical-architecture|Chemical Architecture]] · [[wiki/health/the-configured-body|The Configured Body]]

_The figures and tables on this page are generated from `intake/events.jsonl` —
the append-only log is the record and this page is derived from it. Nothing
below has been hand-edited; the narrative sections added 2026-10-07 interpret
the log without changing a number._

Dan Frank has used cocaine for roughly twenty years and cannabis daily for
longer, and until the night of 2026-08-30 every number the wiki holds about
that use is recollection — dosage bands reconstructed after the fact, from
memory, by the same mind the substances act on. Prose recollection of
consumption is the least reliable testimony a person gives about themselves,
and Dan knows it; so on that evening he opened a ledger on his phone and
started writing quantities down as they happened, to the tenth of a gram,
with a reconciliation step that refuses to close a unit while any quantity
is unaccounted for. What came out of it was one cocaine unit consumed
end to end across nine and a half hours — six doses, 0.75 grams, fully
reconciled — plus three single-serve cannabis units logged inside the same
window, and then, after one next-day batch of corrections, silence. The
instrument has not logged a single event since.

That is the whole record: 20 log events, 9 intake events, one night, no
second night. Its smallness is part of what makes it worth a major page.
In a corpus of thousands of messages and hundreds of thousands of words of
self-analysis, this is the only place where intake was measured while it
happened rather than remembered afterwards — and the wiki's two most
quantitative health pages now cite it as exactly that. [[wiki/health/cocaine|Cocaine]]
draws its "first measured night" section from this ledger and sets it
explicitly against the self-reported dosage arc, noting that the arc above
that section is Dan's account and the ledger is not.
[[wiki/health/chemical-architecture|Chemical Architecture]] draws the first
dated measurement behind its stack table's cocaine and cannabis rows from the
same source. The ledger itself states no finding and argues nothing; it is
evidence, sitting beside the pages that describe the same behaviour from
memory, and this page is a reading of that evidence — what it records, what
it withholds, what the act of keeping it reveals, and what its silence since
costs.

## Why this instrument exists

The premise is stated in one line and needs no embellishment: when the
question is how much of a substance a person consumed and when, the person's
own later account is the worst instrument available. Memory of consumption
is reconstructive, and reconstructive memory of *one's own* consumption is
reconstructive under motive — to undercount, to round, to land inside a
story about the night rather than inside the night. The intake ledger is a
counter-instrument: a dated, append-only, first-party log kept on a phone in
the room where the intake happened, where an event is a timestamp and a
quantity and nothing else.

That design choice is visible in everything the log contains and everything
it refuses to contain. There is no mood rating, no "why," no context field
beyond an optional note (every note in the record is null). There is no
narrative at all. What it keeps is the skeleton of consumption: a unit is
opened with a substance and a quantity; intakes are logged against it with
quantities; the unit closes with a disposition and a reconciliation. The
findings drawn from it live elsewhere — on [[wiki/health/cocaine]] and
[[wiki/health/chemical-architecture]], cited back to the unit ids. This page
is the ledger's own account of itself: the machinery, the one night it
ran, the corrections made to it, and the limits that travel with every
figure it prints.

The instrument's premise also explains its most quoted design property:
nothing here is ever edited in place. A mistyped value becomes a new
record naming the original, the correction, and the reason — so the ledger
shows the corrected figure while the log remembers both, and *that* a
correction was needed is itself evidence about how the logging happens.
This is forensic bookkeeping borrowed from double-entry traditions: the
audit trail is part of the data, and a log that can be silently fixed is
worth less than a log that visibly repairs itself. The three corrections
on this log are read in full in [The corrections as evidence](#the-corrections-as-evidence)
below.

## The log's machinery: units, events, reconciliation

Everything in the log is one of four event types. A `unit_created` event
opens a unit with a substance, a quantity, and a unit of measure. An
`intake_logged` event records consumption against a unit with a quantity, a
`measurement_type` (`measured` or `estimated`), and, for estimates, a
confidence. A `unit_closed` event ends a unit with a disposition — here,
always `consumed` — and a reconciliation. An `event_corrected` event names a
prior event and fields to replace, with a reason. Twenty such events
make up the entire record: 4 unit creations, 9 intakes, 4 unit closures, and
3 corrections. The contrast the machinery makes visible is between the three
cannabis units (opened, consumed, and closed inside the same second) and the one
cocaine unit, which stayed open for 9 hours 31 minutes and accumulated six
intakes before closing.

The reconciliation is the ledger's hardest feature. When a unit closes, the
log records whether the books balanced — whether everything the unit was
opened with is accounted for in logged intakes — and if not, what happened
to the remainder, as a recorded decision rather than a silent subtraction.
All four units on this log reconciled `balanced`, with zero unaccounted and
nothing overdrawn. That matters because a balanced unit is a stronger claim
than a totalled one: it says not only "this much was consumed" but "and
nothing else left the bag unrecorded." The one cocaine unit reconciled
balanced to the tenth of a gram across six doses — 0.1 + 0.1 + 0.1 + 0.1 +
0.1 + 0.25 = 0.75 — which is exactly the quantity it was opened with.

The `measured` versus `estimated` distinction deserves care, because the
log's honesty runs on it and its optimism runs through it. `measured` is a
claim made at entry — it says the number came off a scale — and it is not a
guarantee. Where a quantity exactly matches one of the one-tap presets in
the portal's substance catalog, it was plausibly a tap rather than a
weighing: four of the six cocaine events carry exactly 0.1 g, and the
[[wiki/health/cocaine|Cocaine]] page's measured-night section notes that 0.1 g
is the value of the portal's `ONE LINE` preset, defined in the substance
catalog as *estimated, low confidence* ("by eye, the widest-spread estimate
here") — they reached the log flagged `measured` anyway. The 100%
coverage figure the ledger prints is therefore honest about how many events
carry a number and optimistic about where those numbers came from. The
[[wiki/health/the-configured-body|configured-body]] re-check of 2026-08-31
says the same thing in one clause: the unit "reconciled with nothing
unaccounted for, and four of the six cocaine doses were entered through a
one-tap preset that fills in 0.1 g, so the record is less exactly weighed
than its coverage figure suggests."

**Coverage discipline.** Every event on this log carries a quantity — 9 of
9, zero logged without one — so the coverage note has never had to do real
work. It is stated here because it will matter the moment the log has an
event without a number: events logged without a quantity are real events,
counted toward totals, timing, and clustering, and excluded from every
quantity figure. A mean over some of the events is never cited as a mean
over all of them.

## The record, at a glance

| | |
|---|---|
| Units opened | 4 (4 closed) |
| Intake events | 9 |
| Carrying a quantity | 9 |
| Logged without one | 0 |
| Corrections on the log | 3 |
| First unit received | 2026-08-30 |
| Most recent activity | 2026-08-31 |

**Coverage: every event carries a quantity.** Events logged without a number are real events — they
count toward totals, timing and clustering — and they are excluded from every
quantity figure on this page. A mean over some of the events is never cited as
a mean over all of them.
## The night of 2026-08-30/31

The ledger's entire intake history is one night: Sunday, August 30 into
Monday morning, August 31, 2026. Four units, nine intake events, spanning
from a cocaine unit received at 17:04 to a cannabis unit closed at 02:36.
The sections below walk it in order — the one measured night the wiki's
quantitative health writing now rests against.

### Unit #1: the cocaine unit

`intake_unit_01M1AJ47K2HKZ8TZZ75CPNGFJ7` — 0.75 g of cocaine, received
2026-08-30 17:04, closed 2026-08-31 02:35, disposition *consumed*,
reconciled balanced with nothing unaccounted for. Duration received to
close: 9 hours 31 minutes. Six intake events: four flagged measured, two
estimated, zero unquantified. Quantified intake: 0.75 g (0.4 g measured,
0.35 g estimated). Median dose 0.1 g, mean 0.125 g, largest dose 0.25 g —
and the largest dose is the last one. Median interval 1h 07m, mean 1h 18m,
dose variability 0.49 CV. The peak window runs August 30, 8pm to midnight:
five of the six events inside five hours. Coverage: 6 of 6 events carry a
quantity.

The shape of the night is front-loaded and then closed out. Two doses of
0.1 g at 20:05 — eleven seconds apart — then 0.1 g at 22:05, 0.1 g at
23:12, 0.1 g at 00:01, a two-and-a-half-hour gap, and a single 0.25 g at
02:35 that finished the unit; the close event followed thirteen seconds
later. That thirteen-second gap between the last intake and the close is
the log's cleanest behavioral signature: the final dose was sized to
finish the bag. Nothing was left to carry forward, and the reconciliation
confirms nothing did.

Two features of the log's own metadata deserve attention, because they
concern how the night reached the record rather than what the night
contained. First, the unit was *received* at 17:04 but *entered the log*
at 20:04:54 — `occurred_at` 2026-08-30T17:04:00-04:00 against a log
`timestamp` of 2026-08-30T20:04:54-04:00. The ledger's opening act is a
~3-hour retroactive entry: the bag existed for three hours before the
instrument knew about it, and the unit's birth in the log comes seventeen
seconds before the first intake event at 20:05:11. The practical reading
is mundane — he received the unit, logged nothing while settling in, then
opened the ledger and backfilled the receipt moments before the first
dose — but the consequence is real: the balanced reconciliation covers
what the log saw, and the log did not see the three hours after receipt.
If anything was consumed in that window, it is outside the instrument's
reach by construction, and the 0.75 g "opened with" figure is itself an
entry-time claim, not a contemporaneous one.

Second, the 20:05 double-log: two events at 20:05:11 and 20:05:18 — seven
seconds apart — both 0.1 g, the first flagged estimated (medium
confidence) and the second flagged measured. Two readings are possible.
One: two separate lines taken seven seconds apart, both 0.1 g. Two: one
line entered as an estimate and then re-entered as measured seven seconds
later — a logging artifact, the kind of double-tap the portal's interface
invites. The arithmetic slightly constrains the story: the unit's six
intakes sum to exactly its 0.75 g opening quantity, so if the 20:05 pair
were one dose counted twice, the bag would have to have contained 0.65 g
while being opened as 0.75 — and nothing in the record supports that.
The ledger counts both, the totals reconcile, and the ambiguity is
recorded here rather than resolved, because resolving it would require
knowing what happened in the room and the log is the room's only witness.

Set against the dosage arc on [[wiki/health/cocaine|Cocaine]] — per Dan's
retrospective account, ~1 g/day through 2016, 3.5–7 g/day at the
2017–2020 peak, ~0.5–1 g/day from 2020 on — this night lands inside the
current band: 0.75 g, gone in under ten hours. The first measurement the
corpus has does not contradict the recollection it was set against. That
is worth something, and it is the whole of it. One unit on one night
establishes nothing about a daily rate, a weekly rate, or whether this
night was typical. `n = 1`.

### Units #2–4: the cannabis units

Three separate single-serving cannabis units were opened, consumed, and
closed inside the same window — 0.05 g at 22:06, 0.05 g at 00:37, 0.05 g
at 02:36 — each flagged `single: true`, each opened and closed within the
same second. The dosing is metronomic: three events, three quantities, a
median of 0.05 g and a range of 0.05 g to 0.05 g, zero variance by
construction. This is the first dated corroboration of the "daily
cannabis" entry on [[wiki/health/chemical-architecture|chemical-architecture]]:
not a recollection of daily use but three timestamped one-hitter units,
each the 0.05 g preset, each consumed as opened.

Their placement inside the cocaine night is what makes them interesting.
The cannabis events interleave with the cocaine ones: 22:06 (between
cocaine doses 2 and 3), 00:37 (between doses 4 and 5), and 02:36 — the
last of them opened **24 seconds after the cocaine unit closed**
(02:35:37 close, 02:36:01 open). That sequencing is an observation about
one night, not a pattern, and the [[wiki/health/cocaine|Cocaine]] page
says so explicitly. But it is the log's most legible piece of behavioral
timing: the cannabis units read as punctuation between cocaine doses, and
the final one reads as the night's closing bracket — opened half a minute
after the bag was finished.

### The units table

| # | Substance | Opened | Closed | Opened with | Accounted | Events | Coverage | Disposition |
|---|---|---|---|---|---|---|---|---|
| 1 | cocaine | 2026-08-30 17:04 | 2026-08-31 02:35 | 0.75 g | 0.75 g | 6 | 100% | consumed |
| 2 | Cannabis | 2026-08-30 22:06 | 2026-08-30 22:06 | 0.05 g | 0.05 g | 1 | 100% | consumed |
| 3 | cannabis | 2026-08-31 00:37 | 2026-08-31 00:37 | 0.05 g | 0.05 g | 1 | 100% | consumed |
| 4 | cannabis | 2026-08-31 02:36 | 2026-08-31 02:36 | 0.05 g | 0.05 g | 1 | 100% | consumed |

### Every event

One row per logged intake, oldest first. `measured` came off a scale;
`estimated` did not and carries a confidence; an event with no quantity at all
shows its descriptor instead and counts toward timing but toward no total.

| Unit | Substance | When | Quantity | How | Note |
|---|---|---|---|---|---|
| #1 | cocaine | 2026-08-30 20:05 | 0.1 g | estimated (medium) | — |
| #1 | cocaine | 2026-08-30 20:05 | 0.1 g | measured | — |
| #1 | cocaine | 2026-08-30 22:05 | 0.1 g | measured | — |
| #2 | Cannabis | 2026-08-30 22:06 | 0.05 g | estimated (medium) | — |
| #1 | cocaine | 2026-08-30 23:12 | 0.1 g | measured | — |
| #1 | cocaine | 2026-08-31 00:01 | 0.1 g | measured | — |
| #3 | cannabis | 2026-08-31 00:37 | 0.05 g | estimated (medium) | — |
| #1 | cocaine | 2026-08-31 02:35 | 0.25 g | estimated (medium) | — |
| #4 | cannabis | 2026-08-31 02:36 | 0.05 g | measured | corrected, see below |

### By substance

Quantity figures are computed only from events that carry a number, and the
coverage column says how many that was.

| Substance | Units | Events | Quantified | Median dose | Range |
|---|---|---|---|---|---|
| Cannabis | 3 | 3 | 3 | 0.05 g | 0.05 g–0.05 g |
| cocaine | 1 | 6 | 6 | 0.1 g | 0.1 g–0.25 g |
## The corrections as evidence

Three corrections sit on the log, all applied in the same second —
2026-08-31 16:40:40 UTC, i.e. 12:40:40 EDT, the next day — all through
the CLI interface rather than the phone portal. That is the signature of
a batch review: sometime around noon on August 31, Dan (or someone at his
direction) went back over the previous night's log and cleaned it. The
reasons recorded at the time are specific enough to read as genuine audit
notes rather than boilerplate, and each one reveals a different failure
mode of the logging act itself.

| Unit | Target | Changed | Reason |
|---|---|---|---|
| #2 | the unit itself | `substance`: 'cannibis' → 'Cannabis', `substance_id`: None → 'cannabis', `category`: None → 'cannabinoid' | misspelt 'cannibis' at entry; the portal wrote the free-text string rather than a catalog id (substance_id was null), splitting one substance into two headings in SUMMARY.md |
| #4 | the unit itself | `unit`: 'mg' → 'g' | unit selector slip: opened as 0.05 mg. Cannabis defaults to g, the one-hitter preset is 0.05 g, and the two identical single units logged earlier the same night (Aug 30 22:06, Aug 31 00:37) were both 0.05 g. 0.05 mg is 1/1000th of a bowl |
| #4 | 2026-08-31 02:36 | `unit`: 'mg' → 'g' | the intake against the unit corrected above, logged in mg for the same reason |

The first correction is about the portal's input design. The substance
field accepted free text, so a mid-night typo — `cannibis` — propagated
into the derived surfaces as a second substance, splitting one drug into
two headings in the generated summary. The correction repairs the unit
record itself (name, catalog id, category) and notes the downstream
consequence, which tells you the reviewer had already seen the damage:
he corrected it *because* it broke the summary, not because he happened
to re-read the unit. The portal trusted the typist; the audit caught the
trust failing.

The second and third corrections are about the portal's unit selector.
Unit #4 was opened — and its intake logged — in milligrams: 0.05 mg of
cannabis, which is one-thousandth of a bowl, an absurd quantity. The
correction reason is the log's single best piece of self-analysis. It does
not merely say "wrong unit"; it cites the cross-checks that make the
error visible: cannabis defaults to grams, the one-hitter preset is
0.05 g, and the two identical single units logged earlier the same night
were both 0.05 g. The reviewer convicted the entry on its own internal
evidence — pattern consistency across the night's three identical
servings — rather than on any external memory of what was consumed. That
is exactly how a forensic instrument is supposed to work: the log argues
with itself, and the argument is recorded.

One loose thread remains on the log and has never been corrected. Unit
#3 — the 00:37 cannabis unit — still carries `substance_id: null` and
`category: null` in its creation event, the same null-catalog state that
unit #2 was corrected *out of*. The 12:40 batch fixed the unit whose
typo had visibly broken a derived surface and left the unit whose nulls
had not. That asymmetry is a small but honest portrait of real-world
audit discipline: the review cleaned what had already caused damage and
missed — or deprioritized — what hadn't.

Neither touched the cocaine unit. All six cocaine intakes and the unit's
opening quantity stand exactly as logged that night. In the provenance
note on [[wiki/health/cocaine|Cocaine]], the corrections are summarized
as two — "unit 2's substance was typed `cannibis`, and unit 4 was opened
and logged in milligrams" — counting the two underlying *errors* where
this page's table counts the three correction *records* (the milligram
error required two records, one for the unit and one for the intake
against it). Both countings are true under their own definitions; the
discrepancy is documented in [Conflicts in the record](#conflicts-in-the-record).

## What the record can and cannot establish

This is the section the original page called "What this cannot tell you,"
expanded and folded into the body where it belongs, because the limits of
an instrument are part of its description, not an apology appended to it.

**It records what was logged, not what happened.** An unlogged night is
indistinguishable here from a night with nothing in it, and no figure on
this page corrects for that. The ledger's silence before its first unit
is the absence of an instrument, not the absence of use — and the same
holds, with growing weight, for its silence since. As of 2026-10-07, no
intake event has been logged in 37 days. The instrument ran for about 20
hours (first unit received 2026-08-30 17:04, last correction applied
2026-08-31 12:40 EDT) and then stopped. Whether that means no use since,
unlogged use, or an abandoned instrument, the log cannot say; it can only
say that the night of August 30–31 is the sole window in which the
question "what was consumed" has a written answer. Every synthesis built
on this ledger — and there are now several — inherits that `n = 1`
constraint at full strength.

**A `measured` flag is a claim made at entry, not a guarantee.** This was
developed above under the machinery, but it bears repeating as a limit:
four of the six cocaine doses carry exactly the one-tap preset's value,
and the catalog defines that preset as estimated low confidence. The
distinction the log draws between measured and estimated is therefore a
distinction between what the logger *tapped*, not necessarily between what
was weighed. The 100% coverage figure certifies how many events have a
number. It does not certify where the number came from.

**No rate is published here, and one figure is withheld on purpose.**
`bin/intake report` prints a per-unit `Rate of consumption ... g / day`
that extrapolates a unit's quantity across a full day from however long
that unit actually lasted. For the cocaine unit — 0.75 g consumed across
9h 31m — it reports roughly 1.89 g/day: nearly double what the bag
contained, and more than double what any single day's intake that night
can be shown to be. It is a restatement of the unit's lifespan, not a
daily rate, and it is kept off this page rather than printed with a caveat
beside it. The [[wiki/health/cocaine|Cocaine]] page's measured-night
section issues the same warning in its own words: *do not cite that as a
daily figure, here or anywhere.* The withholding is deliberate and is
documented as a decision, because a number printed with a caveat gets
cited without one.

**A closed unit's reconciliation is a recorded decision, never a silent
subtraction.** Where quantity was unaccounted for at close, the ledger
names what happened to it instead of distributing it across the doses
that were recorded — so a total can be lower than what was actually
consumed, and the unit says which. All four units here reconciled
balanced, so the clause has no work to do on this log; it is stated
because it will govern the first unit that doesn't balance.

**The first unit's receipt is itself a backfill.** Covered in the night
walkthrough, but it belongs in the limits too: the log's earliest
`occurred_at` (17:04) predates the log's earliest `timestamp` (20:04:54)
by three hours. The ledger's own birth is retroactive. The balanced
reconciliation that follows covers what the instrument observed from
20:04 onward, and the opening quantity is an entry-time claim. This does
not invalidate the record — the alternative to a backfilled opening entry
is no record at all — but it sets the instrument's true contemporaneous
window at 20:04 onward, not 17:04.

**Export provenance has a gap.** The [[wiki/health/cocaine|Cocaine]]
page's provenance note states these units "reached this repository as an
export filed on 2026-08-31." The git history tells a slightly longer
story: `intake/events.jsonl` was committed on 2026-09-25, with the commit
message noting it was admitted "per documented .gitignore" — i.e., the
file had been deliberately excluded from version control and was only
brought into git twenty-five days later. Both can be true if the export
reached the working repository on August 31 and version control on
September 25; what the record does not show is where the canonical log
lived in between, or whether the file committed on September 25 is
byte-identical to the August 31 export. The corrections (August 31,
12:40 EDT) predate the commit, so they were already on the log when it
entered git.

## The downstream footprint

One night, nine intake events, three corrections — and the ledger is now
load-bearing for three pages of the wiki's health domain, which is a
remarkable ratio of evidence to inference and worth stating plainly so the
ratio is never mistaken for the evidence being large.

On [[wiki/health/cocaine|Cocaine]], the ledger is the entire "first
measured night" section: the unit id, the 9h 31m duration, the six-dose
shape, the 0.75 g total (0.4 g measured, 0.35 g estimated), the dose and
interval statistics, and the four numbered cautions — n = 1, the 1.89
g/day rate not to be cited, the measured flags overstating precision, the
unlogged night. The page uses the night for exactly one substantive move:
the measured 0.75 g sits inside the self-reported 0.5–1 g/day band for
2020–present, so the first measurement does not contradict the
recollection. Then it stops, with the explicit instruction that no
synthesis be built until there are more units. The connection record on
this page states the relationship formally: the ledger is the
first-party dated record the measured-night section is drawn from, and
"the dosage arc above that section is self-report and this is not."

On [[wiki/health/chemical-architecture|Chemical Architecture]], the ledger
supplies the first dated measurement behind the two stack-table rows
marked *Daily* — cocaine and cannabis — which were otherwise description
taken from Dan's own account of his system. That is the ledger's
quietest but most structurally important role: two rows of the engineered
stack's self-description now have a dated, first-party anchor instead of
resting entirely on testimony.

On [[wiki/health/the-configured-body|The Configured Body]], the ledger
arrived as a 2026-08-31 re-check and was read not as a complication of
that page's claims but as a new instance of its structure. The re-check's
own words: Dan "built a ledger that records the inputs to a tenth of a
gram, with a reconciliation step that refuses to close a unit while
quantity is unaccounted for. That is the specification mode and the
monitoring mode both, running at a new level of rigour. It produces no
repair." The ledger, in that reading, is the missing middle mode stated in
a new register — the body measured at the input and read at the output,
and still never serviced. The re-check also leans a prediction: any
future "health kick" in the record will be an input regime, never a course
of treatment, and the ledger is the first new self-directed bodily regime
to enter the corpus since that prediction was written — "an
input-measurement regime with no treatment arm anywhere in it."

The cocaine page's happiness counter-measure gives the ledger one more
job: it sits beside the 2020–present self-report of ~0.5–1 g/day as the
one measured unit inside the stated band, and the page notes the gap that
will close it — "the ledger's silence before 2026-08-30 is the absence
of an instrument rather than the absence of use. This gap closes when the
ledger has run long enough to have a denominator." As of 2026-10-07, the
ledger has not run at all since August 31. The denominator has not begun
to accumulate, and every downstream claim that was waiting on it is still
waiting.

## Conflicts in the record

**Correction count: 3 records vs. 2 corrections (2026-08-31, standing).**
This page's corrections table lists three rows; the
[[wiki/health/cocaine|Cocaine]] page's provenance note says "two
corrections are on the log." Both are true: there are three
`event_corrected` records in `intake/events.jsonl` and two underlying
errors (the `cannibis` typo and the mg/g unit slip — the latter requiring
one record for the unit and one for the intake against it). The
discrepancy is a counting definition, not a factual dispute. Current
standing: this page counts records; the cocaine page counts errors.

**Per-unit archive files named in sources but absent from main
(2026-10-07, standing).** This page's sources list names four files under
`raw/health/intake/` — one `.md` archive per unit. All four return 404 on
GitHub main, as does the `raw/health/` tree itself; they cannot be
verified as cited. This is consistent with the cocaine page's provenance
note, which states the per-unit archives "were backfilled rather than
written at close, and say so on their face — the portal does not call
`close`, so no capture was filed that night." Current standing: the
archives' existence is attested by the cocaine page but the files are not
resolvable at the cited paths; every figure on this page is therefore
grounded in `intake/events.jsonl`, which *is* present on main, and the
archive citations are flagged unresolved until the files appear at a
resolvable path.

**Export date vs. commit date (2026-08-31 / 2026-09-25, standing).** The
cocaine page's provenance note says the units "reached this repository as
an export filed on 2026-08-31." Git history shows `intake/events.jsonl`
committed 2026-09-25 with a message stating it was admitted per a
documented `.gitignore` exclusion. Current standing: reconcilable — the
export can have reached the working repository on August 31 and entered
version control on September 25 — but the file's location and integrity
between those dates are unattested, and no hash is recorded linking the
committed file to the August 31 export. Flagged here so the gap is visible
rather than smoothed over.

**Unit #3's uncorrected null catalog fields (2026-08-31, standing).**
The 12:40 EDT batch correction gave unit #2 (`cannibis` → `Cannabis`)
a substance id and category; unit #3, opened 00:37 the same night, still
carries `substance_id: null` and `category: null` in its creation event
on main. This is not a contradiction between sources — it is an
inconsistency *within* the log: one null-catalog unit was repaired, an
identical one was not. Current standing: the audit cleaned what had
visibly broken a derived surface (unit #2's typo split the summary
headings) and left what hadn't.

## Assessment

The intake ledger is the best instrument the wiki has and one of the
smallest datasets it holds, and both of those facts are load-bearing. As
an instrument it is well designed: append-only, reconciled, honest about
coverage, visibly self-repairing, and disciplined about what it refuses
to publish — the withheld consumption rate is the clearest evidence that
whoever built it understood how numbers get misused. As a dataset it is
one night old and has not grown in five weeks, which means every finding
drawn from it is drawn from `n = 1` with full knowledge of that fact.
The pages that cite it — cocaine, chemical-architecture, the-configured-body —
all observe the constraint explicitly; none of them overclaims. That
restraint is the ledger's real achievement: a measurement precise to a
tenth of a gram that has not, in five weeks, been inflated into more than
it is.

The open question is whether the instrument will ever run again. A ledger
that logs one night and stops is a demonstration, not a practice; the
configured-body re-check's "leaning" prediction and the cocaine page's
"waiting on a denominator" both assume future logging that has not
materialized. If the ledger resumes, its second night will be worth more
than its first — the first night proved the instrument works; the second
would prove it is a habit. If it does not resume, the page stands as
designed: nine quantified events, three corrections, a documented silence,
and a permanent caution about everything the silence doesn't say.

## See also

- [[wiki/health/cocaine|Cocaine]] — the measured-night section is drawn entirely from this ledger
- [[wiki/health/chemical-architecture|Chemical Architecture]] — the stack table's Daily rows (cocaine, cannabis) take their first dated measurement from this log
- [[wiki/health/the-configured-body|The Configured Body]] — reads the ledger as specification-plus-monitoring with no repair
- [[wiki/mind/synthesis/the-register-never-closes]] — the dosage arc this ledger's one night sits inside

## References

- `intake/events.jsonl` — the append-only log; all 20 events, the sole complete and resolvable source for every figure on this page. Frontmatter sources also name the four per-unit archives under `raw/health/intake/` — ⚠ **source reference unresolved**: all four return 404 on GitHub main (see Conflicts in the record).
- [[wiki/health/cocaine|Cocaine]] — "The first measured night — 2026-08-30/31" section: unit statistics, dose/interval figures, the four cautions, and the provenance note on the export and corrections.
- [[wiki/health/chemical-architecture|Chemical Architecture]] — stack table and the connection record citing this ledger as the first dated measurement behind the Daily cocaine and cannabis rows.
- [[wiki/health/the-configured-body|The Configured Body]] — RE-CHECKED note 2026-08-31: the ledger as input-measurement regime with no treatment arm; the 1.89 g/day-style extrapolation warning class.
- Git history of `intake/events.jsonl` — commit 2026-09-25T00:26:20Z, "Apply 7 drug-audit findings (2026-09-24)"; message notes the file was committed per a documented `.gitignore` exclusion.
