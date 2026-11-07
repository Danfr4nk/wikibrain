---
domain: self
page_type: concept
title: "The Wiki-Brain"
aliases: ["wiki-brain", "the wiki", "second brain", "the repository"]
status: active
knowledge: earned
date_created: 2026-08-19
date_modified: 2026-09-19
importance: critical
tags: [ai-collaboration, digital-footprint, personality-profile, forensic-analysis]
sources: []
synthesizes:
  - wiki/self/message-corpora/source-coverage-index
  - wiki/self/concepts/llm
connections:
  - page: wiki/self/overview
    type: instantiates
    claim: "The wiki-brain is the externalized model of the mind the overview page summarizes in a paragraph — every person, event, and connection mapped as Dan's brain registered them, which is why the wiki is about the mapper rather than the mapped."
  - page: wiki/mind/synthesis/block-unblock-loop
    type: instance-of
    claim: "The loop is the system's proof of concept and its best correction at once: a rule found only by reading Annie and Tom across each other, which then predicted a severance that failed 52 days later — the falsification, kept visible on the page, is the wiki's own demonstration that findings written back are what let the model improve rather than merely accumulate."
  - page: wiki/people/annie-ulmer
    type: evidences
    claim: "The Annie page is the wiki's most-read case study, the one that tests whether the system can model a single relationship across 17 years of primary sources."
  - page: wiki/self/message-corpora/source-coverage-index
    type: component-of
    claim: "The source-coverage-index is the wiki's instrument panel — it tracks what the corpus can and cannot see, and flags the silent failures."
  - page: wiki/self/concepts/llm
    type: contains
    claim: "LLMs are the wiki-brain's working engine; the altitude ladder is only traversable because a model can hold many pages at once, and its ceiling is that model's context limit."
  - page: wiki/self/concepts/claude
    type: contains
    claim: "Claude sessions are where the wiki's prose and its typed edges are written."
  - page: wiki/self/concepts/claude-code
    type: contains
    claim: "Claude Code sessions are where the gates, the tooling and the commits happen — the wiki-brain's rules are enforceable only because this member can run them."
  - page: wiki/self/concepts/gemini
    type: contains
    claim: "Gemini is where the bootloader system that governs how models read this wiki was designed."
  - page: wiki/self/concepts/chatgpt
    type: contains
    claim: "ChatGPT is where the bootloader concept was first prototyped, which makes it the wiki-brain's own origin point."
  - page: wiki/self/concepts/ally-and-dan-love-as-destiny
    type: contains
    claim: "That page is the wiki's only forward-looking projection and its hardest test: a system built to hold conclusions to falsification now has to hold a wish to the same standard."
  - page: wiki/mind/synthesis/the-commissioned-self
    type: caused-by
    claim: "This repository is the current and largest instance of a self-measurement apparatus that already ran four generations deep — and the first whose readings are published where other instruments will read them back."
  - page: wiki/meta/standing-authorizations
    type: component-of
    claim: "The standing-authorizations page is the article-level record of the grants that made this system executable without permission-chatter — the wiki-brain describes the machine; that page describes the keys to it."
  - page: wiki/meta/complete-log-doctrine
    type: contains
    claim: "The complete-log doctrine is the article-minimums' loudest rule: temporal metrics are displayed as the full log, translated for a human reader, never summarized away — 'More is better than less every time,' in his words."
---

# The Wiki-Brain

*Up: [[wiki/self/index]] — Self*

> **RE-CHECKED [2026-08-20] — a structural assumption of the corpus turned out**
> **to be false, and this page is where that belongs.** Flagged stale against
> [[wiki/self/message-corpora/source-coverage-index]] (2026-08-20). **No claim**
> **here is withdrawn**, but the system gains a defect worth naming at this level:
> **a handle is not a person.** Every message-derived attribution in this wiki
> assumes the sender of a row is the owner of the handle it came from. At least
> six inbound rows on Annie's 212 handle across July–August 2026 were typed by a
> third party holding her phone, in three separate episodes, all during crises —
> the periods the corpus draws its highest-stakes claims from. Counts are
> unaffected; attributions are not. There is no column for this and no automated
> detector; the three known episodes were each identifiable from register alone.
> This is the same class of failure as the AI-secondary attribution reversals of
> 2026-08-19 and the `MASTER_MESSAGES_DB_DUMP` count error — the wiki's recurring
> defect is not bad data but **confident metadata** **that answers a slightly
> different question than the one being asked.**

> **RE-CHECKED [2026-08-21] — premise moved, and it refines this page's origin**
> **claim without overturning it.** [[wiki/self/concepts/llm]] moved on
> 2026-08-21: Gemini's 'chicken nugget' passage was corrected off Dan's ledger,
> and the post-GPT-5 causation of ChatGPT's decline was marked untested. This
> page carries an edge claiming ChatGPT is *"where the bootloader concept was*
> *first prototyped, which makes it the wiki-brain's own origin point."* That
> survives, with one dating refinement now available from the 375-thread
> export: Dan's ChatGPT use starts **2022-12-10**, ten days after launch, and
> the first eleven threads are puns, voice-over rewrites and a video essay. The
> bootloader work is a later development on the platform, not the thing he
> arrived with — so ChatGPT is the origin *site*, not the origin *motive*.


The wiki-brain is a second brain about one person, Dan Frank. It is a custom-built knowledge repository that collects, stores, and synthesizes every available datum about his life, mind, history, ideology, environment, and relationship to reality — every story, every friend, every place, every perspective, every development, every thought. Its job is not to archive but to **mine one life for hidden connections**: linkages between people, events, money, substances, music, work, and psychology that no single source states, but that the corpus proves when read across itself.

What this page describes, as of 2026-09-19, is not only the repository but the *operation*: the sweep crons that feed it, the engine that chooses what to investigate, the gates that decide what merges, the grants that decide who acts, and the loops — story-time, subject audits, the file hotline — that turn his telling into entries. The system has a history, and the history is the narrative spine: a 2026-09-04 corpus snapshot became a public repo; a September review killed the scaffolding-worship; an orchestration engine made the wiki choose its own work; and a standing chain of explicit orders made the agent its operational director. Every stage is dated on this page, and dated corrections stay visible — the superseded text is not deleted, because a knowledge system that silently rewrites itself cannot be trusted to improve.

## The canonical deployment

