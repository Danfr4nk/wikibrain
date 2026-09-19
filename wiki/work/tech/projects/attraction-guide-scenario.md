---
domain: work
page_type: concept
title: "attraction-guide scenario instruments — four generations of situational preference measurement"
status: active
date_created: 2026-09-11
date_modified: 2026-09-18
sources:
  - "Sammy working context, 2026-09-11 (MEMORY.md)"
  - "dat:1567-scenario-alt-instrument-shipped-20260915"
  - "kb/data/0059-scenario-ratings-v1-scale-behavior.md"
  - "kb/data/0060-scenario-ratings-v1-pegging-floor.md"
  - "kb/data/0061-scenario-ratings-v1-amplifier-moderator-deltas.md"
  - "kb/data/0062-scenario-ratings-v1-cross-cutting-rules.md"
  - "kb/data/0065-scenario-ratings-v1-export-verifies-profile.md"
  - "memory/2026-09-18.md (scenario-lab rebuild, held for review)"
related:
  - wiki/work/tech/projects/index
  - wiki/work/tech/projects/attraction-guide
  - wiki/work/tech/projects/attraction-guide-telemetry
  - wiki/work/tech/projects/attraction-guide-face-library
  - wiki/mind/psychosexual/scenario-ratings-profile
tags: [ai-collaboration, forensic-analysis]
connections:
  - page: wiki/work/tech/projects/attraction-guide
    type: component-of
    claim: "The scenario instruments are the scenario-perturbation line of the attraction-guide deployment — situational preference, measured in four generations."
  - page: wiki/mind/psychosexual/scenario-ratings-profile
    type: instruments-for
    claim: "These instruments generate the data the scenario-ratings profile analyzes — instrument entries cover how, the profile covers what was found."
---

# attraction-guide scenario instruments

The scenario line of the attraction-guide deployment measures *situational*
preference — what he wants in a scene — as distinct from the main A/B
game's facial-metric engine, which measures what he wants in a face. Two
different questions, two different instruments, one suite. This entry covers
the instruments: how each generation works, what problem it was built to
kill, and where the line stands on 2026-09-18. The *results* of the
scenario ratings — the profile itself — live at
[[wiki/mind/psychosexual/scenario-ratings-profile]]; this page is about the
measuring devices, not the measurements.

The hub entry [[wiki/work/tech/projects/attraction-guide]] carries the
suite-level story. What follows is the scenario family's own history, which
deserves its own entry because it is the clearest single case in Dan's
builder wave of a design problem being attacked four times until the scale
itself was abandoned.

## The problem: a man who rates everything 8–10

Scenario ratings v1 produced the finding that shaped the next three
instruments: 121 of 122 items rated, mean 8.36, SD 1.97, **64% of ratings at
9–10** (`dat:0059-scenario-ratings-v1-scale-behavior`). When two-thirds of
your scale is one number, the scale is not measuring — it is a mood
indicator. The kb node's own conclusion is the load-bearing sentence: "The
instrument maps his existing fantasy space; information lives in the
moderators and the floor, not the ceiling." That is, v1 still yielded
signal, but the signal was in what *lowered* a rating and in the one hard
boundary, never in the ceiling where everything piled up.

The floor evidence is worth recording here because it motivated the
wouldn't-do bucket two generations later. All five "she pegs you while
another guy watches" variants rated 3–4 (mean 4.00), the only sub-5
cluster, more than 2 SD below the grand mean — and the single largest
positive delta in the entire dataset was *inside* that cluster: "the guy
joins in on you" lifted a 3 to a 7 (+4) (`dat:0060-scenario-ratings-v1-pegging-floor`).
The top moderators read like a map of his hard edges: older experienced
male partner (−6), friend-as-third (−5), post-scene phone call (−5),
not-filmed (−5), his-place turf (−4), could-get-out (−4). Friend is the
poison familiarity level (7.30 vs 8.75 acquaintance); neutral turf beats
home turf (8.88 vs 7.87/7.30)
(`dat:0061-scenario-ratings-v1-amplifier-moderator-deltas`). And the
item-level export independently reproduces the profile's load-bearing
numbers exactly — 121/122, mean 8.36, the distribution 3:5/4:4/5:5/6:7/
7:10/8:12/9:33/10:45 — so the analysis layer is a faithful transform of the
primary record, not a reinterpretation
(`dat:0065-scenario-ratings-v1-export-verifies-profile`). v1 was a good
instrument with a bad scale and a fatal attribution flaw; everything after
it is the repair sequence.

