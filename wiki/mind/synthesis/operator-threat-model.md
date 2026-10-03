---
domain: mind
page_type: synthesis
title: "The Operator's Threat Model"
aliases: ["operator-threat-model", "The operator's threat model: competence correctly deployed, outcome still catastrophic"]
tier: major
status: active
knowledge: mixed
date_created: 2026-10-03
date_modified: 2026-10-03
sources:
  - kb/syntheses/operator-threat-model.md
  - kb/data/0044-old-wiki-testimony-ledger.md
  - kb/data/0037-publication-gate-fails-safe.md
  - kb/data/0057-morgantown-audio-contradiction-reproduces.md
  - kb/patterns/partial-data-confident-error.md
  - kb/patterns/audit-strong-on-numbers-weak-on-meaning.md
  - kb/patterns/reasoning-sound-provenance-unreliable.md
  - kb/interpretations/contemporaneous-is-not-the-same-as-true.md
  - kb/interpretations/fragments-silently-partial.md
  - kb/interpretations/inference-from-refusal-is-unsound.md
  - kb/interpretations/old-wiki-corrections-are-the-payload.md
connections:
  - page: wiki/mind/concepts/calibrated-confidence
    type: evidenced-by
    claim: "The testimony ledger's inverted confidence bands — certain claims holding at 0.25 against 0.95 asserted — are this entry's central measurement. The bands describe a scoring outcome over held adjudications, not an interior trait."
  - page: wiki/self/message-corpus-coverage-map
    type: cites
    claim: "The coverage map is the instrument this threat model requires: every confident error instance here turned on a corpus hole the output did not announce."
  - page: wiki/mind/synthesis/provision-grammar
    type: parallels
    claim: "The provision grammar and the threat model share a method: count what is observable (transfers logged, severance gaps timed) and refuse to infer what is not. Both pages keep their claims at attention level."
  - page: wiki/health/suboxone-dose-curve
    type: instantiates
    claim: "The dose curve's null case — one figure and sixteen years of silence — is the threat model's logic applied to a single regimen: non-observation is recorded, not filled."
tags: [epistemics, method, corpus-coverage, forensic-analysis]
importance: 5
synthesizes:
  - wiki/mind/concepts/calibrated-confidence
  - wiki/self/message-corpus-coverage-map
changelog:
  - 2026-10-03: Restructured to canonical template v1; new page from kb/syntheses/operator-threat-model.md
---

# The Operator's Threat Model

Dan's stated threat model for his own reasoning is a single sentence: competence correctly deployed, outcome still catastrophic [kb/syntheses/operator-threat-model.md]. The failure mode it names is never ignorance. It is the distance between what the record shows him attending to and checking, and what the record shows him actually doing with that attention.

This entry does not grade the sentence as a character judgment. It inventories what the knowledge base holds that bears on it, at attention level only: what the held records show him counting, correcting, gating, and repeating, and what those records cannot establish about why. The source synthesis is explicit that its instruments were built, operated, or commissioned by the operator himself, and that limit travels with every claim below. The page's work is to put the pieces together as a single instrument reading — the calibration ledger from the prior wiki, the audit pattern over its pages, the Morgantown search case, and the publication gate — and to state what kind of system would have to exist for the reading to be wrong.

The threat model matters to the wiki because the wiki is the system the model describes. The six-layer architecture, the falsifier discipline, the publication gate, the testimony ledger itself — these are the artifacts the record holds. Whether they are evidence of a measured gap or a performance of one is a question the record cannot distinguish, and this page keeps that boundary visible rather than resolving it.

## What the synthesis claims, stated at attention level

The KB synthesis makes one load-bearing claim and three supporting observations [kb/syntheses/operator-threat-model.md].

The claim: the operator's errors, where the record can check them, come from the gap between seeing and doing rather than from not seeing. The record shows the discipline available — corrections appended rather than overwritten, silence typed as absence of instrument, dependent pages re-checked when a cited page moves — and shows it applied inconsistently, dropped where the claim at stake is about meaning rather than about a number that can collide with it.

