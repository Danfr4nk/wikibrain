+++
id            = "dat:0168-morgantown-call-source-amendment-artifact-verified"
layer         = 1
type          = "datum"
title         = "Morgantown St Aug 16, 2026 recording: source amendment's artifact identity verified byte-for-byte against the held audio; transcript checked, one stale assertion fails"
claim         = "The Source Amendment page (filed 2026-08-20, **superseded the same day** once the transcript arrived) records the provenance of the August 16, 2026 Morgantown St call recording. **Every artifact identifier on the page was verified independently in this repository**: the held m4a (`raw/e0914806-f920-40ab-9371-447bdbb736f5-morgantown-st/`) is **13,097,702 bytes**, duration **927.242449 s** (ffprobe), **MD5 `96bd3df46d4b0f4c5278cc9d6978621d`**, **SHA-256 `f656b6abd5c676a001eaf1f9a207cbc1fad262b3dbc3e9b145618d2bc307a4ec`** — all matching the page exactly. The page records a 611-line operator-supplied transcript with timestamped turns through 00:14:59 (audio continues to 00:15:27.24) and transcript-level observations: Speaker 1 conditioning return of the phone on answers; Speaker 2 repeatedly asking to leave and for the phone, saying *\"You threatened me\"* (00:05:22) and *\"You're holding me hostage\"* (00:09:10, 00:09:25); Speaker 3 repeatedly telling Speaker 1 to return the phone and let Speaker 2 leave; Speaker 1 saying *\"Gay ass, kill yourself\"* to Speaker 3 (00:08:12). The 2026-09-09 independent validation report corroborates artifact identity and core conduct (phone search, interrogation, repeated exit demands, offer to drive, parental-disclosure threat), and finds **one assertion fails**: the Jerel Coles page still says Annie \"never says yes\" — both the direct transcript and the independent 175-segment pass contradict that categorical wording. The page's epistemic boundary stands: artifact-level integrity is established; it is **not** proven unedited, speaker attributions are **not** independently acoustically verified, and the alleged assault is **not** resolved."
cites         = ["src:e0914806-f920-40ab-9371-447bdbb736f5-morgantown-st",
                 "src:morgantown-call-independent-stt-transcript-2026-09-09",
                 "src:morgantown-call-validation-report",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Page body read directly from corpus__3.txt line 104666 (84 lines). Artifact identifiers verified by direct computation in this repo: sha256sum and md5sum of the held m4a match the page's hashes; ffprobe reports duration 927.242449 and size 13097702, matching the page's figures to the digit. The independent STT transcript file has 175 segments (per its manifest: 0:00–14:23), consistent with the validation report's '175-segment pass'. The validation report was read via pdftotext from raw/morgantown-call-validation-report/morgantown-call-validation-report.pdf (6 pages, created 2026-09-09): its 'Artifact identity holds', 'Core conduct holds', 'One assertion fails' (Jerel Coles page), and 'Two boundaries remain' findings are quoted above. The transcript-level timestamped observations (00:05:22 etc.) are the page's claims from the operator-supplied transcript, which is on Drive (raw/self/audio/) and not held here — relayed, not re-verified. The page is in the old-wiki export (the amendment predates it, filed 2026-08-20)."
importance    = 5
tags          = ["morgantown-call", "artifact", "verified", "validation", "2026-08", "boundaries"]
created       = "2026-09-09"

[when]
start = "2026-08-16"
end   = "2026-09-09"
+++

## What the check confirms

This is the strongest artifact verification in the ingest batch: four
independent identifiers (size, duration, MD5, SHA-256) all match the held
file, and the independent 2026-09-09 validation report confirms both the
artifact identity and the core conduct the transcript describes. The
amendment's own discipline — transcript-level observations, not legal
findings; speaker identities as transcript labels unless independently
resolved — is exactly the discipline the validation report enforces.

## What it does not confirm

The timestamped transcript observations rest on the operator-supplied
transcript, which this repository does not hold (the Drive copy,
`raw/self/audio/`, was not pulled). The independent STT pass corroborates
the conduct at the level the report states; it does not verify the exact
timestamps or speaker labels. The one failing assertion — the Jerel Coles
page's \"never says yes\" — is the validation report's finding, recorded
here as its claim; the downstream page correction is not in this ingest
batch.
