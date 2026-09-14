+++
id            = "dat:0951-astrology-top-20-table-unheld"
layer         = 1
type          = "datum"
title         = "Astrology page's top-20 contact table is from the unheld full-corpus dump and is internally inconsistent"
claim         = "The astrology page's top-20 contact table — with per-contact message counts and assigned star signs — is read from the **unheld full-corpus MASTER dump**, not reproducible from the held 192,140-record export. Three things are recorded about it: (1) the table's contact handles are partially masked phone numbers — third-party identifiers, never reproduced here; (2) the table is **internally inconsistent on its own terms**: rank 19 reads 'Cancer (same as #19 above)' — a self-referential entry — while Ally is listed separately with 907 messages, a figure already superseded by the current 2,073-row held count (dat:0948); (3) the sign assignments are the page author's own mapping, not attested by the contacts. The table's counts and the page's distribution claims over them stay page-attributed testimony. The page's 'favorite food' zero-hit claim is consistent with the held corpus ('favorite food': 0 hits in 192,140 records) but was derived from the unheld dump."
cites         = ["src:old-wiki-export-2026-09-04", "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "low"
extraction    = "Page body read directly from corpus__3.txt line 75346 (116 lines). The MASTER dump the table reads from is not held. The rank-19 self-reference ('Cancer (same as #19 above)') is quoted exactly from the page's table. Ally's current held count (2,073) from dat:0948. 'favorite food' searched in corpus/messages.csv: 0 hits. Handles in the page's table are masked phone numbers; none reproduced. Old-wiki export repeats the page verbatim."
importance    = 2
tags          = ["astrology", "contact-table", "unheld-source", "inconsistency", "testimony", "old-wiki"]
created       = "2026-09-10"
+++

## Notes

- The rank-19 self-reference looks like an authoring slip (probably meant '#18 above'), but the node records it as printed rather than emending it.
- Any future verification of the table's counts requires the MASTER dump; the held export's handle set and counts differ.

## Cross-references

- [`dat:0948`](0948-ally-corpus-count-correction.md) — Ally's current held count vs the table's 907.
- [`dat:0950`](0950-astrology-super-scorpio-self-id.md) — the page's sign claims, same unheld CSV.
