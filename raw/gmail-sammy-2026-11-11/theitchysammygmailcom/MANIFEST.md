# theitchysammy@gmail.com — pull manifest

- Source: Gmail (connector CLI, read-only). Account: theitchysammy@gmail.com, account_id 921d6fe638cd4b60bd2d49d7c13d3f28.
- Pull date: 2026-11-11.
- Inventory (metadata only, in `inventory.json`):
  - Mailbox totals: 63 messages / 58 threads (API profile counters).
  - Date span by listing: oldest message 2026-09-27; newest 2026-11-08.
  - Labels inventoried: 14, each with exact message/thread/unread counters.
  - Exact messages per calendar year (paged listings): 2026: 63. No messages in 2005–2025. Year sum 63 = profile 63.
- Full pull (`messages-all.jsonl`, 223,499 bytes):
  - Whole mailbox pulled in full (headers + full body text) — the mailbox total (63) is under the 2,000-message threshold, so per the task rule everything was pulled rather than only the window.
  - Window query `after:2026/08/31` listed 63 messages — the entire mailbox falls inside the mandated 2026-09-01-onward window; actual coverage 2026-09-27T22:48Z → 2026-11-08T23:55Z (UTC).
  - Listed 63 messages; pulled 63 (100%). No duplicate ids; every record has a non-empty body_text.
  - Extension backwards: not applicable — mailbox exhausted; there is no earlier mail.
  - Stopped at: completion (whole mailbox). No rate/quota errors occurred.
