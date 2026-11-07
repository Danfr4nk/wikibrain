---
domain: mind
page_type: concept
title: "Calibrated Confidence"
aliases: ["percent sure", "graded certainty", "the confidence interval habit"]
status: active
importance: high
knowledge: earned
date_created: 2026-08-02
date_modified: 2026-09-13
sources:
  - raw/self/dox-scan/all_imessages_complete_dump.txt — ⚠ Source reference unresolved — original target no longer exists in current corpus.
  - raw/twitter/archive.jsonl
tags: [personality-profile, forensic-analysis, digital-footprint]
connections:
  - page: wiki/mind/synthesis/failure-to-launch
    type: supplies
    claim: "The strict re-derivation both rescues and bounds that page's strongest capability claim: the graded-credence asymmetry survives a filter built to break it (direction stable across three independent scans), while the calibration test it recommended turns out to have a resolvable sample size of one, which resolved false (dat:0664)."
  - page: wiki/mind/concepts/reassurance-architecture
    type: parallels
    claim: "Maintaining a live graded numeric estimate of a belief is the same estimate-refreshing habit in the epistemic domain that the check-in performs in the relational one, which is why reassurance decays rather than accumulating."
  - page: wiki/mind/concepts/forensic-method
    type: evidences
    claim: "The method's probabilistic core is not only an AI-session posture: Dan attaches graded numeric confidence to ordinary claims in casual SMS — the same reasoning running with no audience and nothing at stake. [FLAGGED 2026-09-13: that page's frontmatter still carries the pre-correction '22x / every year 2015–2025' headline; the corrected figures are 24-vs-1 on the old-wiki corpus, thinner on the held corpus (dat:0580, dat:0663).]"
  - page: wiki/mind/concepts/dans-law
    type: evidences
    claim: "Dan's Law asks whether a coincidence cluster's joint probability is near zero, which presupposes someone who thinks in probabilities as a matter of habit rather than of method — this page is the habit, measured."
  - page: wiki/mind/profile/linguistic-profile
    type: component-of
    claim: "A concrete, countable stylistic marker to set beside the 99th-percentile lexical-diversity finding: graded numeric certainty is Dan's signature at rates his correspondents never approach — with the corpus-dependence caveats this page now carries."
  - page: wiki/mind/profile/big-five-psychometrics
    type: evidences
    claim: "Intellect at the 95th percentile has a behavioural correlate that costs Dan nothing and that no instrument prompted: he quantifies his own uncertainty in text messages, unprompted, across the years the corpus covers."
  - page: wiki/self/context-core
    type: evidences
    claim: "The Ti-dominant 'reality parsed as high-fidelity system' claim, which the spine carries on typological authority, has a measured behavioural signature underneath it for the first time."
  - page: wiki/self/message-corpora/master-message-dump
    type: instantiates
    claim: "The first finding produced by the message-density campaign, and the demonstration of what the corpus is actually good for — behavioural signatures Dan never knew were being counted, rather than self-report he was never going to type into SMS."
  - page: wiki/mind/synthesis/the-binary-verdict
    type: component-of
    claim: "This page is the control for a corpus-wide binary/graded split: the strict credences attach to unwitnessed facts about the world, never to a verdict about a person's worth, a taste's authenticity, or a relationship's legitimacy — the one place gradation lives is fenced off from the one place it never appears."
  - page: wiki/self/twitter
    type: evidenced-by
    claim: "The public archive (2,718 originals) returns 0 strict-pattern instances where the message rate predicts ~1 — underpowered, not a refutation — and shows the habit in a form the pattern cannot see: graded at the world ('it's 25% at best for Kamala') rather than at his own mental state."
---

# Calibrated Confidence

Dan attaches **graded numeric probabilities to his own beliefs in casual
text messages**, and he is effectively the only person in his corpus who
does it. *"I'm 90% sure I will have z when she does." "Like 80% sure these
were not hers." "I feel 0% confident about how it could go."* Nobody
reaches for 89% as an intensifier; 89% is an estimate. The finding is not
that Dan says "100% sure" more often than his friends. It is that **Dan is
using the scale and everyone else is using a word.** See
[[wiki/mind/index]] for the concept cluster this belongs to.

