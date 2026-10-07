---
domain: mind
page_type: concept
title: "Contact Gini"
status: active
date_created: 2026-06-22
date_modified: 2026-10-07
knowledge: earned
tier: major
tags: [relationships, attachment, forensic-analysis, digital-footprint]
sources:
  - raw/self/message-csv/MASTER_MESSAGES_DB_DUMP.csv — ⚠ Source reference unresolved — original target no longer exists in current corpus.
  - raw/self/message-csv/annie_all_time_logs.csv — ⚠ Source reference unresolved — original target no longer exists in current corpus.
  - raw/self/message-csv/imessage_3307038747_both_all_now.csv — ⚠ Source reference unresolved — original target no longer exists in current corpus.
  - raw/self/dox-md/THE_DAN_FRANK_BOOTLOADER.md — ⚠ Source reference unresolved — original target no longer exists in current corpus.
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
  - page: wiki/mind/synthesis/severance-language-atlas
    type: parallels
    claim: "Contact Gini and the severance-language atlas are parallel per-handle corpus measurements: Gini over 498 handles finds inbound volume concentrated in a few nodes, and the atlas counts declaration language across 503 handles on the same held corpus."
  - page: wiki/self/message-corpus-coverage-map
    type: parallels
    claim: "This Gini (0.9556 over 498 handles) is measured on the held authoritative corpus; the Coverage Map is the inventory that says which corpus that is and what its holes allow."
    claim: "The latency analysis is the temporal counterpart to this volume metric; both converge on the single near-synchronous channel."
---

# Contact Gini

Most of Dan's inbound human contact comes from a handful of handles — a partner of eleven years, a mother, a best friend, a dealer — and the long tail of roughly 490 other handles is essentially rounding. Measured on the held authoritative corpus, that shape is a Gini coefficient of **0.9556 over 498 distinct contact handles** (inbound, primary-verified, 2026-09-09: [dat:0528](../../kb/data/0528-contact-gini-inbound-replication-2026-09-09.md)). The top contact takes 33.6% of all inbound volume; the top five take 68.0%. That is not a metaphor. The number is the shape of where a life is lived.

It is not a constant, either. The concentration tightens under load: 2025, the collapse year, is the highest-concentration full year in the record and by far the highest-volume one, while 2020, the quietest year, is the loosest. And the concentration is specific to people. Run the same measurement on his curated taste record and it inverts — music 0.188, books 0.166, art 0.000 — while the money channel concentrates exactly like the message channel. People are the one domain where he cannot distribute.

As of September 2026 it is also the most measurement-solid number in the corpus: one of exactly two deviance-audit claims that survive independent recomputation against a real comparison population (the other: graded numeric confidence in casual text), and, per the audit's own boundary, one of the two is a liability, not a skill.

## The measurement, as of September 2026

The held authoritative corpus (`corpus/messages.csv`) holds 192,140 messages spanning 2011-03-19 to 2026-09-07, across 577 threads and 498 counterparty handles ([dat:0001](../../kb/data/0001-corpus-scale.md)). Of those rows 99,360 are sent and 92,780 are received, and every one of the 92,780 inbound rows carries a contact handle. The build is 525 one-to-one threads and 52 group threads; 185,338 rows carry text and 8,120 carry an attachment. The independent recomputation (2026-09-09) computed the Gini on inbound rows directly — inbound defined as `is_from_me != '1'`, contact handle taken as the sender field, the standard sorted-formulation — with year attribution converted from UTC to America/New_York ([dat:0528](../../kb/data/0528-contact-gini-inbound-replication-2026-09-09.md)).

The headline figure: **inbound Gini 0.9556 over 498 handles**.

The figure was corrected 2026-09-13 — see Conflicts in the record. Two further figures sit in the same band, which is what makes the metric stable rather than artefactual. The page's original export (MASTER_DUMP, 184,359 rows, not held in this repository) lands within 0.005 at 0.9601 over 496 handles, and the page's own bootloader section carried a third figure, 0.961 over 498 identifiers, computed over 111,378 attributed messages out of a 181,585-message corpus ([dat:0528]). Three computations, three exports, one band: 0.9556–0.961. The replication notes what actually matches: the two measured exports differ by ~8,000 rows, so the handle-count agreement (498 = 498) could be partly coincidental. What is not coincidental is two Gini coefficients computed over different exports landing within 0.005 of each other, with per-year tables replicating row-for-row in most years. That is the signature of a stable metric, not an export artefact.

