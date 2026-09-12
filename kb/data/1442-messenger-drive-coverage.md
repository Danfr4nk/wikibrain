+++
id = "dat:1442-messenger-drive-coverage"
layer = 1
type = "datum"
title = "Messenger/IG/TikTok Drive archives: 27,573 messages, 2007-2026, four sources, two platforms mislabeled"
claim = "Dan's Google Drive holds three social-messaging archives plus the August 2026 CLI pull, totaling 27,573 unique messages across 331 threads from 2007-01-16 to 2026-08-26. The 2022-09-05 Facebook DYI export (15,741 msgs, 282 threads, four duplicate Drive generations of it) is true Facebook Messenger. The 2025-08-24 'messages' folder (11,678 msgs, 127 threads) is INSTAGRAM DMs, not Messenger - identified by IG-style folder slugs (_simo_am, numeric IDs, 'instagramuser' in names) and 'Instagram User' participant entries. The 2022-11-27 'Direct Messages' file is TikTok DMs (143 records, 6 threads). Earliest timestamp of any source is 2007-01-16 (Anna Cameron, FB). Peak month is 2022-06 (4,098 messages, driven by the Valeria Iglesias burst)."
cites = ["src:messenger-drive-2026-09-12"]
confidence = "high"
tags = ["messenger", "instagram", "tiktok", "coverage", "volume"]
importance = 4
created = "2026-09-12"
[[edges]]
rel = "about"
target = "ent:dan"
strength = "strong"
asserted_by = "llm"
+++

**Evidence class:** Drive archive inventory + parse. Raw: `raw/messenger-drive-2026-09-12/`.

1. **Four sources, three platforms.** Facebook Messenger export generated 2022-09-05 (Drive has it 4x under different folder IDs, parsed once): 15,741 records, 2007-01-16 -> 2022-09-04. Instagram DM export (2025-08-24): 11,678 records, 2016-05-30 -> 2025-08-09. TikTok DM text file (2022-11-27): 143 records, 2021-08-19 -> 2022-11-24. Companion CLI pull: 11 records, 2026-08-14 -> 2026-08-26 (appended, no overlap).
2. **Dedupe.** Cross-generation duplicates removed (3 of 4 FB folder IDs); cross-export dedupe on (participant-set key, timestamp, sender, text): 13 records. Canonical thread key is the participant-name set so the same conversation matches across FB and IG exports despite different folder naming.
3. **Gaps.** FB Messenger 2022-09-05 -> 2026-08-13 and IG DMs 2025-08-10 -> present are uncovered - the 2026-09-12 screen recording shows ~38 active threads in that window (dat:1440 sect. 5). E2EE-default threads are invisible to the CLI sync path.
4. **Exclusions.** 'Confrontation Over Phone Messages' (~17.6MB) is a Gemini prompt artifact, not messages. The messages_export/messages/MASTER_MESSAGES_DB_DUMP spreadsheets are phone/iMessage datasets, not social DMs.
