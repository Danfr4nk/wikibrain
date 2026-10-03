---
domain: mind
page_type: synthesis
title: "Evidence Discipline: How This Corpus Decides Anything"
aliases: ["evidence-discipline", "why this system is built the way it is"]
tier: major
status: active
knowledge: earned
date_created: 2026-10-03
date_modified: 2026-10-03
sources:
  - kb/syntheses/evidence-discipline.md
  - ARCHITECTURE.md
  - CORPUS_POLICY.md
  - kb/patterns/partial-data-confident-error.md
  - kb/interpretations/fragments-silently-partial.md
  - kb/interpretations/gitignore-is-not-protection.md
  - kb/data/0037-publication-gate-fails-safe.md
  - kb/data/0057-morgantown-audio-contradiction-reproduces.md
  - kb/data/0058-graduation-september-2009-then-audit-and-certification.md
  - kb/interpretations/contemporaneous-is-not-the-same-as-true.md
  - kb/data/0031-dui-belongs-to-the-other-speaker.md
  - kb/data/0028-prescriber-quotes-partly-unverifiable.md
  - kb/data/0053-old-wiki-instruments-corrected-each-other.md
connections:
  - page: wiki/meta/testimony-veracity
    type: cites
    claim: "The testimony ledger is the calibration instrument this discipline produces: claims graded against dated records, with its own biases published alongside the scores."
  - page: wiki/mind/synthesis/full-sail-pipeline
    type: supports
    claim: "Full Sail is the worked example of publication as a defence: the subject read a published page, found the graduation month wrong, and supplied the fact that reconciled four dated artefacts (dat:0058)."
  - page: wiki/mind/synthesis/suboxone-sixteen-years
    type: supports
    claim: "The Suboxone start date is the worked example of provenance kept visible: a date computed by a model from logs, bracketed independently by a 2013 Facebook message, and carried at exactly that strength."
tags: [meta, epistemics, method, corpus]
importance: 5
synthesizes:
  - wiki/meta/testimony-veracity
  - wiki/mind/synthesis/full-sail-pipeline
  - wiki/mind/synthesis/suboxone-sixteen-years
changelog:
  - 2026-10-03: Restructured to canonical template v1; expanded from corpus
---

# Evidence Discipline: How This Corpus Decides Anything

This wiki contains a biography built from roughly 192,140 messages, dated social-media archives, financial records, and two decades of retrospective testimony by its subject. Almost none of that material arrives labelled with how much it should be trusted. A message sent in 2009 to impress an old friend sits in the same archive as a bank statement; a date computed by a language model reading email logs sits next to a date stamped by a platform at the moment it happened. The question this entry answers is the one a cold reader needs before any other page makes sense: given material like that, how does this corpus decide anything at all — what counts as evidence, what counts as a conclusion, and what happens when the two disagree?

The short answer is that the decision is structural, not editorial. The system is built so that a conclusion cannot quietly become a premise, a partial export cannot masquerade as a complete record, and a claim's confidence has to be earned from sources that are named and can be re-opened. Where the structure cannot decide — and there are documented cases where it cannot — the record is supposed to say so, in place, rather than resolve the question by tone.

That design is a response to one observed failure, named in kb/patterns/partial-data-confident-error.md: partial evidence produces conclusions that are wrong and confident at the same time. Incomplete evidence does not announce itself as incomplete. It yields answers carrying the same confidence as well-founded ones, because the missing material leaves no trace in the output. If that is the failure, care and diligence cannot be the defence, because the failure is invisible to the person committing it. The defence has to be built into the shape of the system.

## The layer law

The constitutional rule, stated in ARCHITECTURE.md, is: RAW DATA → STRUCTURED FACT → INTERPRETATION → SYNTHESIS. NEVER THE REVERSE. Every node in the knowledge base sits at exactly one of six layers. Layer 0 is source: raw material as acquired — a message export, a photo, a transcript — and it is append-only, never edited. Layer 1 is a datum: one claim about one thing at one time under one context, with known provenance. Layer 2 holds entities, events and relationships assembled from data. Layer 3 holds interpretations and contradictions — what it might mean, explicitly someone's reading. Layer 4 is a pattern: recurrence detected across lower layers, required to carry its counterexamples. Layer 5 is a synthesis: a cross-domain model, and the most disposable thing in the system.

Mutability runs opposite to altitude, deliberately. The higher a node sits, the more freely it may be revised; the source it rests on may not be revised at all. An LLM's synthesis is a leaf that nothing may cite — it is where reasoning ends, never where it starts.

