+++
id            = "dat:0059-nicotine-eighteen-year-record-from-twitter-archive"
layer         = 1
type          = "datum"
title         = "The nicotine row is an eighteen-year dated first-party record, assembled 2026-09-04 from the tweet archive"
claim         = "wiki/health/chemical-architecture.md assembles the stack's nicotine row from the twitter year pages into a continuous eighteen-year record: onset 2007 (a 2017-12-28 tweet: \"Smoked my first pack of cigarettes when I went to this promotional fall out boy show in 2007\"); quit #1 announced 2008-10-16 (\"I think I'm gonna stop smoking cigarettes. Another problem solved.\") and over by 2008-12-22 (\"coffee and cigarettes- the cure for a ROUGH night.\", 67 days later); an e-cigarette switch 2010-12-13 (\"3 days after moving to an e cig, i'm (un) hooked. today is day 1 with no tobacco.\") followed 2010-12-14 (\"25 hours tobacco free.\"); a restarted counter on 2011-01-10 (\"1 week smoke free!\") implying the December quit broke within three weeks; and 2019-10-09/10 (\"i could replace the constant taste of burnt tobacco with strawberry\" followed within a day by \"today i bought a can of skoal to prepare me for a weekend in Pennsylvania\"), with delivery hardware rotating through cigarettes, e-cigarette, vape, Skoal and disposables while the substance is never the thing being removed."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Quotes checked verbatim against raw/old-wiki-export-2026-09-04/whole.txt twitter year pages: 2017-12-28 tweet (line ~88108), 2008-10-16 (line ~74355), 2008-12-22 (line ~74734), 2010-12-13 (line ~79015), 2010-12-14 (line ~79027), 2011-01-10 (line ~79565). The page's claim that 2007's show is the 6 February 2007 Times Square Fall Out Boy show is stated as likeliest-not-settled and was not independently checked. The tweet archive is transcribed from the prior wiki; the underlying tweets are not held here."
importance    = 4
tags          = ["health", "old-wiki", "nicotine", "twitter", "measurement"]
created       = "2026-09-09"

[when]
start = "2007"
end   = "2019-10-10"
+++

## The assembly holds against the transcribed tweets

Every quoted line in the nicotine table on `wiki/health/chemical-architecture`
exists verbatim in the twitter year pages embedded in the old-wiki export,
with the tweet IDs and UTC timestamps the export carries:

| tweet | status ID |
| :--- | :--- |
| 2008-10-16 *"I think I'm gonna stop smoking cigarettes. Another problem solved."* | 962839513 |
| 2008-12-22 *"coffee and cigarettes- the cure for a ROUGH night."* | 1072807698 |
| 2010-12-13 *"3 days after moving to an e cig, i'm (un) hooked..."* | 14390373749104640 |
| 2010-12-14 *"25 hours tobacco free. i should have done this years ago :("* | 14686327719071744 |
| 2011-01-10 *"1 week smoke free!"* | 24588580626104320 |
| 2017-12-28 *"Smoked my first pack of cigarettes when I went to this promotional fall out boy show in 2007..."* | 946224595962679296 |

What the assembly adds — and what no year page held — is the sequence:
the 67-day failure of quit #1, the counter restart that exposes the
unmentioned December relapse, and the continuity reading that onset (2007)
falls in the same year as the first opiate.

## What it establishes and what it does not

**Established.** The nicotine row is the stack's only dated-at-both-ends
substance row besides the intake-ledger's single measured night: onset is
2007 and the 2011–2015 gap the page flags is the longest stretch without a
dated instance, though the page itself notes the archive there is a fetch
artefact and absence proves nothing.

**Not established.** No dose, no rate, no frequency — the page says so
explicitly ("Still description, not measurement"), and nothing in the export
can fill the ledger. The 6 February 2007 Times Square show identification is
the page's own speculation, flagged as such.

## Relation to existing nodes

No prior dat node covers the nicotine timeline. [`dat:0018`](0018-old-wiki-intake-ledger-discipline.md)
covers the ledger's discipline; this is the archive-side complement the
page itself draws the contrast against.
