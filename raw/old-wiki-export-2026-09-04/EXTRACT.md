# Extraction brief — `src:old-wiki-export-2026-09-04`

**Status: 20 of 497 pages extracted** (`legal/` and `health/` complete bar index stubs; `places/` begun, 2026-09-09). Delete this file
only when the work below is done for all of them.

| Area | Pages | Extracted |
| :--- | ---: | :--- |
| legal | 4 | **4** — `dat:0013`–`0017`, `evt:2015-02-possession-arrest`, `evt:2015-combos-retail-theft`, `con:2015-arrest-breath-test` |
| health | 6 | **5** — `dat:0018`–`0027`, `int:inference-from-refusal-is-unsound`, `pat:audit-strong-on-numbers-weak-on-meaning`. Remaining: `index` (stub) |
| places | 10 | **3** — `dat:0039`, `dat:0040`, `dat:0041`. Remaining: `117-belmont-circle`, `307-e-76th-st`, `424-bedford-ave`, `90th-st-manhattan`, `seven-springs`, `derrick-avenue`, `index` |
| meta | 12 | **5** — `dat:0043` (`recent-activity`), `dat:0044`–`0046` + `int:contemporaneous-is-not-the-same-as-true` (`testimony-veracity`), `dat:0048`, `dat:0049` (`open-questions`), `dat:0052` (`instruments/index`). Remaining: `digest`, `index`, `instruments/index`, `journeys/` ×3, `readers-digest`, `skills` |
| work | 15 | 0 |
| timeline | 42 | 0 |
| self | 59 | 0 |
| mind | 78 | **2** — `dat:0047` (`concepts/calibrated-confidence`), `dat:0050` (`profile/enneagram-5w4`). `synthesis/failure-to-launch` read for `dat:0048`, not extracted |
| interests | 96 | 0 |
| people | 175 | 0 |

**What the first pass established, for the next one.** Extraction yield was
roughly five data nodes per page in a dense area, and the highest-value nodes
were not facts about the subject but the prior system's records of its own
errors — see [`int:old-wiki-corrections-are-the-payload`](../../kb/interpretations/old-wiki-corrections-are-the-payload.md),
which also states the reading that would falsify that. Watch for `REVISED [`,
`CORRECTED [`, `CONTRADICTION [` and `GAP CLOSED [` blocks: they are the prior
wiki's own error markers and each one is a datum.

**The second pass sharpened the first pass's finding.** `health/` shows the
prior system's discipline was **real but uneven**, which is more useful than
either "careful" or "loose". Its intake ledger states the absence-of-instrument
rule better than most methodology sections (`dat:0019`) and withholds a
misleading rate figure rather than footnoting it (`dat:0018`). Its
hyperreflexivity page, same domain and weeks apart, reads a "no comment" as its
most incriminating available content and calls that reading *correct*
(`dat:0021`). Expect that unevenness across the remaining 491 pages: the
question to carry into each is not whether the page is careful but whether *this
claim on it* was checked.

**A prediction is now on the record, made before the pages were read.**
[`pat:audit-strong-on-numbers-weak-on-meaning`](../../kb/patterns/audit-strong-on-numbers-weak-on-meaning.md)
holds that the prior system was rigorous wherever a number or a document could
check it and loose wherever the claim was about meaning. It predicts `mind/`
(78) and `self/` (59) will show **markedly fewer** `REVISED`/`CORRECTED` blocks
and **more endorsed inference** than `legal/` and `health/` did. The competing
reading in
[`int:old-wiki-corrections-are-the-payload`](../../kb/interpretations/old-wiki-corrections-are-the-payload.md)
predicts the opposite. Count the error-marker blocks per page as you go — that
single tally discriminates them, and it costs nothing to collect.

**SETTLED [2026-09-09], and both halves of that paragraph were wrong.** The tally
is now mechanical — `bin/wb-census`, covered by `tests/test-census` — and its
result is [`dat:0042`](../../kb/data/0042-marker-census-does-not-support-the-pattern.md).
Normalised for page length, `mind/` corrects at 0.39 marks per 10 kB against
`health/` at 0.37: level, not markedly fewer. The pattern's load-bearing
falsifier is spent and it landed against the pattern, which now carries a dated
`FALSIFIER SPENT` block. And the two readings never made opposite predictions in
the first place — "corrections mark where external checks existed" is the same
prediction about density, differently worded, so the tally could not have
discriminated them however it came out. **Do not re-collect this by hand while
reading.** Run the tool. The third falsifier is spent too, same day, and it is the one that matters most
for everything still unread. `wiki/meta/recent-activity.md` turns out to be a
247-row changelog covering only 2026-08-13 to 2026-09-04, and
[`dat:0043`](../../kb/data/0043-correction-density-tracks-work-recency.md) splits
the census on it: **half the corpus was never opened in that window and carries
9% of the marks.** `bin/wb-census --recency` reproduces it.

