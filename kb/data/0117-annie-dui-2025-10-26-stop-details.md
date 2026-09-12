+++
id            = "dat:0117-annie-dui-2025-10-26-stop-details"
layer         = 1
type          = "datum"
title         = "Annie DUI stop 2025-10-26: page's detailed account sourced to its own unheld megadoc; docket number well-formed but not live-verified"
claim         = "The page's DUI section states: on **2025-10-26 at ~00:49**, Anne Louise Ulmer was stopped by PSP Troop B at Route 40 / N Mount Vernon Ave, Uniontown — high beams on, straddling lanes, turning into a closed Walgreens lot; strong odor of alcohol, watery eyes, 'Tito and Soda' admitted; only the HGN field test administered (broken ankle cited for skipping the rest); breath-test attempt failed; refused chemical testing after DL-26B was read verbatim. Charged under docket **MJ-14101-CR-0000631-2025**: DUI general impairment plus three summary counts. Complaint filed 2025-11-04; affidavit sworn 2025-11-11; preliminary hearing before the local MDJ; no further disposition on record. **Sourcing:** the docket number appears exactly once in the entire 2026-09-04 corpus — on this page. The page's source list includes raw/self/dox-md/ulmer_dui_megadoc.md, which is **not held** in this repository (dox-md/ absent from raw/). The docket format is consistent with a Fayette County magisterial-district criminal filing, but live verification against the PA UJS portal was not possible in this session (portal case search requires interactive use). Names of the troopers and MDJ, given on the page, are withheld from this node per the third-party-identifier policy. Filed as page-sourced testimony at moderate confidence for the event, low for the procedural details."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Section '## The DUI' (corpus__3.txt ~line 51700). Docket-string search over whole corpus: 1 hit (this page). raw/ inventory: no dox-md/ or dox-scan/ present; Facebook thread contents gitignored. MEMORY.md independently records Annie's DUI proceedings running into Jan 2026, consistent with a late-Oct 2025 stop, but carries no docket or stop details."
importance    = 4
tags          = ["annie-ulmer", "dui", "legal", "old-wiki", "unreplicated", "docket"]
created       = "2026-09-09"
+++

## Corroboration available

- MEMORY.md (operator-curated, independent of this page's export) records
  Annie's DUI proceedings extending into January 2026 — consistent with an
  Oct 2025 stop, though it carries no docket number or stop details.
- The docket prefix MJ-14101 is the magisterial-district numbering used in
  Fayette County, matching the Uniontown stop location. This is format
  plausibility, not verification.

## What is missing

The ulmer_dui_megadoc.md megadoc — the page's stated source for the
stop narrative — is not in this repository's raw/. No held message,
capture, or export corroborates any stop detail. If the docket number is
real, the PA UJS portal would confirm charges and disposition; that check
was not completed here and should be run before any downstream use of the
trooper names or the procedural claims.