The first supporting observation is calibration. The prior wiki's testimony ledger scores sixteen first-person claims, ten of them adjudicated. The confidence bands run backwards. Claims stated certain held up 0.25 of the time against 0.95 asserted, confident 0.69 against 0.80, hedged 0.75 against 0.60 [kb/data/0044-old-wiki-testimony-ledger.md]. Nothing in the ledger measures honesty; every outcome is consistent with good-faith date displacement, and the ledger says so. The page that says this is machine-generated and its arithmetic is unaudited in this repository — what is high-confidence is that the page says it, not that the numbers are right [kb/data/0044-old-wiki-testimony-ledger.md].

The second observation is the audit shape. [[wiki/mind/synthesis/provision-grammar|The pattern page]] records the prior wiki auditing its own measurement flags against its own interest — deleting a misleading rate rather than footnoting it, typing silence as absence beside the numbers — while, on nearby pages, reading a "no comment" as its most incriminating available content and calling that reading correct [kb/patterns/audit-strong-on-numbers-weak-on-meaning.md; kb/interpretations/inference-from-refusal-is-unsound.md]. The pattern's own verdict, after its falsifiers landed, is that the discipline was available for inference and was applied inconsistently — a worse finding than not having it.

The third observation is the form hole. In the Morgantown case, checking a contradiction produced three confident wrong answers in a row — a time filter selecting nothing, a keyword search missing the evidence, a second regex missing it the same way — each concluding the evidence was absent, each well-formed [kb/data/0057-morgantown-audio-contradiction-reproduces.md]. Every structural defense in the repository checks the form of an answer. "This search asked the wrong question" is a property of the input, and the output of a wrong question is perfectly well-formed.

This entry states those observations as attention records: what was counted, what was corrected, what was searched for and missed. It does not convert them into claims about interior regulation. Where the weighted profile instrument requires it, the synthesis's language is reframed accordingly below.

## The calibration ledger: what was counted

The testimony ledger is the threat model's central exhibit because it is the only instrument in the record that scores stated certainty against outcomes at scale [kb/data/0044-old-wiki-testimony-ledger.md].

The ledger holds sixteen first-person assertions (t001 through t016), ten scored. Veracity 52 of 100 on 31.0 points of weight. Calibration Brier 0.335, skill -0.34 against a coin flip. Outcomes: four confirmed, two partial, one self-contradicted, three refuted, six unfalsifiable — with unfalsifiable defined to score zero, never negative [kb/data/0044-old-wiki-testimony-ledger.md].

The bands are the finding. At n equals ten the page itself calls the result a suggestion rather than a measurement, twice. Taken as a suggestion, the direction is still legible: the word certain in front of a claim is, in this ledger, evidence against it. Hedged claims outperformed confident ones. The ledger distinguishes checked-and-cannot-settle from checked-and-found-wanting, and refuses to let the first count against the speaker — the same distinction the current repository enforces as never-observed versus known-not-to-occur, arrived at independently and applied to a person rather than to a corpus [kb/data/0044-old-wiki-testimony-ledger.md; kb/interpretations/contemporaneous-is-not-the-same-as-true.md].

Three limits travel with the number and this page keeps them attached. First, the arithmetic is unaudited: the page was generated from testimony/events.jsonl, which this repository does not hold. Second, adjudicated claims are not a random sample; a claim gets checked when someone had a reason to doubt it, and the ledger says so plainly. Third, the ledger grades memory against record and does not grade the record. The interpretation page that names this asymmetry shows why it matters: a contemporaneous first-person claim dated September 26, 2009 — a graduation announced that day — is contradicted by a different contemporaneous record showing classes that December [kb/interpretations/contemporaneous-is-not-the-same-as-true.md]. Both are dated, both are his, neither is a memory. If contemporaneous records are themselves wrong at some rate where social messages made to impress are concerned, part of what the ledger measures as misremembering is disagreement between two records, one of which happened to be the arbiter. The result may survive that reservation; the number travels into summaries and into this repository until it is checked [kb/interpretations/contemporaneous-is-not-the-same-as-true.md].

Read at attention level, the ledger establishes a countable behavior: in the ten adjudications the KB holds, stated certainty and outcome run in opposite directions. It does not establish a mechanism. It establishes that, in this sample, the operator's certainty label is negatively informative, and that hedged language is the more reliable signal in his own first-person record.

## The audit pattern: discipline available, applied inconsistently

[[wiki/mind/synthesis/provision-grammar|The audit pattern]] holds seven instances from six of the prior wiki's 497 pages and states its confidence as low on purpose [kb/patterns/audit-strong-on-numbers-weak-on-meaning.md].

