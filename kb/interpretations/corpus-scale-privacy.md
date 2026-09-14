+++
id         = "int:corpus-scale-privacy"
layer      = 3
type       = "interpretation"
title      = "At corpus scale, privacy is a structural property, not an editorial one"
cites      = ["dat:0001-corpus-scale", "dat:0005-sheet-public", "dat:0037-publication-gate-fails-safe", "dat:0251-bill-ulmer-thread", "dat:0077-corpus-size-figures-mine-messages-tweets-history"]
confidence = "moderate"
perspective = "llm"
importance = 5
tags       = ["privacy", "meta", "corpus"]
created    = "2026-09-09"
updated    = "2026-09-09"
falsifiers = [
  "A third-party phone handle, email, or other contact identifier appears in any published artifact — the site, graph.json, or a committed node body. One instance falsifies 'structural' and demotes the claim to 'aspirational'.",
  "The privacy machinery is shown to be untested in the direction that matters: wb-check-publish is demonstrated against constructed cases but never against a real near-miss from the ingest's 497 pages, meaning the gate's one real catch (dat:0037) was also constructed.",
  "The subject's radical-transparency stance reverses on a specific datum — he asks for something about himself to be withheld — which would show the 'his data is open' half of the split is a mood, not a policy.",
]
alternatives = [
  "The split is not a privacy architecture but a consent architecture: the only person who consented to radical transparency is Dan, and the machinery is just the ordinary consequence that 498 people did not. Nothing structural is needed to explain it.",
  "Scale is irrelevant and the thesis overreaches: the same gitignore-plus-gate design would protect ten messages or ten million. What matters is the append-only public git history, not the corpus size.",
  "The real protection is obscurity, not structure: the corpus is public-by-link, the site is public-by-design, and the only thing standing between 498 people's messages and the open web is that nobody has looked. The machinery described here is the story told about that fact.",
]

[when]
date   = "2026-09-09"
+++

<!-- prose for humans; the frontmatter is for machines -->

## The thesis

At the scale of this corpus — 192,140 messages across 577 threads and 498
counterparty handles in the held export ([`dat:0001`](../data/0001-corpus-scale.md));
217,573 records / 503 handles on the instruments page's fuller snapshot
(≤2026-09-02, [`dat:0077`](../data/0077-corpus-size-figures-mine-messages-tweets-history.md))
— privacy cannot be an editorial decision, made message by message. It has to be
a **structural property**: gitignore keeping the corpus out of permanent public
git history, `sensitive` flags excluding nodes from every published artifact,
and a publish gate that reads the *built output* rather than trusting the
builder's assumptions. The thesis is that this stack is the privacy posture,
and that no amount of careful reading substitutes for it.

## The deliberate split

The corpus holds two populations under one roof, and the policy treats them
differently on purpose:

- **Dan's data is radically transparent by his standing instruction.** He wants
  the wiki brain fully public, his own private data included, because open data
  is easier and more complete to point any model at. Do not suggest
  privatizing it.
- **The other 498 people's data is gated.** The existing privacy machinery —
  gitignore, sensitive flags, `wb-check-publish` — still applies, and that
  split is deliberate and stays.

This is not a contradiction to resolve. It is the design: one person's
consent cannot launder 498 other people's messages.

## Evidence for the structural reading

**The gate has fired in the right direction.**
[`dat:0037`](../data/0037-publication-gate-fails-safe.md) records an adversarial
test in which `bin/wb-build` leaked a sensitive source's id into `graph.json`
— the exclusion logic covered `cites` but not `attributed_to` — and
`bin/wb-check-publish` refused to publish. The check reads the built output
rather than the source, so it does not share the builder's assumptions, which
is precisely why it caught a field the builder's author had not thought about.
Defence in depth was not decorative.

**The redaction convention holds under pressure.**
[`dat:0251`](../data/0251-bill-ulmer-thread.md) documents the actual fault
line: the old-wiki export carries third-party phone handles unredacted where
the corpus snapshot redacts them as `[phone redacted]`. The ingest followed the
corpus convention and did not reproduce the numbers. The raw export is the
less-redacted layer, and the corpus layer's redaction decision is what the
published nodes follow.

## Evidence against — the uncomfortable half

**The gitignore is not what protects this data.**
[`dat:0005`](../data/0005-sheet-public.md) establishes that the Google Sheet
backing the corpus is shared "anyone with the link" and downloads in full with
no credentials — demonstrated with an unauthenticated fetch, not assumed. The
corpus is closed in git and open on the web. The decision to leave the sharing
as it is was raised with the operator and stands as a recorded decision, not an
oversight. But it means the structural story told here covers the repository,
not the data: the messages themselves are one shared URL away from anyone.

That bounds the thesis sharply. The machinery described — gitignore, flags,
gate — protects the *published artifacts*. It does not protect the corpus. At
corpus scale the exposure surface is not the wiki; it is the sheet. Anyone
reasoning about the privacy posture has to read both sides rather than the
reassuring one.

## How the ingest bears on it

The ingest surfaced the exact failure mode the machinery exists for: whole.txt
carrying unredacted third-party phone handles (Bill Ulmer, Brad Hubeaut,
Brennan Meadows, Bruce Burish, the Morgantown-call page) where the corpus
snapshot redacts them. Workers followed the corpus convention — zero new
exposures across 497 pages. The ingest also confirmed the gate's necessity:
with thirty workers writing nodes at speed, editorial care ("don't paste the
number") is not a defence; the check that reads the built output is.

## Contradiction

The subject's radical transparency and the corpus's closed-in-git posture pull
in opposite directions, and the 498 other people are caught in the middle: the
wiki is public-by-design, the sheet is public-by-link, and the only layer doing
real protective work for counterparties is the redaction convention plus a
publish gate. The system publishes everything about one man and must publish
nothing identifying about anyone else, from the same build, on the same day.
That is a hard constraint, not a preference — and the one documented near-miss
(dat:0037) was a constructed test, not a real catch.

## Open questions

- Has `wb-check-publish` ever fired on a *real* near-miss from production
  writing, or only on constructed tests? A gate that has never caught anything
  real is untested, not proven.
- Does the redaction convention survive contact with the raw export's other
  unredacted handles (whole.txt is the less-redacted layer throughout)?
- What happens when the subject's transparency instruction collides with a
  counterparty's exposure *inside one message* — his text quoting their
  number? The split has no documented rule for the seam.
- Should the sheet's public-by-link sharing be re-raised, given that it, not
  the wiki, is the actual exposure surface?

## Cross-links

- [publication-as-defence](publication-as-defence.md) — the same publication
  mechanism as exposure: the defence and the risk are one property.
- [wiki-brain-as-instrument](wiki-brain-as-instrument.md) — the instrument
  reading depends on the corpus being publishable, which depends on this
  machinery holding.
