+++
id            = "dat:0050-corpus-traces-of-the-type-are-downstream-of-it"
layer         = 1
type          = "datum"
title         = "Every corpus trace of the assigned enneagram type post-dates the instrument that assigned it"
claim         = "The prior wiki's `mind/profile/enneagram-5w4` and `mind/synthesis/the-commissioned-self` hold an open contradiction: the whole `mind/profile/` cluster carries 5w4 sx/sp and RLUEI, while the corpus's one instance of the subject typing himself gives 5w6sx and RLOEI. Searching the sha256-verified corpus of 192,140 messages: `RLOEI` returns exactly one hit, `RLUEI` returns none, `5w4` returns three and `enneagram` one. The 2024-11-04 message is VERIFIED verbatim and its full text is \"I could have given it way more accurate info if I had the numbers above the area you screenshotted but I just said 'vanessa is an xNFP 4w5 and Dan is an INTP 5w6sx RLOEI - compare them'\" — the wiki's quotation begins after the clause in which the author flags his own input as less accurate than it could have been — a clause that corroborates rather than undercuts the wiki's own reading of the line as possibly a slip. All three `5w4` hits post-date the assignment and are artefacts of it: two (2026-03-21, 2026-03-24, both COVERED months) are an LLM persona prompt he wrote and was pasting to another person, reading \"Identity: High-intellect (98-99th percentile), high-volatility INTP 5w4-sx\"; the third (2026-08-21) is a link to his own published page, `enneagram-5w4.html`."
cites         = ["src:imessage-corpus-2026", "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Run 2026-09-09 with bin/wb-corroborate against corpus/messages.csv, sha256 matched to corpus/manifest.json and re-pulled for the run. Substring matching used deliberately for the type codes, which are not word-delimited in running text; each hit was read in full rather than counted. Coverage: 2026-03 and 2026-08 COVERED (3,193 and 6,803 against a median of 1,123); 2024-11 PARTIAL at 367."
importance    = 5
tags          = ["old-wiki", "corroboration", "epistemics", "profile"]
created       = "2026-09-09"

[when]
start = "2024-11-04"
end   = "2026-08-21"
+++

Three findings, and the third is the one that matters.

## The quotation verifies

`RLOEI` occurs once in 192,140 messages, on the date the wiki gives, in the words
the wiki gives. That is a clean provenance win and it is recorded as one — a
counterexample for
[`pat:reasoning-sound-provenance-unreliable`](../patterns/reasoning-sound-provenance-unreliable.md),
which had one.

## The omitted clause supports the wiki's own hedge

The wiki quotes from *"vanessa is an xNFP 4w5…"*. The message opens:

> *"I could have given it way more accurate info if I had the numbers above the
> area you screenshotted but I just said…"*

The `enneagram-5w4` block already reads this correctly from context — it
describes the line as *"quoting back a prompt he had written"* and as *"one line
typed fast inside a message about somebody else's test, and it may be a slip"*,
and declines to resolve on it. The omitted clause is the author saying the same
thing about his own input, in his own words, at the time. So this is **not a
catch**: it is independent textual support for a hedge the wiki reached without
it, and it makes that hedge better founded than the wiki could show.

The claim to carry forward is narrow. The self-typing instance is real, dated and
his; its author flagged it as approximate as he made it; and the page that
depends on it already says so.

## Nothing in the corpus independently supports 5w4

This is the finding. `5w4` occurs three times and every occurrence is downstream
of the assignment:

| date | what it is |
| :--- | :--- |
| 2026-03-21 | a persona prompt he wrote, pasted to another person: *"Identity: High-intellect (98-99th percentile), high-volatility INTP 5w4-sx"* |
| 2026-03-24 | the same prompt, sent again to someone else |
| 2026-08-21 | a link to `caakehorn.github.io/wiki-brain/wiki/mind/profile/enneagram-5w4.html` |

The first two are self-description authored *after* the commissioned instrument
produced the type; the third is the wiki citing itself. `RLUEI`, the code the
profile cluster carries, appears **zero** times.

So the corpus does not corroborate the assigned type. It records the type
circulating — into a prompt, and then into a URL he sent to somebody. That is a
different thing, and it is the loop the prior wiki named on
`mind/synthesis/the-commissioned-self` without, on this evidence, closing it.

## The wiki said this search had not been run

Its own words, in the same block: *"no second instance has been looked for."* This
is that search. It answers the open item rather than disputing the page — and the
answer is that there is no second instance of the self-typing, and no independent
instance of the assigned code either.

## What this does not establish

**The type is not refuted.** An instrument's output is not wrong because the
corpus does not echo it; most true things about a person are not in their text
messages. `never_observed`, not `known_not_to_occur`.

**The corpus cannot see the channel that matters.** These are SMS. The typing was
done in an LLM session, and those sessions are not in this corpus — the 2026
prompt surfaces only because he happened to paste it to a person. Whatever
self-description he has typed into models, this instrument is blind to it, and
the 2024-11-04 message is itself a *report* of one such session rather than the
session.

**2024-11 is PARTIAL**, at 367 messages against a median of 1,123, so the
one-instance count for that period is a floor, not a total.
