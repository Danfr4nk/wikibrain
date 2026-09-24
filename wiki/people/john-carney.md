---
domain: people
page_type: entity
status: active
date_created: 2026-06-22
date_modified: 2026-09-20
sources: ["raw/self/message-csv/imessage_7243228715_both_2025-06-03_now.csv — ⚠ Source reference unresolved — original target no longer exists in current corpus.", "raw/self/message-csv/imessage_7243228715_both_all_now.csv — ⚠ Source reference unresolved — original target no longer exists in current corpus.", "raw/self/message-csv/imessages_2124702449_last6months.csv — ⚠ Source reference unresolved — original target no longer exists in current corpus.", "raw/self/context-core/CONTEXT_CORE_EXPANDED.md — ⚠ Source reference unresolved — original target no longer exists in current corpus.", "raw/sammy/20260912-location-history/semantic/2019/2019_FEBRUARY.json", "corpus/messages.csv — ⚠ Source reference unresolved — original target no longer exists in current corpus.", "kb/data/0677-john-carney-dossier-message-verified.md", "kb/data/0074-morgantown-housing-state-august-2026.md", "kb/data/0156-arnu-contractor-463-morgantown.md", "kb/data/0243-alexander-jackson-owner-claim.md", "kb/data/0445-felix-painter-463-suz-message-verified.md", "kb/entities/morgantown-st-463.md", "kb/events/2026-morgantown-st-move.md"]
synthesizes:
  - wiki/legal/463-morgantown
connections:
  - page: wiki/legal/463-morgantown
    type: component-of
    claim: "Carney is the second contractor exposure at the same address — work roughly 10-20% complete and unreachable as of March 2026 — which is what turns the lien risk into a pattern of the property rather than one bad contractor."
  - page: wiki/mind/synthesis/may-august-2025-bridge
    type: contradicts
    claim: "That page marks the 2025-03-09 'pulled over' and 2025-05-28 'neck massage' lines [ATTESTED] and builds on them the finding that the fallback property's contractor was already in the house in May 2025. Both lines return zero hits in the authoritative corpus (dat:0677) and their stated source file is not held, so the finding rests on quotations the complete record does not contain."
  - page: wiki/people/arnu
    type: parallels
    claim: "The address's two contractor exposures are the same object at different magnitudes: Arnu is one clause of one message with a derived lien deadline attached, Carney is one message about a document with a completion percentage attached, and neither number appears in any held source."
  - page: wiki/places/the-unpapered-address
    type: instantiates
    claim: "Re-letting the Carney work would require a contract at an address where sixteen years and seven residences have produced no lease, rent figure or signatory of any kind — so the work staying unfinished is the architecture's normal output rather than this contractor's failure."
related: ["wiki/legal/463-morgantown", "wiki/people/alexander-jackson", "wiki/people/arnu", "wiki/people/felix", "wiki/people/john-felix", "wiki/people/suzanne-frank", "wiki/self/context-core", "wiki/mind/synthesis/vertical-authority-skepticism", "wiki/timeline/periods/2025-collapse", "wiki/mind/synthesis/may-august-2025-bridge", "wiki/places/the-unpapered-address", "wiki/mind/synthesis/the-deferred-audit", "wiki/self/location-history", "wiki/work/bfs-foods"]
tags: [ai-collaboration, housing, uniontown-era, forensic-analysis]
infobox:
  name: "John Carney"
  relationship_to_dan: unknown
  location: uniontown
  known_for: "Role: Contractor at 463 Morgantown St. Unreachable; work ~10-20% complete. Parallel mentions of Carney's Auto Repair Ser"
---

# John Carney

A contractor took a job on a house at 463 Morgantown St in Uniontown,
Pennsylvania, did somewhere around a tenth of it, and stopped answering. That is
the event. It happened, on the wiki's own dating, around March 2026, to a
property that Dan and his mother [[wiki/people/suzanne-frank|Suz]] were moving
into on no signed lease, owned by a man neither of them has a single recorded
communication with.

At 6:30 on the morning of 27 March 2026 — the only moment in this entire story
that the authoritative corpus can actually see — Suz texted her son about a
document she had been reading:

