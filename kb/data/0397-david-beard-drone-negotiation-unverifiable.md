+++
id            = "dat:0397-david-beard-drone-negotiation-unverifiable"
layer         = 1
type          = "datum"
title         = "David Beard $800→$750→$700 negotiation is uncheckable: its Facebook source body is not held"
claim         = "The page `wiki/people/david-beard.md` reconstructs a drone-sale negotiation ($800 asked, $750 counter, $700 closed) sourced to a Facebook thread whose body is not held in this repository — `raw/facebook-threads/` contains only `MANIFEST.json`, no message bodies. The only held corroboration is Dan's own iMessage on **2018-09-03 18:53:32 UTC** — *\"I bought Dave beard's mavic\"* — plus a subsequent Mavic-2 discussion in the held corpus. The negotiation detail survives only as relayed through the old wiki, with the attribution that requires. Corpus page and old-wiki export are text-identical."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page body read directly from corpus__3.txt; verified text-identical against raw/old-wiki-export-2026-09-04/whole.txt. raw/facebook-threads/ listing shows only MANIFEST.json. Exact-phrase search of the held 192,140-row corpus/messages.csv for the negotiation figures returns nothing; 'I bought Dave beard's mavic' hits once at the stated timestamp."
importance    = 3
tags          = ["people", "facebook", "old-wiki", "attribution", "unverified"]
created       = "2026-09-09"

[when]
start = "2018-09-03"
end   = "2018-09-03"
+++

## What this establishes and what it does not

**Established:** Dan bought Dave Beard's Mavic (Dan's own contemporaneous
message, 2018-09-03). That is the transaction; everything else is texture.

**Not established here:** the $800/$750/$700 progression, the Facebook
dialogue around it, and any timing for the deal. If the Facebook thread body
ever surfaces, this datum is the exact gap it would fill.

## Cross-references

- `raw/facebook-threads/MANIFEST.json` — the only surviving record of the
  source; its absence of bodies is the block here.
