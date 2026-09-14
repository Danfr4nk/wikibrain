+++
id         = "dat:1261-307-e-76th-st-rent-quotes"
layer      = 1
type       = "datum"
title      = "307 E 76th St: the Paci $10k close is already verified (dat:0295); the rent figures and bombing quote are absent"
claim      = "The page's quoted rent lines — 'last lease we signed was 2450' and 'New lease is going to be 2700' (page-dated 2024-05-02/03) — return 0 hits in the held corpus under multiple phrasings; the page's 'bombing the apt tomorrow' original (Sept 10, 2020) is likewise absent. The exterminator notice IS present: 'Exterminator will be at 307' (2024-12-08 20:19:53 UTC, matching the page's December 2024 exterminator claim). A fragment 'other than me and the exterminators' exists (2020-09-20 02:58:38 UTC) but its thread context is unattributable in the held export and does not reconstruct the page's September 2020 episode. The $10,000 final-balance message (2025-03-05) is verified verbatim as dat:0295 and is NOT re-minted here. The address's presence in Dan's life is corroborated ('307 e 76th street' 2019-02-26, 'Yo can you hit my place? 307 e 76th' 2019-03-03, both Dan-sent)."
cites      = ["src:imessage-corpus-2026", "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence = "high"
extraction = "Page body read at corpus__3.txt line 3695 (span 156). corpus/messages.csv scanned directly with Python, 2026-09-10: '2450|2700' rent phrasings -> 0; 'bombing the apt' -> 0; 'Exterminator will be at 307' -> 1 row 2024-12-08 20:19:53 UTC; 'other than me and the exterminators' -> 1 row 2020-09-20 02:58:38 UTC with empty chat_identifier/display fields. Timestamps UTC."
importance = 3
tags       = ["307-e-76th-st", "corpus-verification", "negative-data"]
created    = "2026-09-10"

[when]
start = "2019-02-26"
end   = "2025-03-05"
+++

## Deliberate non-duplication

dat:0295 owns the Paci $10,000 verification including the timezone analysis. This datum owns only the rent-quote and bombing-quote absences, the exterminator partial, and the address-presence corroboration.
