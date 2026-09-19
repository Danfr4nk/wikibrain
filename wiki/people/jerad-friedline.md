---
domain: people
page_type: entity
title: "Jerad Friedline"
aliases: ["Jerad", "Jerad Friendline"]
status: stable
date_created: 2026-06-23
date_modified: 2026-09-17
sources:
  - raw/self/context-core/CONTEXT_CORE_EXPANDED.md
  - raw/self/dox-scan/all_imessages_complete_dump.txt
  - raw/self/message-csv/MASTER_MESSAGES_DB_DUMP.csv
  - raw/self/facebook/facebook-ihatedanfrank/friends_and_followers/friends.html
  - raw/twitter/archive.jsonl
  - corpus/derived/threads.csv
  - corpus/derived/summary.json
  - raw/self/dox-md/operating_manual.md
synthesizes:
  - wiki/self/context-core
  - wiki/timeline/periods/2020-2021-market-era
  - wiki/people/josh-brannan
connections:
  - page: wiki/self/context-core
    type: evidences
    claim: "The 【█▓Jerad Friedline▓█】 entry in CONTEXT_CORE_EXPANDED.md establishes Jerad as Dan's oldest friend and the sole high-signal, low-frequency contact channel through which political/financial tips flow during crisis moments."
  - page: wiki/timeline/periods/2020-2021-market-era
    type: instantiates
    claim: "The September 2020 FSLY tip from Jerad ($15k position, ~$4k quick profit) is the entry point that launched Dan's retail market era; the held corpus confirms the tip, the 112 shares and the $600 day, but not the P&L."
  - page: wiki/work/fastly-fsly
    type: evidences
    claim: "The verbatim FSLY tip messages (2020-09-20, Received from +191****3615) document Jerad's 'buy FSLY and don't touch for 2-3 years' advice, which Dan followed with 112 shares before the vertical tail ended in late 2020."
  - page: wiki/people/josh-brannan
    type: parallels
    claim: "Both Jerad and Josh Brannan function as Uniontown reference points in Dan's relational architecture — Josh crystallized into the 'josh brannan is innocent.wav' TTS artifact, Jerad into the FSLY tip and political mirror pattern."
  - page: wiki/mind/concepts/contact-gini
    type: evidenced-by
    claim: "The held corpus derivative ranks the Jerad thread 12th of 577 by volume — 2,161 messages over 2,400 days, 1,280 of them Dan's — which replaces the page's older 33:1 received-to-sent asymmetry with a 1.45:1 two-sided channel."
  - page: wiki/self/twitter
    type: evidenced-by
    claim: "Nine posts across 2009-2014 in the held archive place Jerad in the Pennsylvania half of the social graph eleven years before the message thread opens, including a February 2010 invitation to move in ('COME STAY. be moved in by march 1')."
  - { target: "[[wiki/mind/synthesis/ai-collaborative-analysis]]", type: references, claim: "The March 2026 unicode-jailbreak observation in this channel is Dan's, not Jerad's (dat:0585) — it places Dan, not Jerad, inside that page's AI-forensics interest." }
tags: [relationships, politics, financial-stress, uniontown-era, market-era]
infobox:
  name: "Jerad Friedline"
  relationship_to_dan: friend
  location: sacramento
  known_for: "Dan's oldest friend; source of the FSLY tip; political mirror from Bernie to reluctant Trump"
---

# Jerad Friedline

Jerad Friedline is the oldest friendship in the record. He and Dan grew up
together in Uniontown, Pennsylvania; by 2020 he was living in Sacramento,
married to Rachel — he describes her as Jewish, and their daughter as Jewish —
and doing Facebook-ad and e-commerce work
([`dat:0585`](kb/data/0585-jerad-friedline-thread-held-corpus-corrections.md),
all four details attested by Jerad inside the thread itself).

The friendship has one unusual property, and everything else on this page is
downstream of it: **it does not require maintenance.** It goes quiet for years
and reopens inside a day when something happens in the world. There is no
apology ritual at the reopening, no accounting for the silence. In a corpus
organised around a single overloaded attachment channel
([[wiki/mind/concepts/contact-gini]]), Jerad is the one relationship that
survives on nothing.

