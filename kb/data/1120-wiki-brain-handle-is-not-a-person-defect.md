+++
id            = "dat:1120-wiki-brain-handle-is-not-a-person-defect"
layer         = 1
type          = "datum"
title         = "Wiki-Brain page: 'a handle is not a person' — third-party typing on Annie's 212 handle, Jul–Aug 2026"
claim         = "The wiki-brain page records a structural defect of the corpus as a **RE-CHECKED [2026-08-20]** finding: **a handle is not a person.** Every message-derived attribution in the old wiki assumed the sender of a row is the owner of the handle it came from; at least **six inbound rows on Annie's 212 handle** across **July–August 2026** were typed by a **third party holding her phone**, in three separate episodes, all during crises — the periods the corpus draws its highest-stakes claims from. Counts are unaffected; attributions are not. There is no column for this and no automated detector; the three known episodes were identified from register alone. The page frames this as the same class of failure as the AI-secondary attribution reversals of 2026-08-19 and the `MASTER_MESSAGES_DB_DUMP` count error — 'confident metadata that answers a slightly different question than the one being asked.' A second **RE-CHECKED [2026-08-21]** refines the page's origin claim: ChatGPT is the wiki-brain's origin *site*, not its origin *motive* — the 375-thread export shows Dan's ChatGPT use starts **2022-12-10** (ten days after launch) with the first eleven threads being puns, voice-over rewrites and a video essay, the bootloader work a later development. The page's corpus figures (217,573 messages / 503 handles, 106,629 sent / 110,944 received, 9.6x duplication as error-detection) match the counts this repository independently holds (dat:0001); the attributed/derived claims are relayed through the prior wiki."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 76931 (185 lines); corpus page and old-wiki export are text-identical — the 'A handle is not a person' blockquote and the 2026-08-21 origin refinement are present verbatim. The six third-party-typed rows and the 375-thread ChatGPT export are unheld (the old wiki's message merges and the chatgpt-export JSON are not in this repo's raw/ tree), so the defect finding is page-attributed testimony, not re-derived. The corpus scale figures were checked against dat:0001 and agree. No held-corpus search was run for the Annie 212-handle episodes: identifying register-based third-party typing is the page's own method, and replicating it from the held slice without the page's episode definitions would be a new finding, not a check."
importance    = 5
tags          = ["wiki-brain", "attribution", "data-quality", "old-wiki", "method"]
created       = "2026-09-09"

[when]
start = "2026-07-01"
end   = "2026-08-31"
+++

## Notes

- The defect is load-bearing for this whole rebuild: every datum in this
  repository that attributes inbound Annie rows in July–August 2026
  inherits the caveat that at least six of those rows were typed by someone
  else, identifiable only by register. The page's own remedy — flagging the
  defect at the level where the assumption was made — is the model for how
  the cut should be handled here.
- The 2026-08-21 refinement is a dating correction to the llm page's
  'ChatGPT is the origin point' edge: origin *site* vs origin *motive*.

## Cross-references

- [`dat:0627`](0627-node-locking-aggregate-counts-unheld-gemini-corpus.md) —
  the Gemini-side aggregate counts the wiki-brain page's own figures
  parallel.
