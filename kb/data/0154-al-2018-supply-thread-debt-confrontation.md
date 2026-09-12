+++
id            = "dat:0154-al-2018-supply-thread-debt-confrontation"
layer         = 1
type          = "datum"
title         = "Al — 2018 supply contact ('Socialist' contacts label); 53-message thread ending in an unpaid-debt confrontation on Nov 1, 2018"
claim         = "Al (saved in the operator's contacts under the joke label \"Socialist\") was a 2018 supply contact during the deep-cycle period, alongside Johnny. The thread runs 53 messages, all inbound, from **2018-05-14** to **2018-11-01**, clustered May–June 2018 (28 + 21 messages), one in July, one in September, two in November. The thread ends with a repayment demand on 2018-11-01 19:52: *\"It's been months and you haven't gave me my money yet so I'm asking you one time only please give me my money\"*, followed 2018-11-01 21:26 by *\"Sweet and short you stop calling me\"* — read as Al cutting contact after the debt went unresolved. Al also visited the operator's mother directly: *\"I'm coming to see your mom do you want anything\"* (2018-07-03 01:15)."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page body read directly from corpus__3.txt line 45689 (55 lines); matches the old-wiki export's al.md page. All message-level claims verified against corpus/messages.csv (the 192,140-message iMessage export, src:imessage-corpus-2026) by parsing with csv.DictReader: exactly 53 rows carry Al's handle, all with is_from_me=0 (no outbound replies — the page's 'no outbound replies preserved' holds in this corpus too); monthly distribution 2018-05:28, 2018-06:21, 2018-07:1, 2018-09:1, 2018-11:2, confirming the 'quiet after early July, resurfaces November 1' pattern. The three quotes are verbatim in the corpus: message row 67588 ('It's been months...', 2018-11-01 19:52:21), row 67593 ('Sweet and short you stop calling me', 2018-11-01 21:26:37), and the 2018-07-03 01:15:00 'I'm coming to see your mom do you want anything'. The page's stated source is MASTER_MESSAGES_DB_DUMP.csv, an earlier extract not held here; the iMessage corpus corroborates its message-level claims independently. The third party's phone handle is deliberately not recorded in this node (privacy convention — the page itself redacts it)."
importance    = 4
tags          = ["people", "2018-deep-cycle", "imessage-corpus", "corroborated", "supply"]
created       = "2026-09-09"

[when]
start = "2018-05"
end   = "2018-11"
+++

## What the check confirms

Everything message-level on the page survives a direct re-read of the held
iMessage corpus: the 53-message count is exact, the quotes are verbatim, the
November 1 two-message sequence is in the corpus with its timestamps, and the
cluster-then-silence shape matches the page's narrative of a supply
relationship rupturing over money. The page is a faithful relay of the
underlying messages, and the messages are here — this is the highest-verified
datum in this ingest batch.

## Discrepancies and gaps

- **Thread start.** The page says 2018-05-13; the iMessage corpus's first row
  from the handle is 2018-05-14 12:19:54. The page was built from an earlier
  export (MASTER_MESSAGES_DB_DUMP.csv, not held here), so this is a
  one-day export/timezone difference, not a contradiction — but the earlier
  export is not available to adjudicate which is right.
- **\"Socialist\" contacts label.** The operator's own contacts entry is not
  in any held source; the label is the page's claim alone.
- **Last name and debt resolution** remain undocumented, as the page's Gaps
  section says. No further messages from the handle after 2018-11-01 21:26 in
  this corpus.
