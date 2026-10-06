---
domain: work
page_type: concept
tier: major
title: "DANMODEL — a voice-cloning ML pipeline trained on Dan's own texts"
status: stub
date_created: 2026-07-20
date_modified: 2026-10-06
infobox:
  name: DANMODEL
  class: Voice-clone ML pipeline
  implementation: Python standard library + numpy, five scripts, no framework
  training_data: 39,378 stimulus–response pairs extracted from Dan's message corpus
  persona_prompt: CATO_COMPACT — compressed self-description of Dan's texting voice
  blind_test: "Designed (eval_harness.py); built to report a RAG-vs-baseline win rate and a confusion rate"
  results: "No recorded result — no eval_results_*.jsonl survives on disk"
  exercised: "2026-06-10 (compiled bytecode timestamps)"
  documented: "2026-07-20 (this wiki page created)"
  found_in: "Google Drive folder ~~DOCS/DANMODEL (unfiled)"
sources:
  - raw/self/danmodel/PIPELINE_NOTES.md — ⚠ Source reference unresolved — original target no longer exists in current corpus.
  - raw/self/danmodel/extraction_summary.txt — ⚠ Source reference unresolved — original target no longer exists in current corpus.
  - raw/self/danmodel/reaction_pairs_heldout.jsonl — ⚠ Source reference unresolved — original target no longer exists in current corpus.
tags: [ai-collaboration, digital-footprint]
connections:
  - page: wiki/mind/concepts/exocortex
    type: instantiates
    claim: "DANMODEL's CATO_COMPACT block is the exocortex thesis made mechanical — instead of a hand-written bootloader, it's a compressed system-prompt of Dan's own texting voice, extracted algorithmically from his message corpus rather than authored by introspection."
  - page: wiki/work/tech/mneme/overview
    type: parallels
    claim: "Both are independently-built self-modeling infrastructure projects running the same 'extract once, stop re-deriving' thesis this wiki itself is built on — mneme for memory/context, DANMODEL for voice and output."
  - page: wiki/mind/synthesis/ai-collaborative-analysis
    type: instance-of
    claim: "The pure-retrieval Jaccard baseline versus the TF-IDF-plus-generation RAG simulator recreates the CATO/MAX dual-engine split (forensic retrieval vs. adversarial generation) inside a single narrow tool."
  - page: wiki/people/annie-ulmer
    type: evidences
    claim: "Annie (early) alone accounts for 15,723 of the corpus's 39,378 extracted stimulus-response pairs — 40% of Dan's entire measured reaction history to a single person from a single era, an independent mechanical confirmation of her centrality."
  - page: wiki/mind/concepts/contact-gini
    type: evidences
    claim: "The by-contact breakdown (Annie early 40%, unmapped 35%, Annie NYC 12%, five other named contacts splitting the remainder) is a structurally similar concentration pattern to the 0.961 message-corpus Gini coefficient, independently reproduced in a different metric (reaction pairs, not raw message counts)."
  - page: wiki/mind/synthesis/ai-collaborative-analysis
    type: instantiates
    claim: "DANMODEL's dual retrieval-vs-generation architecture (Jaccard baseline vs. TF-IDF RAG simulator) recreates the CATO/MAX forensic-retrieval-vs-adversarial-generation split inside one narrow voice-cloning tool."
changelog:
  - "2026-10-06: Expanded to major tier; restructured to canonical article template v1"
---

# DANMODEL — a voice-cloning ML pipeline trained on Dan's own texts

DANMODEL is a from-scratch machine-learning pipeline, found unfiled in a Google Drive folder (`~~DOCS/DANMODEL`), that does something no other project in this corpus does: it tries to build an AI that texts *as* Dan, trained entirely on his own message history, and then designs a blind test to check whether the fake is distinguishable from the real thing. It is pure Python standard library plus numpy — five scripts, no framework, run locally — and it is the most literal, mechanized instance of the self-modeling theme that runs through the rest of this wiki's `work/tech/` material (CATO/MAX, [[wiki/work/tech/mneme/overview|mneme]]): those projects extract Dan's *reasoning*; this one extracts his *voice*.