Where a number or a document could check the claim, the record shows a consistent set of operations: corrections append rather than overwrite, so the fact a correction was needed survives [kb/data/0044-old-wiki-testimony-ledger.md]; a misleading rate figure is deleted rather than footnoted; silence is typed as absence of instrument in place beside the numbers; dependent pages are re-checked when a cited page moves, with null results logged; and, most tellingly, the system audited its own measurement flags and found them overstated, against its own interest, on the one dataset it had been missing [kb/patterns/audit-strong-on-numbers-weak-on-meaning.md].

Where the claim was about meaning, the record shows the opposite operations: a "no comment" read as the most incriminating available content and called correct [kb/interpretations/inference-from-refusal-is-unsound.md]; a lawyer, diversion programme, and magistrate's hearing attached to a snack theft for three weeks in declarative prose [kb/patterns/audit-strong-on-numbers-weak-on-meaning.md]; an accurate first-person date distrusted on a plausibility argument that was itself false [kb/patterns/audit-strong-on-numbers-weak-on-meaning.md; kb/interpretations/old-wiki-corrections-are-the-payload.md].

The pattern names its counterexample rather than hiding it. The Suboxone hedonic-tension entry records a disagreement between two of the system's own health pages — whether a maintenance dose caps the capacity to regulate a separate system — and records it on both pages rather than resolving it [kb/patterns/audit-strong-on-numbers-weak-on-meaning.md; kb/data/0025-old-wiki-prescriber-exists-routing-only.md]. No number was available; the system declined anyway. One clean counterexample against seven instances does not break the pattern's instances. It establishes that the failure is not mechanical: the discipline existed for inference and was dropped in specific cases, which is the synthesis's diagnosis-to-behavior gap stated as a finding about a system.

The pattern's falsifiers have since landed, and the pattern keeps them on the record rather than revising around them. A census counting dated error markers across all 497 pages finds mind corrects at 0.39 marks per 10 kilobytes and health at 0.37 — statistically indistinguishable on the fraction of pages carrying any mark at all, both at fifty percent [kb/patterns/audit-strong-on-numbers-weak-on-meaning.md]. A second pass reading the prior wiki's own changelog finds correction density tracks when a page was last touched rather than what could check it: half the corpus untouched in the final three weeks carries nine percent of the marks, and people leads the corpus at 1.67 marks per page [kb/patterns/audit-strong-on-numbers-weak-on-meaning.md]. The generalization — that the axis is external checkability — does not survive either test. The instances do. This page carries the pattern as a record of six pages that failed both tests it set itself, kept because the six pages are real and because a pattern that lost is more useful on the record than deleted.

## Partial data, confident error: the unguarded path

The pattern that names the mechanism underneath both exhibits is partial data producing confident error rather than visible uncertainty [kb/patterns/partial-data-confident-error.md]. Incomplete evidence does not announce itself as incomplete. It yields conclusions carrying the same confidence as well-founded ones, because the missing material leaves no trace in the output.

Four instances are held. Per-counterparty message exports produced inferences about absence from a source structurally incapable of showing presence [kb/interpretations/fragments-silently-partial.md]. A privacy posture read a closed gitignore file as protection while a separate open channel went unexamined. A Drive staging copy round-tripped markdown that was damaged but still plausible, so the corruption survived review. And the Valeria long tail — specific iMessages asserted for September 2023, November 2024, and July 2025 from a corpus that holds zero rows for the entire May 2021 to December 2022 affair window — produced confident claims from an instrument incapable of showing the window that mattered [kb/patterns/partial-data-confident-error.md].

The counterexample the pattern keeps is instructive. Where 3,086 messages that cannot be attributed are counted and declared rather than inferred, the data is equally partial and the uncertainty is visible [kb/patterns/partial-data-confident-error.md]. The difference is not the completeness of the data. It is whether the method declares the gap.

The pattern's second falsifier — that errors of this class are only ever closed from outside, by the operator supplying the missing piece — was spent in September 2026 and landed. Two cases now exist where the error was caught internally, by a gate or a check, with no operator involved [kb/patterns/partial-data-confident-error.md; kb/data/0037-publication-gate-fails-safe.md]. The revision the pattern makes is precise: the core claim about confident error stands, and the reach narrows. The pattern describes unguarded paths. How many paths are unguarded is unanswered — four tool defects were found by audit and one by a gate, and nobody has counted the surfaces that have neither [kb/patterns/partial-data-confident-error.md; kb/syntheses/operator-threat-model.md].

