+++
id         = "dat:1871-workbench-facial-anchor-commission-20260922"
layer      = 1
type       = "datum"
title      = "Workbench commission: facial-telemetry face box anchors body instruments; sessions.det.run bug saga"
claim      = "2026-09-22 04:05Z Dan proposed using the facial-identification face box to anchor the body instruments (his anthropometry: head ~1/7.5 body height, shoulders ~2 head widths -> expected body bbox, scale, centerline). Commissioned: (1) face box sets the body search region instead of full-frame scan, (2) cross-check flags reads where the body mask lands off the face-predicted box. His words: 'Yes do both. Max accuracy', 'Thats the most important part', 'Quality over speed'. Separately, the workbench body-outline card shipped 00:11Z (segmentation-traced outline + shoulder/waist/hip widths and ratios; honest limit labeled: traces clothing/hair, not body underneath) but runs died on 'sessions.det.run / Undefined is not an object'. Two wrong diagnoses first (stale tab, deploy lag - both corrected by Dan: 'I just did it in 3 browsers', 'if you dont fix anything nothing is going to change'). Real root cause found 10:18Z: the memory-fix refactor passed the bare detection session where the shared detector expects {det: session}; the string lived in the kinship pipeline file, which is why greps missed it. Fix shipped as build 20260922g with the build number displayed under the photo picker; his confirmation still open at batch close."
cites      = ["src:20260922-1140-sammy-chat-transcript"]
confidence = "high"
reliability = "primary"
importance = 4
tags       = ["workbench", "facial-telemetry", "body-telemetry", "instruments", "debugging", "2026-09"]
created    = "2026-09-22"

[when]
date   = "2026-09-22"
+++

<!-- prose for humans; the frontmatter is for machines -->
