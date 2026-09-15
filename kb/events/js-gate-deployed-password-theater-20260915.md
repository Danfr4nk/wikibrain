+++
id         = "evt:js-gate-deployed-password-theater-20260915"
layer      = 2
type       = "event"
title      = "Wiki password gate deployed: JS theater, password pasted in chat, theater acknowledged"
claim      = "2026-09-14 23:20-23:34Z: Dan ordered and Sammy deployed a client-side JavaScript password prompt on the GitHub Pages reading surface (PR #78, merged). The gate is explicitly theater — Pages has no server-side auth, the repo stays public, direct asset URLs bypass it; password via WB_GATE_PASSWORD repo secret, only its SHA-256 digest embedded at build time. At 23:33Z he pasted the password value in chat; Sammy warned live that the transcript archive is byte-exact (raw/ is append-only and public), so the value is effectively public and must not be reused elsewhere. His stated threat model: 'one curious ex' (Kristin). The deploy had a breakage: 'Now nothing displays at all' — debugging followed in-thread. Extends evt:js-deploy-gate-ordered-20260914 (the order); this event records the deployment, the password-in-chat incident, and the theater status. THE PASSWORD VALUE IS NOT RECORDED IN THIS NODE — it lives byte-exact in the raw transcript per the standing archive rule; per the alignment rule (redact quietly, warn once to rotate), it is not reproduced here."
cites      = ["src:sammy-chat-transcript-20260915-0349"]
confidence = "high"
importance = 3
tags       = ["wiki", "gate", "deployment", "security", "2026"]
created    = "2026-09-15"

[when]
date   = "2026-09-14"
+++

<!-- prose for humans; the frontmatter is for machines -->

The gate is security theater by his explicit design — he knows it, Sammy knows it, and the node records that shared knowledge rather than pretending otherwise. The password incident is the interesting part: he pasted the secret into a channel he knows is archived byte-exact and public, was warned in the same turn, and the value now exists in the raw log forever. The node does not repeat it.
