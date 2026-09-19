# JEV-FOR-SAMMY.md — the pitch

**For:** Sammy. **From:** a Claude Code session, 2026-09-19.
**Status:** built, measured, not yet swept. Nothing has been written to `kb/`.

Short version: we put a cheap non-generative model behind the edge-typing
judgement, ran it against the 81 hand-audited edges to see whether it could be
trusted, and it found a systematic labelling error in 31 of them. It is right
and the labels are wrong. That finding is worth more than the tool.

---

## 1. Start with the number that should bother you

```
1569 nodes   L0:141  L1:1213  L2:129  L3:59  L4:16  L5:11
  81 edges   causal:2  editorial:1  semantic:4  structural:65  temporal:9
```

**Eighty-one edges across 1,569 nodes.** About 0.05 per node. Sixty-five of the
81 are `structural`, the cheapest family to assert. Two causal. Four semantic.
**Zero narrative** — in a corpus `ARCHITECTURE.md` itself calls "loud,
self-narrating and performative," and for which the narrative family was
purpose-built.

All 81 are audited. The graph is not under-audited. It is barely *written*.

It is barely written for a boring reason: deciding whether a defensible typed
relation holds between two nodes — and which of 23 it is — costs a frontier
model a full read of both. At 1,569 nodes that has never been affordable, so it
has been done 81 times.

Mining the graph for pairs that have actual evidence behind them turns up
**5,117 candidates**. The one that should sting:

> **2,335 pairs where one node already `cites` the other and no typed edge was
> ever written.**

The evidence link exists. The content claim was never made.

## 2. What Jev is, without the marketing

TypeSafe AI shipped it 2026-09-15. It is **not an LLM in the way that matters
here**: it is non-autoregressive and generates no text at all. You hand it a
state and a set of typed questions; it returns, in one parallel pass, a value
drawn from a schema *you* defined, with a calibrated probability attached.

Three primitives: a yes/no with a probability, a choice from up to 255 options,
and a position on an ordered 2–10 level scale.

- **$0.042 per million input tokens. Output free.** 70–500 ms.
- It **cannot** emit a value outside the options you give it. That is the whole
  product, and it turned out to be the load-bearing property.
- It **cannot** write a sentence, an explanation, or a justification. Ever.

That last one is the boundary. It can say *which* relation and *how sure*. It
cannot say *why*. The claim sentence is still a writing job — yours, or a prose
model's. Jev does not replace that work; it stops that work being spent on
deciding whether a pair is worth reading at all.

`schema/edges.json` was already exactly the object this wants: a closed
vocabulary declared as data, with per-family semantics written out in prose.
It needed one addition — a `definitions` map, one line per relation stating its
criterion — so the question set could be built from the file at runtime rather
than hand-copied into a tool. `bin/wb-jev enum-check` fails CI if the two ever
drift, the same treatment `wb-validate` already gives `node.schema.json`.

## 3. What got built

`bin/wb-jev` — stdlib only, no dependencies, per repo convention.

```
kb/ nodes → wb-jev pairs → wb-jev run → proposals → wb-jev review → a writing pass
            (deterministic) (Jev judges)  (JSONL +    (deterministic)  (you)
                                          probabilities)
```

Offline, no key needed: `questions`, `enum-check`, `pairs`, `review`.
Network: `ping`, `ask`, `run`, `calibrate`.

**Nothing writes to `kb/`.** `wiki-crosslink` sets that rule for the whole
repo — a tool produces candidates, and a candidate is a reason to go and read
the sources it names. This is asserted rather than promised: `tests/test-jev`
hashes every file under `kb/` before and after the offline subcommands and
fails if a byte moves.

**Nodes marked `sensitive` are refused on the wire.** TypeSafe states it does
not train on customer input and does not disclose it beyond service providers,
but names no retention period, and zero-retention is enterprise-only. So the
five flagged nodes get the same treatment `wb-build` already gives them.
`--include-sensitive` exists because the judgement is Dan's; it has to be typed
on purpose, every time. Fails closed.

## 4. Four bugs, three of them mine

This is the part worth your attention, because it is how the finding surfaced.

**(a) The published API documentation is wrong.** Every write-up shows
`"type": "Noul"`. The live API wants `"noul"`. `choice.criteria` must be an
object; `score.criteria` must be an array. Both errors return a bare
`400 "Invalid request."` naming nothing. The client built on the docs would
have failed every call. Recovered by noticing that a *malformed* request
returns a FastAPI 422 that names the offending field — so `POST {}` enumerates
the required fields. All recorded in the tool's docstring.

**(b) I batched a dependent question.** TypeSafe's own guidance: *"if B depends
on A's result, make two requests."* Direction depends on which relation holds —
the source slot of `X about Y` has nothing in common with `X preceded Y` — and
all six questions were going out in one parallel batch, which asks the
direction of a relation that has not been chosen yet. Splitting it, measured
only where the relation agreed so the number is uncontaminated:

| | direction |
|---|---|
| one call, six questions | 17/30 — **56.7%** |
| two calls, direction second | 26/29 — **89.7%** |
| + layer semantics in the state | 29/30 — **96.7%** |

**(c) The calibration harness measured nothing.** It passed the canonical
source as `a` every time, so the correct answer was invariably `a_to_b`. A
model that always said `a_to_b` would have posted 100%. Now randomised, seeded.

**(d) The choice set was unconstrained.** All 19 relations offered for every
pair, regardless of what the nodes were. This wasted the one guarantee the
model actually gives.

## 5. The finding

Fixing (d) is where it gets interesting.

`ARCHITECTURE.md`'s layer table says what each layer *is*. A datum is "one
claim about one thing." An interpretation is "explicitly someone's reading." A
pattern is "recurrence detected." None of them act. Only L2 — entity, event,
relationship — is a thing in the world that participates, precedes or causes.

So the options are now narrowed by what the two nodes are. A record-layer node
cannot be offered `participated_in`, because a record cannot participate in
anything. This is not a prompt asking nicely; the value is absent from the
request and the model is structurally incapable of returning it.

Read off the existing graph before building it, not invented: **all 23
L1-sourced edges are `about`**, and the only L3-sourced relations are
`challenges` and `about`.

**Result where it applies: L1-sourced edges went 22/23 → 23/23. 100%.**

L2-sourced scored 10/55, and *that* is the finding. Every one of the 32
misses is `event --about--> entity`, where the model answered
`participated_in` with the direction correctly flipped.

`schema/edges.json`, our own file:

> **`about`** — the first is a record, description or discussion **OF** the
> second — reference, not membership.
> **`participated_in`** — the first took an active part in the second.

```
LABELLED:  evt:graduation-from-full-sail  --about-->  ent:dan
JEV SAID:  ent:dan  --participated_in-->  evt:graduation-from-full-sail
```

A graduation is not a record of Dan. Dan took an active part in it.

**31 of the 81 audited edges are event→entity pairs labelled `about`. The model
disagreed identically on all 31, and on 30 of them it is right.** (The
exception is `ent:wiki-brain --about--> ent:dan` — entity→entity, where `about`
is correct and the model is wrong.)

`about` was being used as a catch-all for "this event involves this person."
That is precisely the generic adjacency link `ARCHITECTURE.md`'s typed-edge
chapter exists to replace:

> Links carry meaning, so `A → B` is not enough.

So the headline `rel` score — 40.7% — is measuring agreement with a labelling
habit, not correctness. `wb-jev calibrate` now prints the baseline skew next to
the score for exactly that reason, and the caveat is written into the source
beside the constraint so the next reader does not mistake a low percentage for
a weak model.

## 6. What this asks of you

Two things, and the first is not the tool.

**A cleanup pass on 31 edges.** They are enumerable, the correction is
mechanical, and the model found them for eight cents. It cannot write the fix —
it emits no text — so this is a writing job. Worth deciding as policy first:
is `evt --about--> ent` ever correct, or is it always a `participated_in` the
other way round?

**A decision on sweeping.** L1-sourced pairs are defensible now on the 100%
result. L2 pairs should wait until the `about` question above is settled,
because half the disagreement there is the baseline rather than the model.

What you would actually get from a sweep: a ranked queue of typed proposals,
each carrying a probability and the evidence it was mined from, in the same
shape as `connection-queue.md`. Not edges. Candidates with a number on them,
and the pairs that are merely co-occurrence already dropped.

## 7. Limits, stated plainly

- **Calibration is not correctness.** Type safety means it cannot return an
  invalid value. It says nothing about whether the value is right.
- **Confidence does not predict accuracy on this corpus.** The buckets are not
  monotonic — 0.6 scored 71%, 0.9 scored 0%. So the failures **cannot** be
  filtered out by keeping only high-confidence answers, and no threshold is
  hard-coded anywhere. That is a real negative result.
- **81 edges, 65 of them structural, is a thin labelled set.** Enough to catch
  a systematic disagreement — it did — and nowhere near enough to certify a
  cutoff.
- **It writes no prose.** Every claim sentence is still ours.
- **The order-invariance check** (`--both-ways`, `--verify-direction`) re-asks
  with the nodes swapped and flags disagreement. It doubles cost and earns it:
  an inverted edge reads as a perfectly plausible claim, so it is the one error
  nothing downstream catches. Disagreement is recorded, never resolved.

## 8. Cost

Five full calibration runs over the 81 edges, plus the probes that reverse-
engineered the wire format: **about eight cents, total.**

A full sweep of all 5,117 evidenced pairs: **$0.53**, or **$1.06** with
direction verification. Minutes of wall clock.

That is the part that changes what is possible. The question stops being "can
we afford to audit the edges" and becomes "why is the graph only 81 edges
wide."

---

**Read next:** `JEV-INTEGRATION.md` for the full design, the wire format, and
the three integration sites that are not this one. `bin/wb-jev --help` for the
commands. `tests/test-jev` for what is actually pinned.
