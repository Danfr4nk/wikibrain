# MANIFEST — Dropbox gap-fill pull

- Source: Dropbox (connected account: Dan Frank), via the dropbox connector (official MCP server). Read-only; nothing modified, moved, or deleted.
- Pull date: 2026-11-11
- Staged by: reup worker (drive/docs/dropbox leg). NOT pushed to GitHub — coordinator pushes.

## Connection

- Status: connected (authenticated). First connection was already in place; no additional write scope was needed for this read-only pull.

## Inventory

- `inventory.json`: full recursive inventory — 217 entries (212 files, 5 folders), 266,633,011 bytes (~266.6 MB) total.
- Top-level content: SammyBridge/ (161 files), SR GREENS - no contour/ (23), TO PRINT/ (22), plus loose files (Shephards Rock Bk.pdf, posh.m4a, Get Started with Dropbox.pdf, GREENS NO CONTOUR.zip, and the zips below).
- Held baseline: nothing from Dropbox was held, so the entire account is gap.

## Pulled (files/)

- 209 files, 63,649,474 bytes (~63.6 MB), folder structure preserved. 0 failures.

## Skips — oversize (>35 MB; 3 files, not pulled)

- imessage-extractor-all-new.zip — 86,055,095 bytes (86.1 MB)
- imessage-extract2.zip — 70,917,142 bytes (70.9 MB)
- SammyBridge/delta-20261105T030629Z-238073.json — 46,011,300 bytes (46.0 MB)
