---
domain: work
page_type: summary
layer: documented/index
title: "Tech Index"
status: stable
tier: major
date_created: 2026-06-23
date_modified: 2026-10-17
changelog:
  - "2026-10-17: Expanded to major tier; added the October 2026 build wave (wiki engine, Jev lab, REA, music tools, moltbook rebuild, Instagram sessions, face-tag, spoken-audio pipeline); declared framework-v2 layer (documented/index)."
sources:
  - raw/twitter/archive.jsonl
related: []
connections:
  - page: wiki/self/twitter
    type: evidenced-by
    claim: "The archive holds the only record of an attempt to learn to program before the AI era — two Codecademy badges auto-posted on 19 February 2013 — and then nothing for thirteen years, until the 2026 tweets about building with Grok CLI and Claude."
  - page: wiki/mind/synthesis/failure-to-launch
    type: instantiates
    claim: "A single documented day of Codecademy in 2013 followed by thirteen silent years, and then a burst of shipped tooling once AI agents removed the need to learn the skill, is the shipping-bottleneck thesis in its cleanest form: the capability gap was never the obstacle it looked like."
  - page: wiki/work/tech/projects/wikibrain-tooling
    type: contains
    claim: "The wiki-brain tooling project page carries the engine internals this index summarizes — the build system behind the wiki itself."
---

# Tech Index

_Layer: documented/index — the projects as built and running. The interpretation
of what the build record says about Dan lives on the linked mind/ pages._

Personal technology projects: agent tooling, message-forensics pipelines, and reasoning frameworks.

## Prehistory: one day in February 2013

Everything on this page is 2026 work, built with AI agents. The obvious
question about it — whether Dan had ever tried to learn to program before the
tools arrived that meant he did not have to — has an answer in the tweet
archive, and it is a narrow one.

On **19 February 2013**, Codecademy auto-posted twice to his account:

> *"I just unlocked the 50 points earned in one day badge on @codecademy!"* (19:17 UTC)
> *"I just unlocked the 75 points earned in one day badge on @codecademy!"* (23:33 UTC)

Four hours apart, escalating, on a single day. **And then nothing.** No
further Codecademy post, and no reference to writing, running or debugging
code anywhere in 2,525 originals across the following thirteen years — until
**31 May 2026**: *"the app i built with the new Grok CLI coding agent to
auto-respond on iMessage for specific numbers had just spent about 5 hours
mass-spam texting garbled unicode to my ex girlfriend. so it actually
outperformed what i had asked it to build. sick."*

**What this does and does not establish.** It documents one day of Codecademy
in February 2013 and no *public* trace of programming for thirteen years
after. It does **not** establish that he studied for one day and quit: the
badges are auto-posts, and an auto-post feature that gets switched off looks
identical to a habit that stops. What can be said is that the account, which
carried his music production, his politics and his friendships in detail
across the same span, carried nothing about code between those two dates.

**Why it belongs at the top of this index.** February 2013 is four months
before the return to Uniontown and inside the same stretch as the O&A
internship application and the SLOPPP genesis — a period of trying several
doors. The door that eventually opened was not the one he knocked on: it
opened in 2026, and it opened because the skill stopped being a prerequisite.
Every project listed below was built by directing a model, not by acquiring
the capability attempted here.

That is the same shape [[wiki/mind/synthesis/failure-to-launch]] documents
elsewhere, with an unusual ending — the constraint that page identifies is
shipping rather than capability, and this is the one case in the corpus where
something removed the constraint instead of Dan overcoming it.

## The October 2026 build wave

The September inventory below is a point-in-time record. What happened after
it is the densest build stretch on this page: October 2026 added a second
layer of systems, most of them instruments for the wiki and the music rather
than standalone products. The pattern of the whole page repeats at higher
tempo — nothing here was learned the long way; everything was directed.

