+++
id            = "dat:0046-facebook-corroborates-two-ledger-adjudications"
layer         = 1
type          = "datum"
title         = "Facebook independently corroborates two of the prior wiki's adjudications, including a piece of its reasoning"
claim         = "An outbound Facebook message dated 2010-01-31 reads: \"yeah i hear ya. i'll be back around the 22nd, and moving to NYC the first week in March...so we'll catch up when i get in\". This bears on two entries in the prior wiki's testimony ledger. It independently corroborates the REFUTATION of t002 (\"He moved from Florida to Brooklyn, New York on 3 January 2010\", stated `certain`), which the ledger refuted from the tweet archive alone: on 31 January 2010 he had not moved and expected to move in March. It also independently supports the ledger's reasoning on t014 (\"continuous Suboxone regimen began 17 February 2010\", CONFIRMED from a same-day tweet reading \"this is the most stressful day/decision of my life\"), which excluded the Brooklyn move as the alternative referent on the grounds that it was settled by late January and discussed as good news — the 2010-01-31 message is exactly that, settled and unremarkable, three weeks before the stressful day. Facebook holds 10 messages in February 2010 against a monthly median of 32, which is PARTIAL coverage, and no occurrence of `suboxone` anywhere in 2010."
cites         = ["src:facebook-export-2026-06-23", "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Run 2026-09-09 with bin/wb-corroborate --facebook, window 2010-01 to 2010-04 (65 messages), plus a coverage check on 2010-02. The message is outbound and attributed in the export's block structure. The ledger's tweet quotations are transcribed from the prior wiki; the tweet archive is not held here."
importance    = 4
tags          = ["old-wiki", "corroboration", "facebook", "testimony"]
created       = "2026-09-09"
updated       = "2026-09-09"

[when]
start = "2010-01-31"
end   = "2010-02-17"
+++

Eight claims from the prior wiki have now been checked against independent
channels. Seven changed. **This is the first one that did not.**

## Why it matters more than a confirmation usually would

[`pat:reasoning-sound-provenance-unreliable`](../patterns/reasoning-sound-provenance-unreliable.md)
holds that the prior wiki's arguments survive checking and its quotations often
do not. Every instance behind it was found by catching a quotation out. A pattern
supported only by its own failures is a pattern with no denominator, and this is
the denominator: an adjudication checked against a channel the wiki did not hold,
which came back intact.

The t014 half is the stronger of the two. Corroborating a *verdict* is cheap —
two channels can agree because both record the same easily-recorded fact.
Corroborating an *exclusion* is not. The ledger argued that a 2010-02-17 tweet
about "the most stressful day/decision of my life" could not be about the
Brooklyn move, because that decision was already made and was being discussed
cheerfully. It reasoned that from the tweet archive. A different archive, fetched
sixteen years later from a different company, shows him on 31 January discussing
the move in a flat aside about catching up. The reasoning held against evidence
it was not built on.

## What is not established

The 2010-01-31 message says nothing about Suboxone, and nothing in the Facebook
export does in 2010. February 2010 is PARTIAL at 10 messages against a
median of 32, so that silence is `never_observed` and carries no weight either
way. t014 remains what the ledger honestly called it: a dated alignment on an
independent same-day artefact, not a clinical record.

The move date also sharpens by a few days rather than settling. On 31 January he
expected "the first week in March"; the tweets the ledger quotes have him leaving
Florida on 28 February. Both refute 3 January, which is the claim at issue.

---

## CORRECTED [2026-09-09] — the null was true and stated too widely

This node originally said `suboxone` had "no occurrence in the Facebook export,
in any year". Searched across the whole archive rather than the 2010 window, it
has **fourteen**, from 2011 to 2021
([`dat:0055`](0055-facebook-corroborates-the-2010-maintenance-start.md)).

The null this node actually rests on is unaffected: there is no occurrence
anywhere in 2010, and February 2010 remains PARTIAL at 10 messages against a
median of 32, so that silence still carries no weight either way. The claim and
the body now say 2010 rather than "any year".

The overstatement came from reporting a windowed search as though it were an
archive-wide one — the search had been run `--from 2010-01 --to 2010-04` and the
sentence dropped the scope. A coverage figure is only as wide as the window it
was computed over, which is this repository's own rule applied to a sentence
about a null rather than to a number.