He is also the only person in the record who ever handed Dan money-shaped
advice that worked.

## Eleven years before the messages start

The wiki has always dated this friendship from the iMessage thread, which opens
on 4 February 2020. The held Twitter archive reaches eleven years further back.

`raw/twitter/archive.jsonl` — 2,741 posts, 24 September 2008 onward — is
present in this repository, and nine of them address or name Jerad between
March 2009 and April 2014. The complete log is below. What it shows is a
Pennsylvania friendship running in a pack, usually with
[[wiki/people/josh-brannan|Josh Brannan]] in the same post.

Thanksgiving 2009: *"i'm thankful for my family/friend, sour diesel, tropical
lifesaver gummies, and @joshbrannan / @jfriedline for their sign stealing
abilities"*. Four weeks later, three days before Christmas: *"seeing my boyzzzz
@jfriedline @joshbrannan tonight."* In January 2010 an argument about
something, conducted entirely in a reference: *"@jfriedline it's still no
'brink!'"*

Then, on 18 February 2010 at 23:38 Eastern, the post that changes the shape of
the early record:

> *"@jfriedline http://bit.ly/dtRBr0 COME STAY. be moved in by march 1."*

A property link and an invitation to move in, with a deadline eleven days out.
Nothing in the corpus says whether Jerad came, and the link is dead. But it is
the only documented instance of Dan asking anyone in that circle to live with
him, and it lands roughly ten weeks before the 1 May 2010 New York arrival the
wiki dates elsewhere. Whatever the plan was, it was a plan.

Two months later: *"@joshbrannan @jfriedline yo J.A. has been ditching my
calls. we might need to bail him from jail #pyramidscheme"*. A month after
that, on 30 May 2010: *"I miss u @jfriedline ...#421+plz"*.

Then a four-year gap, and one post on 11 April 2014 that is the warmest thing
in the whole tweet log — a photograph of the two of them as kids, posted to
Instagram by an adult who found it: *"A young misterfriedline and myself
engaged in some professional grade thumbs-upping."* The image is not recoverable
(the Instagram link was not followed and no copy is held), which is a real loss:
it is the only known picture of them together.

**How much to read into the gaps.** Very little. Eight of the nine posts come
from the archive's `live-x-scrape` source, which
[[wiki/self/twitter/2013|the 2013 page]] documents as truncated to ten results
per month-bounded query. The silence from mid-2010 to 2014 is at least partly
the instrument, not the friendship.

## 4 February 2020: the channel opens

The held thread runs from **4 February 2020 to 31 August 2026** — 2,161
messages over 2,400 days, **1,280 from Dan and 881 from Jerad**, with 2,057
carrying text and 217 carrying attachments (`corpus/derived/threads.csv`,
thread `bac75f031bd4c107`).

Two things in those numbers matter.

**First, the asymmetry is gone.** This page used to say 857 messages — 832
received, 25 sent — and built its central claim on the ratio: *"Jerad supplies
conviction and scale; Dan supplies a smaller, hedged echo."* The held corpus
says 1,280 to 881, which is 1.45:1 **in Dan's favour**. The old 33:1 figure came
from `MASTER_MESSAGES_DB_DUMP.csv`, an export whose direction field marks nearly
everything received — the same artifact that produced fourteen other
one-directional thread readings across this wiki
([[kb/interpretations/received-half-count-pattern]]). Dan is not the quiet
party here. He is the one doing most of the talking.

**Second, this is not a small channel.** Of 577 threads in the held corpus,
Jerad's ranks **12th** — top 2%. "High-signal, low-frequency" survives as a
description of the *shape* (long gaps, sudden bursts) but not of the volume.

And it is live. The thread's last message is 31 August 2026; the corpus itself
ends 7 September 2026. Seven days. Of the long-running friendships in this
record, Jerad's is one of the few still transmitting at the edge of the
archive.

## The FSLY tip

