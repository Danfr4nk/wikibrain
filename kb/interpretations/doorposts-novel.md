+++
id         = "int:doorposts-novel"
layer      = 3
type       = "interpretation"
title      = "Five years of calling Doorposts of Your House by the wrong title"
cites      = ["dat:0851-gemini-13-bacharach-book-misattribution-corrected", "dat:0666-bacharach-discovery-timeline-unverifiable-held", "dat:0667-bacharach-which-novel-contradiction-open", "dat:0437-2025-goodreads-refresh-wolff-bacharach-sole-one-star"]
confidence = "moderate"
perspective = "external"
importance = 3
tags       = ["books", "testimony", "memory"]
created    = "2026-09-09"
updated    = "2026-09-09"
falsifiers = [
  "A held message — in the corpus or any future export — in which Dan names *Doorposts of Your House* (or *The Doorposts of Your House and on Your Gates*) as the book with the Virginia Avenue passage. That would show the title was known and the 'wrong for five years' reading is wrong.",
  "A physical-copy check finds the Virginia Avenue passage on pages 227–228 of *The Bend of the World* after all. Dan's title would then be right and Bacharach's own message the confusing one.",
  "The FAVS masterlist or Goodreads export, when actually held, turns out to contain *The Bend of the World* as well — the one-title claim is page testimony from unheld sources, and its collapse takes the likeliest reading with it.",
]
alternatives = [
  "He read both, or read neither carefully: the five-star rating is for the encounter (a novelist from his hometown wrote his street into a book) rather than the text, and the title is a label for the event, not a bibliographic claim.",
  "The misattribution is Bacharach's, not Dan's — the author's February 2021 message misremembering which of his own novels contains the passage. Authors are unreliable narrators of their own oeuvres too.",
  "Title drift is normal and this is over-read: readers misremember titles constantly, and the wiki's forensic apparatus is pointed at a phenomenon (casual title slippage) that needs no explanation.",
]

[when]
date   = "2026-09-09"
+++

<!-- prose for humans; the frontmatter is for machines -->

## The thesis

For five years Dan has attributed the Virginia Avenue passage to the wrong
Jacob Bacharach novel — calling it *The Bend of the World* (2014) when the
evidence says he read *The Doorposts of Your House and on Your Gates*
(Liveright, 2017). The old wiki itself caught this: its gemini-13 correction
pass ([`dat:0851`](../data/0851-gemini-13-bacharach-book-misattribution-corrected.md))
concludes "Dan read the book Bacharach told him to read and has been calling
it by the wrong title for five years." The thesis is that this is a clean
specimen of **testimony decay in a high-salience memory**: the event (a
novelist from his hometown wrote his street into a book) is vivid and stable,
while the bibliographic label attached to it drifted and froze wrong — and
nobody, including the subject running a forensic wiki about his own life,
noticed for five years.

## Evidence for the wrong-title reading

Three legs, all pointing the same way:

1. **The author's own words.** Bacharach's February 2021 message names
   *"my Doorposts of Your House novel"* as the Uniontown book
   ([`dat:0851`](../data/0851-gemini-13-bacharach-book-misattribution-corrected.md)).
   The author is the best authority on which of his novels contains the
   passage.
2. **The reading record.** The Goodreads library and the FAVS masterlist each
   contain exactly one Bacharach title — *The Doorposts of Your House and on
   Your Gates*, rated 5, shelved 2022-03-24. *The Bend of the World* appears in
   neither, surfacing only in a browsing log
   ([`dat:0667`](../data/0667-bacharach-which-novel-contradiction-open.md),
   [`dat:0437`](../data/0437-2025-goodreads-refresh-wolff-bacharach-sole-one-star.md)).
3. **The tenancy correction.** The 155 Virginia Ave tenancy ran January 2015
   to February 2019 (master timeline), not the gemini-13 page's "~2012–2015"
   — so Dan moved into the book's setting *after* publication either way, and
   the page's more dramatic "moved in during the writing" framing collapses
   with the title.

## Evidence against — the case is thinner than it reads

Every leg above rests on unheld sources. The February 2021 discovery timeline
— the hour-level timestamps, the forwarded reply, the commercial-job
confirmation — is **unverifiable from the held corpus**: 2021 is nearly absent
(282 records for the whole year), and the dox-scan sources the page names are
not held ([`dat:0666`](../data/0666-bacharach-discovery-timeline-unverifiable-held.md)).
The Goodreads export and FAVS masterlist are not held either; the one-title /
5-star / shelved-2022-03-24 figures are the old wiki's rendering, carried as
testimony.

And the old wiki does not speak with one voice. The gemini-13 page's
correction pass treats the wrong-title reading as settled; the bacharach
people page carries the same question as an **open contradiction**
(2026-08-08), pending a check against a physical copy — because Dan cited
specific page numbers (227–228), which is the kind of detail that is either
right or checkable. The wiki corrected the session page and left the people
page open. That is the corrections-don't-propagate pattern again, and it means
the "corrected" in the thesis is doing more work than the record supports.

## How the ingest bears on it

The ingest verified the *shape* of the episode (childhood-neighbour commercial
→ novelist → mother's rental → Dan's address) without verifying its
bibliographic core. The genuinely improbable part — that the chain exists at
all — does not depend on which novel it is, which is why the episode survives
its own correction. But the ingest also showed the flagship exhibit's dated
spine (dat:0666) resting entirely on unheld dox-scan material: the wiki's
showcase demonstration of the forensic method is, at its most load-bearing
joint, unattested testimony.

## The reading this supports

The misattribution is interesting not as an error but as a **calibration
datum for the whole testimony apparatus**. Dan's memory preserved the
high-salience structure (his street, in a book, by the commercial kid) and
lost the low-salience label (which title). That is exactly the failure mode
the veracity ledger measures everywhere else — stated certainty ≈0.25 actual —
and here it operated for five years on a fact he cared about, inside a system
built to catch exactly this. If the wiki cannot catch a wrong book title in
five years, the ledger's numbers are not pessimistic; they are optimistic.

## Open questions

- Does the physical-copy check ever happen? Pages 227–228 of which book?
- Is there any held message in which Dan names *Doorposts* correctly — i.e.,
  did the title ever attach right and then drift, or was it wrong from the
  start?
- Why did the correction land on the session page but not the people page —
  propagation failure, or a genuine evidentiary disagreement between the two
  passes?

## Cross-links

- [gemini-incidents-ledger](gemini-incidents-ledger.md) — the session whose
  central fact the old wiki corrected; verified scaffolding, mislabeled
  conclusions.
- [concert-record-as-archive](concert-record-as-archive.md) — the same
  testimony-vs-record structure in the concert log: unheld tables carried as
  testimony, web records as the checkable legs.
