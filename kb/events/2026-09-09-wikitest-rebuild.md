+++
id         = "evt:2026-09-09-wikitest-rebuild"
layer      = 2
type       = "event"
title      = "wiki-brain rebuilt into wikitest"
cites      = ["dat:0007-local-sources-unreachable"]
confidence = "high"
importance = 4
tags       = ["meta", "architecture", "migration"]
created    = "2026-09-09"

[when]
date   = "2026-09-09"
+++

The architecture, JSON schema, validator, builder, query tooling, corpus policy, derived corpus aggregates and the seventeen-node knowledge base were ported from Danfr4nk/wiki-brain into Danfr4nk/wikitest, retargeted to the new Pages URL, and verified: fifteen invariant tests passing, a clean validate, and a build that withholds the one sensitive node.

What did not come across is the wiki body, which exists only on local disk. The distinction matters for anyone reading this later: the system was recovered from the public repository, not from the backups, and the backups remain the only route for the content.
