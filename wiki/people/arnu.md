---
domain: people
page_type: entity
status: active
date_created: 2026-06-22
date_modified: 2026-09-18
sources: ["raw/self/message-csv/imessage_7243228715_both_2025-06-03_now.csv — ⚠ Source reference unresolved — original target no longer exists in current corpus.", "raw/self/message-csv/imessage_7243228715_both_all_now.csv — ⚠ Source reference unresolved — original target no longer exists in current corpus.", "raw/self/context-core/CONTEXT_CORE_EXPANDED.md — ⚠ Source reference unresolved — original target no longer exists in current corpus.", "kb/data/0156-arnu-contractor-463-morgantown.md", "kb/data/0445-felix-painter-463-suz-message-verified.md", "kb/data/0074-morgantown-housing-state-august-2026.md", "kb/data/0243-alexander-jackson-owner-claim.md", "kb/entities/morgantown-st-463.md", "kb/events/2026-morgantown-st-move.md"]
synthesizes:
  - wiki/legal/463-morgantown
connections:
  - page: wiki/legal/463-morgantown
    type: component-of
    claim: "Arnu is the address's nearest hard deadline: a no-show on 10 February 2026 while his associate Felix worked, and a mechanics lien estimated to mature around 27 July 2026 that attaches to Jackson's title while Suz carries the exposure with no written separation of liability."
  - page: wiki/people/felix
    type: co-occurs
    claim: "Arnu and Felix enter the record in the same fourteen-word clause of the same message, and only Felix has a life outside it — the Suz thread carries a 'Felix' from January 2016 to June 2026, which means the one named associate is the ten-year fixture and the contractor is the stranger."
  - page: wiki/places/the-unpapered-address
    type: instantiates
    claim: "The Arnu exposure is not a contractor problem; it is the seventh unpapered address producing its predicted failure mode — a claim against a property with no instrument anywhere allocating who owes it."
  - page: wiki/mind/synthesis/the-deferred-audit
    type: evidences
    claim: "The elapsed lien deadline is that page's Prediction 2 confirming instance — a chosen arrangement left unaudited while it still stands, where one county-records query would settle it and nobody has run it."
related: ["wiki/legal/463-morgantown", "wiki/people/alexander-jackson", "wiki/people/john-carney", "wiki/people/felix", "wiki/people/john-felix", "wiki/people/suzanne-frank", "wiki/self/context-core", "wiki/places/the-unpapered-address", "wiki/mind/synthesis/vertical-authority-skepticism", "wiki/mind/synthesis/the-deferred-audit", "wiki/mind/synthesis/estate-money-spine", "wiki/timeline/periods/2025-collapse"]
tags: [forensic-analysis, housing, uniontown-era]
infobox:
  name: "Arnu"
  relationship_to_dan: unknown
  known_for: "The contractor who did not show up. One clause of one text message on 10 February 2026 is the entire primary record; a mechanics-lien deadline estimated from it organised a page, a risk table and 28 files."
---

# Arnu

Arnu is a man who did not come to work on a Tuesday.

That is the whole of him in this archive. On **10 February 2026 at 20:18:31
UTC** — 3:18 PM Eastern — [[wiki/people/suzanne-frank|Suz]] sent Dan a
message from her own number, and inside it were fourteen words about a
painter who had not arrived:

> *"Great!  It's mushy.  Felix showed up but Arnu didn't.  He's bringing
> Elijah over to do his homework until basketball practice and Felix is
> going to paint more.  Do you want to come over?"*

That message is verified verbatim in the held iMessage corpus — a single
exact-text match, inbound, `is_from_me=0`, from the handle independently
established as Suz's
([`dat:0445`](../../kb/data/0445-felix-painter-463-suz-message-verified.md);
handle attribution via
[`dat:0074`](../../kb/data/0074-morgantown-housing-state-august-2026.md)).
The four words that matter — *"but Arnu didn't"* — are the only primary
evidence that Arnu exists.

Everything else on this page, and on the twenty-seven other files in this
repository that say his name, is downstream of that clause.

## What the message actually says, and what the wiki took from it

The prior version of this page quoted the middle of the message and stopped.
The full sentence is worth reading whole, because the parts the page dropped
change its register. It opens *"Great! It's mushy."* and closes *"Do you want
to come over?"* — domestic coordination, an invitation, food in the middle of
it (the mushiness is probably about food, and that is an inference, not a
finding). The contractor news sits inside a mother's afternoon text, not
inside a project report
([`dat:0445`](../../kb/data/0445-felix-painter-463-suz-message-verified.md)).

