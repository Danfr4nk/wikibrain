+++
id          = "dat:0034-facebook-fetch-provenance-verified"
layer       = 1
type        = "datum"
title       = "Drive holds at least five copies of the Facebook export; the fetch drew from one generation"
claim       = "Google Drive holds at least five copies of the same Facebook export tree. They fall into two generations distinguishable by file title: Google-Docs-converted copies whose message files are titled exactly `message_1` (created 2026-09-08), and raw HTML copies titled `message_1.html` (created 2026-06-25 and 2025-03-22, the latter carrying a 2022-09-05 modified date). A search on `title = 'message_1'` matches only the first generation. Two copies from that generation were compared on one thread and are byte-identical (10,121 bytes, sha256 b4fdaed259a170d1…). Across the 99 threads fetched, all 99 have distinct content and no two are byte-identical."
cites       = ["src:facebook-export-2026-06-23", "src:wikitest-rebuild-session-2026-09-09"]
confidence  = "high"
measurement = true
extraction  = "Checked 2026-09-09 after the operator flagged a second copy of the tree. Four copies enumerated by connector; one thread fetched from two of them and compared by sha256; all 99 downloaded files hashed and compared pairwise."
importance  = 4
tags        = ["facebook", "provenance", "corpus"]
created     = "2026-09-09"

[when]
date = "2026-09-09"
+++

A provenance hole opened and then closed, and it is worth recording because it
was closed by luck rather than by design.

## The hole

The bulk fetch used `title = 'message_1' and owner = 'me'` with **no parent
constraint**. Drive holds at least five copies of this export. So on the face of
it, the 99 threads could have been drawn from any mixture of copies of different
vintages — and 89 of them had no verified parent.

Mixing generations would not corrupt any single thread, but it would make the
set's provenance unstatable: "these came from the 2026-06-23 export" would be an
assumption, and a corpus assembled on assumptions is the failure this whole
architecture is built against.

## Why it turned out clean

Two independent checks:

**The title match excluded the older generation.** The 2025-03-22 copy — the one
carrying a 2022-09-05 modified date, a genuinely different vintage — stores its
messages as `message_1.html`. An **exact** title match on `message_1` cannot hit
it. Same for the 2026-06-25 copies. Only the Docs-converted 2026-09-08 uploads
are titled `message_1`.

**No conversation was fetched twice.** All 99 files hash distinctly. Had two
copies of one generation both been in the result set, the same conversation
would appear under two parent ids with identical bytes. None does.

The two same-generation copies that *were* compared are byte-identical, so even
a mixture between those would have been harmless.

## The part that is not comfortable

**This was not designed.** The query happened to use `=` rather than `contains`,
and `=` happened to exclude the older vintage. Had it been written
`title contains 'message_1'` — the more natural phrasing, and the one that looks
more thorough — it would have matched `message_1.html` too and silently blended
a 2022-vintage export into a 2026 one.

The operator caught this by sending a second folder link, not by anything the
tooling did. There is no check anywhere that would have flagged a mixed-vintage
fetch, and the manifest would have recorded the result as a single coherent set.

Any future bulk retrieval should constrain by parent, or record the parent of
every file and verify it afterwards. Recorded here rather than fixed, because
the fix belongs in tooling that does not exist yet.