What 0.9556 means in load terms:

| Cut | Share of directed messages | Note |
|---|---|---|
| Top 1 contact | 33.6% | the single bond, by volume |
| Top 5 contacts | 68.0% | |
| Contacts ever crossing 1,000 messages | 12 of 498 | |
| Contacts ever crossing 100 messages | 44 of 498 | |

### Inbound concentration by year, held corpus

Recomputed 2026-09-09 ([dat:0529](../../kb/data/0529-contact-gini-per-year-replication.md)):

| Year | Inbound messages | Handles | Gini | Top-1 share |
|---|---|---|---|---|
| 2015 | 6,488 | 11 | 0.9019 | 98.6% |
| 2016 | 10,209 | 25 | 0.9082 | 60.3% |
| 2017 | 8,815 | 65 | 0.9252 | 84.1% |
| 2018 | 20,295 | 146 | 0.9353 | 55.3% |
| 2019 | 10,628 | 189 | 0.9019 | 42.7% |
| 2020 | 3,161 | 108 | 0.8405 | 25.4% |
| 2021 | 128 | 3 | 0.4635 | 71.9% |
| 2022 | 0 | — | — | — |
| 2023 | 452 | 32 | 0.7460 | 47.6% |
| 2024 | 2,198 | 48 | 0.8633 | 34.0% |
| 2025 | 19,947 | 71 | 0.9537 | 49.7% |
| 2026 | 10,459 | 23 | 0.9046 | 73.2% |

The concentration is not a constant — it tightens under load. 2025, the collapse year, is the highest-concentration full year (0.9537) and by far the highest-volume one (19,947 inbound messages); 2020 is the lowest (0.8405). 2015's 98.6% top-1 share is an export-coverage artefact, not a social world — the held corpus's inbound window begins 2015-11-12, with no inbound messages before 2015, corroborating the page's "pre-2015 unmeasurable" and its decision to treat the early years as below the evidence floor. 2021 holds 128 inbound messages over 3 handles (Gini 0.4635 — a near-dormant regime, top-1 still 71.9%) and 2022 holds zero: the void years, consistent with the page's "below the 200-message floor entirely." 2017's 84.1% top-1 share shows the single-bond regime near its extreme in a measured year.

The replication also closes the provenance question on the page's own earlier per-year table, which had been computed from the unheld MASTER_DUMP: three years reproduce exactly on the held corpus (2015, 2023, 2024) and five more within a few rows (2016–2020 within 0.004 of the page's Gini values) — exactly what two exports of the same iMessage archive with slightly different attribution rules should produce. 2025 and 2026 diverge in counts between exports: the page's 2025 row (33,214 msgs) against the held inbound (19,947) is too large for timezone handling, and the page's 2026 row (9,884 msgs / 19 handles / 0.8928) is the two-sided figure, not an inbound row — it matches the page's own retracted two-sided section verbatim. But the 2025 concentration figures agree closely regardless (Gini 0.9576 vs 0.9537; top-1 49.9% vs 49.7%), so the concentration claim is export-independent even where the counts are not. The page's methodological notes — "2015 is an export-coverage artefact, not a social world," the 200-message floor, "the concentration is not a constant, it tightens under load" — survive the replication intact ([dat:0529]).

## The nodes, by person

| Node | Volume | Role |
|---|---|---|
| [[wiki/people/annie-ulmer|Annie]] | **97,768 unique messages** | primary partner, eleven years |
| [[wiki/people/suzanne-frank|Suzanne Frank]] | **33,698** | mother — the corpus's #2 node by person |
| [[wiki/people/kristin|Kristin]] | 20,009 | ten-week relationship Aug–Nov 2025 |
| [[wiki/people/tom|Tom Maison]] | 4,160 | primary male ally |
| Menore | 1,753 | pure logistics thread — volume with zero relational depth |

