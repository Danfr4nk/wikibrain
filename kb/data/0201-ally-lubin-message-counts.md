+++
id            = "dat:0201-ally-lubin-message-counts"
layer         = 1
type          = "datum"
title         = "Ally Lubin channel: 1,864 iMessage records across two handles, 2018-12-17 → 2026-08-20; 708 in the Aug 18–20, 2026 burst"
claim         = "The relationship is measured across **two handles and 1,864 iMessage records (1,175 sent by Dan, 689 received), spanning 2018-12-17 → 2026-08-20**: 1,064 records on the phone handle (612 sent / 452 received, 2019-06-28 → 2023-11-14) and 800 on the email handle (563 sent / 237 received, 2018-12-17 → 2026-08-20), plus 21 Facebook Messenger messages on a single day (2013-07-05). The window table: Dec 2018–Jan 2019 (email) 186 records (10%); Jun–Oct 2019 (phone) 943 (51%); Dec 2019–Jun 2020 60 (3%); Aug–Nov 2023 77 (4%); Mar 2025–Jun 2026 13 (1%); **Aug 18–20, 2026 708 (38%)** — 36–38% of eighteen years of traffic in three days, against 943 (51%) for the entire 2019 crisis. The page records two corrections: a prior 1,987 total was 123 messages too high (phone count 1,080/623/457 corrected to 1,064/612/452 from the desktop export; email 907 corrected to 800), and an earlier '1,375 records' claim was a `wc -l` artifact on a CSV whose message texts contain newlines. The $2,100 cumulative figure (Oct 22, 2019, via Dan's screenshot — accepted by her in 2019, contested by her in 2026) covers August 17 – October 22, 2019 only and excludes the 2018 and January 2019 gifts; no bank or Cash App export exists in raw/ to corroborate it."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 47902 (1026 lines); the measurements section matches raw/old-wiki-export-2026-09-04/whole.txt verbatim. The page's cited sources (raw/self/imessage/ally-lubin_chatdb_complete.csv, raw/self/imessage/ally-lubin_last-7-days_20260820.csv, raw/self/message-csv/*) are not held in this repo, so the counts are relayed through the prior wiki's own correction pass, which is unusually explicit about method (union of four sources, deduped, wc -l corrected). Handle identifiers are redacted in the working corpus copy and are not reproduced here. The page's caveat is kept: the August 19 inbound is missing, not absent — the export contains 331 outbound on August 19 and zero inbound, but Dan's own messages that day are unambiguously responsive, so the capture, not the conversation, stops at 21:42 on August 18."
importance    = 4
tags          = ["people", "message-corpus", "old-wiki", "attribution"]
created       = "2026-09-09"
+++

## What the check confirms

The corpus page and the old wiki agree exactly on the corrected counts, the
window table, the correction narrative (1,987 → 1,864; the wc -l artifact),
and the $2,100 caveat.

## What it does not confirm

No message file was examined in this session; the counts inherit the prior
wiki's correction pass, which is methodologically explicit but itself
unverifiable from here. The ~107 email-handle messages the page flags as
unaccounted for remain open (a handle not yet identified, or an export not in
raw/). The $2,100 has no financial-export corroboration, so her 2026 contest
cannot be dismissed on the record.

## Why the measurement corrections matter as data

This is the page that demonstrates the corpus's own correction discipline on
numbers: two successive count corrections, each with the mechanism named
(partial-export handle confusion; newline-in-CSV line counting). It is the
same failure family [`pat:partial-data-confident-error`](../patterns/partial-data-confident-error.md)
describes, caught by re-derivation rather than by new data.
