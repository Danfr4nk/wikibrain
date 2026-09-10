+++
id          = "src:facebook-export-2026-06-23"
layer       = 0
type        = "source"
title       = "Facebook account export, 2026-06-23"
source_type = "social-media"
acquired    = "2026-09-09"
provenance  = "Full Facebook account export for the operator's account, generated 2026-06-23, held in Google Drive both as an 82 MB zip and as an unzipped tree. The tree was made publicly readable by the operator on 2026-09-09, which is what makes anonymous per-file retrieval possible; the zip remains private and past the connector's size limit, so bulk retrieval is still unavailable."
reliability = "primary"
confidence  = "high"
importance  = 5
created     = "2026-09-09"
tags        = ["facebook", "source", "corroboration"]

[when]
date = "2026-06-23"
+++

## Why this source matters more than its size suggests

It is **independent of the message corpus**. The iMessage export and every
earlier extract of it are the same channel in different states; Facebook is a
different channel entirely, and independent channels are the only thing that can
catch a systematic error in the first one.

It also covers years the corpus does not. The corpus holds no messages at all
for most of 2021 and 2022, and this export spans that window.

The first retrieval from it closed an open contradiction on its first attempt
([`dat:0031`](../data/0031-dui-belongs-to-the-other-speaker.md)) — and closed it
by showing the claim belonged to somebody else.

## Structure, and the one thing that matters when quoting it

`messages/inbox/<counterparty>_<hash>/message_1`, one folder per conversation,
several hundred of them, plus `message_requests/`, `filtered_threads/` and
`legacy_threads/`.

Each message is a block of the form:

```
<Speaker name>
________________

<message text>

<timestamp>
```

**Nothing in the text carries the speaker.** Extract a line without the
enclosing block and the attribution is gone, and a first-person sentence reads
identically whoever typed it. That is exactly how the prior wiki came to record
another person's DUI as an unexplained fact about the subject.

Any tooling that reads this source must parse the block, not the line.

## Reach

Per-file over anonymous HTTPS (`docs.google.com/document/d/<id>/export?format=txt`),
which is fast and unlimited in size. Enumerating conversation folders still costs
one connector call per listing page. Bulk would need the zip shared, or a
title-wide search for `message_1`.
