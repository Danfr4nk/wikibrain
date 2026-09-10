+++
id         = "dat:0007-local-sources-unreachable"
layer      = 1
type       = "datum"
title      = "The rebuild session could not reach the local source copies"
claim      = "The 2026-09-09 rebuild ran in a cloud container with no access to /Users/daniel/Desktop or /Volumes/MUSIC, so the four local wiki-brain copies, the messages.csv export and the Google Takeout archive could not be read during it."
cites      = ["src:wikitest-rebuild-session-2026-09-09"]
confidence = "high"
extraction = "Observed directly: ls of both paths returned 'No such file or directory' in the rebuild container."
importance = 4
tags       = ["migration", "meta"]
created    = "2026-09-09"

[when]
date   = "2026-09-09"
+++

The unreachable paths were /Users/daniel/Desktop/messages.csv, /Users/daniel/Desktop/wiki-brain-backup-20260907, /Volumes/MUSIC/alias/XXX/wiki-brain-main-1, /Volumes/MUSIC/wiki-brain2 and /Volumes/MUSIC/TAKEOUT.

This is a transport limitation, not a statement about whether those copies exist or what they contain. Nothing about their contents is claimed here, precisely because nothing about their contents was observed.
