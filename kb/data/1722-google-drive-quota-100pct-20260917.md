+++
id         = "dat:1722-google-drive-quota-100pct-20260917"
layer      = 1
type       = "datum"
title      = "Google Drive at 100% quota, 2026-09-17: composition forensics"
claim      = "2026-09-17 20:54-20:56Z (main chat): Sammy's live Drive survey put Dan's Google Drive at exactly 100% - 2.199TB used of 2.199TB. Composition: Drive files only 1.19TB; ~1TB sits in Photos + Gmail. The quota is eaten by the 'My MacBook Pro' tree (1.79TB) and the XXX/MEDIA trees (~980GB combined); the Takeout folder is 3.3GB (a rounding error). Two files modified since Sep 15: the takeout zip part (~250MB) and a small system backup. Dan's read ('Thag took me from 95% full to 100') vs Sammy's: the Drive was already sitting at quota and the takeout export landing made it visible - 2.4GB cannot move the needle 5% (survey ~18h stale at the time). Sammy's hypothesis for the blind spot: ~1TB in Photos, possibly iPhone auto-sync to Google Photos. Operational consequence: Drive uploads (e.g. the zipped caakehorn-era wikibrain clone, dat:1720) are blocked until quota is freed."
cites      = ["src:sammy-chat-transcript-20260917-2340"]
confidence = "high"
reliability = "primary"
extraction = "Contemporaneous main-chat rows 2026-09-17T20:54:12Z-20:56:05Z, batch 20260917-2340. Sammy's Drive survey numbers, attributed; Dan's own 95%-to-100% statement verbatim."
importance = 3
created    = "2026-09-18"
+++

<!-- prose for humans; the frontmatter is for machines -->
