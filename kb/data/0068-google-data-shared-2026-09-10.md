+++
id         = "dat:0068-google-data-shared-2026-09-10"
layer      = 1
type       = "datum"
title      = "Google account data shared with Claude, Spotify, Animates on 2026-09-10"
claim      = "Google sent four account-data-sharing notices on 2026-09-10: grants to Claude (20:14 PDT), Spotify (20:47 PDT and again 21:03 PDT), and Animates (13:02 PDT)."
cites      = ["src:sammy-scrape-20260911-1941"]
confidence = "high"
tags       = ["google", "oauth", "scrape"]
created    = "2026-09-11"

[when]
date   = "2026-09-10"
+++

<!-- prose for humans; the frontmatter is for machines -->
## Evidence

`raw/sammy/20260911-1941/gmail.json`, all from Google (accounts notification sender)
:

| Time (PDT, 2026-09-10) | Subject |
|---|---|
| 13:02:27 | You shared some Google Account data with Animates |
| 20:14:03 | You shared some Google Account data with Claude |
| 20:47:29 | You shared some Google Account data with Spotify |
| 21:03:29 | You shared some Google Account data with Spotify |

Triage metadata only; granted scopes are not in the captured metadata.

## Reading

The Claude grant fits the documented heavy multi-model workflow (Claude on
ultracode for everything, per operator). The two Spotify grants 16 minutes
apart suggest a re-grant or a second scope, not a single flow — but that is
inference; the metadata does not distinguish. Animates is a third-party grant
with no further context in this batch.

## Open questions

- Scopes granted to each party: unknown.
- Whether the Claude grant relates to the same-day wiki-brain/RAWLOGS pipeline work: plausible, unverified.

## Cross-links

- [`src:sammy-scrape-20260911-1941`](../../sources/sammy-scrape-20260911-1941.md)