The Suzanne Frank row was revised 2026-08-18 — the recount that put her second in the entire corpus by person, fourteen times the original figure. The revision, its countervailing note, and the reason the concentration claim is stated in dependable load rather than raw volume are set out in Conflicts in the record.

### The nodes under independent check

Spot-checking the page's node volumes against sender counts in the held corpus — matching by count only, which is weak evidence for person identity except at the very top — returns four exact matches: Annie's PA handle at 31,177, the Frequent PA Contact at 4,812, Johnny at 3,462, and the Menore logistics node at 1,753 ([dat:0530](../../kb/data/0530-contact-gini-node-volumes-spot-check.md)). That is the kind of agreement that only happens when two exports are counting the same archive under the same attribution rules for those handles.

Two near matches. Jerad Friedline: 894 in the held corpus against the prior wiki's 879 in its body table and 857 in its frontmatter connection — all within 5%, likely the same handle counted under different export windows, never reconciled there. Annie's NYC handle: 13,521 held against 17,145 on the prior wiki — a ~21% gap, the largest of any node, implying this handle's attribution genuinely differs between exports (the page's own recount notes imply the NYC handle has a complicated history).

Two figures the held corpus cannot reach at all. Kristin's 20,009 appears as no sender's count anywhere in the held corpus (closest candidates: 13,521 and 9,907), and Suzanne Frank's 33,698 likewise appears nowhere (the second-largest held sender holds 13,521). Suz's figure comes from joining `all_imessages_complete_dump.txt` to a 2026-08-13 deep export — neither held in this repository — so the "second in the entire corpus by person" claim is relayed from the prior wiki's own extraction, not re-verified in this pass. Handle-to-person mapping for the held corpus is not available, so absent exact-count matches these figures cannot be checked here ([dat:0530]).

## The tail is not thin relationships. It is non-events.

One finding the one-sided figure could not produce, recovered from the page's own earlier (now-superseded) outbound analysis and consistent with the held-corpus shape: the long tail is not a set of thin relationships. Hundreds of handles sent one or two messages and never drew a reply. The tail inflates the handle count without adding relational load — which means the inbound coefficient, if anything, *understates* the concentration of actual relationships, because the denominator is padded with non-events.

The held corpus's inbound sender-count ladder shows how fast the volume falls once past the top nodes — the top sixteen senders: 31,177 / 13,521 / 9,907 / 4,812 / 3,645 / 3,462 / 2,462 / 2,311 / 1,753 / 1,095 / 1,077 / 894 / 887 / 881 / 841 / 802 ([dat:0530]). By the sixteenth sender the count is under 1,000, and the remaining ~480 handles trail down into single digits — a long tail that is, measuredly, almost all non-events.

## What the number is not

**Not two-sided.** [dat:0531](../../kb/data/0531-contact-gini-two-sided-unverifiable.md): the page's earlier two-sided analysis (the "TWO-SIDED 2026-08-01" section) was found unverifiable 2026-09-13 — see Conflicts in the record. What survives replication is strictly **inbound** concentration. Whether Dan sends as concentratedly as he receives is unmeasured here.

**Possibly a relationship artefact, not a trait.** Annie's thread alone is 97,768 unique messages out of the corpus. Any eleven-year single-partner history archived in one medium concentrates the inbound Gini by construction — the number may be measuring "has a long-term partner and archives iMessage," which is not a personality trait. This is the strongest alternative reading and the page does not defeat it; the per-year replication only shows the concentration is structural across the decade, not that it would generalise to a different life.

**Inflated by uneven capture.** The corpus has documented structural gaps (2021 nearly void; the Suz thread has zero rows in two months; unheld bursts). Missing data is not randomly distributed across contacts, and missingness that hits the long tail harder than the top handles pushes the measured Gini up. No comparison population exists — nobody has computed the contact Gini of an ordinary heavy text user's archive — so "extreme" is asserted, not shown.

