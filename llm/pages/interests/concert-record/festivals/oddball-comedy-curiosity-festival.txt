---
domain: interests
page_type: event
status: stable
date_created: 2026-08-01
date_modified: 2026-09-17
knowledge: mixed
sources:
  - "raw/self/concerts/table.csv — ⚠ Source reference unresolved — original target no longer exists in current corpus."
  - "raw/twitter/archive.jsonl"
  - "raw/old-wiki-export-2026-09-04/whole.txt"
related:
  - wiki/interests/concert-record/index
  - wiki/people/katie-fletcher
  - wiki/self/twitter/2013
  - wiki/interests/stand-up-comedy
  - wiki/interests/opie-and-anthony
  - wiki/interests/concert-record/performers/dave-chappelle
tags: [music-production, digital-footprint, personality-profile]
connections:
  - page: wiki/interests/concert-record/performers/dave-chappelle
    type: contains
    claim: "Dave Chappelle performed at Oddball Comedy & Curiosity Festival on Aug 30, 2013 (Post-Gazette Pavilion (First Niagara Pavilion), Burgettstown, PA)."
  - page: wiki/interests/concert-record/performers/hannibal-buress
    type: contains
    claim: "Hannibal Buress performed at Oddball Comedy & Curiosity Festival on Aug 30, 2013 (Post-Gazette Pavilion (First Niagara Pavilion), Burgettstown, PA)."
  - page: wiki/interests/concert-record/performers/john-mulaney
    type: contains
    claim: "John Mulaney performed at Oddball Comedy & Curiosity Festival on Aug 30, 2013 (Post-Gazette Pavilion (First Niagara Pavilion), Burgettstown, PA)."
  - page: wiki/self/twitter/2013
    type: evidenced-by
    claim: "The ticket dates the night; a Vine posted at 22:54 on 30 August 2013 — 'Frogs and Katie Fletcher at #oddballcomedyfest Pittsburgh' — proves attendance and names his companion, which no ticket can."
  - page: wiki/people/katie-fletcher
    type: co-occurs
    claim: "The only event in the corpus attended by both and dated by three independent records: the concert log's ticket, a contemporaneous Vine naming her, and Dan's own 2026 retelling of the night."
---

# Oddball Comedy & Curiosity Festival

On **30 August 2013** Dan Frank went to an amphitheatre in Burgettstown,
Pennsylvania, with a woman named Katie Fletcher, for a bill the concert log
records as Dave Chappelle, Hannibal Buress and John Mulaney. At 22:54 Eastern,
from inside the venue, he posted six words and a Vine: *"Frogs and Katie
Fletcher at #oddballcomedyfest Pittsburgh."*

That post is why this page exists in the form it does. **The Oddball night is
the best-evidenced single evening in the entire concert record** — a log of
thirty-six shows spanning eighteen years in which most entries rest on a
ticket stub and nothing else. Here a ticket, a platform-timestamped public
post, and Dan's own much later retelling all name the same night, and two of
the three name the person he was with, which a ticket structurally cannot do.

## The edition

| Date | Venue | City | Note |
|------|-------|------|------|
| Aug 30, 2013 | Post-Gazette Pavilion (First Niagara Pavilion) | Burgettstown, PA | Confirmed. |

### Lineup — Aug 30, 2013

[[wiki/interests/concert-record/performers/dave-chappelle]] ·
[[wiki/interests/concert-record/performers/hannibal-buress]] ·
[[wiki/interests/concert-record/performers/john-mulaney]]

This is one edition of one tour. The concert log records no other Oddball date,
and nothing in the corpus suggests he attended another.

## The three records, ranked

The prior wiki asserted "three independent records" for this night.
`kb/data/0152-chappelle-oddball-2013-08-30-appearance.md` flagged that phrase
as the prior wiki's own synthesis rather than a checked finding, and then
`kb/data/0195-oddball-2013-08-30-tweet-corroborates-attendance.md` went and
checked one leg of it. The result is that the three records are real but are
not of equal weight, and the difference is worth printing.

| Record | What it establishes | Held in this repo? | Strength |
| :--- | :--- | :--- | :--- |
| The public post, 2013-08-31 02:54:20 UTC (= 22:54 EDT, 30 Aug) | He was at the festival, in Pittsburgh, with Katie Fletcher, at 22:54 | **Yes** — text, timestamp and Vine URL read directly from the corpus text | Primary, contemporaneous, platform-timestamped |
| The concert log ticket (`raw/self/concerts/table.csv`, row 35, "Confirmed.") | A ticket existed for this date, venue and city | **No** — `table.csv` is not held | Primary in kind, unverifiable here |
| The 2026 AI-session retelling | Chappelle's set, the lost keys, the chemistry of the night | Only as prior-wiki narration | Testimony, thirteen years post-hoc |