On the evening of 20 September 2020, Jerad sent Dan a stock tip. It is the
single most consequential message anyone sends him in the whole market era, and
every word of it is verified in the held corpus
([`dat:0453`](kb/data/0453-fastly-fsly-jerad-tip-held-corpus-verified.md)).

At 19:40 Eastern:

> *"FSLY... busy at the moment but will send my research tomorrow. I made a
> little over $200k from April — now from this stock alone, future of web
> hosting and edge CDN"*

> *"Amazon is using Fastly on Amazon.com over their own AWS hosting, that's all
> you need to know"*

Dan's reply, twenty-three minutes later, is four words: *"just buy FSLY?"*

Jerad, in the same minute:

> *"Buy FSLY and do not touch for 2-3 years"*

He bought. Six days later: *"i can't believe i caiught you when i did on that
fastly tip."* Four days after that, on 30 September at 09:06: *"112 shares my
dude."* A week later, on 6 October at 15:37: *"dude i made $600 just from FSLY
today."*

The friendship detail inside the finance detail is the *"$200k from April"*.
Jerad is not passing along a tip he read. He is telling his childhood friend
what he personally made, and then telling him what to do — and Dan, who
interrogates nearly everything, asks one four-word clarifying question and
does it. That is the only instance in the corpus of Dan taking a
portfolio-scale action on someone else's say-so without visible argument.

The advice was also wrong in the specific way that made it profitable. *Don't
touch for 2-3 years* would have meant holding through the late-2020 guidance
collapse. Dan did not hold. On 4 February 2021, at 21:17, he wrote the lesson
down:

> *"I learned a lot from that big fastly dip about the importance of momentum
> trading. I never get FOMO about stuff I've sold that has gains later, but you
> feel it hard when you miss a good opportunity to get out"*

Twelve days later, still watching: *"FSLY earnings tomorrow"* (17 February
2021, 00:47).

What the corpus does **not** establish: the ~$15k position size and the ~$4k
profit are from the unheld master dump, and the earnings-crash mechanics are
external market history that [[wiki/work/fastly-fsly]] flags as such. The held
record gives the tip, the 112 shares, the $600 day and the lesson — not the
P&L.

The same channel carries the era's worst day. On 23 February 2021 at 14:24 UTC:
*"I bought fucking calls on CCIV yesterday"*, then two minutes later, *"But my
$25k just turned into 17k"*
([`dat:0680`](kb/data/0680-2020-2021-market-era-trades-verified.md)). He tells
Jerad about the $8,000 hole the same way he told him about the $600 day.

## The political mirror, and the silence that isn't one

