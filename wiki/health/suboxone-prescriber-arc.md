---
domain: health
page_type: synthesis
title: "The Prescriber Arc: Monitored 2011, Logistics 2025, Transition Undated"
status: active
knowledge: earned
date_created: 2026-09-17
date_modified: 2026-09-24
sources:
  - src:imessage-corpus-2026
  - src:imessage-complete-dump-2025-08-11
  - src:facebook-export-2026-06-23
  - src:old-wiki-export-2026-09-04
  - src:wikitest-rebuild-session-2026-09-09
  - kb/data/0025-old-wiki-prescriber-exists-routing-only.md
  - kb/data/0028-prescriber-quotes-partly-unverifiable.md
  - kb/data/0033-2011-suboxone-appointment-with-screening.md
  - kb/data/0055-facebook-corroborates-the-2010-maintenance-start.md
  - kb/data/1502-corpus-coverage-hole-2025.md
synthesizes:
  - wiki/health/suboxone-dose-curve
  - wiki/health/the-configured-body
  - wiki/health/chemical-architecture
  - wiki/mind/synthesis/supply-graph-vs-chain
  - wiki/mind/profile/intp
related:
  - wiki/health/suboxone-dose-curve
  - wiki/mind/synthesis/supply-graph-vs-chain
  - wiki/self/corpus/channel-coverage-gaps
tags: [addiction-recovery, forensic-analysis]
connections:
  - page: wiki/health/suboxone-dose-curve
    type: supplies
    claim: "That page's fourth listed gap — 'the 2011–2013 prescriber identity and practice… the monitored-to-logistics transition is undated' — is this page's whole object. The dose curve inventories bearings for their dose content and finds none; this page re-reads the same bearings for what they say about the relationship, which is the one thing they are all actually about."
  - page: wiki/health/the-configured-body
    type: extends
    claim: "The 2026-08-19 correction there closed the 'no prescriber information' gap and characterised the relationship as logistics-only. This page keeps that characterisation, dates its boundaries, and carries the 2026-09-13 finding that page could not have — the three quotes it rests on are real, and their absence from the authoritative export was coverage, not provenance."
  - page: wiki/mind/synthesis/supply-graph-vs-chain
    type: component-of
    claim: "That entry models the licit layer as one layer of a two-layer graph and states its epistemic floor as an unresolved verification ceiling. This page is that layer read on its own terms and on its own timeline, and it lifts the ceiling: dat:1502 settles the three quotes' existence, which converts the graph's 'moderate confidence on the 2025 topology' into a coverage-bounded rather than a provenance-bounded claim."
  - page: wiki/self/corpus/channel-coverage-gaps
    type: evidenced-by
    claim: "The arc is legible only because three different channels covered three different decades — Facebook for 2011 and 2013, the authoritative export for 2019, the 2025-08-11 dump for 2025. No single instrument holds this timeline, and the coverage map is why."
  - page: wiki/mind/synthesis/steady-state-invisibility
    type: instantiates
    claim: "Every dated prescriber contact in fifteen years is an event — an appointment, a refusal, a re-route. Not one is a state. The arc is what a relationship looks like when the only channel recording it records changes, which is why its thickness can be scored at six points and never in between."
  - page: wiki/people/tom
    type: contrasts
    claim: "The failover. The 2025-09-18 line naming him as the hoped-for alternative sits four months before the 2025-12-31 counterfactual about the doctor-and-pharmacy route, and the May 2026 collapse ran through him and never through the prescriber."
  - page: wiki/work/bfs-foods
    type: evidenced-by
    claim: "The far edge of the arc. A four-day sourcing cascade in mid-May 2026 that never once touches the prescriber is this page's strongest and most ambiguous bearing: evidence the licit route was down, or evidence it was simply not reached for."
---

# The Prescriber Arc: Monitored 2011, Logistics 2025, Transition Undated

[[wiki/health/index|health]]

In August 2011 a man in his early twenties, eighteen months into daily Suboxone,
misses an appointment and panics about a urine test. He has stayed dry since
Saturday night, bought an at-home kit to check himself, failed it by *"just a
liiittttle bit"*, and is asking a friend for clean urine
**[ATTESTED, `kb/data/0033-2011-suboxone-appointment-with-screening.md`]**.

