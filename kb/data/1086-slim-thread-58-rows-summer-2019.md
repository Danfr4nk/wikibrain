+++
id            = "dat:1086-slim-thread-58-rows-summer-2019"
layer         = 1
type          = "datum"
title         = "Slim: the summer-2019 NYC contact is chat +16466420260 — 58 rows (31 received + 27 sent), Jun 1 – Aug 4 2019"
claim         = "The slim page's NYC-era contact (handle stored as lowercase 'slim', 646 area code, '31 messages across a two-month summer window, June–August 2019') resolves to chat +16466420260 in the held corpus: 58 rows total, 2019-06-01 20:12:58 to 2019-08-04 15:46:49 UTC — 31 received and 27 sent by Dan. The page's 31 is the received side only (it notes 'Direction: All received (export artifact)'); the full thread is two-sided. No last name or identifying detail beyond the handle is available, and the page's identity gap is genuine: no Facebook or other held cross-reference was found."
cites         = ["src:imessage-corpus-2026", "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Direct Python scan of corpus/messages.csv: chat_identifier '+16466420260' has 58 rows in the window, 31 with sender != Me and 27 sender=Me; date bounds as quoted. It is the only 646-numbered thread active across the full Jun-1..Aug-4 2019 window (other 646 threads in the window: +16469534978 with 43 rows, +16465497528 with 1). Handle-to-person mapping is via the page's redacted handle; the page's date range matches the held rows exactly."
importance    = 2
tags          = ["people", "slim", "corroboration"]
created       = "2026-09-09"

[when]
start = "2019-06-01"
end   = "2019-08-04"
+++

Same pattern as dat:1081 — the page's count is the received half of a
two-sided thread. Worth standardizing in the handoff: these people-page
counts are received-only counts from a received-only source slice.
