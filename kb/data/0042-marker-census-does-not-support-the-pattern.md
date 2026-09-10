+++
id            = "dat:0042-marker-census-does-not-support-the-pattern"
layer         = 1
type          = "datum"
title         = "A census of the prior wiki's error markers does not support the audit pattern"
claim         = "A mechanical count of dated error-marker blocks (`REVISED [`, `CORRECTED [`, `CONTRADICTION [`, `GAP CLOSED [`) across all 497 pages of the prior wiki returns 274 marks on 135 pages, plus 265 `RE-CHECKED [` blocks counted separately. Normalised by page length, `mind/` — the largest area whose claims are mostly conclusions with nothing external to check them — corrects at 0.39 marks per 10 kB against `health/` at 0.37, a difference of no consequence (Poisson, health observed 4 against 4.06 expected under mind's rate, p = 0.58). Only `legal/` sits materially above (1.20 per 10 kB, p = 0.025), on five marks across four pages. `self/` at 0.21 is genuinely low."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:wikitest-rebuild-session-2026-09-09"]
measurement   = true
confidence    = "high"
extraction    = "Run 2026-09-09 with bin/wb-census over raw/old-wiki-export-2026-09-04/whole.txt, whose sha256 matches its manifest. Marker definition committed in the tool and printed on every run: the token followed by ' [', i.e. a dated block. Re-runnable; the numbers in this claim are its output."
importance    = 5
tags          = ["old-wiki", "epistemics", "meta", "falsifier"]
created       = "2026-09-09"
updated       = "2026-09-09"

[when]
start = "2026-09-09"
end   = "2026-09-09"
+++

This measurement was collected to settle the load-bearing falsifier published on
[`pat:audit-strong-on-numbers-weak-on-meaning`](../patterns/audit-strong-on-numbers-weak-on-meaning.md).
It settles it against the pattern.

## The table

```
area         pages  errors   err/pg  err/10kB  %marked  rechk/pg   kB/pg
legal            4       5     1.25      1.20      75%      0.00    10.2
places          10      11     1.10      0.94      60%      0.90    11.5
mind            78      68     0.87      0.39      50%      2.24    21.9
timeline        42      35     0.83      0.22      38%      0.52    36.9
health           6       4     0.67      0.37      50%      2.00    17.4
people         175     105     0.60      0.67      23%      0.17     8.7
self            59      29     0.49      0.21      27%      0.14    23.0
work            15       5     0.33      0.34      27%      0.27     9.6
interests       96      11     0.11      0.25       7%      0.06     4.6
meta            12       1     0.08      0.03       8%      0.00    23.8

TOTAL          497     274     0.55      0.37      27%      0.53    14.6
```

## What the falsifier asked for, and what it got

The published condition was that `mind/` and `self/` show marks "at a rate
comparable to `legal/` and `health/`". `mind/` does — it is indistinguishable
from `health/` on the normalised rate and identical on the fraction of pages
carrying any mark at all (50% each). `self/` does not; at 0.21 it is among the
lowest in the corpus.

So the falsifier lands on one of its two areas. That is not a clean kill, and it
is not a rescue either. The pattern's claim was that correction density tracks
whether a claim had something external to collide with. `mind/` is the *least*
externally checkable area in the corpus and it corrects at the rate of one of
the two areas the pattern was built on. Whatever governs correction density here,
it is not checkability.

## Three things that had to be got right first, and one I got wrong

**`RE-CHECKED` is not an error marker** and is 265 of the 539 dated blocks —
49%. It fires when a *cited* page moved ([`dat:0022`](0022-old-wiki-recheck-propagation.md)),
and four of the five on the cocaine page conclude nothing changed. Summed in, it
turns the census into a measure of how much a page cites: `mind/` at 2.24 per
page and `health/` at 2.00 lead the corpus on it, and both are heavily
cross-linked. Counted, reported, never added.

**Marks per page reads page length.** `mind/` averages 21.9 kB per page against
`people/` at 8.7. On the per-page rate `mind/` sits 45% above `health/`; per
10 kB the two are the same number. The normalised column is the finding.

**The count is definition-sensitive.** `**RE-CHECKED` matches 247 times and
`RE-CHECKED [` 265 — the same blocks under two conventions that drifted over the
corpus's life. `bin/wb-census` commits to one and prints it, so a different
definition is visibly a different number rather than quietly the same one.

**And the first pass of this census was wrong.** It counted bare tokens rather
than dated blocks and returned `meta/` at 4.25 marks per page, the highest in the
corpus. `wiki/meta/recent-activity.md` is a changelog: it *names* 101 corrections
that belong to other pages and carries none of its own. Under the dated-block
definition `meta/` returns 0.08, the lowest. The error inflated the one area
whose job is to describe the marker system, and it double-counted corrections
already attributed elsewhere. A census over an unread corpus will happily count
the index along with the entries.

---

## REVISED [2026-09-09] — the table is right, the question it answers is not

Same day, one page later.
[`dat:0043`](0043-correction-density-tracks-work-recency.md) reads
`wiki/meta/recent-activity.md`, the wiki's own changelog, and splits this census
on it. Half the corpus — 250 pages — was not touched in the final three weeks,
and it carries 9% of the marks. `legal/`, `health/` and `meta/` are 100% covered
by that window; `interests/` is 25%.

Every number in the table above stands. What they measure is coverage of recent
work at least as much as rate of self-correction, and the areas are not
comparable on it. `interests/` at 0.11 is the clearest casualty: its touched
quarter runs 0.46.

The conclusion drawn here — that correction density does not track checkability —
survives, and the touched-only figures strengthen it rather than weaken it.
What was wrong was leaving the governing variable open as if it were unknowable
from the corpus. It was one unread page away, and that page is the changelog whose
mis-parsing produced this census's first-pass error. Read the index before
counting the entries.
