# EXTRACT.md — batch 20260912-0740

## Source
Chat messages from `runtime.messages` (Muse system database), pulled via
`muse.db` (`runtime.messages JOIN runtime.events`) for the window after
`2026-09-12T07:01:13.548+00:00` through frozen cutoff
`2026-09-12T07:43:31.816+00:00`.

## Extraction status: COMPLETE

- **89 user/assistant messages** archived with full bodies, covering
  `2026-09-12T07:05:02.048+00:00` through `2026-09-12T07:43:31.816+00:00`
  (41 user, 48 assistant). No user/assistant rows exist between the
  07:01:13.548 watermark and 07:05:02.048; the window's effective start is
  the first message.
- **All 89 bodies recovered byte-exact**, verified per-row against database
  `char_length(body)` and `md5(body)`. Zero mismatches.
- **141 system messages** archived as `system_manifest.json`: per-message
  `message_id`, `created_at`, `body_md5`, `body_len`. System bodies are
  runtime scaffolding (subagent contexts, follow-up settlements, subagent
  monitors, transcript-reconciliation worker specs — the large
  ~130–148KB "reconcile one transcript chunk" step instructions dominate);
  the manifest hash-pins every row so completeness is verifiable without
  storing the scaffolding.
- **Truncated: 0.** No rows marked truncated; no data loss.
- Roles taken from `runtime.messages.role` for all rows.
- Ordered by `created_at ASC, message_id ASC`; message_ids unique; chunk
  boundaries verified continuous (no pagination gaps; boundary rows
  07:27:53.584 and 07:28:17.621 confirmed present, no rows between).
- Completeness cross-checked: `COUNT(*)` for the full window equals the
  archived row counts (89 / 141 / 230 total).

## Critical correction (archival-grade rebuild)
The provisional `chats.json` initially staged for this batch (87 rows,
many bodies/lengths/MD5s reconstructed from paraphrased summary text, 108
body/length mismatches on validation) was **deleted and rebuilt from exact
`muse.db` results** — not patched. Every body in the committed
`chats.json` was transcribed from the database and verified against
`char_length` and `md5`. Transcription hazards handled byte-exact: straight
vs curly apostrophes/quotes (assistant uses straight, Dan's client uses
curly), en/em dashes, the `→` arrows in the formatting report, the `×` in
"Slime × tear", the `….` in "You forgot a big one….", the 🍻 emoji
(body_len 1), image-embed markers, and a `[[hatch_widget:...]]` embed.

## Content notes (for the Editor phase)
- 07:05:42Z: Dan ordered the 2.8 GB RAWLOGS→wikibrain backfill ("Yes,
  backfill it."). 07:05:59Z: assistant promised to report when matched.
  07:06:25Z: assistant promised a systematic gap audit after backfill.
  **No completion of either was established in this run** — both are open
  analysis/engineering debt (see below).
- 07:08:34Z: wiki-wide inline-formatting repair ordered. 07:28:24Z:
  reported merged — 170 files; unbalanced bold 1,893→54, italics
  1,125→210; reusable checker added. (Committed as wikibrain `7fd4d89`.)
- 07:20:04Z: Messenger/IG/TikTok Drive ingest reported: 27,573 messages,
  331 threads, Jan 2007–Aug 2026; Tom 5,734, Valeria 4,879, Lou 1,602,
  Annie 133. **Qualification retained:** Messenger 2022–2026 and Instagram
  after Aug 2025 remain export gaps.
- 07:21:30Z: full Valeria pass/rewrite ordered. 07:22:11Z: iMessages rerun
  ordered. 07:34:34Z: Valeria rewrite reported live, 3,998 words — Aug 2021
  start (TikTok confession to Alexis quoted), Chilean 20/21 (not 19,
  not Mexican), burst pre-departure May 28–June 13 2022, **one** genuine
  iMessage hit in 216,101 rows ("Me encanta valeria," Dec 27 2025),
  basement hug June 9 2022, ILYs June 11/13 ("the color has left my
  world"), Annie named **zero times** in 4,882 records.
  (Committed as wikibrain `a39f4cd`, `dat:1445`.)
- 07:22:46Z: "I forgot about that Lou girl even existed i said WHO?" —
  1,602 messages in 21 days, forgotten. 07:29:11Z: Lou page reported live
  (real first name Sara, Lou from Louisa, Algerian, Aug 31–Sep 20 2023,
  zero iMessage hits). 07:34:40Z: thread color — 308-message Weimar/Daz
  Kapital night one, 707-message Sep 5 marathon (Fortnite, Gio deepfakes,
  cat photos), she out-messaged him 856–746, quit Sep 11 ("I quit today,"
  texting from a bar with Dogan), last message Sep 20 "U alive?" never
  answered. (Committed as wikibrain `f955c57`.)
- 07:39:12Z: Au Za'atar hostess DM census requested. 07:41:29Z: three
  confirmed (Valeria, Lou, Mexican aerospace-engineer hostess — 128
  messages Jun 27–Jul 1 2022, two satellites, NASA/JAXA, deactivated
  account, name unrecoverable; ran *while Valeria was still live*),
  two probables (Cosette, rambo — roles unconfirmed).
  (Committed as wikibrain `d6b6b57`/`6b64339`, `dat:1446`.)
- 07:42:35–07:43:31Z: "You forgot a big one…." / "ANNIE ULMER" / "WELL
  Annie worked at the other location so you're more correct than I was to
  be fair" — Annie as the kept hostess, at the original East Village
  location. (ANNIE RULE: dated clarification appended to
  `kb/entities/annie-ulmer.md`.)
- 07:24:13–07:26:10Z: avatar change to the vanity look ("My avatar is
  updated. Vanity look's live."), with the 23/24/25 age-guess banter.
- Window includes the 07:30 stylo-scoring cron delivery and the 07:40
  wiki-brain-scrape worker task spec (this run).

## Analysis debt (open, not extraction debt)
1. **2.8 GB backfill completion unverified** — ordered 07:05:42Z, promised
   07:05:59Z, no completion established in this window. Verify RAWLOGS↔
   wikibrain raw/ mirror before closing.
2. **Gap audit** — promised 07:06:25Z ("I'll audit the gap for real" once
   the backfill lands). Depends on (1).
3. **Volume/salience synthesis** — candidate interpretation (message volume
   measures channel-local intensity, not durable relationship salience;
   Lou 1,602 msgs/forgotten vs Annie 133 msgs/eleven years vs Valeria
   4,879 IG msgs/one iMessage). Filed as moderate-confidence with
   falsifiers; do not overclaim.
4. **Sofia?** — 07:41:52Z: no Sofia anywhere in 331 threads, wiki,
   iMessages, or corpus. Possibly misremembered (Cosette? Silvana?) or a
   channel with no export. Backfill may surface her.

## Redaction note
None. Scanned all 89 bodies for secret patterns (GitHub tokens,
`sk-ant-`, AWS keys) — no hits. No redactions; the archive is byte-exact.

## Completion record
Batch `20260912-0740` extraction completed 2026-09-12 ~08:10 UTC.
Archivist: 89/89 user-assistant rows byte-exact, 141/141 system rows
manifested, external checks snapshotted, manifest.json hash-pinned.
Editor: src node `src:sammy-chat-transcript-20260912-0740` added; Annie
other-location clarification appended; volume/salience datum filed.
Dual push: wikibrain PR + RAWLOGS mirror. Watermark advanced to
`2026-09-12T07:43:31.816+00:00` only after both pushes verified.
