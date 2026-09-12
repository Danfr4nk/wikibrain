+++
id            = "dat:0442-davey-fitzpatrick-thread-839-both-sides-not-382"
layer         = 1
type          = "datum"
title         = "Davey Fitzpatrick thread is 839 messages with both sides in the held corpus, not 382 Received-only; key quotes verified verbatim"
claim         = "The held corpus (corpus/messages.csv) carries **839 unique messages** with Davey Fitzpatrick's handle ([phone redacted] here; unredacted in the old wiki, not reproduced): **457 from Dan, 382 from Davey** — the page's '382 (all marked Received; his side only)' is exactly the Davey side of the thread; the old wiki's MASTER_MESSAGES_DB_DUMP.csv export captured only one direction. The held date range is 2017-05-22 03:13:26 UTC → 2018-11-02 19:03:11 UTC, which converts to 2017-05-21 23:13 → 2018-11-02 15:03 EDT — the page's 2017-05-21–2018-11-02 range is exact after the timezone conversion. Verified verbatim in the held corpus: 'I'm actually gonna be assistant caddie master lol' (2018-03-20, Davey); 'Sorry for your loss bro…' (2018-04-05, Davey — the day after Fran's April 4 death, the page's same-week corroboration holds); the Annie phone-grab joke 'davey !!! its annie, when dan asked me, i said 'idk i always copied off of davey'' (2018-07-08 00:xx UTC = July 7 EDT, the page's July 7); 'Trev picked a bad time to leave' (2018-08-07); and the thread's final conversation (2018-11-02): Dan — *\"I'm gonna do whatever for a day job and try my hand at comedy\"* — Davey — *\"Well good luck dude, I wish you guys the best\"* — Davey — *\"Wow dude that's serious! Wonder what the cost of living will be lol\"* — Davey — *\"Are you selling your place?\"* All Davey-side. Dan's side being present in the held corpus retires the page's 'The record is his side only' claim."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page body read directly from corpus__3.txt line 54105 (139 lines). Held-corpus verification by exact chat_identifier/sender match against corpus/messages.csv (redacted handle taken from the old wiki's unredacted copy, not reproduced here): 839 rows, 839 unique message_id, is_from_me=1: 457, =0: 382, first 2017-05-22 03:13:26, last 2018-11-02 19:03:11. The held corpus is UTC; the old wiki's dates are local Eastern, and both endpoints convert to the page's stated dates (May 2017 = EDT, Nov 2018 = EST). Quotations transcribed verbatim from held-corpus text fields. The old-wiki page matches the corpus page on the quotes checked; 'His side only' was true of the old dump, not of the held corpus."
importance    = 4
tags          = ["people", "corpus", "count-correction", "verified-quote", "nemacolin", "fran-coldren"]
created       = "2026-09-09"

[when]
start = "2017-05-21"
end   = "2018-11-02"
+++

## What the check confirms

The page's narrative skeleton is corroborated message-for-message in the held
corpus: the promotion announcement, the condolence the day after Fran died,
Annie's phone-grab joke on the page's stated date, Trevor's exit record, and
the final NYC-move conversation, including Dan's own line about trying comedy.
The 382 figure is not wrong — it is exactly the Davey side (is_from_me=0) —
which makes the correction mechanical: the old dump saw half the thread.

## What it leaves open

With 457 of Dan's own messages now held, the page's portrait of Davey can be
re-grounded two-sided: everything the page attributes to reaction-quote
recovery ('the corpus's better caddie-era Dan lines') is now directly
verifiable. The ~20 report-time messages (March–October 2018) were not
counted here; the 'roughly twenty' figure is the page's. The social-graph
claims (Hinkle, Jack, Trevor, the Pirates game, the October 2017 Annie-number
ask) were not re-verified — the quote checks above sampled only the
load-bearing lines. Privacy: the phone handle stays [phone redacted]; the
email handle `[email redacted]` likewise unreproduced.
