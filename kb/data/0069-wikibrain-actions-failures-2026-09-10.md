+++
id         = "dat:0069-wikibrain-actions-failures-2026-09-10"
layer      = 1
type       = "datum"
title      = "Three wiki-brain GitHub Actions workflows failed on 2026-09-10"
claim      = "GitHub reported failed runs of three Danfr4nk/wiki-brain workflows on main@5d1a747 at 2026-09-10 18:02 PDT: 'Tell the portal the wiki moved', 'Deploy wiki site', and 'Build and deploy to Pages'."
cites      = ["src:sammy-scrape-20260911-1941"]
confidence = "high"
tags       = ["github", "wiki-brain", "ci", "scrape"]
created    = "2026-09-11"

[when]
date   = "2026-09-10"
+++

<!-- prose for humans; the frontmatter is for machines -->
## Evidence

`raw/sammy/20260911-1941/gmail.json`, all from Danfr4nk
, all timestamped 2026-09-10 18:02 PDT
(21:02 EDT), all on `main (5d1a747`:

- 18:02:04 — `[Danfr4nk/wiki-brain] Run failed: Tell the portal the wiki moved`
- 18:02:13 — `[Danfr4nk/wiki-brain] Run failed: Deploy wiki site`
- 18:02:15 — `[Danfr4nk/wiki-brain] Run failed: Build and deploy to Pages`

Triage metadata only; run ids and failure logs are not in the captured metadata.

## Reading

Twenty minutes after the failures, commit `b5098ca` ("climb: port three
synthesis pages from wiki-brain@5d1a747") landed on main (2026-09-10
21:22 EDT). The failures preceded a successful push the same evening —
whether the failed runs belonged to the 5d1a747 push itself or an earlier
one is unknown from metadata alone. Net effect: the Pages deployment
pipeline was red at 21:02 EDT and the repo moved forward anyway at 21:22.

## Open questions

- Failure causes (build vs. deploy vs. portal step): need the Actions logs.
- Whether the 21:22 climb re-ran green: unverified in this batch.

## Cross-links

- [`ent:wiki-brain`](../entities/wiki-brain.md) — dated evidence block appended 2026-09-11
- [`src:sammy-scrape-20260911-1941`](../../sources/sammy-scrape-20260911-1941.md)
