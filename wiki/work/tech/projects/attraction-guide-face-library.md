---
domain: work
page_type: concept
title: "attraction-guide face library — 155 faces, audited"
status: active
date_created: 2026-09-11
date_modified: 2026-09-11
sources:
  - "Sammy working context, 2026-09-11 (MEMORY.md)"
related:
  - wiki/work/tech/projects/index
  - wiki/work/tech/projects/attraction-guide
  - wiki/work/tech/projects/attraction-guide-telemetry
tags: [ai-collaboration]
connections:
  - page: wiki/work/tech/projects/attraction-guide-telemetry
    type: evidenced-by
    claim: "The v2 telemetry lab audited the library's own stimulus pairs and admitted only 17/50 — the instrument rejecting its own inputs is the quality gate, not Dan's taste."
---

# attraction-guide face library

The stimulus set the A/B game runs on — built out 8–10x at Dan's direction.

## Scale

- 155 faces on disk (8.61x the original 18): 32 phase-1, 111 phase-2 variants, 12 anchors.
- Strict selectable count: 66 faces (3.67x the original 18).

## The v2 telemetry audit (2026-09-11)

The telemetry lab admitted only **17/50 pairs**: lips 11, nose 3, brow 3 (proxy-weak).

- **Jaw: zero admitted.** Jaw edits were confounded — asymmetry and mouth position moved more than the gonial angle did.
- **Eyes: zero admitted.** Eye-spacing edits never moved spacing; tilt and size moved instead.
- A jaw-sharp inversion reproduced across builders: the generator reads "sharper" as *wider* (larger gonial angle) — a generator-semantics bug, not a Dan preference.

## Status (2026-09-11)

Wave-2 jaw/eyes regeneration with audit-informed prompts has been offered; awaiting Dan's call.

## Place in the larger system

The audit is the library's most important property: a synthetic stimulus set whose own measurement instrument rejected two-thirds of it, with the failures documented rather than silently dropped. That discipline — kill the pair, keep the corpse — is the Wiki Brain's own append-only rule applied to stimuli.
