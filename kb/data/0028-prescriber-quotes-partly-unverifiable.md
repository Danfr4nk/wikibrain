+++
id         = "dat:0028-prescriber-quotes-partly-unverifiable"
layer      = 1
type       = "datum"
title      = "Three of four prescriber quotes could not be verified against the authoritative corpus"
claim      = "Searching the authoritative message corpus (192,140 rows, sha256 2c53c540…, re-pulled and manifest-verified 2026-09-09) for the four messages the prior wiki quoted as establishing a prescriber returns one exact match — 2019-05-31, \"try to go get subs from my old doctor\" — and no match for the three 2025 quotes. The corpus holds 0 messages on 2025-06-08 and 0 on 2025-06-12, and 35 in all of June 2025; it holds 3 messages on 2025-03-06, none of them the quoted line. A term census over the same corpus returns 'doctor' 29 times outbound and 39 inbound, against the 36 and 23 the prior wiki's census reported."
cites      = ["src:imessage-corpus-2026", "src:wikitest-rebuild-session-2026-09-09"]
confidence = "high"
extraction = "Run 2026-09-09 against corpus/messages.csv after re-pulling it from the backing sheet and verifying byte count and sha256 against corpus/manifest.json. Case-insensitive substring search with the right single quote normalised to ASCII. This is a first-party measurement, not testimony — it cites the corpus directly and is reproducible."
importance = 5
tags       = ["health", "corpus", "verification", "negative-data"]
created    = "2026-09-09"

[when]
date = "2026-09-09"
+++

An attempt to promote [`dat:0025`](0025-old-wiki-prescriber-exists-routing-only.md)
out of testimony into first-party data. It failed, and the failure is worth more
than the promotion would have been.

## What the search establishes, precisely

| Quote | Result |
| :--- | :--- |
| 2019-05-31 *"subs from my old doctor"* | **Verified** — present verbatim |
| 2025-06-08 *"won't fill an out of state prescription"* | Absent — **and the corpus holds no messages that day** |
| 2025-06-12 *"send a prescription to walmart"* | Absent — **and the corpus holds no messages that day** |
| 2025-03-06 *"move my prescription here"* | Absent; the corpus holds 3 messages that day, none of them this |

Two of the three misses land in corpus holes. June 2025 carries 35 messages in
total, against 21,290 outbound across the year. **Absence there is
`never_observed`, not `known_not_to_occur`**, and the distinction is the whole
result — treating those two as refuted would be the exact error this system
exists to prevent, committed while verifying somebody else's.

## Why the counts differ, which explains the misses

The prior wiki's census reported `doctor` at 36 outbound and 23 inbound. This
corpus returns 29 and 39. That is not a small discrepancy in one direction; the
inbound figure nearly doubles while outbound falls, which means a different
population rather than a miscount.

Its own gap note says so: the dump it ran on "covers 2015–2025 with **2022 and
2026 missing entirely**." This corpus has 2023, 2024 and 16,261 outbound
messages in 2026. `CORPUS_POLICY.md` already governs the case — the complete
export is authoritative and every earlier extract is shelved as evidence of what
was believed rather than of what happened. **The census was one of those earlier
extracts**, and nothing had flagged that the finding built on it inherited the
same status.

## What the corpus does say about 2025

Related material exists and does not line up cleanly with the census's reading:

- 2025-09-16 — *"I literally have a month's script that I couldn't get filled
  anywhere because it was a NY prescription"* — a script exists and does not
  fill, three months after the quoted June exchange and in different words.
- 2025-09-18 — *"hopefully tom will have his actual prescription"* — the
  fallback route, named.
- 2025-12-31 — *"even if I was getting them through a doctor and pharmacy, $5 a
  piece is probably the cheapest avail op"* — counterfactual phrasing about a
  route not currently in use.

The last is suggestive and is **not** promoted here. One conditional clause is
thin evidence about a supply arrangement, and reading it as decisive would
repeat, in the opposite direction, the inference-from-a-fragment this whole
thread is about.
