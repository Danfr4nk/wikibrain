+++
id            = "dat:0853-chatgpt-export-measurements-unheld-post-gpt5-gap"
layer         = 1
type          = "datum"
title         = "ChatGPT export unheld: the 375-conversation measurements are page-attributed; the post-GPT-5 decline claim is untestable by construction"
claim         = "The ChatGPT export the page measures (raw/self/chatgpt-export/dfrank-chatgpt-conversations-2022-2025.json) is **not held in this repository**, so the entire measurement layer — 375 conversations, 2022-12-10 to 2025-07-01 span, 1,456 user / 1,599 assistant turns, 5 text refusals (all April–May 2025), 4 image policy blocks, the 194-day dormancy, the 79-conversation May 2025 peak — is page-attributed and unre-derivable here. Two of the page's self-documented caveats survive as logic rather than measurement and are worth carrying forward. First: GPT-5 shipped **2025-08-07** (web-verified; TechCrunch, URL in extraction), **37 days after the export ends** — so the page's post-GPT-5 usage-decline narrative is untestable by construction, which the page itself admits. Second, the load-bearing correction: the 'chatGPT is cooked' line the page quotes for **2025-08-24** is **Gemini output, not Dan's words** — Dan's held evidence for a decline view is only 'gemini i think chatGPT is cooked', while the chicken-nugget and 'decline is irreversible' rhetoric was the model writing back to him. Third: the four DALL-E tweets of 2022-09-08, which the page uses to close its origin-story gap, are not in any held corpus (no twitter archive is held; the tweets appear only as quotes inside the page itself), so the DALL-E half remains testimony. The export-era boundary itself — that nothing in this corpus witnesses Dan's post-GPT-5 ChatGPT usage — is a held, checkable negative: corpus/messages.csv ends 2026-09-07 and contains no ChatGPT conversation export."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Corpus page read directly (corpus__3.txt line 75462, 403 lines). The export file is absent from raw/ and ~/workspace/user/files/. Web 2026-09-09: GPT-5 release 2025-08-07 confirmed (https://techcrunch.com/2025/08/07/openais-gpt-5-is-here/; also en.wikipedia.org/wiki/GPT-5). DALL-E tweet check: case-insensitive scan of corpus__3.txt for 'dalle' returns only the chatgpt page's own quotes (lines 75565-75599); no twitter archive is held in this repository. The page's '375 conversations' measurement cannot be re-run."
importance    = 4
tags          = ["chatgpt", "ai-history", "source-gap", "gpt-5", "page-attributed", "testimony-boundary"]
created       = "2026-09-09"

[when]
start = "2022-12-10"
end   = "2025-08-24"
+++

## What to carry forward

Three durable facts, none requiring the missing export: (1) every ChatGPT
measurement in the prior wiki is attributed testimony until the export
reappears; (2) the 'cooked' quote is model text, and the decline narrative
is therefore thinner than it reads; (3) the export predates GPT-5 by five
weeks, so the page's final arc is an acknowledged projection, not a
finding. A worker who locates the export should re-run the counts before
promoting any of them.
