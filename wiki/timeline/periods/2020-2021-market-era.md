---
domain: timeline
page_type: period
title: "2020–2021 Market Era"
status: stable
date_created: 2026-06-22
date_modified: 2026-09-20
sources:
  - raw/self/dox-md/operating_manual.md
  - raw/self/context-core/CONTEXT_CORE_EXPANDED.md
  - corpus/messages.csv
  - corpus/derived/threads.csv
  - kb/data/0453-fastly-fsly-jerad-tip-held-corpus-verified.md
  - kb/data/0680-2020-2021-market-era-trades-verified.md
  - kb/data/0585-jerad-friedline-thread-held-corpus-corrections.md
synthesizes:
  - wiki/self/context-core
related:
  - wiki/work/fastly-fsly
  - wiki/people/jerad-friedline
  - wiki/timeline/periods/covid-era-2020
  - wiki/timeline/periods/2021-2023-employment-block
  - wiki/mind/synthesis/estate-money-spine
  - wiki/work/au-zaatar
  - wiki/mind/synthesis/message-circadian-latency
  - wiki/self/location-history
connections:
  - page: wiki/mind/synthesis/estate-money-spine
    type: component-of
    claim: "The market era opens within weeks of the Sept 1 2020 estate check — the inheritance is the probable stake behind the ~$15k FSLY position and the $25k Robinhood peak, a temporal join flagged as inference on the spine page."
  - page: wiki/people/jerad-friedline
    type: instance-of
    claim: "Jerad is the unique contact node through which Dan's first retail market position entered his behavioral repertoire, establishing the asymmetric investment pattern that defines the 2020–21 market era."
  - page: wiki/timeline/periods/covid-era-2020
    type: caused-by
    claim: "Rescoped 2026-09-20: this page's lede cited that period's GPS mobility collapse as the condition the market era filled. That instrument was retired there on 2026-09-17 — the 2020–21 visit counts are a device-change blackout, not behaviour — so the causal claim now rests on the message-volume figure instead, or on nothing."
  - page: wiki/work/fastly-fsly
    type: contains
    claim: "The FSLY position is the era's opening trade and its cleanest verification: nine quotes, nine held-corpus hits, nine exact UTC→Eastern conversions. Everything unverified in this period is unverified in a way FSLY is not."
  - page: wiki/timeline/periods/2021-2023-employment-block
    type: precedes
    claim: "The era ends where that one begins: 'the money just ran out' by early 2021 and the Au Za'atar hire follows in March, with continuity of drug supply rather than rent named as the stated motive for seeking work."
tags: [career, financial-stress, nyc-era, forensic-analysis]
---

# 2020–2021 Market Era

For roughly five documented months — 20 September 2020 through 23 February
2021, inside the second NYC period and three weeks after a six-figure
inheritance landed — Dan ran his pattern-recognition engine on retail markets.
He entered on a friend's tip, rode the meme-stock eruption to a Robinhood
balance around $25,000, lost about a third of it in a single February session,
and came out with the episode's real yield: a stated thesis that cultural-trend
sensing had overtaken fundamentals in the retail-trading era.

The primary record assembled for it, across every verification pass the wiki
has run, is **thirteen rows of text message**, and they are all printed below.
Ten of the thirteen are verbatim-verified against the authoritative corpus —
192,140 messages, the complete Messages export — by the two evidence nodes that
did the checking
([`dat:0453`](../../../kb/data/0453-fastly-fsly-jerad-tip-held-corpus-verified.md),
[`dat:0680`](../../../kb/data/0680-2020-2021-market-era-trades-verified.md)).
The other three are carried from [[wiki/work/fastly-fsly]]'s own corpus table
and have not been separately re-checked; they are marked in the log. **No
exhaustive corpus sweep for market-era content has ever been run**, so thirteen
is a floor and not a census — what it bounds is how much has actually been
verified, which is the number that matters here.

