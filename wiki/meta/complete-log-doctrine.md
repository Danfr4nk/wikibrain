---
domain: meta
page_type: concept
title: "The Complete-Log Doctrine"
aliases: ["complete log doctrine", "complete log", "more is better than less"]
status: active
knowledge: earned
date_created: 2026-09-16
date_modified: 2026-09-16
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
