# Expansion plan — upper layers (2026-09-09)

Goal: build the L2/L3/L4/L5 article set — the actual new wiki — on top of the
completed ingest (497/497 pages, 702 dat nodes dat:0059–1403, all validated).

**Standing rule:** the 497 legacy pages are preserved sources
(`src:old-wiki-export-2026-09-04`, byte-exact under `raw/`). Expansion writes
NEW article-nodes in `kb/` only. Sources are never edited.

## Source discipline for all workers

- Every factual claim cites a `dat:` or `src:` node. Cite only strictly-lower
  layers (validate enforces this).
- `INGEST-NOTES.md` is the correction ledger: do not repeat claims the ingest
  refuted (received-half counts, misattributed quotes, stale graduation
  framing, unreconciled 127/110 vs 129/128 block-unblock figures).
- Contemporaneous platform-timestamped records outrank retrospective
  testimony; documented counts override generated metaphor. NEVER hardcode
  time-frozen numbers — derive ages/counts from dated records.
- Testimony-sourced claims carry `attributed_to`. Unverifiable claims are
  marked as such, never invented. Quotes verbatim only, source named.
- Privacy: Dan's own material is public per his standing instruction; 498
  other people's private data stays gated. `bin/wb-check-publish` must pass
  with 0 new sensitive exposures. Do not reproduce unmasked third-party
  phone/email handles, the Bitcoin address, or anything flagged redacted.
- Cross-reference related nodes (`dat:`, `ent:`, `evt:`) as existing articles
  do. Check for an existing article on your topic first — extend, don't
  duplicate.
- No stubs. Every article needs: timeline, evidence for/against,
  contradictions found in ingest, open questions, cross-links. Merge thin
  topics rather than filing placeholders.
- After writing: `bin/wb-validate` on each file, `bin/wb-check-publish`;
  fix everything flagged. Commit: `Expand: <ids> — <titles>`.
- Node creation: prefer `bin/wb-new <kind> --title ... --id ... --cites ...`
  then write the body, or copy frontmatter structure from an existing article
  in the same layer exactly (id prefix `ent:`/`evt:`/`int:`/`pat:`/`syn:`).

## Wave 1 — Entities (people + places/work) — 5 workers × 8

| Worker | Domain | Exclusive id block |
|---|---|---|
| E1 | core family + primary attachment | `ent:annie-ulmer`, `ent:suzanne-frank`, `ent:rick-frank`, `ent:frances-coldren`, `ent:vanessa-frank`, `ent:diane-moore`, `ent:lisa-frank`, `ent:ally-lubin` |
| E2 | romantic line + Ulmers + primary male friend | `ent:alexis-armel`, `ent:danielle-onesi`, `ent:jerel-coles`, `ent:kristin-prentiss`, `ent:ellen-ulmer`, `ent:bill-ulmer`, `ent:claire-ulmer`, `ent:tom-maison` |
| E3 | friends | `ent:jerad-friedline`, `ent:jason-bermejo`, `ent:dan-polyak`, `ent:josh-brannan`, `ent:alex-frank`, `ent:eric-jester`, `ent:matt-kraus`, `ent:jack-rusko` |
| E4 | Au Za'atar crew + orbit | `ent:dimitri`, `ent:tarik-fallous`, `ent:ismaila-barry`, `ent:manuel`, `ent:valeria-iglesias-cid`, `ent:shelbie-breakiron`, `ent:jay-lauer`, `ent:new-jim-shaffer` |
| E5 | pets + places + work entities | `ent:milo`, `ent:gabe`, `ent:au-zaatar`, `ent:nemacolin`, `ent:full-sail`, `ent:seven-springs`, `ent:morgantown-st-463`, `ent:gripnotic` |

Status: complete 2026-09-09. 40 entities committed (E1–E5), wb-validate clean (775 nodes, 0 errors, 0 warnings), wb-check-publish 368 pre-existing problems / 0 new from entities, no duplicate ids. Lessons: `bin/wb-new --id` takes the bare slug (it prefixes the kind itself); canonical filenames are `<slug>.md`; workers must `git add` only their own id-block files (shared working tree).

## Wave 2 — Events (~44) — 5 workers

