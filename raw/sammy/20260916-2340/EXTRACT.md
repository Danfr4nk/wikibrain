# EXTRACT.md — batch 20260916-2340

Window: 2026-09-16T19:40:28.663Z → 2026-09-16T23:38:12.55Z (15:40–19:38 EDT).
307 on-record rows (67 user / 240 assistant), all surface main_chat.
CUMTHREAD3 carve-out held: 0 rows from 24754b5b-b83e-4c49-a6a3-d6f2ab2c1853
(verified: all 307 rows join to runtime.events with transcript_surface = main_chat).

Archive: user+assistant only; 663 new rows in window, 356 system rows not
archived per standing convention. Bodies md5+length-verified byte-exact
against the DB for all 307 rows (b1==b2 double-pull cross-check on the
107-row tail page); sha256 in manifest.json. "Fix hook2 tool" / "Update
piano roll layout" browser tasks tombstoned 23:28Z / 23:38Z (bodies
"Action required" only, kept verbatim).

External checks (files rolled into external.json):
- instagram: connected (ihatedanfrank); 0 new feed items. DM inbox read
  BLOCKED (HTTP 403: Facebook 2FA disabled gates all Meta-account reads —
  same blocker as the in-chat attempt to read Valeria's reply at 21:33Z).
- threads: connected; 0 new (own post newest 2026-08-26 = watermark).
- facebook: connected (Dan Frank 580995252); 0 new (timeline newest 2026-07-04).
- messenger: connected; sync threads completed fresh; 0 new messages; only
  thread is Kristin Shaelene PENDING (2026-09-09), already known.
- spotify: connected; snapshot only — playback NONE, devices: Dan's MacBook
  Pro inactive. No new material attributable to the window.
- device: paired iOS; no SMS/text read path (standing finding, reconfirmed).

## Analysis status

- [x] Transcript archived (chats.json, full bodies, md5-verified byte-exact
      against the DB for all 307 rows; sha256 in manifest.json)
- [x] External zero-count checks recorded (external.json)
- [x] Source node src:1660 (main-chat transcript, reliability primary)
- [x] Datum nodes dat:1661–1668 (all cite src:1660)
- [x] Wiki prose: article rewrite (Valeria), complete-log doctrine article,
      article-minimums gate, share-mode, MELODY, workbench overlay — all
      shipped in main flow tonight (PRs #104, #106); no further wiki changes
      warranted by this batch

## Findings (8)

1. **Article minimums directive** (dat:1661). Dan ordered minimum
   requirements for wiki articles baked into the assistant's instructions
   and the wiki's frontloaded markdown: length first — no article under a
   15-minute read (3,000 words, earned through totality analysis and
   evidence, never padding). First measure 400 of 509, corrected to
   authoritative 397 of 507 — the expansion backlog, not gated. Gate
   (bin/wiki-minimums, PR #104) blocks only NEW short articles.
2. **MELODY melody-to-piano-roll tool** (dat:1662). Commissioned 22:10Z:
   feed it a full finished song, it pulls the lead melody out of the mix
   onto a piano roll. v1 live at danfr4nk.github.io/tools/music/melody/,
   verified 12/12 on synthetic mixes; playhead-follow crash fixed. Honest
   gap: automation can't drive the native file picker → drop zone is now a
   native input (better on iPhone). Dan owes a real-song test: "tell me
   where it grabs the wrong line — that's the data v2 needs."
3. **wb-share shipped as PR #106** (dat:1663). Share mode: bin/wb-share
   duplicates an article to wiki/share/<slug>.md (original untouched), gate
   skips site/wiki/share/, outbound links flatten to bold, cliff notes
   auto-draft from linked entries' ledes into an appendix. First copy:
   Valeria's article (nine cliff notes: Alexis, Annie, Tom, Au Za'atar,
   Tarik, DJ, Felipe, Milo), live at
   danfr4nk.github.io/wikibrain/wiki/share/valeria-iglesias-cid.html.
4. **hook2piano web tool + Pages underscore gotcha** (dat:1664). Dan: "It
   didn't load anything from hooktheory." Root cause found during live
   verification: GitHub Pages silently drops files starting with an
   underscore — the Python engine __init__.py never deployed. Fixed.
   Shipped: two piano rolls (blue melody/RH, green chords/LH), note names
   above/below each, chord symbols, ~1MB notation lib deleted, zero-dep
   in-browser MIDI playback with red playhead.
5. **Valeria replied same evening** (dat:1665). The 14-month re-contact
   (face of Sammy, tattoo line) got a same-evening reply — Dan spotted the
   IG DM at 21:33Z ("I can't bear to look"); the assistant's read attempt
   was blocked by the Facebook-2FA gate, Dan confirmed the reply himself.
   Her message content was never seen by the agent — fact of reply only.
   Thread live again; share article sent to her.
6. **Age instrument false alarm** (dat:1666). Dan: "says rhe same thing
   every token." Test rig: model varies fine — 29.0 / 24.6 on his two
   example photos, 4 different outputs on 4 test images live. No stuck
   model found; same-age photos explain the repeat. Asked what he ran.
7. **Disk crisis resolved 97% → 35%** (dat:1667). Verification sweep checked
   the four big zips against RAWLOGS before deletion (backfill zip = zipball
   of an ancestor commit; ig3 + takeouts byte-identical to staging). Dan:
   "Just the zips" → "dump whatever you can." 65G free: 31 stale worktrees
   (~50G), 4 zips + 3 orphan dirs (~9G), trash emptied. Kept:
   rawlogs-sweep/staging (9.1G) and browser_downloads. Open gap: 971 ig3
   Instagram files never pushed to RAWLOGS (push died, GitHub 500s).
8. **Workbench facial overlay export** (dat:1668). Dan wanted the lab's
   annotated picture back — guidelines on the actual photo, cropped to the
   face, exports carrying the guidelines. Shipped: annotated face crop
   (mesh, segments, thirds U/M/L%, midline, fifths, iris, IPD/canthal
   tilts); report JSON carries annotated PNG as data URL; "annotated png"
   download button; cache-buster for his phone. Awaiting his phone check.

## Notes / non-nodes

- "Annie sent that to make you jealous" (20:37Z): Dan's claim about the
  Shelbie video's provenance; the assistant asserted the subject's identity
  from tattoos ("I'd know those tattoos anywhere"). Ambiguous banter +
  photo-identity assertion — no kb node, archived verbatim only.
- Music tools consolidation: all four music tools in the tools repo,
  deployed, splash "music" category live (MusicTrainer, AUTOPSY, hook2piano;
  modbod excluded as body study). Operational; in manifest via raw archive.
- Three avatar rounds tonight; Dan picked Option 2 each time ("New me now").
- Self-haircut evaluation: Grade B+ cosmetology-style report + PDF report
  card delivered in main flow. Open loop: MELODY real-song test (his).

## Completion record (attempt 2, same scheduled slot)

- Scheduled slot 20:00:10 EDT 2026-09-16 (run_id 047b0b92-...), attempt 1
  (batch work done 23:46–23:59Z) was interrupted before commit/push;
  attempt 2 (00:00–00:0xZ) resumed its exact artifacts — nothing
  re-pulled, nothing discarded.
- Delta pull 2026-09-16T23:38:12.55Z → 2026-09-17T00:00:58.552Z: 21 rows,
  ALL role=system (maintenance self-improvement baseline runs, one
  stylo-burnin-30m worker task, two wiki-brain-scrape handoffs for this
  very run). 0 user rows, 0 assistant rows. Per standing convention
  (system rows are never archived), nothing appended to chats.json;
  chats.json stands as archived by attempt 1 (307 user/assistant rows,
  md5-verified byte-exact, b1==b2 double-pull cross-check on the
  107-row tail page).
- CUMTHREAD3 carve-out (side chat 24754b5b-b83e-4c49-a6a3-d6f2ab2c1853):
  held — 0 rows in both the archived window and the delta.
- External sources: checked by attempt 1 at 23:58:45Z (10 min before
  push), all zero-new: instagram (connected, ihatedanfrank; own story
  18194479462390875 expired 2026-09-16T16:30:15Z, no new feed posts);
  threads (connected; own post newest 2026-08-26 = watermark); facebook
  (connected, Dan Frank 580995252; timeline newest 2026-07-04);
  messenger (connected; sync fresh, 0 new; only thread Kristin Shaelene
  PENDING 2026-09-09, already known); spotify (connected; playback NONE,
  Dan's MacBook Pro inactive); device (paired iOS; no SMS read path —
  standing). instagram DM inbox read remains BLOCKED (HTTP 403:
  Facebook 2FA-disabled gate) — same blocker as the 21:33Z in-chat
  Valeria-reply attempt.
- kb: src:1660 + dat:1661–1668 (attempt 1's synthesis of the 15:40–19:38
  EDT window: article-minimums directive, MELODY commission, wb-share
  PR #106, hook2piano web + Pages underscore gotcha, Valeria's
  same-evening reply, age-instrument false alarm, disk crisis resolved,
  workbench facial-overlay export). No new kb nodes from the delta —
  no user/assistant material to synthesize.
- Pre-push: worktree merged origin/main (which had moved with #104
  article-minimums, #105 Valeria rewrite, #106/#107 wb-share since the
  worktree was created); no kb id collisions (1660–1668 free on main).
  bin/wb-validate clean post-merge.
