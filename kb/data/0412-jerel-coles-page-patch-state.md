+++
id            = "dat:0412-jerel-coles-page-patch-state"
layer         = 1
type          = "datum"
title         = "Jerel Coles page is unpatched: stale T2 disclaimer, 'never says yes,' and stale figures still present in both sources"
claim         = "As of the 2026-09-04 snapshot (modified 2026-08-20, exported 2026-09-04), the page `wiki/people/jerel-coles.md` is **not fully patched** against the 2026-09-09 validation findings. It carries the 'PRIMARY TRANSCRIPT FILED [2026-08-20]' box and then, directly below it, the old 'What the recording establishes' section still stating the audio *'has not been transcribed by anyone writing this wiki'* with all quotations from the T2 transcript — the page is internally inconsistent. The categorical *'and she never says yes'* survives, though the direct transcript records **'Yes, save it' at 04:43** (defeating the categorical claim; the supportable wording is that she never *freely* affirmed the allegation). The stale figures persist: fourteen phone/leave repetitions and the old timestamps. The validation report's §441 recommendation #1 — 'Patch the Jerel Coles page first. Replace the obsolete T2 disclaimer, never says yes, fourteen repetition count, and stale timestamps' — is unaddressed. Corpus page and old-wiki export are text-identical except handle/email redaction."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:morgantown-call-validation-report"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page body read directly from corpus__3.txt (wiki/people/jerel-coles.md); verified text-identical against raw/old-wiki-export-2026-09-04/whole.txt except redactions. The 'PRIMARY TRANSCRIPT FILED [2026-08-20]' box and the stale 'What the recording establishes' section coexist on the same page. The 'Yes, save it at 04:43' transcript finding is taken from the 2026-09-09 validation report (§441) extracted to /tmp/mvr.txt, which states the categorical 'never says yes' is defeated and gives the narrower 'never freely affirmed' formulation."
importance    = 5
tags          = ["people", "patch-state", "validation", "old-wiki", "stale-page"]
created       = "2026-09-09"
+++

## Why this is filed separately from dat:0257

dat:0257 records the propagation failure generally (the canonical Morgantown
event page corrected this on 2026-08-20). This datum is the page-specific
patch-state check the validation report requires: the Coles page itself still
carries the defeated claims, in both surviving copies, as of 2026-09-04.

## What the patch must do (per §441)

1. Replace the T2 disclaimer with the T0/T1 direct-transcript status and
   point to the filed transcript.
2. Replace the categorical 'never says yes' with the narrower, supportable
   finding: she never *freely* affirmed the allegation (utterance under
   withheld phone, repeated questions, threatened family disclosure).
3. Replace the fourteen-repetition count and stale timestamps with the
   transcript's figures.
4. Do not reproduce Coles's home address, phone numbers, or email in the
   patch (the page's own publish-state note already flags this for the
   operator's decision).

## Cross-references

- [`dat:0257`](0257-morgantown-call-leverage-campaign.md) — the corrected
  canonical event page and the propagation-failure note.
- [`dat:0288`](0288-forewarn-legal-table-provenance.md) — the FOREWARN legal
  table provenance (third-party background check, not docket-verified).
