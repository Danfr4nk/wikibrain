+++
id              = "pat:reasoning-sound-provenance-unreliable"
layer           = 4
type            = "pattern"
title           = "The prior wiki's reasoning holds up; its quote provenance does not"
cites           = ["dat:0028-prescriber-quotes-partly-unverifiable",
                   "dat:0030-combos-corroborated-first-person",
                   "dat:0031-dui-belongs-to-the-other-speaker",
                   "dat:0033-2011-suboxone-appointment-with-screening",
                   "dat:0039-old-wiki-eviction-notice-march-2018",
                   "dat:0040-quoted-bankruptcy-message-absent",
                   "dat:0016-old-wiki-conflated-two-legal-matters",
                   "dat:0045-facebook-graduation-claim-september-2009",
                   "dat:0046-facebook-corroborates-two-ledger-adjudications",
                   "dat:0050-corpus-traces-of-the-type-are-downstream-of-it"]
evidence_count  = 6
counterexamples = ["dat:0030-combos-corroborated-first-person",
                   "dat:0040-quoted-bankruptcy-message-absent",
                   "dat:0046-facebook-corroborates-two-ledger-adjudications",
                   "dat:0050-corpus-traces-of-the-type-are-downstream-of-it"]
confidence      = "moderate"
importance      = 5
created         = "2026-09-09"
updated         = "2026-09-09"
rechecked       = "2026-09-09"
tags            = ["old-wiki", "epistemics", "extraction"]
falsifiers      = [
  "A page whose argument is unsound while its quotations all verify — the inverse pairing. That would show the two properties are independent rather than the split this pattern claims.",
  "A run of ten consecutive quotations that all verify verbatim. Six checks have produced four provenance failures; a clean run of that length would put the rate near the base rate for any archive and make this unremarkable.",
  "Evidence that the unverifiable quotes come from channels the corpus does not hold — Facebook, a call, a since-deleted thread — rather than from misattribution. That would make the pattern about COVERAGE rather than about provenance, which is a different and much less alarming finding.",
]

[when]
start = "2026-09-09"
end   = "2026-09-09"
+++

## The split

Six claims from the prior wiki have now been checked against independent
sources. **Every check changed something**, and the changes fall almost entirely
on one side of a line.

**Its reasoning is reliable.** Repeatedly, on inspection, the argument is
better than it needed to be — an address on court paper is *of record* and may
lag a place of sleep; a partial falsifier narrows a rule rather than breaking
it; a weak source gets braced with contemporaneous quotes precisely because it
is weak; two of its own pages disagree and it records the disagreement on both.
Nothing checked so far has found a bad inference from the evidence it believed
it had.

**Its provenance is not.** Four of six checks found a quotation that does not
sit where the page put it:

| | |
| :--- | :--- |
| [`dat:0031`](../data/0031-dui-belongs-to-the-other-speaker.md) | A quote attributed to the subject belongs to the **other speaker**. The claim it supported dissolves entirely. |
| [`dat:0028`](../data/0028-prescriber-quotes-partly-unverifiable.md) | **Three of four** quoted messages absent from the authoritative corpus; the census behind them ran on a superseded dump. |
| [`dat:0040`](../data/0040-quoted-bankruptcy-message-absent.md) | One of two bracing quotes absent — and the word appears **twice in 192,140 messages**, neither time from the speaker. |
| [`dat:0030`](../data/0030-combos-corroborated-first-person.md) | A page's *stated strongest evidence* — a trooper's remark — is the subject **recounting it afterwards**, one step further from the event than presented. |

## Why this is the useful shape

If the reasoning were the weak half, extraction would be hopeless: every
inference would need redoing, and the pages would be worth less than the raw
material underneath them.

It is the other way round. The arguments are worth reading and mostly worth
keeping. **Every quotation is worth checking**, and checking is cheap now.

That converts directly into an extraction rule: *take the argument, verify the
quote.* A claim resting on reasoning inherits `moderate`; a claim resting on a
quotation inherits nothing until `bin/wb-corroborate` has been run against it.

