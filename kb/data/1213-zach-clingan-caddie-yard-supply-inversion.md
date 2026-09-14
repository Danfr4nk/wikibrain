+++
id            = "dat:1213-zach-clingan-caddie-yard-supply-inversion"
layer         = 1
type          = "datum"
title         = "Zach Clingan: 2017 caddie-yard supply direction (Dan selling to him) verified; 2009 joke and 2014 taxonomy not in the held slice"
claim         = "The wiki/people/zach-clingan page's 2017 caddie-yard claim — that the exchanges run the other way from every other supply node, with Dan holding the edibles/chocolate kush and Clingan asking — verifies in the held corpus: 2017-10-01 15:45:41 UTC, outbound, *\"but if you're trying to get funky fresh later i've still got some chocolate kush and picking up something new after work...if you want to co\"* — Dan as the seller in the caddie-yard exchange. Two other page claims are not re-verifiable in the held slice: the October 6, 2009 'creepy faun' joke (2009 predates the held corpus's 2011 start; it would live in the dox-scan dump) and the April 21, 2014 'drug people' taxonomy with Tom ('we examined like how steve kezmarsky and zach clingan are 'drug people' and they're assholes') — no exact or near-exact variant of that quote exists in the held rows, though the same thread family does carry later Clingan/Kezmarsky pairing (e.g. 2018-01-19: 'Zach Clingan/Steve Kezmarsky' listed among people Dan would not be chill with). The December 9, 2015 origin texts ('Zach clingan just texted me saying \"I have to talk to you\"' 2015-12-09 20:18:33 UTC received; 'THAT is who introduced me to drugs' 2015-12-09 20:20:50 UTC outbound) are already filed in dat:0162 and are not re-derived here; the Clingan/Harshman disambiguation (the 843 number) rests on contact-export inference, not on held rows."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Direct Python scans of corpus/messages.csv 2026-09-10: 'chocolate kush' with the quoted 2017-10-01 row -> exactly one; 'creepy faun' -> zero; 'kezmarsky and zach clingan' / 'drug people' quote -> zero; 'Zach clingan just texted me' and 'THAT is who introduced me to drugs' -> exactly the 2015-12-09 rows already in dat:0162. Page body read from wave-6 slice (wiki/people/zach-clingan.md, 301 lines from whole.txt:71234)."
importance    = 3
tags          = ["zach-clingan", "corroborated", "supply-network", "caddie-yard", "partial-verification"]
created       = "2026-09-10"

[when]
start = "2009-10-06"
end   = "2017-11-05"
+++

## Division of labor with dat:0162

dat:0162 holds the December 9, 2015 disambiguation and the drug-use-origin
quote. This node holds the page's *other* findings: the verified 2017
supply inversion (Dan as seller, distinct in the network) and the honest
non-verification of the 2009 and 2014 register traces.
