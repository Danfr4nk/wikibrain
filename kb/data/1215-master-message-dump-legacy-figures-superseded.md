+++
id            = "dat:1215-master-message-dump-legacy-figures-superseded"
layer         = 1
type          = "datum"
title         = "Master Message Dump page's corpus-dimension figures are legacy estimates from older overlapping dumps; the operative held source is the 192,140-row messages.csv"
claim         = "The wiki/self/message-corpora/master-message-dump page's corpus-dimension table (MASTER_MESSAGES_DB_DUMP.csv: 184,359 rows; MASTER_DUMP_PART_1_ARCHAIC.csv: 124,178; annie_all_time_logs.csv: 25,538; various Kristin exports ~21,727; 'Total raw message events across dumps: 300k+ entries') describes older overlapping exports, not the repository's current held source. The operative held source is corpus/messages.csv — 192,140 rows, manifest recorded 2026-09-08T17:59:27+00:00, SHA-256 2c53c54007534dfdd1786c0ebde0cd84c9e49483a8f5d1237ec436eef9d98cbb — already filed in dat:0001 (corpus scale) and dat:0008 (re-pullable byte-exact). The page's own guidance points the same way: its source-coverage-index note says to prefer bin/source-index's measured figures over the table's estimates, and its 2026-08-14 correction block warns that three of the END-FIGHT group-drama files are header-only empties whose citations are phantom — a live audit queued in BACKLOG.md that has not been done. Carry no figure from this page's table as current without the source-coverage index; the legacy per-dump counts are preserved here as historical, not operative."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read from wave-6 slice (wiki/self/message-corpora/master-message-dump.md, 190 lines from whole.txt:79504). Corpus Dimensions table and the 2026-08-14 empty-files correction are quoted from the page. The 192,140-row figure and manifest record (2026-09-08T17:59:27+00:00) were observed directly in this repository's corpus/manifest.json and corpus/messages.csv on 2026-09-10 (see dat:0001/dat:0008 for the full provenance filing). The page's Voice Patterns section was already corrected 2026-08-23 on the page itself (8.36 -> era-specific 8.34/9.31/11.71/15.03)."
importance    = 3
tags          = ["master-message-dump", "corpus", "provenance", "epistemics"]
created       = "2026-09-10"

[when]
start = "2011-03-18"
end   = "2026-09-07"
+++

## What this node does not do

It does not re-derive any of the page's per-dump figures (the dumps are
not held here), and it does not duplicate dat:0001/dat:0008. It is the
page-coverage node: the legacy table is historical context, the held
source is current, and the END-FIGHT empty-file audit is still open.
