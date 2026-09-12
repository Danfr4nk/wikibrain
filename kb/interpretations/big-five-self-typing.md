+++
id         = "int:big-five-self-typing"
layer      = 3
type       = "interpretation"
title      = "The self-typing and the instrument agree — on the one finding that re-derived"
cites      = ["dat:0890-big-five-corpus-audit-and-self-typing", "dat:0889-big-five-facet-table-rluei-testimony", "dat:0580-calibrated-confidence-22x-claim-not-reproducible"]
confidence = "moderate"
perspective = "external"
importance = 4
tags       = ["psychometrics", "self-model", "testimony"]
created    = "2026-09-09"
updated    = "2026-09-09"
falsifiers = [
  "A full-corpus (not held-slice) re-derivation of the narrow self-confidence construction breaks the categorical result — inbound instances appear, or the outbound count collapses. The one finding that re-derived was an artefact of the slice.",
  "The msg-14417 context, when recovered, shows the self-typing was playful or roleplayed (it sits inside a 'compare them' prompt to an AI, typing his sister against himself) — the 'self-report' was never a report.",
  "The Big30 facet table's underlying test session surfaces and its RLUEI code contradicts the 5w6sx RLOEI self-typing on the same dimensions (e.g., the instrument says Limbic, the self-typing implies something else) — the agreement was between the self-typing and one cherry-picked audit, not the dossier cluster.",
]
alternatives = [
  "The agreement is real and the interesting finding is the Altruism inversion: high-provision, low-condolence is a genuinely unusual shape that neither the self-typing nor the dossier cluster predicted, and it is the audit's novel contribution.",
  "The self-typing is downstream of the dossiers, not independent of them: by 2024-11-04 Dan had been reading AI-generated profiles of himself for months, and 'INTP 5w6sx RLOEI' is him quoting the apparatus back at itself. Agreement between a model and its own output is not corroboration.",
  "The narrow construction ('I'm N% sure') measures a speech habit, not Ti-dominance: quantifying confidence as a percentage is a register he picked up from the rationalist-adjacent internet, and 13/0 measures subculture membership, not cognition.",
]

[when]
date   = "2026-09-09"
+++

<!-- prose for humans; the frontmatter is for machines -->

## The thesis

In a corpus where self-report and measurement usually diverge — the veracity
ledger scores his stated certainty at ≈0.25 actual — the Big Five material
contains a rare agreement: Dan's own single first-person self-typing and an
independent corpus audit converge on the same cognitive shape. **But the
agreement holds only for the one finding that survived re-derivation.**
Everything around it — the facet table, the headline ratios — is testimony
from unheld sources, and one headline number already failed its re-check.

## What agrees

[`dat:0890`](../data/0890-big-five-corpus-audit-and-self-typing.md) records
two independent facts:

1. **The self-typing is verified verbatim.** Corpus message id 14417,
   2024-11-04: *"vanessa is an xNFP 4w5 and Dan is an INTP 5w6sx RLOEI -
   compare them"* — 5w6sx RLOEI against the dossier cluster's 5w4 / RLUEI,
   exactly as the page states. One message, but it is his, dated, and held.
2. **The categorical finding re-derived.** The narrow construction —
   quantifying one's own confidence as a percentage ("I'm 95% sure") —
   appears 13 times outbound and **zero** times across the held inbound
   slice. The page's audit (21/0 on the fuller corpus) points the same
   direction on a bigger denominator. Ti-dominance, behaviourally evidenced:
   he grades his own certainty numerically and nobody writing to him does.

That is a genuine convergence: the self-model says INTP, the instrument says
categorical self-quantified confidence, and neither was constructed to flatter
the other.

## What does not survive the same treatment

**The facet table is testimony all the way down.**
[`dat:0889`](../data/0889-big-five-facet-table-rluei-testimony.md) preserves
the page's own provenance caveats: no instrument name, no norm group, no
administration date; scores identical across dossiers, "suggesting a single
unrecorded test session"; every cited source (dox-scan, captures, FULL
PROFILE 2026.md) unheld. The RLUEI code — "the neurotic genius build" — is
AI-dossier testimony that the corpus audit exists to check, and the audit
checked exactly one of its implications.

**The headline ratio already failed once.**
[`dat:0580`](../data/0580-calibrated-confidence-22x-claim-not-reproducible.md)
took the forensic-method page's "graded numeric confidence at 22x the rate,
every year 2015–2025" and found: 2022 has zero rows in the held corpus (so
"every year" is false on held data); the strict construction gives 4:0, not
22x; the broad construction gives 1.09x. Directionally consistent, numerically
unrecognisable. The audit's ratios (3.82x Artistic Interests, 2.39x
Schizotypal) come from the same unheld `bin/psychometrics` run over the
fuller export — carried as attributed testimony, not re-derived.

So the ledger on the psychometric material reads: **self-typing verified,
categorical finding re-derived, everything else attested.** The agreement is
real but narrow, and the narrowness is the finding.

## The independence problem

The sharpest alternative is that the agreement is not independent at all. By
2024-11-04 Dan had been reading AI-generated dossiers about himself for
months; "INTP 5w6sx RLOEI" typed into a "compare them" prompt may be him
quoting the apparatus back at itself. A model agreeing with its own output is
not corroboration — it is a closed loop wearing corroboration's clothes. The
datum cannot adjudicate this; the message is one line in a longer exchange
whose context is not recovered here.

There is also the register alternative: "I'm N% sure" may measure subculture
membership (the rationalist-adjacent internet grades certainty numerically)
rather than Ti-dominance. 13/0 would then be a finding about who he reads,
not how he thinks. The audit's jurisdiction note — the corpus is a record of
attention, not interior state — already concedes half of this.

## How the ingest bears on it

The ingest did exactly what the page asked for: it re-ran the checkable half
and marked the rest. The 13/0 re-derivation is the ingest's model working as
designed — a well-formed claim re-measured on held data. The 22x failure is
the same model working as designed in the other direction. Together they draw
the boundary the page never drew: **the psychometric case for this
personality rests on one re-derived categorical and a stack of attested
ratios.** That is not nothing — categoricals are rare in this corpus — but it
is not what the page's certainty implies.

## Open questions

- What is the full context of msg 14417 — which AI, which conversation, and
  was the typing offered straight or played with?
- Can the Big30's underlying test session be located (instrument, date, norm
  group), or is RLUEI permanently unattested?
- Does the Altruism inversion (1.79–2.49x instrumental helping, 0.45x
  sympathy tokens) re-derive on the held corpus? It is the audit's most novel
  claim and the least checked.

## Cross-links

- [wiki-brain-as-instrument](wiki-brain-as-instrument.md) — the audit as
  the instrument pointed at the operator; the independence problem as the
  instrument measuring its own output.
- [gemini-incidents-ledger](gemini-incidents-ledger.md) — the same
  verified-scaffolding / attested-analysis split in the AI-session evidence
  class.