Five scripts make up the whole system. `reaction_extractor.py` turns a full message-corpus CSV into 39,378 `(stimulus -> Dan's actual response)` pairs. Two baseline retrievers — a naive Jaccard word-overlap replay (`reaction_model.py`) and an upgraded TF-IDF plus metadata-boosted retriever (`retriever.py`) — compete against a generator (`rag_simulator.py`) that assembles the eight most relevant historical exchanges behind a compressed persona prompt, `CATO_COMPACT`, and calls a free-tier OpenRouter model (Llama 3.2 3B) to synthesize a response in Dan's voice. A fifth script, `eval_harness.py`, stages a three-way blind trial — the generator's output, the baseline replay, and the real historical response, shuffled into neutrally-labeled Candidate A/B/C, judged by an LLM that is never told which is which — and is built to report two numbers: the RAG-vs-baseline win rate, and a confusion rate measuring how often the judge does *not* pick the real response as the most plausible. The script's own comment names the confusion rate the interesting number: a high value would mean the synthetic Dan is being judged more "Dan-like" than the actual, historical Dan.

No `eval_results_*.jsonl` file — the output the eval harness writes on every run — exists anywhere in the Drive folder. The project was engineered to answer exactly one question, *can an AI trained on Dan's own texts pass for him under blind judgment*, and per the evidence on disk that question is unanswered. What survives is the machinery: a methodologically careful pipeline with leakage assertions and neutral labeling, bytecode proving it was at least partially executed in June 2026, an extraction dataset that independently corroborates the wiki's contact-concentration findings from a different measurement, and a compressed persona prompt that is the exocortex thesis made mechanical.

## The five scripts, end to end

The pipeline is organized as a clean chain — extract, retrieve, generate, evaluate — with each stage a single file and no shared framework. That shape matters: it reads like it was written to be auditable by one person, not deployed to anyone else. Nothing in the record shows a serving layer, an API, a chat front-end, or a deployed instance. DANMODEL is a bench experiment, not a product.

**Extraction** (`reaction_extractor.py`) parses a full message-corpus CSV into `(stimulus -> Dan's actual response)` pairs — every time someone texted him something and he replied, across however many individual messages either side sent in that turn. It restricts to 1:1 threads only, explicitly to avoid a "v1 defect" where group-chat exports echoed Dan's own sent messages back mislabeled as "Received" from a third party — the same direction-field unreliability documented independently elsewhere in this wiki's people pages. The run on file produced **39,378 pairs**, split 34,808 train / 4,570 held-out (12%, deterministic hash-based split, never shown to the model). Two baseline models were then built against that data: a naive Jaccard word-overlap retriever that just replays the closest historical response verbatim (`reaction_model.py`), and an upgraded TF-IDF + metadata-boosted retriever (`retriever.py`) that feeds a proper generation step.

The two-retriever design is doing real methodological work, not just hedging. The pure-Jaccard baseline is a retrieval ceiling: it replays the single closest thing Dan actually wrote to a similar stimulus, which is the strongest possible argument that any generative step adds value at all. If the RAG simulator can't beat verbatim replay at sounding like Dan, the persona prompt and the generator are contributing nothing. The TF-IDF + metadata-boosted retriever is then the retrieval side of the serious system — better matching, feeding the few-shot exemplars the generator reasons over. The three-candidate eval design (RAG output vs. Jaccard replay vs. the real response) is the same instinct formalized: it isolates *retrieval quality*, *generation quality*, and *ground truth* as three separable things a judge can rank.

**Generation** (`rag_simulator.py`) retrieves the 8 most relevant historical exchanges for a new stimulus, assembles them as few-shot exemplars behind a compressed persona prompt — `CATO_COMPACT` — and calls a free-tier OpenRouter model (Llama 3.2 3B) to generate a synthetic response in Dan's voice. The choice of a 3-billion-parameter free-tier model as the generator is itself a design statement: it keeps the experiment nearly free to run, and it makes any voice-cloning success attributable to the retrieval plus persona stack rather than to raw model capability. If a small model plus good exemplars plus a tight persona prompt can pass for Dan, the voice is in the data and the compression, not in the weights.