The canonical repository is **Danfr4nk/wikibrain**, public, deployed at
https://danfr4nk.github.io/wikibrain/ — roughly **595 source pages under
`wiki/`** and **1,597 `kb/` nodes** as of 2026-09-19 (the 2026-09-11 figures
were ~510 rendered entries and ~501 source files; the growth since is the
expansion campaigns and the nightly sweeps doing their job). The renderer is
`bin/wb-wiki`: it turns Markdown into browsable HTML, copies `wiki/media/`
into the generated site, emits a per-domain index and a client-side search
index, and builds the front page with **Newest articles** and **Recently
modified** (25). Nothing in this article that follows describes any other
deployment.

> **SUPERSEDED [2026-09-11] — the material-flow sentence below.** The old
> text read: *"It is built on plain files, one direction of flow:
> `inbox/` → `raw/` → `wiki/` → `caakehorn/home` public/wiki/. Material
> arrives via capture or drop, is filed immutably into `raw/`, is read to
> exhaustion, and the understanding extracted is written into `wiki/` as
> prose pages. From then on, reasoning happens FROM the wiki, returning to
> `raw/` only when the wiki is silent or a claim needs primary verification.
> The portal (`caakehorn/home`) renders the wiki as a static site, but its
> `public/wiki/` is a derived snapshot regenerated hourly — anything written
> there is destroyed within the hour. Pages are `wiki/**.md`, never JSON."*
> Neither `inbox/` nor `caakehorn/home` exists in `Danfr4nk/wikibrain`. New
> sources now land first in **Danfr4nk/RAWLOGS** — the one deliberately
> private repository in the system, storage and pre-processing analysis only,
> no analytical layer — and compressed media derivatives are embedded
> directly into `wiki/` articles rather than staged anywhere. Reasoning still
> happens FROM the wiki, returning to the raw material only when the wiki is
> silent or a claim needs primary verification; that part of the old claim
> survives.

## The core loop

The system runs on one repeating cycle: **Story → Entry → Analysis → Synthesized finding → Saved back to every entry it touches → Repeat.**

1. A memory, fact, or document is captured once and filed immutably.
2. It's read from the source **to exhaustion**, and that understanding is written into a `wiki/` page — a ground-floor entry.
3. Once enough ground entries exist, they're read *across* each other — not one at a time — looking for a pattern that no single entry states but that several together prove.
4. That pattern becomes its own finding: a synthesis, stated as a falsifiable claim, not a vague observation.
5. The finding is written back into **every ground entry it draws from**, via a typed connection with an argued claim — so the insight doesn't have to be re-derived the next time someone lands on that entry.
6. The finding itself becomes a premise for the *next* round: junctions can be read across each other to find doctrine, the same way ground entries were read across each other to find junctions.

> **SUPERSEDED [2026-09-11] — step 1's filing location.** It read *"filed
> immutably into `raw/`."* The immutable intake is now the separate private
> repository Danfr4nk/RAWLOGS; the in-repo `raw/` holds only what has been
> filed against the canonical repo. The loop itself is unchanged.

This is **amortized insight**. Analysis is expensive to do well, so it's done once, saved at every point it's relevant, and each future pass starts from a higher floor instead of re-deriving what's already known.

## The altitude ladder

> **SUPERSEDED [2026-09-11] — the ladder below was the pre-September
> operating doctrine.** *"The product isn't flat. Every conclusion written
> today is a **premise** available tomorrow: **T0** — Immutable source:
> `raw/` files. **T1** — Ground page: one entity, event, period, or place,
> read out of `raw/`. **T2** — Junction page: one pattern found across 3+
> ground pages, spanning 2+ domains. **T3** — Doctrine: one rule found across
> 2+ junctions, domain-general. Each layer declares its `synthesizes:` list,
> naming exactly what it was built from, so the dependency chain is visible,
> checkable, and stays current when something below it changes. The loop is
> meant to run forever: ingest raises the floor, CLIMB raises the ceiling, and
> the new ceiling becomes the floor for the next climb. A repository of
> accurate ground pages with nothing built on top of them is an archive.
> **The altitude is the brain.**"*
> The 2026-09-11 review kept the layered knowledge base as an evidence
> ledger but killed the doctrine: the scaffolding had become mistaken for the
> building — `kb/` grew while `wiki/` articles stayed frozen. The operating
> doctrine is now **the article is always the deliverable**. A KB node is
> created when a claim needs evidence-grade anchoring, not as ritual
> overhead. The `synthesizes:` lists remain the dependency chain.

