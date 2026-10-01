# Batch manifest — Suz's-computer file dump (2026-10-01)

**Source:** 15 files found on Suzanne Frank's computer, handed over by Dan 2026-10-01
("save it all to wiki sources if it makes sense").
**Batch:** `raw/suz/20261001-suz-computer-dump/`
**Archived:** 2026-10-01 by Sammy (subagent eval).

## Authorship (applies to the whole batch)

Everything here was found on **Suzanne Frank's computer**. Authorship is
Suzanne Frank and/or AI tools she used — **third-party / hearsay**, never Dan's
voice. Do NOT use any of this as Dan voice samples (no stylometry). The
dossiers explicitly state they were generated from message corpora by analysis
pipelines; they are analytic products, not primary utterances.

## Per-file decisions

| # | File | What it is | Author | Decision |
|---|------|-----------|--------|----------|
| 1 | DANFRANK_ORIGIN_CORPUS_MEGAREPORT.md (30KB) | Forensic synthesis of ~60 childhood documents (Sep 1991–Nov 2001): Easter Seals clinical correspondence, standardized instruments, report cards, memory books, journals. Compiled July 2026. Carries its own provenance warning about Suz's archival selection filter. | Suz / her AI | **KEEP** — new analytic material on Dan's childhood; no existing raw/ copy |
| 2 | SUZANNE_FULL_CORPUS_0_eaax.csv → SUZANNE_FULL_CORPUS_0_eaax_FILTERED.csv (18MB, 301,462 rows kept) | Suz's iMessage/SMS export, 2013-11-18 → 2026-07-08 (2,706 threads). | Suz's phone export | **KEEP (filtered)** — see filter-log.md. 72,581 business rows excluded per the Suz-corpus business filter; 65 rows redacted per the dealer-name exclusion |
| 3 | suzanne_full_profile.txt (41KB) | Multi-system personality assessment of Suz (MBTI, Big Five, Enneagram, DISC, attachment, love languages, Jungian, Keirsey, Socionics, tritype). Derived from 153,706 sent messages, Nov 2013–Mar 2026. | Suz's AI | **KEEP** — new; analytic product, not primary data |
| 4 | suzanne_theory.docx (11KB) | "Suzanne Frank: A Theory of Everything" — long-form essay on her organizing psychology. Same 153,706-message derivation. | Suz's AI | **KEEP** — new |
| 5 | john_carney_deep_analysis.md (33KB) | Psychological analysis of John Carney drawn from 2,550+ messages, Oct 2023–Mar 2026. | Suz's AI | **KEEP** — new; third-party analysis of a third party |
| 6 | john_carney_full_report.md (33KB) | Fuller Carney report: 8,337-message corpus, cross-referenced against a "Suzanne Frank — Stylometric Self-Portrait". Describes a long-running intimate relationship (shared home entry codes, controlled substances, cash, sex, crisis care). | Suz's AI | **KEEP** — new; substantive relationship record, third-party authored |
| 7 | explaining_suzanne_to_dan.md (3.9KB) | Short AI report explaining Suz's psychology to Dan ("Survivor Logic", "Hyper-Agency"). | Suz's AI | **KEEP** — new |
| 8 | strategic_maneuvers_for_suzanne.md (3.7KB) | Tactics memo for Suz on handling Dan's avoidance ("Ghost Filter", "Micro-Lead", "Consultant Framework"). | Suz's AI | **KEEP** — new |
| 9 | dan_frank_individual_portrait.md (3.7KB) | Clinical-style assessment of Dan's cognitive architecture ("Binary Brain", "Maintenance Cycle" logic). | Suz's AI | **KEEP** — new; third-party assessment of Dan, not his voice |
| 10 | explaining_dan_to_suzanne.md (4.3KB) | AI report explaining Dan to Suz (engine mismatch, "Rick proxy" projection). | Suz's AI | **KEEP** — new |
| 11 | dan_frank_personality_dossier.md (5.4KB) | Personality dossier on Dan from 16,288 sent iMessages (2014–2026), "Brutal Honesty" protocol. | Suz's AI | **KEEP** — new; analytic product, not voice data |
| 12 | personality_dossier.md (9.1KB) | Personality dossier on Suz from 153,706 sent iMessages (Nov 2013–Mar 2026). | Suz's AI | **KEEP** — new |
| 13 | operating_manual.md (31KB) | "THE DANIEL GILLINGHAM FRANK OPERATING MANUAL v9.0 — Deep Empirical Stylometric Extraction & NLP Integration". Claims stylometric extraction on Dan's data. **Archive as third-party analysis only — never as voice/training data.** | Suz's AI | **KEEP** — new, with authorship caveat |
| 14 | taste_analysis.pdf (1.4MB, ~30pp) | "Music Taste Analysis" — long-form essay on Dan's music taste (opens with the first-girlfriend's-friends anecdote). PDF document. | Suz's AI | **KEEP** — new. Note: two Gemini-Apps JSON logs of a "taste_analysis" generation already exist in raw/takeout (takeout-20260103T040931Z-3-001/.../Gemini Apps/taste_analysis-2f53c433945ddf16, taste_analysis-abace4dc53d0b119); this PDF is a distinct finished-document artifact, not a byte-duplicate |
| 15 | danf.rtf (117KB) | Political/cultural profile of Dan (Israel/Palestine framing, moral framing, cultural positioning, epistemological approach). RTF from macOS TextEdit. | Suz's AI (macOS) | **KEEP** — new |

**Excluded files:** none. All 15 files carried keepable material; the only
exclusions are 72,581 CSV rows (business filter, logged in filter-log.md) and
65 dealer-name redactions (see below).

## Dealer-name exclusion

The excluded dealer name appeared **65 times** in the CSV (64 rows in the
Dan–Suz `dfrank88@gmail.com` thread, 1 in the `+17243664916` personal thread —
all dealer-context, e.g. arranging pickups/amounts). All 65 occurrences were
replaced with `[dealer]` in the archived copy. Zero hits in the other 14 files
(docx and PDF checked after text normalization). The name is not reproduced
anywhere in this batch. Private note of the finding kept outside the wiki.

## Notes for future editors

- The filtered CSV's `filter-log.json` carries the machine-readable exclusion record.
- `taste_analysis.pdf` relates to the two Gemini-Apps JSON logs already in
  raw/takeout; a future pass may want to cross-link them.
- The Carney reports (#5, #6) are the most fact-dense new third-party material;
  treat all claims as hearsay (Suz's AI analyzing Suz's own message selection).
