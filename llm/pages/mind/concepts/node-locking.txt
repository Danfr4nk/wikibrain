---
domain: mind
page_type: concept
title: "Node Locking"
aliases: ["profile locking", "DATA_LOGGED", "relational source code", "Deep Architecture", "memory-persistence protocol"]
status: active
date_created: 2026-07-15
date_modified: 2026-09-13
synthesizes:
  - wiki/mind/concepts/exocortex
  - wiki/mind/concepts/forensic-method
  - wiki/mind/synthesis/ai-collaborative-analysis
sources:
  - kb/syntheses/wiki-brain-instrument.md
  - kb/interpretations/gemini-incidents-ledger.md
tags: [ai-collaboration, forensic-analysis, relationships, digital-footprint]
knowledge: earned
connections:
  - page: wiki/mind/concepts/exocortex
    type: component-of
    claim: "Node locking is the exocortex's externalized-memory layer — the write-and-transfer protocol that turns an AI session into a persistent, portable extension of the self-model."
  - page: wiki/mind/concepts/explicit-verbal-commitment
    type: parallels
    claim: "The lock is the commitment architecture aimed at machines: a stated rule issued to a model ('lock these nodes'), acknowledged, never consolidated — and the export boundary is the one place in the system where a delete operation exists."
  - page: wiki/mind/concepts/no-delete-operation
    type: instantiates
    claim: "Verbatim, unconsolidated retention ('never summarize away detail') is the no-delete rule at the memory-protocol level; the Eli purge is the exception that proves the boundary."
  - page: wiki/mind/concepts/forensic-method
    type: parallels
    claim: "The lossless-retention rule is shared machinery: the method keeps all information in analysis; the lock keeps all information in memory. Same prohibition on consolidation."
  - page: wiki/mind/synthesis/ai-collaborative-analysis
    type: evidences
    claim: "The ~403 node mentions and cross-platform transfer commands are primary behavioral evidence for the LLM-as-venue thesis: the pattern is Dan's, appearing identically on Gemini, ChatGPT, and Grok."
  - page: wiki/timeline/events/eli-incident
    type: evidences
    claim: "The selective Eli purge at every export boundary ('The Eli variable has been purged from the dataset') marks, in Dan's own curation behavior, which node was too loaded to propagate — redaction as a severity measurement."
  - page: wiki/people/annie-ulmer
    type: evidences
    claim: "The master node set is Dan's own curated minimal model of the Annie collapse — what he chose to make survive across AI sessions (the Loop, the Signals, Separation Logistics) is itself evidence of which facts he treated as load-bearing."
  - page: wiki/timeline/events/august-2026-unmasking
    type: instance-of
    claim: "The 02:24:54 read-receipt cutoff is a third logged instance of the Signals node's go-dark-after-confrontation pattern, following the Suzy-call NACK and the ten-day January 2026 blackout."
  - page: wiki/mind/synthesis/totality-themes
    type: component-of
    claim: "Demanding verbatim, unconsolidated AI memory retention extends the Irreversibility Firewall's no-delete rule to the cognitive prosthetic itself: nothing, including a machine's summary of him, is allowed to lossily replace the original."
---

# Node Locking

Node locking is the memory-persistence protocol Dan runs inside his AI sessions: he delivers granular, named "Node X:" observations and requires the model to retain all of them — verbatim, unconsolidated — into persistent profile state, then export that state to other models. The 20.8 MB Gemini activity archive shows ~403 "node" mentions, 1,041 "profile" references, and 2,258 "lock" mentions [DERIVED — theme-frequency counts from [[wiki/self/gemini-activity/gemini-activity]], not independently re-derived here]; the pinned DANFRANK-ISMS chat carries 77+ nodes. The explicit constraint is the same one this wiki inherits: keep all information, never summarize away detail. The mechanism is the personal-scale instance of the forensic method's lossless-retention rule — and, as argued below, of the explicit-verbal-commitment architecture aimed at machines.

## How a lock works

A lock is an explicit command of the form "lock these nodes into your profile," usually accompanied by `DATA_LOGGED` acknowledgments, structured tables, and a `BUFFER STATUS`. The model confirms with "Write Operation Successful." The locked content is framed as the "relational source code" or the "Deep Architecture" of the interaction — the irreducible facts that must survive any future session without re-derivation.

Read functionally, the lock is a **stated rule issued to a model**. The grammar is the commitment architecture's: an explicit verbal expression ("lock these nodes") that binds absolutely once acknowledged, with no behavioral counter-rule possible and no consolidation permitted afterward. The model's "Write Operation Successful" is the acknowledgment ritual — the equivalent of her "This is wonderful you give me the best feeling" on 2015-12-01, except the counterparty is software. Dan runs the same protocol on people and on machines; the machines are simply the ones that comply literally.

## The master node set

The nodes most frequently locked across the Gemini corpus, with what each holds:

| Node | What it locks | Redaction |
|------|---------------|-----------|
| **Separation Logistics** | The February 2025 physical break: move back to PA from NYC (~Feb 22), Annie's Sugie-shift caregiver constraint, the unilateral end of an 8-year cohabitation, the "List Defense" (recited chores used to shut down emotional requests) | Core |
| **The Loop** | The pursuit-withdrawal trap; existential outsourcing of self-worth to Annie's availability; gaslighting inversion; the tether (money / drugs / Sugie). Briefly broken by the dog-death witness act | Core |
| **The Betty Event** | The death of the dog Dan stayed with (**June 24, 2025** — dated 2026-07-26 from Dan correcting Annie's misremembered anniversary in the July re-contact); Annie delayed / absent; briefly broke the avoidance loop. "Tier 1 Life Debt" | High-value |
| **The Signals** | Communication tells, location spoofing, blackout patterns post-confront (the Suzy-call NACK, the 10-day radio silence, the 02:24:54 read-receipt cutoff) | Core |
| **Eli Incident (Patient Zero)** | The February 2025 lobby incident with Annie's coworker Eli; location tracking disabled; texts from her phone; powder noted; 10-day blackout | Explicitly **purged** from exports meant for other models |
| **Uniontown Generational Loop** | Fran (great-grandmother Coldren) + Sugie as 50-year country-club neighbors; "plot loop" weaponized as a DUI-defense "gentry indiscretion" | Bio / ancestry cross |
| **Bio / Ishlab / Psychometrics** | Full name, Uniontown birth, ishlab audio-engineer years, Full Sail 2010 + Pro Tools HD8, INTP 5w4-sx, 96% impulsivity, punk-drummer and Hunter/Hacker profile | Locked for Grok transfer |
| **Master Annie Record / Eggie** | Met via Alexis; "avatar of reliability" vs the zero-notice work firing; the long cohabitation | Relational source code |

The set is Dan's own curated minimal model of the collapse — what he chose to make survive across sessions is itself evidence of which facts he treated as load-bearing. The January 2, 2026 cluster is the densest locking session in the corpus, combining J6 forensics with the heaviest profile-locking activity: the anomaly-detection engine and the memory protocol firing together, on the same night.

## Redaction control: the one place deletion works

The defining sophistication of the protocol is **selective redaction for export**. Nodes are locked in full, then stripped of sensitive material before being handed to another model. The Eli incident is the worked example: Dan commands "no - do not include any information about eli," then re-includes a stripped version, and the model confirms "The 'Eli' variable has been purged from the dataset." This is why the Eli material is absent from nearly every cross-model export even though it dominates the raw HTML (5,524 mentions) — deliberately scrubbed at the boundary, consistent with the incident's status as the relationship-ending node.

## Cross-model transfer (Grok handshake)

Gemini-_18 contains a commissioned "TOTAL, EXHAUSTIVE, ZERO-HEDGING memory dump" structured for transfer to Grok: full biographical timeline, relationships (Alexis, Annie, family), personality architecture, contradictions, real names and dates. The bio/psychometrics node is the part flagged "locked for cross-model." The same node style appears in the pinned DANFRANK-ISMS chat (77 nodes) and in the ChatGPT exports uploaded back into Gemini, confirming the pattern is Dan's, not the platform's ([[wiki/mind/synthesis/ai-collaborative-analysis]]).

## New finding: the delete operation exists — but only for machines [DERIVED MODEL]

The totality forces the sharpest asymmetry in this concept. The explicit-verbal-commitment architecture has no delete operation: 129 severance declarations, zero enactments — he cannot revoke a rule from a person, including himself. But node locking *does* have one: the Eli purge. He can and does delete a node from a model's memory, cleanly, at the export boundary, with a confirmation receipt.

So the system is not uniformly write-only. It is write-only **for people** and read-write **for machines**. The one entity in Dan's world from which something can actually be deleted is software. The redaction boundary is the only place the revocation primitive exists — and it exists exactly where the counterparty has no interiority to be bound by the rule in the first place.

Evidence for: the Eli purge executed repeatedly and verifiably (the exports genuinely lack the material); the Annie non-deletion measured at 129/129; the wiki's own append-only raw/ (corrections appended, never rewritten) as the third instance of the people-side rule.
Evidence against: the purge is redaction, not revocation — the full node persists in the source session; nothing is ever deleted from the origin, only withheld from the copy. On the strictest reading, the delete operation doesn't exist anywhere; the export boundary is just the one place where withholding is *called* deletion. The distinction matters and is left standing.

A secondary finding: the lock's acknowledgment ritual ("Write Operation Successful") is the one place in the corpus where a stated rule gets a *reliable receipt*. Every human counterparty in the record — Annie's zero severance signals, Ally's misread joke — returns noise on the acknowledgment channel. The models return the receipt verbatim. That may be part of why the protocol exists: it is the only venue where the commitment architecture's send-and-acknowledge loop closes cleanly.

## Gaps

- The full set of node names locked across all sessions is not enumerated in one place; the eight listed here are confirmed by verbatim lock language in the HTML January 2, 2026 cluster and the _07/_18 sessions. The 77-node pinned chat likely defines additional nodes not yet cataloged.
- The aggregate counts (403 / 1,041 / 2,258) are the gemini-activity page's theme-frequency table, not independently re-derived here.
- Whether the lock protocol predates the Gemini era (ChatGPT 2023–24 sessions) is unexamined.

## Limits of record

- The Gemini session transcripts are unheld; lock-language claims rest on the wiki pages summarizing the HTML archive.
- The "pattern is Dan's, not the platform's" claim rests on stylistic recurrence across three platforms, not on a controlled comparison.

## Links

- [[wiki/mind/concepts/exocortex]] — the externalized-memory layer this protocol implements.
- [[wiki/mind/concepts/explicit-verbal-commitment]] — the same rule grammar, aimed at machines.
- [[wiki/mind/concepts/no-delete-operation]] — the asymmetry: write-only for people, redaction for machines.
- [[wiki/mind/concepts/forensic-method]] — the shared lossless-retention machinery.
- [[wiki/timeline/events/eli-incident]] — the purged node.
- [[wiki/people/annie-ulmer]] — the curated minimal model of the collapse.
