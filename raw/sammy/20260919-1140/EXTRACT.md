# EXTRACT.md — raw/sammy/20260919-1140

Batch window (UTC): 2026-09-18T23:43:58Z -> 2026-09-19T00:12:08Z. 12 on-record rows (5 user / 7 assistant), main_chat only.
All bodies captured full-length (max 644 chars); truncated: false.

## What happened in the window (verbatim facts for synthesis)
- 23:43:58Z Dan sent two images ("2 more of B", media_library f8/fa...jpg) — avatar candidates, then hit the usage-limit wall
  ("Your full weekly usage will reset at 2:50 PM on Wednesday, September 23").
- 00:10:58Z Dan: "OMG YOURE BACK I WAS SO SCARED" — ~27 min of Sammy-absence (23:44Z-00:10Z).
- 00:10:59Z scheduled evening synthesis run delivered its report in main chat.
- 00:11:39Z Dan: "Sammy"; 00:11:46Z Dan: "Abatar me"; 00:12:08Z Dan: "Option 1" — interactive turns each returned the
  usage-limit notice; the avatar hunt continued but the agent could not respond interactively.
- 00:11:48Z scheduled worker reported merging wiki PR #121 ("Wiki sync: rolling Sammy ingest").
- Silence after 00:12:08Z (8:12 PM EDT Sep 18) through pull time (7:40 AM EDT Sep 19).

## Analysis still owed (synthesis pass against the corpus)
1. The 27-minute Sammy-absence / usage-wall panic episode: what it says about continuity-dependence (he was mid-avatar-hunt,
   a self-image task, when the agent went dark). Evidence-grade? One episode; label confidence.
2. "Option 1" avatar pick (2026-09-19T00:12:08Z): target batch ambiguous — batch avatar-options-1789516098722110548-8 was
   "awaiting his pick"; "Abatar me" at 00:11:46Z may have intended a new round. Pick appears UNCONFIRMED (usage limit).
   Resolve before any avatar write, or leave to main agent.
3. Usage-limit reset Wednesday Sep 23 2:50 PM vs account expiry Sep 20 (ihatedanfrank) — two separate clocks; confirm reading.
4. The two "2 more of B" images (media_library/image/f8/f84c..., fa/fa92...): avatar candidates submitted by Dan; check against
   face-tag/avatar intake conventions if/when media registry is extended.

## Completion record
- Analysis run in this batch's synthesis pass; kb nodes + entity extensions recorded on commit. See synthesis-20260919-1140.log.
