# ihatedanfrank@gmail.com — pull manifest

- Source: Gmail (connector CLI, read-only). Account: ihatedanfrank@gmail.com, account_id 50d9e13292c34fd9bee77b68ef044825.
- Pull date: 2026-11-11.
- Inventory (metadata only, in `inventory.json`):
  - Mailbox totals: 82,411 messages / 79,057 threads (API profile counters).
  - Date span by listing: oldest message 2018-02-15; newest 2026-11-11 (evening, America/New_York; arrived during the pull).
  - Labels inventoried: 21, each with exact message/thread/unread counters.
  - Exact messages per calendar year (paged listings): 2018: 1,856 · 2019: 4,473 · 2020: 6,354 · 2021: 11,314 · 2022: 10,242 · 2023: 13,861 · 2024: 13,582 · 2025: 11,725 · 2026: 9,005. No messages in 2005–2017. Year sum 82,412 vs. profile 82,411 (+1; mailbox was live during the pull).
- Full pull (`messages-2026-09-01-onward.jsonl`, 16,947,944 bytes):
  - Window query `after:2026/08/31`; actual coverage 2026-08-31T00:03Z → 2026-11-12T02:15Z (UTC), i.e. all of 2026-09-01 onward plus the 2026-08-31 UTC slice.
  - Listed 2,145 messages; pulled 2,145 (100%). No duplicate ids; every record has a non-empty body_text.
  - Extension backwards: not attempted — window was ≥2,000 messages (2,145), per the task rule.
  - Stopped at: completion of the mandated window. No rate/quota errors occurred.