**Carry this into every remaining area.** `interests/` (96 pages) looks like the
least self-scrutinised area in the wiki at 0.11 marks per page. Three quarters of
it was simply not worked; its touched quarter runs 0.46. The same correction is
due for `people/` (121 of 175 untouched) and `timeline/` (18 of 42). A low marker
count in an unread area means *nobody got there*, not *nothing was wrong* — treat
it as `never_observed`, never as `known_not_to_occur`.

Note also that the changelog's entries are *references* to corrections on other
pages, not corrections of its own; counting them as its own is exactly the error
the first pass of the census made.

**`wiki/meta/open-questions.md` is the wiki's own backlog and it is 182 kB:
49 live contradictions, 605 open gaps, 65 standing predictions, all scraped
from the pages themselves.** It is the single highest-yield page in the export
for deciding what to read next — and per [`dat:0048`](../../kb/data/0048-corrected-claim-still-standing-in-its-own-page.md)
it is not trustworthy as a status list. At least one prediction it lists as
standing had been retracted on its own page the day before the digest ran, and
is quoted with the figure the retraction retired. Read it as *what the pages
say they do not know*, then check each item against its own page before acting
on it.

[`dat:0049`](../../kb/data/0049-old-wiki-live-contradictions-inventory.md)
inventories the 49: mind 20, people 12, self 6, timeline 5, interests 3, legal 3.
Two thirds sit in `mind/` and `people/`, which this extraction has barely opened
— one page of 78 and none of 175. **Two are already closed** — `dat:0031` and `dat:0051` — and
the way they closed is the template: it was settled by reading the source, not by
reasoning about it. Prefer entries where a source can be READ over entries where
two people give incompatible first-hand accounts — the latter are held open for
the right reason and should stay open.

**DONE [2026-09-09], and the page was right.**
`timeline/events/august-2026-morgantown-call` is confirmed by
[`dat:0057`](../../kb/data/0057-morgantown-audio-contradiction-reproduces.md): the
conflicting statements are in the corpus, four of them asserting the recording was
sent and one — *"I could have torn your life apart. I still could and I don't"* —
that it was not. Which is true is still undetermined and the entry stays open.

**Two traps came out of it and both apply to everything still unread.**
[`dat:0056`](../../kb/data/0056-corpus-timestamps-are-not-zero-padded.md): 44% of
corpus timestamps write the hour unpadded, so a text comparison silently selects
nothing and a text sort silently scrambles a day.
[`dat:0057`](../../kb/data/0057-morgantown-audio-contradiction-reproduces.md): the
prior wiki writes times in **UTC** and this corpus is local, so every timestamp
quoted from a wiki page is four hours ahead of the same message here, five in
winter. Locating a wiki-cited message by its stated time lands on the wrong
message or on nothing, and looks fine either way.

**And the method rule earned its place.** Three passes over that day — a time
window, a keyword search on `send|sent|audio`, and a regex built to catch denials —
each returned a clean, confident, wrong answer, all in the direction of *the
evidence is absent*. What worked was mapping the page's own timestamps onto the
corpus and reading what was there. When a contradiction cites specific times,
convert them first and read the window; do not search it.

**A retrieval worth naming before the next pass: `testimony/events.jsonl`.**
`wiki/meta/testimony-veracity.md` is generated from it and is the prior wiki's
best instrument — sixteen adjudicated first-person claims with outcomes, weights
and what settled each one ([`dat:0044`](../../kb/data/0044-old-wiki-testimony-ledger.md)).
The generated page shows the arithmetic but not the adjudicator's reservations,
and the jsonl is not in this export. It would also let the ledger be re-scored
against the two channels this system holds and it did not. Second only to the
28.9 MB message dump on the acquisition list.

**Two claims from `health/` are promotable out of testimony and should be.**
[`dat:0024`](../../kb/data/0024-old-wiki-happiness-counter-measure.md) (happiness
rates per 1,000 messages, 2015–2020) and
[`dat:0025`](../../kb/data/0025-old-wiki-prescriber-exists-routing-only.md) (four
dated messages establishing a prescriber) both terminate in computations over
the message corpus, which this system holds byte-exact and can re-pull. Every
other extracted claim terminates in "the prior wiki said so". Re-running those
two sweeps would convert them from testimony to first-party data — the cheapest
available upgrade in the whole backlog, and the template for how the other 488
pages get promoted.

