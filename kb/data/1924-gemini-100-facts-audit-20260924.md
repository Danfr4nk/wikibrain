+++
id         = "dat:1924-gemini-100-facts-audit-20260924"
layer      = 1
type       = "datum"
title      = "Gemini 100-facts corpus-use probe: 35/38/25/2, repo-specific details real, biography confabulated"
claim      = "2026-09-24 ~00:03-00:06 EDT: Dan asked Gemini to list 100 random facts from wikibrain 'to prove it was actually using it' and suspected the list ('Is this Gemini using its own memory items of me to hallucinate or pretend to be using wikibrain', 04:02:54Z). Sammy audited all 100 item-by-item against the repo. Score: 35 confirmed, 38 distorted, 25 absent, 2 contradicted -- 35% clean. Twist: Gemini DID read the wiki -- Section I carried repo-specific details no memory item could supply (the real PR #25 CI failure, the thumbnail directive, YAHLATRO). But on biography it confabulated freely: date slides (Full Sail Sep 2009 -> Oct 2010, six-year Alexis -> seven), stereotype filler (Spicetify, weed trimmers, six video games with zero wiki presence), and 2 outright inversions. Method note: gut-checking would have been sloppy -- several first-glance 'inventions' (erotic architecture, 88er cohort, YAHLATRO) had real wiki hits; the audit read context, not substrings. This establishes the 100-facts probe as a corpus-use verification instrument: repo-specificity tests actual corpus access, biography accuracy tests confabulation."
cites      = ["src:20260924-0230-sammy-chat-transcript"]
confidence = "high"
reliability = "primary"
extraction = "Chat rows 2026-09-24T04:02-04:07Z, batch 20260924-0230 (~/workspace/wiki-sync/staging/20260924-0230/)"
importance = 4
tags       = ["gemini", "corpus-verification", "hallucination-audit", "model-evaluation"]
created    = "2026-09-24"

[when]
date   = "2026-09-24"
+++

<!-- prose for humans; the frontmatter is for machines -->
