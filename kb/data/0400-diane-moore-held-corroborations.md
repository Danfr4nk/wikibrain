+++
id            = "dat:0400-diane-moore-held-corroborations"
layer         = 1
type          = "datum"
title         = "Diane Moore: two held messages corroborate the page — the 2016 'abusing gram' concern and the 2020-03-29 coronavirus hostility"
claim         = "Two quoted beats on the page `wiki/people/diane-moore.md` are independently present in the held `corpus/messages.csv`: **2016-05-23 18:47:27 UTC** — Dan's stated concern that Diane might accuse the caregivers of *\"'abusing' gram\"*; and **2020-03-29 03:52:18 UTC** — the coronavirus-era hostility toward Diane and Dave, which the page dates to local March 28 (the UTC timestamp converts to March 28 EDT, so the page's date is correct). Corpus page and old-wiki export are text-identical. Existing dat:0172 already covers the exclusion-letter timing, recipient, and probable Dave authorship — this datum extends it with held-message corroboration the page's quotes."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page body read directly from corpus__3.txt (wiki/people/diane-moore.md); verified text-identical against raw/old-wiki-export-2026-09-04/whole.txt. Both quoted passages located by exact-phrase search in the held 192,140-row corpus/messages.csv; timestamps are the CSV's UTC date_sent values. 2020-03-29 03:52:18 UTC = 2020-03-28 23:52 EDT, matching the page's local March 28."
importance    = 3
tags          = ["people", "corpus", "quote-verification"]
created       = "2026-09-09"

[when]
start = "2016-05-23"
end   = "2020-03-29"
+++

## Cross-references

- [`dat:0172`](0172-diane-exclusion-letter-correction.md) — the letter timing
  and authorship finding this extends rather than duplicates.
- [`dat:0401`](0401-diane-moore-unheld-and-relayed-claims.md) — the page's
  claims that do not corroborate.
