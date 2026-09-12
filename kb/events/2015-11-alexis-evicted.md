+++
id         = "evt:2015-11-alexis-evicted"
layer      = 2
type       = "event"
title      = "Alexis Armel evicted from 155 Virginia Avenue (terminal, Nov 28–Dec 1, 2015)"
cites      = ["dat:0161-bond-switch-mutual-exit-correction", "dat:0246-alexis-armel-hidden-year-contradiction"]
confidence = "high"
importance = 5
tags       = ["alexis-armel", "eviction", "bond-switch", "uniontown-era"]
created    = "2026-09-10"

[when]
start  = "2015-11-28"
end    = "2015-12-01"

[[edges]]
rel         = "about"
target      = "ent:alexis-armel"
strength    = "strong"
asserted_by = "other"

[[edges]]
rel         = "about"
target      = "ent:suzanne-frank"
strength    = "strong"
asserted_by = "other"
note        = "Suz brokered and paid for the eviction: cocaine and a car offer on Nov 30."

[[edges]]
rel         = "followed"
target      = "evt:2015-11-annie-relationship-starts"
strength    = "strong"
asserted_by = "other"
note        = "The bond switch: Alexis moves out Dec 1; the Annie relationship's first in-person meeting was Nov 29."
+++

## What happened

Over roughly 72 hours in late November 2015, Dan ended his six-year
relationship with Alexis Armel and evicted her from 155 Virginia Avenue —
the second of at least two Suz-driven evictions of Alexis, and the
terminal one. The eviction was run as reversible pressure steps, not a
confrontation, and it was brokered and paid for by Dan's mother: on
November 30 Suz brought him cocaine and promised a car "this week" if he
got Alexis out.

## Dated sequence

The corpus dates every beat of the endgame:

| when | what | source |
| :--- | :--- | :--- |
| ~2015-11-24 | Alexis herself makes the introduction — *"HAPPY ONE WEEK SINCE LEX HANDED YOU TO ME"* (Annie, Dec 1) | Alexis page, corpus__3.txt |
| 2015-11-28 | key confiscated; Dan tells Annie the Alexis **origin** story — she is still living with him in Uniontown | [dat:0161] |
| 2015-11-29 ~02:00 | Dan meets Annie at the Uniontown Country Club in the rain; that same night, to Zachariah: *"Things are collapsing with lex"* | corpus__3.txt; [dat:0161] |
| 2015-11-29 02:52 | Annie: *"I am going to get rid of him just like you just did"* — she is ending her own relationship in the same 72 hours | [dat:0161] |
| 2015-11-29 | Suz phones Dan to say he *should date* Annie — the name fits the family: *"Anne Dan Suzanne Fran Diane Van"* (verified in the held corpus, 2015-11-30 18:49 UTC) | [dat:0161] |
| 2015-11-29 14:54 | Dan names the tie holding her in the house: *"Ahhhh I know why she isn't leaving / Or like HASNT left / …she doesn't have another drug source"* | corpus__3.txt |
| 2015-11-30 00:35 | her property removed from the guest bedroom — *"so she knows I could actually call the cops"* | [dat:0161] |
| 2015-11-30 05:02 | Suz: *"brought me a line, and told me she'd get me a car this week if I get Alexis out"* — **cocaine and a car, from the mother, as consideration for completing the eviction** | [dat:0161] |
| 2015-11-30 13:42 | parents summoned (pressure step) | [dat:0161] |
| 2015-12-01 | *"Helping lex leave"* — Alexis moves out of 155 Virginia | corpus__3.txt |
| 2015-12-02 | *"Listen I broke up with lex, I'm in love with Annie Ulmer"*; *"Alexis only left yesterday"* | corpus__3.txt |

## What this corrects

The standing wiki claim was one-sided: Dan leaving Alexis for an
unattached Annie. The Annie Read's biggest open correction is that the
switch was **mutual** — Annie had her own partner ("turd boy"/"dude",
present with her family Nov 29) and ended it the same week — and
**brokered and paid for** by the family. That reframes the entire 2015
origin story from seduction to transaction, dated to the first 72 hours,
and it is load-bearing for everything the wiki later says about maternal
leverage. [dat:0161-bond-switch-mutual-exit-correction]

A second correction, applied 2026-08-15: the "cheating" this page once
dated to November 28, 2015 did not happen in 2015 at all. The message —
*"Lex cheated on me 2 weeks in after I moved her to fla"* — is the
**origin** story of the Alexis relationship told to Annie on Nov 28:
"two weeks in" is two weeks into the relationship that began in 2009
at Full Sail; the Florida is Winter Park; per Dan the episode was online
only. The Florida move once pinned to it was a fabrication produced by
back-computing "2 weeks" from the message date.
(corpus__3.txt, Alexis page; [dat:0244])

## Evidence against / limits

- **One quotation in [dat:0161] is relayed, not re-verified.** The
  "Anne Dan Suzanne Fran Diane Van" name list was verified verbatim in
  the held iMessage corpus; the cocaine-and-car line and the pressure-step
  timestamps come from the read pass's quotation of annie-corpus.csv,
  which is not held in this repository. [dat:0161]
- The "turd boy" identification that underpins the mutual-exit half is
  filed separately ([dat:0163-turd-boy-emilio-identification-testimony](../data/0163-turd-boy-emilio-identification-testimony.md))
  because its provenance differs.

## Contradictions the ingest found

The Alexis page now carries **at least two Suz-driven evictions of
Alexis**, and this one is the terminal corpus-dated event:

- **March 2014**: the washing-machine eviction — Suz "had enough with
  Alexis" after Alexis took the household's washing machine apart (an
  incident Dan says he still does not understand), threw her out, and for
  five months Dan snuck her in and out, hidden in a closet when
  necessary; then they moved in with Leah Tedesco, and by Christmas 2014
  were at 155 Virginia Ave. (2026-08-27 operator capture)
- **Late-2014/early-2015**: an earlier operator account — Alexis secretly
  living at 337 Saratoga, hidden roughly four months before the January
  2015 lease, with no Tedesco residence. The two tellings are held side
  by side, unresolved: same event at different resolutions, or two
  separate evictions. [dat:0246]

This event is the one with dated messages. The others are testimony-only
and do not touch the November 2015 sequence.

## Open questions

- Whether the eviction was a formal tenancy termination or informal
  pressure (the key confiscation and property removal read as the
  latter); no lease instrument is on record.
- The washing-machine incident itself: unexplained by Dan's own account.
- Leah Tedesco: named once in the 2014 sequence, deferred explicitly, no
  further record.
- Alexis's own account of the eviction: absent from the corpus.

## Cross-links

- [ent:alexis-armel](../entities/alexis-armel.md),
  [ent:annie-ulmer](../entities/annie-ulmer.md),
  [ent:suzanne-frank](../entities/suzanne-frank.md) — the people in the
  transaction.
- evt:2015-11-annie-relationship-starts — the other half of the switch,
  same 72 hours.
- [dat:0161-bond-switch-mutual-exit-correction](../data/0161-bond-switch-mutual-exit-correction.md)
  — mutual exit + maternal brokering, applied 2026-08-17.
- [dat:0246-alexis-armel-hidden-year-contradiction](../data/0246-alexis-armel-hidden-year-contradiction.md)
  — the earlier Suz-driven eviction accounts, held unresolved.
- [dat:0244-alexis-armel-dating-and-commitment-speed](../data/0244-alexis-armel-dating-and-commitment-speed.md)
  — the opening sequence (Thanksgiving 2009) and the Nov-2015 "cheating"
  correction.
