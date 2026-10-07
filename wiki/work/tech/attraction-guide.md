---
domain: work
page_type: entity
title: "Attraction Guide (instrument suite)"
status: active
knowledge: earned
tier: major
date_created: 2026-09-12
date_modified: 2026-10-07
changelog:
  - "2026-10-07: Restructured to canonical template v1; expanded to major tier with the Sep 13 audit pass, Sep 14 reliability program, lexicon v0.1 detail, and pair-validity findings."
sources:
  - "raw/sammy/20260912-1940/"
  - "src:wall-photo-2025-09-03"
  - "raw/sammy/20260914-0340/ (same-face reliability series, dat:1529)"
  - "raw/sammy/20260914-0630/ (telemetry hardening report, dat:1541)"
  - "kb/data/0063-telemetry-v2-pair-validity-audit.md"
  - "kb/data/0064-telemetry-v2-instrument.md"
  - "kb/data/1462-frame-describe-lexicon-20260912.md"
  - "kb/data/1529-telemetry-same-face-reliability-20260913.md"
  - "kb/data/1541-telemetry-hardening-20260914.md"
  - "kb/data/1628-telemetry-v33-20260916.md"
  - "workspace skill facial-preference-mapping (game runbook mechanics)"
tags: [ai-collaboration, instruments, psychosexual, facial-preference]
connections:
  - page: wiki/mind/psychosexual/scenario-ratings-profile
    type: parallels
    claim: "Scenario Ratings measures what he wants; Frame Describe standardizes how he sees. Two halves of the same attraction-instrument stack."
  - page: wiki/people/kristin.md
    type: extends
    claim: "The Wall (Aug 2025) was built as an evaluation device for Kristin's take, weeks before first direct contact — the analog predecessor of the face library."
  - page: wiki/work/tech/avatar-chronology.md
    type: parallels
    claim: "Sibling build log from the same September-2026 face-generation window — the avatar chronology tracks his generated faces while the guide tracks what he finds attractive in them."
---

# Attraction Guide (instrument suite)

The attraction guide is Dan's deployed instrument suite for mapping what
he finds attractive — six web tools live at
<https://danfr4nk.github.io/attraction-guide/> (repo
`Danfr4nk/attraction-guide`; pushes go through the Git Data API, no
local git repo): the Diagnostic A/B portrait game, the Telemetry Lab,
Scenario Ratings, Scenario Telemetry, the Face Book, and Frame Describe.
A splash page indexing the whole suite went live 2026-09-12 (commit
`c798ca6`): cards for the Diagnostic, Telemetry Lab, Scenario Ratings,
Scenario Telemetry, and Face Book; the game itself moved to
`/game.html`.

Why it exists is a year older than the code. In August 2025 Dan covered
a basement wall with dozens of printed black-and-white women's portraits
— built, by his own contemporaneous texts, as an evaluation device: "we
need to show kristin my wall of despair to get her take." The suite is
that exact gesture at two fidelities. In 2025 the display is physical,
built for one woman's judgment; in 2026 it is a 155-face digital library
with a ~40-metric telemetry vector and a formal A/B game. Collect
women's faces into an organized display to systematize what he finds
attractive — the Wall already framed the collection as something to be
*evaluated*, and the diagnostic game is that evaluation formalized.

What makes the suite his rather than generic is the ground truth it is
built against: his own taste, instrumented until the instrument holds
still. The record shows him auditing these tools as hard as he uses
them — the September 13 pass where the Telemetry Lab confessed its
detector was lying to it, the September 14 program where a same-face
reliability stress test returned zero stable metrics and he commissioned
a full hardening pass instead of accepting the loss. The operating
principle he keeps enforcing, in his own words of commission on
September 14: "I want you to make this as good as it can possibly be."
Audit the instrument, then trust it.

## The Diagnostic game

