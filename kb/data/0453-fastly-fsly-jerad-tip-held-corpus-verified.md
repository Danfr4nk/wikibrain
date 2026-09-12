+++
id            = "dat:0453-fastly-fsly-jerad-tip-held-corpus-verified"
layer         = 1
type          = "datum"
title         = "Fastly (FSLY): Jerad's 2020-09-20 tip and Dan's 2020–21 trade record — all seven verbatim quotes verified in the held corpus (UTC→EDT), plus the page's YAML duplicate-key fix"
claim         = "The FSLY page's corpus-evidence table is verbatim-verified against the held corpus (all timestamps UTC in the corpus, local Eastern on the page — every one converts exactly): Jerad (received), 2020-09-20 23:40 UTC = 19:40 EDT — *\"FSLY... busy at the moment but will send my research tomorrow. I made a little over $200k from April — now from this stock alone, future of web hosting and edge CDN\"*; Dan, 2020-09-21 00:03 UTC = 20:03 EDT Sep 20 — *\"just buy FSLY?\"*; Jerad, same minute — *\"Buy FSLY and do not touch for 2-3 years\"*; Dan, 2020-09-30 13:06 UTC (09:06 EDT) — *\"112 shares my dude\"*; Dan, 2020-10-06 19:37 UTC = 15:37 EDT — *\"dude i made $600 just from FSLY today\"*; Dan, 2021-02-05 02:17 UTC = 21:17 EST Feb 4 — *\"I learned a lot from that big fastly dip about the importance of momentum trading. I never get FOMO about stuff I've sold that has gains later, but you feel it hard when you miss a good opportunity to get out\"*; Dan, 2021-02-17 05:47 UTC = 00:47 EST — *\"FSLY earnings tomorrow\"*. The page's position narrative (~$15k in, ~$4k quick profit before the January 2021 meme-stock widening; entry at the top of the vertical run, out before the late-2020 earnings guidance blowup; 'buy and don't touch' advice as the trap) is the page's reading from the unheld MASTER_MESSAGES_DB_DUMP and market history — the page explicitly flags the earnings date/percentage as external context, not corpus. Two page-infrastructure notes worth carrying: **RE-CHECKED [2026-08-18]** — this page's frontmatter carried the `synthesizes:` key twice, so every standard YAML parser read it as synthesizing only `context-core` and dropped the market-era membership; the repo's bespoke frontmatter reader collects both occurrences, so the wiki gates passed while the rendered portal lost data. The sweep found the same defect on wiki/people/jerad-friedline and wiki/mind/psychosexual/developmental-origins; all three fixed, lint rule queued in BACKLOG.md. No existing node covered Jerad, the FSLY tip, or the 2020–21 market era; this is the first."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page body read from corpus__3.txt line 120185 (170 lines); page is in raw/old-wiki-export-2026-09-04/whole.txt. Held-corpus verification: full-text search of corpus/messages.csv for the seven quoted strings, all found; direction fields match the page (Jerad received, Dan sent); timestamps converted UTC→America/New_York (EDT in Sep/Oct 2020 and Feb 2021 — Feb 2021 is EST, -5; conversions checked: 02:17 UTC Feb 5 = 21:17 EST Feb 4, matching the page's 2021-02-04). The sender handle matches the page's redacted +191****3615 and is not reproduced here. Position sizes (~$15k/~$4k) and Jerad's $200k (inside the verified tip quote) are the page's/corpus-quote respectively."
importance    = 4
tags          = ["fastly", "fsly", "jerad-friedline", "trading", "market-era", "verified-quote", "yaml"]
created       = "2026-09-09"
+++

## What the check confirms

This is the cleanest verification in the wave: seven quotes, seven hits,
seven exact timestamp conversions, direction fields matching. The page's
evidence table is trustworthy. The tip is dated 2020-09-20, the 112-share
position ten days later, the $600 day on 2020-10-06, the momentum lesson on
2021-02-04 — all corpus-anchored. The evangelism pattern (Jerad → Dan →
another friend 'started calling in daily gains') and the momentum-over-
conviction lesson are the page's synthesis, filed as such.

## What it does not confirm

The ~$15k position size, ~$4k profit, and the entry/exit price narrative
come from the unheld MASTER_MESSAGES_DB_DUMP and the operating manual, not
from the held corpus. The late-2020 earnings-drop mechanics (TikTok
uncertainty, guidance cut, 'one of the worst large-cap drops of that
earnings season') are external market history the page flags as such — not
re-derived. The 2020–2021 market-era period page itself is not in this
worker's page list; its GME/AMC/CCIV material is untouched by this ingest.
