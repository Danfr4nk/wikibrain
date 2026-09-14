+++
id            = "dat:1447-end-fight-rewrite-evidence"
layer         = 1
type          = "datum"
title         = "End Fight full rewrite (2026-09-12): claim→source table for the 666-row window"
claim         = "Every load-bearing quote in the rewritten wiki/timeline/events/end-fight.md is tied to its corpus row: the 666-row window (2026-05-30 22:36 → 2026-06-01 00:27 EDT, handle +12124702449, 601 Dan / 65 Annie) was read in full in timestamp order from RAWLOGS raw/imessage/messages.csv. The exit line 'Goodbye forever… sic semper lupanis.' (00:27:49) is Dan's — final row of his unbroken six-message outbound run 00:21:47–00:27:49. Annie's last message of the window is 'Understood' at 00:10:06; she never says goodbye in 666 rows. ~400 of Dan's 601 rows are identical AI-agent spam (01:08:30–01:13:12 May 31). The August coda's goodbye ritual (Aug 19 05:46–06:04, ending 'Goodbye Daniel') was read directly from aug-sep-2026-imessage-export.csv. The June 15 Tuquick defection verbatims, the AI-model quote, and the Spotify crate URL are now [RAW-CSV] held rows (group-chat rows 495–496, 529–534) — REPAIR 2026-09-12, retiring the earlier [OPERATOR]/unheld flags."
cites         = ["src:imessage-corpus-2026"]
attributed_to = "src:imessage-corpus-2026"
confidence    = "high"
extraction    = "RAWLOGS raw/imessage/messages.csv (48MB) fetched via GitHub API; filtered to chat_identifier +12124702449, date_sent 2026-05-31..2026-06-01 UTC; all 666 rows read in order. EDT = UTC-4. is_from_me=1 → Dan. Group-chat repair 2026-09-12: same file filtered to chat_identifier = chat159239664500651272; all 575 rows read in order."
importance    = 5
tags          = ["end-fight", "annie-ulmer", "attribution", "rewrite", "2026"]
created       = "2026-09-12"
+++

## Claim→source table (all timestamps EDT, America/New_York)

