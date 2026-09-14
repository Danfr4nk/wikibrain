+++
id            = "dat:0119-bill-golf-pharma-customer-thread-corroborated"
layer         = 1
type          = "datum"
title         = "'Bill (golf/pharma customer)' page: thread, quotes, and pricing all confirmed verbatim in the held corpus"
claim         = "The page disambiguates its Bill from [[wiki/people/bill-ulmer|Bill Ulmer]] (Annie's father) and describes a golf-caddying peer buying pharmaceuticals over 2018-09-04 – 2018-09-20. All checkable claims confirmed verbatim in the held iMessage corpus: the closing message *\"What up broski. Trying to get tanked lol. U been caddieing?\"* (2018-09-20 14:25:02); the Lakeview-golf-with-dad message — *\"I'd come up today but I'm playing golf with my dad at Lakeview here in a couple hours… It's just hard for me without a whip… Lmk what u think broski\"* (2018-09-15 10:57:10); *\"Hey bro did anything happen with u possibly getting me some if that liquid. And holla if u come across any more addies\"* (2018-09-08 23:49:04); and the pricing line *\"Yeah I'd like to get 14 of them. That's like 95 bucks\"* (2018-09-04 14:13:25) behind the page's '14 units for about $95'. The thread in the held corpus runs 2018-09-04 – 2018-09-20 (matching the page's date range exactly) and totals 38 messages: 17 sent by Dan, 21 received — the page's '21 messages' is the Bill-side count, consistent with its own note that direction is unreliable in its export ('marked Received throughout — read as one-way'). Handle redacted here as on the page; the thread is a third party's and the page already withholds it."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page read directly (corpus__3.txt line 52350, 49 lines). Quotes verified with bin/corpus-query exact-phrase and --who searches on corpus/messages.csv: 'get tanked' → 1 hit (2018-09-20 14:25:02); 'without a whip' → 1 hit (2018-09-15 10:57:10); 'addies' → hit 2018-09-08 23:49:04; '95' → hit 2018-09-04 14:13:25 ('14 of them… 95 bucks'). Thread stats via --who: 38 matches, 17 sent / 21 received. The 'Socialist' contacts-label and 'pinks' claims were not separately checked; nothing in the checked messages contradicts them."
importance    = 3
tags          = ["bill", "corroborated", "quotes", "imessage", "old-wiki", "2018"]
created       = "2026-09-09"
+++

## Notes

- The page is a model short entity page: disambiguation up front, every
  substantive claim checkable, gaps section honest ('Last name, and
  whether contact continued past September 2018, are undocumented').
- The 21-vs-38 message count is not an error: the page's export only
  contained the received side, and it says so. Contrast with the
  alternate-number thread on the Annie page (dat:0118), where an earlier
  pass quoted the received count *without* the caveat.
- Drug-transaction content is Dan's own documented conduct; the third
  party's handle is withheld per the privacy split.
