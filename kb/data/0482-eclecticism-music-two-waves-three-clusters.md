+++
id            = "dat:0482-eclecticism-music-two-waves-three-clusters"
layer         = 1
type          = "datum"
title         = "Music as Architecture B: two ingestion waves, three parallel clusters, eighteen-year continuity — plus the Kubrick line verified in the held corpus"
claim         = "The eclecticism page (2026-09-01) gives music a positive account as Architecture B: **two ingestion waves** — \"MUSIC LIST (start-2024)\", a manually curated 463-track list holding the entire emo/pop-punk cluster, and \"SPOTIFY LIKED 2025–2026\", a 1,384-track live feed holding nearly all of the electronic/bass cluster — and **three functional clusters maintained in parallel, each ~5% of the library**: experimental/abrasive hip-hop (JPEGMAFIA, Kanye West + tail), emo/pop-punk/indie rock (MCR, New Found Glory, Fall Out Boy, Taking Back Sunday, Say Anything, Elliott Smith + others), electronic/bass/modern dance (LYNY, Knock2, Effin, Mau P, rSUN, oskar med k, borne, A.M.C). Continuity anchors: Fall Out Boy and Say Anything name-checked in 2007 statuses (\"currently swooning over the new FOB,\" \"in love with the new Say Anything disc\"), Elliott Smith liked August 2013 (7 tracks in the library), Electric Zoo 2010, 2012–2014 likes (ODESZA, JAUZ, Borgore, Flying Lotus, Diplo, Zedd), raves/DJ shows 2014–2019; four production aliases since ~2013 (SLOPPP → MOGZART → MOGGED-UP → GRIPNOTIC). **Verified in the held corpus**: the Kubrick-control line — messages.csv row 95743, is_from_me=1, date_sent 2017-03-29 08:47:20 (UTC; held corpus is UTC per the timestamp convention), text verbatim \"theres only one kubrick movie i haven't seen\" — but the page's joined form adds \"... and eyes wide shut,\" and that tail is not in the held message; it may be a second message not found in this check or a join of two messages."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read from corpus__3.txt line 9677 (513 lines); the wave/cluster structure, the cluster member names, the continuity dates, the four-alias chain, and the Kubrick line all match raw/old-wiki-export-2026-09-04/whole.txt verbatim (lines 3424-3984). The Kubrick line was independently located in corpus/messages.csv (message_id 95743, line 36789 of the CSV; is_from_me=1, i.e. Dan's own message, in a thread with Annie's number +17244346811): text exactly \"theres only one kubrick movie i haven't seen\" — curly apostrophe, no continuation in that row. The facebook continuity anchors (2007 statuses, Elliott Smith Aug 2013, Electric Zoo 2010, 2012–14 likes) rest on wiki/self/facebook and the facebook export, which are not held here (threads gitignored, CSV absent) — text-fidelity only."
importance    = 3
tags          = ["interests", "music", "favorites", "old-wiki", "testimony", "corroborated"]
created       = "2026-09-09"
+++

## What the check confirms

The corpus snapshot and the old-wiki export agree on the entire Architecture B
account, and the one externally checkable datum — the 2017 Kubrick line — is
Dan's own message in the held corpus, confirming the page's dated-anchor
usage. Eyes Wide Shut is independently on the page's 11-film list, which is
what makes the quote load-bearing for the page (\"a man reporting his
position inside a closed set\").

## The Kubrick-quote caveat, stated plainly

The page quotes: *\"theres only one kubrick movie i haven't seen ... and eyes
wide shut.\"* The held corpus has only the first clause, in one message,
with no adjacent message completing it in the CSV rows immediately around it.
The page's \"...\" may mark a join of two messages the prior wiki saw in the
facebook export or elsewhere, or it may be the page completing the thought
itself. Either way, the verifiable portion is exact; the tail is not
attested in the held corpus and is filed here as unresolved, not as
confirmed.

## Open per the page (not this check)

Whether the 2025–26 Spotify rows are hand-liked or algorithm-dumped
(`Origin` column untested); play counts do not exist in raw/, which is the
page's own largest hole (prediction 3 is untestable until a Spotify-history
export arrives).