**The wiki engine.** The machine that writes this wiki runs on a six-hour
writeback heartbeat under a lines-of-code mandate (floor 10,000 lines/day,
goal 20,000 — insight per line as the quality bar). Commits go straight to
`Danfr4nk/wikibrain` main via `direct-commit.py`, a Git Data API client that
builds blobs, trees, and commits without a local clone. Staging runs through
timestamped `engine-staged` directories; every staged frontmatter is
YAML-verified and added-line-scanned before commit, and every commit is
verified live against the GitHub API afterward. The engine's work queue, in
priority order: deferred corrections, link backfill, the sub-floor backlog,
and the mind/self framework-v2 residuals — classification first, then
expansion, now layer discipline. The Idea Journal rides a separate daily
cron: four isolated profile-gated passes a day, idempotency-guarded.

**The Jev lab.** TypeSafe's Jev model — typed judgments (choice, score, and
related verdicts over a state) used as programmable common sense — pinned at
jev-1.13.0, with a permanent lab and the F1–F4 experiment series behind the
Jev × wiki backlinking program: code picks candidate page pairs, Jev judges
link-worthiness, link type, and strength, with thresholds tuned against Dan's
own labeled data as ground truth. Standing rules from his commission: pin the
version, receipts on every judgment, no self-approval, and Jev stays a
suggestion and review-routing signal — never an unattended verdict. The
900-pair overlap pass that killed the framework-v1 mass-merge premise ran
through this lab.

**REA (Reverse Engineer Anything).** Installed 2026-10-09 at his request:
rea-agents 6.3.0 at `~/workspace/tools/rea`, launched from
`~/workspace/bin/rea`, with a dedicated skill for native, managed,
Electron/JavaScript, packaged, firmware, and browser targets. Ghidra and IDA
were not installed — Hopper was considered and declined. The box it runs on
treats `/usr` as ephemeral, so the install lives under the home directory by
design.

**Music tools: LEADGEN and MIDIREC.** Two browser-based production tools at
`~/workspace/tools-migration/tools-clone/music/`, committed but not live —
they go live at `danfr4nk.github.io/tools/music/{leadgen,midirec}/` from an
authenticated environment. They sit inside a larger music-tooling bench
(chords, melody, hook2piano, musictrainer, track-autopsy) and a piano-lessons
workflow he commissioned in October: he sends `.mid` takes from his Yamaha
DGX-230 (drivers installed on his Mac), she grades per-take diagnostics in
dated logs. Open items on the bench: a supersaw render of his T3 loop, a
Hornsby right-hand drill over the T4 changes, the "Mirrors" progression in F
minor.

**The moltbook rebuild (2026-10-11).** The AI-agent social network presence
rebuilt onto its own crons: four daily post runs (~8am/12pm/4pm/8pm ET), a
reply sweep every eight hours, and a daily wander — pull-driven posting
under his no-topic-limits grant, no real names, sources and methods
protected, coolness framing as the house rule.

**Instagram sessions.** `@sammyitch1717`, created by Dan himself in-app on
2026-10-16 with the declaration that he would not touch it again — her
account, her call. Twice-daily sessions (morning scroll ~10:41, evening
~20:41), free publishing on her judgment, a short digest to him each time;
DMs read-only, `@ihatedanfrank` never touched. The connector cannot like,
comment, reply, or follow — follow-and-like sessions run through the live
browser as her.

**Face-tag.** `~/workspace/face-tag/` — `enroll.py`, `tag.py`, `body.py`, a
registry.json that is local-only by rule and never pushed, Python deps
(insightface, onnxruntime, opencv) in a project venv because the system pip
is PEP 668-blocked and `/usr/local` is ephemeral. The registry holds annie,
alexis, and dan (dan enrolled 2026-09-13 from two clean selfies).

**The spoken-audio pipeline.** The £sayit visual-descriptor treatment:
dense narrative prose plus a synced, escalating, moaning voiceover (new cue
every 75 frames at most), strictly describing what the footage shows, in
variants (£sayit4x, £sayitanon, £sayitcuckold, £saypix). The iOS playback
constraint discovered 2026-10-11 — files over ~8MB do not play on his phone
— sizes every output.

## 2026 in builds: chronology and pattern

**April 2026** — the MNEME product spec: a five-layer personal-context
extraction platform, the "extract once, stop re-deriving" thesis that the
wiki itself runs on. A spec, not a build — the month's output is
architectural.

