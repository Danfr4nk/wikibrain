+++
id            = "dat:1355-timmy-page-unheld-bfs-testimony"
layer         = 1
type          = "datum"
title         = "The Timmy page's vape/gambling/blame-pivot episode rests on unheld BFS documents; the held corpus names him zero times"
claim         = "wiki/people/timmy (2026-06-22, modified 2026-07-18) presents Timmy — an 18–19-year-old Little Caesars employee in Uniontown — as the template for Anita's blame-pivot pattern: the on-clock slot-machine gambling, Anita's underage vape sale to him (a licensing liability), the short-lived May ban (a May 12 'if he's in here call the cops' reversed by a May 14 'not banned as of yet'), and Anita's pivot blaming first Kim then 'Daniel' for reporting him, corroborated by Maddox and Dakota. Its sources are raw/legal/bfs-dispute/BFS_BOOTLOADER_v2.md, 'Drawer shortage dispute with assistant manager.md,' 'Cash register shortage explanation.md,' and CONTEXT_CORE_EXPANDED.md — none held in this repo's raw/ tree. Direct scan of corpus/messages.csv: zero occurrences of 'timmy' in 192,140 rows. The page's own Gaps (Timmy's surname, the ID/age discrepancy, his status after the ban reversal) are preserved as unresolved. Filed as page-attributed testimony; the 'template for the drawer dispute' reading is the page's synthesis over documents this ingest cannot check."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "low"
extraction    = "Page body read from corpus__3.txt line 69574 (92 lines); matches raw/old-wiki-export-2026-09-04/whole.txt. Held-corpus check: case-insensitive scan for 'timmy' over all text fields on 2026-09-11 returned 0 hits. None of the page's four source documents exist in this repo's raw/ tree (raw/ holds only the old-wiki export, the two Morgantown transcript packages, facebook-threads MANIFEST, and the e0914806 package)."
importance    = 3
tags          = ["people", "timmy", "bfs-foods", "old-wiki", "uniontown-era"]
created       = "2026-09-09"

[when]
start = "2026-04-01"
end   = "2026-05-31"
+++

The page's claim that the Timmy saga is the 'two-weeks-prior precedent'
for the drawer dispute cannot be checked here: both the saga and the
dispute are documented only in the unheld BFS files. The node preserves the
episode's structure (gambling → vape exposure → ban → blame-pivot) and
leaves the documents to be ingested if they ever surface.
