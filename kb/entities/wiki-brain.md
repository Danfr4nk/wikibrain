+++
id          = "ent:wiki-brain"
layer       = 2
type        = "entity"
entity_kind = "project"
title       = "Wiki Brain"
cites       = ["dat:0004-fragment-exports"]
confidence  = "high"
importance  = 5
created     = "2026-09-08"
tags        = ["meta", "project"]

[when]
start = "2025"

[[edges]]
rel         = "about"
target      = "ent:dan"
strength    = "strong"
asserted_by = "self"
+++

## Summary

A source-grounded longitudinal knowledge graph and cognitive modeling system.
Archives raw evidence about a person and their world, transforms it into atomic
facts, events, entities, relationships, patterns and syntheses, and gives an LLM
persistent context — without collapsing evidence, interpretation and inference
into the same layer.

Projects are longitudinal entities. This one has had at least two architectures:
a plain-markdown wiki compiled by an LLM, and the layered graph specified in
`src:conceptual-spec-2026` and built here.

## Evidence — 2026-09-11 (CI failures, Danfr4nk/wiki-brain)

On 2026-09-10 at 21:02 EDT, GitHub reported failed runs of three
`Danfr4nk/wiki-brain` Actions workflows on `main@5d1a747`: "Tell the portal
the wiki moved", "Deploy wiki site", and "Build and deploy to Pages"
([`dat:0069`](../data/0069-wikibrain-actions-failures-2026-09-10.md)). Twenty
minutes later (21:22 EDT) commit `b5098ca` ("climb: port three synthesis
pages") landed on main. The Pages pipeline was red at 21:02 and the repo
moved forward anyway at 21:22; failure causes are unverified (Actions logs
not pulled).
