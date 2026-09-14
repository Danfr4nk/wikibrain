# Recursive Work Engine v1 — specification

**Status:** v1, built 2026-09-11. **Scope: orchestration kernel only.**
This engine is an autonomous execution layer on top of the existing wiki
brain. It changes nothing about how knowledge is represented — it changes
how investigations get chosen, run, and followed up.

The system stops thinking "what article was I told to edit" and starts
thinking "what is the highest-value unresolved piece of knowledge I can
extract right now" — then asks what that discovery made newly possible,
newly uncertain, newly contradictory, or newly necessary, and turns the
answer into the next work.

## Requirement → implementation map

| # | Requirement | Implemented in |
|---|-------------|----------------|
| 1 | `schema/work.schema.json` — typed work items, 8 work types, spawned_work, next_frontier, run_result; machine-validatable | `schema/work.schema.json` (draft 2020-12, `$defs`: `work_item`, `spawned_work`, `next_frontier`, `run_result`, plus `priority_basis`, `budget`, `provenance`, `delta`); enforced by the `MiniValidator` inside `bin/wb-work`, which supports exactly the subset the schema uses |
| 2 | Persistent JSONL queue; stable ids; dedup; lifecycle queued→active→completed\|blocked\|converged | `queue/work.queue.jsonl` (items), `queue/runs.jsonl` (run records), `queue/branches.json` (convergence state), `queue/README.md` (contract). Lifecycle enforced by `Store.transition` — illegal transitions are hard errors |
| 3 | Agent run contract — structured termination, prose-only reflection fails | `$defs/run_result`: requires `work_id`, `run_id`, `delta` (7 integer counters), `changed_claims`, `contradictions_found`, `spawned_work`, `next_frontier`. `wb-work validate-result` / `complete` reject anything missing a required field. `notes` is optional and never a substitute |
| 4 | Orchestrator — select, execute(via agent), validate, ingest, propagate, rescore, repeat | `bin/wb-orchestrate`: `tick --emit` (WAKE→LOAD→SELECT→RUN→SLEEP), `tick --ingest-result` (WAKE→LOAD→VALIDATE→INGEST→SPAWN→PROPAGATE→RESCORE→CONVERGE→SLEEP), `daemon --results-dir --max-ticks` |
| 5 | Score computed by the orchestrator from observables only | `compute_score` in `bin/wb-work` (formula below). The worker never supplies a score; `priority_basis` is a categorization hint, not a number. Self-reported uncertainty is deliberately absent from the formula |
| 6 | Bounded propagation — max depth, min movement, per-branch budget, dedup, dependency tracking | `ingest_spawns` in `bin/wb-work`: default `max_depth` 3, default `max_runs` 10 per branch (root work id + descendants), branch-local `(type,target)` dedup, `blocked_reason` recorded on refusals, impact bookkeeping engages only when the delta shows `changed_claims>0`, `contradictions_found>0`, or `new_evidence>0` |
| 7 | Convergence detector — epsilon, N consecutive low-delta runs, reset on contradiction/evidence/change | `update_convergence` in `bin/wb-work`, state in `queue/branches.json`. Magnitude = sum of the 7 delta counters; ε = 2; N = 3. Counter resets to 0 on any run with `contradictions_found>0`, `new_evidence>0`, or `changed_claims>0`. On the Nth consecutive low-delta run the branch flips to `converged` and the completed item takes status `converged` instead of `completed` |
| 8 | 6-hour cron driver — the cron is the heartbeat | Wiring below. Cron does WAKE→LOAD→SELECT→emit; the agent executes; the result file is dropped; the next cron ingests |

## Scoring formula (orchestrator-owned)

```
score = 2.0 * branch_delta
      + 1.5 * affected_claims
      + 3.0 * contradiction_severity
      + 1.0 * dependency_impact
      + 2.0 * evidence_novelty
      + 0.5 * staleness_days
      + 1.0 * downstream_unresolved
```