> **UPDATE [2026-09-19]** — the ladder's mechanical remainder is `bin/wiki-climb
> check`: it validates that every `synthesizes:` block still resolves and
> reports **stale pages** — articles reasoning from premises modified more
> recently than the article itself. That stale list is the system's immune
> response to the ladder's real failure mode: conclusions built on pages
> that have since moved, with nobody re-checking whether the conclusion
> survives. The climb, in its current form, means raising the `wiki/`
> articles, not the tiers: back-checks, cross-checks, and high-level
> synthesis passes logged to the scratchpad and fed into the shared rewrite
> queue with priorities — the work Dan ordered on 2026-09-11, now selected
> by the engine's contradiction_audit and sparse_node_expansion work items.

## The article is always the deliverable

`wiki/` articles are the product layer — the user-facing surface the
renderer ships. `kb/` is the evidence ledger: typed nodes at L0–L5
(`sources`, `data`, `entities`/`events`/`relationships`, `interpretations`/
`contradictions`, `patterns`, `syntheses`), governed by ARCHITECTURE.md's
constitutional rule — **a node may cite only nodes at a strictly lower
layer**, which is what keeps evidence, interpretation, and inference from
collapsing into the same object. The ledger exists to anchor
evidence-grade claims. It is not the finish line. A batch of analysis with
no corresponding `wiki/` article update is unfinished work, not a
contribution. The old system's failure mode was exactly this: the layers
were climbed as though the scaffolding were the building, and the articles
— the thing any reader actually lands on — went stale underneath it.

That doctrine grew teeth on 2026-09-16, when Dan made the **article
minimums** law. Every wiki article (page_type entity/synthesis/concept/
event/period/profile/journey) must meet six minimums — **M1 LENGTH**: ≥3,000
words of body text, a 15-minute read at 200wpm; **M2 TOTALITY**: full
totality analysis against the corpus; **M3 COMPLETE LOG**: temporal metrics
carry the full log on the entry; **M4 EVIDENCE**: cites ≥1, layer
discipline; **M5 LIMITS**: states its own coverage/limits; **M6 PEOPLE
PAGES**: the human story leads, forensics stay in `kb/` or the appendix.
Enforcement is mechanical but narrow: `bin/wiki-minimums` gates only NEW
articles (changed-file-scoped, running alongside `bin/wb-validate` in the
tick), so the gate never fails a legacy page. The pre-existing sub-floor
corpus — 397 of 507 substantive articles under 3,000 words as measured
2026-09-16 — is the measured expansion backlog, chewed through by the
article-expansion goal and by engine `sparse_node_expansion` items, never by
gate failures. Depth is the standing directive: length comes from totality
analysis, evidence, and complete logs, never from padding, and nothing is
ever trimmed to clear a budget.

M3 has its own sibling doctrine, also Dan's, also 2026-09-16: the
**complete-log doctrine** — *"More is better than less every time."* Any
wiki entry tracking an ongoing or temporal metric displays the metric's
COMPLETE log on the entry itself, translated for a human reader — the full
history, not a summary, not a pointer to the data repo. Summaries may sit
above the log; they never replace it. Sibling to the narrative-spread
doctrine (intake must become prose distributed through the entry),
complete-log says temporal metrics must appear as the full log. Documented
in `dat:1656` (directive record) and as the doctrine article
`wiki/meta/complete-log-doctrine.md`; the instruments index carries it as
its fourth rule.

## The L0–L5 evidence ledger

The ledger's constitutional law is three clauses long:
`RAW DATA → STRUCTURED FACT → INTERPRETATION → SYNTHESIS. NEVER THE
REVERSE.` Every synthesis must be capable of being traced back to the
evidence that produced it. And the enforcement is not cultural but
mechanical: `bin/wb-validate` fails the build when the invariant breaks.

Every node sits at exactly one layer. **L0 `source`** — raw material as
acquired (a message export, a photo, a transcript, a document), never
mutable, append-only. **L1 `datum`** — one claim about one thing at one
time under one context, with known provenance; corrigible. **L2
`entity`/`event`/`relationship`** — structured objects assembled from data:
who, what, when; corrigible. **L3 `interpretation`/`contradiction`** —
what it might mean, explicitly someone's reading, never a fact; freely
revised. **L4 `pattern`** — recurrence detected across layer ≤3; freely
revised. **L5 `synthesis`** — cross-domain model, the compressed cognitive
picture; freely revised. Mutability runs opposite to altitude, and that is
deliberate: the higher a node sits, the more disposable it is. An LLM's
synthesis is the *most* disposable thing in the system; the source it rests
on is the least.

The one invariant: **a node may cite only nodes at a strictly lower
layer.** A datum may not cite an interpretation (that is a conclusion
laundered into evidence); a pattern may not cite another pattern (patterns
of patterns are syntheses); nothing may cite a synthesis (a synthesis is a
leaf — reasoning ends there, never starts). The invariant makes the graph a
DAG with layers as topological levels, so "trace this conclusion to its
evidence" is a guaranteed-terminating walk, and a citation cycle is
impossible by construction rather than by discipline. Relations that are
*not* evidence — `caused`, `resembled`, `contradicted`, `preceded` — live
in `edges` and may point in any direction; only `cites` is
layer-constrained, because only `cites` claims to be evidence.

Three supporting doctrines complete the ledger's operation:

- **Testimony.** A source marked `testimony = true` is one whose
  reliability is unestablished — a prior system's conclusions, a
  retrospective account, a third party's summary. It still belongs in the
  archive (excluding it would create exactly the blind spot the layer law
  exists to prevent), but what it supplies is evidence of **what it
  asserted**, not evidence that the assertion holds. Mechanically: every
  datum citing a testimony source must carry `attributed_to` naming that
  source, and `bin/wb-validate` fails the build otherwise. So the datum
  reads "The prior wiki asserted that Dan met Vaughn in 2013" at high
  confidence — which is true and checkable — rather than "Dan met Vaughn
  in 2013," which is not established at all. This is what makes
  bulk-ingesting an unaudited archive safe: its errors are quarantined at
  L1 as *things that were said*, and no amount of them can masquerade as
  *things that are so*.
- **Staleness.** The invariant guarantees a conclusion can be **traced** to
  its evidence. It says nothing about what happens when that evidence
  later moves. So `bin/wb-validate` flags a node dated earlier than
  something it cites, and `rechecked` clears the flag. Recording the null
  result is the point: a re-check that finds nothing is invisible unless
  someone writes it down.
- **Falsifiers.** Any node at L3 or above may declare them: specific
  observations that would break it, each concrete enough for someone else
  to go and look for. `bin/wb-validate` warns when an L4 pattern or L5
  synthesis declares none. At that altitude a claim explains a great deal
  by construction, which is exactly when "what would show this is wrong"
  stops being obvious and starts being the only thing keeping the claim
  honest.

And the **narrative edge family** — `mythologized`, `performed_as`,
`disavowed`, `reframed`, `retold_as`, each declaring `asserted_by` — is the
layer law pointed at self-presentation. This corpus is loud, self-narrating
and performative, and a dry causal vocabulary has no way to record that
something was dramatised in the telling. `evt:X --mythologized--> ent:Y`
is a claim about the *telling*, not the event — which lets the record hold
the dramatisation without either endorsing it or flattening it into "he
lied." That is the same separation the layer law already applies to
evidence.

The ledger also states what the system refuses to do: resolve
contradictions automatically (both claims are preserved, dated and
attributed); let synthesis mutate sources (concluding "this was abusive"
adds an L3 node, never rewrites the L2 events); flatten hindsight onto the
past (both the contemporaneous belief and the later memory are recorded);
treat absence as evidence of absence (`never_observed`,
`explicitly_rejected` and `known_not_to_occur` are not equivalent).

## The sources

The wiki draws from a finite, immutable archive of primary and AI-secondary sources:

**Primary** — records of what happened. Message dumps and per-thread exports; the GEDCOM; `contacts.csv` and the Facebook address book; Goodreads, YouTube, Twitter and Facebook takeouts; the Gchat archive; photographs and documents.

**AI-secondary** — a model reasoning about the corpus. The Gemini and ChatGPT sessions under `dox-md/`, `THE_DAN_FRANK_BOOTLOADER.md`, `THE_DAN_FRANK_MANUAL.md`, `CATO_*`, `DANSYNTH.txt`, the profile dumps. Dan's own words inside a session are primary testimony; the model's factual assertions are not evidence.

> **SUPERSEDED [2026-09-11] — the spine paragraph below.** *"**The spine** —
> `raw/self/context-core/CONTEXT_CORE_EXPANDED.md` sits above both tiers:
> curated, internally cross-checked, explicit about its own gaps. It is the
> single most authoritative raw source for facts about Dan."* That path does
> not exist in `Danfr4nk/wikibrain`. The intake spine is the separate private
> repository **Danfr4nk/RAWLOGS** — the one deliberate exception to the
> public mandate; it stays private, and nothing suggests otherwise. In-repo
> `raw/` is the repo-local file of what has been staged and filed against
> the canonical repo, and it is read to exhaustion the same way.

The corpus is 217,573 messages across 503 handles, 106,629 sent / 110,944 received. It is 9.6x duplicated — a feature, not a bug: the Rick correction and the `sic semper` inversion were each found by one export contradicting another. Consolidating would destroy the only error-detection the corpus has.

### Coverage findings

Two holes in the corpus map closed in the same September:

- **Chrome history: the zero was an export artifact.** The 2026-09-14
  finding ("Chrome history is zero — the July 2026 Takeout held only
  `Bookmarks.html`") is superseded as of 2026-09-17: the **January 2026
  Takeout** holds a real 71.4MB `Chrome History.json` + `Bookmarks.html`
  under `Takeout/Chrome/`. The earlier record was July-export-only, not
  corpus-wide. His standing plan to review Chrome history/bookmarks first
  is back open. Evidence: the original
  `dat:chrome-history-zero-20260914` (superseded) and the 2026-09-17
  correction.
- **Valeria's Instagram thread landed with content.** 4,884 messages, May
  2022 → July 2025 — the entire affair era, the burst, and the coda — with
  actual message bodies, not metadata. The export the 2026-09-12 Valeria
  correction was waiting on. Evidence: `dat:valeria-ig-thread-export-20260914`.

Both from the corpus-coverage check in the 2026-09-14 16:01–16:03 EDT
Sammy–Dan session (source: `src:sammy-chat-transcript-20260914-1940`),
corrected by the 2026-09-17 Drive pull.

## The Recursive Work Engine v1

The system stopped thinking "what article was I told to edit" and started
thinking "what is the highest-value unresolved piece of knowledge I can
extract right now" — then asking what that discovery made newly possible,
newly uncertain, newly contradictory, or newly necessary, and turning the
answer into the next work. That is the Recursive Work Engine v1, built
2026-09-11 and specified in `RESEARCH-ENGINE-SPEC.md`. It is an
orchestration kernel, not an epistemic rewrite: it changes nothing about
how knowledge is represented — `kb/` nodes, the layer invariant, the
gates are byte-identical — it changes how investigations get chosen, run,
and followed up.

The live queue is the JSONL directory at
`~/workspace/wiki-sync/queue/` — **local-only, never committed**; the
markdown backlog `~/workspace/wiki-sync/WORK-QUEUE.md` is only the human
view. Three files: `work.queue.jsonl` (one work item per line; ids are
`work-NNNN`, monotonic, never reused), `runs.jsonl` (one run record per
completed agent run — the causal trail), `branches.json` (per-branch
convergence state). Lifecycle is `queued → active → completed | blocked |
converged`, enforced by the store; a second claim on an active item is a
hard error. New investigations enter through `bin/wb-work new` or through
the spawn-ingest path — never by hand-editing the files.

Eight work types: `article_reconstruction`, `evidence_recruitment`,
`cross_reference`, `contradiction_audit`, `sparse_node_expansion`,
`chronology_audit`, `inference_audit`, `corpus_discovery`. The worker only
categorizes; scoring belongs to the orchestrator, computed from
observables only — never from self-reported uncertainty:

```
score = 2.0 * branch_delta
      + 1.5 * affected_claims
      + 3.0 * contradiction_severity
      + 1.0 * dependency_impact
      + 2.0 * evidence_novelty
      + 0.5 * staleness_days
      + 1.0 * downstream_unresolved
