+++
id         = "evt:2026-09-09-edge-rework"
layer      = 2
type       = "event"
title      = "The edge system is reworked into six families"
cites      = ["dat:0011-edge-pointed-against-its-note"]
confidence = "high"
importance = 4
created    = "2026-09-09"
tags       = ["meta", "architecture", "edges"]

[when]
date = "2026-09-09"

[[edges]]
rel         = "about"
target      = "ent:wiki-brain"
strength    = "strong"
asserted_by = "self"

[[edges]]
rel         = "followed"
target      = "evt:2026-09-08-rebuild-begins"
strength    = "strong"
asserted_by = "self"
note        = "Sequence only. The rebuild established the six layers; this reworked the relations between them."
+++

## What happened

`cites` was rigorously constrained from the first commit and `edges` was not.
Anything could point anywhere, with no strength, no time, no attribution and no
families — so half the graph was enforced and half was assertion, and
[`dat:0011`](../data/0011-edge-pointed-against-its-note.md) is what that
asymmetry produced in practice within two days of the rebuild starting.

The vocabulary moved into `schema/edges.json` as data, sorted into six families:
**temporal**, **causal**, **structural**, **semantic**, **narrative** and
**editorial**. Every edge now declares `strength`, may declare `basis` and
`asserted_by`, and may carry its own `[when]` — a relation true in 2015 can be
false by 2020, and a system that calls personality a trajectory could not
previously say so about its own edges.

## Why the narrative family exists

It is the one addition that is about this corpus specifically rather than about
graphs in general. The material is loud, self-narrating and performative, and a
dry causal vocabulary has no way to record that a thing was dramatised in the
telling. `mythologized`, `performed_as`, `disavowed`, `reframed` and `retold_as`
make a claim about the *telling*, not about the event, so the record can hold
the dramatisation without either endorsing it or flattening it into "he lied."
That is the separation the layer law already applies to evidence, aimed at
self-presentation.

## What was removed

`evidences` — which was `cites` written backwards, with only one of the two
spellings checked by the layer invariant — and `supersedes` as an edge, which
had been quietly doing two different jobs. The node-identity meaning stays as a
field; the content meaning became `displaced`.

## What is not claimed

The six pre-existing edges were audited by hand rather than defaulted to
`moderate`/`other`. Defaulting would have manufactured metadata nobody checked
and made it indistinguishable from metadata somebody did, which is the same
failure as [`pat:partial-data-confident-error`](../patterns/partial-data-confident-error.md)
in a smaller frame. Edges missing those fields are counted and reported as
provisional, and that count is now part of every validator run.
