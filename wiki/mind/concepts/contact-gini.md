---
domain: mind
page_type: concept
title: "Contact Gini"
status: active
date_created: 2026-06-22
date_modified: 2026-09-13
knowledge: earned
tags: [relationships, attachment, forensic-analysis, digital-footprint]
sources:
  - raw/self/message-csv/MASTER_MESSAGES_DB_DUMP.csv
  - raw/self/message-csv/annie_all_time_logs.csv
  - raw/self/message-csv/imessage_3307038747_both_all_now.csv
  - raw/self/dox-md/THE_DAN_FRANK_BOOTLOADER.md
  - corpus/messages.csv (held authoritative export, 192,140 rows)
connections:
  - page: wiki/mind/synthesis/single-channel
    type: component-of
    claim: "The contact graph is the measured leg of the single-channel architecture; the 2026-09-09 independent replication (inbound 0.9556 / 498 handles) supersedes the page's unheld-export figure, and the evaluative leg's 0.188 taste Gini bounds the concentration as relational-only."
  - page: wiki/mind/profile/deviance-mapping
    type: evidenced-by
    claim: "Relational concentration is one of exactly two deviance-audit claims that survive independent recomputation against a comparison population — the audit's best claim and simultaneously the one it miscast: a liability, not a skill."
  - page: wiki/mind/synthesis/provision-grammar
    type: parallels
    claim: "The money channel concentrates exactly like the message channel: provision flows through the same two-to-three nodes, and it does not pause for severance performances. Two ledgers, one topology."
  - page: wiki/people/annie-ulmer
    type: evidenced-by
    claim: "The primary node by every cut: 97,768 unique messages across eleven years, the load the whole architecture routes through."
  - page: wiki/people/suzanne-frank
    type: evidenced-by
    claim: "The second node by person (33,698 messages, a decade-plus channel) — the redundancy the original page did not count, and the reason the concentration claim is stated in dependable load rather than raw volume."
  - page: wiki/mind/concepts/explicit-verbal-commitment
    type: parallels
    claim: "Concentration and verbal-anchoring are the same vulnerability in two registers: the load runs through one channel, and the rules that govern it arrive through that channel's words."
  - page: wiki/mind/synthesis/message-circadian-latency
    type: parallels
    claim: "The latency analysis is the temporal counterpart to this volume metric; both converge on the single near-synchronous channel."
---

# Contact Gini

Most of Dan's inbound human contact comes from a handful of handles — a partner of eleven years, a mother, a best friend, a dealer — and the long tail of roughly 490 other handles is essentially rounding. That is not a metaphor. Measured on the held authoritative corpus it is a Gini coefficient of **0.9556 over 498 distinct contact handles** (inbound, primary-verified, 2026-09-09: [dat:0528](../../kb/data/0528-contact-gini-inbound-replication-2026-09-09.md)). Top-1 share 33.6%, top-5 68.0%. A second independent export lands within 0.005 of the same figure. The number is the shape of where a life is lived.

## The measurement, as of September 2026

> **CORRECTED [2026-09-13]** — this page previously quoted **0.9601 over 496 handles**, computed from `MASTER_MESSAGES_DB_DUMP.csv` (184,359 rows). That export is not held in this repository and cannot be re-derived here. An independent recomputation against the held authoritative corpus (`corpus/messages.csv`, 192,140 messages spanning 2011-03-19 to 2026-09-07, 577 threads, 498 counterparty handles; [dat:0001](../../kb/data/0001-corpus-scale.md)) returns **inbound 0.9556 over 498 handles** (92,780 inbound rows, all attributed), with per-year tables replicating row-for-row in most years ([dat:0529](../../kb/data/0529-contact-gini-per-year-replication.md)) and node volumes spot-checking clean ([dat:0530](../../kb/data/0530-contact-gini-node-volumes-spot-check.md)). The held corpus is the measurement's ground; the 0.9601 figure is retained below as the superseded first computation, not withdrawn as a finding — two exports, ~8,000 rows apart, landing in the same band is what makes the metric stable rather than artefactual.

