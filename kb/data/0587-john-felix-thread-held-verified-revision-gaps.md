+++
id            = "dat:0587-john-felix-thread-held-verified-revision-gaps"
layer         = 1
type          = "datum"
title         = "John Felix: the 2016 thread's domestic details verified in the held corpus, but it runs to January 2018 — and the 2026-08-18 revision's specific Suz-thread quotes were not located"
claim         = "The John Felix page's 2016 thread ([phone redacted]) is held: **156 rows, 97 from Dan / 59 from John**, 2016-02-12 06:07:12 UTC → 2018-01-14 07:15:37 UTC — the page's '59 messages, February–June 2016' is exactly the **received side** of a thread the dump export truncated; the held thread runs **20 months longer** than the page's date range. **Verified:** the domestic details — John, 2016-05-01 03:38:28 UTC: *'Ur mom left her phone here'*; 2016-05-02 23:43:12 UTC: *'Feeding Elijah call u in a bit, tell ur mom also'*. **Revision check:** the 2026-08-18 revision reframes the thread as a four-month slice of a decade-long 'Felix' association running through the Suz thread to June 2026. The held corpus does show 'Felix' mentions across a decade: 10 hits in one thread (2026 — e.g. 'Felix is here', 'Bop is out there. No barking just sitting like a good boy with felix') and 4 in another (2016–2017 — 'I'm supposed to see Felix in 30', 'Felix just called', 'Felix and his gf were there' 2017-11-13). **Not located in the held corpus:** the revision's specific 2018 quotes — *'Felix is here. He has some'*, *'Felix is looking for $200. He asked me to ask the rev'*, *'any extra golf balls to sell'* — zero hits, so the decade-long 'bar-and-supply circuit' characterization rests on the page's unheld sources, not the held messages. A same-prefix second handle (+17249636436, 460 rows, Oct 2017–Aug 2018) exists but its content (party planning, Annie references) does not identify as Felix — noted for the page's open identity question."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Direct Python CSV scans of corpus/messages.csv (192,140 held records): the Felix thread located by the page's verbatim quotes ('ur mom left her phone here', 'feeding elijah' — one hit each, both is_from_me=0 on the same handle). Per-handle direction counts: 97 is_from_me=1, 59 is_from_me=0. Revision quotes searched verbatim across the full corpus — zero hits. Phone digits redacted per the corpus convention. Page body read from corpus__3.txt line 60554 (66 lines). The 'Felix and his gf' hit is in a different thread (not attributed to John Felix's handle) and is reported as a decade-association trace only."
importance    = 3
tags          = ["john-felix", "suzanne-frank", "imessage", "held-verified", "old-wiki", "revision"]
created       = "2026-09-09"

[when]
start = "2016-02-12"
end   = "2018-01-14"
+++

## What the check confirms

The thread exists, the domestic details are verbatim, and the page's
own 'speculative, not confirmed' partner reading is already retracted
by its 2026-08-18 revision — the retraction stands unchallenged. The
'Felix and his gf were there' trace (2017) independently weakens the
old partner hypothesis further.

## What it does not confirm

The revision's decade-long bar-and-supply portrait: its quoted 2018
evidence is absent from the held corpus. The revision may rest on the
Suz thread in an unheld export (MASTER_MESSAGES_DB_DUMP.csv) or on
misquoted memory — either way, the held record corroborates the
longevity of the 'Felix' name in Dan's orbit but not the revision's
specific claims about what that association consisted of. The 'Elijah'
identity remains open; the name recurs only in the 2016 Felix thread
in the held corpus.
