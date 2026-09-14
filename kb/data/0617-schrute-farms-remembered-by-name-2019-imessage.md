+++
id            = "dat:0617-schrute-farms-remembered-by-name-2019-imessage"
layer         = 1
type          = "datum"
title         = "The 'Schrute Farms' secret show remembered by name twelve years later — primary-verified in the held iMessage corpus"
claim         = "On **2019-09-02** (01:44:32 UTC, i.e. 2019-09-01 EDT) Dan texted: *\"one time i went to a secret show in buffalo where fall out boy performed as 'schrute farms'\"* — a verbatim, primary record of him naming the Nov 19, 2007 Buffalo secret show twelve years on. This is the first-party counterpart to the web verification in [`dat:0361`](0361-teen-concert-years-two-source-design-verified.md), which confirmed the show's date, venue, billed name, full *Take This to Your Grave* setlist and Keith Buckley's Pantera *\"Walk\"* guest spot against Blabbermouth, Concert Archives and setlist.fm. Together the two findings make the Schrute Farms row the hardest-to-fake row on the Fall Out Boy page: a public-record event that Dan himself still named unprompted a dozen years later."
attributed_to = "src:old-wiki-export-2026-09-04"
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
confidence    = "high"
extraction    = "Direct Python scan of corpus/messages.csv (192,140 rows): 'schrute' returns exactly one row — message_id row 109864-adjacent index, date_sent 2019-09-02 01:44:32 UTC, text 'one time i went to a secret show in buffalo where fall out boy performed as ‘schrute farms’' (curly quotes in the original). The Fall Out Boy page (corpus__3.txt line 10741) carries the same detail in its Buffalo section and connections ('The Nov 19 2007 Buffalo secret show was billed under the fake name 'Schrute Farms' … remembered by name twelve years later'); the page's 2025-07-22 'chatgpt just informed me … first and ONLY time' quote is present in the old-wiki export but NOT in the held corpus (see dat:0618)."
importance    = 3
tags          = ["concert-record", "corroborated-primary", "fall-out-boy", "the-office", "imessage"]
created       = "2026-09-09"

[when]
start = "2007-11-19"
end   = "2019-09-01"
+++

## What this establishes

The page's connection claim — *\"remembered by name twelve years later\"*
— is now held-record: the 2019 iMessage names the venue city, the secret-
show framing and the *Schrute Farms* billing unprompted, with the detail
matching the web-verified record to the alias. It also quietly confirms
that the *Office* in-joke register the page attributes to him survived a
decade intact: a man who no longer claims the band still reaches for its
secret name.

## What it does not establish

The 2019 message does not claim the full-album performance or the Buckley
guest spot — those details live in the public-record verification
([`dat:0361`](0361-teen-concert-years-two-source-design-verified.md)) and in
the concert table, not in Dan's recollection here.