The Diagnostic (game v2) is the staged A/B portrait game that maps his
facial preferences directly. Phase 1 is broad — a few rounds of four
portraits varying systematically across the broad axes (face shape, skin
tone, age band, hair color/style/length, eye color, soft vs sharp vibe),
the pick held and the unresolved axes re-varied. Phase 2 is the fine
drill-down: pairs of portraits differing on one micro-variable only —
jaw sharpness, chin projection, cheekbone height, eye spacing and size,
eyelid shape, eyebrow thickness and arch, nose width, bridge and tip,
lip fullness, philtrum length, forehead height, face width-to-height
ratio — with optional per-feature A/B rows shown for each materially
different metric (|z| ≥ 0.5).

The scoring is what makes it an instrument rather than a game. Per the
game's own runbook, phase-2 picks are scored on *measured* metric deltas
(winner − loser), z-scored against bank statistics — evidence accrues
per metric direction, never per prompt label. The next pair is the
highest-uncertainty open axis (initial sweep first, then fewest
target-consistent trials); an axis retires at 3 consistent
target-direction wins or 6 inconclusive trials. Two safeguards are
engineered in: a round is flagged if a non-target metric moved harder
than the target (confound flagging), and pairs are auto-excluded when the
audit validity bar fails — target z below 1.5 or a confound dominating.
The deployed game carries a "who appears in this run" card with a
two-level group picker (group → subgroup, all selected by default) and a
presenting-as selector, with perceived group, subgroup, and sex tags on
every face record in faces.json so filters stamp into the run state and
summary.

The pair-validity audit (dat:0063, dated 2026-09-11) is the instrument's
receipt: a full-bank v2 audit admitting 17 of 50 pairs — lips 11, nose
3, brow 3 (proxy-weak). Jaw: zero admitted — the edits were confounded,
asymmetry and mouth moved more than the gonial. Eyes: zero admitted —
spacing edits never moved spacing, while tilt and size moved instead.
One finding reproduces across builders: the jaw-sharp inversion — the
generator reads "sharper" as *wider*, i.e. a larger gonial angle. The
game does not pretend to measure what it cannot isolate; the audit is
the mechanism by which it says so.

## The Telemetry Lab

The Telemetry Lab (`telemetry.html`) is the measurement backbone: a
~40-metric MediaPipe face vector over the library. The v2 instrument
(dat:0064) added the gates that make refusal possible — a quality vector
with pass/warn/fail so the instrument refuses bad inputs instead of
numbering them (18/18 bank faces pass); an iris-anchored millimeter
scale (11.7mm iris, IPD 60.2–64.1mm, adult-plausible); contour areas (eye
fissure, lip vermilion); true 3D pose via offline solvePnP (|yaw| ≤
1.3°, |pitch| ≤ 5.3°, frontal as expected); per-side decomposition,
mouth-corner drop, and brow apex angle. V1/v2 parity on shared keys:
maximum absolute difference 0.0. The JS port cross-validated 27/27
against the Python reference — with a standing caveat, below.

### The September 13 audit pass

On 2026-09-13 Dan ran an improvement pass over the lab and it turned
into an audit — the kind where the instrument confesses:

- **Pose, decomposed.** The face transformation matrix was broken out into
  explicit pitch/yaw/roll instead of one opaque transform, so pose effects
  can be read off directly instead of hiding inside a black-box matrix.
- **"Bootstrap" renamed.** The resampling step was called a bootstrap; it
  wasn't one. It's landmark-noise jitter now — the new name says what the
  code actually does, and stops laundering a statistical claim the
  instrument never earned.
- **Honest uncertainty.** The Wilson score interval display was corrected
  to show its real states: n=0 and n<4 now render as what they are —
  no-data and thin-data — instead of drawing confident-looking intervals
  over nothing.
- **Ethnicity selector from the actual bank.** The selector is populated
  from the face library's real groups now, not a generic list that implied
  coverage the bank doesn't have.
- **Geometry in pixel space, roll-corrected.** Landmark geometry moved to
  pixel space with roll-corrected canthal tilt — the tilt metric no longer
  inherits head-roll as if it were facial structure.