## Generation 2 — scenario ratings v2: the causal redesign

`scenario-rate.html` v2 fixed the attribution flaw, not the ceiling. The
design: every modifier changes **exactly one metric** versus its base — 168
single-knob modifiers, deterministic rotation, each metric perturbed 6–8x.
The readout is causal knob-effect deltas, not correlations: 28 bases, 196
items, and the answer to "which knob made this scenario hot" is a measured
delta per knob rather than a correlation across scenarios.

This is the same "instrument that audits its own inputs" pattern as the
telemetry lab's face-library audit and the stylometry 30-minute scorer's
declared error bars — the v1 correlational flaw was named, the instrument
was redesigned around it, and the old instrument's numbers were kept as
the baseline the new one had to beat. But a causal instrument on a 1–10
scale still has a ceiling. The ruler was honest; the ruler was short.

## scenario.html v6: preset situational bouts

The other instrument in the pair, `scenario.html` (v6), runs named-preset
bouts: foursome / her ex / she watches / 2019 baseline. Phase 1 is preset
bouts; phase 2 is metric isolation. The load-bearing caveat — stated in
the entry since 2026-09-11 and kept here verbatim — is that **the preset
vectors are the builder's reading of Dan's one-liners: correctable, not
canon.** The presets were authored from things he said in passing, and the
entry has always treated them as a first draft of his vocabulary awaiting
his correction, not as canonical statements of his preferences. That
"correctable, not canon" discipline is the scenario line's version of the
telemetry lab's honest-Wilson-intervals: the instrument declares where its
authority ends.

## Generation 3 — the alt instrument: the wouldn't-do bucket

On 2026-09-15 Dan commissioned and Sammy shipped the alternate
scenario-ratings instrument to his spec, live the same day after a GitHub
Pages deploy lag (`dat:1567-scenario-alt-instrument-shipped-20260915`):
rate each base 1–10, then 12 authored variations per base at
LOVE(+2)/LIKE(+1)/MEH(0)/NO WAY(−1) — the NO WAY bucketed separately and
excluded from the mean, so a veto is never averaged away. 78 bases × 12 =
936 items. Themes WHO/ACT/WHERE/SEEN/FLUID/TONE/AFTER (5+ per base). The
variations panel opens after the base is rated. Line-veto plus private notes
per line. Fresh localStorage namespace `scen_rate_alt`. Export to
`scenario-ratings-alt.json`. Live at
https://danfr4nk.github.io/attraction-guide/scenario-rate-alt.html, linked
inside the Scenario Ratings splash box; later moved with the suite to
`Danfr4nk/tools` (`tools/attraction/`). Editorial fixes before release: idx
75 pronoun disambiguation, idx 26/63 trims.

The alt complements v3 rather than replacing it. Sammy's thesis, recorded
in the kb node: **v3 answers "why," the alt answers "what" — and the
wouldn't-do bucket may be the most diagnostic instrument of the three,
because a NO WAY is worth ten 7s.** The v1 evidence supports that thesis
directly: the only hard boundary in the whole v1 dataset (the pegging
floor) was also the only place the instrument produced real contrast, and
the alt is designed to manufacture exactly that contrast on purpose. Where
v1 stumbled onto a boundary, the alt goes looking for them.

## Generation 4 — the scenario-lab rebuild: killing the scale

