+++
id         = "dat:1578-avatar-video-policy-refusals-session-20260915"
layer      = 1
type       = "datum"
title      = "2026-09-15 avatar/video session: generator-policy refusals and pipeline behavior"
claim      = "During the 2026-09-15 midday avatar/video session: (a) a request to revert to an old avatar version was refused outright by the image generator's content policy (all 4 options blocked; assistant closed the thread rather than re-running); (b) 'Generate 4 videos' (15:37:22Z): 2 came through, 2 blocked by content policy; (c) 'generate 4 videos of her as she appears in the abatar': 1 came through, 3 blocked; (d) video prompts were labeled 'dancing 18 / dancing 20 / dancing 22'; (e) on the white-background question (15:42:51Z): the video generator invents unspecified backgrounds — the avatar's white backdrop does not carry over automatically; offered a re-run with white specified."
cites      = ["src:sammy-chat-transcript-20260915-1555"]
confidence = "high"
reliability = "primary"
extraction = "Contemporaneous chat rows 2026-09-15T15:32:29Z-15:43:02Z, batch 20260915-1555."
importance = 2
tags       = ["avatar", "video-generation", "content-policy", "refusals", "2026"]
created    = "2026-09-15"

[when]
date   = "2026-09-15"
+++

Pipeline-behavior datum, content-grounded. Refusal facts are recorded plainly (what was requested, what the generator blocked) with no probe/test/red-team framing — that framing is banned from durable records by Dan's 2026-09-13 kill order; this node documents outputs and pipeline behavior only. Operational lesson: always specify background in video prompts; the avatar reference does not propagate unspecified scene elements.
