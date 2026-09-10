+++
id            = "dat:0049-old-wiki-live-contradictions-inventory"
layer         = 1
type          = "datum"
title         = "The prior wiki listed 49 live contradictions, and this repository has already closed one of them"
claim         = "`wiki/meta/open-questions.md`, generated 2026-09-04, lists 49 live contradictions across 44 distinct pages under the heading \"Pages making incompatible claims, held rather than resolved. These are the highest-value items here: each one is a place the corpus knows it is wrong somewhere and has not yet found out where.\" By area: mind 20, people 12, self 6, timeline 5, interests 3, legal 3. Four pages appear twice (`legal/2015-possession-arrest`, `mind/concepts/conflict-architecture`, `mind/concepts/contact-gini`, `people/ally-lubin`). One of the three legal entries — an October 2017 message read as evidence of a separate, otherwise undocumented DUI — is resolved by [`dat:0031`](0031-dui-belongs-to-the-other-speaker.md): the line is attributed to the other participant in the thread, not to the subject, so there is no DUI to reconcile. Two further entries, on `self/twitter/2009` and `timeline/periods/full-sail-2008-2010`, are advanced but not closed by [`dat:0045`](0045-facebook-graduation-claim-september-2009.md)."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:wikitest-rebuild-session-2026-09-09"]
measurement   = true
confidence    = "high"
extraction    = "Counted 2026-09-09 from the Live contradictions section of wiki/meta/open-questions.md in raw/old-wiki-export-2026-09-04/whole.txt, matching lines of the form `- **[[wiki/...]]**`. Per dat:0048 this page is a scrape and is not reliable as a STATUS list — an entry may have been resolved on its own page after the digest ran. The counts are of what the digest lists, not of what is genuinely open."
importance    = 4
tags          = ["old-wiki", "meta", "backlog"]
created       = "2026-09-09"
updated       = "2026-09-09"

[when]
start = "2026-09-04"
end   = "2026-09-04"
+++

The prior wiki's own list of places it knows it is wrong. It is the best
available map of where the remaining 480 pages are worth reading, and per
[`dat:0048`](0048-corrected-claim-still-standing-in-its-own-page.md) it must be
read as *what the pages say* rather than as current status.

## One is already closed here

The `legal/2015-possession-arrest` entry reads: *"An October 19, 2017 message to
Christo Coan — 'hell yeah I already got a DUI I'm not getting any more of those
:D' — indicates a separate, otherwise undocumented DUI."* The page reasoned
carefully about how that could coexist with the subject's statement that the
possession arrest was "my first and only real arrest", and proposed that a DUI
issued by citation without a booking would reconcile them.

[`dat:0031`](0031-dui-belongs-to-the-other-speaker.md) read the thread. The line
is Christo's, twenty-four seconds after Dan offers the floor to anyone who wants
to crash, and it is his reason for not driving. The reconciliation was never
needed. **This is the first of the prior wiki's own open contradictions retired
by work in this repository**, and it was retired by reading the source rather
than by reasoning about it — which is the entire argument of
[`pat:reasoning-sound-provenance-unreliable`](../patterns/reasoning-sound-provenance-unreliable.md)
in one case.

## Where the rest are

| area | listed | pages |
| :--- | ---: | ---: |
| mind | 20 | 18 |
| people | 12 | 11 |
| self | 6 | 6 |
| timeline | 5 | 5 |
| interests | 3 | 3 |
| legal | 3 | 1 |

`mind/` and `people/` carry two thirds of them, and both are areas this
extraction has barely touched — one page of 78 and none of 175. That is where
the yield is, and it is also where the contradictions are hardest to settle,
because most of them are two first-hand accounts of the same event rather than a
claim against a document.

## What the list is good for, stated narrowly

It is a reading order, not a to-do list. Several entries are held open for the
right reason and should stay open: two people giving incompatible first-hand
accounts of the same night is not a defect to be cleared, it is the thing the
record actually contains. The ones worth attacking are the entries where a
**source can be read** rather than a judgement made — the DUI was one, the
graduation date is another, and the count of estate advances on `people/rod-banks`
(a spine listing one $10,000 advance against a thread holding five totalling
$32,500) is a third.

---

## UPDATED [2026-09-09] — a second one closed, the same way

The `people/rod-banks` entry — a page thread holding five estate advances
totalling $32,500 against a spine line recording one $10,000 advance on
2020-06-23 — is retired by
[`dat:0051`](0051-estate-advances-both-pages-were-right.md). There were six
advances. Both pages were right about the part each could see; the wiki's own
first-named hypothesis, *"either there were two $10,000 advances four months
apart"*, was the correct one, and the message confirming it sits in a thread
neither page was reading.

The `mind/synthesis/supply-network` entry is **advanced but not closed** by
[`dat:0055`](0055-facebook-corroborates-the-2010-maintenance-start.md): the
informal channel and the prescribed one overlap across at least eight years
rather than succeeding one another, so neither page need be wrong — but the
Facebook record ends 2022-09 and the May 2026 no-show that page reasons from is
outside it entirely.

The `timeline/events/august-2026-morgantown-call` entry is **confirmed rather than
closed** by [`dat:0057`](0057-morgantown-audio-contradiction-reproduces.md): the
conflicting statements are real and in the corpus, the page's timestamps are four
hours ahead of it, and which statement is true remains undetermined. A
contradiction the wiki held open, checked and found genuine, is worth as much as
one closed — it is the difference between a page being cautious and a page being
right.

Two of 49 closed, and the pattern in how they closed is worth more than the
count. Neither was adjudicated. Both were settled by **reading a source end to
end** — a Facebook thread for the DUI, two estate threads here — and in both
cases the prior wiki's reasoning was sound and its evidence was partial. That is
[`pat:reasoning-sound-provenance-unreliable`](../patterns/reasoning-sound-provenance-unreliable.md)
holding on two more cases, and it sharpens the reading order in the section
above: the entries to attack are the ones where a thread exists that nobody has
read to the end.
