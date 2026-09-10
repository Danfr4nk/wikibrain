+++
id            = "dat:0048-corrected-claim-still-standing-in-its-own-page"
layer         = 1
type          = "datum"
title         = "A claim the prior wiki retracted is still standing verbatim in the same page, and its own index republished it"
claim         = "`wiki/mind/synthesis/failure-to-launch.md` (date_modified 2026-09-03) carries a dated correction stating that the calibration experiment it recommended \"does not exist\", that none of the four figures behind it reproduces, and that the one resolvable instance resolved false. The numbered prediction that correction refers to is unedited elsewhere on the same page: \"2. **The calibration test resolves Tier 1 in one pass.** Scoring the 43 archived numeric confidences against known outcomes will place Dan closer to well-calibrated than the general population. **This is the highest-value cheap experiment named anywhere in this cluster** and the data already exists.\" It still carries 43, the count the correction retired, and still asserts the data exists. `wiki/meta/open-questions.md`, generated 2026-09-04 — the following day — lists that bullet among 65 standing predictions, quoting it including the figure. The generator's stated filter is that \"a gap struck through or marked CLOSED/RESOLVED/SETTLED is filtered out\", and the correction block uses none of those words at the bullet."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:wikitest-rebuild-session-2026-09-09"]
measurement   = true
confidence    = "high"
extraction    = "Read 2026-09-09 from raw/old-wiki-export-2026-09-04/whole.txt. Both pages located by byte offset from pages.json; the prediction bullet and the correction block are quoted from the same page body, and the digest entry from wiki/meta/open-questions.md. Dates are the pages' own `date_modified` front matter."
importance    = 5
tags          = ["old-wiki", "epistemics", "meta", "tooling"]
created       = "2026-09-09"

[when]
start = "2026-08-23"
end   = "2026-09-04"
+++

The correction in [`dat:0047`](0047-old-wiki-rederived-its-headline-capability-claim.md)
is exemplary and it did not take. Three artefacts, in date order:

| date | where | what it says |
| :--- | :--- | :--- |
| 2026-08-23 | `calibrated-confidence` | the counts do not reproduce; the test is not runnable |
| 2026-09-03 | `failure-to-launch`, correction block | "**It does not.**" — the recommended experiment's data does not exist |
| 2026-09-03 | `failure-to-launch`, prediction 2 | "Scoring the **43** archived numeric confidences … **the data already exists**" |
| 2026-09-04 | `open-questions`, generated | prediction 2 listed as standing, quoted with the 43 |

## This is the cost of append-only, and the prior wiki did not price it

[`dat:0018`](0018-old-wiki-intake-ledger-discipline.md) records the discipline
that corrections append rather than overwrite, so that the fact a correction was
needed survives. That is the right default and this repository copies it. What it
buys is history. What it costs is that **the retracted text stays valid-looking
in place**, and anything that reads the page mechanically — a digest, an index, a
search, a model summarising it — has no way to know which of two adjacent
paragraphs won.

The generator is not naive about this. Its filter looks for `CLOSED`, `RESOLVED`,
`SETTLED` and strikethrough, which handles the case where a gap is closed *in
place*. It has no way to handle a claim retracted in a block eight hundred words
away, and no page-level mechanism said "prediction 2 is dead". So the wiki's own
front page of open work republished, the day after the retraction was written, a
prediction its author had already killed — under the heading *"Scoring one of
these is the cheapest new knowledge available."*

## The same hole was open in this repository, and this datum closed it

This system does the same thing. When two falsifiers on
[`pat:audit-strong-on-numbers-weak-on-meaning`](../patterns/audit-strong-on-numbers-weak-on-meaning.md)
were spent earlier today, the original argument was left unedited above a dated
block, exactly as here.

One thing already differed and it is the whole difference: the falsifiers live in
a **structured `falsifiers` field**, not only in prose, and each spent one was
edited in place to open with `SPENT, 2026-09-09, and it landed against the
pattern`. A tool reading this repo sees the retraction because the retraction is
in the field, not narrated near it. The prior wiki's predictions lived in prose
only, which is why its own tool could not see them.

That was one instance of a fix applied by hand, with nothing enforcing it. It is
now enforced. `bin/wb-validate` gained `check_retractions`, which this datum is
the reason for:

- **error** — a node whose body announces `SPENT`, `RETRACTED`, `WITHDRAWN` or
  `SUPERSEDED` in a dated heading, while carrying a `falsifiers` field in which
  no entry says so. That is precisely the prior wiki's failure: the retraction
  narrated beside a machine-readable field that still reads as live.
- **warning** — a node carrying a dated block newer than its own
  `updated`/`rechecked`. Somebody appended a correction and did not touch the
  front matter, so every tool downstream still treats the node as older than its
  own body.

Three tests pin it, and both checks were mutation-checked rather than assumed:
stripping `SPENT` from the pattern's `falsifiers` field raises the error;
back-dating its front matter raises the warning.

**The cross-page half is covered too, and only as far as it honestly can be.**
The prior wiki's failure travelled: the correction on `calibrated-confidence`,
the dead claim on `failure-to-launch`, the republication in `open-questions`. A
bare staleness warning would not have caught that either — "the evidence moved"
reads identically whether a typo was fixed or the claim was withdrawn. So
`check_staleness` now names it: when a cited node's body announces a retraction
dated after the citing node was last checked, the warning appends *"that node
announced 'FALSIFIER SPENT' on 2026-06-01 — check whether this claim rests on
what was withdrawn."*

It stays a **warning**, deliberately. A citing node may well survive its source's
retraction, and deciding that is reading work rather than validation work. What
it must not do is arrive looking like ordinary date drift, which is exactly how
the prior wiki's index came to republish a dead prediction.

What remains genuinely uncovered: nothing knows *which claim* was withdrawn, only
that something was. A node citing a retracted source for a part the retraction
did not touch gets the same warning as one whose whole argument just died. That
distinction needs a human or a model reading both, and no field would carry it
honestly.
