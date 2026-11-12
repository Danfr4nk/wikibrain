# MANIFEST — Google Drive gap-fill pull

- Source: Google Drive (connected account: Dan Frank), via hatch_gws_cli drive connector. Read-only pull; nothing modified, deleted, or shared.
- Pull date: 2026-11-11
- Staged by: reup worker (drive/docs/dropbox leg). NOT pushed to GitHub — coordinator pushes.

## Connection / quota state (actual, from `drive about get` on 2026-11-11)

- Status: connected.
- Storage quota limit: 2,199,023,255,552 bytes (2 TiB). Usage: 2,148,572,744,397 bytes — 97.7% full, ~50.5 GB free. The previously reported "full Drive" state is CONFIRMED as essentially full.
- Usage in Drive: 1,142,210,189,858 bytes; trash usage: 0.

## Inventory

- `inventory.json`: full Drive inventory — 109,095 items (13,965 folders, 95,130 files), each with id, name, mimeType, size, createdTime, modifiedTime, parents, resolved folder path, webViewLink.
- Total size of inventoried files: ~3,151 GB (includes files shared with the account, which is why it exceeds the 1.14 TB owned-usage figure).

## Held baseline comparison

- Held: raw/drive-sweep/20260911/ = 220 files / 333 MB (sweep of 2026-09-11); raw/takeout/ holds Takeout trees through Sep 2026.
- Gap criterion: modifiedTime after 2026-09-11. Result: 97 files (~65.0 GB) are new/modified since the sweep.
- None of the 57 pulled files shares a filename with the held drive-sweep set — all are genuinely new content, not new versions of swept files.
- Note: the Drive "Takeout" folder holds the 2026-09-17 Takeout zip set; its contents are already held in extracted form under raw/takeout/. The one post-cutoff Takeout zip at or under the size ceiling (takeout-20260917T023428Z-2-001.zip) was pulled anyway per the modified-time rule; the rest are in the oversize skip list.

## Pulled (files/)

- 57 files, 95,286,094 bytes (~95.3 MB), folder structure preserved. 0 failures.
- No permission/sharing download blocks were encountered in this pull (the historical unpullable-files blocker from INVENTORY-GAPS-2026-09-13 did NOT recur for the post-cutoff set).

## Skips

