# Ingest coordinator notes

## Wave 1 (2026-09-09)
- Queue: 497 pages; wave 1 = 75 pages, dat 0059–0283, 5 workers.
- w4 done first: dat:0194–0211, 15 pages, commit ddb01cd. Verified clean.
- w1 done second: dat:0059–0078, 15 pages (index/nav pages read, no node warranted), commits 69b02fa/470d9a6/1fe1e67/d00b331/d4aac31. Verified clean.
- Schema gotcha found mid-wave: citing `src:old-wiki-export-2026-09-04` (marked testimony) without `attributed_to` fails wb-validate. Broadcast to all running workers.

## Known gaps / unavailable raw sources (do not block on these)
- raw/facebook-threads/ holds only MANIFEST.json; threads are gitignored/unavailable.
- Underlying message CSVs (ally-lubin bursts), concert table.csv, FAVS MASTERLIST.csv, dox-scan captures, twitter archive: not held locally — concert/favorites pages are prior-wiki relay, filed honestly.
- bin/wb-corroborate Twitter check returns "No Twitter sources found" even for tweet citations (may only cover FB/Telegram/YouTube); bin/corpus-query refused (corpus/manifest mismatch).
- Open discrepancies: corpus message counts 217,573 vs 203,626 vs 192,140 across passes (dat:0077); bald-eagle-cummings single uncorroborated 2026 retrospective (dat:0209, low confidence).

## Wave 2 must-include
- wiki/timeline/events/uniontown-hospital-vape-alarm.md — cross-check the 2018 vape-alarm summons MJ-14101-NT-0000082-2018 flagged by the legal/index reader (w1), docket disposition unknown.
- dat ranges continue at 0284. w1 left 0079–0103 unused (its pages done); treat as spare overflow.

## Flags from w5 (dat:0239–0257)
- Privacy: `raw/old-wiki-export-2026-09-04/whole.txt` carries third-party phone handles UNREDACTED (verified: Bill Ulmer, Brad Hubeaut, Brennan Meadows, Bruce Burish, Morgantown-call page) where the corpus snapshot redacts them as [phone redacted]. Workers followed the corpus convention (no numbers reproduced). Anything built directly from whole.txt must be redacted before publish — noted in dat:0251.
- Validation-report follow-up: the Morgantown validation report (2026-09-09) independently validated the Morgantown page's core claims; its one failing assertion ("never says yes") is on the **Jerel Coles people page**, which the Morgantown page had already corrected 2026-08-20. Wave 2: when the Coles page is ingested, confirm whether it has since been patched (report §441 recommends the patch).

