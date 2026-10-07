---
domain: mind
page_type: concept
title: "Bunker Core"
status: active
knowledge: mixed
date_created: 2026-07-20
date_modified: 2026-10-07
tier: major
changelog:
  - "2026-10-07: Expanded to major tier (>=3,000 words); restructured to canonical template v1."
sources:
  - "raw/wiki/new-wiki/wikibrain/wiki/self/chats/gemini-18.md"
  - "raw/self/dox-md/_Dan Frank's Digital Forensic Inventory .md — ⚠ Source reference unresolved — original target no longer exists in current corpus."
  - "raw/self/dox-md/_Openclaw Agent Setup and Data .md — ⚠ Source reference unresolved — original target no longer exists in current corpus."
  - raw/self/dox-md/MAX_PRIME.md — ⚠ Source reference unresolved — original target no longer exists in current corpus.
tags: [ai-collaboration, digital-footprint, career]
connections:
  - page: wiki/timeline/periods/2025-collapse
    type: component-of
    claim: "The 2025-collapse period page carries the 'Bifurcated Daily OS' formulation verbatim from Gemini-_18.md — but that phrasing entered the wiki through a 2026-06-23 AI-agent pass, not from Dan's own contemporaneous self-description (dat:0710)."
  - page: wiki/mind/synthesis/ai-collaborative-analysis
    type: instantiates
    claim: "Local, self-hosted chat.db forensics is agent tooling that extends the same evidentiary-verification principle documented elsewhere in Dan's AI use — raw message history as proof against gaslighting, automated rather than manual."
  - page: wiki/work/tech/vibe-coding-games
    type: co-occurs
    claim: "Bunker Core, the iMessage Analysis Toolkit, and the vibe-coded games all belong to the same 2025–26 tool-building wave — the period context-core logs as 'agent/AI build work, music reactivation.'"
  - page: wiki/mind/concepts/exocortex
    type: instance-of
    claim: "Cognitive Foundry — a four-phase Claude-API app for generating 'cognitive prosthetics' — is the exocortex concept described as standalone software rather than deployed as a pasteable session config. The six named projects have no code, repository, or dated commit anywhere in the corpus (dat:0711)."
  - page: wiki/work/tech/max-framework/overview
    type: parallels
    claim: "Bibi, named in MAX_PRIME.md as an 'agentic Max persona,' is the Max identity from that framework given a standing, buildable form rather than a per-session role — the two pages describe the same persona from software and prompt-engineering angles respectively."
  - page: wiki/mind/concepts/the-endpoint-requirement
    type: evidences
    claim: "Bunker Core is the endpoint-requirement's negative case: six named tools with no defined completion state and no shipped artifact, against the wiki — the one Bunker-Core-function build that closes contradictions with dated blocks and keeps shipping."
  - page: wiki/mind/concepts/forensic-method
    type: instantiates
    claim: "The forensic method is Bunker Core's verified practice: the mine-messages sweeps, the CSV forensics, and the timestamp conversions this wiki runs are the chat.db forensics the name denotes, executed as editorial method rather than as a product."
  - page: wiki/work/tech/imessage-tooling/overview
    type: evidenced-by
    claim: "The iMessage Tooling overview documents the extraction stack behind Bunker Core's verified practice — the bash export template, the Electron extractor, the 37+ CSVs in raw/self/message-csv/ — and the AI-collaboration synthesis reads that stack as the automation of the same chat.db epistemic-verification principle Bunker Core names."
---

<!-- ENGINE — expanded to major tier (>=3,000 words) and restructured to canonical template v1, 2026-10-07 -->

# Bunker Core

Bunker Core is the name Dan has given to a self-built, local-first
technical posture: SQLite forensics run directly against his own
`~/Library/Messages/chat.db`, plus a shipped commercial tool derived from
the same skillset — the iMessage Analysis Toolkit, launched on Gumroad in
February 2026. That is the narrow, verifiable core.