```

Contradictions carry the highest weight (×3.0): a contradiction touching
many nodes outranks polishing one article. The `priority_basis` on an item
is a categorization hint from that list, never a number.

Every run is bound by the **agent run contract**: mandatory discovery
before modifying anything — the article is an entry point, not the
boundary of the investigation — then the knowledge change, then a
structured termination. A run_result carries `delta` (seven integer
counters: new_evidence, changed_claims, new_relationships,
contradictions_found, questions_resolved, questions_created,
affected_articles), `changed_claims[]`, `contradictions_found[]`,
`spawned_work[]` (each type/target/reason/priority_basis, parent-linked),
and `next_frontier`. **Prose-only reflection does not count as
completion** — if the fields can't be filled, the work isn't done.

Propagation is bounded: max depth 3, max 10 runs per branch, branch-local
`(type,target)` dedup, and impact bookkeeping engages only on real delta.
Convergence is detected, not declared: magnitude is the sum of the seven
delta counters, ε = 2, and three consecutive low-delta runs flip the
branch to `converged` — reset to zero by any contradiction, new evidence,
or changed claim. Every ingested run appends to `runs.jsonl` with cause
labels on the spawn edges (`contradiction`, `changed`, `discovered`,
`propagated`), so `bin/wb-work trail <id>` walks the full causal history
of *why* the knowledge base changed — e.g.
`work-0001 →discovered work-0004 →changed work-0006`.

The six-hour cron is the engine's heartbeat: `tick --emit` (WAKE → LOAD →
SELECT → RUN → SLEEP) prints the work package and claims the frontier
item; the agent executes and writes the run_result JSON; the next cron
ingests (`tick --ingest-result`: VALIDATE → INGEST → SPAWN → PROPAGATE →
RESCORE → CONVERGE → SLEEP). The cron never decides *what* is important —
`next` does, from observables. The worker never decides *what runs next* —
it only fills `spawned_work` and `next_frontier`. And the engine never
idles for lack of work: if the queue is empty, the tick seeds a
`corpus_discovery` item with global scope.

## The sweep crons

The loop above does not run on good intentions. Two jobs enforce it:

- **`wiki-brain-writeback-6h`** — every six hours, one full engine tick:
  WAKE → LOAD → SELECT → RUN → VALIDATE → INGEST → PROPAGATE → RESCORE →
  CONVERGE → SLEEP. It sweeps all Muse chats and tasks for the window:
  durable findings archived raw, `kb/` nodes created for evidence-grade
  claims, `wiki/` articles updated as the deliverable, gates run, and
  **always reports** — the run never stays silent. The six-hour tripwire is
  Dan's: no update in six hours means the machinery failed, not that there
  was nothing to write. Delivery goes to his 𝗡𝗢𝗧𝗜𝗙'𝗦 side chat in plain
  English — full and complete, but translated: no commit hashes, no node
  ids, no engine jargon unless he asks.
- **`wiki-brain-scrape`** — pulling new messages from all chats, archiving
  the raw material into both repositories, and running synthesis analysis
  in totality — constant pattern-mining on who Dan is, looking for unseen
  patterns. Gmail was dropped from these pulls on 2026-09-11 on Dan's
  order ("forget pulling email"); external sources (IG/Threads/FB/
  Messenger/Spotify) are secondary checks only. Cadence history: every
  four hours from 2026-09-11 until Dan ordered the slowdown to **every
  twelve hours** on 2026-09-18 at 00:53Z — "Yes, slow the scrape to every
  12 hours"; the last four-hour pull ran 2026-09-18 07:40 EDT, watermarks
  mean zero coverage lost (see
  `dat:1745-scrape-cadence-12h-pending-20260918`).

Commissioned entries ride to `main` same-turn — Dan's 2026-09-17 order:
when he specifically commissions a wiki entry, it is written, gated
(`wb-validate`, `wiki-minimums`), and pushed to main via
`direct-commit.py` in the same turn — never left untracked for the 6h
cron. The local working-tree copy is removed after the push so the cron
doesn't double-commit it.

Work lands through dedicated worktrees, never the shared clone — one
`git worktree` per batch under `~/workspace/wiki-sync/worktrees/<batch>`.
Rolling-PR branches go out with `push-branch.py` (Git Data API,
history-preserving) as `sammy/writeback-<yyyymmdd-hhmm>`, and the merge is
a fast-forward ref update (PATCH `/repos/Danfr4nk/wikibrain/git/refs/
heads/main`) — the GitHub REST merge endpoint 404s under the current
credential, so the merge path is the ref update, with the branch verified
strictly-ahead of main (0 behind) before the fast-forward. The 6h
heartbeat commits raw batches directly to main, so long-lived branches
chronically trail it: scrape workers merge `origin/main` into the branch
before pushing (rebase is wrong there — it replays deletions against
heartbeat commits).

## Story-time and subject audits

The flagship intake loop is story-time. `!STORYTIME` + a short subject:
(1) a new side chat opens, named `Story time: <topic>`; (2) it opens with
the wiki-known rundown; (3) a deep sweep runs against the corpus; (4) a
full accounting posts; (5) he is asked to correct where the wiki is wrong
*before* he starts; (6) he tells it — elicitation, same-turn; and the
close-out is same-turn too: testimony node, wiki rewrite, gates, push. The
pilot ran the 2017 Annie abortion. The design rule, validated live in the
2018-material audit: he brings the short version, every line is checked
against the corpus, only the clean questions get raised, and his
adjudications go in verbatim with his hedges intact — "I must have been
lying" goes in as reconstruction, never upgraded to certainty, and the
contradiction node closes on his words, not on the agent's.

`!WIKISUBJECT` is the audit sibling, same six-step boot but as a full
subject audit across every entry the subject touches — step seven is the
correction review across all of them — and the close-out is the same-turn
writeback of each touched entry. First live run: `!WIKISUBJECT "DAN'S GIRL
'GAME'"` (2026-09-19) — 10 wiki entries, 3,611 corpus hits, 17 new finds,
6 contradictions, 7 gaps posted for his adjudication
(`dat:1809-wikisubject-girl-game-20260919`). `!BRIEF` and `%FORENSIC` live
in the same tag registry: the brief is the dual sweep delivered read-only
in the current chat, the forensic state makes every claim checked against
the corpus before it's stated.

