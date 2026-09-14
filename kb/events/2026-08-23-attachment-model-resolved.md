+++
id         = "evt:2026-08-23-attachment-model-resolved"
layer      = 2
type       = "event"
title      = "The attachment model's exit-episode self-correction resolves: 129 episodes, 100% resumption"
cites      = ["dat:0622-attachment-model-129-episodes-resolution-withdraws-110-127", "dat:1292-block-unblock-loop-severance-recount-129-128", "dat:1384-dormancy-not-exit-rule", "dat:0449-group-chat-closure-revised-arithmetic"]
confidence = "moderate"
importance = 4
tags       = ["attachment-model", "annie-ulmer", "counts", "correction"]
created    = "2026-09-09"
rechecked  = "2026-09-10"

[when]
date   = "2026-08-23"
+++

<!-- prose for humans; the frontmatter is for machines -->

[[edges]]
rel         = "about"
target      = "ent:annie-ulmer"
strength    = "strong"
asserted_by = "self"

## What happened

On **2026-08-23** the Attachment Model page recorded **RESOLVED** against
its own *Gaps* section: the 127/110 exit-declaration pair carried on the
synthesis pages did not reconcile with the dossiers' own description of
127 false exits with ~100% re-engagement. The resolution: Dan-sent
severance language (blocking declarations, *goodbye*, *I'm done / we're
done / it's over*, *never contact me again*) across the **95,067-row
merged Annie corpus** (2015-11-28 → 2026-05-28) returns 258 messages
collapsing to **129 distinct episodes** once hits within 24 hours are
treated as one declaration — 129 against the dossiers' 127, by an
independent method. Of the 128 episodes with a following message inside
the corpus, **all 128 resumed — 100%, median gap thirty-six seconds,
all-time maximum 46 hours.** The page withdraws the 110-of-127 (87%)
figure and recategorises severance language as *"a rung on the escalation
ladder"* — 36 seconds being what a check-in looks like when it gets
answered
[`dat:0622`](../data/0622-attachment-model-129-episodes-resolution-withdraws-110-127.md).

The same late recount is the block-unblock-loop page's stated final
state: **129 severance episodes, 128 with a subsequent corpus message,
all 128 resumed**, median 36 seconds, longest 46 hours — and the page
corrects its own formula, following the June 1, 2026 silence, from *"the
exit is declared, never executed"* to **"the exit is executed; the
deletion never is"**
[`dat:1292`](../data/1292-block-unblock-loop-severance-recount-129-128.md).

## Dated sequence

- **Pre-2026-08-23:** the page's *Gaps* section flags the 127/110 pair as
  not reconciling with ~100% re-engagement — the flag is the old wiki's
  own, filed before the fix.
- **2026-08-23:** **RESOLVED** — 129 episodes, 110-of-127 withdrawn,
  severance language recategorised
  [`dat:0622`](../data/0622-attachment-model-129-episodes-resolution-withdraws-110-127.md).
- **2026-08-28 (constitution pass):** the "executed, not deleted" formula
  correction on block-unblock-loop, run against SYNTHESIS_SPEC.md under
  the standing Annie moratorium, adding no new narrative about Annie
  [`dat:1292`](../data/1292-block-unblock-loop-severance-recount-129-128.md).

## Evidence for

- The resolution is an **independent recount** (a different method —
  severance lexicon, 24-hour episode collapsing — on the merged corpus)
  corroborating the dossiers' 127 with 129. The page is explicit that this
  is the strongest quantitative support the architecture has ever had, and
  it withdrew the weaker figure rather than letting both stand
  [`dat:0622`](../data/0622-attachment-model-129-episodes-resolution-withdraws-110-127.md).
- Against that ceiling the August 2026 severance reads as genuinely
  out-of-distribution: the prior record was the 52-day June silence, and
  the dormancy-not-exit page names the rule it breaks — declared endings
  produce pauses, never terminations (Menore's channel reopened after
  2,044 days of total silence, answered in one minute)
  [`dat:1384`](../data/1384-dormancy-not-exit-rule.md).

## Evidence against / limits

- The 95,067-row merged corpus and the 24-hour episode-collapsing rule are
  **not held in this repository** — neither the 129 nor the 36-second
  median is re-derivable here; the episode definition is the page's, and
  the severance lexicon is partial by the page's own admission
  [`dat:0622`](../data/0622-attachment-model-129-episodes-resolution-withdraws-110-127.md).

## Contradictions the ingest found

- **The block-unblock-loop page carries the stale 127/110 figures
  unreconciled alongside its own final 129/128 recount** — an internal
  inconsistency the page never resolves. Neither figure may be quoted
  without the other
  [`dat:1292`](../data/1292-block-unblock-loop-severance-recount-129-128.md).

## Open questions

- Whether the August 2026 severance (now running past the 52-day record)
  completes the out-of-distribution observation — measured at
  `evt:2026-12-19-severance-horizon`.
- Block-state reconstruction requires the page's own episode logic; the
  recount was not re-derived here.

## Cross-links

- `ent:annie-ulmer`.
- `evt:2026-06-01-annie-closure` — the 52-day silence this resolution
  measured against; `evt:2026-12-19-severance-horizon` — the test the
  resolution's base rate feeds.
