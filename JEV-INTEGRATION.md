# JEV-INTEGRATION.md — the System One integration

**Status:** built and verified against the live API, 2026-09-19.
`bin/wb-jev` exists, `tests/test-jev` covers it with 50 offline checks, and two
gates run in CI. The credential works, the wire format is settled, and the full
pipeline has been run end to end.

**No `kb/` content has been sent.** Every live call so far used invented
lighthouse-and-collier nodes. The corpus stays put until the retention question
in §8 is answered.

Jev is a genuinely good fit for two of the four jobs named below, and a bad fit
for a third that currently looks like the same job. The useful part of this
document is the boundary.

## What is built

| Path | What it does | Needs a key |
|---|---|---|
| `bin/wb-jev questions` | prints the question payload, built from `schema/edges.json` | no |
| `bin/wb-jev enum-check` | **CI gate** — questions must match the vocabulary | no |
| `bin/wb-jev pairs` | mines and scores candidate node pairs from `kb/` | no |
| `bin/wb-jev ping` | verifies the credential, reports which auth header worked | yes |
| `bin/wb-jev ask A B` | one pair, prints the typed proposal (`--both-ways`) | yes |
| `bin/wb-jev run --pairs F` | batch, writes proposals as JSONL (`--verify-direction`) | yes |
| `bin/wb-jev calibrate` | re-decides the 81 audited edges, scores agreement | yes |
| `bin/wb-jev review F` | renders proposals as a markdown queue | no |
| `tests/test-jev` | **CI gate** — 50 offline checks | no |

Schema: `asserted_by` gains `system_one`, and edges gain `confidence` (0–1),
required when `asserted_by = "system_one"` and enforced by `bin/wb-validate`.

**Measured on the real corpus:** 1,569 nodes yield **5,117 evidenced candidate
pairs** — 2,335 of them pairs where one node already *cites* the other and no
typed edge was ever written. **The entire sweep costs $0.53** — $1.06 with
`--verify-direction`, which is what the direction bug in §7 argues for.

---

## 1. What Jev actually is

TypeSafe AI, early access from 2026-09-15, waitlist-gated. Founded by Diogo
Almeida (ex-OpenAI). TypeSafe calls the category a **System One Model**.

The architecture is the whole story: Jev is **not autoregressive**. It does not
generate tokens. It takes a state plus a set of typed questions and returns, in
one parallel pass, a value drawn from a schema you defined — with a calibrated
probability attached.

| | |
|---|---|
| Endpoint | `POST https://api.typesafe.ai/v1/systemone` |
| Model route | `jev-latest` → `jev-1.13.0` |
| Auth | `TYPESAFE_API_KEY` |
| Context | 64k total per request; 32k for state + longest question |
| Input | text only — string, JSON object, or array of strings |
| Price | **$0.042 / M input tokens. Output tokens free.** |
| Latency | 70–500 ms |
| Rate limit | 250k tok/s, 1,200 req/min |
| SDKs | official Python and JavaScript; plain HTTP otherwise |

### The three primitives

**Noul** — a proposition, returns a probability 0–1. No separate confidence
field; the probability *is* the answer.

**Choice** — one option from a predefined set, **up to 255 options**. Returns
the winner, a probability for *every* option, and a confidence value describing
how peaked the distribution is.

**Score** — a position on an ordered scale of 2–10 levels, each level given a
concrete definition. Returns a score (which may land *between* levels as a
probability-weighted position), per-level probabilities, and confidence.

### Request shape — **as documented, and wrong**

The block below is what every published write-up shows. Two things in it are
rejected by the live API: the capitalised `type` values, and the array form of
`choice.criteria`. **§7 has the shape that actually works** — this is kept only
so the discrepancy is visible.

```json
{
  "state": { "...": "your application data, JSON or string" },
  "questions": {
    "department": {
      "type": "Choice",
      "instructions": "Which team should handle this",
      "criteria": {
        "billing":   "Payment or subscription issues",
        "technical": "Bugs or integration problems"
      }
    },
    "refund_requested": {
      "type": "Noul",
      "instructions": "The customer is explicitly asking for a refund"
    },
    "frustration": {
      "type": "Score",
      "instructions": "How frustrated the customer appears",
      "criteria": ["Calm, just stating facts", "Frustrated but civil", "Very angry"]
    }
  }
}
```

