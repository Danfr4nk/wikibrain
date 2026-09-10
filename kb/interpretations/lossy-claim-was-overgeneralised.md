+++
id         = "int:lossy-claim-was-overgeneralised"
layer      = 3
type       = "interpretation"
title      = "The Drive-copy loss was true but stated too broadly"
cites      = ["dat:0006-drive-copy-lossy", "dat:0009-engine-byte-exact-on-drive"]
confidence = "high"
perspective = "llm"
importance = 4
tags       = ["migration", "recovery", "epistemics"]
created    = "2026-09-09"

[when]
date   = "2026-09-09"
+++

dat:0006 established that the Drive staging copy corrupts markdown, and concluded the copy 'is not the migration source.' The observation was correct. The scope was not: it was drawn from exporting .md files, and generalised to the whole copy without testing anything else.

dat:0009 shows the loss stops at the file-type boundary. Everything not converted to a Google Doc — app.py, forty tools, the config and launcher files — is byte-exact.

The cost of the over-generalisation was not a false belief about markdown. It was a discarded recovery route: acting on 'the Drive copy is not the source' means never looking for the engine there, and the engine was sitting in it intact the whole time.

This is the mirror image of pat:partial-data-confident-error. That pattern describes a partial sample producing a confident claim about what is absent. This is a partial sample producing a confident claim about what is *damaged* — same mechanism, applied to fidelity instead of existence. The corrective is the same: name what was actually tested, and let the untested part stay untested rather than inheriting the verdict.
