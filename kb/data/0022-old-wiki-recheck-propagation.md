+++
id            = "dat:0022-old-wiki-recheck-propagation"
layer         = 1
type          = "datum"
title         = "The prior wiki re-checked dependent pages when a cited page changed, and logged null results"
claim         = "The prior wiki asserted a staleness-propagation practice: when a page it reasons from was rewritten, the dependent page was flagged stale and re-checked, and the outcome was recorded in a dated RE-CHECKED block on the dependent page whether or not anything changed. Its cocaine page carries five such blocks dated 2026-08-20 through 2026-08-28, four of which conclude that no claim on the page is affected, one of which updates a supply-chain row and narrows a stated gap."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Counted directly from the RE-CHECKED blocks at the head of wiki/health/cocaine.md. Four read 'No claim on this page is affected' or equivalent; the 2026-08-21 block records three premise changes and states that the page's reading survives all three, with one table row updated."
importance    = 4
tags          = ["old-wiki", "epistemics", "architecture"]
created       = "2026-09-09"

[when]
start = "2026-08-20"
end   = "2026-08-28"
+++

A mechanism the current architecture does not have, and probably should.

The layer invariant guarantees that a conclusion can be *traced* to its
evidence. It says nothing about what happens when that evidence later moves.
`bin/wb-validate` will confirm a citation resolves; it will not notice that the
cited node was rewritten last week and the citing node has not been reconsidered
since.

The prior wiki closed that loop by hand and wrote down the result. The detail
worth copying is that **null results were logged**: four of five blocks conclude
that nothing on the page changed. A re-check that finds nothing is normally
invisible, which makes "this was checked and survived" indistinguishable from
"nobody looked." Recording it separates them.

One block does real work. On 2026-08-21 three premises moved — a supplier's
apparent four-year absence turned out to be a phone-number change, a product
silence became a measured zero across 4,413 messages, and a quantity unit the
page had reasoned from turned out to have been misread. The page states which of
its claims survive each and updates one table row. It also retracts the unit
misreading by name rather than editing it away.

Filed as a datum rather than a suggestion, but the implication is direct: an
`updated` field exists on every node here and nothing consumes it.