The mechanical form of the law is the one invariant: a node may cite only nodes at a strictly lower layer, enforced by the validator as a build failure rather than as guidance. A datum may not cite an interpretation, because that is a conclusion laundered into evidence. A pattern may not cite another pattern. Because citation is the evidence relation and it only points downward, "trace this conclusion to its evidence" is a walk that always terminates, and a citation cycle is impossible by construction. Relations that are not evidence — caused, preceded, contradicted — live in a separate edge vocabulary and may point anywhere, but each edge must declare its strength, its basis, and who asserts it. A speculative edge held with strong strength is a build error, not a style choice.

## Testimony is quarantined, not excluded

Not every source is reliable, and the system's response is neither to trust testimony nor to throw it out. A source marked as testimony — a prior system's conclusions, a retrospective account, a third party's summary — supplies evidence of what it asserted, not evidence that the assertion holds. Mechanically, every datum citing a testimony source must carry an `attributed_to` field naming it, and the validator fails the build otherwise. So the record can hold "the prior wiki asserted that Dan met Vaughn in 2013" at high confidence — the page does say that, and that is checkable — without holding "Dan met Vaughn in 2013" at any confidence at all.

This is what makes bulk-ingesting an unaudited archive survivable. Its errors are quarantined at Layer 1 as things that were said. An independent source supporting the same claim becomes a second datum, and an interpretation resting on both is stronger than either. A source contradicting it produces a contradiction node. Nobody has to decide in advance whether the old material was trustworthy; the structure sorts it, and the places where a prior system was wrong become visible objects rather than inherited assumptions.

Interpretations also declare their perspective — self, external, LLM, or other — and those perspectives are never silently collapsed. "Dan believes X about himself, but the longitudinal record suggests Y" is a first-class statement in this system, and keeping the two halves distinguishable is most of the point.

## The corpus, and why the old extracts were shelved

CORPUS_POLICY.md governs what counts as message evidence, and it recognises exactly two tiers. The authoritative tier is the complete Messages export: 192,140 messages, 2011-03-19 to 2026-09-07, held in `corpus/messages.csv`. The shelved tier is every earlier per-contact extract, transcript and pasted fragment. Shelved material may be used for exactly one thing — to establish what was previously believed, and why it was wrong — and never as evidence about the past. A message-derived claim either traces to the corpus or it is unsupported; there is no third tier.

The extracts were not retired for being false. Each was accurate about the thread it covered. They were retired for being silently partial, which the policy calls worse, because a false document can be caught by reading it and a partial one cannot. The corpus measures what they were missing: 498 distinct counterparties against the handful the extracts covered; 52 group threads holding 882 messages that per-contact exports cannot represent at all, because a group conversation is not any one person's thread; and a fifteen-year span in which the same person appears under a phone number, an iCloud address and a carrier gateway address, so a single-handle extract shows a relationship stopping dead where it only changed channel (kb/interpretations/fragments-silently-partial.md).

In a fragment, absence of evidence is indistinguishable from evidence of absence. Read one thread in isolation and the inferences that follow — contact stopped, a subject never came up, a period was quiet, someone was not around — are all claims about what is not there, and a fragment cannot support a claim about what is not there. That is why absence in this system is typed, not assumed: `never_observed`, `explicitly_rejected` and `known_not_to_occur` are three different claims, with different evidence requirements, and conflating them is specifically what produced the conclusions this rebuild supersedes.

The corpus is authoritative, not perfect, and the policy states its limits in the same document that grants it authority: 3,086 messages (1.6%) cannot be placed in a thread and are counted and excluded from per-thread figures rather than guessed at, so thread totals are floors; only 156 of 498 counterparties resolve to a name; attachments are referenced, not stored; messages deleted before export are absent; and 2021 holds 282 messages while 2022 holds none — a real gap in the database, and the one place where the absence rule needs care even inside the authoritative tier. Any claim resting on message evidence from before 2026-09-08 is unverified until re-checked against the corpus, and re-verification has exactly three permitted outcomes — confirmed, corrected, withdrawn — each logged. Silently leaving a claim in place is not one of the three.

## Gates that fail safe, and the direction of failure

Where a structural check exists, it is expected to fail in the safe direction, and the record contains a case where the contrast was measured. Three audited tools shared a defect shape: defaults failing toward finding something. The publication gate is where that shape would be worst, because there "finding something" means publishing it. In an adversarial build on 2026-09-09, the builder leaked a withheld node's identifier into `graph.json` through an `attributed_to` field its exclusion logic did not cover — identifiers here are readable slugs, so an identifier is itself information. The publication check, which reads the built output rather than the source and therefore does not share the builder's assumptions, refused: it exited with the node named (kb/data/0037-publication-gate-fails-safe.md). The build was fixed the same session, with regression tests asserting both halves — that the build does not leak, and that the gate refuses if it ever does.

