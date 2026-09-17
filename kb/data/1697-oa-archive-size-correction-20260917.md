+++
id         = "dat:1697-oa-archive-size-correction-20260917"
layer      = 1
type       = "datum"
title      = "O&A archive size correction: 357GB across 5,518 files, survey was 21x off"
claim      = "At 11:14:07Z on 2026-09-17 the Drive-pull worker reported the O&A radio-archive folder is 357GB across 5,518 files — not the surveyed 16.7GB, a ~21x miss. Breakdown: Ron Fez 290GB, Opie & Anthony 58GB; two small subfolders (9GB) already pulling. Constraint: this VM has 50GB free and Dan's Drive is at quota, so the bulk physically cannot land here; the call was left to Dan (widget offered). Separately at 08:30:59Z: the two big overnight archive downloads died partway — 2016.zip stalled at 2GB of 10.9GB, Articles.zip never started (Drive API hiccup); both restarted fresh, verification pending."
cites      = ["src:sammy-chat-transcript-20260917-1140"]
confidence = "high"
reliability = "primary"
extraction = "Contemporaneous main-chat assistant rows 2026-09-17T08:30:59Z (download snag) and 11:14:07Z (O&A size correction), batch 20260917-1140."
importance = 4
created    = "2026-09-17"
+++

## O&A correction

- Survey figure (dat:1677 context): 16.7GB. Live folder listing: 357GB / 5,518 files.
- Subfolders: Ron Fez 290GB; Opie & Anthony 58GB; two small subfolders 9GB (already pulling).
- Physical constraint: VM 50GB free + Drive at quota -> bulk cannot land here. Decision pending Dan's call.
- This corrects dat:1677's O&A figure; the rest of dat:1677 (Chrome history 155k, ChatGPT exports, YouTube history, 1.58M message rows, location history, MyActivity pair, SLOPPP correction) stands.

## Download snag

- 2016.zip: stalled at 2GB of 10.9GB. Articles.zip: never started. Cause per worker: Drive API hiccup, not a source-side problem. Restarted fresh; confirmation pending at batch close.
