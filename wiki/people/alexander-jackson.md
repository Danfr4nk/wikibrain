---
domain: people
page_type: entity
status: active
date_created: 2026-06-22
date_modified: 2026-09-25
sources: ["raw/self/dox-md/operating_manual.md — ⚠ Source reference unresolved — original target no longer exists in current corpus.", "raw/self/context-core/CONTEXT_CORE_EXPANDED.md — ⚠ Source reference unresolved — original target no longer exists in current corpus.", "raw/self/message-csv/imessage_7243228715_both_2025-06-03_now.csv — ⚠ Source reference unresolved — original target no longer exists in current corpus.", "raw/self/dox-md/BFS_BOOTLOADER_v2.md — ⚠ Source reference unresolved — original target no longer exists in current corpus.", "raw/imessage/messages-part1-2011-2019.csv", "raw/imessage/messages-part2-2019-2026.csv", "raw/imessage/messages-master.csv", "raw/morgantown-call-independent-stt-transcript-2026-09-09/morgantown-call-independent-stt-transcript-2026-09-09.txt", "raw/drive-sweep/20260911/misc/wiki-export-self-timeline-people-mind-work-interests-health-places.md", "kb/data/0243-alexander-jackson-owner-claim.md", "kb/data/0074-morgantown-housing-state-august-2026.md", "kb/events/2026-morgantown-st-move.md", "kb/entities/morgantown-st-463.md"]
synthesizes:
  - wiki/legal/463-morgantown
connections:
  - page: wiki/legal/463-morgantown
    type: component-of
    claim: "Jackson is the asserted owner, and the structural reason every risk at this address lands somewhere other than on him: the lien attaches to his title while the tenancy, agency and caretaking arrangements that would allocate liability were never put on paper. Re-graded 2026-09-25: the ownership itself is asserted by one old-wiki provenance chain and is absent from every held primary source."
related: ["wiki/legal/463-morgantown", "wiki/people/suzanne-frank", "wiki/people/arnu", "wiki/people/john-carney", "wiki/people/felix", "wiki/people/jerel-coles", "wiki/places/337-saratoga-drive", "wiki/places/the-unpapered-address", "wiki/timeline/events/august-2026-morgantown-call", "wiki/self/context-core", "wiki/mind/synthesis/vertical-authority-skepticism", "wiki/mind/synthesis/the-deferred-audit", "wiki/timeline/periods/2025-collapse", "wiki/self/facebook", "wiki/work/bfs-foods"]
tags: [housing, legal, forensic-analysis]
infobox:
  name: "Alexander Jackson"
  relationship_to_dan: unknown
  location: uniontown
  known_for: "Asserted owner of 463 Morgantown St, Uniontown PA (old-wiki claim, no primary record). The house became Dan and Suz's address after the June 2026 sale of 337 Saratoga."
---

# Jackson Alexander (Alexander Jackson)

The record has no human story for Alexander Jackson. No message from him, to
him or about him has been found in 198,354 held message rows. There is no
photograph, email, deed, lease or voice. The Morgantown St call transcript
never says his name. His name reaches the wiki by one route: the old wiki's
context-core and operating-manual layer, which is AI-secondary synthesis of
documents this repository does not hold. From there it was copied into
[[wiki/legal/463-morgantown]], this page and the kb
([dat:0243](../../kb/data/0243-alexander-jackson-owner-claim.md),
confidence: low). The old wiki could not settle even the order of his
names. It filed this page under the slug `jackson-alexander`, titled it
"Jackson Alexander (Alexander Jackson)", and called him "Alexander Jackson"
everywhere else
(`raw/drive-sweep/20260911/misc/wiki-export-self-timeline-people-mind-work-interests-health-places.md`,
lines 158 and 807).

