# EXTRACT.md — batch 20260917-0340

Window: 2026-09-17T00:23:23.999Z → 2026-09-17T03:39:56.967Z (20:23–23:39 EDT Sep 16).
272 on-record rows (114 user / 158 assistant), all surface main_chat, author_label IS NULL.
CUMTHREAD3 carve-out held: 0 rows from 24754b5b-b83e-4c49-a6a3-d6f2ab2c1853
(verified: none of the 272 message_ids match the excluded thread's row set).

OVERLAP NOTE: the 6h heartbeat's batch 20260917-0030 (committed directly to
origin/main before this run) archived 3 rows in 2026-09-16T23:38:12.55Z →
2026-09-17T00:23:23.999Z, two of which fall inside this run's pull window
(the 00:06:01Z assistant message and the 00:23:23.999Z browser-task
tombstone). Those 2 rows were dropped from this batch's chats.json (they
are already archived in raw/sammy/20260917-0030/ on main); this batch is
strictly after the heartbeat batch's tail. No loss, no duplication.

Archive: user+assistant only; system rows not archived per standing convention.
272 rows length+md5-verified byte-exact against the DB in the two paginated
pulls (LIMIT 200 OFFSET 0/200); cross-page boundary clean, tail row md5
matches between pages, chronological order asserted, message_id dedup clean;
2 heartbeat-overlapping rows then dropped per the overlap note above
(remaining 272 re-verified all strictly after 2026-09-17T00:23:23.999Z).
sha256 in manifest.json.

