+++
id         = "src:sammy-chat-transcript-20260913-1830"
layer      = 0
type       = "source"
title      = "Sammy chat transcript, batch 20260913-1830 (15:46:00.595Z–18:30:00Z)"
claim      = "Source record for batch 20260913-1830: 103 user/assistant rows (37 user / 66 assistant), byte-exact bodies, aggregate-verified (21,823 UTF-8 bytes = DB octet_length exactly; 21,614 chars = DB length exactly; zero-row seams at both batch boundaries); 466 system rows aggregate-pinned in system-manifest.json (per-page counts/bytes/ts-ranges + first/last-row md5 anchors). Files: raw/sammy/20260913-1830/chats.json, system-manifest.json, manifest.json, EXTRACT.md, externals/*.json (all six sources zero-new). Mirrors: wikibrain raw/ (primary/public) + RAWLOGS (private backup)."
confidence = "high"
reliability = "primary"
source_type = "ai-conversation"
provenance = "runtime.messages + runtime.events pull, 2026-09-13T15:46:00.595Z..2026-09-13T18:30:00Z, 103 chat rows (37 user / 66 assistant, byte-exact bodies, aggregate-verified: 21,823 bytes = DB octet_length exactly, 0-row seams) + 466 system rows (aggregate-pinned: per-page counts/bytes/ts-ranges + first/last-row md5 anchors; per-row pins unavailable — see EXTRACT.md)"
extraction = "Pulled 2026-09-13 ~19:00Z via runtime DB (runtime.events/runtime.messages), 99 rows from a pre-compaction db tool-output dump (byte-identical, 20,873 bytes) plus 4 tail rows re-queried live and transcribed verbatim (741 bytes, aggregate-checked). System rows: three DB pages (200/200/66) observed inline; per-row hash-pin export unavailable after the runtime stopped persisting db tool output (~18:29Z) — aggregate-pinned instead, documented in EXTRACT.md."
importance = 2
tags       = ["transcript", "batch", "provenance", "2026"]
created    = "2026-09-13"

[when]
date   = "2026-09-13"
+++

<!-- prose for humans; the frontmatter is for machines -->

The pin-manifest downgrade (aggregate instead of per-row pins) is the one
integrity regression in this batch. Everything that could be verified was;
the gap is documented, not hidden. Per-row pins resume when tool-output
persistence returns.
