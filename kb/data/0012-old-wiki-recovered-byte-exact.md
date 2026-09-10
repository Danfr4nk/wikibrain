+++
id            = "dat:0012-old-wiki-recovered-byte-exact"
layer         = 1
type          = "datum"
title         = "The prior wiki was recovered whole, by a route nobody had checked"
claim         = "The prior wiki-brain's own full-corpus export — 497 pages, 7,536,214 bytes, ~1.86M tokens, generated 2026-09-04 — was recovered intact on 2026-09-09 from a Google Drive folder as four text/plain parts of 1,884,054 bytes each, stitched in filename order. Because the parts were stored as text/plain rather than converted to Google Docs, no conversion damage applies: all 497 pages carry intact YAML frontmatter and no page was split across a part boundary."
cites         = ["src:wikitest-rebuild-session-2026-09-09"]
confidence    = "high"
extraction    = "Verified after stitching: 497 'PAGE:' separators against the export header's own claim of 497, 497 unique paths, and zero pages missing leading '---' frontmatter. A byte-offset seek back out of the stitched file returned the expected page and title."
importance    = 5
tags          = ["migration", "recovery", "old-wiki"]
created       = "2026-09-09"

[when]
date = "2026-09-09"
+++

`RECOVERY.md` concluded that the wiki body was "waiting on a push from the Mac,"
and that conclusion was correct about every route that had been checked. It was
wrong about the space of routes.

Three separate findings had each been measured accurately and had, together,
produced a false floor:

- `dat:0006` — the Drive staging copy converted every `.md` to a Google Doc.
- `dat:0010` — that conversion destroys frontmatter line breaks, so a bulk
  restore along it would yield pages whose bodies were recovered and whose heads
  were guessed.
- The connector moves one file per call, and the tree held 1,000+ files.

Each holds. What none of them covered is that the operator had also exported the
whole wiki to **four `text/plain` files**, which the Docs conversion never
touches, and which reconstitute the entire corpus in four calls rather than a
thousand. The blocker was never the medium. It was that nobody had looked in
that folder.

Two things are worth keeping from this beyond the fact itself.

**A negative result was scoped correctly and still misled.** Every one of those
findings was carefully limited to what was actually tested — that is why `dat:0010`
records "one page, so the sample is narrow." The error was not in any
measurement; it was in reading the conjunction of three narrow negatives as a
general one. `never_observed` and `known_not_to_occur` are different claims, and
the difference is exactly this.

**The recovery arrived because the operator supplied a folder id**, not because
the search strategy improved. The system's own account of what was reachable had
been stable and confident for two days. It took thirty seconds of someone else's
knowledge to overturn it.
