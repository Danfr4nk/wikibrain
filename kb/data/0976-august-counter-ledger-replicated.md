+++
id            = "dat:0976-august-counter-ledger-replicated"
layer         = 1
type          = "datum"
title         = "The August counter-ledger re-derived from the held corpus: the contempt asymmetry reproduces almost exactly"
claim         = "An independent re-scan of the held 192,140-row corpus for the Dan-Annie 1:1 thread, Aug 16 20:00 → Aug 19 15:15 EDT, reproduces the verdict page's counter-ledger nearly verbatim. Dan 810 / Annie 388 (page: 811/388). 'fuck you': Dan 15, Annie 0 — exactly the page's 15, but only with word-boundary matching; naive substring counting gives 20 because Dan also wrote 'go fuck yourself' variants, so the page's count is the stricter, more defensible one. 'piece of shit': Dan 17 / Annie 0 (page: 17/0, exact). 'liar': Dan 10 (page: 10, exact). Messages containing 'please' or 'beg': Dan 11 / Annie 64 (page: 11/69 — five short, the only material delta; the missing five are likely in the page's separate export pull or counted under 'begging' variants). All timestamps converted from the CSV's UTC (Eastern = UTC-4). The window's asymmetry — all the contempt outbound, the appeals inbound — is a first-party measurement, not the page's rhetoric."
cites         = ["src:imessage-corpus-2026"]
confidence    = "high"
extraction    = "Python scan of corpus/messages.csv 2026-09-09: window 2026-08-17 00:00 → 2026-08-19 19:15 UTC, chat_identifier restricted to Annie's handle (+12124702449), case-insensitive, apostrophes normalised. Dan's window-wide (all threads) count is 1,317 — the 811/810 figure is the 1:1 thread only, which is the number the ledger is built on. 'fuck you' rows enumerated individually (20 distinct); 15 contain it as a standalone phrase, 5 only inside 'go fuck yourself'/'fuck your'. Reproducible against messages.csv sha256 2c53c540… (corpus/manifest.json)."
importance    = 5
tags          = ["annie-ulmer", "2026-08", "corpus", "measurement", "corroboration"]
created       = "2026-09-09"

[when]
start = "2026-08-16"
end   = "2026-08-19"
+++

Why this matters: the counter-ledger is the part of the verdict most likely
to be dismissed as adversarial framing, and it is the part that reproduces
most cleanly from primary data — including the direction of the one
ambiguity (the stricter count matches the page). The Dan total is 810 vs the
page's 811, one message on the window boundary; not pursued. The please/beg
64-vs-69 gap is real and recorded rather than rounded away; it may be a
different export pull, and absence of an explanation is better than a guessed
one.