From that clause the wiki extracted, in order: that Arnu is a contractor;
that his trade is paint and mechanical work; that Felix is his associate;
that the work at 463 Morgantown St was underway in February 2026; and that
a Pennsylvania mechanics lien arising from that February work window would
mature around **27 July 2026**.

The first four are readings of the sentence. The fifth is not in the
sentence at all. The ~27 July 2026 date was **derived from the February 2026
work window, not from a filing** — nothing on disk contains a lien notice, a
contract, an invoice, a dollar figure, or a surname
([`dat:0156`](../../kb/data/0156-arnu-contractor-463-morgantown.md)). The
date was always an estimate wearing a deadline's clothes, and the page that
organised itself around it said so in its own footnotes while continuing to
organise itself around it.

**The deadline elapsed on 2 August 2026 with no recorded outcome.** Whether
the lien was filed, settled, or never real remains open on every source read
since ([[wiki/legal/463-morgantown]];
[`dat:0074`](../../kb/data/0074-morgantown-housing-state-august-2026.md)).
Nineteen months of wiki attention have not moved it, and the reason is stated
below in the section on the audit.

## The day itself

The tenth of February 2026 is, on the evidence, an ordinary working day at a
house nobody had moved into yet — and it is also the **first dated evidence
of 463 Morgantown St anywhere in the corpus**
([`evt:2026-morgantown-st-move`](../../kb/events/2026-morgantown-st-move.md)).
The reconstruction, held to what the record supports:

| Element | What the record holds | Status |
|---|---|---|
| Time | 2026-02-10 20:18:31 UTC = 15:18 EST | Corpus-verified (`dat:0445`) |
| Sender | Suz, inbound, from `+17243228715` | Corpus-verified (`dat:0074`) |
| Site | 463 Morgantown St, Uniontown PA | Page-attributed; the message names no address |
| Present | Felix (painting); Elijah (homework, then basketball) | Corpus-verified as text |
| Absent | Arnu | Corpus-verified as text |
| Suz's movements | *"I'll get cigarettes and drop some off on my way to Morgantown st"* — same date | [[wiki/legal/463-morgantown]] timeline |
| Dan's position | Invited (*"Do you want to come over?"*); response unrecorded here | Gap |

Note the second Suz message from the same date, carried on the 463 page: she
is already making routine trips to Morgantown St in February, four months
before it becomes a residence. The address was a project before it was a
home, and Arnu is a figure from the project phase — the pre-history of the
tenancy rather than a party to it.