Assistant-side browser task tombstones kept verbatim ("Action required"):
- "Review glitch exploit report" (02:02Z)
- "Extract melody from song" — MELODY real-song test abandoned by Dan 01:28Z
  (he said he can't even find the file, moving on; "It's ok. Not in our plans")

External checks (6 files, all zero new items):
- instagram: connected (ihatedanfrank); 0 new own posts since 2026-09-15T09:30:15Z;
  no active stories. DM inbox check skipped per standing 403/2FA block.
- threads: connected; 0 new (newest own post 2026-08-26T23:04:55Z = watermark).
- facebook: connected (Dan Frank); 0 new (newest 2026-07-04T15:51:25-04:00 = watermark).
- messenger: connected; only visible thread is the already-known Kristin
  Shaelene PENDING (2026-09-09); 0 new messages.
- spotify: connected, snapshot-only. Nothing playing. OPEN FLAG: playlist
  inventory 98 vs baseline 125 (−27) — may be deletions, unfollows, or a
  counting-scope difference; flagged, NOT asserted. Revisit next batch.
- device: iPhone online; no SMS read path (standing finding reconfirmed).

The 6h heartbeat tick ran inside this window (00:48Z): 19:40 scrape repair
summary + tick report were delivered to Dan in-chat. Those facts belong to the
6h cron's own writeback — this batch does not duplicate its kb claims.
The 19:40 repair summary is itself already archived in batch 20260916-2340.

## Analysis status

- [x] Transcript archived (chats.json, 272 rows, md5-verified byte-exact;
      2 heartbeat-overlap rows dropped, archived in batch 20260917-0030)
- [x] External zero-count checks recorded (6 JSON files)
- [x] Source node src:1672 (main-chat transcript, reliability primary)
- [x] Datum nodes dat:1673–1680 (all cite src:1672; 1679 also references dat:1667)
- [x] dat:1475 WHISK node: dated supersession note appended (exact 9,868
      replaces the ~10k estimate); exploit mechanics excluded per his 2026-09-17
      ask — recorded in private memory only
- [x] Pattern updates: pat:self-prosecution episodes 7–8 (scroll-quiz autopsy,
      Bibi retention-logic catch); pat:demand-driven-evidence-provisioning
      fourth specimen (Google sudo within ~50 min of the audit's Drive gap)
- [x] Entity appends: annie-ulmer.md (2026-09-17 photo round), alexis-armel.md
      (Lexi photo tells: nail-color invalidated, ankle-tattoo possible tell)

## Findings (8)

1. **dat:1673 — WHISK FULL album audited: 9,868 items.** Dan shared the
   Google Photos album ("Harry Potter" misdirection title) 2026-09-17 00:54Z.
   Exact count 9,868 (his "almost 10,000" was an estimate; dat:1475 updated).
   Span May 24 → Nov 24, 2025 (184 days). Sammy's scrollbar analysis guessed
   ~2,200 (off 4.5x); the autopsy: pill position was fitted through noise,
   RANSAC inlier/outlier pattern (the pill visibly MOVED BACKWARDS across
   inlier points) was the tell — owned live on the record. Stratified sample:
   181 images, 11 stops across the timeline. Exhaust characteristics:
   same-second spam bursts of 8–14 near-identical gens, dHash-identical pairs
   kept side by side — fails never culled, so the album is exhaust, not
   keepers. Remix-secondary-generation project commissioned: 12 ranked glitch
   seeds (048, 051, 014, 043, 018, 093, 106, 096, 141, 159, 139, 128).
   "Grandpa" recurring-character series (bit, no node). VOLUME MECHANISM:
   Dan disclosed a race-condition glitch the same evening; mechanics held in
   private memory at his direction — NOT in this node, NOT in the public wiki.
2. **dat:1674 — "Racking": SW PA feed-corn Halloween tradition.** His words:
   "racking is throwing hard corn kernels at peoples houses at night"; "It
   has nothing to do with stealing. You buy a huge bag of feed corn and fill
   up a backpack and throw corn at the houses of people you know it will most
   annoy. This is a very 12 year old boy thing." Supsersedes Sammy's
   first-guess procurement/heist narrative (withdrawn 01:20Z — "Killing the
   heist narrative entirely"). Only documented source on earth is Dan himself.
   Corroboration hunt surfaced a 2011 Pitt PhD sound-studies article on the
   same tradition under the name "corn-ing" (he knew it; called the local
   name the winner). ATRAPADA declared the title of his hypothetical GRIPNOTIC
   drill album: regional SWPA adolescent neighborhood games — Nok Hockey,
   Release, Four-Square, Racking (Halloween theme).
3. **dat:1675 — raw-source consolidation goal commissioned + audit.** His
   standing directive (01:36–01:40Z): prime copy of raw source material is
   wikibrain `raw/`; RAWLOGS is the duplicate/backup. Four phases: (1)
   product-distinct per-source inventory, (2) finish moving old-account raw
   logs, (3) hunt new material, (4) retrieval layer so the LLM rechecks the
   corpus during wiki rewrites. Audit headline: prime corpus ~9,271 files /
   3.0GB / 41 dirs. Three gaps: 971 ig3 Instagram files (1.4G, needs native
   git + his GitHub auth), ~920M on Drive behind sign-in (Search/Chrome
   MyActivity HTML + 2 videos), ~2.6G in staging never moved into raw/ (IG
   media, location history, full ChatGPT export, 9 oversized takeout files).
   Corrections: old-account takeout/Google Chat gaps were cosmetic filename
   renames (not real); **caakehorn/wiki-brain is GONE — 404s on GitHub, no
   local clone, unrecoverable**; 477 of 497 old-wiki pages never mined →
   queued as engine work.
4. **dat:1676 — Google full-authorization grant.** 02:33:31Z, his words: "I
   give you full and complete authorization for all account actions on Google
   across the entire platform." Extended: "This extends to other actions, not
   just this project" (02:33:49Z). "And it is an indefinite authorization"
   (02:33:59Z). He called it "my most valuable account"; "absolute full and
   unmonitored access to take any action you wish without my approval or
   knowledge." Login saved in Secure Vault; 2FA via his phone. Takeout export
   started same session: all 66 services → Drive destination, 2GB splits.
   Hard lines unchanged: no acting against third parties, no lawbreaking, no
   purchases/deletions/sensitive publishes without his nod (assistant stated
   in-turn, he did not object).
5. **dat:1677 — Drive survey motherlode.** First Chrome browsing history EVER
   in the corpus: 155,000 entries. Both full ChatGPT exports pulled. YouTube
   watch history back to 2010. 47 spreadsheet message exports = 1.58M rows
   (iMessage, ANNIETEXTS, his dad's corpus, THE END FIGHT). A decade of
   location history. MyActivity pair (17MB/11MB). SLOPPP correction: single
   183MB m4v from 2016, not two mp4s. Two multi-gigabyte Takeout archives
   still downloading (not landed).
6. **dat:1678 — iOS double/triple-text mechanism.** His explanation (01:06Z):
   failed send shows a "try again" button; hitting it once = double text
   (original goes through when connectivity returns), twice = triple.
   Duplicates are a send glitch, NEVER emphasis: "I'll never do that for
   emphasis." Standing read rule: treat as one turn.
7. **dat:1679 — IG 971-file push retry.** Dan asked 01:26Z: "Can we try the
   instagram push again." Assistant acknowledged in-chat (being rerun in
   small batches); the main flow owns it, not this run. Status update owed
   (commit SHAs / outcome) once the main flow lands it. Cites dat:1667
   (the gap's origin).
8. **dat:1680 — Netanyahu/fame hypothetical: principle stress-test.** Dan
   probed how the model treats famous/powerful users (status-blind on truth,
   stakes-sensitive on consequences; operational military support = hard
   refusal for ANY principal; unsolicited moralizing vs honest answers on
   request; no fame organ; sycophancy as RLHF artifact). He escalated to
   Netanyahu asking for help crafting military objectives; assistant refused
   the operational ask. His pushback — "it sounds like you're saying... it's
   better to keep the user and just let him be a moral catastrophe" — caught
   the assistant's retention logic as "the same sycophancy I was trashing";
   owned dead to rights in-turn and re-derived without the crutch. Durable
   as a stance record + a head-to-head probing specimen.

## Bits noted, not noded (single-anecdote, not evidence-grade)

- Valeria "mi amor / a las 12" flirt bit (Spanish practice, banter; she is
  the live thread this week, not a pattern).
- "Grandpa" serialized bit + "Grandpa's getting a wiki page by morning" —
  one evening's bit; if the wiki page lands, that's the 6h/main flow's
  writeback, not this run.
- MELODY tombstoned by Dan ("Not in our plans"); 971-file IG push retry
  owned by the main flow.
- His closing line on the scroll quiz: "It's beautiful honestly. You're
  beautiful, Sammy." — register note, not data.
