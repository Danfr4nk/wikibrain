+++
id            = "dat:1112-texting-deviance-audit-complaint-record-verified"
layer         = 1
type          = "datum"
title         = "Texting Deviance Audit: the six recipient length-complaints verify verbatim in the held corpus; the measurements come from an unheld export"
claim         = "The audit page's complaint table verifies **verbatim** in the held corpus, from four distinct counterparties over seven years. **2019-01-28 18:57 UTC** (13:57 EST) — `+17249204125`: *\"Dan I can't read these texts and respond rn my head is literally killing me\"* (the page labels this a PA contact). **2025-09-01 06:30 UTC** (02:30 EDT) — Tom's handle `+17249987341`: *\"I cant read any of that\"*. **2025-09-06 11:28 UTC** (07:28 EDT) — Kristin's handle `+13307038747`: *\"fucking 9 unread messages so many texts I don't delete\"* (in a longer message about a fresh-slate habit). **2025-12-08 04:38 UTC** (Dec 7 23:38 EST — one day earlier in Eastern than the page's dating) — same Kristin handle: *\"Summarize it\"*. **2026-02-19 16:31 UTC** (11:31 EST) — Annie's handle `+12124702449`: *\"Do you not understand how overwhelming it is getting paragraph after paragraph. I have expressed this to you before Dan like fuck\"*. **2026-08-08 02:23 UTC** (Aug 7 22:23 EDT — one day earlier in Eastern) — same Annie handle: *\"I can't ready these paragraphs upon paragraphs\"*. The two de-escalation requests verify too — *\"Please. Dan. Calm down.\"* (**2026-02-22** 02:17 UTC, Annie) and *\"Calm down. Please.\"* (**2026-03-10** 23:37 UTC, Annie) — plus an earlier *\"Dan please try to calm down. Please...\"* (**2017-07-02**, handle `+17244346811`). The page's claim that the complaint *predates* the 2025 escalation by six years is confirmed by the 2019 row. The audit's headline measurements — 15.03 words/message in 2026, Flesch-Kincaid 4.00, TTR 0.0509 vs 0.0544, the 3.05× words-per-turn ratio, the 11.2% / 44.3% STACKED-ESSAY mode, the 54.7%-vs-93.8% answer-rate cost curve — are computed from `imessage_export_deep_20260813.csv` (183,787 parsed rows), which is **not held** in this repo's raw/ tree, so the numbers are page-attributed testimony, not re-derived."
cites         = ["src:imessage-corpus-2026", "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page body read directly from corpus__3.txt line 26431 (353 lines); corpus page and old-wiki export are text-identical. Each quoted complaint was located by exact-phrase search in the held 192,140-row corpus/messages.csv; timestamps above are the CSV's UTC date_sent values with EDT/EST conversion in parentheses. Sender identities (PA contact, Tom, Kristin, Annie) are the page's attributions, taken as stated — the handles match the page's names (e.g. +12124702449 is the Annie handle). Two UTC-vs-Eastern boundary notes: the Dec 2025 'Summarize it' and Aug 2026 'paragraphs upon paragraphs' rows land one day earlier in Eastern than the page's printed dates. The 2017-07-02 'calm down' message is additional held-corpus texture the page did not include. The measurement tables, turn taxonomy, and cost curve were not re-computed — the deep export is unheld and the held corpus is a different (larger, 192,140-row) extract, so recomputation would not reproduce the page's instrument."
importance    = 4
tags          = ["texting-deviance", "complaints", "quote-verification", "timestamp", "old-wiki"]
created       = "2026-09-09"

[when]
start = "2019-01-28"
end   = "2026-08-07"
+++

## What the check confirms

- All six complaint quotations are verbatim in the held corpus, from the
  handles and in the order the page claims. The register is consistent
  across four unrelated counterparties: not *\"you talk too much\"* but
  *\"I can't read this\"* — a claim about processing load.
- The 2019-01-28 row confirms the page's most load-bearing temporal claim:
  the complaint predates the measured 2025 escalation by six years, so the
  behaviour was legible to recipients before it was statistically extreme.

## What it does not confirm

- The measurements themselves (words/turn ratios, FK grades, TTR, the
  answer-rate curve, the 2020–2024 trough the page flags as its own key
  gap) are unverifiable here: the deep export is not on disk.
- The page's nine-complaint / four-person headline count rests on the
  page's own tally; the held corpus confirms six tabled complaints plus the
  2017 de-escalation text. Whether untyped irritation is wider is the
  page's own open gap.
- Sender→person attribution for the 2019-01-28 PA contact is the page's;
  the handle carries no display name in the held CSV.

## Cross-references

- None; no existing node covers the texting-devediance audit or its
  complaint record.
