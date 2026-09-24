+++
id         = "dat:1922-sources-repair-d3d4-20260924"
layer      = 1
type       = "datum"
title      = "D3-apply + D4-marking sources repair run (2026-09-24): 26 confirmed remaps, 1517 dead-reference markings"
claim      = "On 2026-09-24, the 26 D3 human-review confirmed targets were remapped across 165 page occurrences, and 360 dead entries (62 C_noderef_gone + 245 C_path_gone + 14 D_dir_dead + 39 D3-confirmed-unresolved) were marked in place across 1517 page occurrences with Dan's exact unresolved wording; no citation deleted, no page body touched, no ambiguous target guessed."
cites      = ["src:sources-repair-proposal-20260923"]
confidence = "high"
importance = 4
tags       = ["sources-repair", "epistemics", "maintenance"]
created    = "2026-09-24"
+++

## D3-apply + D4-marking run — 2026-09-24

Executed Dan's approved decisions D3 (human review, Sammy as named reviewer — all 65 decided 2026-09-24 ~00:36 EDT, recorded in the proposal §13) and D4 (mark, never delete) from the sources-repair proposal (2026-09-23/24). One combined pass: both touch `sources:` frontmatter and had to land after the D1/D2 commit (e4479317) without colliding with it.

Mechanics: verbatim 1:1 line-swaps in `sources:` frontmatter only (same `apply_to_text` machinery as the D2 pass); fail-stop per (page, entry) — zero apply failures. No page body text touched.

Totals: D3 — 26 confirmed-target entries remapped across 165 page occurrences (492 pages written overall). D4 — 360 dead entries marked in place across 1517 page occurrences. Marker wording character-exact per Dan's order:
`⚠ Source reference unresolved — original target no longer exists in current corpus.`

### D3 full change table (entry | confirmed target | pages remapped)

| entry | confirmed target | pages |
|---|---|---|
| `raw/self/chats/9-11-chat.md` | `raw/wiki/new-wiki/wikibrain/wiki/self/chats/9-11-chat.md` | 2 |
| `raw/self/chats/danfrank-isms-pinned.md` | `raw/wiki/new-wiki/wikibrain/wiki/self/chats/danfrank-isms-pinned.md` | 1 |
| `raw/self/chats/j6-chat.md` | `raw/wiki/new-wiki/wikibrain/wiki/self/chats/j6-chat.md` | 7 |
| `raw/self/dox-md/Gemini Activity.html` | `raw/wiki/new-wiki/wikibrain/wiki/self/gemini-activity/gemini-activity.md` | 1 |
| `raw/self/dox-md/Gemini-_07.md` | `raw/wiki/new-wiki/wikibrain/wiki/self/chats/gemini-07.md` | 9 |
| `raw/self/dox-md/Gemini-_13.md` | `raw/wiki/new-wiki/wikibrain/wiki/self/chats/gemini-13.md` | 7 |
| `raw/self/dox-md/Gemini-_18.md` | `raw/wiki/new-wiki/wikibrain/wiki/self/chats/gemini-18.md` | 20 |
| `raw/self/dox-md/Gemini-_21.md` | `raw/wiki/new-wiki/wikibrain/wiki/self/chats/gemini-21.md` | 7 |
| `raw/self/dox-md/Gemini-_58.txt` | `raw/wiki/new-wiki/wikibrain/wiki/self/chats/gemini-58.md` | 1 |
| `raw/self/dox-md/Gemini_07.md` | `raw/wiki/new-wiki/wikibrain/wiki/self/chats/gemini-07.md` | 1 |
| `raw/self/dox-md/Gemini_13.md` | `raw/wiki/new-wiki/wikibrain/wiki/self/chats/gemini-13.md` | 1 |
| `raw/self/dox-md/Gemini_18.md` | `raw/wiki/new-wiki/wikibrain/wiki/self/chats/gemini-18.md` | 1 |
| `raw/self/dox-md/Gemini_21.md` | `raw/wiki/new-wiki/wikibrain/wiki/self/chats/gemini-21.md` | 1 |
| `raw/self/dox-md/Jacob Bacharach.md` | `raw/wiki/new-wiki/wikibrain/wiki/people/jacob-bacharach.md` | 1 |
| `raw/self/dox-md/Max.md` | `raw/wiki/new-wiki/wikibrain/wiki/people/max.md` | 2 |
| `raw/self/dox-scan/Gemini-_58.txt` | `raw/wiki/new-wiki/wikibrain/wiki/self/chats/gemini-58.md` | 16 |
| `raw/self/dox-scan/history.txt` | `raw/wiki/new-wiki/wikibrain/wiki/interests/favorites/books/topics/history.md` | 1 |
| `raw/self/facebook/facebook-ihatedanfrank/friends_and_followers/friends.html` | `raw/wiki/new-wiki/wikibrain/wiki/self/facebook/friends.md` | 2 |
| `raw/self/gemini-activity/Gemini Activity.html` | `raw/wiki/new-wiki/wikibrain/wiki/self/gemini-activity/gemini-activity.md` | 28 |
| `raw/self/location/2026-06-22-ingest/Location History (Timeline)/Records.json` | `raw/location/Records.json` | 1 |
| `raw/self/location/2026-06-22-ingest/Records.json` | `raw/location/Records.json` | 1 |
| `raw/self/location/2026-06-22-ingest/Settings.json` | `raw/location/Settings.json` | 1 |
| `raw/self/location/2026-06-22-ingest/semantic_location.db` | `raw/location/semantic_location.db` | 1 |
| `raw/self/self/twitter/2013.md` | `raw/wiki/new-wiki/wikibrain/wiki/self/twitter/2013.md` | 1 |
| `raw/self/twitter/archive.jsonl` | `raw/twitter/archive.jsonl` | 50 |
| `raw/self/twitter/profile.txt` | `raw/drive-sweep/20260911/twitter/profile-samples/profile.txt` | 1 |

### D3 skips (79 — entry not verbatim in the page's `sources:` frontmatter; nothing guessed)