What 0.9556 means in load terms:

| Cut | Share of directed messages | Note |
|---|---|---|
| Top 1 contact | 33.6% | the single bond, by volume |
| Top 5 contacts | 68.0% | |
| Contacts ever crossing 1,000 messages | 12 of 498 | |
| Contacts ever crossing 100 messages | 44 of 498 | |

The concentration is not a constant — computed per year it tightens under load (2025, the collapse year, is the highest-concentration full year and by far the highest-volume year; 2020 the lowest), and the early years carry export-coverage caveats. The lifetime figure is real in every measured year. This page's old per-year table (from the unheld MASTER_DUMP) replicates row-for-row on the held corpus per dat:0529 and is retained with that provenance.

## The nodes, by person

| Node | Volume | Role |
|---|---|---|
| [[wiki/people/annie-ulmer|Annie]] | **97,768 unique messages** | primary partner, eleven years |
| [[wiki/people/suzanne-frank|Suzanne Frank]] | **33,698** | mother — the corpus's #2 node by person |
| [[wiki/people/kristin|Kristin]] | 20,009 | ten-week relationship Aug–Nov 2025 |
| [[wiki/people/tom|Tom Maison]] | 4,160 | primary male ally |
| Menore | 1,753 | pure logistics thread — volume with zero relational depth |

> **REVISED [2026-08-18] — the Suzanne Frank row was wrong by a factor of fourteen** (2,391 against a true 33,698) because it was taken from the unreliable MASTER_DUMP extract. The recount puts her **second in the entire corpus by person** — ahead of Kristin, 3.7× the next non-Annie handle. The page's original narrative ("emotional stability routed through a *single* external input") was overstated on its own evidence: there is a second high-volume channel, a decade-plus long, that did not close on 1 June 2026. The concentration figure is unaffected; what changes is the identity of the second node and therefore the shape of the redundancy question. **Countervailing:** the mother channel is not load-bearing the same way — its record alternates rescue with an itemised bill, and as of 11 August 2026 it produced *"It's time for you to go."* Volume is not support. The concentration claim is stated in **dependable load**, not message count.

## What the number is not

**Not two-sided.** [dat:0531](../../kb/data/0531-contact-gini-two-sided-unverifiable.md):

> **CORRECTED [2026-09-13]** — the "TWO-SIDED 2026-08-01" section this page previously carried (recipient-recovery imputation, bracket/nearest rules, the 0.9591–0.9636 two-sided band, the "narrower going out" claim) is **unverifiable**. All 99,360 outbound rows in the held corpus carry no contact handle, and the MASTER_DUMP export those claims were re-derived from is not held. The section is retained in the page history as a dated attempt, not as a finding. What survives replication is strictly **inbound** concentration. Whether Dan sends as concentratedly as he receives is unmeasured here.

**Possibly a relationship artefact, not a trait.** Annie's thread alone is 97,768 unique messages out of the corpus. Any eleven-year single-partner history archived in one medium concentrates the inbound Gini by construction — the number may be measuring "has a long-term partner and archives iMessage," which is not a personality trait. This is the strongest alternative reading and the page does not defeat it; the per-year replication only shows the concentration is structural across the decade, not that it would generalise to a different life.

**Inflated by uneven capture.** The corpus has documented structural gaps (2021 nearly void; the Suz thread has zero rows in two months; unheld bursts). Missing data is not randomly distributed across contacts, and missingness that hits the long tail harder than the top handles pushes the measured Gini up. No comparison population exists — nobody has computed the contact Gini of an ordinary heavy text user's archive — so "extreme" is asserted, not shown.

## The tail is not thin relationships. It is non-events.

One finding the one-sided figure could not produce, recovered from the page's own earlier (now-superseded) outbound analysis and consistent with the held-corpus shape: the long tail is not a set of thin relationships. Hundreds of handles sent one or two messages and never drew a reply. The tail inflates the handle count without adding relational load — which means the inbound coefficient, if anything, *understates* the concentration of actual relationships, because the denominator is padded with non-events.

