+++
id            = "dat:0041-rent-figures-exist-in-the-record"
layer         = 1
type          = "datum"
title         = "Contemporaneous rent figures and deposit negotiations are in the corpus"
claim         = "The prior wiki's `the-unpapered-address` asserts that the corpus contains \"no lease, no rent figure recorded at the time, no signatory and no deposit for any of the seven residences.\" A term census contradicts the rent and deposit halves: the corpus returns 52 whole-word hits for `rent`, 12 for `landlord`, 8 for `lease` and 4 for `security deposit`. Among them, two outbound messages dated 2016-05-21 carry explicit figures — \"years and years of scrambling to come up with $3000 rent each case month\" against \"rent under $1k\", and \"the place we're taking about is only six hundred fucking dollars. That means, we pay $100 rent every month\" — and outbound messages in 2016, 2019 and 2020 discuss paying or offering security deposits, including a 2019 approach to a New York rental company offering \"a large security deposit\"."
cites         = ["src:old-wiki-export-2026-09-04", "src:imessage-corpus-2026",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Census run 2026-09-09 with bin/wb-corroborate against the sha256-verified corpus, using whole-word matching (the fix in dat:0036 — substring matching would have counted `parent` and `current` as `rent`). Speakers confirmed from the output rather than assumed. Which of the seven residences each figure attaches to is NOT established; see the body."
importance    = 4
tags          = ["places", "corroboration", "old-wiki"]
created       = "2026-09-09"

[when]
start = "2016"
end   = "2020"
+++

A thesis that is largely right and overstated in one clause, and the clause is
load-bearing.

## What the page argues, and what survives

The argument is that seven residences across sixteen years produced no housing
paperwork — and that the only document fixing a specific address on a specific
day was a magisterial summons for a summary offence. That is a genuinely
striking observation and this datum does not touch it. **A message is not a
lease.** No signed instrument, no deposit receipt and no signatory has surfaced,
and nothing here suggests one will.

## What does not survive

The clause *"no rent figure recorded at the time."* Figures exist, dated, in his
own outbound messages:

> *"after years and years of scrambling to come up with $3000 rent each case
> month … it is not even a challenge to do with rent under $1k"* — 2016-05-21

> *"the place we're taking about is only six hundred fucking dollars. That means,
> we pay $100 rent every month"* — 2016-05-21

Deposits likewise: paying one in 2016, offering *"a large security deposit"* to a
New York rental company in 2019, and drawing on an inheritance account to cover
one in 2020.

## The distinction the page needed and did not make

Two different absences were merged into one sentence:

| Claim | Status |
| :--- | :--- |
| No housing **documents** exist in `raw/` | Untouched — probably true |
| No rent **figure** was recorded at the time | **False** — the corpus holds several |

The first is about an archive. The second is about a message record that was
searchable the whole time. Stating them together let the weaker one borrow the
stronger one's support, which is the same move
[`pat:reasoning-sound-provenance-unreliable`](../patterns/reasoning-sound-provenance-unreliable.md)
describes: the argument is sound and its factual grounding is looser than
presented.

## What this does not establish

**Which residence each figure attaches to.** The $3000 and $100 figures sit in
one 2016 conversation contrasting a past cost with a prospective one, and
neither names an address. If none of them attach to the seven, the page's claim
survives on a technicality — and it would still have been stated without
checking.