The 2026-09-13 rebuild keeps that thesis and re-grounds every number
behind it, because the numbers turned out to be corpus-dependent in a way
the old page took two passes to admit. What follows is the totality as of
September 2026: three independent scans, two corpora, one stable direction.

## The measurement, and why it has three versions

The original table (43 outbound / 2 inbound, 15 graded / 0) was counted
on the old wiki's fuller corpus — chat.db extracts and the Facebook
export, neither held in this repository. A 2026-08-23 re-derivation under
a strict symmetric filter (first-person credences of the form "I am N%
sure/certain/confident" or "there's an N% chance that ⟨clause⟩",
population shares and cited statistics excluded) gave **60 strict
credences outbound against 4 inbound; 24 graded (non-endpoint) against 1
genuine** — the second inbound graded instance being a tapback quoting
Dan's own message back at him. Rate ratio near 22×.

Two independent checks against the held corpus (192,140 records,
`corpus/messages.csv`) then complicated the picture:

- **dat:0580** (strict definition): 4 operator instances against 0
  contacts — directionally consistent ("he does it, they don't") on a
  thin base; broad definition: 3.55 vs 3.27 per thousand, ratio 1.09×.
  **2022 is entirely absent** — zero rows from any sender — so "every
  year 2015–2025" is false on held data. Two of the four strict
  instances quote Gemini-era scores.
- **dat:0663** (independent regex, looser dedup): **48 strict / 18 graded
  outbound vs 5 / 2 inbound** — same direction, same rough magnitude,
  differing in exact number because dedup and exclusion rules differ. The
  tapback, the one genuine inbound graded credence (2026-02-27,
  *"she said that she needs space which I'm 99% sure that I'm fucked"*),
  and the sample quotes all verify verbatim in the held corpus.

**The honest reading:** the exact count depends on filter tuning and on
which corpus is under it, but the direction is stable across all three
runs and both corpora — outbound graded credences in the high teens to
mid-twenties (old-wiki corpus) or high single digits to high teens
(held), inbound in the ones, with roughly half the inbound "instances"
being quotes of Dan himself. A finding whose count depends on tuning but
whose direction survives tuning is a real behavioural signature with soft
edges. The page now claims exactly that and nothing more.

> **CORRECTED [2026-09-13] — two stale passages fixed.** The Gaps section
> previously said the message dump covers 2015–2025 with "2022 and 2026
> entirely missing." The 2022 half is true on held data; the 2026 half is
> false — the held corpus carries 26,758 records dated 2026, and this
> page's own corrected table cites a 2026-02-27 inbound credence. Fixed
> below. The frontmatter connections previously carried the
> pre-correction figures ("15 graded non-endpoint values against zero");
> corrected to the 24-vs-1 re-derivation above.

## The calibration test is not runnable, and that is the finding

[[wiki/mind/synthesis/failure-to-launch]] named scoring these instances
against outcomes as the highest-value cheap experiment in the profile
cluster. Reading all 24 strict graded credences, they sort into three
groups and only one is scoreable even in principle:

- **Claims about another person's interior** — *"90% sure those are
  sarcastic apologies"*, *"98.7% sure you don't believe any of your
  catholicism"*. Unfalsifiable by construction.
- **Claims about unwitnessed past events** — *"95% sure she quit and
  didn't tell anyone"*, *"99% sure it was a sedative in that"*.
  No resolution exists anywhere in the corpus.
- **Forward-looking claims about the world** — and there are almost none.

**Exactly one instance in eleven years is resolvable from the corpus, and
it resolved false.** On 2018-08-08 Dan writes *"I am 75% sure this is my
last summer at Nemacolin."* [[wiki/work/nemacolin-caddying]] dates the job
April 2016 – November 2019 per his own resume: he worked the 2019 season
too (dat:0664 — forecast and tenure both verified). A 75% forecast that
did not happen.