The pattern entry draws the honest revision from that case. Its second falsifier — the claim that these errors are only ever caught from outside the system — was spent twice on 2026-09-09: by the publication gate, and by a table-drift check that compared a published census table against the tool that produced it and failed, because the table had been written by hand before the tool grew the flag that generates it. Every figure was right and no line matched. The core claim survived both counterexamples: incomplete evidence still yields conclusions with the confidence of well-founded ones. What was retired was the reach. The pattern describes unguarded paths, and where a gate exists that independently re-derives the answer, the error is caught mechanically (kb/patterns/partial-data-confident-error.md). How many paths remain unguarded is, on the record, uncounted.

Staleness is handled the same way — as a recorded state rather than an assumption. The layer law guarantees a conclusion can be traced to its evidence; it says nothing about what happens when that evidence later moves. A node whose source was rewritten last week still validates and still reads as current. So the validator flags a node dated earlier than something it cites, and a `rechecked` date clears the flag: re-read against its citations, nothing changed. Recording that null result is the point. A re-check that finds nothing is invisible unless someone writes it down.

Every node at Layer 4 or 5 must also declare falsifiers: specific observations that would break it, concrete enough for someone else to go and look for. At that altitude a claim explains a great deal by construction, which is exactly when "what would show this is wrong" stops being obvious. A reading that cannot say what would refute it is treated here as a preference, not a reading.

## How testimony gets graded in practice

The ledger that grades Dan's retrospective claims is the discipline's calibration instrument, and its method is worth stating because it is stricter than "check whether he was right." It separates veracity from calibration: a claim can be true and badly calibrated — stated as certain, held up a quarter of the time — and the ledger publishes the ways it is itself biased rather than treating its scores as neutral. Its headline finding is the inverted confidence band: claims stated with certainty confirm far less often than claims stated with doubt.

A 2026-09-09 interpretation adds the correction the ledger needs about its own arbiter (kb/interpretations/contemporaneous-is-not-the-same-as-true.md, read for this entry). Every adjudication in the ledger runs one direction: a first-person claim made in 2026 is graded against a record made at the time, and the record wins. The record is never graded. The Full Sail messages show why that asymmetry cannot be assumed: on 2009-09-26 Dan told two people he had graduated that day, alongside a planned move to Los Angeles to work in a studio; five months later he moved to New York instead. A contemporaneous message made for a reader — a reconnection with someone he had not spoken to in years — is a different instrument from a class schedule, a docket entry or a delivery receipt, which were made for something other than the reader's benefit. The ledger has a `slant` column separating errors that would flatter from errors that would condemn, and applies it only to the testimony under grading, never to the evidence doing the grading. The prior wiki's own prose held the opposite posture — "Neither is corrected on the strength of the other" — on the same question its ledger scored as refuted. The pages held; the ledger scored; the number travelled. The rule this entry takes from the case is small and is applied by hand: when a contemporaneous claim is used to grade a later one, ask what the contemporaneous claim was for.

Time is treated with the same suspicion. Every node may carry an exact date, a fuzzy approximation, a range, a named period or a recurrence, and personality claims must declare whether they describe a state, a trait or an adaptation, because generic language flattens three different claims into one. Temporal contradiction is legal and expected: a person can be X at eighteen, not-X at twenty-five and X again at thirty-seven, and the system does not force consistency across a life. Two timestamp traps in the corpus itself — the unpadded hour and the UTC/local offset — are recorded in CORPUS_POLICY.md with the evidence that found them, precisely because both fail silently: nothing about a wrong result looks wrong.

## Worked examples: where the method changed the conclusion

