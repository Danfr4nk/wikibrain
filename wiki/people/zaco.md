---
domain: people
page_type: entity
title: "Zaco"
aliases: ["zaco", "Zach Hendricks", "Zack Hendricks"]
status: closed
knowledge: mixed
date_created: 2026-08-20
date_modified: 2026-09-18
date_range_start: 2018-03-12
date_range_end: 2018-11-26
tags: [addiction-recovery, uniontown-era, digital-footprint, forensic-analysis]
sources:
  - raw/self/dox-scan/all_imessages_complete_dump.txt
  - raw/self/message-csv/MASTER_MESSAGES_DB_DUMP.csv
  - corpus/messages.csv
  - kb/data/1357-zaco-thread-recount.md
  - kb/data/1254-supply-network-thread-counts.md
  - kb/data/0679-2018-deep-cycle-volume-and-correction.md
  - kb/data/1214-zach-hendricks-unresolved-relationship.md
related:
  - wiki/people/zach-hendricks
  - wiki/mind/synthesis/supply-network
  - wiki/mind/synthesis/supply-graph-vs-chain
  - wiki/timeline/periods/2018-deep-cycle
  - wiki/people/johnny-dealer
  - wiki/people/teddy
  - wiki/people/fran-coldren
  - wiki/mind/concepts/contact-gini
infobox:
  name: "Zaco"
  sex: unknown
  location: uniontown
  relationship_to_dan: dealer
  handles: ["+17249123381"]
  first_contact: 2018-03-12
  known_for: "The supply network's 2018 Suboxone-strip secondary — and the page whose headline finding its own corpus recount retired"
connections:
  - page: wiki/mind/synthesis/supply-network
    type: component-of
    claim: "Zaco is the network's 2018 Suboxone-strip secondary. The page's former claim that he was its only inbound-marketing node does not survive the 2026-09-11 recount: the held thread runs 58 inbound to 48 Dan-outbound, and Dan initiates repeatedly across March–June 2018."
  - page: wiki/people/zach-hendricks
    type: same-as
    claim: "The wiki has carried two pages for one contact since 2026-06-23: the same handle (+17249123381), the same 58 messages, the same 2018-03-12 → 2018-11-26 window. Zach Hendricks is Zaco, and this page's first-listed gap — 'Who is Zaco?' — was answerable from inside the wiki the whole time."
  - page: wiki/timeline/periods/2018-deep-cycle
    type: component-of
    claim: "The thread runs March–June 2018 inside the deep cycle and shares its economics — $50 for three strips, $75 for three, $70 for three subs — small cash amounts in the months of daily Cash App limits and declined payments."
  - page: wiki/people/johnny-dealer
    type: parallels
    claim: "Concurrent 2018 Uniontown nodes in the same market and at opposite volumes: Johnny's thread is 3,462 messages (a floor; 5,089 records on the merged dump), this one is 106. The redundancy the deep cycle had is measured in exactly this gap."
  - page: wiki/mind/synthesis/supply-graph-vs-chain
    type: component-of
    claim: "Filed there as the 2018 strip secondary and inbound-marketing edge; the inbound-marketing half of that edge is retired by the recount recorded here."
  - page: wiki/people/fran-coldren
    type: co-occurs
    claim: "The thread opens 2018-03-12, twenty-three days before Fran's death on 4 April 2018 and inside the six months Dan was her paid full-time care — the same window the zach-hendricks page independently used to place this contact."
---

# Zaco

Zaco is a 2018 Uniontown-area supplier known to the message corpus by a handle
and by the name he gives himself in his first message — *"Yo it's zaco"*, sent
**2018-03-12 21:44:26 UTC**, message id 156528, the single row containing the
string "zaco" anywhere in 192,140 records
([`dat:1254`](../../kb/data/1254-supply-network-thread-counts.md)).

Two things about this page have changed since it was written, and both are
larger than the thread itself.