Everything else the wiki says about this period comes from
`operating_manual.md` and `CONTEXT_CORE_EXPANDED.md`, AI-secondary documents
under `raw/self/dox-md/` and `raw/self/context-core/` that **are not held in
this repository**. That distinction runs through every section below and is the
reason this page was rewritten.

> **CORRECTED [2026-09-20] — the February loss figure does not survive the**
> **held corpus, and it has propagated to three other pages.** This page's
> timeline row has read *"Bloodbath day: −$6k on CCIV calls"* since creation, and
> the same figure is now carried by [[wiki/mind/synthesis/estate-money-spine]]'s
> capital chain (`2021-02 · CCIV bloodbath day · −$6k`) and by
> [[wiki/timeline/periods/covid-era-2020]]'s tail (*"February 2021 — The
> bloodbath day: −$6k on CCIV calls"*). **No held message contains a $6,000
> figure.** What the corpus holds is Dan's own line on 2021-02-23 at 14:24 UTC
> (09:24 EST) — *"I bought fucking calls on CCIV yesterday"* — and, two minutes
> later, *"But my $25k just turned into 17k"*
> ([`dat:0680`](../../../kb/data/0680-2020-2021-market-era-trades-verified.md)).
> That is an **$8,000 portfolio drawdown**, not a $6,000 one, and it is a
> statement about the account rather than about the CCIV position specifically:
> the messages do not separate the calls' loss from anything else moving that
> week. The corrected claim is therefore narrower as well as larger — *the
> account went from $25k to $17k around 23 February 2021, with CCIV calls bought
> the day before named as the proximate cause* — and the old figure should be
> struck wherever it appears rather than adjusted. Where "−$6k" came from is
> not recoverable from anything held; its stated source, the master message
> dump, is not in this tree.

> **CORRECTED [2026-09-20] — this page's lede was still resting on an**
> **instrument that was retired three days earlier.** The previous text read that
> the era ran in *"the same window as the pandemic's 'micro-radius siege' and GPS
> mobility collapse documented in [[wiki/timeline/periods/covid-era-2020]] — the
> market became a new outlet for an engine that had lost its normal
> environmental inputs."* On **2026-09-17** that page retired the GPS half
> outright: [[wiki/self/location-history]] attributes the 2020–21 collapse in
> place-visit counts to a **device-change blackout running 2020-09-24 →
> 2021-07-20** and states in its own text that it is *"not behavior."* A count
> that stops recording in September cannot measure a year. The siege is not
> disproven — it is Dan's own testimony and stands as testimony — but it is
> **unsupported by that instrument**, and this page was reasoning from the
> instrument. The causal claim is rebuilt below on the one figure that survives.
> Note the timing: the market era opens on 20 September 2020 and the GPS
> blackout begins on **24 September 2020**, four days later. The period this
> page covers is almost exactly the period the location record goes dark.

## The complete trading log

Every message in the authoritative corpus that bears on the market era, in
order, with the corpus's stored UTC and the Eastern local time the wiki quotes
in. The corpus stores `date_sent` in UTC and the wiki's page times are local —
four hours apart in summer, five in winter — so both are printed
([`CORPUS_POLICY.md`](../../../CORPUS_POLICY.md);
[`dat:1802`](../../../kb/data/1802-held-corpus-timestamps-are-utc-not-local.md)).
Direction is from the `is_from_me` field. The ten unmarked rows were located by
exact substring search in `corpus/messages.csv`
([`dat:0453`](../../../kb/data/0453-fastly-fsly-jerad-tip-held-corpus-verified.md);
[`dat:0680`](../../../kb/data/0680-2020-2021-market-era-trades-verified.md));
rows 6b and 8b are marked because they come from [[wiki/work/fastly-fsly]]'s
table rather than from either verification pass.