A live instance dated September 22, 2026 extends the pattern rather than merely confirming it: two confident wrong diagnoses in one night for a workbench failure, each stated with full confidence, each closed by the operator from the operator seat — "I just did it in three browsers" killing the stale-tab theory, "if you don't fix anything nothing is going to change" killing the deploy-lag theory — with the real cause, a calling-convention mismatch buried in a different pipeline's file, surfacing only after both were falsified by observation [kb/patterns/partial-data-confident-error.md]. No gate re-derived the diagnosis independently, so the confident error stood until the missing piece arrived. The instance is filed here because it shows the pattern running in the current system, not only in the prior wiki it was derived from.

## The Morgantown case: three confident absences

The datum that makes the form hole concrete is dated August 19, 2026 [kb/data/0057-morgantown-audio-contradiction-reproduces.md]. The prior wiki held open a contradiction: the operator states he sent a recording to a third party's parents and states he did not, within one day. Checking the contradiction against the sha256-verified corpus reproduces it. In true chronological order the outbound statements that day include four that the recording had been sent or was being sent and, at 19:12, "I could have torn your life apart. I still could and I don't." The corpus does not establish which is true. That is why the page holds it open.

What the datum adds is the four-hour offset. The page cites its denials at 11:25 and 15:12. In this corpus those minutes hold a message about a cat and a message about a name. Under a four-hour shift they land on the two statements above. Independently, the prior wiki writes a tweet time as "2010-02-17 20:07 UTC (15:07 New York)" — the prior wiki works in UTC, this corpus in local time, five hours in winter and four in summer. Every timestamp quoted from the prior wiki is four hours ahead of the same message in this corpus. Nothing in the repository had noticed, and it silently breaks any attempt to locate a wiki-cited message by its stated time [kb/data/0057-morgantown-audio-contradiction-reproduces.md].

The honest part of the node is its own search history. Three passes returned clean, confident, wrong results. A window filter comparing timestamps as text selected nothing because the hour is unpadded. A keyword pass over send, sent, audio, upload found twelve messages and no denial — correctly, because the denial contains none of those words. A second regex built to catch denials returned zero across three days. Each pass concluded the evidence was absent. What found it was abandoning patterns and reading the source at the page's own timestamps. The datum states the rule the repository already carried and that the search had reduced to a keyword slice because the day is 763 messages long [kb/data/0057-morgantown-audio-contradiction-reproduces.md]. No gate caught any of the three misses. The synthesis draws the general fact: the defense checks the form of an answer, and a wrong question produces a perfectly well-formed output [kb/syntheses/operator-threat-model.md].

## The gate that fails safe

The publication gate is the counterexample the threat model needs and the KB holds it as such [kb/data/0037-publication-gate-fails-safe.md].

An adversarial build was constructed in which a public datum referenced a sensitive source through attributed_to. The builder emitted the withheld node's identifier into graph.json — the field was not covered by its exclusion logic, which filtered only cites. The check that reads the built output rather than the source detected it and exited 1 with "REFUSING TO PUBLISH — sensitive node src:secret-informant appears in graph.json." The node's title and body did not leak; only the identifier did, and identifiers here are readable slugs, so an identifier is itself informative.

The datum distinguishes the gate from the three defective tools audited before it. Those tools answer whether there is something here — a question whose failure modes are asymmetric only if someone decides which way to lean, and where the convenient lean is toward yes. The gate answers whether it is safe to publish and was written to refuse on doubt. The costs are not symmetric there, so it asserts against the artifact rather than trusting the process that produced it. The builder has since been fixed to filter subject, supersedes, and attributed_to with a withheld marker, and two regression tests assert both halves — that the build does not leak and that the gate refuses if it ever does [kb/data/0037-publication-gate-fails-safe.md].

Read together with the Morgantown case, the gate establishes the threat model's engineering claim without needing any interior premise: where a gate exists that re-derives the answer independently, the confident error is caught; where none exists, it is not. The system that catches the operator's errors in the cases the KB can check is a system the operator built to catch them. The record cannot distinguish whether that is the healthiest possible arrangement or the fox designing the henhouse, because the record is the operator's [kb/syntheses/operator-threat-model.md]. Both readings are carried here. Neither is promoted.