One detail resists tidying. The prior version of this page, and the pages
that copied it, placed the February work in "the post-337 sale move period."
The 337 Saratoga sale closed in **June 2026**
([[wiki/places/337-saratoga-drive]];
[`ent:morgantown-st-463`](../../kb/entities/morgantown-st-463.md), which
also records an unresolved one-day discrepancy between the wiki's 23 June
and the MLS record's 24 June). February 2026 is four months *before* that
sale, not after it. The framing was wrong and is corrected here
([`dat:0445`](../../kb/data/0445-felix-painter-463-suz-message-verified.md)
makes the same correction). Arnu's work belongs to the move-in window, not
the move-out.

> **CORRECTED [2026-09-18]:** this page previously described the 2026-02-10
> contractor day as "463 occupancy post-337 sale move" and as "contractor work
> parallel to BFS period." The 337 sale closed in June 2026, four months
> later. The BFS parallel stands on its own dating; the post-sale framing does
> not, and every page that inherited it from here
> ([[wiki/people/alexander-jackson]], [[wiki/people/felix]]) inherited an
> inversion.

## Who Felix is, and why it matters that Arnu is not

The single most useful thing the wiki learned about Arnu since this page was
written is about somebody else.

Arnu enters the record with an associate: *"Felix showed up."* The prior
reading treated the two as a pair — contractor and subcontractor, both new
to the record in February 2026, both belonging to the 463 job. That reading
did not survive a re-read of the Suz thread. Per the revision on
[[wiki/people/john-felix]] (2026-08-18), **"Felix" appears in the Suz thread
continuously from January 2016 to June 2026 — a full decade** — and the role
there is the Uniontown bar-and-supply circuit rather than a contracting one:
*"Felix is here. He has some"* (2018); *"Felix is looking for $200. He asked
me to ask the rev"* (2018); Dan owing him $10 (2016); Suz driving him around
to pay people back after a win (2016); collection from KJ's; a question about
spare golf balls to sell.

Hold the two facts together. The man who **showed up** to paint the house has
ten years of prior presence in this family's messages. The man who **did not
show up** has fourteen words on one afternoon and nothing before or after.

That asymmetry is the page's most load-bearing structural fact, and it points
the other way from how the wiki filed it. Felix is not Arnu's associate in
any sense the corpus can demonstrate; Felix is a decade-long fixture of the
Frank household's orbit who was, on one February afternoon, painting. Whether
Arnu was ever his principal, his employer, his co-worker, or simply another
name Suz mentioned in the same breath is **not established by anything in the
record**. The relation was inferred from adjacency inside a single sentence,
and adjacency inside a single sentence is not a relation.

The same caution applies to the "supply-adjacent" note attached to Felix from
`MAX_PRIME.md` ([[wiki/people/max]];
[[wiki/work/tech/max-framework/overview]]), and to the claim on
[[wiki/people/felix]] that Felix is an employee of
[[wiki/people/john-carney|John Carney]]. Neither is corroborated in this
repository; both are page-attributed relays of unheld dox-md material
([`dat:0445`](../../kb/data/0445-felix-painter-463-suz-message-verified.md)).
And a further identification problem sits underneath all of it: whether the
2016 thread's `+17249636738` "John Felix" and the Suz thread's "Felix" are
the same person **is itself unresolved** — the identification rests on a
first name appearing in two sources and has never been settled through the
contact exports ([[wiki/people/john-felix]], Gaps).

"Elijah" runs the same way. A child doing homework before basketball practice
at 463 in February 2026 carries the same first name as a child in the
household's orbit in 2016, in the John Felix thread — *"feeding Elijah"* —
and the wiki has never established whether they are one person
([[wiki/people/john-felix]]). Three first names in one sentence, and the only
one the archive can trace outside it is the one that is also the least
identified.

## The complete mention log

Arnu's name appears **122 times across 28 files** in this repository — 9 on
this page and **113 elsewhere**. Every one of those 113 traces, directly or
through one intermediary, to the same fourteen words of 10 February 2026. The
full census, machine-counted 2026-09-18 over `wiki/` and `kb/`:

| File | Mentions | What it carries |
|---|---:|---|
| [[wiki/timeline/master-timeline]] | 38 | The 2026-02-10 and 2026-07-27 entries, repeated once per source page that asserted them — the single largest concentration, and entirely derivative |
| `wiki/people/arnu.md` (this page) | 9 | The subject page |
| [[wiki/legal/463-morgantown]] | 9 | Risk table row, timeline rows, the DEADLINE ELAPSED block, the gaps list |
| [[wiki/people/john-carney]] | 7 | "Parallel Arnu" row; concurrent-deadline notes; the 2026-08-02 re-check |
| [[wiki/people/alexander-jackson]] | 7 | Roles table row; lien-attaches-to-title reasoning; premise re-checks |
| [`evt:2026-morgantown-st-move`](../../kb/events/2026-morgantown-st-move.md) | 7 | The move event's contractor exposures and open questions |
| [[wiki/people/felix]] | 5 | The no-show as Felix's context |
| [[wiki/work/tech/imessage-tooling/overview]] | 4 | Tooling provenance — which CSV utility surfaced the Suz housing messages |
| [`ent:morgantown-st-463`](../../kb/entities/morgantown-st-463.md) | 4 | Exposure list, evidence tiers, open questions |
| [`dat:0156`](../../kb/data/0156-arnu-contractor-463-morgantown.md) | 4 | The dedicated evidence node for this page |
| [`dat:0445`](../../kb/data/0445-felix-painter-463-suz-message-verified.md) | 3 | The verbatim corpus verification |
| [`dat:0074`](../../kb/data/0074-morgantown-housing-state-august-2026.md) | 3 | August 2026 housing state; lien listed as open and actionable |
| [[wiki/self/context-core]] | 2 | The lien named in the spine's current-state block and its staleness audit |
| [[wiki/places/the-unpapered-address]] | 2 | Prediction 3; the deferred-audit scoring |
| [[wiki/mind/synthesis/the-deferred-audit]] | 2 | Prediction 2 scored CONFIRMED on the elapsed deadline |
| [`syn:money-and-estate`](../../kb/syntheses/money-and-estate.md) | 2 | The elapse listed as an open question of the money spine |
| [`ent:suzanne-frank`](../../kb/entities/suzanne-frank.md) | 2 | Her unresolved 463 obligations |
| [`dat:0243`](../../kb/data/0243-alexander-jackson-owner-claim.md) | 2 | Filed under "adjacent claims, for completeness" |
| [[wiki/people/max]] | 1 | The MAX_PRIME Felix note pointing here |
| [[wiki/people/john-felix]] | 1 | The 2026-08-18 revision placing Felix at 463 |
| [[wiki/people/index]] | 1 | Index blurb |
| [[wiki/mind/synthesis/estate-money-spine]] | 1 | The deadline recorded as elapsed unobserved |
| [[wiki/mind/synthesis/aura-illness-compound-collapse]] | 1 | Contractor exposures as a component of the compound |
| [[wiki/meta/recent-activity]] | 1 | The 2026-08-20 RE-CHECKED entry |
| [[wiki/meta/open-questions]] | 1 | Prediction 3, carried into the backlog |
| [[wiki/meta/digest]] | 1 | "1 premise" |
| [`int:stale-propagation`](../../kb/interpretations/stale-propagation.md) | 1 | The lien as an item marked open rather than closed |
| [`dat:1032`](../../kb/data/1032-context-core-staleness-audit-2026-08-16.md) | 1 | The lien inside the context-core staleness audit |

**Twenty-eight files. One afternoon. No surname.** This is the clearest
instance in the corpus of the property
[`int:stale-propagation`](../../kb/interpretations/stale-propagation.md)
describes: a claim replicated by tooling across a document set acquires the
appearance of corroboration from its own copies. The master timeline's 38
mentions are not 38 pieces of evidence; they are one piece of evidence
harvested 38 times from the six pages that repeated it.

## The lien: complete lifecycle log

The ~27 July 2026 mechanics-lien estimate is the only temporal object this
page owns, and it has a complete recorded history. Every dated marker in the
repository that moves or re-affirms it, in order:

| Date | Where | What happened |
|---|---|---|
| 2026-02-10 | Suz iMessage, corpus row 207027 | The work window the estimate is derived from; Arnu absent, Felix painting |
| 2026-06-22 | `wiki/people/arnu.md`, `wiki/legal/463-morgantown.md` created | The estimate enters the wiki already formed, with no filing behind it |
| 2026-07-18 | [[wiki/legal/463-morgantown]] | Typed-connections pass; no factual revision |
| 2026-07-26 | This page; [[wiki/people/alexander-jackson]] | Premise re-check: *"now imminent and remains unresolved in every source read so far"* |
| **~2026-07-27** | — | **The estimated deadline. No recorded event of any kind.** |
| 2026-08-02 | This page; [[wiki/legal/463-morgantown]] | **DEADLINE ELAPSED.** Three states declared equally consistent: filed, settled, never real. A Fayette County prothonotary/recorder search named as the one-query fix |
| 2026-08-02 | [[wiki/people/john-carney]] | Re-check: premise moved, Carney exposure unaffected |
| 2026-08-02 | [[wiki/people/alexander-jackson]] | Re-check: sharpens why the owner's absence matters — the lien attaches to *his* title |
| 2026-08-09 | [[wiki/mind/synthesis/the-deferred-audit]] | The elapse scored as the first confirming instance of Prediction 2 |
| 2026-08-18 | This page; [[wiki/people/john-carney]]; [[wiki/people/alexander-jackson]] | `bin/wiki-climb check` staleness cascade following the Suz finance correction. **Nothing contradicted; the assessment of consequence changes** — there is no absorber |
| 2026-08-19 → 2026-08-28 | [[wiki/places/the-unpapered-address]] | Prediction 3: the lien *"will be resolved, if at all, by finding out rather than by contesting"* |
| 2026-08-20 | This page; [[wiki/people/john-carney]]; [[wiki/people/alexander-jackson]] | RE-CHECKED against the address-as-threat-vector section. No claim affected |
| 2026-09-09 | [`dat:0156`](../../kb/data/0156-arnu-contractor-463-morgantown.md), [`dat:0074`](../../kb/data/0074-morgantown-housing-state-august-2026.md), [`dat:0445`](../../kb/data/0445-felix-painter-463-suz-message-verified.md) | The evidence layer verifies the message verbatim and formalises the finding: **the absence of the lien is the datum, not the lien** |
| 2026-09-10 | [`ent:morgantown-st-463`](../../kb/entities/morgantown-st-463.md), [`evt:2026-morgantown-st-move`](../../kb/events/2026-morgantown-st-move.md) | Carried into the entity and event layers as an open exposure |
| 2026-09-18 | This page | Fifty-three days past the estimate. **Still unrun, still unresolved.** No county search appears in any log |

Read as a series rather than as a status, the log says something the status
line cannot: **this claim has been re-checked eight times and investigated
zero times.** Every marker above is the wiki confirming that it still does
not know, in increasingly well-formatted ways. The instrument that would
settle it — a parcel search against 463 Morgantown St in the Fayette County
prothonotary's and recorder's offices — has been named in the text since
2 August 2026 and has never been run.

## Why the exposure is real even if the lien is not

Three separate structural findings converge on this address, and none of them
needs Arnu to be a real creditor.

**There is no instrument.** Every relationship at 463 — tenancy, agency,
caretaking, contracting — runs on verbal understanding. No lease, no
confirmed power of attorney, no contract ([[wiki/legal/463-morgantown]];
[`dat:0074`](../../kb/data/0074-morgantown-housing-state-august-2026.md)).
If a claim arrives, there is no paper allocating who owes it, and
[[wiki/people/suzanne-frank|Suz's]] blended tenant/agent/caretaker role means
a claim against the property can reach her and, through her, Dan's housing.

**There is no absorber.** The 463 page previously reasoned that Suz's
finances were "cyclical." They are not. She filed **Chapter 13 in October
2024** (case 24-22285-GLT, ~$157,000 scheduled, IRS priority claims
2018–2021) against self-reported income of **$11,000–$14,000 a year**, and
337 Saratoga Drive — the only unencumbered asset — was liquidated in June
2026 at $465,000 to service that plan
([[wiki/people/suzanne-frank]]; [[wiki/legal/463-morgantown]] CORRECTED
2026-08-18; MLS #1721561 web-corroboration at
[`dat:1262`](../../kb/data/1262-337-saratoga-drive.md) via
[`ent:morgantown-st-463`](../../kb/entities/morgantown-st-463.md)). A
lien-sized shock has nothing to land on.

**There is nothing unusual about any of it.** [[wiki/places/the-unpapered-address]]
established, over sixteen years and seven addresses, that **not one home Dan
has lived in since 2010 has a lease, a contemporaneous rent figure, or a
signatory anywhere in the corpus**. 463 is the seventh consecutive instance.
The sale, the bankruptcy, the two contractors and the absent owner are not
required to explain the shape — which means the missing paperwork around Arnu
is the normal operating condition rather than an oversight anyone is about to
correct.

Arnu's function on this wiki, then, is not really that of a creditor. He is
the **test article**: the first plausible claim to arrive at an address that
has no mechanism for receiving one. That is why an unfiled, unverified,
possibly imaginary lien held a risk table's top row for four months.

## What the record does not show

Stated plainly, because the page's length is otherwise misleading about how
much is known.

- **No surname, no handle, no number, no thread.** Arnu appears in no message
  thread of his own, no Facebook exchange, no contact export, no Google
  location record, no photograph. He is a name inside somebody else's
  sentence.
- **No trade documentation.** "Contractor (painter/mechanical work)" is a role
  label relayed from unheld dox-md material, not a stated trade
  ([`dat:0156`](../../kb/data/0156-arnu-contractor-463-morgantown.md)). The
  message says only that he did not come while Felix painted.
- **No contract, invoice, notice or dollar figure**, and therefore no lien
  amount, no filing date, no claimant of record. Pennsylvania mechanics-lien
  practice is not discussed here because the record supplies no facts to
  apply it to.
- **No relationship to Dan.** `relationship_to_dan: unknown` is accurate. The
  corpus does not record the two men ever communicating, meeting, or being in
  the same room.
- **The February work's scope, cost and completion are all unknown.** Whether
  Arnu ever returned after 10 February is unrecorded.
- **Whether he and Felix worked together at all** is inferred from sentence
  adjacency (see above) and is not established.
- **Whether Dan still lives at 463** is itself open — the 2026-08-11 *"It's
  time for you to go."* from Suz has no recorded outcome
  ([`dat:0074`](../../kb/data/0074-morgantown-housing-state-august-2026.md)).
  If the tenancy has ended, the lien question survives it: a lien attaches to
  [[wiki/people/alexander-jackson|Jackson's]] title regardless of who is
  sleeping in the house.

And one limit about the owner, which bears on everything above: the claim
that 463 Morgantown St is owned by a person named Alexander Jackson **has no
primary document behind it in this repository**. It arrives through the old
wiki's context-core/operating-manual layer, AI-secondary synthesis of
materials not held here, and the independently recorded Morgantown-call STT
transcript mentions Jackson, the lease and Morgantown **zero times**
([`dat:0243`](../../kb/data/0243-alexander-jackson-owner-claim.md),
confidence `low`). The lien's target is as unevidenced as the lien.

Finally, the standing archive-wide caveat applies here with full force. This
page's frontmatter cites four `raw/self/...` paths. **None of those files
exists in this repository** — the reconstruction preserved the pages and the
export, not the sources the pages were written against (see `README.md`,
"What did not come back"). Those citations resolve to nothing. That does not
make the claims false; it makes them *unverified*, which is a different and
recoverable state. The 10 February message is the one exception, and it is
the exception because it was re-located in the authoritative corpus rather
than trusted from the page.

## Appendix: the forensic residue

Three compact observations that do not belong in the account above.

**A. The estimate's arithmetic was never shown.** No page states how ~27 July
2026 was computed from a February work window — which statutory period, from
which triggering event, under which of Pennsylvania's notice requirements. A
derived date whose derivation is unrecorded is not reproducible, and an
irreproducible derivation cannot be checked for error. The date may be right;
it cannot currently be shown to be right, and the wiki treated it as a
calendar fact for four months.

**B. The elapse was the prediction's evidence.** [[wiki/mind/synthesis/the-deferred-audit]]
scored its 463 prediction CONFIRMED on the strength of this deadline passing
unexamined, and [[wiki/places/the-unpapered-address]] then observed that the
prediction had already been true six times before it was made — "not a
forecast; a regularity nobody had counted." The Arnu lien is therefore doing
double duty: it is both an open risk and the instrument by which two
synthesis pages measured their own foresight. That is a conflict of interest
worth naming. A page that gains explanatory credit when a question stays
unanswered has a weak incentive to answer it.

**C. Redaction divergence.** The old-wiki export prints Suz's phone number in
full on this page; the later corpus copy redacts it to `[phone redacted]`
([`dat:0156`](../../kb/data/0156-arnu-contractor-463-morgantown.md)). This
reconstruction follows the redacting convention. The handle is identified in
the evidence layer where identification is load-bearing and withheld here
where it is not.

## Sources

- **Primary (corpus-verified):** `corpus/messages.csv` row 207027,
  2026-02-10 20:18:31 UTC, inbound from Suz's handle — located by exact-text
  search, single match
  ([`dat:0445`](../../kb/data/0445-felix-painter-463-suz-message-verified.md)).
- **Evidence layer:** [`dat:0156`](../../kb/data/0156-arnu-contractor-463-morgantown.md)
  (this page's dedicated node, confidence `moderate`),
  [`dat:0074`](../../kb/data/0074-morgantown-housing-state-august-2026.md),
  [`dat:0243`](../../kb/data/0243-alexander-jackson-owner-claim.md)
  (confidence `low`),
  [`ent:morgantown-st-463`](../../kb/entities/morgantown-st-463.md),
  [`evt:2026-morgantown-st-move`](../../kb/events/2026-morgantown-st-move.md).
- **Wiki layer:** [[wiki/legal/463-morgantown]],
  [[wiki/places/the-unpapered-address]], [[wiki/people/suzanne-frank]],
  [[wiki/people/alexander-jackson]], [[wiki/people/john-carney]],
  [[wiki/people/felix]], [[wiki/people/john-felix]],
  [[wiki/self/context-core]], [[wiki/mind/synthesis/the-deferred-audit]],
  [[wiki/mind/synthesis/estate-money-spine]],
  [[wiki/mind/synthesis/vertical-authority-skepticism]].
- **Cited but not held:** `raw/self/message-csv/imessage_7243228715_both_2025-06-03_now.csv`,
  `raw/self/message-csv/imessage_7243228715_both_all_now.csv`,
  `raw/self/context-core/CONTEXT_CORE_EXPANDED.md`,
  `raw/self/dox-md/MAX_PRIME.md`. Dangling citations, per `README.md`.
- **Unrun, and decisive:** a Fayette County prothonotary and recorder search
  against the 463 Morgantown St parcel. One query. Named as the fix since
  2 August 2026.

No photographs, recordings, or documents of Arnu exist anywhere in this
archive, so this section carries no media.
