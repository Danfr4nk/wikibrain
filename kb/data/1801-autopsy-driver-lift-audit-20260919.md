+++
id         = "dat:1801-autopsy-driver-lift-audit-20260919"
layer      = 1
type       = "datum"
title      = "AUTOPSY driver-lift audit 2026-09-19: no measured lift exists yet (work-0103 verdict: not yet adjudicable)"
claim      = "inference_audit work-0103 verdict (2026-09-19): NO MEASURED DRIVER-LIFT EXISTS YET — zero driver-lift rows have been recorded anywhere in the wiki corpus, kb, raw transcripts, playlist analysis files, or any exported AUTOPSY data as of 2026-09-19. The instrument exists and is live (commissioned 2026-09-14 18:54 EDT, shipped 18:56; 16-driver CATA WHAT DID IT? grid; Drivers view = lift = P(keep | driver checked) / base keep rate, min 2 checks per driver, early leaders labeled 'suspects, not verdicts'; data lives in browser localStorage key autopsy.v1 with JSON export/import — no export has ever been recorded). MusicTrainer week 1 (30 Discover Weekly tracks, seed locked 17:52 EDT 2026-09-14; model locked 8 KEEP predictions = 26.7% predicted base keep rate; REMEDY p=0.39 highest-confidence keep, Rain p=0.038 highest-confidence drop) closes 2026-09-20 with a scoring reminder armed — all 30 rows still pending as of this audit. The 2026-09-11 taste forensics profile (energy floor ~0.70 with median 0.836/Q1 0.704; three BPM rooms 125-145 house / 165+ dnb / sub-100 halftime over 146/19/15 of 232 tracks; dark valence median 0.322; mid-fame popularity median 43; voice-as-texture: 96.1% of crate with no foregrounded vocal, 47.4% chop/texture segment; no artist/label loyalty: 321 artists and 162 labels, max 6 tracks each) retains its standing as a HIGH-confidence post-hoc aggregate (n=232, direct computation) — NOT contradicted, and NOT adjudicated. The musictrainer-autopsy entry's promise ('the Drivers view's lift ranking will either confirm the forensics or find them wanting') is a future measurement, not a completed adjudication. Confirmation or contradiction awaits the first lift numbers; the adjudication re-runs at week-1 close."
cites      = ["src:taste-forensics-20260911", "src:sammy-chat-transcript-20260914-1940"]
confidence = "high"
reliability = "primary"
extraction = "Corpus-wide negative verification 2026-09-19: grep of wiki/, kb/, raw/sammy/2026091[45]* for driver-lift/lift-row content (hits only the UI concept, zero measured rows); week-1 table in wiki/work/tech/projects/musictrainer-autopsy.md all 30 rows pending; lift formula read from ~/workspace/autopsy/js/app.js lines 208-222; file search of ~/workspace/your_files, ~/workspace/user/files and the workspace for autopsy exports — none; PLAYLIST_ANALYSIS.md v1+v2 re-read for the forensics numbers quoted."
importance = 4
tags       = ["autopsy", "taste-forensics", "inference-audit", "work-0103"]
created    = "2026-09-19"

[when]
date   = "2026-09-19"
+++

<!-- prose for humans; the frontmatter is for machines -->
