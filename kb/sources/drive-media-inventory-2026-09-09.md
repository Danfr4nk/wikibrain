+++
id          = "src:drive-media-inventory-2026-09-09"
layer       = 0
type        = "source"
title       = "Google Drive media inventory, 2026-09-09"
source_type = "other"
acquired    = "2026-09-09"
provenance  = "Enumerated 2026-09-09 through the authenticated Drive connector at the operator's instruction to sweep the whole Drive. This node records the FILE METADATA ONLY — titles, sizes, MIME types, creation and modification dates. No media bytes were retrieved, and none need to be: the operator's framing is that existence itself corroborates."
reliability = "primary"
confidence  = "high"
importance  = 3
sensitive   = false
created     = "2026-09-09"
tags        = ["drive", "media", "inventory"]

[when]
date = "2026-09-09"
+++

## Why this is a source and not a curiosity

File metadata is **mechanically produced and uncomposed**. Nobody wrote a
creation timestamp to be read later, which is exactly the property that makes it
a different class of evidence from anything in the message corpus — where every
byte is something a person chose to type.

`ROADMAP.md` §3 makes this argument for images. It holds for any file: the
timestamps, sizes and counts are an independent channel, and independent
channels are the only thing that can catch a systematic error in the first one.

The content is not needed for that and is not retrieved.

## Marked `sensitive`, and why

Most of this inventory is sexually explicit material, and much of it names
performers. Two different things are tangled there and the schema can separate
them:

- **Evidence about the operator** — volumes, dates, acquisition patterns. His
  data, his call, and he has made it repeatedly.
- **Named third parties** who did not choose to appear in anyone's public
  psychological archive, and whose only connection to the subject is that he
  has files of them.

`sensitive = true` resolves this the way the operator's own instruction
specifies: privacy gates **output**, never reasoning. The node stays in `kb/`,
`bin/wb-query` reads it in full, every inference that should rest on it can, and
`bin/wb-build` withholds it from the public site. Nothing is filtered from
ingestion, cross-reference, modelling or synthesis — which was the whole point
of the cut recorded in
[`evt:2026-09-09-privacy-cut-as-epistemic-concern`](../events/2026-09-09-privacy-cut-as-epistemic-concern.md).

One flag, one line in `wb-build`, reversible at any time by removing it.