> *"I just read the John carney thing. Did you read it? The last few pages are
> Very interesting. I wish it had included the"*

The message is cut off there. That is not an editorial ellipsis; that is where
the row ends
([`dat:0677`](../../kb/data/0677-john-carney-dossier-message-verified.md)).
Whatever she wished it had included is not recoverable, the document she read is
not in this repository, and Dan's answer — if there was one — has not been
located.

Everything else this wiki has ever said about John Carney descends from that
one message, from two 2025 quotations that **do not exist in the complete
record**, and from a set of figures whose source no page has ever named. This
rewrite separates those three categories, which is the only useful thing that
can currently be done with him.

## The one verified message

Located by exact-substring search in `corpus/messages.csv`, the authoritative
Messages export (192,140 rows, 2011-03-19 → 2026-09-07):

| Field | Value |
| :--- | :--- |
| Corpus timestamp | **2026-03-27 10:30:41 UTC** |
| Local (Eastern) | **2026-03-27 06:30:41 EDT** |
| Direction | Inbound, `is_from_me = 0` |
| Sender | Suz, from the handle independently established as hers ([`dat:0074`](../../kb/data/0074-morgantown-housing-state-august-2026.md)) |
| Text as stored | *"I just read the John carney thing. Did you read it? The last few pages areVery interesting. I wish it had included the"* |
| Verification | Verbatim, single match ([`dat:0677`](../../kb/data/0677-john-carney-dossier-message-verified.md)) |

Two small things in that row are worth keeping because they are the kind of
detail that proves a quotation was actually looked up rather than copied
forward. The stored text runs *"areVery"* together with no space, and the
page's long-standing excerpt reproduces the same run-together and stops at the
same point the CSV row does. The excerpt was cut from the record, not
reconstructed from memory of it.

The timestamp conversion also matters. The wiki writes times in local Eastern
and the corpus stores UTC — four hours apart in summer, five in winter — so a
page time of 06:30 lands on a corpus row at 10:30 and a naive lookup by the
quoted time finds the wrong message or none, and looks correct either way
([`CORPUS_POLICY.md`](../../CORPUS_POLICY.md);
[`dat:1802`](../../kb/data/1802-held-corpus-timestamps-are-utc-not-local.md)).
This row converts exactly.

**What the message establishes:** that a document about John Carney existed by
27 March 2026, that Suz had read it, that she found its final pages notable,
and that she was asking Dan whether he had read it too.

**What it does not establish, and has been read as establishing anyway:** that
the work at 463 was 10–20% complete; that Carney was unreachable; that the
analysis was agreed with. None of those three appears in the message. The
previous version of this page's Timeline Snippets section recorded the entry as
*"'John carney thing' read by Suz; analysis agreed with"* — and the message
contains a question (*"Did you read it?"*), which is the opposite of an
agreement. That gloss is struck here.

## The document that isn't held

"The John carney thing" names a dedicated forensic dossier on a local
contractor. It is not in `raw/` — this page has said so twice, since 2026-07-26,
and the 463 page lists *"the content of the 'John carney thing' document
(referenced but not in raw/)"* among its standing gaps.

Three things can be said about it without inventing any of them.

**It has siblings.** The corpus contains other dossiers of the same shape aimed
at named local actors — the Bacharach material, the Ulmer material — and the
Bacharach artefact has the identical problem of being referenced everywhere and
held nowhere
([`dat:0666`](../../kb/data/0666-bacharach-discovery-timeline-unverifiable-held.md)).
A dossier on a contractor who abandoned a job is the same instrument pointed at a
smaller target, which is the reading this page has always offered: recursive
forensic application to local actors.

**Its authorship is not established.** The wiki assumes Dan produced it, which
is consistent with the pattern and with Suz asking *him* whether he had read
it — an odd question to ask the author. It is equally consistent with a document
that came from somewhere else and that they were both reading. No held source
names an author, a date of creation, a length, or a subject beyond the name.
*"The last few pages"* is the only structural fact about it in existence: it had
pages, and more than a few.