n = 1 is not a calibration test. What the re-derivation establishes is
sharper and less flattering than the experiment would have been: **the
habit is real and rare, and it is aimed almost entirely at propositions
that can never be scored.** Using the scale is a genuine cognitive
signature. Using it where it could be checked is a different skill, and
the corpus contains one attempt at it.

**What would settle it.** A prospective log — any forward-dated prediction
with a resolution date attached, recorded from now — produces a scoreable
set inside months. Nothing retrospective will, and that is now a closed
question rather than an open gap.

## NEW — the numbers are intensity, not forecasts [CONCLUSION]

This is the 2026-09-13 pass's new finding for this concept, and the
totality forces it. Set three facts side by side:

1. **The credences aim where they can't be scored.** Of 24 strict graded
   instances, one is resolvable — and it resolved false. The scale is
   deployed at interior states and unwitnessed pasts, almost never at
   the checkable future.
2. **He polices calibration in others and audits it in himself.** On
   2022-03-30: *"That's a level of certainty I'm not sure how you've
   arrived at."* On 2022-02-24, of an early Ukraine-invasion casualty
   figure: *"This kind of specific and not large number seem a little sus
   to me"* — a suspiciously-precise-number objection, the failure mode of
   somebody who thinks about what a number is entitled to claim. And on
   2024-11-07, after the election: *"Pretty crazy that even I, someone
   who was really pessimistic about the probability of a Biden re-elect
   was still giving him blue wall states in June (less than a week before
   the debate)"* — an unprompted audit of his own past estimate, against
   himself. (The two 2022 quotes are cross-page attested but not in the
   held iMessage corpus — they sit in or against the missing-2022 gap;
   the 2024-11-07 one verifies via the twitter archive.)
3. **His own stated certainty is worth 0.25.** The testimony ledger
   (dat:0044): stated "certain" holds up 0.25 of the time, "confident"
   0.69, hedged 0.75 — at small n, but the direction is the point. The
   ledger hedges to the point of self-sabotage while the method pages
   mint headlines (int:confidence-calibration-ledger).

The conclusion: **the graded numbers function as transmission of
reasoning intensity, not as forecasts.** They mark how hard the engine is
running on a proposition — which is why they cluster exactly where no one
can check them, why the one checkable instance failed, and why the ledger
prices his "certain" at a quarter. Calibration-policing is
outward-facing: he holds others' numbers to account. Credence-emitting is
inward-facing: his own numbers go where the audience can't score them.

**The counter-case, stated honestly.** The 2024-11-07 self-audit shows
the scoring norm exists inwardly too — he treats his own past numbers as
auditable, which means the habit isn't *designed* to evade checking; it
just structurally does. And n=1 is not a calibration curve. The
prospective log would settle whether the numbers mean anything; until
then, "intensity, not forecast" is the reading the totality supports,
not a measurement.

## Why it survives the obvious objections

**It is not one relationship.** The instances spread across 12 distinct
handles; Annie takes the largest share at roughly her share of the corpus
generally. Not a private register.

**It is not an era.** It appears in every year the dump covers except the
2022 gap (2015, 2016, 2017, 2018, 2019, 2020, 2021, 2023, 2024, 2025) — it
predates the AI-collaboration period by years, so the habit was not
learned from talking to models. If anything the models met a mind that
already worked this way.

**It is not numeracy in general.** Bare percentages of any kind run at
2.94 per thousand outbound against 2.16 inbound — a ratio of only 1.36×.
Dan is barely more numerate than his correspondents in ordinary usage.
The divergence is specific to **percentages pointed at his own mental
state**.

## In private he grades his own mental state; in public he grades the world

