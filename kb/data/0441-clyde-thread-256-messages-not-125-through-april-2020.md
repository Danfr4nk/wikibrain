+++
id            = "dat:0441-clyde-thread-256-messages-not-125-through-april-2020"
layer         = 1
type          = "datum"
title         = "Clyde thread is 256 messages through 2020-04-20 in the held corpus, not 125 through 2020-01-12; the 'saturn' quote verified verbatim"
claim         = "The held corpus (corpus/messages.csv) carries **256 unique messages** with the Clyde handle ([phone redacted], redacted here per the corpus convention; the old-wiki export prints it unredacted) spanning **2019-03-27 16:48 UTC → 2020-04-20 15:15 UTC** — against the page's 125 messages, 2019-03-27 to 2020-01-12. The page's figures trace to `raw/self/message-csv/MASTER_MESSAGES_DB_DUMP.csv` (unheld), i.e. a partial dump; the held iMessage corpus roughly doubles the thread and extends it three months past the page's stated end. First contact 2019-03-27 is confirmed (16:48:25 UTC = 12:48 PM EDT, timezone-consistent). The page's vivid quote is verified **verbatim** against the held corpus: *\"those doses were from fucking saturn for fucking real. i made my girlfriend watch a bunch of gaspar noe films when she was half dosed and subsequently  she no longer believes in the divinity of Jesus Christ or watches the E! channel.\"* — sent by Dan (is_from_me=1) on 2019-12-23 17:35:52 UTC, including the page's double-space after 'subsequently'. Corroborating texture confirmed: a 'police officer' vetting joke from Clyde nine minutes after first contact (2019-03-27 16:57:20); 'shakes' from Clyde 2019-05-12 (the bad-mushroom-batch apology); 'free squares' from Clyde 2019-05-19 (after the leaky cart); Clyde's 2020-01-12 return burst (*\"Yeooo\" / \"My bad bro I was out of state for a while\" / \"Got those same 275s tho\"*) — and the page's 'liked message' claim holds up literally: the 2020-01-12 burst includes a tapback-style *\"Loved 'those doses were from fucking saturn...\"* row. Post-page activity in the held corpus: Dan reaching out 2020-03-14 (*\"yooo any dmt?\"*), 2020-03-30 (*\"hey if you're still in town i need some blotter\" / \"and if you can get bars i'd buy up a bunch\"*), and 2020-04-20 (*\"hey dude do you know any way i could get bars or any kind of benzo?\"*)."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page body read directly from corpus__3.txt line 53472 (46 lines); matches raw/old-wiki-export-2026-09-04/whole.txt lines 47138-47188 on substance (the corpus redacts the phone handle as [phone redacted], the old wiki prints it unredacted — reproduced nowhere in this node). Held-corpus verification by exact chat_identifier/sender match against corpus/messages.csv: 256 rows, 256 unique message_id, first 2019-03-27 16:48:25, last 2020-04-20 15:15:35, month distribution 2019-03:43 / 04:61 / 05:64 / 06:38 / 07:5 / 08:31 / 10:4 / 12:2 / 2020-01:4 / 03:3 / 04:1, 8 rows after 2020-01-12. The held corpus is UTC; the old wiki's dates are local Eastern — the 2019-03-27 start converts cleanly (16:48 UTC = 12:48 EDT), while the 125-vs-256 and Jan-2020-vs-Apr-2020 gaps are far outside any timezone offset and are genuine source-window differences."
importance    = 4
tags          = ["people", "supply", "corpus", "count-correction", "verified-quote"]
created       = "2026-09-09"

[when]
start = "2019-03-27"
end   = "2020-04-20"
+++

## What the check confirms

Most of the page's texture-level claims hold up in the held corpus: the
saturn quote verbatim (with its idiosyncratic double space), the
first-meeting vetting joke, the shakes apology, the free-squares
compensation, the out-of-state return, even the 'liked' message mechanism.
What does not survive is the page's scale and window: **125 messages through
2020-01-12 is roughly half the thread and three months short of its held end.**
The reason is legible in the page's own frontmatter — its `sources` names the
MASTER_MESSAGES_DB_DUMP.csv, not the held iMessage corpus — so this is an
old-wiki source-window limitation, not an error in the messages themselves.

## What it leaves open

The held corpus resolves direction (is_from_me is populated), so the page's
'Direction: Unreliable in this export' caveat can be retired for Clyde. The
specific price points ($15/$10 tabs, $170–260 DMT gram, $50 mushroom eighth),
the dosing-philosophy discussion, and the 'goes quiet for stretches'
characterization were not line-verified here. The three 2020-03/04 Dan
messages (dmt, blotter, 'bars'/benzos) extend the documented relationship past
the page's window and may belong on the Clyde page's timeline. The page's
'roughly ten months spanning 2019' phrasing should be replaced by
2019-03-27–2020-04-20 (just under thirteen months). Per the privacy split the
phone handle is carried here as [phone redacted]; the unredacted form in the
old wiki is not reproduced.