```json
{
  "answers": {
    "department":       {"choice": "billing", "probabilities": {}, "confidence": 0.92},
    "refund_requested": {"noul": 0.85},
    "frustration":      {"score": 1.5, "probabilities": [], "confidence": 0.88}
  },
  "model": "jev-1.13.0"
}
```

Questions in one request are evaluated **independently and in parallel** against
the same state. Batching many questions costs almost nothing extra in latency.

### What it cannot do — read this part twice

1. **No text.** Not a sentence, not a phrase, not a label it invented.
2. **No explanation.** It returns a decision, never a justification.
3. **No reasoning chain.** Single pass. If question B depends on A's answer,
   that is two serial requests.
4. **No lookup.** It sees only the state you hand it. No retrieval, no web.
5. **No dynamic options.** Choice options are fixed at request time.
6. **No memory.** Stateless across requests.

"Zero hallucinations" is a claim about *type safety* — it cannot emit a value
outside your schema. It says nothing about whether the value it picked is right.
TypeSafe is explicit about this and so should we be: **calibration is not
correctness.**

---

## 2. First, a correction to the premise

You said "the gates and the edging." In this repository those are three
different things and only two of them are inference.

**`bin/wb-gate` is not inference and never was.** It is the SHA-256 password
overlay injected into the built site by `.github/workflows/pages.yml`. It costs
nothing to run and Jev has no business anywhere near it. There is no saving
here. Mentioning it so you don't go looking for one.

**The validation gates — `bin/wb-validate`, `tests/test-invariant`,
`bin/wiki-lint`, `bin/wiki-connect check` — are deterministic and must stay
that way.** The layer invariant ("a node cites only strictly-lower layers") is
integer comparison. `basis = "speculative"` with `strength = "strong"` is a
lookup. Putting a probabilistic model behind a rule that is currently exact
would be a straight downgrade, and it would be the kind of downgrade that is
invisible until a conclusion is already published. **Code calculates. Jev
judges.** Nothing that `wb-validate` currently decides should move.

**What is actually expensive is the semantic judgement a frontier model makes
by hand today**, and that judgement lives in exactly three places. That is
where Jev goes.

---

## 3. The real integration sites, ranked

### Site 1 — edge typing (`kb/`) — **the strongest fit in the repo**

`schema/edges.json` is already the exact object Jev's `Choice` primitive wants:
a closed vocabulary, declared as data, with per-family semantics written out in
prose. 23 relations against a 255-option ceiling — and 19 once the derived
inverses are dropped (see below). It fits with room to spare.

Six questions, one request, evaluated independently and in parallel. Every
option list is derived from `schema/edges.json` at runtime — `bin/wb-jev` never
hand-transcribes the vocabulary, and `enum-check` fails CI if it drifts.

| Question | Primitive | Options | Source |
|---|---|---|---|
| `relation_exists` | Noul | probability 0–1 | — |
| `direction` | Choice | 2 (which node is the source) | — |
| `family` | Choice | 6 | `families[*].claim` |
| `rel` | Choice | **19** | `families[*].relations` minus derived inverses |
| `strength` | Score | 4 ordered levels | `strength`, reversed to run low→high |
| `basis` | Choice | 3 | `basis` |

Three decisions in that table are worth defending.

**`asserted_by` is not asked.** For an edge this tool proposes, the answer is
known by construction: a System One model asserted it. Asking a model to report
its own identity is theatre, and the answer is set in code.

**`rel` offers 19, not 23.** `ARCHITECTURE.md` says inverses are derived, never
written twice — write `preceded`, and `wb-build` derives `followed`. Offering
both halves lets the model answer `followed` with direction `b_to_a`, which is
`preceded` `a_to_b` said twice: precisely the two-records-of-one-fact drift the
edge rework exists to end. So the four derived spellings are dropped from the
choice set and `direction` carries direction alone. `enum-check` asserts it.

**`strength` is a Score, not a Choice**, because it is ordered — and that buys
something the current system does not have. A Score can land *between* levels.
An edge returning 1.6 on the weak→moderate axis has genuinely contested
strength, and the record should hold that rather than round it away. `wb-jev`
**floors** it to `weak` and keeps the raw 1.6 with a `between_levels` flag:
calling 1.6 `moderate` states more than the model said, and this repository
already takes that line elsewhere — per-thread totals are floors rather than
"a number that looks exact and isn't" (dat:0003).

