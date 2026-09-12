+++
id            = "dat:1220-danmodel-blind-eval-unanswered"
layer         = 1
type          = "datum"
title         = "DANMODEL: the voice-clone pipeline's blind test was built but never ran to a recorded result — the project's core question is unanswered on disk"
claim         = "The wiki/work/tech/danmodel page documents DANMODEL, a from-scratch Python+numpy ML pipeline (found in a Google Drive folder, ~~DOCS/DANMODEL) that extracts stimulus-response pairs from Dan's message corpus and builds a retrieval-plus-generation voice clone, with a blind-evaluation harness (eval_harness.py) designed to report a RAG-vs-baseline win rate and a confusion rate. The page's headline finding: no eval_results_*.jsonl file exists anywhere in the Drive folder, so the single question the project was engineered to answer — can an AI trained on Dan's own texts pass for him under blind judgment — is, per the evidence on disk, unanswered. The extraction statistics the page carries (39,378 total reaction pairs: 34,808 train / 4,570 held-out; Annie (early) 15,723 pairs = 40%; unmapped 13,761 = 35%; peak years 2018: 9,728 and 2025: 8,034; Dan's burst size mean 2.13 msgs/turn, median latency 0.6 min) are verified by the page against the held-out file and extraction_summary.txt — but those files (raw/self/danmodel/) are not in this repository, so the figures are carried as old-wiki testimony. The five scripts' logic is preserved only via raw/self/danmodel/PIPELINE_NOTES.md (also unheld); the __pycache__ timestamps date at least partial execution to June 10, 2026. The CATO_COMPACT persona-prompt block is likewise cited verbatim from PIPELINE_NOTES.md."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read from wave-6 slice (wiki/work/tech/danmodel.md, 168 lines from whole.txt:120713). The 'no eval_results file' gap, the 39,378-pair extraction table, and the June-10-2026 __pycache__ dating are the page's own. This repository's raw/ tree contains no raw/self/danmodel/ directory (2026-09-10 listing). The 40%-single-contact Annie figure is notable but is the page's, not this pass's, measurement."
importance    = 3
tags          = ["danmodel", "testimony", "unheld-source", "voice-clone", "gaps"]
created       = "2026-09-10"

[when]
start = "2026-06-10"
end   = "2026-07-20"
+++

## What would change this filing

If raw/self/danmodel (or the Drive folder's contents) becomes held, the
39,378-pair extraction and the CATO_COMPACT prompt are re-verifiable, and
the eval harness could in principle be run — the question the page leaves
open is executable, not just checkable.