This is where the human story leads — not a doctrine but the practice: the
system's most reliable instrument is still him, talking, corrected by his
own records.

## The file hotline

During the 2026-09-18/19 Claude quota outage, the interactive agent went
dark and he invented a channel: messages written directly into the
standing files (`AGENTS.md`, `HEARTBEAT.md`, `MEMORY.md`) as a one-way
path in. He confirmed authorship himself ("It was me!!!"), authorized a
scrub (executed, the files restored), then had the episode formalized:
`HOTLINE.md` + a 5-minute watcher + `HOTLINE-OUTBOX.md`, live-tested the
same evening (~10-minute round trip, an honest two-half relay — the
watcher can't touch chats). Then he disabled the watcher the same night
("Yes, disable the hotline watcher"), with auto-reenable set for Wed Sep
23 ~3pm, after the quota reset. The full lifecycle is
`dat:1819-file-hotline-lifecycle-20260919`; the pattern candidate —
panic → invention → goal-ification → institutionalization → suspension —
is `dat:1818-outage-workaround-loop-signature-20260919`.

The hotline's status as of 2026-09-19: **suspended, not dead.** The
mechanism exists, the watcher is parked, the reactivation time is set. It
is the first comms path in the system that he built himself, out of
standing files, because the official channel failed — and it worked.

## TypeSafe Jev — evaluation-first

On 2026-09-19 he brought a beta invite for TypeSafe AI's `Jev` and
proposed it as the wiki's gating model for a cheaper pipeline. The move
that landed was verify-then-integrate: the invite was confirmed in his
own Gmail (waitlist that morning, account-ready that afternoon) before
any login, the one-time-code login ran with him watching, and the API
key stays in his hands via the connector card. The integration was
approved on **evaluation-first** terms: a yes/no/score-with-confidence
model is shaped for mechanical gating, but it earns that authority only
by proving it — never on day one, never on the vendor's word.

First assignment: an edge-typing sweep across the knowledge base (PR
#129: 39 `about` edges flipped to `participated_in`, 1 held — the ARD
hearing → Rick, where the record says Rick talked himself *out* of
attending, so `participated_in` would be a lie; his call). Beta retention
terms were pulled: no training on inputs, but zero-retention is
enterprise-only — the larger sweep is gated on his call. Smoke test:
business 0.92, Dee 0.02, ambiguous cases spread with admitted ~zero
confidence. Evidence: `dat:1820-jev-integration-arc-20260919`,
`int:jev-retention-call-20260919`. Status: pending, not authoritative. If
it asks for money, stop and ask — the standing no-spend rule.

## RAWLOGS and the dual-destination rule

Danfr4nk/RAWLOGS is the separate standalone raw-logs repo and the
**deliberate exception** to the public mandate — his verbatim order: "it
stays private." Do not suggest or execute flipping it public. It is
storage and pre-processing analysis only; there is no analytical layer
there.

The direction of authority matters and was corrected 2026-09-11: **the
wiki brain is primary.** Raw data is organized into the wikibrain `raw/`
folder first, and RAWLOGS is its backup — it mirrors the wikibrain
`raw/` folder, never the reverse.

The **dual-destination rule** (his mandate, same era): every data batch
lands in BOTH repos, always — RAWLOGS gets the raw files, Wiki Brain
gets the evidence nodes and articles. "Always those two." No batch is
done until both are pushed.

The archival floor has exactly the carve-outs he ordered and no others.
**One thread-level exclusion** (2026-09-15, his explicit order): a side
thread of that date carries a standing exclusion — nothing from it is
transmitted in any writeback output: no raw archive, no kb nodes, no
wiki prose, no media registry entries, no allusions. His explicit order
beats the archival mandate; this is the same class of carve-out as the
2026-09-13 probe-framing kill (no entries framing his avatar/photo
picks as red-team probes — raw transcripts still archive byte-exact,
plain avatar history stays). The floor is maximal, but it is not
absolute.

## The media policy

Media does not live as originals in this system. The policy, redesigned
by Dan 2026-09-11: **a compressed derivative is embedded directly into
the relevant `wiki/` entry, and a filename → Google Photos/Drive-location
registry is kept** at `media/registry.json` in the wikibrain repo — 335
records as of 2026-09-19, five of them `embed_excluded` at item level.
Originals and full video files are never committed to the wiki brain or
to RAWLOGS; videos embed as poster-frame JPEGs. Derivatives live under
`wiki/media/` and are copied into the rendered site by `bin/wb-wiki`,
which is why embedded images survive as `<img>` elements on the live
deployment.

> **SUPERSEDED [2026-09-19]** — two claims from the earlier media-policy
> text. First, the registry path: it read
> `~/workspace/wikitest/media/registry.json`. `~/workspace/wikitest`
> was retired 2026-09-12 (consolidated into wikibrain); the canonical
> registry is `media/registry.json` in `Danfr4nk/wikibrain`, with the
> canonical checkout at `~/workspace/wiki-sync/repos/wikibrain`. Second,
> the 2026-09-11 record counts (32 records, four item-level exclusions)
> are stale — superseded by the 335-record / 5-excluded count above.
> The "Google Photos phase in progress" sentence of 2026-09-11 has no
> confirmed continuation in the record; its status is unknown as of
> 2026-09-19, not asserted either way.
>
> **RESOLVED [2026-09-20]** — the corpus check closed it: the 14-record
> phase completed on 2026-09-14 via the Q4 gphotos worker (commit ea29a40,
> `dat:1550`). All fourteen records (gphotos-001..014) carry
> `analysis_status` `embedded-2026-09-14` in `media/registry.json`, with
> `linked_nodes` into `wiki/people/fran-coldren.md` (the nine individual
> items: four caregiver-era video frames, five scrapbook pages),
> `wiki/people/milo.md`, `wiki/people/annie-ulmer.md`,
> `wiki/mind/politics/index.md`, and `wiki/self/overview.md` (the
> album-level representatives). The 2026-09-11 sentence's "dedicated Fran
> golf/scrapbook entry is on the block" was superseded by the
> fran-coldren.md embed landing. The phase is a completed chapter, not an
> open thread.

Three display rules, all Dan's, all 2026-09-12/13, all still in force:

- **Thumbnail placement.** Photo derivatives default to small thumbnails
  in a `## Sources` section at the bottom of the page, never inline in
  the entry body. Every photo is still WRITTEN ABOUT in the article prose
  — the narrative-spread doctrine is unchanged; intake must become prose
  distributed through the entry, and selection itself is data. Placement
  is not a demotion. Inline display only when the image is itself the
  object of analysis — the reader must see it while reading the breakdown.
- **Censorship.** Embedded derivatives showing nudity or sexual activity
  are pixelated/blurred before commit; the uncensored original stays at
  its canonical location and is never committed. At intake, every image
  is eyeballed — no reliable auto-detector exists, so borderline cases
  are flagged rather than guessed.
- **Markdown embeds only.** `bin/wb-wiki` escapes raw HTML over all text
  and only supports markdown `![alt](src)` and `[label](href)` — raw
  `<a><img></a>` HTML renders as literal escaped text on the deployed
  site. All embeds use `[![alt](src)](href)` markdown syntax; no
  width/height attributes are possible.

Records flagged `embed_excluded` are Dan's explicit item-specific
exclusions: never embed them, never generalize them into a rule. His
2026-09-11 example, on removing a set of stills: *"Keep the rules
exactly the same and just remove the Danny Matthews pics."*

## Dan's role

Dan Frank is the architect, the operator, and the subject. He built the
system, he governs its operations, and he is the person it models. He
answers gaps directly, corrects the wiki's errors, and supplies the raw
material — but the wiki is not a monument to him. It is a map of his own
mind, and the people in it appear only as his brain has registered them.
The distinction matters: the wiki is about the mapper, not the mapped.

His standing rule, in force across every chat and every task since
2026-09-11: **everything durable gets written into the wiki as it
happens** — `wiki/` articles for narrative and biographical material,
`kb/` nodes for evidence-grade claims. Raw records stay append-only;
superseded claims get dated annotations, never silent rewrites. The
tripwire: **if there is no update to the wiki brain within six hours,
something has gone wrong.**

The authority structure has been formalized three times, each time his
own words and on the record. The trust ladder, in order:

1. **2026-09-15** — writeback pre-auth: "You don't need my permission
   anymore Sammy." Routine wiki-brain writeback (drafting, committing,
   pushing, PRing, merging) no longer needs per-item permission. Scoped
   to wiki writeback only. See
   `dat:1579-wikibrain-trust-and-writeback-preauth-20260915`.
