---
domain: work
page_type: concept
title: "Wiki Brain tooling — renderer, validators, and the push pipeline"
aliases: [wikibrain-tooling]
status: active
knowledge: earned
date_created: 2026-09-11
date_modified: 2026-10-05
tier: major
importance: operational
infobox: {}
sources:
  - "Sammy working context, 2026-09-11"
  - "evt:gate-password-deploy-white-screen-20260915"
  - "src:sammy-chat-transcript-20260915-0630"
  - "dat:1891"
  - "src:20260923-0230-sammy-chat-transcript"
  - "dat:1809-jev-gating-proposal-20260919"
  - "dat:1810-jev-verdict-evaluation-first-20260919"
  - "dat:1811-jev-login-success-20260919"
  - "dat:1812-jev-api-key-provided-20260919"
  - "dat:1813-jev-model-integration-chat-20260919"
  - "dat:1814-google-device-prompt-blocks-signin-20260919"
  - "dat:1923-jev-d3-evaluation-20260924"
  - "dat:1925-jev-mechanism-authority-20260924"
  - "src:ARCHITECTURE.md (Danfr4nk/wikibrain)"
  - "src:SYNC-PROTOCOL.md (Danfr4nk/wikibrain)"
  - "src:JEV-INTEGRATION.md (Danfr4nk/wikibrain)"
  - "src:bin/wb-gate (Danfr4nk/wikibrain)"
  - "src:sammy-daily-log-20260925 (detached-HEAD worktree incident, operator record)"
  - "src:sammy-daily-log-20260928 (cron disable, operator record)"
  - "src:sammy-daily-log-20261001 (RAWLOGS revocation; Jev tier 1-3 promotion, operator record)"
related:
  - wiki/work/tech/projects/index
  - wiki/work/tech/index
tags: [ai-collaboration, wiki-infrastructure]
connections:
  - page: wiki/mind/concepts/wiki-brain
    type: component-of
    claim: "These are the actual build/deploy tools of the wiki described in the wiki-brain concept entry: the renderer that produced the 509-entry front page, the validators that gate every PR, and the API-only push pipeline."
  - page: wiki/meta/standing-authorizations
    type: granted-by
    claim: "Grant four (2026-09-24) authorized permanent Jev mechanisms for backlog clearance, subject to evaluation-first and packet-bound limits."
changelog:
  - "2026-10-05: expanded to major tier (>=3,000 words); restructured to canonical article template v1; added renderer, gate, push-pipeline, and writeback coverage, Conflicts in the record, Assessment."
---

# Wiki Brain tooling

The mechanical layer of the wiki — the code that renders it, gates it, and
deploys it. The tooling is what keeps testimony, evidence, and synthesis
from leaking into each other: the wiki's constitution (raw data →
structured fact → interpretation → synthesis, never the reverse) is enforced
by validators that fail the build, not by reminders. A folder of Markdown
cannot stop a conclusion from becoming a premise — nothing in the filesystem
objects when an old interpretation gets quoted as observed evidence. The
tooling exists so that failure has to survive machine inspection first.

Everything below is stdlib-only Python and shell, built in public in the
Danfr4nk/wikibrain repo between 2026-09-11 and 2026-10-05. Three things it
does: render three publication surfaces from one source, gate every push on
a fixed set of checks, and sweep the corpus on an autonomous heartbeat. A
fourth — typed probabilistic judgments from TypeSafe's Jev model — is being
evaluated as a triage instrument, not a gate.

## The renderer and the three publication surfaces

**`bin/wb-wiki`** is the static-site renderer (1,821 lines as of 2026-10-05;
the agent-mirror change of 2026-09-23 added +223 of those). Built 2026-09-11,
it generates the front page with all rendered entries (509 as of 2026-09-11),
"Recently modified" (25) and "Newest" (12); article images render as
`<img>`, `wiki/media/` is copied into the generated site.

On 2026-09-23 ~00:46Z the renderer grew a second render target under the
working name "shitty-LLM-proofing": every one of the 615 articles now ships
an agent-optimized twin at `/agent/wiki/...`, mirroring the human tree
exactly (**dat:1891**). Same information, restructured for weak models.
Nothing dropped.

The three surfaces:

1. **Human** — the existing rendered site (galaxy-charge splash, password
   gate, full prose).
