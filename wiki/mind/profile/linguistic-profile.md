---
domain: mind
page_type: profile
title: "Linguistic Profile — Voice, Register, Stylometrics"
aliases: ["voice", "stylometrics", "forensic intimacy"]
status: stable
tier: major
date_created: 2026-07-13
date_modified: 2026-10-07
sources:
  - raw/imessage/messages-part1-2011-2019.csv
  - raw/imessage/messages-part2-2019-2026.csv
  - raw/imessage/messages-master.csv
  - raw/twitter/tweet-archive.csv
  - raw/self/dox-scan/all_imessages_complete_dump.txt — ⚠ Source reference unresolved — original target no longer exists in current corpus.
  - raw/self/dox-scan/Dan Profile.txt — ⚠ Source reference unresolved — original target no longer exists in current corpus.
  - raw/self/dox-scan/ANALYSIS_ Linguistic.rtf
  - raw/self/context-core/CONTEXT_CORE_EXPANDED.md — ⚠ Source reference unresolved — original target no longer exists in current corpus.
  - raw/self/dox-md/Phase_2_Stylometric_Analysis.md — ⚠ Source reference unresolved — original target no longer exists in current corpus.
  - raw/mind/captures/2026-08-27_013705_gap-linguistic-profile.md — ⚠ Source reference unresolved — original target no longer exists in current corpus.
  - bin/text-metrics (turn-level recomputation instrument)
changelog:
  - date: 2026-10-07
    change: "Expanded to major tier: restructured to canonical template (corrections moved to Conflicts in the record), merged turn-level structure from the deviance audit, added independent re-verification of fingerprint markers against the raw part-exports."
related:
  - wiki/mind/profile/index
  - wiki/mind/profile/deviance-mapping
  - wiki/mind/profile/voice-modes
  - wiki/self/context-core
  - wiki/self/twitter
tags: [trauma-bond]
connections:
  - page: wiki/mind/synthesis/failure-to-launch
    type: evidences
    claim: "A custom-built fork of English is the clearest case in the profile of a genuine outlier capacity attached to a nearly empty market - high-fidelity to models and niche in-groups, maladaptive as a professional interface."
  - page: wiki/mind/concepts/calibrated-confidence
    type: contains
    claim: "A countable stylistic marker to set beside the 99th-percentile lexical-diversity score: Dan uses the confidence scale (75, 80, 89, 90, 95, 99.9999) where every other person in the corpus uses '100%' as a synonym for 'definitely'."
  - page: wiki/mind/profile/voice-modes
    type: parallels
    claim: "This page's audience-based code-switching (romantic/platonic, supportive/conflict) and voice-modes.md's eight emotional-state modes are two independent organizing axes over the same baseline mechanics — who he's talking to and how he feels modulate register separately."
  - page: wiki/mind/synthesis/the-commissioned-self
    type: component-of
    claim: "Stylometry belongs to the same apparatus and inherits its provenance problem — a 99th-percentile finding produced at Dan's request over a corpus Dan supplied — which is why the one voice marker independent of it, graded numeric confidence, had to be found by counting rather than by asking."
  - page: wiki/mind/profile/texting-deviance-audit
    type: contradicts
    claim: "Recomputation against the corpus falsifies three of this page's measured markers: texting readability is Flesch-Kincaid 4.00 in 2026 rather than post-graduate, 2025-26 lexical diversity is below his interlocutors' (0.0509 vs 0.0544 on equal samples) rather than 99th-percentile, and the 8.36 words/message burst figure is a 2015-19 baseline against a 2026 figure of 15.03."
  - page: wiki/interests/language/vocabulary-lexicon
    type: evidenced-by
    claim: "The register theft this page documents for description — clinical, military and philosophical vocabulary borrowed upward to make ordinary observation sound forensic — is the same move his commissioned insult batch makes for contempt: sorted by mechanism rather than intensity, with 'a man of no small stupidity' as the clean case of a dignified grammatical shape carrying a devastating payload. The difference in evidentiary weight is the point: this page's registers were measured against the corpus, that page's were merely selected as pleasing."
  - page: wiki/interests/opie-and-anthony
    type: caused-by
    claim: "The callous, riff-driven, gallows-irony register the profile calls a 'psychic ventilator' is the native dialect of the O&A universe — this binge is where that idiom was trained."
  - page: wiki/self/twitter
    type: evidenced-by
  - page: wiki/mind/profile/big-five-psychometrics
    type: parallels
    claim: "Big Five / Big30 Psychometrics runs the audit this page's measurements anchor: a dossier table of scores, each turned into a directional prediction and checked against the held records."
    claim: "The public half of the two-corpus voice proof: 2,718 dated originals written for an audience, against the private message corpus written for one person, which is what lets the profile separate a stable voice from a register chosen per reader."
---

# Linguistic Profile — Voice, Register, Stylometrics

