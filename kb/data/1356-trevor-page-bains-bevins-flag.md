+++
id            = "dat:1356-trevor-page-bains-bevins-flag"
layer         = 1
type          = "datum"
title         = "The Trevor page's 1,095-row thread is unheld; the held corpus flags a Bains/Bevins surname split"
claim         = "wiki/people/trevor (2026-06-23, modified 2026-07-19) titles him 'Trevor Bevins,' a Nemacolin caddying peer of May–July 2018, with 1,095 iMessage rows from 2017-10-19 to 2020-06-18 (sourced to the unheld MASTER_MESSAGES_DB_DUMP.csv) and a confirmed Facebook continuation on 2021-02-04 (the Facebook export body is unheld; raw/facebook-threads holds only a MANIFEST). The held corpus/messages.csv cannot reproduce the thread: 60 text hits on 'trevor' (case-insensitive), none forming an identifiable direct thread through name or display fields. But it does flag a surname split: a 2017-10-19 row from another sender shares a contact card reading 'Trevor Bains Mobile [phone redacted]' — the page's own first-contact date is 2017-10-19, so the card plausibly anchors the same person — while Dan's own casual texts write 'Bevins' ('Bevins's of the world,' 2018-05-20; \"Trevor 'no life to speak of' bevins,\" 2018-06-17; 'Dr Bevins,' 2018-07-14). The page's 'Trevor Bevins' may be the correct surname (Dan's own usage) against a contact-card 'Bains' variant, or vice versa; the record does not resolve it. The Sand Valley departure, the $110/bag figure, the Caddylands venture, the GameStop exchange, and the repayment-friction arc are all sourced to the unheld dumps and are filed as page-attributed testimony."
cites         = ["src:old-wiki-export-2026-09-04", "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "low"
extraction    = "Page body read from corpus__3.txt line 70043 (130 lines); matches raw/old-wiki-export-2026-09-04/whole.txt. Held-corpus scan on 2026-09-11: 60 case-insensitive 'trevor' hits; the four surname-relevant rows located by /bains|bevins/i. The phone number on the contact card is not reproduced. The page's direction-field caveat (master CSV 'direction' not reliable) is its own and is preserved."
importance    = 4
tags          = ["people", "trevor", "nemacolin", "old-wiki", "identity", "surname-flag"]
created       = "2026-09-09"

[when]
start = "2017-10-19"
end   = "2021-02-04"
+++

## The flag to resolve

The contact-card 'Bains' vs. Dan's own 'Bevins' is a one-line discrepancy
with outsized downstream cost: the page title, aliases, and all cross-links
use 'Trevor Bevins.' If 'Bains' is correct, every reference is wrong. The
held corpus favors neither conclusively — it records both spellings from
different hands (a contact card vs. Dan's casual typing). Flagged, not
resolved.