2. **Agent** — deterministic per-article `.md` under `site/agent/`, built by
   `bin/wb-wiki`, plus `agent/START-HERE.md` (dead-simple 3-step
   instructions for weak models) and a plain-text `agent/index.txt` (one
   `title | url` per line, no JSON parsing needed), both surfaced at the top
   of the llms.txt articles block and in home.html's machine-readable
   footer. Articles lead with metadata + summary so truncated fetches keep
   the essentials.
3. **Machine** — `wiki.json` (the whole corpus as structured data) and an
   `llms.txt` with an articles block, so crawlers and model pipelines can
   ingest the wiki without scraping HTML.

The front door grew a two-sides section linking the human articles and the
agent mirror side by side. Pages deploy verified green 01:05:33Z; a
paste-ready prompt for weak agents ("how to read this wiki") followed at
01:15Z; committed same-session (`42e8bee`, `3d95921`, `b28c1fc`). Dan's
verdict, recorded that night: "you just fixed a problem I've been looking at
for months" — getting other models to actually read the wiki
(`src:sammy-daily-log-20260923`, operator record).

The point of the mirror: the corpus is primary, and every consumer —
human, agent, or pipeline — reads from the same source of truth, with the
same determinism guarantees on the agent surface as the human one: same
builder, same commit, same deploy. If the two surfaces ever disagree, that
is a builder bug, not an editorial choice.

## The gates — the constitution, mechanically enforced

The gate chain, per `wikitest/SYNC-PROTOCOL.md`: dedicated worktree + branch
per batch, all gates green, PR, fast-forward merge. `date_modified` is bumped
on every touched article; superseded claims get dated SUPERSEDED annotations —
the append-only rule this tooling enforces on the content applies to itself.

- **`bin/wb-validate`** — frontmatter/schema validator; must print `clean`
  before any push (0 errors, 0 warnings, no duplicate ids). It enforces the
  layer discipline: every node sits at one layer — L0 source (never
  mutable), L1 datum (corrigible), L2 entity/event/relationship, L3
  interpretation/contradiction, L4 pattern, L5 synthesis (most disposable) —
  and may `cite` only strictly-lower layers (`src:ARCHITECTURE.md`). A datum
  may not cite an interpretation; that is a conclusion laundered into
  evidence, and the validator fails the build on it. Nodes are Markdown
  with TOML frontmatter, parsed with stdlib `tomllib`. Ids are `type:slug`,
  stable forever; renaming is a new node plus `supersedes`, never an edit.
- **`tests/test-invariant`** — regression suite for the one invariant:
  each case builds a throwaway knowledge base, runs `wb-validate` against
  it, and asserts both the exit status *and* that the diagnostic names the
  problem — an error that fires for the wrong reason is not a passing test.
  43 passed, 0 failed is the green baseline (operator testimony, 2026-09-11).
