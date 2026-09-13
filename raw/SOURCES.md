# Raw source inventory — what exists, where, and how reachable

The evidence base is larger than what is in this repository. This is the map,
recorded because working it out took a dozen calls and should not be repeated.

Reachability is the operative column: everything below exists, and the routes
differ sharply in cost.

> **Audited 2026-09-13.** [`INVENTORY-GAPS-2026-09-13.md`](INVENTORY-GAPS-2026-09-13.md)
> reconciles this map against the measured state of both repositories and
> carries the nine open gaps. Three corrections it forced are folded in below.
> The audit is the live document; this file is the map.

## The whole archive, measured

Counted from the working tree 2026-09-13. `raw/` holds **36** source
directories; the eleven below are the ones the carried-over inventory named,
and §"Also here" lists what it omitted.

| Source | On disk | Span / size |
| :--- | :--- | :--- |
| `imessage/` | 5 files, 46 MB | 192,140 msgs, 2011-03-19 → 2026-09-07 |
| `facebook/` | 4,404 files, 234 MB | exports `-a` (2,927) and `-b` (1,475), both 2026-09-08, plus `ross-thompson/` |
| `instagram/export-20250824/` | 1,215 files, 626 MB | 9 sections, pulled 2025-08-24 |
| `chatgpt/` | 754 files, 488 MB | `dfrank88` 288 MB + `iHateDanFRANK` 201 MB, both 2025-08-05 |
| `takeout/` | 588 files, 856 MB | 10 archives, 2024-05-14 → 2026-07-22 |
| `drive-sweep/20260911/` | 220 files, 319 MB | 15 subfolders |
| `location/` | 4 files, 31 MB | 121,733 records, 2014-04-02 → **2024-05-14** |
| `wiki/` + `old-wiki-export-2026-09-04/` | 1,499 files, 34 MB | 497 pages, body-sha256 indexed |
| `twitter/` | 3 files, 1.3 MB | **2,741 tweets, 2008-09-24 → 2026-09-01** |
| `googlechat/` | 9 files, 852 KB | 7 distinct; 2 byte-identical dup pairs |
| `gmail/` | 1 file, 20 KB | Creative License / McKiernan thread, 2026-08-10 |

**Three corrections to what this file used to say:**

1. **Twitter is not "Aug 2013 → Apr 2026."** Parsed from `archive.jsonl`, the
   span is **2008-09-24 → 2026-09-01**. Nearly five years of early material was
   present and unaccounted for. `reposts.jsonl` is **5 records** — not a second
   corpus, and not comparable to the 2,741 tweets.
2. **The ingested Facebook source is `export-20260908-a/b`**, not
   `src:facebook-export-2026-06-23` as referenced further down this file. The
   June generation is superseded.
3. **Location history stops at 2024-05-14.** This file nominates location as the
   independent-corroboration channel; it does not cover 2024-2026, which is the
   period the Morgantown call, the Aug-2026 block retraction and the Creative
   License dispute all sit in.

### Export staleness, as of 2026-09-13

Uneven enough that "checked every channel" is usually false:

| Channel | Newest | Age |
| :--- | :--- | ---: |
| Facebook | 2026-09-08 | 5 days |
| Takeout | 2026-07-22 | 2 months |
| Instagram | 2025-08-24 | **13 months** |
| ChatGPT | 2025-08-05 | **13 months** |
| Location | 2024-05-14 *(data)* | **28 months** |

### Also here, and previously unlisted

Eight source families are in `raw/` and were absent from the inventory. Anything
that enumerates sources from a list rather than from the tree misses them:

| Source | Size | What it is |
| :--- | :--- | :--- |
| `sammy/` | 260 files, 61 MB | 25 chat-scrape batches, 2026-09-11 → 09-13, + a location-history batch |
| `messenger-drive-2026-09-12/` | 6.0 MB | 27,573 FB/IG/TikTok DM records, 331 threads, 2007–2026 — a **distinct channel** from the Facebook export |
| `takeout/**/YouTube` | *(in 856 MB)* | Watch + search history, 39 playlists, comments, subscriptions, 2 uploads |
| `e0914806-…-morgantown-st/` | 13 MB | 2026-08-16 call audio, 15:27 — with `morgantown-call-independent-stt-transcript-2026-09-09/` and `morgantown-call-validation-report/` as separate sources |
| 10 × `photo-ingest-2026091*/` | ~100 KB | Annie ×6, Rick, Zac, Virginia grow, 2037 batch |
| 4 × photo/document sets | 3.6 MB | 307 E 76th lease signing (2019-02-25), Fran Coldren + Diane letters (2015/2017), Frank's Auto Supermarket, Legion of Skanks tapings |
| `myactivity-2026-09-12/` | 10 MB | 5 gzipped My Activity dumps, separate from `takeout/` |
| `self/`, `facebook-threads/`, `the-wall-2025-09-03/`, `correction-20260912-virginia-gps/` | ~1.7 MB | Aug–Sep 2026 iMessage slice, FB thread index, misc |

