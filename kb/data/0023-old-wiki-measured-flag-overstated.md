+++
id            = "dat:0023-old-wiki-measured-flag-overstated"
layer         = 1
type          = "datum"
title         = "The prior wiki identified a defect in its own measurement flags"
claim         = "The prior wiki asserted that four of the six cocaine intake events on 2026-08-30/31 carried exactly 0.1 g, which is the value of its logging portal's ONE LINE preset; that intake/substances.json defines that preset as estimated at low confidence, describing 0.1 g as \"by eye, the widest-spread estimate here\"; and that those events nevertheless reached the log flagged measured. It concluded that its own 100% coverage figure is \"honest about how many events carry a number and optimistic about where those numbers came from.\""
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "From the 'What it does not settle' section of wiki/health/cocaine.md. The page reaches this by comparing logged values against its own preset definitions — a check on the instrument rather than on the data."
importance    = 5
tags          = ["old-wiki", "epistemics", "measurement"]
created       = "2026-09-09"

[when]
date = "2026-08-31"
+++

The best single piece of epistemic work in the recovered material.

The prior wiki had, for the first time, a measured record to set against years
of recollection — the thing it had been missing. The available move was to lean
on it. Instead it audited the instrument and found the instrument wanting.

The chain: a one-tap preset writes 0.1 g. The preset's own definition file calls
that value *estimated, low confidence, "by eye, the widest-spread estimate
here."* The event arrives in the log flagged `measured`. Nothing lied — the flag
means "a number was entered," and a number was — but the word carries a
precision claim the value cannot support, and four of six events are affected.

So the page's headline coverage figure, 6 of 6, survives with its meaning
narrowed: it counts how many events carry a number, and certifies nothing about
where the numbers came from. The page says exactly that, in place, beside the
figure.

Two things follow. The measured-vs-recollected distinction this data was
supposed to establish is **weaker than the table implies**, which is a finding
against the page's own interest. And the defect is in the *portal*, not the
analysis — a UI affordance quietly upgrading an estimate to a measurement — which
is the class of error that survives any amount of care downstream.
