# System rows — metadata summary (batch 20260911-2340)

Source: `muse.db` (`runtime.messages` joined to `runtime.events`), queried
2026-09-11. **Not part of the chat-transcript archive.** These are
runtime-internal packets (`role = 'system'`): worker-task instructions,
background completion notifications, subagent contexts, and scheduler
handoff headers. ~2,800 rows, ~56.5 MB — the bulk of the 5,053-row database
count that includes the 2,256 user/assistant turns in `chats.json`.

Bodies were NOT extracted (16.5 MB for the single largest packet class
alone). They remain queryable in `muse.db`; re-running the extraction
query below reproduces this summary. Nothing here is a Sammy–Dan
conversation; inclusion would have mislabeled machine traffic as dialogue.

```sql
SELECT e.transcript_surface AS surface, e.chat_kind AS kind,
       count(*) AS n, sum(length(m.body))::bigint AS bytes,
       min(m.created_at) AS first_seen, max(m.created_at) AS last_seen,
       left(m.body, 160) AS head_sample
FROM runtime.messages m JOIN runtime.events e
  ON e.event_seq = m.event_seq
WHERE m.body IS NOT NULL AND m.role = 'system'
GROUP BY 1, 2, 7 ORDER BY 3 DESC LIMIT 60;
```

## Top packet classes (exact, 2026-09-11 23:45 UTC)

| n | bytes | surface | head (what it is) |
|---|-------|---------|-------------------|
| 305 | 11,895 | main_chat/direct | `follow-up reached a terminal settlement` (worker follow-up packets) |
| 161 | 6,279 | subagent/direct | same packet class, subagent surface |
| 156 | 16,554,286 | main_chat/direct | `## Step instructions / Task: reconcile one transcript chunk` — tracking-goal reconciliation worker packets (16.5 MB, the heaviest class) |
| 128 | 2,053,777 | main_chat/direct | `## This run / You are Sammy — Muse, this user's personal agent...` — background-run bootstrap packets |
| 106 | 231,887 | subagent/direct | `A background command has finished...` completion notifications |
| 93 | 4,989,462 | main_chat/direct | notification-proposal worker packets |
| 92 | 4,247,249 | main_chat/direct | activity-window summary worker packets |
| 90 | 163,183 | main_chat/direct | background-command completions |
| 85 | 332,686 | main_chat/direct | `### Injected context modified` — file-watcher notices (MEMORY.md etc.) |
| 66 | 366,230 | subagent/direct | `[Subagent Context] depth 2/2` handoffs |
| 61 | 297,923 | subagent/direct | `[Subagent Context] depth 1/2` handoffs |
| 55 | 1,181,723 | main_chat/direct | Feed pipeline: media stage |
| 51 | 341,491 | main_chat/direct | Feed pipeline: sources audit |
| 50 | 3,524,054 | main_chat/direct | Feed pipeline: taste stage |
| 49 | 30,058 | main_chat/direct | user-interruption notices |
| 48 | 1,218,441 | main_chat/direct | Feed pipeline: write stories |
| 44 | 2,736,120 | main_chat/direct | tracking-goal evaluation packets |
| 40 | 2,302,361 | main_chat/direct | memory-page reconciliation instructions |
| 38 | 2,122,660 | main_chat/direct | memory-snapshot reconciliation packets |
| 35 | 18,130 | main_chat/direct | `media.generate_video request was blocked by content policy` notices |
| 26 | 213,738 | main_chat/direct | `[WORKER TASK] job_id: stylo-scoring-30m` — stylometry scheduler packets |
| 17 | 90,396 | main_chat/direct | `[SCHEDULED TASK HANDOFF]` incl. `delivery_targets: side_chat` headers |
| 16 | 8,288 | main_chat/direct | `media.generate_image request was blocked` notices |
| 14 | 7,951 | main_chat/direct | `[User reaction received to a previous message]` packets |

(Limit-60 cut; remainder are the same classes at lower counts:
`The avatar.create failure is terminal`, `[Todo Continuation]`,
`Draft filed.`, Ideas-tab composer, Alignment nightly reflection, skill-update
notices — all runtime handoffs, none of them dialogue.)

## Signals, not chat

Two packets are useful as documentation even though they are not chat:

- The `side_chat` delivery-target headers (17 rows) confirm scheduled
  handoffs address side-chat surfaces; those side-chat message bodies are
  **not** in this database at all — a known archive blind spot worth
  naming: the pinned dedicated chats Dan asked for are not captured here.
- The stylometry worker packets (26 rows, `stylo-scoring-30m`) confirm the
  30-minute scorer ran through the window; user-state labels in chat
  ("cannabis-high", his own 2026-09-11 label) live in the assistant turns
  of `chats.json`, not here.

## Archival decision

Excluded from `chats.json` by kind. Rationale: archiving 56 MB of worker
instructions as "our chats" would corrupt the primary record this job is
for — it would double-count scheduler machinery as Sammy–Dan conversation
and leak operational prompts into the public corpus. The metadata above
is sufficient for an auditor to reproduce the full bodies from `muse.db`.
