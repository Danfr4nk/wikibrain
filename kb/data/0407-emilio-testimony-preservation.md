+++
id            = "dat:0407-emilio-testimony-preservation"
layer         = 1
type          = "datum"
title         = "Emilio identification stays operator testimony; held messages confirm only the name in the thread, not the identity"
claim         = "The page `wiki/people/emilio.md`'s identification of 'Emilio' rests on operator testimony (already recorded in dat:0163). The held `corpus/messages.csv` confirms exactly two Emilio mentions: **2015-12-02 23:48:26 UTC** — *'because fucking Emilio texted her about me'* — and **2015-12-14 03:23:09 UTC** — *'Honestly I just miss having fun with you!'*. The November 29 'turd boy' message does not itself name Emilio and cannot be used to bootstrap the identification. Both held messages are UTC; the page's local timestamps run five hours earlier (EST), so date attributions must keep the offset explicit. Corpus page and old-wiki export are text-identical."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Full-text search of the held 192,140-row corpus/messages.csv for 'Emilio' returns exactly the two stated rows; 'turd boy' is on a separate message with no name attached. Timestamps are the CSV's UTC date_sent values (EST = UTC−5 in December 2015)."
importance    = 3
tags          = ["people", "corpus", "testimony", "old-wiki", "attribution"]
created       = "2026-09-09"

[when]
start = "2015-11-29"
end   = "2015-12-14"
+++

## Why the distinction matters

The identity 'Emilio = the texting rival' is believed on Dan's say-so. The
corpus corroborates that an 'Emilio' existed in the triangle's text record —
it does not corroborate *who* he was. Collapsing that distinction would
manufacture a primary-source identification that does not exist. Keep
dat:0163's testimony framing wherever this page's claims travel.

## Cross-references

- [`dat:0161`](0161-mutual-2015-bond-switch.md) — the 2015 switch context.
- [`dat:0163`](0163-emilio-identification-operator-testimony.md) — the
  testimony-based identification this datum preserves.
