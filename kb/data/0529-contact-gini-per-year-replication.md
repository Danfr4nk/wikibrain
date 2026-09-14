+++
id         = "dat:0529-contact-gini-per-year-replication"
layer      = 1
type       = "datum"
title      = "Contact Gini per-year table replicates row-for-row on the held corpus, except 2025–2026"
claim      = "Recomputing the page's per-year inbound concentration table from the held corpus reproduces three years **exactly** and five more within a few rows: 2015 (6,488 / 11 / 0.9019 / 98.6% top-1 — exact), 2023 (452 / 32 / 0.7460 / 47.6% — exact), 2024 (2,198 / 48 / 0.8633 / 34.0% — exact), 2016–2020 within 0.004 of the page's Gini values (2016: 10,209 vs 10,207 msgs, 0.9082 vs 0.9047; 2017: 8,815 vs 8,786, 0.9252 vs 0.9268; 2018: 20,295 vs 20,277, 0.9353 vs 0.9356; 2019: 10,628 vs 10,612, 0.9019 vs 0.9024; 2020: 3,161 vs 3,155, 0.8405 vs 0.8409). **2025 and 2026 diverge substantially**: the page's 2025 row (33,214 msgs / 70 handles / 0.9576 / 49.9%) vs the held inbound (19,947 / 71 / 0.9537 / 49.7%); the page's 2026 row (9,884 / 19 / 0.8928 / 70.8%) vs the held inbound (10,459 / 23 / 0.9046 / 73.2%). The page's 2026 row is the two-sided figure (matches its own two-sided section: 9,884 msgs, 19 handles, Gini 0.8928), not an inbound row. The held corpus's inbound window begins 2015-11-12 (no inbound messages before 2015), corroborating the page's \"pre-2015 unmeasurable\" and its decision to treat early years as below the evidence floor; 2021 holds 128 inbound messages over 3 handles (Gini 0.4635) and 2022 holds zero inbound rows."
cites      = ["src:imessage-corpus-2026"]
confidence = "high"
extraction = "Computed 2026-09-09 with Python csv/zoneinfo against corpus/messages.csv. Inbound = is_from_me != '1' with a non-empty sender handle; date_sent parsed as UTC and converted to America/New_York before year attribution (the page's export may have used different tz handling, which plausibly explains the small 2016–2020 row deltas; the timestamps are local-Eastern in the old wiki vs UTC in the held corpus, per the repository's convention). Full computed table: 2015 6488/11/0.9019/98.6; 2016 10209/25/0.9082/60.3; 2017 8815/65/0.9252/84.1; 2018 20295/146/0.9353/55.3; 2019 10628/189/0.9019/42.7; 2020 3161/108/0.8405/25.4; 2021 128/3/0.4635/71.9; 2023 452/32/0.7460/47.6; 2024 2198/48/0.8633/34.0; 2025 19947/71/0.9537/49.7; 2026 10459/23/0.9046/73.2. 2011–2014 and 2022: no inbound rows."
importance = 4
tags       = ["corpus", "verification", "contact-gini", "measurement"]
created    = "2026-09-09"

[when]
start = "2015"
end   = "2026"
+++

## What the check confirms

For 2015–2024 the page's table is a faithful report of the data. Three years
are byte-identical; the rest differ by handfuls of rows — exactly what two
exports of the same iMessage archive with slightly different attribution rules
should produce. The page's methodological notes ("2015 is an export-coverage
artefact, not a social world"; the 200-message floor; "the concentration is not
a constant, it tightens under load") survive the replication intact: 2025 is
still the highest-concentration full year (0.9537 inbound here) and 2020 the
lowest (0.8405).

## What diverges, and what it means

- **2025 volume.** The page's 33,214 vs the held inbound 19,947 is too large for
  tz handling. The page's per-year table mixes inbound rows for 2015–2024 with a
  **two-sided** 2026 row (it matches the two-sided section verbatim), so the 2025
  row's 33,214 may likewise include outbound — or the MASTER_DUMP simply
  attributes more 2025 rows. The Gini figures (0.9576 vs 0.9537) and top-1 shares
  (49.9% vs 49.7%) agree closely regardless, so the concentration claim for 2025
  is unaffected; only the message count is export-dependent.
- **2026.** The held corpus shows 10,459 inbound / 16,217 outbound in 2026
  (window to 2026-09-07) vs the page's 4,046 inbound / 5,838 outbound
  (MASTER_DUMP, window to ~2026-06-06). Different windows and different
  attribution — the exports genuinely differ, not the measurement. The page's
  two-sided 2026 figures cannot be re-derived here: [`dat:0531`](0531-contact-gini-two-sided-unverifiable.md).
- **2021/2022.** The held corpus has 128 inbound messages in 2021 and zero in
  2022, consistent with the page's "below the 200-message floor entirely."