| # | UTC | Eastern | From | Message |
| ---: | :--- | :--- | :--- | :--- |
| 1 | 2020-09-20 23:40 | 2020-09-20 19:40 EDT | Jerad | *"FSLY... busy at the moment but will send my research tomorrow. I made a little over $200k from April — now from this stock alone, future of web hosting and edge CDN"* |
| 2 | 2020-09-20 23:40 | 2020-09-20 19:40 EDT | Jerad | *"Amazon is using Fastly on Amazon.com over their own AWS hosting, that's all you need to know"* |
| 3 | 2020-09-21 00:03 | 2020-09-20 20:03 EDT | **Dan** | *"just buy FSLY?"* |
| 4 | 2020-09-21 00:03 | 2020-09-20 20:03 EDT | Jerad | *"Buy FSLY and do not touch for 2-3 years"* |
| 5 | 2020-09-26 | 2020-09-26 EDT | **Dan** | *"i can't believe i caiught you when i did on that fastly tip"* |
| 6 | 2020-09-30 13:06 | 2020-09-30 09:06 EDT | **Dan** | *"112 shares my dude"* |
| 6b | *(same date)* | 2020-09-30 EDT | **Dan** | *"fastly killing it"* — carried from [[wiki/work/fastly-fsly]], not separately re-verified |
| 7 | 2020-10-06 19:37 | 2020-10-06 15:37 EDT | **Dan** | *"dude i made $600 just from FSLY today"* |
| 8 | 2020-10-08 01:10 | 2020-10-07 21:10 EDT | **Dan** | *"FSLC"* — carried from [[wiki/work/fastly-fsly]], not separately re-verified |
| 8b | *(same date)* | 2020-10-07 EDT | Jerad | *"Didn't see it breaking all time high this quick"* — carried from [[wiki/work/fastly-fsly]], not separately re-verified |
| 9 | 2021-02-05 01:59 | 2021-02-04 20:59 EST | **Dan** | *"So I was really choomed this morning and moved a bunch of stock that I probably shouldn't have just because I was too high"* |
| 10 | 2021-02-05 02:17 | 2021-02-04 21:17 EST | **Dan** | *"I learned a lot from that big fastly dip about the importance of momentum trading. I never get FOMO about stuff I've sold that has gains later, but you feel it hard when you miss a good opportunity to get out"* |
| 11 | 2021-02-17 05:47 | 2021-02-17 00:47 EST | **Dan** | *"FSLY earnings tomorrow"* |
| 12 | 2021-02-23 14:24 | 2021-02-23 09:24 EST | **Dan** | *"I bought fucking calls on CCIV yesterday"* |
| 13 | 2021-02-23 ~14:26 | 2021-02-23 ~09:26 EST | **Dan** | *"But my $25k just turned into 17k"* |

Four structural facts fall straight out of the log and none of them was on this
page before.

**The era is one channel.** All thirteen rows are in the
[[wiki/people/jerad-friedline|Jerad]] thread — in fact across at least two of
Jerad's handles, since the FSLY tip ran through a `jfriedline@…` chat and the
later material through `+191****3615`
([`dat:0680`](../../../kb/data/0680-2020-2021-market-era-trades-verified.md)).
Of 577 threads in the held corpus, that one ranks twelfth by volume. Dan's first
and only documented period of retail trading is transacted, narrated and
concluded inside a single friendship, and the corpus records no other
counterparty for it at all.

**The tip-to-position interval is ten days and the decision took
twenty-three minutes.** Jerad's pitch lands at 19:40 EDT; Dan's entire
interrogation of it is four words at 20:03 — *"just buy FSLY?"* — and Jerad's
answer arrives in the same minute. By 30 September the position exists. The
Jerad page names this correctly as the only instance in the corpus of Dan
taking a portfolio-scale action on someone else's say-so without visible
argument, and it is worth stating the contrast the wiki makes elsewhere: this
is a person whose [[wiki/mind/concepts/forensic-method|documented method]] is to
audit everything, and here the audit is a question mark.

