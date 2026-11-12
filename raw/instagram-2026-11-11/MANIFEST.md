# Instagram — staging manifest (pulled 2026-11-11)
Account: @ihatedanfrank (personal). Profile snapshot pre-existing: profile.json (727 posts, 296 followers, 416 following).
- profile.json — profile snapshot (kept from first worker)
- posts-since-2025-08-24.json — 5 posts since 2025-08-24 (provider pagination ended; captions + metadata incl. media/thumbnail URLs; no media files downloaded — URLs recorded in JSON)
- followers.json — 271 followers, provider-complete (has_more=false; profile header says 296 — provider discrepancy noted)
- following.json — 409 following, provider-complete (profile header says 416 — provider discrepancy noted)
- saved-posts.json — 13 saved posts
- saved-collections.json — 2 saved collections
- own-stories-raw.json — active own stories: null (none active at pull time)
- own-stories-archive-raw.json — 20 archived stories
- Highlights: no CLI command exposes story highlights (only rename-highlight by known collection ID); not pulled — blocked (no highlight list endpoint)
