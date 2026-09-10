+++
id          = "src:old-wiki-export-2026-09-04"
layer       = 0
type        = "source"
title       = "wiki-brain full corpus export, 2026-09-04"
source_type = "document"
acquired    = "2026-09-09"
provenance  = "The prior wiki-brain's own full-corpus export, generated 2026-09-04, four days before the working tree was wiped. Recovered 2026-09-09 from Google Drive folder 1Facobc_4D2vMz6BE1Iiou2yapei0mecx as four text/plain parts (part_00..part_03, 1,884,054 B each) and stitched in filename order. text/plain throughout, so no Google Docs conversion touched it: byte-exact. 497 pages, all frontmatter intact, no page split across a part boundary."
reliability = "retrospective"
confidence  = "high"
importance  = 5
testimony   = true
extraction  = "Not yet extracted. Original preserved at raw/old-wiki-export-2026-09-04/ — sha256 4037dedc019e2595…, 7,536,214 bytes. See raw/old-wiki-export-2026-09-04/EXTRACT.md for what extraction owes."
created     = "2026-09-09"
tags        = ["old-wiki", "testimony", "corpus-export"]

[when]
date = "2026-09-09"
+++
## What this is

The complete prior wiki: 497 pages, 7,536,214 bytes, ~1.86M tokens, self-describing (pages delimited by 'PAGE: <path>' banners, each carrying YAML frontmatter then markdown). This is the artifact RECOVERY.md was written about — the content that never left the operator's machine, recovered intact by a route that did not exist when that document was written.

## Testimony, not fact

This source is marked `testimony`. Its reliability is not established, so what it supplies is evidence of **what it asserted** — never evidence that the assertion holds.

Every datum drawn from it must carry `attributed_to = "src:old-wiki-export-2026-09-04"`, and `bin/wb-validate` fails the build otherwise. A claim therefore reads *"this source asserted P"*, which is true and checkable, rather than *"P"*, which is not yet established.

Promotion happens through corroboration: when an independent source in the corpus supports the same claim, that is a second datum, and an interpretation resting on both is stronger than either. When the corpus contradicts it, the result is a `contradiction` node — and those are among the most valuable objects here, because they mark precisely where this source was wrong.

## What is in it

497 pages, `wiki/`-rooted, in ten areas: people (175), interests (96), mind (78),
self (59), timeline (42), work (15), meta (12), places (10), health (6), legal
(4). The largest single page is `wiki/timeline/master-timeline.md` at 848,636
bytes; the smallest are ~425-byte topic stubs.

`pages.json` beside the export indexes every page by byte offset and length, so
all 497 are individually addressable without a second copy of the bytes. It is
regenerable from `whole.txt`, which is the only artifact that matters.

## On the people in it

This material names third parties throughout — partners, family, friends,
dealers — and describes their conduct in detail. It is ingested unfiltered,
which is the operator's standing instruction and the correct one epistemically:
a filter applied here would be invisible downstream and would produce a
confident model of a person who does not exist.

Worth stating plainly rather than leaving implicit: **this same material was
already published**, by the operator, at `caakehorn.github.io/wiki-brain`, until
the wipe took the site down with it. Committing it here does not cross a line
that was not already crossed deliberately. That is a description of the existing
decision, not a defence of it, and it remains reversible only in the sense that
nothing in git ever is.

## Extraction status

**Not extracted.** This node records that the material exists, where it came from and that it is intact. Turning it into atomic datapoints is a separate step; `raw/old-wiki-export-2026-09-04/EXTRACT.md` is the brief for it.