## Wave 1 systemic findings (from w2, dat:0104–0125)
- Corrections don't propagate: the main Annie page corrected the June 1 exit-line attribution 2026-08-13 (it's Dan's line, not Annie's), but end-fight.md still carries the stale version. The 2015-annie-read impact analysis's "none applied" queue is partly stale too. A propagation pass over event pages quoting the June 1 closure is warranted once ingest is further along.
- Timestamp convention: the old wiki's timestamps are local Eastern; the held corpus (messages.csv) is UTC. Convert (EST/EDT) before declaring a displacement; ~5h offsets are timezone, 24h offsets are genuine.
- Cite registry: invented `src:web-2026-09-09` fails validation — web corroboration belongs in the extraction field, never as a cites id.
- Libby Titus identification: Libby = Libby Titus (Donald Fagen's wife), death 2024-10-13 confirmed three ways (dat:0116).

## Wave 2 (2026-09-09/10)
- 75 pages, dat 0284–0523. w6 = master-timeline.md solo (7654 lines, dat 0284–0343).
- Must-includes: jerel-coles.md (w8 — confirm "never says yes" patch per validation report §441), uniontown-hospital-vape-alarm.md (w10 — cross-check summons MJ-14101-NT-0000082-2018).
- w1's unused 0079–0103 held as spare overflow.

## Wave 2 partial (w10 done: dat:0479–0499)
- Vape-alarm must-include resolved: dat:0495 — summons MJ-14101-NT-0000082-2018 fully tabled, legal index carries nothing the page lacked; disposition still unknown, filed honestly.
- BFS Foods 2026-08-26 corrected sequence (cut first, killing retaliation theory) — corpus revision is newer than old-wiki export; nodes taken from fresher revision with divergence noted.
- New schema gotcha (in-progress drafts, w6/w7): invented source ids fail — `src:old-wiki-export-2026-09-09` does not exist (correct: `src:old-wiki-export-2026-09-04`); `src:imessage-corpus` does not exist (correct: `src:imessage-corpus-2026`).

## Wave 2 partial (w6 done: dat:0284–0305, master-timeline.md solo)
- 22 findings on the 7,654-line master timeline, committed as 080cf57, validates clean.
- Worker self-caught the `src:old-wiki-export-2026-09-09` typo pre-commit after the coordinator heads-up.
- Remaining repo errors (0357–0359, `src:imessage-corpus` typo) are w7's in-flight files; heads-up sent.

## Wave 2 partial (w7 done: dat:0344–0362, 19 pages)
- Direct Python CSV scans over corpus/messages.csv proved faster/more precise than bin/corpus-query (worker note).
- New contradictions: franki-faris 2016-05-09 "I just saw Franki" (held iMessage) vs page's "no contact after 2013" (dat:0357); timeline/index stats drift (3,249/360 vs master 3,661/386, dat:0362); july-2026-recontact count gap (page 624 vs held 430, dat:0358).
- ej-rags page rests entirely on unheld Facebook thread — load-bearing 2013-return dating has no re-verifiable anchor (dat:0356).

## Wave 2 partial (w9 done: dat:0434–0453, 18 pages)
- Recurring count-correction pattern: people pages counted one side only (clyde 256 not 125; davey 839 both-sides; dimitri 71 not 116; eric-springer 93 both-sides). Downstream volume work must re-derive from corpus.
- Structural held-corpus window gaps: Suz thread has 0 rows in 2016-06 and 2020-05; 11 of 16 Fred Adams rows live only in the richer 2026-09-04 export (dat:0448 extends dat:0291).
- fran-coldren death-moment story + its ~3h-later retraction both verified (dat:0446).
- Duplicate `synthesizes:` YAML bug fixed on 3 pages (fastly-fsly worker).
- dat:0454–0478 free for follow-on work.

## Wave 2 partial (w8 done: dat:0389–0420, 19 pages)
- Jerel Coles patch-state check (dat:0412): page is UNPATCHED as of 2026-09-04 snapshot — 'never says yes' categorical survives (defeated by 'Yes, save it' at 04:43), stale T2 disclaimer, stale fourteen-repetition count and timestamps. Validation report §441 rec #1 unaddressed. Flag for operator: the patch must happen in the wiki source itself.
- diane-moore, ellen-ulmer, emaly-minerd, eric-jester, felipe: thread-count corrections + verified quotes filed; unheld stories kept separate.
- james-analysis-pdf: sequence verified; aftermath superseded; unheld material flagged.

## Wave 3 partial (w13 done: dat:0614–0633, 15 pages)
- conflict-architecture's Aug 18, 2026 "love bomb" exchange verified verbatim to the second (dat:0624) — n=1 with primary backing.
- attachment-model RESOLVED 2026-08-23: 129 exit episodes corroborate dossiers' 127; 110-of-127 withdrawn (dat:0622).
- schrute-farms secret show primary-verified via 2019-09-02 iMessage (dat:0617), extends web verification.
- Honest gaps: folie-a-deux 2025 quotes absent from held corpus (dat:0618); node-locking/chaos-preference/institutional-out counts rest on unheld Gemini/dox/dansynth (dat:0623/0626/0627); jack-rusko thread entirely unheld (dat:0630).

## Wave 3 partial (w15 done: dat:0704–0731, 14 pages, 28 nodes)
- New schema gotcha: wb-validate rejects `measurement` + `attributed_to` together — remove `measurement` from relay-style count datums (broadcast to running workers).
- Full Sail page still prints August 2009 graduation with unresolved 2026-09-03 contradiction block — stale against dat:0058's September correction (propagation failure again).
- Uniontown-return: earliest-rows gap verified exactly — one attachment-only row 2011-03-19, first text 2015-11-12: a 4.5-year primary-source void covering all 2011–2015 claims.
- jajuan/jess threads: inherited MASTER dump's "everything Received" artifact; threads are two-way, not one-way.
- Dan's Law Lex-collapse: held export confirms the Casey attribution the page only inferred.

## Wave 3 partial (w11 done: dat:0524–0542, 15 pages)
- contact-gini INDEPENDENTLY REPLICATED from held corpus: inbound Gini 0.9556, top-1 33.6%, top-5 68.0%, per-year 2015–2026 (dat:0528–0531). Two-sided imputation impossible (outbound rows lack recipient handle; MASTER dump unheld).
- john-paci: 11 message artifacts verified verbatim, timestamps to the minute (dat:0539); staged-eviction arrangement stays operator testimony.
- johnny-dealer: thread recounts at 7,090 rows (page's 3,462 is a floor); page typo flagged ("Johnny is mia" 2018-04-14 → corpus 2019-04-14).
- Attribution correction: "I'm in love with Annie Ulmer" is Annie's coaching script for Dan, not his declaration (dat:0541).
- jamie-mohler: Ethan Kray alias in 2012 Twitter archive; post-transition refs begin March 2025, earlier than page's Sept 2025 floor.

## Wave 3 partial (w12 done: dat:0569–0591, 15 pages, 23 nodes)
- Note: worker's final report mentioned only the last 9 nodes; the first 14 (0569–0582) were verified present and committed separately. All 15 pages covered.
- jerad-friedline: March 2026 AI-jailbreak note is DAN's, not Jerad's; Roe-prediction attribution to Jerad has no support (dat:0585).
- john-felix: thread 156 rows to Jan 2018 (page said Jun 2016); 2026-08-18 revision's specific 2018 quotes have zero held hits.
- dec-2025-spike: strongest verification of the wave — Dec 4,620 vs 4,657, ratios replicate (dat:0591).
- calibrated-confidence: "22x" claim not reproducible (dat:0580).

## Wave 3 complete (w14 done: dat:0659–0681, 14 pages, 23 nodes)
- Direction-correction pattern: jay-lauer 11:07 runs Annie→Dan (corrects page AND dat:0064 — dat:0064 needs amendment); jim-vrabel 612 two-way not 313 one-way; jason-bermejo 761 not 1,200; james-dee dormancy framing contradicted by 147 post-July-21 messages.
- josh-brannan wav artifact verified; 2018 volume 40,500 held vs 40,514 claimed.
- Highest-value unheld sources: Jay Lauer Rick exchange (page's "single most important fact"), Bacharach discovery thread, Paci-arranged eviction.

## Wave 3 totals: 223/497 pages done, dat:0524–0731 minted.

## Wave 4 partial (w19 done: dat:0884–0898+0900–0901, 15 pages, 17 nodes)
- hey-monday: 2008-12-28 BackBooth bill independently confirmed via setlist.fm (dat:0884).
- john-mayer: date ambiguity resolved to 2008-08-20 by order number; Post-Gazette Pavilion show with Paramore support.
- MD: 24-message thread verified exactly (count, range, one-way) in held corpus (dat:0896).
- big-five: first-person self-typing verified (msg id 14417, 2024-11-04, "INTP 5w6sx RLOEI"); categorical Ti-dominance re-derived 13/0 on held slice (dat:0890).
- 0899 left unused.

## Wave 4 partial (w17 done: dat:0794–0813+, 15 pages, 19 nodes)
- Worker's full final report didn't arrive (only a background-note handoff); verified via its 3 batch commits — all 15 pages covered, validator clean.
- kristin thread: 20,014 held rows (dat:0801); surname self-attested, "Kayden" absent.
- lucy: Suz's euthanasia-of-the-dog message verbatim 2018-04-23 (dat:0808).
- libby: rate contradiction unresolved; arc absent from held corpus (dat:0806/0807).

## Wave 4 partial (w16 done: dat:0749–0764, 15 pages, 16 nodes)
- reassurance-architecture: crisis-day table replicates exactly once day boundaries are Eastern; but "call me" 170→129, "goodbye" 57→207 under documented normalizer — page used a different export (106,629 sent vs held 99,360) with unspecified normalizer. 106-ultimatum/127-false-exit/299-affirmation unresolved (dat:0754/0755).
- linguistic-profile: CORRECTED 2026-08-23 block corroborated in direction (held TTR 0.0478 Dan vs 0.0526 interlocutors).
- lindsay-carolla: 85 messages (44/41), not 41 (dat:0760).
- REDACTION FLAG: corpus snapshot prints katherine-palakovich's phone handle unmasked in infobox; node treats as [phone redacted].
- gemini-07: incident timestamps verified to the minute after Eastern/UTC conversion.

## Wave 4 partial (w20 done: dat:0929–0955, 15 pages, 27 nodes)
- jpegmafia: "Darkskin Maniac" doesn't exist — it's "Darkskin Manson" (2014 Devon Hendryx project).
- kya-hansen: Jerad's "I don't think that's her" was about a Vanessa Labi ID attempt, not Kya — identity question built on misattached quote.
- marla: thread is two-way (74 rows), not one-way.
- marty-martin: May 24 account is in the SUZ thread, not Annie's; "make the store whole" has zero held hits.
- neurodivergence: dated 2025-09-15 "SHUT UP I'M AUTISTIC" makes page's "undated" framing stale; no clinical evidence held.
- cool-metric: universal-jurisdiction thesis contradicted in-page (food exempt); key citations zero held hits.
- ally-destiny: 375/154 burst replicates; corpus 2,073 rows (page's 1,987 stale).

## Wave 4 complete (w18 done: dat:0839–0854, 15 pages, 16 nodes)
- gemini-13: major contradiction — old wiki itself corrected the Uniontown novel to *Doorposts of Your House*, not *The Bend of the World*; tenancy Jan 2015–Feb 2019 not "~2012–2015".
- josh-coccagna: 77 rows (45/32), not 32 one-way; DMT exchange falsifies one-way framing.
- kelly-johansson: 129 rows (65/64), not 64 direction-unreliable.
- lisa-frank: earliest "Lisa" hit 2015-12-02, 25 days before page's floor.
- chatgpt: GPT-5 shipped 2025-08-07, so the decline narrative is untestable by construction.

## Wave 4 totals: 298/497 pages done, dat:0749–0955 minted.

## Wave 5 partial (w24 done: dat:1109–1122, 15 pages, 13 nodes)
- texting-deviance-audit: all six recipient complaints verified verbatim; audit's headline measurements come from unheld 183,787-row export — unreproducible, relayed as testimony (dat:1112). Two UTC-vs-Eastern dating slips noted.
- morley-frank: new held find — 2018-04-28 "if there's one lesson morley taught me it was / don't be an asshole, be a sonofabitch" (primary contact, absent from page).
- shannon: page says "Shannon's side only" but held corpus has 38 rows (23 inbound + 15 outbound) — correction (dat:1117).
- shelbie-breakiron: 639 held rows vs page's 685 (different extracts, both recorded).
- attachment-trauma-bond: 187:191 procurement statistic withdrawn (97.2% base rate).
- wiki(rapper): no new node — already covered by dat:0149. self/index: index page, figures belong to summarized pages.

## Wave 5 partial (w25 done: dat:1154–1168, 15 pages, 15 nodes)
- menore: 4,413 rows held exactly; re-entry/final delivery verified to the minute (dat:1163). "270 menor mentions" → 36 held hits (corpus-gap).
- sam: 576 held rows vs page's 374; mike-zollinger: 121 vs 51 (dat:1164/1165).
- Bitcoin address located, deliberately not reproduced; Mike Zollinger phone handle redacted per convention.

## Wave 5 partial (w22 done: dat:1019–1033, 15 pages, 15 nodes)
- HIGH-VALUE: dat:1024 — Rick silence BROKEN 2026-09-01: 2026-08-31 Rick "Can you do dinner Tuesday?" → 2026-09-01 00:33 Dan replies, first Dan→Rick message in held corpus since Feb 2025; dinner being arranged 2026-09-02. Page (snapshot 2026-09-04) was built on an older dump. (Also flags dat:1032's 2026-08-16 staleness audit as now stale.)
- alias-as-periodization: "zero about a studio" fails literally — 15 Dan-sent studio mentions in held slice (all gear/AI-shaped, never a session booked); GRIPNOTIC "3 lifetime mentions" replicated exactly (dat:1025).
- otto: held slice has 28 mentions 2025-10-31→2026-08-03 in Annie's thread only — extends record 8 months past page's end; disjoint seam at Oct 2025.
- NO w22 validator errors (16 current errors all in w23's 1066–1089 uncommitted drafts — w23 still running).

## Wave 5 partial (w23 done: dat:1064–1091, 15 pages, 28 nodes)
- Worker's full final report didn't arrive (only a background-note handoff); verified via 4 commits — all 15 pages covered, validator clean (the 16 attributed_to errors seen earlier were uncommitted drafts; fixed before commit).
- steve-kezmarsky: thread 162 rows; "alive" correction 2018-12-09; elder fall Jan–Apr 2018 (dat:1087–1089).
- nick-mattie: 324 rows both sides; Annie handoff 2017-05-02 (dat:1081/1082).
- 23andme-genomics: extraction correction 2026-08-14 (dat:1091).

## Wave 5 complete (w21 done: dat:0974–0989, 15 pages, 16 nodes)
- Four more "received-only" readings reversed by held corpus: mike-hinkle 85 (64/21), mohammed-bin-salman 643 (362/281), new-jim-shaffer 1,845 (951/894), rj-ritchey 1,103 (585/518). Pattern: the page's number was right as the received half; the shape claim was wrong.
- august-grievance-verdict: ledger reproduced nearly exactly; grievance 6 scored FALSE by the page itself; "He didn't rape me" retraction timestamp verified (2026-08-19 06:33 EDT).
- favorites.md: deliberately no node — legacy totals covered by dat:0438; breadth correction in dat:1021.

## Wave 5 totals: 373/497 pages done, dat:0974–1168 minted.

## Wave 6 partial (w30 done: dat:1379–1403, 24 pages, 25 nodes)
- tan-calabrese: page's 2000-12-31 anchor is spurious — the message exists in held corpus dated 2020-03-12; childhood origin survives only via retrospective testimony (dat:1388).
- gripnotic/mogzart/sloppp counts (3/8/1) reproduce exactly in held slice.
- twitter/2026: 31 May runaway iMessage agent noted (unverified against messages.csv).

## Wave 6 partial (w28 done: dat:1289–1311, 25 pages, 23 nodes)
- block-unblock: final recount 129 episodes / 128 resumed / median 36s — but page still carries stale 127/110 unreconciled; neither may be quoted without the other (dat:1292).
- rescue-premise: page (2026-08-28) still reads the 72-min SOS sequence through the latency asymmetry retracted 2026-08-15 — stale by 13 days (dat:1296).
- grok-build 2026-06-22 log: iMessage responder glitched and spammed an ex (dat:1309).
- twitter/2021: free-speech-absolutism exit moves five months earlier (2021-10-26 Lenny Bruce/Chappelle distinction).
- source-coverage-index: 52 sources, 1,786,124 rows vs ~187k unique (9.6x deliberate duplication) (dat:1304).

## Wave 6 partial (w26 done: dat:1199–1223, 25 pages, 25 nodes)
- vicki: "234 messages" is the received side only; 512 total (281/231) (dat:1211).
- suzanne-frank: July-2026 (14) and Aug-1–11-2026 (28) verify exactly.
- twitter-2025 11-month blackout filed LOW — export-incompleteness (dat:1218) makes it unresolved, not fact.
- DUP-FLAG: dat 1344/1345 duplicated (w29's committed batch-2 vs its own untracked drafts) — w29 notified to renumber before committing.

## Wave 6 partial (w27 done: dat:1244–1269, 25 pages, 26 nodes)
- tarik-fallous: fully verified — 80 messages (59/21), 2023-08-11–2026-04-12, all key quotes present.
- saratoga: web-corroborated MLS #1721561 — sold 2026-06-24 for $465,000 (page said June 23; one-day discrepancy, unresolved).
- film-canon: 2 of 7 quoted lines absent from held corpus — the two most load-bearing quotes for the canon-as-obligation argument.
- valeria: all four iMessage anchors absent; "valeria" appears once corpus-wide.
- suzanne-personality-assessment: 1-for-5 ("It's time for you to go." verified 2026-08-11).
- music index: MOGZART "closed" status stale vs verified March 2026 revival.

## Wave 6 complete (w29 done: dat:1334–1365, 25 pages, 32 nodes)
- stand-up: page's "only direct evidence of a completed set" is false vs Dan's own 2020-03-29 message (dat:1340).
- tuquick: "claimed verbatim" quotes and "97 messages" are from the unheld merged export; held slice differs (dat:1344/1345). 1344/1345 collision resolved by worker (stale drafts trashed, committed versions carry corrected numbers).
- zaco: 58:7 ratio wrong vs held chat (58:48) (dat:1357).
- family-tree: "14 corrected" vs 13-row table (dat:1358).
- dan-annie-fallout-verdict: severance 258→129; "sic semper lupanis" is Dan's (rows 223934–39) (dat:1342/1343).
- Stale-scan lesson: worker re-derived all corpus nodes after discovering pre-compaction scans were stale (192,140 rows, inconsistent timestamp zero-padding) — tuple counts changed (tuquick 297 not 354).

## ALL 497 PAGES INGESTED. dat:0059–1403 (minus intentionally unused headroom).
