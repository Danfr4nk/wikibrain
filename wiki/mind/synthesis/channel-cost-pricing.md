---
domain: mind
page_type: synthesis
title: "Channel Cost Pricing"
aliases: ["channel-pricing rubric", "firing cost deniability starve-proofness"]
tier: major
status: active
knowledge: earned
date_created: 2026-10-03
date_modified: 2026-10-03
sources:
  - kb/data/0081-explicit-commitment-architecture.md
  - kb/data/0090-block-retraction-2026-09-11.md
  - kb/data/1292-block-unblock-loop-severance-recount-129-128.md
  - raw/self/message-csv/aug-sep-2026-imessage-export/aug-sep-2026-imessage-export.csv
connections:
  - page: wiki/mind/synthesis/bond-vs-structure
    type: extends
    claim: "That entry establishes the ordinal claim — severances break through the cheapest live channel — on the Annie type case; this entry converts the claim into a scored rubric and runs it against every severance the loop and the atlas document."
  - page: wiki/mind/synthesis/block-unblock-loop
    type: extends
    claim: "The loop supplies the case table and the dependency rule; pricing adds the ordering inside the live set, which is what predicts which live channel fires first rather than merely whether one exists."
  - page: wiki/mind/synthesis/severance-declarations
    type: cites
    claim: "The 129-episode, 36-second-median measurement is the declaration-volume baseline this entry prices against: performance volume and channel state are scored as independent variables throughout."
  - page: wiki/mind/synthesis/severance-language-atlas
    type: cites
    claim: "The atlas's 25-thread, per-handle resumption table is the corpus-wide scoring surface for the low-volume cases (Jason Cole, the dealer thread, the fling) that the loop's dyad table does not carry."
  - page: wiki/mind/synthesis/witness-channel-declarations
    type: cites
    claim: "The witness catalog supplies the zero-cost channel's dated instances (August 28, September 4, September 7, 2026) that the rubric prices as narrative maintenance rather than contact."
tags: [relationships, attachment, forensic-analysis, digital-footprint]
importance: 4
synthesizes:
  - wiki/mind/synthesis/bond-vs-structure
  - wiki/mind/synthesis/block-unblock-loop
  - wiki/mind/synthesis/severance-declarations
  - wiki/mind/synthesis/severance-language-atlas
  - wiki/mind/synthesis/witness-channel-declarations
changelog:
  - 2026-10-03: Created to canonical template v1
---

# Channel Cost Pricing

Every severance in this corpus ends the same way on paper and a different way in fact. On paper there is a declaration — "Blocking you," "Goodbye forever," a block toggled on a thread. In fact there is a set of channels still able to carry a message between the two parties, and contact resumes through whichever of them costs least to fire. [[wiki/mind/synthesis/bond-vs-structure|Bond vs Structure]] established the ordering on the longest hold in the record: fifty-two days of silence after June 1, 2026, held against money and apology and broke in eight hours on a question about a dog. [[wiki/mind/synthesis/block-unblock-loop|The Block/Unblock Loop]] supplies the governing rule in its corrected form — a block holds if and only if nothing either party still needs flows through the channel, and what is needed need not be material.

This entry turns that pair into an instrument a reader can reuse without re-deriving it: three scores per channel (what one firing costs, whether the firing can be read as non-contact, and whether circumstance can starve the channel out of existence), applied to every severance the loop and the [[wiki/mind/synthesis/severance-language-atlas|Severance-Language Atlas]] document. The aim is predictive, not taxonomic. Given a new severance, the rubric should say which channel will break it and roughly why the others will not — and it should say what observation would prove the pricing wrong.

All scoring here is ordinal and behavioral: money spent, travel required, legal risk carried, messages observable in the record, channels demonstrably live or dead at dated moments. Nothing in the rubric prices a motive. Where the record quotes a participant describing their own firing ("I should not have responded to that email"), the quote is carried as a dated self-report alongside the channel facts, not as the mechanism's proof.

## The rubric

A **channel** is any medium through which contact can travel between severed parties: the iMessage thread, email, a third party's phone, a shared animal's welfare, a nightly sign-off, an audience that reports back. A channel is **live** if a message can travel it without either party doing something the record shows they will not do. The iMessage thread stayed live through the fifty-two days (she wrote; he read). The material channels in June 2026 were dead by circumstance, not by declaration. Liveness is a dated property, scored at the severance's window, never as a permanent attribute of a relationship.