What the record does have is a story about the house he is said to own. In
early 2026, 463 Morgantown St in Uniontown was a renovation job. Dan's mother
[[wiki/people/suzanne-frank|Suz]] drove there with cigarettes, a worker named
Felix painted, and a man named John, who was meant to be working, slept on
site. Through the spring,
Dan went there to shower and to meet people while the family house at 337
Saratoga Drive was shown to buyers. After 337 sold in June 2026, 463 became
the address. By August it was where Dan lived, where Suz told him *"It's time
for you to go"*, where he recorded the call that ended the Annie
relationship's second phase, and the address a stranger typed back at him as
a threat. The owner never appears in any of it. This page separates what the
record shows from what the wiki assumed about the owner.

## What the wiki claimed, and where it came from

The claim, as the old page stated it: Alexander Jackson is "Owner / lessor"
of 463 Morgantown St. Dan and Suz moved in "~early 2026 (post 337
contingencies)" with "no signed lease/POA at entry". Suz's role at the
property is "agent/tenant/caretaker". The property is "separate from BFS corp
(building ownership distinct)".

The page cited four sources: `operating_manual.md`,
`CONTEXT_CORE_EXPANDED.md`, `BFS_BOOTLOADER_v2.md` and a Suz message export.
None is held. Their frontmatter entries resolve to nothing
([dat:0243](../../kb/data/0243-alexander-jackson-owner-claim.md)). The old
page was honest about the gap: *"Limited direct corpus on Jackson himself (no
messages/comm details surfaced in reviewed dox); expand via owner comms or
lease docs."*

Four of its premise re-checks (2026-07-26, 08-02, 08-18, 08-20) each concluded
that "no claim on this page is affected". That was accurate. None of them
tested whether the owner existed as described. They tested whether
neighbouring pages had moved. The history is logged in full below.

## What the held record shows about the owner: nothing

For this rewrite the complete held message record was searched on
2026-09-25. That covers `messages-part1-2011-2019.csv`,
`messages-part2-2019-2026.csv` and the living `messages-master.csv`. The
pattern was *jackson | alexander | landlord | lease | rent | power of
attorney | POA*, restricted to 2025–2026.

- **"Jackson":** nine rows. Michael Jackson (six rows: five on 2025-09-16,
  one on 2025-09-29), *"Jesse Jackson died"* (Suz, 2026-02-17), Jackson Hinkle
  (2026-01-03) and Ronnie Jackson in a parody lyric (2025-09-23). None of them
  is a person connected to a house.
- **"Alexander":** Alexander the Great (2025-08-31) and Alexander McQueen
  (2025-09-19, two rows).
- **"landlord" / "lease" / "rent":** every hit is about someone else's
  housing, the NYC apartment at 307 E 76th, or politics. None concerns 463.
- **"POA":** one row, 2026-04-05, about Annie's hospice-bound relative. It is
  not about 463.

Outside the message record:
- The independent STT transcript of the August 16 call has zero hits for
  Jackson, lease or Morgantown
  ([dat:0243](../../kb/data/0243-alexander-jackson-owner-claim.md)).
- A search of `raw/` for "Alexander Jackson" / "Jackson Alexander" finds
  three files, all downstream of the wiki itself: the old-wiki export copy
  and two Sammy chat logs that list "Alexander Jackson" among wiki entities
  with *"commitments naming them: none"*
  (`raw/sammy/20260912-0340/chats.json`, `raw/sammy/20260915-1140/chats.json`).

So the name exists only inside the wiki's own layers. That does not make it
false. An owner who deals only with Suz, by phone, would leave exactly this
footprint in Dan's texts. It does mean the ownership is a claim with one
provenance chain. A county property search against the parcel would settle
it. None has been run, and this page does not run one.

## The house, as the record actually shows it

The old page's timeline started with "Move-in to 463 Morgantown by Dan + Suz
(no signed lease or confirmed POA at entry)" in early 2026. The held rows do
not support an early-2026 move-in. They show three phases. The full row list
is Complete log 1 below.

