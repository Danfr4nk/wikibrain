+++
id            = "dat:0839-him-2004-04-21-vs-facebook-2005-11-09-date-conflict"
layer         = 1
type          = "datum"
title         = "HIM show date conflicts between the old wiki's concert log (2004-04-21, Rock Club) and its own Facebook note (2005-11-09, Mr. Small's)"
claim         = "The old wiki's concert log records the HIM Love Metal Tour show as **2004-04-21 at The Rock Club at Station Square, Pittsburgh** — the single-date claim this page carries. The same export's own contradiction inventory records a second date from the operator's Facebook \\\"Concerts I've gone to\\\" note: **2005-11-09 at Mr. Small's**. The export notes a third, separate **November 2004** return date from the researched list. Two dates, two venues, one page — the conflict is unresolved intra-testimony, and the concert log itself (table.csv) is not held in this repository, so neither date can be grounded here."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Corpus page read directly (corpus__3.txt line 11196, 33 lines); the him.md table row ('2004-04-21 · The Rock Club at Station Square · Pittsburgh, PA') matches the old-wiki export's him.md section (whole.txt:2406-2409). The export's own contradiction inventory flags the conflict: 'The Facebook \"Concerts I've gone to\" note dates HIM to 2005-11-09 at Mr. Small's; the researched list places the Love Metal Tour at 2004-04-21, The Rock Club at Station Square, with a separate November 2004 return' (whole.txt:11655). raw/self/concerts/table.csv is cited on the page but no copy is held in this repository."
importance    = 2
tags          = ["concert-record", "old-wiki", "contradiction", "unverified"]
created       = "2026-09-09"

[when]
start = "2004-04-21"
end   = "2005-11-09"
+++

## What this node records

The page faithfully relays the concert log's one-line reading of the HIM
show, but the held evidence base contradicts nothing and grounds nothing:
the log itself is not in this repository, and the old wiki's own inventory
already carries the conflicting Facebook date. This is the canonical
\"two primary sources disagree, neither is held\" case.

## What remains open

Whether the 2004-04-21 and 2005-11-09 entries are two shows, one show with
a misremembered date, or the note's date displacing a researched date. The
Facebook note text is \"preserved in the corpus\" per the old wiki; a
future worker with the raw note and the concert log table could settle it.
This node does not claim either date is correct — it claims only that the
prior wiki asserted both.
