---
domain: mind
page_type: synthesis
title: "Spatial Behavior"
knowledge: mixed
status: active
date_created: 2026-07-20
date_modified: 2026-09-21
sources:
  - raw/self/dox-md/GPS_ANALYSIS.md
  - raw/self/location/2026-06-22-ingest/Records.json
  - raw/self/location/2026-06-22-ingest/semantic_location.db
  - raw/self/location/2026-06-22-ingest/Settings.json
  - raw/307-e-76th-st-lease-signing-photos-2019-02-25/
  - corpus/derived/threads.csv
  - kb/data/1207-spatial-behavior-ai-generated-gps-reading.md
  - kb/data/0533-exocortex-measured-claims-unverified.md
synthesizes:
  - wiki/self/location-history
  - wiki/mind/concepts/contact-gini
  - wiki/timeline/periods/2017-poverty-floor
  - wiki/timeline/periods/2018-deep-cycle
  - wiki/mind/profile/intp
  - wiki/mind/profile/deviance-mapping
related:
  - wiki/self/location-history
  - wiki/mind/concepts/contact-gini
  - wiki/timeline/periods/2017-poverty-floor
  - wiki/timeline/periods/2018-deep-cycle
  - wiki/places/155-virginia-ave
  - wiki/places/117-belmont-circle
  - wiki/places/337-saratoga-drive
  - wiki/places/307-e-76th-st
  - wiki/places/424-bedford-ave
  - wiki/work/au-zaatar
  - wiki/work/nemacolin-caddying
  - wiki/mind/concepts/exocortex
  - wiki/mind/synthesis/single-channel
  - wiki/mind/profile/intp
  - wiki/mind/profile/deviance-mapping
tags: [digital-footprint, relationships, career, housing]
connections:
  - page: wiki/self/location-history
    type: contextualizes
    claim: "This page's behavioral/psychographic reading is built directly on the raw visit-count catalog that page maintains — the numbers are the same corpus, read for pattern rather than tabulated."
  - page: wiki/mind/concepts/contact-gini
    type: parallels
    claim: "Both are quantitative cuts of the same underlying life converging on the same shape: extreme concentration around a small number of anchors (physical: home/work; social: a handful of contacts) punctuated by rare, decisive ruptures."
  - page: wiki/timeline/periods/2017-poverty-floor
    type: evidenced-by
    claim: "The 2018 'System Collapse & Migration' phase — over a third of the entire 2014-2020 aggregate travel distance logged in one year — is the spatial-data signature of the poverty-floor/deep-cycle years destabilizing into the NYC move."
  - page: wiki/timeline/periods/2018-deep-cycle
    type: contradicts
    claim: "The report's own framing may over-read: it treats the subject's low day-to-day movement-risk as evidence impulsivity 'manifests elsewhere,' but doesn't test whether the home-anchoring pattern itself is better explained by chronic financial constraint (documented at length on this period's page) than by a chosen psychological strategy."
  - page: wiki/places/155-virginia-ave
    type: contradicts
    claim: "The source report names the 2015-2017 system as an oscillation between Saratoga Drive and Virginia Avenue; the held overnight-ping analysis puts the 2016-2019 primary residence at 155 Virginia with 117 Belmont Circle as the secondary node and 337 Saratoga marginal — the second anchor in the two-node era is Fran's house, not the family home."
  - page: wiki/work/au-zaatar
    type: evidenced-by
    claim: "The only per-weekday distribution the wiki holds from the raw pings is a work-shift distribution (712 visits, 2-3pm arrivals, median 6.2 hours, Mondays dark) covering 2021-2024 — outside the window in which the report asserts a Friday peak, so the Friday claim remains untested rather than confirmed."
  - page: wiki/mind/concepts/exocortex
    type: parallels
    claim: "The 15.8 km mean radius of gyration cited in the CATO identity payload is the same claim as this page's anchoring index in a different unit, and carries the same defect: no computation trail in any held source."
---

# Spatial Behavior — GPS Analysis of Location History

A behavioural reading of Dan's Google Location History (2014–2024), and an
audit of that reading against the export the wiki actually holds. Where
[[wiki/self/location-history]] tabulates what places got visited how often,
this page asks what the shape of the movement says — and then asks how much
of the answer survives contact with the raw pings.

