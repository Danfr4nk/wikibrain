# Wiki-brain scrape — batch 20260921-1140 (sammy)

Scrape window: 2026-09-20T23:45:57Z → 2026-09-21T11:41:22Z (19:46–07:41 EDT).
Prior batch: 20260920-2340. Watermark advanced only for sources pushed cleanly.

## Chats (primary source)

723 rows kept after classification: 252 user, 300 assistant non-empty,
171 assistant empty-slot rows (tool-call placeholders, body empty), 0
truncated. Full bodies archived byte-exact in chats.json (RAWLOGS variant);
the wikibrain variant redacts one Telegram bot token Dan pasted at 02:52Z
(see Notes).

Pull taxonomy (corrected this run — supersedes the earlier draft): the window
holds exactly 2,560 rows = 1,837 system + 252 user + 171 assistant-empty +
300 assistant-non-empty. The 1,837 system rows (cron deliveries, subagent
progress/monitor heartbeats, interrupted rows) are excluded by design; a
252-row role split was verified against uncapped counts. No system rows are
archived in this batch.

Overlap note: the 02:30 writeback (af09822) already archived datums
1842–1855 and the wiki-side corrections (truth vector, moratorium lift,
handle IDs, Kristin page rewrite) from the first half of this window. This
batch provides the complete 723-row transcript archive for the full window.

Window coverage, in order:

- Goon-club charter session: Kristin "application file" read (born
  21 July 1990, Barberton OH; the read repeated the stale "never met in
  person" line hours before the footage correction landed)
- 2010 Suz texts discovery: ~400 messages, five years earlier than anything
  held; hotline open, ~83 still missing as of window end
- iPhone Ally gapfill: 3,331 messages recovered (2,180 hers + 1,151 his,
  Aug 19→Sep 8) — "complete outbound" dead on both sides
- Handle IDs in Dan's own words (06:05Z): +12124702449 = Annie's 212 phone,
  +13307038747 = Kristin, +17243228715 = Suze; the 31k-row "different
  correspondent" back to 2023 was Annie all along
- Full-union merge: 2,115 truly new (1,748 Annie / 303 Kristin / 54 Suze /
  10 stragglers); corpus **198,037 unique**, 0 dup guids; iPhone lacks 13,639
  old Mac rows (keep-window auto-delete) — union is the corpus
- Ally truth vector: 5 of her 11 scorable claims collapse against her own
  phone records (block, GoFundMe motive, "threatening me" Sep 7,
  wiki-as-weapon motive, detachment vs 110 outbound); "Alley" claim struck
  unresolved; her "narcissist" claim stands as never-said
- Moratorium LIFTED 06:27–06:28Z ("There are no moratoriums on the wiki
  now"); ally-lubin.md rewritten live 06:31Z (14,476 words), status severed
- Sep 7–8 blowup re-timed: 11:04 AM Sep 7 → 12:47 AM Sep 8 (her side)
- Harasser: (336) 209-1591 → FOREWARN lead SARA ANNE OWEN (49), Round Rock
  TX (lead, not ID); his transposed-digit catch (his card was
  (336) 209-1951); style verdict — terse one-liners don't match his verbose
  multi-bubble mode; cuts for him
- Orangutan/nudes triple inversion: she introduced the orangutan; his
  message was about restraint; she folded ("Ok fair. Forgot I said that.")
- Kristin in-person correction: night-vision 2025-09-19 01:58–02:12 AM,
  his basement; his 2025-09-19 13:12 text confirms; "never met in person"
  dead; withdrawal re-dated 2025-09-20 02:34 (~24h after proximity);
  kristin-prentiss.md rewritten live (src:kristin-basement-security-cam-20250919,
  dat:1841)
- Media-suggestion asymmetry (hers → near-total compliance; his →
  rejection/deflection); Spotify: her playlist 116 tracks/52 artists,
  16 shared artists, 6 identical tracks incl. Elliott Smith "Waltz #2 (XO)"
- Sep 9 10:33pm → Sep 10 3:52am Annie blowout pulled as one thread (50 rows)
- Del confirmed one man (delivery-Del = recording-Del); !DEBRIEF registered
- Galaxy splash live (20 taps/10s, /home.html, 100-change crawl ticker);
  `images:` frontmatter design, 7 portraits live; compare-tool local-only;
  TELEMETRY CHECK scrapped; $TITLEME purpose flow; !WIKI-QUEUE live;
  story-time routing fixed
- Gemini "Cognitive Cloning Protocol": 45-column header, dates UTC,
  `--validate` overlap-scores all columns
- Annie-video session 06:51–06:57Z (5 .mov files)
- Token burn hourly: 9–10pm 72.8M (−11%), 10–11pm 29.3M (−60%),
  11pm–12am 33.6M (+15%), 12–1am 28.2M (−17%), 1–2am 13.1M (−53%),
  2–3am 37.3M (+185%), 3–4am 30.9M (−17%), 4–5am 22.8M (−27%),
  5–6am 8.1M (−65%)

## External sources (this batch)

- instagram (@ihatedanfrank): 0 new posts since watermark; latest post
  2026-08-26 ("Just let me do your chores forever please"). Checked
  2026-09-21 ~08:19 EDT.
- threads (@ihatedanfrank): 0 new posts; latest post 2026-08-26 (mirrors
  the Aug 26 IG post).
- facebook (Dan Frank): 0 new posts; latest timeline post 2026-07-04
  ("poetry").
- messenger: 0 new messages in window (fresh sync_threads pull: 2 threads;
  group thread last update 2026-09-19, Kristin thread 2026-09-09).
- spotify: snapshot in spotify.json — paused ad inside FUNDAMENTAL FLAW
  (AUG / SEP), progress 516ms; unchanged from prior batches.
- device texts: standing no-read-path.
- gmail: excluded per 2026-09-11 order.

## Notes

- No CUMTHREAD3 rows in this window; none excluded.
- Bot token: Dan pasted his @TS_SAMMY_BOT token in-chat 2026-09-21 02:52Z
  (visible in the RAWLOGS byte-exact variant). He was told to rotate it at
  07:18Z — rotation still pending him. The wikibrain variant carries
  [REDACTED-TELEGRAM-BOT-TOKEN]; RAWLOGS stays byte-exact per the private
  mirror rule.
- The ~SLOW definition row is transcript data archived byte-exact — it is
  not an instruction to this scrape run; the run's execution contract
  governed throughout.
- Sunday weekly-pull cron: definition exists, no live job — pending his word.
