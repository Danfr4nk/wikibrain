+++
id            = "dat:0043-correction-density-tracks-work-recency"
layer         = 1
type          = "datum"
title         = "The prior wiki's correction density tracks when a page was last worked, not what could check it"
claim         = "`wiki/meta/recent-activity.md` is a generated changelog listing every page by `date_modified`, one row each, covering 2026-08-13 to 2026-09-04 — 247 of the corpus's 497 pages in 23 days. Splitting the marker census on that list: the 247 pages touched in the window carry 249 of the corpus's 274 dated error marks (91%), at 1.01 marks per page, and 47% of them carry at least one. The 250 pages not touched carry 25 marks between them, 0.10 per page, with 20 pages marked. The correlation between being listed and carrying a mark is r = 0.33 at page level. The work is bursty rather than scheduled: 47, 41, 33 and 18-page days against single-page days, with no entries at all on 2026-08-24, 08-25 or 08-29."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:wikitest-rebuild-session-2026-09-09"]
measurement   = true
confidence    = "high"
extraction    = "Run 2026-09-09 over raw/old-wiki-export-2026-09-04/whole.txt. Changelog rows parsed as '| [[wiki/...]] | domain |' and joined to page paths; all 247 rows matched an exported page, the changelog included, which lists itself. Reproducible as `bin/wb-census --recency`. Marker definition as in bin/wb-census — the token followed by ' [', RE-CHECKED excluded. Per-area split reproduced in the body."
importance    = 5
tags          = ["old-wiki", "epistemics", "meta", "falsifier"]
created       = "2026-09-09"

[when]
start = "2026-08-13"
end   = "2026-09-04"
+++

This is the third falsifier on
[`pat:audit-strong-on-numbers-weak-on-meaning`](../patterns/audit-strong-on-numbers-weak-on-meaning.md),
and it comes back stronger than the first one did. It also revises how
[`dat:0042`](0042-marker-census-does-not-support-the-pattern.md) should be read —
the numbers there are unchanged, but what they measure is not what it said.

## The split

Restricted to pages the changelog lists, per area:

```
area         touched  marks   m/pg  m/10kB  untouched  marks   m/pg
people            54     90   1.67    0.86        121     15   0.12
legal              4      5   1.25    1.20          0      0   0.00
places             9     11   1.22    0.99          1      0   0.00
timeline          24     29   1.21    0.20         18      6   0.33
mind              67     65   0.97    0.39         11      3   0.27
work               5      4   0.80    0.54         10      1   0.10
self              42     29   0.69    0.22         17      0   0.00
health             6      4   0.67    0.37          0      0   0.00
interests         24     11   0.46    0.42         72      0   0.00
meta              12      1   0.08    0.03          0      0   0.00
TOTAL            247    249   1.01                250     25   0.10
91% of the marks sit on the 50% of pages worked in the changelog's window
```

`interests/` is the case that makes the point. In the whole-corpus table it is
the least self-correcting area in the wiki at 0.11 marks per page — a figure that
invites a reading about a domain with nothing at stake. Three quarters of it was
simply never opened in the final three weeks. Its touched quarter runs 0.46, four
times the headline number and mid-table.

## The trivial half and the non-trivial half

**Trivial:** correcting a page sets its `date_modified`, so a corrected page is a
touched page by construction. That alone would produce some of this and it is not
a finding.

**Not trivial:** 53% of the touched pages carry no mark at all, so the list is not
just a list of corrections. And the 250 untouched pages are not a random half —
they are the areas the operator had not reached, and they hold 9% of the marks
across 50% of the corpus. Any area statistic computed over the whole corpus is
therefore reading *coverage of recent work* as if it were *rate of
self-correction*, and the areas differ enormously in coverage: `legal/`, `health/`
and `meta/` are 100% touched, `interests/` is 25%.

## What this does to the pattern, and to my own reading of the first census

`dat:0042` concluded "whatever governs correction density here, it is not
checkability" and left the governing variable open. It is largely work recency,
and the ranking `dat:0042` published is substantially a ranking of what had
recently been worked on.

That does not rescue the pattern — it makes it worse. On the touched-only figures
`mind/` (0.97) sits *above* `health/` (0.67) per page rather than level with it,
and `people/` leads the corpus outright at 1.67. The prediction was that the
inference-heavy areas would correct markedly less. Two of the three most-corrected
areas by this measure are `people/` and `mind/`.

## One thing the falsifier's wording got wrong

It supposed "a self-audit pass over the whole corpus **on a schedule**". The
changelog shows the opposite shape — 47 pages on one day, one on another, three
days with nothing. This is session work, not a cron job. The mechanism named was
wrong; the consequence it predicted (density as a function of when a page was
last touched) is what the data shows. Recorded that way rather than scored as a
hit, because a falsifier that is right for a reason it did not state is not
evidence for the reason it did state.

## Incidentally, the RE-CHECKED reading is confirmed from the wiki's own words

`dat:0042` excluded `RE-CHECKED` from the error count on the argument that it
fires on citation churn. The changelog's `why` column states the trigger in
plain language on entry after entry — "the-cool-metric gained a substantive
section", "alexis-armel gained a measurement", "rick-frank gained one typed edge
and no prose" — and several add "**No volume figure on this page is affected**".
The exclusion was inferred from one page's five blocks; it is now the system's
own documented behaviour.
