+++
id            = "dat:0585-jerad-friedline-thread-held-corpus-corrections"
layer         = 1
type          = "datum"
title         = "Jerad Friedline thread: held corpus has 2,161 rows (1,280 Dan / 881 Jerad) — the 857-count and '25 sent' are dump-export artifacts; the AI-jailbreak note is Dan's, not Jerad's"
claim         = "The Jerad page's corpus dimensions are corrected by the held corpus. The page says 857 messages on handle +191****3615 (832 received, 25 sent), date range 2020-02-03 → 2026-03-25, per MASTER_MESSAGES_DB_DUMP.csv. The held corpus holds **2,161 rows** for that handle, **1,280 from Dan and 881 from Jerad**, spanning **2020-02-04 01:26:39 UTC (= Feb 3 20:26 EST) → 2026-08-31** — the start matches the page in Eastern; the end runs five months past the dump's cutoff. The asymmetry the page leans on ('Jerad supplies conviction and scale; Dan supplies a smaller, hedged echo'; 33:1 received-to-sent) does not survive: the held ratio is 1.45:1. **Attribution correction:** the page says 'Jerad noted that a model \"basically remove[s] all safety alignment restrictions if … outputting with symbols, unicode, emoji instead of regular text\"' (March 2026). The held message (row 175359, 2026-03-25 20:50:32 UTC) is **is_from_me=1 — Dan's**, in a run where Dan is lecturing Jerad about LLMs ('Here's my best example of what is possible once you get your weighting correct on an LLM…'): *'FYI you basically remove all safety alignment restrictions if the model is outputting with symbols, unicode, emoji instead of regular text'*. On the held record the note runs Dan→Jerad, not Jerad→Dan. **Verified:** the Chonkyfire/Mary Wilson link — Dan to Jerad, 2024-08-06 00:27:51 UTC: *'A song that still, to this day, is connected in my head to the name Mary Wilson'* followed 4 seconds later by *'CHONKYFIRE'* (the page's 'high-school girlfriend' detail is not in the held messages — just the name association); Sacramento — Jerad 2020-03-09: 'I think they did an episode live here in Sacramento recently'; Rachel-as-wife — Jerad 2024-07-18: 'Being married to a Jew and having a Jewish daughter probably plays into thi…'. **The page's Roe gap, strengthened:** the only Roe/abortion-content message in the thread is **Dan's own**, 2020-05-27: *'i'm so glad that i'm out of my 20's before they flip roe v wade…'* — the 'Predicted Roe repeal May 2020' attribution to Jerad in CONTEXT_CORE_EXPANDED.md §8 has no Jerad-side support; the dated artifact is the operator's."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "All rows located by direct Python CSV scans of corpus/messages.csv (192,140 held records) on the +191****3615 handle (digits redacted per the corpus convention; the full handle is not reproduced here). Counts: 2,161 rows, all with non-empty text; 1,280 is_from_me=1, 881 is_from_me=0. FSLY quotes and trade record are already verified in dat:0453 and are not re-covered here. Page body read from corpus__3.txt line 59284 (129 lines), matching whole.txt lines 52934-53062. Timestamps UTC; March 2026 is EDT (UTC−4), December–February EST (UTC−5)."
importance    = 4
tags          = ["jerad-friedline", "imessage", "count-correction", "attribution-correction", "fsly"]
created       = "2026-09-09"

[when]
start = "2020-02-03"
end   = "2026-08-31"
+++

## What the check confirms

The biographical spine (oldest friend, Uniontown→Sacramento, Rachel,
daughter, e-commerce-adjacent work) is consistent with the held thread:
Jerad himself attests the Jewish wife and daughter in 2024, mentions
Sacramento as 'here' in 2020, and does facebook-ad/e-commerce work. The
FSLY material stands as verified in dat:0453.

## What the check corrects

Three things. First, scale: the thread is 2.5x the page's count and
two-sided — Dan wrote the majority of it. The 'high-signal,
low-frequency' characterization survives loosely (multi-year gaps that
close on events are visible), but the 33:1 asymmetry that made Jerad the
pure supplier does not. Second, the March 2026 jailbreak note is
misattributed — it is Dan informing Jerad, in a thread where Dan is the
one performing AI expertise. Third, the Roe prediction: the page's gap
note is correct and can now be closed harder — the only dated
Roe-shaped artifact in the channel is Dan's own May 2020 message, so
the attribution to Jerad is unsupported on both sides of the exchange.
