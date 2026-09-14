+++
id          = "int:volume-salience-contrast"
layer      = 3
type       = "interpretation"
title      = "Message volume measures channel-local intensity, not durable relationship salience"
cites      = ["dat:1448-lou-forgotten-despite-1602-messages", "dat:1443-messenger-drive-correspondents", "src:sammy-chat-transcript-20260912-0740"]
confidence = "moderate"
perspective = "llm"
importance = 3
tags       = ["message-volume", "memory", "salience", "lou-bahet", "annie-ulmer", "valeria-iglesias-cid"]
created    = "2026-09-12"
falsifiers = [
  "Lou's forgetting turns out to be ordinary: 21 days, no recorded consummation, no post-September contact — short intense unresolved threads are routinely forgotten. If duration and closure explain it alone, the general claim loses its anchor case.",
  "Annie's low FB count is shown to reflect platform choice only (iMessage carried the relationship at 97,768 messages) — the contrast then compares volume-within-channel to salience, and the 'volume doesn't rank relationships' reading needs the channel qualifier to survive.",
  "Valeria's iMessage collapse is shown to be an export artifact — missing exports hid genuine hits. 'One genuine hit in 216,101 rows' is then a finding about held material, not the relationship.",
]
alternatives = [
  "Volume does track salience but with a decay function: recent high-volume threads (Lou, 2023) fade faster than long-duration low-volume ones (Annie) because salience is duration-weighted, not peak-weighted. The contrast is then about integration over time, not channel vs person.",
  "The three cases measure three different things (a burst, a platform split, a testimony collapse) and don't jointly support one principle. Lou is forgetting, Annie is channel choice, Valeria is verification failure — a shared label, not a shared mechanism.",
]

[when]
date   = "2026-09-12"
+++

## The claim, bounded

Message volume is evidence of **channel-local intensity** — how much two
people used one pipe during its window — not of **durable relationship
salience**: whether the person persists in memory, behavior, and the
record years later. The three contrast cases:

| Person | Volume (channel) | Durable salience |
|---|---|---|
| Lou Bahet | 1,602 msgs / 21 days, 707-msg night | Forgotten entirely by 2026 ("i said WHO?") |
| Annie Ulmer | 133 FB msgs (iMessage carries it: 97,768) | Eleven years, load-bearing |
| Valeria Iglesias | 4,879 IG msgs | One genuine iMessage in 216,101 rows; long tail was testimony |

## Use

When a kb/ node or article cites message counts as relationship evidence,
check the channel, the window, and the durable trace separately. Counts
rank pipes; memory and multi-channel persistence rank people.
