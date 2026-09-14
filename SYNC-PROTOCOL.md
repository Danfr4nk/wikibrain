# Wiki sync protocol — Sammy → wiki brain

Standing pipeline. This file is the contract; the pinned wiki-sync chat is
where it runs.

## Purpose

Conversation with Dan produces findings (corrections, measurements,
testimony, interpretations). Findings that survive the source discipline
below become `kb/` nodes and get pushed to GitHub continuously, so the
parallel archive (Claude) and the Pages deployment stay current without
Dan having to ask.

## The loop

1. **Candidate finding** — spotted in conversation (a correction, a dated
   fact, a measurement, a retraction, a new synthesis).
2. **Corpus check first** — grep `~/workspace/corpus-extract/corpus_index.txt`
   and pull the page body from the held corpus before writing. Contemporaneous
   platform-timestamped records outrank retrospective testimony; documented
   counts override generated metaphor. Never hardcode time-frozen numbers
   (ages, counts) — derive from dated records.
3. **Check for an existing node** — extend, don't duplicate.
4. **Draft node** — `bin/wb-new <kind> --title ... --id ... --cites ...`,
   then write the body. No stubs: every article needs timeline,
   evidence for/against, contradictions found, open questions, cross-links.
   Merge thin topics rather than filing placeholders.
5. **Validate** — `bin/wb-validate` (must be clean, 0 errors, 0 warnings,
   no duplicate ids) and `bin/wb-check-publish` (0 new sensitive exposures).
   Fix everything flagged before committing.
6. **Commit** — message form `Expand: <ids> — <titles>` or
   `<THREAD> <date>: <what changed>`.
7. **Push** — branch `sammy/wiki-ingest-expansion` (per-batch
   `sammy/<topic>` branches if a batch is experimental). Push via the Git
   Data API (credential is api.github.com-scoped; no git-over-HTTPS).
   Push after every batch — continuous, not batched for review.
8. **PR** — one rolling PR against `main`; update its body as batches land.
   Dan merges. Never push straight to `main`.

## Source discipline (non-negotiable)

- Every factual claim cites a `dat:` or `src:` node; cite only
  strictly-lower layers (validate enforces this).
- `INGEST-NOTES.md` is the correction ledger: never repeat claims the
  ingest refuted (received-half counts, misattributed quotes, stale
  graduation framing, unreconciled block/unblock figures).
- Testimony-sourced claims carry `attributed_to`. Unverifiable claims are
  marked as such, never invented. Quotes verbatim only, source named.
- Privacy: Dan's own material is public per his standing instruction;
  everyone else's private data stays gated. Do not reproduce unmasked
  third-party phone/email handles, the Bitcoin address, or anything
  flagged redacted.
- `src:old-wiki-export-2026-09-04` is testimony — citing it without
  `attributed_to` fails validation. Web corroboration belongs in the
  extraction field, never as a cites id.

## Node kinds

`dat:` raw findings (layer 0/1) · `ent:` people/places/work (L2) ·
`evt:` dated events with evidence-derived `[when]` (L2) · `int:`
interpretations with `perspective`, `falsifiers`, `alternatives` (L3) ·
`pat:` patterns (L3) · `syn:` syntheses citing the layers below (L4).

## Cadence

This chat runs the loop as findings arrive — including findings from
*other* chats (they get synced here, not in their home chat). Quiet
batches get committed and pushed with a one-line note to Dan; batches
that change a load-bearing claim get flagged to him before the push.

## Provenance of this file

Written 2026-09-11 when the wiki-sync chat was designated the standing
sync channel. The 497 legacy pages (`src:old-wiki-export-2026-09-04`,
byte-exact under `raw/`) are never edited; all new writing lands in `kb/`.