## The counterexamples are real and are listed above

`dat:0030` **confirmed** the underlying event — a contemporaneous first-person
admission the page said did not exist. `dat:0040` **verified** one of its two
quotes verbatim. Checking is not a demolition; it has strengthened claims as
often as it has weakened them. What it has never yet done is leave one exactly
as it found it.

## `confidence = "moderate"`, and the honest caveat

Six checks, chosen by me, on pages I selected for being tractable. **The base
rate is unknown**: any archive checked this closely yields corrections, and
nothing here establishes that this rate is unusual.

## The third falsifier: attempted, blocked, and partly answered anyway

It is the one I would bet on, so I went to test it. The prior wiki's census
names its source — `raw/self/dox-scan/all_imessages_complete_dump.txt`, 28.9 MB,
still on Drive. If the missing quotes are in that dump and not in the
authoritative export, this pattern is about **coverage** and the right response
is acquiring channels rather than distrusting pages.

**Both routes are blocked.** Anonymous HTTPS returns a sign-in page — that folder
is not public, unlike the Facebook tree. The connector refuses at 28.9 MB against
a 10 MB limit. So the test needs one sharing change on one folder, exactly as
bulk Facebook did.

Recorded as **untested**, not as unlikely.

Two things narrow it in the meantime.

**Facebook cannot serve as the substitute test.** Its coverage ends 2022-09; the
unverified quotes are dated November 2024 and mid-2025. The channel that could
falsify this does not reach the years in question.

**One instance is immune to the falsifier entirely.**
[`dat:0031`](../data/0031-dui-belongs-to-the-other-speaker.md) is not a missing
quote. The line is present, in the source the page cited, in the export the page
was built from — and it is **attributed to the wrong speaker**. No coverage
story explains that: the text was there and the name beside it was there, and
the page carried one without the other.

So the coverage explanation, if it holds, accounts for at most three of the four
provenance failures. It cannot account for the one whose consequence was largest
— an entire contradiction the prior wiki carried for weeks about an event that
never involved the subject.

## RE-CHECKED [2026-09-09] — the denominator arrives, and it holds

Every instance behind this pattern was found by catching a quotation out. Six
checks, four provenance failures, and no case where a check was run and came back
clean — which meant the pattern had no denominator and could not distinguish "the
prior wiki's quotes are unreliable" from "quotes go wrong when you look at them".

[`dat:0046`](../data/0046-facebook-corroborates-two-ledger-adjudications.md) is
the first clean one. Two adjudications from the prior wiki's testimony ledger,
checked against the Facebook export — a channel it did not hold — and both stood.
The stronger half is that its *reasoning* stood: it excluded the Brooklyn move as
the referent of a 2010-02-17 tweet on the grounds that the move was settled and
undramatic by late January, and a Facebook message of 31 January shows exactly
that, in an archive fetched from a different company sixteen years later.

Eight checks, seven changes, one clean. The pattern's two halves now have
different standing:

- **"the reasoning holds"** is strengthened. This is the first time an inference
  was tested against evidence it was not built on, and it survived.
- **"the provenance does not"** is where the caution belongs, and the rate is
  four in eight rather than four in six.

`confidence` stays `moderate`. One confirmation does not settle a base rate, and
the sample is still chosen by me from pages picked for tractability.

The third falsifier is also now partly answered and it went against itself.
Facebook *is* one of the channels the corpus does not hold, and it did supply
material the corpus could not see — but what it supplied
([`dat:0045`](../data/0045-facebook-graduation-claim-september-2009.md)) is a
contemporaneous first-person claim that contradicts a different contemporaneous
record. So the extra channel did not resolve a provenance failure into a coverage
gap; it produced a new disagreement. That widens rather than narrows what
extraction has to be careful about, and the consequence is written up separately
in [`int:contemporaneous-is-not-the-same-as-true`](../interpretations/contemporaneous-is-not-the-same-as-true.md).
