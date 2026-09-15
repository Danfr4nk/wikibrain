+++
id         = "dat:libby-engagement-metrics"
layer      = 1
type       = "datum"
title      = "Dan's Libby-window text engagement: near-zero day-inquiry, slower Libby replies, sub-minute median overall"
claim      = "During the Libby window (2024-02-01 to 2024-08-31): Dan sent 5,132 messages, Annie 7,539. He asked exactly two workday questions ('How's work' 2024-02-28; 'What are you doing at Libby's today' 2024-06-18); the exact phrase 'how was your day' appears zero times in the 40,338-message Aug-2023 to Aug-2025 thread. Her 97 Libby-topic messages were answered within 30 minutes 42.3% of the time, versus 70.7% for her 7,442 non-Libby messages. His three heaviest Libby disclosures (brain-cancer diagnosis, 'I think I'm dying', depressed-at-doctor, all March 2024) received no text reply within 30 minutes. Against this: his overall median reply time in the window was 0.7 minutes, 83.5% of her messages answered within 15 minutes, and he raised Libby unprompted 7 times. His low day-inquiry rate was dispositional across eras (2018: 1.57/1,000 msgs; 2023-2026: 0-0.4/1,000), not a Libby-window departure."
cites      = ["src:imessage-corpus-2026"]
confidence = "high"
extraction = "drive-sweep gsheet imessages_2124702449_last6months (40,338 rows, 2023-08-09 to 2025-08-19); analysis in ~/workspace/libby-engagement/dan-engagement-metrics.md, latency.json, libby_pairs.json, metrics_gsheet.json"
importance = 5
created    = "2026-09-14"
tags       = ["libby-era", "engagement", "metrics", "2024"]

[when]
start = "2024-02-01"
end   = "2024-08-31"
+++

## How measured

Sender-filtered sweep over the drive-sweep Google Sheet export (the canonical
iMessage exports omit the 2024 Annie thread). Reply latency measured Dan-reply
to Annie-message at 30-minute and 2-hour thresholds, Libby-topic vs non-Libby.
Day/work questions counted via keyword sweeps across all of his messages in the
window, plus cross-era rate comparison. The three unanswered heavy disclosures
are quoted verbatim in the extraction file. Call and in-person responses are
untestable from this data.
