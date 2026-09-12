+++
id            = "dat:1447-end-fight-rewrite-evidence"
layer         = 1
type          = "datum"
title         = "End Fight full rewrite (2026-09-12): claim→source table for the 666-row window"
claim         = "Every load-bearing quote in the rewritten wiki/timeline/events/end-fight.md is tied to its corpus row: the 666-row window (2026-05-30 22:36 → 2026-06-01 00:27 EDT, handle +12124702449, 601 Dan / 65 Annie) was read in full in timestamp order from RAWLOGS raw/imessage/messages.csv. The exit line 'Goodbye forever… sic semper lupanis.' (00:27:49) is Dan's — final row of his unbroken six-message outbound run 00:21:47–00:27:49. Annie's last message of the window is 'Understood' at 00:10:06; she never says goodbye in 666 rows. ~400 of Dan's 601 rows are identical AI-agent spam (01:08:30–01:13:12 May 31). The August coda's goodbye ritual (Aug 19 05:46–06:04, ending 'Goodbye Daniel') was read directly from aug-sep-2026-imessage-export.csv. The June 15 Tuquick defection verbatims and the AI-model/Spotify-crate framing are labeled by provenance: quotes corroborated across three corrected pages, crate/model details unheld."
cites         = ["src:imessage-corpus-2026"]
attributed_to = "src:imessage-corpus-2026"
confidence    = "high"
extraction    = "RAWLOGS raw/imessage/messages.csv (48MB) fetched via GitHub API; filtered to chat_identifier +12124702449, date_sent 2026-05-31..2026-06-01 UTC; all 666 rows read in order. EDT = UTC-4. is_from_me=1 → Dan."
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
| 35 | AI model + Spotify crate epilogue | 2026-06-15/16 | — | Dan fine-tuned a model on fight logs + shared custom crate with Annie and Tuquick | [OPERATOR]/unheld — NOT row-verified in this rewrite; rests on old page's unheld sources |

## New findings vs the old page

1. **The ~400-message AI-agent spam burst** (rows 0–1, 16–422+) — the old page never mentions it; it opens the fight and explains the "Chinese" exchange.
2. **The four-hour procurement thread inside the breakup** (ATM/CashApp/blue folder, 17:37–22:05) — the old page never mentions it; it is the mundane trigger of the group-chat confrontation.
3. **Annie never says goodbye** — zero occurrences in 666 rows; her last message is "Understood" (00:10:06). The old page's "Annie fragments: 'Please…', cut-offs" understated how little she drove.
4. **The "unring this bell" tail** — "…on top of what you did to me over the last year" — omitted by the old page, restored.
5. **Volume corrected**: the old page cited 591 + 2,993 rows across two unheld exports; the held corpus gives 666 (601/65) for the fight window, with ~400 of Dan's 601 being agent spam.
6. **June 1 is not the end**: the old page's epilogue stopped at June 15–16; the rewrite adds the July 23 re-contact, the Jul 26–Aug 2 re-entanglement, the Aug 10–16 good week, and the Aug 16–19 terminal end with its own goodbye ritual — plus the honest caveat that contact resumed Aug 27–Sep 7.