**The prize — and it is not the one it first looks like.** `bin/wb-validate`
carries a warning for edges lacking `strength` or `asserted_by`, "provisional
rather than audited" (line 403). The obvious pitch is that Jev clears that
warning cheaply. Run the validator and that pitch evaporates:

```
1569 nodes   L0:141  L1:1213  L2:129  L3:59  L4:16  L5:11
81 edges   causal:2  editorial:1  semantic:4  structural:65  temporal:9   (81/81 audited)
```

**Every edge is already audited. There are only 81 of them, against 1,569
nodes** — a density of about 0.05 edges per node, and 65 of the 81 are
`structural`, which is the cheapest family to assert. Two causal edges. Four
semantic. Zero narrative, in a corpus `ARCHITECTURE.md` describes as "loud,
self-narrating and performative" and for which the narrative family was
specifically built.

So the bottleneck is not audit quality. It is that **the graph is almost
entirely unwritten**, and it is unwritten because deciding whether a defensible
typed relation exists between two nodes — and which of 23 it is — costs a
frontier model a full read of both. At 1,569 nodes that read has never been
affordable at scale, so it has been done 81 times.

That reframes the whole integration. Jev is not an audit tool here. It is the
thing that makes the *first* full sweep of the graph possible at all.

### Site 2 — connection candidate triage (`wiki/`) — strong fit, with a hard limit

`bin/wiki-connect candidates` mines pairs from four signals (shared sources,
unlinked co-mention, co-citation, tag overlap), scores them with hand-tuned
weights, and writes `connection-queue.md` with a blank line per pair:

```
- [ ] type: ______  claim: ______
```

Those two blanks are not the same job.

**`type:` is a Choice and Jev owns it.** **`claim:` is a sentence and Jev
cannot write it — at all, ever, by construction.** This is the limit to
internalise before budgeting: Jev can take the queue from 60 unranked pairs to
60 pairs that arrive pre-typed with a probability, and it can kill the pairs
that are merely co-occurrence before a writing model ever sees them. It cannot
close the loop. A prose model still authors every claim sentence.

That is still a large win, because the current cost is dominated by a frontier
model *reading both pages to discover the pair is worthless*. Jev does that
triage at $0.042/M.

**Blocker, and it is a real one:** this repo has **two incompatible edge
vocabularies**.

- `schema/edges.json` — 23 relations, 6 families, for `kb/`
- `bin/wiki-connect` `EDGE_TYPES` (line 33) — 19 relations, different names
  (`evidences`, `instantiates`, `parallels`…), for `wiki/`

And `CONNECTIONS_SPEC.md`, cited as the authority by *both* `wiki-connect` and
`wiki-crosslink`, **does not exist in the repository.** `schema/edges.json`
explicitly *removed* `evidences` as "`B cites A` written backwards"; the
`wiki/` vocabulary still uses it.

A Choice question needs one enum. Site 2 cannot be built until that is
reconciled or a deliberate decision is made to keep two vocabularies and run
two question sets. This is worth fixing regardless of Jev.

### Site 3 — work-item typing in the research engine — good fit, small volume

`bin/wb-work` carries `WORK_TYPES` (8) and `PRIORITY_BASES` (8), both closed
enums, both currently assigned by the agent writing the run result. Both are
Choices.

Note what must **not** move: `compute_score` in `bin/wb-work`. Per
`RESEARCH-ENGINE-SPEC.md` requirement 5, the score is computed by the
orchestrator from observables only, and "self-reported uncertainty is
deliberately absent from the formula." That is a deliberate epistemic
commitment. Jev supplying a score would violate it. Jev may type the item; the
orchestrator still scores it.

### Site 4 — ingest triage — good fit, needs a spec first

`ingest-queue.json` is 497 rows of `{slug, corpus_line, status, worker,
dat_range, span}`, and `bin/ingest-apply` takes an LLM's block-format response.
Routing a raw fragment to a target layer (1–6) and a target node is a Choice
plus a Noul ("this fragment contains a datum not already in the corpus"). Worth
doing, but the decision boundary here is less crisply defined than Sites 1–3,
and it should follow them rather than lead.