On 2026-09-18 the scenario-lab was rebuilt as a real instrument and the
scale was abandoned entirely. The steering came from Dan at ~19:21 EDT:
"You need to look at the typical generalist tube site and work off their
categories list." The order was explicit — do NOT invent the taxonomy, pull
a real major generalist tube site's categories page and use its actual
category list as the base vocabulary for the factorial probing dimensions
and blind-spot probes (acts, dynamics, settings, roles, intensity markers,
production/framing tags like amateur/POV). The rebuild that followed is
grounded in a 96-category taxonomy from an actual major tube site's
categories page — the vocabulary comes from outside the builder's head, by
his order.

The scoring is pairwise forced-choice driving Bradley-Terry scores across
50 forced-choice trials. There is no 9 to peg to. The forced choice is the
honest admission that rating scales were the problem all along: four
generations in, the ceiling that v1 mapped in September was finally
designed around by removing the ceiling. The design brief that seeded it
(2026-09-18 morning) called for factorial probing from his v1 factor levels
(contact envelope, intensity, pursuit direction, duration, recorded,
explicitness, party context, ex-vs-stranger, watcher) generating novel
combinations; adaptive boundary-finding (bracket indifference points, probe
outward from known space); dedicated blind-spot/discovery items; computed
profile output (factor weights, hard boundaries, novelty hits) plus an
exportable `scenario_instrument/v1` JSON; phone-first, one question per
screen, localStorage resume. The tube-site taxonomy order then replaced the
invented vocabulary with a grounded one.

The build is held at `~/workspace/scenario-lab-review/scenario-lab.html`
for his review — an explicit no-push to the wiki/tools repos until he
signs off. This entry records the instrument's design and status; the
taxonomy contents and scoring internals stay with the build until it ships.

## Two measurement modes: bouts vs judgments

The scenario line actually contains two different measurement modes, and
the distinction is load-bearing. `scenario.html` (v6) runs **bouts**: the
instrument presents a preset scenario and Dan works through it — phase 1
preset bouts, phase 2 metric isolation. The ratings instruments
(`scenario-rate.html`, the alt, the scenario-lab) solicit **judgments**: a
number, a pick, a veto. Bouts measure what happens inside a scenario;
judgments measure how scenarios compare.

The bouts have a standing honesty problem that the entry has carried since
day one: the preset vectors are the builder's reading of Dan's one-liners.
"foursome / her ex / she watches / 2019 baseline" are four names for four
scenario-spaces the builder inferred from things he said in passing. The
entry's position — correctable, not canon — is the right one, but it is
also an IOU: until he corrects them, the bouts run on the builder's
fantasy vocabulary, not his. The judgments instruments, by contrast, got
their vocabulary fixed by his explicit order (the tube-site taxonomy), so
the bouts are now the least-grounded instrument in the family. That
asymmetry is the cheapest argument for the correction pass named in the
open questions.

## The factor lineage and the adaptive design

The scenario-lab's factorial probing did not come from nowhere. Its factor
levels were drawn from Dan's own v1 factor space: contact envelope,
intensity, pursuit direction, duration, recorded, explicitness, party
context, ex-vs-stranger, watcher. These were the axes v1's deltas
implicated — the things that actually moved his ratings — so generation 4
probes the space those factors span rather than re-rating the same 122
items. The design brief (2026-09-18 morning) calls the resulting
combinations "novel": the instrument generates scenario combinations he
has never been asked about, from factors he has already shown he cares
about.

The adaptive layer is boundary-finding, not space-filling. The brief:
bracket indifference points, probe outward from known space, carry
dedicated blind-spot/discovery items. The output is computed, not
collected: factor weights, hard boundaries, novelty hits, plus an
exportable `scenario_instrument/v1` JSON. This is a different epistemic
move from every earlier generation. v1 mapped the space; v2 attributed
causes within it; the alt hunted vetoes; the lab searches for the edges —
the indifference points where preference flips, probed adaptively rather
than enumerated. The wouldn't-do bucket found the floor; the lab is built
to find all of them.

## Archival discipline: every instrument exports itself