The short version of the shape: long stretches of near-total predictability,
punctuated by rare, total, rapid system replacements. The short version of
the audit: **two of the four phases hold, one is built on an instrument gap,
and one names the wrong second anchor.**

[[wiki/mind/index|mind]] · [[wiki/self/location-history]] · [[wiki/mind/concepts/contact-gini]]

## The two instruments, and why they must be kept apart

Everything on this page comes from one of two places, and conflating them is
the error this page exists to prevent.

**Instrument A — the report.** `raw/self/dox-md/GPS_ANALYSIS.md`, an
AI-generated psychographic reading of the Location History export. It is the
source of every index below (Home Anchoring 0.68, Routine 0.85, Exploration
0.22), the four-phase structure, the ~170,000 km aggregate and the ~3,500
unique-location figure. **It is not held in this repository.** The `raw/self/`
tree contains exactly one subdirectory — `message-csv` — and no `dox-md`. The
report is cited in this page's own frontmatter and cannot be opened from it.
That filing is recorded at
[`dat:1207`](../../kb/data/1207-spatial-behavior-ai-generated-gps-reading.md),
which files the page as *"second-hand AI interpretation of unheld GPS data"*
at **low confidence**, and names the missing piece precisely: *"If the
location-history export becomes held, the four phases and the
financial-constraint alternative are testable; until then they are a report's
reading of data this pass cannot see."*

**Instrument B — the export.** The 2026-06-22 Google Takeout Timeline ingest:
98 monthly Semantic Location History JSONs, `Records.json` (121,733 raw pings,
2014-04-02 → 2024-05-14), `semantic_location.db` (6,227 place visits, 6,700
activity segments), `Settings.json` and `Timeline Edits.json`
([[wiki/self/location-history]]). This *is* held, was torn down at the raw
layer on 2026-09-14, and produces numbers that can be checked.

Where the two disagree, Instrument B wins, and the standing rule from the
teardown applies inside Instrument B as well: **Timeline hand-labels are user
assertions, Records.json is sensor ground truth — when they conflict, the
pings win** ([[wiki/self/location-history]]).

## The report's indices — complete, with provenance flags

Printed in full because they are the most-cited numbers on this page and the
least checked. Every row is Instrument A. None has been re-derived here.

| Index | Value | Status |
|---|---|---|
| Home Anchoring Index | 0.68 | Instrument A; unverified |
| Routine Index (day-to-day predictability) | 0.85 | Instrument A; unverified |
| Exploration Ratio | 0.22 | Instrument A; unverified |
| Peak activity window | 2–6 PM | Instrument A; unverified |
| Trough activity window | 3–7 AM | Instrument A; unverified |
| Peak / trough day | Friday / Sunday | Instrument A; unverified |
| Aggregate travel distance, 2014–2020 | ~170,000 km | Instrument A; unverified |
| Unique locations, 2014–2020 | ~3,500 | Instrument A; unverified |
| Mean radius of gyration | 15.8 km | CATO identity payload, via [[wiki/mind/concepts/exocortex]]; unverified |

The radius-of-gyration figure travels with the first two indices in the CATO
payload and is filed at
[`dat:0533`](../../kb/data/0533-exocortex-measured-claims-unverified.md) with
the same verdict and the same remedy: *"a radius of gyration and routine
indices are computable from location/history data… Until then they are the
prior wiki's transcription of its own sources' claims."* Three numbers, one
provenance, zero computation trails. They are kept because they are checkable
in principle and because discarding them would lose the question; they are
flagged because a table is exactly the format in which an unverified number
starts looking like a measurement.

**What is genuinely odd about the indices is their internal consistency.** A
0.68 home-anchoring fraction, a 0.85 routine index and a 15.8 km radius of
gyration are three different ways of saying the same thing, and they agree.
That is either corroboration or an artefact of one model computing three
statistics off one distribution and reporting them as independent findings.
The held export could distinguish those cases. Nobody has run it.

## The complete visit log, 2014–2024

Instrument B. The full per-year place-visit count from `semantic_location.db`,
every year in the export, with the instrument-state annotation that changes how
three of the rows read ([[wiki/self/location-history]]).

