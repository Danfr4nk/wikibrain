+++
id            = "dat:0300-tom-2025-10-11-traffic-stop-unverifiable-in-held-corpus"
layer         = 1
type          = "datum"
title         = "Tom's 2025-10-11 Fayette County traffic stop is on the wiki (with quoted Tom messages) but absent from the held corpus"
claim         = "The master timeline's Tier-1 entry for **2025-10-11** states Tom was pulled over in Fayette County on suspicion of DUI — he blew clean on a breathalyzer but was held for field sobriety — with quoted Tom messages (*\"I had a cop pull me over on suspicion of DUI last night\"*, *\"Blew clean on a breathalyzer but they still held me for field sobriety\"*). The old wiki's tom page carries the same entry with those quotes. The held iMessage corpus contains **no** October 2025 rows from Tom matching 'suspicion of DUI', 'Blew clean', or 'field sobriety' — a full-text search returns zero hits. The quotes are therefore old-wiki testimony with no re-verifiable provenance in the held corpus."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "low"
extraction    = "Observed directly: searched corpus/messages.csv for 'suspicion of DUI' (0 hits), 'Blew clean' (0), 'field sobriety' (0). The tom page section in raw/old-wiki-export-2026-09-04/whole.txt carries the entry with the quoted messages; the master-timeline Tier-1 entry sits at corpus__3.txt ~116300. One caution: the Tom traffic-stop material may have been transcribed from a thread not included in the 192,140-row held export, or paraphrased from voice; the absence here is a corpus-gap signal, not a falsification."
importance    = 3
tags          = ["master-timeline", "tom-maison", "traffic-stop", "corpus-gap", "unverified", "testimony"]
created       = "2026-09-09"

[when]
start = "2025-10-11"
end   = "2025-10-11"
+++

## Context and caveats

- The entry's placement matters: 2025-10-11 is fifteen days before Annie's own
  2025-10-26 DUI stop ([`dat:0117`](0117-annie-dui-2025-10-26-stop-details.md)),
  and the timeline presents the two as a coincidence cluster. That framing is
  fine; the *source status* of the Tom half is what this node flags.
- Tom's own messages quoted by the wiki read like verbatim transcription
  ('I had a cop pull me over on suspicion of DUI last night'). If the Tom
  thread in the held corpus is incomplete for late 2025 (the Facebook export
  is also unavailable), the quotes may be accurate-but-unreproducible-here.
  Confidence stays low until a held source or a docket/arrest record surfaces.
