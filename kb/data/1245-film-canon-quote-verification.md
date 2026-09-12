+++
id         = "dat:1245-film-canon-quote-verification"
layer      = 1
type       = "datum"
title      = "Film canon: five quoted corpus exemplars verified; two quoted lines absent from the held corpus"
claim      = "Direct Python scan of the authoritative corpus verifies five of the film-canon page's seven quoted message exemplars, verbatim and dated to the page's claims (within the page's own day-of phrasing, Eastern): pulp-fiction prescription 2015-12-16 ('But you HAVE to see pulp fiction. I can't believe you've made it this far without catching it', corpus 2015-12-17 03:33:37 UTC = Dec 16 22:33 EST); Kubrick completion target 2017-03-29 ('theres only one kubrick movie i haven't seen', corpus 2017-03-29 08:47:20 UTC); eyes-wide-shut vicarious line 2019-07-18 ('i feel like i'm living some eyes wide shut shit vicariously through her', corpus 2019-07-19 03:13:17 UTC); 'Did u see the witch' 2017-03-30 (corpus 2017-03-31 00:19:50 UTC = Mar 30 20:19 EDT); 'Same director as the shining' 2016-03-23 (corpus 2016-03-24 01:21:16 UTC = Mar 23 21:21 EDT). Two quoted lines are ABSENT corpus-wide: 'Which means you should have seen citizen Kane, 2001 a space odyssey, and the prestige' (page-dated 2016-04-10 — 'citizen kane' returns 0 hits) and the 2023-12-24 Christmas-eyes-wide-shut watch message (no corpus hit; the only Christmas-adjacent hit is 2025-10-28 'i make the same joke about it being my favorite christmas movie'). The eleven-title canon list itself (2001: A Space Odyssey, Eyes Wide Shut, Taxi Driver, King of Comedy, The Godfather, Goodfellas, Pulp Fiction, The Social Network, The Dark Knight, Parasite, The Graduate, There Will Be Blood) is page-attributed from the unheld FAVS MASTERLIST.csv; 'king of comedy' and 'taxi driver' return 0 corpus-wide discussion mentions, consistent with the page's own gap note that Parasite/The Graduate/There Will Be Blood appear on the list without corpus discussion."
cites      = ["src:imessage-corpus-2026", "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence = "high"
extraction = "corpus/messages.csv scanned directly with Python, 2026-09-10, case-insensitive substring search; 192,140 rows. The five verified lines each returned exactly one hit. 'citizen kane', 'king of comedy', 'taxi driver' each returned 0 rows; the 2023-12-24 Christmas line was searched under multiple phrasings and returned 0. All corpus timestamps are UTC; Eastern conversions applied for the date comparisons. The absent quotes are never_observed in a year (2016, 2023) with no coverage gap for those windows, but the page may have drawn them from a different source (the page names no source beyond the corpus for these)."
importance = 3
tags       = ["film", "canon", "corpus-verification", "negative-data"]
created    = "2026-09-10"

[when]
start = "2015-12-16"
end   = "2019-07-18"
+++

## Date discipline

All five verified dates match the page's Eastern phrasing to the day. The two misses are the two most load-bearing for the page's 'canonical homework' argument: the citizen-Kane/2001/Prestige homework list is the page's single cleanest evidence of the canon-as-obligation behavior, and it does not reproduce on the authoritative corpus. That quote should be treated as old-wiki testimony (possibly drawn from an earlier or different extract) until located in a dated record.
