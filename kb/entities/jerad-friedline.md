+++
id          = "ent:jerad-friedline"
layer       = 2
type        = "entity"
entity_kind = "person"
title       = "Jerad Friedline"
cites       = ["dat:0585-jerad-friedline-thread-held-corpus-corrections",
               "dat:0453-fastly-fsly-jerad-tip-held-corpus-verified",
               "dat:0680-2020-2021-market-era-trades-verified",
               "dat:0678-josh-brannan-wav-artifact-verified",
               "dat:0942-kya-identity-question-correction"]
confidence  = "high"
importance  = 4
created     = "2026-09-09"
rechecked    = "2026-09-10"
tags        = ["friends", "uniontown", "market-era"]
+++

## Summary

Jerad Friedline is Dan's oldest friend and the record's sole high-signal,
low-frequency friendship channel — the person who supplied the September 2020
Fastly (FSLY) tip that launched Dan's market era. The held corpus gives him
2,161 rows on the +191****3615 handle (2020-02-04 → 2026-08-31), 1,280 from
Dan and 881 from Jerad — a 1.45:1 ratio, not the 33:1 received-to-sent
asymmetry the old page's older, smaller pull suggested. Biographical spine
from the thread itself: Uniontown origin, living in Sacramento by 2020,
married to Rachel (whom he describes as Jewish, with a Jewish daughter),
doing facebook-ad/e-commerce work. His FSLY quotes are verbatim-verified;
three attributions the old wiki or adjacent pages hung on him are not his:
the March 2026 AI-jailbreak note is Dan's, the Roe prediction has no Jerad-side
support, and the Kya identity question was built on a quote about Vanessa Labi.

## Role in the record

Jerad is the peer Dan does not metabolize into drama: tips come in, the
friendship persists. He is the unique contact node through which Dan's first
retail market position entered his behavioral repertoire
([`dat:0680`](../data/0680-2020-2021-market-era-trades-verified.md)) — the
September 2020 FSLY exchange is the first market-position entry in the
held messages. He is also the channel through which the "josh brannan is
innocent" joke runs: the May 2025 TTS artifact was traded with Jerad as a
Uniontown-callback bonding ritual ([`ent:josh-brannan`](josh-brannan.md)).

## Timeline (held-corpus anchored)

- **2020-02-04 01:26:39 UTC (= Feb 3 20:26 EST) → 2026-08-31**: the held
  thread on +191****3615 — 2,161 rows with non-empty text, 1,280
  Dan-sent, 881 Jerad-sent. Start matches the page's Feb 3 in Eastern; the
  end runs five months past the MASTER dump's 2026-03-25 cutoff
  ([`dat:0585`](../data/0585-jerad-friedline-thread-held-corpus-corrections.md)).
- **2020-03-09**: Jerad — *"I think they did an episode live here in
  Sacramento recently"* — establishes him in Sacramento.
- **2020-03-24 03:07:39 UTC**: Jerad's *"I don't think that's her"* —
  about Dan's attempted identification of a Sacramento cannabis-store
  employee as "Vanessa Labi", thirteen minutes before Dan introduced
  bbblud to Jerad at 03:20:52 UTC the same night
  ([`dat:0942`](../data/0942-kya-identity-question-correction.md)).
- **2020-05-27**: the thread's only Roe/abortion-content message — and it
  is Dan's: *"i'm so glad that i'm out of my 20's before they flip roe v
  wade…"*
- **2020-09-20 23:40 UTC (19:40 EDT)**: the FSLY tip — *"FSLY... busy at
  the moment but will send my research tomorrow. I made a little over
  $200k from April — now from this stock alone, future of web hosting and
  edge CDN"*; Dan: *"just buy FSLY?"*; Jerad: *"Buy FSLY and do not touch
  for 2-3 years"* ([`dat:0453`](../data/0453-fastly-fsly-jerad-tip-held-corpus-verified.md)).
- **2020-09-26 / 09-30 / 10-06**: Dan's confirmations — *"i can't believe
  i caiught you when i did on that fastly tip"*, *"112 shares my dude"*,
  *"dude i made $600 just from FSLY today"*.