**Its absence is the load-bearing gap.** If the dossier is recoverable — from a
chat export, a Drive folder, a Downloads directory — it is the single item that
would convert most of this page from relay to evidence at one stroke. Nothing
else on the horizon would.

## CORRECTED [2026-09-20] — two quoted lines that the complete record does not contain

This page has carried two 2025 quotations since creation, both cited to
`imessages_2124702449_last6months.csv`:

> *"So Carney got pulled over on his way back from here..."* — dated 2025-03-09
>
> *"giving john carney a fucking neck massage"* — dated 2025-05-28

**Both return zero hits in the authoritative corpus.** The check was run on
2026-09-09 as a case-insensitive search across the full text field of all
192,140 rows, and the file they are cited to is not held in this repository
([`dat:0677`](../../kb/data/0677-john-carney-dossier-message-verified.md)).

That is a stronger finding than "unverified," and the reason is the corpus
policy. The complete Messages export is a **superset** of the per-contact
fragments the old wiki was written from. A quotation that exists in a fragment
and not in the superset is not a fact the superset happens to be missing; it is
**a bug to investigate, not a fact to keep**
([`CORPUS_POLICY.md`](../../CORPUS_POLICY.md)). Three explanations survive
contact with the record and none is established:

1. The quotes were paraphrased rather than transcribed by whatever pass produced
   them, and a paraphrase does not match on exact substring.
2. They came from a channel the corpus cannot see — the export is complete with
   respect to `chat.db`, which is not the same as complete with respect to
   history, and **messages deleted before the export was taken are absent**.
3. The extract they were cut from carried rows the corpus does not, which the
   policy says to open as a defect rather than resolve in the fragment's favour.

Per the policy's three permitted outcomes — confirmed, corrected, withdrawn —
these are **corrected**: the lines are demoted from evidence about what
happened to evidence about what a shelved extract asserted. They remain printed
above so that a later reader who finds them elsewhere can identify them as the
same two strings rather than as fresh corroboration.

### Where that correction has to travel

The two lines are not inert. [[wiki/mind/synthesis/may-august-2025-bridge]]
builds a dated finding on them and marks it **[ATTESTED — the legal/463-morgantown
refs]**:

> *"John Carney — the contractor figure who would be unreachable by March 2026
> with the work 10–20% complete — is in the house, being given a neck massage,
> in May 2025. The Morgantown property thread is already live: Carney was
> 'pulled over on his way back from here' on March 9. The summer's housing
> precarity is not just the Saratoga listing; the fallback property's
> contractor is already in the picture."*

And again in that page's summary block: *"The fallback property's contractor
(Carney) is in the house in May."*

That finding does real work — it pushes the 463 Morgantown thread back
**eleven months**, from February 2026 to March 2025, and makes the fallback
property a live concern during the Saratoga listing summer. It cannot stand on
these two strings. It also collides with a dating established independently on
[[wiki/people/arnu]]: the 10 February 2026 no-show message is **the first dated
evidence of 463 Morgantown St anywhere in the corpus**
([`evt:2026-morgantown-st-move`](../../kb/events/2026-morgantown-st-move.md)).
If the 2025 Carney lines were real *and* referred to the 463 contractor, that
"first dated evidence" claim would be wrong by nearly a year. Since the lines
do not verify, it stands — and the bridge page's finding is the thing that has
to move. Flagged rather than edited, because that page is outside this
rewrite's scope.

## One Carney, or two, or three

This page has always hedged the identification — *"Distinguish 2025 personal
Carney refs from 2026 463 contractor"* — and the hedge is correct. Set out
plainly, the archive contains up to three distinct Carneys and can merge none of
them:

| # | Who | Evidence | Held? |
| ---: | :--- | :--- | :--- |
| 1 | **The 463 contractor.** General work, abandoned, unreachable | The 2026-03-27 dossier message; the 463 risk table; context-core | Message held; role, percentage and unreachability are wiki synthesis |
| 2 | **The 2025 domestic Carney.** Pulled over on his way back from "here"; given a neck massage in somebody's house | Two quotes from an unheld per-contact CSV | **No — zero corpus hits** |
| 3 | **Carney's Auto Repair Services.** A business name in the Google semantic location history, February 2019 | `…/Semantic Location History/2019/2019_FEBRUARY.json` | **No — the location ingest is not in this tree** |

