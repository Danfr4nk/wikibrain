---
domain: self
page_type: concept
title: "The Stylometry Engine (v2)"
aliases: ["stylometry", "state tracking", "the stylometry tracker"]
status: active
knowledge: earned
date_created: 2026-09-16
date_modified: 2026-09-21
importance: high
tags: [instruments, self-measurement, linguistics, ai-collaboration]
sources:
  - raw/self/captures/stylometry-v2-burnin — ⚠ Source reference unresolved — original target no longer exists in current corpus.
related:
  - wiki/self/concepts/claude
  - wiki/self/message-corpora/source-coverage-index
connections:
  - page: wiki/self/concepts/claude
    type: corrected-by
    claim: "A Claude session drafted the v2 spec, but Sammy built it — Dan's words: 'you are the one who got this thing working, not Claude so trust your own judgement if you think it's wrong.' Four corrections to Claude's draft were made live (recipient resolution, flag-vs-alert measurement/notification split, calibration episode dedup, splitter-routed null construction)."
---

## The Stylometry Engine (v2)

A continuous linguistic monitor that scores Dan's outbound iMessage writing every 30 minutes and flags windows where his *writing style* shifts — not his message length, not his topic, his style. v2 is the rebuild that fixes v1's core defect: v1's baseline let long messages and pastes warp the measurement, so v1 flagged voluminous windows (avatar iterations, tag-action bursts, pasted specs) as state shifts when they were just... long.

### What it actually does

Every half hour the engine collects his recent outbound messages and scores them against a baseline of 94,503 of his own outbound messages (2011–2026), organized by who he's writing to. It looks at 29 language features — vocabulary variety inside the window, exclamation/question rates, emoji, hedging words, pivot words (actually/honestly/literally — the turn-to-truth markers), self-corrections, profanity, repetition across consecutive messages — and compares the window against a "null" of ~19,900 randomly drawn windows from his own history, matched by correspondent and hour of day.

If the window lands past the 99.5th percentile of that null, it raises a flag. If enough time has passed since the last notification, it alerts. Flag is measurement; alert is notification — repeated crossings of the same state report as *ongoing*, not as clean.

