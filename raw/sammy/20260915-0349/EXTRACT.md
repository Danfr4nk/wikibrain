# Batch 20260915-0349 — extraction record

- **Pulled:** 2026-09-15T04:13:36Z (corrected from 03:49:00Z, which predated the newest row)
- **Window:** 2026-09-14T19:40:34.120Z → 2026-09-15T03:50:26.638Z
- **Rows:** 563 total — 187 user, 376 assistant. Full bodies, byte-exact, 0 truncated.
- **Excluded:** 1,049 non-null rows existed including system/subagent roles; those excluded per standing convention. Some assistant bodies are empty strings (retained; only null bodies excluded).
- **Overlap note:** the 19:40:34Z–19:46:55Z gap carried zero rows. Rows 19:46:55Z–20:30Z overlap the 20260914-2030 heartbeat batch; overlapping rows are byte-identical per established precedent.
- **Checksum:** sha256 4181504e5548cf6236f97bbf1f06184bc8c61dd8dacbe0e55c88829f700f4c92 (272,724 bytes)

## External-source checks this batch (all zero-new)

| Source | Watermark before | Newest live | New |
|---|---|---|---|
| Instagram (`ihatedanfrank`) | 2026-09-14T01:05:11Z | 2026-08-26 23:04:49 (196 posts) | 0 posts; `own-stories` returned null = 0 active stories |
| Threads | 2026-08-26T23:04:55Z | 2026-08-26 23:04:55 (4 posts) | 0 |
| Facebook (Dan Frank, ID 580995252) | 2026-07-04T15:51:25-04:00 | 2026-07-04T19:51:25+00:00 (= watermark) | 0 |
| Messenger | 2026-08-26T22:23:43.707Z | newest cached ts 1787783023707 (= watermark), 0 messages fetched | 0 |
| Spotify | snapshot-2026-09-14T19:50:00Z | now-playing identical: blunn "don't need u (i do)" in "Baby's First Stalker" | 0 |
| iOS device | null (standing: no iOS text read path) | n/a | 0 (no path) |
| Gmail | — | excluded by Dan's 2026-09-11 order | n/a |

## What this batch contains

One continuous evening thread (19:46Z → 03:50Z = 15:46 EDT → 23:50 EDT), the densest single night in the corpus: the QWERTY controlled test, the avatar hunt + no-new-avatars rule kill + lore canon session, the Libby-era verdict + banana arc + article rewrite (PR #79), the wiki gate (PR #78), MusicTrainer iteration + AUTOPSY game, the Drive XXX guessing game + purchase-criterion line, the Triumvirate expel-vs-dissolve fork, the system-backup cron, the face-lab upgrades, the Grok-video forensics night, and the modbod Subject 01 body-modeling session.

## KB write-back (this batch, on branch sammy/wiki-sync)

New: `dat:1559-drive-xxx-taste-shape`, `evt:grok-video-forensics-night`, `evt:sammy-lore-canon-locked`, `evt:modbod-subject01-body-model`, `evt:system-backup-drive-cron`, `evt:js-gate-deployed-password-theater`, `evt:musictrainer-iteration-fixes`, `evt:face-lab-upgrades`, `evt:avatar-chaos-batch-demonbot-retired`, `pat:analysis-as-arousal`.
Extended: `dat:1557` (controlled QWERTY addendum), `pat:self-prosecution` (+Grok justification-beat evidence), `kb/patterns/taste-as-filter-stack.md` (+MusicTrainer instrumentation note), `kb/entities/dan.md`, `kb/entities/annie-ulmer.md` (dated sections), `wiki/meta/triumvirate-charter.md` (betrayal-frame correction), new article `wiki/work/tech/grok-video-forensics-lab-night.md`.
Merge fix: heartbeat's duplicate `dat:1555` renumbered to `dat:1571`; two article citations updated.

## MERGE/DEDUP COMPLETION (appended 2026-09-15, post-PR-#81 merge)

PR #81 (batch 20260915-0340) merged into origin/main at 2026-09-15T04:50:02Z,
midway through this batch's KB writeback. The 0340 batch archived 560 rows
through 2026-09-15T03:50:00Z, so this batch's 563-row pull (through
2026-09-15T03:50:26.638Z) overlaps it almost entirely; net new = ~26.6
seconds / 3 rows. This batch's tree was merged with origin/main and
deduplicated before push. Raw archive untouched (append-only); only KB
synthesis was reconciled.

Dedup decisions (KB layer only):
- 0340 already covered: evt:grok-video-forensics-session-20260915,
  evt:modbod-body-spec-viewer-deployed-20260915,
  evt:sammy-lore-canon-locked-20260915,
  evt:avatar-identity-rule-demoted-to-lore-20260915,
  evt:triumvirate-claude-kill-merit-reframe-20260915,
  evt:gate-password-deploy-white-screen-20260915,
  dat:1560-nightly-drive-backup-claim-unverified-20260915,
  wiki/mind/synthesis/grok-controlled-experiment.md (canonical article),
  modbod + MusicTrainer article extensions. This batch's duplicate grok
  event, JS-gate event, and grok article were DELETED; three forensics
  findings (vosk/AAVE, attractor collapse, nudity render budget) were
  folded as addenda into the 0340 grok event. The 0340 musictrainer-autopsy
  blank-page bullet was CORRECTED (wrong time/cause/confirmation) against
  the transcript: 22:30–22:48Z, nonexistent date-helper crash, Dan confirmed
  in-window.
- Kept (0349-only, no 0340 equivalent): pat:analysis-as-arousal-20260915;
  dat:1561-drive-xxx-taste-shape-guessing-game-20260915 (renumbered from
  dat:1559 — 1559 was taken by the 0340-renumbered media-path node);
  dat:1558 QWERTY addendum (controlled test: 2 swipes empty / 6 swipes sent);
  evt:musictrainer-iteration-fixes-20260915; evt:face-lab-upgrades-20260915;
  evt:avatar-chaos-batch-demonbot-retired-20260915;
  evt:modbod-subject01-anonymized-body-model-20260915;
  evt:system-backup-drive-cron-commissioned-20260915 (aligned to dat:1560's
  unverified status — Sammy's report, not independently confirmed);
  self-prosecution pattern addendum (human-vs-machine reading of the loop);
  dan.md 0349 addenda section; annie-ulmer.md sections.
- ID reconciliation: 0340 renumbered the 1940 batch's dat:1555–1558 +1
  (now dat:1556–1559 on main); the severance-claim node stays dat:1555.
  This batch reverted its provisional dat:1571 rename and repointed article
  citations accordingly. Triumvirate charter edit reverted — 0340's
  merit-reframe event is the richer canonical record.