Politically the two of them move together and then apart. Both start with
Bernie enthusiasm around 2016; both travel through the dirtbag-left media of
the late 2010s; by 2020–2024 the page records Jerad arriving at a reluctant
Trump fascination that Dan does not share
([[wiki/self/context-core]], and see [[wiki/mind/synthesis/2020-left-turn]] for
Dan's own arc).

The interesting part is what the disagreement does to the contact rate:
nothing. The thread has a near-silent stretch across 2021–2024 and it
evaporates on events — the Trump shooting, the Biden dropout, the GameStop
episode. The July 2024 burst around the Trump shooting runs to roughly 800
messages in six weeks ([[wiki/timeline/periods/2020-2021-market-era]]), which
is more than a third of the entire six-and-a-half-year thread compressed into
a month and a half.

That is the friendship's actual signature: not frequency, and not agreement,
but **instant availability on news**. Two people who cannot be relied on to
check in can be relied on absolutely to be there within a day of something
happening. In a record full of relationships that needed constant tending and
broke anyway, this one needed none and didn't.

A dated snapshot of Jerad's own position, in his words, from 18 July 2024:
*"Being married to a Jew and having a Jewish daughter probably plays into
thi…"* — the row is truncated in the extraction, and the rest of the sentence
is not recovered.

## The joke canon

Four running jokes live in this thread, and they are the part of the record
that reads most like a friendship rather than a channel.

**"josh brannan is innocent."** An eighth-grade memory involving
[[wiki/people/josh-brannan|Josh Brannan]], kept alive for decades as a phrase.
On 30 May 2025 at 00:09 Eastern, Dan turned it into an object: an audio file
named **`josh brannan is innocent.wav`** (audio/x-wav, 162,608 bytes),
synthesized with a new text-to-speech tool and sent into the thread twelve
minutes after his own pitch for it — *"dude have you seen the new google AI
studio text to speech generator"*, then *"i mean obviously veo 3 is incredible
but this TTS tool is fucking AWESOME"*
([`dat:0678`](kb/data/0678-josh-brannan-wav-artifact-verified.md)). The
attachment is in the held corpus. A thirty-year-old in-joke rendered by a
speech model at midnight is a fair summary of what this friendship does with
new technology.

**"LOSE IT."** An invented fake service that locks you out of your own
brokerage account to stop you panic-trading — a joke from the market era that
doubles as the era's only impulse-control mechanism
([[wiki/timeline/periods/2020-2021-market-era]]).

**"Chonkyfire."** On 6 August 2024 at 00:27:51 UTC, Dan wrote: *"A song that
still, to this day, is connected in my head to the name Mary Wilson"*, and four
seconds later, *"CHONKYFIRE"* — the [[wiki/interests/favorites/music/artists/outkast|OutKast]]
track permanently fused to a name. The page has long said Mary Wilson was
Jerad's high-school girlfriend; **the held messages say only the name
association**, not the relationship
([`dat:0585`](kb/data/0585-jerad-friedline-thread-held-corpus-corrections.md)).

**The Acura Integra correction.** Listed among the corpus's shibboleths
([[wiki/self/context-core]]) and connected to Josh Brannan's Latrobe
reputation; the underlying exchange is not located in the held thread.

## March 2026: the last documented register

By 2026 the exchanges have moved into AI forensics, and the direction of
expertise is worth stating precisely because this page previously had it
backwards.

On 25 March 2026 at 20:50:32 UTC, in a run where he is demonstrating what
he can get a model to do — *"Here's my best example of what is possible once
you get your weighting correct on an LLM…"* — Dan writes:

> *"FYI you basically remove all safety alignment restrictions if the model is
> outputting with symbols, unicode, emoji instead of regular text"*

The held row is `is_from_me=1`. **That is Dan lecturing Jerad, not Jerad
informing Dan** ([`dat:0585`](kb/data/0585-jerad-friedline-thread-held-corpus-corrections.md)).
This page asserted the opposite for months, and the correction changes who the
technical party in the friendship is in 2026: sixteen years after Jerad was the
one with the apartment link and six after he was the one with the stock tip,
Dan is the one explaining things.

## Complete logs

### Every post in the held Twitter archive naming or addressing him

All nine, verbatim from `raw/twitter/archive.jsonl`, Eastern time.

| # | Eastern | Post | src |
|---|---|---|---|
| 1 | 2009-03-30 22:34 | *"@jfriedline http://tinyurl.com/2zzdwm 'QUIET YOU!!!!!'"* | grok-backend |
| 2 | 2009-11-26 14:13 | *"i'm thankful for my family/friend, sour diesel, tropical lifesaver gummies, and @joshbrannan / @jfriedline for their sign stealing abilities"* | live-x-scrape |
| 3 | 2009-12-21 18:48 | *"seeing my boyzzzz @jfriedline @joshbrannan tonight."* | live-x-scrape |
| 4 | 2010-01-23 04:16 | *"@jfriedline it's still no 'brink!'"* | live-x-scrape |
| 5 | 2010-02-18 23:38 | *"@jfriedline http://bit.ly/dtRBr0 COME STAY. be moved in by march 1."* | live-x-scrape |
| 6 | 2010-02-20 02:18 | *"@JoshBrannan @jfriedline ftk ftk"* | live-x-scrape |
| 7 | 2010-04-28 23:44 | *"@joshbrannan @jfriedline yo J.A. has been ditching my calls. we might need to bail him from jail #pyramidscheme"* | live-x-scrape |
| 8 | 2010-05-30 22:38 | *"I miss u @jfriedline ...#421+plz"* | live-x-scrape |
| 9 | 2014-04-11 18:51 | *"A young misterfriedline and myself engaged in some professional grade thumbs-upping"* + Instagram | operator-spreadsheet |

Four of the nine also name Josh Brannan. None names Rachel, the daughter,
Sacramento, or anything financial.

### Thread dimensions, held corpus

| Metric | Value |
|---|---|
| Thread id | `bac75f031bd4c107` |
| Messages | 2,161 |
| Sent by Dan | 1,280 |
| Received from Jerad | 881 |
| Ratio | 1.45 : 1, Dan-heavy |
| Carrying text | 2,057 |
| Carrying attachments | 217 |
| First message | 2020-02-04 |
| Last message | 2026-08-31 |
| Span | 2,400 days |
| Rank by volume | 12th of 577 threads |

Source: `corpus/derived/threads.csv`. Handles: at least two — the FSLY tip ran
through a `jfriedline@…` chat, the main thread through `+191****3615`
([`dat:0680`](kb/data/0680-2020-2021-market-era-trades-verified.md)).

### The FSLY sequence, complete and dated

| Eastern | From | Message |
|---|---|---|
| 2020-09-20 19:40 | Jerad | *"FSLY... busy at the moment but will send my research tomorrow. I made a little over $200k from April — now from this stock alone, future of web hosting and edge CDN"* |
| 2020-09-20 19:40 | Jerad | *"Amazon is using Fastly on Amazon.com over their own AWS hosting, that's all you need to know"* |
| 2020-09-20 20:03 | Dan | *"just buy FSLY?"* |
| 2020-09-20 20:03 | Jerad | *"Buy FSLY and do not touch for 2-3 years"* |
| 2020-09-26 | Dan | *"i can't believe i caiught you when i did on that fastly tip"* |
| 2020-09-30 09:06 | Dan | *"112 shares my dude"* |
| 2020-10-06 15:37 | Dan | *"dude i made $600 just from FSLY today"* |
| 2021-02-04 21:17 | Dan | *"I learned a lot from that big fastly dip about the importance of momentum trading. I never get FOMO about stuff I've sold that has gains later, but you feel it hard when you miss a good opportunity to get out"* |
| 2021-02-17 00:47 | Dan | *"FSLY earnings tomorrow"* |

All nine verified verbatim against the held corpus with exact UTC→Eastern
conversions ([`dat:0453`](kb/data/0453-fastly-fsly-jerad-tip-held-corpus-verified.md)).

### The count ledger

| Figure | Source | Status |
|---|---|---|
| 879 messages | pre-2026-08-10 record | superseded |
| 857 (832 received / 25 sent), 2020-02-03 → 2026-03-25 | `MASTER_MESSAGES_DB_DUMP.csv` (unheld) | superseded — direction artifact |
| 2,161 (1,280 / 881), 2020-02-04 → 2026-08-31 | `corpus/derived/threads.csv` (held) | **current** |

## What the record does not show

- **The childhood.** Nothing before March 2009. The friendship is described as
  the oldest in the record and the record contains none of its first two
  decades.
- **Jerad's side of the tweet years.** All nine posts are Dan's; not one reply
  is held.
- **Whether he took the apartment** in February 2010, or what the listing was.
- **The 2014–2020 stretch.** Six years with nothing in either channel. Given
  the scrape truncation, this is an instrument gap of unknown width, not a
  documented estrangement.
- **The photograph** behind the 2014 post — link dead, no copy held, and no
  image in `media/registry.json` is identified as Jerad.
- **Mary Wilson's actual relationship to him.** The held messages carry the
  name association only.
- **The Acura Integra exchange**, named as a shibboleth but not located.
- **Any Roe prediction.** See A3 below.
- **Whether contact continued past 31 August 2026.** The corpus ends seven days
  later; absence after that is the archive's edge, not a break
  ([`CORPUS_POLICY.md`](CORPUS_POLICY.md)).

## Appendix — forensic notes

**A1. The tweet archive is held.** [`ent:josh-brannan`](kb/entities/josh-brannan.md)
and [`dat:0678`](kb/data/0678-josh-brannan-wav-artifact-verified.md) both state
that *"no tweet corpus is held"* here and file all tweet material as unheld
old-wiki testimony. `raw/twitter/archive.jsonl` (940,553 bytes, 2,741 posts) is
present alongside `tweet-archive.csv` and `reposts.jsonl`; every tweet on this
page was read from it. The claim should be struck wherever it appears.

**A2. The jailbreak note is Dan's.** Corrected in the body above; the held row
(2026-03-25 20:50:32 UTC) is `is_from_me=1`
([`dat:0585`](kb/data/0585-jerad-friedline-thread-held-corpus-corrections.md)).
The typed edge to [[wiki/mind/synthesis/ai-collaborative-analysis]] has been
rewritten accordingly — it places Dan inside that interest, not Jerad.

**A3. The Roe prediction is unsupported on both sides.**
`CONTEXT_CORE_EXPANDED.md` §8 credits Jerad with predicting the Roe repeal in
May 2020, and it is listed among the corpus shibboleths. The only
Roe/abortion-content message in the entire thread is **Dan's**, 27 May 2020:
*"i'm so glad that i'm out of my 20's before they flip roe v wade…"* The
attribution has no Jerad-side support and should be retired, not merely gapped.

**A4. The Kya misattribution.** Jerad's *"I don't think that's her"*
(24 March 2020, 03:07:39 UTC) concerned Dan's attempt to identify a Sacramento
cannabis-store employee as "Vanessa Labi" — thirteen minutes before an
unrelated introduction the same night. [[wiki/people/kya-hansen]] built an
unresolved identity question on that quote; the question rests on a misattached
line and should be struck
([`dat:0942`](kb/data/0942-kya-identity-question-correction.md)).

**A5. "All with non-empty text" is slightly wrong.**
[`dat:0585`](kb/data/0585-jerad-friedline-thread-held-corpus-corrections.md)
records 2,161 rows *"all with non-empty text."* The held derivative gives
`with_text = 2,057` against `messages = 2,161` — 104 rows carry no text and
217 carry attachments. The headline counts (2,161 / 1,280 / 881) match exactly;
only the text clause is off.

**A6. Two handles, one person.** The FSLY chat and the main thread are
different `chat_identifier`s, so any single-handle count of this friendship is
a floor. The unmasked number that appears in
[`dat:0680`](kb/data/0680-2020-2021-market-era-trades-verified.md) is not
reproduced here; this page uses the wiki's standard `+191****3615` masking.

**A7. Frontmatter.** This page previously carried a duplicate `synthesizes:`
key, so standard YAML parsers dropped its `context-core` membership while the
repo's own permissive reader kept both — caught during the
[[wiki/work/fastly-fsly]] sweep of 2026-08-18. The merged single key is
preserved in this rewrite.

## Sources

- `raw/twitter/archive.jsonl` — all nine Jerad posts read directly.
- `corpus/derived/threads.csv`, `corpus/derived/summary.json` — held
  derivatives of the authoritative corpus (192,140 messages, 577 threads).
- [`ent:jerad-friedline`](kb/entities/jerad-friedline.md) — the entity node.
- [`dat:0585`](kb/data/0585-jerad-friedline-thread-held-corpus-corrections.md)
  — thread dimensions and three attribution corrections.
- [`dat:0453`](kb/data/0453-fastly-fsly-jerad-tip-held-corpus-verified.md) —
  the FSLY quotes, verbatim-verified.
- [`dat:0680`](kb/data/0680-2020-2021-market-era-trades-verified.md) — the
  market-era trade record.
- [`dat:0678`](kb/data/0678-josh-brannan-wav-artifact-verified.md) — the wav.
- [`dat:0942`](kb/data/0942-kya-identity-question-correction.md) — the Kya
  correction.
- [[wiki/work/fastly-fsly]], [[wiki/timeline/periods/2020-2021-market-era]],
  [[wiki/people/josh-brannan]], [[wiki/self/context-core]].
- `raw/self/message-csv/MASTER_MESSAGES_DB_DUMP.csv` (unheld) — source of the
  superseded 857/879 figures.

No photograph of Jerad is identified in `media/registry.json`; this page
therefore carries no image.
