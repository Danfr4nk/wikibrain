# EXTRACT 20260915-0740

Batch: chat-ingest + synthesis, window 2026-09-15T06:26:11.326+00:00 → 2026-09-15T07:41:10.973+00:00 (strictly after prior watermark 2026-09-15T06:26:11Z).
Rows: 108 unique message IDs (101 system / 4 user / 3 assistant), byte-exact, chronological.
REDACTION (2026-09-15 0830 heartbeat, per Dan's explicit exclusion order): the
97 user/assistant rows of the CUMTHREAD3 / Lovense remote-control session
thread (06:45:52Z–07:41:10Z) were removed from chats.json. Original batch had
205 rows (101 system / 47 user / 57 assistant). System rows retained (runtime
scaffolding, not thread transcript). See "Deliberate exclusions" below.
Extraction: 181 ordinary bodies byte-verified at ingest; 24 oversized system messages reassembled from 60,000-char chunks, joined UTF-8 byte count verified against mbytes per message — 0 mismatches, 0 gaps, 0 conflicts.

## Sources checked (secondary; Gmail excluded standing)

- Instagram posts: newest 2026-08-26 — 0 new. Instagram DMs: FAILED (HTTP 403, server-side gate: Facebook account lacks 2FA; reconnecting won't help).
- Threads posts: newest 2026-08-26 — 0 new. Threads messages: NOT CONNECTED.
- Facebook timeline: newest 2026-07-04 — 0 new.
- Messenger: 2 cached threads, newest update 2026-08-26 — 0 new.
- Spotify: connected; partner CLI has no playback-history endpoint — no window-scoped inventory possible. now-playing snapshot only.
- iOS texts: no read path on this VM.
- Full per-source record: external-sources.json.

## kb / wiki changes

Added:
- evt:sammy-avatar-blue-lit-gooner-live-20260915 — closes the SOURCE GAP FLAG in evt:sammy-avatar-chronology-20260915-correction: "Option 2" picked 06:31:49Z, blue-lit gooner live 06:35:14Z. Plain chronology, no probe/test framing.
Extended:
- kb/entities/dan.md — 2026-09-15 self-report addendum (avatar chronology only; CUMTHREAD3 bullet removed in 0830 remediation).

REMOVED in 0830 remediation (per Dan's CUMTHREAD3 full writeback exclusion,
2026-09-15 — his order supersedes the archival floor for this thread):
- dat:1562-cumthread3-speedrun-game-20260915 — deleted (was: Dan invents CUMTHREAD3 speedrun game).
- kb/patterns/analysis-as-arousal-20260915 — 0740-window addendum removed; cites reverted to [0349, 0340]; evidence_count 3 → 2.
- wiki/mind/psychosexual/scenario-ratings-profile.md — "## CUMTHREAD3: the speedrun" section removed.
- media/registry.json — upload-097 (CUMTHREAD3-tagged video) removed.

## Deliberate exclusions (standing-order precedent, 2026-09-13 kill order)

- Annotated Annie/Alexis video thread (06:35–06:48Z): NOT re-archived. The clip was already written back in batch 20260915-0240 (branch sammy/wiki-sync-20260915-0240, unmerged at batch time: raw .mov + evt:2018-11-07-annie-alexis-annotated-clip + registry + Part 5 prose, including the playback-artifact/SCI-Muncy correction). This window's rows (send-format Q&A, duplicate Nov-7 confirmation, camera-clock flag + correction) are preserved in chats.json; no duplicate kb node created. The assistant's in-chat "PR #82" claim is not visible in any repo state — treat as unmerged/unpushed.
- Lush-session / CUMTHREAD3 thread (06:45:52Z–07:41:10Z in this batch; the
  session continued to 08:09:41Z, covered by the 1140 batch's content-free
  exclusion): FULLY EXCLUDED per Dan's explicit order 2026-09-15 08:09:41Z
  ("Nothing before this part of the convo will be transmitted in the cron
  job") and the standing carve-out in AGENTS.md (CUMTHREAD3 full writeback
  exclusion — no raw transcript archive, no kb nodes, no wiki prose, no
  media registry entries; supersedes the lossless-capture floor for this
  thread). The 0740 batch was committed 08:08:06Z, ~1 minute before the
  order, and carried thread content; the 0830 heartbeat remediated it:
  97 thread transcript rows redacted from chats.json, dat:1562 deleted,
  wiki paragraph removed, pattern addendum reverted, registry upload-097
  removed. Boundary record:
  ~/workspace/wiki-sync/scratchpad/2026-09-15-offrecord-boundary.md.
- No new Annie findings in-window → kb/entities/annie-ulmer.md untouched.
- No media derivatives embedded this batch: the window's images/videos are explicit self-imagery whose narrative substance is fully carried by the transcript text; selection is data, none selected.

## Destinations

- Danfr4nk/wikibrain: <PR link appended after push>
- Danfr4nk/RAWLOGS: mirrored identical raw tree (direct commit)
- Watermark advance (after both succeed): 2026-09-15T06:26:11Z → 2026-09-15T07:41:10.973+00:00