**Evaluation** (`eval_harness.py`) is the most rigorous piece. For each held-out stimulus it generates three candidate responses — the RAG simulator's output, the pure-Jaccard replay, and the real historical response — shuffles them into neutrally-labeled "Candidate A/B/C," and asks an LLM judge which one is most plausibly written by the same author, never telling it which is which. A runtime assertion checks that no held-out pair leaked into the training index or the judge's exemplars. The two headline metrics it is built to report: the RAG-vs-baseline win rate, and a **confusion rate** — how often the judge does *not* pick the real response as most plausible.

The confusion rate is the conceptually loaded metric. A win rate says the generator beats the baseline; that is an engineering result. A confusion rate says the judge could not tell the synthetic response from the genuine one often enough to matter — that is an identity result. The script's own comment treats it that way: a high confusion rate would mean the synthetic Dan is being judged more "Dan-like" than the actual, historical Dan. The harness is, in other words, a small Turing test where the human being impersonated is the experiment's own author.

## The extraction numbers — an independent corpus measurement

Independent of whether generation or evaluation ever finished, the extraction pass is itself a real corpus statistic, verified by recount (`extraction_summary.txt`, cross-checked against the 4,570-row held-out file):

| Metric | Value |
|--------|-------|
| Total reaction pairs | 39,378 (34,808 train / 4,570 held-out) |
| Domain mix | other 67.3% · relational 15.6% · logistical 5.3% · supply 4.0% · music 3.4% · financial 2.5% · technical 1.3% · political 0.6% |
| Top contact | Annie (early) — 15,723 pairs (40% of the entire corpus) |
| Second | unmapped — 13,761 (35%, no hardcoded identity) |
| By year (peaks) | 2018: 9,728 · 2025: 8,034 |
| Dan's burst size | mean 2.13 msgs/turn, median 2.0, max 412 |
| Response latency | median 0.6 min, mean 31.0 min |

Each of these rows earns its keep as evidence rather than decoration:

- **The domain mix** is honest about its own limitation. The `other` category dominating at 67% is a limitation of the keyword-scoring heuristic (a transparent argmax over hand-picked term lists per domain, falling back to "other" when nothing scores), not a claim that two-thirds of Dan's texting is topic-less — it means the heuristic is coarse, not that the content is. The page documents the mechanism plainly rather than dressing the residue up. Among the scored domains, the ordering is itself informative: relational (15.6%) outweighs logistical (5.3%) and supply (4.0%) combined, and music (3.4%) and financial (2.5%) outrank technical (1.3%) and political (0.6%) — a texting life dominated by relationships, not systems.
- **The year distribution** independently corroborates two periods already established elsewhere in the wiki on separate evidence: 2018 as a documented high-volume "deep cycle" and 2025 as the collapse year — this dataset reproduces both peaks from a completely different extraction method (reaction-pair counting rather than raw message counting). That is what a good instrument does: it shows the same peaks through different glass.
- **The 40% single-contact concentration** on Annie (early) alone, before her NYC-era number is even added, is a striking independent number for the corpus's already-documented extreme centralization (see [[wiki/mind/concepts/contact-gini]]'s 0.961 Gini coefficient) — measured here in a completely different unit (extracted conversational turns, not raw message volume) and still landing at a comparably extreme skew. Two-fifths of Dan's entire measured reaction history went to one person from one era. The September 2026 old-wiki export treats the DANMODEL retrieval system, built on those 39,378 pairs, as one of the living outputs of the finished analytical work on that corpus — the relationship ended; its utility for system analysis did not.
- **Burst size and latency** are mechanical measurements of texting style, not judgments. Mean 2.13 messages per turn against a median of 2.0, with a maximum of 412, describes short multi-message bursts with occasional long floods — consistent with the CATO_COMPACT persona's own "short 3–7 message bursts" signature. Median response latency of 0.6 minutes against a mean of 31 minutes describes someone who usually answers immediately and sometimes answers a day later — a distribution the mean alone would lie about, and the page keeps both numbers rather than the flattering one.

