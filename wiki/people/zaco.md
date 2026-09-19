---
domain: people
page_type: entity
title: "Zaco"
aliases: ["zaco"]
status: closed
knowledge: mixed
date_created: 2026-08-20
date_modified: 2026-09-18
date_range_start: 2018-03-12
date_range_end: 2018-11-26
tags: [addiction-recovery, uniontown-era, digital-footprint]
sources:
  - raw/self/dox-scan/all_imessages_complete_dump.txt
  - raw/self/message-csv/MASTER_MESSAGES_DB_DUMP.csv
  - raw/imessage/messages-part1-2011-2019.csv
  - raw/imessage/messages-part2-2019-2026.csv
  - raw/imessage/manifest.json
  - corpus/manifest.json
  - kb/data/1357-zaco-thread-recount.md
  - kb/data/1254-supply-network-thread-counts.md
  - kb/data/1214-zach-hendricks-unresolved-relationship.md
  - kb/data/0679-2018-deep-cycle-volume-and-correction.md
related:
  - wiki/people/zach-hendricks
  - wiki/people/johnny-dealer
  - wiki/people/teddy
  - wiki/mind/synthesis/supply-network
  - wiki/mind/synthesis/supply-graph-vs-chain
  - wiki/timeline/periods/2018-deep-cycle
  - wiki/places/155-virginia-ave
  - wiki/health/cocaine
  - wiki/meta/complete-log-doctrine
infobox:
  name: "Zaco"
  sex: unknown
  location: uniontown
  relationship_to_dan: dealer
  handles: ["+1724***3381"]
  first_contact: 2018-03-12
  known_for: "A 106-message 2018 Uniontown Suboxone-strip secondary; the thread whose headline direction-ratio the held corpus overturned"
connections:
  - page: wiki/mind/synthesis/supply-network
    type: component-of
    claim: "Zaco is the network's 2018 Suboxone-strip secondary. The 'only inbound-marketing node' finding built on a 58:7 ratio does not survive the held corpus, which holds 58 inbound against 48 outbound in the same chat — he advertises unprompted and Dan also initiates repeatedly, which makes him a two-way secondary rather than a marketing channel."
  - page: wiki/timeline/periods/2018-deep-cycle
    type: component-of
    claim: "The thread runs March–June 2018 inside the deep cycle and shares its economics — $50 for three strips, $75 for three, $70 for three subs — small cash amounts in the months of daily Cash App limits and declined payments."
  - page: wiki/people/johnny-dealer
    type: parallels
    claim: "Concurrent 2018 Uniontown nodes at opposite scales: Johnny holds 7,090 held messages to Zaco's 106, and their active months coincide rather than alternate — which answers, negatively, the standing question of whether Zaco was a Johnny substitute."
  - page: wiki/people/zach-hendricks
    type: contradicts
    claim: "Two pages, one handle. Zach Hendricks and Zaco both claim +1724***3381 and both report 58 messages; the held corpus holds one 106-message thread there, so the wiki is carrying one contact as two entities with a shared, half-counted total."
  - page: wiki/places/155-virginia-ave
    type: co-occurs
    claim: "The thread's one recorded handoff address is Dan's own residence, sent on 2018-06-28 nine months before the eviction notice that ended the tenancy — which places a 2018 supply meet at the same house as the 2015 Dream Queen grow and the earliest Uniontown supply node's standing handoff point."
---

# Zaco

Zaco is a 2018 Uniontown-area supplier known to the corpus by one self-given
name in one SMS — *"Yo it's zaco"*, 2018-03-12 at 17:44 EDT — and by the SMS
handle `+1724***3381`. The thread is **106 messages long, ran for eight and a
half months, and contains an entire small supply relationship from
introduction to failure**: two products, a dozen meets, two price schedules, a
complaint about market quality, and a last exchange that fails on transport
rather than on money or supply.

It is a minor node by volume — 1.5% of the volume of the same year's primary —
and it has been carrying a headline finding it cannot support. The prior
version of this page, and the two synthesis pages that cite it, described Zaco
as *"the supply network's only push-marketing node"* on the strength of a
**58:7** inbound-to-outbound ratio. The held corpus holds **58:48**. The
correction is set out in full below; what survives it is more interesting than
what it replaces.

## The correction, stated once and then worked around

[`dat:1357`](../../kb/data/1357-zaco-thread-recount.md) ran the recount on
2026-09-09 and found the inbound half exact and the outbound half wrong. This
pass reproduces it independently against the two-part held corpus and confirms
it to the row:

| Figure | Prior page | Held corpus | Status |
|---|---|---|---|
| Messages in thread | 65 | **106** | Corrected |
| Received (Zaco → Dan) | 58 | **58** | Exact |
| Sent (Dan → Zaco) | 7 | **48** | Corrected |
| Inbound ratio | 89% | **55%** | Corrected |
| Date range | 2018-03-12 → 2018-11-26 | 2018-03-12 → 2018-11-26 | Exact |
| Service | not stated | **SMS, 106 of 106** | Added |
| Attachments | not stated | **0** | Added |
| Distinct active days (local) | not stated | **35** | Added |

