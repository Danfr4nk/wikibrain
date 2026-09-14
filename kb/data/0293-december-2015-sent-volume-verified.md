+++
id            = "dat:0293-december-2015-sent-volume-verified"
layer         = 1
type          = "datum"
title         = "The '728 / 682 / 363 / 679 messages Dec 10–13, 2015' claim verifies exactly — but only after converting the corpus's UTC timestamps to EST"
claim         = "The master timeline's Tier-1 entry for **2015-12-10** states: *\"Dan sent 728 messages on December 10, 2015 alone, then 682, 363, and 679 across the following three days — the single highest four-day sent-volume anywhere\"*. Counting is_from_me=1 rows in corpus/messages.csv by UTC date gives 262 / 1070 / 565 / 502 for Dec 10–13 — no match. Converting each UTC timestamp to EST (UTC−5) and recounting gives **728 / 682 / 363 / 679** — an exact, digit-for-digit match. The wiki's figure was computed on local Eastern dates; the held corpus stores UTC."
cites         = ["src:imessage-corpus-2026",
                 "src:wikitest-rebuild-session-2026-09-09"]
confidence    = "high"
extraction    = "Observed directly: parsed corpus/messages.csv (192,140 rows) with python csv; counted rows with is_from_me='1' grouped by date_sent[:10] (UTC) → 2015-12-10: 262, 12-11: 1070, 12-12: 565, 12-13: 502; then shifted each timestamp by −5h (EST, December) and regrouped → 12-10: 728, 12-11: 682, 12-12: 363, 12-13: 679. The four claimed numbers appear in order with zero residual. Timeline entry at corpus__3.txt ~112448."
importance    = 4
tags          = ["master-timeline", "annie-ulmer", "message-counts", "corpus-verification", "timezone"]
created       = "2026-09-09"

[when]
start = "2015-12-10"
end   = "2015-12-13"
+++

## Why this node matters beyond the count

1. **It verifies the claim.** The four-day burst is real and is the corpus's
   heaviest four-day sent window in the December 2015 onset — the number is
   not inflated.
2. **It independently validates the wave-1 timestamp convention.** The old
   wiki's timestamps are local Eastern; the held corpus is UTC; ~5h offsets are
   timezone, not displacement. Here the offset is load-bearing: without the
   UTC→EST conversion the claim looks refuted (262 vs 728); with it, it is
   exact. This is the convention working as designed, on a hard count rather
   than a single message.
3. **Methodological caution for future counts.** Any per-day volume claim
   recomputed from messages.csv must state its timezone. A UTC-day count and a
   local-day count can differ by hundreds of messages at these volumes (Dec 11
   UTC = 1,070 vs Dec 11 EST = 682), and the two are not interchangeable.
