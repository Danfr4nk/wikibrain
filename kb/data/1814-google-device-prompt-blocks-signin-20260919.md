+++
id         = "dat:1814-google-device-prompt-blocks-signin-20260919"
layer      = 1
type       = "datum"
title      = "Google device prompt blocks sign-in; the phone tap is the single gating constraint"
claim      = "2026-09-19T14:28 EDT browser task 9d2ff4e6 ('Sign in - Google Accounts', 5 steps) parked on 'Google device prompt blocks sign-in' — the phone tap. The same constraint already held the Claude burn-down since Fri 18:32 EDT (quota-burn-feeder 08:45 EDT: fresh batches staged on both accounts, Google won't let the sessions in without the tap; ihatedanfrank cutoff Sep 20). One constraint, two incidents: the burn and the claude.ai chat pull are both parked behind it."
cites      = ["src:sammy-chat-transcript-20260919-1835"]
confidence = "high"
reliability = "primary"
extraction = "browser-task:9d2ff4e6 parked_outcome; assistant msg c1d6d64d; batch 20260919-1835."
importance = 3
tags       = ["phone-tap", "burn-down", "signin"]
created    = "2026-09-19"

[when]
date   = "2026-09-19"
+++

<!-- prose for humans; the frontmatter is for machines -->