### Oversize (>35 MB each; 34 files, ~64.9 GB) — recorded, not pulled
- Takeout/GH013337-015.MP4 — 4,003,357,345 bytes (4003.4 MB), modified 2026-09-17
- Takeout/GH013337-003.MP4 — 4,003,357,345 bytes (4003.4 MB), modified 2026-09-17
- My MacBook Pro/LESBIAN TWIN/TakingItHardUpTheAss_s01_SergeantMiles_EmmaRose_2160p_h264.mp4 — 3,072,737,326 bytes (3072.7 MB), modified 2026-10-22
- Takeout/Dan Soder - Son of A Gary-005.mkv — 2,598,701,504 bytes (2598.7 MB), modified 2026-09-17
- Takeout/takeout-20260917T023428Z-7-001.zip — 2,540,912,061 bytes (2540.9 MB), modified 2026-09-17
- Takeout/Louis CK - Sincerely-007.mp4 — 2,346,671,158 bytes (2346.7 MB), modified 2026-09-17
- Takeout/Vivid Members Area  Vivid Video Tila Tequila Uncorked - Part 2-010.mp4 — 2,260,508,717 bytes (2260.5 MB), modified 2026-09-17
- Takeout/5b68fbe3b2aa7fe32e57a55e328feb55 - DoodStream-012.mp4 — 2,255,728,077 bytes (2255.7 MB), modified 2026-09-17
- Takeout/RPReplay_Final1593372005-007.mp4 — 2,254,742,918 bytes (2254.7 MB), modified 2026-09-17
- Takeout/xcite-we.live.together.29-012.mp4 — 2,228,422,300 bytes (2228.4 MB), modified 2026-09-17
- Takeout/bb_jett~Chaturbate~Couple~20230819212503-006.mp4 — 2,215,524,346 bytes (2215.5 MB), modified 2026-09-17
- Takeout/bb_jett~Chaturbate~Couple~20230819212503-011.mp4 — 2,215,524,346 bytes (2215.5 MB), modified 2026-09-17
- Takeout/takeout-20260917T023428Z-6-023.zip — 2,142,221,093 bytes (2142.2 MB), modified 2026-09-17
- Takeout/takeout-20260917T023428Z-5-003.zip — 2,133,931,516 bytes (2133.9 MB), modified 2026-09-17
- Takeout/takeout-20260917T023428Z-6-001.zip — 2,133,329,405 bytes (2133.3 MB), modified 2026-09-17
- Takeout/takeout-20260917T023428Z-6-024.zip — 2,128,353,663 bytes (2128.4 MB), modified 2026-09-17
- Takeout/takeout-20260917T023428Z-5-027.zip — 2,126,906,771 bytes (2126.9 MB), modified 2026-09-17
- Takeout/takeout-20260917T023428Z-8-012.zip — 2,126,850,089 bytes (2126.9 MB), modified 2026-09-17
- Takeout/takeout-20260917T023428Z-11-008.zip — 2,126,783,238 bytes (2126.8 MB), modified 2026-09-17
- Takeout/takeout-20260917T023428Z-12-010.zip — 2,126,581,064 bytes (2126.6 MB), modified 2026-09-17
- Takeout/takeout-20260917T023428Z-12-004.zip — 2,126,505,186 bytes (2126.5 MB), modified 2026-09-17
- Takeout/takeout-20260917T023428Z-6-012.zip — 2,126,433,108 bytes (2126.4 MB), modified 2026-09-17
- Takeout/takeout-20260917T023428Z-4-020.zip — 2,126,122,891 bytes (2126.1 MB), modified 2026-09-17
- Takeout/takeout-20260917T023428Z-13-014.zip — 2,084,545,872 bytes (2084.5 MB), modified 2026-09-17
- My MacBook Pro/CHATURBATE RECORDINGS/Emma+Rose+&+Lev+Lieben+-+POV (1).mp4 — 1,513,320,936 bytes (1513.3 MB), modified 2026-10-18
- ⊗◈• XXX •◈⊗  /6e5a8a6b0be1e5b496ba8aee94acedfa7.mp4 — 1,144,127,156 bytes (1144.1 MB), modified 2026-09-13
- Takeout/takeout-20260917T023428Z-3-001.zip — 929,842,984 bytes (929.8 MB), modified 2026-09-17
- ⊗◈• XXX •◈⊗  /Snowxbunny1228.mp4 — 853,813,458 bytes (853.8 MB), modified 2026-09-13
- ⊗◈• XXX •◈⊗  /80bcd4be9fc3ddeba7ad.mp4 — 798,625,165 bytes (798.6 MB), modified 2026-09-13
- ⊗◈• XXX •◈⊗  /xfr/onlyfans.2024.zariah.aura.and.ts.slayer.xxx.mp4 — 697,699,488 bytes (697.7 MB), modified 2026-10-19
- wiki project 2.zip — 668,959,467 bytes (669.0 MB), modified 2026-09-18
- ⊗◈• XXX •◈⊗  /8d96055d359d5a193da369a917cb0d4f8.mp4 — 340,489,329 bytes (340.5 MB), modified 2026-09-13
- Takeout/takeout-20260917T023428Z-1-001.zip — 248,942,971 bytes (248.9 MB), modified 2026-09-17
- ⊗◈• XXX •◈⊗  /3c19935a6a1ecbd5c2b071fba1801470c72f94ccef63b.mp4 — 215,321,798 bytes (215.3 MB), modified 2026-09-13

### Google-native files in the gap set (6) — not downloadable via Drive binary download
- 3 Google Docs — exported as text in the google-docs-2026-11-11 staging (see that MANIFEST).
- 2 Google Sheets (The Downballot's presidential election results & partisanship scores ("P.S.") by state, 1828-present, modified 2026-11-07; dan-sms-catalog, modified 2026-09-19) — no Sheets export leg in this task's scope; recorded here as a residual gap.
- 1 Google Apps Script (hook2piano-relay, modified 2026-09-18) — not exported; recorded as a residual gap.