**Firing cost (0–3)** prices one message through the channel, in total: money, procurement effort, travel, legal exposure, and the social cost of being seen to resume. Anchors: 3 = a handoff (product, cash, travel, risk move together); 2 = a transfer or a showing-up (money leaves an account, a body arrives somewhere); 1 = a substantive bid (an apology, a request, a negotiation — cheap to send, expensive to be seen sending); 0 = no marginal cost (a welfare question, a sign-off, a remark to a third party). The scale is relative within a live set. The rubric never needs a dollar figure; it needs the ordering.

**Deniability (high / partial / none)** prices whether the firing presents as something other than contact. A drug handoff has none: it is unambiguously resumption. A money transfer has none: it is a fact with a paper trail. A dog-welfare question has high deniability: on its face it is kindness to an animal, and the July 23, 2026 self-report ("I should not have responded to that email," said after answering) is the record of a sender discovering the deniability was structural rather than real. A message in the dog's voice ("Milo said…") goes further and disowns the message while sending it. High deniability lowers the effective gate below zero in one specific, observable sense: the message gets sent without the sender first having to register it as the thing a severance was supposed to prevent, so no decision point ever appears at which the severance could be consulted. The rubric treats that as a cost property, not a psychological one — it is visible in the sequence (message sent, recognition after) without any claim about interior states.

**Starve-proofness (starvable / patch-only / starve-proof)** prices whether circumstance can remove the channel. Money channels starve when income ends; supply channels starve when a node fails; presence channels starve when a shared address ends. The compound collapse of May–July 2026 (job, home, supply node, relationship inside ninety days) is the record's demonstration that the whole expensive tier can be zeroed passively. Dog, ritual, and audience channels do not starve that way: the animal stays alive and co-held, the hour of the night keeps arriving, the witnesses already told cannot be un-told. They can only be patched by an explicit prospective declaration naming the channel — the August 19, 2026 pre-closure ("Do NOT ever think … you can tell me … when something happens to Milo") is the record's first such patch, and its test window was voided by the retraction (dat:0090), so patch-only means exactly that: untested, not failed.

The ordering claim, restated for scoring: **inside a live set, channels fire in ascending firing cost; deniability breaks ties downward (the more deniable firing goes first at equal cost); starve-proof channels set the severance's ceiling because they are the ones still live after circumstance has priced out the rest.** A severance therefore holds until its cheapest live channel fires, and its expected lifetime is read off the cheapest row of its live set, not off the declaration's wording, vehemence, or repetition count. The profile context that makes this shape likely rather than surprising is concentration: relational attention in this corpus loads onto a very small number of channels with no failover (relational Gini 0.961 outbound, replicated inbound), so a severance rarely has many live channels to price — and the cheapest one dominates. The rubric borrows that finding at its measured strength, as a prior on live-set size only.

## Channel classes, priced

One firing of each class documented in the record, scored once so the case table below can cite the scores instead of re-arguing them.

| Channel class | Firing cost | Deniability | Starve-proofness | Type instance in the record |
|---|---|---|---|---|
| Drugs / supply handoff | 3 | None | Starvable (node, cash, geography) | Tom as sole node, 2014 and 2026; five handoffs in six days, July 27–August 1, 2026, after contact resumed |
| Money transfer / paperwork | 2 | None | Starvable (income, lump arrival) | June 10, 2026 Valic/Corebridge request — fired, unanswered, during the 52 days |
| Logistics / presence | 2 | None | Starvable (shared address, schedules) | June 1, 2026 group-chat removal as channel toggle; July 2026 house move ending shared space |
| Leverage / disclosure | 2 | None | Patch-only (once published, irreversible) | Maternal-disclosure threats, 0 executed in 7+ instances; dashboards published and withdrawn July 2026 |
| Affect bid (apology, welfare check on a person) | 1 | Partial | Patch-only | June 5 apology, June 9 "Are you okay" — fired, unanswered, during the 52 days |
| Dog welfare question | 0 | High | Starve-proof (animal alive, co-held) | July 4, 2026 email, answered July 23; recurring "Is Mimi ok" form |
| Dog voice | 0 | High | Starve-proof | "Milo said you can borrow his pink kimono"; "Please — Milo" (2026-09-04) |
| Nightly ritual (sign-off) | 0 | High | Starve-proof (hour recurs) | 11 goodnight-shape messages, Aug 11–Sep 7, 2026 export; "Good night pretty girl," 2026-09-07 01:44 |
| Witness narration (Ally channel) | 0 | High | Starve-proof (audience exists) | Aug 28, Sep 4, Sep 7, 2026 block claims during daily direct-channel traffic |
| Witness seizure / triangulation | 0 to sender | Partial | Starve-proof | Coles typing on Annie's handle, Aug 2026; Ellen contact, July 26, 2026 |