One retrieval would upgrade a whole cluster at once: a **Fayette County MDJS
docket search**. It would convert `evt:2015-02-possession-arrest` from
single-source testimony to primary record and settle `con:2015-arrest-breath-test`.

| | |
| :--- | :--- |
| Source node | `kb/sources/old-wiki-export-2026-09-04.md` |
| Original | `raw/old-wiki-export-2026-09-04/whole.txt` |
| sha256 | `4037dedc019e2595fab9dca558a70ee466a39b5ed2a0d3ed58af3c25fb69d5a6` |
| Size | 7,536,214 bytes |
| Testimony | **yes** — assertions are the evidence |

## Scale, and how to work it

497 pages, ~1.86M tokens. This is not one sitting. `pages.json` gives byte
offsets, so work it page by page:

```python
import json, pathlib
d = pathlib.Path("raw/old-wiki-export-2026-09-04")
idx = json.loads((d/"pages.json").read_text())
raw = (d/"whole.txt").read_bytes()
page = next(p for p in idx["pages"] if p["path"].endswith("vaughn.md"))
text = raw[page["byte_offset"]:page["byte_offset"]+page["byte_length"]].decode()
```

Suggested order, highest evidential yield first: `timeline/` (42 pages, dated
and cross-referenced), then `people/` (175), then `health/` and `legal/` (10
together, small and dense), then `mind/` and `self/` — those two are mostly the
prior system's *conclusions* rather than its evidence, and are the pages where
the testimony discipline does the most work.

## The extraction rule, established by six checks

[`pat:reasoning-sound-provenance-unreliable`](../../kb/patterns/reasoning-sound-provenance-unreliable.md)
is the operating instruction now. Six claims have been checked against
independent sources and **every check changed something** — but the changes fall
on one side:

- **The reasoning holds.** Nothing checked has found a bad inference from the
  evidence the page believed it had. Arguments are worth reading and mostly
  worth keeping.
- **The quotations do not.** Four of six checks found a quote that does not sit
  where the page put it — one belonging to a different speaker entirely, three
  absent from the authoritative corpus.

So: **take the argument, verify the quote.** A claim resting on reasoning
inherits `moderate`. A claim resting on a quotation inherits nothing until
`bin/wb-corroborate` has been run against it — against **both** channels, since
`dat:0033` came from Facebook alone and the corpus could not see it.

Run the coverage check before trusting any null.

## What extraction owes

One datum per claim. The unit is *one claim about one thing, at one time, with
known provenance* — atomicity is what makes later reasoning possible, and a
paragraph compressed into a single datum cannot be cross-referenced against
anything.

```toml
+++
id            = "dat:NNNN-short-slug"
layer         = 1
type          = "datum"
title         = "..."
claim = "wiki-brain full corpus export, 2026-09-04 asserted that ..."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"    # REQUIRED — this source is testimony
confidence    = "high | moderate | low | speculative | unknown"
extraction    = "How this was obtained, and what limits it. Sample size belongs here."
+++
```

Work through, in order:

1. **Atomic datapoints** — every separable claim.
2. **Entities** — people, places, institutions, projects, artifacts. Do **not**
   merge an ambiguous match into an existing entity. An uncertain identity stays
   uncertain; a wrong merge is close to unrecoverable once things cite it.
3. **Events** — what happened, with `[when]`. Date precision is meaningful:
   `2018` and `2018-03-04` are different claims, so do not pad.
4. **Relationships** — first-class L2 objects, not adjectives on a person.
5. **Explicit beliefs**, kept apart from observations. What someone believed at
   the time is evidence about them regardless of whether it was correct.
6. **Observation vs interpretation.** Anything that is a reading goes to L3 with
   a `perspective`, never to L1.
7. **Cross-reference** against the existing corpus: what does this corroborate,
   contradict, or newly explain?
8. **Contradictions** — write the `contradiction` node. Do not resolve it.
   "The historical record is ambiguous" is a valid and often correct result.
9. **Gaps** — what did this raise that nothing answers?

## What extraction must not do

- Invent dates. Absent is `unknown`; approximate is `approx`.
- Silently merge entities on a partial name match.
- Promote a reading to L1 because it feels obvious.
- Normalise away the weird parts. Specific recurring strangeness is where the
  cognitive signature lives; generic descriptors are cheap and interchangeable.
- Restate an assertion as fact. This source is testimony: `attributed_to` is required.

## Verify when done

```sh
bin/wb-validate      # the layer invariant, testimony attribution, edge families
tests/test-invariant
```