The pull toward merging them is obvious: it is an uncommon surname in a small
county, and a man who does general contracting and a man who runs an auto-repair
shop are the sort of pair a small town produces from one family. That is exactly
why the merge should not be made silently. The archive's own worked example is
next door — [[wiki/people/felix]] and [[wiki/people/john-felix]], where a
first-name match across two sources has stood unresolved for months precisely
because nobody would settle it through the contact exports.

The third entry deserves one further note. `wiki/self/location-history.md` is
the wiki's authority on the Google Timeline ingest: it indexes 99 files, 66.1 MB,
place-visit counts by year, and named place clusters. **It does not contain the
string "Carney" anywhere.** The only page in the repository that asserts
Carney's Auto Repair Services as a February 2019 place visit is this one, citing
a monthly JSON that no longer exists in the tree. It is therefore a claim with
one source, and that source is both unheld and absent from the page whose job is
to summarise it.

## The exposure, and the number nobody sourced

The operative claim about Carney is two figures: **work roughly 10–20%
complete**, and **unreachable since March 2026.** They appear on this page, on
[[wiki/legal/463-morgantown]], on [[wiki/people/alexander-jackson]], on
[[wiki/people/arnu]], in
[`ent:morgantown-st-463`](../../kb/entities/morgantown-st-463.md) and in
[`evt:2026-morgantown-st-move`](../../kb/events/2026-morgantown-st-move.md).
They are the reason he is a risk rather than a name.

**No held source contains either figure.** The evidence layer states it twice
and without hedging: the contractor exposure *"rests on the wiki's synthesis of
context-core and the Suz thread and was not independently verified"*
([`dat:0074`](../../kb/data/0074-morgantown-housing-state-august-2026.md)), and
the Carney completion figure is *"not independently verified in this
repository"*
([`dat:0156`](../../kb/data/0156-arnu-contractor-463-morgantown.md)).
`CONTEXT_CORE_EXPANDED.md` is not in this tree; neither are the two Suz CSVs
this page cites.

And the citation chain has a loop in it. The 463 page's risk table gives, as the
**evidence** for the row *"Incomplete work, contractor unreachable · ~10–20%
complete,"* this entry:

> *Suz msg Mar 27, 2026 ("John carney thing... last few pages are Very
> interesting")*

That message is about a document. It says nothing about work, nothing about
completion, and nothing about reachability. The wiki's risk register cites, as
proof of an abandoned job, a text about somebody reading a file. The figures may
well be right — they came from somewhere, and context-core is a real document
even if it is not in this repository — but **the evidence column points at the
wrong thing**, and it has pointed at the wrong thing on five pages since June
2026.

The date is the other half of it. "Unreachable since March 2026" is anchored to
27 March 2026 for one reason: that is the only Carney-dated row anybody had.
There is no message recording a call that went unanswered, no date on which the
work stopped, and no record of when it started. What can be said is narrower:
**by 27 March 2026 a dossier about him existed, and no source read since records
him being reached.**

## Carney and Arnu: the same object at two magnitudes

463 Morgantown St has two contractor exposures and they rhyme almost exactly,
which is the finding that makes either of them interesting. [[wiki/people/arnu]]
holds the full account of the other one and is not duplicated here.

| | **Arnu** | **John Carney** |
| :--- | :--- | :--- |
| Entire primary record | Four words inside one Suz message, 2026-02-10 | One Suz message about a document, 2026-03-27 |
| Verified verbatim? | Yes ([`dat:0445`](../../kb/data/0445-felix-painter-463-suz-message-verified.md)) | Yes ([`dat:0677`](../../kb/data/0677-john-carney-dossier-message-verified.md)) |
| Surname / handle / thread | None | Has a surname; no handle, no thread |
| Attached number | A mechanics-lien deadline of ~2026-07-27 | A completion figure of ~10–20% |
| Where that number comes from | **Derived** from the February work window; no filing on disk | **Unsourced**; no held document states it |
| Mentions across the repo | 122 across 28 files | **129 across 22 files** (see census) |
| Standing status | Deadline elapsed 2026-08-02, outcome unrecorded | Unreachable since ~March 2026, outcome unrecorded |
| The one-query fix | Fayette County prothonotary/recorder search on the parcel | The "John carney thing" document, wherever it is |

Both men are, functionally, **a number attached to a name inside somebody
else's sentence**, and in both cases the number is the part the wiki acts on and
the part the record does not contain. Arnu's page reaches the conclusion that
he is less a creditor than a **test article** — the first plausible claim to
arrive at an address with no mechanism for receiving one. Carney is the second
test article, and he tests the opposite failure: not a claim arriving, but an
obligation quietly not being performed, at a property with no instrument that
would notice.

That is what turns two contractors into a property finding. One unreliable
contractor is an accident. Two, on the same parcel, inside four weeks of each
other, with no contract, no invoice, no dollar figure and no signatory attached
to either — that is the address working as designed.

## Why the work is not going to be re-let

The practical question a risk register exists to answer is what happens next,
and here the answer is unusually determined.

Re-letting the Carney work requires money the contracting counterparty
demonstrably does not have. Suz filed **Chapter 13 in October 2024** — case
24-22285-GLT, roughly **$157,000 scheduled**, IRS priority claims for 2018–2021 —
against self-reported income of **$11,000–$14,000 a year**, and 337 Saratoga
Drive, the only unencumbered asset, was liquidated in June 2026 at **$465,000**
to service that plan ([[wiki/people/suzanne-frank]];
[[wiki/legal/463-morgantown]], CORRECTED 2026-08-18). There is no absorber
because there are no assets left.

It also requires a contract at an address that has never produced one.
[[wiki/places/the-unpapered-address]] establishes that across **sixteen years
and seven residences** — 424 Bedford, the 90th Street sublet, 155 Virginia, 307
E 76th, 337 Saratoga, 117 Belmont and 463 Morgantown — not one home Dan has
lived in has a lease, a contemporaneous rent figure, or a signatory anywhere in
the corpus. Every tenancy in the record is granted by a specific person and ends
when that person's circumstances change. A mechanism that has never produced a
lease is not about to produce a construction contract.

So the realistic outcome is not that the work is re-let and pursued. It is that
**the work stays unfinished**, indefinitely, on a property whose owner the record
cannot see, under an arrangement that will end — per the wiki's own standing
prediction — *by a sentence, not by a filing*. The sentence in question is
already on the record: Suz to Dan, 11 August 2026 at 15:04:23 UTC, *"It's time
for you to go."*

This is also the page's connection to [[wiki/mind/synthesis/vertical-authority-skepticism]],
and it is worth stating more carefully than the previous version did. That
synthesis describes a person who treats the vertical axis — owners, managers,
institutions — as structurally suspect and audits it from outside rather than
obeying or competing within it. An unreachable contractor is a textbook input to
that model: an obligation running off-books with no accountability vector, the
same shape as the BFS Foods disputes. But the model is about **Dan's** posture
toward authority, and Carney is not authority — he is a peer-level counterparty
who did not perform. Filing him under vertical-authority-skepticism was a
reasonable reach and it is a reach; the tighter fit is
[[wiki/places/the-unpapered-address]] and
[[wiki/mind/synthesis/the-deferred-audit]], where the finding is not about
hierarchy at all but about arrangements nobody writes down and nobody checks.

## Complete mention census

Machine-counted over `wiki/` and `kb/` on 2026-09-20, immediately **before**
this rewrite, matching case-insensitively on `carney`: **129 occurrences across
22 files**, of which 20 were on this page — so **109 mentions across 21 other
files**. Every one of them traces, directly or through one intermediary, to the
27 March 2026 message and to the unsourced completion figure. (This page's own
count after the rewrite is 67; the subject page is excluded from the reasoning
below, since a page citing itself is not corroboration.)

| File | Mentions | What it carries |
| :--- | ---: | :--- |
| [[wiki/timeline/master-timeline]] | 32 | The 2025-03-09, 2026-02-10, 2026-03-27 and 2026-07-27 rows, harvested once per page that asserted them — the largest concentration and wholly derivative |
| `wiki/people/john-carney.md` *(this page)* | 20 → 67 | The subject page, before and after this rewrite — excluded from the derivative-count reasoning below |
| [`dat:0677`](../../kb/data/0677-john-carney-dossier-message-verified.md) | 11 | The dedicated evidence node: the verified dossier message, the two zero-hit 2025 quotes |
| [[wiki/people/arnu]] | 9 | The "parallel contractor" rows and the 2026-08-02 re-check |
| [[wiki/legal/463-morgantown]] | 8 | The risk-table row, the timeline row, the gaps list |
| [[wiki/people/alexander-jackson]] | 5 | Roles table; timeline snippet; the owner's title exposure |
| [[wiki/mind/synthesis/may-august-2025-bridge]] | 5 | **The [ATTESTED] finding built on the two zero-hit quotes** — see the correction above |
| [`evt:2026-morgantown-st-move`](../../kb/events/2026-morgantown-st-move.md) | 5 | The move event's contractor exposures |
| [`ent:morgantown-st-463`](../../kb/entities/morgantown-st-463.md) | 5 | The address entity's exposure list and evidence tiers |
| [[wiki/work/tech/imessage-tooling/overview]] | 4 | Tooling provenance — which CSV utility surfaced the Carney refs |
| [`dat:0445`](../../kb/data/0445-felix-painter-463-suz-message-verified.md) | 4 | The Felix-employment claim, filed as page-attributed and uncorroborated |
| [`dat:0156`](../../kb/data/0156-arnu-contractor-463-morgantown.md) | 4 | The Carney figure listed among what the Arnu node leaves open |
| [[wiki/people/felix]] | 3 | *"Employee of John Carney"* — uncorroborated relay |
| [`dat:0074`](../../kb/data/0074-morgantown-housing-state-august-2026.md) | 3 | The August 2026 housing state; Carney listed as unverified synthesis |
| [`syn:money-and-estate`](../../kb/syntheses/money-and-estate.md) | 2 | Contractor exposure inside the money spine |
| [`ent:suzanne-frank`](../../kb/entities/suzanne-frank.md) | 2 | Her unresolved 463 obligations |
| [`dat:0243`](../../kb/data/0243-alexander-jackson-owner-claim.md) | 2 | Filed under "adjacent claims, for completeness" |
| [[wiki/people/index]] | 1 | Index blurb |
| [[wiki/mind/synthesis/aura-illness-compound-collapse]] | 1 | Contractor exposures as a component of the compound collapse |
| [[wiki/meta/recent-activity]] | 1 | The 2026-08-20 RE-CHECKED entry |
| [[wiki/meta/digest]] | 1 | "1 premise" |
| [`dat:1310`](../../kb/data/1310-imessage-tooling-overview-export-stack.md) | 1 | Export-stack provenance |

**Twenty-one other files. One message. One unsourced percentage.** The master
timeline's thirty-two mentions are not thirty-two pieces of evidence; they are
four dated assertions harvested once for each of the six pages that repeated
them. This is the property
[`int:stale-propagation`](../../kb/interpretations/stale-propagation.md)
describes and [[wiki/people/arnu]] anatomises: a claim replicated by tooling
across a document set acquires the appearance of corroboration from its own
copies.

## Complete log of this page's own history

Every dated marker this page has ever carried, in order, with what each one
actually did.

| Date | Marker | What it established |
| :--- | :--- | :--- |
| 2026-06-22 | Page created | The role label, the ~10–20% figure, the unreachability, the two 2025 quotes and the Carney's Auto Repair note all enter the wiki already formed |
| 2026-07-18 | [[wiki/legal/463-morgantown]] moved | Typed-connections pass; no factual revision |
| 2026-07-26 | **Premise re-check** | The incomplete-work and unreachability facts unchanged; *"the 'John carney thing' document is still absent from raw/"* |
| 2026-08-02 | **RE-CHECKED** | The Arnu lien deadline elapsed; the Carney exposure is a separate claim on the same property and is unaffected. *"No source read to date records the work being re-let, completed, or written off"* |
| 2026-08-18 | **RE-CHECKED** (`bin/wiki-climb check`) | Nothing contradicted, but the assessment of consequence changes: the Chapter 13 correction means re-letting requires money that does not exist, so the realistic outcome is that the work stays unfinished |
| 2026-08-20 | **RE-CHECKED** | 463 gained the address-as-threat-vector section; no claim here affected — the new exposure is physical-safety and belongs to the occupants |
| 2026-09-09 | [`dat:0677`](../../kb/data/0677-john-carney-dossier-message-verified.md) created | The dossier message verified verbatim; **the two 2025 quotes found to return zero hits in the authoritative corpus** |
| **2026-09-20** | This rewrite | The 2025 quotes corrected and demoted; the *"analysis agreed with"* gloss struck; the mis-cited evidence chain for the 10–20% figure named; the downstream [ATTESTED] finding on `may-august-2025-bridge` flagged; census and logs printed |

Read as a series rather than as a status, the log says what the individual
entries cannot: **this page was re-checked four times in seven weeks and
investigated once.** The four re-checks were staleness cascades — a neighbouring
page moved, so this one was re-read against the diff — and all four correctly
reported that nothing here was contradicted. The one investigation, on
2026-09-09, went to the corpus and found that two of the page's five
quotations do not exist. It took **eleven days** to reach the page, and the
synthesis that had marked them [ATTESTED] has not been told at all.

## What the record does not show

Stated plainly, because the length of this page is misleading about how much is
known about the man.

- **No first-hand contact of any kind.** The corpus does not record Dan and
  John Carney ever exchanging a message, and `relationship_to_dan: unknown` in
  the infobox is accurate rather than a placeholder. He appears in no thread of
  his own, no contact export, no photograph, and no held location record.
- **No contract, invoice, estimate, scope of work or dollar figure.** There is
  therefore no basis for the 10–20% completion figure in anything held, no way
  to price the unfinished work, and no claimant of record if there is a claim.
- **No date on which the work started or stopped.** "Since March 2026" is
  anchored to the only dated row that mentions him.
- **No mechanics lien.** Unlike [[wiki/people/arnu]], no lien or lien deadline
  has ever been asserted for Carney. Whether he has a claim against the parcel
  at all is unexamined; the same Fayette County prothonotary and recorder search
  that would settle the Arnu question would settle this one in the same query,
  and it has been named in the text since 2 August 2026 and never run.
- **The "John carney thing" document itself.** Referenced twice, held nowhere.
- **Whether the 2025 Carney, the 2026 contractor and Carney's Auto Repair
  Services are one person, two, or three.** Unresolved, and the primary evidence
  for two of the three is missing.
- **Whether [[wiki/people/felix]] is his employee.** That claim sits on Felix's
  page, is relayed from unheld dox-md material, and is explicitly not
  corroborated in this repository
  ([`dat:0445`](../../kb/data/0445-felix-painter-463-suz-message-verified.md)).
  The Arnu rewrite of 2026-09-18 makes the general point sharply: adjacency
  inside a single sentence is not a relation.
- **What happened after.** No source records the work being re-let, completed,
  written off, or litigated. As of the last ingest, the last thing anyone knows
  about John Carney is that on 27 March 2026 somebody wrote a document about him
  and Dan's mother read it before breakfast.

## Appendix — forensic notes

Compact and deliberately not the frame. None of this is about Carney; all of it
is about the instruments that describe him.

**A1. The master timeline misdates the neck-massage quote by eighty days.** This
page's Roles table packs two dates into one cell — *"2025-03-09 (pulled over);
2025-05-28 (massage context)"* — and the timeline scraper takes the first date in
the cell for the whole row. Both quotes are consequently filed under **2025-03-09**
in [[wiki/timeline/master-timeline]], including the one this page dates to 28 May.
Since neither quote verifies, the misdating is currently harmless; it is recorded
because the same one-date-per-cell failure will silently misdate any other row
built the same way.

**A2. The infobox `known_for` string is truncated mid-word.** It ends
*"Parallel mentions of Carney's Auto Repair Ser"* — a field cut to a character
limit by whatever generated it, with no ellipsis to mark the cut. It renders as
written. Preserved unchanged here because these infobox strings are consumed by
tooling elsewhere in the repository, and flagged instead.

**A3. This page has no `title:` key.** Most `people/` entity pages carry one;
this one never has, so anything rendering a title falls back to the filename or
the H1. Not added in this rewrite — the standing instruction for this pass
permits adding `sources`, `related` and `tags` only — and recorded here so the
omission is deliberate rather than inherited.

**A4. The owner's name is inverted between pages.** [[wiki/people/alexander-jackson]]
is titled *"Jackson Alexander (Alexander Jackson)"* and this page's Roles table
refers to *"Oversight by Jackson Alexander."* Which order is the given name and
which the surname is unresolved, and the ownership claim itself rests on one
provenance chain with no primary record behind it
([`dat:0243`](../../kb/data/0243-alexander-jackson-owner-claim.md)). A page that
cannot settle a name's word order should not be cited for a title interest, and
this page cites it for exactly that.

**A5. The psychometric aside.** The previous version glossed the unreachability
through *"low-trust architecture (Altruism 1, Trust 9)."* Those are Big Five
facet scores from [[wiki/mind/profile/big-five-psychometrics]], and they
describe **Dan**, not Carney — they are a fact about the reader of the
situation, not the situation. Retained as an interpretive note and relabelled,
because used loosely it reads as though the contractor had been scored.

## Sources

- `corpus/messages.csv` — the authoritative Messages export, 192,140 rows. The
  27 March 2026 message located by exact substring; the two 2025 quotes searched
  case-insensitively across the full text field with **zero hits**.
- [`dat:0677`](../../kb/data/0677-john-carney-dossier-message-verified.md) — the
  dedicated evidence node: the verbatim verification and the two zero-hit
  findings.
- [`dat:0074`](../../kb/data/0074-morgantown-housing-state-august-2026.md) — the
  August 2026 housing state; the Carney exposure filed as unverified wiki
  synthesis.
- [`dat:0156`](../../kb/data/0156-arnu-contractor-463-morgantown.md),
  [`dat:0445`](../../kb/data/0445-felix-painter-463-suz-message-verified.md) —
  the Arnu and Felix verifications, and what they leave open about Carney.
- [`dat:0243`](../../kb/data/0243-alexander-jackson-owner-claim.md) — the owner
  claim, `confidence = low`, one provenance chain.
- [`ent:morgantown-st-463`](../../kb/entities/morgantown-st-463.md),
  [`evt:2026-morgantown-st-move`](../../kb/events/2026-morgantown-st-move.md) —
  the address entity and the move event.
- `raw/self/context-core/CONTEXT_CORE_EXPANDED.md`,
  `raw/self/message-csv/imessage_7243228715_both_all_now.csv`,
  `raw/self/message-csv/imessages_2124702449_last6months.csv`,
  `raw/self/location/…/2019/2019_FEBRUARY.json` — **none held in this
  repository.** Source of the 10–20% figure, the unreachability, the two 2025
  quotes and the Carney's Auto Repair Services place visit respectively.
- [[wiki/legal/463-morgantown]], [[wiki/people/arnu]],
  [[wiki/people/alexander-jackson]], [[wiki/people/suzanne-frank]],
  [[wiki/people/felix]], [[wiki/places/the-unpapered-address]],
  [[wiki/mind/synthesis/may-august-2025-bridge]],
  [[wiki/mind/synthesis/the-deferred-audit]],
  [[wiki/mind/synthesis/vertical-authority-skepticism]],
  [[wiki/self/context-core]], [[wiki/timeline/periods/2025-collapse]].

No photograph, document scan or media derivative of John Carney, of 463
Morgantown St, or of the work in question is identified in
`media/registry.json`; this page therefore carries no image.
