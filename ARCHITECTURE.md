# ARCHITECTURE.md

Wiki Brain is a source-grounded, longitudinal knowledge graph and cognitive
modeling system. It archives raw evidence about a person and their surrounding
world, transforms that evidence into atomic facts, events, entities,
relationships, patterns and higher-order syntheses, and gives an LLM persistent
context for reasoning about that person — **without collapsing evidence,
interpretation and inference into the same layer.**

That last clause is the whole system. Everything below exists to enforce it.

---

## The constitutional law

```
RAW DATA → STRUCTURED FACT → INTERPRETATION → SYNTHESIS.  NEVER THE REVERSE.
```

And immediately beneath it:

> Every synthesis must be capable of being traced back to the evidence that
> produced it.

These are not aspirations in a style guide. They are a mechanically checked
invariant — see **The one invariant** below — and `bin/wb-validate` fails the
build when they are broken.

## Why an ordinary wiki cannot do this

A folder of Markdown pages has no way to stop a conclusion from becoming a
premise. Someone writes "the relationship was abusive" on a synthesis page,
and six months later that sentence is quoted on an event page as though it
were something that was observed at the time. Nothing in the filesystem
objects. The interpretation has silently become a fact, and the evidence that
would let anyone check it is gone.

That failure has a direction. It always runs *downward* — from conclusion into
evidence. So the system is built around a single directional rule, and the
validator enforces it on every commit.

## The six layers

Every node in the knowledge base sits at exactly one layer.

| L | Layer | What it is | Mutable? |
| :-- | :---- | :---- | :---- |
| **0** | `source` | Raw material as acquired. A message export, a photo, a transcript, a document. | **Never.** Append-only. |
| **1** | `datum` | One claim about one thing at one time under one context, with known provenance. | Corrigible |
| **2** | `entity` `event` `relationship` | Structured objects assembled from data. Who, what, when. | Corrigible |
| **3** | `interpretation` `contradiction` | What it might mean. Explicitly someone's reading, never a fact. | Freely revised |
| **4** | `pattern` | Recurrence detected across layer ≤3. | Freely revised |
| **5** | `synthesis` | Cross-domain model. The compressed cognitive picture. | Freely revised |

Mutability runs opposite to altitude, and that is deliberate. The higher a node
sits, the more disposable it is. An LLM's synthesis is the *most* disposable
thing in the system; the source it rests on is the least.

## The one invariant

> **A node may cite only nodes at a strictly lower layer.**

`cites` is the evidence relation. `L3 → L2 → L1 → L0` is legal. Anything level
or upward is not:

- A `datum` may not cite an `interpretation`. That is a conclusion laundered
  into evidence — the exact failure described above.
- A `pattern` may not cite another `pattern`. Patterns of patterns are
  syntheses; call them that and put them at L5.
- Nothing may cite a `synthesis`. A synthesis is a leaf. It is where reasoning
  ends, never where it starts.

The invariant makes the whole graph a DAG with layers as topological levels, so
"trace this conclusion to its evidence" is a guaranteed-terminating walk, and a
citation cycle is impossible by construction rather than by discipline.

