# Dan's Stylometric Fingerprint — v1 baseline

Built 2026-09-11 from 94,503 outbound iMessages (2011–2026). This is the
reference distribution every future window gets scored against.

## The shape of his writing

- **Terse texter:** 10.8 words/message average, 1.2 sentences/message,
  8.7 words/sentence. Long messages are the exception, not the rule —
  which is exactly why the weed-episode monologues spike so hard.
- **Lowercase native:** 8.4% caps rate. Capitalization is emphasis, not default.
- **Fragment-friendly:** 35.5% of sentences are short fragments.
- **Question marks are rare events:** only 6.4% of messages contain one,
  and the per-100-word density has std 14.4 vs mean 1.9 — questions come
  in bursts or not at all.
- **Exclamation almost nonexistent in texting:** 1.6% of messages.
- **Ellipsis is his pause:** 0.45 per 100 words, the characteristic trail-off.
- **First-person singular dominates:** 7.5 I-words per 100 vs 5.3 you-words
  vs 0.6 we-words. He narrates from inside his own head.
- **Negation-heavy:** 2.1 per 100 words — he defines by what things aren't.
- **Intensifiers over hedges:** 1.42 vs 0.24 per 100. He commits, then
  pivots with actually/honestly/literally (0.40 per 100).
- **Profanity is punctuation:** 0.81 per 100 words, steady background radiation.
- **Lexical novelty 4.2%:** tokens outside his own 6,341-word personal
  lexicon. Note: his habitual typos (wirh, abiut) are IN the lexicon —
  novelty fires only on new ones.
- **Emoji nearly absent:** 0.26 per 100 words.

## The shape of his sessions

- **Window vocabulary richness (TTR):** 0.62 ± 0.11 — mid-range, he
  recycles diction within a session.
- **Consecutive-message overlap:** 0.023 ± 0.072 — near zero. He jumps
  topics between messages constantly; this is normal for him, so a high
  overlap window would itself be the anomaly.
- **Burst rate:** 38.5 ± 102 msgs/hr — extremely skewed. He either
  machine-guns or goes silent.

## When he writes

Busiest texting hours are **22:00–03:00 ET**. He's a night texter; a
3am burst is his baseline, not a deviation. Hour-of-day baselines are
used for scoring whenever the hour bucket has n≥30.

## Calibrated episodes

1. **2026-09-11 00:47–05:35 ET — cannabis-high** (Dan's own label,
   confirmed same-night: "i'm chopped and choomed"). 97 messages.
   Candidate signature: sustained ~20/hr burst, long winding monologues
   (words/sentence 2.2σ up), elevated novel-typo rate, fragmented
   self-repair chains, rapid topic chaining, grandiose playfulness.
   Status: hypothesis, N=1.
