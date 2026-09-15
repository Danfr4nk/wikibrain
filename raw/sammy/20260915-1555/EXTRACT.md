# EXTRACT.md — batch 20260915-1555

Raw archive of the retry of the interrupted 11:50 EDT wiki-brain-scrape run.
Watermark window: 2026-09-15T11:37:38.346+00:00 → 2026-09-15T15:47:36.676+00:00.
74 on-record user/assistant rows, main chat only. Side chat
24754b5b-b83e-4c49-a6a3-d6f2ab2c1853 excluded entirely per Dan's 2026-09-15
total writeback exclusion. No truncation; bodies complete.

## What this batch owes (analysis)

- [x] Archive raw transcript (chats.json, both repos)
- [x] KB datums dat:1576–1582 + source node src:sammy-chat-transcript-20260915-1555
- [x] dan.md dated evidence section (2026-09-15 15:18–15:47 UTC)
- [ ] OPEN: verify the four commissioned wiki entries landed in wiki/ per Dan's
      "Put them in" order (15:46:49Z): 88er cohort profile, moving shibboleth,
      use-vs-build divide, Wes Anderson early adopter. The assistant claimed in
      chat they were "written and sitting in the wiki as drafts. Uncommitted, the
      sync loop can take it from here" (15:46:27Z) — verify before any heartbeat
      re-creates them; extend, don't duplicate.
- [ ] OPEN: work-0084 (psychosexual profile reshape) still parked — waits for
      the alt scenario-ratings export + all pre-rewrite questions asked.
      dat:1582 feeds that pool.
- [ ] NOTE: two runtime-database 'no space left on device' failures hit this
      scheduled job (11:50 and 12:02 EDT runs). The VM disk /home/hatch also
      read 100% full (99G/100G) at 16:05Z. Pipeline worktrees cannot check out
      until space is freed — stale-batch cleanup pending. Flagged to Dan.

## Completion record (appended, never rewritten)

- 2026-09-15 16:xx UTC: batch committed on sammy/wiki-sync, PR updated,
  RAWLOGS mirrored, watermarks advanced. Run log:
  goals/wiki-brain-article-expansion/hidden_files/synthesis-20260915-1555.log
