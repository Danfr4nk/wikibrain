+++
id         = "dat:1656-complete-log-doctrine-directive-20260916"
layer      = 1
type       = "datum"
title      = "Dan's 2026-09-16 directive: the complete-log doctrine — every entry tracking an ongoing or temporal metric displays the metric's complete log on the wiki entry"
claim      = "At ~16:31 ET on 2026-09-16, while the stylometry v2 wiki page was being fitted with its translated burn-in results log, Dan stated a standing philosophy for the whole wikibrain: entries that track an ongoing or temporal metric must display the metric's COMPLETE log on the entry, translated for a human reader — 'More is better than less every time.' Summaries may sit above the log but never replace it. Sibling to the narrative-spread doctrine (dat:1466): narrative-spread says intake must become prose distributed through the entry; complete-log says temporal metrics must appear as the full log. First exemplar: the stylometry v2 burn-in results log on wiki/self/concepts/stylometry-v2 (PR #101); first retrofits: the MusicTrainer week logs and the scenario-ratings v1 export table."
cites      = ["src:1656-main-chat-20260916-complete-log-directive"]
confidence = "high"
reliability = "primary"
importance = 4
tags       = ["directives", "wiki-governance", "instruments", "editorial-policy"]
created    = "2026-09-16"

[when]
date   = "2026-09-16"
+++

## The directive, in his words

"Let's make it our stated philosophy to treat all entries like this (ongoing or temporal tracking of a metric) and displayed all results as a complete log on the wiki entry. If you can make sense of what I mean this can be extrapolated out in every direction with the wikibrain. More is better than less every time."

## Context

Issued in the main chat at ~16:31 ET on 2026-09-16, immediately after the first full population of the stylometry v2 page's burn-in results section (a Rosetta Stone + running tally + every notable scoring window translated into plain English + collapsed quiet stretches, regenerated daily from `burnin-compare.jsonl` by `update_wiki_results.py`, merged as PR #101). The doctrine generalizes that build: any entry tracking an ongoing or temporal metric carries the metric's complete log on the entry itself.

## The rule

1. **The complete log lives on the entry.** Every recorded value of the metric, translated for a human reader — the full history, not a summary, not a pointer to the data repo.
2. **Summaries may sit above the log; they never replace it.** A tally, a verdict, a trend line — all welcome as the lead-in. The log underneath stays complete regardless.
3. **Translated for humans, machine detail preserved.** The log is readable prose/tables, not raw JSON — but no datum is dropped in the translation.
4. **Applies in every direction.** Stylometry burn-in runs, MusicTrainer week scorecards, scenario-ratings exports, intake events — any instrument, any temporal metric. Retrofits land on existing entries; new entries ship with the log section from day one.

## Execution

- Doctrine article: `wiki/meta/complete-log-doctrine.md`.
- Instruments index carries it as the fourth rule every instrument obeys.
- First retrofits (same batch): `wiki/work/tech/projects/musictrainer-autopsy.md` gains a `## Week logs (complete)` section; `wiki/mind/psychosexual/scenario-ratings-profile.md` gains the full v1 export table.
