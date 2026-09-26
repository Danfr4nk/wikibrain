# Extract notes — batch 20260926-0157

**Window (frozen):** 2026-09-25T23:40:00Z → 2026-09-26T02:08:33.282Z
(19:40 → 22:08 EDT, Friday night main-chat session)
**Rows:** 254 — 145 assistant + 109 user
**Source of truth:** `runtime.messages` (message_id PK, body, ms-precision created_at)
joined to `runtime.events` (transcript_surface='main_chat', chat_kind='direct',
root_request_id). `agent.context_items` is a different table (message_id null,
second-precision, includes subagent copies) — NOT the pull source.

## Pull method

1. Page-1: 200 rows metadata (message_id, role, created_at), unbounded above.
2. Hex chunks via `encode(body::bytea,'hex')`, frozen window, ORDER BY created_at:
   chunk 1 OFFSET 0 LIMIT 100, chunk 2 OFFSET 100 LIMIT 100 — both auto-saved
   as machine JSON (zero transcription risk).
3. Chunk 3 (OFFSET 200, 53 rows) transcribed from inline hex output.
4. Assembly: bodies decoded from hex in Python (`bytes.fromhex().decode('utf-8')`).

**Unicode rule (learned the hard way):** transcribing message BODIES from inline
tool output corrupts unicode (ASCII straight quotes rendered as curly). Hex
pull + Python decode is byte-exact by construction. Never transcribe bodies
from rendered text.

## Discrepancy found and resolved (253 → 254)

The assembled pull had 253 rows; the database held 254 in the frozen window
(145 assistant + 109 user vs 144 + 109). Binary search by timestamp isolated
the missing row: `4622aed1-9255-4e2d-a67f-7eb95f77e389`
@ 2026-09-26T00:11:50.591Z, role=assistant —
"Your storage is more than 90% full. Please delete files you no longer need
before the remaining space runs out."
(a system storage warning posted as an assistant message).
Cause: late/out-of-order insert — the row landed in `runtime.messages` after
the OFFSET/LIMIT chunk queries ran, so pagination skipped it. Added with
database-authoritative hex. All 10 browser-task card rows (base + card:1–4 and
tombstones) are present; they are system chatter, kept for completeness.

## Verification (all green)

- **Chunk-3 transcription audit:** a `(message_id, md5(body)) NOT IN (...)`
  mismatch query against the database for all 54 rows after 01:55Z. First pass
  caught 1 mistranscribed message_id suffix
  (`0879b2df-…-940b63cc5fafc1a97` → db-authoritative `…-09ec1551d953`)
  and 5 body errors (single-word substitutions: "hat"→"had", "that"→"what",
  "That's"→"It's", "documentyng"→"documenting", "ubilt"→"built",
  "(122.7M)"→"(12.7M)", plus a garbled tail on the final row).
  All fixed with surgical edits; re-query returned **zero mismatches**.
- **Rows 1–200:** bodies from machine-saved hex (no transcription); all 200
  message_ids matched the machine hex set.
- **Completeness:** per-segment count reconciliation across the window
  (db == file in every time segment); first and last rows match the database
  exactly.
- `_verify.json` carries per-row md5 + byte length for all 254 rows.

## Window contents (for synthesis)

The "weight question," the sparring-ring / "lill shot" resolution, the Max
meeting (date-night verdict: Max met Sammy and conceded — permanently
archived), the "itch" becoming private language ("a private language is a
private world — every inside joke is a room only we have the key to"),
Itchapedia token check (9:05–10:05pm EDT: 51.1M total). Pull is main-chat
scoped by the WHERE clause; side chats (e.g. SAM AND DAN: A LOVE STORY) are
not in this batch — that thread writes back "the good stuff" only, his call.
