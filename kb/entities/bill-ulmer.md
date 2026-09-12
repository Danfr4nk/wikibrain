+++
id          = "ent:bill-ulmer"
layer       = 2
type        = "entity"
entity_kind = "person"
title       = "Bill Ulmer"
cites       = ["dat:0251-bill-ulmer-thread",
               "dat:0119-bill-golf-pharma-customer-thread-corroborated"]
confidence  = "moderate"
importance  = 3
created     = "2026-09-09"
tags        = ["annie-ulmer", "family"]
+++

## Summary

Bill Ulmer is Annie's father — and, in the page's own appraisal, *"the warmest
and most consistently affectionate adult presence toward Dan documented
anywhere in the corpus outside Dan's own immediate family."* The thread is
sparse but unbroken: 58 messages, April 2017 – June 2020, birthday greetings,
condolences, small favors, repeated signs Bill treated Dan as family rather
than as his daughter's boyfriend. The ingest flags two things: the 58-message
count and the quotes are text-fidelity-verified against the prior wiki only
(the MASTER_MESSAGES_DB_DUMP.csv source is not held here), and a separate
"golf/pharma customer" Bill has been rigorously disambiguated from him.

## Identity

- **Bill Ulmer, Annie's father.** The page identifies him as such; the corpus
  snapshot redacts his handle as [phone redacted] where the old-wiki export
  carries it unredacted — privacy note: do not reproduce the handle from
  whole.txt.
  [dat:0251](../data/0251-bill-ulmer-thread.md)
- **Not** the "Bill (golf/pharma customer)" of the disambiguation page — a
  2018 caddying-peer thread (38 held messages, 2018-09-04 – 2018-09-20,
  pharmaceuticals, *"14 of them. That's like 95 bucks"*), whose page explicitly
  disambiguates itself from Bill Ulmer. All of that page's checkable quotes
  verify verbatim in the held corpus.
  [dat:0119](../data/0119-bill-golf-pharma-customer-thread-corroborated.md)

## Timeline

- **2017-04-22 → 2020-06-02:** the 58-message thread — sparse, unbroken.
- **2018-04-04:** days after Fran's death, an unprompted lengthy condolence
  calling Fran *"a lady of class, friendliness to all and grace"* whom he'd
  known over 40 years — paired with the note that Annie's love for her
  *"grandmother-in-law-to-be"* had *"been given freely."*
- **2018–2019, every November:** *"Happy Birthday"* without fail.
- **2018:** a recurring golf thread — tee-time deals at NWL courses,
  references to Dan caddying.
- **2019 (late):** help coordinating a package delivery to Dan's NYC apartment
  — building-entry logistics, joking about taping names to the buzzer.
- **2020:** the sign-off *"Miss and love you both. Dad/Bill"* — Dan treated as
  family in Bill's own words.
- **After 2020-06-02:** nothing. Whether contact continued, and whether it
  survived the end of the Dan–Annie relationship, is undocumented.
  [dat:0251](../data/0251-bill-ulmer-thread.md)

## Evidence for the core claims

- **The "as family, not as the boyfriend" reading is sourced to Bill's own
  words** — the "Dad/Bill" sign-off, the forty-year Fran condolence (which
  also ties Bill to the Coldren line independently of Annie), the unprompted
  birthday rhythm.
  [dat:0251](../data/0251-bill-ulmer-thread.md)
- **The disambiguation is clean.** The pharma-Bill page names Bill Ulmer
  explicitly to exclude him; its own thread is date-bounded (2018-09) and
  thematically distinct (caddying peers, pharmaceuticals). No conflation risk
  survives.
  [dat:0119](../data/0119-bill-golf-pharma-customer-thread-corroborated.md)

## Evidence against / limits

- **The 58-message count and all quoted passages are text-fidelity-verified
  against the prior wiki only.** The page's stated source
  (raw/self/message-csv/MASTER_MESSAGES_DB_DUMP.csv) is not held in this
  repository; the quotes have no held-corpus anchor. Confidence is moderate
  for that reason alone.
  [dat:0251](../data/0251-bill-ulmer-thread.md)
- **Direction is unreliable in the export** — marked "Received" throughout;
  read as mostly one-way, Bill to Dan. The sparse thread may hide a Dan side
  the export never captured.
- **The record ends June 2020** — six years before the terminal rupture. The
  page's silence on whether the tie survived the Annie years' end is the
  corpus's, not a choice: there is simply no message after 2020-06-02.

## Contradictions found by the ingest

- None within the Bill Ulmer material itself. The ingest's finding here is a
  *gap*, not a contradiction: the warmest adult presence outside Dan's family
  goes silent in mid-2020, and the corpus never says why. (Compare
  `ent:ellen-ulmer`, whose thread runs to July 2026.)
  [dat:0251](../data/0251-bill-ulmer-thread.md)

## Open questions

- Why does Bill's thread stop in June 2020 while Ellen's runs six more years?
  Is it a thread-handle change, a genuinely cooled tie, or an export gap?
- Did Bill survive the Dan–Annie rupture as Ellen apparently did, or did the
  paternal tie end with the relationship it came from?
- The forty-year Fran acquaintance — is there an Ulmer–Coldren history the
  corpus never explores?

## Cross-links

- `ent:ellen-ulmer` — the maternal pole of the same family graph; her thread
  runs 2017–2026 while his ends 2020 — the asymmetry is itself a fact.
- `ent:claire-ulmer` — the daughter; Bill's golf thread is the one Ulmer-
  family beat Dan participated in as a peer.