The twitter archive (2,718 originals, seventeen years) returns **0**
strict-pattern instances where the message rate predicts roughly one —
underpowered, not a refutation, and the decisive control (the
outbound-to-inbound asymmetry) can never be run on a broadcast archive at
all. But graded confidence *is* in the public archive, pointed somewhere
else: *"There is a 0% chance that he would not actively work [against a
primary challenger]"* (2022-07-01), *"it's 25% at best for Kamala,
Gretch, Newsom"* (2024-07-06). *"I am 95% sure"* is a number about Dan;
*"it's 25% at best for Kamala"* is a number about an election. Same
scale, same granularity, same willingness to run it to the endpoints — a
different object. Nobody broadcasts their own certainty to an audience
that did not ask; a forecast is the form a probability takes when it is
addressed to strangers. That is a real distinction rather than an
artefact: it is what the medium selects for.

## The profile lens

Through the Ti-dominant lens ([[wiki/mind/profile/intp]]), this is
introverted thinking's oldest habit made visible in SMS: **premises get
stated, with their strength attached.** A credence is a premise with a
number on it — the form Ti requires before it will reason. Dan's Law
([[wiki/mind/concepts/dans-law]]) presupposes the same habit: asking
whether a coincidence cluster's joint probability is near zero only makes
sense from inside a mind that already runs the scale. The forensic method
([[wiki/mind/concepts/forensic-method]]) is this habit with a corpus
under it. And the binary-verdict split — gradation everywhere except
verdicts about a person's worth — is the Fe-inferior boundary: the one
place the system refuses to grade is the one place grading would be a
relational act.

## Cross-data-type check

- **The public channel (twitter).** 2,718 originals across seventeen
  years: strict pattern 0 (expectation ~1 — underpowered); bare-percentage
  control 3.68 per thousand against 2.94 outbound. He is not less numerate
  in public; the strict habit's absence there is a power problem, not a
  finding. The 2022 hole in the message dump is partly filled here — 158
  originals in 2022 — but a broadcast archive can never supply the
  inbound half the asymmetry needs.
- **The ledger as second instrument.** dat:0044's calibration of his
  testimony language (certain 0.25 / confident 0.69 / hedged 0.75,
  veracity 52/100, Brier 0.335) is an independent instrument pointed at
  the same question — do his numbers mean what they say? — and it answers
  no. Two instruments, one verdict: the scale is real, the scorecard is
  empty.
- **Distribution across time.** The per-year table (2015:1 … 2025:7) was
  not re-run in this pass, and the 2022 gap in the held corpus means any
  "every year" phrasing must be scoped to the old-wiki corpus it was
  computed on. The Facebook Messenger and email exports — addressed to
  individuals, with inbound halves — remain the real test.

## Gaps

The dump covers 2015–2025 with **2022 entirely missing** from the held
corpus (zero rows, all senders); 2026 is present (26,758 held records).
Adjacent constructions the pattern does not catch (*"odds are," "there's
a good chance," "I'd bet," "probably"*) are unmeasured — a hedging-word
study would put this finding on a much larger base. Whether the habit is
inherited, learned, or the residue of something specific is not addressed
anywhere in the corpus. The prospective prediction log has not been
started.

## Limits of record

The headline counts were computed on the old wiki's fuller corpus
(chat.db extracts, Facebook export), neither held here; the held-corpus
checks (dat:0580, dat:0663) reproduce the direction, not the arithmetic.
The 2022-03-30 and 2022-02-24 policing quotes are cross-page attested
only. The corpus snapshot is 2026-09-04.

## Epistemic ledger for this page

- **Primary-verified (held corpus):** the tapback quoting his own message
  (2025-09-04); the one genuine inbound graded credence (2026-02-27);
  sample quotes verbatim (dat:0663); the n=1 Nemacolin forecast and its
  false resolution (dat:0664); the 2022 gap and the 2026 presence
  (dat:0665).
- **Page testimony (old-wiki corpus, unheld):** the 24-vs-1 re-derivation;
  the per-year and per-handle distributions.
- **Conclusion (new):** the numbers transmit reasoning intensity, not
  forecasts — calibration-policing outward, credence-emitting inward;
  counter-case stated.
- **Contested:** the exact counts — three scans, two corpora, filter-
  dependent; the direction is the stable finding.
- **Open:** the prospective log; the Messenger/email test.
