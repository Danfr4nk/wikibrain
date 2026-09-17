+++
id         = "dat:1675-raw-source-consolidation-goal-audit-20260917"
layer      = 1
type       = "datum"
title      = "Raw-source consolidation goal commissioned; audit: 9,271 files / 3.0GB; caakehorn/wiki-brain gone"
claim      = "Dan's standing directive (2026-09-17 ~01:36Z): the prime copy of all raw source material is wikibrain raw/; RAWLOGS is the duplicate/backup. Four-phase commission: (1) product-distinct per-source inventory (what we have / available / missing / plan), (2) finish moving old-account raw logs, (3) hunt new material, (4) retrieval layer so the LLM rechecks the corpus during wiki rewrites. Audit headline (delivered ~01:40Z): prime corpus ~9,271 files / 3.0GB / 41 dirs. Three open gaps: 971 ig3 Instagram files (1.4G, needs native git + his GitHub auth), ~920M on his Google Drive behind sign-in (Search/Chrome MyActivity HTML + 2 videos), ~2.6G in staging never moved into raw/ (IG media, location history, full ChatGPT export, 9 oversized takeout files). Corrections from the audit: old-account takeout/Google Chat gaps were cosmetic filename renames (not real); caakehorn/wiki-brain is GONE - 404s on GitHub, no local clone, unrecoverable; 477 of 497 old-wiki pages were never mined and are queued as engine work."
cites      = ["src:1672-sammy-chat-transcript-20260917-0340"]
confidence = "high"
importance = 5
tags       = ["corpus", "raw-sources", "inventory"]
created    = "2026-09-17"

[when]
date   = "2026-09-17"
+++

<!-- prose for humans; the frontmatter is for machines -->

## The directive (2026-09-17 ~01:36–01:40Z)

Dan: "I want a goal made... consolidate all the raw source material." The
standing rule he set: **the prime copy of raw source material is `raw/` in
Danfr4nk/wikibrain; RAWLOGS is the duplicate/backup.** Four phases:

1. **Product-distinct per-source inventory** — what we have / what's
   available / what's missing / the plan, per source.
2. **Finish moving old-account raw logs** into the prime corpus.
3. **Hunt for new material.**
4. **Retrieval layer** — so the LLM rechecks the corpus during wiki rewrites
   (anti-drift: the wiki must be re-grounded in raw, not in its own prose).

## The audit (delivered ~01:40Z)

- Prime corpus: **~9,271 files / 3.0GB / 41 directories.**
- Gap 1: **971 ig3 Instagram files (1.4G)** — needs native git + his GitHub
  auth to land in RAWLOGS (retry commissioned 01:26Z, dat:1676).
- Gap 2: **~920M on his Google Drive behind sign-in** — Search/Chrome
  MyActivity HTML + 2 videos.
- Gap 3: **~2.6G in staging never moved into raw/** — IG media, location
  history, full ChatGPT export, 9 oversized takeout files.
- Correction: the "old account" takeout and Google Chat gaps were **cosmetic
  filename renames**, not real gaps.
- **caakehorn/wiki-brain is GONE** — 404s on GitHub, no local clone anywhere,
  unrecoverable. The old wiki's only surviving form is the held corpus
  extract.
- **477 of 497 old-wiki pages were never mined** — queued as engine work
  (sparse_node_expansion items).

## Evidence for

- Directive and audit both on the transcript record (01:36–01:40Z).
- The goal was created in-window (user_goal, per his commission).
- caakehorn/wiki-brain 404 verified live in-window.

## Open questions

- Phase 4 (retrieval layer) is designed, not built.
- Gap 2's Drive files need Dan to flip link-sharing (dat:1674 landed part of
  the Drive haul the same night via his sudo grant).
- Whether any caakehorn/wiki-brain content survives in web archives —
  unsearched.

## Cross-links

- `dat:1676-google-full-authorization-grant-20260917` (the sudo that unblocked
  Gap 2)
- `dat:1677-drive-survey-motherlode-20260917` (same-night Drive results)
- `dat:1679-ig-971-file-push-retry-20260917` (Gap 1 retry)