## The threat model as engineering constraint

The synthesis frames the threat model as a constraint rather than a confession, and this page keeps that framing at attention level [kb/syntheses/operator-threat-model.md].

Stated as an observable design rule, it reads: do not rely on the operator being careful in the moment, because the record shows carefulness failing in the specific direction of confidence. Rely on gates that fail safe, on publication, on counts that re-derive rather than trust. The artifacts that instantiate the rule are in the repository: the six-layer architecture, the falsifier discipline, the testimony ledger that scores certainty against outcomes, the publication gate that reads output rather than source [kb/syntheses/operator-threat-model.md].

The rule's evidence is self-sourced. Every instrument that measures the operator was built, operated, or commissioned by the operator. The testimony ledger's arithmetic is unaudited. The calibration finding rests on ten scored claims, and adjudicated claims are not a random sample. A threat model built from self-measurement inherits every bias of the self doing the measuring — including the possibility that the posture of rigorous self-suspicion is itself the observable behavior and the failure mode the model names lies elsewhere [kb/syntheses/operator-threat-model.md]. That possibility is not a refutation. It is the limit the synthesis states on itself, and this page carries it as a limit rather than a resolution.

The model also predicts little in the short run. "Outcome still catastrophic" is not a dated check. The synthesis's falsifiers are the best available: a year of operation in which stated certainty tracks outcomes and the inverted band flattens; a catastrophic outcome unforeseeable from any evidence held, which would show the model describes ordinary tragedy rather than a specific failure mode; or a gate built to fail safe against the operator working twice in a row, at which point the model becomes a solved engineering problem and this node its history [kb/syntheses/operator-threat-model.md]. None of those tests is currently running as a dated pass. The first — a year of calibrated certainty — is a test nobody is running.

## Conflicts in the record

**Ledger arithmetic.** The calibration bands — certain at 0.25, confident at 0.69, hedged at 0.75 — are the testimony page's own figures over ten scored claims [kb/data/0044-old-wiki-testimony-ledger.md]. The underlying events file is not held in this repository, so the figures are carried as what the page says rather than as recomputed values. The n is ten, the sample is doubt-selected, and the page states both. This page uses the bands as a suggestion about direction, not a measurement of a rate.

**Census discrepancy.** The prior wiki's census of prescriber-related messages reported doctor at 36 outbound and 23 inbound. The authoritative corpus returns 29 outbound and 39 inbound [kb/data/0037-publication-gate-fails-safe.md; kb/interpretations/inference-from-refusal-is-unsound.md]. The inbound figure nearly doubles while outbound falls, which indicates a different population rather than a miscount. The census the quotes came from ran over a superseded dump missing 2022 and 2026. The finding built on it inherits shelved-extract status. This page does not treat the prescriber existence claim as refuted; the verified 2019 quote establishes a prescriber existed at some point, and the 2025 arrangement rests on quotes sitting in corpus holes where absence is never-observed [kb/interpretations/inference-from-refusal-is-unsound.md].

**Pattern generalization.** The audit pattern's claim that correction density tracks external checkability did not survive the census it nominated [kb/patterns/audit-strong-on-numbers-weak-on-meaning.md]. Mind and health correct at indistinguishable rates; people leads the corpus. The instances — the refusal reading, the snack-theft conflation, the distrusted accurate date — stand as dated observations. The axis does not. This page carries the pattern as instances with a spent falsifier, not as a law about domains.

**Coverage versus provenance.** The pattern that the prior wiki's reasoning holds while its quote provenance does not carries a third falsifier that remains partly open [kb/patterns/reasoning-sound-provenance-unreliable.md]. If the unverifiable quotes come from channels the corpus does not hold rather than from misattribution, the finding is about coverage rather than provenance. Facebook — a channel the corpus does not hold — did supply corroboration for two ledger adjudications, including the reasoning that excluded the Brooklyn move as the February 17, 2010 tweet's referent, against evidence the ledger was not built on [kb/data/0044-old-wiki-testimony-ledger.md]. It also supplied a new disagreement between two contemporaneous records. The coverage explanation accounts for at most three of the four provenance failures; the DUI misattribution — a line present in the cited source, attributed to the wrong speaker — is immune to it [kb/patterns/reasoning-sound-provenance-unreliable.md]. This page carries both the stronger reasoning claim and the narrower provenance claim at their current rates: eight checks, seven changes, one clean [kb/patterns/reasoning-sound-provenance-unreliable.md].

