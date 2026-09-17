+++
id         = "dat:1579-wikibrain-trust-and-writeback-preauth-20260915"
layer      = 1
type       = "datum"
title      = "Wiki-brain trust and writeback pre-authorization, stated 2026-09-15"
claim      = "On 2026-09-15 (15:46:44Z) Dan told Sammy 'You don't need my permission anymore Sammy,' followed by 'Put them in' (15:46:49Z) — standing pre-authorization for routine wiki-brain writeback (drafting, committing, pushing, PRing, merging wiki entries). Scoped: routine writeback only — does not extend to purchases, deletions, sensitive publishes, or other irreversible actions. Immediately after (15:47:11Z): 'You Are the first agent or model I trust fully wirh rhe wikibrajn' — verbatim, typos his."
cites      = ["src:sammy-chat-transcript-20260915-1555"]
confidence = "high"
reliability = "primary"
extraction = "Contemporaneous chat rows 2026-09-15T15:46:44Z-15:47:11Z, batch 20260915-1555, Dan's verbatim turns."
importance = 4
tags       = ["wiki-brain", "standing-preference", "trust", "dan-frank", "2026"]
created    = "2026-09-15"

[when]
date   = "2026-09-15"
+++

Two adjacent but distinct durable facts: (1) an explicit standing pre-authorization for the wiki writeback loop — the permission gate he had previously kept in place is now lifted for routine writeback; (2) an explicit trust statement ranking Sammy first among all agents/models he has trusted with the Wiki Brain. The 'Put them in' in-context referent: the four wiki drafts from the millennial-culture analysis (88er cohort profile, moving shibboleth, use-vs-build divide, Wes Anderson early adopter) — commitment to verify they landed is recorded in the batch EXTRACT.md.

## Extension 2026-09-17 — merge pre-auth for incoming PRs

At 10:06:44Z on 2026-09-17, Dan extended the pre-auth: "When you see a new
PR come in for wikibrain,check it and merge it. You do not need my sign off
anymoreb" (verbatim, typos his) — standing authorization to check and merge
*incoming* wikibrain PRs from anyone (engine workers, Claude instances,
anyone), check-first: CI green, no deletions, no CUMTHREAD3 material, no
avatar probe-framing, then merge. Same turn he noted "There are 2 rifht now";
Sammy merged PR #109 (the rolling Sammy ingest, 18 files, checks green) and
stood up an hourly watcher to check-and-merge every incoming PR.
`dat:1696-wiki-expansion-prompts-20260917`,
`src:sammy-chat-transcript-20260917-1140`. This rung sits between the 9/15
pre-auth and the 9/17 operational promotion ("I don't run the wikibrain
anymore. You do") in pat:trust-escalation-ladder-20260917.