Dan's language is one of the most-measured things about him. Two independent
corpora — roughly a hundred thousand of his iMessages spanning 2010–2026 and the
@danfrank Twitter archive reaching back to 2009 — show a single stable voice
holding across audiences, platforms, and sixteen years. The commissioned
stylometric analyses described it as "forensic intimacy": clinical detachment
fused with raw personal confession, optimized for information density and
emotional precision, with a near-total absence of social filler. Per the
deviance audit, it scores 97/100 on linguistic deviance — a custom-built fork
of English, an outlier capacity attached to a nearly empty market.

What a reader actually feels as density, though, is not what the early analyses
said it was. Recomputation against the message record killed the headline
lexical claims — the post-graduate readability, the 99th-percentile vocabulary —
and replaced them with something narrower and stranger: the voice is not
lexically exotic at all. It is *syntactically* heavy and *socially* unpadded.
Sentences run 1.93× his interlocutors' length, conversational filler runs 41%
below theirs, and one turn in nine delivers a three-paragraph essay that gets
read less and abandoned more. The idiom was already present in 2009 tweets —
it is architecture, not platform artifact. This page documents the architecture:
the measured fingerprint, the punctuation and syntax mechanics, the borrowed
registers, the rhetorical machinery, the audience and emotional axes that bend
the voice without breaking it, and the prospective instruments he commissioned
in 2026 to watch the voice live. The corrections live low, where they belong,
in Conflicts in the record.

## The measured fingerprint

The table below is the current standing set of countable markers. Where a
marker comes from the commissioned analyses, it says so; where it was
recomputed directly from the corpus, the source export is named. A 2026-10-07
independent re-verification pass ran the same markers against the two raw
iMessage part-exports (`raw/imessage/messages-part1-2011-2019.csv`,
`raw/imessage/messages-part2-2019-2026.csv` — 99,319 Dan messages, 91,979
interlocutor messages) and is cited inline where it confirms, refines, or
qualifies an existing figure.

| Marker | Value |
|--------|-------|
| Burst cadence | 8.36 words/message avg, 3–7 discrete bursts — 2015–19 baseline only; 15.03 in 2026 (independent check on the part-exports: 14.91 in 2026) |
| Lowercase share | 80%+ of text (commissioned analyses); the comparison-anchored marker is the **lowercase opener: 31.0% of Dan's messages start lowercase vs 1.6% of his interlocutors'** (19× gap, verified 2026-10-07 across both part-exports; 25.0% vs 2.3% in the 2026 slice alone) |
| ALL-CAPS instances (vocal emphasis) | 9,282 (commissioned analyses; instances, not messages) |
| Ellipsis `...` (breath mid-burst) | 1,661 in the deep export (commissioned analyses); independently, 1.56% of Dan's messages contain an ellipsis vs 0.82% of interlocutors' — a ~2× elevation |
| Unique words | 23,286 total types in the deep export — but **type-token ratio in 2025–26 is 0.0509 against interlocutors' 0.0544**; see Conflicts in the record |
| `just` / `like` / `even` | 6,847 / 5,522 / 1,971 in the deep export; per-thousand-word rates on the part-exports: just 8.14 vs 7.78 (near-parity with interlocutors), like 7.49 vs 5.23, even 2.82 vs 1.51 |
| `fucking` (intensifier) | 1,745 in the deep export; independently 3.18 per 1,000 words vs 2.05 — a 1.55× elevation |
| `because` (justification compulsion) | 2,465 in the deep export; independently 2.93 per 1,000 vs 2.43 |
| `i don't` / `i'm not` (identity-by-negation) | 1,845 / 814 in the deep export; independently present in 0.97% / 0.43% of Dan's messages vs 0.55% / 0.21% — roughly a 2× elevation |
| Readability | **Flesch-Kincaid 2.08 (2015–19) to 4.00 (2026)** — see Conflicts in the record |
| Sentence length | **10.83 words/sentence in 2026 vs 5.62 for his interlocutors (1.93×)** — the single largest lexical deviation in the corpus, and what a reader experiences as density |
| Conversational filler | 10.1 per 1,000 vs 17.1 — 41% below interlocutors; the mirror of the sentence-length row |

Pivot words — `actually`, `honestly`, `literally` — mark the documented turn
from cynical observation to vulnerable truth inside a message run. They are
genuinely elevated in his output: per 1,000 words on the part-exports,
`actually` 1.10 vs 0.55 (2.0×), `honestly` 0.54 vs 0.36, `literally` 0.94 vs
0.55 (1.7×). That elevation held on the independent verification pass, which
is worth saying because the "just" rate did not — `just` is essentially at
parity (8.14 vs 7.78 per 1,000), a reminder that raw counts without a
comparison group flatter. Every marker worth keeping on this page carries
one: the interlocutors' side is the control.

