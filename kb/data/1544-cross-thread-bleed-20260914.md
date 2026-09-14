+++
id         = "dat:1544-cross-thread-bleed-20260914"
layer      = 1
type       = "datum"
title      = "Cross-thread message bleed: GeoGuessr 'acid' line sent to wrong chat, self-caught in 17s, re-sent"
claim      = "2026-09-14T04:44:08Z Dan sent 'Ok I feel like I'm on acid rifht now' into the wrong thread; 17 seconds later (04:44:25Z) he self-caught with 'Wrong thread sorry'; 46 seconds after that (04:45:11Z) he re-sent the line, expanded, into the GeoGuessr thread: 'Okay so I feel like I'm on fucking acid rifht now watching this geoguesser thing'. Single observed misfire - recorded as a datum, not a pattern. Context: roughly six concurrent threads in one hour (GeoGuessr WC final, Mercer/location dump, annie-01 play-by-play, PR triage, historia civilis transcripts, avatar animation), consistent with his multi-workstream chat workflow; the bleed itself is not established as recurring."
cites      = ["src:sammy-chat-transcript-20260914-0808"]
confidence = "high"
source_type = "other"
provenance = "User rows 2026-09-14T04:44:08Z, 04:44:25Z, 04:45:11Z; byte-exact in raw/sammy/20260914-0808/chats.json."
reliability = "primary"
importance = 2
tags       = ["workflow", "2026"]
created    = "2026-09-14"

[when]
date   = "2026-09-14"
+++

## Evidence

- 04:44:08Z (user): 'Ok I feel like I'm on acid rifht now'
- 04:44:25Z (user): 'Wrong thread sorry'
- 04:45:11Z (user): 'Okay so I feel like I'm on fucking acid rifht now watching this geoguesser thing'

The assistant's in-between turn ('Ha. The fun kind or the ride-it-out kind?') landed in the wrong thread too and was met with 'No worries. The Mercer verdict stands regardless of your sobriety.'

No existing kb node on cross-thread bleed (grep 'wrong thread'/'thread bleed'/'cross-thread' returned zero hits). The 'acid' content is already classified as metaphor by the state tracker (dat:1543); this node records only the routing event.