**The two February 4th messages are eighteen minutes apart, and no page had
noticed.** Message 9 — the "choomed" admission, trading while too high — and
message 10 — the momentum lesson, the era's stated intellectual yield — are the
same conversation on the same evening: 20:59 and 21:17 EST. The wiki has filed
them separately for months, the confession on this page's January row and the
lesson on [[wiki/work/fastly-fsly]]. Read together they are one exchange in
which Dan reports an impulsive session and then, a quarter of an hour later,
extracts a principle from an earlier loss. That sequence — do it badly, then
theorise it well — is the era in miniature and it is on the record to the
minute.

**The $25k figure is attested once, in February, and not in January.** This
page's timeline has dated the Robinhood peak to January 2021 since creation. The
only held attestation of the number anywhere is message 13, on 23 February, and
it is phrased as a current balance being destroyed rather than as a past high.
The evidence node puts it plainly: *"the Robinhood ~$25k peak and the CCIV day
land together"*
([`dat:0680`](../../../kb/data/0680-2020-2021-market-era-trades-verified.md)).
The January dating is not supported by anything in the corpus, and the corrected
reading is less dramatic and better evidenced: the account was still at $25,000
on 22 February 2021, five weeks after the meme eruption, and lost 32% of itself
the following morning.

## What is claimed and not held

The rest of the era's detail comes from documents this repository does not
have. Listing it explicitly is the only honest way to publish it, because a
partial export never announces what it left out
([`CORPUS_POLICY.md`](../../../CORPUS_POLICY.md)).

| Claim | Stated source | Held-corpus status |
| :--- | :--- | :--- |
| ~$15,000 of portfolio into FSLY | `MASTER_MESSAGES_DB_DUMP.csv` (unheld) | **Not found.** Plausible by arithmetic — 112 shares at late-September 2020 prices is the right order of magnitude — but the figure itself is not in a message |
| ~$4,000 quick FSLY profit | operating manual / master dump (unheld) | **Not found verbatim** |
| 100 AMC shares | period page, from unheld sources | **Not found** |
| DOGE bought on a tip | period page, from unheld sources | **Not found** |
| A profitable GME put executed while "choomed" | period page, from unheld sources | **Mechanism confirmed, instrument not.** Message 9 confirms trading while high; *"no held message names the GME put specifically"* ([`dat:0680`](../../../kb/data/0680-2020-2021-market-era-trades-verified.md)) |
| Outrage at the Robinhood trading restrictions | period page, from unheld sources | **Not found** |
| SeekingAlpha Pro / StockTwits toolchain | operating manual (unheld) | **Not found** |
| Debates going all-in on Bitcoin | operating manual (unheld) | **Not found** |
| "Full portfolio shared with Jerad" | period page | **Not found** as a distinct event; the thread does carry both the $600 day and the $8,000 hole, which is the behaviour the claim describes |
| Final P&L / exit accounting | — | **Does not exist in any source.** See Limits |

None of those is thereby false. Several are the kind of detail a message thread
would not necessarily carry — a share count in a brokerage app leaves no text
trace. But the asymmetry is worth stating: **the two figures the wiki repeats
most often about this era, the $15k stake and the $4k profit, are the two it
cannot verify**, while the figures it can verify — 112 shares, $600, $25k, $17k
— are less frequently quoted.

## The trade the era is named for

The FSLY position is held at [[wiki/work/fastly-fsly]] at trade level and is not
re-derived here. What belongs on the period page is the shape.

The entry was a tip, not research: [[wiki/people/jerad-friedline|Jerad
Friedline]], the oldest friendship in the record, reporting *"a little over
$200k from April"* on his own account and then telling his childhood friend what
to do. The advice was **wrong in the specific way that made it profitable**.
*Buy and do not touch for 2-3 years* would have meant holding a position opened
near the top of a vertical run straight through the late-2020 guidance collapse.
Dan did not hold. He took the ascent, skimmed a $600 day on 6 October, and was
out before the earnings blow-up — which is luck on timing at least as much as a
good read, and [[wiki/work/fastly-fsly]] says so.

Then he passed it on. The evangelism is the part the corpus corroborates in
shape if not in detail: Jerad → Dan → another friend who, per the period's own
account, *"started calling in daily gains."* The relational-broadcast instinct
documented across the wiki runs on a stock tip exactly as it runs on a band or
a political argument.