The post's identifiers, as directly read: status
`373639864820203520`, Vine `https://vine.co/v/h5mzueimp9b`. **The Vine itself
is unrecoverable** — the platform is defunct and the URL was not followed — so
what survives is the post's text, its timestamp and the fact that a video was
attached, not the video.

The UTC-to-Eastern conversion is the quiet part that makes the whole thing
work: 02:54:20 UTC on 31 August is 22:54 EDT on 30 August, which matches the
prior wiki's stated 22:54 exactly. Two generations of the wiki, one of them
working in local time and one in UTC, land on the same minute.

## Complete log: the eleven-day window that contains the night

The Oddball post is the last of six posts across eleven days in August 2013 in
which Katie Fletcher is named or addressed. Both the corpus page and the kb
node that checked it list six posts at matching timestamps — **and they
disagree about the text of five of them.** Both renderings are printed here in
full, because the disagreement is the finding and because the one post they
agree on verbatim is the one this page depends on.

**As [[wiki/people/katie-fletcher]] prints them (Eastern):**

| Time | Post |
|---|---|
| 2013-08-21, 14:30 | *"@katie_efff @LFanso_ @kat_denny Delaware"* |
| 2013-08-23, 20:38 | *"On a scale of one to Stromboli how was it? 'Chris Brown' @katie_efff rulez"* |
| 2013-08-24, 12:59 | *"I think there's some human trafficking happening at this salon Katie Fletcher"* + Vine |
| 2013-08-24, 17:33 | *"Mountain things with @katie_efff @ Blue Star Point Lookout"* + Instagram |
| 2013-08-25, 13:38 | *"@katie_efff I think you left your tissues here"* |
| 2013-08-30, 22:54 | *"Frogs and Katie Fletcher at #oddballcomedyfest Pittsburgh"* + Vine |

**As `kb/data/0843-katie-fletcher-six-2013-posts-read-directly.md` prints them
(UTC, read directly from the corpus text):**

| Timestamp | Post |
|---|---|
| 2013-08-21 18:30:40 UTC | *"Katie Fletcher. That is all."* |
| 2013-08-24 00:38:23 UTC | *"she has been gone like a day. but im already bored. :("* |
| 2013-08-24 16:59:36 UTC | *"Katie Fletcher you left too early"* |
| 2013-08-24 21:33:15 UTC | *"im really bored without katie fletcher"* |
| 2013-08-25 (no time given) | *"i just blew my nose on a tissue katie fletcher sneezed in. and it was in my mouth."* |
| 2013-08-31 02:54:20 UTC | *"Frogs and Katie Fletcher at #oddballcomedyfest Pittsburgh"* + Vine |

**Five of the six timestamps convert exactly.** 18:30:40 UTC is 14:30 EDT;
00:38:23 UTC on the 24th is 20:38 EDT on the 23rd; 16:59:36 is 12:59; 21:33:15
is 17:33; 02:54:20 on the 31st is 22:54 on the 30th. The sixth, the tissue
post, is dated 2013-08-25 by both and timed only by the first.

**And five of the six texts do not match.** Two of the pairs are about the same
thing in different words (the tissue), and three are not about the same thing at
all — a salon joke against *"you left too early,"* a Delaware reply against
*"Katie Fletcher. That is all."*

This page does not resolve it. Two readings fit and the record does not choose:
either there were more than six Katie posts in the window and each source
selected six, or one of the two renderings is not a verbatim transcription.
What can be said is narrow and sufficient: **the only post of the six that both
renderings carry identically, word for word, is the one posted from inside the
Oddball show.** The disagreement runs everywhere except the sentence this page
rests on.

It is also exactly the failure mode `README.md` names as the operative rule for
reading this corpus — *take the argument, verify the quote.* Four of six
checked claims in the reconstruction's own audit found a quotation that did not
sit where the page put it. This is a fifth shape of the same problem, found in
the corpus's own two accounts of one week.

## The 31 August artefact

[[wiki/self/twitter/2013]] lists, among the places the geography changes in
late summer, *"the Oddball Comedy Festival in Pittsburgh (31 August)."* Every
other record in the corpus — that same page's own table, the concert log, both
performer pages, all four kb nodes — says 30 August.

