+++
id         = "evt:gate-password-deploy-white-screen-20260915"
layer      = 2
type       = "event"
title      = "Gate password deployed (PR #78); deployment 404s, then blank white screen — unresolved"
claim      = "2026-09-14 22:21–22:23 EDT (2026-09-15 02:21–02:23Z) — Dan pasted the gate password in chat (archived byte-exact in raw/; treated as public) and had Sammy set the WB_GATE_PASSWORD secret and merge PR #78 (JS password gate for the Pages reading surface, explicitly theatrical — repo and direct assets stay public). 00:00:03Z — Dan reported the deploy-failed email; the Libby article 404'd until the Pages build finished. 02:23:10Z — 'Now nothing displays at all'; investigation thread followed; at 03:53Z (per the record) Dan reported the site shows a blank white screen after the gate deployment — a fresh visitor should see a black password prompt, so white implies the overlay failed to render. The white-screen bug is unresolved at window close. The password is treated as public because it is in the byte-exact chat log; it is never reproduced here and must never be reused anywhere real."
cites      = ["src:sammy-chat-transcript-20260915-0340"]
confidence = "high"
importance = 4
tags       = ["gate", "deploy", "bug", "wikibrain"]
created    = "2026-09-15"

[when]
date   = "2026-09-14"
+++

<!-- prose for humans; the frontmatter is for machines -->
