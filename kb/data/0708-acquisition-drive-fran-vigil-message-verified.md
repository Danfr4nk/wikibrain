+++
id            = "dat:0708-acquisition-drive-fran-vigil-message-verified"
layer         = 1
type          = "datum"
title         = "The Fran vigil 'good closure' message verifies verbatim in the held message corpus — including the six months, the $15/hour, and the 17:55 timestamp"
claim         = "The acquisition-drive page quotes Dan, 'four days after the funeral, unprompted, to a third party' on 2018-04-06 at 17:55: 'she was a trip dude but i spent the past 6 months looking after her full time ($15 an hour to play video games with gram is a good deal) and we had a lot of fun. got good closure and finally did something in my life that wasn't completely selfish haha'. The held corpus carries this message byte-for-byte as message_id 153495, sent 2018-04-06 21:55:47 UTC — which is 17:55:47 EDT, matching the page's 17:55 exactly once the corpus's UTC convention is converted (a ~4h offset is timezone, not displacement). The six-month duration and $15/hour figure are Dan's own contemporaneous statement, not the wiki's inference — which is exactly the page's point in citing it against the multi-year caregiving span the old wiki had inferred."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Direct Python CSV scan of corpus/messages.csv (192,140 rows), 2026-09-09: message_id 153495, date_sent '2018-04-06 21:55:47', is_from_me=1, text matches the page's quotation verbatim in full. Timezone conversion: April is EDT (UTC-4); 21:55:47 UTC = 17:55:47 EDT — the page's '2018-04-06 17:55' is the same instant, not a displaced date. The page attributes the recipient to a third party (chat handle present in the export); per the privacy split the handle is not reproduced here."
importance    = 4
tags          = ["acquisition-drive", "fran-coldren", "message-corpus", "old-wiki", "timezone"]
created       = "2026-09-09"

[when]
date = "2018-04-06"
+++

## What this confirms and what it corrects

**Confirms.** The page's strongest single quotation — the one it calls 'the
drive's only documented success condition stated in his own voice' — is
real, contemporaneous (four days after the April 2018 funeral), and
timestamped to the minute. The six-month caregiving duration the page uses
to correct the old wiki's multi-year inference is Dan's own contemporaneous
figure, which is why the correction lands.

**Corrects nothing, but sharpens one thing.** The page says the message went
'to a third party' without naming the channel; the held export confirms it
was outbound from Dan. The recipient handle is withheld per the redaction
convention — the page itself prints a number, and this repository does not
repeat it.

## Cross-reference

The page's further claim — that a sweep of all 106,629 sent messages finds
no second instance of Dan reporting a good outcome from something he *did*
— is a generated negative over the corpus and was not re-run here; it is
carried as the page's assertion.
