# EXTRACT — batch 20260911-2113 (catch-up ingest of previously-missing artifact documents)

Operator-approved 2026-09-11 in the wiki-sync chat: ingest artifact documents
that were on disk but never ingested into the wiki brain.

Source documents (all raw-captured under raw/sammy/20260911-2113/, sha256 in manifest.json):

| Doc | Nodes |
|---|---|
| PLAYLIST_ANALYSIS.md (taste forensics, MUSIC THREAD 2026-09-11) | src:taste-forensics-20260911; dat:0076, 0077, 0078; pat:taste-as-filter-stack; int:lyric-qualifier-frame |
| Morgantown St Call Analysis.md (three-participant analysis) | src:morgantown-call-analysis-2026; dat:0080 |
| morgantown-call-validation-report.pdf (forensic validation 2026-09-09) | src:morgantown-call-validation-2026-09-09; dat:0079 |
| explicit-commitments-why-dans-not-close.pdf (corpus-derived letter to Annie) | src:explicit-commitments-letter-2026-09-11; dat:0081 |
| stylometry-baseline.md (fingerprint v1, 94,503 iMessages) | src:stylometry-baseline-2026-09-11; dat:0082 |
| wiki-llm-daily-driver-draft.md (LLMs-as-infrastructure vs cohort) | src:llm-daily-driver-draft-2026-09-09; dat:0083 |
| log-limitation-findings.md (paint-by-numbers harness) | src:log-limitation-findings-2026-09-11; dat:0084 |

Entities created/extended:
- ent:dan extended: taste filter stack, explicit-verbal-commitment architecture,
  stylometric fingerprint, LLM infrastructure posture, harness-limitation findings
- ent:annie-ulmer extended (dated appends per the Annie rule): morgantown validation,
  three-participant analysis, explicit-commitment letter severance sequence
- ent:jerel-coles created: validated call findings + correction of the stale
  "never says yes" claim (per the 2026-09-09 validation report's propagation audit)

Totals: 7 raw files, 7 sources, 11 datums, 1 pattern, 1 interpretation,
1 entity created, 2 entities extended.

Integrity notes:
- The annie-ulmer-agent.md / annie-ulmer-human.md editions in ~/workspace/your_files/
  are exports FROM the 2026-09-04 wiki snapshot, not new primary material; their novel
  content (fallout verdict, personality assessment) is in wikitest, not yet ported.
- dat:0078 corrects the v1 42.3% liked-to-crate estimate to 91.3% (direct measurement);
  the earlier figure is preserved in the raw archive, not edited.
