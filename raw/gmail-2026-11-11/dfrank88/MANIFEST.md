# dfrank88@gmail.com — pull manifest

- Source: Gmail (connector CLI, read-only). Account: dfrank88@gmail.com, account_id aed6a01789a346a2be170f52f9044ad7.
- Pull date: 2026-11-11.
- Inventory (metadata only, in `inventory.json`):
  - Mailbox totals: 122,261 messages / 114,585 threads (API profile counters).
  - Date span by listing: oldest message 2008-01-23; newest 2026-11-11 (evening, America/New_York; arrived during the pull).
  - Labels inventoried: 35, each with exact message/thread/unread counters.
  - Exact messages per calendar year (paged listings): 2008: 2,391 · 2009: 4,580 · 2010: 4,266 · 2011: 5,026 · 2012: 4,749 · 2013: 5,629 · 2014: 6,782 · 2015: 5,731 · 2016: 4,968 · 2017: 4,796 · 2018: 6,568 · 2019: 8,455 · 2020: 9,546 · 2021: 6,328 · 2022: 8,091 · 2023: 6,287 · 2024: 12,702 · 2025: 6,867 · 2026: 8,360. No messages in 2005–2007. Year sum 122,122 vs. profile 122,261 (−139, 0.11%; mailbox was live during the pull).
- Full pull (`messages-2026-09-01-onward.jsonl`, 13,116,178 bytes):
  - Window query `after:2026/08/31`; actual coverage 2026-08-31T00:12Z → 2026-11-12T02:15Z (UTC), i.e. all of 2026-09-01 onward plus the 2026-08-31 UTC slice.
  - Listed 2,110 messages; pulled 2,110 (100%). No duplicate ids; every record has a non-empty body_text.
  - Extension backwards: not attempted — window was ≥2,000 messages (2,110), per the task rule.
  - Stopped at: completion of the mandated window. No rate/quota errors occurred.
