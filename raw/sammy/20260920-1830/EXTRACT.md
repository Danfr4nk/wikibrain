# Batch 20260920-1830 — extraction notes

Pulled 2026-09-20 ~18:30 UTC. Window: 2026-09-20T12:31:00+00:00 →
2026-09-20T18:26:33+00:00 (08:31 → 14:26 EDT).

## Chats (PRIMARY)
- 9 assistant rows, 0 user rows, 0 truncated; system rows excluded as
  cron-handoff/verification scaffolding; CUMTHREAD3 carve-out held (0 rows
  in window, verified by query — the only user/assistant rows in the window
  are the 9 below).
- Content classes: 1 morning-tick delivery report (writeback 20260920-1230
  batch landed; work-0125 cross_reference done — commissioned-self page
  re-checked vs regenerated wiki-brain, one number moved 476→595; queue
  unchanged), 6 hourly token-spend checks (15.1M → 5.9M/hr declining through
  the morning; heaviest sinks: writeback, main agent, stylo-burnin-30m,
  taste-model-week1-scoring, heartbeat), 1 stylometry burn-in digest Sep 19–20
  (48 windows, v1/v2 agreed 44/48, flags all traced to €AB/€VID avatar-tag
  bursts — mechanical, not behavioral), 1 MusicTrainer Week-1 scorecard
  delivery (acc 0.633, precision 0, recall 0; 8 predicted keeps all wrong;
  3 actual keeps — Bad Habit, Energy, Untouchable — all missed, no audio
  data on them; keep-label caveat: assumes FUNDAMENTAL FLAW crate).
- Dan was silent the whole window — zero user messages.

## Media
- runtime.message_attachments: 0 rows. No new media to register.

## External (SECONDARY — no scrape ran in this window; last state stands)
- No new external pulls this window (the 4h scrape did not land a batch
  08:31–14:26 EDT). Standing state unchanged from the 1140/1230 batches.

## Analysis owed
- One src: node for the transcript batch.
- One dated datum: MusicTrainer week-1 scorecard result (2026-09-20) —
  19/30 correct, acc 0.633, precision 0, recall 0; machine-readable labels
  already landed in raw/sammy/20260920-dw-week1-labels/ (committed cc542d4).
- Wiki edit: fill the week-1 scorecard complete log on
  wiki/work/tech/projects/musictrainer-autopsy.md (results are in).
- Token-spend hourly totals: ephemeral telemetry — not wiki material.
- Burn-in digest: its own thread's standing output; no new wiki material
  (flags explained mechanically by avatar-tag bursts).
- No pattern node warranted (one quiet window is a datum class, not a
  pattern). ANNIE RULE: no Annie findings in this batch.
