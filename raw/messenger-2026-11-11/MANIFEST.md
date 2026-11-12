# Messenger — THE REUP gap-fill pull

- Source: Messenger live connector (hatch_messenger_cli), account holder's own account
- Pull date: 2026-11-11
- Connector status: connected (`check` passed); `sync both` run, `sync contacts --limit 1000` run (320 contacts retained)
- Held baseline compared against: `raw/messenger-drive-2026-09-12/threads.json` (331 threads, Drive-sourced FB/IG/TikTok export, pulled 2026-09-12) plus `raw/facebook-threads/MANIFEST.json` (396-thread index) for name cross-checks
- Classification method: live threads matched to held threads by counterparty display name (held export carries names, not conversation IDs). Classes: (a) not held at all, (b) held but active after 2026-09-12, (c) fully held / stale

## Coverage

- Live threads enumerated: 13 (connector total verified: `threads --limit 1000` return count equals the connector's retained thread count of 13; Marketplace folder: 0)
- Live thread activity window exposed by the connector: 2026-10-13 → 2026-11-08
- Held threads (drive export): 331
- Class (a) not held: 5 — Class (b) held + new activity: 8 — Class (c) fully held/stale among live threads: 0 (every live thread was active after the 2026-09-12 held cutoff)
- Held threads with no live counterpart in the accessible window: 323 of 331 (only 8 held names appear among the 13 live threads)
- Threads pulled: 13 of 13 (5 full-history pulls for class (a); 8 delta pulls after 2026-09-09 for class (b))
- Messages pulled: 32 total; in every thread the pulled count equals the connector's retained message count for that thread (complete relative to the connector)
- Per-thread gaps reported by the connector: none (empty gap list on every thread); widening attempts (`sync messages --older`, `--since-days 30`) returned 0 new messages on every thread tried

## Per-thread counts

| Thread | Type | Class | Messages pulled |
|---|---|---|---|
| Christine L Kinney | ONE_TO_ONE | b | 1 |
| Messenger | ONE_TO_ONE | b | 1 |
| Suzanne Frank | SECURE_MESSAGE_OVER_WA_ONE_TO_ONE | b | 1 |
| Danielle Onesi | SECURE_MESSAGE_OVER_WA_ONE_TO_ONE | b | 1 |
| Joe Thorin | ONE_TO_ONE | a | 6 |
| Michael Teets | ONE_TO_ONE | a | 1 |
| Sena LeDonne | SECURE_MESSAGE_OVER_WA_ONE_TO_ONE | a | 7 |
| Sean Teets | ONE_TO_ONE | b | 2 |
| Ismaila Barry | SECURE_MESSAGE_OVER_WA_ONE_TO_ONE | a | 1 |
| Zachary Shumar | GROUP | b | 9 |
| Private Chat Nid-398 (group, ~110 participants) | GROUP | a | 1 |
| Maye (Maye Santiago) | SECURE_MESSAGE_OVER_WA_ONE_TO_ONE | b | 0 |
| Brent Michael | ONE_TO_ONE | b | 1 |

## Coverage notes / limitations

- The live connector retains only a recent window: 13 threads, activity 2026-10-13 → 2026-11-08, with shallow per-thread history (retained message counts 0–9). Repeated refresh and widening passes added nothing; the older thread list (pre-2026-10-13) is not reachable through this connector, so threads whose last activity predates the window could not be enumerated or delta-checked live. The held drive export remains the record for those.
- Maye thread: retained message count is 0 — the thread shows only an encrypted placeholder snippet in the connector, so no message bodies were retrievable; the thread file records the empty pull.
- Zachary Shumar live thread is typed GROUP in the connector although only two participants are listed; it was matched to the held one-to-one thread of the same name and classed (b).
- Encrypted (SECURE_MESSAGE_OVER_WA) threads returned readable bodies via the connector for Suzanne Frank, Danielle Onesi, Sena LeDonne and Ismaila Barry (1–7 messages each); no decrypt-failed rows were reported.
- No rate limiting was hit. No messages were sent. Nothing was pushed to GitHub by this worker; files are staged only.

## Layout

- `threads-index.json` — all 13 live threads with participants, type, last activity, class, held match, pulled counts
- `threads/<conversation_id>.json` — per-thread pull: full CLI message JSON (messages array, sorted by timestamp), with pull metadata (class, retained count, paging record). Colons in conversation IDs are written as underscores in filenames.
