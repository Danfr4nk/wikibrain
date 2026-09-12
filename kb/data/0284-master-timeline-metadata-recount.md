+++
id            = "dat:0284-master-timeline-metadata-recount"
layer         = 1
type          = "datum"
title         = "Master-timeline generation metadata verifies by recount: 3,661 events, tiers 713/450/2,498; '80 years' means 80 year-sections, not 80 calendar years; 387 source pages vs stated 386"
claim         = "The master-timeline page body (generated 2026-08-14, modified 2026-08-15 by bin/wiki-timeline) states **3,661 events** across **80 years** (1796–2027) drawn from **386 pages**, Tier 1 713 / Tier 2 450 / Tier 3 2,498. A direct recount of the page body confirms 713 Tier-1 (★), 450 Tier-2 (◆) and 2,498 Tier-3 (·) entries — 3,661 total, exact. The events span 1796–2027 (231 calendar years) but the page has exactly **80** `### YYYY` year-section headers, so '80 years' means 80 years with events, not 80 calendar years. The body carries **387** unique `[[wiki/...]]` source links, one more than the stated 386."
cites         = ["src:wikitest-rebuild-session-2026-09-09"]
confidence    = "high"
extraction    = "Observed directly: extracted corpus__3.txt lines 109570–117223 to /tmp/master-timeline.md (7,654 lines) and counted entry markers with grep -c ('^- ★' = 713, '^- ◆' = 450, '^- ·' = 2,498); parsed years from entry leads with python (min 1796, max 2027, span 231); counted '^### YYYY' headers (= 80); counted unique [[wiki/...]] links (= 387). The page frontmatter itself gives date_created 2026-08-14, date_modified 2026-08-15, sources 'generated from every page under the wiki by bin/wiki-timeline'."
importance    = 3
tags          = ["master-timeline", "metadata", "provenance", "verification", "generator"]
created       = "2026-09-09"
+++

## What was checked and what it means

This node is the provenance baseline for the whole wave-2 master-timeline ingest: it fixes what the page *claims about itself* before any entry-level claim is evaluated.

- **Event and tier counts: exact.** 713 + 450 + 2,498 = 3,661, matching the header to the digit. The generator's counting is trustworthy; entry-level errors (see [`dat:0285`](0285-graduation-august-2009-still-in-timeline.md), [`dat:0286`](0286-tan-calabrese-phantom-message-date.md)) come from the source pages, not the count.
- **'80 years' is ambiguous but resolvable.** The header's parenthetical (1796–2027) spans 231 calendar years; the '80' is the count of distinct year-section headers. Read as "80 years with recorded events" the claim is true. Future regenerations should say that explicitly.
- **386 vs 387 source pages: off by one, unresolved.** The recount finds 387 unique `[[wiki/...]]` links in the body. The header says 386. The difference may be a page added between generation and the header being written, a page counted under two spellings, or the generator deduplicating differently (e.g. excluding the timeline's own `wiki/timeline/index` connection — but that link appears in the frontmatter in `- page:` form, not `[[]]` form, so it cannot be the difference). Minor; recorded so a later pass can identify the extra link.

## Method note

The page body was read in full from corpus__3.txt (lines 109570–117223, 7,654 lines), not from the extraction summaries in ~/workspace/corpus-extract/, per the wave-2 workflow. All entry-level findings in dat:0285–dat:0305 rest on this reading.
