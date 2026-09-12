+++
id            = "dat:1357-zaco-thread-recount"
layer         = 1
type          = "datum"
title         = "The Zaco thread's 58 inbound rows verify exactly; the page's '7 sent' does not — the held chat holds 48 Dan outbound"
claim         = "The Zaco page's corpus dimensions verify in part and fail in part against corpus/messages.csv. The inbound half is exact: 58 rows from the handle that self-identifies as 'Yo it's zaco' (message id 156528, 2018-03-12 21:44:26 UTC), spanning 2018-03-12 21:44:26 → 2018-11-26 23:36:24 UTC. The direction split the page calls its finding — '58 of 65 messages are his... 58:7 inbound ratio' — does not hold in the held slice: the same chat_identifier carries 48 Dan outbound rows (is_from_me=1), for a 106-row thread, not 65. Dan's outbound is not a single November night; he initiates repeatedly across March–June 2018 ('any strips,' 'Any subs?', 'Subs?', 'Can u still get soft,' 'If u can get white I'm looking for like 200'), and the November 26 run the page quotes ('Hey dude / Hit me up if you're around. Needed some girl / 100? / ... I've got the paper on me and I'm at my house' through 'Ah shit I'm stuck at home / No ride right now') verifies as message ids 63876, 63867, 63927, 63889, 63873, 63971 on 2018-11-26 23:22–23:36 UTC — in the same chat. The page's '7 sent' likely reflects its unheld merged-export thread (all_imessages_complete_dump.txt) rather than this slice. The supply-network reading (Suboxone strips by the strip, 'Tex' unidentified, the immobility blocker on Nov 26) is consistent with the held rows; the marketing-channel-vs-sourcing claim is the page's interpretation of a ratio that the held corpus does not support."
cites         = ["src:imessage-corpus-2026", "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Direct Python scan of corpus/messages.csv on 2026-09-11: handle identified by the 'Yo it's zaco' anchor text; 58 rows with sender == handle; chat_identifier == handle contains 106 rows total, 48 with is_from_me=1. The November outbound run located by string search and confirmed in the same chat_identifier. The page's November 26 quoted lines match the held outbound verbatim. Handles and addresses are not reproduced; the one Dan-sent address line (2018-06-28) is noted as present but not quoted."
importance    = 4
tags          = ["people", "zaco", "corpus", "2018", "verification", "count-mismatch"]
created       = "2026-09-09"

[when]
start = "2018-03-12"
end   = "2018-11-26"
+++

## What this changes

The page's headline finding — Zaco as the supply network's only
push-marketing node, built on the 58:7 inbound ratio — was measured on a
thread this slice does not contain. In the held slice the ratio is 58:48
inbound, and Dan is a repeat initiator. The push-marketing characterization
should be re-measured against the full thread before being cited as a
finding; the page's own Gaps (real name, 'Tex,' whether the Nov 26 deal
happened) are unaffected and preserved.
