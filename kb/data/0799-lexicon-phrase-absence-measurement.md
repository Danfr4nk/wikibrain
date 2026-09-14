+++
id            = "dat:0799-lexicon-phrase-absence-measurement"
layer         = 1
type          = "datum"
title         = "Lexicon: the page's own 'no usage evidence' finding holds against the held corpus — zero hits for its distinctive phrases"
claim         = "The lexicon page reports a negative: a targeted search of the general message corpus for *resplendent*, *administratively*, *the tribunal*, *aesthetic felony*, and *anomalous concentration* returned no hits, consistent with 'v1.0' being a freshly commissioned tool rather than documented practice. A direct Python scan of all 192,140 rows of `corpus/messages.csv` reproduces it: **0 hits** for each of those phrases (case-insensitive substring). This is a measurement of the held iMessage channel only — it is `never_observed` in that channel, not `known_not_to_occur` elsewhere; unheld channels (Facebook, AI-chat exports, newer message exports) are outside the scan."
cites         = ["src:imessage-corpus-2026"]
measurement   = true
confidence    = "moderate"
extraction    = "Direct Python CSV scan of corpus/messages.csv (192,140 rows), 2026-09-09: 'resplendent' → 0, 'administratively' → 0, 'tribunal' → 0, 'aesthetic felony' → 0, 'anomalous concentration' → 0. Cross-checks against dat:0581 ('unfortunately you're gorgeous' line also absent) and the forensic-method page's quotation of the showpiece line. The lexicon page itself lists the same five phrases at corpus__3.txt lines 25839-25845."
importance    = 2
tags          = ["lexicon", "imessage", "negative", "measurement"]
created       = "2026-09-09"
+++

## What the check confirms

The page's v1.0 reading survives re-measurement: if any of the generator's
signature phrases had leaked into daily iMessage use, the held corpus would
hold them. They are not there.

## What it does not confirm

Non-deployment is not proven — a phrase could have been used off-corpus
(Facebook, in-person, a newer export) or paraphrased. A revisit is warranted
whenever deployment shows up; this node is the baseline for that revisit.