Three structural notes the table makes visible. First, the bottom of the table is uniformly non-material, not by definition but by observation: every cost-0 class needs nothing that job loss, eviction, or node failure takes away. Second, deniability and starve-proofness covary in this corpus — the channels circumstance cannot remove are also the channels that do not present as contact — which is why they, rather than the merely cheap ones, set severance ceilings. Third, the expensive tier's firing order after resumption reverses its role: in late July 2026, drug handoffs follow contact by days (five in six days after the dog email reopened the channel) and never precede it in the scored cases. Expensive channels sustain resumed contact; cheap channels initiate it. A pricing that confused those two jobs would misread every relapse as supply-driven when the record shows supply arriving afterward.

## Every severance scored

The loop's case table plus the atlas's low-volume cases, each with its live set at the window, its cheapest live channel, the predicted first firing, and what the record shows. Holds are stated with their provisionality; the Conflicts section below carries the rows whose standing has moved.

**The Annie decade baseline (2015–2026).** Live set at nearly every declaration: direct thread (cost 1–2 depending on bid shape), ritual (0), provision/supply in terminal phase (3 shrinking to starved), dog (0, from 2018). Cheapest live: ritual and dog at 0. Prediction: resumption inside hours through the direct thread, carried by ritual and ordinary traffic, with declarations irrelevant to timing. Observed: 129 episodes, 128 with a following message, all 128 resumed, median gap 36 seconds, 89.1% inside one hour, longest 46 hours (dat:1292). The atlas's stricter vocabulary recounts 104 outbound episodes on the Annie handles with the same 100% resumption and minute-scale medians — the count is rule-relative, the pricing result identical. Score: ordered as predicted, at the cheap end, for eleven years.

**June 1, 2026 — the executed severance.** "Blocking you" 00:09:31, "Goodbye forever … sic semper lupanis" 00:27:49, her "Understood" 00:10:06, then zero outbound for 52 days against seven inbound across four approaches. Live set after the collapse had starved structure: money/paperwork (2, fired June 10, unanswered), affect bids (1, fired June 5 and June 9, unanswered), email dog question (0, fired July 4, resent ~July 21, answered July 23, 624 messages in four days). Prediction under the rubric: the severance outlasts every earlier one precisely because only cost-0 channels remain live, and it breaks on the first cost-0 firing rather than on the cost-1 and cost-2 probes. Observed: exactly that ordering, against the decade base rate. The 31-hour supply refusal at the re-engagement's peak (July 26 request refused, reversed in 31 hours) is the expensive tier being offered and declined after the cheap tier had already done the work — cost ordering holding under adversarial conditions. Score: the rubric's cleanest case.

**Tom, 2014 and 2026 — the expensive-only live sets.** Declared done September 10, 2014 ("not doing this stupid fucking dance"), reopened in five days ("yo looking to purchase"); blocked May 18, 2026, unblocked the same day with a conditional ultimatum. In both windows Dan and Tom co-held nothing, shared no ritual, had no audience between them: the live set contained the supply channel (3) and little else. Prediction: where only expensive channels are live, the expensive channel fires on schedule — cost ordering is relative to the live set, not an absolute claim that cheap always beats expensive. Observed: five days, then same-day. The May 30, 2026 endpoint (threat to involve a third party, no reconciliation documented) then held roughly eleven weeks with a replacement supply node house-calling daily — live set emptied by substitution rather than by starvation, scored as a hold with elapsed-time provisionality (eleven weeks is a fortnight longer than the Annie closure ran before failing). Score: ordered as predicted at the expensive end; the endpoint hold is consistent and explicitly provisional.