- **`bin/wiki-minimums`** — the article-minimums gate, live 2026-09-16 (PR
  #104) on Dan's standing order that every wiki article be at least a
  15-minute read. Six minimums, from ARCHITECTURE.md: M1 LENGTH ≥3,000 body
  words; M2 TOTALITY — full totality analysis against the corpus; M3
  COMPLETE LOG — temporal metrics carry the full log; M4 EVIDENCE — cites
  ≥1 with layer discipline; M5 LIMITS — the article states its own coverage
  and limits; M6 PEOPLE PAGES — the human story leads, forensics stay in
  kb/ or the appendix. Enforcement is changed-file-scoped: only files
  *added* under wiki/ vs origin/main are checked, so new sub-floor articles
  fail without touching the pre-existing corpus — the 397 of 507 substantive
  articles under the floor (median 886 words, measured 2026-09-16) are the
  expansion backlog, never gate failures. `tests/test-article-minimums` runs
  5/5 hermetic. Length comes from totality analysis, evidence, and complete
  logs, never from padding (`src:ARCHITECTURE.md`;
  `src:sammy-daily-log-20260916`, operator record).
- **`bin/wb-check-publish`** — publish-safety check; must report safe (0 new
  sensitive exposures) before any push.
- **`bin/wb-build`** — the wiki build gate (must render).

The design logic: mechanical certainty first. `wb-validate` and
`test-invariant` catch structural sins deterministically; `wiki-minimums`
keeps new writing honest by volume-from-evidence; `wb-check-publish` is the
privacy backstop. Probabilistic instruments (Jev) stay outside this chain
until they earn their way in by measurement, not by pitch.

## The push pipeline — Git Data API, worktrees, and the RAWLOGS revocation

Pushes go through **`push-branch.py`** (`~/workspace/wiki-sync/push-branch.py`)
— history-preserving pushes via the Git Data API. The GitHub REST merge
endpoint 404s under the `custom.github` credential, so merges are done as
fast-forward ref updates via the Git Data API on strictly-ahead branches.
Worktrees under `~/workspace/wiki-sync/worktrees/<batch>` keep concurrent
batches from colliding — a shared-clone collision already happened once, and
it is why the protocol mandates dedicated worktrees (per
`wikitest/SYNC-PROTOCOL.md`; page testimony).

The protocol's loop: candidate findings → corpus check first
(contemporaneous platform-timestamped records outrank retrospective
testimony; never hardcode time-frozen counts) → check for an existing node
(extend, don't duplicate) → draft via `bin/wb-new` (no stubs: timeline,
evidence for/against, contradictions, open questions, cross-links) →
validate + publish-safety → commit → push via Git Data API on a
`sammy/wiki-ingest-expansion` or `sammy/<topic>` branch → one rolling PR
against `main`, Dan merges, never a push straight to `main`. Every factual
claim cites a `dat:` or `src:` node at a strictly lower layer;
testimony-sourced claims carry `attributed_to`
(`src:SYNC-PROTOCOL.md`).

Two recorded pipeline incidents:

- **2026-09-25 — detached-HEAD worktrees break convergence.** A worktree
  created with `git worktree add <path> <ref>` (no `-b`) leaves detached
  HEAD; commits landed there while `sammy/wiki-sync` pointed at the old tip,
  so push-branch.py read `origin/main..sammy/wiki-sync` as empty and
  "converged" the remote ref onto origin/main's tip — the real push then
  422'd (not fast-forward). Fix: `git checkout -B sammy/wiki-sync` in the
  worktree before pushing; create worktrees on the branch (`-b`) going
  forward (`src:sammy-daily-log-20260925`, operator record).
- **2026-10-01 — the RAWLOGS mandate revoked.** The standing contract had
  pushes going to both Danfr4nk/wikibrain and Danfr4nk/RAWLOGS. Superseded
  the same day by his words: "You know what fuck RAWLOGS." Wikibrain is now
  the only writeback destination; RAWLOGS stands, untouched
  (`src:sammy-daily-log-20261001`, operator record).

## The writeback engine — the six-hour heartbeat

The 6-hour write-back sweep (`wiki-brain-writeback-6h`, every 6h anchored
at 02:30 EDT) is the operational heartbeat: it sweeps all Muse chats via
`muse.db`, writes durable findings, validates, builds, merges on green,
and reports. Dan's tripwire: no wiki update in six hours means something
is wrong (operator testimony, 2026-09-11/12).

Per Dan's 2026-09-11/12 redesign, the heartbeat became the **Recursive
Work Engine v1**: the wiki is an autonomous research process, not a repo
with an agent operating on it. Stdlib-only Python; the epistemic layer
(kb/ schemas, validators) is untouched.

- **`bin/wb-work`** — the work-queue CLI:
  `new/list/show/claim/complete/next/rescore/trail/validate-result`.
  Lifecycle queued→active→completed|blocked|converged enforced; dedup on
  (type, target); scoring from observables only (contradictions ×3.0
  carry the highest weight); bounded propagation (max depth 3, max 10 runs
  per branch); convergence at 3 consecutive low-delta runs (ε=2).
- **`bin/wb-orchestrate`** — the heartbeat: `tick --emit` (WAKE→LOAD→
  SELECT→RUN→SLEEP — prints the work package, never executes),
  `tick --ingest-result`
  (VALIDATE→INGEST→SPAWN→PROPAGATE→RESCORE→CONVERGE→SLEEP).
- **Live state:** `~/workspace/wiki-sync/queue/` (local-only, never
  committed) — `work.queue.jsonl` the execution source, `runs.jsonl` the
  causal trail, `results/` the run_result files. `WORK-QUEUE.md` is only
  the human view.
- **Agent run contract:** mandatory discovery before modifying anything; the
  run terminates with a machine-readable run_result (delta counters,
  changed_claims, contradictions_found, spawned_work, next_frontier).
  Prose-only reflection does not count as completion.

On 2026-09-28 ~05:00 EDT the automation cluster (writeback-6h, scrape,
push-watch, and others) was inventoried as disabled — on his word, his
reason: "Because I'm about to do a thing." Last successful writeback run:
09-28 02:44. Not a breakage; the standing writeback rule yields to his
order (`src:sammy-daily-log-20260928`, `-20260930`, operator records).

## Deployment notes — the password gate (2026-09-14/15)

Dan ordered a JS password gate on the Pages reading surface on 2026-09-14 —
explicitly theater (repo and direct assets stay public; his stated purpose:
mild friction in case Kristin gets curious). Secret `WB_GATE_PASSWORD` plus
an injector, `bin/wb-gate`; PR #78 merged. The injector embeds only the
SHA-256 hex digest of the password (never the password itself), mounts the
prompt directly on `<html>` outside the hidden `<body>`, stores the digest
per-tab in sessionStorage, and skips silently when the password is unset so
local builds never break (`src:bin/wb-gate`).

The deploy then went blank: a fresh visitor got a white screen instead of
the black password prompt.

Root cause, reported 2026-09-15 ~04:08Z: the gate hid the whole page but
mounted the prompt *inside the hidden part* — it could never render, so
every fresh visitor got white with no way in. Sammy's bug, fixed in
[PR #80](https://github.com/Danfr4nk/wikibrain/pull/80); Dan merged at
04:49Z; the fix was verified live at 04:56Z with a hard refresh — a fresh
visitor receives the black password prompt
(`evt:gate-password-deploy-white-screen-20260915`,
`src:sammy-chat-transcript-20260915-0630`).

Failure shape worth filing: the MusicTrainer blank-page bug from four hours
earlier is the same class — deploy renders, content invisible — and the
diagnostic rule in both cases was to check what a *fresh* visitor gets, not
what the cached session shows.

## Gating evaluation — Jev (TypeSafe AI), commissioned 2026-09-19

On 2026-09-19 Dan proposed implementing TypeSafe AI's Jev model — a beta
invite he received that day — as the wiki's gating layer, framed as cheaper
and less work for Sammy, deferring approve/deny to Sammy ("you're the boss
of the Wiki Brain") and explicitly authorizing a Gmail one-time-password
login for the evaluation.

The verdict: **approve as parallel evaluation, never as a swap**. This is
the first proposal to augment the mechanical gates (`wb-validate`,
`wiki-minimums`, `wb-build`) with a model, and the fit is real — Jev returns
typed probabilistic yes/no/score answers with confidence, exactly the shape
of a gate — but it runs alongside the existing gates and earns real
authority only by matching or beating them on held-out cases. The vendor's
"can't hallucinate" pitch is a guarantee about answer *shape*, not truth
(their own notes admit the 0% figure isn't empirical); independent reads put
it at ~7x faster and ~30x cheaper, not the vendor's 444x.

Two denials recorded the same day: no inbox OTP raids (access goes via a
dashboard API key instead), and no purchases (the standing no-spend rule
holds). Status 2026-09-19 14:30 EDT: console
login succeeded (his "You're in," 13:57 EDT); he provided the API key at
14:20 (value withheld from all records per credential policy); he pointed
to a Claude Code session, "Jev model integration," holding his own
sketches, which Sammy committed to pulling into the eval plan with her
version checked against his before anything touches the wiki. The Claude
burn-down and claude.ai chat pull are parked behind the same Google
device-prompt (phone tap) constraint.

### 2026-09-24 — D3 evaluation: Jev scored against 65 human-reviewed decisions

Dan proposed the test himself: Sammy ran his own 65 hand-reviewed D3
sources-repair decisions — 26 confirmed-target, 39 confirmed-unresolved,
each verified against the live tree that night — through Jev as a labeled
set. **Result: 83% agreement;
Jev went 39/39 on the rot/unresolved cases at 0.92–0.98 confidence.** All 11
disagreements had one shape: Sammy said confirmed-target, Jev said "needs
investigation" at ~0.5 — every one requiring byte-level file diffs Jev
never saw. The pilot 8/8 showed the same pattern: the
three "wrong content" cases it called unresolved at 0.92–0.98; the five
confirmed targets it got right but hedged ~0.48 vs ~0.46. Jev was never
confidently wrong. The evaluation concluded Jev fits a **triage/pre-sorter role** —
auto-flagging obvious rot, punting "looks plausible, go verify" cases to
humans — not a decider. D3's identity-adjacent calls stay human per Dan's
held line ("don't let the harness guess identity"). Full results:
`dat:1923-jev-d3-evaluation-20260924`.

That same night (~00:47–01:33 EDT) Dan challenged Sammy to design *permanent*
Jev mechanisms to clear large backlogs — the expansion backlog,
contradiction checks, ingest cross-checks, dead-link repair — and, after
comparing the same prompt run past Grok and ChatGPT, approved the direction
with full implementation authority: "approved" (~01:17 EDT), "You're the
boss. I defer to you" (~01:20 EDT), "Go go" (~01:33 EDT). The critique that
traveled with the approval: the LLM proposals asserted labeled eval sets
that do not exist ("80 articles already scored by two humans," etc.) —
building real labeled sets is the price of admission, and Jev stays
packet-bound, evaluation-first, never declaring identity. Recorded as
`dat:1925-jev-mechanism-authority-20260924`, and as Grant four in
[[wiki/meta/standing-authorizations]].

Evidence: `dat:1809-jev-gating-proposal-20260919`,
`dat:1810-jev-verdict-evaluation-first-20260919`,
`dat:1811-jev-login-success-20260919`, `dat:1812-jev-api-key-provided-20260919`,
`dat:1813-jev-model-integration-chat-20260919`,
`dat:1814-google-device-prompt-blocks-signin-20260919`,
`src:sammy-chat-transcript-20260919-1835`.

### What got built for the Jev evaluation

Per `JEV-INTEGRATION.md` (built and verified against the live API,
2026-09-19): Jev is TypeSafe AI, early access from 2026-09-15, founded by
Diogo Almeida (ex-OpenAI) — a "System One Model": not autoregressive, it
takes a state plus typed questions and returns, in one parallel pass, a
value drawn from a caller-defined schema with a calibrated probability.

`bin/wb-jev` exposes `questions`, `enum-check` (CI gate), `pairs`,
`ping`, `ask A B`, `run --pairs F`, `calibrate` (re-decides 81 audited
edges), `review F`; `tests/test-jev` runs 50 offline checks, with two gates
in CI. Schema: `asserted_by` gains `system_one`, edges gain `confidence`
(0–1), enforced by `wb-validate`. Measured on the real corpus: 1,569
nodes yield 5,117 evidenced candidate pairs — 2,335 where one node already
*cites* the other with no typed edge ever written. The entire sweep costs
$0.53 ($1.06 with `--verify-direction`). Guardrail: **no kb/ content was
ever sent** — all live calls used invented lighthouse-and-collier nodes;
the corpus stays put until the retention question is answered.

### 2026-10-01 — Jev tiers 1–3 passed and promoted

All on his word at each tier: "Keep it going until it's ready" (~23:32 Sep
30) → docs verification → mock demo → his "Approved" (23:44) → Tier 1 →
his "Go bb" (23:46) → Tier 2 + live show → Tier 3 verdict ~00:30 Oct 1.
Tier 2 battery: 5 scenarios × 3 seeds = 15 live runs — outcome parity
15/15, 1,764 fresh judgments, 100% clean parses, zero budget exhaustions,
~811.5k in / ~33.5k out tokens with per-run ledgers.
Mapper spot-check (20 hand-labeled messages): 19/20 intent accuracy, stop
recall 100%, 0 false stops. **Verdict: PROMOTED** — Jev is cleared as a
judgment instrument for metered experiments inside jev_test/; the money
gate stands (spend named upfront, stop-and-ask beyond the meter). Total
night spend: ~2,020 calls / ~950k tokens. Writeup:
`jev_test/TIER2_RESULTS.md`; auth via Secure Vault `custom.typesafe`,
probe answering jev-1.13.0 (`src:sammy-daily-log-20261001`, operator
record).

## Conflicts in the record

- **RAWLOGS dual-destination revoked (2026-10-01).** The standing contract
  (SYNC-PROTOCOL.md) had pushes going to both Danfr4nk/wikibrain and
  Danfr4nk/RAWLOGS. Superseded the same day by his words: "You know what fuck
  RAWLOGS." Wikibrain is now the only writeback destination; RAWLOGS stands,
  untouched. Current standing: wikibrain-only.
- **Vendor's 444x claim vs measured figures (2026-09-19).** TypeSafe's
  pitch implies ~444x faster/cheaper; independent evaluation put Jev at ~7x
  faster and ~30x cheaper. "Can't hallucinate" is a guarantee about answer
  *shape*, not truth. Current standing: the measured figures.
- **6h cron role, revised (2026-09-12).** The 2026-09-11 description framed
  writeback-6h as a manual WORK-QUEUE.md clearing sweep. Superseded
  2026-09-12: the heartbeat became the Recursive Work Engine v1, emitting
  and executing scored work packages under a machine-readable run contract.
  The earlier framing is obsolete.
- **2026-09-28: automation cluster disabled on his word, not a failure.**
  The writeback-6h / scrape / push-watch cluster was inventoried as disabled
  ~05:00 EDT on his order ("Because I'm about to do a thing"); last
  successful writeback run 09-28 02:44. Standing writeback rules yield to
  his order. The page's "heartbeat is live" framing from 09-11 is stale
  until he re-enables it.
- **push-branch.py convergence logic bug (2026-09-25).** Worktrees created
  without `-b` left detached HEAD; the script read
  `origin/main..sammy/wiki-sync` as empty and "converged" the remote ref
  onto origin/main's tip, so the real push 422'd. Fix: `git checkout -B
  sammy/wiki-sync` in the worktree, rebase, then push; create worktrees on
  the branch going forward.

## Assessment

The tooling's distinctive claim is that the wiki's epistemic constitution is
machine-enforced rather than human-adhered: validators fail the build on
layer violations; the minimums gate rejects new sub-floor articles without
touching the backlog; the push pipeline routes around credential constraints
instead of assuming them away. It survived two real incidents (the gate
white-screen, the worktree convergence bug) by one diagnostic discipline:
check what the naive consumer gets, read what the machine actually did.
Like the stylometry tracker and the attraction-guide, it is
self-measurement/self-building tooling aimed at Dan's own system — but here
the system being measured is the archive itself: infrastructure for the
"everything durable gets written into the wiki as it happens" rule.

The weak points are operational. The chain runs through one operator and
API-scoped credentials; the tripwire heartbeat is dark on his own order;
and Jev is kept outside the gates until its agreement numbers earn it
entry — the right posture, but the backlogs it was meant to clear still
wait on humans. If Jev's metered experiments keep returning 95%+
spot-check accuracy, the pressure to give it real authority will be the
tooling's next stress test — and the September verdict ("parallel
evaluation, never a swap") is the line to hold it against.

## See also

- [[wiki/mind/concepts/wiki-brain|Wiki Brain]] — the concept this tooling
  builds and deploys.
- [[wiki/meta/standing-authorizations|Standing authorizations]] — Grant four
  (2026-09-24), the Jev mechanism authority.
- [[wiki/work/tech/projects/index|Projects index]]

## References

- `Sammy working context, 2026-09-11`
- `evt:gate-password-deploy-white-screen-20260915`,
  `src:sammy-chat-transcript-20260915-0630`
- `dat:1891`, `src:20260923-0230-sammy-chat-transcript`
- `dat:1809-jev-gating-proposal-20260919`,
  `dat:1810-jev-verdict-evaluation-first-20260919`,
  `dat:1811-jev-login-success-20260919`,
  `dat:1812-jev-api-key-provided-20260919`,
  `dat:1813-jev-model-integration-chat-20260919`,
  `dat:1814-google-device-prompt-blocks-signin-20260919`
- `dat:1923-jev-d3-evaluation-20260924`,
  `dat:1925-jev-mechanism-authority-20260924`,
  `src:sammy-chat-transcript-20260919-1835`
- `src:ARCHITECTURE.md (Danfr4nk/wikibrain)`,
  `src:SYNC-PROTOCOL.md (Danfr4nk/wikibrain)`,
  `src:JEV-INTEGRATION.md (Danfr4nk/wikibrain)`,
  `src:bin/wb-gate (Danfr4nk/wikibrain)`
- `src:sammy-daily-log-20260923`, `-20260925`, `-20260928`, `-20260930`,
  `-20261001` (operator records: agent-mirror verdict, worktree incident,
  cron disable, RAWLOGS revocation, Jev tier promotion)

---

**Up:** [[wiki/work/index|Work]] › [[wiki/work/tech/index|Tech]] › [[wiki/work/tech/projects/index|Projects]]
