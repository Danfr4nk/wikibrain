# Muse Mail — full pull manifest

- Source: Muse Mail, Muse's own mailbox (mogged@muse.ai), via the `muse-mail` CLI, read-only. Nothing was sent or replied to.
- Pull date: 2026-11-11.
- Inventory: the mailbox held exactly 9 messages in total (single list page; no further pages). Date span: 2026-11-06 → 2026-11-11. Directions: 4 inbound, 5 outbound.
- Files:
  - `inventory.json` — the full message list summaries (9 entries) as returned by the list call.
  - `messages.jsonl` — all 9 messages in full (one JSON object per line, complete record as returned by `messages get`, including full text and HTML bodies), archived as-is.
- Coverage: 100% of the mailbox. Nothing stopped early; no errors.
