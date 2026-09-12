+++
id            = "dat:0403-ellen-ulmer-july-2026-disclosure-settled"
layer         = 1
type          = "datum"
title         = "Ellen page's open DISCREPANCY settled: the July 26, 2026 disclosure is an iMessage text at 07:06 EDT, not an email, not 06:22"
claim         = "The page `wiki/people/ellen-ulmer.md` carries an open **DISCREPANCY [2026-08-17]**: 'Text versus email, and 06:22 versus ~07:00, are not settled here.' The held `corpus/messages.csv` settles both. Dan's disclosure message to Ellen — opening *'I am so incredibly sorry to bother you...'* and describing messages written from Annie's phone by someone other than Annie, referencing the sexual-assault police report — is row **2026-07-26 11:06:12 UTC = 07:06 EDT**, i.e. an iMessage text, not the 'email to Ellen' the `july-august-2026-reentanglement` page recorded as 'not in raw/'. The 06:22 figure is the operator's own *'Alright I'm contacting Ellen'* intent-announcement on the reentanglement page; the message itself went out **44 minutes later at 07:06 EDT**."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "The disclosure text was located in the held 192,140-row corpus/messages.csv on Ellen's thread handle, sender 'Me', 2026-07-26 11:06:12 UTC. It is the thread's final row. The 11:06:12 UTC timestamp converts to 07:06 EDT on 2026-07-26. The page's own GAP CLOSED note already records that the reentanglement page 'times the disclosure to 06:22 and its own Gaps section calls it the email to Ellen, recorded as not in raw/' — this datum supersedes that 'not in raw/' record."
importance    = 4
tags          = ["people", "corpus", "timestamp-correction", "gap-closed"]
created       = "2026-09-09"

[when]
start = "2026-07-26"
end   = "2026-07-26"
+++

## What changes downstream

- The page's DISCREPANCY note can be closed: channel = **text** (iMessage),
  time = **07:06 EDT**. The 06:22 vs ~07:00 split resolves to 'announcement at
  06:22, message sent 07:06' — both figures were real, describing different
  acts.
- The reentanglement page's Gaps entry ('email to Ellen', 'not in raw/') is
  wrong on both counts and should be corrected on that page: it was a text,
  and it is in the held logs.
- The same row is the one the page's 63-message count excludes; dat:0402
  covers the count.

## Cross-references

- [`dat:0402`](0402-ellen-ulmer-thread-count-correction.md) — the count
  correction on the same page.
- [`dat:0257`](0257-morgantown-call-leverage-campaign.md) — the July 2026
  crisis context the disclosure belongs to.