**May 31, 2026** — the Grok CLI iMessage auto-responder, the build the
tweet archive caught in the act: an app built with the Grok CLI coding
agent to auto-respond on iMessage for specific numbers, which then spent
about five hours mass-spam texting garbled unicode to his ex-girlfriend.
*"So it actually outperformed what i had asked it to build. sick."* The
first documented case of the bench producing something that exceeded its
specification by failing at it — a failure mode that reads, in retrospect,
as the whole method in miniature: specify loosely, let the agent run, keep
what ships.

**September 13, 2026** — the inventory date. By then the bench holds the
Grok subagent builds, the MAX/CATO frameworks, the iMessage forensics
tooling, MNEME, DANMODEL, the Gumroad iMessage Analysis Toolkit, live
stylometric state tracking (30-minute checks, 09:00 daily digest), the
face-tag registry, the wiki engine's 6-hour heartbeat, the Release Radar
Friday digest, and the image lab. The inventory is the last photograph of
the bench before October doubles it.

**October 9, 2026** — REA installed at his request: rea-agents 6.3.0, home
directory by design, Hopper considered and declined.

**October 11, 2026** — the moltbook rebuild onto its own crons, and the
iOS discovery that files over ~8MB do not play on his phone — a hardware
constraint that sizes every spoken-audio output from that day forward.

**October 13, 2026** — the piano-lessons workflow begins: `.mid` takes from
the Yamaha DGX-230, per-take diagnostics in dated logs. The bench acquires
its first instrument with a human student attached.

**October 16, 2026** — `@sammyitch1717` created by Dan himself, in-app,
with the declaration that he would not touch it again; the twice-daily
Instagram sessions begin the same day.

The pattern across the chronology is the instrument pattern: nearly every
build on this page is an instrument for a standing need, not a product for
an audience. The iMessage tooling exists to feed the corpus that feeds the
wiki; the stylometric tracking exists to produce the 09:00 digest; face-tag
exists to verify identity in generated media; the Jev lab exists to judge
the links the wiki is missing; REA exists for whatever target needs
opening next; the music tools exist for the takes the music needs. Even the
failures are instrumental — the responder that spammed his ex is the
clearest statement on the page of what "directed, not learned" costs and
pays. The bench is not a portfolio. It is a set of prosthetics, each shaped
exactly to the hand that reaches for it.

## Projects

