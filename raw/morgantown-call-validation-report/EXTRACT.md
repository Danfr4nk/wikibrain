# Extraction brief — `src:morgantown-call-validation-report`

**Status: not extracted.** Delete this file only when the work below is done.

| | |
| :--- | :--- |
| Source node | `kb/sources/morgantown-call-validation-report.md` |
| Original | `raw/morgantown-call-validation-report/morgantown-call-validation-report.pdf` |
| sha256 | `a6394495679dfed951cfe44521a8b8af2331d6177f330faf59b9e906885bf882` |
| Size | 165,084 bytes |
| Testimony | no |

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
claim = "..."
cites         = ["src:morgantown-call-validation-report"]
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


## Verify when done

```sh
bin/wb-validate      # the layer invariant, testimony attribution, edge families
tests/test-invariant
```
