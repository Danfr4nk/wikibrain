---
domain: self
page_type: concept
title: "The Wiki-Brain"
aliases: ["wiki-brain", "the wiki", "second brain", "the repository"]
status: active
knowledge: earned
date_created: 2026-08-19
date_modified: 2026-09-11
importance: critical
tags: [ai-collaboration, digital-footprint, personality-profile, system-architecture]
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
---

# The Wiki-Brain

> **RE-CHECKED [2026-08-20] — a structural assumption of the corpus turned out
> to be false, and this page is where that belongs.** Flagged stale against
> [[wiki/self/message-corpora/source-coverage-index]] (2026-08-20). **No claim
> here is withdrawn**, but the system gains a defect worth naming at this level:
> **a handle is not a person.** Every message-derived attribution in this wiki
> assumes the sender of a row is the owner of the handle it came from. At least
> six inbound rows on Annie's 212 handle across July–August 2026 were typed by a
> third party holding her phone, in three separate episodes, all during crises —
> the periods the corpus draws its highest-stakes claims from. Counts are
> unaffected; attributions are not. There is no column for this and no
> automated detector; the three known episodes were each identifiable from
> register alone. This is the same class of failure as the AI-secondary
> attribution reversals of 2026-08-19 and the `MASTER_MESSAGES_DB_DUMP` count
> error — the wiki's recurring defect is not bad data but **confident metadata
> that answers a slightly different question than the one being asked.**

> **RE-CHECKED [2026-08-21] — premise moved, and it refines this page's origin
> claim without overturning it.** [[wiki/self/concepts/llm]] moved on
> 2026-08-21: Gemini's 'chicken nugget' passage was corrected off Dan's ledger,
> and the post-GPT-5 causation of ChatGPT's decline was marked untested. This
> page carries an edge claiming ChatGPT is *"where the bootloader concept was
> first prototyped, which makes it the wiki-brain's own origin point."* That
> survives, with one dating refinement now available from the 375-thread
> export: Dan's ChatGPT use starts **2022-12-10**, ten days after launch, and
> the first eleven threads are puns, voice-over rewrites and a video essay. The
> bootloader work is a later development on the platform, not the thing he
> arrived with — so ChatGPT is the origin *site*, not the origin *motive*.


The wiki-brain is a second brain about one person, Dan Frank. It is a custom-built knowledge repository that collects, stores, and synthesizes every available datum about his life, mind, history, ideology, environment, and relationship to reality — every story, every friend, every place, every perspective, every development, every thought. Its job is not to archive but to **mine one life for hidden connections**: linkages between people, events, money, substances, music, work, and psychology that no single source states, but that the corpus proves when read across itself.

## The canonical deployment

The canonical repository is **Danfr4nk/wikibrain**, public, deployed at
https://danfr4nk.github.io/wikibrain/ — roughly **510 rendered entries**
as of 2026-09-11 (501 source `.md` files under `wiki/`, plus generated
indexes). The renderer is `bin/wb-wiki`: it turns Markdown images into
`<img>` elements, copies `wiki/media/` into the generated site, emits a
per-domain index and a client-side search index, and builds the front page
with **Newest articles** and **Recently modified** (25). Nothing in this
article that follows describes any other deployment.

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

## The article is always the deliverable

`wiki/` articles are the product layer — the user-facing surface the
renderer ships. `kb/` is the evidence ledger: typed nodes at L0–L5
(`sources`, `data`, `entities`/`events`, `interpretations`,
`patterns`, `syntheses`), governed by ARCHITECTURE.md's constitutional
rule — **a node may cite only nodes at a strictly lower layer**, which is
what keeps evidence, interpretation, and inference from collapsing into
the same object. The ledger exists to anchor evidence-grade claims. It is
not the finish line. A batch of analysis with no corresponding `wiki/`
article update is unfinished work, not a contribution. The old system's
failure mode was exactly this: the layers were climbed as though the
scaffolding were the building, and the articles — the thing any reader
actually lands on — went stale underneath it.

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

## Dan's role

