---
domain: meta
page_type: concept
title: "The Complete-Log Doctrine"
aliases: ["complete log doctrine", "complete log", "more is better than less"]
status: active
knowledge: earned
date_created: 2026-09-16
date_modified: 2026-09-18
importance: high
tags: [wiki-governance, editorial-policy, instruments, measurement]
sources: []
related:
  - wiki/self/concepts/stylometry-v2
  - wiki/meta/instruments/index
  - wiki/meta/testimony-veracity
  - wiki/health/intake-ledger
---

# The Complete-Log Doctrine

Dan's standing philosophy, stated 2026-09-16: **any entry tracking an ongoing or temporal metric displays the metric's complete log on the entry, translated for a human reader.** His words: *"More is better than less every time."*

## What it is

A summary is a claim about what mattered. A log is the record of what happened. The doctrine says the entry carries the record — the full history of the metric, every run, every week, every export — rendered readable, and any summary sits *above* it as a lead-in, never *instead* of it. The reader who wants the verdict reads the top; the reader who wants to check the verdict reads the log.

## Why

The wiki's Archivist floor already says nothing durable is ever lost — the raw data is in the repos. But raw data in a repo is not the same as a record on the entry. A reader who has to leave the page to see the evidence will not check the evidence, and an entry whose numbers can't be checked is a claim wearing a lab coat. The complete log is what makes the instrument pages falsifiable by their own readers.

It is the sibling of the narrative-spread doctrine: narrative-spread says intake must become prose distributed through the entry (selection is data, and data must be *written about*); complete-log says temporal metrics must appear as the full log (a measurement you can't see in full isn't a measurement). Same instinct, two directions — prose for events, logs for numbers.

## The rules

1. **The complete log lives on the entry.** Every recorded value of the metric — not a sample, not the highlights, not a link to the ledger.
2. **Summaries sit above, never replace.** Tallies, verdicts, trend lines are welcome as the lead-in. The log underneath stays complete regardless.
3. **Translated for humans, machine detail preserved.** Readable prose and tables, not raw JSON — but the translation drops no datum. A driver that pulled at z=2.71 appears as "vocabulary narrowed sharply," with the number still attached.
4. **Applies to every instrument and every temporal metric.** Stylometry burn-in runs, MusicTrainer week scorecards, scenario-ratings exports, intake events — all of them, in every direction. Existing entries get retrofitted; new entries ship with the log section from day one.

## Exemplars

- **The stylometry v2 burn-in log** ([[wiki/self/concepts/stylometry-v2]]) — the build that prompted the doctrine: a how-to-read-it Rosetta Stone, the running tally, every notable scoring window translated into plain English, quiet stretches collapsed to one line per day. Regenerated daily from the append-only ledger by `update_wiki_results.py`.
- **The intake ledger** ([[wiki/health/intake-ledger]]) — the anti-unreliable-narrator layer already works this way: the event-sourced log is the source of truth, corrections supersede rather than editing in place, and the log keeps both.

## What it is not

Not a license to dump. "More is better than less" is about *completeness of the record*, not volume of prose — a 122-row table is the log; a 122-paragraph essay is noise. The doctrine pairs with the quiet-stretch collapse: completeness means nothing is missing, not that nothing is compressed. A day with nothing to report gets one line, and the line is there.

---

## Sibling doctrine: the latency principle (2026-09-17)

A second standing doctrine, stated by Dan the day after complete-log, governs the *retention* side of the same instinct. Complete-log says display the full record; the latency principle says **save everything, because you cannot know in advance what will matter.**

His words, 2026-09-17 (05:22:28Z): *"the entire philosophy here is to save the important and the unimportant alike. The wikibrain operates on the principle that unimportant data may be important data for something that hasn't even happened yet."*

Sammy named it the latency principle on the spot — the value of a datum is latent until a future question activates it — and Dan's operational order, given two minutes earlier (05:20:36Z), is its standing form: *"In the future with wikibrain stuff default to the 'pull it all' option."* Never ask whether to pull; pull everything corpus-grade. Ask only about genuinely ambiguous judgment calls (multi-GB video archives).

The two doctrines are siblings, not twins. Complete-log is about the *display* of what was kept: the log on the entry, falsifiable by the reader. The latency principle is about the *keeping* itself: the retention floor that makes the display possible. One faces the reader, the other faces the future. Both trace to the same sentence — *"More is better than less every time"* — applied in two directions: show the complete log, and save the unimportant data.

