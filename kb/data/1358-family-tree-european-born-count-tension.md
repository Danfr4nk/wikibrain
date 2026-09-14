+++
id            = "dat:1358-family-tree-european-born-count-tension"
layer         = 1
type          = "datum"
title         = "The family-tree page's '14 corrected European-born ancestors' is not supported by its own 13-row table"
claim         = "wiki/self/lineage/family-tree (2026-06-25) derives from an Ancestry.com GEDCOM of 515 individuals and 218 families, parsed to 90 direct ancestors across 7 generations, tracing maternal Appalachian (Fayette County, PA) roots and a paternal Eastern European Jewish immigrant line. Its own measurement narrative is internally inconsistent: the body claims '16 European-born forebears,' the heading reads 'European-Born Ancestors (14 corrected),' and the table under that heading contains exactly 13 rows — of which the last two are explicitly West Virginia-born (Mary E. Lewellen, b. 08 Mar 1837, Monongalia co., WV; Hezekiah Thomas, b. abt 1807, Monongalia, W VA), not European-born. So the displayed table supports 11 European-born rows against a headline of 14. The page separately states that only 3 European-born individuals are on direct parental lines (David J. Frank, Russia; Sadie Harris, Austria; Harris, Czechoslovakia) — the Germany-born Franks and Cohens are on collateral lines contributing 0% autosomal DNA. The raw GEDCOM is not held in this repo, so no independent recount is possible. Filed as an old-wiki artifact inconsistency: the count is the page's own, contradicted by the page's own table, not a genealogy correction by this ingest."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read from corpus__3.txt line 78633 (420 lines); matches raw/old-wiki-export-2026-09-04/whole.txt. Table rows counted directly from the page text: 13 data rows under the '14 corrected' heading, with the final two rows' birthplaces explicitly West Virginian. The 'only 3 on direct lines' note is the page's own, consistent with its collateral-line caveat. The GEDCOM file itself is not in this repo's raw/ tree."
importance    = 3
tags          = ["lineage", "family-tree", "genealogy", "old-wiki", "measurement-error"]
created       = "2026-09-09"

[when]
start = "1700-01-01"
end   = "2026-06-25"
+++

## What is kept

- The GEDCOM dimensions (515 individuals, 218 families, 90 direct
  ancestors, 7 generations) as the page's reported parse.
- The dual-heritage structure (maternal Appalachian, paternal Eastern
  European Jewish) as the page's framing.
- The 3-direct-European-born finding, which is the page's most
  genealogically load-bearing claim and is internally consistent.

## What is flagged

The 14/16/13/11 number cluster: body says 16, heading says 14 (corrected),
table shows 13, of which 2 are WV-born (so 11 truly European-born by the
table's own birthplaces). A future GEDCOM re-parse should re-derive this
count from scratch; do not cite '14' as a measured figure.
