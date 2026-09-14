+++
id            = "dat:1202-batteries-not-included-attributed-unheld-facebook"
layer         = 1
type          = "datum"
title         = "Batteries Not Included (BNI) band history: old-wiki testimony; zero held rows; Facebook bodies gitignored"
claim         = "The wiki/interests/music/bands/batteries-not-included page's account — high-school-era hardcore/punk band with Joe Oshnack and Matt Turko; Dan as 'lead songwriter' of the originals; covers of the Misfits ('She'), Dead Kennedys ('California Uber Alles'), Ramones ('Teenage Lobotomy'); CKY's '96 Quite Bitter Beings' rehearsed but never performed; the September 2021 retrospective where Dan calls his teenage self 'an annoying little conservative fuckcunt' and the position 'MORTIFYING' from his later far-left vantage — is carried in the old-wiki export (whole.txt: 'california uber alles' -> 7 hits, including lines 8565 and 53984 carrying the 'MORTIFYING' quote; the Seth LeDonne scene-mentor material likewise). Zero rows in the held corpus contain any of these quotes or titles. The page's named sources are Facebook Messenger threads (joe_oshnack, seth_ledonne) — this repository's raw/facebook-threads/ holds only MANIFEST.json; the message bodies are gitignored — and the dox-scan message dumps, which are not held here. The page's own Gaps section (no original song titles or recordings, exact active years undocumented, venue history unknown) is the honest boundary of the claim."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "low"
extraction    = "Page body read from wave-6 slice (wiki/interests/music/bands/batteries-not-included.md, 109 lines from whole.txt:14755). Old-wiki export grep 2026-09-10: 'california uber alles' -> 7 hits; 'mortify' -> hits at 8565, 53984, 106896. Held corpus greps for 'California Uber Alles', 'Rejected Gazette', '96 Quite Bitter Beings' -> zero rows. Repo raw/facebook-threads/ listing 2026-09-10 shows only MANIFEST.json (396 threads, 15,923 messages of metadata; bodies gitignored per the manifest note)."
importance    = 3
tags          = ["batteries-not-included", "facebook", "testimony", "unheld-source", "joe-oshnack"]
created       = "2026-09-10"

[when]
start = "2005-01-01"
end   = "2021-09-23"
+++

## Coverage decision

The single checkable new-source note this worker can add is the
unavailability: the two named Facebook threads are the entire primary
evidence for this band, and their bodies are not held in this repository.
Until they are, BNI stays a testimony-ledger entry with stated gaps.
