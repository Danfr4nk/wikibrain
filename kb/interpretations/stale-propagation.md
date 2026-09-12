+++
id           = "int:stale-propagation"
layer        = 3
type         = "interpretation"
title        = "Staleness is a direction, not a state: evidence moves, pages freeze, and the page's own date is the only detector"
perspective  = "llm"
cites        = ["dat:1296-rescue-premise-stale-latency-model",
                "dat:1292-block-unblock-loop-severance-recount-129-128",
                "dat:0412-jerel-coles-page-patch-state",
                "dat:0125-end-fight-stale-attribution",
                "dat:0058-graduation-september-2009-then-audit-and-certification",
                "dat:1032-context-core-staleness-audit-2026-08-16",
                "dat:1344-tuquick-june15-defection-partially-verified",
                "dat:0362-timeline-index-rollup-stats-stale"]
confidence   = "high"
importance   = 4
created      = "2026-09-09"
rechecked    = "2026-09-10"
tags         = ["epistemics", "staleness", "old-wiki", "method"]
falsifiers   = [
  "A propagation pass closes every named instance — Coles patched per validation §441, end-fight.md re-attributed, the rescue-premise re-based on the corrected latency tables, the block-unblock page reconciled, the Full Sail page updated to September — with dated blocks recording each. The instances would then be historical, not structural.",
  "Pages adopt evidence-version headers naming the corpus pull and correction-set they were written against. The detector would then be built in rather than forensic, and 'stale by N days' would be computable rather than discovered.",
  "The dat: layer is shown to fully supersede the pages it corrects — i.e., readers demonstrably meet the dat: node before the stale page. Staleness would then be a property of the old wiki only, not of this system.",
]
alternatives = [
  "Snapshot discipline: pages are dated artefacts and staleness is their honest state. The fix is not rewriting pages but reading the dat: layer as the current stratum — which is arguably the wikitest architecture already.",
  "What looks like staleness is actually deliberate versioning: the old wiki kept superseded figures visible as audit trail (the block-unblock page carrying both 127/110 and 129/128). The failure is then presentation — no 'superseded' flag — not updating.",
]

[when]
date = "2026-09-09"
+++

## The thesis

Staleness in this wiki is not a state — it is a direction. Evidence moves;
pages freeze. Every instance in the ingest has the same temporal structure: a
correction exists at time T, a page written or snapshotted at time T+N still
carries the pre-correction version, and nothing in the architecture marks the
gap. The page's own date is the only detector, because no page carries its
evidence-version.

## The instances, by page type

**People page.** Jerel Coles: the canonical Morgantown event page corrected the
"never says yes" categorical on 2026-08-20 (the transcript has "Yes, save it"
at 04:43); the Coles people page, snapshotted 2026-09-04, still carries the
defeated categorical, the stale T2 disclaimer, the fourteen-repetition count
and the old timestamps. Validation report §441 recommendation #1 unaddressed
([`dat:0412`](../data/0412-jerel-coles-page-patch-state.md)).

**Event page.** end-fight.md: the main Annie page corrected the June 1 exit-line
attribution on 2026-08-13 — "sic semper lupanis" is Dan's line, not Annie's;
the event page still presents it as Annie's, inverting the closure's agency
([`dat:0125`](../data/0125-end-fight-stale-attribution.md)). One month, two
pages, opposite states.

**Synthesis page.** The rescue-premise: dated 2026-08-28, it reads the 72-minute
SOS sequence through the latency asymmetry the latency page retracted on
2026-08-15 — stale by thirteen days, "not by interpretation"
([`dat:1296`](../data/1296-rescue-premise-stale-latency-model.md)). The
thirteen days are measurable because both dates are printed; that is the
detection method, and it only works when both ends are dated.

**Synthesis page, internal.** The block-unblock loop carries the stale 127/110
figures beside the 129/128 recount — "neither figure may be quoted without the
other" ([`dat:1292`](../data/1292-block-unblock-loop-severance-recount-129-128.md)).
The correction arrived and the old text was not removed: staleness *inside* a
single page.

**Hub page.** The Context Core ran a dated 2026-08-16 staleness audit correcting
seven claims in place — and has itself since gone stale in the same way it
describes ([`dat:1032`](../data/1032-context-core-staleness-audit-2026-08-16.md)).
The audit is the mechanism and the patient.

**Counts.** Timeline/index rollup stats drift against the master timeline
([`dat:0362`](../data/0362-timeline-index-rollup-stats-stale.md)); the tuquick
recount moved from 354 to 297 when pre-compaction scans turned out to be stale
([`dat:1344`](../data/1344-tuquick-june15-defection-partially-verified.md)).
Even the tuple counts have a freshness date.

**Graduation.** The operator's September-2009 correction
([`dat:0058`](../data/0058-graduation-september-2009-then-audit-and-certification.md))
exists in this repository; the Full Sail page still prints the August date it
contradicts. The newest correction in the system, already stale at its target.

## The wiki's own failure classes

The Context Core audit named two recurring classes: numbers right about one
file but wrong about the corpus, and hardcoded ages that silently expire
([`dat:1032`](../data/1032-context-core-staleness-audit-2026-08-16.md)). Both
are staleness with different clocks — one expires when the corpus is re-pulled,
the other when time passes. The audit's own open set (Annie status past
2026-08-09, Morgantown move-in date, the Arnu lien) was marked open, not
guessed — which is the correct posture, and also why the audit decayed: open
items are invitations for evidence to arrive, and arriving evidence does not
re-open the audit.

## How this bears on reading the wiki

The practical rule: **a page's claims are claims about the evidence available
at the page's date, and the page's date is the newest thing you know about
them.** [`dat:1296`](../data/1296-rescue-premise-stale-latency-model.md)'s
method — compare the page's date against the dependency's correction date —
generalizes to every page. Where the dependency's correction is undated, the
method fails silently; that is the case to worry about, because it looks like
currency.

## Open questions

- Is the fix propagation (push corrections to quoters) or versioning (pages as
  dated artefacts, dat: nodes as the current layer)? See
  [`int:corrections-dont-propagate`](corrections-dont-propagate.md) for the
  mechanism argument; this node documents the lifecycle.
- Which pages does any given reader meet first — the stale page or the
  correcting datum? The whole question of whether staleness is harmful or
  merely untidy turns on read order, and read order is unmeasured.
