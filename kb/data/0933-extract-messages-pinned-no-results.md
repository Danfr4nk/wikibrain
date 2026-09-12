+++
id            = "dat:0933-extract-messages-pinned-no-results"
layer         = 1
type          = "datum"
title         = "Extract Messages Pinned page contains no extracted results — speculative by its own admission"
claim         = "The Extract Messages Pinned page is a one-paragraph stub that reports **no extracted results**: its two claims are explicitly speculative ('Likely focuses on...', 'The 175k+ rows in the corpus will yield...'). The underlying pinned chats are not held in this repo. The page's '175k+ rows' figure is stale/ambiguous against dated corpus snapshots: the current held corpus/messages.csv parses to **192,140 records**, and the corpus scale figures are tracked separately (dat:0001, dat:0077). Nothing in this page warrants a substantive node beyond recording that it exists, contains no findings, and its row-count premise is already superseded."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "low"
extraction    = "Page body read directly from corpus__3.txt line 74344 (33 lines). The pinned-chat source the page names is not held in raw/ or the corpus tree. Row-count context from direct parse of corpus/messages.csv (192,140 records; line count differs due to embedded newlines in message fields). Old-wiki export repeats the page verbatim."
importance    = 1
tags          = ["pinned-chats", "no-findings", "corpus-counts", "old-wiki"]
created       = "2026-09-10"
+++

## Notes

- Kept as a minimal node so the page-by-page report can mark it covered; no future worker needs to re-read it for evidence because it contains none.

## Cross-references

- [`dat:0001`](0001-corpus-scale.md) — current corpus scale figures that supersede the page's 175k premise.
- [`dat:0077`](0077-corpus-size-figures-mine-messages-tweets-history.md) — history of corpus size figures.