The discrepancy is a timezone artefact and it is the one `README.md` warns
about explicitly: the wiki writes times in UTC and the post is at 02:54:20 UTC
on the 31st. A reader working from the UTC date alone lands one day late, and
nothing about the result looks wrong. `kb/data/0057-morgantown-audio-contradiction-reproduces.md`
records the same trap at corpus scale. **30 August is the date. 31 August is a
timestamp read without its offset.**

## The venue has two names and the wiki leads with the wrong one

The log writes *"Post-Gazette Pavilion (First Niagara Pavilion)"* — lead name
first, parenthetical second. Both
`kb/data/0104-hannibal-buress-oddball-2013-08-30-appearance.md` and
`kb/data/0105-john-mulaney-oddball-2013-08-30-appearance.md` filed the same
naming note after checking the 2013 tour press: the June–August 2013 coverage
uniformly calls the room **First Niagara Pavilion**, which is the
parenthetical, not the lead. Both nodes recorded this as an observation rather
than a correction, on the reasoning that the parenthetical already carries the
right name.

The lead name is not wrong, it is *stale* — the venue's earlier sponsor. The
log was compiled from stubs across eighteen years and eight of its thirty-six
rows are at this amphitheatre under whichever name it carried at the time. The
naming is worth keeping in mind for anyone matching these rows against outside
sources by venue string.

## Who he was there with, and what the ticket cannot hold

Katie Fletcher was, per [[wiki/people/katie-fletcher]], Dan's interim partner
of roughly 2013 — the bridge relationship inside the only documented fracture
of the six-year [[wiki/people/alexis-armel|Alexis]] relationship. That fracture
is dated on both sides from the public record by [[wiki/self/twitter/2013]]:
*"I guess I tweet more when I'm single?"* on 9 August, eleven days with
`@katie_efff` across late August, and Alexis named again on 8 September. Six
to eight weeks off, with another person documented inside it.

**The Oddball night falls nine days before Alexis returns.** It is the last
dated event of the interlude and, on the public record, the last day Katie
Fletcher appears at all.

This is the specific thing a concert log cannot do, and it is why the twitter
archive matters more to the concert record than its own index originally
allowed. A ticket says a seat was bought. It does not say who was in the next
seat, and it does not say that the evening sat inside a six-week rupture in a
decade-long relationship. The 22:54 post says both in nine words.

## What the night was

Everything in this section is **2026 testimony, not contemporaneous record**,
and is stated as such. [[wiki/people/katie-fletcher]] narrates it from AI
sessions thirteen years after the fact — twice, the second time, on 7 February
2026, on ketamine, re-processing a night he had experienced on ketamine.

By that account: Dan took Katie to Oddball on the night after Dave Chappelle's
Hartford show — the notorious one — and Chappelle delivered what Dan describes
as an "H-Bomb" redemption set. Dan was elevated, realised mid-show that he had
lost his car keys, sprinted back through the gravel lot to find them, and,
keys recovered, did bumps in the car before returning to the lawn.

Nothing in this repository corroborates any of it. The Hartford show is not
documented anywhere in the corpus; the keys, the lot and the chemistry are
single-source; and the retelling's status as a story told about a night rather
than a record of one is the whole reason this section sits below the evidence
tables rather than above them. What the retelling *does* establish, and this
is a real finding, is that **the night is one Dan returns to** — twice in one
year, thirteen years later, in sessions that were not about concerts.

## The two-stage problem

Both the Buress and the Mulaney nodes end on the same caveat and it applies to
Chappelle too. Oddball ran two stages. **Attendance at the festival is firmer
than attendance at any one set**, and the phrase "saw perform live" on the
three performer pages assumes he watched each of them. The post places him at
the festival at 22:54. It does not place him in front of a particular
microphone at a particular hour.

There is a second, sharper caveat on the bill itself. The 2013 tour
announcement said support acts varied *"depending upon your city."* The tour
press names Buress and Mulaney among the supporting acts and gives the
Pittsburgh stop as 30 August at First Niagara Pavilion — but **Buress-and-
Mulaney-on-the-Pittsburgh-bill is the concert log's claim, not the press's.**
It is consistent with the public record rather than confirmed by it.

## Complete log: everything the corpus holds on these three performers

