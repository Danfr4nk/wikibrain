+++
id         = "src:sammy-chat-transcript-20260913-1941"
layer      = 0
type       = "source"
title      = "Sammy chat transcript, batch 20260913-1941 (18:30:00Z–19:56:50.395Z)"
claim      = "Source record for batch 20260913-1941: 18 user/assistant rows (10 user / 8 assistant), byte-exact bodies, per-row md5-verified in the assembly script (18/18 match DB pins); 153 system rows per-row-pinned in system-manifest.json (message_id, created_at, event_name, surface, body_len, body_md5). Window frozen at 2026-09-13T19:56:50.395Z; zero-row seams at both batch boundaries (18:30:00.000Z shared with batch 20260913-1830's window end). Files: raw/sammy/20260913-1941/chats.json, system-manifest.json, manifest.json, EXTRACT.md, externals/*.json (all six sources zero-new). Mirrors: wikibrain raw/ (primary/public) + RAWLOGS (private backup)."
confidence = "high"
reliability = "primary"
source_type = "ai-conversation"
provenance = "runtime.messages + runtime.events pull, 2026-09-13T18:30:00Z..2026-09-13T19:56:50.395Z, 18 chat rows (10 user / 8 assistant, byte-exact bodies, per-row md5-verified 18/18 against DB) + 153 system rows (per-row hash pins: message_id/ts/event_name/surface/body_len/body_md5; bodies not stored)"
extraction = "Pulled 2026-09-13 ~20:00Z via runtime DB. Chat rows: metadata enumerated via muse.db, full bodies re-queried live and transcribed verbatim, each verified by md5 against the DB pin before writing (all 18 matched). System rows: single DB page of 153 pins. Unlike batch 20260913-1830, per-row pins were fully available — tool-output persistence was not needed."
importance = 2
tags       = ["transcript", "batch", "provenance", "2026"]
created    = "2026-09-13"

[when]
date   = "2026-09-13"
+++

<!-- prose for humans; the frontmatter is for machines -->

No integrity regressions in this batch: per-row md5 verification for chat
bodies and per-row pins for all system rows. The batch is deliberately
narrow (18:30Z–19:56:50Z) because the concurrent 6h writeback
(`wiki-brain-writeback-6h`) owned 15:46Z–18:30Z as batch 20260913-1830 on
main; this batch covers only the remainder to avoid double-archival.
kb nodes dat:1511 and dat:1514 cover 1830-window material that batch's
writeback did not node — flagged explicitly in each node.