**Kristin — his declarations, her block (2025).** His grammar on this channel: 6 outbound episodes, median gap 6 seconds, all resumed (atlas). Her grammar: one inbound severance, December 9, 2025, 23:55:49 — "Blocking you now. Don't contact me again or an officer will be reaching out" — followed by three outbound messages from him inside 37 hours into the held block, then silence in the build. Live sets explain the asymmetry without any sincerity claim: during his declarations the direct thread stayed live and answered instantly (answered bids resume; the trade mechanism in the loop); during hers, the channel carried nothing she still needed — the November record already shows 53 messages, most unanswered image sends, after he stopped replying over the $40 — so no live cheap channel existed to fire from her side. Prediction: his resume in minutes, hers holds. Observed in-build: his in seconds, hers for eight months as observed contact. Post-build events moved this row's standing; see Conflicts. Score: ordered as predicted inside the build window.

**Menore — the no-block control.** No block was ever issued; the February 20, 2025 farewell ("Thanks again for everythin. You guys are the best") followed geography ending the supply dependency (a 99.3%-availability delivery operation suddenly 300 miles away). Live set after the move: the transactional thread with nothing transactional left in it — no co-held object, no ritual, no audience. Prediction: the cleanest hold in the table, requiring no declaration at all. Observed: no re-engagement in the record since, roughly eighteen months at last scoring — with the standing caveat that this same channel once lay silent 2,044 days (April 2013–November 2018) and reopened with a one-minute reply, so the row reads "not yet falsified" rather than settled. Score: consistent, duration-provisional by the channel's own precedent.

**The 2018–19 fling — the answered severance.** Her signal January 28, 2019, 03:20:31 ("I'm done. You don't want me, you don't want anything to do with me"); his ratification 04:22:19 ("So goodbye and good luck"); next thread message 186 days later on different content. This is the atlas's second executed case and the mirror of Kristin: an inbound severance answered without a counter-bid, after which no live channel carried anything either party needed. Prediction: holds. Observed: terminal for the dyad it closed, with the 186-day-later message flagged as possibly a reused number. Score: holds, number-reuse caveat carried.

**Jason Cole, December 14, 2016 — the peer singleton.** Money/art dispute over an $85 commission; his block claim 20:10:14 ("I'm blocking you and I'll tell u when I'm home"), resumed by his own messages within the minute, thread ending on Jason's unanswered message at 21:15. Live set: the direct thread only. Prediction: performance, resumption inside minutes, channel question (did the friendship survive off-thread) unanswerable from the thread. Observed: resumption in roughly sixty seconds; survival past December 2016 remains the people page's open gap. Score: the expensive/cheap distinction never engages — a single-channel live set always fires its only channel.

**The May 2014 account migration and 2022 repatriation.** The infrastructure-layer rows: an old account abandoned in a migration burst with nothing flowing through it at the time (held eight years), and a deliberate ramped return in 2022 when continuity value was rediscovered. Priced, these are the zero-live-channel limiting case (nothing to fire, so nothing fires) and its reverse (a channel deliberately re-lit). They bound the rubric: pricing predicts break channels only where a live set exists; where none exists, duration carries no information, which is the same lesson the 52-day case teaches from the other side.

**The Rick silence (from February 26, 2025).** Total non-response beginning the day after Dan proposed a get-together that Rick accepted, after a decade of 1,600-plus two-way messages with repair inside weeks of the December 2015 friction. No declaration, no block event, no starved dependency the record names, proximity increasing (the Uniontown return) rather than decreasing. The rubric cannot score this row: there is no severance event to price and no live-set change the record documents. It is carried as the table's open case — the one hold the instrument does not explain — rather than forced into either column. Its earlier use as the rubric's cleanest family control was retracted in 2026 on a complete primary record; see Conflicts.

## Using the rubric

For a future severance, in order: (1) list the live set at the declaration date — every channel a message could still travel, including third-party and object channels, with dated evidence of liveness; (2) score each live channel on the three axes using the anchors above; (3) read the expected break off the cheapest high-deniability row, and the expected ceiling off the cheapest starve-proof row (usually the same row); (4) ignore declaration count, wording, and vehemence entirely — across 129 episodes they predict nothing the live set does not predict better; (5) after any firing, re-score: expensive channels re-enter only after cheap ones have reopened them, so a supply handoff observed first means the cheap firing was missed, not that the ordering failed. The rubric's global falsifier is a severance breaking with no live channel firing at all — nothing co-held, no ritual, no witness, no cheap route — which would put the break back inside the speaker rather than in the channel set. No scored case meets it. Its ordering falsifier is narrower: an expensive channel firing while a cheaper live channel sat unused in the same window. The June 2026 window is the standing near-test in the opposite direction (money fired, dog waited, dog broke it), and any future window reversing that order would wound the rubric on its best evidence.

