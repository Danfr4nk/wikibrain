+++
id          = "src:conceptual-spec-2026-content-layer"
layer       = 0
type        = "source"
title       = "Wiki Brain conceptual specification — content-layer draft"
source_type = "document"
acquired    = "2026-09-09"
provenance  = "Supplied by the operator, 2026-09-09, as the first draft protocol for the content layer. 92 numbered sections, extending the 82-section specification acquired 2026-09-08. Delivered alongside an explicit architectural instruction about the role of privacy in the system."
reliability = "primary"
confidence  = "high"
importance  = 5
supersedes  = "src:conceptual-spec-2026"
created     = "2026-09-09"
tags        = ["meta", "architecture", "spec"]

[when]
date = "2026-09-09"
+++

## What this is

The governing specification, revised. It supersedes
[`src:conceptual-spec-2026`](conceptual-spec-2026.md) rather than replacing it:
the earlier version stays readable, because a specification's history is
evidence about how the system's authors thought, which is exactly the kind of
thing this system exists to preserve.

## What is new relative to the 82-section version

Ten sections were added, and the additions cluster. Most concern the **content
layer** — the machinery between a raw artifact arriving and a model being able
to reason about it: ingestion as the front door (§6), story, document, image and
gap ingestion (§7–§11), the recursive ingest pipeline (§12), evidence
recruitment and entry-to-log linkage (§16–§17), evidence scoring (§20).

The rest sharpen things the earlier draft implied. §85 states the compression
principle as loss-minimised and **reversible** — every conclusion expandable
back to the evidence that produced it. §87 says not to over-normalise the
corpus, because specific recurring weirdness is where a cognitive signature
lives and generic descriptors are cheap. §92 restates the constitutional law
with two clauses beneath it: every synthesis traceable to its evidence, and
every new piece of evidence allowed to challenge what the system already
believes.

## The architectural instruction delivered with it

Privacy is cut as an **epistemic** concern. Stated by the operator:

> Delete privacy as an epistemic concern. Keep only whatever is necessary to
> prevent accidental corruption or accidental publication of things you later
> decide shouldn't be published. But don't let it determine what gets ingested,
> cross-referenced, modeled, or synthesized.

The reasoning given is that a filter applied at ingestion is invisible
downstream:

```
RAW DATA -> "uh-oh, maybe don't ingest that" -> missing evidence
```

which produces the blind spot the layer law exists to prevent — a model
confidently describing a person who does not exist, with no marker saying what
was removed. Publication remains gated. Reasoning does not.

## On the prior system's 2,000,000 tokens

The operator's assessment, recorded because it determines how that material
should be ingested:

> the 2-million-token old Wiki's biggest value is probably not the conclusions
> it reached. It's the enormous amount of messy evidence and reasoning that lets
> the new system discover where those conclusions were right, wrong, incomplete,
> or artifacts of the old architecture.