| Year | Place visits | Instrument state / note |
|---|---|---|
| 2014 | 108 | Export begins; `Records.json` earliest ping 2014-04-02, semantic visits from 2014-06-05 |
| 2015 | 23 | Lowest non-terminal year in the export. Cause undetermined |
| 2016 | 531 | Rising |
| 2017 | 1,111 | — |
| 2018 | **1,716** | Highest year in the record; **258 in August alone** |
| 2019 | 809 | NYC transition year |
| 2020 | 121 | **Device-change blackout opens 2020-09-24** — not low mobility |
| 2021 | 257 | **Blackout runs to 2021-07-20** (298.9 days) |
| 2022 | 806 | Resurgence |
| 2023 | 728 | Sustained; also the hand-edit year (below) |
| 2024 | 17 | Export effectively ends; hard boundary 2024-05-14 |

Four further gaps of 164.5, 113.5, 110.4 and 93 days sit inside the series.
The teardown's verdict on all of them is one sentence and it governs every
inference below: **"The gaps are gaps, not behavior."**

**The hard boundary matters more than any single year.** Nothing in this
instrument exists after **2024-05-14**. The export cannot speak to the
February–April 2025 New York exit, the 2025 collapse, the October 2025 DUI
stop, or 463 Morgantown Street in 2026. Any spatial claim about those events
is coming from somewhere other than this page's data.

## The four phases, re-read

### 2014 — baseline stability. Holds, weakly.

The report calls 2014 the tightest, most predictable loop in the dataset:
home, work, one weekly release valve, all in Uniontown. Instrument B cannot
contradict this and cannot confirm it either, because 2014 carries **108
visits** across a partial year that begins in April. A tight loop and a thin
export produce the same table. The phase is retained as the report's, with the
note that it rests on the year with the second-least data in the series.

### 2015–2017 — the two-node system. Holds in shape, wrong in membership.

The report describes a second anchor arriving with the
[[wiki/people/annie-ulmer|Annie]] relationship and a routine restructuring
around oscillation between [[wiki/places/337-saratoga-drive|337 Saratoga
Drive]] and [[wiki/places/155-virginia-ave|155 Virginia Ave]].

The oscillation is real. The second node is not 337 Saratoga.

Instrument B's overnight-ping analysis — pings between 00:00 and 06:00 ET
within 250 m of each address centroid — puts **155 Virginia dominant in every
month of 2018 (84–487 per month) as primary residence**, **117 Belmont Circle
strong January–May (95–322) then fading as secondary**, and **337 Saratoga
marginal, at the level of family-home visits** ([[wiki/self/location-history]]).
The residence timeline agrees: Dan was at 155 Virginia from January 2015 to
February 2019 ([[wiki/places/155-virginia-ave]]), and 337 Saratoga's own
occupancy table runs May 2013 – January 2015 and then nothing until February
2025 ([[wiki/places/337-saratoga-drive]]).

The second anchor in the two-node era is **117 Belmont Circle — Fran
Coldren's house**, which sits adjacent to 155 Virginia on the Uniontown
Country Club fairway, on a boundary the Frank/Whyel and Ulmer families shared
for fifty-plus years ([[wiki/places/155-virginia-ave]]). That changes the
phase's meaning entirely. The report reads the oscillation as a relationship
introducing a second home. The held data reads it as **a caregiving job eighty
metres away**: Dan and Annie were Fran's caregivers, and for roughly the last
six months Dan was paid full-time at $15 an hour
([[wiki/timeline/periods/2018-deep-cycle]]). The "system that visibly strains
under its own maintenance cost" is a job, and the strain has a documented
end date — Fran's fall on the night of 7–8 March 2018 ends occupancy at 117
Belmont, and she never re-enters the house.

One caveat the teardown itself files: the two lots are roughly 80 m apart, so
centroid assignment bleeds. The primary/secondary pattern survives it; a
precise split between the two does not.

### 2018 — collapse. Holds, and it is the strongest phase on the page.

This is the one phase where Instruments A and B and three unrelated
instruments all say the same thing.

| Instrument | 2018 figure | Rank |
|---|---|---|
| GPS semantic db | 1,716 place visits (258 in August) | highest year in the export |
| Whole-corpus message count | 40,514 messages | highest until 2025 matched it within 2% |
| LIFE events calendar | 254 events | highest year it covers |
| GPS_ANALYSIS (Instrument A) | >⅓ of all 2014–2020 travel distance | single-year maximum |

