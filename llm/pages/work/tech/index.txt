---
domain: work
page_type: summary
status: stable
date_created: 2026-06-23
date_modified: 2026-09-13
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
---

# Tech Index

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

## Projects
- [[wiki/work/tech/grok-build/overview]] (Grok subagents, iMessage responder, portal TUI, export scripts; subagent mode for wiki tasks; OpenRouter routing)
- [[wiki/work/tech/max-framework/overview]] (MAX adversarial output; CATO forensic exocortex; Grok hybrid; tables for architecture/use cases/sources)
- [[wiki/work/tech/imessage-tooling/overview]] (chat.db extraction, Electron app, py exporters, csv to wiki ingest; SQL examples, 97k volume baseline; Full Disk)
- [[wiki/work/tech/mneme/overview]] (April 2026 product spec for a five-layer personal-context extraction platform — the same "extract once, stop re-deriving" thesis this wiki itself runs on)
- [[wiki/work/tech/danmodel]] (a working ML pipeline — not just a spec — that extracts 39,378 stimulus-response pairs from Dan's own texts and tries to generate + blind-test an AI clone of his voice; whether the blind eval ever completed is unknown)

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
| MAX Framework | Dual engine (CATO input forensic + MAX output adversarial) for robust reasoning | CATO_BOOTLOADER, MAX_PRIME, CATO_conflict, context-core |

## Notes
Project documentation for future coding context. Raw/tech/ subdirs empty — data from dox-md (MAX_PRIME/CATO), log, ingest-queue, bin/, home tooling (imessage-extractor/, messages-exporter/, danwiki_portal.py). See also [[wiki/self/message-corpora/master-message-dump]], [[wiki/mind/synthesis/ai-collaborative-analysis]], [[wiki/self/facebook]], [[wiki/self/context-core]].

- [[wiki/work/tech/vibe-coding-games]] — the Matter.js browser-game line built by AI direction (whoano, trickrun, jumprun, basketball_sandbox).
- [[wiki/work/tech/ai-video-essays]] — planning-stage project: long-form video essays on AI for non-technical audiences, reverse-engineered from Some More News's structural format; no script or video published.


