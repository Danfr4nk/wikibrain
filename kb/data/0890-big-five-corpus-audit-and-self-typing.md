+++
id            = "dat:0890-big-five-corpus-audit-and-self-typing"
layer         = 1
type          = "datum"
title         = "2026-08-16 corpus audit of the Big30: Altruism 1 inverted and specific; the 5w6sx RLOEI self-typing verified; calibrated confidence re-derived 13/0"
claim         = "The big-five page's 2026-08-16 corpus audit (`bin/psychometrics`, run over Dan's 106,629 sent messages against 110,944 received from 503 handles as within-medium control) produced three headline results. **(1) Altruism 1 is inverted, and the inversion is specific:** instrumental helping language runs at 1.79–2.49× baseline (offering help unprompted 1.79×, concern for the other person 2.49×) while the affective half (sympathy tokens) runs at 0.45× — \"high-provision and low-condolence,\" not low-warmth. **(2) Ti-dominance is categorical:** the narrow construction — quantifying your own confidence as a percentage (\"I'm 95% sure\") — appears 21 times outbound and **zero** times in the 110,944 received messages; a broad \"any percentage\" proxy dilutes the signal to 3.25×. Confirmed facets: Artistic Interests 3.82×, Schizotypal 2.39×, Trust 1.96×, Sympathy 0.45× (all supported); Antisocial 1.85×, Self-Consciousness 1.85×, Sociability 0.73× (lean yes). Silent facets: Impulsiveness 0.92×, Introspection 0.96×, Vulnerability 0.81×. **(3) Held-corpus re-derivation:** an independent scan of corpus/messages.csv (192,140 rows; 99,360 outbound) reproduces the categorical finding at **13 outbound / 0 inbound** for the narrow self-confidence construction (examples: 2015-12-03 \"I am 95% sure she quit...\"; 2026-02-19 \"I am 98.7% sure you don't believe any of your catholicism\"; 2026-09-05 \"Im 99.999999% sure you don't want to hang out with me after work\"); the lower absolute count vs. the page's 21 is consistent with the held pull being the smaller slice (192,140 vs 217,573 rows). **(4) The single first-person self-typing is verified:** corpus/messages.csv id 14417, 2024-11-04 20:54:34 UTC, outbound, reads *\"I could have given it way more accurate info if I had the numbers above the area you screenshotted but I just said 'vanessa is an xNFP 4w5 and Dan is an INTP 5w6sx RLOEI - compare them'\"* — i.e., **5w6sx RLOEI against the dossier cluster's 5w4 / RLUEI**, exactly as the page states. A full-corpus (not held-only) re-derivation of the calibrated-confidence figures lives at [`dat:0663`](0663-0665) wave — cited, not repeated."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Audit ratios are the page's (bin/psychometrics output, unheld tool), carried as attributed testimony. Re-derivation done 2026-09-09 with Python csv/re directly against corpus/messages.csv: narrow-construction regex \"(i'm|i am) <num>% (sure|certain|positive|confident|convinced)\" — 13 outbound, 0 inbound. Self-typing: single full-text hit for '5w6|RLOEI' in 192,140 rows (id 14417, quoted verbatim above, CSV timestamp is UTC). The audit's full-corpus totals (106,629 sent / 217,573 records) exceed the held pull (99,360 / 192,140) — counts were not rescaled, only the categorical direction was re-checked."
importance    = 5
tags          = ["psychometrics", "corpus", "corroborated", "old-wiki"]

[when]
date = "2026-08-16"
+++

## Notes

The audit's jurisdiction, carried over from context-core and stated on the page: failure to corroborate is not falsification — the silent facets (Impulsiveness 96 at 0.92× immediacy language) do not falsify the instrument. The pattern of what survives (attention-direction facets: aesthetics, patterns, motives) vs. what vanishes (internal-regulation facets: impulse, overwhelm, introspection) is the page's own reading: the corpus is a record of attention, not interior state.
