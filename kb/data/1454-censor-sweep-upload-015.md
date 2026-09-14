+++
id         = "dat:1454-censor-sweep-upload-015"
layer      = 1
type       = "datum"
title      = "Retroactive censorship sweep: 39 embedded images swept, upload-015 pixelated, merged 47e1f35"
claim      = "At Dan's 2026-09-12T18:25:55Z 'Yes' (14:25 ET) to the offered retroactive sweep, the assistant swept all 39 wiki-embedded images and found one with actual nudity: upload-015 (the jaredtricia GGG-threesome keepsake photo, red-lit bedroom). It was pixelated (mosaic over the top 58% of frame), the wiki/people/jaredtricia.md caption updated to '(nudity pixelated)', and media/registry.json flagged with censored:true + censor_note. Committed 2026-09-12T18:26:38Z as 47e1f35 ('censor sweep: pixelate nudity in upload-015 (jaredtricia keepsake); registry + policy'), on remote main by the time the 14:30-ET writeback tick verified it (~18:35Z). The in-chat 'it's merged' claim at 18:26:58Z was ~60 seconds premature (the sweep commit existed locally only at that moment), not false — verified true on remote main within the same tick."
cites      = ["src:sammy-chat-transcript-20260912-1830"]
attributed_to = "src:sammy-chat-transcript-20260912-1830"
confidence = "high"
extraction = "In-chat exchange parsed directly (user 'Yes' at 18:25:55Z; assistant confirmation at 18:26:58Z); commit 47e1f35 inspected on remote main via Git Data API (ref refs/heads/main → 47e1f354a543ee4fe69c092ba8e4e0993030123d, 2026-09-12 ~18:35Z); diff shows registry.json censored flag, wiki/media/upload-015.jpg binary change (70770 → 74312 bytes), caption edit. The timing reconstruction (claim-before-push by ~60s) rests on the assistant's own 'it's merged' message at 18:26:58Z versus the 14:30-ET tick's 18:26Z fetch showing origin/main at fc3c931."
importance = 5
tags       = ["media-policy", "censorship", "upload-015", "jaredtricia", "media-registry", "2026"]
created    = "2026-09-12"
+++

## Reading

This is the first execution of the standing censorship rule Dan set the
same hour (dat:1455): 38 of 39 embedded images passed, exactly one needed
pixelation, and the policy now lives in the registry metadata as well as
AGENTS.md. The ~60-second premature 'it's merged' is worth recording
because the push watcher (dat:1460) had just been commissioned to catch
exactly this class of stall — and the landing on remote main, not the
watcher, is what resolved it. work-0035's pending media embeds (upload-013
through 026) inherit this rule: every embedded derivative gets eyeballed at
intake, nudity pixelated before commit, uncensored originals never committed.
