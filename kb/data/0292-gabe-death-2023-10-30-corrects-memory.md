+++
id            = "dat:0292-gabe-death-2023-10-30-corrects-memory"
layer         = 1
type          = "datum"
title         = "Gabe the cat died 2023-10-30 per Dan's own message — the wiki is right, the standing memory note ('Nov 2023') is off"
claim         = "The master timeline's Tier-1 entry for **2023-10-30** — Gabe (the cat): died 2023-10-30 (*\"I had to put gabe down today\"*), confirmed by Eric Jester's independent same-date message — is verified verbatim against the held corpus. Dan's message (is_from_me=1) of **2023-10-30 21:45:44 UTC** (= 17:45 EDT) reads *\"I had to put gabe down today\"*; a second send of the same text follows at 2023-10-31 00:12:28 UTC. The standing memory note ('cat Gabe ... d. Nov 2023') is therefore imprecise — the dated record says October 30, 2023, not November."
cites         = ["src:imessage-corpus-2026",
                 "src:wikitest-rebuild-session-2026-09-09"]
confidence    = "high"
extraction    = "Observed directly: searched corpus/messages.csv for 'put gabe down' — 2 hits, message_id 214872 (2023-10-30 21:45:44 UTC, is_from_me=1, chat +18172693422) and 22946 (2023-10-31 00:12:28 UTC, is_from_me=1, chat +14404653497), both text exactly 'I had to put gabe down today'. 21:45 UTC = 17:45 EDT, so the local date is unambiguously 2023-10-30. Timeline entry at corpus__3.txt ~115226. MEMORY.md's 'd. Nov 2023' was the approximate note being corrected."
importance    = 3
tags          = ["master-timeline", "gabe", "death", "corpus-verification", "memory-correction"]
created       = "2026-09-09"

[when]
start = "2023-10-30"
end   = "2023-10-30"
+++

## Notes

- The Eric Jester independent same-date condolence cited on the timeline was
  not re-verified here (the quote is on the source page, not re-pulled); Dan's
  own two sends are sufficient for the date.
- The memory correction is minor in substance — 'Nov 2023' vs '2023-10-30' —
  but it is exactly the class of time-frozen imprecision the wiki's governance
  rules target, so it is filed rather than left as a comment.