*(First three: [[wiki/timeline/periods/2018-deep-cycle]]. Fourth: Instrument A,
unverified.)*

Three measuring systems built from three different exports name the same
twelve months, and the fourth — the unheld one — agrees. That is the
convergence pattern this wiki treats as load-bearing, and it is the reason the
2018 phase is the only one here that can carry weight on its own.

What the convergence is measuring is not one thing. Inside those twelve months:
a 97-year-old woman's fall, four-week hospital vigil and death; an eviction
notice served mid-vigil by her only child; an estate opening in April that does
not finish paying until 2020; a supply configuration running at least four
concurrent dealer nodes; roughly $14,000 moving from Dan to his mother across
three months against money two years away; and, in the last twenty-five days,
the opening of the longest-running attachment in the corpus
([[wiki/timeline/periods/2018-deep-cycle]]). The GPS spike is not a
psychological signature floating free of content. It is what a year with that
content looks like from a phone.

### 2019 — migration. Holds, and it can be dated to the day.

The report reads 2019 as a hard, total relocation to New York and a new single
anchor. Instrument B pins it:

| Month, 2019 | Overnight pings (00–06 ET), PA | Overnight pings, NYC |
|---|---|---|
| January | 442 | 0 |
| February | 333 | 52 |
| March | **5** | **113** |

Last PA overnight **2019-03-02**; first NYC overnight **2019-03-06**;
physical move **March 3–5, 2019** ([[wiki/self/location-history]]). The
*"Au revoir Pennsylvania. Adiós Trump country."* tweet is dated **2019-03-03**
and lands on departure day. The teardown's own comment is the right one:
movement record beats testimony, this time confirming it.

