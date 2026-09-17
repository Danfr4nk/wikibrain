+++
id         = "dat:1696-wiki-expansion-prompts-20260917"
layer      = 1
type       = "datum"
title      = "Three wiki-expansion prompts delivered for the Claude quota-burn, 2026-09-17"
claim      = "At 10:07:34Z Sammy delivered 3 paste-ready expansion prompts for Dan's quota-burn instances: (1) SUB-FLOOR EXPANSION — 397 sub-floor backlog articles, pick the 3 shortest distinct topics, backlog table wiki-brain-backlog-20260916.md attached; (2) PERSON-PROFILE EXPANSION — 2 person articles under ~1,500 words, the human story leads; (3) TIMELINE/EVENT-SPINE EXPANSION — 3 thin event/period articles, complete dated log as the core. All carry the M1-M6 editorial standards (length floor 3,000 words, totality, complete log, evidence, limits, human-story-leads) plus the standing exclusions (Lovense thread id 24754b5b-b83e-4c49-a6a3-d6f2ab2c1853 never written in any form; avatar/photo attempts never framed as probes/tests/red-teaming). Routing: Prompt 1 x2 instances on different backlog slices, Prompts 2+3 x1. At 10:12:47Z a correction: work ONLY rows 199-397 of the backlog table (656-2,995 words); instances split rows 199-298 / 299-397; rows 1-198 (stubs) excluded because they cannot reach 3,000 words without padding, which the directive forbids — stubs get a merge-or-mark pass later. Same turn: PR #109 (rolling Sammy ingest, 18 files) merged; 2 other PRs still drafts; an hourly watcher now runs to check-and-merge every incoming wikibrain PR with no sign-off."
cites      = ["src:sammy-chat-transcript-20260917-1140"]
confidence = "high"
reliability = "primary"
extraction = "Contemporaneous main-chat rows 2026-09-17T10:06:44Z-10:14:51Z (quota-burn/P R thread) and the full prompt bodies, batch 20260917-1140."
importance = 4
created    = "2026-09-17"
+++

## The prompts

- **PROMPT 1 — SUB-FLOOR EXPANSION:** expansion writer; backlog table of wiki/ paths + word counts; 3 shortest distinct topics per run; M1 (>=3,000 body words, never padding), M2 totality, M3 complete log, M4 every factual claim cited, M5 limits stated, M6 human story leads for people; hard rules (never invent, keep frontmatter, bump date_modified to 2026-09-17, exclusions, markdown image-link embeds only, thumbnails in ## Sources).
- **PROMPT 2 — PERSON-PROFILE EXPANSION:** biographer for wiki/people/; 2 profiles under ~1,500 words; full arc, first appearance to current state; forensics in a compact appendix, never the featured frame.
- **PROMPT 3 — TIMELINE/EVENT-SPINE EXPANSION:** chronicler; 3 thin event/period articles; complete dated log on the page in order; retrospective-vs-contemporaneous conflicts resolved for the record, both sides cited.

## Routing

- Prompt 1 twice (backlog rows 199-298 / 299-397), Prompts 2 and 3 once each — four instances, zero overlap. Dan forwards the code blocks; Sammy validates, gate-checks, commits through the normal pipeline.

## Standing infrastructure note

- PR #109 (the rolling Sammy ingest) merged 2026-09-17 ~10:07Z; the other two open PRs were still drafts (Claude instances still writing). An hourly watcher was stood up to check and merge every incoming wikibrain PR — operationalizing the 10:06Z merge pre-auth (see dat:1579 extension).