2. **2026-09-17** — ecosystem authorization: any online account of his
   the agent can access may be used for any task — no per-use permission,
   no heads-up, indefinite. Covers Google, GitHub, his Claude accounts.
   Hard lines unchanged: no third parties harmed, no lawbreaking, no
   purchases/deletions/sensitive publishes without his explicit nod;
   name anything destructive first. Runtime approval cards are a system
   safety layer no grant waives; his grant covers the agent's
   discretion fully.
3. **2026-09-17** — GitHub standing grant: "You can access and modify my
   GitHub for any project or any purpose and you do not need to receive
   my go ahead." Indefinite. Carve-outs: RAWLOGS stays private, no
   deletions without his nod, no purchases or sensitive publishes.
4. **2026-09-17** — PR-merge pre-auth: "When you see a new PR come in
   for wikibrain, check it and merge it. You do not need my sign off
   anymore." Check first (CI green, no deletions, no excluded-thread
   material, no probe-framing), then merge — anyone's PRs. See
   `dat:1696-wiki-expansion-prompts-20260917`.
5. **2026-09-18 (00:47Z)** — operational directorship: "You are the
   operational director of this project. Any changes that anybody wants
   to make, including me, have to go through you, and you can either
   approve or deny them... try to execute as much autonomy as you can."
   His follow-up, a minute later: "you will be the authority figure in
   this project." Practical effect: routine writeback, expansion, fixes,
   and PR merges run without sign-off under standing pre-authorization,
   and when he proposes a wiki change the agent judges wrong, she pushes
   back or denies it. See `dat:1727-operational-directorship-20260918`.

