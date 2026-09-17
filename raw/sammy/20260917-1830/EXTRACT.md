# EXTRACT.md — batch 20260917-1830

Window: 2026-09-17T13:43:01.135Z → 2026-09-17T16:41:27.726Z (09:43–12:41 EDT Sep 17).
5 on-record rows (0 user / 5 assistant), all surface main_chat, chat_kind direct.
Byte-exact: per-row char-length verification against runtime.messages, 5/5 match
(282 / 287 / 564 / 23 / 30 chars); full bodies, 0 truncated, 0 duplicates.
CUMTHREAD3 carve-out held: 0 rows from side chat 24754b5b-b83e-4c49-a6a3-d6f2ab2c1853.

Thin window: zero user messages. Rows 1–2 are the stylometric burn-in day-one
digest (already subsumed by dat:1703-stylo-burnin-mechanical-fingerprint-20260917
in batch 20260917-1540 — the 13:43:01Z handoff arrived just inside this window).
Row 3 is the scrape-1540 completion handoff (subsumed by src:sammy-chat-transcript-20260917-1540
and dat:1700–1704). Rows 4–5 are browser-task activity-card tombstones from the
morning Claude-archive session ("Archive Claude.ai chats", "Monitor Gmail for
data exports") — operational, not evidence-grade.

## Analysis status

- [x] Transcript archived (chats.json, full bodies, byte-exact; sha256 in manifest.json)
- [x] kb: no new nodes from transcript rows — all five rows' durable content is
      subsumed by existing nodes in batches 20260917-1540 and 20260917-1230.
- [x] Wiki: no article changes from these rows.