Whatever else that message is, it is a record of someone who has a doctor — a
scheduled appointment, at a place, with a test administered there. Fourteen years
later the same man's medical relationship appears in the record only as a series
of routing failures: a script moved to a new state, an out-of-state prescription
a pharmacy will not fill, a Walmart that will not fill it either, and *"i'm
completely out of options now"* **[ATTESTED as quoted,
`kb/data/0025-old-wiki-prescriber-exists-routing-only.md`]**.

Those two things happened to the same man about the same regimen and they are
not the same relationship. This page holds the arc between them: every dated
prescriber bearing, what each establishes, and the honest answer about the
transition — **it is real, it is directional, and it cannot be dated.**

The [[wiki/health/suboxone-dose-curve|dose curve]] inventoried these same
bearings and scored each for dose content, finding zero in every one
**[ATTESTED, that page]**. That is the correct result for that question and it
discards the thing the bearings are actually *about*. Every one of them is about
a relationship. Read for relationship content rather than dose content, the same
twelve-bearing record yields a shape.

## 1. The complete bearing log

Every dated contact touching the prescriber, with verification status as it
stands on 2026-09-17. No bearing is omitted, including the ones that carry
nothing.

| Date | What is in the record | Channel | Verification status |
| :--- | :--- | :--- | :--- |
| 2010-02-17 | daily dosing begins; no prescriber named | Twitter (same-day tweet) | ATTESTED as the start date; **prescriber content: none** |
| 2011-08-04 | missed appointment, urine screen administered there, at-home kit failed, clean-urine request | Facebook | **ATTESTED**, dat:0033 — structural speaker attribution |
| 2013-07-10 | *"i was on the strips when i had a doctor in nyc"* — past tense | Facebook | **ATTESTED**, dat:0055 |
| 2013-07-10 | *"if you're ever unloading or come in contact call me"* — same thread, same night | Facebook | **ATTESTED**, dat:0055 |
| 2019-05-31 | *"try to go get subs from my old doctor"* | iMessage | **VERIFIED VERBATIM** against the authoritative export, dat:0028 |
| 2021-03-31 | *"3 months at a time is legit, are the suboxone or subutex?"* | Facebook | ATTESTED as the message; **referent not established**, dat:0055 |
| 2025-03-06 | *"I had my doctor move my prescription here"* | iMessage | quoted by the 2026-08-19 census; **absent from the export** (3 msgs that day); **present in the dump**, dat:1502 |
| 2025-06-08 | *"my doctor said the pharmacy won't fill an out of state prescription"* | iMessage | **export holds 0 messages that day**; **dump holds 272**, quote present, dat:1502 |
| 2025-06-12 | *"my doctor tried to send a prescription to walmart and they won't fill it either"* | iMessage | **export holds 0 messages that day**; **dump holds 200**, quote present, dat:1502 |
| 2025-09-16 | *"I literally have a month's script that I couldn't get filled anywhere because it was a NY prescription"* | iMessage | **ATTESTED** from the export, dat:0028 |
| 2025-09-18 | *"hopefully tom will have his actual prescription"* | iMessage | **ATTESTED**, dat:0028 |
| 2025-12-31 | *"even if I was getting them through a doctor and pharmacy, $5 a piece is probably the cheapest avail op"* | iMessage | ATTESTED as quoted; **deliberately not promoted**, dat:0028 |
| 2026-05 (mid) | four-day sourcing cascade, three burns, ~72h withdrawal — **prescriber never appears** | iMessage + operator account | ATTESTED as the cascade, wiki/work/bfs-foods; **prescriber absence is `never_observed`** |

Thirteen rows across sixteen years. **Six of them name a doctor.** That is the
licit layer's entire documented surface: six contacts in fifteen years — *"not a
care relationship; it is a permission slip with a phone number"*
**[ATTESTED, wiki/mind/synthesis/supply-graph-vs-chain]**.

## 2. 2011 — the relationship at its thickest

The 2011-08-04 message is the only bearing in the record that describes a
clinical apparatus rather than a transaction. It establishes three things at
once **[ATTESTED, dat:0033]**:

- **Appointments at a place.** Not a pharmacy handoff, not a phone call.
- **A urine screen administered there.** That is monitored treatment — a
  substantive clinical relationship with an oversight function.