| Term | Observable | Rationale |
|------|-----------|-----------|
| `branch_delta` | sum of delta magnitudes of all runs in the item's branch (root + descendants) | branches that keep producing knowledge stay hot |
| `affected_claims` | Σ(`changed_claims` + `contradictions_found`) over runs with the same target | work that moves claims outranks cosmetic work |
| `contradiction_severity` | Σ(`contradictions_found`) over runs with the same target (×3.0 — the highest weight) | a contradiction touching many nodes beats polishing one article |
| `dependency_impact` | declared `dependencies` count + Σ(`affected_articles`) over same-target runs | dense nodes are load-bearing |
| `evidence_novelty` | Σ(`new_evidence`) over runs with the same target | fresh evidence is the fuel |
| `staleness_days` | days since `created_at`, only while the item has never run | untouched work accrues quiet priority; 0 once run |
| `downstream_unresolved` | queued/active descendants of this item | parents of live frontiers stay visible |

Weights live as `W_*` constants at the top of `bin/wb-work` next to
`compute_score`. `rescore` recomputes every queued item's score from the
current files; `next` returns the argmax (ties broken by lowest id).
Nothing in the formula is worker-supplied.

## Causal trail record format

Every ingested run appends one line to `queue/runs.jsonl`:

```json
{
  "work_id": "work-0004",
  "parent_work_id": "work-0001",
  "run_id": "run-0002",
  "at": "2026-09-11T22:40:40",
  "delta": {"new_evidence": 1, "changed_claims": 0, ...},
  "changed_claims": [],
  "contradictions_found": [],
  "causes": [{"to": "work-0006", "cause": "discovered"}],
  "impact": {"changed_claims": [], "affected_article_count": 0, "propagated": true}
}
```

Cause labels on each spawn edge: `contradiction` (spawn is a
`contradiction_audit`), `changed` (parent run changed claims),
`discovered` (parent run found new evidence), `propagated` (otherwise).
`bin/wb-work trail <id>` walks `provenance.parent_work_id` up to the root
and spawned children down, printing the chain with per-edge causes — the
history of *why* the knowledge base changed, e.g.
`work-0001 →discovered work-0004 →changed work-0006`.

## 6-hour cron wiring

The cron is the heartbeat; the agent is the muscle; the queue is the memory.

```
cron WAKE
  ↓  bin/wb-orchestrate tick --emit
  ↓  prints work package JSON (item already claimed → active)
agent executes the investigation
  ↓  writes run_result JSON to the results dir
cron WAKE (next heartbeat)
  ↓  bin/wb-orchestrate tick --ingest-result <file>
  ↓  validate → complete → ingest spawns → propagate → rescore → converge
  ↓  SLEEP
```

For batch catch-up: `bin/wb-orchestrate daemon --results-dir <dir>
--max-ticks N` ingests result files in order, emitting the next package
between ingests. The cron never decides *what* is important — `next`
does, from observables. The worker never decides *what runs next* — it
only fills `spawned_work` and `next_frontier`, which the orchestrator
ingests, bounds, and re-scores.

## Non-goals (explicitly untouched)

- `kb/` and every node in it — no node format, layer, or content changed.
- `schema/node.schema.json` and `schema/edges.json` — the epistemic
  contract is byte-identical; `bin/wb-validate` semantics unchanged.
- `ARCHITECTURE.md` and `SYNC-PROTOCOL.md` — the six layers, the
  constitutional law (cites only strictly-lower layers), testimony
  handling, falsifiers, staleness/`rechecked`, typed edges: all as before.
- The DISCOVER→…→PUBLISH pipeline, the extraction model, the provenance
  model, the graph/node model, and all existing gates (`wb-validate`,
  `wb-check-publish`, `test-invariant`).
- No new dependencies: stdlib-only Python throughout, like the rest of
  `bin/`.

If the engine ever exposes a genuine incompatibility with the epistemic
layer, that is a spec-level decision for Dan — not something v1 resolves
on its own.
