+++
id         = "dat:1502-corpus-coverage-hole-2025"
layer      = 1
type       = "datum"
title      = "The authoritative corpus is missing 88,311 messages the superseded dump holds"
claim      = "Over the window both cover (2011-03 → 2025-08), the corpus bin/wb-corroborate treats as authoritative (corpus/messages.csv, 192,140 rows, sha256 2c53c540…) holds 129,262 messages while the 2025-08-11 dump holds 217,573 — the superseded dump carries 88,311 more. The shortfall is concentrated in 2025: corpus vs dump by month is 2025-01 380/1,910, 02 255/3,042, 03 166/4,461, 04 76/3,607, 05 120/5,454, 06 35/4,898, 07 107/3,541; only 2025-08 reverses (3,950/937, the dump ending 08-11). All four prescriber quotes dat:0028 searched for are present verbatim in the dump, including the three it could not verify, and the two dates it reported as holding zero messages hold 272 (2025-06-08) and 200 (2025-06-12) there."
cites      = ["src:imessage-complete-dump-2025-08-11"]
confidence = "high"
extraction = "Monthly counts computed 2026-09-13 by parsing date_sent from raw/imessage/messages-part{1,2}-*.csv (192,140 rows parsed, matching the manifest) and the leading timestamp of each record in all_imessages_complete_dump.txt (217,573 dated records). Quote search was case-insensitive substring over the dump. Reproducible from both artifacts in raw/."
importance = 5
tags       = ["corpus", "coverage", "verification", "imessage", "negative-data"]
created    = "2026-09-13"

[when]
date   = "2026-09-13"
+++

<!-- prose for humans; the frontmatter is for machines -->

`raw/SOURCES.md` named the test and predicted the result:

> If the four unverifiable quotes are in this dump and not in the authoritative
> export, the finding is about coverage rather than provenance — a much less
> alarming conclusion that changes what to do next. One sharing change on this
> folder settles it.

No sharing change was needed. The file it describes —
`all_imessages_complete_dump.txt`, 28.9 MB — was already inside the repository,
compressed into `raw/drive-sweep/20260911/misc-zip/Archive 2.zip` by the
2026-09-11 Drive sweep. It was recorded as unreachable in Drive while sitting
tracked in git.

## What this does and does not settle

**Settled:** the three quotes [`dat:0028`](0028-prescriber-quotes-partly-unverifiable.md)
could not verify are real. They are absent from the corpus because the corpus
does not cover those days, not because nobody wrote them. `dat:0028` was right
to refuse to treat their absence as refutation — it recorded them as
`never_observed` rather than `known_not_to_occur`, and that caution is now
vindicated rather than merely prudent.

**Settled:** the census discrepancy `dat:0028` flagged has an explanation. The
prior wiki's `doctor` counts (36 outbound / 23 inbound) against this corpus's
29 / 39 are two different corpora being counted, one of which is missing most
of 2025.

**Not settled, and deliberately left open:** what this means for
[`pat:reasoning-sound-provenance-unreliable`](../patterns/reasoning-sound-provenance-unreliable.md).
Its main falsifier has fired. Whether the pattern is retracted, narrowed, or
survives on its other evidence is a judgement about a published L3 conclusion,
and this datum does not make it. It supplies the measurement the decision needs.

## The operational consequence, which is larger

`bin/wb-corroborate` runs against `corpus/messages.csv`. Any claim it marked
uncorroborated for a 2025 date was tested against a corpus holding between 35
and 380 messages a month for that year, where the dump holds thousands. Those
results are not wrong so much as uninformative, and they were not labelled as
such.

The corpus is still the better artifact in the ways that matter — it is
sha256-pinned, column-structured, and runs to 2026-09-07 where the dump stops at
2025-08-11. The point is not that the dump should replace it. The point is that
`authoritative` was doing work here that `most recent` had earned and
`most complete` had not, and nothing in the pipeline distinguished the two.
