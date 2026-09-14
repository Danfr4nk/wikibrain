+++
id         = "evt:2024-10-mom-chapter-13"
layer      = 2
type       = "event"
title      = "Suzanne Frank Chapter 13 bankruptcy filing (2024)"
cites      = ["dat:0040-quoted-bankruptcy-message-absent"]
confidence = "moderate"
importance = 4
tags       = ["legal", "money", "suzanne-frank"]
created    = "2026-09-09"

[when]
start  = "2024"
end    = "2026-06-22"

[[edges]]
rel         = "about"
target      = "ent:suzanne-frank"
strength    = "moderate"
asserted_by = "other"
note        = "The filing is hers; the audit-pasting and the pending-case messages are Dan's. Month (October 2024) rests on the operator's record, not on a held docket."
+++

## What happened

Suzanne Frank filed a **Chapter 13 voluntary bankruptcy petition** in 2024 —
case **#24-22285-GLT** (the "24" prefix marks a 2024 filing year; the month,
October 2024, rests on the operator's record, not on any docket held here).
The case was still pending in 2025–26: Dan-sent messages *"she got a letter
that looks like something about her bankruptcy"* (2025-09-16) and *"suz has
absolutely zero money until her bankruptcy settles"* (2026-05-13), and the
inbound *"I have to have a hearing"* (2026-06-22) — all held-corpus verified
([`dat:0040`](../data/0040-quoted-bankruptcy-message-absent.md)).

## Dated sequence

- **2024** (October per operator record) — Chapter 13 voluntary petition
  filed.
- **2026-03-30** — the "AI-generated case audit" is pasted into a message,
  opening **OFFICIAL DATA AUDIT: CASE #24-22285-GLT** and giving "Case Type:
  Chapter 13 Voluntary Petition." The audit is output from Dan's own
  configured assistant — the decorative unicode header matches the persona
  prompt he was pasting to other people on 2026-03-21 and 2026-03-24 — built
  from what he told the model. The case number is thereby first-party, in the
  message record, on a dated message ([`dat:0040`](../data/0040-quoted-bankruptcy-message-absent.md)).
- **2026-06-22** — inbound *"I have to have a hearing"*, verified verbatim
  ([`dat:0040`](../data/0040-quoted-bankruptcy-message-absent.md)).

## Evidence

- **For the event:** the pasted audit's case number (first-party in the
  record) plus two contemporaneous first-person messages eight months apart —
  the bankruptcy's existence and pendency do not depend on the audit
  ([`dat:0040`](../data/0040-quoted-bankruptcy-message-absent.md)).
- **Against / limits:** the audit's *figures* — scheduled liabilities, the
  thirteen-month price history, the court's "drop dead" provision — rest on
  the AI audit **alone**, a source the page itself graded secondary; nothing
  found touches them. The page's other bracing quote, *"I already AM
  bankrupt!"* (attributed November 2024), is absent corpus-wide: `bankrupt`
  occurs exactly twice in the held corpus, both in 2020 and both political
  ([`dat:0040`](../data/0040-quoted-bankruptcy-message-absent.md)).

## Contradictions

- The page's two-quote brace half-holds: the June 2026 hearing line is
  verified, the November 2024 line is absent. The case number survived as
  first-party; the audit's figures did not.

## Open questions

- PA docket lookup for 24-22285-GLT: schedules, trustee, plan status, and any
  disposition after the June 2026 hearing.
- The precise filing month (October per operator record; only the case-number
  year is held evidence).

## Cross-links

- [`ent:suzanne-frank`](../entities/suzanne-frank.md).