## In the repository now

| Source | State |
| :--- | :--- |
| `old-wiki-export-2026-09-04/whole.txt` | 497 pages, 7.5 MB, byte-exact. Ingested as `src:old-wiki-export-2026-09-04`, `testimony = true` |
| `corpus/messages.csv` | 192,140 messages, 2011-03 → 2026-09. **Gitignored and re-pullable**: `bin/wb-corroborate --pull` fetches it and verifies sha256 against `corpus/manifest.json` before use |
| `e0914806-f920-40ab-9371-447bdbb736f5-morgantown-st/E0914806-…-Morgantown St.m4a` | The 2026-08-16 Annie/Coles/Dan call audio, 15:27, 13.1 MB, byte-exact. Ingested as `src:e0914806-f920-40ab-9371-447bdbb736f5-morgantown-st`. sha256 matches the copy already filed in Drive |
| `morgantown-call-independent-stt-transcript-2026-09-09/…txt` | Independent faster-whisper (small.en) transcript of the call, 175 segments, 0:00–14:23. Ingested as `src:morgantown-call-independent-stt-transcript-2026-09-09`, `reliability = uncertain` — STT output, spot-check before quoting |
| `morgantown-call-validation-report/morgantown-call-validation-report.pdf` | Six-page validation report (2026-09-09): provenance, transcription cross-check, and the stale-claim defects found on the live wiki pages. Ingested as `src:morgantown-call-validation-report` |

## Reachable, not yet pulled

All of it sits in Google Drive under `wiki-brain-main-1/raw/`
(`1FoR0iAGdS3bAVdzFKYZPxnrLqyCckSdb`), mirroring the prior wiki's own `raw/`
tree: `self/`, `people/`, `places/`, `health/`, `legal/`, `mind/`, `music/`,
`interests/`, `timeline/`, `tech/`.

The richest is `raw/self/` (`16gzTW1PxZvwQMleiZ8iXKxh5rLeSDNM-`):

| Folder | What it is | Why it matters |
| :--- | :--- | :--- |
| `facebook/` | **NOW PUBLIC** — the unzipped tree was shared 2026-09-09 | Anonymous HTTPS works per file: `docs.google.com/document/d/<id>/export?format=txt`. Ingested as `src:facebook-export-2026-06-23` — **superseded**; `raw/facebook/` now holds the 2026-09-08 generation (`export-20260908-a/b`). First retrieval closed an open contradiction (`dat:0031`) |
| `dox-scan/`, `dox-md/` | **BLOCKED — needs sharing.** `all_imessages_complete_dump.txt` is 28.9 MB: past the connector's 10 MB limit, and anonymous HTTPS returns a sign-in page. **Same blocker as `takeout-20260103T040931Z-3-002.zip`** (`1iXw3onpgXUtN9huey54qPV7ctnc0ffuF`, 17.8 MB, holds the un-ingested Search + Chrome `MyActivity.html`) — re-verified 2026-09-13, anonymous fetch returns `accounts.google.com/v3/signin`. One sharing change opens both | This is the **decisive test** for `pat:reasoning-sound-provenance-unreliable`'s main falsifier. If the four unverifiable quotes are in this dump and not in the authoritative export, the finding is about coverage rather than provenance — a much less alarming conclusion that changes what to do next. One sharing change on this folder settles it |
| `twitter/` | Archive | Already load-bearing: the prior wiki's nicotine chronology and the Suboxone day-zero correction both rest on it |
| `location/` | Location history | The independent-corroboration channel `ROADMAP.md` §4 wants for the 2021–2022 corpus gap |
| `message-csv/`, `message-exports/`, `imessage/` | Earlier message extracts | Shelved by `CORPUS_POLICY.md`; useful only as evidence of what was believed |
| `gmail-captures/`, `chatgpt-export/`, `gemini-activity/`, `youtube-watch-history/`, `concerts/`, `captures/` | Assorted | Unassessed |

### The two routes, and their limits

**Drive connector, one file per call.** Works for anything small. Fine for
targeted retrieval — find the one conversation bearing on a claim and pull it.
Not viable for a tree of hundreds of files.

**Anonymous HTTPS.** Works *only* for files deliberately shared "anyone with the
link". The message corpus is, which is why `--pull` works and why the whole
corpus arrives in one request. The Facebook zip is **not**: a direct download
redirects to `accounts.google.com`. The connector also refuses it — 82 MB is
past its export limit, which is how the corpus behaves too (it refuses the
20 MB sheet while the HTTPS export serves all 48 MB of it).

**Facebook was made public on 2026-09-09 and per-file anonymous retrieval now
works.** Bulk is still awkward: listing conversation folders costs one connector
call per page (~500 conversations), and the 82 MB zip remains private and past
the connector's limit. The practical route today is **targeted** — find the
conversation bearing on a claim, pull that one file over HTTPS. That was enough
to close `con:`-level questions on the first try.

