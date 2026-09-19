# JEV-INTEGRATION.md — design, not implementation

**Status:** design only, 2026-09-19. **Nothing in this document is built.**
No code, no dependency, no credential is added by the commit that carries it.
It exists so the decision can be made with the actual API surface in view
rather than from the press coverage.

Jev is real, it is a genuinely good fit for two of the four jobs named below,
and it is a bad fit for a third that currently looks like the same job. The
useful part of this document is the boundary.

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

### Request shape

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
prose. 26 relations against a 255-option ceiling. It fits with room to spare.

Every `kb/` edge declares four fields, and every one of them is a Jev question:

| Field | Primitive | Options | Source of truth |
|---|---|---|---|
| `rel` | Choice | 26 | `schema/edges.json` `families[*].relations` |
| `strength` | Score (ordered!) | tentative → weak → moderate → strong | `schema/edges.json` `strength` |
| `basis` | Choice | stated / inferred / speculative | `schema/edges.json` `basis` |
| `asserted_by` | Choice | self / external / llm / other | `schema/edges.json` `asserted_by` |

Plus one Noul that should run *first* and gate the rest:

> `relation_exists` — "These two nodes stand in a defensible typed relation, as
> opposed to merely co-occurring in the same corpus."

`strength` is ordered, not categorical, which means it is a **Score**, not a
Choice — and that buys something the current system does not have. A Score can
land *between* levels. An edge that comes back at 1.6 on the weak→moderate axis
is an edge whose strength is genuinely contested, and that is a fact the record
should hold rather than round away.

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
typed relation exists between two nodes — and which of 26 it is — costs a
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

- `schema/edges.json` — 26 relations, 6 families, for `kb/`
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

## 5. Proposed shape: `bin/wb-jev`

One stdlib-only client, matching repo convention (`urllib.request`, no
dependencies, per `RESEARCH-ENGINE-SPEC.md` non-goals). Deterministic code owns
control flow; Jev supplies judgements; deterministic code decides what to do
with them.

```
candidate pairs  →  bin/wb-jev  →  typed proposals + probabilities  →  gate  →  kb/ or queue
   (deterministic)    (judges)         (JSON, never written direct)   (code)
```

Subcommands, roughly:

```
wb-jev ping                       verify credential + print model id
wb-jev edge <node-a> <node-b>     the five-question batch, prints JSON
wb-jev queue [--limit N]          run the batch over wiki-connect candidates
wb-jev enum-check                 assert schema/edges.json matches the built questions
```

**`enum-check` is load-bearing.** `schema/edges.json` is already declared the
single source of truth, and `wb-validate` already fails if `node.schema.json`
drifts from it. A Jev question set is a *third* copy of that vocabulary and
must be checked the same way — built from the file at runtime, never
hand-transcribed, and asserted in CI.

### Confidence bands — the gate design

```
confidence ≥ HIGH   → write the proposal to a review file, pre-filled
MID ≤ c < HIGH      → write it, flagged, sorted to the top of the queue
c < MID             → drop the pair, log the drop
relation_exists < R → drop before the other four questions are even asked
```

Thresholds are unknown until measured. **Do not guess them.** TypeSafe's own
guidance is to validate cutoffs against real domain data, and this repo has the
data to do it: hand-audited edges already exist in `kb/`. Calibrate against
those before any threshold is hard-coded.

**Nothing auto-writes to `kb/` in v1.** `bin/wiki-crosslink` states its own rule
— "This tool does not write edges and must not be made to. It produces
CANDIDATES" — and Jev does not change the argument. Jev produces better
candidates. A human or a writing model still commits them.

---

## 6. Cost

1,569 nodes in `kb/`, carrying 81 edges. Candidate pairs are evidence-gated by
`wiki-connect`'s four signals, so the real volume is order 10³–10⁴, not the full
1.23M pair space.

Per pair: two node `claim` fields plus evidence lines ≈ 1,500 tokens of state,
five questions batched into one request.

| Pairs | Input tokens | Cost at $0.042/M |
|---|---|---|
| 1,000 | 1.5M | **$0.06** |
| 10,000 | 15M | **$0.63** |
| 100,000 | 150M | **$6.30** |

Output is free. At 70–500 ms and 1,200 req/min, 10,000 pairs is single-digit
minutes of wall clock.

Your instinct was right, and understated. This is not a marginal saving over
frontier inference for the typing work — it is a different order of magnitude.

