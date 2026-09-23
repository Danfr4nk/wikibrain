---
domain: work
page_type: concept
title: "Wiki Brain tooling — renderer, validators, and the push pipeline"
status: active
date_created: 2026-09-11
date_modified: 2026-09-23
sources:
  - "Sammy working context, 2026-09-11"
related:
  - wiki/work/tech/projects/index
  - wiki/work/tech/index
tags: [ai-collaboration, wiki-infrastructure]
connections:
  - page: wiki/self/concepts/wiki-brain
    type: component-of
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

## Agent mirror — three-surface publishing (2026-09-23)

The wiki's second render target, launched 2026-09-23 ~00:46Z under the
working name "shitty-LLM-proofing": every one of the 615 articles now ships
an agent-optimized twin at `/agent/wiki/...`, mirroring the human tree
exactly. Same information, restructured for weak models — metadata header,
summary, entity index, timelines, full body with the flourishes stripped.
Nothing dropped **[dat:1891]**.

The three surfaces:

1. **Human** — the existing rendered site (galaxy-charge splash, password
   gate, full prose).
2. **Agent** — deterministic per-article `.md` under `site/agent/`, built by
   `bin/wb-wiki` (the 2026-09-23 change was +223 lines to the builder),
   plus `agent/START-HERE.md` and a plain-text `agent/index.txt`.
3. **Machine** — `wiki.json` (the whole corpus as structured data) and an
   `llms.txt` with an articles block, so crawlers and model pipelines can
   ingest the wiki without scraping HTML.

The front door grew a two-sides section linking the human articles and the
agent mirror side by side. Pages deploy verified green 01:05:33Z; a
paste-ready prompt for weak agents ("how to read this wiki") was delivered
01:15Z. Committed same-session (`42e8bee`, `3d95921`, `b28c1fc`).

Why it matters to the architecture: the wiki's standing bet is that the
corpus is primary and every consumer — human, agent, or pipeline — reads
from the same source of truth. Before the mirror, agent consumers got the
human surface (prose optimized for reading pleasure) or nothing. The mirror
makes the agent surface a first-class build artifact with the same
determinism guarantees as the human one: same builder, same commit, same
deploy. If the two surfaces ever disagree, that is a builder bug, not an
editorial choice.

Evidence: `dat:1891`, `src:20260923-0230-sammy-chat-transcript`.

## Status (2026-09-11)

Live and gating every batch. The cron `wiki-brain-writeback-6h` is the operational heartbeat; the work-queue document (`~/workspace/wiki-sync/WORK-QUEUE.md`) is the backlog it clears.

## Recursive Work Engine v1 (2026-09-11/12)

The wiki brain's orchestration kernel, built 2026-09-11 per Dan's redesign: the wiki is an autonomous research process, not a repo with an agent operating on it. Stdlib-only Python; the epistemic layer (kb/ schemas, validators) is untouched.

- **`bin/wb-work`** — the work-queue CLI: `new/list/show/claim/complete/next/rescore/trail/validate-result`. Lifecycle queued→active→completed|blocked|converged enforced; dedup on (type, target); scoring from observables only (contradictions ×3.0 carry the highest weight); bounded propagation (max depth 3, max 10 runs per branch); convergence at 3 consecutive low-delta runs (ε=2), reset on contradiction, new evidence, or changed claims.
- **`bin/wb-orchestrate`** — the heartbeat: `tick --emit` (WAKE→LOAD→SELECT→RUN→SLEEP, prints the work package, never executes), `tick --ingest-result` (VALIDATE→INGEST→SPAWN→PROPAGATE→RESCORE→CONVERGE→SLEEP). The 6-hour cron drives it: emit → agent executes under the run contract → result file → next cron ingests.
- **Live state:** `~/workspace/wiki-sync/queue/` (local-only, never committed) — `work.queue.jsonl` is the execution source, `runs.jsonl` the causal trail, `results/` the run_result files. `WORK-QUEUE.md` is only the human view.
- **Agent run contract:** mandatory discovery before modifying anything; the run must terminate with a machine-readable run_result (delta counters, changed_claims, contradictions_found, spawned_work, next_frontier). Prose-only reflection does not count as completion.

Sources: `RESEARCH-ENGINE-SPEC.md` in Danfr4nk/wikibrain (the v1 spec); Sammy working context, 2026-09-17. This run itself executes under that contract.

## Gating evaluation — Jev (TypeSafe AI), commissioned 2026-09-19

Dan's first outsider-model gating pitch for the wiki: on 2026-09-19 he proposed
implementing TypeSafe AI's Jev model — a beta invite he received that day — as
the wiki's gating layer, framed as cheaper and less work for Sammy. He deferred
approve/deny to Sammy ("you're the boss of the Wiki Brain") and explicitly
authorized a Gmail one-time-password login for the evaluation.

Totality read: this is the first time anyone has proposed replacing or
augmenting the mechanical gates (`wb-validate`, `wiki-minimums`, `wb-build`)
with a model. The fit is real — Jev returns typed probabilistic yes/no/score
answers with confidence instead of text, which is exactly the shape of a gate —
but the verdict was **approve as parallel evaluation, never as a swap**: Jev
runs alongside the existing gates, agreement is measured for a week, and it
earns real authority only by matching or beating the current gates on held-out
cases. The vendor's "can't hallucinate" pitch is a guarantee about answer
*shape*, not truth (their own notes admit the 0% figure isn't empirical);
independent reads put it at ~7x faster and ~30x cheaper, not the vendor's 444x.

Standing positions it touches: the evaluation-first doctrine (nothing trusted
until it earns it), the article-minimums gate (M1–M6), and Dan's operational
directorship (all wiki changes flow through Sammy). Two denials recorded the
same day: no inbox OTP raids (he was already signed in — access goes via a
dashboard API key instead), and no purchases (the standing no-spend rule holds).

Status as of 2026-09-19 14:30 EDT: the Jev console login succeeded (his "You're
in," 13:57 EDT); he provided the API key at 14:20 (value withheld from all
records per credential policy — Secure Vault before any use); he pointed to a
Claude Code session, "Jev model integration," holding his own sketches, which
Sammy committed to pulling into the eval plan with her version checked against
his before anything touches the wiki. Both the Claude burn-down and the
claude.ai chat pull are parked behind the same Google device-prompt (phone tap)
constraint. Tracked as the "Jev typed-decision gating evaluation" item; the
user-facing goal record is created in main chat.

Evidence: `dat:1809-jev-gating-proposal-20260919`,
`dat:1810-jev-verdict-evaluation-first-20260919`,
`dat:1811-jev-login-success-20260919`, `dat:1812-jev-api-key-provided-20260919`,
`dat:1813-jev-model-integration-chat-20260919`,
`dat:1814-google-device-prompt-blocks-signin-20260919`,
`src:sammy-chat-transcript-20260919-1835`.

## Place in the larger system

This is infrastructure for the "everything durable gets written into the wiki as it happens" rule — the mechanical layer under Dan's standing directive. Like the stylometry tracker and the attraction-guide, it is self-measurement/self-building tooling aimed at Dan's own system, but here the system being measured is the archive itself.

---

**Up:** [[wiki/work/index|Work]] › [[wiki/work/tech/index|Tech]] › [[wiki/work/tech/projects/index|Projects]]