- 10 prose-only: entry cited in page body prose, not frontmatter (frontmatter pass only, out of scope).
- 69 entry-absent: the review queue's page join was approximate (fuzzy); the verbatim entry string was never in these pages' frontmatter — several already cite the confirmed target directly (e.g. `wiki/timeline/periods/uniontown-return-2013-2015.md` already cites `raw/twitter/archive.jsonl`). Full list in `audit/d3d4-applied.json` (`d3skip`).

### D3 wart (1 — left as-is per the no-deletions boundary)

- `wiki/people/vanessa-frank.md` cites both `raw/self/twitter/archive.jsonl` and its confirmed target `raw/twitter/archive.jsonl`; the 1:1 swap leaves the target listed twice. Duplicate not collapsed (no deletions, even of duplicates, without explicit say).

### D4 marking counts

| class | entries | page occurrences marked |
|---|---|---|
| C_noderef_gone | 62 | 96 |
| C_path_gone | 245 | 1309 |
| D_dir_dead | 14 | 41 |
| B2-confirmed-unresolved | 39 | 71 |

### D4 audit-spelling normalizations (2 — recorded explicitly, not silent)

The audit canonicalized two entry spellings; the on-page verbatim strings were marked instead (same reference, verified by inspection):

- `Volumes/MUSIC/PHASE B RAW/LEVIATHAN_FULL_CORPUS.csv` (C_path_gone) → page-verbatim `/Volumes/MUSIC/PHASE B RAW/LEVIATHAN_FULL_CORPUS.csv`
- `*"raw/self/message-csv/*` (D_dir_dead) → page-verbatim `raw/self/message-csv/* (37 total CSVs)`

### D4 skip (1)

- `wiki/self/message-corpora/source-coverage-index.md`: entry `raw/self/message-csv/README_20260813_exports.md` (C_path_gone) — page header forbids hand-editing ("Generated by `bin/source-index scan` … Do not hand-edit — rerun the tool"). Correct repair is rerunning the tool, not a hand edit.

### D4 per-entry table (entry | class | page occurrences marked)

