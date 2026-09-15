+++
id         = "dat:1559-media-path-mutation-same-message-id-across-pulls-20260914"
layer      = 1
type       = "datum"
title      = "Same message_id, different media-library image path across two pulls (1830 vs 1940 batches)"
claim      = "Message 423a3d17 (17:31:17Z, '4 videos [image:...]') was archived in both raw/sammy/20260914-1830/chats.json and raw/sammy/20260914-1940/chats.json, but the embedded media-library image path differs: the 1830 capture has a 96-char garbled filename (627b1b2e...03a0d666b6c746a64924.jpg), the 1940 capture has the clean 64-char sha256 (627b1b2e18db007890bb7d97b781fc6f99deecbf6d857e9743f3aab7fab2fb8c.jpg). A live re-query (2026-09-14 ~19:55Z) returns the 64-char form, so the 1940 capture matches current DB state. 47 of 48 overlapping rows are byte-identical; this is the sole mutation. Implication: message bodies are not immutable across pulls - media references can mutate (row edit or transient render) - so 'byte-exact' holds per-pull, not across pulls. Both versions preserved under append-only discipline."
cites      = ["src:sammy-chat-transcript-20260914-1940"]
confidence = "high"
provenance = "diff of raw/sammy/20260914-1830/chats.json vs staging/20260914-1940/chats.json; live re-query 2026-09-14T19:55Z"
reliability = "primary"
extraction = "python diff over the two batch files; 47/48 overlap byte-identical"
rechecked    = "2026-09-15"
importance = 2
tags       = ["archive-fidelity", "pipeline", "2026"]
created    = "2026-09-14"

[when]
date   = "2026-09-14"
+++

<!-- prose for humans; the frontmatter is for machines -->
