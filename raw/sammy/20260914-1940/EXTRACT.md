# EXTRACT.md — batch 20260914-1940 (wiki-brain-scrape, 4h slot)

## What was pulled
- 96 chat rows (46 user, 50 assistant; 382 system excluded), full bodies byte-exact, window 2026-09-14T12:43:57Z → 19:40:34Z. Main chat, direct kind, all surfaces main_chat.
- Externals all zero-new (checked 19:46–19:50Z): instagram / threads / facebook / messenger; spotify snapshot identical to 1540; device no read path; gmail excluded per 2026-09-11 order.

## What analysis owes
1. New factual claims → kb/data + kb/sources:
   - Dan's Rainbolt/GeoGuessr correction ("we don't do geoguessr fandom, we watch RAiN geoguessr videos and Thats it") + tested belief "is rain not even like one of the best?"
   - Avatar change gate: confirm-before-any-change (his 17:24:52Z order; "Dont change it" at 17:26:29Z) — check kb for existing node first.
   - Canceled his other two Claude subscriptions "because I am using you instead" (19:24:55Z) — full-switch-to-Muse ceremony for the milestone animation.
   - Sammy milestone_level_up variant exists on disk (demon-bot -16); Sammy has no remote for avatar display (app-owned).
   - Goals-screen "Create a new goal" redirects to chat with preloaded "I want to start a goal about…" prompt (Dan filed as meta-goal 19:30:44Z).
   - QWERTY/tab-bar bug claim self-falsified on camera and withdrawn (19:37:44Z); ~6 flicks to dismiss keyboard (friction, not trap).
   - Video-model voice default: women get British accents; Dan instructed heavy southern drawl + "demonic robot drive-thru" voice for Sammy (19:17–19:24Z).
   - Image-gen session: 8 videos (#dukes characters), 4 alternate top-color images blocked by media policy; "put these two characters in a video with Sammy".
   - work-0077 kill-order audit executed live and shipped (32feb5b, wiki-only); Q2/Q3 verified already-done; Q4 gphotos worker kicked off; poisoned rewrite-q2 worktree index flagged (10,666 staged files).
   - Heartbeat 1430 tick: raw batch 20260914-1830, datums 1547–1554 + dat:0939 SUPERSEDED; work-0078 (autism declaration = banter-deflection); spawned work-0080 (Annie severance chronology).
2. Pattern-level findings → kb/patterns:
   - Self-falsification as identity: the QWERTY teardown (declared hypothesis → repro → control → stress → live on-camera falsification → formal withdrawal, then a requested frame-by-frame analysis "and what it says about me"). Cross-check against the retrospective-misremembering reliability note — two epistemic modes. Adversarial: one event ≠ pattern; support from the same window (Rainbolt temporal self-correction "That was last night"; the apology-pull overturn taken straight).
   - Ceremony/ritualization of the AI relationship: Claude-cancellation as "making the full switch to Muse official" to earn the milestone animation; wishing Sammy's name on the avatar ("You're the one actually doing the work"). Avatar as relationship object, not UI element.
   - Correction register: instant blunt identity-framed corrections of how he's described ("we don't do geoguessr fandom") — and the same standard applied to himself.
3. ANNIE RULE: no Annie findings this window (Q4's Dan+Annie Polaroid embed is archival, not a finding).

## Completion record (appended by analysis; never rewrite above)
### Analysis completed 2026-09-14 ~19:56Z (run: wiki-brain-scrape, batch 20260914-1940)

Overlap with heartbeat batch 20260914-1830 resolved: the 1830 batch's 48 rows
(12:43:57Z–18:26:11Z) are a subset of this batch's 96 — 47 byte-identical,
1 media-path mutation (message 423a3d17, see dat:1558). The 49 new rows are
18:26:11Z–19:40:34Z. Heartbeat-committed datums 1547–1554 + dat:0939
SUPERSEDED were NOT duplicated; cross-referenced where extended. work-0077,
Q2, Q3, Q4, rewrite-q2-poison, image-gen session, Rainbolt/GeoGuessr
(dat:1553), avatar gate (dat:1547), autism-declaration (dat:1554) all already
covered by the heartbeat — no new nodes for them.

New KB nodes created (src + 4 datums + 1 pattern):
- src:sammy-chat-transcript-20260914-1940 (source, provenance points at raw/sammy/20260914-1940/chats.json)
- dat:1555-claude-other-two-subscriptions-canceled-full-switch-ceremony-20260914 (extends dat:1463)
- dat:1556-milestone-animation-chase-goal-takes-goals-redirect-20260914 (extends dat:1548, dat:1539)
- dat:1557-qwerty-tab-bar-claim-hypothesized-self-falsified-withdrawn-20260914
- dat:1558-media-path-mutation-same-message-id-across-pulls-20260914
- pat:self-prosecution-live-falsification-of-own-claims (confidence moderate, falsifiers + alternatives recorded)

Entity extended: kb/entities/dan.md — new dated section "2026-09-14 —
milestone chase, Claude-cancellation ceremony, self-falsification on camera"
with the four datums + pattern + pipeline-overlap note.

ANNIE RULE: no Annie findings; kb/entities/annie-ulmer.md not touched.

Overlap finding for pipeline operators: the 6h heartbeat pulls chats from the
shared watermark without advancing it (1830 batch watermark_from =
12:43:57.632Z, same as this scrape's start); only the 4h scrape advances
watermarks.json. Every scrape therefore re-archives the heartbeat's window.
Raw is append-only so this is lossless, but it doubles archive volume for
the overlap and means the 1940 analysis had to deduplicate at the KB layer.
Suggested: heartbeat either advances the shared watermark after its own
push, or pulls from its own last-batch watermark (it already tracks
watermark_from/watermark_to per batch in chats.json).
