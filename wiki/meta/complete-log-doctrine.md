---
domain: meta
page_type: concept
title: "The Complete-Log Doctrine"
aliases: ["complete log doctrine", "complete log", "more is better than less"]
status: active
knowledge: earned
date_created: 2026-09-16
date_modified: 2026-09-17
importance: high
tags: [wiki-governance, editorial-policy, instruments, measurement]
sources: []
related:
  - wiki/self/concepts/stylometry-v2
  - wiki/meta/instruments/index
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

## Sources

- dat:1684-pull-it-all-corpus-policy-20260917
- src:1681 (batch 20260917-0830 transcript)
