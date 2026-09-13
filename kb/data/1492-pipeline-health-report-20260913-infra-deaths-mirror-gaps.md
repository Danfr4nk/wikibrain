+++
id         = "dat:1492-pipeline-health-report-20260913-infra-deaths-mirror-gaps"
layer      = 1
type       = "datum"
title      = "Pipeline health report 2026-09-13: infra deaths, merge friction, dual-repo mirror gaps"
claim      = "Dan's Q&A at 2026-09-13T11:18-11:20Z on the automatic pipeline: the machinery works, the plumbing creaks. Archivist side airtight (4h scrape archiving to both repos with watermarks advancing; last 24h ~1,300 chat rows archived, 47 new datums, two new articles - explicit-verbal-commitment, media-ingest - plus the Kristin rewrite under the human-article rule, 2.7GB RAWLOGS backfill landed; queue 25 pending / 20 done / zero orphans / zero blocked). Creaking: three 'execution turn interrupted' infra deaths in 24h (retries caught two of three; platform problem, not pipeline); merge friction from workers pushing one-off branches instead of the rolling branch (push script cannot force-update refs, manual API surgery required). Mirror gaps: 12 dirs / ~54 files missing from RAWLOGS (one-off Sep-10-12 intakes that landed in wikibrain raw/ but never mirrored - messenger export, MyActivity, morgantown call report + transcript, franks-auto-supermarket photos, fran-coldren photos, lease-signing photos, legion-of-skanks tapings, old wiki export, facebook-threads, others); 4 dirs missing from wikibrain in the reverse (early Sep-11 chat batches existing only in RAWLOGS, from before the direction was corrected to wikibrain-primary). Big backfill categories near parity (8,800+ files, off by a handful of manifests)."
cites      = ["src:sammy-chat-transcript-20260913-1140"]
confidence = "high"
reliability = "primary"
extraction = "Contemporaneous chat 2026-09-13T11:18-11:20Z, batch 20260913-1140; assistant's operational report as quoted to Dan in-thread."
importance = 3
tags       = ["pipeline", "operations", "2026"]
created    = "2026-09-13"

[when]
date   = "2026-09-13"
+++

<!-- prose for humans; the frontmatter is for machines -->