## Cross-data-type cuts: the concentration is relational-only

**Money.** The provision channel concentrates exactly like the message channel. [[wiki/mind/synthesis/provision-grammar]] documents provision flowing through the same two-to-three nodes (Annie, Suz, Ally registers), and the money does not pause for severance performances — the August 2026 exports show provision continuing through the termination window. Two ledgers, one topology. Where the message record shows concentration, the financial record independently shows it too.

**Location.** The spatial record converges on the same shape: the CATO identity payload records a mean radius of gyration of 15.8 km — a life lived within a small number of physical anchors. See [[wiki/mind/synthesis/spatial-behavior]]: extreme concentration around a handful of anchors (home/work socially; a handful of contacts relationally) punctuated by rare, decisive ruptures. The body and the address book agree.

**Taste — the contrast that bounds the claim.** And here the architecture stops. The curated taste record's creator-level Gini is **0.188** for music (1,477 creators), **0.166** for books, **0.000** for art (single-channel synthesis, measured). His cultural intake is *diffuse* — deliberately, curatorially wide — while his human intake is a near-total monopoly. The concentration is not a general property of how he distributes attention. It is specific to people. That is the finding the through-line to [[wiki/mind/synthesis/single-channel]] now carries: the architecture generalises across the creative, cognitive and evaluative domains *except* where it inverts, and the inversion is the information — **people are the one domain where he cannot distribute.**

## The profile lens

Read through the Ti-dominant profile, the Gini is what happens when a systematising mind turns its instruments on its own social graph: the contact list becomes an economic metric, the relationship becomes a load diagram, and the vulnerability becomes an engineering requirement ("redundancy is a critical engineering requirement, not a therapeutic recommendation"). The Fe-inferior side is the mechanism under the number — the channel that would maintain a broad, low-intensity social periphery by feel is the weakest function in the stack, so the periphery atrophies and the load consolidates onto the one or two channels that are maintained by explicit rule rather than social instinct. The number is the attachment architecture rendered as a statistician would recognise it.

## Assessment

As of September 2026 the contact Gini is the most measurement-solid number in the corpus — one of exactly two deviance-audit claims that survive independent recomputation, per the audit's own boundary ([dat:0891](../../kb/data/0891-deviance-audit-structure-and-boundary.md)). It says: one life, routed through one bond, with a second channel (the mother) that carries volume but not dependable load, and a periphery of non-events. It tightens under load. It does not generalise to culture, money aside — the money channel matches it, the taste record inverts it. The redundancy imperative stands, restated: the problem was never "one channel." It is that the second channel is non-substitutable — it can take attention and cannot take weight — and the periphery is not thin, it is absent.

The audit that statement rests on is itself on the record. [dat:0891](../../kb/data/0891-deviance-audit-structure-and-boundary.md) describes a self-commissioned "Level 5 / Psycho-Structural Deviance Audit" run in **August 2025**, measuring Dan against a normative baseline (35-year-old American male, some college, ISTJ/ESTJ-typical, values stability, social drinking, 2–3 lifetime relationships), delivered at 92% stated confidence with the verdict "a living edge case." Domain scores: Substance use 99, Cognitive habits 98, Linguistic style 97, Personality traits 95, Values/motivations 92, Relationships 88, Emotional processing 85. The audit's own caveats stand with it: the baseline is a sketch, not a normed population; the scores are single-model judgments with no inter-rater check; and the audit predates the June 2026 closure and the 2026 work/housing shocks. The two-claims-survive boundary is drawn not by the audit but by the failure-to-launch synthesis citing it: exactly two claims survive independent recomputation against a real comparison population — relational concentration (0.9601 on the old export, re-derived on the held corpus as 0.9556 inbound) and graded numeric confidence in casual text — "and one of the two is a liability, not a skill."

## Conflicts in the record

### 2026-09-13 — the headline figure is superseded

