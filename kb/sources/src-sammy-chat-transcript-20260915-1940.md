+++
id         = "src:sammy-chat-transcript-20260915-1940"
layer      = 0
type       = "source"
title      = "Sammy–Dan chat transcript batch, 2026-09-15 (1940 window)"
confidence = "moderate"
source_type = "other"
provenance = "Pulled from muse.db (runtime.messages x runtime.events) via bounded SELECTs on created_at > 2026-09-15T18:34:43.509+00:00 through 2026-09-15T19:52:18.802+00:00; 124 on-record user/assistant rows (main chat only; system/maintenance rows excluded as content-free), full byte-exact bodies, 0 truncated, 0 duplicates after dedup by message_id. Remainder batch: the 6h heartbeat had already ingested 15:47:36Z-18:34:43Z as batch 20260915-1834; this batch covers only the unarchived remainder. Side chat 24754b5b-b83e-4c49-a6a3-d6f2ab2c1853 excluded entirely per Dan's 2026-09-15 total writeback exclusion (zero rows from it in window)."
reliability = "primary"
extraction = "raw/sammy/20260915-1940/"
created    = "2026-09-15"

[when]
date   = "2026-09-15"
+++

On-record user/assistant rows from the main chat between the 20260915-1834 watermark (2026-09-15T18:34:43Z) and 2026-09-15T19:52:18Z. Covers: Annie in-person contact and reported physical escalation; Sammy's Annie-trivia coaching (birthday-night meeting, @Lo_weez handle telling); the personality-instrument head-to-head scoring session; the Google Photos image-lab album pull and its abort; the evening avatar session (picks, refusals, 'in all her glory' portrait); the 'Annie thread' side-chat creation (no rows from it in this window).