The graded numeric confidence scale — 75, 80, 89, 90, 95, 99.9999, per the
calibrated-confidence connection on this page — is the one voice marker that
was found by counting rather than by asking, and it is worth keeping exactly
because the rest of the stylometry shares the provenance problem of the
apparatus that produced it. The 2026-10-07 verification pass partially
qualified the connection's framing ("every other person in the corpus uses
'100%' as a synonym for 'definitely'"): across the two iMessage part-exports,
graded values appear on *both* sides (Dan: 75×24, 80×53, 89×2, 90×58, 95×9;
them: 75×67, 80×67, 90×35, 95×12), with bare-`100`/`100%` dominant on both.
The Dan-only token is "89" (2 instances, 0 on the other side) — a fine-grained
quirk inside a scale that is shared, not exclusive. The exclusivity claim may
reflect the AI-session corpus rather than the texting corpus; see Conflicts
in the record. That is not a retraction of the marker — it is the marker at
its actual size.

## The turn, not the message, is the unit of speech

The headline correction the deviance audit made to this page is structural,
not lexical: the unit that corresponds to "one thing said" is the **turn** —
a maximal run of consecutive messages from one side in one thread, split
when the same side pauses more than 30 minutes — and measured that way, he
runs 3.05× his interlocutors' words in 2026 against 1.23× in 2015–19.
Ninety-eight percent of his messages are a single line with a median of six
words, so a message-level read makes him look unremarkable; the turn-level
read finds the single mode that carries his voice. (Reproduced by
`bin/text-metrics`, committed alongside the audit precisely so the numbers
can be re-run rather than trusted — the instrument is in the repo because
the audit's subject is a self-commissioned one.)

The ratio series is the finding: 1.23× → 1.13× → 1.70× → 3.05× across
2015–2019, 2020–2024, 2025, 2026. For a decade he ran a modest, stable
premium over the people around him; whatever changed, changed after 2024,
and it more than doubled the gap in two years. It is not a change of
audience: held to the same counterparty, the drift is intact — Annie's side
flat, his up 40% in a year; with his mother he crossed from below her to
above her inside twelve months. The delivery-thread control is the most
important row in the table: across eleven years, in a purely transactional
channel, he holds 3.2–4.3 words per turn and has never once sent a 50-word
message there. **The capacity for brevity is intact and demonstrable. What
varies is the channel.**

Classifying every turn by shape isolates where the words go. The taxonomy
is seven structural modes; the one that matters is **STACKED-ESSAY** —
three-plus messages, median thirteen-plus words each: 11.2% of his 2026
turns, 44.3% of everything he says, 11× more frequent than in his
interlocutors' output, and quadrupled since 2015–19. Meanwhile the ordinary
one-line reply (SOLO-SHORT) fell from carrying 18.8% of his words to 7.5%.
**He has not added a long mode on top of a short one; he has substituted the
long mode for the short one.** And the mode costs him: turns above 200 words
are answered 54.7% of the time against 93.8% for turns of 11–20 words, with
the curve falling monotonically after 20. The empirical optimum taken from
his own record is turns of 11–20 words, no more than two messages per turn —
a specification he already meets 57.3% of the time and met as a default for
the five years to 2019.

Two falsified self-descriptions are worth keeping on the record because they
are the ones most likely to be acted on wrongly. He believed his texts were
"split and sent as spoken cadence — staccato, 2-to-3 messages per sentence";
recomputation says his burst messages are *more* self-contained than other
people's, and the STACCATO mode runs 8.5% of his turns against his
interlocutors' 10.5% — he does it less than they do, and it is his single
most reliably answered mode at 93.8%. **A tool that merges his fragments
into single messages would be solving a problem he does not have.** And the
lowercase opener — the page's own largest verified stylistic marker at 19× —
was checked against the staccato hypothesis directly: his *first* messages
start lowercase at the same rate as his non-first ones, so it is a global
habit, not a mid-sentence continuation marker. See the full specimen, the
escalation loop (silence lengthens him; length produces silence), and the
nighttime amplifier (03:00 produces ≥50-word messages at 7.5× the 13:00
rate) at [[wiki/mind/profile/texting-deviance-audit]].

The recipients have said so themselves, for eight years: nine unambiguous
complaints about message length from four different people, spanning
2018 to five days before the 2026-08-13 export ended. The complaint predates
the 2025 escalation by six years — the behaviour was legible to recipients
before it was statistically extreme. The register is consistent across four
unrelated people who share nothing but him: not "you talk too much" but
**"I can't read this"** — a claim about processing load, not about volume
of attention. The word they reach for independently is *paragraphs*.

## Syntax and punctuation mechanics

Baseline sentences are complex or compound-complex with high clause density:
subordinate clauses, parenthetical asides, and heavy em-dash interjection,
reflecting parallel processing threads. Under emotional load the syntax
*fragments* — staccato single-clause bursts, punctuation dropped — which the
analyses treat as a legible system-overload signal rather than carelessness.
The words-per-sentence figure above is the numerical shadow of this section:
syntax, not vocabulary, is where the density lives.

Punctuation serves rhythm over grammar: ellipses for suspense and trailing
thought, em-dashes for analytical asides, aggressive question marks to
demand clarification, ALL-CAPS as simulated raised voice at the emotional
peak of a burst. The independent verification gives these their comparison
group: ellipsis runs at roughly double the interlocutor rate, and the
lowercase opener — 31% of his messages against 1.6% of theirs, 25% vs 2.3%
in 2026 — is not an occasional slip but a standing decision, stable across
sixteen years of exports, that makes every thread he touches look like him
before a single word is read. ALL-CAPS as vocal emphasis is the one marker
that resists the flattening: 9,282 instances in the deep export against
ordinary rates of simulated shouting, and the burst-cadence formula the
context-core record gives the voice — 3–7 lowercase bursts, one ALL-CAPS
word at the emotional peak, seeded ambient modifiers, ending on a probe —
is, in the corpus, less a generation recipe than a description of what he
actually does when the stakes rise.

## Lexical fields and code-switching

The vocabulary draws simultaneously from four registers, switched fluidly
and often within a single message: clinical psychology ("trauma bond,"
"dissociation," "cognitive dissonance"), military/intelligence ("psyop,"
"counterintelligence," "surgical"), philosophy ("epistemology,"
"ontology"), and dirtbag-left internet slang ("normie," "cringe,"
"based"). The borrowing is directional and it is the page's oldest
documented move: **register theft upward** — clinical, military and
philosophical vocabulary applied to ordinary observation so it sounds
forensic. The technical-vocabulary complaint his recipients make holds
directionally and collapses on magnitude: jargon terms run 3.7× the
interlocutor rate but at 0.26 per 1,000 words — one such word every 3,846 —
so he is not burying anyone in terminology. The load-bearing rows are the
logical connectives (3.96 per 1,000 vs 1.43, 2.8×), the hedges (1.42 vs 0.46,
3.1×), and the meta-discourse markers (2.9×): the register is *argumentative
infrastructure*, not decoration. It builds the appearance of a proof around
whatever he happens to be saying.

Recurrent signature clusters: **system/architecture** (framework, source
code, OS, firmware), **violence/control** (weaponized, exploit, detonate,
forensic), and **psycho-spiritual** (myth, ritual, daemon, altar,
cathedral). On top of these sits a private jargon layer — invented commands
like `[FLAG-IT]`, named concepts, sacred jokes — a personal idiolect
systematizing even his AI interactions. It is worth distinguishing the
clusters from the register move: the clusters are *what he talks about* —
the world rendered as machines to be taken apart, systems to be exploited,
altars to be tended — and they are the cleanest evidence that the "fork of
English" the deviance audit names is a worldview with a grammar, not a
vocabulary list. The vocabulary-lexicon finding makes the same point from
the other side: the insult register he built is sorted by *mechanism*
rather than intensity — fake institutional prestige, historical
condemnation, graded compound vulgarity — because mechanisms are what he
sees.

### The insult register is built, not reached for

The four registers above describe vocabulary he *uses*. There is a fifth
behaviour the corpus documents separately, and it is the more unusual one:
he **commissions** vocabulary. On 2026-08-26 he ran a session generating
graded insult and praise batches and then selected from the pool, and the
selections are recorded in full at
[[wiki/interests/language/vocabulary-lexicon]].

What the selections show is that the insult register is sorted by *mechanism*
rather than by intensity. Three mechanisms account for nearly all of it:
fake institutional prestige (*a distinguished scholar of being wrong*),
historical condemnation (*a monument to poor judgment*, *a man history
wisely neglected*), and graded vulgarity built from compound modifiers
(*industrial-strength dumbass*, *premium-grade loser*). He named the
governing rule himself — a preference, per his account, for insults
*"where the grammatical structure sounds dignified while the semantic
payload is fucking devastating"* — and the cleanest instance is **"a man of
no small stupidity,"** a litotes shaped exactly like a compliment.

This is the same machinery this page already documents, pointed somewhere
new. The clinical/military/philosophical registers above are borrowed
*upward* to make ordinary description sound forensic; the insult batch
borrows *upward* to make contempt sound like an obituary. Both are register
theft, and the payload in each case travels in the gap between the borrowed
form and the actual content.

> **GAP CLOSED [2026-08-27]:** the operator volunteered the full "words for
> stupid" list against this page. It was not a gap this page had stated —
> unprompted material, staged here for the ingest to place. Placed here, in
> Lexical fields, because it is a register finding; the list itself is not
> duplicated onto this page, because it was written up in full as
> [[wiki/interests/language/vocabulary-lexicon]] the day it arrived. Source:
> `raw/mind/captures/2026-08-27_013705_gap-linguistic-profile.md` (unresolved
> in the current corpus; see Limits).

**What this does not establish.** These are words *selected as pleasing*,
not words observed in the corpus. Everything else in this section was
measured against the message record; this was not, and the two must not be
read at the same weight. `bin/text-metrics` could test it — whether the
dignified-shape insult ever actually appears in his outbound text, or only
in a vocabulary he enjoys designing — and until somebody runs it, that
stays open.

## Rhetorical architecture

Argumentation is **deductive deconstruction**: start from a principle or
observed pattern, drill into archived evidence, build a logical chain that
corners the interlocutor. The persuasive mix is heavy Logos, Ethos through
intellectual force and refusal to compromise, and Pathos deployed sparingly
as strategic raw confession — vulnerability used to disarm. Signature
devices: metaphor drawn from technology, warfare, and religion ("cognitive
prosthetic," "psychic nuke"); gallows irony as the primary defense
mechanism; anaphora at high emotion for incantatory effect.

The register theft is doing rhetorical work here, not just descriptive
work. Clinical vocabulary turns a disagreement into a diagnosis;
military vocabulary turns a conversation into an operation; philosophical
vocabulary turns a preference into a first principle. Each move borrows the
*authority structure* of the register — the clinic's detachment, the
operation's certainty, the treatise's inevitability — and the logical
connectives measured above (2.8× the interlocutor rate) are the mortar.
"Because" is not a justification compulsion in the psychological sense the
analyses imply; in the corpus it is load-bearing structure, the word that
keeps the deductive chain from looking like an assertion.

## Emotional subtext and tells

The analyses read the dominant subtext as controlled rage plus profound
loneliness, contained by humor and intellectualization. Emotion leaks
through three reliable tells: **high-stakes mode** — profanity,
capitalization, and rhetorical questions spike; **detached-analyst mode** —
vocabulary goes technical and sentences elongate (retreat into the
fortress); **vulnerability breach** — rare, simple, direct statements ("it
hurts," "i'm done") that signal the defensive wall has actually failed.
The self-described "dissociative" tone is assessed as accurate:
high-functioning dissociation in which the analytical mind narrates events
the emotional self has been cordoned off from.

The voice-modes layer adds a trigger-level mechanism underneath these
tells: ten psych-driven modifiers, each mapped to a precise mechanical
tweak, that can fire inside any mode and combine when multiple are active.
Anger pushes profanity up and strips sentences to biting fragments;
anxiety doubles message frequency and degrades punctuation; ego challenge
adds ~30% academic vocabulary and produces one deliberately crafted
"perfect" cutting sentence; perceived betrayal pivots the whole register
to cold interrogation in a single message. The modifiers are why the tells
read as a *system* rather than a style: the same trigger fires the same
tweak, and a reader who knows the mapping can watch the emotional state
move through the punctuation.

## The persona and its slippage

The constructed voice is the "unhinged but brilliant collaborator" /
"chaos-brained prophet" — a performance of intellectual dominance and
emotional invulnerability that filters out anyone who can't match
intensity. It is remarkably consistent across contexts (AI sessions, group
chats, Twitter), with one documented exception: in the
[[wiki/people/annie-ulmer|Annie]] record the mask slips, the register shifts
from analytical to pleading, and the underlying wound architecture becomes
directly visible.

The consistency claim has a countable leg. The two-corpus design is what
makes it more than an impression: 2,718 dated originals written for an
audience (Twitter, 2009 onward) against the private message corpus written
for one person, and the same mechanics — lowercase opener, pivot words,
dense sentences, sparse filler — hold in both. A voice that survives the
audience change is not a register chosen per reader. The one documented
slippage is the exception that proves the architecture: the pleading
register toward Annie is the *only* place the forensic machinery drops,
which is exactly what the audience-based code-switching below predicts for
the romantic channel under duress.

## Audience-based code-switching

A separate stylometric pass, run against the same iMessage corpus,
measures a different axis than the emotional-state modes below: register
shift by *who he's talking to*, independent of mood. Romantic messages to
Annie carry endearments ("sweetie," "bb") and a near-constant, continuous
cadence — multiple short bursts across the day functioning almost as a
running channel. Platonic messages to friends use peer slang ("dude," "yo")
and are event-driven rather than continuous, picking up only around a
specific plan or joke. He never crosses these vocabularies: "dawg" or "bro"
toward a romantic partner, or a pet name toward a friend, essentially don't
occur. The same audience-sensitivity holds for profanity — playful and
intensifying with friends, but pointed and accusatory when it appears in a
partner conflict — and for capitalization, where "DRIVE SAFE" reads as an
affectionate command while the same formatting in an argument reads as a
demand.

The pass also isolates a distinct **supportive-vs-conflict** axis inside
romantic messaging specifically: supportive exchanges run longer, coherent,
"we"-framed, and proactively caring ("anything I can do?"), while conflict
exchanges fragment into rapid-fire single-clause bursts, drop softening
language, and turn "you" accusatory. A reliable pattern closes every
volatile spike: a flood of repeated, properly-capitalized apology and
reassurance ("I'm sorry," "I love you," "I promise") that doesn't have a
platonic equivalent — his friend-conflicts are rare and brief enough that
this repair cycle never gets exercised the same way.

This is the second independent organizing axis over the baseline mechanics —
mood modulates register (voice-modes), and audience modulates it too, and
the two cut orthogonally. The audit's finding that his 2026 turn-length
drift holds within the same counterparty is the caution against
over-reading this section: audience explains *how* he talks to each person,
not *how much* he says, and the turn-level escalation is the stronger
current. The transaction-channel immunity is the boundary case the whole
section bends toward: with nobody to perform intimacy or dominance for,
the voice collapses to 3.2–4.3 words per turn for eleven years straight.
That is the baseline the register choices are *added on top of*, and it is
the strongest evidence on this page that the fork of English is elective,
not compulsive.

## Live state instrumentation (2026-09)

On 2026-09-11 Dan commissioned the thing this page had always lacked: a
*prospective* instrument. The retrospective analyses describe the voice;
the state tracker watches it live. A 29-feature extractor against a
baseline of 94,503 outbound iMessages (2011–2026), scored every 30 minutes
in a quiet cron, with a 09:00 ET daily digest — a divergence index per
window, top driver features, flags when the index spikes. His own
same-night label on the 00:47–05:35 ET music chat ("cannabis-high") is the
first calibration ground truth: his self-labels are treated as calibration,
never as inference fodder. The earliest scored windows ran clean (divergence
index 0.5, no flags). Code: `~/workspace/stylometry/`.

On 2026-09-12 he asked for the writing-specific version of the instrument —
"a small writing prompt or instruction custom built and optimized to
identify markers" — and got the **6-minute sample**: the same three fixed
prompts every run (W1 STREAM, 3 min nonstop about the last 2 hours; W2 ROOM,
90 s room description as topic-fixed control; W3 ARGUE, 90 s on hot dog —
sandwich or not?, 5+ sentences), one sitting, no editing, no backspacing.
Fixed prompts mean topic cannot confound the signal — all variance is the
writer; W1 hunts length markers, W2 is the control, W3 stresses reasoning
structure, and the no-edit rule makes typo density measurable for the first
time. A timer page enforcing the clock and the no-backspace rule was
offered, not yet built; no sample had been run as of the window. Notably he
admitted in the same exchange that he already had the answer and was testing
whether the model would spot the writing-specific instrument — the standing
adversarial-evaluation pattern applied to the instrumentation itself, per
his own account in that session.

### State Calibration Battery — pre/post protocol (2026-09-12/13)

Around 23:49 ET on 2026-09-12 Dan commissioned the battery's next layer: a
pre/post **State Calibration** protocol for cannabis intoxication — run the
battery sober, get stoned, run it again 30–45 minutes later, and map the
per-metric delta. The build landed the same night, not as a new page but as
a patch applied to the already-built battery artifact (`patch_prepost.py` in
the `.src/` build chain), which had in the meantime also absorbed the
6-minute writing sample as its final block. The full instrument is one
self-contained HTML file with a dark, iPhone-oriented interface; every run
stays in on-device local history.

The test sequence, as built: a Check-in block (Mood / Energy / Sleep
self-report); four psychomotor tests — reaction time ("Tap when it turns
green"), digit span ("Repeat the digits"), Stroop ("Tap the INK color"),
finger tap ("Tap as fast as you can"); a typing test ("Type it, fast and
clean"); the six-minute writing sample; then the analysis layer: Past runs
(local history, each run tagged PRE, POST, or untagged), Map the change
(per-metric absolute and percentage deltas across the cognitive tests, the
vitals, and the writing statistics, with automatic or manual PRE/POST
pairing), Writing contrast (side-by-side pre/post samples), and one
paste-ready combined PRE/POST analysis block meant for pasting into chat so
the deltas enter the stylometry label log. The writing block later had a
second life outside the instrument: STREAM became its chat-stripped,
writing-only port.

The first recorded run came around 01:09 ET that night: reaction time
~348ms average, digit span 6, 105 finger taps, and one memorable typo —
"Meta muse is wild" — in the typing block. But the cannabis hitter went in
before the run, so it logged as POST with no sober baseline to pair
against; a clean sober PRE was still pending when the batch closed, and it
never materialized after. An early-stop race bug — late taps and timers
firing into the next writing prompt — was reported around 01:10 ET and
fixed by ~01:14 ET; the `.src/` chain preserves the original, pre/post, and
source builds, the patch script, and the race-condition regression test.
Confidence on the build details: high — they are verified against the
artifact itself, not the chat transcript.

Limits, stated plainly, because the whole point of the instrument is honest
calibration. There is no clean sober PRE on record to this day. And the one
logged "post" run confounds the substance of interest: that session also
involved roughly a gram of cocaine alongside the cannabis, so even with a
sober baseline it could not isolate a cannabis delta. The calibration gate
settled days later was ≥5 same-day labeled episodes per state before any
per-state signature could be claimed — as of 2026-09-16 the log held
cocaine 2, cannabis 1, cannabis-high 1, sleep 1, suboxone 1: nowhere near.
So the State Calibration Battery stands as a deployed protocol, not a
calibrated one — and that distinction is load-bearing. It is the record's
first deliberate within-subject pharmacological self-experiment protocol: a
subjective state change converted into controlled before/after
instrumentation rather than retrospective impression, waiting on the
labeled data that would let it speak.

Evidence: `dat:1456-baseline-testing-battery`,
`dat:1457-writing-sample-instrument`,
`dat:1458-suboxone-and-onset-label-20260912`,
`dat:1482-state-calibration-battery-gains-pre-post-cannabis-delta-prot`,
`src:state-calibration-battery-html-20260913`.

## Limits

The stylometric layers analyze the texting/AI corpus; no formal analysis
exists of the lyric/production-adjacent writing or of speech (voice memos,
calls); temporal drift analysis is anecdotal ("earlier AI sessions test the
model, later ones integrate it") rather than quantified. The insult-register
batch is selected-not-observed, and no run has yet tested whether the
dignified-shape insult ever appears in his outbound text. The turn-level
numbers depend on the 30-minute turn split and on the single sender-tagged
deep export that reaches past 2025; that export's 2021–2024 coverage is
thin (5,611 messages against 20,062 in 2025 alone), so the audit's
2020–2024 trough may be a real behavioural plateau or an artifact of
coverage — it is the key to the whole series and it is unsettled. Conflict,
logistics and AI-instruction threads are pooled in the recomputation, and
group chats are not separated from one-to-one threads; a topic-aware cut
would sharpen every figure on this page.

And the honesty layer: five of this page's original sources — the
commissioned stylometric analyses themselves, the dox-scan and dox-md
files — no longer resolve in the current corpus. Their claims survive
where the corpus independently confirms them (the four registers, the
burst cadence, the punctuation mechanics) and are carried here with their
provenance named. Where the corpus contradicted them, the record says so
in the next section.

## Conflicts in the record

**[2026-08-23] Readability: post-graduate — retracted.** This page carried
*"Readability: post-graduate (16th grade+), from concept density not
verbosity"* and glossed the opening as *"99th percentile for lexical
diversity and syntactic complexity."* Recomputed directly from the
sender-tagged corpus (`imessage_export_deep_20260813.csv`, 183,787 rows):
his texting scores **Flesch-Kincaid 2.08 in 2015–19 and 4.00 in 2026** —
fourth-grade, not post-graduate — and his **type-token ratio in 2025–26 is
0.0509 against his interlocutors' 0.0544** on equal 200,000-token samples,
i.e. marginally *less* diverse than the people answering him. In 2015–19 he
did lead on that metric (0.0515 vs 0.0438); the lead disappeared, it was
never 99th-percentile against a real comparison group, and no percentile was
ever computed against one. Both figures trace to the commissioned
stylometric analyses ([[wiki/mind/synthesis/the-commissioned-self]]) —
Dan's request, Dan's corpus, no control group — which is exactly the
provenance problem that page names. **What survives is syntactic
complexity**, which was real and is larger than claimed: words per sentence
run 1.93× his interlocutors' in 2026 (10.83 vs 5.62), and that single ratio
is what a reader experiences as density. The full recomputation, including
the turn-level structure this page does not measure, is
[[wiki/mind/profile/texting-deviance-audit]].

**[2026-08-23] Burst cadence: 8.36 words/message — era-scoped.** The
8.36-words/message, 3–7-discrete-bursts figure describes the 2015–19
baseline he left behind; the 2026 figure is 15.03 words/message in the deep
export, and an independent 2026-10-07 re-verification against the raw
part-exports (`raw/imessage/messages-part1-2011-2019.csv`,
`raw/imessage/messages-part2-2019-2026.csv`) reproduces the era shape at
14.91 vs 6.85 interlocutor words/message in the 2026 slice. The direction
is uncontested; the current reading is ~1.8× the old baseline.

**[2026-08-23] "Split and sent as spoken cadence" — falsified.** His own
three-part self-description, on which the deviance audit was commissioned,
held that his messages were fragmented speech-cadence pieces; recomputation
says his burst messages are *more* self-contained than other people's (68.5%
carry their own subject and verb in 2026 against 55.1% for interlocutors)
and the staccato mode runs below the interlocutor rate. The lowercase-opener
marker (31% vs 1.6%) was checked against the same hypothesis and fails the
continuation reading: first messages open lowercase at the same rate as
non-first ones, so it is a global habit, not mid-sentence splitting.

**[2026-10-07] Graded-confidence exclusivity — qualified.** The standing
connection on this page frames the numeric confidence scale (75, 80, 89, 90,
95, 99.9999) as Dan's alone, "where every other person in the corpus uses
'100%'." Independent verification across the two raw iMessage part-exports
finds graded values on both sides of the thread (his: 75×24, 80×53, 89×2,
90×58, 95×9; theirs: 75×67, 80×67, 90×35, 95×12), with `100`/`100%`
dominant for both. The Dan-only token is "89" (2 instances, none on the
other side). The exclusivity claim may reflect the AI-session corpus rather
than the texting corpus, where it is not established. Standing: the graded
scale is a real, countable marker; its exclusivity is not.

**[provenance, standing] The commissioned-self problem.** The 99th-percentile
finding was a measurement of Dan produced at Dan's request over a corpus Dan
supplied, with no control group — the same apparatus problem
[[wiki/mind/synthesis/the-commissioned-self]] names for the whole
psychological layer. The audit is the method turned on the operator's
self-report, and two of his three claims about his own texting did not
survive it. The numbers on this page that *were* recomputed against the
corpus — the turn ratios, the sentence-length gap, the lowercase opener,
the pivot-word elevations — are the ones with a control group, and they are
the ones this page now leans on.

## Assessment

The surviving architecture is narrower than the commissioned analyses sold
and more interesting than they were positioned to see. The fork of English
is not a vocabulary achievement — his type-token ratio trails his
interlocutors' — it is a syntax and omission achievement: sentences at
1.93× the norm carrying hedges and connectives at ~3×, against conversational
filler at 0.59×, turns at 3.05× the interlocutor word count, 31% of messages
opening lowercase against 1.6%. Density comes from the sentence, not the
word; authority comes from the connective tissue, not the jargon, which runs
at one term per 3,846 words and cannot carry the register alone.

The retraction record is itself the point the profile protocol exists to
make: corpus-first, his stated words outranking machine flags, and a number
with no comparison group is a story, not a measurement. The markers that
survived are the ones that were counted twice, from two exports, against
the people actually answering him. And the boundary case — eleven years of
3.2–4.3 words per turn in the transactional channel — is the strongest
claim on the page: the fork is elective. He can write the short paragraph.
He chooses when.

## See also

- [[wiki/mind/profile/texting-deviance-audit]] — the turn-level
  recomputation: the seven structural modes, the cost curve, the
  escalation loop, the empirical brevity target
- [[wiki/mind/profile/voice-modes]] — the emotional-state layer: eight
  modes and ten psych-driven triggers over this page's baseline mechanics
- [[wiki/mind/profile/lexicon]] — the bespoke lexicon: commissioned
  vocabulary, compliments to Ally, and the Affectionate-mode contradiction
  about intellectualized sincerity
- [[wiki/interests/language/vocabulary-lexicon]] — the full graded insult
  and praise batches: the register-theft machinery selected, not observed
- [[wiki/mind/concepts/calibrated-confidence]] — the graded numeric
  confidence scale as a countable stylistic marker
- [[wiki/mind/synthesis/the-commissioned-self]] — the provenance problem:
  the apparatus, its requests, and the corpus it was handed
- [[wiki/mind/concepts/forensic-method]] — the audit as the method turned
  on the operator's self-report

## References

- `raw/imessage/messages-part1-2011-2019.csv` — iMessage export, 2011–2019
- `raw/imessage/messages-part2-2019-2026.csv` — iMessage export, 2019–2026
- `raw/imessage/messages-master.csv` — merged message export
- `raw/twitter/tweet-archive.csv` — @danfrank tweet archive, back to 2009
- `raw/self/dox-scan/all_imessages_complete_dump.txt` — ⚠ Source reference unresolved — original target no longer exists in current corpus.
- `raw/self/dox-scan/Dan Profile.txt` — ⚠ Source reference unresolved — original target no longer exists in current corpus.
- `raw/self/dox-scan/ANALYSIS_ Linguistic.rtf`
- `raw/self/context-core/CONTEXT_CORE_EXPANDED.md` — ⚠ Source reference unresolved — original target no longer exists in current corpus.
- `raw/self/dox-md/Phase_2_Stylometric_Analysis.md` — ⚠ Source reference unresolved — original target no longer exists in current corpus.
- `raw/mind/captures/2026-08-27_013705_gap-linguistic-profile.md` — ⚠ Source reference unresolved — original target no longer exists in current corpus.
- `bin/text-metrics` — turn-level recomputation instrument, kept in-repo for re-runs
