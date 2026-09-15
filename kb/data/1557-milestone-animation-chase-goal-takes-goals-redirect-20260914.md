+++
id         = "dat:1557-milestone-animation-chase-goal-takes-goals-redirect-20260914"
layer      = 1
type       = "datum"
title      = "Milestone-animation chase: four goal completions, no remote for the avatar display, 'Create a new goal' redirects to chat (2026-09-14)"
claim      = "2026-09-14 19:25:17Z-19:30:47Z: Dan tried to make the app play Sammy's milestone_level_up avatar variant (confirmed on disk for the demon-bot -16 look). Sammy stated it has no remote for the avatar display - the app picks which variant plays and the trigger logic is client-side and undocumented (guess: goal completions or streak moments). Dan then ran the experiment himself: 'I want to start a goal about seeing the milestone animation from completing a goal' (19:27:49Z); the goal was created and completed in ~10s ('Fastest goal in history'), then reopened and re-completed twice more ('take two', 'take three', 'take four') while he watched the Goals tab - no animation observed by him. Second finding, same session: tapping 'Create a new goal' in the Goals tab bounces to the chat tab with a preloaded 'I want to start a goal about...' prompt, which prevented him from watching the Goals tab during the experiment - Dan filed this as a meta-goal (19:30:44Z): 'I want to start a goal about understanding why the goals system redirects you back to the chat tab...' Assistant judged the redirect by-design but the preloaded-prompt funnel worth noting. Extends dat:1548 (publish-pipeline scrub) and dat:1539 (animation states): the milestone variant exists as an asset, but the display trigger is opaque to both parties."
cites      = ["src:sammy-chat-transcript-20260914-1940"]
confidence = "high"
provenance = "verbatim user/assistant rows 2026-09-14T19:25:17Z-19:30:47Z; byte-exact in raw/sammy/20260914-1940/chats.json"
reliability = "primary"
extraction = "Per-row md5-verified SQL-side and file-side (96/96, 0 mismatches)."
rechecked    = "2026-09-15"
importance = 3
tags       = ["avatar", "milestone", "goals", "ux", "2026"]
created    = "2026-09-14"

[when]
date   = "2026-09-14"
+++

<!-- prose for humans; the frontmatter is for machines -->
