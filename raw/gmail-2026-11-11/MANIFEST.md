# Gmail gap-fill pull — MANIFEST

- Source: Gmail, via the Gmail connector CLI (`hatch_gws_cli gmail`), read-only. No mail was sent, deleted, labeled, or modified.
- Pull date: 2026-11-11 (America/New_York). The mailboxes are live; a small number of messages that arrived during the pull are included.
- Accounts pulled (2 of the 3 accounts the connector lists; the third account was outside this task's registry scope — see the fragment):
  - `ihatedanfrank/` — ihatedanfrank@gmail.com, account_id 50d9e13292c34fd9bee77b68ef044825 (primary historical)
  - `dfrank88/` — dfrank88@gmail.com, account_id aed6a01789a346a2be170f52f9044ad7 (secondary)
- Per account:
  - `inventory.json` — mailbox profile totals, exact per-label counters, and exact per-calendar-year message/thread counts obtained by paging full message listings per year (metadata only). Also the oldest and newest message dates found by listing.
  - `messages-2026-09-01-onward.jsonl` — full pull (headers + full body text) of every message in the coverage window, one JSON object per line: id, threadId, internalDate, date (ISO + header), from, to, cc, subject, labels, snippet, body_text. Archived as-is; bodies are archive material and are not summarized.
  - `pull-status.json` — listed vs. pulled counts for the window and the extension decision.
  - `MANIFEST.md` — per-account provenance and counts.
- Coverage window: query `after:2026/08/31`. Gmail interpreted the boundary as 2026-08-31 00:00 UTC, so coverage is 2026-08-31T00:03Z onward — the full mandated 2026-09-01-onward window plus a thin slice of 2026-08-31 UTC. Both accounts' windows contained more than 2,000 messages, so per the task rule no backward month-by-month extension was attempted.
- Rate/quota: no 429 or quota errors were returned for either account at any point. Nothing was stopped early.
- Inventory method note: a first pass using `resultSizeEstimate` was discarded — this connector caps that estimate at 201 for large result sets, making it unusable. The year counts in `inventory.json` are exact counts from paged listings. Year-count sums differ trivially from the profile counters (+1 message on the primary account, −139 on the secondary, 0.11%) because the mailboxes changed during the multi-hour pull.
