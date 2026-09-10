+++
id            = "dat:0058-graduation-september-2009-then-audit-and-certification"
layer         = 1
type          = "datum"
title         = "The operator graduated in September 2009 and stayed on to audit a class, do labs and finish a Pro Tools certification"
claim         = "The operator states, correcting this repository directly: he graduated Full Sail in **September 2009**, not December, and after graduating he audited one class, continued doing labs, and was still working toward his Pro Tools operator certification. This resolves the open question in [`dat:0045`](0045-facebook-graduation-claim-september-2009.md) — *what were the November and December classes, if he had already finished in September?* — and it reconciles every dated artefact on the record: the tweet of 2009-08-31 (\"i start my last month of college tomorrow\", putting the final month in September), the two Facebook messages of 2009-09-26 (\"I acually just graduated today for music production\"), and the November–December tweets the prior wiki read as continued enrolment (\"pro tools lab. noice\" 30 Nov; \"aced my practical without headphones\" 14 Dec; \"in class....\" 15 Dec; \"taking aws final with it\" 19 Dec), which under this account are the audit, the labs and the certification work rather than a degree in progress."
cites         = ["src:operator-testimony-2026-09-09",
                 "src:facebook-export-2026-06-23",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:operator-testimony-2026-09-09"
confidence    = "high"
extraction    = "Stated by the operator to this session on 2026-09-09, unprompted by a question about the December evidence, as a correction to a claim he had read on the published site. The tweet quotations are transcribed from the prior wiki and the tweet archive is not held here; the Facebook messages were read directly (dat:0045)."
importance    = 4
tags          = ["testimony", "correction", "timeline", "old-wiki"]
created       = "2026-09-09"

[when]
start = "2009-09"
end   = "2009-12"
+++

## The account, and why it lands harder than testimony usually does

Four dated artefacts sat on the record with no reading that took all four:

| when | what | the problem |
| :--- | :--- | :--- |
| 2009-08-31 | *"i start my last month of college tomorrow"* | points at a September finish |
| 2009-09-26 | *"I acually just graduated today"*, told to two people | says September, flatly |
| 2009-11-30 → 12-19 | pro tools lab, a practical, "in class", an AWS final | reads as still enrolled |
| 2026 | *"graduated August 2009"* | matches none of them |

The prior wiki held this open across two pages and said only a Full Sail
transcript would settle it. This repository added the Facebook messages and
sharpened the question rather than answering it
([`dat:0045`](0045-facebook-graduation-claim-september-2009.md)).

**Auditing a class, running labs and finishing a certification is not a fourth
hypothesis competing with the other three. It is the one state of the world in
which all four artefacts are true at once.** A person who has graduated can sit
in a lab, take a practical and sit an AWS final — and would have no reason to say
so differently in a tweet, because from the inside it is just Tuesday.

That is what raises this above ordinary recall. It was not offered to defend a
position; it was offered as a correction to a page, and it happens to make
previously incoherent evidence cohere. Testimony that *explains* residue is a
different instrument from testimony that *asserts* a fact
([`int:contemporaneous-is-not-the-same-as-true`](../interpretations/contemporaneous-is-not-the-same-as-true.md)).

## What it corrects here, and what it leaves standing

**Corrected.** This repository published, on the live site, a framing in which
the operator was *"still enrolled in December"* and the September and December
evidence were *"in tension"*. They are not in tension. The tension was an
artefact of assuming that coursework implies enrolment in a degree, which nobody
had examined.

**Still standing.** The prior wiki's testimony ledger scores t013 —
*"graduated Full Sail (AS Recording Arts) in August 2009"*, stated `certain` — as
REFUTED, and that verdict survives: September is not August. What does not
survive is its stated reason. It refuted the claim on the grounds that he was in
school until December; the correct grounds are that he finished in September, one
month later than he remembered rather than four months earlier than the record
appeared to show. Right answer, wrong route — the shape
[`pat:reasoning-sound-provenance-unreliable`](../patterns/reasoning-sound-provenance-unreliable.md)
keeps describing.

**Still unheld.** No transcript, diploma or certification record is in this
repository. This is the operator's account of his own education, and it is filed
as testimony because that is what it is. A Full Sail transcript would move it
from `attributed_to` to first-party, and the certification itself is separately
checkable — Avid publishes operator certifications, and a dated credential would
independently fix the December work as certification work rather than coursework.

## The other thing this is evidence of

The correction arrived because the wiki was **published and browsable**, and its
subject read it and found a claim about his own life that was wrong. That is the
loop the whole system is for, and it had not closed once before today. Every
correction in this repository until now was found by a machine re-reading its own
sources.
