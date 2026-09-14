+++
id            = "dat:0715-document-fabrication-19-attachments-verified"
layer         = 1
type          = "datum"
title         = "The '19 outbound attachments in three days' figure verifies exactly — for the Annie thread; across all chats it was 50"
claim         = "The document-fabrication page states that between August 17 and August 19, 2026, Dan sent Annie 19 outbound image attachments 'rebuilding the fabrication set from zero after the failed handoff.' A bounded scan of the held corpus for 2026-08-17 through 2026-08-19 counts exactly 19 Dan-outbound attachments in the Annie thread — the page's figure holds precisely when scoped to that thread. Across all chats in the same window the count is 50 outbound attachments (Ally Lubin 23, Tuquick 5, others 3), which is consistent with the page's read that Dan was 'documenting the rebuild' outward to multiple contacts while the forgery set itself went to Annie. The page's number is therefore correct as written; the wider corpus shows it was part of a larger documentation burst, not a private two-person exchange."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Direct Python CSV scan of corpus/messages.csv (192,140 rows), 2026-09-09: rows with date_sent between 2026-08-17 00:00 and 2026-08-19 23:59:59 UTC, attachment-bearing, is_from_me=1 — 50 total; filtered to the Annie Ulmer thread — exactly 19. The scan counts attachment metadata rows, not image bodies (not held). The 19-in-Annie's-thread count matches the page's '19 outbound attachments in three days' to the unit."
importance    = 3
tags          = ["document-fabrication", "annie-ulmer", "message-corpus", "old-wiki", "measurement"]
created       = "2026-09-09"

[when]
start = "2026-08-17"
end   = "2026-08-19"
+++

## What the wider count adds

The page treats the 19 as a private rebuild effort. The corpus shows 50 —
with the largest single block (23) going to Ally Lubin, the first outsider
to read the wiki that same month. The fabrication set went to Annie; the
documentation of the fabrication went everywhere. That is the behavior the
page's 'unresolved' tail is circling: whether the artifact was ever used is
unknown, but the rebuild was performed in the open, in front of witnesses.
This node records the count; the interpretation is the page's.
