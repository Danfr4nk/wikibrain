+++
id         = "dat:0030-combos-corroborated-first-person"
layer      = 1
type       = "datum"
title      = "The corpus carries a contemporaneous first-person admission of the Combos theft"
claim      = "Searching the authoritative corpus for 'combos' returns 8 hits, five of them in December 2015. Three are outbound and contemporaneous: \"To go fix the combos incident\" (2015-12-09), \"Fuckin combos\" (2015-12-09), and \"Because I took combos\" (2015-12-11), the last sent while waiting somewhere he describes as \"sitting here waiting AGAIN\". A fourth outbound message on 2015-12-11 reads \"DID YOU STEAL MORE COMBOD\" / \"COMBOS\" / \"he was a nice dude\" in sequence."
cites      = ["src:imessage-corpus-2026", "src:wikitest-rebuild-session-2026-09-09"]
confidence = "high"
extraction = "Run 2026-09-09 with bin/wb-corroborate against corpus/messages.csv, sha256-verified against the manifest. December 2015 holds 4,088 messages against a corpus median month of 1,123, so this window is well covered and a null result would have been informative. It was not null."
importance = 4
tags       = ["legal", "corpus", "corroboration"]
created    = "2026-09-09"

[when]
start = "2015-12"
end   = "2015-12"
+++

The first successful promotion of a prior-wiki claim out of testimony, and it
corrects the claim while confirming the event.

## What the prior wiki said its evidence was

That the corpus holds "no contemporaneous account" of the theft, and that the
strongest thing it has is a trooper's remark: *"During the December 2015
barracks trips … the trooper handling the paperwork recognised Dan and ribbed
him: **DID YOU STEAL MORE COMBOS**. That single line is the strongest evidence
the wiki holds … a trooper does not make that joke about nothing."*

## What the corpus actually holds

That line is **outbound** — Dan sent it, on 2015-12-11, followed immediately by
`COMBOS` (correcting his own typo) and `he was a nice dude`. Read in sequence it
is plainly Dan *recounting* what a trooper said, to someone else, after the
fact.

So the prior wiki treated a **second-hand report as a captured utterance**. Its
inference — a trooper does not make that joke about nothing — survives, because
the report is still first-person testimony that the remark happened. But the
evidence is one step further from the event than the page presented it, and the
page's confident framing hid that step.

## The event is better evidenced than the page claimed

Three outbound messages, all December 2015, all contemporaneous:

- *"To go fix the combos incident"* (12-09) — a matter requiring action
- *"Fuckin combos"* (12-09)
- *"Because I took combos"* (12-11) — **a first-person admission**, sent while
  *"sitting here waiting AGAIN"*

The prior wiki's own Gaps section says the corpus contains "no contemporaneous
account … Everything specific" is missing. A first-person admission of the act,
dated, in the month of the barracks trips, is a contemporaneous account. The
census that reached the opposite conclusion ran over the superseded dump
(`dat:0028`) and this material was not in it.

## Why this is the template

The claim went in as *the prior wiki asserted a trooper said X*. It comes out as
*Dan reported a trooper saying X, and separately admitted the act in writing at
the time*. Neither the confirmation nor the correction was reachable by reading
the page more carefully. Both required going to a different source and looking.
