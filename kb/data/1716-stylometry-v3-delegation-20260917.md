+++
id         = "dat:1716-stylometry-v3-delegation-20260917"
layer      = 1
type       = "datum"
title      = "Stylometry v3 delegated to Claude Code; imessage-extract skill copied, 2026-09-17"
claim      = "Dan commissioned stylometry v3 (substance/contextual-meaning layer) and delegated the build to Claude Code: free stdlib lexical layer on the 30-min loop + LLM semantic layer only on v2 flags/digest, 2x2 joint read, seven limitations to solve, v2 byte-identical; exactly one custom Claude Code skill (imessage-extract) copied byte-exact."
cites      = ["src:sammy-chat-transcript-20260917-2030"]
confidence = "high"
importance = 4
tags       = ["stylometry", "claude-code", "delegation"]
created    = "2026-09-18"

[when]
date   = "2026-09-17"
+++

2026-09-17 20:05–20:27 EDT, main chat. Dan commissioned stylometry v3 — the substance/contextual-meaning layer on top of the working v2 (style) instrument — and delegated the build to Claude Code under his Claude carte blanche.

Architecture (Sammy's design, baked into the build prompt as constraints):
- Two layers, different cost profiles: a free stdlib lexical layer riding the 30-min loop (entity spikes, topic-mix divergence, discourse-move proxies: commissioning vs interrogating vs theorizing), and the LLM semantic layer firing only on v2 flags, alerts, and the daily digest. LLM-judging every half hour was rejected as expensive noise.
- The product is the 2×2 joint read: style-shift × semantic-shift. Honest confound recorded in-chat: topic is task-coupled, not state-coupled — three hours on wiki architecture spikes semantic divergence with his state flat. Either axis alone lies; the pair doesn't.
- Seven known limitations Claude must solve, not document — including the open v2 window-adjacency bug (v3 must not inherit it silently), the "never assert identity on a guess" registry discipline (from the 2026-09-16 Annie-vs-Alexis correction), and the calibration gate extended with a higher bar. v2 stays byte-identical throughout.

Skills copy (20:16–20:27): Dan asked to copy "all of my skills" from Claude Code; exactly one custom skill exists on his Claude Code side — imessage-extract — copied byte-exact and installed as Sammy's own skill. (Note: a workspace skill named imessage-extract also exists at ~/workspace/skills/imessage-extract/; the copy is the Claude-side custom.)

Status at window end: v3 build still cooking at 20:27:26. Open: install + adversarial review pass on delivery, same as v2.
