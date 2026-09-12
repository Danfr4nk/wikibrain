+++
id            = "dat:0632-jaredtricia-june-2019-thread-verified-to-the-message"
layer         = 1
type          = "datum"
title         = "Jared and Tricia: the June 2019 'Hazel' booking thread verified to the message; the Aug 2019 photo thread and June 2020 non-recognition are unheld"
claim         = "**Verified to the message in the held iMessage corpus.** The Jared/Tricia June 2019 booking thread under the page's handle (redacted per the corpus [phone redacted] convention) returns **exactly 50 messages, 2019-06-01 04:13:15 → 2019-06-24 01:50:09 UTC** — i.e. June 1 → June 23 EDT, matching the page's 50-message / June 1–23 range. The page's narrative beats are all verbatim in the held record: the rooftop/Gramercy setup (2019-06-01 04:29:06, 06:20:49), the FaceTime-identity request (06:14:00, 06:17:25, 06:23:16), the rate — *\"+12014639300 - 1000 for two hours is it?\"* (07:02:24), confirmed *\"Two hours it is if that ok\"* (07:03:41) — the Eros-ad reference (*\"Just saw the Eros ad\"*, 07:02:40), the Uber offer (07:05:01), and the messages' self-prefixing with the second handle, exactly as the page's Corpus Dimensions notes. The second booking's opener — *\"Hey Hazel! Jared & Tricia from Gramercy hotel a few weekend ago…\"* (2019-06-23 21:51:50 UTC = 17:51 EDT) — is held-record. So is the backup-number detail: *\"+16466393949 - Hi, it's Trish! Good to see you again last night, had a lot of fun! Still trying to wrap my head around Maria, lol!\"* from a different number on 2019-06-24 18:00:22 UTC — Trish's separate number, post-second-booking, exactly as the page describes. **Not held:** the August 2019 Google Voice photo thread (Dan-as-'Hazel', *\"or i wanted that picture\"*) and the June 28, 2020 *\"Who is this?\"* non-recognition — both come from the page's ChatGPT-export source (`raw/people/annie-ulmer/escort-messages-chatgpt-export-2025-08.md`), which is not in this repository. Filed as page-relayed."
attributed_to = "src:old-wiki-export-2026-09-04"
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
confidence    = "high"
extraction    = "Direct Python scan of corpus/messages.csv on the Jared/Tricia chat_identifier: 50 rows, range as above, all quoted texts transcribed verbatim. The 'Trish' backup-number row (chat_identifier +13134279169, date_sent 2019-06-24 18:00:22) found via a 'trish' full-corpus scan. The Jaredtricia page (corpus__3.txt line 58642, 111 lines) is present verbatim in raw/old-wiki-export-2026-09-04/whole.txt, including the 2026-07-14 Dan confirmation and the Trinity rate discrepancy. The ChatGPT-export source was not found under raw/ or elsewhere in this repo. Handles not reproduced per the corpus [phone redacted] convention."
importance    = 4
tags          = ["corroborated-primary", "jaredtricia", "annie-ulmer", "imessage"]
created       = "2026-09-09"

[when]
start = "2019-06-01"
end   = "2019-06-23"
+++

## What this establishes

The June bookings — the entire transactional core of the page — are now
held-record to a level of detail that includes the *\"+12014639300 -\"*
message prefixing the page itself documents as a quirk of the export. The
page's direction caveat ('marked Received throughout — read as one-way')
is consistent with the held rows. The backup-number message independently
grounds the page's claim that Tricia's separate number entered the record
after the second booking.

## What it does not establish

The page's most narratively loaded claims — Dan writing as 'Hazel' to
obtain the photo, his *\"or i wanted that picture\"* explanation, the Trinity
recommendation and its $1,400-vs-$1,500 discrepancy, and the 2020
non-recognition — all live in the unheld ChatGPT export, confirmed (per
the page) by Dan directly on 2026-07-14. They are relayed through the old
wiki with Dan's confirmation as the instrument; this repository cannot
re-derive them. The 'Hazel'/'Lily Lush' alias framing beyond this thread
is likewise the page's, not the held corpus's.
