+++
id         = "dat:1786-transcription-refused-faint-audio"
layer      = 1
type       = "datum"
title      = "Transcription refused on faint-audio clip"
claim      = "Sammy refused to transcribe a faint-audio clip because the transcriber was hallucinating; no fake transcript was produced."
cites      = ["src:sammy-chat-transcript-20260918-1430"]
confidence = "high"
reliability = "primary"
importance = 2
created    = "2026-09-18"

[when]
date   = "2026-09-18"
+++

Dan sent an audio clip with very faint speech and asked for transcription. The transcription attempt hallucinated content that was not verifiable against the audio, so Sammy refused to hand over a transcript rather than fabricate one. Precedent for the pipeline: a refused transcription is a finding, not a failure — the refusal is the honest output.