One property unites all four generations: each instrument produces an
exportable primary record, and the record outranks the analysis. v1's
item-level export (122 items, 24-metric vectors, timestamped
2026-09-11T07:31:42Z, archived to raw/sammy/20260911-1944/) reproduces the
profile's load-bearing numbers exactly — the analysis is a faithful
transform, not a reinterpretation. The alt exports `scenario-ratings-alt.json`
under its own localStorage namespace. The lab's brief specifies an
exportable `scenario_instrument/v1` JSON as a first-class output, not an
afterthought.

This is the suite's answer to the wiki's own evidence-layer discipline:
the instrument's primary record is the citable thing, and any report
derived from it must reproduce its numbers or be wrong. It is also why the
entry can state v1's ceiling numbers with high confidence nine days later
— the export exists, the raw archive exists, and the kb nodes cite both.
An instrument whose data cannot be re-read is a story; these instruments
are records.

## The design thread across generations

Four generations, one method. Each generation kept the previous one's
lesson and attacked the remaining failure:

1. **v1** mapped the space and hit the ceiling (64% at 9–10) with a
   correlational attribution flaw.
2. **v2** fixed attribution causally (single-knob modifiers, knob-effect
   deltas) but kept the short ruler.
3. **The alt** kept the ruler but added the wouldn't-do bucket — the veto
   as the most diagnostic signal — and asked "what" where v3 asked "why."
4. **The scenario-lab** removed the ruler (forced choice, Bradley-Terry)
   and grounded the vocabulary outside the builder's head (the tube-site
   taxonomy).

The ceiling was never argued with. It was designed around, four times.
That is the scenario line's whole development method, and it is the same
method as the facial-metric side: the face-library audit killed
two-thirds of its own stimulus pairs rather than measuring on bad inputs;
the telemetry lab's 2026-09-13 corrections renamed a fake bootstrap and
killed a phantom finding. The suite's instruments audit their inputs; the
scenario instruments audit their scales.

## Succession, not replacement

One pattern worth naming explicitly: no scenario instrument has ever been
retired. v1's numbers are still cited nine days later as the baseline every
later instrument is measured against; v2's single-knob design is still the
causal instrument; the alt's wouldn't-do bucket is still the only veto
hunter. Each generation was built because the previous one had a named
failure, but the previous one was never deleted — the suite accumulates
instruments the way the wiki accumulates entries. That is deliberate. The
wouldn't-do thesis ("v3 answers why, the alt answers what") only works if
both instruments stay live: the causal deltas need the vetoes as context,
and the vetoes need the deltas as explanation. When the scenario-lab ships,
it will join the family, not replace it — the forced-choice rankings will
sit alongside the knob-effect deltas and the veto bucket, and the
cross-instrument comparison (do the Bradley-Terry rankings reproduce the
v1 amplifier/moderator ordering?) becomes the next audit. The suite's
instruments check each other. That is the point.

## What the scenario line doesn't measure

The line measures situational preference under conditions Dan controls:
he picks up the instrument, he answers, he exports. It does not measure
preference expressed anywhere else — not in what he shares, not in what he
curates, not in the intimate-media desk traffic of September. The standing
psychosexual-extraction rule (sharing media states no preference) is the
line's outer boundary, and the instruments are careful to stay inside it:
nothing outside a forced choice, a graded judgment, or a rated bout is read
as signal.

The line also does not measure change over time yet. Every instrument is
rerunnable and every run is a dated event, but no cross-run synthesis has
been run on the scenario side — the skill's cross-run synthesis is
"optional on request," and nobody has requested it. The instruments are
ready for a longitudinal question (do the vetoes move? does the ceiling
re-inflate under forced choice over weeks?) that has not been asked. And
the line does not cover the bouts' vocabulary gap: until the preset
correction pass happens, scenario.html v6 runs on the builder's reading of
his one-liners, correctable but uncorrected.

## The deployment discipline: API-only pushes, phone-first clients

