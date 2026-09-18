+++
id         = "dat:1715-hue-systems-final-20260917"
layer      = 1
type       = "datum"
title      = "Hue message-flash and affect-gauge systems, final state 2026-09-17"
claim      = "Final Hue state: B = simplified green/purple double-blink flash per reply (every chat); A = purple-baseline/blue-talking/lime-engagement(x^3)/pink-goon gauge on per-message operation with 15-min decay and catch-up backstop; B action states amber/off/red; sammy-tools repo created; side-chat scope failure root-caused with prevention checklist."
cites      = ["src:sammy-chat-transcript-20260917-2030"]
confidence = "high"
importance = 4
tags       = ["hue", "home-lab", "sammy-tools"]
created    = "2026-09-18"

[when]
date   = "2026-09-17"
+++

2026-09-17, main chat, built across 17:34–19:30 EDT. Final state of the two Hue systems (5 lamps A–E; A/B/C/D in Dan's Room, E in Living room; Philips Hue via Remote API v2, cloud round-trip ~0.45s/command):

1. Message flash (light B only). Simplified 18:17 to his words (verbatim): "just turn the light on and off twice: turn it on once and it's green, turn it off once, turn it on once and it's purple, turn it off once." No overlap logic, no 10-second variant. Fires via ~/workspace/hue-message-flash.py backgrounded with every Sammy text reply, in every chat. Restores B's prior action state from /tmp/hue-b-rest.json afterward.

2. Affect gauge (light A). PURPLE (#7F00FF) idle baseline → BLUE (#0000FF) when talking → blue-to-lime (#32CD32) spectrum for genuine engagement → hot pink (#FF1493) goon override (wins over everything). 18:21 retune: conversation barely nudges it (x^3 power curve holds chatter near blue); real engagement spikes hard to lime. Per-message operation from 18:39 (his call — the 1-min cron cost ~1–3M tokens/day; per-message piggybacks the reply turn at ~150 tokens marginal). 15-min decay cron kept (silence → purple) + manual override pickup via ~/workspace/hue-affect-override.json. Catch-up backstop: every flash logged to ~/workspace/hue-flash.log; the 15-min cron compares against newest Sammy reply in every chat and fires one catch-up flash if any reply went unflashed (nothing slips longer than 15 min).

3. B action states: amber = working (long background work), off = idle, red = alert (needs his attention), set via ~/workspace/hue-action.py. Flashes interrupt and restore.

Build arc, same day: chaos strobe on all 5 lamps tripped the Hue cloud rate limit (~33 req/sec) — the ceiling is the cloud API, not the bridge; the overload script was rewritten around a token bucket instead of speed. Grouped-light vs room ID silent failure caught and fixed 17:39. Danfr4nk/sammy-tools (private) created 18:26–18:30 with hue-lights/ as first resident; standing rule: auto-file new small tools there, no credentials in repo.

Structural failure + fix (18:32–18:38): the flash wasn't firing in side chats — the rule was global but the implementation was per-conversation habit. Root causes recorded in ~/AGENTS.md: (1) scope of "every time" never nailed down; (2) discipline over mechanism; (3) never acceptance-tested across scope; (4) shared memory ≠ per-conversation attention. Prevention checklist: scope every "always" rule explicitly; ask "is there a mechanism, or am I the mechanism?"; record scope + mechanism + failure mode; verify across full scope after building.

19:25: "No light systems active" — root cause was Dan on a different Wi-Fi network with no cell service; the Hue app needs internet to display state. The systems had been firing the whole time via the cloud.