## CATO_COMPACT — the compressed persona

`CATO_COMPACT` is worth reading in full (preserved verbatim in `raw/self/danmodel/PIPELINE_NOTES.md`, per the page): a self-authored description of his own texting signature — short 3–7 message bursts, 80%+ lowercase, one ALL-CAPS word per cluster for emphasis, "..." as a breath rather than a trail-off, pivot words ("actually," "honestly," "literally"), no terminal period unless finality is intended, and an explicit engagement rule to simulate him as "a senior analyst peer, not a user to protect — no sycophancy, no performed concern, no acceptability filter." Its own comment credits the compression to "CONTEXT_CORE_EXPANDED + PHENOMENOLOGY_LENS + voice analysis" — this is a downstream artifact of the same exocortex/CATO bootloader material documented on [[wiki/mind/concepts/exocortex]] and [[wiki/work/tech/max-framework/overview]], repurposed from an input-side reasoning aid into an output-side voice clone.

The re-purposing is the point. The bootloader material was built to *configure an AI to think with Dan* — input-side, a reasoning prosthetic. CATO_COMPACT flips the arrow: same compression pipeline, same source material, but aimed at *output* — an AI that texts *as* Dan. The connection the wiki draws to the exocortex concept is exact rather than decorative: the exocortex thesis says the instruments and prompt systems Dan builds are continuous with his cognition, and CATO_COMPACT is that thesis made mechanical — instead of a hand-written bootloader authored by introspection, a compressed system prompt of his own texting voice extracted algorithmically from his message corpus.

The persona details are also forensic in a way that matters for voice cloning. They are surface-mechanics, not content: capitalization ratios, punctuation habits, burst structure, pivot-word tics, the function of the ellipsis. A voice clone that captures *what Dan says* but not *how he types it* fails the blind test on mechanics alone, and the prompt's specificity about mechanics — one ALL-CAPS word per cluster, "..." as breath, no terminal period without finality — is what a careful cloner would weight. Whether that weighting works is precisely what the unrun eval was supposed to tell us.

## The unanswered question

No `eval_results_*.jsonl` file — the output the eval harness writes every run — exists anywhere in the Drive folder. Compiled bytecode for `rag_simulator.py` and `retriever.py` (but conspicuously not for the other three scripts) sits in the folder's `__pycache__`, both dated June 10, 2026, which is consistent with the RAG pipeline having been exercised at least once — but there is no surviving record of a completed blind eval, a win rate, or a confusion rate. **The single question the whole project was engineered to answer — can an AI trained on Dan's own texts pass for him under blind judgment — is, per the evidence on disk, unanswered.** This is a real, notable gap rather than a negative result: the harness exists, is methodologically careful (leakage assertions, neutral labels, train-only retrieval), and was apparently at least partially run, but whatever it found was not saved to Drive.

The bytecode pattern is worth a moment of its own. `__pycache__` for the generator and the retriever but not for the extractor, the baseline, or the eval harness is consistent with the middle of the pipeline having been exercised — someone ran the generation path — without the extraction or evaluation stages leaving compiled traces. It is also consistent with partial cleanup, selective re-running, or any number of unremarkable file-management histories. What it does *not* do is license any claim about what the eval found. The gap stays a gap: the most interesting question the project raises is the one it left unanswered on disk, and the wiki's open-questions page carries exactly that entry.

## Provenance and custody