- **The heavy tail was the detector.** The phase-1 adiposity "heavy tail"
  — the thing that looked like a real distributional finding about his
  preferences — traced to a detector artifact. After the fix the reported
  SD collapsed 0.0364 → 0.0155. The actual remaining confound moved to the
  phase-2 jaw-soft variants, where it belongs.

Harness: 55/55 checks green after the pass. Still open: the JS drift audit
is blocked pending harness infrastructure. The JS port's 27/27
cross-validation against the Python reference (noted above) predates these
corrections — the port needs re-validation against the corrected lab.
Evidence: `dat:1505-telemetry-lab-methodology-corrections-20260913` —
⚠ source reference unresolved: no corresponding datum node exists under
kb/data as of 2026-10-07 (see References).

### The September 14 reliability program

The audit bought him a better instrument; the next night he asked what it
could actually hold. The same-face reliability series (dat:1529,
03:32–03:39Z on September 14) ran seven captures of the same face
through the lab and came back with a verdict that would have ended a
less committed program: **zero metrics stable** — within-face SD
exceeded 0.74× the full 155-face bank's between-face SD on all 60
comparable metrics, most at 2–34×. But all seven captures were
low-quality, high-pose (yaw spanning 62°), so the lab had measured the
photo, not the face — expected, and the quality gate proved it was
working: 7/7 captures were flagged low-confidence (33–51) and frontality
0–23. The system said *don't trust these*, every time. The series also
produced the first pose-robust readings — gonial mean (0.13 bank-SD),
mouth-to-nose (0.31), jaw-to-cheek (0.48) held across a capture pair —
and one real bug: eye width-to-height read 23.7 on a capture at −16°
yaw, where eye height collapses toward zero and the ratio explodes —
flagged as a landmine needing a cap.

At 03:39Z Dan commissioned the full program, in his words: "I want you
to make this as good as it can possibly be" — per-metric
pose-robustness ranking from all nine same-face captures, a
denominator-collapse audit across every ratio metric (the 23.7 blowup as
regression test), pose-contamination flagging in the HUD and exports,
quality-gate calibration, and a decision memo on the roundness rename.

The hardening report landed at 04:00:04Z on September 14 (dat:1541;
commits `f1d594d` and `9187076` confirmed live), closing the loop the
reliability series had opened: canthal roll correction fixed; tilt drift
vs the September 11 baseline reduced to 0.012°; denominator guards
replaced the fabricated `|| 1` values; 35/35 guard tests passed; metric
robustness classified 25 robust / 6 moderate / 16 fragile / 1 unknown;
quality policy set to warn-and-report; the A/B checkbox explanation
added inline. One rename stayed undecided: "fWHR (proxy)" → "cheek:
midface height." The shape of the work is the standing pattern — he
commissions the measurement, then commissions the audit of the
measurement.

Adjacent body-telemetry work shipped v3.3 on September 16 (dat:1628):
an optional modeled `apex_projection_mm` override for the body-telemetry
tool, fixing his failed acceptance test — his words, "I honestly can't
tell the difference between the two other than the obviously bigger
areolas," where both renders had been the same teardrop at two scales.

## Scenario Ratings

Scenario Ratings (`scenario-rate.html`) is the other half of the
attraction-instrument stack from the Diagnostic: where the game maps
*what faces he picks*, Scenario Ratings measures *what scenarios he
wants*. The v2 instrument is a causal single-knob design: every modifier
changes exactly one metric vs its base (168 modifiers, deterministic
rotation, each metric perturbed 6–8×); the readout is causal knob-effect
deltas.