A cheaper enumeration may exist: a title-wide search for `message_1` would
return every conversation's message file in pages of 100 rather than one call
per folder. Untested.

### Reading a Facebook thread — the trap

Each message is a block: speaker name, a rule, the text, then the timestamp.
**Nothing in the text carries the speaker.** Pull a line without its block and a
first-person sentence reads identically whoever typed it — which is exactly how
the prior wiki came to record another person's DUI as an unexplained fact about
the subject (`dat:0031`). Parse the block, never the line.

## Existence as evidence

At the operator's instruction, file **metadata alone** is treated as a source:
titles, sizes, types, dates. Nothing needs downloading for that, and the
justification is the same one `ROADMAP.md` §3 makes for images — a creation
timestamp is mechanically produced and uncomposed, which makes it a different
class of evidence from a corpus where every byte is something somebody chose to
type.

First pass: `src:drive-media-inventory-2026-09-09` and
[`dat:0032`](../kb/data/0032-drive-media-three-populations.md). Both marked
`sensitive` — they name third parties, so they are withheld from the published
site while staying fully readable to `wb-query` and to every inference that
should rest on them. That is the cut the operator specified: privacy gates
output, never reasoning.

## The rule this inventory serves

A claim extracted from the prior wiki is testimony until an independent source
says the same thing. `bin/wb-corroborate` does that against the message corpus
today. Every folder above is another channel it could run against, and the
independent ones — Facebook, Twitter, location — are worth more than the
message extracts, which are the same channel in an earlier state.

Two results so far are the argument for doing this rather than trusting the
pages: [`dat:0028`](../kb/data/0028-prescriber-quotes-partly-unverifiable.md)
(three of four quotes unverifiable, census ran on a superseded dump) and
[`dat:0030`](../kb/data/0030-combos-corroborated-first-person.md) (an admission
the prior wiki said did not exist, and its stated strongest evidence
misattributed).

## RAWLOGS backfill — 2026-09-12

Dan approved ("Yes, backfill it"): wikibrain's `raw/` was 44 MB while RAWLOGS'
`raw/` held 2.8 GB — the mirror policy (wikibrain primary, RAWLOGS the backup)
was inverted in practice. This batch copies everything missing from RAWLOGS
main @ e56ef8b into `raw/`, preserving RAWLOGS' subdirectory layout exactly.

Copied 8,804 files (~2.89 GB), one commit per subdirectory:
`takeout` (591), `instagram` (1,215), `chatgpt` (754), `drive-sweep` (220),
`facebook` (4,404), `imessage` (4), `location` (4), `wiki` (1,495),
`twitter` (3), `googlechat` (9), `gmail` (1). `sammy` (102 planned) needed no
commit — identical files were already on main.

Skipped: 45 files already present byte-identical at the same path; 38 files
whose bytes already existed in `raw/` under a different name (content-hash
match — not copied twice). No path collisions.

### Secret redaction (same batch)
Two xAI API keys (40 occurrences, 8 files: 6 drive-sweep message CSVs, 1
imessage CSV .bak, raw/imessage/messages.csv) were redacted to
`xai-REDACTED-ROTATE-ME` before push — GitHub secret scanning blocks the blob
otherwise, and a live key must not be public. An AWS key ID inside expired
ChatGPT-export S3 presigned URLs (3 files, 72 occurrences, OpenAI's session
credential, expired 2025-04-22) was redacted to `<redacted>`.
Byte-originals remain in private RAWLOGS. Recommendation: rotate both xAI keys.

### Large-file handling (GitHub API limits, same batch)
Four files could not be pushed through the Git Data API as single blobs and
were handled specially (byte-originals remain in private RAWLOGS):
- `raw/imessage/messages.csv` (47.8 MB, 192,140 rows, 2011-03-19 → 2026-09-07)
  — the blob-create API rejects it. Present here as a verified-lossless split:
  `raw/imessage/messages-part1-2011-2019.csv` (96,070 rows, 21.8 MB) and
  `raw/imessage/messages-part2-2019-2026.csv` (96,070 rows, 26.2 MB).
  Recombining parsed rows reproduces all 192,140 records exactly (verified
  2026-09-13). Public copy carries the xAI-key redaction; RAWLOGS keeps the
  byte-original.
- ~~`raw/takeout/.../Gemini Apps/Screen Recording 2025-11-26 at 9.-6250b4544e5b66cd.mov`
  (40.6 MB), `.../bassdown final bounce-f9869e242729f118` and
  `.../bassdown final bounce-697663cfa661ba2f` (38.4 MB each, same bytes)~~ —
  **recovered 2026-09-13.** Trees referencing ~38 MB+ blobs time out on the
  **Git Data API**; native `git push` has no such ceiling and carried all three
  (117 MB, 9 seconds), byte-exact from RAWLOGS with hashes re-verified after
  the copy. The 36–38 MB "practical ceiling" is an API limit only — do not
  treat it as a repository limit. GitHub's actual per-file hard cap is 100 MB.
