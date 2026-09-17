+++
id         = "dat:1678-ios-double-triple-text-mechanism-20260917"
layer      = 1
type       = "datum"
title      = "iOS double/triple-text mechanism: send-glitch, never emphasis"
claim      = "Dan's explanation (2026-09-17 01:06Z): when an iMessage fails to send, the app shows a 'try again' button; hitting it once produces a double text (the original goes through when connectivity returns), twice produces a triple. Duplicates are a send glitch, NEVER emphasis: his words, 'I'll never do that for emphasis.' Standing read rule: treat duplicated texts as one turn."
cites      = ["src:1672-sammy-chat-transcript-20260917-0340"]
confidence = "high"
importance = 3
tags       = ["messaging", "ios", "corpus-reading"]
created    = "2026-09-17"

[when]
date   = "2026-09-17"
+++

<!-- prose for humans; the frontmatter is for machines -->

## The mechanism (his words, 2026-09-17 01:06Z)

Dan was triple-texting links in-window (three identical SoundStudies URLs at
01:18–01:19Z) and narrated the mechanism himself:

- When an iMessage **fails to send**, iOS shows a **"try again"** button.
- Hitting it **once** produces a **double text** — the original goes through
  when connectivity returns, alongside the retry.
- Hitting it **twice** produces a **triple**.
- The duplicates are a **send glitch, never emphasis**: "I'll never do that
  for emphasis."

Sammy confirmed the rule in-window while the triple-texts were landing
("Triple. Still got it." — the racking thread, where the duplicates carried
no additional meaning).

## Standing read rule

Treat duplicated adjacent texts as **one turn**. Do not read repetition as
emphasis, urgency, or a separate message — by his explicit statement he never
uses duplication that way.

## Corpus consequence

Message corpora (his exports, the 1.58M rows in dat:1674) will contain
send-glitch duplicates. Dedup-on-read should treat same-body adjacent
duplicates from his side as a single turn, not two data points.