The v1 run it supersedes is documented on the scenario-ratings profile
page: on 2026-09-11 Dan rated 121 of 122 constructed erotic scenarios on
a 1–10 gut scale (mean 8.36, 64% at 9–10, veto never used), the deltas
between single-detail variants carrying the cleanest evidence in the
set. V1's limits are stated once on that page and carried here as the
instrument's operating envelope: v1's readout is correlational; her
attractiveness and taboo charge were held constant by design (control
variables, not findings); stated preference, one sitting, n=1 — it
predicts ratings, not behavior. V2's causal deltas supersede v1's
attribution. An alternate instrument (LOVE/LIKE/MEH/NO WAY + a
wouldn't-do bucket) is built and waiting on his playthrough, per the
standing order that the psychosexual profile rewrite waits on its
export.

## Scenario Telemetry

Scenario Telemetry (`scenario.html`) takes the scenario side from
judgment into measurement: a named preset picker — foursome, her ex,
she watches, the 2019 baseline — where phase 1 is preset bouts and phase
2 is metric isolation. It is the least documented instrument on this
page; its design mirrors the Diagnostic's two-phase shape, with the
presets standing in for the game and the isolation step doing the work
the single-knob modifiers do in Scenario Ratings.

## Face Book

The Face Book (`face-book.html`) is the browsable catalog of the
155-face library the whole suite runs on: 32 phase-1 faces, 111 phase-2
variants, 12 anchors. It is the digital form of the Wall — the
collection as an organized display — and the raw material the Telemetry
Lab measures and the Diagnostic draws its pairs from. Every portrait in
it is synthetic; the bank's real composition is what the lab's
ethnicity selector was corrected to reflect.

## Frame Describe

Frame Describe (`frame-describe.html`), live 2026-09-12, is the odd one
out by design: an open-ended, exhaustive frame/body description tool,
deliberately not precision-based. Dan commissioned it at 15:23 ET as "a
totally new tool... an exhaustive description in my terms, not based in
precision." Before building, the assistant trawled 99k of his outbound
texts for body-descriptor vocabulary and reported an honest thin result
— the attested hits ("frame," "perfect body," "nice tits," "juicy ass")
couldn't carry an instrument — so the tool was built on Dan's supplied
terms instead (his Shelbie Rose example came at 19:46Z; the tool was
live at 19:47:37Z). Provider-agnostic: bring your own vision API key
(stored in localStorage), with per-run custom instructions.

### The Frame Describe lexicon v0.1

Committed 2026-09-12, in his own terms:

- Subject noun: **"girl"**
- Lead line grammar: `[hair] [single defining trait] girl`
- **"titties"** — cup size always estimated, never hedged
- **"babyfat"** — soft stomach
- **"tats"** — never "tattoos"; ink coverage in degrees
  ("360° neck tats," "full sleeves")
- Output sections, in order: **lead / body inventory / ink inventory /
  face report / aura** — the aura being "the major visual and
  psychosexual theme in her aura"

This is the first committed record of his descriptive vocabulary for
women's bodies as an instrument grammar — the earlier attested body
terms ("frame," "jelly," "mogged," "perfect," "delicious," "juicy,"
"nice") remain valid but were never organized into one. It pairs with
the scenario-ratings profile as the second half of the
attraction-instrument stack: ratings measure what he wants, Frame
Describe standardizes how he sees (dat:1462, the contrastive-specification
shape — the wrong/insufficient answer became the probe, and his
correction became the durable instrument).

## The Wall (August 2025): the analog predecessor

A year before any of this instrumentation existed, Dan built the same
impulse out of paper. Over Aug 1–2, 2025 he covered a basement wall with
dozens of printed black-and-white women's portraits, interspersed with
text and graphic prints — a "GPT" banner, a BLACK FLAG-style logo, a
tarot/occult poster (pentagram with elemental correspondences), "I'M OK,"
an OAKLAND RAIDERS shirt graphic, "BORN TO RAID / EST. 1960," a
hand-drawn "ARE YOU...?" graphic, a roast-joke picture bottom-left
("boom fuckin roasted dude"), and what he called "a fucking brand new
deja reference." He photographed it 2025-09-03 at 04:42 on his iPhone 14
— a month after construction, so the surviving photo is a later document
of the Wall, not its creation moment. Every portrait subject is
unidentified; no nudity or sexual activity is visible.

What the Wall was *for* is stated outright in the contemporaneous texts.
At 2025-08-03 00:38 he told Tom Maison: "we need to show kristin my wall
of despair to get her take." Then, at 00:39: "SHE NEEDS TO SEE THE WALL
TOM" / "THE WALL IS ALL I HAVE NOW" / "well milo, and the wall." The
collection was an evaluation device from the start — built to be judged,
by one specific woman. On Aug 26 he sent Kristin a photo of it while
wearing a shirt reading CUMSLUT and asked Tom whether that was good or
bad news ("the big beautiful wall of pain"). Tom's suggestion on Aug 5 —
"You should put a picture of Kristin on your wall" — landed while Dan
didn't even know her last name ("YOU WON'T EVEN TELL ME HER LAST NAME").
The Wall predates his first direct contact with Kristin (Aug 29, per the
Kristin timeline) by nearly four weeks: he built a shrine of women's
faces *for* a woman he had never spoken to, with Tom as the intermediary
who knew her.

The through-line to the instrument suite is curatorial, and it is the
same gesture at two fidelities: collect women's faces into an organized
display to systematize what he finds attractive. In 2025 the display is
physical, built for one woman's take; in 2026 it is the 155-face digital
library with a 40-metric telemetry vector and a formal A/B game. The
Wall's stated purpose already frames the collection as something to be
*evaluated* — which is exactly what the diagnostic game later
formalizes. Nothing about the Wall exists anywhere in the wiki before
this intake; it lived only in the August 2025 texts until Dan sent the
photo on 2026-09-12 captioned "The famous 'wall' from the pre Kristin
summer 2025 era" — pointing, a year later, at the origin story of the
curation instinct the whole suite now runs on.

<!-- INLINE-KEEP (thumbnail rule 2026-09-12): the Wall photo is the object of analysis for this entry — the Wall itself is the entry's subject. Do not migrate to Sources thumbnails. -->
![The Wall, photographed 2025-09-03: dozens of printed B&W women's portraits on a basement wall, with text and graphic prints](wiki/media/upload-029.jpg)

One false lead, cleared: "he decorated that whole wall himself he was
super specific about what he wanted" (Aug 5, 02:26) is a deadpan 2 AM
joke about Milo the dog wanting a king bed — the "he" is the dog, not a
second builder and not a second wall.

Evidence: `dat:wall-built-20250801-02`, `dat:wall-purpose-kristin-take`,
`dat:wall-contents-per-texts-20250803`, `dat:wall-cumslut-photo-20250826`,
`dat:wall-milo-joke-false-lead-20250805`,
`dat:wall-tom-kristin-picture-suggestion`,
`dat:wall-photo-exif-20250903`, `dat:wall-photo-visual-read`
(sources: `src:imessage-corpus-2026`, `src:wall-photo-2025-09-03`).
Pattern: `pat:wall-as-analog-face-library`.
See also: [Kristin Prentiss](wiki/people/kristin.md).

## Conflicts in the record

- **2026-09-12: v1 correlational vs v2 causal.** The Scenario Ratings v1
  instrument (2026-09-11; 121 of 122 rated, mean 8.36) reads out
  correlations, not causes — every v1 finding on this page and the
  scenario-ratings profile page is carried as a correlation pending the
  v2 causal knob-effect deltas (168 single-knob modifiers, each metric
  perturbed 6–8×). The v2 design supersedes v1's attribution; it does not
  retract v1's ratings. A v3 tube-sweep export (2026-09-30; 46 of 234
  rated, mean 8.39, several exposure-ward modifiers excluded rather than
  rated) sits on the profile page and is not yet folded into this
  page's instrument description.
- **2026-09-13: the JS port needs re-validation.** The Telemetry Lab JS
  port's 27/27 cross-validation against the Python reference predates
  the September 13 methodology corrections — it certifies the port
  against the lab as it was *before* the audit, not after. The JS drift
  audit is blocked pending harness infrastructure. Current standing:
  unresolved; the port's certification is stale against the corrected
  instrument.
- **2026-09-13 vs 2026-09-14: audit then reliability, in that order.**
  The September 13 methodology corrections came first; the September 14
  same-face reliability program (dat:1529) ran against the corrected
  lab — its zero-stable-metrics verdict and the hardening report
  (dat:1541) are findings about the *corrected* instrument, not the
  pre-audit one. The sequence matters: none of the September 14 numbers
  can be read as evidence against the pre-correction lab.
- **Evidence pointer with no node.** This page's live original cites
  `dat:1505-telemetry-lab-methodology-corrections-20260913` for the
  September 13 audit; no corresponding datum node exists under kb/data
  as of 2026-10-07. The audit's events are corroborated downstream
  (dat:1529's program was commissioned in response to the lab state the
  audit produced; dat:1541's hardening closes it), but the node itself
  is missing. Flagged here rather than silently dropped.

## Assessment

The attraction guide is the most literal case in the corpus of Dan's
standing instrument pattern: he commissions the measurement, then
commissions the audit of the measurement. The Diagnostic's pair-validity
audit, the Telemetry Lab's September 13 confession pass, the September
14 same-face reliability verdict and hardening program — each round
makes the instrument smaller in its claims and harder in its evidence.
A preference-mapping pipeline that can't tell you when its own detector
is lying to it isn't measuring Dan; it's measuring itself. That line is
not a gloss on the work — it is the work.

Two honesty moves in the record are load-bearing. The "bootstrap" that
wasn't one got renamed to landmark-noise jitter, refusing to launder a
statistical claim the instrument never earned. The assistant's 99k-text
lexicon trawl came back thin instead of hallucinating a vocabulary, so
Frame Describe got built on Dan's supplied terms — the
contrastive-specification shape, where the insufficient answer becomes
the probe and his correction becomes the durable instrument.

The limit stays on the instrument's operating envelope: stated
preference, one sitting, n=1. The suite predicts his ratings, not his
behavior — the profile page's convergence/divergence section against the
documented behavioral record is where that boundary is tested. The suite
is also, deliberately, not a neutral instrument: it measures one person's
taste, and every gate in it (pair validity, quality refusal, confound
flagging) exists to keep the measurement honest about whose taste it is.

## See also

- [[wiki/mind/psychosexual/scenario-ratings-profile]] — the v1 ratings
  profile the v2 causal instrument supersedes; the suite's "what he
  wants" half.
- [[wiki/people/kristin]] — the Wall's intended audience; first direct
  contact Aug 29, 2025, nearly four weeks after the Wall was built for
  her take.
- [[wiki/work/tech/avatar-chronology]] — sibling build log from the same
  September-2026 face-generation window.

## References

- raw/sammy/20260912-1940/ — chat transcript behind the suite launch
  and the Frame Describe lexicon.
- src:wall-photo-2025-09-03 — the Wall photograph (04:42, iPhone 14).
- raw/sammy/20260914-0340/ — same-face reliability series (dat:1529).
- raw/sammy/20260914-0630/ — telemetry hardening report (dat:1541).
- kb/data/0063-telemetry-v2-pair-validity-audit.md — Diagnostic
  pair-validity audit (17/50 admitted).
- kb/data/0064-telemetry-v2-instrument.md — Telemetry Lab v2 instrument
  spec.
- kb/data/1462-frame-describe-lexicon-20260912.md — lexicon v0.1 + suite
  launch.
- kb/data/1529-telemetry-same-face-reliability-20260913.md —
  reliability verdict + full improvement program.
- kb/data/1541-telemetry-hardening-20260914.md — hardening report.
- kb/data/1628-telemetry-v33-20260916.md — body-telemetry v3.3 apex
  projection fix.
- Workspace skill facial-preference-mapping — game runbook mechanics
  (phases, axis queue, confound rules, face-bank tagging).
- ⚠ Source reference unresolved: `dat:1505-telemetry-lab-methodology-
  corrections-20260913` is cited on this page's live original but no
  corresponding datum node exists under kb/data as of 2026-10-07.
