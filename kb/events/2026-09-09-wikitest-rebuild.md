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

## The body came back the same day

The recovery happened *after* this port, and it changed the story. The
prior wiki's own 2026-09-04 export was recovered from a Google Drive
folder and stitched byte-exact — all 497 pages, frontmatter intact —
which is why the ingest that followed was possible at all
([`evt:2026-09-04-old-wiki-snapshot`](2026-09-04-old-wiki-snapshot.md),
[`evt:2026-09-09-ingest-complete`](2026-09-09-ingest-complete.md)).
The "backups remain the only route" sentence above was true when written
in the morning and false by the evening; a route nobody had checked —
the wiki's own corpus export, stored as plain text — turned out to exist.
The sentence is kept as the record of what was believed and why.

## What the port enabled, same day

The port was not an end state; it was the condition for everything
built on it that day:

- The ingest of the morgantown call's raw sources (audio + independent
  STT transcript) and the independent validation report, which turned the
  Coles-page correction into a named repair order
  ([`evt:2026-09-09-morgantown-call`](2026-09-09-morgantown-call.md),
  [`evt:2026-09-09-morgantown-validation`](2026-09-09-morgantown-validation.md)).
- The graduation correction: the operator read the *published,
  browsable* wiki and corrected its framing the same day — the first time
  the publish-read-correct loop closed
  ([`evt:2026-09-09-graduation-correction-published`](2026-09-09-graduation-correction-published.md)).
  Unpublished, the correction would never have been offered.

## Still partial

The port remains what the session source says it is: a cloud-container
rebuild, partial by constraint
([`src:wikitest-rebuild-session-2026-09-09`](../sources/wikitest-rebuild-session-2026-09-09.md)).
The recovery filled the body's absence with the 2026-09-04 freeze frame,
not with the live wiki — every snapshot-stale page is the standing
record until the operator patches it.
