# Facebook — THE REUP gap-fill staging manifest

- **Source:** Facebook CLI connector (`facebook-cli`), read-only pull
- **Pull date:** 2026-11-11 (America/New_York)
- **Account:** Dan Frank — fb_user_id 580995252, vanity https://facebook.com/ihatedanfrank (identified via `facebook-cli me`, not guessed)
- **Connector status:** CONNECTED — `me` returned name + fb_user_id; all read commands below succeeded except Pages (see Blocked)
- **Coverage window (gap):** everything dated after 2026-09-08 (the held DYI export date) through 2026-11-11, plus current undated snapshots
- **Held baseline (not overwritten):** raw/facebook/ = 4,404 files, 232.5 MB — two DYI export sets pulled 2026-09-08 (export-20260908-a: 2,927 files; export-20260908-b: 1,475 files) incl. posts/media + gdocs conversions, no messages tree; raw/facebook-threads/MANIFEST.json is an index only; ross-thompson/ Messenger thread held separately

## What was pulled

| File | Collection | Count | Notes |
|---|---|---|---|
| posts.json | Own timeline posts with created_at after 2026-09-08 | 2 | 2026-10-15 photo post; 2026-11-04 video/reel post |
| post-details.json | Full `post read` + comments + reactions for the 2 gap posts | 2 posts | Both: 0 comments, 0 reactions |
| timeline-all-pulled.json | Timeline pages pulled to establish the gap | 160 posts (8 pages × 20) | Page max-dates descend monotonically (2026-11 → 2023 → 2022 → 2020 → 2019 → 2018 → 2014), so any post after 2026-09-08 could only appear on page 1; further pages are pre-gap history already covered by the held export |
| profile.json | `me` + `profile info` snapshot | 1 | Current profile: work, education, life events, hometown (city level), vanity URL |
| friends.json | `me friends` full enumeration, cursor-paged to exhaustion | 557 friends (29 pages; final page empty, no cursor) | Current snapshot; friend_id + name + profile_url per friend |
| groups.json | `groups search` membership list, cursor-paged to exhaustion | 6 groups | Current membership snapshot |
| events.json | `events search --scope connected`, cursor-paged to exhaustion | 390 events | Full connected-events snapshot as exposed (start times 2007-01-20 → 2026-01-31); **none start on/after 2026-09-09** |
| raw-pages/events-gap-window.json | `events search --scope connected` 2026-09-09 → 2026-11-11 | 0 | Gap window empty |
| raw-pages/events-forward-window.json | `events search --scope connected` 2026-09-09 → 2027-12-31 | 0 | No upcoming connected events either |
| saved.json | `saved list`, all pages the CLI exposes | 14 items retrieved | Facebook summary total_count is 31; per the connector doc Facebook leaves out some saved content it won't show, and no paging cursor was returned — 14 is everything exposed |
| saved-collections.json | `saved collections list` | 2 collections | Current snapshot |
| pages.json | `pages list` | — | BLOCKED, see below; file holds the error record |
| raw-pages/ | Every individual CLI page response, as returned | 64 page files | friends ×29, timeline ×8, groups ×2, events-connected ×20, events-gap-window ×1, events-forward-window ×1, saved ×1, saved-collections ×1, pages-managed ×1 |
| _pull-log.json | Call log + per-collection results from the pull driver | 63 calls, 0 failures | Sequential calls, ~1s pace; no 429 / rate-limit encountered |

## Not available / not pulled

- **Photos as a separate collection:** the CLI exposes no photos endpoint; photo posts appear inside the timeline with media metadata (media_type, media_ocr, thumbnail_url). The 2026-10-15 gap post is a photo post and is captured in posts.json / post-details.json.
- **Dan's own comments on other people's posts / group posts by Dan:** no CLI command lists the account's own comments or filters group posts by author; `groups posts` enumerates other members' content, which is outside this pull's scope. Group membership itself is captured in groups.json.
- **Feed (newsfeed / friends feed):** other people's posts, not Dan's own record — not pulled.
- **Messages:** no messages tree exists in the Facebook CLI; Messenger is a separate REUP source (and the held export likewise had no messages tree).

## Blocked

- **Managed Pages (`pages list` and everything under it):** returned `PROFESSIONAL_CONSENT_REQUIRED` — "Professional consent is required. The rejected Page request did not run." Retried once as a direct foreground command; same result. Per the connector doc this needs Dan to approve professional consent in Meta Business Manager; reconnecting does not fix it. No Page posts/insights were pulled.

## Method notes

- Read-only throughout: no posts, comments, likes, saves, or edits were made.
- Paging followed each collection's returned cursor until none remained (friends, groups, events, saved) or until the timeline's descending page max-dates made further pages provably pre-gap.
- Files are the CLI's JSON output archived as-is (light envelope fields added: source, pull_date, counts). Nothing was summarized away.