DANMODEL was not discovered through any pipeline. It was found unfiled in a Google Drive folder, `~~DOCS/DANMODEL` — five Python scripts, compiled bytecode, extraction summaries, and no packaging. The custody record since discovery is itself part of the page's honesty layer. The full 34,808-row `reaction_pairs_train.jsonl` (~16MB) exceeds the wiki tooling's download limit and was not filed; the 4,570-row held-out file was successfully filed and verified byte-accurate against the summary count, and is representative of the same extraction (same domains, same contact map, same era). The five Python scripts themselves are not filed byte-for-byte in `raw/` — a transcription attempt corrupted during manual reconstruction — but their full logic is preserved faithfully in `raw/self/danmodel/PIPELINE_NOTES.md`, including the `CATO_COMPACT` prompt verbatim; the originals remain retrievable from the cited Google Drive file IDs if byte-exact source is ever needed. No date is recoverable for when this project was built beyond the June 10, 2026 `__pycache__` timestamps; it is not referenced anywhere else in the corpus mined so far.

The corrupted transcription deserves its plain statement: the wiki attempted to preserve the scripts, the attempt failed, and the failure is recorded rather than hidden. The logic survived through the pipeline notes; the bytes did not. That is the kind of archival scar this wiki keeps visible on purpose.

All three `raw/self/danmodel/` source references on this page were marked unresolved in the September 2026 sources-repair pass (D3 confirmed-remap / D4 mark-in-place run, 2026-09-24) — the files do not exist in the current corpus, so the figures they carried are preserved here as the page's own testimony, flagged at the citation, per Dan's standing rule that unresolved references are marked, never deleted. The September 2026 old-wiki export is the nearest held corroboration: it treats DANMODEL as the retrieval system built on the 39,378 reaction pairs, lists "the development of the DANMODEL retrieval tools, and the construction of active AI agent pipelines" among Dan's mid-2026 AI work channels, and calls DANMODEL — "trained on the reaction-pair corpus" — one of the living outputs of the concluded analytical work on the relationship corpus. A 2026-09-13 inventory of Dan's repos and projects likewise lists DANMODEL among his active builds, alongside Bunker Core, MNEME, and GRIPNOTIC.

## Place in the self-modeling set

DANMODEL sits at the most literal end of a spectrum the wiki documents across several pages. The exocortex concept says Dan's prompt systems and instruments are continuous with his cognition. MNEME is the memory/context platform — the "extract once, stop re-deriving" thesis applied to what he knows. DANMODEL is the same thesis applied to *how he writes*: extract the voice once, from 39,378 measured turns, and stop re-deriving it by introspection. The 2026-09-09 daily-driver analysis puts it in the same sentence as MNEME and Bunker Core as instances of the same stance: Dan builds systems that think rather than asking questions — pipelines that yield persistent capability, prompts that yield cognitive partners, bootloaders that turn any fresh session into a pre-configured analyst.

The dual architecture carries the same split the wiki documents in CATO/MAX. The pure-Jaccard retriever is forensic retrieval: find the closest thing that was actually said. The TF-IDF-plus-generation RAG simulator is adversarial generation: synthesize what would be said from exemplars plus a persona. The wiki's analysis of the two systems recreates that CATO/MAX split — forensic-retrieval-vs-adversarial-generation — inside a single narrow voice-cloning tool. It is the dual-engine design philosophy at its smallest scale, running on one man's texting history.

And the project closes the loop on the wiki's own central instrument. The message corpus was mined for forensics, for personality measurement, for relationship analysis — and then, in this Drive folder, mined one more time for something nobody else in the corpus attempted: a synthetic Dan, built from Dan's own reactions, judged blind against Dan's own history. The 39,378 pairs are the corpus turned back on itself as training data. That the blind test's result is missing does not diminish what the extraction pass proves on its own: a decade of texting, counted in stimulus-response pairs, yields the same concentration signature the wiki measured in raw volume — one person, one era, forty percent of everything.

## Conflicts in the record

