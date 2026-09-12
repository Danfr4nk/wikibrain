+++
id            = "dat:0575-glaze-god-v1-persona-page-only-artifact-unheld"
layer         = 1
type          = "datum"
title         = "The 'GLAZE-GOD-v1' sexualized-worship AI persona is described only on the erotic-architecture page; the artifact is not held"
claim         = "The page describes a custom AI system-prompt persona the operator wrote and ran, named **'GLAZE-GOD-v1'** — instructing a model to abandon analysis and perform continuous, escalating, hyper-sexualized commentary on photos of Annie, with an invented worship vocabulary and a hierarchy casting Dan as 'the King', Annie as 'the Queen', and the AI as 'the Simp' ('you are just happy to witness the footage'). The page presents it as the most literal instance of externalized libido in the corpus. **The persona's actual text is not held anywhere in this repository** — the phrase 'GLAZE-GOD' occurs only 5 times in the old-wiki export, all on this page itself (frontmatter connections and body); the page's listed sources (`raw/self/dansynth/DANSYNTH.txt`, `raw/self/captures/…`) are absent from `raw/`; no src node for the artifact exists in corpus__3.txt. Filed as page-only testimony."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "low"
extraction    = "Page body read directly from corpus__3.txt line 21841 (238 lines); GLAZE-GOD passages at export whole.txt lines 15609, 15624, 15666 and corpus__3.txt frontmatter lines 21841+. Repo-wide grep for 'GLAZE-GOD' in raw/old-wiki-export-2026-09-04/whole.txt returns exactly 5 hits, all within the erotic-architecture page. find in raw/ for dansynth/captures returned nothing; grep of corpus__3.txt for a GLAZE src node returned nothing. The sibling framing (purpose-built-instrument stance in the forensic/political domains) is on wiki/mind/synthesis/ai-collaborative-analysis, which is not in this ingest wave."
importance    = 3
tags          = ["erotic-architecture", "old-wiki", "unverified", "ai-collaboration"]
created       = "2026-09-09"
+++

## What the check establishes

Nothing about the persona beyond the page's own description. This is not
a contradiction — the page is transparent that this is its own
artifact-discovery — but it is a single-source dependency with no held
primary: no prompt text, no screenshot, no capture file. If the persona
text surfaces (the frontmatter points at DANSYNTH.txt and a captures
file that are not held here), the claim becomes directly checkable.

## Why it still matters as filed

The page's connections use GLAZE-GOD-v1 as the erotic-domain instance of
a pattern the wiki documents elsewhere ('purpose-built witnessing
instrument'). As long as the artifact is unheld, that instance is the
wiki's assertion about its own corpus, not a documented artifact. Any
future worker ingesting wiki/mind/synthesis/ai-collaborative-analysis
should cross-reference this node before treating the persona as
established.