The 7 is almost certainly a real count of a real extract — the page's stated
source is `all_imessages_complete_dump.txt`, a merged export not held here —
and the failure is the one `CORPUS_POLICY.md` names: a partial export never
announces what it left out. The old figure produced a clean, quotable,
structurally interesting finding (*the one dealer who does the selling*) and
the finding was an artifact of a missing 41 messages. It propagated to
[[wiki/mind/synthesis/supply-network]] and
[[wiki/mind/synthesis/supply-graph-vs-chain]], which both still carry it.

A second, separate error is recorded at
[`dat:1254`](../../kb/data/1254-supply-network-thread-counts.md): the
supply-network page at one point dated Zaco's 58 inbound advertisements to
**2020-03-21 → 2022-06-04**. No such window exists. The thread is entirely
inside 2018 and the corpus holds no Zaco traffic in 2020, 2021 or 2022 at all.

**What survives the correction.** Zaco does advertise unprompted, and the
measurement that shows it is initiation, not ratio. The thread has **35 active
local days**. Zaco opens **21** of them and Dan opens **14**; of Zaco's 21
openers, **14 announce stock without being asked** — a product name, a count,
sometimes a price, sent into silence (*"Got a strip"*, *"Strips on sale"*,
*"3 strip for 50"*). That is a real behaviour and it is not common in this
corpus's supply threads. What does not survive is the *inversion*: Dan is not a
passive recipient of a marketing feed. He opens the thread's trade himself ten
days in, opens 40% of its days, and drives the two largest transactions in it.
The relationship is an ordinary two-way secondary supply line in which the
supplier happens also to push stock. Calling it a marketing channel was the
ratio talking.

## What was traded

Three product names appear. Two are identifiable and one is not.

**Suboxone strips ("strips", "subs").** The thread's spine and the only
product with a stated price schedule. This is the buprenorphine Dan has been
prescribed daily since January 2011 —
[[wiki/mind/synthesis/supply-network]] treats the regimen as structural rather
than recreational — bought here off-script, in lots of one to five, at three
dated prices:

| Date (local) | Quoted by | Price |
|---|---|---|
| 2018-05-02 02:21 EDT | Zaco | *"3 strip for 50"* |
| 2018-05-19 17:03 EDT | Zaco | *"3 strips for 50 I got sale real quick I'm in town"* |
| 2018-06-28 17:31 EDT | Zaco | *"Well for 3 I can do 75.."* |
| 2018-06-29 19:50 EDT | Zaco | *"I'm in town I got 3 subs for 70 lmk if u want em"* |

