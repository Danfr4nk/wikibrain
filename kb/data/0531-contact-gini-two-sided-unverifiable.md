+++
id         = "dat:0531-contact-gini-two-sided-unverifiable"
layer      = 1
type       = "datum"
title      = "Contact Gini two-sided (symmetric-architecture) analysis cannot be re-derived from the held corpus"
claim      = "The page's entire \"TWO-SIDED 2026-08-01\" section — recipient recovery by `bracket`/`nearest` imputation, the two-sided Gini range 0.9591–0.9636, the 2026 anchor year (inbound 4,046 / 18 handles / 0.8748; outbound 5,838 / 10 handles / 0.8119; two-sided 9,884 / 19 / 0.8928), outbound top-1 73.5% / top-5 99.2%, \"495 handles wrote to Dan, 303 ever got anything back,\" and the 2025/2026 two-sided rows of the per-year table — cannot be re-derived here. The held corpus's 99,360 outbound rows carry **zero** contact handles (sender is uniformly the operator himself), and the analysis's input export, `raw/self/message-csv/MASTER_MESSAGES_DB_DUMP.csv` (184,359 rows), is not held anywhere on this machine (searched `raw/`, `corpus/`, and the home tree). Additionally the held corpus's 2026 volumes (10,459 inbound, 16,217 outbound, window to 2026-09-07) differ substantially from the MASTER_DUMP's (4,046 inbound, 5,838 outbound, window to ~2026-06-06), so the exports are genuinely different and neither can adjudicate the other's figures."
cites      = ["src:imessage-corpus-2026"]
confidence = "high"
extraction = "Checked 2026-09-09: all 99,360 rows of corpus/messages.csv with is_from_me == '1' were scanned for a non-empty, non-self sender value — zero found. The MASTER_DUMP filename was searched across ~/workspace/wikitest/raw, ~/workspace/wikitest/corpus and ~ with find -iname — no hits. The page's two-sided figures were read from corpus__3.txt line 21083 (the \"TWO-SIDED 2026-08-01\" section) and are relayed here as the prior wiki's own analysis, not verified. This is an honest gap: the analysis is checkable in principle (the method description is detailed) but its input is not held."
importance = 4
tags       = ["corpus", "contact-gini", "attribution", "gap", "measurement"]
created    = "2026-09-09"

[when]
start = "2026-08-01"
end   = "2026-09-09"
+++

## What this means for the inbound replication

[`dat:0528`](0528-contact-gini-inbound-replication-2026-09-09.md) and
[`dat:0529`](0529-contact-gini-per-year-replication.md) verify the
received-side figures thoroughly. The two-sided figures are a separate claim
about a separate measurement, and this repository holds no instrument that
reaches them. The held corpus is *more* one-sided than the MASTER_DUMP (the page
says 2026 outbound is 99.8% attributed there; here it is 0%), which makes the
imputation work the only bridge — and its input is missing.

## What remains checkable in the future

If `MASTER_MESSAGES_DB_DUMP.csv` (or any export with attributed outbound rows)
is ever deposited in `raw/`, the falsifiable claims to re-run are: the
`bracket`@30min 96.6% held-out accuracy, the imputation bias table (true vs
imputed Gini on held-out rows), the 2026 anchor (4,046/18 in, 5,838/10 out),
and the "303 of 495 handles got a reply" funnel figure. The page's method
section is complete enough that a re-derivation would be a genuine replication,
not a re-assertion. Until then the symmetric-architecture conclusion is the
prior wiki's analysis, honestly relayed.