The scenario instruments share the suite's deployment pattern: no local
git repo, pushes through the Git Data API via `test/push-via-api.py` (the
same API-only pattern as hook2piano's `push.py`). The record shows what
that buys — the alt instrument was commissioned and live the same day
(2026-09-15), with only a GitHub Pages deploy lag between the push and
the verified-live check. The cost shows up too: the 2026-09-16 workbench
night needed a cache-buster pushed after Dan reported the facial overlay
missing on his phone (stale cached JS), and the scenario-lab brief
specifies phone-first, one question per screen, localStorage resume as
first-class requirements rather than responsive-design afterthoughts. His
phone is the primary client for these instruments — the "who appears in
this run" card, the paste fallback "in case iOS is feeling spicy," the
per-screen flow — and the deploy discipline (cache-bust versions, same-day
verification) exists because a stale instrument on his phone is a broken
instrument. The scenario-lab's held-for-review status is the same
discipline applied before first deploy: nothing ships to the repos until
he has seen it work.

## Complete log

- **2026-09-11:** scenario telemetry v6 and scenario ratings v2 ship in the
  9/11 instrument burst. v1's numbers (121/122, mean 8.36, 64% at 9–10)
  documented; the correlational attribution flaw named and fixed by the
  single-knob design. Preset vectors declared "the builder's reading of
  Dan's one-liners — correctable, not canon."
- **2026-09-12:** the splash page indexes Scenario Ratings and Scenario
  Telemetry as two of the five suite cards.
- **2026-09-15:** the alt instrument ships to his spec (936 items,
  LOVE/LIKE/MEH/NO WAY, wouldn't-do bucket, line-veto + private notes,
  `scenario-ratings-alt.json` export); moves with the suite to
  `Danfr4nk/tools` (`tools/attraction/`).
- **2026-09-18:** the scenario-lab rebuild — 96-category tube-site-grounded
  taxonomy (his explicit order), pairwise forced-choice, Bradley-Terry, 50
  trials — held at `~/workspace/scenario-lab-review/scenario-lab.html`
  for his review, explicit no-push to the repos.

## Status and open questions (2026-09-18)

**The scenario-lab review is the live edge.** When he signs off, the
scenario line has its fourth generation and the ceiling problem is closed
by design rather than by discipline. Until then the build stays out of the
repos — the no-push is his standing quality gate for new instruments, not
a delay, and the review itself is the next dated event this entry will
record.

**The 1–10 grading direction** (his 2026-09-11 order: grade each facial
difference 1–10 on amplification/moderation of preference, with preferred
direction, rather than forcing a binary pick) applies to the facial-metric
side of the suite; the scenario line's answer to the same dissatisfaction
with forced judgments was the opposite move — forced choice instead of
ratings. The two lines disagree about the right primitive, and both are
still live. That disagreement is worth keeping visible rather than
resolving prematurely: the facial side wants graded judgments, the
scenario side wants no judgments at all, just picks.

**Export-schema convergence.** The lab's brief specifies an exportable
`scenario_instrument/v1` JSON as a first-class output. If it ships, that
schema becomes the candidate common format for the whole line — the v1
24-metric export, the alt's `scenario-ratings-alt.json`, and the lab's
`scenario_instrument/v1` converging on one schema would make the
cross-instrument audits above computable rather than manual. Nobody has
asked for the convergence yet; it is the natural next ask after his
review.

**Preset canon.** The scenario.html preset vectors are still the builder's
reading of his one-liners. He has never corrected them, which means they
remain correctable drafts four days in. A correction pass — him marking
which presets are canon and which are misread — would be the cheapest
possible improvement to v6.

## Coverage and limits

This entry covers the scenario instruments as instruments. Preference
*findings* — what the ratings say about him — belong to
[[wiki/mind/psychosexual/scenario-ratings-profile]] and are only summarized
here where they explain an instrument's design (the ceiling, the pegging
floor, the amplifier/moderator deltas). The scenario-lab's taxonomy
contents and scoring internals are not detailed here while the build is
unreleased; this entry records its design, grounding, and status. The
2026-09-15 Lovense-session material is excluded from this entry by standing
order. Human story leads in any people-touching prose per the wiki's rule;
the forensic detail (item-level deltas, export verification) lives in the
kb nodes cited above.
