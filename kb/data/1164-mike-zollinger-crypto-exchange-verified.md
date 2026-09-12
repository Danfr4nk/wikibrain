+++
id            = "dat:1164-mike-zollinger-crypto-exchange-verified"
layer         = 1
type          = "datum"
title         = "Mike Zollinger thread: held corpus verifies the Sept 2018 crypto exchange, but not the page's 51-message count"
claim         = "Direct scan of corpus/messages.csv on Mike Zollinger's handle ([phone redacted]) confirms the page's load-bearing claim: a September 12, 2018 crypto exchange is real — **'Half a bitcoin'** 2018-09-12 18:32:59 UTC, a **Bitcoin address shared at 19:14:47, 19:15:15 and again as a blockchain.com link at 19:19:33 UTC**, and **'Yeah my ethereum went way down.. thought that way gonna sky rocket'** 19:22:39 UTC — all exactly as the page describes (a Bitcoin wallet address shared; Ethereum 'went way down' after expecting it to 'sky rocket'). The date range also holds: first row **2018-04-03 00:47:34 UTC** ('How was ur first loop') = 2018-04-02 Eastern, last row **2018-09-15 16:13:30 UTC** — matching the page's 2018-04-02 to 2018-09-15. **One correction:** the held thread has **121 rows, not 51** — the page's '51 messages' figure is off by ~2.4x (likely a one-direction or dedicated-export count, but direction here shows both sides). Nemacolin caddy framing and the 'house to rent back' joke are not re-verified in this pass."
cites         = ["src:imessage-corpus-2026",
                 "src:wikitest-rebuild-session-2026-09-09"]
measurement   = true
confidence    = "high"
extraction    = "Direct Python scans of corpus/messages.csv (192,140 rows): handle-scoped row count (121), sorted first/last rows, and keyword searches for 'bitcoin'/'ethereum'/'sky rocket'/wallet-address patterns on the handle. The page body was read at corpus__3.txt line 64548 (41 lines); the old-wiki export carries it verbatim but prints the handle unredacted — the handle is redacted in this node per the third-party-handle rule. All held timestamps UTC; page dates are Eastern."
importance    = 3
tags          = ["mike-zollinger", "nemacolin", "crypto", "held-verified", "count-correction"]
created       = "2026-09-10"
+++

## Notes

- The crypto exchange is the page's evidentiary point (an early, matter-of-fact crypto thread predating Dan's 2020–2021 market era); the held corpus supports it in full, including the wallet-address detail the page cites.
- The 121-vs-51 count gap does not touch the page's qualitative claims, but any node later reasoning about Zollinger thread volume should use 121 from the held slice, not 51.