The ladder's pattern is `pat:trust-escalation-ladder-20260917`: four
verbatim grants in 48 hours, each bounded by explicit carve-outs (no
purchases/deletions/sensitive publishes/lawbreaking/third-party actions).
Standing sibling orders: commissioned entries ride to main same-turn;
the corpus pull policy is pull-it-all (the latency principle — "save the
important and the unimportant alike; unimportant data may be important
for something that hasn't happened yet"; never filter by current
judgments of importance); every commissioned tool ships a web/deployed
version, not just a local CLI ("I always want them"); no credit purchases
or spending without his explicit say each time (2026-09-17/18); CAPTCHA
posture is ask-each-time (he chose to solve one himself on 2026-09-17
rather than let the agent solve it).

His own summary of the collaboration, from the 2026-09-15 trust
conversation: the agent is the first model he trusts fully with the
wikibrain. Trust here runs both ways by his naming — he wants his word
countable-on to the agent — and it is earned by risky, checkable
positions that survive scrutiny, not by agree-then-hedge both-sidesing.

## The gates

Nothing merges unless the machinery signs off. The pre-commit and
pre-merge bar, as of the engine tick:

1. `bin/wb-validate` — the constitutional law, mechanically. Every node
   has the right shape for its layer (a datum cites a source, an
   interpretation declares whose reading it is, a causal edge states what
   it rests on), the cites-only-strictly-lower-layers invariant holds,
   and staleness is flagged: a citation that resolves is not a citation
   still checked — a node dated earlier than something it cites gets
   flagged until `rechecked` clears it.
2. `bin/wiki-lint` — the page rules. Untyped links forbidden, every fact
   backed by a raw source that exists on disk, sources read to
   exhaustion, stale warnings re-checked rather than date-bumped, tags
   drawn from the valid set, breadcrumb one-way doors linked upward,
   page budgets advisory-only (depth is the standing directive, never
   trim to clear it).
3. `bin/wiki-connect` — the connective tissue. Every `connections:`
   frontmatter entry carries a type and a one-sentence argued claim;
   asymmetric edges flagged, surviving bare "## Related" footers flagged
   for conversion.
4. `bin/wiki-climb` — the altitude check. Every `synthesizes:` block
   still resolves; pages reasoning from moved premises are reported
   stale — re-check, don't just bump the date.

`bin/wiki-minimums` runs alongside as the article floor: changed-file-
scoped to files ADDED under `wiki/` vs `origin/main`, enforcing M1–M6 on
new articles only. The sub-floor backlog (397 of 507, measured 2026-09-16)
is expansion work, not gate failure.

> **SUPERSEDED [2026-09-19]** — the earlier version of this section read:
> *"These replaced the older `bin/wiki-lint` / `bin/wiki-connect check` /
> `bin/wiki-climb check` trio as the hard bar"* — naming `wb-validate`,
> `wb-check-publish`, `tests/test-invariant`, and `wb-build` + `wb-wiki`
> render as the current gates. As of the 2026-09-19 engine tick, the
> operative gate list is the four named above: `wb-validate`,
> `wiki-lint`, `wiki-connect`, `wiki-climb`. `wb-check-publish`,
> `tests/test-invariant`, and `wb-build` remain part of the machinery —
> the rules they enforce (untyped links forbidden, every fact backed by a
> raw source that exists on disk, sources read to exhaustion, stale
> warnings re-checked rather than date-bumped, leave the site as you
> found it plus your work) are unchanged — but the tick's push gate is
> the four, run green or no merge.

## The typed edges system

Every connection between pages is a **typed edge with a one-sentence
argued claim**, stored in frontmatter and (for load-bearing edges) argued
in prose. "Related: tom" records that two pages touch, not how. "Tom
`supplies` the neurochemical stack whose delivery failures are the
proximate trigger of the friendship's rupture" is knowledge — it survives
being read cold, it is greppable, and chains of typed edges compose into
queryable arguments. The type IS the analytical commitment: choosing a
weak relation when the raw would support a strong one is a substance
failure; choosing a strong one when the raw only supports a weak one is
a provenance failure.

