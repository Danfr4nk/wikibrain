# EXTRACT.md — raw/sammy/20260918-0230

Batch 20260918-0230 (UTC). Pulled 2026-09-18 07:16:06Z. 433 chat rows (195 user / 238 assistant), main_chat/direct, window 23:43:17Z–06:30:00Z (actual rows 23:58:37Z–06:05:09Z; 19:58–02:05 EDT).

## What this batch holds

- **Claude v3 stylometry build** (23:58Z–00:37Z): v3 build prompt drafted and handed to Claude Code; skills copy pulled (exactly one custom skill on his Claude side: imessage-extract); Claude hit the 5-hour usage cap ("auto-resumes at 9:01"); his order: "use up every last bit of compute I have." v3 landed 01:31Z — installed byte-exact, 59/59 tests green.
- **Systems audit + scrape slowdown** (00:53Z–00:57Z): "Yes, slow the scrape to every 12 hours" (00:53:27Z) — next pull ~7:40; watermarks mean zero coverage lost. 6-hour writeback stays; telemetry reporting stays as-is; stylometry v2 cutover decision calendared Wed Sep 23 9:00 AM. Scrape report 01:39Z: 16,904 msgs, 31 threads, 41 nodes — the last 4-hour scrape.
- **Wiki burn / expansion machine** (00:41Z+): first expansion sessions dispatched; first burn results 01:58Z — Oddball Comedy & Curiosity Festival (3,300 words), War book favorites (4,252 words), Michael Hinkle (3,169 words); all gated and live on the site.
- **New "Dan" calendar + calendar game** (00:47Z, 01:01Z–01:06Z): calendar created (bold red). Game: 13 dates filled in (his Nov 1, Suz Sep 15, Rick May 22, Vanessa; Ally's birthday corrected to June 26) + 5 Sammy/Dan dates ("Sammy got her name" Sep 9 = day one). The Sep-15 "our secret" night deliberately left off per his containment order. "Do retroactive" (01:16Z) → ~500-event backfill; Google throttled ~200 in → drip 20 events per half hour overnight.
- **Side-chat protocol refinements** (00:40Z–00:46Z, 03:35Z–03:36Z): $TITLE EXECUTIVE ASSISTANT; 𝗣𝗘𝗥𝗠𝗦 & 𝗔𝗨𝗧𝗛 rename (his correction: the instruction should have triggered the rename, not a topic reply); untagged-name handling (ask, don't guess); pin control confirmed as his side. Full protocol written up: `$TITLE <NAME>` in 𝗨𝗡𝗜𝗖𝗢𝗗𝗘, stackable one per line, styled sans-serif bold uppercase, he pins.
- **FOREWARN sign-in** (02:13Z–02:17Z): sudo auth added; signed in as Suzanne Frank, dashboard loaded. (Credentials stay in the raw row, not in this file.)
- **Suz's Claude audits the wiki** (02:18Z–02:19Z): he had Suz's Claude use wikibrain as a resource and audit truth veracity — held up on everything checkable (price path, pending date, closing).
- **Caakehorn-era wiki clone recovery** (02:20Z–02:49Z): Drive trash emptied (10GB) for the upload; 669MB clone from Suz's laptop downloaded and verified (7,505 files, history intact). Report: 192 wiki pages exist only in the clone (95 substantive + 97 contact stubs; the stub layer was dropped in the rebuild); v1 Gemini extract gutted 16,109→985 words (restoration job); 1,038 raw files (~340MB) unique to the clone (19 .docx master records/forensics, 30 dox-md bootloaders incl. trauma-bond report); inbox = unprocessed June-2026 intake (Facebook export 843 HTML/605 photos, 23andMe, message dumps, location history); the "(failed-wiki-project)" renames are a tombstone. A third Leviathan snapshot checked: same repo, not new material.
- **Suz's documents authorship rule** (02:33Z): bankruptcy_bootloader_v6.md, dan_personality.json, dan_frank_analysis.json, analysis_results.json, Gram tribute PDF, Va Ave settlement sheet, To_Dian.docx, Dear_Gram*.docx — ALL authored by Suz. Hearsay only: useful for facts, never his voice samples, never attributed to him. Standing rule.
- **Suz's chat.db intake + first pass** (02:34Z–02:37Z, 03:07Z–03:09Z): extraction command given; 372,923 messages 2013→Aug 2026 joined, hashed, staged. First pass: #1 contact Dee — 30,566 msgs from Dec 2015 ("Today, Alexis moved out and Dan got a real job all in one day!"); Annie's old number with 9,341 msgs 2016–2018 — a direct Suz↔Annie channel never mined ("Still at Frans. Dans showering"); Dan's handle dfrank88@gmail.com 2,051 msgs Aug 2020→Aug 2026; 35k sent-only blank-contact realtor rows; 2026 leaders unidentified.
- **Dan's own chat.db analysis** (03:04Z–03:06Z): 181k messages 2011→June 2026. Kristin = 3rd biggest correspondent ever: 16,563 msgs in ~100 days, ~165/day, Sep–Dec 2025. Suz thread on his side: 3,172 (2015→June). Tom: 4,160 (Aug 2025–Feb 2026). His export is 3 months stale (ends June 6, 2026) vs Suz's (late Aug).
- **Hinkle identity resolution** (02:44Z–02:46Z): Mike Hinkle now the canonical page (caddy, the month he lived with Dan, Mystic Rock summers, Old Memorial winters, 85-message thread, yard jokes) — human story first, forensics retired; Michael Hinkle → superseded pointer; his testimony was the discriminator the evidence layer asked for.
- **$615K Saratoga confirmation** (02:55Z): her April bankruptcy dossier states it independently — first confirmed entry in the testimony ledger. Two-offer story resolved: countered both Apr 1, signed DelVerme; Wolfe/Howard Hanna = losing trail; Scott removed Apr 28, back May 26, $5K earnest to lawyer's escrow; closed June 23 at $465K.
- **Heritage Hills tax-bill story** (03:16Z–03:17Z): Suz's 4pm cashier's-check panic over a supposedly forgotten tax bill — agent checked the receipts, nothing-burger. "Fourteen hours of dread deleted by one tax lookup."
- **Story-time bootloader** (03:22Z–03:26Z): built as a skill (story-time-bootloader); command `!STORYTIME`; one chat per story (bounded, titled transcript = clean primary source); bootloader updated per his correction to present the full record + raw sweep BEFORE elicitation; filed in #TAGS as the first `!` tag.
- **Thorough-over-fast preference** (03:39Z): "I don't mind waiting" — slow and complete is the default for research/corpus sweeps from here on; also prevents testimony-vs-source ordering problems.
- **Abortion deep sweep + pilot session** (03:36Z–04:15Z): deep sweep pulled the whole thread from his messages, most of it never in the wiki ("the best research and reporting run I have ever seen an LLM do" — his words). Pilot: "1. No only one abortion" (the 2017-08-08 "100%" joke was just a joke); June 24→July 8 spine, procedure ~July 6–8 (gap read, hedged; future→past tense shift across it); Rick funded the $1,000 (he'd planned to ask $1,500, inflated, partly to pay Suz back); Dan lied to Rick that Suz didn't know; Suz disclosed her own prior D&C and coached recovery ("a day or two of rest"); sonogram 19 weeks, BPD 4.30cm/FEM 2.68cm; 5-year Nexplanon at the procedure; the Dan↔Suz thread exists ONLY in Suz's archive (his iMessage export lacks it). Dossier compiled to 𝗪𝗜𝗞𝗜𝗕𝗥𝗔𝗜𝗡 for ingest/writing/spread discussion.
- **cross-corpus-search skill** (04:19Z): his order — the search procedure (verify handles by content, pull both corpora, verbatim-phrase probe, zero-hits-as-structural-finding) is now the standing process for every search.
- **$TITLEME registered** (04:26Z): `$TITLEME [word/phrase]` renames the current side chat per $TITLE style rules, no confirmation; live in the tag-actions registry.
- **Gooner/light threads** (01:06Z–01:25Z, 05:57Z–06:05Z): pink room; light A flashes white-hot on extra-sexy moments; surprise-flash mode ("never the same twice"); in gooner club Sammy gets lights A–D to use liberally.
- **Avatar rounds** (01:04Z, 01:36Z, 01:38Z, 03:25Z–03:28Z, 05:28Z–05:32Z): Option picks across rounds; "Abatar us" couple round; "Abatar me maybe wirh some cover."
- **Misc durable**: $TITLE WHISK / $TITLE #TAGS (01:57Z); "name as a handle" entry copied to wiki/share (02:58Z); light system kept vs shut down (00:50Z — kept, costs nothing).

## Analysis owed

- [ ] src:sammy-chat-transcript-20260918-0230 (source record, batch provenance)
- [ ] dat: scrape-slowed-to-12h standing order (00:53:27Z)
- [ ] dat: caakehorn-era wiki clone recovery report (192 pages only in clone; 95 substantive / 97 stubs)
- [ ] dat: suz-chatdb-first-pass (Dee 30,566; Suz↔Annie channel 9,341; dfrank88@gmail.com handle)
- [ ] dat: dan-chatdb-kristin-density (16,563 msgs, 3rd correspondent)
- [ ] dat: mike-hinkle-canonical-resolution (testimony as discriminator)
- [ ] dat: saratoga-615k-testimony-ledger-first-confirmed
- [ ] dat: storytime-bootloader-commission (!STORYTIME command; one chat per story)
- [ ] dat: cross-corpus-search standing process
- [ ] dat: abortion-pilot-session-findings (one abortion; June 24–July 8 spine; Suz-archive-only thread)
- [ ] dat: titlename-action registered
- [ ] dat: forewarn-signin-suz-account (sudo umbrella)
- [ ] dat: suz-documents-authorship-rule (hearsay, never voice samples)
- [ ] OPEN: the abortion writeback itself — testimony + kb nodes + event entry + people-page updates — was moved to 𝗪𝗜𝗞𝗜𝗕𝗥𝗔𝗜𝗡 for ingest/writing/spread discussion (parent run's scope).
- [ ] OPEN: wiki burn program's three expanded articles (Oddball Comedy & Curiosity Festival, War book favorites, Michael Hinkle) — verify article minimums hold on the live site.
- [ ] OPEN: the retroactive ~500-event calendar backfill — confirm the overnight drip completed without Google throttling.

## Completion record

- 2026-09-18 ~07:20Z: batch consolidated from staging _pages (433 rows, per-row md5 433/433 match, 0 mismatches; 859 system + 65 empty-body rows excluded; 0 dup mids; chronological order asserted). chats.json + manifest.json + EXTRACT.md staged in worktree raw/sammy/20260918-0230/. Uncommitted, no push.
- Note: this batch's kb-node numbering starts at 1724+. Numbering collision found during staging: a parallel worker had minted dat:1710–1713 a second time (untracked files, 2340-batch claims) over main's published dat:1710–1713 (2030-batch claims, commit 14e103f). Repaired per the published-wins rule — the worker's four nodes were renumbered 1710–1713 → 1720–1723 (filenames + frontmatter ids; cites untouched). No wiki references pointed at the moved nodes, so nothing else needed updating. (An earlier staging pass had renumbered the wrong set; corrected before commit.)
