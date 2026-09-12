+++
id            = "dat:0678-josh-brannan-wav-artifact-verified"
layer         = 1
type          = "datum"
title         = "'josh brannan is innocent.wav' is in the held corpus, sent minutes after the Google AI Studio TTS pitch"
claim         = "The josh-brannan page's running-joke section — Dan synthesizing a childhood memory about Josh into an AI text-to-speech file titled *'josh brannan is innocent.wav'* in May 2025 — is confirmed by the held corpus: an attachment row with transfer name **josh brannan is innocent.wav** (audio/x-wav, 162,608 bytes) sent **2025-05-30 04:09:17 UTC** (00:09 EDT) by Dan (from_me=1), twelve minutes after his own messages *'dude have you seen the new google AI studio text to speech generator'* and *'i mean obviously veo 3 is incredible but this TTS tool is fucking AWESOME'* (03:57 UTC) in the same thread. The placement matches the page's account exactly. What is NOT held: the 2017-02-27 Facebook reconnection thread (41 messages — Facebook threads are unavailable in this repository, only MANIFEST.json) and the ten tweets of 2009–2012 (no tweet corpus is held; the citations live in whole.txt and the page's Facebook/dox sources). The thread containing the wav has an empty display name in the held pull, so the page's claim that it was traded *with Jerad* rests on operating_manual.md, not on held attribution."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Attachment row located in corpus/messages.csv by transfer-name search ('josh brannan is innocent.wav', bytes 162608, mime audio/x-wav); surrounding messages read from the same chat_identifier. Timestamps are the CSV's UTC date_sent. corpus/ tree checked for a tweet corpus (corpus/derived/ holds only summary.json and threads.csv); raw/facebook-threads/ holds only MANIFEST.json."
importance    = 3
tags          = ["josh-brannan", "old-wiki", "corpus", "attachment-verification"]
created       = "2026-09-09"

[when]
start = "2017-02-27"
end   = "2025-05-30"
+++

## What survives as testimony

The 2017 Facebook reconnection — including the camming-job admission
('My job is fucking my girlfriend on webcam... Slash golf caddy') and
the grandmother/ski-trip nostalgia — is sourced to a Facebook export
that is not held here. It stays testimony. The tweet record (ten
tweets, the 23 February 2012 cohort list, the 6 November 2012 Latrobe
message) is likewise old-wiki-attributed but unheld in this repository.
Nothing in the held corpus contradicts any of it; the one checkable
piece (the wav) confirms the page's account of the joke's mechanics.
