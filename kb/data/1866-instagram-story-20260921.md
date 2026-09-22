+++
id         = "dat:1866-instagram-story-20260921"
layer      = 1
type       = "datum"
title      = "New own Instagram story (video), found active 2026-09-21"
claim      = "2026-09-21 ~23:50Z check: 1 active own story on @ihatedanfrank — video, media_id 18133721992651173, no caption, no music sticker, 0 likes / 0 comments at pull time. Listing timestamp 2026-09-20 18:36:22 in the skill's ambiguous local tz (same ambiguity class as the 2026-09-14 story; no expiry field returned to derive from). Newest feed post unchanged at 2026-08-26 23:04:49. Content of the video was not pulled — metadata only."
cites      = ["src:20260921-2340-instagram-story"]
confidence = "moderate"
reliability = "primary"
extraction = "instagram-cli 2026-09-21T23:50Z: posts[0].post_type=story, media_id 18133721992651173, media_type VIDEO, post_creation_time '2026-09-20 18:36:22', post_caption_text empty, music None, like_count 0, comment_count 0. Watermark advanced to check time 2026-09-21T23:50:00Z."
importance = 3
tags       = ["instagram", "story", "2026-09"]
created    = "2026-09-21"

[when]
date   = "2026-09-21"
+++

<!-- prose for humans; the frontmatter is for machines -->

## Correction / addition 2026-09-22 (external-check subagent report)

The external-check subagent resolved the timestamp and added engagement figures: posted **2026-09-20 18:36:22 EDT**, expires **2026-09-22 01:36:22Z**, **68 viewers** at check time. Thumbnail CDN download failed (URL signature mismatch) — metadata only, as originally recorded. Note the tension: the prior check at 2026-09-21T00:11Z reported 0 active own stories, yet this story's posted timestamp (2026-09-20T22:36:22Z) predates it — either the post went up later than the listing claims or the 00:11Z check missed it; unresolved.
