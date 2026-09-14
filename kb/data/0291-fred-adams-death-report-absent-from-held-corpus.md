+++
id            = "dat:0291-fred-adams-death-report-absent-from-held-corpus"
layer         = 1
type          = "datum"
title         = "Suz's 2020-05-24 report of Judge Fred Adams's death is on the wiki but absent from the held iMessage corpus"
claim         = "The master timeline (Tier 1, May 2020) states Fred Adams — the judge, Ira's former law partner and Fran-estate trustee — died in the third week of May 2020, reported by Suz's message of **2020-05-24 at 07:24** saying she learned of it *\"last night\"* (May 23). The old wiki's annual-volume-suz RE-CHECKED note confirms suzanne-frank 'gained a section on six dated messages naming Judge Fred Adams, including her report of his death (2020-05-24)'. The held iMessage corpus (corpus/messages.csv) contains **no** 2020 message matching 'adams died', 'found out last night, quite by coincidence', or any Suz-authored Adams-death report — its only Adams rows are 2019 messages about calling Judge Adams and a 2018 'The Adams are here'. The six-message thread the wiki cites is not in the held export."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "low"
extraction    = "Observed directly: full-text searches of corpus/messages.csv for 'adams died' (0 hits), 'found out last night' (1 unrelated 2026 hit), and 'adams' (hits: 2017-04-25 direct-deposit, 2018-08-03 'The Adams are here', 2019-04-15/2019-05-30 'call judge adams' — all pre-2020). Old-wiki-export whole.txt:12554 (annual-volume-suz RE-CHECKED: 'six dated messages naming Judge Fred Adams, including her report of his death (2020-05-24)'), 12572, 23160, 50077, 50623–50659 (Judge Fred Adams identity: Ira's former law partner, trustee). The timeline entries sit at corpus__3.txt ~114693–114715."
importance    = 3
tags          = ["master-timeline", "fred-adams", "death", "suzanne-frank", "corpus-gap", "unverified"]
created       = "2026-09-09"

[when]
start = "2020-05-23"
end   = "2020-05-24"
+++

## What this means

The wiki's Adams-death material rests on a message thread (six dated messages,
per the RE-CHECKED note) that the 192,140-record held export does not contain —
either it lives in the Facebook export (unavailable), a different phone-number
export, or an export window the held corpus doesn't cover. The identity facts
(Judge Fred Adams, Ira's former law partner, Fran-estate trustee, the
2018-03-30 'fred would have put the kaibosh on me being paid to watch gram'
message) are corroborated; the *death report itself* is not re-verifiable
here. A newspaper obituary for a sitting/former judge in Fayette County would
be an independent check — flagged, not performed.