**The first is that the wiki already knew who he was.** This page's opening gap
has always been *"Who is Zaco? The name is self-given in a single SMS and
appears nowhere else in the corpus."* [[wiki/people/zach-hendricks]] — created
2026-06-23, two months before this page — records **Zach Hendricks, self-styled
"Zaco,"** at handle `+17249123381`, 58 messages, 2018-03-12 to 2018-11-26. Same
handle. Same count. Same two dates. Neither page links the other; neither
appears in the other's frontmatter; the identity gap was open on one page while
the answer sat on another, in the same directory, for three months.

**The second is that the finding this page was built around does not hold.** The
page's headline was the direction split — 58 of 65 messages his, a 58:7 inbound
ratio, "the only supplier in the corpus who does the selling." A direct scan of
`corpus/messages.csv` on 2026-09-11 found the inbound half exact and the rest
wrong: the same `chat_identifier` carries **48 Dan-outbound rows**, for a
**106-message thread**, and Dan initiates repeatedly across the spring
([`dat:1357`](../../kb/data/1357-zaco-thread-recount.md)). The marketing-channel
reading was measured on a population the held corpus does not contain.

What survives is a small, well-dated, ordinary supply relationship at the bottom
tier of a market — and a clean case study in how a count becomes a thesis.

## The two names

The evidence that Zaco and Zach Hendricks are one contact is the handle, and it
is not ambiguous. Both pages print `+17249123381` as the primary. Both give the
window as 2018-03-12 → 2018-11-26. Both give 58 as the message count and both
describe the direction field as all-received — which is the same export
artifact, read twice, by two passes that never met.

The Hendricks page adds two things this page never had:

- **A surname, and a second handle.** Google Contacts holds two 724-area numbers
  for him, one filed under "Zach" and one under "Zack" —
  `+17249123381` and `+17247102745`. The alternate handle has never been scanned
  against the corpus and is the most obviously chaseable open item on this page.
- **A different frame for the same window.** Where this page reads the thread
  through the supply network, the Hendricks page reads it through the calendar:
  March–November 2018 places the contact "squarely in the Fran caregiving and
  post-death period, and in the middle of the Annie relationship." That is
  correct and it is load-bearing. [[wiki/people/fran-coldren|Fran Coldren]] died
  in Uniontown on **4 April 2018**, twenty-three days after this thread opens,
  and Dan was her paid full-time care at $15/hr for the six months preceding.
  The thread's Suboxone half runs through her final decline, her death, and the
  weeks after it.

The Hendricks page's own inference — "the casual nickname and Fayette County
location suggest a Uniontown social-circle friend" — was made without the
supply content, because that page carries no quoted text at all. Read together,
the inference sharpens rather than dissolves: a self-introducing nickname, a
contact card under two spellings, and a strip-and-cocaine trade is the profile
of somebody inside the local circle rather than a vendor met through it. That
remains an inference. Nothing states the relationship.

[`dat:1214`](../../kb/data/1214-zach-hendricks-unresolved-relationship.md) filed
the Hendricks page at **low confidence** specifically because it "supplies no
quoted text, so no held-corpus search was possible." This page supplies the
quoted text. The anchor that makes the whole thread locatable — *"Yo it's
zaco"* — is the thing the other page was missing, and the other page holds the
name this one was missing. That is the merge, and it is why these two pages
should not both continue to exist.

## March–June 2018 — Suboxone by the strip

The first era of the thread is buprenorphine, bought off-script in small lots.
Dan has been on a daily Suboxone regimen since January 2011, described in the
primary sources as a medical baseline rather than an episode
([[wiki/mind/synthesis/supply-network]]); this is that baseline being topped up
by the strip, at the bottom of the local market, during the worst financial year
in the record.

The complete inbound advertising log, as the page has carried it:

| Line | Note |
|---|---|
| *"Yo it's zaco"* | 2018-03-12 21:44:26 UTC, message id 156528 — the thread's first row |
| *"I got strips"* | |
| *"Got 4 strips"* | |
| *"3 strip for 50"* | **May 2, 2018** |
| *"Strips on sale"* | |
| *"Well for 3 I can do 75"* | **June 28, 2018** |
| *"3 subs for 70"* | **June 29, 2018** |
| *"I'm in town I got 3 subs for 70 lmk if u want em"* | |
| *"Got tex n coming town"* | product unidentified — see below |
| *"Got tex"* | |
| *"Yea I got Tex to"* | |

And the outbound half the recount recovered, which this page previously did not
have at all:

| Line | Note |
|---|---|
| *"any strips"* | Dan initiating, spring 2018 |
| *"Any subs?"* | |
| *"Subs?"* | |
| *"Can u still get soft"* | cocaine, spring — earlier than the page's "one night in November" |
| *"If u can get white I'm looking for like 200"* | cocaine, and a larger figure than anything in the November run |
| *(one address line, 2018-06-28)* | present in the held corpus; not quoted, per the ingest redaction rule |

That second table is the one that retires the thesis. Dan is not a passive
recipient of advertising in this thread. He asks for strips, he asks for subs,
and he asks for cocaine — *"Can u still get soft"*, *"If u can get white I'm
looking for like 200"* — months before the November night this page framed as
the only time he initiated.

