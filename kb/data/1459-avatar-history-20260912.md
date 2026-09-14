+++
id         = "dat:1459-avatar-history-20260912"
layer      = 1
type       = "datum"
title      = "Avatar history 2026-09-12: blonde salon (~12:13 ET) -> platinum bob (~14:19 ET) -> Pixar messy-bun brunette (~15:19 ET, locked; current at 1940-batch cutoff 19:48:18Z, superseded ~16:04 ET outside the window); stale-backend correction"
claim      = "Three avatar changes 2026-09-12, all from Dan-supplied reference photos, all picking option 2 of 4: at ~12:13 ET (16:13Z) the blonde salon look from workspace/user/media_library/image/fb/fb204950c8cb38c1cb2b67b8b886139ba3e9a7460caa6aa62a5272de7b294b47.jpg (Dan: 'Interesting salon outfit'); at ~14:19 ET (18:19Z) the platinum-blonde bob from workspace/user/media_library/image/f9/f9238367e2923663e86f60a3704bb3b1bb4eeb1a5d6581f287129de5b1d9748d.jpg; at ~15:19 ET (19:19Z) the Pixar-style messy-bun brunette (sunglasses on head, mauve tank, black shorts, black crossbody bag, white sneakers) from the bedroom-candid reference workspace/user/media_library/image/83/832d11c4c5b97c69bb4b2452eb38b633ec81550b309ce18394fe9312975ec458.jpg - real-person photo, so fictional-face options per the avatar rule - filed in the gallery as 07_messy-bun-tank. At 15:25 ET (19:25:29Z) Dan locked it: 'we are keeping this avatar ... she's a fucking cutie.' TEMPORAL QUALIFICATION: the Pixar girl was current at this batch's cutoff (19:48:18Z) only - at ~16:04 ET (20:04Z), outside this batch window, Dan changed to option 1 of the levitating-lingerie fictional character ('Can you avatar her' reference ef/ef7e3a97...jpg). Do not describe the Pixar avatar as current beyond the cutoff. At 15:27 ET (19:27:53Z) Dan corrected the record: the four Marucas-waitress photos (commissioned 19:24:37Z, 'my current avatar character as a waitress at a pizza shop called Marucas') had been generated with the WRONG character - the assistant's backend was showing stale state (the known iOS avatar-sync lag; Dan had set the Pixar girl via the iOS app). The four were redone with the Pixar girl and reported at 19:31:12Z. Reference filenames copied character-for-character from the [image:...] markers."
cites      = ["src:sammy-chat-transcript-20260912-1830", "src:sammy-chat-transcript-20260912-1940"]
attributed_to = "src:sammy-chat-transcript-20260912-1940"
confidence = "high"
extraction = "Timeline reconstructed from message timestamps: 'Change your avatar to [image]' 16:12:17Z → 'Option 2' 16:13:26Z → 'My avatar is updated. Blonde salon look's live' 16:13:29Z; second session 18:18:26Z → 'Option 2' 18:19:35Z → 'Done — that's my look now' 18:19:39Z; gallery 18:20:54–55Z. Reference filenames copied character-for-character from the [image:...] markers."
importance = 3
tags       = ["avatar", "image-lab", "2026"]
created    = "2026-09-12"
+++

## Reading

The avatar ledger continues: blue dress (11th change, 2026-09-11 ~22:39 ET
per MEMORY.md) → blonde salon (~2h, 2026-09-12 12:13 ET) → platinum bob
(current, 2026-09-12 14:19 ET). The gallery turns the churn into
inventory — every chosen look is now switchable by name, and the
219-candidate archive is the raw material for any future face-tag or
gallery work. Reference photos are media-library intake, not wiki media
(they predate the registry flow).

## Reading (addendum 2026-09-12, 1940 batch)

Three looks in one day, then a lock: blonde salon (~2h) -> platinum
bob (~1h) -> Pixar messy-bun brunette, which Dan locked at 15:25 ET
("we are keeping this avatar"). The lock held through this batch's
cutoff (19:48:18Z) - but it did not end the day's swap cycle: at
~16:04 ET (20:04Z), outside this batch window, Dan changed to option 1
of the levitating-lingerie fictional character. Treat the Pixar girl
as current-at-cutoff, not current.

The stale-backend episode is the operational lesson, not the trivia:
the Marucas waitress photos went out with the wrong character because
the backend still believed the platinum bob was current, while Dan had
already set the Pixar girl via iOS. When his device disagrees with the
backend about his own state, his device wins - verify the real current
avatar (avatar.get, or just ask) BEFORE any character-consistent
generation, not after the correction. The redo landed in under four
minutes once the actual current avatar was supplied. This is the
second iOS-sync-lag incident on record; treat the lag as standing,
not as a one-off.