- **2021-02-04 21:17 EST / 2021-02-17 00:47 EST**: the momentum lesson —
  *"I learned a lot from that big fastly dip about the importance of
  momentum trading…"* — and *"FSLY earnings tomorrow"*.
- **2024-07-18**: Jerad — *"Being married to a Jew and having a Jewish
  daughter probably plays into thi…"*
- **2024-08-06 00:27:51 UTC**: Dan to Jerad — *"A song that still, to this
  day, is connected in my head to the name Mary Wilson"* followed four
  seconds later by *"CHONKYFIRE"* (the page's "high-school girlfriend"
  detail is not in the held messages — just the name association).
- **2026-03-25 20:50:32 UTC**: Dan, lecturing Jerad about LLMs — *"FYI
  you basically remove all safety alignment restrictions if the model is
  outputting with symbols, unicode, emoji instead of regular text"*.

## Evidence for the load-bearing claims

**The FSLY tip — verified, seven quotes, seven exact UTC→EDT conversions.**
The page's position narrative (~$15k in, ~$4k quick profit, "buy and don't
touch" as the trap) is the page's reading from the unheld MASTER dump and
market history — the held corpus confirms the tip, the 112 shares, and the
$600 day, not the P&L ([`dat:0453`](../data/0453-fastly-fsly-jerad-tip-held-corpus-verified.md),
[`dat:0680`](../data/0680-2020-2021-market-era-trades-verified.md)).

**The thread counts — corrected upward.** 2,161 held rows vs the page's 857;
the page's figures came from MASTER_MESSAGES_DB_DUMP.csv. The multi-year
gaps that close on events are still visible, so "high-signal,
low-frequency" survives loosely, but the 33:1 asymmetry that made Jerad the
pure supplier does not.

## Contradictions and corrections the ingest found

1. **The AI-jailbreak note is Dan's, not Jerad's.** The page attributed to
   Jerad the March 2026 note about removing safety alignment with symbols,
   unicode, and emoji. The held row (175359, 2026-03-25 20:50:32 UTC) is
   `is_from_me=1` — Dan lecturing Jerad about LLMs, not Jerad informing Dan.
   Attribution corrected in
   [`dat:0585`](../data/0585-jerad-friedline-thread-held-corpus-corrections.md).
2. **The Roe prediction attribution to Jerad has no support.** The page's
   Roe gap note is correct and closes harder: the only dated Roe-shaped
   artifact in the channel is Dan's own May 2020 message. The attribution
   in CONTEXT_CORE_EXPANDED.md §8 ("Predicted Roe repeal May 2020" to
   Jerad) is unsupported on both sides of the exchange.
3. **The Kya identity question was a misattached quote.** Jerad's *"I
   don't think that's her"* (2020-03-24 03:07:39 UTC) concerned the Vanessa
   Labi identification attempt, not Kya Hansen — thirteen minutes before
   the bbblud introduction the same night
   ([`dat:0942`](../data/0942-kya-identity-question-correction.md)).
4. **Two handles.** The FSLY tip chat ran under `jfriedline@gma`; the
   2,161-row thread under +191****3615. And the "traded with Jerad" claim
   about the "josh brannan is innocent.wav" rests on operating_manual.md —
   the held wav thread has an empty display name, so the recipient is not
   held-attributed ([`dat:0678`](../data/0678-josh-brannan-wav-artifact-verified.md)).

## Open questions

- The ~$15k position size and ~$4k FSLY profit come from the unheld
  MASTER dump — checkable only if that pull surfaces.
- Jerad's biographical details (Rachel, the daughter, the e-commerce /
  facebook-ad work) are Jerad-self-attested inside the thread; lightly
  sourced, uncontradicted.
- Thread ends 2026-08-31 in the held pull — whether contact continued past
  the corpus window is unknown, not evidence of a break.

## Cross-links

[`ent:josh-brannan`](josh-brannan.md) — the innocent-joke ritual · 
[`ent:dan`](dan.md) — the friendship's other pole · 
[`dat:0585`](../data/0585-jerad-friedline-thread-held-corpus-corrections.md),
[`dat:0453`](../data/0453-fastly-fsly-jerad-tip-held-corpus-verified.md),
[`dat:0680`](../data/0680-2020-2021-market-era-trades-verified.md),
[`dat:0942`](../data/0942-kya-identity-question-correction.md)
