+++
id         = "dat:0067-github-pat-added-2026-09-11"
layer      = 1
type       = "datum"
title      = "GitHub personal access token (classic) added to Dan's account, 2026-09-11"
claim      = "GitHub sent a security notification that a personal access token (classic) was added to Dan's GitHub account on 2026-09-11 at 10:30:34 -0700 (13:30 EDT)."
cites      = ["src:sammy-scrape-20260911-1941"]
confidence = "high"
tags       = ["github", "security", "scrape"]
created    = "2026-09-11"

[when]
date   = "2026-09-11"
+++

<!-- prose for humans; the frontmatter is for machines -->
## Evidence

`raw/sammy/20260911-1941/gmail.json`, message `1a0918568304b69a`, from
GitHub notifications, Date header `Fri, 11 Sep 2026 10:30:34 -0700`
(13:30:34 EDT). Subject: `[GitHub] A personal access token (classic) has
been added to your account`. Triage metadata only; token value, scopes, and
label are not in the captured metadata.

## Corroboration

The same afternoon (~13:31 EDT), a GitHub token was pasted into the
assistant chat and flagged for rotation (operator conversation, 2026-09-11;
attributed_to operator). The 13:30:34 creation notice and the ~13:31 paste
are consistent with the token being minted and then immediately used — but
identity between the two tokens is inferred from timing, not confirmed.

## Open questions

- Was the token rotated after the in-chat warning? Unknown from this batch.
- Token scopes/label: unknown (metadata only).

## Cross-links

- [`src:sammy-scrape-20260911-1941`](../../sources/sammy-scrape-20260911-1941.md)
