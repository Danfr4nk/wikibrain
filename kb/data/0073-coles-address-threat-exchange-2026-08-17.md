+++
id            = "dat:0073-coles-address-threat-exchange-2026-08-17"
layer         = 1
type          = "datum"
title         = "The August 2026 Coles address-threat exchange is verified verbatim in the message corpus"
claim         = "On 2026-08-17, at 16:16:11 UTC (12:16 EDT), Coles (+17248123683, inbound) wrote \"Morgantown st by BFS\"; at 16:26:21 UTC he wrote, unprompted, \"463 Morgantown st ?\" — Dan's home address. Dan replied at 16:27:07 UTC \"Okay enjoy the TRO,\" at 16:35:42 UTC \"And let me repeat that you are not welcome on the property I live on. There are cameras everywhere and I will protect myself if you decide to show up here,\" and at 16:43:38 UTC \"So why are you sending me my address? Its an implied threat and any court would read it as such.\" Coles walked it back at 16:46:27 UTC — \"Nah not a threat I gain nothing doing anything to you\" — and on 2026-08-19 at 02:55:59 UTC (the night of Aug 18 local) wrote \"Threatening Annie because she doesn't love your cock snorting cuck ass 😂😂😂 make a move and watch how I destroy you and your mom,\" later edited. Every quoted line is in the authoritative corpus, matching the page's account of the exchange and its timing (12:16/12:26 local, walk-back sixteen minutes after the 16:27 \"TRO\" line, escalation the following night). Nothing in the record says a TRO was ever filed."
cites         = ["src:imessage-corpus-2026",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:wikitest-rebuild-session-2026-09-09"
confidence    = "high"
extraction    = "Run 2026-09-09 by fixed-string grep over corpus/messages.csv (203,626 rows, sha256-verified): rows 229911 (16:16:11), 229937/198266 (16:26:21), 229939 (16:27:07), 229951 (16:35:42), 229963 (16:43:38), 229965 (16:46:27), 231150 (2026-08-19 02:55:59, edited version 231153 at 02:57:28). Speakers and directions from the export's own fields. The page (wiki/legal/463-morgantown.md, corpus__3.txt line ~16900) carries the same quotes and sequence; the corpus confirms all of them."
importance    = 5
tags          = ["legal", "corpus", "verification", "threat", "housing"]
created       = "2026-09-09"

[when]
start = "2026-08-17"
end   = "2026-08-19"
+++

## What the verification changes

The page already carried these quotes; what changes is their footing. They
are no longer wiki transcriptions of a phone-number thread — they are
timestamped rows in the authoritative export, with the UTC→EDT conversion
matching the page's local times exactly (16:26 UTC = 12:26 EDT, the \"twelve
minutes\" and \"sixteen minutes\" intervals the page states both check out
against the row timestamps).

## Two things the corpus rows add

1. **The \"make a move\" line was edited.** Row 231153 at 02:57:28 is an
   edited version of the 02:55:59 text (\"cock snorting\" → \"Coke
   snorting\"). The edit is itself a datum about how the message was
   composed — revised upward in explicitness, not softened.
2. **The cameras are a stated protective measure on the record.** Dan's
   16:35:42 line puts \"cameras everywhere\" in first-party text, which is
   the only evidence of their existence the page claims.

## Open

Whether a TRO was filed. The page states nothing in the record says one
was; the corpus rows end at the exchange. The morgantown-call audio
(`Morgantown St.m4a`) is a separate artifact of that weekend, covered on
[[wiki/timeline/events/august-2026-morgantown-call]].