In action: the Drive survey (109,004 files, 2TB/2TB) pulled corpus-grade material indiscriminately; the WHISK 9,868-image album is kept exhaust-first, fails never culled, because the bursts turned out to be the evidence; the pull-it-all default now governs every Drive and Takeout pass.

**Limits.** The latency principle is a default, not a trump. Dan's explicit orders beat it the same way they beat the archival floor: the CUMTHREAD3 full writeback exclusion (2026-09-15) and the probe-framing kill order (2026-09-13) are same-class carve-outs — his word overrides the standing rule, every time. And it never meant "pull literally everything": the porn archive trees stay put by his own scoping, and genuinely ambiguous calls (multi-GB video) still come back to him. The principle is about not filtering by *current judgments of importance*, not about ignoring his explicit scope.

---

## The doctrine audited against this tree (2026-09-18)

A doctrine about complete logs should be able to survive its own rule. Applied
to the three instruments this page names, and to the corpus figures the wiki
quotes most, it does not — and the failures are instructive enough to become
rules.

### Exemplar 1: the intake ledger renders empty here

The page above cites [[wiki/health/intake-ledger]] as an exemplar — "the
event-sourced log is the source of truth, corrections supersede rather than
editing in place." That is a correct description of the design. It is not a
description of what a reader of this repository sees.

`intake/events.jsonl` is **not held in this tree** **[ATTESTED, `README.md`]**,
and the ledger page is generated from it. So it renders with every figure at
zero: units opened 0, intake events 0, carrying a quantity 0, corrections 0,
and both the Units table and the Every-event table empty of rows **[ATTESTED,
wiki/health/intake-ledger]**.

The consequence propagates. [[wiki/health/suboxone-dose-curve]] draws a contrast
between stack rows that have measured ledger nights (cocaine, cannabis) and rows
that have none (Suboxone, nicotine) **[ATTESTED, that page]**. In this tree that
contrast does not hold: **no row has a ledger night, because the ledger has no
nights.** The 0.75g-over-9h31m measurement that [[wiki/mind/synthesis/the-register-never-closes]]
and [[wiki/health/chemical-architecture]] both cite is carried as prose on those
pages and is absent from the instrument that produced it.

The ledger's own limits section anticipated the shape of this — *"the ledger's
silence before its first unit is the absence of an instrument, not the absence
of use"* **[ATTESTED, that page]** — but not this instance of it, where the
instrument exists and its record does not travel with it.

### Exemplar 2: the summary travelled and the log did not

[[wiki/meta/testimony-veracity]] is the sharper case, because the separation is
total. The page is generated from `testimony/events.jsonl`, which is also not
held **[ATTESTED, `README.md`]**. In this tree it says, correctly and usefully,
*"No testimony has been settled yet… A trust score over nothing is not a low
score — it is an absent one"* **[ATTESTED, that page]**.

Meanwhile its numbers are everywhere. Certain 0.25 / confident 0.69 / hedged
0.75, veracity 52/100, Brier 0.335, skill −0.34 — carried by
[`dat:0044`](../../kb/data/0044-old-wiki-testimony-ledger.md) out of the prior
wiki's export and quoted onward by [[wiki/mind/synthesis/the-scoreboard]],
[[wiki/mind/concepts/calibrated-confidence]] and others **[ATTESTED, those
pages]**. dat:0044 is scrupulous about what it is asserting — *"what is
high-confidence is that the page says this, not that the numbers are right"*
**[ATTESTED, that node]** — and the caveat thins with every page that repeats
the figure.

**This is the doctrine's failure mode stated exactly: the summary is portable
and the log is not.** Five numbers travelled across a repository boundary, a
wipe, and a reconstruction. The 16 rows they were computed from travelled
nowhere. Nothing in the system resisted that, because nothing in the system
was watching for it.

### Rule 5 — an absent period is a row

New rule, and the evidence for it is a governing document getting its own
coverage wrong.