**1. A job site (February – March 2026).** The first unambiguous row is Dan
to Annie on 2026-02-02: *"John is working at the house on morgantown st
today / And by working I mean he is here, asleep"* (13:47–13:48). *"Here"* is
wherever Dan is standing, which that day is the job site. On February 10 Suz
is making *"regular trips"*: *"I'll get cigarettes and drop some off on. Y way
to Morgantown st"* (09:12). The same afternoon: *"Felix showed up but Arnu
didn't. He's bringing Elijah over to do his homework until basketball practice
and Felix is going to paint more. Do you want to come over?"* (15:18). In
mid-March Dan is on the crew himself: *"I'm gonna do this for you and then go
work with John and Felix"* (to Annie, 2026-03-16 10:06). *"Felix asked if I
needed a ride, I asked 'is John done for the day?'… I would have gladly stayed
and worked longer"* (to Suz, 2026-03-18 16:19–16:21).

**2. A wash-up point (March – May 2026).** On 2026-03-02 Dan writes *"We are
going to morgantown street while they show the place"* (14:11). "The place"
is 337 Saratoga, listed and being shown
([[wiki/places/337-saratoga-drive]]). From April, 463 is where Dan goes to
shower, and "here" is somewhere else. Examples: *"I'm going to morgantown
street now to shower"* (04-06 10:49); *"I'll meet you at morgantown street
probably in about 20 minutes"* (04-27 15:04); *"we could hang out for a
little bit either in morgantown street or here"* (05-10 12:24). That fits the
End Fight's *"my water being off"* complaint about the other house
([[wiki/timeline/events/end-fight]] §II). Two rows show that 463 was not yet
furnished or settled as a home. Suz, 2026-04-16: *"I found a really nice
house to rent but it's in Scottdale"*. Suz, 2026-05-23: *"If you start
throwing up we should take you to Morgantown st and take a bed-like thing"*.

**3. The address (July 2026 onward).** 337 Saratoga sold on 2026-06-24
(Compass MLS #1721561, $465,000;
[ent:morgantown-st-463](../../kb/entities/morgantown-st-463.md)). On July 17
Tuquick reports driving past 337: *"Looks like you don't live there anymore"*
([[wiki/timeline/events/group-chat-closure]]). On July 24 Dan tells Annie *"I
moved the entire house by myself. It took an extra week"*
([dat:0074](../../kb/data/0074-morgantown-housing-state-august-2026.md)). On
August 16 the call file is named `Morgantown St.m4a` by macOS Voice Memos
([[wiki/timeline/events/august-2026-morgantown-call]]). On August 17 Coles
writes *"Morgantown st by BFS"* and then *"463 Morgantown st ?"* (12:16,
12:26). Dan's reply, *"So why are you sending me my address?"*, is the
record's first explicit statement that 463 is where he lives
([[wiki/legal/463-morgantown]]). On August 23 Annie is outside: *"I am on
Morgantown st"* (03:40, living master file).

**Revised reading.** Occupancy of 463 as a residence is first evidenced in
July 2026, after 337 sold, and is confirmed on August 17. February to May
2026 is a renovation and a place to wash. This is an inference from the
pattern of "here" against "morgantown street", and it is marked as one. No
row says "we moved into 463 on [date]". What the rows rule out is the
premise that Dan and Suz were living there in early 2026.

## Who is actually at 463

If there is an owner, the record never sees him. It sees the following
people repeatedly.

- **Felix.** The most frequent name at the property, from February to
  September 2026. He paints (02-10), drives Dan (03-18), plays golf with Dan
  (04-09) and with *"a buddy"* before meeting Suz for pizza (06-19), and sits
  on the porch with Suz (*"Felix and my mom are sitting on the porch"*,
  08-02). As late as 2026-09-10 Suz writes *"Please clean up the dog pee
  before Felix gets here."* [[wiki/people/felix]] records Dan's statement
  (2026-09-25) that Elijah is Felix's son. The old wiki called Felix
  "Worker/painter (supply-adjacent?)". The rows show a daily presence close to
  the household. His relationship to the owner, if any, is not recorded.
