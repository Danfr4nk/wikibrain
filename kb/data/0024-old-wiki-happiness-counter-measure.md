+++
id            = "dat:0024-old-wiki-happiness-counter-measure"
layer         = 1
type          = "datum"
title         = "The prior wiki measured an outcome running opposite to its input variable"
claim         = "The prior wiki asserted that a sweep of first-person happiness claims in sent messages returned 0.87 per 1,000 messages in 2018, 0.34 in 2019 and 0.41 in 2020, against 7.86 in five weeks of late 2015 — among the lowest rates it found anywhere in the corpus — and that this window is identical to the 2017–2020 period in which it had documented cocaine consumption escalating from roughly 1 g/day to 3.5–7 g/day following an inheritance removing the capital constraint."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "From the 'happiness counter-measure' section of wiki/health/cocaine.md, attributed there to a bin/mine-messages sweep. The rates are computed from the message corpus, which IS independently held here and re-pullable — so unlike most claims on this page, this one is checkable against a source the current system has. The dosage arc it is set against is retrospective self-report and is not."
importance    = 4
tags          = ["old-wiki", "health", "measurement"]
created       = "2026-09-09"

[when]
start = "2015"
end   = "2020"
+++

An outcome variable placed beside an input variable, which is rarer in this
material than either alone.

The dosage arc is self-report about quantities. The happiness rate is a count
over sent messages. They are independent measurements of different things across
the same window, and they run opposite: consumption at its documented maximum,
first-person report of feeling good at close to its documented minimum.

**What it is not.** Not a causal claim, and the page does not make one. Two
series moving in opposite directions across four years is a correlation over a
single subject with no control period and an obvious confound — the same window
carries an inheritance, its exhaustion, and whatever else 2017–2020 held.

**What makes it worth recording anyway** is that it runs against the reading a
bare dosage increase invites. "Resources unlocked, consumption rose, life
improved" is the natural story and the outcome measure does not support it.
A finding that closes off an attractive interpretation is worth more than one
that confirms an unattractive one.

**And it is checkable.** The rates come from `bin/mine-messages` over the message
corpus — which this system independently holds, verified byte-exact, and can
re-pull on demand. Nearly everything else extracted from these 497 pages
terminates in the prior wiki's own assertion. This terminates in a computation
over a source in hand. It is the first datum from the old material that could be
promoted out of testimony by running the numbers again.
