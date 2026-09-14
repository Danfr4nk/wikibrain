+++
id            = "dat:0061-elizabeth-eleanor-counterparty-of-2013-dosage-exchange"
layer         = 1
type          = "datum"
title         = "The 2013 Facebook dosage exchange's counterparty is named: Elizabeth Eleanor, a fellow recovering addict"
claim         = "wiki/health/chemical-architecture.md names the counterparty of the July 10, 2013 Facebook exchange that carries the corpus's only concrete Suboxone dosage figure (\"i'm still on 2mg of suboxone a day, it's been almost 5 years since i touched an opiate and i'm still too terrified to get off\") as Elizabeth Eleanor, a fellow recovering addict; the wiki/people/elizabeth-eleanor page in the same corpus describes her entire relationship with Dan as a single overnight July 10–11, 2013 Facebook exchange — months after his return to Uniontown from NYC — in which she pushes NA/AA and the Big Book, he declines citing his INTP self-type (\"i think my brain works a little differently than most and as an INTP and heavily introverted, logic-based dude...i can't see myself flourishing in AA/NA\"), and she closes with \"I respect your views... I hope you can prove me wrong though.\" The two never spoke again on record."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Read from the elizabeth-eleanor page body in corpus__3.txt (line ~55238) and the chemical-architecture page's dosage block (line ~6637). The dosage quotes themselves were independently verified against the facebook archive by dat:0055, which worked one unnamed counterparty. The facebook threads are not on disk here (raw/facebook-threads/*.txt is gitignored), so the name attribution rests on the wiki's page, not a re-read of the exchange."
importance    = 3
tags          = ["health", "old-wiki", "facebook", "suboxone"]
created       = "2026-09-09"

[when]
start = "2013-07-10"
end   = "2013-07-11"
+++

## Extends dat:0055, does not replace it

[`dat:0055`](0055-facebook-corroborates-the-2010-maintenance-start.md) verified
the dosage and maintenance-duration quotes from the facebook archive but worked
an unnamed counterparty ("one counterparty, one archive"). This page and the
elizabeth-eleanor page supply the name, the infobox ("sex: female,
location: uniontown, relationship_to_dan: acquaintance"), and the exchange's
character: a recovery-philosophy debate between a 12-step practitioner and Dan's
secular self-model of addiction as "a neurological imbalance and a series of
habitual behavior + neglect."

## Two cautions carried over

1. The name attribution is **corpus-internal**: it comes from the wiki's own
   people page, which cites `raw/self/facebook/facebook-ihatedanfrank/messages/inbox/elizabetheleanor_7psnsflijg/message_1.html`
   — a path that does not exist in this repo's raw/ tree. The export filename
   component `elizabetheleanor` independently corroborates the name's shape,
   but the conversation was not re-read.
2. The page also claims this is the earliest dated primary-source instance of
   Dan self-typing INTP. That claim is not checked by this node.

## Why it matters for the dosage figure's weight

A dosage figure whispered to a recovery interlocutor in a one-off overnight
exchange has a different evidentiary character than one posted publicly: less
performative, more confessional ("i'm still too terrified to get off").
The name makes the exchange re-findable — `elizabetheleanor_7psnsflijg` — when
the threads are re-fetched from the public Drive tree.
