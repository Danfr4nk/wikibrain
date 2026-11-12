# Gmail gap-fill pull (third account) — MANIFEST

- Source: Gmail, via the Gmail connector CLI (`hatch_gws_cli gmail`), read-only. No mail was sent, deleted, labeled, or modified.
- Pull date: 2026-11-11 (America/New_York).
- Provenance: follow-up pull for a third connected Gmail account discovered during the main Reup Gmail leg (see `reup-frag-gmail.md`, which flagged it as out of that task's registry scope). Dan's order covers every connected source, so it received the same treatment as the other two accounts.
- Account pulled:
  - `theitchysammygmailcom/` — theitchysammy@gmail.com, account_id 921d6fe638cd4b60bd2d49d7c13d3f28.
- Contents:
  - `inventory.json` — mailbox profile totals (63 messages / 58 threads), exact per-label counters (14 labels), and exact per-calendar-year message/thread counts obtained by paging full message listings per year (metadata only). Also the oldest and newest message dates found by listing.
  - `messages-all.jsonl` — full pull (headers + full body text) of every message in the mailbox, one JSON object per line: id, threadId, internalDate, date (ISO + header), from, to, cc, subject, labels, snippet, body_text. Archived as-is; bodies are archive material and are not summarized.
  - `pull-status.json` — listed vs. pulled counts and the extension decision.
  - `MANIFEST.md` — per-account provenance and counts.
- Coverage: the whole mailbox is only 63 messages, all dated 2026-09-27 → 2026-11-08, i.e. entirely inside the mandated window (query `after:2026/08/31` listed all 63). Per the task rule for a mailbox under 2,000 total, everything was pulled; no backward extension was needed and the mailbox is exhausted.
- Rate/quota: no 429 or quota errors were returned at any point. Nothing was stopped early.
- Inventory method note: `resultSizeEstimate` was not used — this connector caps that estimate at 201 for large result sets. The year counts in `inventory.json` are exact counts from paged listings, and they sum exactly to the profile total (63).