### Explicitly out of scope

Prose. Claim sentences. Falsifiers. Testimony handling. Anything under the
`CLAUDE.md` standing directive about the living person — a model that returns a
probability and no reasoning is the wrong instrument for a judgement that
exists precisely because it needs to be defensible in words.

---

## 4. The epistemic question you have to answer before any of this ships

`schema/edges.json` defines `asserted_by = ["self", "external", "llm", "other"]`,
and `ARCHITECTURE.md` says why:

> mirrors `perspective` on interpretations, for exactly the same reason: an
> LLM's inferred edge and a stated one must never be indistinguishable.

**Jev is not an LLM.** It is non-autoregressive, it generates no text, and it
returns a calibrated distribution rather than an assertion. Filing its output
under `llm` is arguably a category error. Filing it under `other` is worse —
that's the junk drawer.

Two options, and this is yours to call:

**(a) Reuse `llm`.** Zero schema change. Defensible on the grounds that the
distinction the field exists to draw is "a machine inferred this" vs "a human
stated it", and Jev is on the machine side. Loses the ability to ever query
*which* machine.

**(b) Add `system_one` to the enum.** Truthful, and it buys something concrete:
a Jev-asserted edge carries a *number*, where an LLM-asserted edge carries only
the fact that a model said so. Those are not the same epistemic object and the
record can hold the difference. Costs a schema change, a `wb-validate` update,
and a migration decision for existing edges.

I'd take (b). The whole design premise of this repository is that two ways of
saying one thing, with one of them unenforced, is the asymmetry to eliminate —
and this is the inverse case: two genuinely different things being spelled the
same way.

**Related, and non-negotiable either way:** Jev returns a probability. That
probability must be **stored, not thresholded away**. An edge written at
confidence 0.61 and an edge written at 0.98 are different claims. Proposal: a
`confidence` float on the edge alongside `strength`, or a sibling field —
naming is open, but discarding the number is not. The current system records
one bit ("an LLM said so"). Throwing away a calibrated distribution to get back
to one bit would be the one way to make this integration a net loss.

---

## 5. `bin/wb-jev` — built

One stdlib-only client, matching repo convention (`urllib.request`, no
dependencies, per `RESEARCH-ENGINE-SPEC.md` non-goals). Deterministic code owns
control flow; Jev supplies judgements; deterministic code decides what to do
with them.

```
kb/ nodes  →  wb-jev pairs  →  wb-jev run  →  proposals   →  wb-jev review  →  a writing pass
              (deterministic)   (Jev judges)   (JSONL +        (deterministic)   (human or LLM)
                                               probabilities)
```

```
wb-jev questions                  print the built payload            offline
wb-jev enum-check                 CI gate: questions match the spec  offline
wb-jev pairs [--limit N] [--out]  mine + score candidate pairs       offline
wb-jev ping                       verify credential, report auth     network
wb-jev ask <id-a> <id-b>          one pair, typed proposal           network
wb-jev run --pairs F [--out]      batch to proposals JSONL           network
wb-jev calibrate [--limit N]      score against the 81 audited edges network
wb-jev review <proposals>         render a markdown queue            offline
```

**`enum-check` is load-bearing and runs in CI.** `schema/edges.json` is the
declared single source of truth, and `wb-validate` already fails if
`node.schema.json` drifts from it. The question set is a *third* copy of that
vocabulary, so it gets the same treatment: built from the file at runtime, never
hand-transcribed, and asserted on every push. It also fails if a relation is
added without a definition, if a derived inverse leaks into the choice set, or
if the vocabulary ever outgrows the 255-option ceiling.

`schema/edges.json` gained a `definitions` map — one line per relation, stating
the criterion for choosing it — because the Choice question needs per-option
text and the alternative was a second hand-written copy of the vocabulary
living inside the tool. Same file, same rule, one source of truth.

### Thresholds are not set, deliberately

`wb-jev calibrate` re-decides the 81 hand-audited edges and reports agreement
per question, plus observed accuracy bucketed by the model's own confidence.
That last table is the threshold evidence: it says what a confidence of 0.7
has actually been worth on this corpus.

