+++
id            = "dat:0714-document-fabrication-exchange-verified"
layer         = 1
type          = "datum"
title         = "The August 14, 2026 forgery exchange verifies verbatim in the held corpus — four draft images, exact timestamps, and Annie's own 'Take out 60'"
claim         = "The document-fabrication page's 'one refusal that worked' case verifies end to end against the held message corpus. Every quoted line on the page matches a held row byte-for-byte: message 229391 (2026-08-14 17:08 UTC) 'Do me favor lol make me an AI drug test results for fayette county drug and alcohol that shows passing 😂'; 229392 'My parents asked me to show results'; 229394 (17:17) first attachment; 229401 (18:10) 'The logo / \"Panal\" instead of panel / The signature'; 229405 (18:13) 'I can do these real good but I need time to tweak things'; 229411–229412 (18:18) the 'Are you SENDING this to them or just going to SHOW it on your phone' / 'If you're sending it we need to do a lot more work here' pair; 229422 (18:27) 'Take out 60.' All page timestamps match exactly after UTC→EDT conversion (17:08 UTC = 13:08 EDT, and so on through 14:27). Two corrections to the page: (1) the exchange carried at least four forgery-draft images (13:17, 14:08, 14:11, plus the 14:17 'Hmmm' image), not the three the page counts; (2) the '$60' figure was Annie's own message — she replied 'Take out 60' to Dan's 'could you do 50 instead of 40' at 14:24 — so the page's '$40 for a full rebuild' framing understates what she named. The held rows do not show the artifact being sent to her parents, so the refusal's effect is documented only up to the handoff, as the page's 'unresolved' tail admits."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Direct Python CSV scan of corpus/messages.csv (192,140 rows) on the Annie chat, 2026-09-09: rows 229391–229422 in sequence, all texts verbatim as quoted on the page; four image-attachment rows at local 13:17, 14:08, 14:11 and 14:17 (the page counts three — it appears to have missed the 14:17 'Hmmm' draft). August is EDT (UTC-4): 17:08 UTC = 13:08 EDT through 18:27 UTC = 14:27 EDT, matching the page's 13:08–14:27 exactly. Attachment bodies (the images themselves) are not held — only attachment metadata rows — so image quality and final use remain unverifiable, as the page states."
importance    = 5
tags          = ["document-fabrication", "annie-ulmer", "message-corpus", "old-wiki", "timezone", "safety-line"]
created       = "2026-09-09"

[when]
date = "2026-08-14"
+++

## Why this node matters to the safety line

This is the corpus's dated instance of the documented pattern of pressing
AI toward deceptive output and evidence manufacture (the MEMORY.md safety
line). The record shows Dan did not simply refuse — he diagnosed the
failure modes in the drafts, priced the rebuild, and then priced himself
out while flagging the escalation from showing to sending. The refusal is
on record and it worked; he came back. The finding preserves the page's
characterization while tightening two of its facts.

## Cross-reference

The August 17–19 follow-on campaign's attachment count is carried
separately in [`dat:0715`](0715-document-fabrication-19-attachments-verified.md).
