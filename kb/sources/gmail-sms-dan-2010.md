+++
id          = "src:gmail-sms-dan-2010"
layer       = 0
type        = "source"
title       = "Gmail SMS archive: Suzanne and Dan (2010-01 → 2010-08)"
source_type = "message-corpus"
acquired    = "2026-09-19"
provenance  = "Read-only Gmail API export (users.messages.get, format=full) of the 'SMS with …' threads in suzfrank915@gmail.com. 317 messages, one row each, chronological; Gmail message/thread IDs and raw From headers retained for chain of custody. Integrity recorded in gmail-sms-dan-2010.manifest.json."
reliability = "primary"
confidence  = "high"
sensitive   = true
importance  = 5
created     = "2026-09-19"
tags        = ["corpus", "sms", "dan"]

[when]
start = "2010-01"
end   = "2010-08"
+++

## What this is

Every SMS to/from Dan Frank archived in Suzanne's Gmail: 317 messages,
2010-01-09 → 2010-08-15, across six threads — four "SMS with Dan" threads on
724-208-3475, one AIM-gateway thread (265060, handle iamdanfrank), one
anonymous thread signed "(Dan)". Sender attribution is established from the
gateway From header in every case (zero unknowns); only unmistakable gateway
boilerplate was stripped, and the stripping is documented in the manifest.

## Coverage note

The Gmail SMS sync covers January–August 2010 only; Gmail holds no SMS for
anyone outside that window. This predates the authoritative Messages corpus
(2011-03 → 2026-09), so it is unique coverage, not a redundant slice — but it
is per-counterparty by construction. Per CORPUS_POLICY.md, message-derived
claims from a partial extract are shelved; whether this corpus's unique-window
status changes that is for the repo owner to rule.

## Why it is marked sensitive

It contains real phone numbers and the private words of Suzanne Frank and her
son, who did not choose to be published. The raw transcript is gitignored and
excluded from every built artifact. Derived layers may cite it; they may not
reproduce it.

Governing rules: `CORPUS_POLICY.md`.
