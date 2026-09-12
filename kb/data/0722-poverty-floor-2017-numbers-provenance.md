+++
id            = "dat:0722-poverty-floor-2017-numbers-provenance"
layer         = 1
type          = "datum"
title         = "The 2017 poverty page's figures are inherited from the old wiki's generated analysis layer — LIFE_EVENTS_CALENDAR.md is not a held source in this repository"
claim         = "The 2017-poverty-floor page (corpus line 21748, 168 lines) builds its account on numbers — 85 calendar events in 2017, 254 in 2018, corpus totals of 266 relationship / 105 financial / 65 debt events, the $600 January overdraft, the $120 Tom debt, the four-hour unpaid DJ shift — that it attributes to generated dox: `LIFE_EVENTS_CALENDAR.md`, `operating_manual.md`, the LIFE REPORT, and Gemini-_18.md. The page is preserved verbatim in the old wiki export (whole.txt 111213–111229: the same 85-event figure, the same $600 overdraft, the same Domino's-overdraft passage, the same Fran nosebleeds and Suz 'played your cards out' lines), confirming the numbers predate the corpus snapshot and were carried forward intact. `LIFE_EVENTS_CALENDAR.md` is not a PAGE in corpus__3.txt and not a held file in this repository's raw/ tree — the counts cannot be re-derived here. The figures are therefore carried as the old wiki's generated-layer assertions: internally consistent across two snapshots of the wiki, but not re-measurable against primary records in this pass."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read from corpus__3.txt line 21748 (168 lines); figure table and dox attributions quoted verbatim. Old-wiki export whole.txt 111213–111229 carries the identical figures and phrasing ('the calendar logged 85 events', '$600' overdraft, 'Domino's overdraft', 'Fran woke with nosebleeds at 3am', 'you've played your cards out'). Corpus grep 2026-09-09: no PAGE for LIFE_EVENTS_CALENDAR.md; no such file in raw/. The 2026-09-04 page metadata says 'Regenerated 2026-09-04 from full corpus sweep (265/106/65: relationship/financial/debt + 85 calendar events)' — the sweep itself is not held."
importance    = 3
tags          = ["2017-poverty-floor", "provenance", "generated-analysis", "old-wiki"]
created       = "2026-09-09"
+++

## What is checkable and what is not

The page's narrative details that came from operator-authored dox
(Fran's nosebleeds, Suz's verdict — both in operating-manual-derived
prose at whole.txt 111227–111229) are carried in
[`dat:0723`](0723-poverty-floor-nosebleeds-suz-verdict.md). The aggregate
counts (85, 254, 266/105/65) belong to the generated calendar layer and
have no checkable source in this repository. Both tiers are the page's
own sourcing; this node records which tier each figure sits in.

## The age line, not carried

The page's opening ('Dan was twenty-eight') hardcodes an age across a
year in which he turned twenty-nine (DOB 1988-11-01). Per the standing
rule against time-frozen numbers, this node does not repeat it; ages are
derived from dated records, not prose.
