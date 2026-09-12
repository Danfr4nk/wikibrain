+++
id            = "dat:0848-lucas-thomas-facebook-thread-not-in-held-manifest"
layer         = 1
type          = "datum"
title         = "Lucas Thomas: the February 2017 Facebook thread is absent from the held manifest; all substance is old-wiki testimony"
claim         = "The page's entire substance — a ~45-message Facebook thread with Lucas Thomas (Feb 11–16, 2017), the 2016 shooting, the Christmas Eve 2016 fire, the 2017 arrest — is old-wiki testimony. The thread is **not in the held Facebook manifest** (396 threads scanned; no 'lucasthomas' slug, no 'Lucas Thomas' counterparty), and the thread bodies are unavailable regardless (raw/facebook-threads/ holds only MANIFEST.json). The sole held-corpus corroboration is of a name, not of any event: 'zac shumar' appears in the iMessage corpus twice — **2018-04-23**, Dan to Alexis: 'alexis starts dating zac shumar after we broke up. he used to date my sister and was getting pounds of weed through the mail', and **2026-08-30**, incoming: 'Zac Shumar's dad died'. Lucas Thomas himself has zero held-corpus hits. The fire/arrest/trauma account is therefore unresolvable from any held source in this repository."
cites         = ["src:facebook-export-2026-06-23",
                 "src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "low"
extraction    = "Corpus page read directly (corpus__3.txt line 62846, 74 lines). Manifest scan: 396 threads, case-insensitive 'lucas' -> 0. messages.csv scan: 'lucas thomas' -> 0 hits; 'shumar' -> 7 hits, two of them the Zac Shumar rows quoted above. The page names its source as 'FB messenger export 2024', unheld."
importance    = 2
tags          = ["lucas-thomas", "facebook", "corpus-gap", "unresolved", "metadata-only"]
created       = "2026-09-09"

[when]
start = "2017-02-11"
end   = "2017-02-16"
+++

## What this node does

It files the page as **fully unre-derivable**: thread absent from
metadata, bodies absent from disk, events absent from every held corpus.
That does not mean the page is wrong — the fire/arrest account may be
perfectly accurate — but it cannot be a datum in the new wiki until a
worker holds the FB export it was built from. The Zac Shumar hits are kept
because they are the only point where the page's world touches a held
record.
