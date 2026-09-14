+++
id            = "dat:0208-august-2026-unmasking"
layer         = 1
type          = "datum"
title         = "August 8–9, 2026: the FOREWARN lookup, the read-receipt night, and the refused narrowing of the sleep claim"
claim         = "On 2026-08-08 at **19:01:22 EDT** Dan executed the FOREWARN lookup identifying the interloper as **Jerel Wayne Coles**, terminating a thirteen-day refusal. The night's conversation ran 19:38:34 → 03:41:32 and is filed on this page with a full spine (the *\"He'll?\"* message at 23:09:20 — almost certainly *Hell?*, a request for clarification, misparsed by Dan as an invocation of Coles; Dan's *\"HE'LL rape you again\"* at 23:10:38, read by her in 2 seconds; the sleep claim entering at 00:28:56; the last read receipt at **02:24:54**; *\"I fell asleep\"* 58 seconds later; the final *\"I seriously did fall asleep?\"* at 03:41:32, unanswered). The derived quantitative record (230 rows, recomputed from `annie_metadata_24h.csv`): her median read latency 0 seconds, 34 of 44 reads in ≤2 seconds; Dan 44 messages / 4,697 chars vs Annie 18 messages / 191 chars (19:30–00:30). The page's standing finding is **not a lie about sleep but a refusal to narrow**: a defensible 63-minute window existed in the record (23:23:57 → 00:26:49) and was never invoked across three explicit invitations. The inference the night ran on — that her silence meant she was with Coles — was **confirmed as contact a week later**: on 2026-08-16 at ~23:37 Coles is audible on a live call from Annie's phone and types three messages from her handle, though not for any particular hour of August 8. Two earlier readings are retracted on the page: 'the research claim was a bluff' (the 19:01:22 lookup was literally real; the accurate finding is implicature) and 'the third-party belief was constructed inside the thread' (the conversation was entered thirty-seven minutes after completing a criminal-history profile — the belief was primed by documented external research)."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 105728 (285 lines); matches raw/old-wiki-export-2026-09-04/whole.txt lines 99308-99588 verbatim for the spine, the quantitative block, the sleep-narrative analysis, the misparse section, and the retractions. All quoted messages and timestamps above are the page's verbatim figures. The page's own sourcing note is kept and is load-bearing: the two underlying exports (`annie_metadata_24h.csv` and `imessage_export_2124702449_20260809084846_.csv`) **have not been filed to raw/** as of this ingest — every figure above is [DERIVED, source pending], reproduced from the session that had direct chat.db access. This session did not re-run any of the computations. The August 16 call (Coles audible from Annie's phone) is the page's cross-reference to wiki/timeline/events/august-2026-morgantown-call and was not independently checked here; the 2026-09-09 Morgantown call transcript held in this repo is a different event."
importance    = 5
tags          = ["timeline", "relationships", "old-wiki", "attribution", "correction"]
created       = "2026-09-09"

[when]
start = "2026-08-08"
end   = "2026-08-09"
+++

## What the check confirms

The corpus page and the old wiki agree exactly on every timestamp, figure,
quote, retraction, and the open items. The page is self-aware about its
provenance: it labels the whole quantitative record as derived-from-pending-
sources and flags the export filing in its queue.

## What it does not confirm

Everything quantitative here is a relay. The chat.db access, the
`annie_metadata_24h.csv` recomputation, and the August 16 call evidence all
sit one layer down from this session. This node is a fidelity filing, not an
independent verification — and it stays filed at that level until the exports
land in raw/.

## The page's own standing constraint, carried forward

The page closes with an explicit constraint: any analysis that explains
Dan's inference by his psychology rather than evaluating it against evidence
reproduces the terminal-phase harm the annie-ulmer page's Corrective Addendum
formally retracted. Kept here because it constrains how this node may be
used downstream.