- **Hand-to-mouth sourcing texture even in the good years.** Dry since Saturday
  night before a Monday appointment, and an at-home kit bought to pre-check the
  result.

The third is the detail the page would be poorer without, because it prevents
the first two from reading as a stable, well-managed period. Monitoring existed
and was being *worked around* in the same message that proves it existed. The
apparatus was real; compliance with it was already a problem to be solved.

dat:0033 states its own scope and this page adopts it unchanged: this does not
establish that monitoring persisted, fourteen years separate it from the 2025
material, and *"a treatment relationship that begins with monitoring and decays
into script-moving is an entirely ordinary trajectory"* **[ATTESTED, that node]**.

## 3. 2013 — already past tense

By July 2013 the relationship is described in the past: *"i was on the strips
when i had a doctor in nyc"* **[ATTESTED, dat:0055]**. Three readings of the
tense are available and the record does not choose between them: the NYC doctor
ended when the NYC residency ended; the formulation changed and the doctor with
it; or the sentence is describing a period rather than a termination.

What the same night establishes without ambiguity is that **both supply routes
are live at once**. In the same thread, to the same person, he solicits an
informal source: *"if you're ever unloading or come in contact call me"*
**[ATTESTED, dat:0055]**. dat:0055's finding is that the prescribed and informal
topologies *overlap rather than succeed each other, at least through 2021*
**[ATTESTED, that node]**. The prescriber is never the whole supply; from the
first year of the observable record it is one of two.

There is a gap here the wiki should stop stepping over: the 2013 exchange is
**the last bearing of any kind for six years**. Between 2013-07-10 and
2019-05-31 the record holds nothing about a prescriber. That interval covers the
return to Uniontown, the 2015 onset of the decade's primary relationship, and the
corpus's densest year. Whether a doctor existed continuously across it is
[UNKNOWN], and the reason is partly mechanical: the authoritative export holds
**zero messages** for 2012, 2013 and 2014 **[DERIVED,
`corpus/derived/summary.json`; see [[wiki/self/corpus/channel-coverage-gaps]]]**.

## 4. 2019 — the only line that survived verification first time

*"try to go get subs from my old doctor"*, 2019-05-31, is the single prescriber
quote present verbatim in the authoritative export **[ATTESTED, dat:0028]**.

Its wording is the finding. **"My old doctor" is not a relationship being
maintained; it is a fallback being considered.** Six years after the NYC doctor
went past tense, the prescriber has become a route to be *tried* — one option
among others, reached for under supply pressure. The 2011 apparatus does not
appear anywhere in the sentence's assumptions.

This is the arc's midpoint and it was, for a time, the only fixed point on it.
Between 2026-09-09 and 2026-09-13 the wiki's position was that one of four
prescriber quotes could be confirmed and the other three could not — which made
this line carry the entire licit layer on its own **[ATTESTED, dat:0028]**.

## 5. 2025 — the logistics cluster, and a three-stage epistemic history

The 2025 material is the arc's far end and the best-documented failure of the
wiki's own verification pipeline. It moved three times in twenty-five days.