The era's intellectual product is a single line from `operating_manual.md`,
which this page has always quoted and which remains the clearest statement of
what Dan took from it:

> *"The skill here is the ability to sense cultural trends. The technical
> trading info and fundamentals reports aren't nearly as important now that
> retail traders have complete access."*

That is testimony, from an unheld AI-secondary document, and it is flagged as
such. But it is corroborated in behaviour by message 10, which is held: *sell
strength, don't marry the thesis*, learned from a dip, stated to the person who
had told him to marry the thesis. Markets became a fourth domain for the engine
that runs on politics, music and relationships — meme propagation read as
signal, institutions read with standing suspicion, the whole thing consumed as
participatory spectacle.

The era also carries the wiki's clearest instance of the intellect/impulsivity
paradox at full amplitude: portfolio-scale bets on tips and vibes, narrated with
complete self-awareness the entire time. The **"LOSE IT" principle** — an
invented fake service that would lock you out of your own brokerage account to
stop you panic-trading — dates to this period and is listed among the corpus's
shibboleths on [[wiki/self/context-core]]. It is a joke, and it is also the
era's only impulse-control mechanism, and those two facts are the same fact. The
underlying exchange that coined it is not located in the held thread.

## The stake: where the money came from

The timing is the finding and it is not quite a proof.

On **21 August 2020** a court signed the order distributing **$144,069.31** of
the [[wiki/people/fran-coldren|Fran]] estate to Dan. On **1 September 2020** a
final cheque of **$134,069.31** was released and deposited through
[[wiki/people/suzanne-frank|Suz]]. On **20 September 2020**, nineteen days
later, the FSLY tip arrived and Dan put roughly $15,000 — about 11% of the
deposit — into a single position
([[wiki/mind/synthesis/estate-money-spine]]).

The spine page carries this as an explicit inference rather than a documented
transfer: *"the inheritance is the probable stake behind the ~$15k FSLY position
and the $25k Robinhood peak, a temporal join the corpus supports but never
states."* No message connects the deposit to the brokerage account. Nineteen
days and the right order of magnitude are what there is.

What the join does establish, taken with the rest of the chain, is the era's
place in the biography's central financial shape: **money arrives in lumps and
exits through standing drains.** $134,069.31 lands on 1 September 2020; by early
2021 — roughly two quarters — the Au Za'atar narration opens with *"the money
just ran out."* The market account peaked near $25,000, so **the market cannot
have absorbed most of it.** At its high the entire trading portfolio was about
19% of the deposit, and the $8,000 February drawdown is about 6% of it. The
market era is the most *legible* thing that happened to that money and it is
nowhere near the largest. The rest exited through Manhattan rent, the daily
[[wiki/mind/synthesis/supply-network|supply line]], and the outflow to
[[wiki/people/annie-ulmer|Annie]] — and the decomposition is not separable from
any source held here.

One arithmetic snag inherited from a neighbouring page belongs on this one,
because it is the market era's figures being used to explain something they
cannot explain. [[wiki/mind/synthesis/four-financial-inversions]] glosses the
$144,069.31 → $134,069.31 step as *"the $144,069.31 order, minus the market
account's ~$25k peak."* The difference between the two figures is exactly
**$10,000** — the size of an estate advance, not of a $25,000 brokerage balance.
Both figures are independently attested; the explanation joining them is not,
and [[wiki/timeline/periods/covid-era-2020]] records it as an open discrepancy
rather than repeating it. Recorded here too, since the wrong half of the
explanation is this page's number.

## The condition, rebuilt

The original causal claim was that the pandemic removed the engine's normal
environmental inputs and the market became the substitute target. The instrument
that supported it is gone (see the correction above). There is a second
instrument and it points the same way without depending on the first.