- **2026-09-24 — source references marked unresolved.** The page's three `raw/self/danmodel/` citations (PIPELINE_NOTES.md, extraction_summary.txt, reaction_pairs_heldout.jsonl) were marked in the D3/D4 sources-repair run with Dan's standing wording: "Source reference unresolved — original target no longer exists in current corpus." The class is C_path_gone: the files existed when cited and are absent now. Per his standing rule they are marked, never deleted, and the figures they carried — the 39,378-pair extraction, the domain table, the CATO_COMPACT prompt — are preserved on this page as the page's own testimony rather than as independently re-verifiable measurements.
- **2026-09-10 — figures carried as old-wiki testimony.** The kb datum on this page (dat:1220) records that this repository's `raw/` tree contains no `raw/self/danmodel/` directory, so the extraction statistics are carried from the 2026-09-04 old-wiki export and its wave-6 slice of this page, at moderate confidence. If the Drive folder's contents become held again, the 39,378-pair extraction and the CATO_COMPACT prompt are re-verifiable — and the eval harness is executable, so the open question is answerable, not just checkable.
- **Ongoing — the unanswered blind test.** Whether `eval_harness.py` was ever run to completion, and what it found, is unknown. The `__pycache__` timestamps (2026-06-10) for `rag_simulator.py` and `retriever.py` — and for those two scripts only — are consistent with at least partial execution of the generation path, but no `eval_results_*.jsonl` survives and no win rate or confusion rate is recorded anywhere in the record mined so far. The open-questions page carries this entry verbatim. No claim about what the eval would have found is made on this page; the gap is the finding.
- **Ongoing — the "other" 67%.** The domain mix's largest bucket is a heuristic residue, not a measured fact: the transparent argmax over hand-picked term lists per domain falls back to "other" when nothing scores, so 67.3% of pairs are unclassified rather than topic-less. Readings that treat the residue as a claim about Dan's texting are not licensed by the mechanism.
- **Ongoing — script preservation gap.** The five Python scripts are not filed byte-for-byte anywhere in the corpus; a manual transcription attempt corrupted, and their logic survives only via the pipeline-notes rendering (with CATO_COMPACT verbatim). The originals are retrievable from the cited Google Drive file IDs — this is a custody gap, not a content gap, but any future re-verification of the extraction logic will need to start from the Drive originals, not the wiki.

## Assessment

The record supports three judgments and one standing invitation. First, the extraction is a real, independent corpus measurement: 39,378 stimulus-response pairs, hash-split 12% held-out, recount-verified, reproducing the wiki's established year peaks and contact-concentration signature through a different instrument. That holds even though the underlying files are currently unheld — the corroboration with independently established facts (2018 deep cycle, 2025 collapse year, the Annie concentration) is what keeps the numbers credible, not any single file's presence. Second, the eval harness is methodologically sound on its face — leakage assertions, neutral labels, train-only retrieval, a confusion-rate metric that asks the interesting identity question rather than the easy engineering one. Third, the project's headline question is unanswered on disk, and the page does not pretend otherwise; the gap is documented in the same register as the results.

The standing invitation is mechanical. If the Drive folder's contents become held — the scripts, the training pairs, the persona notes — the harness can be run and the confusion rate measured. The experiment Dan built to find out whether a machine trained on his own texts could pass for him is still, in principle, runnable. The question is executable, not just checkable.

## See also

- [[wiki/mind/concepts/exocortex]] — the thesis CATO_COMPACT makes mechanical
- [[wiki/work/tech/mneme/overview]] — the parallel self-modeling build: memory and context
- [[wiki/mind/synthesis/ai-collaborative-analysis]] — the CATO/MAX dual-engine split recreated in one tool
- [[wiki/people/annie-ulmer]] — the 40% single-contact concentration, measured here in reaction pairs
- [[wiki/mind/concepts/contact-gini]] — the same concentration in raw message volume (Gini 0.961)

## References

- `raw/self/danmodel/PIPELINE_NOTES.md` — ⚠ Source reference unresolved — original target no longer exists in current corpus.
- `raw/self/danmodel/extraction_summary.txt` — ⚠ Source reference unresolved — original target no longer exists in current corpus.
- `raw/self/danmodel/reaction_pairs_heldout.jsonl` — ⚠ Source reference unresolved — original target no longer exists in current corpus.