But the saving is the less interesting half. **At $0.63, the question stops
being "can we afford to audit the edges" and becomes "why is the graph only 81
edges wide."** Those are different projects. The first is cost reduction on
work already being done; the second is work that has never been done because it
was never affordable. Site 1 is the second kind.

**The saving is real for Sites 1, 3 and 4, and partial for Site 2**, where a
prose model still has to write every claim sentence.

---

## 7. Verify your access before anything else

You said you don't know if it's set up properly. Check that first — the rest of
this document is worthless if the key isn't live:

```bash
export TYPESAFE_API_KEY='sk-...' && curl -sS https://api.typesafe.ai/v1/models -H "Authorization: Bearer $TYPESAFE_API_KEY" | python3 -m json.tool && echo '--- systemone smoke test ---' && curl -sS -X POST https://api.typesafe.ai/v1/systemone -H "Authorization: Bearer $TYPESAFE_API_KEY" -H 'Content-Type: application/json' -d '{"model":"jev-latest","state":"The 2010 Suboxone start preceded the 2015 relapse by five years.","questions":{"rel":{"type":"Choice","instructions":"Which typed relation holds from the first event to the second","criteria":{"preceded":"Sequence only, no causal claim","caused":"Direct causal contribution","influenced":"Partial causal contribution","resembled":"Similarity, not sequence"}},"defensible":{"type":"Noul","instructions":"A defensible typed relation exists between these two events"}}}' | python3 -m json.tool
```

Three things to confirm from the output, because the docs are new enough that
any of them could be wrong:

1. **The auth header.** `Authorization: Bearer` is inferred, not confirmed — no
   source states it explicitly. A 401 means try `X-API-Key`.
2. **Whether `model` belongs in the body.** The docs say the `model` field
   selects the version; the published request examples omit it. Harmless to
   send; confirm it isn't rejected.
3. **Whether `criteria` for a Choice is an object or an array.** The examples
   show an object for Choice and an array for Score. If Choice accepts a bare
   array, the `schema/edges.json` binding gets simpler; if it wants the object,
   the family `claim` strings in that file become the per-option definitions —
   which is better anyway, since they're already written.

Paste the output back and the client can be written against reality instead of
against documentation.

---

## 8. Open decisions

1. **`asserted_by`** — reuse `llm`, or add `system_one`? (§4. Recommend
   `system_one`.)
2. **Where the probability lives** — new edge field, and what it's called.
   (§4. Not optional.)
3. **The two edge vocabularies** — reconcile `schema/edges.json` with
   `wiki-connect`'s `EDGE_TYPES`, or run two question sets? And does
   `CONNECTIONS_SPEC.md` get written or get deleted from the tools that cite
   it? (§3, Site 2. Blocks Site 2 entirely.)
4. **Beta terms** — TypeSafe states customer requests are not used for
   training and that zero-retention is available to enterprise. This corpus is
   personal and carries a standing directive about a living person. **Confirm
   the retention terms on the beta tier specifically before any `kb/` content
   leaves the machine.** Not a formality.
5. **Build order** — Site 1 first (cleanest enum, biggest win, already has
   hand-audited data to calibrate against), then 3, then 2 after the vocabulary
   is settled, then 4.

---

## Sources

- [Introducing System One Models & Jev — TypeSafe AI](https://typesafe.ai/blog/introducing-system-one-models-and-jev)
- [Models — TypeSafe AI docs](https://docs.typesafe.ai/models)
- [How to Use Jev: a practical guide — DEV](https://dev.to/valyuai/how-to-use-jev-a-practical-guide-to-typesafes-system-one-model-g5e)
- [Comprehensive project reference for TypeSafe Jev — GitHub gist](https://gist.github.com/pjburnhill/adf8d28efcad9df037bfdece178ef965)
- [Jev: TypeSafe's System One Model That Never Hallucinates — DataCamp](https://www.datacamp.com/blog/system-one-models-jev)
- [TypeSafe AI debuts model for machines that plays Doom — The Register](https://www.theregister.com/ai-and-ml/2026/09/16/typesafe-ai-debuts-model-for-machines-that-plays-doom/5296711)
- [ChatGPT pioneer launches Jev model for programmatic logic — AI News](https://www.artificialintelligence-news.com/news/chatgpt-pioneer-launches-jev-model-for-programmatic-logic/)