The whole-corpus message count for 2020 is **6,311**, labelled "COVID collapse,"
against **20,153 in 2019** and **40,514 in 2018**
([[wiki/mind/synthesis/message-circadian-latency]]). That is a **69%
year-over-year drop** in communication volume, derived from a different export,
with no device gap in it. It does not measure mobility — it measures contact,
and contact fell off a cliff.

So the rebuilt claim is narrower than the retired one and still supports the
reading: in the year Dan's outbound contact collapsed by more than two-thirds, a
new high-frequency information target appeared and absorbed the engine. It
remains an inference. Anyone extending it should build on the 6,311 figure and
say so, and should not reach for the GPS numbers, which describe a phone rather
than a person for the entire back half of this period.

## What the era became

It ends where [[wiki/timeline/periods/2021-2023-employment-block]] begins, and
the handover is unusually clean. By early 2021 *"the money just ran out."* Dan
sought work for a stated motive that was **not rent**: he wanted to keep being
able to call his dealers daily. With no food-service experience he charmed the
owner at the interview, was hired on the spot, and started the next day as a
busser at [[wiki/work/au-zaatar|Au Za'atar]] in March 2021 — the beginning of
what became the longest continuous employment of his adult life, roughly 690
shifts across 41 months.

The last market message is 23 February 2021. The Au Za'atar hire is the
following month. Whether any position survived into the low-income stretch is
**not recorded anywhere**, and the absence of an exit is the era's defining
documentary property: there is a beginning to the minute and no ending at all.

One later echo is usually attached to this period and should be attached to it
more carefully. The July 2024 message burst with Jerad around the Trump shooting
— *"roughly 800 messages in six weeks"* — is offered on [[wiki/people/jerad-friedline]]
as the same info-addiction pattern migrated back to politics, and that page
cites **this page** for the figure, while this page cites nothing for it.
**The citation is circular.** What is independently held is the thread's
dimensions: 2,161 messages across 2,400 days, 1,280 from Dan and 881 from Jerad
(`corpus/derived/threads.csv`;
[`dat:0585`](../../../kb/data/0585-jerad-friedline-thread-held-corpus-corrections.md)).
Eight hundred messages in six weeks would be **37% of a six-and-a-half-year
friendship compressed into a month and a half**, which is a remarkable claim
that deserves a direct corpus count rather than a loop between two pages. It has
never had one.

## Complete premise-check log

This page's own history, because a period page with four re-check blocks and one
retired premise is telling a story about the wiki as well as about 2020. Every
dated marker on this page, in order, with what it actually established.

| Date | Trigger | Outcome |
| :--- | :--- | :--- |
| 2026-06-22 | Page created | The era enters the wiki with the −$6k CCIV row, the January $25k peak, and the GPS-siege lede already formed |
| 2026-08-16 | [[wiki/self/context-core]] staleness audit corrected seven claims | **Premise moved, conclusion unaffected** — checked by grep against every changed figure; this page reasons from none of them |
| 2026-08-21 | [[wiki/self/context-core]] moved by one added typed edge | **Premise moved, conclusion unaffected; verified rather than assumed** — the diff was read, not assumed |
| 2026-08-26 | `bin/wiki-climb check` flagged staleness against [[wiki/self/context-core]] | **No substantive move** — the only change was one `connections:` entry cross-referencing the new neurodivergence page |
| 2026-09-09 | [`dat:0453`](../../../kb/data/0453-fastly-fsly-jerad-tip-held-corpus-verified.md) and [`dat:0680`](../../../kb/data/0680-2020-2021-market-era-trades-verified.md) verify the trade record against the authoritative corpus | Seven FSLY quotes and the CCIV pair land verbatim. `dat:0453` notes explicitly that *"the 2020–2021 market-era period page itself is not in this worker's page list; its GME/AMC/CCIV material is untouched by this ingest"* |
| 2026-09-17 | [[wiki/timeline/periods/covid-era-2020]] retires the GPS siege quantification | **Not propagated.** This page kept reasoning from it for three days |
| **2026-09-20** | This rewrite | The −$6k figure struck; the January peak re-dated to February; the GPS premise replaced with the message-volume figure; the complete thirteen-message log printed; the unheld-claims table added |

The shape of that log is the point. **Four of the five checks before today were
run against [[wiki/self/context-core]], and all four came back "nothing moved."** Meanwhile
the two premises that actually moved — the corpus verification of the trade
quotes on 2026-09-09 and the retirement of the GPS instrument on 2026-09-17 —
reached this page through neither. The staleness tooling was watching the page
this one barely depends on and not watching the two it depends on most. That is
a tooling finding, not a 2020 finding, and it is recorded here because this page
is where it is visible.

## Limits of this record

- **There is no exit accounting and there never was.** The corpus shows the
  $25k balance and the $17k balance ninety seconds apart and nothing after.
  Whether any position was closed, held, or survived into the 2021–23 stretch
  is undocumented in every source, held and unheld alike.
- **Thirteen rows is the whole verified primary record, and it is a floor.**
  Five months, one thread, thirteen rows, ten of them verbatim-checked. No
  exhaustive sweep of the corpus for market-era content has been run, so more
  may exist. Every narrative claim beyond them rests on `operating_manual.md`
  and `CONTEXT_CORE_EXPANDED.md`, neither of which is in this tree, and both of
  which are AI-secondary — synthesis about the period rather than artefacts from
  it.
- **No brokerage record of any kind is held.** No statement, screenshot,
  confirmation or tax document. Share counts, position sizes and balances are
  known only where Dan happened to type them to a friend.
- **The market-era boundary dates are the message record's, not the
  behaviour's.** Trading may well have started before 20 September 2020 and
  continued after 23 February 2021; those are simply the first and last dates
  the corpus can see, and they should be read as floors rather than as a period
  boundary. This page's frontmatter carries no `date_range_start` or
  `date_range_end` — other period pages do, and adding them here would fix a
  range the evidence does not support.
- **The deposit-to-stake link is temporal, not documentary.** Nineteen days and
  a plausible magnitude. If a bank or brokerage record ever surfaces, this is
  the first claim to re-file.
- **The 2021 corpus is thin in general.** The iMessage record holds only 1,465
  rows for 2021 and 2022 has none at all
  ([`CORPUS_POLICY.md`](../../../CORPUS_POLICY.md)), so the silence after
  February 2021 is partly the archive's and not necessarily the trading's. This
  is the one place where the absence-of-evidence rule needs care inside the
  authoritative corpus itself.

## Sources

- `corpus/messages.csv` — the authoritative export, 192,140 messages,
  2011-03-19 → 2026-09-07. All thirteen logged messages located by exact
  substring search.
- `corpus/derived/threads.csv` — the Jerad thread's dimensions (2,161 / 1,280 /
  881, rank 12 of 577).
- [`dat:0453`](../../../kb/data/0453-fastly-fsly-jerad-tip-held-corpus-verified.md)
  — seven FSLY quotes, verbatim-verified with exact UTC→Eastern conversions.
- [`dat:0680`](../../../kb/data/0680-2020-2021-market-era-trades-verified.md) —
  the trade-level verification, including the CCIV pair and the four claims not
  found.
- [`dat:0585`](../../../kb/data/0585-jerad-friedline-thread-held-corpus-corrections.md)
  — thread dimensions and the direction-artifact correction.
- `raw/self/dox-md/operating_manual.md`, `raw/self/context-core/CONTEXT_CORE_EXPANDED.md`
  — **not held**; source of the cultural-trend-sensing quote, the position
  sizes, the toolchain and the Bitcoin debates.
- [[wiki/work/fastly-fsly]], [[wiki/people/jerad-friedline]],
  [[wiki/timeline/periods/covid-era-2020]],
  [[wiki/mind/synthesis/estate-money-spine]],
  [[wiki/timeline/periods/2021-2023-employment-block]],
  [[wiki/mind/synthesis/message-circadian-latency]].

No screenshot, chart or brokerage image relating to this period is identified in
`media/registry.json`; this page therefore carries no image.
