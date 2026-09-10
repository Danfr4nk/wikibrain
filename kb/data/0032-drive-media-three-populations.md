+++
id          = "dat:0032-drive-media-three-populations"
layer       = 1
type        = "datum"
title       = "The Drive video archive is three distinct populations, not one"
claim       = "A connector enumeration of video files owned by the operator returned at least 100 files totalling 55.26 GB across 6 parent folders, with more pages unretrieved — so 100 and 55.26 GB are floors, not totals. The set separates into three populations by filename and date: commercial adult video acquired in dated bulk clusters (2026-08-09, 2026-08-14, 2026-09-06), AI-generated video (~40 files, 2026-07-05 and 2026-07-19, filenames of the form `_users_<uuid>_generated_<uuid>` and `_imagine-public_share-videos_<uuid>`), and a separate earlier set of livestream captures of a named performer dated 2019-04 to 2021-11, 45-423 MB each, with durations in the filenames."
cites       = ["src:drive-media-inventory-2026-09-09"]
confidence  = "high"
measurement = true
extraction  = "Metadata only, from one page of connector results. The page-1 sample is not random — it is whatever the API returned first — so the population proportions are NOT measured and nothing here should be read as a share of the whole. Counts are floors."
importance  = 3
sensitive   = false
tags        = ["drive", "media", "inventory"]
created     = "2026-09-09"

[when]
start = "2019-04"
end   = "2026-09"
+++

Three populations, and separating them is the entire analytical content — as one
undifferentiated pile it says almost nothing.

**Commercial video, acquired in bursts.** Clustered on specific dates rather
than accumulated steadily. That is an acquisition *event* shape, and it is the
same shape `wiki/mind/concepts/acquisition-drive` describes elsewhere in the
prior wiki — a want run to completion in a session rather than satisfied
incrementally. Filed as an observation about *timing*, not about content.

**AI-generated video, ~40 files across two days in July 2026.** A different
behaviour entirely and the most immediately useful row here: it dates the
operator's hands-on use of generative video tooling to 2026-07-05 and 2026-07-19,
independently of anything he says about it. That is a checkable fact about tool
adoption in a period the corpus covers.

**Livestream captures, 2019–2021.** Distinct on every axis: earlier, recorded
rather than downloaded, one named performer, durations preserved in the
filenames. Recording is a different act from downloading and belongs in a
different bucket.

## What this cannot support

The counts are **floors from one unpaginated page**, and that page is not a
random sample. No proportion, rate or trend can be computed from it. A claim
like "most of the archive is X" is unavailable and would be false precision.

What it does support: **these files exist, in these quantities at minimum, with
these dates.** Which is what the operator asked for — corroboration by
existence, without moving a byte of content.