| Performer | Appearances in the concert record | Other appearances anywhere in the corpus | iMessage corpus hits (192,140 messages) |
| :--- | :--- | :--- | :--- |
| Dave Chappelle | 1 — Oddball, 30 Aug 2013 | 1 — named in the 2021-10-26 free-speech tweet | not separately reported |
| Hannibal Buress | 1 — Oddball, 30 Aug 2013 | none | **0** for "Hannibal Buress", "Buress", "Oddball" |
| John Mulaney | 1 — Oddball, 30 Aug 2013 | none | **0** for "John Mulaney", "Mulaney", "Oddball" |

The zeros are reported as **NOT FOUND, not as a negative finding.** Both nodes
say so explicitly, and `CORPUS_POLICY.md` is unambiguous about why: the corpus
has documented structural gaps, Facebook threads are gitignored and were not
checked, and a search that returns nothing has not established that nothing
happened. The night of 30 August 2013 produced exactly one durable artefact in
Dan's own hand, and it went to Twitter rather than to anyone's phone.

Chappelle's second appearance is the one worth following, because it points the
other way. On **26 October 2021**, during the row over Chappelle's Netflix
special, Dan wrote:

> *"Lenny Bruce was arrested...not by 'the public', but by the state. Dave*
> *Chappelle is facing criticism which is, I'm told, different."*

`kb/data/0153-lenny-bruce-chappelle-tweet-2021-10-26.md` files that as the
earliest dated instance of his move away from comedy's free-speech absolutism —
five months earlier than [[wiki/interests/opie-and-anthony]] had dated the
shift, and bounded on the other side by a January 2019 defence of Louis CK.
**The corpus's two Chappelle datapoints are eight years apart and face in
opposite directions**: in 2013 a redemption set on a lawn in Burgettstown, in
2021 a dismantling of the martyrdom analogy the redemption narrative runs on.

## Where the night sits in the concert record

[[wiki/interests/concert-record/index]] holds thirty-six rows. Oddball is row
35, and its position in that table is informative in four separate ways.

| Cut | Where Oddball sits |
| :--- | :--- |
| Chronology | The 35th of 36 entries; the last Pennsylvania entry in the log |
| The gap after it | Six years to the next and final row — High Tide 4, a yacht in New York, 20 April 2019 |
| The gap before it | The only 2013 entry; one year after Bloc Party at Terminal 5 (Aug 2012), four years after the last Orlando show |
| Venue | One of eight rows at this amphitheatre — the most-used venue in the log, seven under the Post-Gazette name plus this one |
| Form | **The only stand-up comedy entry in the whole log.** The nearest neighbour is Flight of the Conchords (row 31, 8 April 2009), a musical-comedy act |

The other seven nights at that amphitheatre are a 2002 Barenaked Ladies bill,
a John Mayer date, four Vans Warped Tours (2005, 2006, 2007, 2008) and Coldplay
in 2005. The venue is the anchor of the teen-concert years documented at
[[wiki/timeline/events/teen-concert-years]]. **Oddball is Dan returning to the
room of his adolescence at twenty-four, for something that is not music.**

## The log is a purchase record, not an attendance record

This bears on how much the ticket leg is worth. On 2026-09-04 the concert
record's own index retracted its claim to completeness, using ninety-eight days
of the 2008 twitter archive: seven Orlando shows named in the feed, four in the
table. The three misses were The Roots, a Cobra Starship bill, and
Trans-Siberian Orchestra — the last announced at 17:04 and dismissed at 23:07
as *"SUPER lame,"* leaving no trace in the log he later compiled.

The index draws the right conclusion: *"A concert log is a record of
intentions; a contemporaneous feed is a record of evenings."* The table was
assembled from stubs and order confirmations, so it preserves what was
**bought**.

For Oddball that cuts both ways. The ticket survives because somebody bought
it, which is a real fact about the evening — this was a planned outing, not a
show walked into. But it also means the ticket leg establishes a purchase, and
only the 22:54 post establishes that he went.

## Comedy, upstream and downstream

The Oddball night is not an isolated evening in a music log. It sits in the
middle of a documented arc.

**Upstream** is [[wiki/interests/opie-and-anthony]]. The two loudest years in
Dan's twenty-year YouTube history are 2012 (3,538 watched events) and 2013
(2,742), and both are substantially one subject: the Opie & Anthony shock-radio
archive, roughly 450 watches across three fan-archive channels. **Oddball falls
in the second of those two years.** By August 2013 he had been steeped for
years in the radio universe that produced the New York alt-comedy scene — which
is the scene Buress and Mulaney came out of.