February's 52 NYC overnights are the apartment being secured, not the move.
The lease-signing night is photographed: **two frames timestamped 2019-02-25**,
at 20:19 and 20:20, archived at
`raw/307-e-76th-st-lease-signing-photos-2019-02-25/` and reproduced in
[Sources](#sources) below. They are the clearest artefact on this page of what
the four-phase model is actually claiming.

The first frame is a **bare room** — no furniture, no boxes, nothing brought
in yet. The second, taken a minute earlier, is the **kitchen**, equally empty.
Together they are the physical form of a system replacement: the old
configuration is not being adjusted, it is being left, and the new one does not
exist yet. Nothing in either frame is his. That is the state the phase model
describes as "rebuild from scratch," photographed on the night the lease was
signed, nine days before the pings move.

Two things they are *not.* They are not evidence for any index on this page —
two photographs of an unfurnished apartment establish a date and a condition,
nothing more. And an empty apartment on a signing night is entirely ordinary;
what makes these frames worth printing is not that the room is empty but that
the wiki can put a timestamp on the gap between the lease and the move, and
then watch the overnight pings close it.

### 2020 — "the siege." Does not hold as stated.

The report describes the newly-built NYC system compressed to a micro-radius
by an external shock, with Central Park as the primary decompression node.

The held export cannot support this, because the export stops. The 2020 visit
count of 121 and the 2021 count of 257 are produced by a **298.9-day device
blackout running 2020-09-24 → 2021-07-20** ([[wiki/self/location-history]]).
That is not a pandemic signature; it is a phone change. The blackout also
swallows Dan's claimed March 2021 Au Za'atar start, so the first *recorded*
shift at the restaurant is 2021-07-20 ([[wiki/work/au-zaatar]]).

Two things follow, and they are different sizes.

The smaller one: the 2020 phase is **partly** artefactual. Jan–Sep 2020 is
inside coverage, so a compressed radius in that window is a real finding if
someone measures it. Nobody in the held record has. The Central Park claim in
particular has no held derivation at all.

The larger one: **this is a worked example of the failure mode the corpus
policy names.** A partial instrument does not announce what it left out, and
absence of evidence reads exactly like evidence of absence
([`CORPUS_POLICY.md`](../../CORPUS_POLICY.md)). The report looked at 121
visits in 2020 and read compression. The pings say the instrument was off.
Same number, opposite meaning, and nothing about the first reading looked
wrong.

## The hand-edit event, and why it is on a behaviour page

On **2023-10-20** at 04:01:27 UTC, Dan deleted his Google Timeline
(`Settings.json`, `timelineDeletionTime`). The deletion was partial —
`Records.json` survived. In the months before it he had been editing the
record by hand: **71 user-edited semantic segments spanning May–October 2023**,
stopping the day of the wipe, and **13,074 of his 17,948 lifetime MANUAL pings
are from 2023 alone**. The most consequential edit: he relabelled **16 of his
own Au Za'atar dinner shifts as WORK at 112 Mercer Street, SoHo** — an address
the pings resolve as a phantom ([[wiki/self/location-history]],
[[wiki/work/au-zaatar]]).

This belongs on a spatial-*behaviour* page rather than a data-quality
appendix, because it is spatial behaviour: the subject's relationship to his
own movement record is part of the record. Three observations, at declining
strength.

**Documented.** The hand-labels exist, are dated, are concentrated in one
year, and describe a workplace he did not work at. The sensor layer is clean
and contradicts them.

**Documented.** The editing stops on the day of the deletion. Whatever the
edits were for, the wipe ended the project rather than following it.

**Inferred, and flagged as such.** The record does not show why. No message in
the held corpus explains the relabelling, the deletion, or the choice of 112
Mercer Street. A page that reads movement for psychology should note that the
one year with an intent signal is the year the subject was authoring the data,
and then stop, because the intent is not in evidence.

## The profile layer

The report's reconciliation is a psychometric one, so the profile layer is
where it either lands or does not.

**The psychometric it is reconciling is real and measured.**
[[wiki/mind/profile/deviance-mapping]] scores an *intellect/impulsivity
paradox* at **95 (confidence 99%)** — top-percentile on both, which is the
tension the GPS report resolves by relocating the impulsivity out of physical
navigation. That is a genuine puzzle with a genuine proposed solution. It is
also, on this page's evidence, an untested one: the movement data has never
been cut against the impulsivity score, and "manifests elsewhere" is not a
finding, it is the shape of an explanation.

**The function-level reading the wiki already holds fits the anchoring pattern
better than the impulsivity reading does.** [[wiki/mind/profile/intp]]
documents Si-tertiary as a **non-pruning archive** — "suspend, not delete" —
the substrate the wiki reads under the system-wide no-delete rule. A
non-pruning archive predicts exactly what the location record shows: places
are accumulated and retained rather than cycled, the exploration ratio stays
low because sampling is not how this stack acquires anything, and an
abandoned anchor (117 Belmont, 155 Virginia, 307 E 76th) does not get
overwritten so much as left. It also predicts the thing the report calls
system replacement: an archive that never prunes has no incremental
adjustment available, so the only move left when a configuration fails is to
start a new one beside it.

Stated at the right strength: this is a **better-fitting** reading, not a
tested one. Both it and the impulsivity reconciliation are compatible with the
same nine unverified indices, and neither has been run against the 121,733
pings. The profile layer changes which explanation is most parsimonious. It
does not change that none of them has been checked.

## The alternative the report does not test

Instrument A treats low-risk, low-novelty movement as evidence that Dan's
self-reported high impulsivity *"manifests in other areas of life… rather than
in physical navigation"* — a clean reconciliation of a psychometric profile
with a movement log.

The alternative it does not test is money, and the wiki documents money at
length.

In 2017 the account was overdrawn by $600 in January; he DJed four hours and
was not paid; he sold gold and clothes; the water was shut off; a $120 drug
debt was a materially significant liability; and on a given day the gas to get
somewhere could cost more than the earnings from going
([[wiki/timeline/periods/2017-poverty-floor]]). In 2018 the household income
floor for the first quarter was a $15/hour caregiving wage that ended when
Fran died, and the year's financial behaviour ran on an inheritance that had
not arrived ([[wiki/timeline/periods/2018-deep-cycle]]).

A person under that constraint produces a tight home radius, a low exploration
ratio, and concentrated visits at a small number of known-cheap locations —
for reasons of necessity, not strategy. And the chain/generic tail of the
visit log is exactly the list you would predict: **McDonald's 130, CVS 126,
KeyBank 66, Shepherd's Rock #13 50, Vapor Hut 34, Sunoco 30, PLS Check Cashing
28, Walgreens 24, Walmart 23, Sheetz 22** ([[wiki/self/location-history]]).
A check-cashing outlet appearing twenty-eight times is not a personality
finding.

**Where the two readings come apart is 2018, and the constraint reading loses
there.** Chronic financial constraint predicts *less* movement, not a year
holding over a third of seven years' travel distance and 258 place visits in a
single August. The 2018 spike is the one phase the money explanation cannot
absorb — which is the useful outcome, because it means the two readings are
distinguishable rather than interchangeable. Constraint plausibly explains
2014–2017's flatness; it does not explain 2018's amplitude. The report
explains 2018's amplitude and has no account of why the flat years were flat.

Both readings fit most of the same numbers. Neither has been tested against
the held export. That is the honest state of it.

## Where the spatial record agrees with the rest of the corpus

**Concentration.** [[wiki/mind/concepts/contact-gini]] measures inbound contact
concentration on the held message corpus at **0.9556 across 498 distinct
handles** — top-1 share 33.6%, top-5 68.0%, twelve handles ever crossing 1,000
messages. The spatial record's top locations are the same shape: **307 E 76th
St 1,082 visits, 155 Virginia Avenue 849, Au Za'atar 712, 337 Saratoga ~415,
117 Belmont Circle 246, 73 Smith School House Road 206**
([[wiki/self/location-history]], [[wiki/work/au-zaatar]]). Residences and one
restaurant; everything else is background. Two independent instruments, one
topology.

**The inversion that bounds it.** The same page measures creator-level taste
Ginis of **0.188 for music (1,477 creators), 0.166 for books, 0.000 for art**.
Cultural intake is deliberately wide while human intake is a near-monopoly.
The concentration is not a general property of how attention is distributed —
it is specific to people, and now also to places. Whether places concentrate
*because* people do, or independently, is not established here.

**One convergence that is weaker than it looks.** The contact-gini page cites
this page's shape approvingly, and this page cites contact-gini. Both derive
from archives of one life; agreement between them is not two witnesses. The
genuinely independent corroboration on this page is the 2018 four-instrument
convergence, not the general observation that a concentrated life is
concentrated in several ways at once.

## What has actually been tested, and what has not

The report asserts a Friday peak and a Sunday trough across every life phase,
from the Uniontown caddie years through the NYC comedy-club circuit ("The
Stand" named as a recurring Friday node). **The held export has never been cut
by weekday for any period.**

The only per-weekday distribution the wiki holds from the raw pings is the Au
Za'atar shift table: **712 visits at 1063 1st Ave, July 2021 → March 2024;
arrivals concentrated at 14:00 (340) and 15:00 (275); median visit 6.2 hours;
Mondays dark at 16 visits against 99–127 every other day**
([[wiki/work/au-zaatar]]). That confirms the report's 2–6 PM activity peak in
the narrow sense that his shifts started then — and it is a workplace
distribution from a window outside the report's, so it neither confirms nor
refutes the Friday claim. It is listed here because it is the closest thing to
a test that exists, and because a reader scanning the two tables will otherwise
assume it is one.

The wider point: of nine indices printed at the top of this page, **zero have
been re-derived from the held export**, and the export is sitting in `raw/`
with 121,733 pings in it. The teardown's own queue names what is still
unexploited: 2,399 `rawSignal` entries, 37 `placeAggregates` home/work
inferences, 8,994 VISIT_ARRIVAL / 7,368 VISIT_DEPARTURE pairs the semantic
layer dropped, and velocity/heading tracks that already dated the 2019-02-26
Uniontown→NYC drive ([[wiki/self/location-history]]). Every index above is
computable from that material.

## Before the export begins: the complete pre-2014 location record

The Timeline export starts in April 2014. The only address-level location data
the wiki holds for any earlier year is **15 Foursquare check-ins posted to
Twitter between 24 March 2010 and 24 January 2011**, printed complete here
because a fifteen-row record has no summary ([[wiki/self/location-history]]).

| Date | Venue | Address as posted |
|---|---|---|
| 2010-03-24 | Brooklyn Gourmet Deli | 313 Bedford Ave, S. 2nd St, Brooklyn |
| 2010-03-24 | MTA – Marcy Ave J/M/Z | 176 Marcy Ave., at Broadway, Brooklyn |
| 2010-03-24 | J Train – Flushing St | — |
| 2010-03-25 | Brooklyn Bridge Park | 1 Main St, at Plymouth, Brooklyn |
| 2010-03-26 | Walgreens | 210 Union Ave, btw Meserole St & Montrose Ave, Brooklyn |
| 2010-03-26 | c town | south 1st st, havemeyer |
| 2010-03-30 | DuMont Burger | — (Williamsburg) |
| 2010-07-17 | Grimaldi's Pizza | 19 Old Fulton St, btw Front & Water Sts, Brooklyn |
| 2010-09-05 | Electric Zoo | 1 Randalls Is Road, Randall's Island Park, NY |
| 2010-09-19 | Ako Japanese Cuisine | 205 Bedford Ave., btw N. 5th & N. 6th, Brooklyn |
| 2010-09-29 | Peter Luger Steak House | 178 Broadway, Driggs Ave, Brooklyn |
| 2011-01-02 | Hibernia | 401 W 50th St, near 9th Ave, New York |
| 2011-01-24 | Freezepocalypse | "All over NY" — a joke check-in during a storm |

Two further badge-unlock posts carry no venue. A thinner run of Twitter
venue-tagged "I'm at" posts appears 31 March – 15 April 2012, all Manhattan,
immediately after the move off Bedford.

What they establish: a **neighbourhood** — south Williamsburg, within a few
blocks of [[wiki/places/424-bedford-ave|424 Bedford Ave]] — and a set of
dates. What they cannot establish: any of the arithmetic on this page. Fifteen
points over ten months is a sample of the places he chose to *announce*, on a
service he used for four seasons and abandoned. Peter Luger and Grimaldi's are
worth posting; the walk home is not. A check-in is a performance in a way a
passive log is not, and this page's indices all assume a passive log.

## Devices — the complete named-device log

| Device tag | Window | Pings |
|---|---|---|
| `-2081738332` "Socialist iPhone" | 2021-12-26 → 2024-01-07 | 38,082 — the densest period in the record |
| `1639724752` iPhone | 2024-01-29 → 2024-05-14 | 43 — reporting effectively dead |

*(Both from `Settings.json`, 19 deviceTags total, two named;
[[wiki/self/location-history]].)*

The second row is why the 2024 count is 17. It is also why the export's end is
a hardware event rather than a life event, and why no inference about 2024
behaviour is available from this instrument. The first device's name is a
dated artefact in its own right — the phone is called "Socialist iPhone" from
December 2021, which sits downstream of the August 2020 political conversion
narration and is consistent with it.

The activity-segment breakdown from the same database, complete: **3,170
in-passenger-vehicle, 2,128 walking, 257 cycling, 55 subway, 57 skateboarding,
3 CATCHING_POKEMON, 1 BOATING**. The car-to-walking ratio inverting across the
2019 move is the obvious thing to test and has not been tested.

## The verdict, restated at the strength the evidence supports

The report's through-line is that stability is not the core trait — *systemic
integrity* is. Tightly optimised, low-variance routines, defended hard, and
discarded wholesale rather than adjusted incrementally when they stop working.

**What survives.** One clean instance: the 2018 collapse and the 2019 rebuild,
dated to a three-day window by overnight pings, corroborated by a same-day
tweet, photographed at the lease signing nine days earlier, and independently
peaked on three non-spatial instruments. That is a well-documented system
replacement.

**What does not yet survive.** *One* instance is not a pattern. A rule about
how someone restructures needs at least two restructurings, and the other
candidate — the February 2025 exit from New York — sits nine months past the
export's hard boundary. The 2015–2017 "two-node system" is real but is a
caregiving commute, not a chosen architecture, and its dissolution has an
external cause with a date: a fall on 7–8 March 2018. The 2020 "siege" is an
instrument gap.

So the page's own claim, stated honestly: **the spatial record contains one
documented all-or-nothing restructuring, one misattributed second anchor, one
artefactual phase, and nine unverified indices.** Whether the same pattern
appears in the non-spatial corpus — career, relationships — is a real question
that this page does not attempt, and the answer is not "obviously yes" just
because both records describe a concentrated life.

## Limits of record

- **The source report is not held.** Every index, the four-phase structure, the
  ~170,000 km and ~3,500 locations figures, the Friday release valve, "The
  Stand" as a recurring node, and the "5-day smol bean magic pixie dream girl"
  2014 anomaly all come from `GPS_ANALYSIS.md`, which does not exist in this
  repository's `raw/` tree. Filed at low confidence
  ([`dat:1207`](../../kb/data/1207-spatial-behavior-ai-generated-gps-reading.md)).
  The 2014 anomaly is otherwise undocumented anywhere in the wiki.
- **Nothing after 2024-05-14.** The export has a hard boundary. The 2025 NYC
  exit, the 2025 collapse, the October 2025 DUI stop and 463 Morgantown Street
  are outside this instrument entirely.
- **The blackouts are instrument gaps, not quiet years.** 298.9 days
  (2020-09-24 → 2021-07-20) plus four gaps of 164.5, 113.5, 110.4 and 93 days.
  Any claim about behaviour inside them is unsupported by definition.
- **4,306 of 6,227 visits are unnamed.** Google's own labelling. The top-location
  table is drawn from the 1,921 named visits; the unnamed majority could change
  every ratio on this page and there is no way to check.
- **Address variants are collapsed by hand.** "Saratoga Drive" vs "Dr",
  "Virginia Avenue" vs "Ave" — the collapses are obvious but they are
  judgements, and the ~415 figure for 337 Saratoga is explicitly a sum of
  variants.
- **The 80-metre problem.** 155 Virginia and 117 Belmont are close enough that
  overnight-ping centroid assignment bleeds between them. The
  primary/secondary pattern survives; a precise split does not.
- **The 2023 record was authored.** 71 hand-edits, 13,074 manual pings, one
  deletion. The sensor layer is clean; the semantic layer for that year is a
  document the subject was editing.
- **Inferred vs documented.** Documented: every figure attributed to Instrument
  B above. Inferred: that the 2015–2017 second anchor is the caregiving job
  (the co-location and the job are both documented; the causal link between
  them is a reading). Inferred: that the report's indices are three cuts of one
  distribution. Not in the record at all: why the 2023 relabelling happened,
  what the 2020 radius actually was inside coverage, and whether any index on
  this page reproduces.

## Sources

**Held.** `raw/self/location/2026-06-22-ingest/` — `Records.json` (121,733
pings), `semantic_location.db` (6,227 visits), `Settings.json`,
`Timeline Edits.json`, 98 monthly Semantic Location History JSONs.
`raw/307-e-76th-st-lease-signing-photos-2019-02-25/` (2 frames, manifest with
SHA-256 per file). `corpus/derived/threads.csv`.

**Not held, cited by this page.** `raw/self/dox-md/GPS_ANALYSIS.md`.

**kb.** [`dat:1207`](../../kb/data/1207-spatial-behavior-ai-generated-gps-reading.md) ·
[`dat:0533`](../../kb/data/0533-exocortex-measured-claims-unverified.md)

**Photographs.** Two frames from the night the 307 E 76th Street lease was
signed, 2019-02-25, discussed under [2019 — migration](#2019--migration-holds-and-it-can-be-dated-to-the-day)
above. Both are byte-identical copies of the archived originals; hashes in
`raw/307-e-76th-st-lease-signing-photos-2019-02-25/manifest.json`.

[![Empty room at 307 E 76th St, photographed 2019-02-25 at 20:20 — the apartment before occupancy, nine days before the first NYC overnight pings](wiki/media/derivatives/307-e-76th-lease-20190225/photo-1-empty-room-20190225-202033.jpg)](wiki/media/derivatives/307-e-76th-lease-20190225/photo-1-empty-room-20190225-202033.jpg)

[![Kitchen at 307 E 76th St, photographed 2019-02-25 at 20:19 — same visit, two minutes earlier](wiki/media/derivatives/307-e-76th-lease-20190225/photo-2-kitchen-20190225-201918.jpg)](wiki/media/derivatives/307-e-76th-lease-20190225/photo-2-kitchen-20190225-201918.jpg)

**See also.** [[wiki/self/location-history]] · [[wiki/mind/concepts/contact-gini]] ·
[[wiki/timeline/periods/2017-poverty-floor]] · [[wiki/timeline/periods/2018-deep-cycle]] ·
[[wiki/places/155-virginia-ave]] · [[wiki/places/117-belmont-circle]] ·
[[wiki/places/307-e-76th-st]] · [[wiki/work/au-zaatar]] · [[wiki/mind/concepts/exocortex]]
