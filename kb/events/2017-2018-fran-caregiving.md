+++
id         = "evt:2017-2018-fran-caregiving"
layer      = 2
type       = "event"
title      = "Paid full-time caregiving for Fran Coldren (six months at $15/hour, ending April 4, 2018)"
cites      = ["dat:0446-fran-coldren-evidence-table-and-death-moment-retraction", "dat:0708-acquisition-drive-fran-vigil-message-verified"]
confidence = "high"
importance = 4
tags       = ["fran-coldren", "caregiving", "family"]
created    = "2026-09-10"

[when]
start  = "2017-10"
end    = "2018-04-04"
approx = "October 2017 (inferred) – April 4, 2018 (documented)"

[[edges]]
rel         = "about"
target      = "ent:frances-coldren"
strength    = "strong"
asserted_by = "other"

[[edges]]
rel         = "about"
target      = "ent:annie-ulmer"
strength    = "moderate"
asserted_by = "other"
note        = "Dan and Annie were the paid caregivers together in 2017–18."
+++

## What happened

For the last six months of Fran Coldren's life, Dan was her paid
full-time caregiver at $15 an hour — Dan's own contemporaneous summary,
sent April 6, 2018, two days after her death:

> *"she was a trip dude but i spent the past 6 months looking after her
> full time ($15 an hour to play video games with gram is a good deal)
> and we had a lot of fun. got good closure and finally did something in
> my life that wasn't completely selfish haha."*

The message is verified verbatim in the held iMessage corpus
(message_id 153495, 2018-04-06 21:55:47 UTC = 17:55:47 EDT, outbound),
timestamped to the minute. The six-month duration and the $15/hour
figure are his words, not the wiki's inference — which is exactly why
they survive as the correction against the old wiki's multi-year
caregiving inference. [dat:0446], [dat:0708]

## Dated sequence

| when | what | source |
| :--- | :--- | :--- |
| 2016-01-18 | the handyman arrangement: *"I went to grams and made a list of work to do for her tomorrow"* — informal, pre-caregiving | [dat:0446] |
| 2017-11-26 | the family-threat reading: *"Especially and most specifically not people directly connected to my grandparents who are looking for any excuse to throw her in a nursing home"* (10:57 EST) — the nursing-home fear is already live | [dat:0446] |
| ~2017-10 | **paid full-time caregiving begins** — back-computed from the April 6 "past 6 months"; the start is inferred, the duration and wage are Dan's | [dat:0446], [dat:0708] |
| 2018-01-23 | *"after gram goes and we have a chance to get above water with the inheritance...i want"* — inheritance anticipation begins while she is alive | [dat:0446] |
| 2018-03-09 | surgery; nursing home on Monday (March 12) — *"she got through the surgery and supposed to go to a nursing home on monday"* (21:29 EST) | [dat:0446] |
| 2018-04-01 | moved to the Uniontown Hospital pediatric wing to die; 24-hour rotation mandated by Judge Fred Adams, held by Dan, Annie, Vicki, and Marla | [dat:0169-fran-vigil-fall-and-hospital-sequence](../data/0169-fran-vigil-fall-and-hospital-sequence.md) |
| 2018-04-04 | Fran dies, Dan and Annie in the room | evt:2018-fran-death |
| 2018-04-06 19:22 | *"thanks buddy. gram did aaaaaanything i asked her to, so the least i could do was be there for her"* — the closing verdict on the caregiving, two days after the death, verified in the held corpus | [dat:0447-fran-coldren-gedcom-golf-gift-protocol-unverifiable-rows](../data/0447-fran-coldren-gedcom-golf-gift-protocol-unverifiable-rows.md) |

## What is not verified

- **The payroll mechanism.** The claim that Judge Fred Adams authorized
  the pay (Dan, 2018-03-30, *"fred would have put the kaibosh on me being
  paid to watch gram"*) is absent from the held corpus — the only
  "kaibosh" in 192,140 records is an unrelated message. It rests on the
  unheld all_imessages_complete_dump.txt. [dat:0447]
- **Fran's standing directive** — *"keep me at home no matter what, do
  everything you can to not let me get taken from this house"* — has no
  held-corpus hit either; it is the page's account from unheld captures.
  [dat:0447]
- **The age-97 row** (*"a 97 year old woman with advanced dimentia,"*
  2017-12-29) is absent from the held corpus under every spelling. Age
  97 is arithmetically consistent with the dated birth (1920-08-15) and
  death (2018-04-04) regardless. [dat:0447]
- **Annie's pay.** The canonical record has Dan and Annie as the paid
  caregivers together; only Dan's wage is stated on record.

## Why this event is weighted heavily

The acquisition-drive page calls the April 6 message the drive's "only
documented success condition stated in his own voice" — and a sweep of
the sent corpus reportedly finds no second instance of Dan reporting a
good outcome from his own action (the page's assertion, not re-run).
Either way, the message is the reason this event's [when] block can be
drawn at month precision: a first-person, contemporaneous, dated,
verbatim-verified statement of duration and wage.

## Open questions

- Who authorized and funded the $15/hour arrangement, and when exactly it
  began (the October 2017 start is back-computed, not stated).
- Whether Annie drew a separate wage.
- The nursing home's name and the exact admission date.
- Whether Fran's standing directive exists in any held-dump row, which
  would settle its absence from the held slice.

## Cross-links

- [ent:frances-coldren](../entities/frances-coldren.md),
  [ent:annie-ulmer](../entities/annie-ulmer.md) — the cared-for and the
  co-caregiver.
- evt:2018-fran-death — the fall, vigil, and death that end the
  caregiving.
- [dat:0446-fran-coldren-evidence-table-and-death-moment-retraction](../data/0446-fran-coldren-evidence-table-and-death-moment-retraction.md)
  — the verbatim-verified evidence table.
- [dat:0708-acquisition-drive-fran-vigil-message-verified](../data/0708-acquisition-drive-fran-vigil-message-verified.md)
  — the 17:55 timestamp verification and the correction to the old
  wiki's multi-year inference.