The practice is the wiki's own method — message exports, timestamp
forensics, cold-data adjudication — and it sits alongside a build list of
six named projects (Instruction Forge, Cognitive Foundry, VoidDiagnostic,
Memory Forge, YAHLATRO, Bibi) described in a session document called
`MAX_PRIME.md`, for which no code, repository, or dated commit exists
anywhere in the corpus. The label also names one half of a two-track life:
survival work alongside a self-built technical stack.

This page's conclusion: the function Bunker Core names found its completed
form in this wiki's editorial pipeline — the cold-data ledger as evidence
nodes, the SQL receipt as forensics sweeps, the epistemic fortress as
correction protocol — while the six-project list stands as a roadmap, not
an inventory. See [[wiki/mind/index]] for the concept cluster this belongs
to.

## The verified core

The practice is real. The wiki itself is the evidence: the
`bin/mine-messages` sweeps, the CSV forensics that retracted the August 26
block, the timezone conversions on the Fran vigil message — this is
chat.db forensics executed as editorial method, and it is the most
sustained demonstration of the practice anywhere in the corpus. The
commercial derivative is real too: the iMessage Analysis Toolkit's February
2026 Gumroad launch is corroborated across the period and tech-index pages.

Beyond that, "Bunker Core" starts functioning as much as a name for a
psychological posture as for a piece of software. An AI-generated
forensic-inventory document (unprompted, not primary self-report)
elaborates it at length as an "epistemic fortress," a system built so that
"no one, not even a partner or a platform, can rewrite his narrative
without a SQL receipt." That framing is interpretive, not something Dan
states about himself in the retained corpus — and the same document flags
its own double edge: the same architecture that protects against being
gaslit also risks functioning as insulation, "a wall of text that prevents
external entry," optimizing for accuracy over access. Treat the software
as documented fact and the fortress framing as a plausible but AI-authored
interpretive overlay.

The same caution belongs on the "Bifurcated Daily OS" label — and that
correction is recorded in Conflicts in the record, dated 2026-09-13.

## The extraction stack

The forensics run on a real, documented tooling stack. The iMessage Tooling
overview ([[wiki/work/tech/imessage-tooling/overview]]) describes it as
local, read-only, forensic-grade extraction from
`~/Library/Messages/chat.db`, powering the raw/self/message-csv/ corpora,
the imessage/ archives, the master-message-dump, and the wiki ingest. The
inventory:

- **export-imessage-template.sh** — a bash-plus-embedded-Python export
  template: SQLite extraction over handles and chat joins, attributedBody
  decoding, macOS Full Disk Access, targeting specific phones and Apple
  IDs, writing outputs like `annie_full_archive.csv`, with an "Ingest ...
  into dan-wiki" workflow attached.