| # | Claim in article | Timestamp (EDT) | Sender | Verbatim (truncated) | Provenance |
|---|---|---|---|---|---|
| 1 | AI agent spam apology | 2026-05-30 22:58:07 | Dan | "I am really really sorry. i didn't try to send that. / I set up an AI agent that is supposed to lock me out from unblocking you and it just started" | [RAW-CSV] |
| 2 | ~400 identical spam rows | 2026-05-31 01:08:30–01:13:12 | Dan | `λx.∀y:⟪x⊕y⟫→⨁(x⟲y)…` ×313 consecutive (+~90 more across window) | [RAW-CSV] + [DERIVED] count |
| 3 | Self-harm threat #1 | 2026-05-30 23:24:08 | Dan | "and please remember that it may look like an accident, but it won't be and you caused it." | [RAW-CSV] |
| 4 | Self-harm threat #2 | 2026-05-31 01:31:37 | Dan | "alright I'm gonna go hang myself. This is so fucking embarassing I didn't even see it was doing that" | [RAW-CSV] |
| 5 | Annie: don't hurt yourself | 2026-05-31 01:33:00 | Annie | "Please stop Dan. Do not hurt yourself please" | [RAW-CSV] |
| 6 | Boyfriend named | 2026-05-31 01:42:34 | Dan | "you decided this was the moment to let your new boyfriend spend a few hours convincing me" | [RAW-CSV] |
| 7 | Made-fun-of-me wound | 2026-05-31 02:42:34 | Dan | "I will never, ever forgive you or forget that you made fun of me to the person you were secretly fucking dating about my water being off" | [RAW-CSV] |
| 8 | Annie: guilt and shame | 2026-05-31 01:47:54 | Annie | "Please do not do this.. you don't understand how absolutely horrible and disgusting and cruel i have felt. Guilt. Shame." | [RAW-CSV] |
| 9 | Annie: tried to stop it | 2026-05-31 03:10:36 | Annie | "You don't know how much I tried to stop it…" | [RAW-CSV] |
| 10 | Documentation threat | 2026-05-31 13:38:11 | Dan | "Is there some reason why I can't or shouldn't make sure that it's not left ambiguous everything you've said and done in the last 5 months" | [RAW-CSV] |
| 11 | Annie afternoon appeal | 2026-05-31 14:14:52 | Annie | "I know I have fucked up to the absolute extreme.. and I know your mom heard me screaming and crying in the background.. please if you care at all.." | [RAW-CSV] |
| 12 | Procurement: ATM | 2026-05-31 17:50:00 | Annie | "Can you go to atm" → "100?" (17:51:01) | [RAW-CSV] |
| 13 | Procurement: cover you | 2026-05-31 18:37:17 | Dan | "i should NOT fucking do this but i'm going to cover you" | [RAW-CSV] |
| 14 | Blue folder in mailbox | 2026-05-31 21:40:59 | Dan | "there is a blue folder in the mailbox / Take the entire folder" | [RAW-CSV] |
| 15 | Alexis handoff stated | 2026-05-31 19:59:07 | Dan | "i told alexis the NEXT FUCKING DAY that i couldn't be with her because i wanted to have you in my life so badly" | [RAW-CSV] |
| 16 | Quoting Annie on Tuquick | 2026-05-31 20:27:52 | Dan | "\"no you don't understand, he will not stop, he's like insane and i don't know how to make him go away\"" | [RAW-CSV] |
| 17 | Poison pill | 2026-05-31 20:08:19 | Dan | "too bad so sad you just couldn't give me any decency and now there's a poison pill baked in" | [RAW-CSV] |
| 18 | Annie: being threatened | 2026-05-31 22:06:03 | Annie | "I m being threatened" | [RAW-CSV] |
| 19 | Annie: broken finger | 2026-05-31 22:07:27 | Annie | "I have a broken finger." (debunked in group chat same night — see tuquick-17248123683.md) | [RAW-CSV] + cross-page |
| 20 | Dan: I HATE YOU | 2026-05-31 23:58:41 | Dan | "I fucking / HATE YOU" | [RAW-CSV] |
| 21 | Block declaration #1 | 2026-06-01 00:00:58 | Dan | "Never again. I'm blocking you now" | [RAW-CSV] |
| 22 | Molester accusation bleed | 2026-06-01 00:08:36 | Dan | "YOU JUST CALLED ME A FUCKING MOLESTER" | [RAW-CSV] |
| 23 | Block declaration #2 | 2026-06-01 00:09:31 | Dan | "Blocking you" | [RAW-CSV] |
| 24 | Annie's last word | 2026-06-01 00:10:06 | Annie | "Understood" | [RAW-CSV] |
| 25 | Closing run 1/6 | 2026-06-01 00:21:47 | Dan | "I'm ashamed to have thought you were the person you clearly are not" | [RAW-CSV] |
| 26 | Closing run 2/6 | 2026-06-01 00:22:46 | Dan | "and you will never unring this bell. Have a nice life. Do not forget that you did this to me tonight on top of what you did to me over the last year" | [RAW-CSV] |
| 27 | Closing run 3/6 | 2026-06-01 00:24:59 | Dan | "You are not capable of love and I really did try to not make you look like the treacherous person you are." | [RAW-CSV] |
| 28 | Closing run 4/6 | 2026-06-01 00:25:59 | Dan | "I saved you from fucking DYING when you were shooting coke and you would sell me out to virtue signal your loyalty to someone else?" | [RAW-CSV] |
| 29 | Closing run 5/6 | 2026-06-01 00:26:32 | Dan | "Shame on you. Seriously. I hope your parents will be able to set you right / also stop lying about whoever the fuck this is. Youre not being threatened. You just can't stop lying" | [RAW-CSV] |
| 30 | Closing run 6/6 — THE EXIT LINE | 2026-06-01 00:27:49 | **Dan** (was misattributed to Annie) | "Goodbye forever. This was not how it should have ended but. / sic semper lupanis." | [RAW-CSV] + dat:0125 |
| 31 | Epilogue window single row | 2026-06-15 01:39 | Annie | "Daniel" (entire text) | [RAW-CSV] |
| 32 | Tuquick defection | 2026-06-15 13:15:12 | Tuquick (Received) | "She's a compulsive liar with a drug addiction" | corroborated via tuquick-17248123683.md / verdict / annie-ulmer.md; primary rows in unheld June-24 export |
| 33 | June 5 apology | 2026-06-05 00:37:42 | Annie | "Daniel, i just want to say that i am extremely sorry." | [RAW-CSV] via fallout-verdict (deep export, not the 666-row window) |
| 34 | August goodbye ritual | 2026-08-19 05:46–06:04 | both | mutual "Goodbye" exchange ending Annie: "Goodbye Daniel" (06:04) | [RAW-CSV] aug-sep-2026-imessage-export.csv, this rewrite's read |
| 35 | AI model + Spotify crate epilogue | 2026-06-15/16 | — | Dan fine-tuned a model on fight logs + shared custom crate with Annie and Tuquick | **REPAIRED 2026-09-12:** now [RAW-CSV] — group-chat rows 529–534 (crate link https://open.spotify.com/playlist/1mLYEDPTBLOncmtJIYHwsw 16:42:01; "i fine tuned an AI model on the conversation we had a few weeks ago" 17:13:27; "trained ONLY on the raw text message logs" 17:19:08) |

## Group-chat repair (2026-09-12): claim→source table (all timestamps EDT, America/New_York; source RAWLOGS raw/imessage/messages.csv, chat_identifier = chat159239664500651272; 575 rows, 297 Dan / 257 Tuquick / 21 Annie)

| # | Claim in article | Timestamp (EDT) | Sender | Verbatim (truncated) | Provenance |
|---|---|---|---|---|---|
| 36 | Group chat opens with slur-laced ambush | 2026-05-31 22:24:37–22:24:46 | Tuquick | "So I'm a fagot lmfao" / "You're on heroin buddy" | [RAW-CSV] |
| 37 | Dan's opening parry | 2026-05-31 22:25:20 | Dan | "First of all I don't think those are mutually exclusive" | [RAW-CSV] |
| 38 | Accusation battery: pimping for coke | 2026-05-31 22:26:50–22:26:56 | Tuquick | "Said you had her fuck guys for money / To help your coke addiction" | [RAW-CSV] |
| 39 | Accusation: video of Annie | 2026-05-31 22:32:23–22:32:27 | Tuquick | "Wanna see Annie bent over / Saying. Fuck Dan" | [RAW-CSV] |
| 40 | Annie invites Dan into the fight | 2026-05-31 22:31:57 | Annie | "Will you answer Dan" | [RAW-CSV] |
| 41 | Dan demands yes-or-no on molestation | 2026-05-31 23:11:12–23:13:08 | Dan | "I would like you to provide an honest answer to whether or not you were MOLESTED by me or because of me" / "thats literally a class 3 felony" / "you deserve to be heard" | [RAW-CSV] |
| 42 | Tuquick pressures Annie to admit it | 2026-05-31 23:14:21–23:15:39 | Tuquick | "Annie / Admit it / Tell him what you told me" / "Or should I send that video of you completely blacked out and he's still fingering you lmfao" | [RAW-CSV] |
| 43 | Annie's doorway sentence | 2026-05-31 23:54:37 | Annie | "I have recorded videos of me obviously passed out still being touched" | [RAW-CSV] |
| 44 | Dan's sarcastic receipt | 2026-05-31 23:55:08 | Dan | "thank you for clearing that up" | [RAW-CSV] |
| 45 | ATM receipt surfaces in group chat | 2026-05-31 23:55:40–23:55:58 | Dan → Annie | "do you want to see the atm reciept from her bank account from TODAY" → Annie: "Yeah please" | [RAW-CSV] |
| 46 | Broken finger debunked by Tuquick | 2026-05-31 23:59:56 | Tuquick | "Her finger isn't broken lmfao" | [RAW-CSV] |
| 47 | Night-one crack: Tuquick concedes | 2026-06-01 00:17:19 | Tuquick | "I don't think you did, that's just what she says" | [RAW-CSV] |
| 48 | June 15 defection (held) | 2026-06-15 13:15:12 | Tuquick | "You can have her back ? She's no good 🤣 trauma bond to the cuck" / "She's a compulsive liar with a drug addiction" | [RAW-CSV] |
| 49 | Spotify crate link (held) | 2026-06-15 16:42:01 | Dan | https://open.spotify.com/playlist/1mLYEDPTBLOncmtJIYHwsw | [RAW-CSV] |
| 50 | AI model on fight logs (held) | 2026-06-15 17:13:27–17:19:08 | Dan | "i fine tuned an AI model on the conversation we had a few weeks ago" / "trained ONLY on the raw text message logs, so not my opinion or me telling it my side of the story" | [RAW-CSV] |
| 51 | July 17 drive-by threat | 2026-07-17 11:05:24–11:05:42 | Tuquick | "Drove by 337 Saratoga / Looks like you don't live there anymore / I was gonna walk in and beat the fuck out of you" | [RAW-CSV] |
| 52 | Dan's no-trespass notice | 2026-07-17 23:01:12 | Dan | "I am explicitly telling you to stay off of the property that I live on" | [RAW-CSV] |
| 53 | July 26 1:46 AM burst | 2026-07-26 01:46:11–01:50:53 | Tuquick | "Fucking junkie / Dan the cuck junkie / Pimped Annie out because he spent all his money on drugs and couldn't pay the tab / Turned her into an escort" (+5 more) | [RAW-CSV] |
| 54 | Chat's final row: surveillance | 2026-08-13 11:23:33 | Tuquick | "Anne still messaging you" | [RAW-CSV] |
| 55 | No AI-spam in group chat | n/a | — | Dan's 297 group-chat rows are all substantive; the ~400 spam rows are dyad-only | [DERIVED] |

## New findings from the group-chat read (vs the rewrite)

1. **The chat opens at 22:24 EDT May 31 — two hours before the dyad's sign-off.** The rewrite treated the group chat as post-dyad; Dan was texting both threads 00:00–00:18, and the dyad's "YOU JUST CALLED ME A FUCKING MOLESTER" (00:08:36) answers the group chat's molester arc eight minutes after it ended.
2. **The molestation litigation is the night's centerpiece.** Dan's direct felony question (23:11–23:13), Tuquick's pressure campaign on Annie (23:14–23:15), her 40-minute dodge, the doorway sentence (23:54:37), Dan's sarcastic "thank you for clearing that up." The rewrite mentioned the molester line only as dyad bleed.
3. **June 15 is now primary-source, not corroborated-via-pages.** The defection verbatims, the AI model, and the Spotify crate URL are held rows (495–496, 529–534) — the epilogue's [OPERATOR]/unheld flags are retired.
4. **Annie's "Will you answer Dan" (22:31:57)** — she invites Dan into the fight twenty minutes in, then performs the woman begging it to stop for the next hour.
5. **Act III is new to the article entirely:** the July 17 drive-by threat at 337 Saratoga, Dan's explicit no-trespass notice, the July 26 1:46 AM nine-message burst, and the Aug 13 final row ("Anne still messaging you") — six days before the terminal Aug 19 end.

## New findings vs the old page

1. **The ~400-message AI-agent spam burst** (rows 0–1, 16–422+) — the old page never mentions it; it opens the fight and explains the "Chinese" exchange.
2. **The four-hour procurement thread inside the breakup** (ATM/CashApp/blue folder, 17:37–22:05) — the old page never mentions it; it is the mundane trigger of the group-chat confrontation.
3. **Annie never says goodbye** — zero occurrences in 666 rows; her last message is "Understood" (00:10:06). The old page's "Annie fragments: 'Please…', cut-offs" understated how little she drove.
4. **The "unring this bell" tail** — "…on top of what you did to me over the last year" — omitted by the old page, restored.
5. **Volume corrected**: the old page cited 591 + 2,993 rows across two unheld exports; the held corpus gives 666 (601/65) for the fight window, with ~400 of Dan's 601 being agent spam.
6. **June 1 is not the end**: the old page's epilogue stopped at June 15–16; the rewrite adds the July 23 re-contact, the Jul 26–Aug 2 re-entanglement, the Aug 10–16 good week, and the Aug 16–19 terminal end with its own goodbye ritual — plus the honest caveat that contact resumed Aug 27–Sep 7.
