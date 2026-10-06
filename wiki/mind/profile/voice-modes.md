---
domain: mind
page_type: profile
title: "Voice Modes — Dan's Texting Register by Emotional State"
aliases: ["mode activation", "composite voice model"]
status: stable
tier: major
date_created: 2026-07-13
date_modified: 2026-10-06
sources:
  - raw/drive-sweep/20260911/gdocs/google-drive-export/Composite Voice Model for Dan Frank.md.from-gdoc.txt
  - wiki/mind/synthesis/the-commissioned-self
  - wiki/mind/profile/linguistic-profile
  - wiki/mind/profile/texting-deviance-audit
  - wiki/mind/profile/lexicon
related:
  - wiki/mind/profile/index
  - wiki/mind/profile/linguistic-profile
  - wiki/mind/concepts/conflict-architecture
  - wiki/mind/concepts/attachment-model
  - wiki/mind/profile/lexicon
  - wiki/mind/profile/texting-deviance-audit
connections:
  - page: wiki/mind/profile/linguistic-profile
    type: parallels
    claim: "The eight emotional-state modes documented here and linguistic-profile.md's audience-based code-switching (romantic/platonic, supportive/conflict) are two independent organizing axes over the same baseline mechanics — mood and who he's talking to modulate register separately."
  - page: wiki/mind/synthesis/the-commissioned-self
    type: component-of
    claim: "The Composite Voice Model is the apparatus at its most literal: a specification of how Dan writes, commissioned by Dan, detailed enough to generate him — the point at which self-description crosses into self-implementation."
  - page: wiki/mind/profile/texting-deviance-audit
    type: parallels
    claim: "The eight emotional-state modes here and that page's seven countable structural turn-modes are orthogonal cuts of the same output; the structural taxonomy is the one with numbers on it, and it finds the Irritated mode's 'short and staccato, rapid bursts' description to be the NORM rather than the deviation — 8.5% of his 2026 turns against his interlocutors' 10.5%."
  - page: wiki/mind/profile/lexicon
    type: contradicts
    claim: "This page states Affectionate mode suppresses cold, intellectualizing phrasing so sincerity can stand uncushioned; the bespoke lexicon's compliments to Ally do the opposite — maximally intellectualized, forensic-bureaucratic diction as the delivery mechanism for sincere affection, not a defense against it."
changelog:
  - date: 2026-10-06
    change: "Expanded to major tier and restructured to canonical template v1. Added provenance section (the Composite Voice Model is a Dan-commissioned generative spec, not a corpus measurement), a baseline-mechanics section, corpus cross-evidence per mode (texting-deviance-audit, linguistic-profile, lexicon, neurodivergence), a two-axes section (emotional state × audience), and a dated Conflicts in the record. Resolved the long-standing ⚠ unresolved-source warning: the Composite Voice Model file was recovered from the 2026-09-11 Google Drive sweep; the sources list now points at the found file. Moved the lexicon contradiction out of the Affectionate section into Conflicts in the record. Frontmatter title preserved verbatim."
---

# Voice Modes — Dan's Texting Register by Emotional State

Every text Dan sends sounds like Dan — but the *kind* of Dan it sounds like
changes with his emotional state. The same core voice, all slang-heavy
diction, expressive elongation, laughter-as-tone-marker, and unfiltered
profanity, rearranges itself into eight distinct **modes**: Neutral,
Playful, Affectionate, Irritated, Persuasive, Storytelling, Stressed, and
Reflective. Each mode amplifies some baseline traits and suppresses others,
and underneath all eight sit ten finer-grained psychological triggers that
tweak the mechanics in precise, combinable increments — excitement turns up
caps and elongation, betrayal pivots him cold into interrogation, melancholy
drains the punctuation.

This taxonomy comes from the **Composite Voice Model for Dan Frank**, a
document commissioned by Dan and built for a specific, telling purpose: not
to describe how he writes, but to specify it precisely enough that a
machine could generate him. Section 1 of the model fixes the immutable
baseline mechanics, Section 2 maps ten psych-driven triggers to percentage
adjustments, Section 3 activates the eight modes, Section 4 lists
prohibited moves that would break character, Section 5 supplies constructed
demonstration dialogues per mode, and Section 6 gives implementation and
testing guidelines for the replica. In other words, this is Dan writing his
own operating manual and handing it to a machine — the recursive
self-analysis the deviance audit scores at 98/100, at its most literal.