**No cutoff is hard-coded until that has been run.** TypeSafe's own guidance is
to validate cutoffs against real domain data. And the honest caveat is printed
by the tool itself: 81 edges, 65 of them `structural`, is enough to catch a
systematic disagreement and nowhere near enough to certify a cutoff. Read the
misses.

### Nothing writes to `kb/`

`bin/wiki-crosslink` sets the rule for the whole repository — "This tool does
not write edges and must not be made to. It produces CANDIDATES" — and Jev does
not change the argument. It produces *better* candidates, carrying a number. A
human or a writing model still commits them, and still has to write the claim
sentence, which Jev cannot do at all.

This is asserted rather than promised: `tests/test-jev` hashes every file under
`kb/` before and after running the offline subcommands and fails if a byte
moves, and separately pins that no write path in the tool targets `KB`.

---

## 6. Cost

**Measured, not estimated.** `bin/wb-jev pairs` run over the real `kb/`:

```
nodes            1569
raw pair space   1,230,096
evidenced pairs  5,117
  score >= 4       534
  score >= 6        98
  score >= 8        42
signal mix: cites_directly 2335, shared_source 2816, shared_tag 798,
            shared_subject 178, names_unlinked 32
median request  ~2,470 tokens (state + all six questions)
```

| Pairs | Input tokens | Cost at $0.042/M |
|---|---|---|
| 1,000 | 2.5M | **$0.10** |
| **5,117 — every evidenced pair** | 12.6M | **$0.53** |
| 10,000 | 24.7M | **$1.04** |

Output is free. At 70–500 ms and 1,200 req/min the full sweep is a few minutes
of wall clock.

**The number to stare at is `cites_directly`: 2,335.** Those are pairs where
one node already *cites* the other and no typed edge was ever written. The
evidence link exists; the content claim was never made. That is not a cost
problem being solved — it is a whole layer of the graph that was never
affordable to write, sitting in plain sight.

Your instinct was right, and understated. This is not a marginal saving over
frontier inference for the typing work — it is a different order of magnitude.

But the saving is the less interesting half. **At $0.53, the question stops
being "can we afford to audit the edges" and becomes "why is the graph only 81
edges wide."** Those are different projects. The first is cost reduction on
work already being done; the second is work that has never been done because it
was never affordable. Site 1 is the second kind.

**The saving is real for Sites 1, 3 and 4, and partial for Site 2**, where a
prose model still has to write every claim sentence.

---

## 7. The wire format, as it actually is

Settled by probing the live API. **The published documentation is wrong in two
places, and both produce a bare `HTTP 400 {"error_type":"api_usage_error",
"message":"Invalid request."}` with no indication of the cause.** Recorded here
so nobody re-derives it.

| | Documented | Actual |
|---|---|---|
| Question `type` | `"Noul"` `"Choice"` `"Score"` | **lowercase**: `noul` `choice` `score` |
| `choice.criteria` | object *or* array, unclear | **object only** — an array is a 422 |
| `score.criteria` | array | **array only** — an object is a 422 |
| `model` in body | "the docs say, the examples omit" | **required** — omitting is a 422 |
| `state` | implied required | **optional**; string or JSON object |
| Auth | env var named, header not | `Authorization: Bearer` |

The useful trick: a *malformed* request returns a FastAPI 422 that names the
offending field and the expected type, while a *well-formed but wrong* one
returns the opaque 400. Sending `{}` enumerates the required fields.

### Response shape

```json
{
  "model": "jev-1.13.0",
  "answers": {
    "relation_exists": {"type": "noul", "noul": 0.86},
    "rel": {"type": "choice", "choice": "caused", "confidence": 0.58,
            "probabilities": {"caused": 0.61, "influenced": 0.34, "preceded": 0.05}},
    "strength": {"type": "score", "score": 2.06, "confidence": 0.47,
                 "legend": {"0": "Tentative…", "3": "Strong…"},
                 "probabilities": {"0": 0.05, "1": 0.14, "2": 0.52, "3": 0.29}}
  },
  "usage": {"input_tokens": 1722, "output_tokens": 361}
}
```

`usage.input_tokens` is what the billing is counted from. A `score` echoes the
level definitions back as `legend`, and keys its probabilities by level index
as strings.

### `confidence` is not the winner's probability

