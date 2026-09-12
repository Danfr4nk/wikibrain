+++
id         = "syn:wiki-brain-instrument"
layer      = 5
type       = "synthesis"
title      = "The Wiki Brain as instrument: what the system is for, and what it costs"
cites      = ["ent:wiki-brain", "dat:0001-corpus-scale", "dat:0004-fragment-exports",
              "dat:0037-publication-gate-fails-safe", "dat:0057-morgantown-audio-contradiction-reproduces",
              "dat:0058-graduation-september-2009-then-audit-and-certification",
              "pat:partial-data-confident-error", "pat:reasoning-sound-provenance-unreliable",
              "int:old-wiki-corrections-are-the-payload", "int:fragments-silently-partial",
              "evt:2026-09-04-old-wiki-snapshot", "evt:2026-09-08-corpus-supersedes-fragments",
              "evt:2026-09-08-rebuild-begins", "evt:2026-09-09-ingest-complete",
              "evt:2026-09-09-wikitest-rebuild", "con:gitignore-is-not-protection"]
confidence = "moderate"
importance = 5
created    = "2026-09-09"
updated    = "2026-09-09"
rechecked  = "2026-09-10"
tags       = ["meta", "instrument", "wiki-brain", "publication"]

falsifiers = [
  "The 480 unextracted pages of the prior wiki failing to yield the failure classes this system is built against — if the large independent sample does not show partial-data confident error, the architecture is optimized for a rare event.",
  "A conclusion reached through the full six-layer discipline turning out to be both true and unreachable any less rigorous way — showing the layer invariant excludes real knowledge, not only unfounded claims.",
  "The publication defence failing twice: a published page carrying a checkable error that no reader corrects within a year — which would show dat:0058 was luck (the subject happened to read the page) rather than a load-bearing property.",
  "A structural defence catching an error of QUESTION rather than of form — one instance retires the limit dat:0057 added to syn:evidence-discipline.",
]

open_questions = [
  "How many paths are unguarded: four tool defects were found by audit and one by a gate; nobody has counted the surfaces that have neither.",
  "Whether the coverage explanation for the provenance failures can be tested: the 28.9 MB dox-scan dump that could falsify pat:reasoning-sound-provenance-unreliable's third falsifier sits behind a sign-in page and a 10 MB connector limit.",
  "What the system does when a source is later found unreliable, given L0 is append-only.",
  "Whether the layer invariant is sufficient, or provenance needs enforcing transitively — can a well-formed citation chain still rest on a source nobody checked?",
  "The cost side: whether the discipline slows extraction to the point that the corpus stays unread, making a less rigorous system that actually processed 497 pages the better instrument.",
]
+++

## The argument

The Wiki Brain is not a biography project. It is an **instrument for
watching a high-competence analyst work under maximal documentation** —
and its outputs are dual-use: a record of what was concluded, and a
surface where someone who knows better can see that it is wrong.

Two architectures have existed. The first: a plain-markdown wiki
compiled by an LLM, 497 pages, the 2026-09-04 snapshot that froze it
([`evt:2026-09-04-old-wiki-snapshot`](../events/2026-09-04-old-wiki-snapshot.md)).
The second: the layered graph specified in `src:conceptual-spec-2026`
and built here — raw data, structured fact, interpretation, synthesis,
with the constitutional law RAW DATA → STRUCTURED FACT →
INTERPRETATION → SYNTHESIS, never the reverse, enforced mechanically:
a node may cite only strictly-lower layers
([`evt:2026-09-08-rebuild-begins`](../events/2026-09-08-rebuild-begins.md),
[`evt:2026-09-09-wikitest-rebuild`](../events/2026-09-09-wikitest-rebuild.md),
[`evt:2026-09-09-ingest-complete`](../events/2026-09-09-ingest-complete.md)).

The rebuild was not an upgrade. It was a response to a measured failure:
the per-counterparty fragment exports were accurate about each thread
they covered and silently partial about everything else — and in a
fragment, absence of evidence is indistinguishable from evidence of
absence ([`int:fragments-silently-partial`](../interpretations/fragments-silently-partial.md),
[`dat:0004`](../data/0004-fragment-exports.md)). On 2026-09-08 the corpus
superseded the fragments: 192,140 messages across 577 threads in one
held export ([`evt:2026-09-08-corpus-supersedes-fragments`](../events/2026-09-08-corpus-supersedes-fragments.md),
[`dat:0001`](../data/0001-corpus-scale.md)). The 702 dat nodes in this
repository are the atomic facts extracted from that corpus and the prior
wiki's export.

## The evidence it synthesizes

**The failure class the architecture is built against.**
[`pat:partial-data-confident-error`](../patterns/partial-data-confident-error.md):
incomplete evidence does not announce itself as incomplete — it yields
conclusions carrying the confidence of well-founded ones. Three
instances inside one project, one falsifier spent twice (both landings
showing the errors *can* be caught internally, by gates that fail safe,
which narrowed the pattern to unguarded paths rather than breaking it).