| Worker | Domain | ids (extend, don't duplicate, existing `evt:` nodes) |
|---|---|---|
| V1 | origins / early | `evt:2005-11-parental-rupture`, `evt:2009-09-full-sail-graduation`, `evt:2010-02-17-suboxone-start`, `evt:2015-02-possession-arrest` (exists — extend), `evt:2015-11-alexis-evicted`, `evt:2015-11-annie-relationship-starts`, `evt:2016-02-ard-granted`, `evt:2017-2018-fran-caregiving`, `evt:2018-fran-death` |
| V2 | NYC / work / legal | `evt:2019-02-dui-1`, `evt:2021-03-au-zaatar-hired`, `evt:2021-22-valeria-affair`, `evt:2024-06-dui-2`, `evt:2024-08-au-zaatar-exit`, `evt:2024-10-mom-chapter-13`, `evt:2025-10-dui-stop`, `evt:2026-08-bfs-firing`, `evt:2026-08-11-bfs-rehire-offered` |
| V3 | Annie arc | `evt:2025-08-kristin-starts`, `evt:2025-11-kristin-ends`, `evt:2026-05-jerel-coles-entanglement`, `evt:2026-06-01-annie-closure`, `evt:2026-08-16-annie-terminal-end`, `evt:2026-08-19-august-grievance-verdict`, `evt:2026-08-23-attachment-model-resolved`, `evt:2026-12-19-severance-horizon` |
| V4 | housing / money / culture | `evt:2026-06-saratoga-sold`, `evt:2026-morgantown-st-move`, `evt:2026-estate-advances`, `evt:2026-03-grok-build-imessage-spam`, `evt:2025-12-message-spike`, `evt:2026-08-ally-reads-wiki`, `evt:2017-josh-brannan-reconnection`, `evt:2026-09-01-rick-silence-breaks` |
| V5 | meta / rebuild | `evt:2026-08-14-extraction-correction`, `evt:2026-09-04-old-wiki-snapshot`, `evt:2026-09-09-graduation-correction-published`, `evt:2026-09-09-morgantown-call`, `evt:2026-09-09-morgantown-validation`, `evt:2026-09-09-ingest-complete`, plus extend: `evt:2026-09-08-rebuild-begins`, `evt:2026-09-08-corpus-supersedes-fragments`, `evt:2026-09-09-wikitest-rebuild`, `evt:2026-09-09-privacy-cut-as-epistemic-concern`, `evt:2026-09-09-edge-rework` |

Every event must carry a `[when]` block derived from dat: evidence. Derive
dates from the evidence; do not guess.

Status: complete 2026-09-09. 44 events committed (V1–V5), wb-validate clean (814 nodes, 0 errors, 0 warnings), 0 new publish exposures, no duplicate ids. Coordinator rename: evt:2026-08-bfs-firing → evt:2026-05-bfs-firing (evidence is May 2026; cross-refs updated). evt:2026-03-grok-build-imessage-spam slug kept: May-31 vs June-22 ambiguity genuine, documented in-article. Substantive flag for operator: 2025-10-26 stop docket names Annie (MJ-14101-CR-0000631-2025) — UJS lookup settles attribution.

## Wave 3 — Interpretations (~32) + Syntheses (~10) — 5 workers

| Worker | Domain | ids |
|---|---|---|
| I1 | epistemics | `int:core-axioms-vs-message-evidence`, `int:confidence-calibration-ledger`, `int:diagnosis-to-behavior-gap`, `int:suboxone-record-as-system`, `int:testimony-that-explains-residue`, `int:received-half-count-pattern`, `int:stale-propagation`, `int:corrections-dont-propagate` |
| I2 | relationship psychology | `int:attachment-model-129-exits`, `int:rescue-premise-retraction`, `int:block-as-first-held-boundary`, `int:severance-horizon-test`, `int:coaching-script-reversal`, `int:annie-decade-control-case`, `int:august-grievance-verdict-reading`, `int:hyperreflexivity` |
| I3 | work / money / identity | `int:chemical-architecture-engineered`, `int:work-identity-au-zaatar`, `int:money-estate-reading`, `int:contact-gini-0-9556`, `int:texting-deviance-audit`, `int:bfs-firing-sequence-correction`, `int:seven-springs-identity`, `int:threat-model` |
| I4 | meta / culture | `int:wiki-brain-as-instrument`, `int:publication-as-defence`, `int:corpus-scale-privacy`, `int:doorposts-novel`, `int:concert-record-as-archive`, `int:film-canon-obligation`, `int:big-five-self-typing`, `int:gemini-incidents-ledger` |
| S1 | syntheses | `syn:annie-decade`, `syn:suboxone-16-years`, `syn:operator-threat-model`, `syn:nyc-years-2010-2025`, `syn:money-and-estate`, `syn:family-system`, `syn:full-sail-pipeline`, `syn:wiki-brain-instrument`, `syn:severance-2026`, `syn:gripnotic-revival` |

Interpretations need `perspective` (self/external/llm), `falsifiers`, and
`alternatives` like the existing ones. Syntheses cite the layer below them
(interpretations, patterns, events) plus the dat nodes.

Status: complete 2026-09-09. 32 interpretations (I1–I4) + 10 syntheses (S1) committed, wb-validate clean (856 nodes, 0 errors, 0 warnings), 0 new publish exposures, no duplicate ids.

## Coordination log

- 2026-09-09: plan committed. Wave 1 dispatched (E1–E5).
- 2026-09-09: wave 1 complete — 40 entities, validate clean, 0 new publish exposures. Wave 2 dispatched (V1–V5).
- 2026-09-09: wave 2 complete — 44 events; coordinator rename evt:2026-08-bfs-firing → evt:2026-05-bfs-firing; grok-build slug kept (genuine ambiguity). Wave 3 dispatched (I1–I4, S1).
- 2026-09-09: wave 3 complete — 42 articles. EXPANSION DONE. Final state: 856 nodes (L0:13 L1:702 L2:88 L3:39 L4:3 L5:11), 44 edges, validate clean, 368 pre-existing publish problems / 0 new from upper layers.