One probe returned `choice: "preceded"` with probabilities `{preceded: 0.53,
caused: 0.47}` and **`confidence: 0.07`**. Confidence measures how *peaked* the
distribution is. A near-tie has a high winning probability and near-zero
confidence, and a threshold that conflates the two would wave through exactly
the coin-flips it exists to catch. `wb-jev` keeps both, and `tests/test-jev`
pins the distinction.

### The direction bug, and why `--both-ways` exists

The first end-to-end run returned **`grounding caused lamp-failure`** —
backwards, on a probe where the lamp failed the night before — at confidence
0.72. The cause was this tool's wording, not the model: the `direction`
question asked "which node is making the claim about the other", which leaked
the `asserted_by` framing into a question about the relation's subject.

Reworded to state the form explicitly (`SOURCE relation TARGET`, "in 'X caused
Y', X is the source"), the same pair returns the correct edge **at confidence
0.99 from both orderings**:

```
OK  a=lamp b=ship: evt:0001 --caused--> evt:0002   dir=a_to_b conf=0.99
OK  a=ship b=lamp: evt:0001 --caused--> evt:0002   dir=b_to_a conf=0.99
```

That order-invariance check is now a standing feature — `ask --both-ways`,
`run --verify-direction`. It doubles cost ($1.06 instead of $0.53 for the full
sweep) and it is worth it: an inverted edge reads as a perfectly plausible
claim, so it is the one error nothing downstream can catch. Disagreement is
**recorded, not resolved** — two runs that disagree mean the pair is genuinely
ambiguous, and that is the finding.

---

## 8. Decisions taken, and what is still open

**Taken while building, both reversible in one commit:**

1. **`asserted_by` gains `system_one`**, rather than reusing `llm` (§4). The
   schema change and its validator rule are a separate commit from the client,
   so reverting it costs nothing if you'd rather collapse the two. `perspective`
   on interpretations is deliberately left alone — interpretations are prose,
   and Jev writes none.
2. **The probability lives on the edge as `confidence`**, 0–1, *required* when
   `asserted_by = "system_one"` and enforced by `bin/wb-validate`. A machine
   judgement recorded without its number is strictly less than what the machine
   said. `confidence` on a `self`- or `external`-asserted edge warns: a person's
   certainty is `strength`.

**Still open, and yours:**

3. **The two edge vocabularies** — reconcile `schema/edges.json` with
   `wiki-connect`'s `EDGE_TYPES`, or run two question sets? And does
   `CONNECTIONS_SPEC.md` get written or get deleted from the tools that cite
   it? (§3, Site 2. **Blocks Site 2 entirely** — Site 1 is unaffected and is
   what got built.)
4. **Beta terms.** TypeSafe states customer requests are not used for training
   and that zero-retention is available to enterprise. This corpus is personal
   and carries a standing directive about a living person. **Confirm the
   retention terms on the beta tier specifically before any `kb/` content
   leaves the machine.** Not a formality, and nothing here has sent a byte.
5. **Whether to sweep all 5,117 pairs or start at a score floor.** `--limit`
   and the `pairs` score make either cheap; the whole sweep is $0.53.
6. **Build order for the rest** — Site 3 (`wb-work` typing) next, then Site 2
   once the vocabulary is settled, then Site 4.

---

## Sources

- [Introducing System One Models & Jev — TypeSafe AI](https://typesafe.ai/blog/introducing-system-one-models-and-jev)
- [Models — TypeSafe AI docs](https://docs.typesafe.ai/models)
- [How to Use Jev: a practical guide — DEV](https://dev.to/valyuai/how-to-use-jev-a-practical-guide-to-typesafes-system-one-model-g5e)
- [Comprehensive project reference for TypeSafe Jev — GitHub gist](https://gist.github.com/pjburnhill/adf8d28efcad9df037bfdece178ef965)
- [Jev: TypeSafe's System One Model That Never Hallucinates — DataCamp](https://www.datacamp.com/blog/system-one-models-jev)
- [TypeSafe AI debuts model for machines that plays Doom — The Register](https://www.theregister.com/ai-and-ml/2026/09/16/typesafe-ai-debuts-model-for-machines-that-plays-doom/5296711)
- [ChatGPT pioneer launches Jev model for programmatic logic — AI News](https://www.artificialintelligence-news.com/news/chatgpt-pioneer-launches-jev-model-for-programmatic-logic/)
