+++
id            = "dat:0581-unfortunately-youre-gorgeous-quote-unheld"
layer         = 1
type          = "datum"
title         = "The lexicon's 'I have reviewed the available evidence and unfortunately you're gorgeous' line has no held-corpus instance"
claim         = "The forensic-method page quotes the bespoke lexicon's showpiece line — *\"I have reviewed the available evidence and unfortunately you're gorgeous\"* — as proof the forensic apparatus runs on compliments too ('cite the evidence, invoke an authority, render a finding' with the subject swapped). **No instance of this line exists in the held corpus**: a scan of all 192,140 rows of `corpus/messages.csv` for 'available evidence' returns exactly one hit (2024-07-31, about 'crack-thump audio measurements' in a J6 context), and zero hits for \"you're gorgeous\" in any form. The line's only occurrences in the old-wiki export are the forensic-method page's own frontmatter connection and the lexicon page's body. It may come from an unheld channel; it is not an iMessage on this record."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Direct Python CSV scans of corpus/messages.csv: 'available evidence' → 1 hit (row 121435, 2024-07-31 20:25:55, is_from_me=1, 'And none of the official narrative matches the best available evidence : the crack-thump audio measurements don't match the distance…'); \"you're gorgeous\" → 0 hits. Old-wiki export grep: the line occurs at whole.txt line 16079 (this page's frontmatter) and 19515 (the lexicon page, wiki/mind/profile/lexicon). The lexicon page itself is outside this ingest wave; its sourcing for the line is not visible from here."
importance    = 2
tags          = ["forensic-method", "lexicon", "imessage", "unverified"]
created       = "2026-09-09"
+++

## What the check establishes

A clean negative: the most quotable line in the forensic-method/lexicon
argument has no iMessage on the held record. That does not make it
fabricated — the corpus is one channel among several the wiki draws on —
but it means the line's evidentiary status is 'wiki-asserted', and any
downstream page treating it as corpus-documented is overclaiming. The
lexicon page's own ingest should carry this check forward.
