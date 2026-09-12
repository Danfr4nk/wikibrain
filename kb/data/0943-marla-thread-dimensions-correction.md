+++
id            = "dat:0943-marla-thread-dimensions-correction"
layer         = 1
type          = "datum"
title         = "Marla page correction: the thread is two-way, not one-way — 74 rows, 38 from Dan"
claim         = "The Marla page's inbound count is right but its direction framing is wrong. The non-Dan handle the page identifies as Marla (**[phone redacted]**, never reproduced in full) accounts for **52 inbound rows**, matching the page's count. But the conversation is **two-way**: the individual thread itself holds **74 rows** — **38 from Dan, 36 inbound** — running **2017-12-08 22:46:55 UTC through 2018-04-03 09:50:34 UTC**, with additional later inbound rows (blank `chat_identifier`, including image-only rows on 2018-04-04 and 2018-04-05). The page's table marks direction 'Received throughout' and the narrative implies a one-way inbound stream; the held corpus's direction field is reliable enough to disprove that. The two-way shape changes the page's reading: this was an active correspondence, not a monologue Marla delivered into. The page's 'Marla page is a stub / needs the 2018-04-04 confirmation' status notes are superseded by the messages documented in dat:0944."
cites         = ["src:imessage-corpus-2026"]
confidence    = "high"
extraction    = "Page body read directly from corpus__3.txt line 63341 (68 lines). Thread dimensions from full scan of corpus/messages.csv (192,140 records): 52 rows from the identified handle (matching the page's 52 inbound); 74 rows in the handle's individual thread (38 Dan / 36 inbound, UTC range as stated); later blank-identifier inbound rows including 2018-04-04/05 image-only rows. The handle is masked to [phone redacted] per the identifiers rule. Old-wiki export repeats the page verbatim."
importance    = 3
tags          = ["marla", "fran-coldren", "thread-dimensions", "correction", "direction"]
created       = "2026-09-10"
+++

## Notes

- The direction field in this corpus has known labeling quirks elsewhere in the archive, but a 38/36 split across four months is not a labeling artifact — it is a correspondence.
- The 2018-04-04/05 image-only rows sit after the thread's nominal end and may relate to the death-vigil period; their content is not in the text export.

## Cross-references

- [`dat:0944`](0944-marla-medical-family-messages.md) — the verified medical/family messages in this thread.
- [`dat:0170`](0170-fran-death-date-april-4-2018.md) — the April 4 death date this thread's vigil messages support.