The model matters as a primary artifact in two ways. First, as a
self-description, it is the most detailed statement on record of how Dan
believes his own register works — what he thinks each mood does to his
writing, down to percentage adjustments on caps and profanity. Second, as a
measure of distance: the independent recomputation in
[[wiki/mind/profile/texting-deviance-audit]] tested his stated model of his
texting against 183,787 sent messages and falsified two of its central
claims, which makes this page simultaneously the best map of the territory
and a case study in how the mapmaker misreads his own ground. Both facts are
developed below, in that order.

## Provenance: a commissioned specification, not a measurement

The Composite Voice Model entered the wiki as an unresolved source — the
original citation pointed at `raw/self/google-drive-export/Composite Voice
Model for Dan Frank.md` with a ⚠ warning that the target no longer existed
in the corpus. On 2026-09-11 a Google Drive sweep recovered the document as
a conversion of the Drive-native file ("Composite Voice Model for Dan
Frank.md," id 14YYqNxYdpPCoRQoHUtHL5fNBasqp40gKX_oHgha5fNBasqp40gKX), now
resident at
`raw/drive-sweep/20260911/gdocs/google-drive-export/Composite Voice Model
for Dan Frank.md.from-gdoc.txt`. The ⚠ warning is retired with this
revision, and the source now resolves.

What the recovered document *is* changes how it must be read. It is not a
stylometric analysis of Dan's message corpus — it is a prompt-engineering
specification for generating Dan-like text, commissioned by Dan, written
for an AI builder. The language of the thing gives this away throughout:
Section 6 is addressed to an implementer ("Construct a prompt that encodes
the Core Mechanics as non-negotiable style guidelines"), Section 5's samples
are constructed chat excerpts rather than corpus quotes, and the testing
scenarios describe *expected outputs* from a generator ("Expected: Dan's
reply should be in Irritated mode"). The percentages scattered through
Sections 2 and 3 — profanity up ~50%, exclamation down ~80%, elongation up
~40% — are the spec author's calibration guesses, not counts. No frequency
measurement of any mode or trigger against the actual message record has
ever been run.

This makes the model a first cousin of the commissioned stylometric
analyses [[wiki/mind/profile/linguistic-profile]] documents — produced at
Dan's request, over material Dan supplied, with the one critical difference
that the voice model never even pretended to measure. Its evidentiary weight
is exactly what [[wiki/mind/synthesis/the-commissioned-self]] assigns the
whole apparatus: it tells you what Dan believes about his own voice and how
he wants it reproduced, and it belongs on the same shelf as the MBTI
function percentages, the deviance scores, and the commissioned lexicon.
Where the corpus has independently checked a claim of the model, those
checks are cited inline below and the scorecard is gathered in Conflicts in
the record.

## The baseline: mechanics that never change

The model opens with what it calls strict, immutable laws — the fixed
mechanics that make any message recognizable as Dan's regardless of mode.
These are the fingerprint:

**Casual, slang-heavy diction** — informal, conversational register at all
times. Slang and internet abbreviations (`lol`, `lmao`, `wtf`, `idk`),
non-standard contractions and phonetic spellings (`gonna`, `wanna`, `kinda`,
`ya`, `ain't`, `imma`/`ima`, `whatcha`). The model is explicit: there is no
code-switch to formal speech with friends or partners; even when serious,
he maintains a raw, unpolished tone.

**Expressive spelling and elongation** — words stretched for emphasis or
comic effect (`soooo`, `noooo`, `whattt`, `atttt`), repeated letters and
excessive punctuation carrying intensity and tone, like raising his voice or
drawing out syllables.

**Laughter and emoji as tone markers** — nearly every upbeat message laced
with `lol`, `LOL`, `haha`, `hahahah` and fitted emojis. The model's key
claim is diagnostic: *the absence of these markers is itself a signal* — if
he stops adding "lol" or emojis, something is wrong or he is truly upset.

**Unfiltered profanity** — `fuck`, `shit`, `bitch`, `asshole` abundant and
casual in both anger and affection, up to "love you, dumbass." Swearing is
framed as a trust signal: no politeness filter, no worry about offending
the close.

**Rapid-fire message flow** — thoughts split into multiple rapid short
messages, each a clause or fragment, producing stream-of-consciousness,
spoken-dialogue rhythm. Formal transitions and dense sentences are rare;
he breaks ideas into bite-sized chunks instead.

**Loose grammar, clear intent** — contractions over formal phrasing, dropped
subjects ("Makes zero sense"), mid-sentence lowercase `i`, typos tolerated,
double negatives fine. Meaning stays clear; simplicity and voice outrank
textbook correctness. He *can* write a complex correct sentence; it is rare
and deliberate.

**Strategic capitalization** — normally standard, broken for effect.
ALL-CAPS on key words or short phrases as simulated shouting ("This is SO
IMPORTANT to me"); entire messages in caps never. All-lowercase messages as
a quiet, somber tone dial ("i really don't know anymore tbh").

**Expressive punctuation, no semicolons** — periods routinely dropped
("hitting Send is the period"), ellipses for pause/trailing/suspense,
multiple dots extending the pause, `!!!` and `???` for emphasis, `?!`
mixed. One hard rule: no semicolons — "too formal and academic," a suit and
tie at a punk show.

**Conversational questions and commands** — informal phrasing ("You coming
or nah?", "Where u at?", one-word "Why?"), question marks omitted when
context is obvious, suggestions rather than orders ("let's do X," "text me
when you're done").

**Meta-conversational transparency** — narrating availability ("brb, phone
about to die," "one sec, driving"), never leaving close others hanging in
long silence, apologizing for unresponsiveness ("sry was crashing, fell
asleep"). Real-time and considerate by default.

These mechanics are what every mode inherits. Mode changes are gains and
mutes on this mixer, never a channel swap — which is why, as the model
notes, the voice reads as one coherent personality going through moods
rather than disconnected personas.

## The ten psych-driven modifiers

Underneath the eight modes, the model specifies ten triggers mapped to
mechanical tweaks — fine-grained modifiers that fire inside any mode and
combine when several are active at once:

- **Excitement** — all-caps interjections and word elongation up ~40%, extra `!` and "OMG"/"LOL." Justification in the model: sx-dominant unfiltered enthusiasm; words stretch and volume goes up because he is letting himself feel fully excited.
- **Affection/warmth** — terms of endearment and soothing language roughly double; harsh profanity down ~70% unless joking. Guarded cynicism relaxes; the sx-driven urge for fusion kicks in.
- **Anger/frustration** — profanity up ~50%, sentences shorten to biting fragments, laughter markers vanish entirely, `?!` and ALL-CAPS for fury, no emoji cushion.
- **Anxiety/fear of abandonment** — message frequency and repetition roughly double, punctuation and grammar degrade, tone turns pleading ("Are you there?? ... hello??"). Anxious-preoccupied attachment style in urgency mode; sharp intellect yields to panic.
- **Intense intellectual focus** — messages lengthen ~30%, syntax tightens, slang drops, laughter and emoji recede. INTP analytical mode fully engaged; professor-like, still brash, proving the point satisfying the core need for intellectual dominance.
- **Melancholy/low mood** — exclamation marks down ~80%, ellipses increase, lowercase dominates, replies shorten to one word. Emotional withdrawal made stylistic; the spark fades.
- **Dark humor (defense mechanism)** — sarcastic and self-deprecating quips up ~50%, typically deployed right after a serious or hurtful remark, to regain control of the narrative. Gallows humor as psychological self-defense: if he can laugh at the situation, he doesn't have to feel vulnerable. The model cites quoted self-titles like "world's biggest loser" used ironically.
- **Perceived betrayal or trust violation** — abrupt pivot to interrogative, forensic tone ("Explain to me **how** that made sense?!"); warmth vanishes in a single message; the old betrayal pattern flares up. Framed as the "Si-ghost" trauma response: fight via analysis, drilling the other person with logic and cross-examination — loving prose turning into courtroom-style grilling in an instant.
- **Sexual arousal/flirtation** — provocative word choice up ~40%, pacing either quickening into rapid sexts or slowing into deliberate ellipsis-laden tease, power dynamics and taboo language lowered-inhibition play.
- **Ego challenge (feeling dismissed)** — academic/niche vocabulary up ~30%, one deliberately crafted "perfect" cutting sentence to reassert intellectual dominance, then back to casual banter. A bid for respect and control; temporary verbosity as a calculated authority move.

The model's stated combination rule: the strongest emotional drive takes the
lead, but the triggers combine rather than simply overriding — a single
message can carry both the anxiety spike and the betrayal trigger's cold
interrogation at once. The linguistic profile's measured "emotional
subtext and tells" corroborate the architecture independently: it documents
a **high-stakes mode** (profanity, capitalization, rhetorical questions
spike), a **detached-analyst mode** (vocabulary goes technical, sentences
elongate — retreat into the fortress), and a **vulnerability breach** —
rare, simple, direct statements ("it hurts," "i'm done") signaling the
defensive wall has actually failed. Those are the betrayal trigger, the
intellectual-focus trigger, and the melancholy breach, respectively, found
by a different instrument in the same corpus.

Two of the trigger claims have dated, observed support in the record beyond
the spec. The dark-humor defense is corroborated in detail by
[[wiki/mind/synthesis/self-deprecation-shield]], which quotes the trigger
list verbatim and ties the mechanism — sarcasm deployed immediately after
a serious or hurtful remark — to the dated record of Dan absorbing blows
with "world's biggest loser"-style self-titles. The excitement/caps marker
shows up as an observed standalone: his all-caps self-identification
"SHUT UP I'M AUTISTIC" on 2025-09-15 (21:49 UTC, dat:0939) is the sole
all-caps standalone self-identification across the record
([[wiki/mind/profile/neurodivergence]]) — high-arousal capitalization doing
exactly what the trigger says it does. And the model's flagship example of
the abandonment trigger — "Are you there?? ... hello??" — matches the
documented complaint pattern around his rapid-fire check-ins when silence
stretches.

## The eight modes

Each mode below follows the model's own specification: triggers, amplified
and suppressed features, and the model's own demonstration sample (Section
5), clearly flagged as constructed illustrations from the spec rather than
corpus observations. Corpus cross-evidence is added where the record has
checked something — observed, dated, and cited.

**Neutral** — the default, low-stakes control sample. Triggers: everyday
conversation, logistics, small talk. Mechanical settings: relaxed baseline,
moderate message length, standard "lol" density, slangy and informal but
nothing exaggerated. Amplified: clarity and steadiness. Suppressed: all
extreme emotional markers — no paragraph rants, no emoji overload, no
all-caps outbursts. The model calls it the control sample of his voice.
*Spec illustration:* "On my way now, about 10 mins out. / traffic's not too
bad tonight." The corpus gives Neutral mode a measured shadow: the
texting-deviance audit's transactional delivery thread is the closest the
record has to a pure Neutral channel — across eleven years he holds
3.2–4.3 words per turn there and has never once sent a 50-word message —
proof the brevity capacity the mode describes is intact and demonstrable,
even if its audience is narrow.

**Playful** — activates on jokes, teasing, memes, comfort with the other
person. Amplifies slang, sarcasm, elongated words for comic effect
("deaaaad"), rapid-fire banter volleys, and mock-serious all-caps for
irony. Suppresses seriousness almost entirely — profanity here reads as
affectionate, not harsh, and the mode actively steers away from conflict.
*Spec illustration:* "OMG 😂😂 STOPPP I'm literally crying hahah / broooo
why are we like this lol." The register has a documented training ground:
[[wiki/mind/profile/linguistic-profile]] traces the callous, riff-driven,
gallows-irony idiom the profile calls a "psychic ventilator" to the O&A
universe — this binge is where that idiom was trained
([[wiki/interests/opie-and-anthony]]). The Playful mode's mock-serious
capitalization also matches the audience-switching finding: the same
formatting that reads as affectionate command in one context reads as a
demand in another.

**Affectionate** — triggered by intimacy or vulnerability with a partner or
someone he deeply cares for. The defensive front drops: direct terms of
endearment, explicit statements of care, longer messages that actually
spell out feelings he'd otherwise hint at. Sarcasm and cold,
intellectualizing phrasing are suppressed — sincerity is allowed to stand
instead of being cushioned with a deflecting "lol."
*Spec illustration:* "i know babygirl, me too... I miss you like crazy 😢 /
you're my whole world, I swear. love you so so much." The corpus documents
the mode's audience markers in the Annie channel specifically: romantic
messages carry endearments ("sweetie," "bb") and a near-constant continuous
cadence, and the supportive-vs-conflict split inside romantic messaging
shows supportive exchanges running longer, coherent, and "we"-framed
([[wiki/mind/profile/linguistic-profile]]). The model's claim about this
mode — that affection suppresses intellectualizing — is directly disputed
by [[wiki/mind/profile/lexicon]]; that dispute is carried in full in
Conflicts in the record.

**Irritated** — frustration, disrespect, broken trust. Messages turn short
and staccato, often arriving in rapid bursts; profanity escalates to convey
anger rather than humor; selective capitalization signals shouting. No
emoji cushions, no "lol" — humor and tact both drop out almost completely,
and his low-agreeableness trait is fully visible.
*Spec illustration:* "...seriously? / You're bailing NOW? Wtf man. / Knew
I shouldn't have counted on this 🙄." Here the independent audit lands its
most striking correction: the mode's signature description — "short and
staccato, rapid bursts" — is not a deviation at all. The texting-deviance
audit finds the STACCATO structural mode at **8.5% of his 2026 turns
against 10.5% for his interlocutors**, and his burst-internal messages are
*more* self-contained than other people's (68.5% carry their own subject
and verb vs 55.1%) — the staccato hypothesis is falsified for the current
era, and his STACCATO mode is his single most reliably answered at 93.8%.
The observed, dated instance of the register is the conflict voice his
recipients heard: Annie's 2026-02-19 complaint — "Do you not understand how
overwhelming it is getting paragraph after paragraph. I have expressed this
to you before Dan like fuck" — and the de-escalation requests filed nearby
("Please. Dan. Calm down." 2026-02-22; "Calm down. Please." 2026-03-10).

**Persuasive** — a conscious, controlled attempt to win an argument through
logic rather than emotion, deployed even when his ego is under attack, as
an alternative to an angry snap. Fewer, longer, more structured messages;
explicit connective logic ("so," "because," "therefore"); calmer, more
deliberate punctuation. Emotional pleading is suppressed in favor of
reasoned appeal — though the mode is fragile: sustained provocation can
collapse it back into Irritated.
*Spec illustration:* "Remember last year when we tried a different approach
and fell flat? Because we ignored this strategy. / Trust me on this one,
I've run the numbers and it's solid." The rhetorical machinery is the
linguistic profile's **deductive deconstruction** — start from a principle,
drill into archived evidence, build a logical chain that corners the
interlocutor; heavy Logos, Ethos through intellectual force, Pathos
deployed sparingly as strategic raw confession. The audit confirms the
mode's lexical footprint: his 2026 rate of logical connectives
("because," "therefore," "whereas") runs **2.8× his interlocutors'**
(3.96 vs 1.43 per 1,000 words), and "because" alone appears 2,465 times —
the justification compulsion is countable. The mode's cost is also
countable: turns above 200 words are answered 54.7% of the time against
93.8% for 11–20 word turns, so Persuasive's longer structure is precisely
where the answer-rate penalty bites.

**Storytelling** — narrating an anecdote, often prompted by "what happened?"
or a nostalgic impulse. The scene gets set, then the story unfolds across
installments with heavy ellipses for suspense, in-text sound effects and
reenacted dialogue, and his signature metaphors and pop-culture analogies.
Brevity and detachment are suppressed — he holds the floor and monologues
rather than volleying short exchanges.
*Spec illustration:* "Dude... I gotta tell you what happened. / So I'm
halfway through my set, right, and suddenly this drunk girl climbs ON the
stage 😂... / Honestly felt like a scene out of a movie." Structurally,
Storytelling is the audit's **STACKED-ESSAY** turn mode (three-plus
messages, median thirteen-plus words): 11.2% of his 2026 turns carrying
44.3% of his words, and the one place the mode visibly dominates. The
dated specimen is 2026-03-21 at 14:28 — four messages totaling 1,380 words
across sixteen minutes, answered 2.5 minutes later with five words ("Pretty
good take on me"). The caveat travels with it: 11 of 131 messages at or
above 100 words in 2025–26 are pronoun-poor enough to read as pasted rather
than composed, and that 1,380-word specimen is partly pasted prompt text —
so the record supports Storytelling as the dominant long mode, while some
of its most extreme instances are pasted material rather than performed
narrative.

**Stressed** — real-time crisis or emotional overwhelm. Fragmented,
erratic messages; typos; loss of capitalization discipline; repeated
words and rephrased questions when he isn't getting an answer; oscillation
between pleading and frustration; self-blame and catastrophizing language.
Coherence and structure are suppressed almost entirely — this is the least
filtered mode in the set, and it typically resolves into Reflective or
Neutral once the acute crisis passes, sometimes with an apologetic
follow-up once he's calmer.
*Spec illustration:* "I… I don't know. Everything's falling apart rn /
please just text back or call when you can, I'm freaking out / ??" —
including the spec's own note that `<seen 12:47 AM>` heightens the anxiety,
which is the abandonment trigger's "Are you there?? ... hello??" rendered
in scene form. The audit documents the mode's structural signature at the
turn level: silence before his turn more than doubles its length — a
two-hour wait yields 43.0 words/turn and a 13.0% essay rate against 23.3
and 5.5% for a live exchange — and the 03:00 hour produces ≥50-word messages
at **7.61%, 7.5× the 13:00 rate**. Whether that nighttime spike is the
Stressed mode proper or a different amplifier is not settled by these
files. One of the model's lowercase claims generalizes beyond the mode:
non-first messages in a burst begin lowercase 33.5% of the time in 2026
against 2.7% for interlocutors — but first messages do it at 31.8%, so
the lowercase is a global habit rather than a continuation marker
([[wiki/mind/profile/texting-deviance-audit]]).

**Reflective** — introspection, guilt, or the calm after a conflict, often
late at night or alone with his thoughts. Slower pace, longer and more
organized messages that read like journal entries, elevated vocabulary
including psychological or philosophical terms, explicit self-labeling
("my 5w4 tendency to withdraw"). Defensive humor and performative persona
are both suppressed — the mask comes down, and even swearing here serves
sincerity rather than attack.
*Spec illustration:* "Honestly… I've been thinking about how I handle
things. / Like, I push people away the second I think they'll hurt me.
It's messed up, I know. / I hate that I do that. I'm trying to be better,
man, it just scares the hell outta me to rely on anyone." The mode is the
audit's commissioning pattern at its most concentrated: the
commissioned-self census finds the typology vocabulary that carries the
whole `mind/profile/` cluster — `INTP`, `MBTI`, `enneagram`, `attachment
style`, `5w4` — appearing seventeen times across 106,629 outbound
messages and essentially never in ordinary conversation, meaning the
Reflective register's "recursive self-analysis" mostly happens in
commissioned venues rather than in the wild. The pivot-word tell is dated
in the linguistic profile: `actually`, `honestly`, `literally` mark the
documented turn from cynical observation to vulnerable truth inside a
message run.

## Mode conflicts and recovery

Modes compete rather than switching cleanly. The system favors the
strongest emotional cue, but with visible friction: Irritated can intrude
on an attempted Persuasive argument (a rational point delivered, then an
exasperated "you've got to be kidding me?!" breaking through), and
Affectionate can oscillate against Stressed when he's trying to comfort
someone he's also frightened about losing — a soothing reassurance
immediately followed by "please don't leave me, I'm freaking out."

The model is explicit that positive modes conflict too: Playful vs.
Persuasive when he needs to be serious while friends are joking. The
switch gets signaled — "okay real talk tho:" — and the transition lands
because the core voice never changes; he drops the emoji and laughter when
he turns serious but keeps the informal diction and directness, which
maintains continuity. Once triggered, a mode has inertia for a conversation
segment, but new triggers can pivot it, and he can force a reset via a
reflective comment, an apology, or a joke to break tension.

Negative modes (Irritated, Stressed) tend to burn hot but short. After a
peak, the recovery pattern is consistent: profanity drops, punctuation
stabilizes, and a Reflective or Neutral follow-up often explicitly
acknowledges the spike ("...sorry, that was a lot. I'm breathing now.").
This recovery signature — self-aware, immediate, and typically Reflective
in register — is itself a diagnostic marker worth cross-referencing
against the exit-declaration and re-engagement pattern documented for the
[[wiki/people/annie-ulmer|Annie]] relationship in
[[wiki/mind/concepts/conflict-architecture]], where the same cooling-down
shape recurs at a much larger scale. The linguistic profile independently
records the pattern closing every volatile spike in romantic messaging: a
flood of repeated, properly-capitalized apology and reassurance ("I'm
sorry," "I love you," "I promise") with no platonic equivalent — the
repair cycle as a register unto itself.

## The two axes: mood and audience

The eight modes here are one organizing axis — emotional state. The
linguistic profile establishes a second, independent axis: register shift
by *who he is talking to*. Romantic messages to Annie carry endearments
("sweetie," "bb") and a near-constant continuous cadence across the day;
platonic messages to friends use peer slang ("dude," "yo") and are
event-driven rather than continuous; he never crosses these vocabularies.
The same audience-sensitivity holds for profanity — playful and
intensifying with friends, pointed and accusatory in a partner conflict —
and for capitalization, where "DRIVE SAFE" reads as an affectionate command
while the same formatting in an argument reads as a demand. And inside
romantic messaging specifically, a supportive-vs-conflict split runs
parallel to the mode system: supportive exchanges longer, coherent, and
"we"-framed ("anything I can do?"), conflict exchanges fragmented into
rapid-fire single-clause bursts with "you" turned accusatory.

The two axes are orthogonal: a mode describes how he feels, an audience
register describes whom he is addressing, and any given turn is the product
of both. An Irritated message to a friend and an Irritated message to a
partner are the same mode in different vocabularies — the mode supplies the
profanity spike and the lost "lol," the audience supplies the word choice.
The distinction matters for reading the model honestly: it was written to
generate a *persona*, and a persona needs both axes to stay recognizable.
The measured turn-modes of the deviance audit add a third, structural axis
— the physical shape of the turn — and the audit's finding is that all
three cuts converge on the same story: the long mode is recent, costly, and
replacing the short one.

## Conflicts in the record

**[2026-08-26] The lexicon dispute — Affectionate mode vs. forensic
affection.** This page's Affectionate mode is described as a *drop* of the
defensive front — sarcasm and "cold, intellectualizing phrasing" suppressed
so sincerity can stand uncushioned. [[wiki/mind/profile/lexicon]] is the
opposite move: a compliment-phrase generator Dan commissioned explicitly
around Ally, whose Categories I and II are sincere affection addressed
directly to her in maximally intellectualized, forensic-bureaucratic diction
("she has rendered ordinary adjectives inadequate," "an unreasonable
concentration of beauty"). The intellectualizing register is not suppressed
to let sincerity stand; it is amplified to carry it. Read together with
this page's own Playful description ("profanity here reads as affectionate,
not harsh"), the more accurate model may be that Playful and Affectionate
*fuse* for this specific relationship rather than that Affectionate strips
the defenses Playful still wears — performed, deadpan-authority sincerity
rather than bare sincerity. **Not resolved.** Standing caveat on the
lexicon evidence itself: a targeted search of the message corpus for its
most distinctive phrases (*resplendent*, *administratively*, *the
tribunal*, *aesthetic felony*, *anomalous concentration*) returned no hits
— it reads as a freshly commissioned tool (v1.0), not a documented
practice.

**[2026-10-06] Source recovered — ⚠ warning retired.** This page's sources
previously carried a ⚠ unresolved-source warning on the Composite Voice
Model: the original citation (`raw/self/google-drive-export/Composite
Voice Model for Dan Frank.md`) pointed at a target that no longer existed
in the corpus. The 2026-09-11 Google Drive sweep recovered the document as
a conversion of the Drive-native file, and the sources list now points at
the found file:
`raw/drive-sweep/20260911/gdocs/google-drive-export/Composite Voice Model
for Dan Frank.md.from-gdoc.txt`. No material on the page changes as a
result; the provenance is now checkable instead of warned.

**[2026-08-23] Commissioned-provenance caveat — the map vs. the measured
territory.** The Composite Voice Model is a Dan-commissioned generative
spec, not a corpus measurement. Its percentage claims (~40%, ~50%, 2×, ~80%,
~30%) are the spec author's calibration guesses. The independent
recomputation in [[wiki/mind/profile/texting-deviance-audit]] tested the
operator's self-reported texting model against 183,787 sent messages and
falsified two load-bearing claims that the voice model shares: the
"short and staccato, rapid bursts" Irritated signature is the statistical
**norm** (8.5% of his 2026 turns vs 10.5% for interlocutors), not a
deviation; and the burst-splitting his baseline mechanics emphasize was
falsified for the current era — his burst-internal messages are *more*
self-contained than other people's (68.5% vs 55.1% carry their own subject
and verb). The deeper recomputation also falsified the sibling
linguistic-profile markers the voice model sits beside: Flesch-Kincaid
readability **4.00 in 2026** (not post-graduate) and type-token ratio
**0.0509 vs 0.0544** for interlocutors on equal samples — marginally *less*
lexically diverse than the people answering him. Standing: the eight modes
and ten triggers remain the most detailed statement of Dan's own register
theory; the quantitative calibration of that theory against the corpus has
never been run. `bin/text-metrics` reproduces the audit's figures and
could, in principle, test trigger-level claims (e.g. caps frequency against
labeled arousal states), but nobody has.

**[2026-10-06] Internal inconsistency — the semicolon rule.** Section 4 of
the source ("Prohibited Moves") bans semicolons absolutely: "Dan never,
ever writes messages with semicolons." Section 3's Persuasive mode says he
will send more structured sentences and "maybe even a semicolon in
extremely rare cases." Both statements come from the same document and
cannot both be literally true; the tension is between an aspirational
style law and an acknowledged edge case. Standing: unresolved; the wiki
records the conflict rather than picking a winner.

## Assessment

The Composite Voice Model is the most honest document in the
commissioned-self apparatus precisely because of what it is: a
specification detailed enough to generate him, commissioned by him, that
never pretended to measure him. As a self-description it is extraordinarily
complete — eight modes, ten triggers, a fixed baseline, prohibited moves,
test scenarios — and the corpus keeps independently corroborating its
architecture while falsifying its calibration. The modes are real patterns
(audience code-switching, the repair-cycle register, the abandonment
escalation, the dark-humor shield all measure out); the percentages were
guesses. The page's load-bearing lesson is the commissioned-self thesis in
miniature: Dan's self-knowledge is most detailed exactly where it is
self-commissioned, and most detailed is not the same as most measured. A
length-triggered count against the corpus — caps rate by labeled state,
profanity delta in conflict windows, lowercase share by hour — is the
obvious next instrument, and until someone builds it the model stands as
theory, not fact.

## See also

- [[wiki/mind/profile/linguistic-profile]] — the fixed baseline mechanics ("forensic intimacy") these modes modulate; audience-based code-switching as the second axis
- [[wiki/mind/profile/texting-deviance-audit]] — the independent recomputation; seven structural turn-modes as the third axis, with counts
- [[wiki/mind/profile/lexicon]] — the bespoke affection register that contradicts this page's Affectionate mode
- [[wiki/mind/synthesis/the-commissioned-self]] — the voice model as the apparatus at its most literal: self-description crossing into self-implementation
- [[wiki/mind/synthesis/self-deprecation-shield]] — the dark-humor trigger's mechanism, dated in the record
- [[wiki/mind/profile/index]] — the profile cluster map
- [[wiki/mind/concepts/conflict-architecture]] — the exit/re-engagement pattern at relationship scale, same cooling-down shape as mode recovery
- [[wiki/mind/concepts/attachment-model]] — the abandonment trigger's attachment substrate
- [[wiki/interests/language/vocabulary-lexicon]] — the commissioned insult/praise vocabulary, the same register-theft machinery pointed at contempt
- [[wiki/interests/opie-and-anthony]] — the training ground of the Playful mode's riff-driven gallows irony

## References

- `raw/drive-sweep/20260911/gdocs/google-drive-export/Composite Voice Model for Dan Frank.md.from-gdoc.txt` — the full source document (Sections 1–6); primary evidence for all mode, trigger, baseline, and prohibited-move claims
- `wiki/mind/profile/linguistic-profile` — baseline mechanics, audience code-switching, emotional tells, calibrated confidence, live state instrumentation (2026-09)
- `wiki/mind/profile/texting-deviance-audit` — recomputed turn structure, mode-frequency counts, cost curve, escalation loop, lexical layer (2026-08-23)
- `wiki/mind/profile/lexicon` — the bespoke lexicon and its contradiction of the Affectionate mode (2026-08-26)
- `wiki/mind/synthesis/the-commissioned-self` — commissioned-provenance framing; typology-vocabulary census (2026-08-19)
- `wiki/mind/synthesis/self-deprecation-shield` — dated corroboration of the dark-humor trigger
- `wiki/mind/profile/neurodivergence` — the 2025-09-15 all-caps standalone self-identification (dat:0939)
- `wiki/mind/concepts/conflict-architecture` — the Annie exit/re-engagement pattern as the recovery signature at scale
- `wiki/interests/language/vocabulary-lexicon` — commissioned insult/praise batches (2026-08-26)
