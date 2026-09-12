+++
id         = "evt:2026-09-04-old-wiki-snapshot"
layer      = 2
type       = "event"
title      = "The old wiki freezes as the 2026-09-04 export"
cites      = ["src:old-wiki-export-2026-09-04", "dat:0012-old-wiki-recovered-byte-exact"]
confidence = "high"
importance = 5
tags       = ["meta", "old-wiki", "provenance"]
created    = "2026-09-09"

[when]
date   = "2026-09-04"
+++

<!-- prose for humans; the frontmatter is for machines -->

## What happened

On 2026-09-04 the prior wiki's own full-corpus export was generated: 497
pages, 7,536,214 bytes, ~1.86M tokens, self-describing (`PAGE: <path>`
banners, intact YAML frontmatter on every page)
([`src:old-wiki-export-2026-09-04`](../sources/old-wiki-export-2026-09-04.md)).
Four days later the working tree was wiped. The export — recovered
2026-09-09 from a Google Drive folder as four `text/plain` parts, stitched
byte-exact — is the artifact everything since has been built from
([`dat:0012`](../data/0012-old-wiki-recovered-byte-exact.md)).

## Why the date matters

The snapshot is a freeze frame. Whatever the old wiki believed on
2026-09-04 is what the ingest verified against — which is why the ingest
kept finding the same wound: pages stale against facts established
elsewhere, because nothing corrected them *in the wiki* before the wipe.

- The Full Sail page still printed the August 2009 graduation with its
  2026-09-03 contradiction block unresolved — stale against the operator's
  September correction, which arrived after the snapshot
  ([`dat:0058`](../data/0058-graduation-september-2009-then-audit-and-certification.md)).
- `wiki/people/jerel-coles.md` is unpatched as of the snapshot: the stale
  T2 disclaimer, the categorical "never says yes" (defeated by "Yes, save
  it" at 04:43), the fourteen-repetition count — validation report §441's
  recommendation #1 unaddressed
  ([`dat:0412`](../data/0412-jerel-coles-page-patch-state.md)).
- The BFS Foods page predates the 2026-08-26 corrected sequence; corpus
  revisions are newer than the export, and the nodes take the fresher
  revision with the divergence noted.
- The Rick-silence page predates 2026-09-01: the snapshot was built on a
  dump before Dan replied to Rick for the first time since February 2025
  (`dat:1024`).

This is the correction-propagation failure as a temporal phenomenon: the
snapshot froze a wiki in which corrections lived on the pages where they
were made and never travelled to the pages that quoted the claims.

## What the snapshot is and is not

- It is the only surviving copy of the prior wiki's body; the pages
  deployment renders it (per the ingest coordinator's ledger, INGEST-NOTES.md —
  a bookkeeping claim in this repository, not a datum; not re-verified here).
- It is marked `testimony`, not fact: every datum drawn from it carries
  `attributed_to`, and the validator enforces it.
- It names third parties throughout; it was ingested unfiltered per the
  operator's standing instruction (already published by him at
  `caakehorn.github.io/wiki-brain` before the wipe), while the 498 other
  people's private data stays gated at publication by `wb-check-publish`.

## Open questions

- Which of the snapshot's stale pages the operator will patch in the wiki
  source itself (the Jerel Coles patch is flagged for him directly).
- Whether a fresher export ever surfaces to supersede the snapshot.
