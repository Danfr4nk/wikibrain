+++
id            = "dat:1310-imessage-tooling-overview-export-stack"
layer         = 1
type          = "datum"
title         = "iMessage tooling: the export/extraction stack that feeds the message corpus"
claim         = "wiki/work/tech/imessage-tooling/overview.md documents the tooling stack for extracting, exporting and analyzing iMessage/SMS from ~/Library/Messages/chat.db (local, read-only, forensic grade): export-imessage-template.sh (bash + embedded Python, handles/chat-join/attributedBody decode, Full Disk Access, targets phones/Apple IDs), messages-exporter/ (Python, messages_export.py + tests), the Electron iMessage Extractor macOS app (queryBuilder.js exact templates, Apple-epoch math), danwiki_portal.py (Textual TUI, domain-mapped ingest), plus ad-hoc query/SQL utils and Gemini-provided SQLite snippets for targeted pulls (BFS dates, Suz comms, John Carney refs). The page cites 37+ CSVs in raw/self/message-csv/ and the context-core volume figure of 97,199 sent iMessages (2015–2025). Key extracts the page says the tooling surfaced: the BFS incident corpus, the 463 Morgantown contractor messages, the master-dump volume feeds, and targeted handle extracts (2124702449, 7249204125, 7244346811). This is the page whose tools produced the exports [dat:1304](1304-source-coverage-index-instrument-limits.md) indexes; the work index routes these pages to this worker at [dat:0499](0499-work-index-contents.md). All relayed as the page's testimony; the scripts and CSVs are not held in this repository."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "low"
extraction    = "Page body read from corpus__3.txt (w28 assignment): overview, purpose table, both tooling-inventory tables, key-extracts section, and sources table. None of the page's cited scripts or CSV pulls are held in this repository."
importance    = 2
tags          = ["imessage-tooling", "tech", "work", "forensic-analysis", "old-wiki", "testimony"]
created       = "2026-09-10"
+++

## Why this page gets a node

It is the provenance of the corpus this whole repository measures. Even as
testimony, the inventory of what the exports were built from belongs in the
record.
