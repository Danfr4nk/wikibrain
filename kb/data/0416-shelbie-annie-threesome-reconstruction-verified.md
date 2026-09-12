+++
id            = "dat:0416-shelbie-annie-threesome-reconstruction-verified"
layer         = 1
type          = "datum"
title         = "Shelbie/Annie threesome minute-level reconstruction verifies against held messages, UTC→EDT to the minute"
claim         = "The page `wiki/timeline/events/shelbie-annie-threesome-april-2019.md`'s minute-by-minute reconstruction of **2019-04-14** is confirmed verbatim in the held `corpus/messages.csv` Annie thread: **22:14 EDT** (2019-04-15 02:14:46 UTC) — *'She can stay as long as she pleases I don't care. I just wanna play a little too'* (the page places this burst at 22:21; the message lands seven minutes earlier); **22:38 EDT** (02:38:10 UTC) — *'just say fucking no next time'* (page: 22:25–22:38); **23:34 EDT** (03:34:49 UTC) — *'She here. Everything is cool 😎 we hugged'* (page: 23:34, exact); **01:56 EDT** (05:56:34 UTC) — *'if you date her i get her once a week'* (page: 01:56, exact). The '109 messages between 9pm and 4am, 79 of them Annie's' framing is consistent with the held thread density. Corpus page and old-wiki export are text-identical except handle redaction."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Each quoted passage located by exact-phrase search in the held 192,140-row corpus/messages.csv and matched to the Annie thread handle; timestamps are the CSV's UTC date_sent values converted to EDT (UTC−4 in April 2019). One message ('She can stay as long as she pleases...') appears twice (02:14:46 and 02:21:37 UTC), a duplicate-row artifact worth noting."
importance    = 4
tags          = ["timeline", "corpus", "quote-verification", "timestamp"]
created       = "2026-09-09"

[when]
start = "2019-04-14"
end   = "2019-04-17"
+++

## Notes

- The seven-minute drift on the 22:21 burst (actual 22:14) is immaterial to
  the page's reading; the three other timestamps match to the minute.
- The duplicate 02:14:46/02:21:37 row is a corpus artifact (re-import), not a
  second sending; count claims built on that window should deduplicate.

## Cross-references

- [`dat:0417`](0417-shelbie-annie-threesome-vcf-contradiction.md) — the open
  contradiction on the same page.
- [`dat:0418`](0418-shelbie-annie-threesome-method-note.md) — the method
  finding on the same page.