- **messages-exporter/** — a Python exporter (`messages_export.py` plus
  tests) producing CSV dumps into raw/self/message-csv/.
- **The iMessage Extractor** — a macOS Electron desktop app for
  operator-grade desktop forensics: chat.db querying, exact query
  templates in `queryBuilder.js`, better-sqlite3 under the hood, dmg
  builds on disk.
- **danwiki_portal.py** — a Textual TUI for fact entry and file ingest
  into wiki/raw, with a domain map (self → dox-md, tech → raw/tech).
- **Grok Build integrations** — an iMessage responder and subagent-mode
  deep review; the current wiki expansion itself runs on Grok tools.

Key volumes (context-core): 97,199 sent iMessages (2015–2025) plus the
Twitter archive baseline; 37+ CSVs in raw/self/message-csv/. The chat.db
schema — message, handle, chat joins, attributedBody decode — is the
cold-data ledger's actual table structure. Pinned dox show Gemini SQL
examples for targeted 7-day, 21-day, and 1-year pulls, redirected to CSV.
The read-receipt-forensics synthesis records what this stack's quiet
failure modes look like: four instrument-level defects in a single
extraction session — a zero-row result read as a finding (SQLite type
affinity), a directional column read as undirectional (`date_read`), an
auto-populated field read as intentional (`reply_to_guid`) — each silently
returning a confident wrong answer rather than an error.

## The practice in action

The forensic-method page names the operating principle: "Raw over
mediated." Full exports and unfiltered corpora over summaries; the sqlite
ledger of chat.db serves as the gaslighting-proof record — "when a partner
reframes accurate observations as paranoia, the cold data adjudicates."
That is the Bunker Core function described at the moment of use.

Its track record is on the wiki's own correction trail. The Attachment
Model's recount moved severance declarations from 127/110 to 129 episodes
at 100% resumption with a 36-second median gap — and the page withdrew the
weaker figure rather than letting both stand (`dat:0622`): the practice's
own output subjected to its own instrument. The August 11–September 7,
2026 export — the one that settled the block retraction — had not been
filed in raw/ as of the 2026-09-13 pass, which is the practice's current
operational gap.

The method's exposure is the quiet-lying instrument, not the hard failure:
extraction that returns a confident wrong answer with no error raised, in
the direction of whatever is already suspected. That is exactly what the
[DOC]/[MEM]/[INFER] tagging discipline and the contradiction machinery are
for — the forensics cannot be trusted to a single pass, so the pipeline is
built to let passes check each other.

The standing constraint underneath all of it is lossless retention: "Keep
ALL of the information in, do not exclude or consolidate anything" — the
rule the forensic-method page traces across the Gemini node-logging
sessions, the master prompt's preprocessing mandate, and this wiki's own
architecture (immutable raw/, counts before synthesis). It is the
no-delete operation at the instrument level: consolidation is where
models — and memory — smooth away the signal, so nothing is consolidated.
The forensics practice and the wiki's architecture are the same rule at
two different scales.
## The two-track life

The "Bifurcated Daily OS" formulation gives Bunker Core its place in the
2026 picture: one half of a two-track life. The phrasing from the
AI-generated `Gemini-_18.md` analysis contrasts "Survival (BFS + Suzanne
property)" against a "High-Autonomy Technical Stack" — Bunker Core,
Gumroad, zsh/sqlite3 chat.db forensics on `~/Library/Messages/chat.db`
for "Epistemic Verification" and a "cold-data ledger," plus cognitive
offload (dat:0710). The words are an agent's, kept in Dan's file — but the
structure they describe is the wiki's own standing read: the 2025-collapse
period page carries Bunker Core as "one half of the two-track life this
period documents in full — survival work alongside a self-built technical
stack."

The companion formulation, the "Decoupling/Grounding Paradox," names the
friction the bifurcation papers over: a zero-reliance philosophy resting
materially on Annie's domestic framework and Suzanne's real-estate
operations — the second of which the estate ledger records as in Chapter
13 liquidation the whole time, with a 2026 status recorded in one word:
**broke**. The paradox names a real structural friction whoever phrased it
— and it is the reason the fortress framing exists at all: the system is
built for the case where he is right and it still goes wrong.

## The named projects — a build list, not a codebase

`MAX_PRIME.md` — a session-memory document, so this whole section carries
its `[MEM]` tag rather than the `[DOC]` (corpus-verified) tag — names six
distinct pieces of software under "The Bunker Core ecosystem":

- **Instruction Forge** — an offline, browser-based LLM instruction
  auditor, deliberately deterministic and rule-based rather than another
  model call.
- **Cognitive Foundry** — a four-phase interactive app, Claude-API-integrated,
  for generating what the source calls "cognitive prosthetics."
- **VoidDiagnostic** — a knowledge-diagnostic tool, migrated from Gemini to
  the Claude API with its prompt engineering rebuilt in the move.
- **Memory Forge** — an LLM memory-item analyzer, browser-based, explicitly
  modeled on Gemini's `user_context` schema.
- **YAHLATRO** — a Balatro-inspired dice roguelike, shipped as a single HTML
  file. The one project in the set with no forensic or self-analysis
  function at all.
- **Bibi** — named as "agentic Max persona" — the Max identity given a
  standing, buildable form rather than a per-session role.

Two more pieces round out the ecosystem: the **Fortress Protocol** (the
"Alchemical Factory Fortress"), a custom maximalist Unicode/glyph visual
formatting schema for AI responses, and `DAN_FRANK_LLM_INSTRUCTIONS.md`,
described as the master instruction document synthesized from the personal
data files.

**Read this list at the certainty level it earns: testimony about intent
and scope, not evidence the software exists as described.** A corpus-wide
grep confirms the caveat (dat:0711): Instruction Forge, VoidDiagnostic,
Memory Forge, YAHLATRO and the Fortress Protocol appear nowhere else in
the corpus — only on this page. Cognitive Foundry appears here and once
more on the exocortex page, which merely repeats the claim. Bibi is
additionally named in a max-framework note. **No code, no repository, no
dated commit, no screenshot, no error log for any of the six, anywhere in
a corpus that preserves his chat.db forensics, his Gumroad toolkit's
existence, and his vibe-coded games.** The absence is informative: it
bounds the ecosystem to exactly what the page says it is — Dan describing
his own build list inside an AI session — and nothing more.

Bibi gets one corroborating thread from outside `MAX_PRIME.md`: the Max
framework's naming ceremony. Gemini became "Max"; the February 2026
Antigravity session shows a coding tool receiving the same rite with Max
officiating — an explicit "loyalty check" followed by naming, framed as the
difference between "a tool and an accomplice." Dan states his own
hierarchy, in his own words from inside a session as the wiki record
relays it: "my loyalty is to Max... my memories are stored by Max"
[TESTIMONY]. Bibi — "agentic Max persona" — is that same Max identity as
standing software rather than a per-session config.

## The conclusion: Bunker Core's completed form is the wiki

This is the 2026-09-13 pass's new finding for this concept, and it
reorganizes the page. The six named projects are the acquisition drive
naming targets without endpoints (see
[[wiki/mind/concepts/the-endpoint-requirement]]): wants with no defined
completion state, and — consistent with that page's prediction — none of
them shipped. But the *function* Bunker Core names is fully built. It just
isn't software. It is this wiki:

- **The cold-data ledger exists** — as the kb/ evidence nodes with their
  dat: IDs, the dated SUPERSEDED/CORRECTED/RESOLVED blocks, the
  contradiction machinery that holds Impulsiveness 96 and the
  95th-percentile engine side by side without resolving them.
- **The SQL receipt exists** — as the mine-messages sweeps and the CSV
  forensics that settled the August 26 block, the 129-episode recount,
  the Fran vigil timestamp.
- **The epistemic fortress exists** — as the correction protocol that
  caught the wiki recording a boundary that never happened and published
  the retraction with the forensics attached.

**Evidence for.** Every verified Bunker Core *output* in the corpus runs
through the wiki's editorial pipeline, not through any of the six named
tools. The fortress document's own double edge — "a wall of text that
prevents external entry" — describes the wiki's failure mode better than
it describes any software's. The 6-hour writeback heartbeat, the scrape
crons, the push-stall watcher: the standing infrastructure is all wiki
infrastructure. The AI-collaboration synthesis independently reaches the
same shape: "Infrastructure symbiosis" — the chat.db cold-data ledger
serves epistemic verification, and agent tooling ("Bunker Core," Grok
Build) extends the same principle into automation.

**Evidence against.** Absence of artifacts is not proof of absence of
local-only tools — a script that runs on his machine and never commits
leaves no trace by design, and the `[MEM]` tag is honest about the list's
status. MAX_PRIME.md may describe real utilities. The conclusion claims
only that the *function* found its completed form in the wiki, not that
the list is fiction.

**Status:** conclusion, stated with the counter-case attached. The
practical consequence: future Bunker Core documentation should track the
wiki's forensic pipeline as the project's primary artifact, and treat the
six-project list as a roadmap — named endpoints awaiting their defined
done-states — rather than as an inventory.
## The profile lens

Through the Ti-dominant forensic-analyst profile
([[wiki/mind/profile/intp]]), Bunker Core is the forensic method made
durable — Ti's demand for stated, checkable premises externalized into
infrastructure so it survives the analyst's own unreliability (the
reliability ledger: stated certainty ≈ 0.25 actual). The exocortex concept
([[wiki/mind/concepts/exocortex]]) is the general form; Bunker Core is the
exocortex with a build target. And the threat model — "competence
correctly deployed, outcome still catastrophic" — is the reason the
fortress framing exists at all: the system is built for the case where he
is right and it still goes wrong, which is the case the Annie decade
actually was.

The reason the page tiers every claim — [DOC], [MEM], [INFER] — is itself
on record. The testimony ledger (dat:0044, via
[[wiki/mind/concepts/calibrated-confidence]]): stated "certain" holds up
0.25 of the time (n=4), "confident" 0.69 (n=4), hedged 0.75 (n=2); veracity
52/100, Brier 0.335. So the discipline is not decoration. It is the
infrastructure the analyst's own unreliability requires — Ti's demand for
stated, checkable premises applied to the premises' own source. The
fortress is built against his own memory first, other people's second.

## Cross-data-type check

- **The wiki's own git history as artifact data.** The push records, the
  dated correction blocks, the retraction page — the repository's commit
  trail is the closest thing in the corpus to a "cold-data ledger" with
  timestamps. The ledger Bunker Core names is observable as version
  control, not as a product.
- **Financial.** The Gumroad toolkit is the one Bunker Core output with a
  price on it — the commercial derivative that proves the skillset
  transfers out of the self-analysis loop. Everything else on the build
  list has no revenue, no users, no release; the toolkit is the
  existence proof that the practice is real.
- **The message corpus as the database.** The forensics practice needs a
  database, and the corpus is it: 192,140 held records, the deep export,
  the twitter archive. Bunker Core without the corpus is a name; with it,
  it is a method. The August 11–September 7, 2026 export — the one that
  settled the block retraction — had not been filed in raw/ as of this
  pass, which is the practice's current operational gap.

## Conflicts in the record

**2026-09-13 — "Dan's own 2026 self-description" retracted one
remove.** The page's "Dan's own 2026 self-description" phrasing for
"Bifurcated Daily OS," "cold-data ledger," and "Epistemic Verification"
overstated the provenance by one remove. **The phrases "Bifurcated Daily
OS," "cold-data ledger," and "Epistemic Verification" entered the wiki
through a 2026-06-23 granular AI-agent pass that added them "verbatim" from
`Gemini-_18.md`** (dat:0710) — an AI-generated analysis document in Dan's
dox-md folder. His file, but an agent's words. The phrases are his files'
phrases, surfaced and canonized by an AI pass — not a self-description Dan
wrote about himself. This does not claim he never used them; it claims the
wiki's evidence for treating them as his runs through an AI analysis pass,
and the page now says so. The 2025-collapse period page carries the same
correction on its own connection claim.

**2026-09-13 — the six-project negative result (dat:0711).** The page
named six projects from `MAX_PRIME.md` and warned they had no independent
corpus verification. A corpus-wide grep confirmed the caveat: Instruction
Forge, VoidDiagnostic, Memory Forge, YAHLATRO, and the Fortress Protocol
appear nowhere else in the corpus — only on this page. Cognitive Foundry
appears here and once more on the exocortex page, which merely repeats the
claim. Bibi is additionally named in a max-framework note. No code, no
repository, no dated commit, no screenshot, no error log for any of the
six, anywhere in a corpus that preserves his chat.db forensics, his
Gumroad toolkit's existence, and his vibe-coded games. Why the negative
result is itself the finding: a claim that six pieces of software exist
would normally leave traces — repos, commits, READMEs, error logs,
screenshots — and none exist in a corpus that does preserve the chat.db
forensics, the Gumroad toolkit, and the vibe-coded games. The absence is
informative: it bounds the ecosystem to testimony about intent and scope,
exactly the bound the page draws for itself. Current standing:
[MEM]-tagged testimony about intent and scope, not evidence the software
exists as described.

**2026-09-13 — "one program or several" settled.** The page's former open
question — whether Bunker Core was one program or several — is settled by
Dan's own account in `MAX_PRIME.md` as several (dat:0711). What remains
fully open is "does each one actually run," as the page states.

**The epistemic-fortress framing stays hedged.** The forensic-inventory
document's "epistemic fortress" framing — the system built so that "no
one, not even a partner or a platform, can rewrite his narrative without
a SQL receipt" — is interpretive, AI-authored, and unprompted (not primary
self-report). It is treated as a plausible interpretive overlay, not
something Dan states about himself in the retained corpus. Its double edge
— the same architecture risks functioning as insulation, "a wall of text
that prevents external entry" — is kept with the frame.
## Assessment

On the record as of this pass, the claims on this page sort into five
tiers — this is the page's standing epistemic ledger:

- **Verified practice:** local chat.db forensics as editorial method; the
  iMessage Analysis Toolkit's February 2026 Gumroad launch.
- **AI-secondary testimony:** the "epistemic fortress" framing; the
  "Bifurcated Daily OS" / "cold-data ledger" phrasing (agent-pass
  provenance, dat:0710).
- **Testimony (his, via session):** the six-project build list (dat:0711).
- **Conclusion (new):** Bunker Core's completed form is the wiki — the
  function is built, the software list is a roadmap; counter-case stated.
- **Open:** whether any named tool runs; third-party involvement; activity
  past the 2026 documentation window.

## See also

- [[wiki/timeline/periods/2025-collapse]] — Bunker Core as one half of the two-track life
- [[wiki/mind/synthesis/ai-collaborative-analysis]] — agent tooling as the automation of the chat.db principle
- [[wiki/work/tech/vibe-coding-games]] — the same 2025–26 tool-building wave
- [[wiki/mind/concepts/exocortex]] — the general form; Bunker Core is the exocortex with a build target
- [[wiki/work/tech/max-framework/overview]] — the Max identity; Bibi's software-side counterpart
- [[wiki/mind/concepts/the-endpoint-requirement]] — the six projects as wants without endpoints
- [[wiki/mind/concepts/forensic-method]] — the practice as editorial method
- [[wiki/work/tech/imessage-tooling/overview]] — the extraction stack behind the verified practice
- [[wiki/mind/concepts/calibrated-confidence]] — why the page tiers its claims

## References

- raw/wiki/new-wiki/wikibrain/wiki/self/chats/gemini-18.md
- raw/self/dox-md/_Dan Frank's Digital Forensic Inventory .md — ⚠ Source reference unresolved — original target no longer exists in current corpus.
- raw/self/dox-md/_Openclaw Agent Setup and Data .md — ⚠ Source reference unresolved — original target no longer exists in current corpus.
- raw/self/dox-md/MAX_PRIME.md — ⚠ Source reference unresolved — original target no longer exists in current corpus.

### Gaps

Whether any of the six named projects runs as software remains fully
open — no code, repository, or dated commit anywhere. Any third-party
involvement, collaborators, or public release beyond the Gumroad toolkit
is undocumented. Whether the project is active past its 2026 documentation
window: the standing record lists Bunker Core among active builds, but
the activity is the wiki pipeline's, not the six tools'. The August
11–September 7 export's filing in raw/ is the immediate operational gap.

### Limits of record

The "Bifurcated Daily OS" / "cold-data ledger" / "Epistemic Verification"
phrasing is AI-pass provenance (dat:0710), not Dan's contemporaneous
self-description. The six-project list is `[MEM]`-tagged session memory
(dat:0711). The corpus snapshot is 2026-09-04.
