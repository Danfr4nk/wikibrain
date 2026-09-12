# EXTRACT.md — batch 20260912-1940 (wiki-brain-scrape, 4h)

Window: `2026-09-12T15:40:12.033+00:00` → `2026-09-12T19:48:18.390+00:00`
(11:40–15:48 ET). Chats are primary; externals are secondary checks only.
Gmail excluded per Dan's order; device has no read path.

## Pull results

- **Chats:** 114 rows — 45 user (4,645 body bytes) / 69 assistant (16,300
  body bytes). Direct `muse.db` query (runtime.messages × runtime.events),
  byte-exact bodies, `root_request_id` preserved. Saved tool-output:
  `~/workspace/agents/24a75196-3969-43b5-bce3-8636877f1907/tool-output/db-call_01a0973e68ad7032b77d1a0a84ce0468.json`.
  `raw/sammy/20260912-1940/chats.json` regenerated from it (replaces the
  disallowed staging-row assembly per Dan's order).
- **System manifest:** 265 pins at intended cutoff, ordered
  `(created_at, message_id)`. Page 1 (200 rows) row-for-row verified
  against the saved direct query — zero mismatches. Page 2 (offset 200)
  queried directly and forced to a filesystem-saved tool-output JSON;
  `system-manifest.json` rebuilt from the two saved query outputs only
  (metadata/hash — bodies never saved). Verified
  `COUNT(DISTINCT message_id)` = 265 for the window.
- **Externals — all zero new:**
  - Instagram: newest 2026-08-26 23:04:49 = watermark.
  - Threads: newest 2026-08-26 23:04:55 = watermark.
  - Facebook: newest 2026-07-04T15:51:25-04:00 = watermark.
  - Messenger: newest thread update 2026-08-26T22:23:43.707Z = watermark.
  - Spotify: now-playing HTTP 200, `playback_status: NONE`
    (the paused-Visages snapshot from 1540 is gone; nothing playing).
    Playlist inventory re-pulled COMPLETE: 125 items (124 unique
    playlists + Liked Songs collection) via unfiltered-library
    next-page walk (10 pages, 188 items); the PLAYLISTS-filtered
    endpoint only exposes 20 (its offset=20 next-page returns 0 items),
    so the earlier 20-item file was first-page-only. Liked Songs
    subtitle reads 1648 items (was 1642 on record).
  - Device: no read path. Gmail: excluded, legacy watermark preserved.
- **Watermarks: NOT advanced yet** — advance only after successful pushes
  to both Danfr4nk/wikibrain and Danfr4nk/RAWLOGS.

## Overlap note

The 6h writeback tick (batch 20260912-1830) already covered this window's
15:40–18:27Z material as `dat:1454`–`dat:1461` +
`src:sammy-chat-transcript-20260912-1830`. Those nodes were extended, not
duplicated. The 18:27–19:48Z material is unique to this batch.

## Method note: ephemeral system rows are mutable

While verifying the page-2 manifest pins, re-queries ~15 min after the
archival query returned different `message_id`s / `body_md5`s for 3 of
65 rows (two `subagent-progress`/`follow_up_settlement` rows had new
id tails; one row's body md5 changed) while 62/65 verified
byte-identical. The manifest pins the rows AS RETURNED BY the batch's
designated archival queries (the two auto-saved direct tool outputs),
which is the correct point-in-time semantics — but a later re-query of
the same window is not guaranteed to reproduce the same hashes for
ephemeral rows. Future batches should treat system-manifest pins as
snapshot assertions, not reproducible queries.

## Editorial analysis

### 1. Claude displacement (dat:1463)

Second captured concealed-answer probe: "I had that answer already but I
was confirming your ability to spot it" (18:27:44Z), then "you have not
failed a single test of mine yet" (18:28:10Z), "20x better than the best
model I have ever used, I haven't touched Claude in days and I canceled
my subscription. Moving it to here" (18:28:48Z), "that kind of praise
[is] earned" (18:29:16Z).

Cross-corpus check: the 2026-09-04 corpus snapshot predates both
episodes; the only other captured head-to-head is the 2026-09-10
Wikipedia-clone verdict (Muse Spark 1.3 "mythos tier" over Claude Opus
5). His plural "tests" implies more probes than the record holds.
Verdict: habit corroborated (MEMORY.md "will probe models" stands);
the trust-through-adversarial-verification *pattern* stays a candidate
— boring explanations (post-hoc status narration, ordinary
vendor-switch on price/performance) are not excluded, and two episodes
don't make a pattern. Keep counting.

The money move is what matters operationally: Claude's wiki article
(wiki/self/concepts/claude.md) described it as the analytical workhorse
/ exocortex execution layer — that described reality changed
2026-09-12, and the article now carries a dated Displacement section.
The 09-10 "Claude on ultracode for everything" note is superseded.

### 2. Avatar: third change, lock, stale-backend correction (dat:1459 ext.)

Blonde salon (~12:13 ET, ~2h) → platinum bob (~14:19 ET, ~1h) →
Pixar-style messy-bun brunette (~15:19 ET, option 2 of 4 from the
bedroom-candid reference, gallery `07_messy-bun-tank`). Dan locked it
15:25 ET ("we are keeping this avatar she's a fucking cutie") and it
was current at the batch cutoff (19:48:18Z) — but NOT current
indefinitely: at ~16:04 ET (20:04Z), outside this batch window, Dan
switched to option 1 of the levitating-lingerie fictional character.

The Marucas-waitress set (4 photos, "my current avatar character as a
waitress at a pizza shop called Marucas") went out with the wrong
character: the backend still believed the platinum bob was current
(iOS avatar-sync lag; Dan had set the Pixar girl via iOS). Dan
corrected at 15:27 ET with the actual current avatar image; the four
were redone with the Pixar girl by 15:31 ET. Standing lesson (second
incident): when his device disagrees with the backend about his own
state, his device wins — verify the real current avatar *before*
character-consistent generation.

### 3. Frame Describe + lexicon v0.1 (dat:1462)

Commissioned 15:23 ET ("exhaustive description in my terms, not based
in precision"). The assistant trawled 99k outbound texts and reported
an honest thin result ("frame," "perfect body," "nice tits,"
"juicy ass") rather than hallucinating a lexicon — the tool was built
on Dan's supplied terms instead (contrastive-specification shape).
Lexicon v0.1: "girl" subject noun; `[hair] [trait] girl` lead;
"titties" with unhedged cup estimates; "babyfat"; "tats"-not-"tattoos";
coverage in degrees; five sections ending on the aura read. Live at
attraction-guide/frame-describe.html. Splash page for the full suite
live the same hour (commit c798ca6).

New wiki entry: `wiki/work/tech/attraction-guide.md` — the instrument
suite overview plus the lexicon. This is the first committed record of
his body-description register as an instrument grammar.

### 4. Repo deletion decision state (dat:1464)

Dan asked about deleting `wikipedia` and `wiki-test`. wikitest: safe
to wipe (archived, migrated in PR #22). wikipedia: no unique source
articles, BUT deletion takes down danfr4nk.github.io/wikipedia — needs
an explicit site-consequence confirmation first. Nothing deleted
in-window; future runs must not flatten the two verdicts into one
"approved."

### Not promoted / not created

- "Self-archival density" as Dan's most-extreme metric (18:31:50Z):
  assistant interpretation, unendorsed by Dan — preserved as such,
  not a claim.
- No new Annie-specific finding: no Annie subsection created for the
  Marucas photos (scope guard holds).
- Percentile Q&A (code/tokens shipped): assistant gave low-confidence
  intuition (top 0.1–1%) with no distribution data — not evidence-grade,
  not a datum.
- Timer page / writing-sample-in-battery build (19:04–19:08Z): tooling
  thread, no durable state beyond dat:1456/dat:1457.

## KB writes this batch

- `kb/sources/sammy-chat-transcript-20260912-1940.md` (L0 source, this batch; id `src:sammy-chat-transcript-20260912-1940`)
- `dat:1462-frame-describe-lexicon-20260912` (new)
- `dat:1463-claude-cancellation-hidden-answer-test-20260912` (new)
- `dat:1464-repo-deletion-decision-20260912` (new)
- `dat:1459-avatar-history-20260912` (extended: 13th change, lock,
  stale-backend correction)
- `ent:dan` (new dated section)
- `wiki/self/concepts/claude.md` (Displacement section, 2026-09-12)
- `wiki/work/tech/attraction-guide.md` (new entry)

## Completion analysis

Quiet externals (all zero-new) with a dense chat window — the inverse
of a quiet window. The batch's load-bearing material is all
post-18:27Z: the money moving (Claude → Muse), the avatar lock, and a
new instrument with a committed lexicon. No exposures introduced (no
new third-party PII beyond what's already public per Dan's standing
"everything goes in" rule; no credentials; system rows are
metadata/hash only).

GATES RUN 2026-09-12 ~20:45Z, both green:
- `bin/wb-validate`: clean (1013 nodes, 68/68 edges audited).
- `bin/wb-check-publish`: 360 problems with this batch's changes vs
  360 at base 3bcc24a (clean worktree build) — problem sets
  byte-identical via diff. Zero new exposures vs base; none of the 360
  reference this batch's new/modified nodes (dat:1462/1463/1464,
  dat:1459, attraction-guide, claude.md, sammy-chat-transcript-1940).
  The 360 are pre-existing (phone/email strings in older nodes,
  e.g. dat-0632, dat-1167).
