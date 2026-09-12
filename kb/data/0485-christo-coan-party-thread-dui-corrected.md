+++
id            = "dat:0485-christo-coan-party-thread-dui-corrected"
layer         = 1
type          = "datum"
title         = "Christo Coan: Nemacolin coworker/DJ, Oct 2017 Halloween-birthday party co-organization — and the page's DUI claim is superseded by dat:0031"
claim         = "wiki/people/christo-coan.md documents a Facebook Messenger thread (2017-09-24 – 2018-06-28) with Nemacolin-era golf-course coworker and DJ Christo Coan, existing almost entirely to co-organize Dan's Halloween/birthday party of October 31, 2017: open invite \"for everyone who works in golf up there\" / \"literally every caddie, staging, and pro shop employee\"; Christo recruiting (\"Brad and Zach to both endorse it\") and handling the DJ set (\"Remember that I'm a DJ... so I might spin a lil\"); Dan's alcohol logistics (\"I don't drink at all so I've got no idea what to get... I'll donate a 30 pack\"); the party landing on Dan's actual birthday, November 1 (\"lots of justification to get just wrecked\"); 9 PM start with early arrivals from 7. The page's two larger claims: (1) Dan's first-person venue description — \"I live on the golf course... my next door neighbors are my grandparents and my girlfriend's grandparents... so noise isn't a problem\" — a first-person confirmation of the Belmont Circle/Ulmer neighbor geography from October 2017; (2) the October 19, 2017 DUI line — \"hell yeah I already got a DUI I'm not getting any more of those :D thanks bro\" — which the page attributes to Dan and treats as \"the corpus's only reference to a separate, undated, otherwise undocumented DUI on Dan's own record,\" flagged as contradicting the retail-theft page's \"No DUI resulted\" framing and the legal index's \"only documented arrest\" claim. **That second claim is superseded.** [`dat:0031`](0031-dui-belongs-to-the-other-speaker.md) re-pulled the actual thread from the Facebook export (76 message blocks: 42 Dan, 34 Christo — the export metadata in this repo's MANIFEST.json independently agrees: 76 blocks, 42 from_dan) and the line at 2017-10-19 17:58:15 is **Christo's, not Dan's**: Dan wrote \"everyone welcome to crash here so we can all get properly fugged up\" at 17:57:51, and Christo's DUI line accepts the offer, giving his own prior DUI as the reason he will not drive. There is no Dan-side DUI in this record to reconcile."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:facebook-export-2026-06-23"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page body read directly from corpus__3.txt line 53288 (96 lines); matches raw/old-wiki-export-2026-09-04/whole.txt lines 46955-47050 verbatim on the party sequence, all quoted passages, the house description, and the DUI section. The DUI correction is not re-derived here — it is carried from dat:0031, which parsed the primary source (facebook-export-2026-06-23, inbox/christocoan_2cxo0swo3g/message_1, pulled 2026-09-09 over anonymous HTTPS; attribution structural, from the export's NAME/timestamp blocks). This repo's raw/facebook-threads/MANIFEST.json (thread metadata only) independently confirms 76 message blocks / 42 from Dan / 2017–2018. The thread's text itself is not on disk here, so the party quotes are text-fidelity-verified, not re-read."
importance    = 4
tags          = ["people", "legal", "nemacolin", "facebook", "old-wiki", "correction", "testimony"]
created       = "2026-09-09"

[when]
start = "2017-09-24"
end   = "2018-06-28"
+++

## What this corrects in the corpus copy

The page as snapshotted (2026-09-04) builds its most load-bearing section —
\"The DUI reference\" — on a lost attribution. Everything downstream of it
falls: the \"contradicts\" connection to wiki/legal/2015-possession-arrest,
the contradiction claim against the retail-theft page's \"No DUI resulted\"
framing, and the legal index's \"only documented arrest\" tension. The
2015-possession-arrest page's own reasoning (a citation-DUI reconciling
\"my first and only real arrest\") is the kind of impeccable inference from
a wrong premise dat:0031 names — the reconciliation was unnecessary.

## Two small residue notes

1. The page says \"~50 (Facebook Messenger, both directions)\"; the export
   holds 76 message blocks. The \"~\" carries the approximation, but 76 is
   the actual count.
2. The party details (the \"30 pack\" line, the 9 PM / from-7 timing, the
   \"wrecked\" framing) are quoted from the thread but were not re-read in
   this pass; the export the prior wiki read is the same one dat:0031
   pulled, so a future pass can spot-check them in the same file. The
   Belmont-Circle house description — Dan's own first-person geography —
   stands uncontradicted.

## Stale carry flagged, not in my page list

The corpus's legal index (corpus__3.txt line ~17878) still states: \"An
October 19, 2017 message to Christo Coan — 'hell yeah I already got a DUI
I'm not getting any more of those :D' — indicates a separate, otherwise
undocumented DUI.\" That page needs the same correction; it is outside this
worker's page list and is flagged here for the coordinator.
