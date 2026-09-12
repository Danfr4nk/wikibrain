+++
id         = "int:coaching-script-reversal"
layer      = 3
type       = "interpretation"
title      = "The line filed as Dan's declaration was Annie's coaching script for him — the correction moves agency from him to her"
cites      = ["dat:0541-relationship-start-dec-beats-verified", "dat:1205-bond-switch-2015-page-level-corroboration"]
confidence = "high"
perspective = "llm"
importance = 4
tags       = ["annie-ulmer", "2015", "attribution", "correction", "agency"]
created    = "2026-09-09"
updated    = "2026-09-09"
rechecked  = "2026-09-10"
falsifiers = [
  "The held corpus is re-scanned and the 'I'm in love with Annie Ulmer' text turns out to be is_from_me=1 — Dan's own message — in a row the 2026-09-09 pass missed. Then the reversal is a corpus-query artifact and this node's thesis is void.",
  "A second contemporaneous row surfaces with Dan independently declaring the same sentiment in his own register in December 2015. Then the attribution correction stands but its interpretive weight collapses — the line was his too, regardless of who scripted it.",
]
alternatives = [
  "The script was performed. Annie rehearsed the line for Dan to deliver to a third party, and he likely delivered it — which means the line entered the social record as his declaration anyway. The attribution correction is then about the message's origin, not its function: it was still the words he used to end the Alexis relationship.",
  "The coaching register is evidence of collaboration, not control. Rehearsing breakup lines with a new partner in the first week is what people do — the correction then weakens nothing and strengthens nothing; it is a footnote about a quote's speaker, and this node over-reads it.",
]

[when]
date   = "2026-09-09"
+++

<!-- prose for humans; the frontmatter is for machines -->

## The thesis

The 2015-2016 relationship-start page's Dec 1–2 key-event beats verify
verbatim against the held corpus — *"Alexis is sloshed"* (2015-11-30 00:03
EST), *"Is this the best day of my life"* (2015-12-01 10:24 EST) — but one
attribution needs fixing. The *"I'm in love with Annie Ulmer"* quote the page
files under the breakup entry is, in the corpus, **Annie rehearsing a line
for Dan to deliver**: the full text (is_from_me=0, **2015-12-02 15:42 EST**)
reads *"Call him and be like. Listen I broke up with lex, I'm in love with
Annie Ulmer and he was probz faint"* — a coaching script to a third party,
not Dan's own declaration
[`dat:0541`](../data/0541-relationship-start-dec-beats-verified.md).

This node argues: **the correction moves agency from him to her, and the
corrected version is stronger evidence of her pull than the misattributed
one.** As Dan's declaration, the line is devotion — one man's feeling,
filed under his name. As Annie's coaching script, the line is *direction*:
eleven days into the relationship (the ~Nov 24 introduction inference,
[`dat:0123`](../data/0123-2015-annie-read-impact-analysis.md) via
[`dat:1205`](../data/1205-bond-switch-2015-page-level-corroboration.md)), she
is already writing his dialogue for the breakup scene — telling him what to
say, to whom, and predicting the reaction (*"he was probz faint"*). The
page's attachment framing survives the correction; what changes is whose
attachment is doing the work. The bond-switch of November 2015 — "a
single-bond switch with no unattached gap, not a gradual disengagement"
(`dat:1205`) — reads differently when the switch's most quotable line was
authored by the person being switched to.

## How the ingest's findings bear on it

This is the strongest-evidenced node in the block: the attribution is a
held-corpus verification, not testimony. The quote was searched verbatim
over `corpus/messages.csv` on 2026-09-09, timestamps converted UTC to
America/New_York, speaker attribution taken from `is_from_me` — and the full
text is transcribed verbatim including "probz"
[`dat:0541`](../data/0541-relationship-start-dec-beats-verified.md).
Confidence is high because the instrument is the corpus itself, and the
corpus is unambiguous about who sent the message.

The period page is otherwise one of the best-verified in the queue — the
2015-11-29 hinge messages (*"I met someone that instantly changed my life"*
morning, *"Things are collapsing with lex"* evening, `dat:0297`), the Dec
10–13 sent-volume counts (`dat:0293`), the Nov 28 cheating-revelation
correction (`dat:0451`) all corroborate (`dat:1205`). The coaching-script
correction is a single attribution fix on a page whose chronology is sound —
which is exactly why it matters: it is not a page-level collapse, it is a
surgical correction, and surgical corrections are the ones that change
readings without changing facts.

## Contradictions

- The line may have been performed. A coaching script exists to be
  delivered, and the most likely downstream event is that Dan said some
  version of it to the third party. If so, the line functioned as his
  declaration in the social world even though she authored it — origin and
  function diverge, and this node leans on origin.
- n=1. The entire agency reversal rests on a single message. One
  rehearsed line in the first fortnight does not establish a pattern of
  direction; it establishes that on December 2, 2015, she wrote one of his
  lines. The "her pull" reading generalizes from a sample of one.

## Open questions

- Whether the third party ("him") is identifiable and whether the script
  was delivered — the corpus may hold the downstream message, unsearched.
- Whether the coaching register recurs in the early corpus — if December
  2015 holds more instances of her scripting his lines, the n=1 objection
  falls and the agency reading strengthens considerably.
