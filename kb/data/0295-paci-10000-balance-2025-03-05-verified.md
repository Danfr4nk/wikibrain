+++
id            = "dat:0295-paci-10000-balance-2025-03-05-verified"
layer         = 1
type          = "datum"
title         = "Paci's 2025-03-05 $10,000 final balance — verified verbatim, including the timeline's '10:42 ET' timestamp"
claim         = "The master timeline's Tier-1 entry for **2025-03-05** states that Paci wrote to close the 307 E 76th St account at a final **$10,000 still owed**, at 10:42 ET. The held corpus contains the message (from +16314558185, John Paci) of **2025-03-05 15:42:57 UTC** (= 10:42:57 EST), verbatim: *\"Dan, after paying to have the remainder of the stuff you left removed, and deducting the security deposit. I rounded the balance down to an even $10,000.00 . Let me know when you can begin to pay it down. John\"*. The wiki's quoted fragment, amount, date, and time-of-day all match to the minute."
cites         = ["src:imessage-corpus-2026",
                 "src:wikitest-rebuild-session-2026-09-09"]
confidence    = "high"
extraction    = "Observed directly: searched corpus/messages.csv for 2025-03-05 rows mentioning '10,000'/'10000'/lease terms; message_id 17929 matched, full text read via csv parse and independently via bin/corpus-query --text 'I rounded the balance down to an even' (1 matching message, same text). Timeline entry at corpus__3.txt ~115776–115778. Note the held corpus stores the timestamp as 15:42:57 UTC; the wiki's '10:42 ET' is the correct local conversion, consistent with the wave-1 timestamp convention."
importance    = 4
tags          = ["master-timeline", "john-paci", "307-e-76th-st", "money", "corpus-verification", "timezone"]
created       = "2026-09-09"

[when]
start = "2025-03-05"
end   = "2025-03-05"
+++

## Context

This is the closing entry of the staged-eviction sequence (January–March 2025):
the eviction Dan arranged with Paci and concealed from Annie (operator capture
2026-08-13, per the timeline), the February 22, 2025 move to Pennsylvania, and
Paci's March 5 account-closing. The ~$10,000 arrears figure also appears in the
timeline's February 2025 tenancy summary ('~$10,000 arrears at move-out') —
this message is its source. The '167-day hole' in the Paci thread (2024-08-18
to 2025-02) noted on the timeline is a separate thread-coverage claim not
re-checked here.