This page previously quoted **0.9601 over 496 handles**, computed from `MASTER_MESSAGES_DB_DUMP.csv` (184,359 rows). That export is not held in this repository and cannot be re-derived here. An independent recomputation against the held authoritative corpus (`corpus/messages.csv`, 192,140 messages spanning 2011-03-19 to 2026-09-07, 577 threads, 498 counterparty handles; [dat:0001](../../kb/data/0001-corpus-scale.md)) returns **inbound 0.9556 over 498 handles** (92,780 inbound rows, all attributed), with per-year tables replicating row-for-row in most years ([dat:0529](../../kb/data/0529-contact-gini-per-year-replication.md)) and node volumes spot-checking clean ([dat:0530](../../kb/data/0530-contact-gini-node-volumes-spot-check.md)). The held corpus is the measurement's ground; the 0.9601 figure is retained here as the superseded first computation, not withdrawn as a finding — two exports, ~8,000 rows apart, landing in the same band is what makes the metric stable rather than artefactual. The same band also holds the page's own bootloader-section figure of 0.961 over 498 identifiers, computed over 111,378 attributed messages out of a 181,585-message corpus ([dat:0528]). Current standing: the headline is 0.9556, inbound, on the held corpus. (The superseded figure's top-1/top-5 shares were 29.6% / 70.1%; the replication returns 33.6% / 68.0%.)

### 2026-09-13 — the two-sided section is retracted as unverifiable

The "TWO-SIDED 2026-08-01" section this page previously carried — recipient-recovery imputation by `bracket`/`nearest` rules, the 0.9591–0.9636 two-sided band, the 2026 anchor year (inbound 4,046 / 18 handles / 0.8748; outbound 5,838 / 10 handles / 0.8119; two-sided 9,884 / 19 / 0.8928), outbound top-1 73.5% / top-5 99.2%, "495 handles wrote to Dan, 303 ever got anything back," the 2025/2026 two-sided per-year rows, and the "narrower going out" claim — is **unverifiable**. All 99,360 outbound rows in the held corpus carry no contact handle, and the MASTER_DUMP export those claims were re-derived from is not held. The section is retained here as a dated attempt, not as a finding: its figures are relayed from the prior wiki's own analysis of its unheld export, checkable in principle (the method description is complete) but with its input missing ([dat:0531](../../kb/data/0531-contact-gini-two-sided-unverifiable.md)). The held corpus is in fact more one-sided than the MASTER_DUMP — the prior wiki reported 2026 outbound as 99.8% attributed there, while here it is 0% — which makes the imputation work the only bridge, and its input is missing. The exports are also genuinely different in window: the held corpus's 2026 volumes (10,459 inbound, 16,217 outbound, window to 2026-09-07) differ substantially from the MASTER_DUMP's (4,046 inbound, 5,838 outbound, window to ~2026-06-06). What survives replication is strictly **inbound** concentration. Whether Dan sends as concentratedly as he receives is unmeasured here. Current standing: no two-sided figure. If `MASTER_MESSAGES_DB_DUMP.csv` (or any export with attributed outbound rows) is ever deposited in `raw/`, the falsifiable claims to re-run are the `bracket`@30min 96.6% held-out accuracy, the imputation bias table, the 2026 anchor, and the "303 of 495 handles got a reply" funnel figure.

### 2026-08-18 — the Suzanne Frank row was wrong by a factor of fourteen

> **REVISED [2026-08-18] — the Suzanne Frank row was wrong by a factor of fourteen** (2,391 against a true 33,698) because it was taken from the unreliable MASTER_DUMP extract. The recount puts her **second in the entire corpus by person** — ahead of Kristin, 3.7× the next non-Annie handle. The page's original narrative ("emotional stability routed through a *single* external input") was overstated on its own evidence: there is a second high-volume channel, a decade-plus long, that did not close on 1 June 2026. The concentration figure is unaffected; what changes is the identity of the second node and therefore the shape of the redundancy question. **Countervailing:** the mother channel is not load-bearing the same way — its record alternates rescue with an itemised bill, and as of 11 August 2026 it produced *"It's time for you to go."* Volume is not support. The concentration claim is stated in **dependable load**, not message count.

Note on standing: the 33,698 figure comes from the prior wiki's own extraction (joining `all_imessages_complete_dump.txt` to a 2026-08-13 deep export — neither held in this repository), so it is relayed, not re-verified in the 2026-09-09 replication pass; no sender count in the held corpus lands near it ([dat:0530]).

### 2026-09-09 — the prior wiki's node table carried two internal discrepancies, unresolved

The spot-check surfaced two discrepancies internal to the prior wiki's own page, never reconciled there. Kristin: the frontmatter connection claimed 22,018 messages in ten weeks while the body table claimed 20,009 with an explicit recount note dated 2026-08-16. Jerad Friedline: the frontmatter connection claimed 857 messages while the body table claimed 879 (the held corpus's candidate count is 894 — all three within 5%, likely the same handle under different export windows). The held corpus cannot adjudicate the Kristin figures because handle-to-person mapping is not available here ([dat:0530]). Current standing: this page carries the body's 20,009 with the recount provenance; the discrepancies stand unresolved, and Jerad's resolution belongs on his people page.