Dan Frank is the architect, the operator, and the subject. He built the system, he governs its operations, and he is the person it models. He answers gaps directly, corrects the wiki's errors, and supplies the raw material — but the wiki is not a monument to him. It is a map of his own mind, and the people in it appear only as his brain has registered them. The distinction matters: the wiki is about the mapper, not the mapped.

His standing rule, in force across every chat and every task since 2026-09-11: **everything durable gets written into the wiki as it happens** — `wiki/` articles for narrative and biographical material, `kb/` nodes for evidence-grade claims. Raw records stay append-only; superseded claims get dated annotations, never silent rewrites. The tripwire: **if there is no update to the wiki brain within six hours, something has gone wrong.**

## The sweep crons

The loop above does not run on good intentions. Two jobs enforce it:

- **`wiki-brain-writeback-6h`** — every six hours, sweeping all Muse chats and tasks: writes durable findings into the wiki, runs the gates, merges on green, and **always reports**. The six-hour tripwire is Dan's: no update in six hours means the machinery failed, not that there was nothing to write.
- **`wiki-brain-scrape`** — every four hours, pulling new messages from all chats, archiving the raw material into both repositories, and running synthesis analysis in totality — constant pattern-mining on who Dan is, looking for unseen patterns. Gmail was dropped from these pulls on 2026-09-11 on Dan's order ("forget pulling email"); external sources (IG/Threads/FB/Messenger/Spotify) are secondary checks only.

Work lands through rolling-PR branches pushed with `push-branch.py` (Git Data API, history-preserving), merged by fast-forward ref update only after the gates pass. The GitHub REST merge endpoint is unreliable under the current credential, so the merge path is the ref update — verified rev-list strictly-ahead, then PATCH the `main` ref to the branch head.

## The media policy

Media does not live as originals in this system. The policy, redesigned by Dan 2026-09-11: **a compressed derivative is embedded directly into the relevant `wiki/` entry, and a filename → Google Photos/Drive-location registry is kept** at `~/workspace/wikitest/media/registry.json` (32 records). Originals and full video files are never committed to the wiki brain or to RAWLOGS; videos embed as poster-frame JPEGs. Derivatives live under `wiki/media/` and are copied into the rendered site by `bin/wb-wiki`, which is why embedded images survive as `<img>` elements on the live deployment.

As of 2026-09-11: 14 local derivatives publicly embedded across the Fran, ChatGPT, arrangement-history, and jaredtricia articles; **four records explicitly excluded at item level** — the red-lit `upload-013` still removed from arrangement-history, and `upload-016`–`upload-018` (Danny Matthews stills) removed per Dan's explicit instruction. These are individual removals, **not a general rule** — Dan's words: *"Keep the rules exactly the same and just remove the Danny Matthews pics."* The Google Photos phase (14 records: four individual Fran videos, five scrapbook photos, five album-level records) is in progress: direct JPEG posters were pulled for the nine individual items; album-level records get one representative contact sheet each, and a dedicated Fran golf/scrapbook entry is on the block.

## The gates

Nothing merges unless the machinery signs off. The pre-commit and pre-merge bar:

1. `bin/wb-validate` — **clean**
2. `bin/wb-check-publish` — **safe**
3. `tests/test-invariant` — **43 passed, 0 failed**
4. `bin/wb-build` plus a `bin/wb-wiki` render — **clean**

These replaced the older `bin/wiki-lint` / `bin/wiki-connect check` / `bin/wiki-climb check` trio as the hard bar. The rules themselves — untyped links forbidden, every fact backed by a raw source that exists on disk, sources read to exhaustion, stale warnings re-checked rather than date-bumped, leave the site as you found it plus your work — are unchanged.

## What it's building towards

The wiki-brain is building towards a comprehensive model of one mind — not a static archive but a living system that compounds insight over time. Its current campaigns run in parallel:

**Depth (extraction).** The binding constraint. Sources already marked ingested routinely turn out to hold three times what the first pass took, and the leftovers are not marginal — they are the findings that reorganize pages.