One limit belongs in the instructions rather than the footnotes. Knowing the price does not change the firing in this record: the diagnosis-to-behavior pattern (analysis produced, behavior unchanged absent an exogenous force) is independently documented, and the July 23 self-report shows the pricing being narrated correctly by the participant while the channel fired anyway. The rubric is an instrument for readers of the record — for scoring a severance's likely course — not a claim that pricing a channel closes it. The one intervention the record contains aimed at the cheap end (the August 19 pre-closure naming the dog route prospectively) remains untested because its window was voided; whether a named patch can starve a starve-proof channel is the rubric's central open question, and the two-name routing visible in the dog's registers ("Milo" patched, "Mimi" live) is the reason to expect any patch to leak until the record shows otherwise.

## Conflicts in the record

**Kristin row standing (superseded September 2026).** The in-build hold (December 2025–September 2026 export boundary) was followed by her attempted contact on 2026-08-26 via Messenger message-requests, unseen for seventeen days, and by Dan breaking the block himself with four outbound iMessages on 2026-09-12 within an hour of learning of her attempt (dat:1452, dat:1453 as cited on the loop). Current standing: the December episode remains the corpus's inbound-block instance; the "cleanest control" reading is retired. The rubric's scoring of the December window stands; the severance did not survive September, and it broke from inside, through a discovered-attempt channel (message-requests as witness surface) the original live-set list did not include — a live-set completeness lesson, recorded rather than absorbed.

**Menore and Tom holds (duration-provisional).** Both holds are younger than the counterexamples on their own channels: Menore's prior silence ran 2,044 days before reopening; Tom's eleven weeks barely exceeds the Annie closure's fifty-two days. Current standing: consistent with pricing, explicitly not settled; elapsed time, not pricing, is what would settle them.

**The Rick control (retracted 2026-08-11).** This table's predecessor carried Rick as a decade-long held family block built on an incomplete per-contact export. The complete dump shows 1,600-plus two-way messages, 2015–2025, with repair inside weeks. Current standing: retracted as a control; the post-February 2025 silence is carried above as an unscored open case. No pricing claim in this entry rests on the Rick row.

**Episode counts (104 vs 129).** The loop's recount (looser vocabulary, 95,067-row merged Annie corpus) yields 129 episodes; the atlas's stricter vocabulary on its 192,140-row build yields 104 outbound episodes on the Annie handles. Current standing: both carried; resumption (100%) and minute-scale medians are invariant across instruments, and the rubric uses only the invariant.

## Assessment

Priced across the full table, the record supports the ordering claim at both ends of the scale and in its limiting cases: expensive-only live sets break expensively and fast (Tom), cheap-inclusive live sets break cheaply regardless of declaration volume (the Annie decade, Kristin-his), emptied live sets hold without any declaration at all (Menore), and the one long hold under full material starvation broke on its sole surviving cost-0 channel (June–July 2026). The instrument's honest edges are completeness and time: the Kristin break arrived through a surface (message-requests) the live-set list missed, and every current hold is provisional on elapsed time by precedents sitting on the same channels. A severance scored by this rubric should therefore always be reported as cheapest-live-channel plus date, never as a duration verdict — duration is the output the rubric explains, not evidence it can spend.

## See also

- [[wiki/mind/synthesis/bond-vs-structure|Bond vs Structure]]
- [[wiki/mind/synthesis/block-unblock-loop|The Block/Unblock Loop]]
- [[wiki/mind/synthesis/severance-declarations|The Severance Declaration as Performance]]
- [[wiki/mind/synthesis/witness-channel-declarations|Witness-Channel Declarations]]
- [[wiki/mind/synthesis/provision-failure-modes|Provision Failure Modes]]

## References

- kb/data/0081-explicit-commitment-architecture.md — the architecture counts (129 declarations, 0 severance signals in 41,073 messages) behind the baseline row.
- kb/data/0090-block-retraction-2026-09-11.md — the retraction that voided the pre-closure test window.
- kb/data/1292-block-unblock-loop-severance-recount-129-128.md — the primary recount: 129 episodes, 36-second median, 46-hour maximum.
- raw/self/message-csv/aug-sep-2026-imessage-export/aug-sep-2026-imessage-export.csv — the export carrying the ritual and Milo-voice series priced above.