## See also

- [[wiki/mind/synthesis/single-channel]] — the architecture this metric is the measured leg of
- [[wiki/mind/profile/deviance-mapping]] — the audit whose best claim this is (and which miscast it as a skill)
- [[wiki/mind/synthesis/provision-grammar]] — the money channel concentrates exactly like the message channel
- [[wiki/mind/synthesis/spatial-behavior]] — the spatial record converges on the same shape
- [[wiki/mind/synthesis/severance-language-atlas]] — parallel per-handle corpus measurement (503 handles)
- [[wiki/mind/synthesis/message-circadian-latency]] — the temporal counterpart to this volume metric
- [[wiki/self/message-corpus-coverage-map]] — the inventory of which corpus this is and what its holes allow
- [[wiki/mind/concepts/explicit-verbal-commitment]] — the same vulnerability in two registers
- [[wiki/people/annie-ulmer]] — the primary node by every cut
- [[wiki/people/suzanne-frank]] — the second node by person

## References

- raw/self/message-csv/MASTER_MESSAGES_DB_DUMP.csv — ⚠ Source reference unresolved — original target no longer exists in current corpus.
- raw/self/message-csv/annie_all_time_logs.csv — ⚠ Source reference unresolved — original target no longer exists in current corpus.
- raw/self/message-csv/imessage_3307038747_both_all_now.csv — ⚠ Source reference unresolved — original target no longer exists in current corpus.
- raw/self/dox-md/THE_DAN_FRANK_BOOTLOADER.md — ⚠ Source reference unresolved — original target no longer exists in current corpus.
- corpus/messages.csv (held authoritative export, 192,140 rows)

### Limits of record

All figures on this page are iMessage-corpus figures. They measure archived text contact, not the life: cohabitation windows (Sep–Dec 2024: 3,613 Annie / 0 Dan — a cohabitation artefact, not missing data), voice calls, in-person time, and the 2021–22 export void all sit outside the metric. The 0.9556 is a property of the held export, replicated; the 0.9601 is a property of an unheld export, converged. Neither is a property of Dan independent of the archive.

### Open questions

- **No two-sided figure.** Outbound attribution is unrecoverable in the held corpus; the symmetric-architecture question is open until a richer export exists.
- **No comparison population.** "Extreme" is asserted against income-distribution intuition, not against other heavy text users.
- **Handles, not people.** Annie holds at least two handles plus an email; a person-level coefficient would be *higher* than any figure on this page. That collapse has not been done.
- **Post-June-2026 topology.** The primary node closed 1 June 2026; no updated coefficient has been computed against post-closure data (Twitter activity, work channels, current logs). The August 2026 Ally burst — more messages to Ally than to Annie across Aug 18–19, by a three-figure margin — is the shape a post-closure recomputation would have to absorb.
- **Handle-definition gap with the severance atlas.** The severance-language atlas counts declaration language across 503 handles on the same held corpus; this page measures 498 inbound counterparty handles. The five-handle difference is a handle-definition difference between the two per-handle measurements, not an archive disagreement — but the reconciliation (which five handles the atlas counts that the Gini does not) is not established on the record.
