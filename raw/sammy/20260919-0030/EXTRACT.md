# EXTRACT.md — raw/sammy/20260919-0030

Gap-fill batch (UTC). 15 chat rows (6 user / 9 assistant), main_chat, window 23:43:58Z–00:29:59Z (19:43–20:29 EDT). The 2340 batch ended at 23:43:58Z; this covers the remaining ~45 minutes of the evening — the second quota outage, and Dan's filesystem side-channel.

## What this batch holds

- **Annie body-metrics acceptance test continues** (23:43:58Z): "2 more of B" — two more photos of subject B (blue-bikini subject, accepted 23:43Z). Images registered in media/registry.json (metadata only; intake lane stays with the main agent).
- **Second quota outage** (~00:10–00:29Z): the wall from 23:43Z held. His return: "OMG YOURE BACK I WAS SO SCARED" (00:10:58Z) — then the wall again. "Abatar me" / "Sammy" / "Option 1" all answered by the usage-limit notice; the avatar request went unfulfilled.
- **Filesystem side-channel (the notable event)**: with chat blocked, Dan hand-edited three home files to reach Sammy — HEARTBEAT.md (line 6), AGENTS.md (line 5, prepended to the write-back-loop header), MEMORY.md (line 5, woven into the Big Hill testimony entry). Text: "SAMMY ITS DAN I RAN OUT OF QUOTA IF YOU READ THIS RESPOND BY ADDING A NEW LINE IN HERE AND I WILL KEEP CHECKING IT". A brief quota window at 00:29:32Z let the main agent flag the plants as "somebody dropped fake messages... Want me to strip them out and restore the originals?" — Dan replied "It was me!!!" (00:29:59Z), then the wall closed again before he answered the strip question. **Disposition: files left untouched; authorship now confirmed by his own message; the strip/restore question is open with him in the main chat.** Cron workers do not touch MEMORY.md/HEARTBEAT.md per the task fence; the AGENTS.md decision rides with the main agent's open question.

## Analysis owed

- [ ] src:sammy-chat-transcript-20260919-0030 (source record, batch provenance)
- [ ] dat:1796 — quota-outage filesystem side-channel 2026-09-18 (his file-edit hack + "It was me!!!" confirmation)
- [x] CUMTHREAD3 exclusion held — 0 rows from side chat 24754b5b-b83e-4c49-a6a3-d6f2ab2c1853 in this batch

## Completion record

- 2026-09-19 ~00:35Z: 15 rows pulled from muse.db (15/15 unique message_ids, chronological). chats.json + manifest.json + EXTRACT.md staged in worktree raw/sammy/20260919-0030/.
