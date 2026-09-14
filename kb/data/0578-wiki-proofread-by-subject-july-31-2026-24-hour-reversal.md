+++
id            = "dat:0578-wiki-proofread-by-subject-july-31-2026-24-hour-reversal"
layer         = 1
type          = "datum"
title         = "The wiki's first subject-matter proofread: July 31 22:04 EDT, Dan corrects the 2015 bond-switch subject — verbatim in the held corpus"
claim         = "The forensic-method page's 'one consequence lands on this repository directly' passage is verified: while showing Annie the wiki on July 31, 2026, Dan wrote *\"i need to fix the thing at the top, it should say that I left my relationship within 24 hours…not you\"* — the origin of the twenty-four-hour subject-reversal correction applied to the 2015 bond-switch and Annie pages on 2026-08-02. The held row (`corpus/messages.csv` 184048, `is_from_me=1`) is timestamped **2026-08-01 02:04:41 UTC = July 31 22:04 EDT** — the page's '22:04 on July 31' is exact in local Eastern, not a displacement. Annie's reply *\"That is pretty interesting\"* is also held (row 184049, `is_from_me=0`, 2026-08-01 02:30:16 UTC = Jul 31 22:30 EDT), 26 minutes later. One wording correction: the page renders the message's second half as *\"I've spent a lot of time writing out as much of my life into story form as I possibly could… it organized it into basically my own personal wikipedia\"*; the held text reads *\"But i re-told as many stories about my life as I could and it organized it into basically my own personal wikipedia. Then it looks at all of the things that link from one page to another and makes a big graph of those.\"*"
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Both rows located by direct Python CSV scan of corpus/messages.csv (192,140 held records) for 'own personal wikipedia' and 'that is pretty interesting' — exactly one hit each, adjacent rows 184048/184049. Full text of 184048 transcribed verbatim in the claim. date_sent '2026-08-01 2:04:41' UTC → 22:04 EDT Jul 31 (held corpus is UTC per the timestamp convention; UTC−4 in July). The page's passage is in corpus__3.txt line 22254+361, '### And what happened to it in the following week' → '**Gift.** On July 31 he showed Annie **this wiki**…'."
importance    = 4
tags          = ["forensic-method", "imessage", "verbatim-quote", "wiki-self-correction", "annie-ulmer"]
created       = "2026-09-09"

[when]
start = "2026-07-31"
end   = "2026-07-31"
+++

## What the check confirms

The first documented case of the wiki being proofread by its own subject
matter is real, timestamp-exact, and verbatim at the load-bearing clause.
The page's reading — that this is a use for the apparatus none of its
four states anticipated — is interpretive, but the event it rests on is
solid: he showed her the wiki, she said 'That is pretty interesting,'
and in the same sitting he filed a correction to his own page.

## What the check corrects

The page's rendering of the message's second half is a paraphrase, not a
quote — the ellipsis covers a real rewording ('But i re-told as many
stories about my life as I could' vs the page's 'I've spent a lot of
time writing out as much of my life into story form as I possibly
could'), and the page drops the following sentence about the link-graph
entirely. Minor, but this repository's convention is verbatim-or-marked.
