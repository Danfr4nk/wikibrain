---
domain: work
page_type: concept
title: "Wiki Brain tooling — renderer, validators, and the push pipeline"
status: active
date_created: 2026-09-11
date_modified: 2026-09-15
sources:
  - "Sammy working context, 2026-09-11"
related:
  - wiki/work/tech/projects/index
  - wiki/work/tech/index
tags: [ai-collaboration, wiki-infrastructure]
connections:
  - page: wiki/self/concepts/wiki-brain
    type: implements
    claim: "These are the actual build/deploy tools of the wiki described in the wiki-brain concept entry: the renderer that produced the 509-entry front page, the validators that gate every PR, and the API-only push pipeline."
---

# Wiki Brain tooling

The build, validation, and deployment pipeline of this wiki — the code the wiki runs on, not just the content it holds.

## Components

- **`bin/wb-wiki`** — the static-site renderer. Built 2026-09-11; generates the front page with all rendered entries (509 as of 2026-09-11), "Recently modified" (25) and "Newest" (12) sections. Article images are rendered as `<img>`; `wiki/media/` is copied into the generated site.
- **`bin/wb-validate`** — frontmatter/schema validator; must print `clean` before any push.
- **`bin/wb-build`** — the wiki build gate (must render).
- **`bin/wb-check-publish`** — publish-safety check; must report safe.
- **`tests/test-invariant`** — invariant test suite; 43 passed, 0 failed is the green baseline.
- **`push-branch.py`** (`~/workspace/wiki-sync/push-branch.py`) — history-preserving push via the Git Data API. The GitHub REST merge endpoint 404s under the `custom.github` credential, so merges are done as fast-forward ref updates via the Git Data API on strictly-ahead branches. Worktrees under `~/workspace/wiki-sync/worktrees/<batch>` keep concurrent batches from colliding (a shared-clone collision already happened once).
- **The 6-hour write-back sweep** (`wiki-brain-writeback-6h`) — sweeps all Muse chats via `muse.db`, writes durable findings, validates, builds, merges on green, and reports. Dan's tripwire: no wiki update in six hours means something is wrong.

## Contract

Per `wikitest/SYNC-PROTOCOL.md`: dedicated worktree + branch per batch, all gates green, PR, fast-forward merge. `date_modified` is bumped on every touched article; superseded claims get dated SUPERSEDED annotations — the append-only rule this tooling enforces on the content applies to itself.

## Deployment notes — the password gate (2026-09-14/15)

Dan ordered a JS password gate on the Pages reading surface on 2026-09-14 —
explicitly theater (repo and direct assets stay public; his stated purpose:
mild friction in case Kristin gets curious). Secret `WB_GATE_PASSWORD` plus
an injector, `bin/wb-gate`; PR #78 merged. Then the deploy went blank: a
fresh visitor got a white screen instead of the black password prompt.

Root cause, reported 2026-09-15 ~04:08Z: the gate hid the whole page but
mounted the prompt *inside the hidden part* — the prompt could never
render, so every fresh visitor got white with no way in. Sammy's bug, fixed
in [PR #80](https://github.com/Danfr4nk/wikibrain/pull/80). Dan merged at
04:49Z; the fix was verified live on the new build at 04:56Z with a hard
refresh — a fresh visitor receives the black password prompt.

Failure shape worth filing: the MusicTrainer blank-page bug from four hours
earlier is the same class — deploy renders, content invisible — and the
diagnostic rule in both cases was to check what a *fresh* visitor gets, not
what the cached session shows.

Evidence: `evt:gate-password-deploy-white-screen-20260915`,
`src:sammy-chat-transcript-20260915-0630`.

## Status (2026-09-11)

Live and gating every batch. The cron `wiki-brain-writeback-6h` is the operational heartbeat; the work-queue document (`~/workspace/wiki-sync/WORK-QUEUE.md`) is the backlog it clears.

## Place in the larger system

This is infrastructure for the "everything durable gets written into the wiki as it happens" rule — the mechanical layer under Dan's standing directive. Like the stylometry tracker and the attraction-guide, it is self-measurement/self-building tooling aimed at Dan's own system, but here the system being measured is the archive itself.

---

**Up:** [[wiki/work/index|Work]] › [[wiki/work/tech/index|Tech]] › [[wiki/work/tech/projects/index|Projects]]
