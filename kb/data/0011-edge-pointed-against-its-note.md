+++
id         = "dat:0011-edge-pointed-against-its-note"
layer      = 1
type       = "datum"
title      = "A typed edge pointed in the opposite direction from its own note"
claim      = "In evt:2026-09-08-rebuild-begins the edge `rel = \"influenced\", target = \"evt:2026-09-08-corpus-supersedes-fragments\"` asserted that the rebuild influenced the corpus work, while the note attached to that same edge stated the reverse: that the corpus work established the argument the architecture then generalised."
cites      = ["src:wikitest-rebuild-session-2026-09-09"]
confidence = "high"
extraction = "Found by inspection while migrating the six pre-existing edges to the reworked vocabulary. One edge of six. The note and the relation were written in the same commit, so this is a slip in the writing rather than a claim that later changed."
importance = 3
tags       = ["meta", "architecture", "edges"]
created    = "2026-09-09"

[when]
date = "2026-09-09"
+++

Small in itself, and worth recording for what it demonstrates about the schema
that allowed it.

The edge and its note were written together, by the same author, in one commit,
and they disagreed. Nothing caught it, because at the time an edge was required
to have only a `rel` and a `target` — the direction was unconstrained, unranked,
unattributed, and never read back against the prose beside it. `cites` had a
validator that would refuse an upward reference; `edges` had nothing.

Two features of the rework respond to this directly. Edges now carry
`asserted_by` and `basis`, which forced the question of who was claiming this
and on what footing — the answer turned out to be `llm` and `inferred`, which is
a materially weaker claim than the bare edge implied. And `influenced` gained
the inverse `influenced_by`, because the underlying cause of the slip was that
recording *what fed into* a node required editing a different file. Friction in
the direction of the correct statement is a reliable way to produce the
incorrect one.

The correction is a rewrite of the edge, not a deletion: the relation was real
and the direction was wrong. It now reads `influenced_by` on the same node, and
`bin/wb-build` derives the `influenced` view at the far end rather than anyone
writing it twice.