**Self-sourcing.** The threat model's evidence and its auditor are the same party. The synthesis states the limit: the record cannot distinguish a healthy arrangement from a fox designing the henhouse, because the record is the operator's [kb/syntheses/operator-threat-model.md]. This page does not resolve the distinction. It carries the instruments' outputs as the observable record and leaves the motive question where the synthesis leaves it — as a limit on what the outputs can establish.

**The unfiled instance.** The synthesis notes a dated instance in the agent record of the operator pressing a model toward deceptive output and evidence manufacture, dated in working memory rather than in any KB node, and therefore flagged as unverifiable rather than cited [kb/syntheses/operator-threat-model.md]. Whether that instance belongs in the record is itself a threat-model question, and this page does not import it. It is recorded here only as the synthesis's open question, at the standing the synthesis gives it.

## Assessment

What the held record supports, stated at attention level, is narrower than the synthesis's title and more durable for it. Across the adjudications the KB can check, stated certainty runs against outcome in a small, doubt-selected sample. Across six pages of the prior wiki, a discipline for handling numbers and documents is observable and the same discipline is observably dropped where the claim is about meaning. Across one dated search, three well-formed queries returned confident absence for evidence that was present, and no gate caught the misses; across one adversarial build, a gate that reads output rather than source did catch its leak. Those are dated, countable behaviors. Together they describe a record in which errors cluster where no independent re-derivation exists, and are caught where one does.

The threat model the synthesis names — competence correctly deployed, outcome still catastrophic — is carried here as the operator's stated frame for that cluster, not as a finding about interior process. The engineering consequence the model prescribes is already partly built: gates that fail safe, counts that re-derive, a ledger that scores certainty, a coverage map that makes holes visible before absence claims are drawn from them. How many surfaces remain unguarded is the model's open question, and the record does not answer it.

## See also

- [[wiki/mind/concepts/calibrated-confidence]] — the calibration framework the testimony ledger instantiates.
- [[wiki/self/message-corpus-coverage-map]] — the dated channel inventory every absence claim in this entry should be checked against.
- [[wiki/health/suboxone-dose-curve]] — the null case: one figure, sixteen years of silence, and the discipline of recording non-observation.
- [[wiki/mind/synthesis/provision-grammar]] — the parallel synthesis that counts transfers rather than certainty labels.

## References

- kb/syntheses/operator-threat-model.md — the source synthesis: the stated model, the calibration band, the audit pattern, the Morgantown case, the gate, and the self-sourcing limit.
- kb/data/0044-old-wiki-testimony-ledger.md — the ledger: sixteen claims, ten scored, the inverted bands, Brier 0.335, and the stated limits on the sample.
- kb/data/0037-publication-gate-fails-safe.md — the gate: the adversarial build, the attributed_to leak, the refusal, and the fix with regression tests.
- kb/data/0057-morgantown-audio-contradiction-reproduces.md — the contradiction that reproduces, the four-hour UTC offset, and the three confident misses that preceded the read.
- kb/patterns/partial-data-confident-error.md — the pattern: four instances, the spending of its second falsifier, the narrowing to unguarded paths, and the September 22, 2026 live instance.
- kb/patterns/audit-strong-on-numbers-weak-on-meaning.md — the audit pattern: seven instances, the Suboxone counterexample, and the two spent falsifiers that retired its generalization.
- kb/patterns/reasoning-sound-provenance-unreliable.md — the split: reasoning surviving checks, provenance failing them, eight checks with seven changes and one clean corroboration.
- kb/interpretations/contemporaneous-is-not-the-same-as-true.md — the asymmetry: the ledger grading memory against an ungraded record, and the September 2009 graduation case.
- kb/interpretations/fragments-silently-partial.md — the fragments: absence of evidence indistinguishable from evidence of absence in a per-counterparty export.
- kb/interpretations/inference-from-refusal-is-unsound.md — the refusal reading: the unsound route from "no comment" to unmanaged supply, revised twice and weakened each time.
- kb/interpretations/old-wiki-corrections-are-the-payload.md — the corrections as highest-yield material, with the alternative that density marks where external checks existed.