On 2026-09-09 a check of the Facebook export closed a contradiction the prior wiki had carried, unresolved, on the 2015 possession-arrest page: an October 2017 message was said to indicate a separate, otherwise undocumented DUI, sitting against Dan's statement that the possession arrest was his first and only real arrest. The prior wiki had reasoned carefully about how both might be true — a DUI issued by citation, without a booking arrest, would reconcile them. Reading the thread in full dissolved the puzzle instead of reconciling it. At 17:57:51 on 2017-10-19 Dan writes that everyone is welcome to crash at his place so they can all get properly drunk; twenty-four seconds later Christo Coan replies, "hell yeah I already got a DUI I'm not getting any more of those :D thanks bro" — accepting the offer, and giving his own prior DUI as the reason he will not drive. The line belongs to the other speaker, structurally, in the export's own block layout, across all 76 parsed message blocks in the thread (kb/data/0031-dui-belongs-to-the-other-speaker.md). The prior wiki did not misread the sentence; it lost the attribution somewhere between export and page, and then reasoned impeccably from the wrong premise. Its citation was honest and precise enough that the error was checkable at all. The rule the datum states is now part of the working method: a quotation is not evidence until it carries who said it, and in a corpus whose primary sources are conversations, that is the difference between a fact about the subject and a fact about somebody else. No reconciliation was needed, because there was never a second DUI in the record to reconcile.

A second check the same day shows the opposite outcome handled with the opposite discipline. Four messages quoted by the prior wiki as establishing a Suboxone prescriber were searched against the authoritative corpus — re-pulled and verified against its manifest by byte count and SHA-256 before the search ran. One, from 2019-05-31, verified verbatim. The other three, all dated 2025, did not appear; two of their dates hold no messages at all in the corpus, and the whole of June 2025 holds 35 messages against 21,290 outbound across that year (kb/data/0028-prescriber-quotes-partly-unverifiable.md). The finding is therefore not that the prescriber claims are false. It is that their absence is typed `never_observed`, not `known_not_to_occur`, because the corpus is thin exactly where the quotes would have to sit — and treating those misses as refutations would be the precise error this system exists to prevent, committed in the act of verifying someone else's. The datum also explains why the earlier census counts differ: the prior wiki's count of the word "doctor" ran on an extract missing 2022 and 2026 entirely, while this corpus holds those years and 16,261 outbound messages in 2026 alone, so the two counts describe different populations rather than a miscount. Related 2025 material in the corpus — a month's script that could not be filled because it was a New York prescription, a fallback prescriber named in September — is recorded alongside, and a suggestive counterfactual clause from 2025-12-31 is explicitly not promoted, because one conditional clause is thin evidence about a supply arrangement and reading it as decisive would repeat, in the opposite direction, the inference from a fragment that the whole check was about.

A third case, relayed at one further remove, shows a standing interpretation reversed rather than a single claim corrected. The prior wiki's journey page reports that a message-circadian-latency instrument, built fresh from the raw export rather than summarised from prior pages, found the wiki's long-standing "responsiveness gap" reading running backwards: the highest-volume contact answered faster than Dan in every year measured, 2015 through 2026, with a merged-handle median mutual latency of nine minutes across 31,612 replies — so what had been described as a gap in responsiveness was a gap in message length (kb/data/0053-old-wiki-instruments-corrected-each-other.md). The datum is careful about its own standing: it records what the journey page reports about instruments whose pages have not themselves been read here, so the confidence attaches to the report rather than to the nine-minute figure. Even at that remove, the mechanism is the instructive part. No additional care applied to the original framing could have found the error, because the variable itself was wrong; rebuilding from the source rather than from the summary of the source is what reversed it. The same journey records three defects in chat metadata extraction that each silently produced a confident wrong answer rather than an error — including a read-timestamp column that yields the opposite conclusion when read in the wrong direction — which is the failure class this whole entry is organised around, named by the system that had already met it.

## Conflicts in the record

- The "only caught from outside" claim. The pattern entry originally asserted that confident errors are only ever closed by someone outside the system supplying the missing piece. Two mechanical catches on 2026-09-09 spent that falsifier (kb/patterns/partial-data-confident-error.md). Current standing: the pattern is retained in narrowed form — it describes unguarded paths — and the narrowing is recorded in the entry itself.
- The corpus timestamp direction. kb/data/0057-morgantown-audio-contradiction-reproduces.md established a four-hour offset between prior-wiki times and corpus times, and CORPUS_POLICY.md originally stated the direction one way while the datum's own worked example said the opposite. Corrected 2026-09-19 in the policy: the corpus stores `date_sent` in UTC, page times are local, and the offset is settled three ways, including a circadian histogram over all 192,140 rows. The datum's substantive finding — that the August 2026 contradiction reproduces — is unaffected. Current standing: direction corrected in the policy; the original datum stands with its summary sentence superseded.
- The privacy posture. The corpus is gitignored in a public repository, while its backing sheet is shared "anyone with the link" and downloads in full without credentials (kb/interpretations/gitignore-is-not-protection.md). This was raised with the operator with the unauthenticated download demonstrated, and the decision was to leave the sharing as it is. Current standing: unresolved by decision, not by oversight; the contradiction node stays open so that any reasoning about privacy reads both sides rather than the reassuring one.
- The August 2026 audio contradiction itself. Within fourteen hours in one thread, four statements that a recording had been sent and one that it had not. The corpus establishes that the conflict is genuine; it does not establish which side is true, and neither did the prior wiki (kb/data/0057-morgantown-audio-contradiction-reproduces.md). Current standing: held open, by design.

