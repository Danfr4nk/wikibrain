+++
id         = "evt:2021-03-au-zaatar-hired"
layer      = 2
type       = "event"
title      = "Hired at Au Za'atar (Midtown NYC) — the 41-month tenure begins"
cites      = ["dat:0452-au-zaatar-employment-block-41-months", "dat:1258-tarik-fallous-thread", "dat:0589-employment-block-2021-2023-consolidated"]
confidence = "low"
importance = 4
tags       = ["work", "au-zaatar", "nyc"]
created    = "2026-09-09"
rechecked  = "2026-09-10"

[when]
date   = "2021-03"

[[edges]]
rel         = "about"
target      = "ent:dan"
strength    = "strong"
asserted_by = "external"

[[edges]]
rel         = "followed"
target      = "evt:2024-08-au-zaatar-exit"
strength    = "moderate"
asserted_by = "other"
note        = "Bookends of the 41-month Au Za'atar tenure."
+++

## What happened

In March 2021 Dan Frank was hired at Au Za'atar — the Midtown Manhattan
restaurant (58th & 1st), not the East Village flagship — as a busser, with
zero food-service experience, by owner-operator Tarik Fallous, hired on the
spot and talked into the veterans' equal tip split on day one
([`dat:0452`](../data/0452-au-zaatar-employment-block-41-months.md)). This
began the 41-month tenure (March 2021–August 2024): his longest job and his
most-visited GPS location (445 visits).

## Dated sequence

- **2021-03** — hired (month only; the day is not recorded in the held
  material).
- **~2021-04** — per the page's REVISED [2026-07-13] block, Dan got Annie the
  hostess job at the original East Village location — a separate site from his
  own employment ([`dat:0452`](../data/0452-au-zaatar-employment-block-41-months.md)).

## Evidence

- **For:** [`dat:0452`](../data/0452-au-zaatar-employment-block-41-months.md)
  — page-attributed to unheld sources (the `imessage_19178259183` thread,
  DANSYNTH/Gemini STORYTIME sessions, dox-md/docx scans). The held Tarik
  thread ([`dat:1258`](../data/1258-tarik-fallous-thread.md), 80 messages,
  2023-08-11–2026-04-12, verified) corroborates the warm relationship and the
  page's "hired March 2021" framing, though the thread opens two years after
  the hire itself.
- **Against / limits:** no held message, application, or document records the
  hire; the held corpus is nearly silent on the whole tenure ("zaatar" 10–11
  rows, "tarik" 15 across ~192k records,
  [`dat:0589`](../data/0589-employment-block-2021-2023-consolidated.md)).

## Contradictions

- The old East-Village location error was corrected by the page 2026-07-13:
  the employment site is Midtown; Annie's hostess stint was the separate East
  Village location, from which she was fired on zero notice
  ([`dat:0452`](../data/0452-au-zaatar-employment-block-41-months.md)).

## Open questions

- Exact hire date; any onboarding paperwork.
- Tarik's own version of the "hired on the spot" story (the characterization
  stays page-attributed).

## Cross-links

- [`ent:au-zaatar`](../entities/au-zaatar.md),
  [`ent:tarik-fallous`](../entities/tarik-fallous.md).
- [`evt:2024-08-au-zaatar-exit`](2024-08-au-zaatar-exit.md) — the tenure's end.
- [`evt:2021-22-valeria-affair`](2021-22-valeria-affair.md) — the affair that
  ran through this workplace.