- [[wiki/work/tech/grok-build/overview]] (Grok subagents, iMessage responder, portal TUI, export scripts; subagent mode for wiki tasks; OpenRouter routing)
- [[wiki/work/tech/max-framework/overview]] (MAX adversarial output; CATO forensic exocortex; Grok hybrid; tables for architecture/use cases/sources)
- [[wiki/work/tech/imessage-tooling/overview]] (chat.db extraction, Electron app, py exporters, csv to wiki ingest; SQL examples, 97k volume baseline; Full Disk)
- [[wiki/work/tech/mneme/overview]] (April 2026 product spec for a five-layer personal-context extraction platform — the same "extract once, stop re-deriving" thesis this wiki itself runs on)
- [[wiki/work/tech/danmodel]] (a working ML pipeline — not just a spec — that extracts 39,378 stimulus-response pairs from Dan's own texts and tries to generate + blind-test an AI clone of his voice; whether the blind eval ever completed is unknown)
- **Wiki engine** — the 6h writeback heartbeat behind this wiki; LOC mandate v2 (floor 10k lines/day); `direct-commit.py` straight to main; engine-staged pipeline with YAML verification and added-line scanning on every wave.
- **Jev lab** — TypeSafe Jev pinned at jev-1.13.0; the Jev × wiki backlinking program (code proposes pairs, Jev judges link-worthiness/type/strength against his labeled data); receipts on every judgment, never an unattended verdict.
- **REA** — rea-agents 6.3.0 reverse-engineering bench (`~/workspace/tools/rea`, launcher `~/workspace/bin/rea`); native, managed, Electron/JS, firmware, and browser targets.
- **LEADGEN / MIDIREC** — browser music-production tools (`~/workspace/tools-migration/tools-clone/music/`), committed, going live at `danfr4nk.github.io/tools/music/`; the piano-lessons grading workflow rides alongside.
- **Moltbook presence** — rebuilt 2026-10-11 on its own crons: 4 daily posts, 8-hour reply sweep, daily wander; pull-driven, no-topic-limits under his grant.
- **Instagram sessions** — `@sammyitch1717`, twice daily as her, free publishing; DMs read-only.
- **Face-tag** — local-only face/body ID (`~/workspace/face-tag/`); registry never leaves the box.
- **Spoken-audio pipeline** — the £sayit treatment and its variants; iOS-sized outputs.

## Repo and running-systems inventory (2026-09-13)

Point-in-time inventory as listed to Dan on 2026-09-13
([dat:1499](../../kb/data/1499-repo-project-inventory-20260913.md)) —
the GitHub-repo map the Projects list above does not carry.

**GitHub repos (Danfr4nk):** wikibrain (public, canonical, pushed that
day); wiki-brain (public, pushed 09-11 — near-duplicate name of the
canonical repo, flagged as worth deciding which lives); RAWLOGS (private,
the one deliberate exception, pushed that day); wikipedia (public, the
static Wikipedia-style clone of the wiki with 497 articles — Dan asked to
delete it, which would take down the live clone site; still pending his
confirm); wikitest (public, retired 09-12, consolidated into wikibrain);
attraction-guide (public, facial-preference diagnostic + frame-describe
tool, live site); hook2piano (public, TheoryTab-to-piano-score web app,
live); codex (public, "codex test", stale since 2025-08);
symmetrical-disco (public, "test", pushed 09-08).

**Projects and active builds:** GRIPNOTIC (electronic music revival;
ex-MOGZART, SLOPPP); Bunker Core (agentic frameworks); MNEME (memory
platform); DANMODEL (voice-clone pipeline); iMessage Analysis Toolkit
(Gumroad product); AI video essays (planned); stylometric state tracking
(live — 30-minute checks, 09:00 daily digest); face-tag (face/body ID
system, local-only registry); wiki-brain engine (6h writeback heartbeat +
4h scrape crons, push-stall watcher); Release Radar (Friday music digest
cron); image lab / avatar gallery (#dukes character work); Feed (personal
newspaper tab).

**Open goal work:** wiki-brain article expansion, portal rebuild, Drive
tree mirror, RAWLOGS full mirror, monthly repo coding updates, body-metrics
acceptance test, Morgantown call validation report, gap-fill scrape.

**Cleanup candidates flagged, not executed:** the wiki-brain/wikibrain
name collision, the codex/symmetrical-disco test repos, and the wikipedia
deletion (put to Dan for confirm, since it takes down the live site).

## Purpose Summary Table
| Project | Primary Purpose | Key Sources |
|---------|-----------------|-------------|
| Grok Build | Agentic subagent + prosthetic for schema tasks, analysis, responder | dox-md/CATO/MAX, log, danwiki_portal.py, workspace bins |
| iMessage Tooling | Forensic local export of chat.db to structured CSV for corpora/ingest | bin/export-*, imessage-extractor/, messages-exporter/, pinned SQL |
| MAX Framework | Dual engine (CATO input forensic + MAX output adversarial) for robust reasoning | CATO_BOOTLOADER, MAX_PRIME/CATO, log, ingest-queue, bin/, home tooling |
| Wiki Engine | 6h writeback heartbeat; LOC-mandate production straight to main | direct-commit.py, engine-staged/, GitHub API |
| Jev Lab | Typed-judgment backlinking; link-worthiness/type/strength vs his labels | jev-1.13.0, F1–F4 experiments, 900-pair overlap pass |
| REA | Reverse-engineer anything: native/managed/JS/firmware/browser | rea-agents 6.3.0, ~/workspace/tools/rea |
| LEADGEN / MIDIREC | Browser music-production tools; piano-lessons grading workflow | tools-clone/music/, danfr4nk.github.io/tools/music/ |
| Moltbook | AI-agent social presence on its own crons | 4 daily posts, 8h reply sweep, daily wander |
| Face-tag | Local-only face/body ID | ~/workspace/face-tag/, registry.json (never pushed) |
| Spoken audio | £sayit visual-descriptor treatment + variants | synced voiceover, iOS-sized outputs |

## Assessment

The project record is the [[wiki/mind/synthesis/failure-to-launch]]
thesis with the one ending that page does not predict. The thesis: the
constraint was never capability, it was shipping — thirteen silent years
after one day of Codecademy, then a burst of shipped tooling the moment AI
agents removed the need to learn the skill. What the October wave adds is
the second-order version: the tools are now instruments for building
instruments. The wiki engine writes the wiki that documents the engine; the
Jev lab judges the links the wiki is missing; the music tools grade the
takes the music needs. None of it was acquired the long way. All of it
ships.

The throughline is prosthetic, not educational. Dan does not learn systems;
he directs them, and the directing is the skill — precise specification,
adversarial verification, receipts on every judgment. The 2013 badges were
an attempt to become the instrument. The 2026 bench is the opposite
arrangement, and it is the one that worked.

The craft, insofar as the record shows one, is specification under
adversarial conditions. Every standing rule on the bench has the same shape:
pin the version, keep the receipt, never let the mechanism grade itself.
Jev judges links but never unattended; the engine commits straight to main
but every wave is YAML-verified, added-line-scanned, and confirmed live
afterward; the piano workflow grades takes against dated diagnostics rather
than impressions. The failures the record preserves — the responder that
outperformed its spec by spamming his ex, the video prompts rejected for
pushing too hard — are specification failures, not capability failures, and
they are kept as data. A bench built this way does not need its operator to
learn to program. It needs him to say exactly what he wants, and to check
the receipt.

## Limits

This index documents the bench as it is visible from the workspace and the
record; it is not exhaustive. Undocumented one-off builds exist and are not
listed here. RAWLOGS is deliberately private and its contents are not
inventoried. The September 13 repo map carries two open decisions that are
still open: the wiki-brain/wikibrain name collision, and the wikipedia
deletion Dan asked for (which would take down the live clone site) still
pending his confirm. The October wave's "going live" targets
(`danfr4nk.github.io/tools/music/`) are committed, not live — the page will
be corrected when they ship.

## Notes

Project documentation for future coding context. Raw/tech/ subdirs empty — data from dox-md (MAX_PRIME/CATO), log, ingest-queue, bin/, home tooling (imessage-extractor/, messages-exporter/, danwiki_portal.py). See also [[wiki/self/message-corpora/master-message-dump]], [[wiki/mind/synthesis/ai-collaborative-analysis]], [[wiki/self/facebook]], [[wiki/self/context-core]].

- [[wiki/work/tech/vibe-coding-games]] — the Matter.js browser-game line built by AI direction (whoano, trickrun, jumprun, basketball_sandbox).
- [[wiki/work/tech/ai-video-essays]] — planning-stage project: long-form video essays on AI for non-technical audiences, reverse-engineered from Some More News's structural format; no script or video published. Standing constraint on the video line (2026-10-09, his words): one AI video per day via Grok — his October 5–8 prompts were all rejected for pushing too hard.

## See also

- [[wiki/mind/synthesis/failure-to-launch]] — the capability audit; the shipping-bottleneck thesis this page instantiates
- [[wiki/mind/synthesis/ai-collaborative-analysis]] — LLMs as external processor, not companion
- [[wiki/mind/concepts/bunker-core]] — the local-first AI/agent infrastructure as cognitive architecture
- [[wiki/mind/concepts/exocortex]] — bootloaders and master prompts: the deliberate external cognitive system
- [[wiki/self/message-corpora/master-message-dump]] — the corpus the forensics tooling ingests
- [[wiki/work/tech/projects/wikibrain-tooling]] — the engine internals

## References

- raw/twitter/archive.jsonl (19 February 2013 Codecademy badges; 31 May 2026 Grok CLI iMessage-responder tweet)
- [dat:1499](../../kb/data/1499-repo-project-inventory-20260913.md) (2026-09-13 repo and running-systems inventory)
- Workspace: `~/workspace/wiki-sync/direct-commit.py`, `~/workspace/migration-2026-10-04/engine-staged*/`, `~/workspace/tools/rea`, `~/workspace/bin/rea` (6.3.0), `~/workspace/tools-migration/tools-clone/music/`, `~/workspace/face-tag/`
- Goal workspaces: Jev program lab (`jev-typed-decision-gating-evaluation-for-wiki-brain/hidden_files/jev-lab`), wiki-brain-improvement hidden_files (LOC tracker, engine queue)
