+++
id         = "dat:0071-apple-billing-problem-2026-09-10"
layer      = 1
type       = "datum"
title      = "Apple billing problem notice, 2026-09-10"
claim      = "Apple sent a 'Billing Problem' notice on 2026-09-10 21:14 UTC. The affected service or subscription is unknown (email metadata only; body not pulled)."
cites      = ["src:sammy-scrape-20260911-1941"]
confidence = "high"
tags       = ["finance", "apple", "scrape"]
created    = "2026-09-11"

[when]
date   = "2026-09-10"
+++

<!-- prose for humans; the frontmatter is for machines -->
## Evidence

`raw/sammy/20260911-1941/gmail.json`, from Apple,
`Thu, 10 Sep 2026 21:14:24 +0000`, subject `Billing Problem`. Triage
metadata only; the affected service/subscription and amount are unknown.

## Reading

Second payment-friction signal in the batch alongside the Cash App
repayment escalation (dat:0070). Co-occurrence in the same 24h window is
noted; a common cause is not established.

## Open questions

- Which subscription/service: need the email body (not pulled this run).

## Cross-links

- [`dat:0070-cashapp-repayment-overdue-2026-09-11`](0070-cashapp-repayment-overdue-2026-09-11.md)
- [`src:sammy-scrape-20260911-1941`](../../sources/sammy-scrape-20260911-1941.md)
