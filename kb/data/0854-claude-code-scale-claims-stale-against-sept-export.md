+++
id            = "dat:0854-claude-code-scale-claims-stale-against-sept-export"
layer         = 1
type          = "datum"
title         = "Claude Code's scale numbers are stale against the 2026-09-04 export; authorship claims rest on unheld git history"
claim         = "The claude-code page (written **2026-08-19**) asserts **473 wiki pages, 27 synthesis pages, and 2,006 prose edges**. The old-wiki export taken **2026-09-04** records **497 pages** (pages.json page_count), **40 synthesis-path pages**, and **2,679** '- page: wiki/' connection stubs in whole.txt. The discrepancy is staleness, not fabrication — the wiki grew between the page's writing and the export — but the page's numbers are no longer the corpus's numbers. The page's authorship claims ('Claude Code built every tool', the branch list, LLM_HANDOFF.md) rest on git history and a handoff document that are **not held in this repository**; this repo's bin/ (14 wikitest tools: corpus-query, corpus-stats, corpus-verify, wb-archive, wb-build, wb-census, wb-check-publish, wb-corpus, wb-corroborate, wb-facebook-manifest, wb-ingest, wb-new, wb-query, wb-validate) is the new rebuild's tooling, not the old wiki's claimed bin/ (wiki-lint, wiki-connect, wiki-reflow, wiki-rerank, wiki-viz, wiki-search, corpus-check — none of which appear in the export). Those claims are old-wiki testimony pending the original repository."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Corpus page read directly (corpus__3.txt line 75865, 304 lines; frontmatter date_modified 2026-08-19). Export measurements run directly: pages.json {'page_count': 497, 'pages': 497 entries}; 40 pages with 'synthesis' in path; grep -c '- page: wiki/' whole.txt = 2679 (the page's '2,006 prose edges' is a narrower count from an unheld measurement pass, noted as not independently checkable). This repo's bin/ listing observed 2026-09-09. LLM_HANDOFF.md not found anywhere in this repository."
importance    = 3
tags          = ["claude-code", "ai-history", "staleness", "correction", "source-gap"]
created       = "2026-09-09"

[when]
start = "2026-08-19"
end   = "2026-09-04"
+++

## What the page gets right anyway

The staleness cuts only at the numbers. The page's central structural
claim — that an agent built and maintains most of the wiki's machinery,
with named tools and a review ritual — is consistent with the rebuild
session's own provenance notes in this repository, and this node does not
contest it. It files only that the specific counts are expired and the
specific authorship evidence is unheld, so neither should be quoted as
current without a re-pull of the original repo.
