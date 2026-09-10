+++
id            = "dat:0055-facebook-corroborates-the-2010-maintenance-start"
layer         = 1
type          = "datum"
title         = "A 2013 message independently dates the maintenance start to early 2010, and shows both supply topologies running at once"
claim         = "In a Facebook exchange of 2013-07-10, the subject writes outbound: \"i've been on maintainence for 3.5 years\", \"i was on the strips when i had a doctor in nyc\" (past tense), \"and i'm down to 2mg/day\", \"yes still doing subs\", and — to the same counterparty — \"if you're ever unloading or come in contact call me\". Counting back 3.5 years from July 2013 gives roughly January 2010, bracketing the 2010-02-17 start the prior wiki's testimony ledger scores as CONFIRMED (t014) from a same-day tweet. The archive holds fourteen occurrences of `suboxone` between 2011 and 2021, all in threads with the same counterparty: he offers to source in 2020 (\"I have a buddy with Suboxone pills\", 2020-10-01; \"Found you six suboxone pills\", 2020-10-20) and in 2021-03-31 asks \"3 months at a time is legit, are the suboxone or subutex?\", a question that presupposes a multi-month prescription on the subject's side."
cites         = ["src:facebook-export-2026-06-23", "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Run 2026-09-09 with bin/wb-corroborate --facebook over the completed 403-thread archive (dat:0054), substring matching on `suboxone` and `subutex` with three messages of context. Speakers are from the export's own block structure. The ledger's t014 tweet is transcribed from the prior wiki and the tweet archive is NOT held here."
importance    = 4
tags          = ["facebook", "corroboration", "health", "old-wiki"]
created       = "2026-09-09"

[when]
start = "2013-07-10"
end   = "2021-03-31"
+++

## A third channel on the start date

The prior wiki's ledger scores t014 — *"Dan's continuous Suboxone regimen began on
17 February 2010"* — as **confirmed**, on a same-day tweet reading *"this is the
most stressful day/decision of my life"*, and states its own limit plainly: the
subject never names the decision, so it is a dated alignment on an independent
artefact rather than a clinical record.

This is a different kind of evidence for the same claim. *"i've been on
maintainence for 3.5 years"*, written in July 2013 with no reason to be
performing for a record, puts the start at roughly January 2010.

**It brackets rather than pinpoints.** "3.5 years" is a round number in casual
text; it is consistent with 2010-02-17 and would be equally consistent with
December 2009 or March 2010. What it establishes is the year and the season, from
a channel the ledger did not hold, three years after the fact instead of sixteen.

Together with [`dat:0046`](0046-facebook-corroborates-two-ledger-adjudications.md),
which corroborated the ledger's *exclusion* of the Brooklyn move as the tweet's
referent, the 2010 window now has two independent Facebook supports for a
conclusion the ledger reached from Twitter alone.

## Both supply topologies, running together, for a decade

[`dat:0049`](0049-old-wiki-live-contradictions-inventory.md) lists an open
contradiction on `mind/synthesis/supply-network`: that page treats the
counterparty here as the standing supply line and reads a May 2026 no-show as a
single point of failure giving way, while June 2025 messages describe a
prescription being moved between pharmacies — a different topology.

The archive says both have been true at once since at least 2013:

| | |
| :--- | :--- |
| 2013-07-10 | *"i was on the strips when i had a doctor in nyc"* — a prescriber, in the past tense |
| 2013-07-10 | *"if you're ever unloading or come in contact call me"* — soliciting the same counterparty |
| 2020-10-01 | *"I have a buddy with Suboxone pills"* — offered, not requested |
| 2020-10-20 | *"Found you six suboxone pills"* |
| 2021-03-31 | *"3 months at a time is legit, are the suboxone or subutex?"* |

The 2021 line is the informative one and it is also the one to be careful with. A
question about "3 months at a time" presupposes something on the subject's side
worth asking about, and a multi-month script is the obvious referent — but the
referent is **not established from the fragment**, and reading it as decisive is
exactly the error [`dat:0028`](0028-prescriber-quotes-partly-unverifiable.md)
records.

What the sequence does establish is that the informal channel and the prescribed
one are not successive states. They overlap, across at least eight years, which
is a different shape from the single-point-of-failure reading and does not require
either page to be wrong.

## Scope

Fourteen messages, one counterparty, one archive. This does not touch what the
supply looked like in 2025 or 2026 — the Facebook record ends 2022-09, so the
May 2026 no-show that page reasons from is outside it entirely.
