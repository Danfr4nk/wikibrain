+++
id            = "dat:0401-diane-moore-unheld-and-relayed-claims"
layer         = 1
type          = "datum"
title         = "Diane Moore page: 2018 caregiver quotes absent from held corpus; genealogy, Florida condo, and hardcoded age stay old-wiki attribution"
claim         = "Three categories of claim on `wiki/people/diane-moore.md` do not corroborate from held sources. (1) The quoted 2018 caregiver messages return no hits in the held `corpus/messages.csv` (192,140 rows) — not evidence of absence, just absent; do not manufacture confirmation. (2) The genealogy and Florida-condo assertions are operator/source-relayed via the old wiki and are not independently held. (3) The page hardcodes Diane's age ('she would be 87'); per the wiki's own governance, never reproduce a time-frozen age — derive from dated records. Corpus page and old-wiki export are text-identical."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page body read directly from corpus__3.txt (wiki/people/diane-moore.md); verified text-identical against raw/old-wiki-export-2026-09-04/whole.txt. Exact-phrase searches of the held corpus/messages.csv for the 2018 caregiver quotations returned zero rows."
importance    = 3
tags          = ["people", "corpus-gap", "old-wiki", "attribution", "unverified"]
created       = "2026-09-09"
+++

## What this establishes and what it does not

**Established:** which parts of the Diane page are held (the two messages in
dat:0400) and which are not. The boundary is clean and should be kept.

**Not established here:** whether the unheld quotes are fabricated — they
may sit in the larger unheld dump (`all_imessages_complete_dump.txt`), which
this repository does not contain. 'Not in the held file' is a location
finding, not a veracity finding.

## Cross-references

- [`dat:0400`](0400-diane-moore-held-corroborations.md) — the held half of
  the same page.
- [`dat:0172`](0172-diane-exclusion-letter-correction.md) — letter finding
  that stands unchanged.
