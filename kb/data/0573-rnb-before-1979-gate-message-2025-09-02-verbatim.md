+++
id            = "dat:0573-rnb-before-1979-gate-message-2025-09-02-verbatim"
layer         = 1
type          = "datum"
title         = "The 2025-09-02 R&B-before-1979 gate message is the operator's own, verbatim in the held corpus — with a looser held wording than the page's quote"
claim         = "The Elliott Smith page's '2025 gate' rests on a real message from the operator, **verbatim in the held corpus** (`corpus/messages.csv` row 130352, `is_from_me=1`, `date_sent` **2025-09-02 06:40:02 UTC**): *\"it's so simple - if she insists on playing r&b it has to be before 1979 or it will be overproduced trashmusic. you put on a few songs from james brown live at the Apollo and then you cut that shit out and go back to listening to real music like elliott smith or radiohead\"*. Two corrections to the page's rendering: the held text has **'trashmusic'** (one word), and the page's ellipsis conceals a middle clause — **'you put on a few songs from james brown live at the Apollo and then'** — which changes the gate's texture (James Brown is the permitted pre-1979 R&B, not a blanket ban)."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Row located by direct Python CSV scan of corpus/messages.csv (192,140 held records) for 'elliott smith' + '1979' — exactly one hit, row index 130352: date_sent '2025-09-02 6:40:02' (UTC; the held corpus is UTC per the timestamp convention — 06:40 UTC = 02:40 EDT Sep 2, so the page's date stands), is_from_me=1 (the operator's own message), full text transcribed verbatim above. The page's quote (corpus__3.txt line 10629-10740, '## The R&B-before-1979 gate (2025)') reads '\"if she insists on playing r&b it has to be before 1979 or it will be overproduced trash… you cut that shit out and go back to listening to real music like elliott smith or radiohead\" (2025-09-02)'. The page's sourcing (raw/self/message-csv/MASTER_MESSAGES_DB_DUMP.csv) is not separately held; the held corpus/messages.csv confirms it independently."
importance    = 3
tags          = ["elliott-smith", "music", "imessage", "verbatim-quote", "quote-correction"]
created       = "2026-09-09"

[when]
start = "2025-09-02"
end   = "2025-09-02"
+++

## What the check confirms

The message is real, the operator's, and dated 2025-09-02: Smith as the
positive pole of the listening gate ('real music') is genuine corpus
evidence, not generated metaphor. The date the page gives is correct —
no timezone displacement (06:40 UTC is still Sep 2 in Eastern).

## What the check corrects

The page quotes loosely in two ways that matter. 'trashmusic' as one word
is small, but the elided James Brown clause is the load-bearing one: the
page's version reads as 'R&B bad, Elliott Smith good', while the actual
message lays down a **rule with an exception** — pre-1979 R&B is fine, and
the named exemplar is James Brown Live at the Apollo. The page's reading
('the artist you pivot *to* when the overproduced stuff gets cut') is
consistent with the full text, but the full text is richer: the gate is
about production era, not genre. File the page's quote as a paraphrase with
an ellipsis, not a verbatim quote.
