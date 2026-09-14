+++
id         = "evt:2016-02-ard-granted"
layer      = 2
type       = "event"
title      = "ARD approved for the 2015 possession charges (hearing before Judge Wagner, 17 February 2016)"
cites      = ["dat:0015-old-wiki-ard-policy-bar", "dat:0016-old-wiki-conflated-two-legal-matters"]
confidence = "moderate"
importance = 4
tags       = ["legal", "ard", "uniontown-era"]
created    = "2026-09-10"

[when]
date   = "2016-02-17"

[[edges]]
rel         = "about"
target      = "ent:dan"
strength    = "strong"
asserted_by = "external"

[[edges]]
rel         = "about"
target      = "ent:rick-frank"
strength    = "moderate"
asserted_by = "other"
note        = "Rick talked himself out of attending the hearing: 'You're obviously more comfortable with your mom.'"
+++

## What happened

On February 17, 2016, a hearing before Judge Wagner approved Accelerated
Rehabilitative Disposition — Pennsylvania's first-offender diversion track
— for the February 2015 possession charges, and the remaining fines were
paid. This is why Dan's only real arrest left no criminal record.

The approval was not routine. The Fayette County District Attorney of the
period held a categorical policy refusing ARD to anyone charged with a
cocaine or heroin misdemeanor, residue or not — which made Dan ineligible
on the face of it. Admission was nevertheless obtained through private
counsel, Fayette County lawyer Jack Connor, at a cost Dan put at several
thousand dollars. The contemporaneous message record corroborates that
something unusual happened without naming the bar: *"Jack had to do some
wheeling and dealing."*

## Dated sequence

| when | what | source |
| :--- | :--- | :--- |
| 2015-02-17 → 19 | arrest-night blotter window: three possession charges filed before MDJ Michael Metros | evt:2015-02-possession-arrest |
| 2016-01 → 02 | fines referenced in January and February messages; whether they belong to this case, the Combos matter, or both running concurrently is not determinable | wiki/legal/2015-possession-arrest |
| **2016-02-17** | **hearing before Judge Wagner — ARD approved; remaining fines paid** | wiki/legal/2015-possession-arrest case timeline |
| 2016-02-17 | *"My combos are paid off"* — records a fine being cleared that day, though the phrasing suggests the money may have been the theft fine | wiki/legal/2015-retail-theft-arrest |

## The [when] block, defended

The February 17 date comes from the wiki's case timeline — the same
institution whose Combos/possession conflation was corrected 2026-08-03.
It is also the third occurrence of the February 17 triple
([evt:2010-02-17-suboxone-start](2010-02-17-suboxone-start.md):
Suboxone day-zero; [evt:2015-02-possession-arrest](2015-02-possession-arrest.md):
blotter window opens). The date is carried as the page records it, with
the triple's unresolved status kept attached: genuine docket-scheduling
anniversary or artefact propagated through earlier passes.
[dat:0071-arrest-breath-test-and-feb-17-coincidence]

## Evidence for

- **The split correction is the date's best backing.** The 2026-08-03
  correction moved the lawyer, the ARD application, and the Judge Wagner
  hearing from the Combos page to the possession page *on the operator's
  word* — both matters are real, and the machinery belongs here.
  [dat:0016-old-wiki-conflated-two-legal-matters]
- **The policy bar is thinly sourced but self-marked.** The prior wiki
  names no source for the DA policy and does not name the DA — it lists
  that identity under its own Gaps. That self-marking is why the claim
  stays at `moderate`: the page is trustworthy as testimony and weak as
  evidence, simultaneously. [dat:0015-old-wiki-ard-policy-bar]
- The "wheeling and dealing" message is oblique corroboration that the
  admission took unusual effort. [dat:0015]

## Family texture

The morning of the hearing produced Rick talking himself out of
attending: *"You're obviously more comfortable with your mom."* — one of
the record's cleanest small portraits of the paternal position a decade
after the rupture. (wiki/people/rick-frank)

## Open questions

- **The docket number.** The prior wiki notes the district is known
  (MDJ-14-1-01) but the docket number is not. One MDJS docket lookup
  would convert this event's whole evidence base from single-source
  testimony to primary record.
- **Whether the expungement was completed.** Unknown anywhere on disk.
- Whether the fines referenced January–February 2016 belong to this case
  or the Combos matter — not determinable from the message record.
- The DA's identity behind the policy — listed under the page's own
  Gaps.

## Cross-links

- [ent:dan](../entities/dan.md), [ent:rick-frank](../entities/rick-frank.md).
- evt:2015-02-possession-arrest — the charges this hearing diverted.
- evt:2015-combos-retail-theft — the separate matter the machinery was
  misattributed to for three weeks.
- [dat:0015-old-wiki-ard-policy-bar](../data/0015-old-wiki-ard-policy-bar.md)
  — the categorical bar and the oblique "wheeling and dealing" evidence.
- [dat:0016-old-wiki-conflated-two-legal-matters](../data/0016-old-wiki-conflated-two-legal-matters.md)
  — the split that put the hearing on the right page.