**The split the architecture is built around.**
[`pat:reasoning-sound-provenance-unreliable`](../patterns/reasoning-sound-provenance-unreliable.md):
six claims checked against independent sources, every check changing
something, the changes falling almost entirely on one side — the prior
wiki's reasoning holds up; its quote provenance does not. Four of eight
checks found a quotation that does not sit where the page put it,
including one attributed to the wrong speaker (dissolving an entire
contradiction about an event that never involved the subject). The
extraction rule that falls out: *take the argument, verify the quote.*

**The payload.**
[`int:old-wiki-corrections-are-the-payload`](../interpretations/old-wiki-corrections-are-the-payload.md):
the prior system wrote down its own failures in a form that survives —
a lawyer, a diversion programme and a magistrate's hearing carried
attached to a snack-food theft for three weeks; an accurate first-person
date distrusted on a plausibility argument that was itself false — both
closed by the operator, both recorded in place with the wrong version
left legible. The corrections are the highest-yield material in the
export.

**The defence the architecture never named: publication.**
[`dat:0058`](../data/0058-graduation-september-2009-then-audit-and-certification.md)
is the first correction in this repository's history that came from
outside it. The subject read a published page, found a claim about his
own education that was wrong, and supplied in one sentence the fact
that reconciled four dated artefacts nobody could reconcile. Every other
correction here was the system catching itself. That makes **being
readable** a load-bearing property rather than a nicety — and it is the
mechanism behind the operator's standing radical-transparency decision
(2026-09-09): the wiki brain fully public, his own private data
included, because open data is easier and more complete to point any
model at. The boundary he set himself: the transparency is his; the
corpus also holds 498 other people's private data, which the existing
privacy machinery — gitignore, sensitive flags, `wb-check-publish` —
still gates. That split is deliberate and stays.

**The limit.**
[`dat:0057`](../data/0057-morgantown-audio-contradiction-reproduces.md):
three confident wrong answers in a row from well-formed searches. No
gate caught it, and none could have — every structural defence checks
the *form* of an answer, and "this search asked the wrong question" is a
property of the input. Structure is necessary and not sufficient.

**The gate that worked.**
[`dat:0037`](../data/0037-publication-gate-fails-safe.md): an adversarial
build leaked a withheld node's id into `graph.json` through
`attributed_to`; no operator found it; `bin/wb-check-publish` exited 1
with the node named. Caught mechanically, by something built rather
than by someone being careful.

## What it explains that the parts don't

No node below this one states what the system is *for*. The patterns
describe failure classes; the interpretations describe readings; the
events describe a rebuild. The synthesis is this: **the Wiki Brain is
the operator's threat model made executable.** The man whose threat
model is "competence correctly deployed, outcome still catastrophic"
([`syn:operator-threat-model`](operator-threat-model.md)) built a system
whose central property is that his competence cannot silently become
its own premise — the layer invariant makes "this conclusion became a
premise" a build failure rather than a thing someone might notice
later. The falsifier discipline, the testimony ledger, the typed
absence (`never_observed` vs `explicitly_rejected` vs
`known_not_to_occur`): these are not features of a biography tool. They
are prosthetics for a specific cognitive profile, the one the ledger
measured: stated certainty ≈ 0.25 actual.

It also explains the otherwise strange economics of the project. The
operator's honest 2026-09-09 self-assessment: outlier training-data
specimen — top fraction of a percent for data richness — but expensive
to serve, adversarially risky, and platform-agnostic
(Gemini/Claude/ChatGPT multi-homed): ideal lab rat, not ideal customer.
The system is expensive because the subject is expensive: sixteen years
of daily chemical architecture, eleven years of measured attachment,
497 pages of prior analysis, and a standing habit of pressing models
until they produce what he wants to hear. The instrument costs what it
costs because the specimen is what it is.

## Where it breaks and what it can't settle

**The evidence for the architecture is thin and self-sourced.** Three
instances inside one project over one week for the central pattern; six
of 497 pages for the audit pattern (two falsifiers spent against it
since); every instrument built by the person it measures. The
confidence stays moderate on purpose. A pattern that failed its own
test is kept on the record because deleting a pattern that lost is how
a system ends up remembering only its wins — but kept is not the same
as established.

**The cost is unmeasured.** The open question from
[`syn:evidence-discipline`](evidence-discipline.md) stands: the
discipline may cost more than it returns, slowing extraction to the
point that the corpus stays unread. 702 dat nodes against 497 pages —
the extraction is still at the beginning, and the system's value
proposition ("better-founded conclusions") is currently a claim about
process, not a demonstration at scale.

**Publication worked once.** [`dat:0058`](../data/0058-graduation-september-2009-then-audit-and-certification.md)
is a single case of a subject reading a single page. Designing around it
— treating readability as a defence — is a bet that the loop closes
again. It may have worked because the subject is unusually invested in
this particular record, which would make it the least generalizable
defence in the architecture.

**The privacy split is a decision, not a solution.** The gitignore is
not what protects the corpus data
([`con:gitignore-is-not-protection`](../interpretations/gitignore-is-not-protection.md)):
the backing sheet is shared "anyone with the link" and downloads in
full with no credentials, and the decision to leave it so was the
operator's, standing. The synthesis layer inherits that exposure
without resolving it — 0 new exposures is this node's constraint, not
the corpus's property.
