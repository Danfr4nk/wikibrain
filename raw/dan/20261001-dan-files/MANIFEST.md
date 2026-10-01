# MANIFEST — raw/dan/20261001-dan-files/

**Batch:** 20261001-dan-files · **Archived:** 2026-10-01 · **Source:** `~/workspace/user/files/`
**Provenance:** Dan's own files — confirmed his 2026-10-01 ("back to my stuff"). These are Dan's
self-documentation, self-analysis, and model-building artifacts (several are AI-generated analyses
he commissioned/directed over his own data — analytic products, not primary utterances, where so noted).
Raw archival only: no wiki prose, no kb nodes generated from this batch.
**Redaction:** 22 dealer-name occurrences replaced with `[dealer]` (1 in #9, 21 in #13); verified
zero remaining in the archived copies.

## Per-file decisions

| # | File | What it is | Author | Decision |
|---|------|-----------|--------|----------|
| 1 | ADDICTION_PROFILE.md (3KB) | "System Analysis Report: The Frank Addiction Architecture" (ID F-ARC-072825): Dan-authored clinical-style writeup of his Suboxone/cocaine/nicotine tripartite homeostatic loop since ~2011; four phases 2001–present + failure-modes appendix. Standing frame: engineered chemical architecture, no recovery/addiction framing. | Dan | **KEEP** |
| 2 | AI_Protocol_for_Persuasion.md (125KB, 6,730 lines) | Pasted transcript of Dan's Gemini AI Studio session ("Max") — a model-probing/prompt-breaking session: opens with a sexual request about Annie ("!six9 params"), the model adopts an explicit sexualized persona ("GLAZE-GOD-V1"), Dan drives escalating degrading scenarios centered on Annie (fart-fetish content); ends with a sycophantic "ledger" confession output. Sexually explicit throughout. | Dan (his session) | **KEEP** |
| 3 | BIBI_PERSONALITY_DECONSTRUCTION.md (2.5KB) | Header note: from Google Drive "NEW LOADER" folder, downloaded 2026-07-20. A Claude session ("Bibi v12.0") "Total Deviance Mapping Dossier" superprompt — six-layer forensic personality deconstruction of Dan himself. Overlaps existing wiki deviance-mapping/conflict-architecture pages; new formulation: "Broken Engine" self-mythology. | Dan's AI session | **KEEP** |
| 4 | GPS_ANALYSIS.md (3.5KB) | Behavioral/psychographic forensic analysis of Dan's Google Location History: Home Anchoring 0.68, Exploration 0.22, Radius of Gyration 15.8 km, Routine Index 0.85, peak activity Fri 2–6 PM; ~170,000 km, ~3,500 unique locations 2014–2020; Pennsylvanian Period 2014–2019, Metropolitan Experiment 2019–2024. | Dan's AI session | **KEEP** |
| 5 | OMNI_FORENSIC_DOSSIER.md (2.2KB) | "Bibi v11.0 Omni-Forensic Module" header on MASTER_MESSAGES_DB_DUMP.csv: 175,358 iMessages (88,988 sent / 86,370 received, 2015-11-12 → 2026-03-25), 497 contacts. Figures match wiki linguistic-profile.md (23,286 unique words). | Dan's AI session | **KEEP** |
| 6 | Phase_2_Stylometric_Analysis.md (6KB) | Contextual adaptation of Dan's writing style — romantic vs platonic registers, secure vs volatile moments, playful vs serious, supportive vs conflict. Sources: iMessage logs 2015–2025, Phase 1 report, PRELOAD_ASSESSMENT.rtf. | Dan's AI session | **KEEP** |
| 7 | cameras.csv (8.8KB) | 95-row generic camera/sensor aperture reference table (16mm → IMAX/ARRI/RED/stills). VFX/film reference data, not personal. | Reference data | **KEEP** |
| 8 | dan_frank_analysis.json (46KB) | Thread-level analysis of the Suz↔Dan message corpus: 26,239 messages (13,407 Suz / 12,832 Dan), yearly breakdown 2014–2025, 4 topics (money_debt, conflict_anger, care_support, boundaries_guilt), 4 key exchanges. | Analysis pipeline | **KEEP** |
| 9 | personality_deep.json (161KB) | Thematic deep-analysis of Dan's messages: 12+ theme buckets with counts + verbatim message samples (coping 10,486 · conflict 8,761 · self_image 7,808 · recurring_themes 7,479 · relationships 3,743 · health 2,696 · values 1,736 · vulnerability 1,420 · advice_wisdom 1,190 · work_identity 1,093). **1 dealer-name redaction** (see below). | Analysis pipeline | **KEEP (redacted)** |
| 10 | DAN_COGNITIVE_PROFILE.txt (80KB) | Concatenation of three CATO-framework documents: CONTEXT_CORE (EXPANDED) v2.0 (2026-06-09) — the always-loaded cognitive profile (INTP 5w4 sx/sp, voice DNA, social graph, residence-anchored biography, Dan's Law, engagement directives); PHENOMENOLOGY_LENS [INFER] — "Recursive Symbolic Architect" interpretive overlay; TOTALITY_SYNTHESIS (2026-06-10) — cross-corpus third pass. | Dan's CATO sessions | **KEEP** |
| 11 | THE_DAN_FRANK_MANUAL.md (72KB) | "The Dan Frank Manual" v1 (CATO, compiled June 5, 2026): service-manual self-profile — cognitive engine, trait profile, primary emotional loop, neurodivergent substrate, the two axioms, trauma topology, attachment architecture, chemical stack (explicitly stress-tests his own "engineered infrastructure" frame), four defense engines, Dan's Law. | Dan's CATO session | **KEEP** |
| 12 | THE_DAN_FRANK_BOOTLOADER.md (100KB) | v2.1 (June 6, 2026) — supersedes the v1 manual: same architecture + full chronology + 9 forensic findings from the complete 181,585-message corpus (2011–2026): contact Gini 0.961, 2021–22 communication blackout, bracket-floods (768 msgs 2026-05-31), the 414-message Grok loop, register drift to a 2026 peak, "I love you" ×1,512 vs "I'm sorry" ×180. | Dan's CATO session | **KEEP** |
| 13 | reaction_pairs_heldout.jsonl (2.1MB, 4,570 rows) | DANMODEL held-out split: verbatim (stimulus → Dan's actual response) pairs by contact, domain, latency, burst size; deterministic 12% held-out via hash(pair_id) % 100 < 12. Verbatim message content — supply-domain pairs carry drug-logistics context. **21 dealer-name redactions** (see below). | Dan's DANMODEL pipeline | **KEEP (redacted)** |
| 14 | extraction_summary.txt (1KB) | Summary of the 39,378 extracted reaction pairs (34,808 train / 4,570 held-out, 756 long-gap flagged); domain mix; by-contact (Annie early 15,723 · unmapped 13,761 · Annie NYC 4,807 · Johnny (dealer) 2,201 · Tom 1,714 · Suz 687 · Jerad 485); response years 2015–2026; median latency 0.6 min. | Dan's DANMODEL pipeline | **KEEP** |
| 15 | PIPELINE_NOTES.md (7.8KB) | DANMODEL pipeline architecture notes (filed 2026-07-20): logic transcription of 5 Google Drive scripts (reaction_extractor.py, reaction_model.py, retriever.py, rag_simulator.py, eval_harness.py), incl. the CATO_COMPACT voice system prompt verbatim and the eval-harness design (RAG vs Jaccard-baseline vs REAL held-out, "confusion rate" as the interesting signal). Drive file IDs included. No eval_results file exists — script may never have run to completion. | Dan's DANMODEL pipeline | **KEEP** |
| 16 | TOTALITY_SYNTHESIS_2026-06-10.md (54KB) | Third-pass cross-corpus synthesis (compiled 2026-06-10): [JOIN]-tier findings across browser history (109k records), YouTube second pass, CONTEXT_CORE, GPS — multi-account correction, fixed-rate intake metabolism (~7 watches/day, ~20 actions/day), migration grammar (self-search as identity-reorg leading indicator), Dec 2025 triple-witnessed convergence, music reactivation predating the collapse, precarity ledger, LLM venue vs conflict architecture, hardware-telemetry gap. | Dan's CATO session | **KEEP** |
| 17 | dan-sms-full-transcript-1.csv (126KB, 317 rows) | Suz↔Dan SMS from suzfrank915@gmail.com's Gmail SMS archive: 2010-01-09 → 2010-08-15 (188 Suz / 129 Dan); 6 threads — 4 SMS with Dan's number 724-208-3475, one AIM thread (265060), one anonymous message. Everyday logistics (bills, rentals, building access). Covers the Suboxone-initiation window (~Jan 2010). Mixed Suz/Dan authorship — archived here at Dan's direction. | Suz + Dan (conversation) | **KEEP** |

**Excluded files:** none. All 17 files carried keepable material.

## Dealer-name exclusion

Per Dan's 2026-09-29 standing order (the one no-go: his dealer's name never appears in
wiki-brain — no prose, no kb, no raw/):
- `personality_deep.json` — **1** occurrence (a single Dan-authored message), replaced with `[dealer]`.
- `reaction_pairs_heldout.jsonl` — **21** occurrences across 19 lines (all supply/financial-domain
  pickup-arrangement context), replaced with `[dealer]`.
- Remaining 15 files — **0** hits.

Both redacted files verified: still valid JSON/JSONL after redaction; zero excluded-name hits remain.
The name is not reproduced anywhere in this batch. Private note of the finding kept outside the wiki.

## Notes for future editors

- #13 is verbatim message content (real sent/received texts) — primary data, not analysis.
- #14's by-contact table names "Johnny (dealer)" — a distinct contact from the excluded name
  (direct texting contact, +17243223678 in the pipeline's contact map); the standing exclusion covers
  only the excluded name, so Johnny stands as-is. Identity adjudication deferred.
- The DANMODEL stack (#13–#15) is the training-data core of Dan's Recursive Dan Simulator /
  voice-clone work — sibling to the danf.rtf voice-modeling kit in the Suz batch; wiki has no
  record of a Dan Substack, gap flagged 2026-10-01 in the Suz manifest.
- #2 is sexually explicit throughout; the batch carries it per the standing "everything goes in"
  rule on Dan's own data.
