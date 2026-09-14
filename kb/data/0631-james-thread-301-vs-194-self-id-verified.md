+++
id            = "dat:0631-james-thread-301-vs-194-self-id-verified"
layer         = 1
type          = "datum"
title         = "James ('Max', 'the Dude'): self-identification message verified verbatim; held thread is 301 messages, not the page's 194"
claim         = "**Verified verbatim in the held iMessage corpus.** The James page's identity anchor — the self-identification *\"Hey dan it james, Danielles working and im with the kids till like 4. But if i come by maybe i could bring my mac and help me out?\"* — is held-record: **2025-05-27 16:40:17 UTC**, sender +18782477198 (handle redacted per the corpus [phone redacted] convention). The thread under that handle in the held corpus runs **301 messages, 2025-05-27 16:40:17 → 2025-12-23 21:21:29** — the date range matches the page's *2025-05-27 to 2025-12-23* exactly, but the count does not: the page says **194** messages (from `MASTER_MESSAGES_DB_DUMP.csv`), the held corpus says 301. The 194 is from the page's own unheld dump slice; the held record supersedes it as the count to cite. **Not in the held corpus:** the page's Gemini-session material — the 'Versace' rant, 'American Fantasy' concept, tech-nerd manifesto, '48 Laws' Pittsburgh blackballing, 'production house' vision, the CNA/nursing-school background, the 'knows more about music than I do' compliment — all from unheld Gemini sessions (`Gemini-_21`, `_58`) and dox-md files. The page's 'Not the AI persona MAX_PRIME' distinction and the Danielle-partner relationship framing are consistent with [`dat:0487`](0487-danielle-onesi-first-girlfriend-gabe-james.md), which independently places James as Danielle's boyfriend via the Gemini material."
attributed_to = "src:old-wiki-export-2026-09-04"
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
confidence    = "high"
extraction    = "Direct Python scan of corpus/messages.csv: chat_identifier '+18782477198' → 301 rows, min date_sent 2025-05-27 16:40:17, max 2025-12-23 21:21:29; the self-ID text matches the page's quoted sample character-for-character. Negative scans within the thread for 'knows more about music', 'cna', 'nursing school', '48 laws', 'production house' → zero rows. The James page (corpus__3.txt line 58244, 152 lines) is present verbatim in raw/old-wiki-export-2026-09-04/whole.txt. Handle not reproduced per the corpus [phone redacted] convention."
importance    = 3
tags          = ["corroborated-primary", "james", "danielle-onesi", "imessage", "counts"]
created       = "2026-09-09"

[when]
start = "2025-05-27"
end   = "2025-12-23"
+++

## What the count discrepancy means

The 194-vs-301 gap is the same class of slice difference this repo has
seen before (cf. the Annie dual/triple-handle recounts in
[`dat:0118`](0118-annie-page-number-table-self-corrections.md)): different
exports of the same underlying phone database return different row counts.
Neither number is wrong on its own terms; the held corpus's 301 is the
number this repository can defend, because this repository holds it. The
page's *54/140 sent/received* split is likewise dump-specific and should
not be cited from this node.

## What stays open

The entire psychological/creative profile (mirror-image framing,
comparative matrix, the five 'Key Verbatim' blocks) is Gemini-session
testimony, not corpus evidence — the page's own *Verification* line says
so. A future ingest with the Gemini exports could promote it; until then
it is page-relayed.
