# Raw source inventory — what exists, where, and how reachable

The evidence base is larger than what is in this repository. This is the map,
recorded because working it out took a dozen calls and should not be repeated.

Reachability is the operative column: everything below exists, and the routes
differ sharply in cost.

## In the repository now

| Source | State |
| :--- | :--- |
| `old-wiki-export-2026-09-04/whole.txt` | 497 pages, 7.5 MB, byte-exact. Ingested as `src:old-wiki-export-2026-09-04`, `testimony = true` |
| `corpus/messages.csv` | 192,140 messages, 2011-03 → 2026-09. **Gitignored and re-pullable**: `bin/wb-corroborate --pull` fetches it and verifies sha256 against `corpus/manifest.json` before use |

## Reachable, not yet pulled

All of it sits in Google Drive under `wiki-brain-main-1/raw/`
(`1FoR0iAGdS3bAVdzFKYZPxnrLqyCckSdb`), mirroring the prior wiki's own `raw/`
tree: `self/`, `people/`, `places/`, `health/`, `legal/`, `mind/`, `music/`,
`interests/`, `timeline/`, `tech/`.

The richest is `raw/self/` (`16gzTW1PxZvwQMleiZ8iXKxh5rLeSDNM-`):

| Folder | What it is | Why it matters |
| :--- | :--- | :--- |
| `facebook/` | **NOW PUBLIC** — the unzipped tree was shared 2026-09-09 | Anonymous HTTPS works per file: `docs.google.com/document/d/<id>/export?format=txt`. Ingested as `src:facebook-export-2026-06-23`. First retrieval closed an open contradiction (`dat:0031`) |
| `dox-scan/`, `dox-md/` | **BLOCKED — needs sharing.** `all_imessages_complete_dump.txt` is 28.9 MB: past the connector's 10 MB limit, and anonymous HTTPS returns a sign-in page | This is the **decisive test** for `pat:reasoning-sound-provenance-unreliable`'s main falsifier. If the four unverifiable quotes are in this dump and not in the authoritative export, the finding is about coverage rather than provenance — a much less alarming conclusion that changes what to do next. One sharing change on this folder settles it |
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