The logistics are suburban and specific: meets at a CVS, a Giant Eagle, *"grn
truck nd trailer,"* Walnut Hill, "CV downtown." Prices run $50 for three strips
in May, $75 for three in late June, $70 for three subs the day after. Set beside
[[wiki/people/johnny-dealer|Johnny's]] explicit 2018 pricing — 8mg strips at $15,
12mg at $20 — the numbers sit in the same market at the same time, which is what
makes this a secondary rather than a competitor.

## November 26, 2018 — one night, and a failure of transport

After five months of silence the thread reopens on **2018-11-26** with a
sustained outbound run, and this one the held corpus verifies verbatim, with
message ids:

| id | Line |
|---|---|
| 63876 | *"Hey dude"* |
| 63867 | *"Hit me up if you're around. Needed some girl"* |
| 63927 | *"100?"* |
| 63889 | *"If it's good I'll buy a lot more"* |
| 63873 | *"I've got the paper on me and I'm at my house"* |
| — | Zaco: *"How much"* |
| — | Zaco: *"U would have to come out me"* |
| 63971 | *"Ah shit I'm stuck at home"* / *"No ride right now"* |

All six Dan rows fall between **23:22 and 23:36 UTC** on 2018-11-26
([`dat:1357`](../../kb/data/1357-zaco-thread-recount.md)). The thread ends there
and never resumes.

The exchange is worth keeping for a reason beyond this page, and the reason
survives the recount intact: **the transaction fails on transport, not on money
or supply.** Dan has cash in hand — *"I've got the paper on me"* — and a willing
seller with stock, and the blocker is fourteen minutes of not being able to get
across town. It is a small, dated, concrete instance of the immobility the 2018
material documents in aggregate, and it is the kind of evidence that does not
survive summarizing: the whole finding is in the timestamps.

What the recount changes about it is the framing, not the fact. This is no
longer "the only sustained outbound run in the thread." It is the last one.

## The direction finding, and how it collapsed

This is the most instructive thing on the page and it deserves to be stated as
a sequence rather than a correction note.

1. **The page's version.** 65 messages, 58 received and 7 sent, a 58:7 inbound
   ratio, described here as "the finding, not a caveat" and as "unique among
   supply contacts." From it the page derived that Zaco was "a marketing channel
   rather than a sourcing one" and "the inverse of every other supplier
   relationship in the corpus."
2. **[[wiki/mind/synthesis/supply-network]] adopted it**, and its own edge to
   this page still reads "58 of his thread's 65 messages are unsolicited
   inventory advertisements." So does
   [[wiki/mind/synthesis/supply-graph-vs-chain]], twice.
3. **[`dat:1254`](../../kb/data/1254-supply-network-thread-counts.md)
   (2026-09-10)** found the synthesis page's version of the figure describing a
   different thing entirely — 58 inbound "pill-ad" messages dated **2020-03-21
   to 2022-06-04**, a window in which the held corpus has no such thread at all.
   Corpus-wide, "zaco" returns exactly one row, in 2018.
4. **[`dat:1357`](../../kb/data/1357-zaco-thread-recount.md) (2026-09-11)**
   scanned the thread itself. Inbound: **58, exact**, spanning 2018-03-12
   21:44:26 → 2018-11-26 23:36:24 UTC. Outbound: **48**. Total: **106**.

The 58 was always right. The 7 was the artifact — almost certainly a count off
the merged export `all_imessages_complete_dump.txt`, which the Hendricks page
and the corpus-dimensions table below both show marking every row "Received."
An export that cannot represent direction was read as though it could, and the
resulting ratio was promoted to a structural claim about the whole market.

This is the same class of error `CORPUS_POLICY.md` was written to end. The old
per-contact extracts were retired not for being false but for being **silently
partial** — and the specific failure mode it names is that "in a fragment,
absence of evidence looks exactly like evidence of absence." Forty-eight missing
outbound rows look exactly like a man who does not reply.

## Corpus dimensions — all three measurements

The page has been measured three times and the numbers do not agree. All three
are printed rather than reconciled into one, because which population each was
taken from is the actual finding.

| Measurement | Source | Total | Inbound | Outbound | Window |
|---|---|---|---|---|---|
| This page, as written (2026-08-20) | `all_imessages_complete_dump.txt` | 65 | 58 | 7 | 2018-03-12 → 2018-11-26 |
| [[wiki/people/zach-hendricks]] (2026-06-23) | `MASTER_MESSAGES_DB_DUMP.csv` | 58 | 58 | — (all marked received) | 2018-03-12 → 2018-11-26 |
| Held-corpus recount (2026-09-11) | `corpus/messages.csv` | **106** | **58** | **48** | 2018-03-12 21:44:26 → 2018-11-26 23:36:24 UTC |

| Metric | Value |
|---|---|
| Primary handle | `+17249123381` |
| Alternate handle (Google Contacts, unscanned) | `+17247102745` |
| Active window, era 1 | 2018-03-12 → 2018-06-29 |
| Active window, era 2 | 2018-11-26, one night, 23:22–23:36 UTC |
| Silent gap between eras | ~150 days |
| Products named | Suboxone strips; cocaine ("girl", "soft", "white"); "Tex" (unidentified) |
| Prices on record | 3 strips / $50; 3 / $75; 3 subs / $70; $100 offered for cocaine |
| Named meet points | CVS; Giant Eagle; Walnut Hill; "CV downtown"; *"grn truck nd trailer"* |
| Rows containing "zaco" corpus-wide | **1** |

## Where the thread sits

The [[wiki/timeline/periods/2018-deep-cycle|2018 deep cycle]] is the highest-
volume year in the record: **40,500 held rows dated 2018**, against the period
page's own "~40k msgs/yr" estimate — a 0.03% difference, which is one of the
few figures in that page's neighborhood to survive re-derivation intact
([`dat:0679`](../../kb/data/0679-2018-deep-cycle-volume-and-correction.md)).
Against 40,500, this thread is 106 rows. It is a rounding error in the year it
belongs to, and that is the point of it.

[[wiki/mind/synthesis/supply-network]] reads the deep cycle as the era of
**depth** — multiple parallel dealers, where a supplier failure was an
inconvenience rather than a crisis. Johnny is the primary at 3,462 messages (a
floor; the merged dump shows 5,089 records for his handle). [[wiki/people/teddy]]
is the parallel node from February 2018. Zaco is the third rail. The network's
monotonic decay in redundancy — from that configuration in 2018 down to a single
friendship-embedded node by 2025 — is measured in exactly these minor names,
which is why a 106-message thread earns a page at all. Delete the minor-node
layer and the redundancy claim loses its evidence.

The same year's economics show up in the prices. This is the period of daily
Cash App limits, declined payments, and 1 AM ATM runs; the amounts moving
through this thread are $50, $70, $75 and an offered $100. Nothing here is
wholesale.

## Where he sits on the reliability inversion — and why he cannot be placed

[[wiki/mind/synthesis/supply-network]]'s central finding is a ranking: the more
purely transactional the relationship, the more reliable the supply. Menore, a
professional operating at arm's length, answered 455 of 458 requests over six
and a half years at a median 6.6 minutes. Johnny, transactional but social, was
reliable in season and produced the record's first single-node supply panics
whenever he went on vacation or his phone died. Teddy was willing and chronically
fragile. [[wiki/people/tom|Tom]] — the friend, the anchor, the only node embedded
in a real attachment — is the least reliable node in the corpus.

Zaco cannot be placed on that scale, and the reason is worth stating rather than
papering over with a guess. The ranking is built from **documented failures**:
panics, dead phones, unanswered requests, owe-and-silence cycles. This thread
contains none. There is no frustration message from Dan anywhere in it, no
sourcing panic attached to his name, no recorded instance of him failing to
deliver. That is not evidence of reliability. It is what 106 rows across two
short windows looks like — a sample too small for a failure to have had room to
occur, sitting in a year when three other nodes were live and any one gap could
be covered by another.

The honest placement is therefore *unplaceable*, and that is itself a data point
about the deep cycle. In 2018 a supplier could be used twice and dropped without
either party noticing, because nothing depended on him. By 2025 the whole load
sat on one node with no fallback, and a single missed handoff propagated into a
lost job. The difference between those two states is measured in threads exactly
this size.

## The November 26 failure as evidence in an open contradiction

[[wiki/timeline/periods/2018-deep-cycle]] carries an unresolved disagreement with
[[wiki/mind/synthesis/spatial-behavior]]. The GPS analysis reads 2018's
spatial-collapse-and-migration signature as evidence of a *chosen* psychological
strategy — systemic integrity through rebuild. The period page's own financial
record offers an equally consistent alternative: chronic constraint, not chosen
minimalism.

The 23:22–23:36 UTC exchange on 2018-11-26 is a dated, granular instance on the
constraint side, and it is the kind of evidence neither page currently cites. A
man with cash in hand, a willing seller, and a stated intention to buy more
cannot complete a fourteen-minute transaction because he has no vehicle:
*"Ah shit I'm stuck at home / No ride right now."* Whatever else 2018's movement
pattern was, on that night the radius was set by not having a ride. One night is
not a resolution of the contradiction and this page does not claim it is — but
it is an anchor the contradiction can be argued against, and it is held-corpus
verified with message ids, which most of the material on either side is not.

## "Tex"

A third product recurs across both halves of the thread — *"Got tex,"* *"Got tex
n coming town,"* *"Yea I got Tex to"* — and is identified nowhere. It is not
explained in-thread, does not appear on any other supply page, and has no entry
in [[wiki/mind/synthesis/supply-network]]'s product tables. It is advertised
alongside strips, which suggests a pharmaceutical rather than a powder, and that
is as far as the record goes. This page does not guess.

It is worth noting alongside the one other unnamed unit in the network:
Menore's "8," which [[wiki/mind/synthesis/supply-network]] lists in its own gaps
as "never named in-thread" and "uninterpreted." Two products, two nodes, both
opaque for the same reason — the parties knew what they meant and had no reason
to write it down.

## Coverage limits

- **The relationship is unestablished.** Neither page says how Dan knew him.
  "Uniontown social-circle friend" is an inference from a nickname and an area
  code, and it is the Hendricks page's inference, not a finding.
- **The alternate handle has never been scanned.** `+17247102745` appears in
  Google Contacts under the "Zack" spelling and has not been run against
  `corpus/messages.csv`. If it carries rows, every count on this page is a
  floor.
- **The 7-sent figure's source population is not held.**
  `all_imessages_complete_dump.txt` is not in this repository. The recount can
  say the held thread is 106 rows; it cannot say what the merged export actually
  contained, only that the page's ratio is not reproducible from the
  authoritative corpus.
- **Whether the November 26 purchase happened is unknown.** The thread ends with
  Dan unable to travel. Nothing later in the corpus refers to him, and this is
  precisely the class of negative claim `CORPUS_POLICY.md` says a thread cannot
  support on its own.
- **"Tex" is unidentified** and no inference is offered.
- **Whether he was a Johnny substitute or an independent is unresolved.** Both
  are active in Uniontown in 2018; nothing links them. The original form of this
  question asked whether the push-marketing posture reflected a lower position in
  the same chain — that framing is now void, since the posture it rested on was
  a measurement error. The question survives in weaker form: two concurrent
  nodes, three orders of magnitude apart in volume, and no evidence either way
  about whether they shared a source.
- **Direction is only recoverable from the held corpus.** Both unheld exports
  mark the thread all-received. Any future figure taken from them inherits the
  same defect that produced the retired thesis.
- **Two pages, one contact, still unmerged.** This page and
  [[wiki/people/zach-hendricks]] both remain live. Merging them is a decision
  about identity policy — whether a self-given nickname and a contact-card name
  warrant one page or two — and is not made here, but the cross-links are now
  written in both directions so the gap cannot re-open silently.

## Sources

No photograph, screenshot or media derivative in this repository depicts this
contact or any transaction in the thread; `media/registry.json` holds no
matching entry, and no embed is offered rather than substituting an unrelated
image. The thread's only non-text artifact is the 2018-06-28 address line, which
is present in the held corpus and deliberately not reproduced.

- `corpus/messages.csv` — the authoritative export. Holds the full 106-row
  thread, the "Yo it's zaco" anchor (id 156528), and the six ids of the November
  26 run.
- `raw/self/dox-scan/all_imessages_complete_dump.txt` — **not held here.** The
  source of the retired 58:7 ratio.
- `raw/self/message-csv/MASTER_MESSAGES_DB_DUMP.csv` — **not held here.** The
  source of the Hendricks page's 58 and of its handle pair.
- [`dat:1357-zaco-thread-recount`](../../kb/data/1357-zaco-thread-recount.md) —
  the recount: 58 inbound exact, 48 outbound, 106 total, and the Dan-initiated
  spring quotes.
- [`dat:1254-supply-network-thread-counts`](../../kb/data/1254-supply-network-thread-counts.md)
  — the one-row corpus-wide "zaco" result and the finding that the synthesis
  page's Zaco window (2020–2022) has no corresponding thread.
- [`dat:1214-zach-hendricks-unresolved-relationship`](../../kb/data/1214-zach-hendricks-unresolved-relationship.md)
  — the Hendricks page filed at low confidence for lack of quoted text.
- [`dat:0679-2018-deep-cycle-volume-and-correction`](../../kb/data/0679-2018-deep-cycle-volume-and-correction.md)
  — 40,500 held 2018 rows, and the caution that this thread's economics rest on
  unheld pulls.
- `CORPUS_POLICY.md` — the two-tier rule and the silently-partial failure mode
  that produced the retired thesis.

## Related

[[wiki/people/index]] · [[wiki/people/zach-hendricks]] · [[wiki/mind/synthesis/supply-network]] ·
[[wiki/mind/synthesis/supply-graph-vs-chain]] ·
[[wiki/timeline/periods/2018-deep-cycle]] · [[wiki/people/johnny-dealer]] ·
[[wiki/people/teddy]] · [[wiki/people/fran-coldren]] ·
[[wiki/mind/concepts/contact-gini]]
