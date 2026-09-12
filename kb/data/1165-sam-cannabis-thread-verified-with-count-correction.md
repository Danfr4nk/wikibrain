+++
id            = "dat:1165-sam-cannabis-thread-verified-with-count-correction"
layer         = 1
type          = "datum"
title         = "Sam (NYC cannabis delivery) thread: firing, re-approach and verification script all verify in held corpus; message count does not"
claim         = "Direct scan of corpus/messages.csv on Sam's handle +13478611908 confirms the page's narrative beats: first message **2019-05-24 17:22:07 UTC** ('hey i just saw your ad on CL. can you deliver to e.76th') and last **2020-09-10 22:21:20 UTC** — matching the page's 2019-05-24 to 2020-09-10 range exactly. The February 2020 firing verifies: after a day of unanswered meetup attempts (Feb 23 UTC messages 'I'm in front your building / Should I leave? / Damn u can't even text me back'), Sam writes **2020-02-24 02:44:20 UTC 'Ok I'm leaving don't never hit this number'** (= Feb 23 evening Eastern — the page's February 23, 2020 date holds under the Eastern rule). The re-approach verifies: **'You still in ny' 2020-05-14 20:21:53 UTC** (page: May 14, 2020). The verification script verifies at both ends: **'Send me your Facebook link for verification'** 2019-05-24 17:26:54 and again 2020-09-10 22:10:04 UTC, with 'Accept trippy Santa' 2019-05-24 17:30:56 UTC confirming the screening-identity detail. **One correction:** the held thread has **576 rows, not 374** — the page's '374 surviving messages' figure does not reproduce from the held slice. The Menore-vs-Sam tolerance bracket (Menore absorbed unresponsiveness, Sam walked off) is consistent with what the held rows show."
cites         = ["src:imessage-corpus-2026",
                 "src:wikitest-rebuild-session-2026-09-09"]
measurement   = true
confidence    = "high"
extraction    = "Direct Python scans of corpus/messages.csv (192,140 rows): handle-scoped row count (576), sorted first/last rows, exact-phrase searches for \"don't never hit this number\" (1 hit), 'You still in ny' (1 hit), 'Send me your Facebook link for verification' (2 hits), 'trippy Santa' (1 hit), and the full Feb 23–24 2020 message sequence. The page body was read at corpus__3.txt line 66690 (139 lines); the old-wiki export carries it verbatim. All held timestamps UTC; the page's dates are Eastern and convert correctly."
importance    = 4
tags          = ["sam", "supply-network", "cannabis", "held-verified", "count-correction", "nyc-era"]
created       = "2026-09-10"

[when]
start = "2019-05-24"
end   = "2020-09-10"
+++

## Notes

- The 576-vs-374 count gap is a residue: the page may have counted only one direction or a dedicated export, but the held slice's 576-row thread is bidirectional and larger. Held-verified beats and quoted texts are unaffected.
- The page's product details (Gorilla Glue, Skittles, Kingpen carts, $50–60 eighths) are thread-content claims from the dedicated export; not re-verified in this pass.
