+++
id            = "dat:0716-people-index-stub-counts-carried"
layer         = 1
type          = "datum"
title         = "The people index's '32 remaining contact stubs' is a generated-index assertion with no checkable stubs in the corpus — carried, not verified"
claim         = "The page `wiki/people/index.md` (corpus line 20671, 88 lines) closes with: '59 promoted to full pages 2026-07-14, leaving 32 remaining as auto-generated contact stubs.' No stub page exists in the corpus — a grep for `wiki/people/contacts/` returns zero hits across corpus__3.txt — and no 2026-07-14 promotion record is attached to the page, so neither the 59 nor the 32 can be checked against anything held. The page is otherwise a pure generated summary (its body is one paragraph plus an auto-generated list); its substantive assertions about individuals (e.g., the Annie 'status open, not historical' line, authored no later than 2026-08-23) are stale against later material in this wave — notably the August 16–19, 2026 terminal closure documented in dat:0714/0715. The index is carried as a provenance artifact of the old wiki's 2026-07-14 generation pass, not as evidence for any biography."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "low"
extraction    = "Page body read from corpus__3.txt line 20671 (88 lines); stub-count sentence quoted verbatim. Corpus-wide grep for 'wiki/people/contacts/' 2026-09-09: zero hits. The page names no source for the 59/32 split; its own header says 'auto-generated index, 2026-07-14'. Per the wave's working rule (no datum per stub person), biographies are deferred to their own pages' waves; this node records only the index's provenance and its staleness."
importance    = 2
tags          = ["people-index", "provenance", "staleness", "old-wiki"]
created       = "2026-09-09"
+++

## The Annie staleness, stated plainly

The index describes the Annie relationship as 'status open, not
historical.' The index was authored/modified no later than 2026-08-23;
the terminal closure of August 16–19, 2026 (dat:0714, dat:0715) postdates
the description's last known state and contradicts it. The index is a
frozen generated artifact, not a live status. Any consumer of the index
should treat relationship statuses on it as 2026-07-14/08-23 vintage.