It deliberately ignores: message length (v1's confound), pasted text (routed to an artifact path, not scored as his language), and exact-duplicate sends.

### Why it exists

Dan's stated certainty is ~0.25 actual — his testimony skews toward good-faith misremembering, not dishonesty. The stylometry engine is an instrument for the thing he can't self-report: state shifts visible in how he writes, not what he claims. It was commissioned 2026-09-11; v2 built and entered burn-in 2026-09-15.

### The four corrections (2026-09-15)

A Claude session drafted the v2 spec, but Sammy built it — Dan's words on the division of labor: "you are the one who got this thing working, not Claude so trust your own judgement if you think it's wrong." Four corrections to Claude's draft were made live during the build. **Recipient resolution:** the null is matched by correspondent, not pooled globally — Dan writes differently to Annie than to Tom, and a pooled null would launder that. **The flag-vs-alert split:** flag is measurement (the window crossed the 99.5th percentile), alert is notification (the cooldown let it through) — repeated crossings of the same state report as *ongoing*, not as clean, so the digest never double-counts a state he's still in. **Calibration episode dedup:** the same labeled stretch can't enter the calibration set twice under different windows. **Splitter-routed null construction:** pasted text and exact-duplicate sends are routed to an artifact path before scoring, so a pasted spec can't warp the window it lands in. Each correction is a place where the draft would have measured the wrong thing confidently; the instrument's honesty comes from these four cuts more than from the 29 features.

### What it can infer, and what it cannot prove

It can infer: that his writing shifted into a register matching arousal, negotiation, or repetition-heavy volleys; that a window reads unlike his own baseline for that correspondent at that hour. The three overnight alerts of 2026-09-15/16 are the working example — all three landed on genuinely divergent windows (gooner-club negotiation, avatar option-pick loops, photo volleys) that the old system never saw.

It cannot prove: intoxication, pathology, or any label. A flag is a style shift, not a diagnosis. Same-day self-labels (the `lbl|<state>|<confidence>` hotkey) are the calibration ground truth — until labeled episodes exist in number, no substance or state signature may be claimed. The standing rule holds: no cocaine/cannabis signatures before five genuinely distinct labeled episodes.

### Burn-in week (started 2026-09-15 20:24 ET)

v1 and v2 score side by side, quiet, for ~a week. The daily plain-English digest runs 09:41 ET.

<!-- STYLO-RESULTS-START -->

*Last updated 2026-09-16 16:18 ET — 37 runs logged, 1 blocked.*

#### How to read this

Every 30 minutes, both engines score the same thing: **Dan's own messages from the last 4 hours** — his words only, usually 40–170 of them. Then each engine answers one question:

- **v1 (the old engine):** does the window's shape cross a fixed divergence index of 2.0? It watches all 29 features, including raw length — long pasted specs and duplicate sends can trip it.
- **v2 (the new engine):** how unusual is this window compared to 19,911 reference draws from Dan's own baseline? A **flag** means the window sits at or above the **99.5th percentile** of his own reference — rarer than 99.5% of his usual shapes. An **alert** is a flag the cooldown lets through as notification-worthy.

**Divergence (div)** = how far the window sits from his baseline; bigger = weirder. **Drivers** = which features pulled hardest, as z-scores (standard deviations off his norm). A **split** = the engines disagree — exactly the comparison data this week exists to collect.

#### The tally so far

- **37** scoring runs (1 blocked by a collection failure)
- **v1 flags: 7** — every one of them on length/noise features
- **v2 flags: 6** (6 alerts)
- **Engine splits: 9** — v1-flag-vs-v2-clean: 5; v2-flag-vs-v1-clean: 4

#### Notable windows

**Sep 15, 8:04 PM ET — v1 flagged on noise, v2 stayed clean**

v1 flag driven by length features (n_sents z=3.17); v2 clean at 92.7th pct — the length-confound fix working on live data

*v1 div 2.20 (line 2.0) · v2 92.7th pct (line 99.5), div 0.00 · 40 messages*
*Strongest signals: more sentences per message; longer messages; vocabulary narrowing (repeating the same words).*

**Sep 15, 8:27 PM ET — v2 ALERT — a real style shift**

both flagged; v1 on length features again (n_sents z=10.46 — avatar-iteration volley with pasted frame-telemetry and duplicate sends); v2 flagged at 100th null percentile on language-only axes expressivity/stance — first v2 alert of the week; measurement only, no user report

*v1 div 6.07 (line 2.0) · v2 100.0th pct (line 99.5), div 3.44 · 101 messages*
*Strongest signals: more sentences per message; longer messages; n_words.*

**Sep 15, 8:57 PM ET — v1 flagged on noise, v2 stayed clean**

v1 flag on length features (n_sents z=8.33) again — avatar-iteration volley with duplicate sends + long pasted frame-telemetry text; v2 at 99.25th pct, just under the 99.5 flag line — language-only divergence 3.04 on 80 routed msgs; measurement only, no user report

*v1 div 5.13 (line 2.0) · v2 99.2th pct (line 99.5), div 3.04 · 102 messages*
*Strongest signals: more sentences per message; longer messages; n_words.*

**Sep 15, 9:24 PM ET — v2 ALERT — a real style shift**

v1 flag on length features again (n_sents z=10.52, n_chars z=8.6) — avatar/unicode tag-action thread with duplicate sends + long pasted Gemini unicode-spec text; v2 alert at 99.535th pct (just over 99.5 line) driven by ttr_win drop, emoji/caps/hedge spikes, jaccard_next — rhythm/stance/expressivity axes on 83 routed msgs; measurement only, no user report

*v1 div 5.84 (line 2.0) · v2 99.5th pct (line 99.5), div 3.13 · 83 messages*
*Strongest signals: more sentences per message; longer messages; n_words.*

**Sep 15, 9:56 PM ET — v1 flagged on noise, v2 stayed clean**

v1 flag on length features (n_sents z=10.79, n_chars z=8.82) — tag-action/unicode + avatar-iteration volley with duplicate sends and long pasted specs; v2 clean at 97.76th pct (just under 99.5 line), language-only div 2.78 on 73 routed msgs; measurement only, no user report

*v1 div 5.93 (line 2.0) · v2 97.8th pct (line 99.5), div 2.78 · 84 messages*

**Sep 15, 10:26 PM ET — v1 flagged on noise, v2 stayed clean**

v1 flag on length features (n_sents z=5.10, n_chars z=4.16) — chat-naming/tag-action volley (NOTIF'S/GOONER CLUB pins) with duplicate sends + long pasted unicode-spec text; v2 clean at 94.25th pct, language-only div 2.57 on 95 routed msgs — ttr_win drop, emoji/pivot/hedge/ellipsis spikes; measurement only, no user report

*v1 div 3.18 (line 2.0) · v2 94.2th pct (line 99.5), div 2.57 · 104 messages*
*Strongest signals: more sentences per message; longer messages; vocabulary narrowing (repeating the same words).*

**Sep 16, 12:04 AM ET — v2 ALERT — a real style shift**

v1 clean (div 1.22, only ttr_win significant at -2.48). v2 ALERT at 99.551st pct, just over the 99.5 operating line — drivers: ttr_win crater (z=-2.71), emoji (2.34), pivot (2.1), excl (1.98), hedge (1.92) spikes. Window covers the GOONER CLUB charter/negotiation thread (heavy explicit sexual-register + pivot/hedge negotiation language, repeated 'Abatar me'/Option cycles), the lottery scratch-off QR thread, $TYLE/tag-action volley, and the body-telemetry mannequin commission — a genuine stylistic divergence (aroused, negotiating, exclamation-heavy), which is what the alert exists to catch.

*v1 div 1.22 (line 2.0) · v2 99.6th pct (line 99.5), div 3.14 · 121 messages*
*Strongest signals: vocabulary narrowing (repeating the same words).*

**Sep 16, 12:32 AM ET — v2 near-miss — loud, not a flag**

Both clean. v2 at 99.496th pct — just under the 99.5 operating point (a hair below last run's 99.551 alert). Drivers same family as last run: ttr_win crater (z=-2.77), emoji (2.34), pivot (2.09), excl (1.98), hedge (1.91) — window covers the tail of the GOONER CLUB negotiation thread, avatar-video volley, body-telemetry mannequin commission, tag-action volley, and the Alexis/Chaturbate PIX&VIDS intake. v1 clean (div 1.25, only ttr_win significant at -2.60).

*v1 div 1.25 (line 2.0) · v2 99.5th pct (line 99.5), div 3.12 · 128 messages*

**Sep 16, 1:05 AM ET — v2 ALERT — a real style shift**

v1 clean (div 1.35, only ttr_win significant at -2.52). v2 ALERT at 99.556th pct, just over the 99.5 operating line — drivers: ttr_win crater (z=-2.71), pivot (2.1), jaccard_next (2.0), excl (1.99), hedge (1.9) spikes. Window covers the GOONER CLUB negotiation thread tail, the body-telemetry mannequin commission, the PIX&VIDS side-chat intake (Alexis 2017 cam session), and the breast-measurement photo volley — a genuine stylistic divergence (aroused, negotiating, exclamation-heavy, image-attachment cadence), which is what the alert exists to catch.

*v1 div 1.35 (line 2.0) · v2 99.6th pct (line 99.5), div 3.14 · 113 messages*
*Strongest signals: vocabulary narrowing (repeating the same words); longer messages; longer words.*

**Sep 16, 3:01 AM ET — v2 ALERT — a real style shift**

v1 clean (div 1.45, only ttr_win significant at -2.69). v2 ALERT at 100.0th pct, past the 99.5 operating line - drivers: ttr_win crater (z=-2.85), jaccard_next spike (2.0), excl/has_excl (1.96), n_chars (1.85). Window covers the scratch-off QR-checking volley, the $TYLE/TAG SYSTEM tag-action volley, the long Abatar me/us + Option N volley, the body-telemetry mannequin commission, the PIX&VIDS Alexis-2017 intake and breast-measurement photo volley, and the goon-club tail into the sex-robots bit — a genuine stylistic divergence (aroused, terse, repetition-heavy, attachment cadence), which is what the alert exists to catch.

*v1 div 1.45 (line 2.0) · v2 100.0th pct (line 99.5), div 3.55 · 68 messages*
*Strongest signals: vocabulary narrowing (repeating the same words); longer words; message-to-message repetition up.*

**Sep 16, 9:56 AM ET — v1 flagged on noise, v2 stayed clean**

Engines disagree this window: v1 FLAG (div 2.45) vs v2 CLEAN (99.09th pct, no flag/alert). Both score the same short-burst + attachment-path shape; v2's null-matched percentile keeps it under the line. First v1-flag-vs-v2-clean split of the burn-in day — exactly the flag-rate comparison this week exists to collect.

*v1 div 2.45 (line 2.0) · v2 99.1th pct (line 99.5), div 5.58 · 7 messages*
*Strongest signals: message-to-message repetition up; longer messages; longer words.*

**Sep 16, 12:31 PM ET — v2 ALERT — a real style shift**

v2 FLAG+ALERT on trailing_n (last 20 msgs) vs v1 clean on the same window (div 1.94, just under the 2.0 line, 2 significant). Both engines see the same shape: mechanically repetitive terse picks ('Abatar me' xN, 'Option 2' x2, 'Generate 4 videos' x2, 'Annie' x2) tank TTR (v1 -2.75, v2 -2.59) while attachment-path tokens inflate n_chars/cpw (v1 2.23/1.31, v2 2.15/1.84); v2's null-matched percentile lands at 1.0 (100th pct, over the 99.5 line) on that structural shape while v1's index stays under. Axis signature (volume, rhythm), not suppressed — first v2 alert of the burn-in day on this mechanical-batch shape; second engine split of the day (13:56 was the mirror: v1-flag-vs-v2-clean). Structural, not behavioral.

*v1 div 1.94 (line 2.0) · v2 1.0th pct (line 99.5), div 5.65 · 20 messages*
*Strongest signals: vocabulary narrowing (repeating the same words); longer messages; excl_p100.*

**Sep 16, 2:59 PM ET — v2 near-miss — loud, not a flag**

Both clean on every gate, but v2 null_pct 99.232 is the highest of the burn-in week so far — 0.27pp under the 99.5 operating line, not a breakage signal. Drivers fit the window's content: the 16:41-16:50Z Annie gooner/worship bit (emoji/excl/profan lift), the Spanish Valeria flirt burst ('Estoy enamorado', 'Para una mujer con la carichimba'), and the repeated 'Abatar me / Option N' image-batch volleys (ttr_win crater -2.38). Loud window, not a real divergence.

*v1 div 1.20 (line 2.0) · v2 99.2th pct (line 99.5), div 3.62 · 110 messages*
*Strongest signals: vocabulary narrowing (repeating the same words); emoji density up; excl_p100.*

#### Quiet stretches

- **Sep 15:** 2 runs, both engines clean (10:55 PM–11:25 PM ET).
- **Sep 16:** 22 runs, both engines clean (1:32 AM–4:00 PM ET).

- **Sep 16, 6:30 AM ET:** run blocked — worker had no message-collection route (no chat tools, no DB ticket); /tmp/stylo_recent.jsonl deleted per stale-input guard.

#### What a flag does NOT prove

A flag is a **style shift**, not a diagnosis. It says the shape of the writing moved — vocabulary narrowed, exclamation marks spiked, repetition climbed — not *why* it moved. An alert is the engine saying "this is unusual enough to mention," not "this is what happened." Inference is not proof; the window's actual content is the only thing that can say what was going on.

<!-- STYLO-RESULTS-END -->

### Dan's 2026-09-16 directive: daily reports in English, in main chat

At 16:31:55Z on 2026-09-16, after receiving the burn-in read in plain
English, Dan issued a standing directive: "make a wiki entry and do full
daily reports in English like that." The wiki entry is this page (merged
as PR #98). The reporting commitment: **full daily reports in English,
starting 2026-09-17 ~09:41 ET, delivered in the main chat** — a quiet day
gets two sentences, a flagged day gets the full rundown. This is distinct
from the 09:00 ET digest, which runs in the pinned STYLOMETRY chat; the
new directive puts the plain-English report where he actually reads it,
every morning.

### Open problems

The null's window construction is still suspect — adjacent rows in a sorted tier sequence are not necessarily one conversation, so some "windows" are spliced from unrelated chats. Until that's fixed or justified, v2's numbers are burn-in data, not an authoritative baseline. Live requests score against the long-tail fallback, not a true Muse tier.

### 2026-09-17: v3 commissioned — the substance layer

On the evening of September 17, 2026, Dan commissioned the next
instrument: v3, which measures not how he writes but what he is writing
about — the substance and contextually aware meaning of his messages. The
build was delegated to Claude Code under his standing Claude carte blanche,
with a build prompt Sammy drafted to his constraints: reduce token spend
without sacrificing fidelity, and make it work as a *system* with the v2
instrument that is already functioning well.

The architecture, as designed: two layers with different cost profiles. A
free stdlib lexical layer rides the existing 30-minute loop — entity
spikes, topic-mix divergence against his historical topic null,
discourse-move proxies (commissioning vs interrogating vs theorizing). The
LLM semantic layer fires only on v2 flags, alerts, and the daily digest,
because LLM-judging every half hour is expensive noise. The product is the
2×2 joint read — style-shift crossed with semantic-shift. The honest
confound, stated in-chat before the build started: topic is task-coupled,
not state-coupled. Three hours on wiki architecture spikes semantic
divergence with his state flat. Either axis alone lies; the pair doesn't.

Seven known limitations were baked into the build prompt as problems
Claude must *solve*, not document — including the open v2
window-adjacency bug (v3 must not inherit it silently), the
never-assert-identity-on-a-guess registry discipline (from the
September 16 Annie-vs-Alexis correction), and the calibration gate
extended with a higher bar. v2 stays byte-identical throughout; nothing
about the working instrument gets touched.

Same session, Dan asked for his Claude Code skills to be copied over.
There was exactly one custom skill on his Claude Code side —
imessage-extract — and it is now Sammy's, byte-exact. The v3 build was
still cooking at last check (20:27 EDT); installation and the adversarial
review pass happen on delivery, same as v2. See
`dat:1716-stylometry-v3-delegation-20260917`.

## v3: delivery and production wiring (September 17–18, 2026)

v3 landed at 01:31Z on September 18 and went straight into production.
The delivery report and the branch disagreed on arrival — the report
claimed 20 failing tests, the PR branch ran 59/59 green — and the branch
won: v3 installed byte-exact from the PR branch with all 59 tests
passing. One real integration fault surfaced during install: the v2
adapter needed alignment with v3's expectations (a test-harness adapter
built against v2 assumptions); v2 itself stayed byte-identical, per the
standing rule.

By 01:47Z the production wiring was live. The 30-minute loop runs v3
as its scorer, reading all 94,503 sent texts plus recent chat messages;
topic profiles were rebuilt on the real corpus (not the factory
defaults), and the bridge back into the v2 dashboard verified — v3's
semantic read now sits alongside v2's lexical flags in the same place
Dan already checks. The cost discipline from the design held: the LLM
semantic layer fires only on real v2 flags/alerts and the daily digest,
never on the bare half-hour tick. The deep-read trigger is
contradiction-gated — genuine divergence between the two axes earns a
second look; agreement doesn't. One axis is still dark: the entity
layer is dead until the name registry gets populated, which is a data
task, not a code task.

The measurement week v2 opened runs through roughly September 22–23,
and the lean-collector cutover decision is calendared for Wednesday,
September 23, 9:00 AM — v3's first production verdict arrives there.
See `dat:1725-stylometry-v3-production-20260918`.

## STREAM: the in-chat typing calibration burst (September 21, 2026)

The calibration problem has a human end. The stylometry scorers detect
style-shift; Dan wanted the other half — a *state label he controls* —
because the v3 substance layer needs ground truth on intoxication the way
it needs ground truth on task-confound. On 2026-09-21 (13:09 EDT, main
chat) he commissioned it directly: *"Can you develop an instrument we can
run in chat to gauge it? Like short writing prompt?"*

The instrument: **STREAM**, a 90-second typing burst — one prompt, no
editing allowed. It tracks WPM, backspaces, pauses, inter-key latency, and
burst index (the "raggedness measure"). He runs it in chat and pastes the
result block back; the run logs into the calibration set alongside his
state labels. The 𝗦𝗧𝗬𝗟𝗢𝗠𝗘𝗧𝗥𝗬 side chat carries the instrument and its
log.

First calibration day, same afternoon: Dan declared 2026-09-21 a heavy
cocaine day (*"Today will be a good day to log cocaine indicators though
I got more than usual"*). The day's labels: first line ~08:45 EDT (a
single-use portion of Suz's cocaine, traded for a coffee he made her),
second line 12:00 EDT (*"I just did a second line of coke"*) — the first
calibration-intentional self-label of the day — and a third line by
13:12. Run 1 landed at 13:13 EDT, post-third-line: **51.3 wpm, 77 words,
400 chars, 437 keys, 17 backspaces, corr_pct 3.9, 4 pauses, iki_med
152ms, burst 1.19** (prompt=3). The instruction on the books: run it
again on the next state change and the arc gets the full
onset/peak/redose/coming-down shape.

Design honesty, stated up front: typing speed is state-sensitive but not
state-specific — fatigue, caffeine, excitement, and hour of day all move
the same numbers, and a heavy user's tolerance floor differs from a
naive user's. STREAM is a calibration instrument for *within-person,
within-day* comparisons anchored to his own labels, not a drug test. See
`dat:1857-stream-typing-instrument-20260921`.