**Downstream** is [[wiki/interests/stand-up-comedy]]. Six years later the
interest is an itinerary: Chris DiStefano (29 April 2019), Colin Quinn (29
October), a six-comic night on 30 October including Dan Soder, Mark Normand,
Rich Vos, Shane Gillis, Pete Lee and Jim Gaffigan, Tim Dillon and Ian Fidance
(5 November), Bobby Kelly and Big Jay Oakerson (7 November), Aaron Berg,
Yamaneika Saunders and Sean Patton (21 November). By December 2019 he is in the
audience at a Legion of Skanks taping — GPS-fixed at 21:40:36 on 23 December
2019, per `kb/sources/legion-of-skanks-tapings-photos-2019-12-23-2020-08-25.md`
— and by October 2019 he has performed an open mic himself.

Read in that sequence, 30 August 2013 is the hinge: the year the radio archive
peaked is the year he first bought a ticket to watch the thing live.

## Limits

- **`raw/self/concerts/table.csv` is not held.** The ticket leg of the
  three-record claim rests entirely on the prior wiki's transcription. The
  master event list and the three performer pages all agree with it, but they
  are downstream of the same file, so their agreement is consistency rather
  than corroboration.
- **The Vine is gone.** Vine is defunct; the URL was recorded and not followed.
  What the video showed is unrecoverable.
- **No photographs.** `media/registry.json` holds nothing from this night or
  this venue. Nothing is embedded on this page because nothing exists to embed.
- **No set lists, no running order, no ticket price, no seat.** The record
  holds a date, a venue, a city, three names and one post.
- **The lineup is the log's claim.** Per-city variance is documented in the
  2013 tour announcement; the press confirms the tour roster and the Pittsburgh
  date, not who played Pittsburgh.
- **The two-stage caveat** means "saw perform live" is an inference from
  festival attendance in all three performer cases.
- **The six-post texts disagree** between [[wiki/people/katie-fletcher]] and
  `kb/data/0843-katie-fletcher-six-2013-posts-read-directly.md`, unresolved
  above. Only the Oddball post is identical in both.
- **The 2026 retelling is testimony.** Hartford, the H-Bomb set, the keys, the
  gravel lot and the chemistry are single-source, thirteen years post-hoc, and
  none of it is corroborated in this repository.
- **The archive's own edge.** [[wiki/self/twitter/2013]] states that its 2013
  coverage is a live scrape truncated to ten results per month before
  2013-08-17 and complete only after it. The Oddball post sits inside the
  complete half — which is lucky, and worth saying out loud, because a night
  three weeks earlier would have left no comparable trace.
- **Inferred versus documented.** Documented: the date, venue, city, the three
  performers per the log, the 22:54 post and its identifiers, the six-post
  window, the Alexis fracture's bounds, the log's thirty-six rows and eight
  appearances at this venue, the 2021 Chappelle tweet, the 2019 club itinerary.
  Inferred: that Oddball is the hinge between the radio era and the live-comedy
  era, and that the ticket implies a planned outing.

## Sources

- `raw/self/concerts/table.csv` — the concert log, row 35. Cited by every page
  in this cluster; **not held in this repository**.
- `raw/self/twitter/archive.jsonl` — the public archive the 22:54 post comes
  from. Not pulled here; the post's text, timestamp and Vine URL were read from
  the corpus text and are recorded in `kb/data/0195-oddball-2013-08-30-tweet-corroborates-attendance.md`.
- `raw/old-wiki-export-2026-09-04/whole.txt` — held. Carries the prior wiki's
  festival page, performer pages and master event list.
- `kb/data/0152-chappelle-oddball-2013-08-30-appearance.md` — the Chappelle
  appearance and the flag on the "three independent records" phrasing.
- `kb/data/0104-hannibal-buress-oddball-2013-08-30-appearance.md` and
  `kb/data/0105-john-mulaney-oddball-2013-08-30-appearance.md` — the tour-press
  check, the per-city lineup caveat, the venue naming note, the corpus zeros.
- `kb/data/0195-oddball-2013-08-30-tweet-corroborates-attendance.md` — the post
  read directly, with its status id and Vine URL.
- `kb/data/0843-katie-fletcher-six-2013-posts-read-directly.md` — the six-post
  window and the testimony boundary around the rest of that page.
- `kb/data/0153-lenny-bruce-chappelle-tweet-2021-10-26.md` — the 2021
  Chappelle datapoint.
- `kb/sources/legion-of-skanks-tapings-photos-2019-12-23-2020-08-25.md` — the
  GPS-fixed 2019 taping attendance cited in the downstream section.
