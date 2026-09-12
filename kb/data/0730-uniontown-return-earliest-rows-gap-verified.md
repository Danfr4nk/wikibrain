+++
id            = "dat:0730-uniontown-return-earliest-rows-gap-verified"
layer         = 1
type          = "datum"
title         = "The corpus's earliest rows verify the page's gap claim: one attachment-only row Mar 19, 2011, then nothing with text until Nov 12, 2015"
claim         = "The uniontown-return page states that 'the earliest real-text rows in any on-disk export begin November 12, 2015.' The held corpus verifies this exactly: its earliest row overall is 2011-03-19 (a single row carrying only an image attachment, no text), and the earliest row with any text is 2015-11-12 21:18:03 UTC ('What's going on?'). Between March 2011 and November 2015 the export holds no real-text message rows at all. The page's gap claim is therefore a precise description of the held corpus, and it matters: every 2011–2015 event the page narrates (the SLOPPP years, the 2013 return, the Scerba period) sits inside a four-and-a-half-year primary-source void, carried by dox, captures, and the old wiki's reconstruction rather than by contemporaneous messages."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Direct Python CSV scan of corpus/messages.csv (192,140 rows), 2026-09-09, ordered by date_sent: first row 2011-03-19 (attachment-only, empty text); first row with non-empty text 2015-11-12 21:18:03 UTC, text 'What's going on?' verbatim. No text-bearing rows between those dates. The page's 'November 12, 2015' is exact to the day."
importance    = 4
tags          = ["uniontown-return", "message-corpus", "coverage-gap", "old-wiki", "measurement"]
created       = "2026-09-09"
+++

## The consequence for the whole wave

This gap is the background condition of every 2011–2015 claim in this
wave: the SLOPPP discography (dat:0731), the Croftcheck transaction
(dat:0720/0721), the 2013 return narrative, the poverty-floor calendar
counts (dat:0722). None of them can be message-corroborated, because the
messages do not exist. The page says this about itself; the corpus
confirms the page is right about the void. Claims from inside the void
are therefore graded on their dox and capture provenance, never on
corpus silence — silence is the expected state.
