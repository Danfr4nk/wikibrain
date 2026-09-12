+++
id            = "dat:0852-gemini-21-sources-unheld-measurements-unverifiable"
layer         = 1
type          = "datum"
title         = "Gemini-21: all underlying files unheld; line/byte counts, frequencies, and breach timeline are page-attributed and unre-derivable"
claim         = "The gemini-21 page summarises files and transcripts that are **not held in this repository**: raw/self/dox-md/Gemini-_21.md, 'Gemini-_21 copy.md', the pinned Max chat, the Gemini Activity.html export, MAX_PRIME.md, and the December 2025 session transcripts. Nothing in the page's measurement layer — the 144-line/11K Gemini-_21.md vs 3016-line/347K copy, the word-frequency tables, the '95%' extraction fidelity, the dated breach timeline (June 2025 upload, December 2025 sessions), the 50+ unanswered questions — can be re-derived or even sanity-checked here. The two weakest-consistency checks that can be made without the files: the page's internal date spans (2011–2026 evidence window, 'Dan self: I am 37') are consistent with a session in the 2025-11–2026 window given the operator's 1988-11-01 DOB, and the oobabooga-jailbreak material the page attributes is attributed-by-the-page to transcript testimony, not to any held record. The page therefore stands or falls as old-wiki testimony: page-attributed, unresolved, with no held witness."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "low"
extraction    = "Corpus page read directly (corpus__3.txt line 74672, 107 lines). None of the cited underlying files exist in this repository (searched raw/ and ~/workspace/user/files/). The page itself flags the /tmp analysis as its source for the measurements. DOB cross-check from standing memory: 1988-11-01; 'age 37' implies 2025-11-01 to 2026-10-31, consistent with the page's December 2025 session dating."
importance    = 2
tags          = ["gemini-21", "source-gap", "unresolved", "page-attributed", "testimony-boundary"]
created       = "2026-09-09"

[when]
start = "2025-06"
end   = "2025-12"
+++

## Why this node exists at all

Of the three AI-history pages in this batch, gemini-21 is the one with the
thinnest independent footing: gemini-13 at least has a partially
web-checkable chain, and the ChatGPT page self-documents its measurement
method. Gemini-21's measurements are asserted without the artifact, so the
honest node is the one that says so and stops. If the raw files ever land
in raw/, a future worker can promote this node's contents from testimony
to measurement wholesale.