**Stage one — asserted (2026-08-19).** A term census over the message dump
surfaced four dated messages and the prior wiki concluded from them that the
regimen is prescribed and that *every recorded exchange about that doctor
concerns moving a script between pharmacies, with none concerning a dose, a
taper, a review or a body* **[ATTESTED as the census's claim, dat:0025]**. The
value was the split it produced: **prescribed** is true in the supply sense;
**unmanaged** is defensible in the oversight sense; one word had been carrying
both **[ATTESTED, dat:0025]**.

**Stage two — could not verify (2026-09-09).** An attempt to promote dat:0025
out of testimony into first-party data failed. Against the authoritative export
— 192,140 rows, sha256-verified, manifest-checked — one quote matched and three
did not, and two of the three fell on days the export holds **no messages at
all**, inside a June 2025 carrying 35 messages in total **[ATTESTED, dat:0028]**.
dat:0028 refused to read that as refutation and filed it `never_observed`,
stating that treating the misses as refuted would be *"the exact error this
system exists to prevent, committed while verifying somebody else's"*
**[ATTESTED, that node]**.

**Stage three — vindicated (2026-09-13).** The 2025-08-11 complete dump was
opened out of a Drive-sweep zip already tracked in the repository. **All four
quotes are present verbatim, including the three that could not be verified**,
and the two dates the export reported as empty hold **272** and **200** messages
there **[ATTESTED, `kb/data/1502-corpus-coverage-hole-2025.md`]**.

The arc's 2025 leg is therefore **evidentially sound and was, for four days,
carried on this wiki as unverifiable**. That is not a small distinction. It is
the difference between a claim whose provenance is suspect and a claim whose
instrument was blind, and dat:1502 names it: *"the finding is about coverage
rather than provenance — a much less alarming conclusion that changes what to do
next"* **[ATTESTED, that node]**.

**What the 2025 cluster shows about the relationship**, now that it can be
relied on:

1. **The doctor writes; the pharmacies refuse.** The prescriber is never the
   failure point in the June sequence **[ATTESTED, quoted content;
   wiki/mind/synthesis/supply-graph-vs-chain]**.
2. **The relationship's entire function is geographic re-routing.** *"Move my
   prescription here"* is the layer's normal operation; June is the same
   operation failing.
3. **A month's script existed in September 2025 and could not be filled
   anywhere** because it was a NY prescription **[ATTESTED, dat:0028]** —
   independent of the June quotes, in different words, three months later.
4. **The failover was named.** *"hopefully tom will have his actual
   prescription"*, 2025-09-18 **[ATTESTED, dat:0028]**.

## 6. The counts that did not match, and why

The census discrepancy is worth keeping because it was the first visible symptom
of a coverage problem nobody had diagnosed. The prior wiki's census reported
`doctor` at **36 outbound / 23 inbound**; the same census over the authoritative
export returned **29 / 39** **[ATTESTED, dat:0028]**. dat:0028's reading: *"not a
small discrepancy in one direction; the inbound figure nearly doubles while
outbound falls, which means a different population rather than a miscount"*
**[ATTESTED, that node]**.

dat:1502 supplies the explanation: two different corpora were being counted, one
of which is missing most of 2025 **[ATTESTED, that node]**. The symptom was read
correctly four days before its cause was available, which is the good case — the
discrepancy was recorded as an anomaly rather than reconciled away.

## 7. The transition: real, directional, undatable

The arc's shape is not in dispute. Its timing is entirely unknown.

| Property | Status |
| :--- | :--- |
| 2011 was monitored treatment | **ATTESTED**, dat:0033 |
| 2025 was logistics-only in every recorded exchange | ATTESTED as the census's claim, dat:0025; the quotes themselves now confirmed present, dat:1502 |
| The direction is monitored → logistics | **INFERRED** from the two endpoints; no intermediate bearing describes oversight |
| The transition has a date | **UNKNOWN** |
| The transition was a single event | **UNKNOWN** — equally consistent with decay |
| The 2011 and 2025 doctors are the same person | **UNKNOWN** — no name appears anywhere |

**[Statuses as marked; the direction inference is the page's, built on dat:0033's
own "monitored in 2011, logistics-shaped by 2025, with the transition undated".]**

Three candidate mechanisms, none established, each with a different implied date:

1. **Geographic.** The NYC doctor is past tense by mid-2013 and the man is back in
   Uniontown. A relationship that ends with a move and is replaced by a remote or
   thinner one would place the transition in **2012–2013**.
2. **Decay without an event.** Monitoring lapses as compliance is repeatedly
   worked around — the 2011 message already shows that work-around in progress.
   This mechanism has no date by construction, and it is the one the record's
   texture most supports.
3. **Regulatory or practice-side change.** Nothing in the corpus speaks to it,
   and a clinical record would not be in a message archive by construction
   **[ATTESTED as the structural point, wiki/health/suboxone-dose-curve]**.

The honest statement is dat:0033's and this page does not improve on it:
**monitored in 2011, logistics-shaped by 2025, transition undated.** What this
page adds is that the interval containing the transition can now be bounded at
one end — the relationship is already *"my old doctor"* by 2019-05-31, so the
decay had substantially completed **before** the 2025 cluster the
characterisation was drawn from.

## 8. May 2026 — the bearing that is loudest by being absent

The arc's last row is a non-appearance. Across four days in mid-May 2026, burned
by three independent suppliers and going roughly 72 hours into withdrawal while
working a shift, the prescriber appears **nowhere** in the record of the scramble
**[ATTESTED as the cascade, wiki/work/bfs-foods]**.

Two readings, and [[wiki/mind/synthesis/supply-graph-vs-chain]] prices both
rather than choosing: the licit layer was **down** — jurisdictionally jammed, as
in June 2025 — or it was **not reached for**, a relationship too thin to occur to
him under pressure **[ATTESTED, that page's Limits]**. This page adds one
observation in favour of the second: by 2019 the relationship was already
something to *"try"*, and by 2025-12-31 he is describing the doctor-and-pharmacy
route in the counterfactual — *"even if I was getting them through a doctor and
pharmacy"* **[ATTESTED, dat:0028]**. A route described counterfactually in
December is a route that may simply not be in the decision set in May. That is an
inference from one conditional clause, which dat:0028 explicitly declines to
promote, and this page declines to promote it too — it is recorded as a lean, not
a finding.

**2026-09-24 annotation — redundant system, correlated failure.** The bearing
log's overlap row (prescribed and informal routes live together 2013–2021) and
the May 2026 cascade (one supplier's no-show collapsing the supply into ~72h of
withdrawal) are not in tension once the correlation is stated: the system was
redundant across topologies but correlated in its failure — by 2026 the informal
network had thinned to a single man, so a topology that once survived individual
node failures could not survive this one. Both can be true. The dose-curve page
records the same temporal resolution ([[wiki/health/suboxone-dose-curve]]); this
page adopts it as its reading of the arc's last row.

## 9. What the arc supports and what it does not

**Supports:**

1. A prescribing doctor existed and was referred to across **2011 → 2025**, six
   dated contacts **[ATTESTED across dat:0033, dat:0055, dat:0028, dat:1502]**.
2. In 2011 the regimen was under clinical oversight with testing **[ATTESTED,
   dat:0033]**.
3. By 2019 the prescriber was a fallback route rather than a maintained
   relationship **[INFERRED from "my old doctor"; grammatical]**.
4. By 2025 the relationship's recorded function was geographic re-routing, and
   its failure mode was jurisdictional — the pharmacy counter, not the doctor
   **[ATTESTED as the quoted content, now confirmed present by dat:1502]**.
5. The prescribed and informal routes overlapped from 2013 through at least 2021
   **[ATTESTED, dat:0055]**.

**Does not support:**

1. **Any dose, ever.** Six prescriber contacts, zero amounts **[ATTESTED,
   wiki/health/suboxone-dose-curve]**.
2. **Any date for the transition.**
3. **Continuity of the relationship.** Six contacts in fifteen years is a set of
   points; the wiki has repeatedly been tempted to read the line between them.
4. **That the 2011 and 2025 doctors are the same person.** No name is ever given.
5. **That the licit route was down in May 2026.** That is `never_observed` and is
   the single most consequential open question on the page.

## 10. Falsifiers

1. **A prescriber-side record of any kind** — an appointment summary, a pharmacy
   printout, an EOB. Absence here is weak evidence by construction, since a
   message archive would not hold one.
2. **Any message between 2013-07-11 and 2019-05-30 naming a doctor.** Six silent
   years sit at the arc's centre; the Facebook archive covers them and has been
   censused for `suboxone`, not for `doctor`.
3. **A named prescriber.** One name would convert three [UNKNOWN] rows in §7 at
   once.
4. **A May 2026 message referencing the prescriber.** Would settle §8 in favour
   of *not reached for* being wrong, and would break this page's lean.
5. **A monitoring or oversight reference after 2011** — a review, a test, a dose
   discussion. Would refute the monotonic-thinning reading rather than merely
   qualifying it.
6. **The June 2025 dump window read in full.** 4,898 messages sit there against
   the export's 35 **[ATTESTED, dat:1502]**, and they have not been read as a
   window — only searched for four strings.

## 11. Gaps

1. **The prescriber is unnamed at every point in fifteen years.**
2. **The 2013–2019 interval holds no bearing of any kind**, and the iMessage
   export cannot help — 2012, 2013 and 2014 are at zero rows **[DERIVED,
   `corpus/derived/summary.json`]**.
3. **The 2025-03-06 destination is unlocated.** *"Move my prescription here"* —
   Uniontown, NYC or another address changes the June jurisdiction story
   **[ATTESTED as an open gap, wiki/mind/synthesis/supply-graph-vs-chain]**.
4. **The June 2025 window is searched, not read.** The four-string search is all
   that has been run against the 4,898 dump messages.
5. **The 2011 practice is unidentified** — no clinic, no city, no program name.
6. **The formulation history stops at the strips.** The only formulation
   reference is NYC-era and past tense by 2013 **[ATTESTED, dat:0055]**.
7. **`dat:1502`'s finding is not yet absorbed by the pages it corrects.** No wiki
   page cited it as of this page's writing; [[wiki/health/the-configured-body]]
   and [[wiki/mind/synthesis/supply-graph-vs-chain]] still carry the
   could-not-verify ceiling. This page does not edit them — that is an
   adjudication for the pages' own authors — and it flags the propagation as
   outstanding.

## 12. Limits of record

- **Observed:** thirteen dated bearings, six naming a doctor; the 2011 appointment
  and screening; the 2013 past-tense doctor and the same-night informal
  solicitation; the 2019 verbatim-verified line; the 2025 cluster's five
  messages; the May 2026 cascade; the dump's 272 and 200 message counts on the
  two dates the export reports empty.
- **Reported (self-report, uncorroborated):** every quoted message. Nothing on
  this page is corroborated by a clinical source, because the archive contains
  none.
- **Calculated:** the six-of-thirteen naming split; the six-year 2013–2019 bearing
  gap; the zero-row status of 2012–2014 in the export.
- **Inferred:** the monotonic monitored→logistics direction; *"my old doctor"* as
  fallback rather than maintained relationship; the lean in §8 toward *not
  reached for*; the three candidate transition mechanisms.
- **Disproven:** *"no prescriber information in the corpus"* (closed by the
  2026-08-19 correction, dat:0025); *"the supply was unprescribed or
  self-sourced"* (does not survive dat:0025); *"three of the four prescriber
  quotes are unverifiable"* (superseded by dat:1502 — they are verified in the
  dump, and the export's silence was coverage).
- **Unknown:** the prescriber's identity at every point; the transition's date and
  whether it was an event or a decay; whether the 2011 and 2025 doctors are the
  same person; the licit layer's state in May 2026; every prescribed amount.
- **Attribution caveat inherited:** iMessage handle attribution is not
  person attribution, and at least three documented episodes in this corpus
  involve a third party typing on a counterparty's phone **[ATTESTED,
  wiki/self/message-corpora/source-coverage-index]**. None of the bearings here
  falls in those windows, but the caveat travels with any iMessage quote.
- **No media.** There is no photograph, prescription image or clinical document
  in the archive bearing on this relationship; the page embeds none and the
  Sources list below carries no thumbnails. That absence is itself the arc's
  central limitation — see §10.1.

## Sources

- [`dat:0033`](../../kb/data/0033-2011-suboxone-appointment-with-screening.md) —
  the 2011 appointment with screening
- [`dat:0055`](../../kb/data/0055-facebook-corroborates-the-2010-maintenance-start.md)
  — the 2013 exchange, the NYC doctor, the dual topology
- [`dat:0025`](../../kb/data/0025-old-wiki-prescriber-exists-routing-only.md) —
  the 2026-08-19 census and the prescribed/unmanaged split
- [`dat:0028`](../../kb/data/0028-prescriber-quotes-partly-unverifiable.md) —
  the verification that failed usefully, and the 2025 material it surfaced
- [`dat:1502`](../../kb/data/1502-corpus-coverage-hole-2025.md) — the coverage
  finding that vindicated the three unverifiable quotes
- [[wiki/health/suboxone-dose-curve]] — the same bearings read for dose content
- [[wiki/health/the-configured-body]] — the 2026-08-19 correction
- [[wiki/mind/synthesis/supply-graph-vs-chain]] — the licit layer inside the
  two-layer graph
- [[wiki/self/corpus/channel-coverage-gaps]] — why three channels were needed to
  see one relationship
- [[wiki/work/bfs-foods]] — the May 2026 cascade
