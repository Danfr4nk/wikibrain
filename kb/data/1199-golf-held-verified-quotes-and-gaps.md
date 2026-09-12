+++
id            = "dat:1199-golf-held-verified-quotes-and-gaps"
layer         = 1
type          = "datum"
title         = "Golf page: two quotes verified in the held corpus; two others absent from the held slice; Eastern-date conversion confirms Dec-13 attribution"
claim         = "The wiki/interests/golf page's self-reported-score quote — *\"That was a fluke today tho. Idk how I played as well as I did...and I still probably barely broke 90\"* — is verified verbatim in the held corpus: 2018-05-09 23:05:18 UTC, outbound, exactly matching the page's 9 May 2018 dating. The page's December-2025 terminal-phase callback quote (*\"like when we used to, when you ACTUALLY liked me\"*) is found in the held corpus at 2025-12-14 01:39:18 UTC — 20:39 on December 13 in Eastern time, confirming the page's **13 December 2025** attribution. Two other page quotes — the 2017-11-05 birthday-round *\"2 feet from an ace\"* and the May-2016 caddie-yard *\"I really really dig it. Spending all day on the golf course is a blast\"* — return zero hits in the held 192,140-row slice; they come from the fuller dox-scan dump the page cites, so they are carried as old-wiki testimony rather than re-verified here. The page's structural claims (three-generation family lineage, Nemacolin caddying 2016–2019 as the reignited playing era, golf bracketing the Annie relationship 2015–2025) are interpretation layered over these quotes and are not separately measurable from held rows."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Direct Python scans of corpus/messages.csv 2026-09-10: 'That was a fluke today tho' -> exactly one row (2018-05-09 23:05:18 UTC, is_from_me=1); 'ACTUALLY liked me' -> exactly one row (2025-12-14 01:39:18 UTC, is_from_me=1, Eastern 2025-12-13 20:39); '2 feet' + 'ace' and 'really really dig it' -> no rows. Page body read from wave-6 slice (wiki/interests/golf.md, 77 lines from whole.txt:13402); its corpus dimensions cite raw/self/dox-scan/all_imessages_complete_dump.txt and MASTER_MESSAGES_DB_DUMP.csv, neither held in this repository."
importance    = 3
tags          = ["golf", "annie-ulmer", "corroborated", "timezone", "unheld-source"]
created       = "2026-09-10"

[when]
start = "2018-05-09"
end   = "2025-12-13"
+++

## Why moderate rather than high

The two held hits verify wording and dating to the minute, but the page's
load-bearing material (the family lineage, the caddie-career reignition
narrative, the decade-long relationship bracket) is synthesis, not
countable rows. Filed as: quotes corroborated, frame attributed.