## Cross-data-type cuts: the concentration is relational-only

**Money.** The provision channel concentrates exactly like the message channel. [[wiki/mind/synthesis/provision-grammar]] documents provision flowing through the same two-to-three nodes (Annie, Suz, Ally registers), and the money does not pause for severance performances — the August 2026 exports show provision continuing through the termination window. Two ledgers, one topology. Where the message record shows concentration, the financial record independently shows it too.

**Location.** The spatial record converges on the same shape: the CATO identity payload records a mean radius of gyration of 15.8 km — a life lived within a small number of physical anchors. See [[wiki/mind/synthesis/spatial-behavior]]: extreme concentration around a handful of anchors (home/work socially; a handful of contacts relationally) punctuated by rare, decisive ruptures. The body and the address book agree.

**Taste — the contrast that bounds the claim.** And here the architecture stops. The curated taste record's creator-level Gini is **0.188** for music (1,477 creators), **0.166** for books, **0.000** for art (single-channel synthesis, measured). His cultural intake is *diffuse* — deliberately, curatorially wide — while his human intake is a near-total monopoly. The concentration is not a general property of how he distributes attention. It is specific to people. That is the finding the through-line to [[wiki/mind/synthesis/single-channel]] now carries: the architecture generalises across the creative, cognitive and evaluative domains *except* where it inverts, and the inversion is the information — **people are the one domain where he cannot distribute.**

## The profile lens

Read through the Ti-dominant profile, the Gini is what happens when a systematising mind turns its instruments on its own social graph: the contact list becomes an economic metric, the relationship becomes a load diagram, and the vulnerability becomes an engineering requirement ("redundancy is a critical engineering requirement, not a therapeutic recommendation"). The Fe-inferior side is the mechanism under the number — the channel that would maintain a broad, low-intensity social periphery by feel is the weakest function in the stack, so the periphery atrophies and the load consolidates onto the one or two channels that are maintained by explicit rule rather than social instinct. The number is the attachment architecture rendered as a statistician would recognise it.

## Synthesis: what the totality says

As of September 2026 the contact Gini is the most measurement-solid number in the corpus — one of exactly two deviance-audit claims that survive independent recomputation, per the audit's own boundary ([dat:0891](../../kb/data/0891-deviance-audit-structure-and-boundary.md)). It says: one life, routed through one bond, with a second channel (the mother) that carries volume but not dependable load, and a periphery of non-events. It tightens under load. It does not generalise to culture, money aside — the money channel matches it, the taste record inverts it. The redundancy imperative stands, restated: the problem was never "one channel." It is that the second channel is non-substitutable — it can take attention and cannot take weight — and the periphery is not thin, it is absent.

## Gaps

- **No two-sided figure.** Outbound attribution is unrecoverable in the held corpus; the symmetric-architecture question is open until a richer export exists.
- **No comparison population.** "Extreme" is asserted against income-distribution intuition, not against other heavy text users.
- **Handles, not people.** Annie holds at least two handles plus an email; a person-level coefficient would be *higher* than any figure on this page. That collapse has not been done.
- **Post-June-2026 topology.** The primary node closed 1 June 2026; no updated coefficient has been computed against post-closure data (Twitter activity, work channels, current logs). The August 2026 Ally burst — more messages to Ally than to Annie across Aug 18–19, by a three-figure margin — is the shape a post-closure recomputation would have to absorb.

## Limits of record

All figures on this page are iMessage-corpus figures. They measure archived text contact, not the life: cohabitation windows (Sep–Dec 2024: 3,613 Annie / 0 Dan — a cohabitation artefact, not missing data), voice calls, in-person time, and the 2021–22 export void all sit outside the metric. The 0.9556 is a property of the held export, replicated; the 0.9601 is a property of an unheld export, converged. Neither is a property of Dan independent of the archive.