Relations that are *not* evidence — `caused`, `resembled`, `contradicted`,
`preceded` — live in `edges`, and they may point in any direction. Only `cites`
is layer-constrained, because only `cites` claims to be evidence. Edges pay for
that freedom differently: each one must declare how hard it is, what it rests on,
and who says so. See [Typed edges](#typed-edges).

## Node anatomy

Markdown with TOML frontmatter. Machine-readable head, human-readable body,
neither destroying the other. Parsed with stdlib `tomllib` — no dependencies.

```markdown
+++
id         = "evt:2010-02-17-suboxone-start"
layer      = 2
type       = "event"
title      = "Started Suboxone"
confidence = "high"
cites      = ["dat:0412", "dat:0413"]

[when]
date   = "2010-02-17"
period = "early-recovery"

[[edges]]
rel      = "preceded"
target   = "evt:2011-first-clean-year"
strength = "strong"
+++

## Summary

Prose for humans. The frontmatter is for machines. Both describe the same
node and neither is authoritative over the other.
```

### Fields every node carries

| Field | Meaning |
| :---- | :---- |
| `id` | `type:slug`. Stable forever. Renaming is a new node plus a `supersedes` field, never an edit. |
| `layer` | 0-5. Must match the type. |
| `type` | One of the types in the layer table. |
| `title` | Human label. |
| `confidence` | `high` `moderate` `low` `speculative` `unknown` |
| `cites` | Evidence. Strictly-lower layers only. |
| `edges` | Typed semantic relations. Any direction, but each declares its own weight. |
| `when` | Temporal block — see below. |

### Layer-specific required fields

- **`source`** — `source_type`, `acquired`, `provenance`, `reliability`.
  Optionally `sensitive = true`, which withholds it from the published site.
- **`datum`** — `cites` naming at least one source. A datum without a source is
  not a datum; it is a belief, and belongs at L3. If any cited source is marked
  `testimony`, the datum must also carry `attributed_to` naming it — see
  [Testimony](#testimony).
- **`interpretation`** — `perspective`, one of:
  - `self` — what the subject believes about themselves
  - `external` — what the accumulated evidence suggests
  - `llm` — what a reasoning system inferred
  - `other` — a third party's reading
  These never silently collapse into each other. "Dan believes X about himself,
  but the longitudinal record suggests Y" is a first-class expressible statement,
  and it is one of the most valuable things the system can say.
- **`contradiction`** — `cites` at least two conflicting nodes, and carries
  `resolved = false` by default. Contradictions are data. The correct output is
  often "the historical record is ambiguous," which beats inventing certainty.
- **`pattern`** — `evidence_count`, `counterexamples`. A pattern that has never
  looked for its own counterexamples is an anecdote.

## Time

A static profile of a human being is inadequate on its face — people are
longitudinal systems. Every node may carry `[when]`:

```toml
[when]
date       = "2018-03-04"      # exact
approx     = "spring 2018"     # fuzzy, when exact is unknown
start      = "2015-11"         # range
end        = "2019-07"
period     = "uniontown-years" # named life period
recurrence = "weekly"
age        = 29
```

Personality is therefore a trajectory, not a snapshot. `state` vs `trait` vs
`adaptation` is a required field on behavioral interpretations, because
"socially withdrawn" (state), "low sociability" (trait) and "avoids people
after repeated conflict" (adaptation) are three different claims that generic
personality language flattens into one.

Temporal contradiction is legal and expected. Someone can be X at 18, not-X at
25, and X again at 37. The system does not force consistency, because human
beings are historical processes rather than internally consistent databases.

## Testimony

Not every source is reliable, and the useful response is neither to trust it nor
to exclude it.

A source marked `testimony = true` is one whose reliability is unestablished: a
prior system's conclusions, a retrospective account, a third party's summary.
Such a source still belongs in the archive — excluding it would create exactly
the blind spot the layer law exists to prevent — but what it supplies is
evidence of **what it asserted**, not evidence that the assertion holds.

Mechanically: every `datum` citing a testimony source must carry
`attributed_to` naming that source, and `bin/wb-validate` fails the build
otherwise. So the datum reads

```toml
claim         = "The prior wiki asserted that Dan met Vaughn in 2013."
cites         = ["src:old-wiki-vaughn"]
attributed_to = "src:old-wiki-vaughn"
confidence    = "high"
```

rather than `claim = "Dan met Vaughn in 2013."` The first is **true and
checkable** — the page does say that — at high confidence. The second is not
established at all, and would have entered the evidence layer wearing the same
badge as a measurement.

What happens next is the point. An independent source in the corpus supporting
the same claim is a *second* datum, and an interpretation resting on both is
stronger than either. A corpus source contradicting it produces a
`contradiction` node. Neither outcome required anyone to decide in advance
whether the old material was trustworthy: the structure sorts it, and the places
where a prior system was wrong become visible objects rather than inherited
assumptions.

This is what makes bulk-ingesting an unaudited archive safe. Its errors are
quarantined at L1 as *things that were said*, and no amount of them can
masquerade as *things that are so*.

## Staleness

The invariant guarantees a conclusion can be **traced** to its evidence. It says
nothing about what happens when that evidence later moves.

A node whose source was rewritten last week still validates, still builds, and
still reads as current. Nothing distinguishes *checked and survived* from
*nobody looked* — and over a corpus that grows by re-reading its own material,
the second silently becomes the majority.

So `bin/wb-validate` flags a node dated earlier than something it cites, and
`rechecked` clears the flag:

```toml
created   = "2026-01-01"
rechecked = "2026-07-01"   # re-read against its citations; nothing changed
```

Recording the null result is the point. A re-check that finds nothing is
invisible unless someone writes it down, and the practice was taken directly
from the system this one replaced — see
[`dat:0022`](kb/data/0022-old-wiki-recheck-propagation.md), which found five such
blocks on one page, four of them concluding that nothing had changed.

## Falsifiers

Any node at L3 or above may declare `falsifiers`: specific observations that
would break it, each concrete enough for someone else to go and look for.

`bin/wb-validate` warns when an L4 `pattern` or L5 `synthesis` declares none. At
that altitude a claim explains a great deal by construction, which is exactly
when "what would show this is wrong" stops being obvious and starts being the
only thing keeping the claim honest. A reading that cannot say what would refute
it is not a reading; it is a preference.

They are deliberately **not** required at L3. An interpretation may legitimately
be a first pass at what something might mean, and forcing a falsifier onto it
manufactures rigour rather than adding it.

## Typed edges

Links carry meaning, so `A → B` is not enough. But a vocabulary alone is not
enough either: the old flat list of seventeen relations could say *that* two
things were connected and almost nothing about the standing of the claim.

The vocabulary lives in [`schema/edges.json`](schema/edges.json) — as data, so
it can be reasoned about as classes rather than scattered through the code as
literals. `bin/wb-validate` fails if that file and the enum in
`schema/node.schema.json` ever drift apart.

### Six families

| Family | Relations | The claim being made |
| :----- | :-------- | :------------------- |
| **temporal** | `preceded` `followed` `occurred_during` | Sequence and containment. **No causal claim whatsoever.** |
| **causal** | `caused` `influenced` `influenced_by` `resulted_from` `depended_on` | Graded contribution. Must declare `basis`. |
| **structural** | `belonged_to` `located_at` `participated_in` `about` | Membership, location, reference. |
| **semantic** | `resembled` `symbolized` `challenges` `contradicted` | Meaning and tension. |
| **narrative** | `mythologized` `performed_as` `disavowed` `reframed` `retold_as` | How a thing was **presented**. Must declare `asserted_by`. |
| **editorial** | `displaced` `displaced_by` | One body of material overtaking another. |

The **narrative family** is the one worth dwelling on. This corpus is loud,
self-narrating and performative, and a dry causal vocabulary has no way to record
that something was dramatised in the telling. `evt:X --mythologized--> ent:Y` is
a claim about the *telling*, not about the event — which lets the record hold the
dramatisation without either endorsing it or flattening it into "he lied." That
is the same separation the layer law already applies to evidence, pointed at
self-presentation.

### What every edge declares

```toml
[[edges]]
rel         = "influenced"
target      = "evt:2010-02-17-suboxone-start"
strength    = "strong"        # strong | moderate | weak | tentative
basis       = "stated"        # stated | inferred | speculative
asserted_by = "self"          # self | external | llm | other

[edges.when]                  # edges are temporal, like nodes
start = "2015-11"
end   = "2019-07"
```

- **`strength`** — `influenced` was previously all-or-nothing.
- **`basis`** — generalises the old `causal_basis` to every family. The old name
  is still accepted for one release and warns on use.
- **`asserted_by`** — mirrors `perspective` on interpretations, for exactly the
  same reason: an LLM's inferred edge and a stated one must never be
  indistinguishable.
- **`[when]`** — a relation true in 2015 can be false by 2020. A system that
  calls personality a trajectory cannot hold its edges frozen.

### Checked mechanically

- Causal-family edges must carry `basis`; narrative-family edges must carry
  `asserted_by`.
- `basis = "speculative"` with `strength = "strong"` is an **error** — a guess
  held with certainty. Strength tracks what the edge rests on, not how
  convincing the guess feels.
- An edge whose window closes before one of its endpoints begins is an error;
  one that opens early is a warning, since imprecise dates are legitimate.
- Edges missing `strength` or `asserted_by` are reported as **provisional rather
  than audited**, so a bulk import is visibly unfinished instead of silently
  passing as settled.

### Inverses are derived, never written twice

`preceded`/`followed`, `caused`/`resulted_from`, `influenced`/`influenced_by`
and `displaced`/`displaced_by` are declared inverse pairs. Write one direction;
`bin/wb-build` derives the other and marks it `derived: true`. Writing both is a
warning — two records of one fact drift, and the site would then show a single
relation as though it were two independent assertions.

Asserting an asymmetric relation in both directions (`A preceded B` *and*
`B preceded A`) is an error.

### Two relations were removed

- **`evidences`** — `A evidences B` is `B cites A` written backwards, and only
  one of those spellings was checked by the layer invariant. Two ways to say one
  thing with one of them unenforced is the precise asymmetry this rework exists
  to end. **Evidence goes in `cites`.**
- **`supersedes`** — still a top-level *field*, meaning "this node replaces that
  one." It was being used as an edge for something quite different: "the thing
  described here overtook the thing described there." That is a content claim,
  and it is now `displaced`. Conflating identity bookkeeping with a claim about
  the world is how a graph starts lying quietly.

## What the system refuses to do

- **Resolve contradictions automatically.** Both claims are preserved, dated
  and attributed.
- **Let synthesis mutate sources.** Concluding "this was abusive" adds an L3
  node. It does not rewrite the L2 events into "abuse occurred."
- **Flatten hindsight onto the past.** If the subject believed "everything is
  fine" during a period later remembered as disastrous, both are recorded. That
  is what makes reconstructing subjective reality at the time possible.
- **Treat absence as evidence of absence.** `negative` data distinguishes
  `never_observed`, `explicitly_rejected` and `known_not_to_occur`. These are
  not equivalent, and the corpus policy exists because conflating them is what
  produced the conclusions this rebuild supersedes.

## Repository layout

```
schema/          node.schema.json — the enforceable contract
                 edges.json      — the edge vocabulary, as data
kb/              the knowledge base
  sources/       L0   raw material index
  data/          L1   atomic datapoints
  entities/      L2   people, places, institutions, artifacts, concepts
  events/        L2   what happened
  relationships/ L2   first-class relationship objects
  interpretations/ L3 readings, contradictions
  patterns/      L4   recurrence
  syntheses/     L5   cross-domain models
raw/             originals, byte-exact, append-only — see raw/README.md
corpus/          the authoritative message record (gitignored; see CORPUS_POLICY.md)
bin/             wb-ingest, wb-validate, wb-build, wb-query, corpus-*
legacy/          the original pre-rebuild engine, byte-exact, unwired
site/            generated static site (gitignored, published to Pages)
```

## Retrieval, not dumping

An LLM should not ingest the whole wiki on every question. `bin/wb-query`
assembles layered context:

1. **Immediate** — directly relevant nodes
2. **Local** — their neighbours in the graph
3. **Historical** — what preceded them
4. **Pattern** — similar occurrences elsewhere
5. **Meta** — the broader model

Relevance is graph-based, not merely lexical: semantic proximity, temporal
relevance, relational distance, importance, confidence, recurrence and
contradiction all weigh. The best context is frequently not the text most
similar to the question.

## Published surface

`bin/wb-build` compiles to `site/`, deployed to GitHub Pages on every push to
`main`:

- Browsable HTML, one page per node, with citation chains rendered as
  navigable evidence trails
- `graph.json` — the full machine-readable graph
- `llms.txt` — discovery document for agents
- `agent/manifest.json` — endpoint map

**Nodes marked `sensitive = true` are excluded from every published artifact.**
The repository is public. Sources holding other people's private material stay
local, and their derived layers publish only what does not identify anyone —
the same split `corpus/` already uses, for the same reason.

## The central question

Everything serves one question:

> What is the smallest, most accurate model of this person and their
> environment that explains the largest amount of the available evidence?

Not the prettiest biography. Not the most flattering profile. Not the most
psychologically dramatic explanation. The highest-explanatory-power model —
one that can expand any conclusion back into the evidence that produced it.
