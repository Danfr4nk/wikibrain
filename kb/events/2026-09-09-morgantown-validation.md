+++
id         = "evt:2026-09-09-morgantown-validation"
layer      = 2
type       = "event"
title      = "The independent validation report on the Morgantown St call is ingested"
cites      = ["src:morgantown-call-validation-report", "dat:0168-morgantown-call-source-amendment-artifact-verified", "dat:0257-morgantown-call-leverage-campaign", "dat:0412-jerel-coles-page-patch-state"]
confidence = "high"
importance = 5
tags       = ["meta", "morgantown-call", "validation"]
created    = "2026-09-09"

[when]
date   = "2026-09-09"
+++

<!-- prose for humans; the frontmatter is for machines -->

## What happened

On 2026-09-09 an independent forensic validation report on the Morgantown
St call recording — `morgantown-call-validation-report.pdf`, 165,084
bytes, 6 pages — was ingested as
[`src:morgantown-call-validation-report`](../sources/morgantown-call-validation-report.md)
(from the operator's own files; the PDF is dated 2026-09-09). Its
determination, per the ingest's read of the PDF: **the primary evidence is
substantially validated.**

## The determination, in full

| assertion | verdict |
| :--- | :--- |
| Artifact identity holds | duration, Voice Memos identifier, MD5 and SHA-256 match the Source Amendment record |
| Core conduct holds | independent pass corroborates the phone search, the interrogation, the repeated exit demands, the offer to drive, the parental-disclosure threat |
| One assertion fails | on the **Jerel Coles page**: the categorical "never says yes" wording — defeated by "Yes, save it" at 04:43; the supportable wording is that she never *freely* affirmed the allegation |
| Two boundaries remain | it does not prove the file unedited; it does not independently verify speaker identities |

It also does not resolve the alleged assault, nor settle whether the
audio was sent ([`dat:0257`](../data/0257-morgantown-call-leverage-campaign.md)
for the sent/not-sent contradiction).

## Why the failing assertion matters more than the validation

The validated material mostly confirmed what the repository already
held. The *one failing assertion* is the load-bearing output, because it
exposed a **correction that had not propagated**: the canonical event
page had corrected "never says yes" on 2026-08-20, but the Jerel Coles
people page — the page the validation report §441 names explicitly —
still carries the categorical wording, the stale T2 disclaimer, the
fourteen-repetition count and the stale timestamps in the 2026-09-04
snapshot
([`dat:0412`](../data/0412-jerel-coles-page-patch-state.md)).
Recommendation #1 — "Patch the Jerel Coles page first" — is unaddressed.

That is the propagation pattern the ingest found everywhere: corrections
live where they were made and never travel to the pages that quote the
claims. The report turned the pattern into a named repair order.

## Contradictions surfaced

- The independent 175-segment STT pass and the direct transcript both
  contradict the Coles page's categorical claim while the page survives
  in both surviving copies of the wiki — the strongest possible
  corroboration of a propagation failure, since two independent
  transcript passes agree against one stale page.
- The report corroborates *conduct* (phone search, interrogation, exit
  demands) but leaves *attribution* (which voice is whose) to the
  diarization — a boundary the report states rather than smuggles past.

## Open questions

- The flag for the operator: the Coles page patch must happen in the wiki
  source itself — the report's §441 rec #1 is still open.
- The Coles-page patch must not reproduce his home address, phone
  numbers, or email (the page's own publish-state note; privacy machinery
  stays gated).
- Speaker identities remain acoustically unverified; the assault allegation
  and the sent/not-sent question stay unresolved on the record.
