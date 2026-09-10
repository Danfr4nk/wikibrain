# ROADMAP.md

Planned changes to the foundational mechanics. This is the design record,
written before the code so the constitutional law gets considered *first* rather
than patched around afterwards. Section 2 has since been built; 1, 3 and 4 are
still design only.

**Revised order: 2 → ingestion → 1 → 4 → 3.** Ingestion was not a numbered
section in the 82-section draft and turned out to be the actual blocker: the
layers whose errors are *permanent* are L0 and L1, and everything above L2 is
regeneratable by §68 and disposable by §71. So the rule is to build only what
cannot be undone, then load. Roughly half the remaining sections — gap
detection (§79), anomaly detection (§59), pattern detection (§60),
cross-reference and evidence recruitment (§15–§17) — are *functions of a corpus*
and cannot honestly be built before one exists; tuned against thirty
hand-written nodes they would be tuned to a toy.

The original reasoning, kept: The edge rework (2) changes the
node format, so it lands before anything writes a lot of new nodes. It is now
**built**; 1, 3 and 4 are still design only. Takeout (4)
is the cheapest large win. Images (3) is last because it depends on both the
edge vocabulary and the source-intake path being settled.

---

## 1. Personality profile as a retrieval prior

**The ask:** prioritise personality profile data when drawing connections and
forming conclusions.

**The trap.** Profile material — INTP, 5w4 sx/sp, Ti-dominant, the core axioms,
autistic — is **L3–L5 material**. It is interpretation, pattern and synthesis.
Feeding it into conclusion-forming is precisely the failure the architecture
exists to prevent: a synthesis quietly becoming a premise. "He avoided the call
because he's 5w4" is a conclusion laundered into evidence, and once it is written
down as though observed, the evidence that would let anyone check it is gone.

**The resolution — a distinction the current system does not yet make:**

> Profile nodes may determine **what gets looked at**. They may never be
> **what a conclusion rests on**.

Retrieval weighting is not citation. Ranking is not evidence. Keeping those two
separate is what lets the profile be prioritised aggressively without breaking
the layer invariant at all.

**Design:**

- A `[profile]` block, valid on L3/L4/L5 nodes only, declaring which dimension a
  node speaks to — `cognition`, `attachment`, `threat_response`, `identity`,
  `time_horizon`, `moral_frame`.
- Profile nodes keep the existing `perspective` field. `self` (what Dan believes
  about himself) and `external` (what the record suggests) stay distinct — the
  gap between them is one of the most valuable things the system can express,
  and averaging them destroys it.
- `bin/wb-query` gains a profile-aware ranking pass. Nodes touching an active
  profile dimension rank up; the *reason* they ranked up is printed with them,
  so the prior is visible rather than silent.
- **Validator addition:** a node may not `cite` a node carrying `[profile]`
  unless the citing node is itself L4+. This is the mechanical form of the rule
  above, and it fails the build rather than trusting anyone to be careful.
- The `state` / `trait` / `adaptation` axis already required on behavioural
  interpretations becomes the profile's own spine. "Socially withdrawn" (state),
  "low sociability" (trait) and "avoids people after repeated conflict"
  (adaptation) are three different claims, and the profile must not flatten them.

**Decided 2026-09-09: external first, self surfaced alongside and labelled.**
The question was put to the operator, who delegated it. Self-report and the
longitudinal record disagree often, and that disagreement is among the most
valuable things this system can express — so neither is dropped and neither is
averaged into the other. External leads because that is what a longitudinal
record is *for*; self is never buried, and is always labelled as self, because
what a person believes about themselves is evidence about them regardless of
whether it is accurate.

---

## Ingestion — **built**

`bin/wb-ingest`. Preserves the original byte-exact under `raw/`, records sha256,
mints the L0 source node, writes an extraction brief. It does not extract
meaning, because that requires reading and a regex pretending to read is how a
corpus fills with confident nonsense — extraction is an agent's job and the
brief is its contract.

