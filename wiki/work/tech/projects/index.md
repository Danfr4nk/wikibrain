---
domain: work
page_type: summary
title: "Coding Projects"
status: active
date_created: 2026-09-11
date_modified: 2026-09-17
sources:
  - "Sammy working context, 2026-09-11"
related:
  - wiki/work/tech/index
tags: [ai-collaboration]
connections:
  - page: wiki/work/tech/index
    type: component-of
    claim: "The coding-projects subcategory consolidates the builder work that outgrew the thin per-project overviews under wiki/work/tech — every entry built by AI direction in 2026, none by hand-written code."
---

# Coding Projects

All of these were built in 2026 by directing AI agents (Claude, Muse Spark, Grok, Gemini) — not by learning to program, per the documented one-day Codecademy episode of February 2013 ([[wiki/work/tech/index]]). Each entry covers purpose, architecture, status, and its place in the larger system; statuses were refreshed 2026-09-17 against the dated kb record.

## Entries

- [[wiki/work/tech/projects/hook2piano]] — TheoryTab→piano-score web harness (live on GitHub Pages); MELODY, the melody-to-piano-roll sibling instrument (2026-09-16), is covered in the same entry
- [[wiki/work/tech/projects/musictrainer-autopsy]] — MusicTrainer + AUTOPSY: the 90%-prediction taste instruments (live on GitHub Pages)
- [[wiki/work/tech/projects/attraction-guide]] — rerunnable A/B facial-attraction diagnostic game
  - [[wiki/work/tech/projects/attraction-guide-telemetry]] — the MediaPipe telemetry lab (telemetry.html); the 2026-09-16 One-Photo Workbench evolution and the age-estimation sibling instrument are covered here
  - [[wiki/work/tech/projects/attraction-guide-scenario]] — scenario telemetry v6 and scenario ratings v2
  - [[wiki/work/tech/projects/attraction-guide-face-library]] — the 155-face stimulus library
- [[wiki/work/tech/projects/stylometry]] — 30-minute state tracker against a 94,503-message baseline
- [[wiki/work/tech/projects/hue-lights]] — Philips Hue message flash + affect gauge: Sammy's physical instruments in Dan's room (2026-09-17), first resident of the sammy-tools repo
- [[wiki/work/tech/projects/imessage-analysis-toolkit]] — Gumroad product: chat.db forensic extraction
- [[wiki/work/tech/projects/wikibrain-tooling]] — the bin/ renderer, validators, and push pipeline
- [[wiki/work/tech/projects/frame-reference-tool]] — the exact-frame referencing web app (2026-09-15): set fps, jump to the frame, click the spot, Copy Reference
- [[wiki/work/tech/projects/kinship]] — face-similarity tool (InsightFace CLI + ONNX Runtime web app, live at danfr4nk.github.io/tools/kinship/); the session that produced Dan's standing "I always want them" web-version rule

## Consolidation (2026-09-15)

Dan ordered the full consolidation of his tool repos into
`Danfr4nk/tools` ("ALL the tools"), reported complete 17:47:57Z:
attraction (530 files, from Danfr4nk/attraction-guide),
hook2piano, musictrainer (from Danfr4nk/MusicTrainer),
track-autopsy, modbod (571/571 files, four new Pages URLs 200),
kinship (local-only, moved in 17:48:44Z). Old repos left as redirect
stubs (index.html + 404.html catch-all); deletion pending his
go-ahead. Live at https://danfr4nk.github.io/tools/. Source:
dat:1580-tools-repo-consolidation-20260915.

## Consolidated elsewhere (not duplicated)

- [[wiki/work/tech/danmodel]] — DANMODEL voice-clone pipeline (existing entry; linked, not forked)
- [[wiki/work/tech/mneme/overview]] — MNEME memory platform spec (existing entry; linked, not forked)
- [[wiki/mind/concepts/bunker-core]] — Bunker Core agentic frameworks (existing concept entry; linked, not forked)
- [[wiki/work/tech/imessage-tooling/overview]] — iMessage extraction stack (existing overview; linked, not forked)
- [[wiki/work/tech/grok-build/overview]] — Grok build work (existing overview; linked, not forked)
- [[wiki/work/tech/max-framework/overview]] — MAX/CATO framework (existing overview; linked, not forked)

## Not documented

No GRIPNOTIC-specific production tooling (DAW templates, plugins, sample management) is documented anywhere in the record as of 2026-09-11. Re-verified 2026-09-17: kb/ and wiki/ searches return no GRIPNOTIC production-tooling evidence — the music archive (playlists, Exportify CSVs) is documented as *data*, not as *tooling*. If such tooling is described, it gets an entry here.
