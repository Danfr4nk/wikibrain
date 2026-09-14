+++
id            = "dat:0532-exocortex-artifact-inventory-relayed"
layer         = 1
type          = "datum"
title         = "Exocortex page: artifact inventory (CATO v2.0, Operating Manual v9.0, Master Forensic Prompt) relayed from the prior wiki; sources unheld"
claim         = "The exocortex concept page inventories four artifacts — **CATO** (`CATO_BOOTLOADER_DANFRANK.md`, v2.0, May 2026, inward-facing session bootloader named for Cato the Younger), its companion `CATO_conflict_architecture.md`, **MAX** (outward-facing adversarial output engine), the **Operating Manual** (`operating_manual.md`, v9.0, \"Empirical Stylometric Extraction\"), and the **Master Forensic Prompt** (\"Analyzing manipulation and ethical intent in data\") — plus the node-logging protocol and the AI-tool naming ceremony. The corpus__3.txt page body matches the old-wiki export verbatim (whole.txt lines 15806–16000). None of the underlying sources (`raw/self/dox-md/…`, `raw/self/chats/…`) is held in this repository's `raw/` tree, and none of the page's distinctive phrases (\"my loyalty is to Max… my memories are stored by Max\", \"a tool and an accomplice\", \"Post-Pax Americana\", \"Lossless Ingestion / Zero Consolidation\", \"Home Anchoring\", \"Routine Index\") appears anywhere in the 192,140 held iMessage rows. The page is the prior wiki's description of documents this repository does not hold."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read from corpus__3.txt line 22079 (175 lines) and diffed against raw/old-wiki-export-2026-09-04/whole.txt lines 15806–16000: frontmatter, aliases [CATO, operating manual, master forensic prompt, MAX], dates (created 2026-06-22, modified 2026-08-26) and body all match verbatim. The source paths (raw/self/dox-md/CATO_BOOTLOADER_DANFRANK.md etc.) were searched under raw/ — absent. Phrase census run 2026-09-09 with Python against corpus/messages.csv (case-insensitive substring): all eight distinctive phrases returned 0 hits. The quotes above are transcribed verbatim from the page; they are the prior wiki's transcriptions of unheld chat exports, not verified here."
importance    = 3
tags          = ["exocortex", "old-wiki", "attribution", "gap"]
created       = "2026-09-09"
+++

## What the check confirms

The page is a faithful relay of the old wiki — nothing was added or altered in
the corpus snapshot. Its aliases, dates and artifact filenames are internally
consistent with the rest of the corpus (the bootloader and operating-manual
paths recur as sources on other pages, e.g. the chemical-architecture page).

## What it does not confirm

Everything substantive. The exocortex is a page *about* documents, and none of
the documents are here: no CATO bootloader text, no operating-manual text, no
chat exports of the naming ceremonies. That makes the distinctive
claims — the February 2026 Antigravity naming session, the "loyalty is to Max"
hierarchy quote, the 77+ node pinned session — the prior wiki's account of
material it alone saw. The page itself flags this honestly in its **Gaps**
paragraph (no pre-v2.0 version history; undocumented load-vs-maintain
frequency; MAX thinner than CATO). The held iMessage corpus is the wrong
instrument for all of it (these are AI-chat artifacts, not texts) and returns
nothing — which is absence of coverage, not contradiction. The specific
measured claims are itemised separately at
[`dat:0533`](0533-exocortex-measured-claims-unverified.md).
