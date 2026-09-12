+++
id         = "dat:1464-repo-deletion-decision-20260912"
layer      = 1
type       = "datum"
title      = "Repo deletion decision state: wikitest safe to wipe, wikipedia = live site takedown, nothing deleted"
claim      = "2026-09-12T19:06:47Z-19:09:05Z (15:06-15:09 ET): Dan asked whether the 'wikipedia' and 'wiki-test' repos could be deleted. Assessment given: wikitest - safe to wipe (archived, everything migrated to wikibrain in PR #22); wikipedia - no unique source articles (all 500 articles exist in wikibrain as markdown, current versions newer), BUT deleting the repo takes down the live clone site at danfr4nk.github.io/wikipedia. Deletion requires Dan to do it in GitHub Settings (Danger Zone); nothing was deleted in-window. Standing: confirm the site-takedown consequence explicitly before any wikipedia deletion (ALIGNMENT_SYNTHESIS.md friction note)."
cites      = ["src:sammy-chat-transcript-20260912-1940"]
confidence = "high"
importance = 3
tags       = ["repo-deletion", "wikipedia", "wikitest", "2026"]
created    = "2026-09-12"

[when]
date   = "2026-09-12"
+++

<!-- prose for humans; the frontmatter is for machines -->

## Reading

Nothing was deleted, but the decision state is what matters for the
next run: wikitest is cleared for wiping whenever Dan acts in Settings;
wikipedia deletion is a site takedown (danfr4nk.github.io/wikipedia)
and must get an explicit site-consequence confirmation first. The
assistant's 19:07:05Z answer ('Yes - same answer as 30 seconds ago')
was about wikitest only; the wikipedia answer came 22 seconds later
with the site-takedown flag. Don't let a future run flatten those
into one 'approved' verdict.
