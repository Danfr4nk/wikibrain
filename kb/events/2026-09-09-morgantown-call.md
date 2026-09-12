+++
id         = "evt:2026-09-09-morgantown-call"
layer      = 2
type       = "event"
title      = "The Morgantown St call audio and independent transcript are filed as raw sources"
cites      = ["src:e0914806-f920-40ab-9371-447bdbb736f5-morgantown-st", "src:morgantown-call-independent-stt-transcript-2026-09-09", "dat:0168-morgantown-call-source-amendment-artifact-verified", "dat:1347-morgantown-call-transcript-verification"]
confidence = "high"
importance = 4
tags       = ["meta", "morgantown-call", "provenance"]
created    = "2026-09-09"

[when]
date   = "2026-09-09"
+++

<!-- prose for humans; the frontmatter is for machines -->

## What happened

On 2026-09-09 two new raw sources were ingested into the repository, both
concerning the August 16, 2026 Morgantown St call:

1. **`src:e0914806-f920-40ab-9371-447bdbb736f5-morgantown-st`** — the m4a
   recording itself, `E0914806-F920-40AB-9371-447BDBB736F5-Morgantown
   St.m4a`, 13,097,702 bytes, sha256 `f656b6abd5c676a0…`, preserved
   byte-exact under
   `raw/e0914806-f920-40ab-9371-447bdbb736f5-morgantown-st/`.
2. **`src:morgantown-call-independent-stt-transcript-2026-09-09`** — an
   independent AI speech-to-text transcription of the call, 12,634 bytes,
   175 segments (0:00–14:23), preserved under
   `raw/morgantown-call-independent-stt-transcript-2026-09-09/`.

Both are `reliability = "uncertain"`, `testimony = false`: they are
artifacts, not assertions.

## Timeline

| when | what |
| :--- | :--- |
| 2026-08-16 ~23:37–23:53 | the call itself (three participants; Dan records) |
| 2026-08-20 | Source Amendment page records artifact identity and operator-supplied transcript (T1) |
| 2026-09-09 | m4a and independent STT ingested as raw sources in wikitest |
| 2026-09-09 | validation report ingested (see [evt:2026-09-09-morgantown-validation](2026-09-09-morgantown-validation.md)) |

## What the filing established

**Artifact identity verified byte-for-byte.** The Source Amendment's
identifiers were computed against the held m4a in this repository:
size, duration (927.242449 s via ffprobe), MD5 and SHA-256 all match the
page exactly
([`dat:0168`](../data/0168-morgantown-call-source-amendment-artifact-verified.md)).
This is the strongest provenance claim in the morgantown record: the
recording the wiki analyzed is the recording held here.

**Two of three load-bearing quotes anchored independently.** The
independent STT — not Dan's own biased-summary transcription — carries
the ~13:37 "send this whole thing to Ellen" line (816.78–821.52 s) and the
~7:32 "I really didn't need the money" line (451.20–458.68 s). The
page's third quote — Annie's alleged "You are" at ~02:35, its one fragment
supporting a violence reading — does **not** appear in the independent
STT's 145–175 s window; the transcript side confirms the page's own
[2026-08-20] unverifiable gap
([`dat:1347`](../data/1347-morgantown-call-transcript-verification.md)).

## Boundaries and caveats

- Speaker attribution in the independent STT is diarized by an AI
  transcription with **no per-speaker validation**; attribution of the
  two confirmed lines to Dan is inferred from position and content, not
  from a validated speaker model (`dat:1347`, filed as measurement with
  moderate confidence).
- Artifact-level integrity is established; it is **not** proven unedited.
- Both sources are marked "Not extracted": the filing records existence
  and integrity, not atomic datapoints — extraction is owed (see the
  EXTRACT.md briefs beside each artifact).
- The independent STT's timestamp frame offsets a few seconds from the
  operator transcript's frame on most lines (`dat:0257`); corroboration is
  of content, not of attribution or exact timestamps.

## Open questions

- Whether extraction of the m4a/STT ever proceeds to atomic datapoints.
- Whether per-speaker acoustic validation is attempted for the disputed
  attribution-sensitive lines.
- The missing opening ~2.5 minutes of the independent STT remains unexplained.