- **John / Carney.** "John" works at the house, or sleeps there, on 02-02,
  and runs the crew Dan joins on 03-16 and 03-18. Suz's 03-27 message
  concerns *"the John carney thing"*. On **2026-09-01**, Dan tells Suz there
  are visitors at the house: *"Carney and Felix"* (15:09). Suz: *"Oh lord"*.
  [[wiki/people/john-carney]] and [[wiki/legal/463-morgantown]] both carry
  Carney as "unreachable since March 2026". A row placing Carney at the house
  on September 1 contradicts that. It does not establish that the "John" of
  February and March is the same man, or that the September visit concerned
  the work.
- **Arnu.** One row in the entire held corpus: the February 10 no-show. The
  "mechanics lien ~2026-07-27" hangs on that one row plus a derived estimate
  that no page has ever sourced
  ([dat:0074](../../kb/data/0074-morgantown-housing-state-august-2026.md)).
- **Suz.** She controls access (*"Felix will be there shortly. Door is probably
  locked"*, 03-27). She is at the house when Dan is elsewhere (04-07). On
  2026-08-11 she tells Dan *"It's time for you to go."* (11:04), then *"I'm so
  tired of you stealing from me. You have no respect for me and you don't care
  one single bit about me. I'm so disappointed."* (11:09). The old page called
  her "agent/tenant/caretaker". The rows show only that she has keys and
  authority there. Under what arrangement, and with whom, they do not show.

## What the owner's absence does to the risk analysis

The earlier page's central point still holds as a *conditional*. If the
property belongs to a third party, then every obligation around it runs
through verbal arrangements. A mechanics lien would attach to his title. His
counterparty, Suz, is a Chapter 13 debtor (October 2024, case 24-22285-GLT,
~$157,000 scheduled, stated income $11,000–$14,000 a year;
[[wiki/people/suzanne-frank]]). That makes any unwritten obligation between
them harder to enforce in either direction. The open lead the page carried
since 2026-08-18, whether Jackson knows his tenant-agent is in bankruptcy,
remains a real question if Jackson exists as described.

What changes is the direction of the uncertainty. The old page treated the
owner as the one fixed fact among unknowns: title known, lease missing. The
held record reverses that. The occupants, the workers, the dates and the
threats are documented. The owner is the least-documented element at the
address. Three things follow.

1. **"No signed lease" cannot be separated from "no owner in the record".** A
   lease needs two named parties. The wiki names one (Suz) and assumes the
   other.
2. **The lien exposure is doubly derived.** An estimated deadline
   (2026-07-27, elapsed with no outcome), from a contractor with one row,
   against the title of an owner with none.
3. **The pattern predates the owner question.** 463 is the seventh
   consecutive address since 2010 with no lease, rent figure or signatory in
   the corpus ([[wiki/places/the-unpapered-address]]). Every tenancy in that
   record "is granted by a specific person and ends when that person's
   circumstances change". At 463 the only person granting or ending anything
   in the rows is Suz.

## Complete log 1: every held row naming Morgantown St or "463"

Every row in the three held message files whose text matches *morgantown
st*, *morgantown street* or the standalone *463*. Rows 1–3 name Morgantown
Street, a main Uniontown road, and are not about the property. They are kept
for completeness. Times are Eastern, converted from UTC
([dat:1802](../../kb/data/1802-held-corpus-timestamps-are-utc-not-local.md)).
The master-file rows (marked †) are assumed to share the parts' UTC
convention.

| # | Date / time | Thread | From | Text (verbatim, trimmed) |
|---|---|---|---|---|
| 1 | 2016-01-20 12:04 | Annie (old handle) | Dan | Morgantown stuff was gone at like 9pm |
| 2 | 2016-05-25 09:02 | Annie (email handle) | Annie | That sweetie pies place opened today on Morgantown street |
| 3 | 2019-01-26 19:20 | +17249124645 | Dan | Kinda near marathon on Morgantown st |
| 4 | 2025-12-08 13:52 | Annie | Annie | I could have sworn I just saw him on Morgantown street |
| 5 | 2026-02-02 13:47 | Annie | Dan | John is working at the house on morgantown st today |
| 6 | 2026-02-10 09:12 | Suz | Suz | I'll get cigarettes and drop some off on. Y way to Morgantown st |
| 7 | 2026-02-14 14:33 | Suz | Suz | Going to Morgantown st |
| 8 | 2026-02-15 13:05 | Annie | Dan | And then he went to the morgantown st house |
| 9 | 2026-03-02 14:11 | Annie | Dan | We are going to morgantown street while they show the place |
| 10 | 2026-03-24 16:02 | Annie | Dan | …I am probably going to take him over to morgantown street and maybe if he showered it would help |
| 11 | 2026-04-06 10:49 | Annie | Dan | I'm going to morgantown street now to shower |
| 12 | 2026-04-07 17:05 | Annie | Dan | alright come whenever, my mom is at morgantown street |
| 13 | 2026-04-20 12:32 | Annie | Dan | …I'm going to morgantown street for a few minutes and then I'll be back… |
| 14 | 2026-04-21 12:22 | Annie | Dan | …I'm going over to morgantown street and I'll meet him there while I shower |
| 15 | 2026-04-21 13:31 | Annie | Annie | So you are going to Morgantown st now ? |
| 16 | 2026-04-22 14:14 | Annie | Dan | Do you want to meet me at morgantown street in 10 mins |
| 17 | 2026-04-22 14:20 | Annie | Dan | Okay I'm leaving now for morgantown street |
| 18 | 2026-04-24 05:10 | Suz | Dan | I got a call yesterday when we were at Morgantown street I guess, it was probably BFS… |
| 19 | 2026-04-27 15:04 | Annie | Dan | …I'll meet you at morgantown street probably in about 20 minutes… |
| 20 | 2026-04-27 15:17 | Annie | Dan | Meet me at morgantown street in 10 minutes then I'll go back to leaving you alone |
| 21 | 2026-04-27 15:17 | Annie | Annie | Liked "Meet me at morgantown street in 10 minutes…" |
| 22 | 2026-05-05 14:32 | Annie | Dan | …I'll tell you if I'll be here or morgantown street |
| 23 | 2026-05-09 13:59 | Annie | Dan | Alright well I'm going over to morgantown street |
| 24 | 2026-05-10 12:24 | Annie | Dan | …we could hang out for a little bit either in morgantown street or here |
| 25 | 2026-05-12 15:29 | Annie | Dan | …I'm going over to morgantown street around 4… |
| 26 | 2026-05-17 14:16 | Annie | Dan | imim leaving now plese text bop and tell him i'm at morgantown street and ready |
| 27 | 2026-05-23 23:49 | Suz | Suz | …we should take you to Morgantown st and take abed-like thing |
| 28 | 2026-05-27 18:35 | Annie | Dan | …we can hang out here or at morgantown street it doesn't matter just… |
| 29 | 2026-08-17 12:16 | Coles | Coles | Morgantown st by BFS |
| 30 | 2026-08-17 12:26 | Coles | Coles | 463 Morgantown st ? |
| 31 | 2026-08-23 03:40 † | Annie | Annie | I am on Morgantown st |

No row between 2026-05-27 and 2026-08-17 names the street. The move itself
(July) is described without an address. Rows 26 and 14 involve "bop", a
name the [[wiki/timeline/events/end-fight]] procurement passage connects to
supply. They are logged here as address evidence only.

## Complete log 2: every row naming Felix, Carney or Arnu, 2025–2026

The pattern is the whole words *Felix*, *Carney* and *Arnu*. One row
consisting of "Felix" followed by digits (Suz, 2026-06-25) reads as a code or
password. It is excluded and not reproduced.

| # | Date / time | Thread | From | Text (verbatim, trimmed) |
|---|---|---|---|---|
| 1 | 2026-02-10 15:18 | Suz | Suz | …Felix showed up but Arnu didn't. He's bringing Elijah over to do his homework… Felix is going to paint more. Do you want to come over? |
| 2 | 2026-02-10 17:01 | Suz | Suz | …Felix took E to basketball. He's coming back to work for an hour. It may benefit you to be here… |
| 3 | 2026-02-23 18:36 | Annie | Dan | Idk if you planned on coming back but Felix I here if you want to see hi |
| 4 | 2026-02-24 02:21 | Suz | Suz | From Felix |
| 5 | 2026-03-03 12:33 | Annie | Annie | Felix is here |
| 6 | 2026-03-16 10:06 | Annie | Dan | …I'm gonna do this for you and then go work with John and Felix |
| 7 | 2026-03-18 16:19 | Suz | Dan | …Felix asked if I needed a ride, I asked "is John done for the day?"… |
| 8 | 2026-03-18 20:32 | Annie | Dan | …I will try to get you something from Felix in the morning if nothing happens tonight |
| 9 | 2026-03-27 06:30 | Suz | Suz | I just read the John carney thing. Did you read it? The last few pages areVery interesting. I wish it had included the older messages, but I completely agree with the analysis anyway |
| 10 | 2026-03-27 17:25 | Suz | Suz | Felix will be there shortly. Door is probably locked |
| 11 | 2026-03-29 18:41 | Annie | Dan | Felix is here |
| 12 | 2026-03-30 08:29 | Annie | Dan | Went and got coffee and saw Felix there |
| 13 | 2026-04-09 15:55 | Annie | Dan | …I'm supposed to play golf with Felix in a bit… |
| 14 | 2026-05-31 23:02 | group chat | Coles | …invite John Felix over |
| 15 | 2026-06-15 11:45 | Suz | Suz | I'm going to meet Felix and take a shower |
| 16 | 2026-06-19 11:49 | Suz | Suz | …Felix is playing 9 holes w a buddy and then meeting us to pick up an extra large pizza. I found the key to another lock we can use on storage unit. |
| 17 | 2026-07-27 12:15 | Annie | Dan | Bop is out there. No barking just sitting like a good boy with felix |
| 18 | 2026-08-02 14:13 | Annie | Dan | Because Felix and my mom are sitting on the porch |
| 19 | 2026-08-09 13:41 | Annie | Dan | Welll Felix is here so it can't be too long |
| 20 | 2026-08-23 18:21 † | Annie | Dan | Even if I means just putting it on the schedule when Felix comes at noon tomorrow |
| 21 | 2026-08-24 12:40 † | Annie | Dan | Felix actually got his late last night |
| 22 | 2026-09-01 15:09 | Suz | Dan | Carney and Felix |
| 23 | 2026-09-10 12:05 † | Suz | Suz | Please clean up the dog pee before Felix gets here |

Two findings from this log affect other pages. Row 9 is the complete text of
the "John carney thing" message. [[wiki/people/john-carney]] says the row
"ends" at *"I wish it had included the"* and that "whatever she wished it had
included is not recoverable". In `messages-part2-2019-2026.csv` it is
recoverable: *"the older messages, but I completely agree with the analysis
anyway."* That page was working from a truncated copy. Row 22 places Carney at
the house on 2026-09-01.

## Complete log 3: this page's own re-checks

| Date | What moved | What this page concluded |
|---|---|---|
| 2026-07-26 | [[wiki/legal/463-morgantown]] typed-connections pass (07-18) | No factual change. Noted the Arnu lien deadline maturing 07-27 |
| 2026-08-02 | 463 page records the lien deadline elapsed | Nothing asserted here changes. "The one party with a formal legal interest in the outcome is the one the record cannot see at all" |
| 2026-08-18 | 463 page: Suz finances corrected ($750/week → Chapter 13), Feb 2026 trips, Aug 11 "It's time for you to go" | Exposure unchanged in kind. Open lead: does Jackson know his tenant-agent is a Chapter 13 debtor? |
| 2026-08-20 | 463 page gains the Coles address-threat section | No claim affected. The new exposure is physical safety and belongs to the occupants |
| 2026-09-25 | This rewrite | Ownership claim re-graded to a single unheld provenance chain. Early-2026 move-in withdrawn in favour of July 2026 occupancy. Carney "unreachable since March" contradicted by row 22 of Log 2 |

## Coverage limits

- **This page cannot say who owns 463 Morgantown St.** It can say that the
  held record never names an owner, and that the wiki's name for him comes
  from sources it does not hold.
- **Phone calls, in-person arrangements and Suz's other channels** are
  outside the message record. An owner who dealt only with Suz by voice would
  be invisible here. The absence of Jackson from Dan's texts is weak evidence
  about Jackson and strong evidence about Dan: Dan never mentions a landlord
  at 463.
- **Dates of occupancy** are inferred from how "here" and "morgantown street"
  are used, not from a stated move date.
- **The BFS relationship.** Coles locates the house *"by BFS"*, and the old
  page insisted the property was "separate from BFS corp". Neither statement
  is sourced beyond itself. Dan's BFS employment is at
  [[wiki/work/bfs-foods]].
- **Deliberately not done:** no public-records lookup of the parcel's owner
  was run for this page. It would resolve the question. Whether to publish a
  private owner's name on a public wiki, once confirmed, is a separate
  decision this page does not make.

## Appendix — forensic notes

1. **Name order.** Old-wiki slug `jackson-alexander`, title "Jackson Alexander
   (Alexander Jackson)", body "Alexander Jackson". The kb and every other page
   use "Alexander Jackson". Which order is the real name, if either, is
   unknown. A name whose order was never fixed has probably never been read
   off a document.
2. **"Post 337 contingencies" was nearly right.** The old infobox said the
   move-in came "post 337 contingencies". The held rows put occupancy after
   the 337 *sale* (June 24), which is later than "early 2026" and consistent
   with that phrase. The early-2026 date appears to have been a
   generalisation of the February renovation rows.
3. **The `vertical-authority-skepticism` link.** The old page connected 463 to
   [[wiki/mind/synthesis/vertical-authority-skepticism]] through "Big30 Trust
   9" from context-core. That is a trait score applied to a housing
   arrangement no one documented. The link is kept in `related:` but carries
   no evidential weight here.

## Sources

- **Primary, searched:** `raw/imessage/messages-part1-2011-2019.csv`,
  `raw/imessage/messages-part2-2019-2026.csv`, `raw/imessage/messages-master.csv`
  (full-text pattern search, 2026-09-25; all rows quoted above are verbatim
  from these files).
- **Primary, negative:** `raw/morgantown-call-independent-stt-transcript-2026-09-09/`.
- **kb:** [dat:0243](../../kb/data/0243-alexander-jackson-owner-claim.md),
  [dat:0074](../../kb/data/0074-morgantown-housing-state-august-2026.md),
  [evt:2026-morgantown-st-move](../../kb/events/2026-morgantown-st-move.md),
  [ent:morgantown-st-463](../../kb/entities/morgantown-st-463.md),
  [dat:1802](../../kb/data/1802-held-corpus-timestamps-are-utc-not-local.md).
- **No media.** `media/registry.json` holds no image of 463 Morgantown St or
  of anyone named Jackson. Its "Morgantown" items are Morgantown, WV, 2015.
