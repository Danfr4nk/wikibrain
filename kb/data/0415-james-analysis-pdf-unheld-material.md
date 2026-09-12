+++
id            = "dat:0415-james-analysis-pdf-unheld-material"
layer         = 1
type          = "datum"
title         = "James page's curation, guilt, and self-profile material is chat-sourced and not in the held iMessages; the PDF is absent from raw/"
claim         = "Three load-bearing blocks on `wiki/timeline/events/james-analysis-pdf.md` are sourced to the chat log `raw/self/chats/The 2nd most famous _Jimmy Pop_ in Pennsylvania .md`, which is not held in this repository: (1) the curation quotes — *'((i may have chopped out the more critical stuff because i didn't want to bum him out))'* and *'yo what the FUCK i just re-read the whole pdf i sent to him… and it is like 100% positive and supportive'*; (2) the guilt sentence — the first-ever guilt over the 2009 Danielle breakup ('and i just need to say - the stuff with Annie has made me feel guilty for the first time in my life'); (3) Dan's self-drafted harsh self-profile ('Dan is a cocaine addicted, basement dweller...') and the commissioned ChatGPT self-profile. None returns hits in the held `corpus/messages.csv`. The page's own Gaps section admits the PDF itself is absent from raw/ — only the model's unredacted source text survives in the chat log."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Exact-phrase searches of the held 192,140-row corpus/messages.csv for the curation quotes, the guilt sentence fragments, and the self-profile text returned zero rows. The chat log source named in the page's frontmatter is not present in this repo. Corpus page and old-wiki export are text-identical."
importance    = 3
tags          = ["timeline", "corpus-gap", "old-wiki", "attribution", "unverified"]
created       = "2026-09-09"

[when]
start = "2025-07-11"
end   = "2025-07-21"
+++

## What this establishes and what it does not

**Established:** the page's most-analyzed material (the curation finding that
carries the-handed-mirror, the first-guilt sentence, the self-profile
counter-move) is old-wiki/chat attribution, not held-record fact. It is the
page's analytic core, so the attribution must travel with any reuse.

**Not established here:** that any of it is wrong — the chat log is a real
named source, just not a held one.

## Cross-references

- [`dat:0413`](0413-james-analysis-pdf-sequence-verified.md),
  [`dat:0414`](0414-james-analysis-pdf-aftermath-superseded.md) — same page.
