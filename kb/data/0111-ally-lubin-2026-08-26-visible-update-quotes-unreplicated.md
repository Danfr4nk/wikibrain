+++
id            = "dat:0111-ally-lubin-2026-08-26-visible-update-quotes-unreplicated"
layer         = 1
type          = "datum"
title         = "Ally Lubin 2026-08-26 visible-update: the conversation it narrates is not in the held iMessage corpus"
claim         = "The 2026-08-26 visible-update page (page_type: note; its own infobox: *\"carries no standing facts of its own\"*) narrates an August 26 conversation whose checkable substrate is absent from the held corpus: the three verbatim Ally quotes — *\"I just don't know if you're a good person\"*, *\"It's just hard to take you seriously and I also still don't trust you at all\"*, *\"You're an unreliable narrator and you're looking to fill a void\"* — return **zero hits corpus-wide**; in the Ally thread (allylubin@gmail.com, 2,073 messages), the **Aug 24–28, 2026 window contains 200 messages, all sent by Dan, zero received from Ally**; and there are no Rick-thread messages Aug 20–Sep 1, 2026 to corroborate the \"text Rick\" follow-through. The behavioral characterization (affection + skepticism + correction + continued contact) is therefore operator-observed testimony about a conversation on an unidentified channel — or a channel whose received side is missing from this pull — not a corpus-verified fact. Related fabrication-correction context is filed separately in [`dat:0155`](0155-ally-lubin-2026-08-26-update-page.md), which covers the sibling page."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "low"
extraction    = "Corpus page read directly (corpus__3.txt line 47145, 85 lines) — distinct from the sibling page at line 47041 covered by dat:0155. Quotes transcribed verbatim from the \"Why Ally's skepticism matters\" section. Cross-checks via bin/corpus-query on corpus/messages.csv (192,140 messages): each of the three exact phrases 0 hits corpus-wide; --who allylubin --from 2026-08-24 --to 2026-08-28 returned 200 messages, every one sender \"Me\"; --who Rick --from 2026-08-20 --to 2026-09-01 no matches; \"text my dad\" no matches. One adjacent corroboration of Ally's critical voice exists in-thread but on a different date: 2026-08-19, Ally: \"You just love bomb\" — so the *register* of the quotes is attested, the *Aug 26 conversation* is not. The user's own memory page for Ally (~/memory/people/ally-lubin.md, updated 2026-09-09) repeats the characterization (\"she tells him she still doesn't trust him... text his father Rick\") but is downstream of the same material, not an independent source."
importance    = 3
tags          = ["people", "ally-lubin", "unverified", "quotes", "corpus-gap", "old-wiki"]
created       = "2026-09-09"

[when]
start = "2026-08-26"
end   = "2026-08-26"
+++

## What the check confirms

The page's self-description is accurate: it is an addendum carrying
interpretation, and the interpretation's own text prohibits overreading
(\"Ally's words prohibit a romantic conclusion\"). The one in-thread
corroboration — Ally's \"You just love bomb\" on Aug 19 — confirms the
skeptical register is real and recent. Nothing here contradicts the page.

## What it does not confirm

The conversation itself. Zero received Ally messages in a five-day window
around Aug 26, in a thread that otherwise runs hot (1,953 messages in 2026),
means the narrated exchange either happened off-iMessage or its received
side never made this corpus pull. Either way, the three quotes and the
Rick-texting follow-through are single-source (the note's author) claims
about an unheld record. Filed as unverified with the reason stated — and
kept separate from dat:0155's fabrication finding, which concerns a
different page and a different (corrected) manufacture.
