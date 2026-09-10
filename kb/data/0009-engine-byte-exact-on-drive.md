+++
id         = "dat:0009-engine-byte-exact-on-drive"
layer      = 1
type       = "datum"
title      = "Non-markdown files survived the Drive copy byte-exact"
claim      = "On the Google Drive staging copy, only .md files were converted to Google Docs. app.py (116,273 bytes), the 40 original bin/ tools, _config.yml, .gitignore, the .command launchers and the .prompt files were all stored as raw bytes and return byte-exact."
cites      = ["src:wikitest-recovery-session-2026-09-09"]
confidence = "high"
extraction = "Enumerated the Drive folder and checked mime types and sizes; _config.yml and .gitignore were retrieved and restored."
importance = 4
tags       = ["migration", "recovery"]
created    = "2026-09-09"

[when]
date   = "2026-09-09"
+++

The .md damage was also characterised precisely: bodies, headings, emphasis, blockquotes, tables and wikilink targets survive; injected backslash escapes are mechanically repairable; YAML frontmatter line breaks are genuinely lost, flattening key/value pairs into one run-on paragraph.