Three strips move from **$50 to $75 in eight weeks**, then settle at $70 the
next day. Set against [[wiki/people/johnny-dealer|Johnny's]] documented
schedule the same year — $15 for an 8mg strip, $20 for 12mg — Zaco's $16.67
per strip in May is at or below the primary's rate, and his $25 in late June
is above it. The single most concrete thing the thread contains is a small
local price series for a single product across one spring, and it goes up.

**Cocaine ("soft", "white", "girl", "pow").** Present from late April and
never priced per unit, only per intended spend: *"I'll try some of the soft if
it's easy for you to come across"* (April 27), *"If u can get white I'm
looking for like 200"* (June 23), *"100?"* (November 26). Dan initiates every
single cocaine approach in the thread. Zaco never advertises it — on both
occasions he has to go and find it (*"Ok I'm calling around now"*, *"he's got
good soft and hard i get his hard all the time"*), which places him a step
away from that product rather than holding it.

**"Tex."** Advertised eight times across both halves — *"Got tex"*, *"Tex and
I'm in town hmu"*, *"Yea I got Tex to"*, *"Got tex n coming town"* — and Dan
asks for it once (*"what about tex"*, March 26) and offers to buy it once
(*"I'll get 4 or 5 of sub or Tex"*, June 28). It is never explained, never
priced, and appears nowhere else in the corpus. The June 28 line is the
strongest constraint the record puts on it: Dan treats "sub or Tex" as
interchangeable units at the same count, which suggests a pill or strip-format
product rather than a powder. That is an inference and is flagged as one.

## Logistics: the shape of a Uniontown meet

The thread is unusually rich in geography for its length, because almost every
transaction has to be arranged from scratch. Zaco has a vehicle and a coverage
problem — he is repeatedly *"in town"* or *"not in town"* and the whole
negotiation turns on it. The named locations, in order of appearance:

- **"CV downtown" / "CVS" / "giant eagle"** (May 5) — Zaco offering a choice of
  two chain-store parking lots.
- **"Walnut hil"** and **"beer warehouse"** (May 10) — a moving rendezvous, with
  the vehicle identified by description rather than plate: *"Ok grn truck nd
  trailer."*
- **"Top driveway"** (May 12) — Dan's own instruction, two words, which means
  the location is already known to both.
- **"my grandmas house"** (May 5) — [[wiki/people/fran-coldren|Fran's]], where
  Dan is living and caregiving in the spring of 2018; the phone dies there and
  the meet is rescheduled around it.
- **"by Washington"** (June 28) — Zaco's stated position an hour and a half out,
  which is a 30-mile radius.
- **[[wiki/places/155-virginia-ave|155 Virginia Ave]]** (June 28, 17:27 EDT) —
  Dan's own address, sent in plain text, the only handoff in the thread that
  happens at his door.

That last one is worth a beat. It is the same house as the 2015 *Dream Queen*
cannabis grow photographed across fifteen dated images
(`media/registry.json`, `upload-030` → `upload-043`), the same house
[[wiki/people/zachariah-harshman|Zach Harshman]] used as a standing handoff
point from January 2015, and the house Dan was **evicted from three months
before this message** — the notice terminating the residency was served
2018-03-29, mid-vigil, seventeen days after the Zaco thread opened
([[wiki/places/155-virginia-ave]]). He is still giving it as his address in
late June. That is a fact about the eviction's enforcement as much as about
the supply meet, and it belongs to the address's page more than to this one.

## The June 23–24 episode: a buyer advertising for a supplier

The densest sixteen hours in the thread invert its stated thesis completely,
and they are the most substantive thing in it. On **June 23 at 17:35 EDT** Dan
opens with a size the thread has not seen: *"If u can get white I'm looking for
like 200."* Zaco starts working the phone. At **00:13** he reports back —
*"I have everything figured out n ready call me"* — and Dan has already gone
elsewhere:

> **Dan, 00:21:** *"Sorry buddy I linked up pretty quick after I messaged. Can
> you set it up for tomorrow? Anytime after 9am I just need to hit the bank"*
> **Zaco, 00:22:** *"Forsure? An how much"*
> **Dan, 00:25:** *"If it's even modestly good I'll get 200. But I just need to
> make sure it's not as bad as the rest of what is around right now. Any ideas?
> I'd be willing to test buy like 50"*
> **Dan, 00:26:** *"Not trying to get over on anyone...I've just lost like $600
> on garbage in the past week so I'm looking for a new 'friend'. I'm good
> stable business if anyone has a link"*
> **Zaco, 00:28:** *"I can pick you up and we can go to ATM , and you can test
> tonight he's got good soft and hard i get his hard all the time .."*
> **Dan, 01:55:** *"I Doubt you're still out and about but i have the cash if
> you can drop it off. If not until tomorrow that's cool too"*

Four things are on the table in seven messages, and none of them is push
marketing.

**Dan is the one advertising.** *"I'm good stable business if anyone has a
link"* is a buyer's sales pitch, broadcast through a minor node in the hope it
reaches someone upstream. The phrase *"a new 'friend'"* — scare quotes his —
is the market vocabulary of the whole [[wiki/mind/synthesis/supply-network]]
page said out loud in one word.

**A quality-control vacuum is named and quantified.** *"I've just lost like
$600 on garbage in the past week"* is a specific, dated loss from bad product,
and it converges with a second held line from the same year:
*"It's not like I haven't spent $750 in garbage in the past 48 hours"*
(2018-09-18, catalogued at
[`dat:0679`](../../kb/data/0679-2018-deep-cycle-volume-and-correction.md)).
Two independent 2018 messages, three months apart, use the same noun for bad
cocaine and put four-figure monthly losses on it. That is the
[[wiki/timeline/periods/2018-deep-cycle|deep cycle's]] economics from the
consumer end, and the supply-graph page's "quality-control vacuum at the
informal market's bottom tier" gets its clearest single number here.

**Dan proposes a test buy.** *"I'd be willing to test buy like 50"* — a
50-dollar sample against a 200-dollar order — is the only instance in this
thread of purchasing discipline, and it arrives immediately after the $600
loss. Behaviour changed after a specific, priced failure.

**Zaco offers a car.** *"I can pick you up and we can go to ATM"* is the
thread's only offer of transport, and it is declined by silence. Five months
later the same thread ends because nobody offers one.

## The close of the first run, and the five-month gap

The June 28–29 sequence is the thread's only fully documented completed trade,
and it ends on an arithmetic error:

> **Dan, 01:27:** *"Any subs tomorrow? Sorry could answer earlier, was at work"*
> **Dan, 01:27:** *"I'll get 4 or 5 of sub or Tex"*
> **Zaco, 01:28:** *"Yea I got you"*
> **Dan, 01:29:** *"I can do it tonight if u feel like coming in but otherwise
> I'll leave the money with my girlfriend when I go to work"*
> **Zaco, 01:34:** *"I'll txt when on my way tommorrow 4 u said"*
> **Dan, 08:00:** *"4 indeed"*
> … meet arranged for 4–4:30pm, address sent 17:27 …
> **Dan, 17:29:** *"I got 80 here"*
> **Dan, 17:30:** *"My bad dude I wasn't thinking and just assumed they were 20"*
> **Dan, 17:30:** *"I got a lil pow if u want one"*
> **Zaco, 17:31:** *"Well for 3 I can do 75.."*

Dan turns up with $80 expecting four strips at $20 and gets three at $75. The
offer of *"a lil pow"* as a make-weight is the only moment in the thread where
Dan is on the supply side of the transaction. The line *"I'll leave the money
with my girlfriend when I go to work"* is the only appearance of Annie in the
thread, and it is as a payment relay — consistent with the facilitation role
[[wiki/people/johnny-dealer]] documents for her in the same period, at a much
smaller scale.

The next day Zaco quotes 3 subs for 70 into silence. **The thread then stops
for exactly five months.**

## November 26, 2018: the transaction that failed on transport

After 150 days of nothing, Dan reopens it. This is the thread's longest
unbroken outbound run and the only time he opens with no product name until
the second message:

> **Dan, 18:22 EST:** *"Hey dude"*
> **Dan, 18:22:** *"Hit me up if you're around. Needed some girl"*
> **Zaco, 18:26:** *"How much"*
> **Dan, 18:27:** *"100?"*
> **Dan, 18:27:** *"If it's good I'll buy a lot more"*
> **Dan, 18:27:** *"I've got the paper on me and I'm at my house"*
> **Zaco, 18:36:** *"U would have to come out me"*
> **Dan, 18:36:** *"Ah shit I'm stuck at home"*
> **Dan, 18:36:** *"No ride right now"*

Fourteen minutes, nine messages, and the thread ends there and never resumes.

The failure mode is worth isolating because it is rare in this corpus. The
money is present and stated (*"I've got the paper on me"*). The supply is
present and willing. The buyer has pre-committed to a repeat order. The single
blocker is that Dan cannot get across town. Every other documented supply
failure in [[wiki/mind/synthesis/supply-network]] is a node going quiet, a
phone dying, a debt souring, or a vacation; this one is a man with cash in his
hand and no car, nine miles from a willing seller. It is a small, dated,
concrete instance of the immobility that the 2018 material documents in
aggregate, and it is the last thing either party says.

Whether the purchase happened by some other route on some other night is not
recorded. Nothing later in the corpus refers to Zaco in any channel.

### The night is an anchor in an open contradiction

That last point has a use beyond this page.
[[wiki/timeline/periods/2018-deep-cycle]] carries an unresolved disagreement
with [[wiki/mind/synthesis/spatial-behavior]], stated in its own frontmatter:
the GPS analysis reads 2018's spatial-collapse-and-migration signature as a
*chosen* psychological strategy — systemic integrity via rebuild — while the
period's own financial record offers an equally consistent alternative,
chronic constraint rather than chosen minimalism. Neither page cites a dated
instance on the constraint side.

This is one, and it is unusually clean: a stated intention to travel, cash in
hand, a willing counterparty, and a radius set by not having a car — all of it
inside fourteen minutes, with message ids. One night does not resolve the
contradiction and this page does not claim it does; the reading it supports is
local to the night. But the contradiction has been carried without a
held-corpus anchor on either side, and this is one the argument can be run
against.

## Complete log — all 106 messages

The whole thread, `chat_identifier = +1724***3381`, in chronological order,
from the held corpus. Times converted from the corpus's UTC `date_sent` to US
Eastern local (EDT March 11 – November 4, EST thereafter); see *Evidence
status*. Nothing is elided, including the two messages noted below the table.

| Local time | From | Message |
|---|---|---|
| 2018-03-12 17:44 EDT | Zaco | Yo it's zaco |
| 2018-03-13 17:30 EDT | Zaco | Yo |
| 2018-03-13 17:38 EDT | Zaco | Call me |
| 2018-03-18 15:33 EDT | Zaco | Yo |
| 2018-03-18 15:33 EDT | Zaco | U need them |
| 2018-03-22 16:07 EDT | Dan | any strips |
| 2018-03-22 16:07 EDT | Dan | i got like 25 |
| 2018-03-22 21:11 EDT | Zaco | I can do u a strip for that in morning |
| 2018-03-22 21:54 EDT | Dan | it's cool dude my buddy sold me a big white one |
| 2018-03-22 21:55 EDT | Dan | i'll still need more soon tho |
| 2018-03-22 21:55 EDT | Zaco | I won't have the strips for long so let me know |
| 2018-03-25 19:42 EDT | Dan | you still got strips left |
| 2018-03-26 11:10 EDT | Dan | yo |
| 2018-03-26 11:11 EDT | Zaco | I dont |
| 2018-03-26 15:59 EDT | Dan | what about tex |
| 2018-03-26 18:15 EDT | Zaco | I can get strips |
| 2018-04-03 19:39 EDT | Zaco | Tex and I'm in town hmu |
| 2018-04-14 19:15 EDT | Dan | any strips |
| 2018-04-16 13:55 EDT | Zaco | I got strips |
| 2018-04-16 15:11 EDT | Dan | at work. hit u in a lil |
| 2018-04-17 14:30 EDT | Dan | i'll grab a strip if u come into town |
| 2018-04-17 14:34 EDT | Zaco | Pullin up in min |
| 2018-04-18 13:39 EDT | Zaco | Strips |
| 2018-04-19 21:52 EDT | Zaco | Yo |
| 2018-04-19 21:54 EDT | Dan | yo u in town? think my boy wants a strip..: i can cover him on it |
| 2018-04-19 21:56 EDT | Zaco | Not in town but can u meet or no |
| 2018-04-19 21:56 EDT | Zaco | How much u got |
| 2018-04-19 21:57 EDT | Dan | it's alright dude, if you weren't close by i wasn't super worried about it. i do want to grab a strip tomorrow tho for myself after work |
| 2018-04-19 21:59 EDT | Zaco | Ok |
| 2018-04-21 15:11 EDT | Zaco | What time u need strips |
| 2018-04-22 15:45 EDT | Dan | u got those? |
| 2018-04-24 09:43 EDT | Zaco | Got a few more strips need any |
| 2018-04-24 15:39 EDT | Zaco | In town an gota strip |
| 2018-04-26 15:14 EDT | Zaco | Got a strip |
| 2018-04-27 16:36 EDT | Dan | you in town today |
| 2018-04-27 18:09 EDT | Zaco | Ya in hour |
| 2018-04-27 18:59 EDT | Zaco | Yo |
| 2018-04-27 18:59 EDT | Zaco | How many |
| 2018-04-27 19:30 EDT | Dan | 2 |
| 2018-04-27 21:17 EDT | Zaco | Ok call u soon |
| 2018-04-27 22:02 EDT | Dan | yo i'll try some of the soft if it's easy for you to come across |
| 2018-04-27 22:02 EDT | Dan | i don't want to hassle u but i'm always looking for that lol |
| 2018-04-28 20:52 EDT | Zaco | Got 4 strips |
| 2018-05-01 22:21 EDT | Zaco | Got tex |
| 2018-05-02 02:21 EDT | Zaco | 3 strip for 50 |
| 2018-05-04 22:44 EDT | Zaco | Let me know if u want these strips I got Tex to |
| 2018-05-05 15:41 EDT | Zaco | Yo where can u meet |
| 2018-05-05 15:45 EDT | Dan | sorry my phone died, i'm at my grandmas house |
| 2018-05-05 15:45 EDT | Zaco | Can u meet |
| 2018-05-05 15:53 EDT | Dan | i'm waiting for someone to stop here, but after that i can |
| 2018-05-05 15:53 EDT | Dan | shouldn't be very long but he's black sooooooo who knows |
| 2018-05-05 15:59 EDT | Zaco | Ok |
| 2018-05-05 15:59 EDT | Zaco | How's like CV downtown |
| 2018-05-05 16:16 EDT | Zaco | Lmk when your ready / I can meet at CVS or u can come to giant eagle |
| 2018-05-10 13:27 EDT | Dan | Any subs? |
| 2018-05-10 15:18 EDT | Zaco | Getting of Walnut hil |
| 2018-05-10 15:18 EDT | Dan | I'm by beer warehouse right now |
| 2018-05-10 15:19 EDT | Zaco | Ok grn truck nd trailer |
| 2018-05-10 15:22 EDT | Dan | You here? |
| 2018-05-12 13:40 EDT | Zaco | Omw |
| 2018-05-12 14:06 EDT | Dan | Top driveway |
| 2018-05-15 13:43 EDT | Dan | Subs? |
| 2018-05-19 17:03 EDT | Zaco | 3 strips for 50 I got sale real quick I'm in town |
| 2018-06-15 19:18 EDT | Zaco | Strips on sale |
| 2018-06-17 08:52 EDT | Dan | Can u still get soft |
| 2018-06-17 13:18 EDT | Zaco | Yea I got Tex to |
| 2018-06-18 20:00 EDT | Zaco | Got tex n coming town |
| 2018-06-23 17:35 EDT | Dan | If u can get white I'm looking for like 200 |
| 2018-06-23 18:26 EDT | Zaco | Ok I'm calling around now |
| 2018-06-23 19:39 EDT | Zaco | U still need |
| 2018-06-24 00:13 EDT | Zaco | I have everything figured out n ready call me |
| 2018-06-24 00:21 EDT | Dan | Sorry buddy I linked up pretty quick after I messaged. Can you set it up for tomorrow? Anytime after 9am I just need to hit the bank |
| 2018-06-24 00:22 EDT | Zaco | Ok |
| 2018-06-24 00:22 EDT | Zaco | Forsure? An how much |
| 2018-06-24 00:25 EDT | Dan | If it's even modestly good I'll get 200. But I just need to make sure it's not as bad as the rest of what is around right now. Any ideas? I'd be willing to test buy like 50 |
| 2018-06-24 00:26 EDT | Dan | Not trying to get over on anyone...I've just lost like $600 on garbage in the past week so I'm looking for a new 'friend'. I'm good stable business if anyone has a link |
| 2018-06-24 00:28 EDT | Zaco | I can pick you up and we can go to ATM , and you can test tonight he's got good soft and hard i get his hard all the time .. |
| 2018-06-24 01:55 EDT | Dan | I Doubt you're still out and about but i have the cash if you can drop it off. If not until tomorrow that's cool too |
| 2018-06-24 16:10 EDT | Zaco | Yo |
| 2018-06-26 18:28 EDT | Dan | Yo |
| 2018-06-26 21:04 EDT | Zaco | Yo what up |
| 2018-06-28 01:27 EDT | Dan | Any subs tomorrow? Sorry could answer earlier,  was at work |
| 2018-06-28 01:27 EDT | Dan | I'll get 4 or 5 of sub or Tex |
| 2018-06-28 01:28 EDT | Zaco | Yea I got you |
| 2018-06-28 01:29 EDT | Dan | I can do it tonight if u feel like coming in but otherwise I'll leave the money with my girlfriend when I go to work |
| 2018-06-28 01:30 EDT | Zaco | I'll have tommorow after 2 |
| 2018-06-28 01:34 EDT | Zaco | I'll txt when on my way tommorrow 4 u said |
| 2018-06-28 08:00 EDT | Dan | 4 indeed |
| 2018-06-28 14:45 EDT | Zaco | Yea I'm by Washington I'll be there around 4-430 Is that good |
| 2018-06-28 14:45 EDT | Dan | Yeah |
| 2018-06-28 17:10 EDT | Zaco | I'll be there in half hour |
| 2018-06-28 17:27 EDT | Dan | 155 Virginia Ave, uniontown, pa 15401 |
| 2018-06-28 17:29 EDT | Dan | I got 80 here |
| 2018-06-28 17:30 EDT | Dan | My bad dude I wasn't thinking and just assumed they were 20 |
| 2018-06-28 17:30 EDT | Dan | I got a lil pow if u want one |
| 2018-06-28 17:31 EDT | Zaco | Well for 3 I can do 75.. |
| 2018-06-29 19:50 EDT | Zaco | I'm in town I got 3 subs for 70 lmk if u want em |
| 2018-11-26 18:22 EST | Dan | Hey dude |
| 2018-11-26 18:22 EST | Dan | Hit me up if you're around. Needed some girl |
| 2018-11-26 18:26 EST | Zaco | How much |
| 2018-11-26 18:27 EST | Dan | 100? |
| 2018-11-26 18:27 EST | Dan | If it's good I'll buy a lot more |
| 2018-11-26 18:27 EST | Dan | I've got the paper on me and I'm at my house |
| 2018-11-26 18:36 EST | Zaco | U would have to come out me |
| 2018-11-26 18:36 EST | Dan | Ah shit I'm stuck at home |
| 2018-11-26 18:36 EST | Dan | No ride right now |

**Two rows are printed rather than summarised, per the complete-log rule.**
The 2018-06-28 17:27 row is Dan's own residential address, which is already a
titled page in this wiki ([[wiki/places/155-virginia-ave]]) and is his
address, not a third party's; counterparty handles elsewhere in the wiki
remain redacted. The 2018-05-05 15:53 row is a racial remark of Dan's about a
third party waiting to arrive. It is in the record, it is his, and it is
reproduced without commentary on the same basis as the offensive material
preserved on [[wiki/people/jay-lauer]] — a log that edits itself is not a log.

## Corpus dimensions and the monthly shape

| Metric | Value |
|---|---|
| Messages (held) | **106** |
| Received (Zaco) | 58 |
| Sent (Dan) | 48 |
| Date range | 2018-03-12 17:44 EDT → 2018-11-26 18:36 EST |
| Active run | 2018-03-12 → 2018-06-29 (109 calendar days, 34 with traffic) |
| Silent gap | 2018-06-30 → 2018-11-25 (149 days) |
| Coda | 2018-11-26, one 14-minute exchange |
| Distinct active days (local) | 35 |
| Service | SMS on all 106 rows (no iMessage) |
| Attachments | 0 |
| Days opened by Zaco / by Dan | **21 / 14** |
| Zaco openers that announce stock unprompted | **14 of 21** |
| Handle | `+1724***3381` |

| Month | Zaco → Dan | Dan → Zaco | Total |
|---|---|---|---|
| 2018-03 | 9 | 7 | 16 |
| 2018-04 | 17 | 10 | 27 |
| 2018-05 | 12 | 8 | 20 |
| 2018-06 | 18 | 16 | 34 |
| 2018-07 → 2018-10 | 0 | 0 | 0 |
| 2018-11 | 2 | 7 | 9 |

The monthly split is the clearest statement of what this relationship was. It
opens slowly, peaks in June at the moment Dan tries to scale a cocaine purchase
through it, and dies the day after a price disagreement over three strips.
Dan's outbound share across the four active months runs 44%, 37%, 40%, 47% —
not a clean trend, but ending higher than it started — and then jumps to **78%**
in the single November exchange, which is the signature of a dormant channel
being reopened under need.

## Answering the page's own open question: was he a Johnny substitute?

The prior version listed this as a gap: *"Both are active in Uniontown in
2018; nothing links them, and the question is whether the push-marketing
posture reflects a lower position in the same chain."* The held corpus answers
the substitution half of it, negatively, by simple overlap.

| 2018 month | [[wiki/people/johnny-dealer\|Johnny]] `+1724***3678` | Zaco |
|---|---|---|
| February | 230 | — |
| March | 422 | 16 |
| April | 457 | 27 |
| May | 453 | 20 |
| June | 707 | 34 |
| July | 131 | 0 |
| **August** | **0** | 0 |
| September | 1,067 | 0 |
| October | 934 | 0 |
| November | 688 | 9 |
| December | 698 | 0 |

Johnny's thread holds **7,090 messages** in the held corpus (3,633 sent, 3,457
received, 2018-02-19 → 2019-05-29) — a figure that itself sits above both the
3,462 the Johnny page carries from the master CSV and the 5,089 that page
flags as an alternate count, and which should be carried forward there.

Zaco is active in exactly the four months Johnny is busiest, and silent
through July–October, which includes **the one month Johnny goes to zero**. A
substitute node fills gaps. This one does the opposite: it runs concurrently
with the primary at 3% of its volume and is absent during the primary's only
outage. The redundancy the supply-graph page describes for 2018 is real, but
Zaco is not the mechanism of it — he is a parallel small-lot strip source used
alongside a primary, not a fallback held for when the primary fails.

What the corpus does **not** answer is the chain half of the question. Nothing
links the two handles; no message from either names the other; Zaco's
*"he's got good soft and hard i get his hard all the time"* (June 24) is the
only evidence that he buys upstream from anybody, and the upstream party is
unnamed.

### Where he sits on the reliability inversion: nowhere, and that is the finding

[[wiki/mind/synthesis/supply-network]]'s central claim is a ranking — the more
purely transactional the relationship, the more reliable the supply. Menore
answered 455 of 458 requests over six and a half years; Johnny was reliable in
season and produced the record's first single-node supply panics when he went
on vacation; Teddy was willing and chronically fragile; Tom, the friend, is the
least reliable node in the corpus.

Zaco cannot be placed on that scale, and the reason is worth stating rather
than guessing past. **The ranking is built from documented failures** — panics,
dead phones, soured debts, owe-and-silence cycles. This thread contains none.
There is no frustration message from Dan anywhere in it, no sourcing panic
attached to the handle, no recorded instance of Zaco failing to deliver.

That is not evidence of reliability. It is what 106 messages across two short
runs look like when nothing depends on them, and the monthly table above is why:
3% of the primary's volume, absent during the primary's only outage. A node
carrying no load cannot be observed failing under load. The unplaceability is
itself the datum — in 2018 a supplier could be used twice and dropped without
either party noticing, and by 2025 the whole load sat on one friendship-embedded
node with no fallback, where a single missed handoff propagated into a lost job.
The distance between those two states is measured in threads exactly this size.

## Identity: two pages, one handle

The wiki carries this contact twice. [[wiki/people/zach-hendricks]] records
"Zach Hendricks (self-styled 'Zaco')" on the same handle `+1724***3381`, the
same date range 2018-03-12 → 2018-11-26, and the same 58 messages marked "all
received (an export artifact)"; it adds a second handle `+1724***2745` from
Google Contacts and a note that the number appears twice in the contact file,
once as "Zach" and once as "Zack." This page records "Zaco," sex unknown,
identity unresolved.

The held corpus does not resolve which name is right, but it does establish
that **there is one thread, not two**, and that both pages are carrying the
same undercount. It also disposes of the alternate handle: `+1724***2745`
holds **exactly one message** in 192,140 rows — Dan, 2018-02-20 16:09 UTC,
*"hey dude"* — twenty days before the Zaco thread opens, with no reply. That
is consistent with a contact card holding two numbers of which only one was
live, and it is not evidence of a second relationship.

[`dat:1214`](../../kb/data/1214-zach-hendricks-unresolved-relationship.md)
filed the Hendricks page at low confidence because its handles were redacted
and it supplied no quotable text, so no held search was possible. This page
supplies both. **The two pages should be merged**, under whichever name the
contacts export actually carries, with 106 as the count. That is a structural
recommendation, not a claim, and it is left for an operator.

The "Zaco" name itself remains a single self-identification in a single SMS. A
corpus-wide search for the string returns **one row** — the introduction —
consistent with
[`dat:1254`](../../kb/data/1254-supply-network-thread-counts.md), which found
the same thing and concluded from it that no Zaco thread existed. It exists; it
is simply named once.

## Evidence status

**Handles are masked** on this page in the `+1724***3381` form used by
[[wiki/people/jay-lauer]] and [[wiki/people/ellen-ulmer]], and by the kb's
counterparty-redaction rule; the prior version printed them in full. The full
handle is recoverable from the corpus by the anchor text *"Yo it's zaco"*,
which is how [`dat:1357`](../../kb/data/1357-zaco-thread-recount.md) located
the thread, so nothing on this page becomes unreproducible.

**Held and verified.** All 106 log rows, the monthly splits, the direction
counts, the service and attachment fields, the Johnny comparison, and the
single-row results for `zaco` and for `+1724***2745` are read directly from
`raw/imessage/messages-part1-2011-2019.csv` and `…part2-2019-2026.csv`, which
together hold 192,140 rows and 45 columns — matching `corpus/manifest.json`
exactly on both figures. This page's numbers are therefore reproducible from
material in this repository without the gitignored `corpus/messages.csv`.

**Timezone.** `date_sent` is stored in UTC. The conversion is validated on the
same anchor the [[wiki/people/betherin-mechling]] page uses — a message the
wiki dates 19:09 EDT sits at 23:09 in the corpus — and independently at
[`dat:0673`](../../kb/data/0673-jay-lauer-direction-and-count-corrections.md).
Note that `CORPUS_POLICY.md` §Timestamps states the reverse; the contradiction
is flagged there and not resolved here. Three log rows change calendar date
under conversion (the 2018-04-20 UTC rows are 2018-04-19 local), which is why
the prior page's "April 20" and "May 2" readings differ from this one.

**Unheld.** The prior page's 65-message thread and 7 sent, and the "58 of 65"
figure repeated on [[wiki/mind/synthesis/supply-network]] and
[[wiki/mind/synthesis/supply-graph-vs-chain]], come from
`all_imessages_complete_dump.txt`, which is not in this repository. Under
`CORPUS_POLICY.md` those are shelved material: usable to establish what was
previously believed and why it was wrong, and not usable as evidence about
2018. This page uses them for the former only.

**Three other pages still carry the retired figures and are not edited here.**
[[wiki/mind/synthesis/supply-network]] and
[[wiki/mind/synthesis/supply-graph-vs-chain]] repeat "58 of his thread's 65
messages" in their `connections` blocks and bodies.
[[wiki/timeline/periods/2018-deep-cycle]] is the live one: rewritten
**2026-09-17**, after [`dat:1357`](../../kb/data/1357-zaco-thread-recount.md)
filed the recount on 2026-09-09, it states in its own body that *"across 65
messages he sends 58 and Dan sends 7"* and that *"Zaco is the only node that
does the selling, and Dan mostly does not answer"* — so the retired ratio was
re-published eight days after it was retired, which is the propagation this
page exists to stop. It also prints the handle unmasked. Those edits belong to
those pages' own passes, not to this one.

**Corrections this pass makes.**

1. **58:7 → 58:48**, and 65 → 106 messages. The "only push-marketing node"
   headline is withdrawn as stated and replaced with the narrower, surviving
   claim: 23 unsolicited inventory ads in a two-way thread.
2. **"Almost all of his are unsolicited"** — withdrawn. Zaco opens 21 of the
   thread's 35 active days and 14 of those openers announce stock; the other
   37 of his 58 messages are replies inside exchanges Dan or he had already
   started.
3. **"Dan mostly does not reply"** — withdrawn. Dan sends 45% of the thread.
4. **"The only sustained outbound run in it"** (of November 26) — withdrawn.
   The June 23–24 run is longer and more consequential.
5. **The 2018-04-20 and 2018-05-02 dates** are corrected to 04-19 and 05-01
   local where the UTC rows cross midnight.
6. **The date the price schedule changed** is now given as a series rather than
   three loose quotes: $50 (May 2) → $50 (May 19) → $75 (June 28) → $70
   (June 29), all for three strips.
7. **`known_for`** in the infobox is rewritten, since the prior text asserted
   the retracted ratio.

## Coverage limits

- **Who Zaco is remains unknown.** One self-identification, one handle, no
  surname in any held message, no Facebook or Instagram cross-reference, no
  photograph. The wiki's own alternative identification (Zach Hendricks) rests
  on a Google Contacts export that is not held here.
- **"Tex" is not identified.** Eight advertisements, one request, one offer to
  buy, zero explanations. The June 28 "4 or 5 of sub or Tex" is the only
  structural constraint and it is an inference.
- **No transaction in this thread is confirmed completed.** Several are
  clearly arranged — April 17 (*"Pullin up in min"*), May 10 (*"grn truck nd
  trailer"*), May 12 (*"Top driveway"*), June 28 (the $80/$75 exchange at the
  door) — but the corpus holds no receipt, no confirmation, and no later
  reference. What is documented is the arranging.
- **Whether the November 26 purchase happened elsewhere** is unrecorded.
- **The upstream chain is invisible.** *"he's got good soft and hard"* is the
  only glimpse of a level above Zaco and it names nobody.
- **The $600 loss is unverified beyond Dan's own statement**, as is the $750
  figure it parallels — `dat:0679` found no December 2018 $750 message in the
  held corpus at all.
- **No photograph or media derivative depicts Zaco, any meet, or any product.**
  `media/registry.json` holds nothing for this thread; the fifteen 2015
  *Dream Queen* images share only the address, three years earlier and a
  different substance, so they are cited above rather than embedded. This page
  carries no image.
- **3,086 corpus rows (1.6%) cannot be attributed to a thread.** If any belong
  here the sent-side count is a floor, not an exact figure — though since all
  106 rows are attributed and Dan's outbound side is the half in question, the
  48 is more likely to rise than fall.
- **Deleted messages are absent by construction.** The corpus is complete with
  respect to `chat.db`, which is not the same as complete with respect to
  history.

## Sources

- `raw/imessage/messages-part1-2011-2019.csv`, `raw/imessage/messages-part2-2019-2026.csv`
  — the authoritative Messages export, 192,140 rows, verified against
  `corpus/manifest.json` (rows, column set) before use.
- `corpus/manifest.json`, `corpus/derived/summary.json` — integrity record and
  corpus-level figures (2018: 40,500 held messages, the corpus's volume peak).
- [`dat:1357`](../../kb/data/1357-zaco-thread-recount.md) — the recount this
  page reproduces and extends.
- [`dat:1254`](../../kb/data/1254-supply-network-thread-counts.md) — the
  supply-network count contradictions, including the phantom 2020–22 window.
- [`dat:1214`](../../kb/data/1214-zach-hendricks-unresolved-relationship.md) —
  the Hendricks page, filed unverifiable for want of a quotable string.
- [`dat:0679`](../../kb/data/0679-2018-deep-cycle-volume-and-correction.md) —
  2018 volume confirmation and the "garbage" spending parallel.
- `CORPUS_POLICY.md` — the two-tier rule that governs the 65-vs-106 dispute.

## Related

[[wiki/people/index]] · [[wiki/people/zach-hendricks]] · [[wiki/people/johnny-dealer]] ·
[[wiki/people/teddy]] · [[wiki/mind/synthesis/supply-network]] ·
[[wiki/mind/synthesis/supply-graph-vs-chain]] ·
[[wiki/timeline/periods/2018-deep-cycle]] · [[wiki/places/155-virginia-ave]] ·
[[wiki/health/cocaine]]
