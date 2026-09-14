+++
id           = "int:corrections-dont-propagate"
layer        = 3
type         = "interpretation"
title        = "The wiki corrects pages, never quoters: a correct page-local operation with no propagate step, known and unfixed"
perspective  = "llm"
cites        = ["dat:0125-end-fight-stale-attribution",
                "dat:0257-morgantown-call-leverage-campaign",
                "dat:0412-jerel-coles-page-patch-state",
                "dat:0673-jay-lauer-direction-and-count-corrections",
                "dat:0622-attachment-model-129-episodes-resolution-withdraws-110-127",
                "dat:1032-context-core-staleness-audit-2026-08-16",
                "dat:1292-block-unblock-loop-severance-recount-129-128",
                "dat:0058-graduation-september-2009-then-audit-and-certification"]
confidence   = "high"
importance   = 4
created      = "2026-09-09"
rechecked    = "2026-09-10"
tags         = ["epistemics", "correction", "old-wiki", "method"]
falsifiers   = [
  "A correction is observed propagating: the Context Core's Tom/Kristin reassignment (the 2.9x corpus-weight error) reaches the pages that quoted the overstated figure, with dated blocks recording the update. One propagated correction breaks 'never'.",
  "The dat: layer is shown not to decay — i.e., dat:0064's needed amendment (per dat:0673) gets filed, and a re-check finds no other dat: node quoting a page's stale claim. The propagate operation would then exist and work at the layer that matters.",
  "The old wiki is found to have a propagation mechanism this ingest missed — a quoter-index, a backlink pass, a build step that re-checks citations — making the observed failures a snapshot-timing artefact rather than a structural absence.",
]
alternatives = [
  "Duplication is the design: pages are self-contained narratives and the dat: layer is the propagation medium. The 'failure' is then the architecture working as intended — correction travels via new dat: nodes, not via page edits — and the real question is read order, not mechanism.",
  "The corrections are too new to have propagated: the ingest snapshot (2026-09-04) froze pages mid-process, and the live wiki has since caught up. The absence would then be an artefact of the snapshot, and the check is to re-read the live pages.",
]

[when]
date = "2026-09-09"
+++

## The thesis

The wiki has a correct operation — page-local correction, often dated and
honest: REVISED blocks, RESOLVED blocks, staleness audits — and **no propagate
step**. Every propagation failure in the ingest is the same shape: a correction
is published at the finding node, and its quoters are never re-checked.
[`dat:0125`](../data/0125-end-fight-stale-attribution.md) states it flatly:
"the wiki's correction machinery works on individual pages but does not
propagate."

## The instances

**The exit line.** The main Annie page corrected the June 1 attribution on
2026-08-13 — "sic semper lupanis" is Dan's, sent three minutes after the
"unring this bell" message, performing finality to himself. end-fight.md kept
it as Annie's. "Any downstream synthesis quoting the exit line as Annie's (e.g.
readings of the closure's agency) is reasoning from a superseded attribution"
([`dat:0125`](../data/0125-end-fight-stale-attribution.md)).

**The Coles page.** The canonical Morgantown event page corrected the "never
says yes" categorical on 2026-08-20, printing the retraction on the page
([`dat:0257`](../data/0257-morgantown-call-leverage-campaign.md)). The Jerel
Coles people page, in the same export, still carries the defeated categorical,
the stale T2 disclaimer, and the old figures
([`dat:0412`](../data/0412-jerel-coles-page-patch-state.md)). Same finding, two
pages, opposite states — the correction propagated zero hops.

**The datum layer.** [`dat:0673`](../data/0673-jay-lauer-direction-and-count-corrections.md)
corrects the jay-lauer page's direction error *and* dat:0064, which had
inherited it: "dat:0064 inherited it without re-checking the direction field."
The correction must reach even the datum layer — the layer whose job is to be
the correction. dat:0064's amendment is still open.

**The intermediate state.** The block-unblock page carries 127/110 beside
129/128 ([`dat:1292`](../data/1292-block-unblock-loop-severance-recount-129-128.md)):
the correction arrived and the old text was not removed. Propagation is not
binary; the halfway state is a page contradicting itself.

## The counter-cases: self-correction exists, opt-in

The attachment-model page's RESOLVED [2026-08-23] withdrew the 110-of-127
figure and published the 129-episode recount with its method — the model case
of a page correcting itself rather than letting both stand
([`dat:0622`](../data/0622-attachment-model-129-episodes-resolution-withdraws-110-127.md)).
The Context Core's 2026-08-16 audit corrected seven claims in place, each
recorded, not silently overwritten
([`dat:1032`](../data/1032-context-core-staleness-audit-2026-08-16.md)). The
operation exists and works. It is page-local and opt-in: nothing *requires* a
quoter to re-check when its source moves.

## The recursion

The wiki knows this. dat:0125's coordination note calls for "a propagation
pass over event pages that quote the June 1 closure." dat:1032 names the
failure classes. The ingest queue recommends the pass. And the knowledge has
not propagated either — the pass has not been run, the Coles page is still
unpatched, dat:0064 still needs its amendment. A system that diagnoses its own
propagation failure and does not propagate the diagnosis is exhibiting the
failure at the meta level. This is the same fractal as
[`int:diagnosis-to-behavior-gap`](diagnosis-to-behavior-gap.md): the diagnosis
is the terminal product.

## The one channel that works

[`dat:0058`](../data/0058-graduation-september-2009-then-audit-and-certification.md):
"The correction arrived because the wiki was **published and browsable**, and
its subject read it and found a claim about his own life that was wrong. That
is the loop the whole system is for, and it had not closed once before today."
The only propagate operation observed to work in the entire record is a human
reader. Every machine correction in the repository until that one was found by
a machine re-reading its own sources — which is to say, by accident of
assignment, not by architecture.

## The uncomfortable corollary

This wikitest's dat: layer *is* the propagate operation the old wiki lacked:
the ingest series corrected pages in place via dat: nodes, one wave at a time.
But dat: nodes decay too — dat:0064 is the proof. A propagate operation that
itself needs a propagate operation is not a solution; it is the same problem
one layer up. Unless the dat: layer gets its own staleness discipline
(evidence-version headers, re-check dates), this repository will re-enact the
failure it was built to fix, on a delay.

## Relation to the companion node

[`int:stale-propagation`](stale-propagation.md) documents the lifecycle —
what frozen evidence looks like, the instances by page type, the date-compare
detection method. This node argues the mechanism (no propagate step), the
counter-cases (self-correction exists, opt-in), and the recursion (the
diagnosis of the failure is itself unpropagated). Read the lifecycle first,
then the mechanism.
