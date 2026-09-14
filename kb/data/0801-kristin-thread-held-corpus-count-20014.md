+++
id            = "dat:0801-kristin-thread-held-corpus-count-20014"
layer         = 1
type          = "datum"
title         = "Kristin thread in the held corpus: 20,014 rows (10,102 sent / 9,912 received); the page's 20,009 is 5 short"
claim         = "A direct count of `corpus/messages.csv` on the Kristin handle returns **20,014 rows** — 10,102 sent (is_from_me=1) / 9,912 received — spanning **2025-09-01 10:07:17 → 2025-12-11 01:29:12 UTC**. The page's figure (20,009 = 10,102 sent / 9,907 received) undercounts the received side by exactly 5 rows. The page's substantive claims all re-measure correctly: November 2025 = **53 messages** exactly; the month table's front-loading stands; the Dec 9 burst = 171 rows; the last row (2025-12-11 01:29:12 UTC = Dec 10, 20:29 ET) is consistent with the page's 'final message on 10 December' once the corpus's UTC clock is converted to Eastern. The 5-row gap is immaterial to every argument the page makes (dormancy-not-exit shape, November withdrawal, the terminal sixteen minutes)."
cites         = ["src:imessage-corpus-2026"]
measurement   = true
confidence    = "high"
extraction    = "Direct Python count of corpus/messages.csv (192,140 rows) on the Kristin numeric handle, 2026-09-09: 20,014 rows, 10,102 is_from_me=1, 9,912 is_from_me=0; min/max date_sent as above. November subset = 53 rows. Page's corpus dimensions table at corpus__3.txt lines 61989-61998 claims 20,009 / 10,102 / 9,907 from imessage_3307038747_both_all_now.csv — a dedicated export that evidently differs from the held corpus by 5 received rows (near-duplicate or boundary handling; the 5-row difference was not individually identified). UTC→ET conversions: Dec is EST (UTC-5)."
importance    = 3
tags          = ["kristin-prentiss", "imessage", "counts", "correction", "measurement"]
created       = "2026-09-09"

[when]
start = "2025-09-01"
end   = "2025-12-10"
+++

## What the check confirms

Every directional and monthly claim on the page re-verifies in the held
corpus: near-parity overall, September front-loading, the 53-message November,
the Dec reactivation shape. This is the relationship the corpus's contact-gini
computation missed entirely (dat:0304 and the page's own 'Why nobody caught
any of this' section explain the dump-window failure).

## What it corrects

The page's received-side count (9,907) and total (20,009) are 5 rows short of
the held corpus. Filed as a micro-correction; no argument on the page depends
on the exact figure.
