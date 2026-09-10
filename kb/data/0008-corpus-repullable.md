+++
id         = "dat:0008-corpus-repullable"
layer      = 1
type       = "datum"
title      = "The corpus is re-pullable byte-exact from the backing sheet"
claim      = "The 192,140-message corpus was re-downloaded from the backing Google Sheet and matched corpus/manifest.json exactly: 48,004,305 bytes, sha256 2c53c54007534dfdd1786c0ebde0cd84c9e49483a8f5d1237ec436eef9d98cbb, 192,140 rows."
cites      = ["src:wikitest-recovery-session-2026-09-09"]
confidence = "high"
extraction = "Re-downloaded and hashed in session, compared against the committed manifest."
importance = 5
tags       = ["corpus", "recovery"]
created    = "2026-09-09"

[when]
date   = "2026-09-09"
+++

No credentials were required: the sheet is shared 'anyone with the link', which is the deliberate decision recorded in dat:0005-sheet-public. That decision is what made this recovery possible.

The consequence is that the message record does not depend on any single machine. It can be re-pulled and re-verified on demand.