**Height (the climb).** Four domains — `self`, `timeline`, `work`, `places` — have three or more pages and nothing above any of them. The climb turns N scattered observations into one reusable premise.

**Breadth (the retrofit).** Converting the legacy graph to typed connections, page by page, deepening body copy from raw in the same pass.

> **NOTE [2026-09-11]** — the Height campaign's "junctions → doctrine" framing is the T0–T3 ladder, superseded above. The climb now means raising `wiki/` articles, not tiers: back-checks, cross-checks, and high-level synthesis passes logged as a scratchpad and fed into a shared rewrite queue with priorities — the work Dan ordered on 2026-09-11. Depth and breadth continue unchanged.

## The typed edges system

Every connection between pages is a **typed edge with a one-sentence argued claim**, stored in frontmatter and (for load-bearing edges) argued in prose. "Related: tom" records that two pages touch, not how. "Tom `supplies` the neurochemical stack whose delivery failures are the proximate trigger of the friendship's rupture" is knowledge — it survives being read cold, it is greppable, and chains of typed edges compose into queryable arguments.

The vocabulary is fixed: `causes`/`caused-by`, `evidences`/`evidenced-by`, `instantiates`/`instance-of`, `precedes`/`follows`, `supplies`/`supplied-by`, `component-of`/`contains`, `contradicts`, `parallels`, `mirrors`, `co-occurs`. Choosing `co-occurs` when the raw would support `causes` is a substance failure; choosing `causes` when the raw only supports `co-occurs` is a provenance failure. The type IS the analytical commitment.

## The governing documents

> **SUPERSEDED [2026-09-11].** The wiki was governed by six documents, in the
> order a new reader should meet them:
>
> | File | Governs | Wins on |
> |---|---|---|
> | **STRATEGY.md** | what we are doing and why | intent |
> | **CLAUDE.md** | the operations | process |
> | **EXTRACTION_SPEC.md** | how deep to go into a source | depth |
> | **STYLE_GUIDE.md** | page format and the substance standard | format |
> | **CONNECTIONS_SPEC.md** | typed edges and their claims | edges |
> | **SYNTHESIS_SPEC.md** | altitude — how conclusions stack | climbing |
>
> `BACKLOG.md` holds the standing work; `LLM_HANDOFF.md` holds the exact resume point. These seven files are the page's own reference material rather than corpus evidence: `sources:` is reserved for `raw/` paths, so they are cited here in prose instead.
>
> None of those seven files exists in `Danfr4nk/wikibrain`. The in-repo
> governance is **ARCHITECTURE.md** (the layered-ledger constitutional law),
> **CORPUS_POLICY.md**, **RECOVERY.md**, **ROADMAP.md**, and the tooling
> contracts in `bin/` and `schema/`. The standing operating rules live in
> Dan's own directives — everything durable written in as it happens,
> append-only with dated corrections, the six-hour tripwire — and in the
> sweep crons that enforce them, not in a STRATEGY.md.

## The five unbreakable rules

1. **Never write an untyped link.** Every connection gets a `type` and a `claim`.
2. **Never state a fact without a raw source that exists on disk.** Verify numbers and quotes against `raw/` before writing them.
3. **Never stop at what you came for.** A source is read when it is exhausted, not when it has answered your question.
4. **Never clear a stale warning by bumping the date.** If a premise moves, read what changed and decide whether the conclusion survives, then record that decision on the page.
5. **Leave the site as you found it, plus your work.** Run `bin/wb-validate`, `bin/wb-check-publish`, `tests/test-invariant`, and `bin/wb-build` before committing — green gates only. (Amended 2026-09-11; the older `bin/wiki-lint` / `bin/wiki-connect check` / `bin/wiki-climb check` trio is superseded as the hard bar.)

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

**What would falsify this:** a synthesis page whose thesis is "these things are related" rather than a falsifiable rule. A ground page that leads with corpus statistics instead of the story. A correction applied silently, with the old claim deleted. A source declared ingested when it was only skimmed.

The wiki-brain is not a finished product. It is a process — one that gets more valuable the longer it runs, because every finding written back is a finding that never has to be re-derived.
