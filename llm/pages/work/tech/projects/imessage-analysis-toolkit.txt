---
domain: work
page_type: concept
title: "iMessage Analysis Toolkit (Gumroad product)"
status: active
date_created: 2026-09-11
date_modified: 2026-09-11
sources:
  - "Sammy working context, 2026-09-11 (MEMORY.md)"
related:
  - wiki/work/tech/projects/index
  - wiki/work/tech/imessage-tooling/overview
tags: [ai-collaboration, digital-footprint, career]
connections:
  - page: wiki/work/tech/imessage-tooling/overview
    type: instance-of
    claim: "The Gumroad product packages the same forensic pipeline the existing imessage-tooling overview documents: chat.db extraction, Electron app, py exporters, CSV-to-wiki ingest."
---

# iMessage Analysis Toolkit

A paid product on Gumroad: the forensic iMessage-extraction pipeline as a packaged tool.

## What it does

Extracts, exports, and analyzes iMessage/SMS from macOS `~/Library/Messages/chat.db` into structured, analyzable form:

- `bin/export-*` scripts and Python exporters.
- An Electron app surface.
- CSV output wired into the wiki-ingest flow.
- Documented query patterns against the corpus (pinned SQL), with a 97k message volume baseline from Dan's own archive.
- Requires Full Disk Access (chat.db is a protected database).

## Status (2026-09-11)

Listed as an active product. This entry documents the toolkit as productized; the technical internals are covered by the existing [[wiki/work/tech/imessage-tooling/overview]] (linked, not duplicated).

## Place in the larger system

The Toolkit is the commercialized edge of the same extraction apparatus that feeds the Wiki Brain itself: Dan's own message corpus is both the product's test data and the raw material of his wiki. The same pipeline — raw records in, structured evidence out — runs in three registers: private tool, public product, and the 4-hour chat pull that feeds the wiki's write-back sweep.
