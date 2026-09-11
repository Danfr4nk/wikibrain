+++
id         = "dat:0070-cashapp-repayment-overdue-2026-09-11"
layer      = 1
type       = "datum"
title      = "Cash App repayment overdue notice, 2026-09-11"
claim      = "Cash App sent a 'Repayment Overdue' notice on 2026-09-11 08:38 EDT, preceded by a 'Repayment Reminder' on 2026-09-10. Amount, lender, and terms are unknown (email metadata only; bodies not pulled)."
cites      = ["src:sammy-scrape-20260911-1941"]
confidence = "high"
tags       = ["finance", "scrape"]
created    = "2026-09-11"

[when]
date   = "2026-09-11"
+++

<!-- prose for humans; the frontmatter is for machines -->
## Evidence

`raw/sammy/20260911-1941/gmail.json`, from Cash App:

- `Thu, 10 Sep 2026 13:04:20 +0000` — `Repayment Reminder`
- `Fri, 11 Sep 2026 12:38:17 +0000` (08:38 EDT) — `Repayment Overdue`

Triage metadata only; amount, lender/counterparty, and terms are not in the
captured metadata. The claim here is strictly that the notices arrived, not
what is owed.

## Reading

Escalation pattern (reminder → overdue within ~19 hours) is a genuine
financial-friction signal, and it lands in the same 24h window as an Apple
`Billing Problem` notice (dat:0071). Two independent payment-failure
signals in one batch is worth noting; the cause (missed payment vs.
expired card vs. something else) is unknown.

## Open questions

- Amount and counterparty: need the email bodies (not pulled this run).
- Resolution: unknown.

## Cross-links

- [`dat:0071-apple-billing-problem-2026-09-10`](0071-apple-billing-problem-2026-09-10.md)
- [`src:sammy-scrape-20260911-1941`](../../sources/sammy-scrape-20260911-1941.md)