## The limit: structure catches errors of form, not errors of question

The strongest statement of this discipline is also where it stops. Every structural defence checks a property of the output: a layer violation, a withheld identifier in an artifact, a published number that no longer matches its tool. No gate caught the case in kb/data/0057-morgantown-audio-contradiction-reproduces.md, and on the record none could have. Checking a contradiction the prior wiki held open produced three confident wrong answers in a row: a time filter that selected nothing because the hour is unpadded in 44% of rows; a keyword search over the vocabulary of sending that missed a denial phrased as "I could have torn your life apart"; and a second regex built specifically to catch denials, which missed the same line for the same reason. Each pass returned a clean result saying the evidence was absent. Any one of them, published, would have contradicted a page that was right.

What found the error was abandoning patterns and reading the source in chronological order. That is neither a gate nor diligence; it is a method, and methods are carried in prose and forgotten. So the claim the synthesis makes needs its second half kept attached: structure is necessary, and it is not sufficient. This entry therefore makes no promise that a well-formed citation chain settles a question. A chain can be legal at every link and still rest on a source nobody checked — whether the layer invariant needs a transitive provenance rule on top of it is an open question the synthesis carries explicitly, as is what happens to conclusions drawn from a Layer 0 source later found unreliable, given that Layer 0 is append-only.

## The defence the design did not name: publication

The first correction in this repository's history that came from outside it arrived on 2026-09-09. A published page carried the claim that Dan graduated from Full Sail in August 2009. Dan read it, said the month was wrong, and supplied in one sentence the fact that reconciled four dated artefacts nobody had reconciled: he graduated in September 2009, then stayed on through December auditing a class, running labs and finishing his Pro Tools certification (kb/data/0058-graduation-september-2009-then-audit-and-certification.md). The prior wiki had held the question open across two pages and said only a transcript would settle it. No transcript existed. The missing fact was not in any archive anyone holds; it was in the subject, and it surfaced because the page was readable by him.

That makes being readable a load-bearing property rather than a nicety, and it is now part of the method this entry describes: the system's outputs are not only a record of what it concluded, but the surface where someone who knows better can see that it is wrong. Testimony that explains residue is, on this record, a different and stronger instrument than testimony that merely asserts a fact — the September account did not just add a date, it dissolved a contradiction without moving any of the evidence.

## Assessment

The discipline, stated as a working rule for any reader or writer of this wiki, is this: a claim is worth exactly what its downward citation chain is worth; testimony tells you what was said; a fragment tells you nothing about what is absent; a contradiction is an asset to be preserved dated and attributed, not a defect to be tidied; confidence that cannot name its falsifier is decoration; and the absence of a gate on a path is itself a fact about that path. The system's own confidence in that summary is recorded, in the synthesis it comes from, as moderate — two of its original three instances come from this project's own history, and the publication defence rests on a single case of a subject reading a single page. That, too, is the discipline applied to itself.

## See also

- [[wiki/meta/testimony-veracity|Testimony Veracity]]
- [[wiki/mind/synthesis/full-sail-pipeline|The Full Sail Pipeline]]
- [[wiki/mind/synthesis/suboxone-sixteen-years|Suboxone: Sixteen Years]]
- [[wiki/mind/synthesis/family-system-synthesis|The Frank Family System]]

## References

- kb/syntheses/evidence-discipline.md
- ARCHITECTURE.md
- CORPUS_POLICY.md
- kb/patterns/partial-data-confident-error.md
- kb/interpretations/fragments-silently-partial.md
- kb/interpretations/gitignore-is-not-protection.md
- kb/data/0037-publication-gate-fails-safe.md
- kb/data/0057-morgantown-audio-contradiction-reproduces.md
- kb/data/0058-graduation-september-2009-then-audit-and-certification.md
- kb/interpretations/contemporaneous-is-not-the-same-as-true.md
- kb/data/0031-dui-belongs-to-the-other-speaker.md
- kb/data/0028-prescriber-quotes-partly-unverifiable.md
- kb/data/0053-old-wiki-instruments-corrected-each-other.md
