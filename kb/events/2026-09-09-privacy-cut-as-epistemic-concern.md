+++
id         = "evt:2026-09-09-privacy-cut-as-epistemic-concern"
layer      = 2
type       = "event"
title      = "Privacy is cut as an epistemic concern; retrieval stops filtering"
cites      = ["src:conceptual-spec-2026-content-layer"]
confidence = "high"
importance = 4
created    = "2026-09-09"
tags       = ["meta", "architecture", "privacy", "retrieval"]

[when]
date = "2026-09-09"

[[edges]]
rel         = "about"
target      = "ent:wiki-brain"
strength    = "strong"
asserted_by = "self"

[[edges]]
rel         = "followed"
target      = "evt:2026-09-09-edge-rework"
strength    = "strong"
asserted_by = "self"
+++

## The distinction

Three things had been travelling under one word, and separating them is the
whole content of this change.

| | Status |
| :--- | :--- |
| Public **because it was chosen**, on the record | Fine. Not reopened. |
| Private because the **system requires secrecy** | Not a requirement here. |
| **Epistemically complete** | The binding constraint. |

Privacy survives as a control on **output**. It is removed as an input to
ingestion, cross-reference, modelling and synthesis.

## What was actually wrong

`bin/wb-query` — the retrieval path, whose entire consumer is a reasoning
system — excluded every node marked `sensitive` **by default**, behind an
opt-in `--include-sensitive` flag. Nothing said so at runtime.

That is the failure in its exact form. Withholding evidence from a reasoner
protects nobody: the material is still in `kb/`, still on disk, still in the
corpus. All it accomplishes is a model reasoning over a quietly sanitised record
and drawing confident conclusions it has no way to know are built on a hole.

The default is now inverted. Retrieval sees everything. `--publish-safe` filters
for output destined for publication, and says out loud how many nodes it
withheld and that their absence is not evidence of absence.

`bin/wb-build` is unchanged: it is the publication gate, and gating publication
is the part that was always legitimate.

## What was deliberately not changed

`corpus/messages.csv` stays in `.gitignore`. The reasoning is that it fails the
test this change applies: the ignore rule does **not** create an epistemic blind
spot. The file is on disk and every ingestion path reads it directly. Committing
it would place ~498 people's phone numbers in permanent, searchable git history
and would not make the system aware of a single additional fact.

That is the category the instruction preserved — an accidental-publication
control, not an ingestion filter. It is flagged here rather than assumed, so
overruling it is a decision someone makes on purpose.
