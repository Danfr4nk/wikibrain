+++
id            = "dat:0051-estate-advances-both-pages-were-right"
layer         = 1
type          = "datum"
title         = "Six estate advances, not five, and the contradiction between the two pages dissolves"
claim         = "The prior wiki held a live contradiction: `wiki/people/rod-banks` records five advances against the Fran Coldren estate totalling $32,500, none dated 2020-06-23 and the $10,000 among them dated 2020-02-04, while the spine timeline carries a single line, \"2020-06-23 · Estate advance issued · $10,000\". Its own stated readings were that either there were two $10,000 advances four months apart, or the spine is wrong. The corpus settles it: the first is correct. The two estate threads hold 149 messages between 2017-04-19 and 2020-08-26, and the attorney and the executor each state the amounts in their own words — $5,000 (2019-10-12, re-issued 2019-10-16 to a different payee), $10,000 (2020-02-04), $7,000 (2020-03-06), $3,000 (2020-03-27), $7,500 (2020-04-17, authorised by the executor and issued by the attorney in two separate messages the same day), which sum to exactly $32,500. A sixth is confirmed by the executor on 2020-08-26: \"on June 23,2020 we issued you a check for $10,000 which I told you would be deducted from the final distribution.\" Six advances, $42,500. The same message states the final share as $144,069.31 before that deduction and $134,069.31 after, available 2020-09-01."
cites         = ["src:imessage-corpus-2026", "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Run 2026-09-09 against the sha256-verified corpus, re-pulled for the run and removed after. Both estate threads read in full (149 messages) rather than searched, and every numeric token in them enumerated to check for a seventh advance; there is none. Each amount is stated by the attorney or the executor in an inbound message, so the figures are the counterparties' own and not the subject's recollection."
importance    = 4
tags          = ["old-wiki", "corroboration", "people", "money"]
created       = "2026-09-09"

[when]
start = "2019-10-12"
end   = "2020-08-26"
+++

The second of the prior wiki's 49 live contradictions
([`dat:0049`](0049-old-wiki-live-contradictions-inventory.md)) retired, and
neither page was wrong.

## The sequence, from the counterparties' own messages

| date | amount | who states it |
| :--- | ---: | :--- |
| 2019-10-12 | $5,000 | attorney — *"I will write a check payable to you for $5000"* |
| 2020-02-04 | $10,000 | attorney — *"I will prepare a check for $10,000"* |
| 2020-03-06 | $7,000 | attorney — *"I will prepare a check for $7000"* |
| 2020-03-27 | $3,000 | executor — *"I just sent rod a text authorizing $3,000"* |
| 2020-04-17 | $7,500 | executor and attorney, separately, the same day |
| | **$32,500** | **the five on `rod-banks`** |
| 2020-06-23 | $10,000 | executor, retrospectively on 2020-08-26 |
| | **$42,500** | **all six** |

The 2019-10-12 cheque was re-issued four days later to a different payee at the
subject's request, which is one payment and not two.

## Why both pages were right

`rod-banks` counted what its thread contains. That thread runs to 2020-04-17 for
advances and holds five. The spine's single line records the sixth, and it is
confirmed by the executor two months after the fact in a message reconciling the
final distribution. Neither figure was ever in conflict with the other — the
contradiction was an artefact of each page seeing part of the sequence and
neither seeing the whole.

The wiki named this possibility first: *"Either there were two $10,000 advances
four months apart, or the spine's ⟨line is wrong⟩."* It picked the right
hypothesis and lacked the one message that confirms it, which sits in a thread
neither page was reading.

## What the resolution cost, and what it establishes

Nothing was reasoned. The threads were read end to end and every numeric token in
them enumerated, which is how the absence of a seventh advance is established
rather than assumed. That is the same move that closed
[`dat:0031`](0031-dui-belongs-to-the-other-speaker.md), and both entries in
[`dat:0049`](0049-old-wiki-live-contradictions-inventory.md) that have now gone
down went down the same way — by reading a source, not by adjudicating between
two accounts.

It also adds a figure neither page carries: the estate share itself, $144,069.31
gross, $134,069.31 after the June advance, dated available 2020-09-01. That is
first-party from the executor and is new to this system.

## The limit

These threads end 2020-08-26. Whether the September distribution arrived as
described is `never_observed` here — the message says the subject's mother was to
receive and deposit the cheque, and nothing in these threads confirms it
happened. Recorded because a request confirmed is not a payment made, which is
exactly the error the spine was suspected of and did not commit.