`CORPUS_POLICY.md` states its gap years as *"2021 has 282 messages and 2022 has
none"* **[ATTESTED, that document]**. The authoritative export's own per-year
figures show **four** years at zero — 2012, 2013, 2014 and 2022 — and the listed
years sum to exactly 192,140, which forecloses the reading that the keys were
merely dropped **[DERIVED: `corpus/derived/summary.json → messages_per_year`;
1 + 13,745 + 20,279 + 17,550 + 40,500 + 20,166 + 6,327 + 282 + 960 + 4,369 +
41,203 + 26,758 = 192,140 = the file's own `messages` total]**.

The mechanism is mundane and it is exactly what the doctrine exists to catch.
`messages_per_year` is a JSON object, and an object with no key for 2013 looks
identical to an object whose 2013 value nobody computed. A human reading the
log sees eleven years and no holes. The holes are the years that are not rows.

So:

> **Rule 5. A period with no data is a row in the log, written as zero.** A log
> that omits its empty intervals is not a compressed log; it is a log with
> undeclared gaps, and it reads as complete.

This is not the same as rule 4's quiet-stretch collapse. A quiet stretch gets
one line *and the line is there*. An omitted zero has no line at all, and the
difference is the difference between "nothing happened" and "nobody looked."
The architecture already carries the distinction as typed data —
`never_observed`, `explicitly_rejected`, `known_not_to_occur` are three
different states and the system refuses to flatten them **[ATTESTED,
`ARCHITECTURE.md`]**. Rule 5 is that distinction applied to the log's own
index rather than to its contents.

### Rule 6 — completeness is not coverage

A log can satisfy every rule above and still mislead, because a complete record
of what an instrument saw is not a record of what happened.

The worked case is 2025. The authoritative export's log for that year is
complete in this page's sense — every month present, every value real. It is
also blind: over January–July 2025 it holds 1,139 messages where the
superseded 2025-08-11 dump holds 27,850, and over the window both cover the
dump carries **88,311** messages the export does not **[ATTESTED,
[`dat:1502`](../../kb/data/1502-corpus-coverage-hole-2025.md)]**. The export's
2025 is 87.6% fourth-quarter **[DERIVED: 41,203 total against 5,089 in
January–August, from dat:1502's monthly table and
`corpus/derived/summary.json`]**.

Nothing about that log looks wrong. Its rows are accurate, its arithmetic
closes, and its months are all present. It is a complete log of a blind
instrument.

> **Rule 6. A log states the instrument and the window it is complete with
> respect to.** "Complete" without a named instrument is a claim the log cannot
> support.

dat:1502 puts the operational consequence better than a rule can: any claim
`bin/wb-corroborate` marked uncorroborated for a 2025 date was tested against a
corpus holding between 35 and 380 messages a month for that year, and *"those
results are not wrong so much as uninformative, and they were not labelled as
such"* **[ATTESTED, that node]**.

### How much of a log survives inside its summary

The pessimistic reading of exemplar 2 is that a lost log is lost. That turns
out to be too strong, and the correction is worth having because it tells you
which summaries are worth publishing.

The testimony ledger's published figures are **jointly overdetermined**: dat:0044
carries both a band table (asserted probability, n, realised rate for each of
three bands) and an outcome census (4 confirmed, 2 partial, 1 self-contradicted,
3 refuted, 6 unfalsifiable, with `unfalsifiable` scoring zero) **[ATTESTED, that
node]**. The six unfalsifiable claims are the unscored ones — 4+2+1+3 = 10,
the stated scored n — so the ten scored claims are fully enumerated by type and
the bands partition them 4 / 4 / 2.

Exhaustive search over every way of dealing those ten typed outcomes into bands
of 4/4/2 returns **exactly one assignment** consistent with all three published
rates **[DERIVED, 2026-09-18, enumeration over the figures in dat:0044 alone]**:

| Band | Asserted | n | Composition | Sum | Rate | Published |
| :--- | ---: | ---: | :--- | ---: | ---: | ---: |
| certain | 0.95 | 4 | 1 confirmed, 3 refuted | 1.00 | 0.2500 | 0.25 |
| confident | 0.80 | 4 | 2 confirmed, 1 partial, 1 self-contradicted | 2.75 | 0.6875 | 0.69 |
| hedged | 0.60 | 2 | 1 confirmed, 1 partial | 1.50 | 0.7500 | 0.75 |

The hedged band forces `partial` = 0.50 exactly; the confident band then forces
`self-contradicted` = 0.25. That recovers the ledger's scoring scale, which the
ledger never published:

> confirmed 1.00 · partial 0.50 · self-contradicted 0.25 · refuted 0.00

And every derived figure follows at its published precision — Brier 0.33525
against 0.335, skill −0.3410 against −0.34, unweighted mean outcome 0.5250
against 52/100 **[DERIVED]**.

**What that demonstrates for this doctrine.** A summary carrying enough
cross-checking quantities can regenerate part of its own log. Four published
figures plus a typed census were sufficient to recover the scoring rule and
each band's composition — everything except *which* of t001–t016 sits where.
The ledger did not intend to be recoverable; it was recoverable because it
published redundantly.

That is a design instruction, not a consolation:

> **Rule 7. Publish redundant quantities.** Where the full log cannot travel,
> a summary that overdetermines itself — counts and rates and a derived score
> that must agree — degrades into a partially recoverable record instead of an
> unfalsifiable one.

It is also a bounded rescue and the bound is the point. The reconstruction
proves the ledger's arithmetic is **internally consistent**. It says nothing
about whether any of the ten adjudications was correct. A consistency proof is
not a re-adjudication, and no amount of redundancy in a summary substitutes for
the log.

### The precision the reconstruction forces

One correction falls out of it that belongs here rather than on the pages that
quote the figure. The certain band is **four claims: one confirmed, three
refuted.** So *"his stated certainty is worth 0.25"* is one success in four,
not a rate estimated over a body of evidence.

Both dat:0044 and [[wiki/mind/synthesis/the-scoreboard]] already label the bands
a suggestion rather than a measurement **[ATTESTED, both]**. The phrasing is
what drifts: *"stated certainty ≈ 0.25 actual"* reads as a calibration curve,
while *"of the four claims he stated with certainty, one held"* is the same fact
and invites the right amount of belief. Rule 3 says the translation drops no
datum; the datum being dropped here is **n**.

### The audit's own scorecard

Applying the doctrine to itself, honestly:

| Instrument | Log on the entry? | Verdict |
| :--- | :--- | :--- |
| Stylometry v2 burn-in | yes, regenerated daily | compliant — the build that prompted the doctrine |
| Intake ledger | **no — source file not held** | structure compliant, record absent in this tree |
| Testimony veracity | **no — source file not held** | non-compliant; summary travelled without it |
| Corpus per-year figures | yes, in `summary.json` | compliant on rows, **fails rule 5** (four zero years omitted) |
| Corpus 2025 monthly | yes, via dat:1502 | compliant, **and blind** — rule 6's case |

Three of five instruments this doctrine governs are not currently carrying the
record it requires, and two of those failures are recoverable by copying one
file each.

## Falsifiers

1. **Recover `testimony/events.jsonl` and check the reconstruction.** If the
   recovered file shows a different band composition or a different scoring
   scale than the table above, rule 7 is worth less than it looks and the
   reconstruction was luck.
2. **A log that satisfies rules 1–4 and still misleads by a mechanism not named
   in rules 5–7.** Would show the rule set is incomplete rather than wrong.
3. **An omitted zero that turns out to be a real absence of measurement rather
   than a real zero.** Rule 5 assumes the two are distinguishable at write time.
   A case where the writer genuinely cannot tell would need a fourth state.

## Gaps

- **Neither missing events file has been looked for** in `raw/` or the prior
  repositories; the audit above establishes they are not in this tree, not that
  they are unrecoverable.
- **The stylometry burn-in log was not re-audited here** — it is taken as
  compliant on the page's own description rather than re-read row by row.
- **No rule covers superseded logs.** When an instrument is re-run and the new
  log disagrees with the old, the doctrine says the entry carries the complete
  log; it does not say whether it carries both.
- **Rule 5's cost is unmeasured.** A log with every empty interval written as
  zero is longer, and the doctrine's own "not a license to dump" clause has not
  been tested against a metric with years of empty rows.

## Limits of record

- **Observed:** the intake ledger's zero-state and the testimony page's
  no-settled-testimony state as they render in this tree; dat:0044's published
  figures; dat:1502's 2025 monthly table; `summary.json`'s per-year object.
- **Calculated:** the per-year sum proving the four zero years; the 87.6%
  fourth-quarter concentration; the band reconstruction and all four figures
  derived from it.
- **Inferred:** that the ledger's scale is the quarter-credit ladder recovered
  above — it is the unique consistent solution, which is strong, but it is a
  reconstruction and not a reading of the file.
- **Unknown:** whether either events file exists anywhere reachable; whether the
  ten adjudications in the ledger were correct; the stylometry log's row-level
  compliance.
- **Not media.** This page embeds no images; its subject is the presence or
  absence of tabular records, and no photograph carries one.

## Sources

- dat:1684-pull-it-all-corpus-policy-20260917
- src:1681 (batch 20260917-0830 transcript)
- [`dat:0044`](../../kb/data/0044-old-wiki-testimony-ledger.md) — the ledger
  figures the reconstruction runs on
- [`dat:1502`](../../kb/data/1502-corpus-coverage-hole-2025.md) — rule 6's case
- `corpus/derived/summary.json` — rule 5's case
- `CORPUS_POLICY.md`, `ARCHITECTURE.md`, `README.md`
- [[wiki/meta/index]] · [[wiki/meta/testimony-veracity]] · [[wiki/health/intake-ledger]]
