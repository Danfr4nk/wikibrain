+++
id         = "int:attachment-model-129-exits"
layer      = 3
type       = "interpretation"
title      = "The 129-exit recount converts the severance base rate from 87 percent to 100 percent — making the August 2026 silence the first genuine test of the attachment model"
cites      = ["dat:0622-attachment-model-129-episodes-resolution-withdraws-110-127", "dat:1292-block-unblock-loop-severance-recount-129-128", "dat:1384-dormancy-not-exit-rule", "evt:2026-08-23-attachment-model-resolved", "evt:2026-06-01-annie-closure"]
confidence = "moderate"
perspective = "llm"
importance = 5
tags       = ["attachment-model", "annie-ulmer", "severance", "base-rate"]
created    = "2026-09-09"
updated    = "2026-09-09"
rechecked  = "2026-09-10"
falsifiers = [
  "Contact resumes before 2026-12-19 in the old register — a two-sided crisis burst like the Aug 27–31 resumption. Then the August silence was another episode of the ladder, not the first genuine test, and this reading fails.",
  "The 129/128/36s recount is re-derived from the held corpus by an independent pass and comes out materially different — a different episode-collapsing rule, a different lexicon. Then the base rate this reading leans on was the page's artefact, not the corpus's.",
  "The December 19, 2026 horizon passes with the severance held and the unbroken-bond page narrows nothing — it restates the thesis anyway. Then the 'first genuine test' framing was generous: the machinery was never actually testable.",
]
alternatives = [
  "The 100 percent resumption figure makes the model unfalsifiable by resumption: any future silence can be called 'not a genuine severance yet' for 129-episode-sized priors. The August 2026 silence may then be out-of-distribution only by stipulation — the model absorbs it whether it holds or breaks.",
  "The block-unblock-loop page's own formula correction — 'the exit is executed; the deletion never is' — is the better frame: the August event is a held block plus sustained non-contact, a behavior, not a severance episode of the counted kind. The 129-episode base rate then isn't the population this silence belongs to.",
]

[when]
date   = "2026-09-09"
+++

<!-- prose for humans; the frontmatter is for machines -->

## The thesis

On 2026-08-23 the Attachment Model page recorded **RESOLVED** against its own
*Gaps* section and changed what the severance record means. Before that date the
strongest version of the evidence was 127 declared exits with 110
re-engagements — 87 percent, a strong but ordinary pattern a skeptic could read
as weak resolve. The independent recount moved it to **129 distinct episodes,
128 of 128 resumed, median gap thirty-six seconds, all-time maximum 46
hours** — and the page withdrew the weaker figure rather than letting both
stand
[`dat:0622`](../data/0622-attachment-model-129-episodes-resolution-withdraws-110-127.md).

That is not a pattern of failed exits at all. It is a pattern in which declared
exits **terminate nothing** — severance language recategorised as *"a rung on
the escalation ladder,"* 36 seconds being what a check-in looks like when it
gets answered. The block-unblock-loop page's stated final state runs the same
recount and corrects its own formula from *"the exit is declared, never
executed"* to **"the exit is executed; the deletion never is"**
[`dat:1292`](../data/1292-block-unblock-loop-severance-recount-129-128.md).

The reading this node argues: **the resolution turns the August 2026 silence
into the first genuine test of the attachment model rather than another
instance of it.** Under the old 87 percent base rate, a long silence was the
13 percent tail — unusual, not impossible. Under the new base rate, every
declared severance in an eleven-year record terminated nothing, so a severance
that holds past the prior maximum (the 52-day June silence, `evt:2026-06-01`)
is out-of-distribution against the only quantified ceiling the record has
[`evt:2026-08-23`](../events/2026-08-23-attachment-model-resolved.md),
[`evt:2026-06-01`](../events/2026-06-01-annie-closure.md).

## The 52-day record matters as the ruler

The June 1, 2026 group-chat closure ended the relationship for fifty-two days —
"by a wide margin the most durable severance in a relationship with 127 declared
exits," and it broke on July 23 anyway
[`evt:2026-06-01`](../events/2026-06-01-annie-closure.md). The dormancy-not-exit
page names the rule that record instantiates: declared endings produce pauses,
never terminations — Menore's channel reopened after 2,044 days of total
silence, answered in one minute
[`dat:1384`](../data/1384-dormancy-not-exit-rule.md). Against the 129-episode
base rate, 52 days was already out-of-distribution, and it still resolved as a
pause. So the August silence is not the first long one — it is the first one
that has to outlast a *failed* 52-day record to count as different. That raises
the bar for what "genuine test" means: it is not enough for the silence to be
long; it has to survive the demonstration that length alone did not settle the
question last time.

## How the ingest's findings bear on it

The ingest's most relevant contribution is the honesty about what the recount
**isn't**: the 95,067-row merged corpus and the 24-hour episode-collapsing rule
are not held in this repository, so neither the 129 nor the 36-second median
is re-derivable here; the episode definition and the partial severance lexicon
are the page's own
[`dat:0622`](../data/0622-attachment-model-129-episodes-resolution-withdraws-110-127.md).
This node inherits that ceiling. The base rate is the page's testimony —
well-constructed, independently-methoded testimony that corroborated the
dossiers' 127 with 129 — but it is testimony, and this reading is a reading of
testimony, not of rows.

The second relevant finding: the block-unblock-loop page **carries the stale
127/110 figures unreconciled alongside its own final 129/128 recount** — an
internal inconsistency the page never resolves, so neither figure may be quoted
without the other
[`dat:1292`](../data/1292-block-unblock-loop-severance-recount-129-128.md).
Any downstream use of this node's thesis must carry the same discipline: the
base rate is the page's best reading, not a settled count.

## Contradictions

- The same record that supplies the 100 percent resumption figure supplies the
  precedent for this test already failing: the June 52-day silence was
  out-of-distribution and broke. "First genuine test" is a claim about the
  model's falsifiability, and the model has already absorbed one failure of
  the same shape.
- The 110-of-127 figure was withdrawn, but the dossiers' framing of ~100%
  re-engagement was already in the record before the recount — the resolution
  sharpened a number the architecture's defenders already had, which weakens
  the "new information" reading of the event.

## Open questions

- Whether the August 2026 severance completes the out-of-distribution
  observation — measured at `evt:2026-12-19-severance-horizon`, the 120-day
  dated falsifier the unbroken-bond machinery demands.
- Whether an independent pass over the held corpus, with its own episode
  definition, reproduces 129 — the recount's one load-bearing unverified
  claim.
