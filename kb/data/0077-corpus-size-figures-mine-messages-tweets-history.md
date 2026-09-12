+++
id            = "dat:0077-corpus-size-figures-mine-messages-tweets-history"
layer         = 1
type          = "datum"
title         = "The instruments index's corpus-size figures, cross-checked against this repo's authoritative export"
claim         = "wiki/meta/instruments/index.md reports the corpora the measure-instruments compute over: bin/mine-messages — 217,573 messages (106,629 sent, 110,944 received), 503 handles, 4.55M characters of Dan's own text; bin/mine-tweets — 2,741 originals, 24 Sep 2008 → 1 Sep 2026, from three sources of different fidelity (1,412 spreadsheet · 1,098 live scrape · 231 backend), excluding 125 truncated rows from length figures; bin/wiki-history — 3,832 revisions across 495 pages, 11 Jul → 2 Sep 2026. Cross-check 2026-09-09: this repo's authoritative corpus/messages.csv holds 203,626 rows (grep count; dat:0028 reported 192,140 rows on its re-pull the same day — the row count differs between the two passes, itself a provenance datum), against the instruments page's 217,573. The 106,629 outbound figure is internally consistent (106,629 + 110,944 = 217,573) and is the same denominator the 2026-08-02 axiom test used (four unconscious axioms tested lexically against all outbound messages with inbound as control; on every explicit urgency construction but one he writes less than his contacts — recorded in both the instruments index and dat:0044, and carried in MEMORY.md's core-axioms caveat). The 13,947-message gap between the instruments page's 217,573 and this repo's 203,626 rows is a different-snapshot difference, not an adjudicated error — message counts are time-frozen numbers and must be derived from dated records per this system's rules."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:wikitest-rebuild-session-2026-09-09"
confidence    = "moderate"
extraction    = "The instruments-page figures were read from wiki/meta/instruments/index.md (corpus__3.txt line ~17330). The 203,626-row count is from grep -c over corpus/messages.csv 2026-09-09; the 192,140 figure is dat:0028's (sha256-verified re-pull, same day) — the two counts of the same file differ, which likely reflects embedded newlines in message fields vs row counting, and is recorded as an unresolved measurement-method difference, not a finding. The tweet-source split (1,412/1,098/231) and wiki-history figures were not independently re-derived."
importance    = 3
tags          = ["meta", "old-wiki", "corpus", "provenance", "measurement"]
created       = "2026-09-09"
+++

## What is usable onward

**Usable:** the tweet corpus composition (2,741 originals, three sources of
different fidelity, 125 truncated rows excluded from length figures) — no
other page carries the source split. The wiki-history scale (3,832 revisions
over 495 pages in ~7 weeks) as a measure of the build's velocity.

**Use with the date attached:** any message count. 217,573 (instruments
index, ≤2026-09-02) vs 203,626 (this repo's export, 2026-09-09) vs 192,140
(dat:0028's re-pull, 2026-09-09). These are three measurements of a moving
target by different methods; none is the number. Per the standing rule,
derive counts from dated records — do not hardcode them.

## The jurisdiction finding, preserved

The instruments index's sharpest epistemic claim is the 2026-08-02 axiom
test's consequence: SMS is a near-zero-introspection medium for everybody
in it, so the message corpus has a jurisdiction and the psychological layer
is outside it. That is already carried by dat:0044 and MEMORY.md; this node
preserves the denominator (106,629 outbound / 110,944 inbound / 503
handles) behind it.