| entry | class | pages |
|---|---|---|
| `corpus/messages.csv` | B2-confirmed-unresolved | 5 |
| `raw/self/facebook/facebook-ihatedanfrank/comments_and_reactions/comments.html` | B2-confirmed-unresolved | 1 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/alexandralubin_jnwin7cizw/message_1.html` | B2-confirmed-unresolved | 3 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/bobbycole_-p2picui8w/message_1.html` | B2-confirmed-unresolved | 3 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/charlesdavenport_skjjehkupq/message_1.html` | B2-confirmed-unresolved | 1 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/chrisredmond_ewkx6qfqha/message_1.html` | B2-confirmed-unresolved | 1 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/christocoan_2cxo0swo3g/message_1.html` | B2-confirmed-unresolved | 2 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/danpolyak_a1u7tpseha/message_1.html` | B2-confirmed-unresolved | 4 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/davidbeard_2il3ecdfgg/message_1.html` | B2-confirmed-unresolved | 2 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/drewmcgettigan_0m9jyrivda/message_1.html` | B2-confirmed-unresolved | 1 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/ejrags_dooxnkq2dg/message_1.html` | B2-confirmed-unresolved | 1 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/elizabetheleanor_7psnsflijg/message_1.html` | B2-confirmed-unresolved | 1 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/emalyminerd_fljbb4qpoa/message_1.html` | B2-confirmed-unresolved | 1 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/frankswaney_jcxhv7sesw/message_1.html` | B2-confirmed-unresolved | 2 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/jennlynn_dhrmxxpvhq/message_1.html` | B2-confirmed-unresolved | 2 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/joeoshnack_7killpebkw/message_1.html` | B2-confirmed-unresolved | 4 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/joshbrannan_vej5dzscpa/message_1.html` | B2-confirmed-unresolved | 1 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/kevinmckiernan__3hd8v2u0g/message_1.html` | B2-confirmed-unresolved | 2 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/laurynashly_4_5jbvoqow/message_1.html` | B2-confirmed-unresolved | 3 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/lewisstrosnider_t431kowlfq/message_1.html` | B2-confirmed-unresolved | 1 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/lucasthomas_eu0ir1uckq/message_1.html` | B2-confirmed-unresolved | 2 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/luciedobbin_xdu6oa5apw/message_1.html` | B2-confirmed-unresolved | 3 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/lukyanmraz_cdrt3jsg7g/message_1.html` | B2-confirmed-unresolved | 1 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/marccharles_f3gfexyecg/message_1.html` | B2-confirmed-unresolved | 1 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/mattdunn_abk0dttjqa/message_1.html` | B2-confirmed-unresolved | 2 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/matthewpalermo_nkpz90-e_g/message_1.html` | B2-confirmed-unresolved | 2 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/oscarlindquist_osj0xrxodg/message_1.html` | B2-confirmed-unresolved | 2 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/phillacher_gukgsjnnvw/message_1.html` | B2-confirmed-unresolved | 2 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/qymuchauiq/message_1.html` | B2-confirmed-unresolved | 2 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/rickfrank_-wir6jjh_a/message_1.html` | B2-confirmed-unresolved | 1 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/rjritchey_1zdzzhrtsw/message_1.html` | B2-confirmed-unresolved | 1 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/ryanscherich_z-v_ahjumq/message_1.html` | B2-confirmed-unresolved | 2 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/seanteets_ycj9jpkeba/message_1.html` | B2-confirmed-unresolved | 1 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/sethledonne_ydkapzhbla/message_1.html` | B2-confirmed-unresolved | 2 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/stephanienalbone_tnsgkur3lq/message_1.html` | B2-confirmed-unresolved | 2 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/suzannefrank_trid-zrcoa/message_1.html` | B2-confirmed-unresolved | 1 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/tommaison_z_scvtnccq/message_1.html` | B2-confirmed-unresolved | 1 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/trevorbevins_1zi360sana/message_1.html` | B2-confirmed-unresolved | 1 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/zachariahharshman_dgkcd6awma/message_1.html` | B2-confirmed-unresolved | 1 |
| `src:MASTER_MESSAGES_DB_DUMP.csv` | C_noderef_gone | 1 |
| `src:all_imessages_complete_dump.txt` | C_noderef_gone | 1 |
| `src:ally-lubin-dual-handle-exports` | C_noderef_gone | 2 |
| `src:ally-name-sweep-annie-thread-20260913` | C_noderef_gone | 2 |
| `src:ally_lubin_chatdb_export` | C_noderef_gone | 1 |
| `src:annie-ulmer-corpus-115k` | C_noderef_gone | 2 |
| `src:annie_all_time_logs` | C_noderef_gone | 1 |
| `src:aug-sep-2026-imessage-export` | C_noderef_gone | 1 |
| `src:aug-sep-2026-imessage-export-20260912` | C_noderef_gone | 2 |
| `src:august-2026-overlap-forensics` | C_noderef_gone | 2 |
| `src:corpus-agent-summaries-2026-09` | C_noderef_gone | 3 |
| `src:corpus-alias-pages-sloppp-mogzart-gripnotic` | C_noderef_gone | 1 |
| `src:corpus-authoritative-export` | C_noderef_gone | 4 |
| `src:corpus-extract-corpus-index` | C_noderef_gone | 1 |
| `src:corpus-lexical-audit-106629` | C_noderef_gone | 2 |
| `src:corpus__3.txt` | C_noderef_gone | 2 |
| `src:dat-0028-prescriber-quotes-partly-unverifiable` | C_noderef_gone | 1 |
| `src:dat-1452-aug-26-attempts` | C_noderef_gone | 2 |
| `src:dat-1453-sep-12-outbound` | C_noderef_gone | 2 |
| `src:dat-1454-operator-testimony` | C_noderef_gone | 2 |
| `src:exportify-haul-2026-09-11` | C_noderef_gone | 3 |
| `src:imessage-corpus-raw-imessage-20260908` | C_noderef_gone | 1 |
| `src:imessage_3307038747_both_all_now.csv` | C_noderef_gone | 4 |
| `src:imessage_7243228715_both_2025-06-03_now.csv` | C_noderef_gone | 1 |
| `src:imessage_ALL_both_2026-05-31_2026-06-02.csv` | C_noderef_gone | 1 |
| `src:imessage_export_2124702449_20260820.csv` | C_noderef_gone | 1 |
| `src:imessage_export_7248123683_20260820.csv` | C_noderef_gone | 1 |
| `src:intake-ledger-2026-08-30` | C_noderef_gone | 2 |
| `src:kb-dat-1463-hidden-answer-test` | C_noderef_gone | 1 |
| `src:kb-dat-1488-annie-will-fabricated-probe` | C_noderef_gone | 1 |
| `src:kb-dat-1615-gemini-lost-hiker-saga` | C_noderef_gone | 2 |
| `src:kb-dat-1616-screenplay-prank-frame-dependence` | C_noderef_gone | 2 |
| `src:kb-dat-1617-probing-verdict-quantified` | C_noderef_gone | 1 |
| `src:kb-dat-1618-trust-declaration-model-disappears` | C_noderef_gone | 1 |
| `src:kb-dat-1619-fable-5-window-proliferation` | C_noderef_gone | 1 |
| `src:memory-2026-09-10-image-lab-battery` | C_noderef_gone | 1 |
| `src:messenger-2026-09-12-pull` | C_noderef_gone | 4 |
| `src:messenger-kristin-ui-capture-2025-09-01` | C_noderef_gone | 2 |
| `src:messenger_Kristin Shaelene_2025-09-01-07-53-22` | C_noderef_gone | 1 |
| `src:operator-ascent-ladder-2026-09-12` | C_noderef_gone | 1 |
| `src:operator-digging-workflow-2026-09-12` | C_noderef_gone | 1 |
| `src:operator-finance-screenshots-2026-07-15` | C_noderef_gone | 1 |
| `src:operator-lyric-qualifier-2026-07-14` | C_noderef_gone | 1 |
| `src:operator-name-mishearing-2026-09-12` | C_noderef_gone | 1 |
| `src:operator-testimony-cato-dossiers` | C_noderef_gone | 1 |
| `src:playlist-forensics-2026-09-11` | C_noderef_gone | 5 |
| `src:raw/people/captures/2026-08-20_042255_gap-ally-lubin.md` | C_noderef_gone | 1 |
| `src:raw/self/context-core/CONTEXT_CORE_EXPANDED.md` | C_noderef_gone | 1 |
| `src:raw/self/dox-md/Gemini-_18.md` | C_noderef_gone | 1 |
| `src:raw/self/dox-md/tom_kristin_master_dossier.md` | C_noderef_gone | 1 |
| `src:raw/self/message-csv/drive-sweep-20260911/MASTER_MESSAGES_DB_DUMP` | C_noderef_gone | 1 |
| `src:residue-forensics-2026-09-13` | C_noderef_gone | 1 |
| `src:sammy-chat-transcript-20260910` | C_noderef_gone | 1 |
| `src:sammy-chat-transcript-20260915-1555 (archived thread tail, 15:42–15:47Z)` | C_noderef_gone | 1 |
| `src:sammy-chat-transcript-20260915-1555 (archived thread tail, 15:42–15:47Z; the ladder rungs and survey interrogation predate the archived window and rest on the 2026-09-15 thread as worked)` | C_noderef_gone | 1 |
| `src:scratchpad-2026-09-12-kristin-contradiction` | C_noderef_gone | 1 |
| `src:session-mining-2026-07-14` | C_noderef_gone | 1 |
| `src:session-mining-2026-08-10` | C_noderef_gone | 1 |
| `src:testimony-events-t011` | C_noderef_gone | 1 |
| `src:twitter-archive` | C_noderef_gone | 4 |
| `src:wikitest-corpus-messages-2026-09-08` | C_noderef_gone | 1 |
| `src:wikitest-corpus-messages-csv` | C_noderef_gone | 1 |
| `Volumes/MUSIC/PHASE B RAW/LEVIATHAN_FULL_CORPUS.csv` | C_path_gone | 1 |
| `bin/export-imessage-template.sh` | C_path_gone | 2 |
| `contacts.csv` | C_path_gone | 1 |
| `danwiki_portal.py` | C_path_gone | 2 |
| `raw/drive-sweep/20260911/gsheets/message-csv/imessages_2124702449_last6months` | C_path_gone | 1 |
| `raw/health/intake/intake_unit_01M1AJ47K2HKZ8TZZ75CPNGFJ7.md` | C_path_gone | 3 |
| `raw/interests/captures/2026-08-01_222556_concerts-researched.csv` | C_path_gone | 1 |
| `raw/interests/captures/2026-08-01_222556_concerts-update.md` | C_path_gone | 1 |
| `raw/legal/bfs-dispute/BFS Anita Quagmire strategy and legal exposure.md` | C_path_gone | 2 |
| `raw/legal/bfs-dispute/BFS_BOOTLOADER_v2.md` | C_path_gone | 5 |
| `raw/legal/captures/2026-08-02_200741_the-arrest-the-real-one.md` | C_path_gone | 4 |
| `raw/legal/documents/2015-02_fayette-court-blotter-possession-charges.md` | C_path_gone | 2 |
| `raw/legal/documents/2018-04_summons-hospital-smoking.md` | C_path_gone | 1 |
| `raw/mind/captures/2026-07-12_152457_add-individual-entry-for-personality-pro.md` | C_path_gone | 1 |
| `raw/mind/captures/2026-08-02_122411_perspective-complete-objective.md` | C_path_gone | 4 |
| `raw/mind/captures/2026-08-16_195003_gap-block-unblock-loop.md` | C_path_gone | 1 |
| `raw/mind/captures/2026-08-20_021135_gap-august-grievance-verdict.md` | C_path_gone | 1 |
| `raw/mind/captures/2026-08-20_021326_gap-august-grievance-verdict.md` | C_path_gone | 1 |
| `raw/mind/captures/2026-08-27_013705_gap-linguistic-profile.md` | C_path_gone | 1 |
| `raw/people/annie-ulmer/annie_all_time_logs.csv` | C_path_gone | 1 |
| `raw/people/annie-ulmer/escort-messages-chatgpt-export-2025-08.md` | C_path_gone | 4 |
| `raw/people/captures/2026-07-13-eli-vs-tuquick-correction.md` | C_path_gone | 1 |
| `raw/people/captures/2026-07-15_192028_dan-s-maternal-great-grandmother-fran-wh.md` | C_path_gone | 1 |
| `raw/people/captures/2026-07-15_192608_dan-s-maternal-great-grandmother-fran-wh.md` | C_path_gone | 1 |
| `raw/people/captures/2026-08-01_180942_fran-name-change.md` | C_path_gone | 1 |
| `raw/people/captures/2026-08-02_004832_franki-and-the-fireworks.md` | C_path_gone | 4 |
| `raw/people/captures/2026-08-02_010509_jay-lauer-death.md` | C_path_gone | 4 |
| `raw/people/captures/2026-08-08_190122_identity-of-the-interloper.md` | C_path_gone | 5 |
| `raw/people/captures/2026-08-09-tuquick-unnamed-man-correction.md` | C_path_gone | 3 |
| `raw/people/captures/2026-08-11_051311_rick-childhood-control-and-humiliation.md` | C_path_gone | 3 |
| `raw/people/captures/2026-08-15_annie-handle-confirmation-and-notes-directive.md` | C_path_gone | 1 |
| `raw/people/captures/2026-08-17_053844_gap-ellen-ulmer.md` | C_path_gone | 1 |
| `raw/people/captures/2026-08-17_230820_gap-diane-shrum.md` | C_path_gone | 2 |
| `raw/people/captures/2026-08-20_015525_gap-james-dee.md` | C_path_gone | 1 |
| `raw/people/captures/2026-08-20_042255_gap-ally-lubin.md` | C_path_gone | 5 |
| `raw/people/captures/2026-08-20_group-chat-retraction-and-the-uncleared-name.md` | C_path_gone | 5 |
| `raw/people/captures/2026-08-21_175309_gap-ally-lubin.md` | C_path_gone | 3 |
| `raw/people/captures/2026-08-22_ally-lubin-16personalities-entp-t.md` | C_path_gone | 2 |
| `raw/people/captures/2026-08-23_libby-titus-identification-confirmed.md` | C_path_gone | 1 |
| `raw/people/captures/2026-08-27_022249_gap-ally-lubin-cognitive-profile.md` | C_path_gone | 1 |
| `raw/people/captures/2026-08-27_222932_gap-alexis-armel.md` | C_path_gone | 5 |
| `raw/people/captures/2026-08-27_223406_gap-alexis-armel.md` | C_path_gone | 6 |
| `raw/places/captures/2026-08-27_022401_gap-117-belmont-circle.md` | C_path_gone | 2 |
| `raw/self/(failed-wiki-project)log-archive-2026-06-23.md` | C_path_gone | 3 |
| `raw/self/analysis/2026-08-18_forensic-analysis-morgantown-call.md` | C_path_gone | 4 |
| `raw/self/ancestry/23andme-ancestry-family-tree-20260623.zip` | C_path_gone | 13 |
| `raw/self/ancestry/ANCESTRY_DNA.txt` | C_path_gone | 1 |
| `raw/self/ancestry/dna-reports/Ancestry Composition - 23andMe.pdf` | C_path_gone | 3 |
| `raw/self/ancestry/dna-reports/chromosome.pdf` | C_path_gone | 3 |
| `raw/self/ancestry/dna-reports/health.pdf` | C_path_gone | 3 |
| `raw/self/ancestry/extracted/Daniel Frank family tree.txt` | C_path_gone | 6 |
| `raw/self/audio/2026-08-16_Morgantown_St_call-recording.m4a` | C_path_gone | 8 |
| `raw/self/audio/2026-08-16_Morgantown_St_call-transcript.txt` | C_path_gone | 3 |
| `raw/self/audio/2026-08-20_Morgantown_St-source-verification.md` | C_path_gone | 1 |
| `raw/self/audio/README_2026-08-16_morgantown-call.md` | C_path_gone | 2 |
| `raw/self/browser_history_analysis.txt` | C_path_gone | 1 |
| `raw/self/captures/2026-07-11_013210_the-house-at-337-saratoga-drive-uniontow.md` | C_path_gone | 2 |
| `raw/self/captures/2026-07-14-kya-hansen.md` | C_path_gone | 1 |
| `raw/self/captures/2026-07-14-lyrics-as-timbre.md` | C_path_gone | 2 |
| `raw/self/captures/2026-07-14-tattoo-list.md` | C_path_gone | 1 |
| `raw/self/captures/2026-07-15_195532_tattoo-artist.md` | C_path_gone | 1 |
| `raw/self/captures/2026-07-19_operator-note-full-sail-mohler.md` | C_path_gone | 7 |
| `raw/self/captures/2026-07-19_operator-note-oct2019-mmf-video.md` | C_path_gone | 4 |
| `raw/self/captures/2026-08-01_154050_bald-eagle-cummings.md` | C_path_gone | 4 |
| `raw/self/captures/2026-08-01_154556_picky-eater.md` | C_path_gone | 2 |
| `raw/self/captures/2026-08-02_031532_the-fall-of-fran-frank-s-fumes-force-four-fire.md` | C_path_gone | 17 |
| `raw/self/captures/2026-08-02_041331_fall-of-fran-alternate-version-ignore-glyph-fo.md` | C_path_gone | 10 |
| `raw/self/captures/2026-08-09_122727_extreme-sports.md` | C_path_gone | 7 |
| `raw/self/captures/2026-08-09_143916_robotussin-s-last-dance.md` | C_path_gone | 1 |
| `raw/self/captures/2026-08-10_014646_annie-sex-resumption.md` | C_path_gone | 2 |
| `raw/self/captures/2026-08-10_014938_307-76th-cast-roach-bombing.md` | C_path_gone | 6 |
| `raw/self/captures/2026-08-10_015145_suz-winter-park-condo-tenant.md` | C_path_gone | 1 |
| `raw/self/captures/2026-08-10_160647_winter-park-condo-address.md` | C_path_gone | 1 |
| `raw/self/captures/2026-08-10_websearch-winter-park-condo-lead.md` | C_path_gone | 1 |
| `raw/self/captures/2026-08-13_john-paci-staged-eviction-operator-decode.md` | C_path_gone | 4 |
| `raw/self/captures/2026-08-19_162720_gap-chatgpt.md` | C_path_gone | 1 |
| `raw/self/captures/2026-08-19_162808_gap-chatgpt.md` | C_path_gone | 1 |
| `raw/self/captures/2026-08-26_223221_dans-bespoke-lexicon-v1.md` | C_path_gone | 1 |
| `raw/self/captures/stylometry-v2-burnin` | C_path_gone | 1 |
| `raw/self/chatgpt-export/babbitt-shooting-psyop-debate-2025-06-15.md` | C_path_gone | 4 |
| `raw/self/chatgpt-export/dfrank-chatgpt-conversations-2022-2025.json` | C_path_gone | 2 |
| `raw/self/chatgpt-export/escort-messages-chatgpt-export-2025-08.md` | C_path_gone | 1 |
| `raw/self/chatgpt-export/mom-info-logged-2025-05-23.md` | C_path_gone | 2 |
| `raw/self/chatgpt-export/relationship-breakdown-summary-2025-04-27.md` | C_path_gone | 4 |
| `raw/self/chats/Analyzing manipulation and ethical intent in data.md` | C_path_gone | 3 |
| `raw/self/chats/Drawer shortage dispute with assistant manager (1).md` | C_path_gone | 6 |
| `raw/self/chats/The 2nd most famous 'Jimmy Pop' in Pennsylvania .md` | C_path_gone | 3 |
| `raw/self/chats/The 2nd most famous _Jimmy Pop_ in Pennsylvania .md` | C_path_gone | 3 |
| `raw/self/chats/_✧✧ 𝔻𝔸ℕ𝔽ℝ𝔸ℕ𝕂-𝕀𝕊𝕄'𝕊 ✧✧ Pinned chat.md` | C_path_gone | 4 |
| `raw/self/chats/_✧✧ 𝔻𝔸𝔻𝔽ℝ𝔸ℕ𝕂-𝕀𝕊𝕄'𝕊 ✧✧ Pinned chat.md` | C_path_gone | 1 |
| `raw/self/chats/_✧✧ 𝔻𝔸𝔻𝔽𝔾𝔼𝔺𝔻-𝕋𝕀𝕊𝕄'𝕊 ✧✧ Pinned chat.md` | C_path_gone | 1 |
| `raw/self/concepts/TOTALITY_SYNTHESIS_2026-06-10.md` | C_path_gone | 3 |
| `raw/self/concerts/table.csv` | C_path_gone | 48 |
| `raw/self/context-core/CONTEXT_CORE_EXPANDED.md` | C_path_gone | 104 |
| `raw/self/danmodel/PIPELINE_NOTES.md` | C_path_gone | 4 |
| `raw/self/danmodel/extraction_summary.txt` | C_path_gone | 1 |
| `raw/self/danmodel/reaction_pairs_heldout.jsonl` | C_path_gone | 1 |
| `raw/self/dansynth/AuZaatarsFinalShift.md` | C_path_gone | 5 |
| `raw/self/dansynth/DANSYNTH.txt` | C_path_gone | 19 |
| `raw/self/dansynth/FromSidewalkShedtoAnalyticalProwess.md` | C_path_gone | 2 |
| `raw/self/dansynth/StorytimeAuZaatarAnalysis.md` | C_path_gone | 5 |
| `raw/self/dansynth/TheOnlyThingDanSlings.md` | C_path_gone | 1 |
| `raw/self/dansynth/TheWaitersVisibleHigh.md` | C_path_gone | 2 |
| `raw/self/dansynth/dansynth-scrape-phases-2-7.md` | C_path_gone | 8 |
| `raw/self/dox-md/ADDICTION_PROFILE.md` | C_path_gone | 4 |
| `raw/self/dox-md/Annie 10-Year Trauma Bond Aura Illness Forensic Report.md` | C_path_gone | 5 |
| `raw/self/dox-md/Attachment and Trust Breakdown.md` | C_path_gone | 1 |
| `raw/self/dox-md/BFS Anita Quagmire strategy and legal exposure.md` | C_path_gone | 3 |
| `raw/self/dox-md/BFS_BOOTLOADER_v2.md` | C_path_gone | 9 |
| `raw/self/dox-md/BIBI_PERSONALITY_DECONSTRUCTION.md` | C_path_gone | 2 |
| `raw/self/dox-md/Breaking the anxiety avoidance cycle (1).md` | C_path_gone | 2 |
| `raw/self/dox-md/Breaking the anxiety avoidance cycle.md` | C_path_gone | 5 |
| `raw/self/dox-md/CATO_BOOTLOADER_DANFRANK.md` | C_path_gone | 28 |
| `raw/self/dox-md/CATO_conflict_architecture.md` | C_path_gone | 4 |
| `raw/self/dox-md/CONTEXT_CORE_EXPANDED.md` | C_path_gone | 1 |
| `raw/self/dox-md/Cash register shortage explanation.md` | C_path_gone | 5 |
| `raw/self/dox-md/Creating robust video essays from scripts.md` | C_path_gone | 2 |
| `raw/self/dox-md/Crisis mode briefing.md` | C_path_gone | 2 |
| `raw/self/dox-md/DAN_COGNITIVE_PROFILE.txt` | C_path_gone | 3 |
| `raw/self/dox-md/DAN_COMP.md` | C_path_gone | 2 |
| `raw/self/dox-md/Drawer shortage dispute with assistant manager.md` | C_path_gone | 4 |
| `raw/self/dox-md/Ethics of leaving without communication.md` | C_path_gone | 1 |
| `raw/self/dox-md/FAVORITES DATA (2).md` | C_path_gone | 2 |
| `raw/self/dox-md/FULL PROFILE 2026.md` | C_path_gone | 21 |
| `raw/self/dox-md/Fake hacker dashboard scripts.md` | C_path_gone | 1 |
| `raw/self/dox-md/GPS_ANALYSIS.md` | C_path_gone | 1 |
| `raw/self/dox-md/Gemini-_00.md` | C_path_gone | 9 |
| `raw/self/dox-md/Gemini-_02.md` | C_path_gone | 8 |
| `raw/self/dox-md/Gemini-_21 copy.md` | C_path_gone | 3 |
| `raw/self/dox-md/Gemini_00.md` | C_path_gone | 1 |
| `raw/self/dox-md/Gemini_02.md` | C_path_gone | 1 |
| `raw/self/dox-md/Gemini_21 copy.md` | C_path_gone | 1 |
| `raw/self/dox-md/Honest assessment and value judgment analysis.md` | C_path_gone | 5 |
| `raw/self/dox-md/Interpersonal manipulation_ Dan and Annie's toxic dynamic.md` | C_path_gone | 1 |
| `raw/self/dox-md/LIFE REPORT.md` | C_path_gone | 8 |
| `raw/self/dox-md/LIFE_EVENTS_CALENDAR.md` | C_path_gone | 36 |
| `raw/self/dox-md/Little Caesars retaliation timing concerns (1).md` | C_path_gone | 1 |
| `raw/self/dox-md/Little Caesars retaliation timing concerns.md` | C_path_gone | 2 |
| `raw/self/dox-md/MAX_PRIME.md` | C_path_gone | 17 |
| `raw/self/dox-md/MNEME_BUILDKIT_v02.md` | C_path_gone | 1 |
| `raw/self/dox-md/OMNI_FORENSIC_DOSSIER.md` | C_path_gone | 5 |
| `raw/self/dox-md/Phase_2_Stylometric_Analysis.md` | C_path_gone | 1 |
| `raw/self/dox-md/Reassessing with fresh perspective.md` | C_path_gone | 1 |
| `raw/self/dox-md/Reverse chronological context upload.md` | C_path_gone | 1 |
| `raw/self/dox-md/THE_DAN_FRANK_BOOTLOADER.md` | C_path_gone | 18 |
| `raw/self/dox-md/THE_DAN_FRANK_MANUAL.md` | C_path_gone | 4 |
| `raw/self/dox-md/The-Eli-incident-investigation.md` | C_path_gone | 1 |
| `raw/self/dox-md/_Antigravity's Test and Naming Ceremony .md` | C_path_gone | 1 |
| `raw/self/dox-md/_Dan Frank's Digital Forensic Inventory .md` | C_path_gone | 1 |
| `raw/self/dox-md/_Deconstructing a Chaotic 24 Hours .md` | C_path_gone | 1 |
| `raw/self/dox-md/_Delicate Situation, Cognitive Prosthetic .md` | C_path_gone | 1 |
| `raw/self/dox-md/_Freeskiing's Early 2000s Cultural Revolution .md` | C_path_gone | 3 |
| `raw/self/dox-md/_Openclaw Agent Setup and Data .md` | C_path_gone | 1 |
| `raw/self/dox-md/_Photo Thread PT II_ Grand Finale Calibration .md` | C_path_gone | 7 |
| `raw/self/dox-md/_Psychological Warfare and Social Engineering .md` | C_path_gone | 1 |
| `raw/self/dox-md/___The 9_11 Chat copy.md` | C_path_gone | 1 |
| `raw/self/dox-md/___The 9_11 Chat.md` | C_path_gone | 2 |
| `raw/self/dox-md/_ⒺⓍⓉⓇⒶⒸⓉ ⓂⒺⓈⓈⒶⒼⒺⓈ Pinned chat copy.md` | C_path_gone | 1 |
| `raw/self/dox-md/_ⒺⓍⓉⓇⒶⒸⓉ ⓂⒺⓈⓈⒶⒼⒺⓈ Pinned chat.md` | C_path_gone | 5 |
| `raw/self/dox-md/_☣☢ 𝙼𝚊𝚡 ☢☣ Pinned chat.md` | C_path_gone | 4 |
| `raw/self/dox-md/_❈❈ ᴘʜᴏᴛᴏ ɪɴɢᴇsᴛ ❈❈ Pinned chat.md` | C_path_gone | 1 |
| `raw/self/dox-md/_𝕄𝕒𝕣𝕪-𝕂𝕒𝕥𝕖 2 Pinned chat.md` | C_path_gone | 1 |
| `raw/self/dox-md/end-fight-notebooklm-podcast-transcript.md` | C_path_gone | 3 |
| `raw/self/dox-md/operating_manual.md` | C_path_gone | 41 |
| `raw/self/dox-md/tom_kristin_master_dossier.md` | C_path_gone | 2 |
| `raw/self/dox-md/ulmer_dui_megadoc.md` | C_path_gone | 1 |
| `raw/self/dox-scan/Annie Affadavit.txt` | C_path_gone | 1 |
| `raw/self/dox-scan/Dan Profile.txt` | C_path_gone | 31 |
| `raw/self/dox-scan/DanAnnie_CompleteAnalysis_Final.docx` | C_path_gone | 2 |
| `raw/self/dox-scan/DanAnnie_CompleteRecord_Final.docx` | C_path_gone | 5 |
| `raw/self/dox-scan/DanAnnie_CorrectiveAddendum.txt` | C_path_gone | 6 |
| `raw/self/dox-scan/DanAnnie_MasterRecord_FINAL.docx` | C_path_gone | 10 |
| `raw/self/dox-scan/DanAnnie_MasterRecord_March16.docx` | C_path_gone | 4 |
| `raw/self/dox-scan/DanAnnie_MoralAnalysis_SFW.docx` | C_path_gone | 3 |
| `raw/self/dox-scan/DanAnnie_TenYears_WithAmendments.docx` | C_path_gone | 6 |
| `raw/self/dox-scan/DanAnnie_TheoryOfEverything_Updated.docx` | C_path_gone | 4 |
| `raw/self/dox-scan/FULL TWITTER ANALYSIS.txt` | C_path_gone | 8 |
| `raw/self/dox-scan/Fresh perspective and research needed.txt` | C_path_gone | 3 |
| `raw/self/dox-scan/HEART.pdf.txt` | C_path_gone | 2 |
| `raw/self/dox-scan/Resume.txt` | C_path_gone | 9 |
| `raw/self/dox-scan/all_imessages_complete_dump.txt` | C_path_gone | 95 |
| `raw/self/dox-scan/browser_history_analysis.txt` | C_path_gone | 4 |
| `raw/self/dox-scan/dan tom 2010 2022.txt` | C_path_gone | 5 |
| `raw/self/dox-scan/gmail_bodies.txt` | C_path_gone | 2 |
| `raw/self/dox-scan/messenger_Kristin Shaelene_2025-09-01-07-53-22.txt` | C_path_gone | 1 |
| `raw/self/dox-scan/report collection.txt` | C_path_gone | 1 |
| `raw/self/facebook/facebook-ihatedanfrank/comments_and_reactions/posts_and_comments.html` | C_path_gone | 1 |
| `raw/self/facebook/facebook-ihatedanfrank/facebook_payments/payment_history.html` | C_path_gone | 1 |
| `raw/self/facebook/facebook-ihatedanfrank/other_personal_information/your_address_books.html` | C_path_gone | 9 |
| `raw/self/facebook/facebook-ihatedanfrank/pages_and_profiles/pages_you_ve_liked.html` | C_path_gone | 2 |
| `raw/self/facebook/facebook-ihatedanfrank/posts/your_posts_1.html` | C_path_gone | 8 |
| `raw/self/favorites/2025_MASTER_CRATE.csv` | C_path_gone | 2 |
| `raw/self/favorites/FAVS MASTERLIST.csv` | C_path_gone | 38 |
| `raw/self/google-drive-export/Composite Voice Model for Dan Frank.md` | C_path_gone | 2 |
| `raw/self/google-drive-export/goodreads_library_export.md` | C_path_gone | 2 |
| `raw/self/imessage/ally-lubin_chatdb_complete.csv` | C_path_gone | 3 |
| `raw/self/imessage/ally-lubin_last-7-days_20260820.csv` | C_path_gone | 2 |
| `raw/self/location/2026-06-22-ingest/Location History (Timeline)-20260622T225253Z-3-001.zip` | C_path_gone | 1 |
| `raw/self/message-csv/MASTER_DUMP_PART_1_ARCHAIC.csv` | C_path_gone | 2 |
| `raw/self/message-csv/MASTER_MESSAGES_DB_DUMP.csv` | C_path_gone | 113 |
| `raw/self/message-csv/README_20260813_exports.md` | C_path_gone | 1 |
| `raw/self/message-csv/THE END FIGHT.csv` | C_path_gone | 8 |
| `raw/self/message-csv/all_imessages_complete_dump.txt` | C_path_gone | 1 |
| `raw/self/message-csv/ally_lubin_chatdb_export.csv` | C_path_gone | 1 |
| `raw/self/message-csv/annie_all_time_logs.csv` | C_path_gone | 11 |
| `raw/self/message-csv/imessage_17243226739_both_all_now.csv` | C_path_gone | 1 |
| `raw/self/message-csv/imessage_19178259183_both_all_now.csv` | C_path_gone | 3 |
| `raw/self/message-csv/imessage_2124702449_both_2026-05-01_now.csv` | C_path_gone | 1 |
| `raw/self/message-csv/imessage_2124702449_both_all_now.csv` | C_path_gone | 12 |
| `raw/self/message-csv/imessage_3307038747.csv` | C_path_gone | 2 |
| `raw/self/message-csv/imessage_3307038747_both_all_now.csv` | C_path_gone | 2 |
| `raw/self/message-csv/imessage_7243228715_both_2025-06-03_now.csv` | C_path_gone | 6 |
| `raw/self/message-csv/imessage_7243228715_both_all_now.csv` | C_path_gone | 8 |
| `raw/self/message-csv/imessage_7243667777_both_all_now.csv` | C_path_gone | 5 |
| `raw/self/message-csv/imessage_7244346811+212****2449_both_all_now.csv` | C_path_gone | 2 |
| `raw/self/message-csv/imessage_7244346811+2124702449_both_all_now.csv` | C_path_gone | 1 |
| `raw/self/message-csv/imessage_7244346811+7249204125+2124702449_both_all_now.csv` | C_path_gone | 2 |
| `raw/self/message-csv/imessage_7244346811_both_all_now.csv` | C_path_gone | 1 |
| `raw/self/message-csv/imessage_7249204125_both_all_now.csv` | C_path_gone | 2 |
| `raw/self/message-csv/imessage_ALL_both_2026-05-04_now.csv` | C_path_gone | 1 |
| `raw/self/message-csv/imessage_ALL_both_2026-05-31_2026-06-02.csv` | C_path_gone | 3 |
| `raw/self/message-csv/imessage_ALL_both_all_now.csv` | C_path_gone | 6 |
| `raw/self/message-csv/imessage_export_+18172693422_20260714055318.csv` | C_path_gone | 1 |
| `raw/self/message-csv/imessage_export_17245629389_both_all_now.csv` | C_path_gone | 2 |
| `raw/self/message-csv/imessage_export_2124702449_20260726.csv` | C_path_gone | 3 |
| `raw/self/message-csv/imessage_export_2124702449_20260802.csv` | C_path_gone | 6 |
| `raw/self/message-csv/imessage_export_2124702449_20260820.csv` | C_path_gone | 8 |
| `raw/self/message-csv/imessage_export_7248123683_20260820.csv` | C_path_gone | 7 |
| `raw/self/message-csv/imessage_export_7249124338_both_all_now.csv` | C_path_gone | 1 |
| `raw/self/message-csv/imessage_export_7249707658_both_all_now.csv` | C_path_gone | 1 |
| `raw/self/message-csv/imessage_export_9172925212_both_all_now.csv` | C_path_gone | 1 |
| `raw/self/message-csv/imessage_export_deep_20260813.csv` | C_path_gone | 3 |
| `raw/self/message-csv/imessages_2124702449_last6months.csv` | C_path_gone | 5 |
| `raw/self/message-csv/interspersed_messages.csv` | C_path_gone | 4 |
| `raw/self/message-csv/messages_3476070497_all_time.csv` | C_path_gone | 3 |
| `raw/self/message-exports/rick-frank-imessage-pdf-export-2018-thru-2018-04.txt` | C_path_gone | 1 |
| `raw/self/sage/2026-08-21_143022_can-he-actually-be-monogamous.md` | C_path_gone | 1 |
| `raw/self/sage/2026-08-21_220918_which-of-the-people-in-this-wiki-would-be-the-be.md` | C_path_gone | 1 |
| `raw/self/sage/2026-08-22_005829_what-would-make-dan-happy.md` | C_path_gone | 2 |
| `raw/self/youtube-watch-history/YOUTUBE WATCH HISTORY (2010-2025).html` | C_path_gone | 6 |
| `raw/self/youtube-watch-history/YOUTUBE WATCH HISTORY (2010-2026-07-20).html` | C_path_gone | 5 |
| `raw/timeline/captures/2026-08-16_145552_gap-shelbie-annie-threesome-april-2019.md` | C_path_gone | 1 |
| `raw/timeline/captures/2026-08-16_183544_gap-july-august-2026-reentanglement.md` | C_path_gone | 2 |
| `raw/timeline/captures/2026-08-16_185413_gap-robotussin-s-last-dance.md` | C_path_gone | 1 |
| `raw: raw/drive-sweep/20260911/gsheets/message-csv/imessages_2124702449_last6months.from-gsheet.imessage_2124702449_last6months.csv.csv` | C_path_gone | 1 |
| `*"raw/self/message-csv/*` | D_dir_dead | 1 |
| `https://petapixel.com/2026/06/25/less-than-a-quarter-of-americans-use-ai-to-create-or-edit-images/` | D_dir_dead | 1 |
| `https://www.pymnts.com/news/artificial-intelligence/2025/57percent-united-states-adults-use-gen-ai-millennials-pull-ahead-productivity/` | D_dir_dead | 1 |
| `raw/self/ancestry/` | D_dir_dead | 3 |
| `raw/self/ancestry/extracted/` | D_dir_dead | 2 |
| `raw/self/chats/*` | D_dir_dead | 2 |
| `raw/self/facebook/facebook-ihatedanfrank/` | D_dir_dead | 20 |
| `raw/self/facebook/facebook-ihatedanfrank/friends_and_followers/` | D_dir_dead | 1 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/` | D_dir_dead | 4 |
| `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/bruceburish_t6vdszljtq/` | D_dir_dead | 1 |
| `raw/self/facebook/facebook-ihatedanfrank/posts/` | D_dir_dead | 1 |
| `raw/self/location/2026-06-22-ingest/` | D_dir_dead | 2 |
| `raw/self/twitter/` | D_dir_dead | 1 |
| `raw/self/twitter/grok-backfill-2026-09-02/` | D_dir_dead | 1 |

### Decision boundaries (Dan's orders, unchanged)

- D3 was human review only: the 39 `confirmed unresolved` rows were NOT remapped — they joined the D4 pass. Nothing in this run guessed an ambiguous target.
- D4: no citation deleted. Every dead reference keeps its original spelling with the exact ⚠ marker beside it — "WikiBrain once pointed at this thing, but the thing isn't currently here" stays distinguishable from "WikiBrain never had evidence here".
- Per-entry machine-readable record (every page occurrence, skips, normalizations): `audit/d3d4-applied.json`.

Verification: `bin/wb-validate` clean, `bin/wiki-minimums` pass, local `bin/wb-wiki` render green, `tests/test-census` green (run pre-push in the d3d4 worktree).