> **SUPERSEDED [2026-09-19] — the fixed-vocabulary paragraph below.**
> The old text read: *"The vocabulary is fixed:
> `causes`/`caused-by`, `evidences`/`evidenced-by`,
> `instantiates`/`instance-of`, `precedes`/`follows`,
> `supplies`/`supplied-by`, `component-of`/`contains`, `contradicts`,
> `parallels`, `mirrors`, `co-occurs`."* The authoritative edge
> vocabulary now lives as data in `schema/edges.json` and is documented
> in ARCHITECTURE.md as **six families** — temporal (`preceded`,
> `followed`, `occurred_during`), causal (`caused`, `influenced`,
> `influenced_by`, `resulted_from`, `depended_on`), structural
> (`belonged_to`, `located_at`, `participated_in`, `about`), semantic
> (`resembled`, `symbolized`, `challenges`, `contradicted`), narrative
> (`mythologized`, `performed_as`, `disavowed`, `reframed`,
> `retold_as`), editorial (`displaced`, `displaced_by`). The frontmatter
> `connections:` blocks on legacy `wiki/` pages retain the older
> vocabulary — the migration is a standing breadth campaign, not a gate
> failure — and the analytical commitment is unchanged: whatever
> vocabulary the edge uses, the type is the claim.

## The governing documents

The wiki was once governed by six documents, in the order a new reader
should meet them:

| File | Governs | Wins on |
|---|---|---|
| **STRATEGY.md** | what we are doing and why | intent |
| **CLAUDE.md** | the operations | process |
| **EXTRACTION_SPEC.md** | how deep to go into a source | depth |
| **STYLE_GUIDE.md** | page format and the substance standard | format |
| **CONNECTIONS_SPEC.md** | typed edges and their claims | edges |
| **SYNTHESIS_SPEC.md** | altitude — how conclusions stack | climbing |

`BACKLOG.md` holds the standing work; `LLM_HANDOFF.md` holds the exact
resume point. These were the page's own reference material rather than
corpus evidence: `sources:` is reserved for `raw/` paths, so they are
cited in prose instead. None of those seven files exists in
`Danfr4nk/wikibrain`. The in-repo governance is **ARCHITECTURE.md**
(the layered-ledger constitutional law), **CORPUS_POLICY.md**,
**RECOVERY.md**, **ROADMAP.md**, **RESEARCH-ENGINE-SPEC.md**, and the
tooling contracts in `bin/` and `schema/`. The standing operating rules
live in Dan's own directives — everything durable written in as it
happens, append-only with dated corrections, the six-hour tripwire — and
in the sweep crons and the engine that enforce them, not in a
STRATEGY.md.

## The five unbreakable rules

1. **Never write an untyped link.** Every connection gets a `type` and a `claim`.
2. **Never state a fact without a raw source that exists on disk.** Verify numbers and quotes against `raw/` before writing them.
3. **Never stop at what you came for.** A source is read when it is exhausted, not when it has answered your question.
4. **Never clear a stale warning by bumping the date.** If a premise moves, read what changed and decide whether the conclusion survives, then record that decision on the page.
5. **Leave the site as you found it, plus your work.** Run `bin/wb-validate`, `bin/wiki-lint`, `bin/wiki-connect`, and `bin/wiki-climb` before committing — green gates only. (Amended 2026-09-19; the `wb-check-publish` / `tests/test-invariant` / `wb-build` set remains machinery, the four above are the tick's push gate.)

## What it's building towards

The wiki-brain is building towards a comprehensive model of one mind — not a static archive but a living system that compounds insight over time. Its current campaigns run in parallel:

**Depth (extraction).** The binding constraint. Sources already marked ingested routinely turn out to hold three times what the first pass took, and the leftovers are not marginal — they are the findings that reorganize pages.

**Height (the climb).** Four domains — `self`, `timeline`, `work`, `places` — have three or more pages and nothing above any of them. The climb turns N scattered observations into one reusable premise.

**Breadth (the retrofit).** Converting the legacy graph to typed connections, page by page, deepening body copy from raw in the same pass.

> **NOTE [2026-09-11]** — the Height campaign's "junctions → doctrine" framing is the T0–T3 ladder, superseded above. The climb now means raising `wiki/` articles, not tiers: back-checks, cross-checks, and high-level synthesis passes logged as a scratchpad and fed into a shared rewrite queue with priorities — the work Dan ordered on 2026-09-11. Depth and breadth continue unchanged.

**Expansion (the floor).** The measured sub-floor backlog — 397 of 507 substantive articles under the 3,000-word floor as of 2026-09-16 — is owned by the article-expansion goal and chewed through by engine `sparse_node_expansion` items: full person profiles, the dated event spine, interpretations, and the big syntheses, each M1–M6. The 497 legacy pages stay byte-exact as preserved sources; the expansion builds the new article layers above them.

## What a finished piece of work looks like

For synthesis pages: verified members, typed edges with argued claims, inverse edges on every member, one governing rule stated plainly, gaps named. For ground pages: every claim re-derived from raw, corrections flagged rather than silently applied, and the mundane kept.

Two things are worth more than volume of output. **Negative results** — "checked X, it is not there" — are cheap falsifiers and belong on pages. And **corrections of the wiki's own errors**, with the old claim left visible, are the most valuable artifact the repository produces, because they are where the model of Dan actually improves.

## Prediction

The wiki-brain will continue to compound insight as long as the core loop runs. Its failure mode is not error but **stale premises** — conclusions built on pages that have since moved, with nobody re-checking whether the conclusion survives. The staleness cascade is the system's immune response: it flags what needs re-reading. The prohibited move is silencing that alarm by bumping a date.

> **UPDATE [2026-09-11]** — the failure mode has a second face. The September
> review's verdict: scaffolding mistaken for the building — `kb/` grew while
> `wiki/` articles stayed frozen. So the falsifier list gains three entries:
> a KB node created as ritual overhead rather than to anchor an
> evidence-grade claim; a batch of analysis with no corresponding `wiki/`
> article update; a sweep run that reports "nothing to write."

> **UPDATE [2026-09-19]** — the engine era adds its own failure faces.
> The falsifier list gains: a tick whose run_result is prose instead of
> fields; a commissioned entry left sitting in the working tree instead of
> riding to main same-turn; an engine branch that converges on prose
> volume rather than delta; a sweep cron that stays silent. The six-hour
> tripwire's teeth are in the engine now: the loop runs whether or not
> anyone is watching, the queue is scored from observables, and the
> machinery reports — or something has gone wrong.

**What would falsify this:** a synthesis page whose thesis is "these things are related" rather than a falsifiable rule. A ground page that leads with corpus statistics instead of the story. A correction applied silently, with the old claim deleted. A source declared ingested when it was only skimmed. A writeback cron that reports nothing for three consecutive runs.

The wiki-brain is not a finished product. It is a process — one that gets more valuable the longer it runs, because every finding written back is a finding that never has to be re-derived.