The load-bearing part is `--testimony`, and the schema support beneath it
(`testimony` on sources, `attributed_to` required on data drawn from them). It
is what makes the prior system's ~2,000,000 tokens safe to ingest without
auditing them first: their conclusions enter as *things that were said*, at high
and honest confidence, and no quantity of them can become *things that are so*.
See [ARCHITECTURE.md](ARCHITECTURE.md#testimony).

---

## 2. Edge system rework — **built**

> Landed. The design below is kept as written; **Deviations from this plan** at
> the end of the section records the four places the implementation departed
> from it and why. Reference documentation lives in
> [`ARCHITECTURE.md`](ARCHITECTURE.md#typed-edges).

**The ask:** rework edges to be sensible for idiosyncratic, bombastic, public
content.

**What is wrong today.** `cites` is rigorously constrained; `edges` is
completely unconstrained. Anything can point anywhere, with no validation, no
strength, no time, and no attribution. That asymmetry means half the graph is
enforced and half is vibes. Specifically missing:

- **No temporal validity.** An edge true in 2015 can be false by 2020, and the
  system says personality is a trajectory — but edges are frozen snapshots.
- **No attribution.** Who says A caused B? The schema cannot express the
  difference between Dan's claim and an LLM's inference.
- **No strength.** `influenced` is all-or-nothing.
- **A flat vocabulary of 17 types** with no families, so nothing can be
  validated or reasoned about as a class.
- **No register.** This is the one that matters most for this corpus. The
  content is loud, self-narrating and performative. Dry causal vocabulary cannot
  express that a thing was *mythologised*, *performed*, or *later disavowed* —
  and for this wiki that register is not decoration, it is data.

**Design — five edge families:**

| Family | Relations | Claim made |
| :---- | :---- | :---- |
| **Temporal** | `preceded` `followed` `occurred_during` | Sequence only. No causation. |
| **Causal** | `caused` `influenced` `resulted_from` `depended_on` | Graded. Requires `basis`. |
| **Structural** | `belonged_to` `located_at` `participated_in` `about` | Membership and reference. |
| **Semantic** | `resembled` `symbolized` `evidences` `challenges` `contradicted` | Meaning and tension. |
| **Narrative** | `mythologized` `performed_as` `disavowed` `reframed` `retold_as` | **New.** How the subject has *presented* a thing, as distinct from what it was. |

The narrative family is the direct answer to "bombastic yet public." It lets the
wiki record that an event was dramatised in the telling **without** either
endorsing the dramatisation or flattening it into "he lied." `evt:X
--mythologized--> ent:Y` is a claim about the telling, not about the event, and
keeping those apart is the same discipline the layer law already applies to
evidence.

**Every edge gains:**

```toml
[[edges]]
rel         = "influenced"
target      = "evt:2010-02-17-suboxone-start"
strength    = "strong"          # strong | moderate | weak | tentative
basis       = "stated"          # stated | inferred | speculative  (was causal_basis)
asserted_by = "self"            # self | external | llm | other
[edges.when]                    # edges become temporal, like nodes
start = "2015-11"
end   = "2019-07"
```

- `basis` generalises the existing `causal_basis` to every family. `causal_basis`
  stays accepted as a deprecated alias for one release so nothing breaks.
- `asserted_by` mirrors `perspective` on interpretations, for the same reason:
  an LLM's inferred edge and Dan's stated edge must never be indistinguishable.
- **Inverse registry.** `preceded`/`followed`, `caused`/`resulted_from` are
  declared inverse pairs. Write one, the builder derives the other. This kills
  the current duplicate-and-drift problem.
- **Validator additions:** target must resolve; `rel` must be in the vocabulary;
  causal-family edges must carry `basis`; narrative-family edges must carry
  `asserted_by`; an edge's `[when]` must fall inside its endpoints' spans.

**Migration:** existing edges have no `strength`/`asserted_by`. They are flagged
as unaudited in `wb-validate` output, so they are visibly provisional rather than
silently upgraded.

### Deviations from this plan

Four things changed between design and implementation. Each was a case where
writing the code exposed something the plan had not seen.

**No default of `moderate` / `other`.** Defaulting would have manufactured
metadata that nobody checked and made it indistinguishable from metadata
somebody did. Missing fields stay missing and `wb-validate` counts them
(`6 edges … (6/6 audited)`). The six edges that existed were then audited by
hand rather than defaulted.

**`evidences` was removed, not kept.** `A evidences B` is `B cites A` written
backwards, and only one of the two spellings was enforced by the layer
invariant. Keeping both would have left a legal way to make an evidence claim
outside the rule that governs evidence claims.

**`supersedes` split in two.** The plan listed it as an ordinary relation. It
was in fact doing two jobs: a top-level *field* meaning "this node replaces that
one," and an *edge* meaning "the thing here overtook the thing there." The
second is now `displaced`, in a sixth **editorial** family the plan did not
have.

**The temporal rule is narrower than "must fall inside its endpoints' spans."**
That reading forbids a legitimate and common shape — a relation active
2015–2019 pointing at a single-day 2010 event. What is genuinely impossible is
an edge whose window *closes before an endpoint begins*, so that is the error;
an edge opening early is a warning, because imprecise dates are normal.

One relation was also added: **`influenced_by`**. The rework surfaced an edge in
`evt:2026-09-08-rebuild-begins` pointing the opposite way from what its own note
described, and the reason was that saying "this was influenced by X" from the
node it happened to was impossible without a trip to the other file. Friction
like that produces exactly that error, so `influenced` gained an inverse.

---

## 3. Image intake and multimodal corroboration

**The ask:** an uploader feeding a multimodal model, using images to build out
and — more importantly — **corroborate** details.

Corroboration is the right emphasis and it is worth being precise about why: the
corpus is a single evidence channel. Everything in it is text Dan or someone else
chose to write. Images carry **mechanically-produced metadata nobody composed** —
capture timestamps, geotags, device identifiers — and that makes them an
*independent* channel. Independent channels are the only thing that can catch a
systematic error in the first one.

**Layering, which is where this could easily go wrong:**

| What | Layer | Why |
| :---- | :---- | :---- |
| The image file as acquired | **L0** `source` | Raw material. Append-only. |
| EXIF timestamp, geotag, dimensions | **L1** `datum` | Mechanical extraction. High confidence. |
| OCR'd text visible in the image | **L1** `datum` | Transcription, not reading. |
| "This is a birthday party" | **L3** `interpretation`, `perspective = "llm"` | A model's reading. Never a fact. |

A vision model's description is **not** a datum. It is an interpretation with a
non-human perspective, and it gets labelled as one. This is the single most
important rule in this section — it is the exact point where a multimodal
pipeline would otherwise inject thousands of confident inferences into the
evidence layer.

**The specific high-value target.** `CORPUS_POLICY.md` records that **8,120
messages carry attachments whose images were not preserved** — the filenames
survive, the pictures do not. If the photo library or Takeout holds those files,
they can be re-married to the corpus **by filename**, restoring an evidence
channel currently listed as a known limit. That is the single biggest available
gain in the whole roadmap and it should be attempted before any general
image-upload UI is built.

**Privacy — non-negotiable:** photographs contain other people's faces, and this
repository is public. Any image node with an identifiable person defaults to
`sensitive = true`. No face embeddings, no automated identity matching against
the counterparty list. The existing `wb-check-publish` gate already asserts
exclusion against built output and covers this once images are typed correctly.

---

## 4. Takeout ingestion

`/Volumes/MUSIC/TAKEOUT` is a new L0 source. It is large, mostly irrelevant, and
mixed-sensitivity, so it does **not** get bulk-imported.

**Selection rule:** ingest a stream only if it provides *independent
corroboration* or *time fidelity* the corpus lacks. Skip anything that is bulk
media or derived advertising junk.

| Stream | Value | Priority |
| :---- | :---- | :---- |
| **Location History** (`Records.json`) | Independent timeline. Corroborates or contradicts message-derived claims about where and when. Directly addresses the 2021–2022 corpus gap. | **First** |
| **Photos metadata** (JSON sidecars) | Timestamps + geotags without the image bytes. Cheap. Feeds § 3. | **First** |
| **Chrome history / My Activity** | Interest and attention trajectory over time. | Second |
| **YouTube history** | Same, plus mood proxy. | Second |
| **Gmail** (`.mbox`) | High value, very large, and full of other people's words. Needs its own policy pass like the corpus got. | **Defer** |
| Ads, cached blobs, device backups | Noise. | Skip |

Metadata-first is the whole strategy: the JSON sidecars and location records are
small, structured, and carry most of the corroboration value, while the media
bytes carry most of the size and most of the privacy exposure.

**The 2021–2022 gap is the first test.** The corpus has 282 messages in 2021 and
none in 2022, and `CORPUS_POLICY.md` flags this as the one place where
absence-of-evidence reasoning is most dangerous. Location History covering those
years would establish whether that gap is *a life that went quiet* or *a database
that lost rows* — two completely different facts that the corpus alone cannot
distinguish.

**Before any code:** inventory, not import. See [`MIGRATION.md`](MIGRATION.md)
§ "Route C" for the commands. The ingestion plan gets written against real
contents rather than assumptions about what Takeout contains.
