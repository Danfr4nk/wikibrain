+++
id            = "dat:0633-joey-superick-june-2018-golf-window-held"
layer         = 1
type          = "datum"
title         = "Joey Superick: name, June 2018 window and golf context corroborated in the held corpus; the 23-message thread is unheld"
claim         = "The Joey Superick page's frame — a warm, brief golf-and-music friendship from June 2018 — is corroborated in the held iMessage corpus: on **2018-06-04** (02:07:29 UTC) Dan wrote *\"I'm supposed to play with Joey Superick tomorrow as long as I don't get a report in the next hour or so\"* (caddy-shift report-time framing, consistent with the Nemacolin caddying context), followed by *\"Joey Superick\"* (18:38:50). The full name, the June 2018 date and the golf context all check out against the page's *2018-06-03 → 2018-06-29, 23 messages* thread claim. **Not held:** the thread itself (`MASTER_MESSAGES_DB_DUMP.csv` slice) — the sunglasses-on-the-gravel-road story, the emo/post-hardcore music exchange (Brand New, Jesse Lacey, Taking Back Sunday, *The Devil and God Are Raging Inside Me*), and the *\"talk later fuckboi\"* register are the page's testimony-relay from the unheld dump. The page is present verbatim in the old-wiki export. Handle redacted per the corpus [phone redacted] convention."
attributed_to = "src:old-wiki-export-2026-09-04"
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
confidence    = "moderate"
extraction    = "Direct Python scan of corpus/messages.csv for 'superick'/'joey': 6 rows; the two 2018-06-04 rows transcribed verbatim above (the 2016-05-13, 2016-12-05 and 2017-04-17 'Joey' rows refer to other Joeys or are ambiguous, and are not cited as this Joey). The Joey Superick page (corpus__3.txt line 60383, 41 lines) is present verbatim in raw/old-wiki-export-2026-09-04/whole.txt. The MASTER_MESSAGES_DB_DUMP.csv source was not found under raw/ or elsewhere in this repo."
importance    = 2
tags          = ["corroborated-partial", "joey-superick", "imessage", "nemacolin"]
created       = "2026-09-09"

[when]
start = "2018-06-03"
end   = "2018-06-29"
+++

## What this establishes

The page's identification — who, when, doing what — has a held-record
anchor: Dan naming Joey Superick in full, in a golf context, inside the
page's own date window, in the same breath as caddy report-time logistics.
That is enough to file the person and the window as corroborated, and to
treat the thread's existence as plausible.

## What it does not establish

Everything that makes the page a *portrait* — the sunglasses bit, the
music-opinion exchange, the friendship register — is unheld. The earlier
'Joey' rows (2016–2017) were excluded as ambiguous rather than folded in,
because this repository does not merge Joeys without evidence.
