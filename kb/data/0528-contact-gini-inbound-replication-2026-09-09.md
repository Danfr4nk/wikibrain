+++
id         = "dat:0528-contact-gini-inbound-replication-2026-09-09"
layer      = 1
type       = "datum"
title      = "Contact Gini headline figure replicated on the independent held corpus: 0.9556 inbound over 498 handles"
claim      = "An independent recomputation of the contact-Gini metric from the held authoritative corpus (`corpus/messages.csv`, 192,140 rows, distinct from the page's MASTER_MESSAGES_DB_DUMP export) returns an **inbound Gini of 0.9556 over 498 unique contact handles** (92,780 inbound rows), against the page's 0.9601 over 496 handles (MASTER_DUMP) and its bootloader-section figure of 0.961 over 498 identifiers. The handle count matches the page's 498 exactly; the coefficient agrees to three hundredths. Top-1 share is 33.6% and top-5 share 68.0% against the page's 29.6% / 70.1%."
cites      = ["src:imessage-corpus-2026"]
confidence = "high"
extraction = "Computed 2026-09-09 with Python csv/zoneinfo directly against corpus/messages.csv (192,140 rows). Inbound defined as is_from_me != '1'; contact handle = sender field; all 92,780 inbound rows carry a handle. Gini via the standard sorted-formulation; year attribution converted from UTC to America/New_York. This is a first-party measurement on a different export than the page's — MASTER_MESSAGES_DB_DUMP.csv (184,359 rows) is not held on this machine (searched raw/, corpus/ and home), so exact row-level agreement was never expected. No phone handles are reproduced here; only counts."
importance = 5
tags       = ["corpus", "verification", "contact-gini", "measurement"]
created    = "2026-09-09"
+++

## What the check confirms

The page's headline number is a real property of the data, not an artefact of
the MASTER_DUMP export. Two independent exports (the page's MASTER_DUMP and the
held messages.csv) produce the same handle count (498) and a Gini in the same
0.95–0.96 band on the received side. The per-year replication
([`dat:0529`](0529-contact-gini-per-year-replication.md)) and the per-node
volume spot-check ([`dat:0530`](0530-contact-gini-node-volumes-spot-check.md))
confirm the convergence in detail.

## What it does not confirm

- The precise 0.9601 figure (it comes from the MASTER_DUMP export, unheld).
- The 0.961 "bootloader v2.1" figure over 111,378 attributed messages out of a
  181,585-message corpus — the held corpus holds 92,780 attributed inbound rows
  out of 192,140 total; the held lifetime inbound Gini is 0.9556, three
  hundredths lower.
- Anything two-sided: all 99,360 outbound rows in the held corpus carry no
  contact handle, so the page's symmetric-architecture claims are re-derivation
  from a different export. See [`dat:0531`](0531-contact-gini-two-sided-unverifiable.md).

## Note on what "matches exactly"

The held corpus has 498 inbound handles and the page's bootloader section says
498 distinct contact identifiers — but the two exports differ in total rows by
~8,000, so the handle-count agreement could be partly coincidental. What is not
coincidental is the coefficient agreement: two Gini coefficients computed over
different exports landing within 0.005 of each other, with per-year tables
replicating row-for-row in most years, is strong evidence the metric is stable.
