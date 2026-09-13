---
title: "The Liked-Dump Residue: 19 Bridge Tracks"
domain: mind
page_type: synthesis
status: active
knowledge: earned
date_created: 2026-09-13
date_modified: 2026-09-13
sources:
  - src:exportify-haul-2026-09-11
  - src:playlist-forensics-2026-09-11
  - src:residue-forensics-2026-09-13
synthesizes:
  - wiki/mind/synthesis/taste-as-filter-stack
  - wiki/mind/synthesis/dance-music-only-phases
  - wiki/mind/synthesis/closing-the-set
tags: [music-production, taste, digital-footprint, forensic-analysis, personality-profile]
connections:
  - page: wiki/mind/synthesis/taste-as-filter-stack
    type: supplies
    claim: "That entry left the residue as its sharpest open thread — sixteen liked∩dump tracks watched against falsifier 11 (a re-admission wave would kill the purge-as-closure reading). This entry closes the thread: the count re-measures at nineteen under a looser normalizer, the nineteen bisect into eleven purged and eight surviving, and no re-admission wave occurred."
  - page: wiki/mind/synthesis/closing-the-set
    type: parallels
    claim: "The purge is closing-the-set run on the listening library, and the residue proves the closure was bounded: the eleven purged tracks were removed because they were inside the two closed sessions, the eight survivors were never inside them. The closure's blast radius was session-shaped, not taste-shaped."
  - page: wiki/mind/synthesis/dance-music-only-phases
    type: component-of
    claim: "The residue's release window (2013–2017) spans phase 1's tail and the fallow decade's onset. The six 2017–18 survivors are the last likes before the silence — liked at the fallow decade's leading edge, in the dump's era, never removed. That entry's periodization; this entry's continuity proof."
  - page: wiki/interests/music/concepts/lyrics-as-timbre
    type: parallels
    claim: "The purged cohort is the more verbal half of the residue (speechiness median 0.166 vs 0.052 for the survivors — verse-forward rap: DNA., Front & Center, STAR). The purge did not select for verbalness; it selected for session membership, and the sessions happened to contain the verbal material. Correlation stated, causation withheld."
  - page: wiki/interests/favorites/eclecticism
    type: evidenced-by
    claim: "The four surviving electronic tracks (EON BREAK, Pump It, Logos (Shanghai), LONG DISTANCE) are Architecture B's 'used' cluster with dated proof: a 2017 trance track at 178.86 BPM and energy 0.888 that would clear the 2025 filter stack, liked eight years before the re-entry. The filters were in the ear before the crate existed."
  - page: wiki/mind/synthesis/music-as-identity
    type: parallels
    claim: "The two deliberate 2025 re-likes (Atmosphere 'Kanye West', July 17; Sam Gellaitry 'LONG DISTANCE', October 8) are the nearest approach to a re-admission wave the record contains — two tracks, individually liked outside the bulk sessions, both surviving. Mode 3 (the regulator) has its dated footprint: the re-entry re-admitted almost nothing from the archive, and what it re-admitted was two tracks, not a wave."
---

# The Liked∩Dump Residue

The 2025 purge removed 498 URIs from the liked universe —
the two bulk-like sessions of September 29 and November 8, 2025, delisted whole.
[[wiki/mind/synthesis/taste-as-filter-stack|taste-as-filter-stack]] filed the purge
as closure-by-removal and left one thread open:
the tracks that were *both* liked *and* in the 5,321-track historical dump,
the intersection of the working library and the archive,
watched as the falsifier for the closure reading.
A re-admission wave — old canon re-liked into the working set at scale —
would have killed the purge-as-closure claim.
The residue was the thing being watched.

Re-measured 2026-09-13 against the canonical liked union (1,913 URIs)
and the soundiiz dump, the residue is **nineteen tracks**
[DERIVED — HIGH on the count under the stated normalizer;
see The count and the method for the 16-vs-19 discrepancy].
And the nineteen are not one population.
They bisect cleanly, and the bisection is the finding:

- **Eleven were purged.**
  Liked inside the two bulk sessions (six on September 29, five on November 8, 2025),
  removed with them.
  They are not survivors.
  They are the sessions' rap/electronic edge.
- **Eight survived.**
  Liked at other times — six in 2017–18, two deliberately in 2025 —
  never inside the purge's blast radius.
  They are the only dump-era tracks still in the working library.

The residue is not a bridge the purge failed to burn.
It is two different things with two different explanations,
and neither one threatens the closure reading.
What follows is the roster, the bisection,
the one anomaly that sharpens the purge's mechanism,
and the verdict on the three questions the thread was left with:
accidentally dumped, deliberately purged, or survivors of an incomplete purge.

## The count and the method

The 2026-09-11 forensics reported liked∩dump as **16** (name+artist keys)
[ATTESTED — PLAYLIST_ANALYSIS §7.3].
This pass re-measured at **19** under an artist+title normalizer
(lowercase, strip parenthetical feat./ft. and bracketed text,
strip non-alphanumeric, collapse whitespace)
[DERIVED — HIGH].
The difference is normalizer sensitivity, not a data change:
the forensics' stricter key dropped at least the JOYRYDE match
("WINDOWS FT. RICK RO$$" — the feat-token handling differs by normalizer),
and possibly two more edge keys.
All nineteen below are verified artist+title matches on both sides —
artist names match, not just generic titles —
so the forensics' title-collision caveat
("shake," "lost," "goons" as probable false positives)
does not apply to this set
[DERIVED — HIGH on the verification; each pair was eyeballed on both files].
One false positive was found and excluded:
a dump row in full-width unicode ("ＪＯＵＲＮＡＬ — 『ＰＲＡＬＩＭＺ』")
normalizing to an empty key, colliding with an empty-artist liked row.
Excluded, not counted [DERIVED].

The corpus-extract index carries no purge or residue material —
the snapshot (2026-09-04) predates the 2026-09-11 forensics,
so the corpus is silent on this thread by date, not by omission
[ATTESTED — grep over corpus_index.txt returned zero hits for
purge, liked, dump, residue, MASTER CRATE, Spotify].

The canonical liked union holds 1,913 URIs; the dump 5,321 lines.
Nineteen of 1,913 is 1.0%.
The residue is a rounding error of the library and a rounding error of the archive —
and the entire analytical weight of the thread.
Small intersections are where the mechanism shows.

## The roster: nineteen tracks

Status is purge membership:
PURGED = URI present in the oldest Liked export, absent from both June 2026 exports
(i.e., inside the removed 498).
Surviving = present in the June 2026 exports.
`Added At` is the liked timestamp.
Features from the Exportify exports
[ALL DERIVED — HIGH, direct from the CSVs].
Release window for the full nineteen:
2013 (1), 2014 (2), 2015 (4), 2016 (9), 2017 (3)
[DERIVED — HIGH].
Every track is 2013–2017 — the dump's era, exactly.
Nothing in the residue postdates the trap/festival center of gravity.

**The purged eleven** —
all liked inside the two bulk sessions, all removed:

1. Ab-Soul — "D.R.U.G.S." (2016) — added 2025-11-08
   E 0.447, V 0.417, T 132, S 0.166 [PURGED]
2. Brick Squad Monopoly — "Activist" (feat. Waka Flocka Flame, Ben G.) (2013) — added 2025-11-08
   E 0.741, V 0.477, T 130, S 0.080 [PURGED]
3. BROCKHAMPTON — "STAR" (2017) — added 2025-11-08
   E 0.388, V 0.294, T 75, S 0.282 [PURGED]
4. Joey Bada$$ — "Front & Center" (2016) — added 2025-09-29
   E 0.655, V 0.546, T 106, S 0.355 [PURGED]
5. JOYRYDE — "WINDOWS" (ft. RICK RO$$) (2016) — added 2025-09-29
   E 0.931, V 0.471, T 160, S 0.354, genres bass house/g-house [PURGED]
6. Kendrick Lamar — "DNA." (2017) — added 2025-09-29
   E 0.523, V 0.422, T 140, S 0.357, pop 77 [PURGED]
7. Lil Windex — "Cleanin Up" (2017) — added 2025-09-29
   E 0.729, V 0.713, T 110, S 0.112 [PURGED]
8. RoeShamBeaux — "Jetta Whippin'" (2016) — added 2025-09-29
   E 0.676, V 0.131, T 71, S 0.242 [PURGED]
9. Tove Lo — "Habits (Stay High)" (2014) — added 2025-11-08
   E 0.650, V 0.347, T 110, S 0.031, pop 77 [PURGED]
10. Two-9 — "World Go Crazy" (2015) — added 2025-09-29
    E 0.467, V 0.224, T 125, S 0.113, acousticness 0.225 [PURGED]
11. Young Dolph — "Royalty" (2016) — added 2025-11-08
    E 0.502, V 0.343, T 130, S 0.087 [PURGED]

**The surviving eight** —
liked at other times, never in the purge's scope:

12. Atmosphere — "Kanye West" (2014) — added 2025-07-17
    E 0.857, V 0.165, T 81, S 0.048, genres underground hip hop/alternative hip hop [surviving]
13. Flatbush Zombies — "Bounce" (2016) — added 2017-12-30
    E 0.618, V 0.362, T 110, S 0.313 [surviving]
14. Manwolves — "Sauce" (2016) — added 2018-03-06
    E 0.722, V 0.556, T 138, S 0.051 [surviving]
15. Night Lovell — "Boy Red" (2016) — added 2018-03-06
    E 0.668, V 0.138, T 120, S 0.038, instrumentalness 0.346,
    genres emo rap/horrorcore/trap metal [surviving]
16. Sam Gellaitry — "LONG DISTANCE" (2015) — added 2025-10-08
    E 0.764, V 0.375, T 76, S 0.364, acousticness 0.778 [surviving]
17. Tropkillaz — "Pump It" (2015) — added 2017-11-15
    E 0.822, V 0.828, T 110, S 0.052, instrumentalness 0.643,
    genres brazilian funk/brazilian pop [surviving]
18. Two Fresh — "Logos (Shanghai)" (2015) — added 2018-01-04
    E 0.625, V 0.414, T 136, S 0.045, instrumentalness 0.268, genres edm trap [surviving]
19. Virtual Self — "EON BREAK" (2017) — added 2017-10-27
    E 0.888, V 0.126, T 178.86, S 0.053 [surviving]

Zero of the nineteen appear in the 2025 MASTER CRATE,
in any of the nine VIP crates,
in MASTER_COLLECTED_CRATES,
or in Spotify's Your_Top_Songs_2025
[DERIVED — HIGH, all twelve files checked by key].
The residue lives in liked and in the archive and nowhere else in the working system.
The crate refused the dump entirely (zero overlap, per the sibling entry),
and it refused the residue with it.

## Cohort A: the purged eleven

The eleven purged residue tracks share one property and it is not musical:
**all eleven were liked inside the two bulk sessions** —
six on September 29, 2025
(DNA., Front & Center, Cleanin Up, Jetta Whippin', World Go Crazy, WINDOWS),
five on November 8, 2025
(D.R.U.G.S., Activist, Habits, STAR, Royalty)
[DERIVED — HIGH].
They were removed because they were in the sessions.
The sessions were the purge's unit of operation,
and these eleven were inside the unit.

What they are musically:
the sessions' **rap/electronic edge** —
the part of the bulk-like content that wasn't the emo/pop-punk/indie old canon.
Nine of the eleven are rap/hip-hop:
conscious rap (Kendrick Lamar, Ab-Soul, Joey Bada$$),
trap-rap (Young Dolph, Brick Squad Monopoly, Lil Windex, RoeShamBeaux, Two-9),
alt-rap (BROCKHAMPTON).
One is pop (Tove Lo — "Habits (Stay High)," the 2014 pop-rap crossover).
One is electronic and filter-passing
(JOYRYDE — "WINDOWS," bass house, energy 0.931 — see The WINDOWS anomaly).
The forensics' content summary of the 498
(Elliott Smith 8, Paramore 6, All Time Low 5, Lana Del Rey 4, Bright Eyes 4)
describes the sessions' bulk;
these eleven describe the sessions' tail —
the 2013–17 rap world sitting alongside the emo canon in the nostalgia haul
[DERIVED — HIGH on the roster; the "sessions' tail" reading MED].

Their filter profile, measured [DERIVED — HIGH]:

| Metric (median) | Purged eleven | Master crate | Liked universe |
|---|---|---|---|
| Energy | 0.650 | 0.849 | 0.845 |
| Valence | 0.417 | 0.337 | 0.335 |
| Speechiness | 0.166 | 0.071 | 0.075 |
| Tempo | 125 | 133 | 136 |

Eight of eleven sit below the 0.70 energy floor.
The speechiness median (0.166) is more than double the crate's —
this is the verse-forward half of the residue:
DNA. at 0.357, Front & Center at 0.355, WINDOWS at 0.354, STAR at 0.282.
Under [[wiki/interests/music/concepts/lyrics-as-timbre|Filter 0]]
these are heard as flow-timbre,
but they are still *songs with verses about things* —
the form Filter 3 rejects.
The valence median (0.417) is the least dark of any measured group in the system —
the purged cohort is brighter than the crate,
brighter than the liked universe,
brighter than the surviving cohort.

The honest statement about the profile:
it is consistent with "the purge removed what failed the filters" —
but the mechanism doesn't need the filters.
The eleven were removed because they were in the sessions,
and the sessions were removed whole.
The filter profile describes what the sessions *contained*,
not what the purge *selected*.
The purge didn't audition tracks.
It deleted containers.
The WINDOWS case proves it —
a track that clears every filter was removed anyway,
because it was in the container.

## Cohort B: the surviving eight

The eight survivors share the inverse property:
**none was ever inside the purge's blast radius.**
Six were liked in 2017–18, before the bulk sessions existed;
two were liked deliberately in 2025, outside the sessions.
The purge's unit of operation was the two sessions;
these eight were never in the unit.
They didn't survive the purge.
They were never subjected to it.

The six 2017–18 likes are the actual bridge the spec asked about
[DERIVED — HIGH]:

- Virtual Self — "EON BREAK" — 2017-10-27 — E 0.888, T 178.86, V 0.126
- Tropkillaz — "Pump It" — 2017-11-15 — E 0.822, T 110, instrumentalness 0.643
- Two Fresh — "Logos (Shanghai)" — 2018-01-04 — E 0.625, T 136, instrumentalness 0.268
- Flatbush Zombies — "Bounce" — 2017-12-30 — E 0.618, T 110, S 0.313
- Manwolves — "Sauce" — 2018-03-06 — E 0.722, T 138
- Night Lovell — "Boy Red" — 2018-03-06 — E 0.668, T 120, V 0.138,
  genres emo rap/horrorcore/trap metal

Six tracks, liked across five months at the fallow decade's leading edge —
the last likes before the 2017–2023 silence
(the ~88 total likes across those seven years,
of which these six are the only ones also in the dump)
[DERIVED — HIGH].
They were liked when the trap era's listening was still warm,
they entered the archive-era dump,
and they sat in the liked set through the entire fallow decade
and through the 2025 purge untouched.
The liked∩dump intersection *before 2025* is exactly these six —
measured, not estimated
[DERIVED — HIGH:
pre-2025 liked ∩ dump = 6 tracks, no more].

The two 2025 deliberate re-likes are the residue's most deliberate members:

- **Atmosphere — "Kanye West"** — liked 2025-07-17 —
  E 0.857, T 81, V 0.165, underground hip hop.
  A 2014 track literally titled after the lyricist god,
  re-liked individually in the re-entry's second month,
  outside any bulk session.
  Note the session-membership irony:
  Atmosphere has four *other* tracks inside the purged 498
  [ATTESTED — forensics content summary];
  "Kanye West" is the one Atmosphere track that was liked deliberately and survived.
- **Sam Gellaitry — "LONG DISTANCE"** — liked 2025-10-08 —
  E 0.764, T 76, acousticness 0.778.
  The residue's acousticness outlier by an order of magnitude
  (next-highest: Two-9 at 0.225) —
  the only organic-sounding track in the set,
  a 2015 future-bass track with audible guitar/piano,
  re-liked three weeks before the November 8 session
  and surviving it because it wasn't in it.
  The one track in the residue that breaches Filter 8's acousticness wall,
  admitted deliberately, individually, mid-re-entry
  [DERIVED — HIGH on the numbers;
  the "deliberately" reading MED —
  the timestamp is individual, not sessional, which is the evidence].

Two tracks, individually liked, both surviving.
Out of the dump's 5,321 tracks,
these are the only two that got individual re-likes in 2025.
That is the entire re-admission from the archive into the working library: n=2.

## The surviving eight against the filter stack

The surviving cohort's medians, for the record alongside the purged eleven's:
energy 0.743, valence 0.368, speechiness 0.052, tempo 115.0
[DERIVED — HIGH].
Higher-energy and far less verbal than the purged cohort —
but the cohort is small (n=8) and the split is mechanical,
so the medians describe, they don't explain.

Run each survivor against the 2025 filters
(energy ≥ 0.70; three BPM rooms: sub-100 / 125–145 / 165+;
voice-as-texture, speechiness < 0.33;
dark register ~0.322; electronic-only, low acousticness;
recency 2024–25)
[DERIVED — HIGH on the measurements; the pass/fail readings MED]:

| Track | Energy | Tempo room | Voice | Valence | Electronic | Recency |
|---|---|---|---|---|---|---|
| Atmosphere — Kanye West | ✓ 0.857 | ✓ 81 halftime | ✓ 0.048 | ✓ 0.165 | ✓ 0.020 | ✗ 2014 |
| Flatbush Zombies — Bounce | ✗ 0.618 | ~ 110 pocket | ~ 0.313 | ✓ 0.362 | ✓ 0.011 | ✗ 2016 |
| Manwolves — Sauce | ✓ 0.722 | ✓ 138 main | ✓ 0.051 | ✗ 0.556 | ✓ 0.211 | ✗ 2016 |
| Night Lovell — Boy Red | ✗ 0.668 | ~ 120 low-end | ✓ 0.038 | ✓ 0.138 | ✓ 0.041 | ✗ 2016 |
| Sam Gellaitry — LONG DISTANCE | ✓ 0.764 | ✓ 76 halftime | ✗ 0.364 | ✓ 0.375 | ✗ 0.778 | ✗ 2015 |
| Tropkillaz — Pump It | ✓ 0.822 | ~ 110 pocket | ✓ 0.052 | ✗ 0.828 | ✓ 0.002 | ✗ 2015 |
| Two Fresh — Logos (Shanghai) | ✗ 0.625 | ✓ 136 main | ✓ 0.045 | ✓ 0.414 | ✓ 0.030 | ✗ 2015 |
| Virtual Self — EON BREAK | ✓ 0.888 | ✓ 179 dnb | ✓ 0.053 | ✓ 0.126 | ✓ 0.000 | ✗ 2017 |

Two rows carry the finding.
**Atmosphere "Kanye West" and Virtual Self "EON BREAK" clear every filter except recency**
— energy, tempo room, voice-as-texture, dark register, electronic-only, all green;
the only red is the release year.
The crate refused them on exactly one filter,
and it is the filter the crate applies absolutely
(zero dump overlap — the recency filter's signature).
This is the filter-constancy claim with dated specimens:
the ear was already filtering in 2017 (EON BREAK liked 2017-10-27)
and in the re-entry's second month (Kanye West liked 2025-07-17);
what changed between the eras was never the filters.
It was which filter got to be absolute.
In 2017 the recency filter wasn't engaged —
old tracks could sit in the liked set for years.
In 2025 it is engaged absolutely —
nothing pre-2024 enters the box.
The survivors prove the filters are old.
The crate proves the recency absolute is new
[INFERRED — MED, but the two green-except-recency rows are doing the work].

The other six survivors fail two or more filters —
they are genuine library material, not box material:
Bounce and Logos sit below the energy floor;
Sauce and Pump It breach the dark register
(Pump It at 0.828 is the residue's brightest track —
the daylight permit's 2015 equivalent, contained in the library);
LONG DISTANCE breaches both the vocal axis (0.364)
and the acousticness wall (0.778) —
the residue's strangest survivor, kept deliberately, twice over.

## The WINDOWS anomaly

JOYRYDE — "WINDOWS" (ft. RICK RO$$), 2016:
energy 0.931, valence 0.471, tempo 160.16,
speechiness 0.354, acousticness 0.039,
genres bass house/g-house
[DERIVED — HIGH].
Liked September 29, 2025.
Purged.

Run it against the filter stack:
energy clears the 0.70 floor by a wide margin
(0.931 would sit in the crate's top quartile);
tempo 160 sits at the drumstep bridge the crate sanctions;
valence 0.471 is inside the crate's interquartile range;
electronic-only;
bass house — a genre with 54 tracks in the crate.
**This track passes every measured filter and was purged anyway**
[DERIVED — HIGH on the measurements;
the "passes" reading HIGH given the stated thresholds].

The anomaly resolves the mechanism question in one datum.
If the purge were a filter audit — track-by-track, taste-shaped —
WINDOWS would have survived it.
It didn't, because the purge was never auditing.
The purge removed the September 29 session,
and WINDOWS was in the September 29 session.
The unit of operation was the container, not the track.
The WINDOWS case is the single cleanest proof
that the purge was closure-by-removal of bounded sets
rather than a taste verdict on 498 individual records
[INFERRED — HIGH,
since the alternative (track-level selection) cannot produce this datum].

The corollary:
the purged eleven's below-floor energy profile (median 0.650)
is a property of what the sessions contained,
not evidence the purge was filtering.
Do not read the purge as the filter stack operating at the library level.
The filter stack operates at the skip test and at the crate;
the purge operated at the session.
Different mechanisms, different units, same Ti-closure shape —
which is why they look alike from a distance and aren't.

## The residue on the liked timeline

Place the nineteen on the sibling entry's month-by-month re-entry narrative
[DERIVED — HIGH on the dates; the narrative glosses MED]:

- **2017-10 → 2018-03: the six bridge tracks.**
  EON BREAK (Oct 27), Pump It (Nov 15), Logos (Jan 4), Bounce (Dec 30),
  Sauce and Boy Red (both Mar 6, 2018 — same day, adjacent timestamps,
  one listening session's two keeps).
  Liked at the fallow decade's leading edge, while the trap era was still warm.
  Then the silence: ~88 likes in seven years, the hand off the button.
- **2025-07-17: the first deliberate re-admission.**
  Atmosphere — "Kanye West," liked individually in the re-entry's second month
  (the July push: 122 likes).
  Not a session. Not the canon. One track, titled after the lyricist god,
  energy 0.857 — a filter-passing re-admission that stuck.
- **2025-09-29: the first session — six residue tracks in, all out.**
  DNA., Front & Center, Cleanin Up, Jetta Whippin', World Go Crazy, WINDOWS —
  liked at 05:14:58Z (five of the six share the identical timestamp;
  the session's mechanical signature).
  The `LIKED SONGS 29SEP25` snapshot playlist is taken the same day.
  The month both remembers and deletes.
- **2025-10-08: the second deliberate re-admission.**
  Sam Gellaitry — "LONG DISTANCE," liked individually
  three weeks before the November session.
  Acousticness 0.778 — the wall breached on purpose, or the ear not caring
  that week. Either way: individual, deliberate, surviving.
- **2025-10-31: the first crate wave (170 tracks).**
  Zero residue tracks in it. The box opens without the archive.
- **2025-11-08: the second session — five residue tracks in, all out.**
  D.R.U.G.S., Activist, Habits, STAR, Royalty —
  liked at 20:20:56Z (identical timestamp again).
  The November singularity month (628 likes) builds the future
  and deletes the past simultaneously.
- **2025-11-21 onward: the crate's later waves.**
  Still zero residue. The box never looks back.

The timeline's shape for the residue:
two deliberate re-admissions bracketing two bulk sessions,
the sessions' eleven removed whole,
the six 2017–18 tracks sitting underneath the entire arc untouched.
The re-entry re-admitted two tracks from the archive by hand
and deleted eleven it had re-admitted by the handful.
Net re-admission from the 5,321-track archive into the working library: **two tracks**.

## Session anatomy: what the sessions contained around the residue

The 498's known bulk content, from the forensics
[ATTESTED — PLAYLIST_ANALYSIS §7.1]:
Elliott Smith 8, Paramore 6, All Time Low 5, Lana Del Rey 4, Bright Eyes 4,
R.A. The Rugged Man 4, Tyler the Creator, Pixies, Hey Monday, Atmosphere —
emo, pop-punk, indie, alt-rap, the pre-dance taste.
The residue's purged eleven sit inside this content as the **2013–17 rap/electronic tail**:
the sessions weren't only the emo canon.
They contained the rap world too —
conscious rap's biggest names (Kendrick, Ab-Soul, Joey Bada$$),
trap-rap's working tier (Young Dolph, Brick Squad, Lil Windex, RoeShamBeaux, Two-9),
alt-rap's 2017 moment (BROCKHAMPTON's STAR),
a pop crossover (Tove Lo),
and one bass-house track that clears the 2025 filters (WINDOWS).

The genre split of the nineteen sharpens the picture
[DERIVED — HIGH]:
rap/hip-hop 13 (9 purged, 4 surviving),
electronic 5 (1 purged, 4 surviving),
pop 1 (purged).
Four of five electronic residue tracks survived;
nine of thirteen rap tracks were purged.
Read carefully — the asymmetry is mechanical, not a verdict:
the electronic tracks were mostly liked in 2017–18 (outside the sessions),
the rap tracks mostly arrived inside the sessions.
Session membership correlates with era and genre,
so the purge's blast radius *looks* genre-shaped from a distance.
It isn't. It's session-shaped.
The electronic survivors don't prove the purge spared electronic music;
they prove the purge spared everything outside the two sessions,
and the 2017–18 likes happened to be electronic-heavy
[INFERRED — MED, stated with the mechanism explicit].

One more content note on the sessions' bulk:
the forensics list Atmosphere among the purged content
while the residue holds an Atmosphere track as a survivor.
Both are true — four Atmosphere tracks went in the sessions and out with them;
"Kanye West" was liked separately, in July, and stayed.
The artist is not the unit. The session is the unit.

## What the purge actually removed

With the residue bisected and the mechanism fixed,
the purge's content can be stated plainly
[DERIVED on the roster; INFERRED — MED on the synthesis]:

The purge removed **the two bulk-like sessions whole** —
477 of the 498 URIs carry September 29 or November 8, 2025 `Added At` stamps
(191 + 286).
The content was the old canon in bulk:
the emo/pop-punk/indie pole
(Elliott Smith 8, Paramore 6, All Time Low 5, Lana Del Rey 4, Bright Eyes 4,
R.A. The Rugged Man 4, Tyler the Creator, Pixies, Hey Monday, Atmosphere)
*plus* the 2013–17 rap/electronic edge the residue's purged eleven name
(conscious rap, trap-rap, alt-rap, one pop crossover,
one filter-passing bass track).
The sessions were nostalgia hauls —
liked in a day, snapshotted
(the `LIKED SONGS 29SEP25` playlist coincides with the first),
then delisted.
The purge removed the hauls.

What the purge did *not* remove:
anything liked outside the sessions.
The eight surviving residue tracks.
The ~82 other pre-2025 likes.
The entire 2025 intake (1,417 likes).
The purge's blast radius was exactly session-shaped —
bounded, mechanical, complete within its bounds.
It was not a taste verdict on the library.
It was the deletion of two dated containers.

This reframes the sibling entry's Filter 7 reject catalog slightly:
the catalog lists "the purged 498" as the filter's immune response at the library level.
The residue's evidence says the immune-response metaphor overstates the selectivity.
The library-level event was not the filter rejecting 498 tracks;
it was closure removing two sessions.
The *sessions* were the nostalgia; the *removal* was the closure.
The filter stack's immune response at the box level
(ELECTRIC LOVE cut from the crate) is the genuinely selective one —
one track, audited, removed.
The purge was 498 tracks, unaudited, removed.
Different operations.
The wiki should not file them as the same immune response
[INFERRED — MED, stated as a correction to the sibling entry's framing].

## Three verdicts

The thread's three questions, answered with the seams showing:

**Were the eleven accidentally dumped?**
No — "accident" is the wrong category.
They were bulk-liked in nostalgia sessions and then bulk-removed with those sessions.
The removal was deliberate at the session level and indifferent at the track level.
WINDOWS is the proof of indifference:
a filter-passing track removed because it was in the container.
The eleven weren't dumped by accident;
they were dumped by container
[INFERRED — HIGH].

**Were they deliberately purged?**
At the track level, no — nothing about the eleven was individually judged.
At the session level, yes — the sessions were deliberately closed.
The deliberateness lives one level up from the tracks.
This is the Ti-closure shape the sibling entries document:
verdicts on bounded sets, executed whole, not relitigated per-member
[INFERRED — MED].

**Were the eight survivors of an incomplete purge?**
No — the purge wasn't incomplete;
it was exactly complete within its bounds.
The eight were never in the bounds.
"Survivor" implies the purge reached for them and missed.
It didn't reach.
The six 2017–18 tracks were liked before the sessions existed;
the two 2025 tracks were liked outside them.
The purge is 498-for-498 on its actual target
(the session contents, as verified against the June 2026 exports)
[DERIVED — HIGH].
There is no incompleteness to explain.

The net verdict:
the purge was a complete, mechanical, session-bounded closure.
The residue is not evidence against that reading.
The eleven are evidence *for* the session-boundedness
(they were inside the bounds),
and the eight are evidence for the boundedness too
(they were outside it).
The thread's sharpest open question dissolves into a mechanism statement.

## Falsifier 11, checked

taste-as-filter-stack's falsifier ledger, item 11:
*"Purge was closure, not drift —
falsifier: a re-admission wave (old canon re-liked into the working set) —
status: standing (16 residue tracks watched)."*
The residue was the watch-list.
Verdict after measurement:

**Standing.**
No re-admission wave occurred.
The eleven purged residue tracks were re-admitted *and then re-removed* —
net zero;
a wave that breaks and recedes is not a wave that lands.
The eight survivors include exactly two deliberate 2025 re-likes
(Atmosphere "Kanye West," Sam Gellaitry "LONG DISTANCE") —
a re-admission of n=2, individually liked, both surviving.
Two tracks is the nearest approach to a wave the record contains,
and it does not reach the falsifier's threshold:
the old canon was not re-liked into the working set at any scale.
The closure reading holds
[DERIVED — HIGH on the counts;
the threshold judgment MED, stated].

The watch-list is retired.
The residue no longer needs watching as a falsifier —
its members are now classified, and the classification is stable
under the June 2026 exports.

## Verification passes

The negative checks this entry ran, recorded so they don't get re-run
[ALL DERIVED — HIGH]:

- **Crate/VIP/yearlist sweep:** all nineteen keys checked against
  the 2025 MASTER CRATE, all nine VIP crates, MASTER_COLLECTED_CRATES,
  and Your_Top_Songs_2025_b. Zero hits in all twelve files.
  The residue is absent from every working box and from the listening yearlist.
- **Pre-2025 bridge:** liked rows with `Added At` before 2025-01-01
  intersected with the dump = exactly 6 tracks
  (EON BREAK, Pump It, Logos (Shanghai), Bounce, Sauce, Boy Red).
  No other pre-2025 liked track is dump-overlapping.
  The continuous bridge is six tracks, not "about six."
- **False-positive exclusion:** one empty-key collision found
  (full-width unicode dump row vs. empty-artist liked row) and dropped.
  The nineteen count is net of it.
- **Dump-side verification:** all nineteen keys matched on the dump file
  with artist names agreeing, not just titles.
  The forensics' generic-title collision class does not touch this set.
- **Purge-membership verification:** the 498-URI set recomputed from scratch
  (oldest export minus both June 2026 exports) = 498 URIs, matching the forensics.
  Eleven residue URIs fall inside it; eight fall outside.
- **Corpus silence:** grep over corpus_index.txt for
  purge, liked, dump, residue, MASTER CRATE, Spotify = zero hits.
  The corpus snapshot predates the forensics; its silence is dated, not substantive.

## What closes, what stays open

**Closes:**

1. The residue's count and composition:
   nineteen tracks, artist+title verified,
   eleven purged (six Sep 29 + five Nov 8, 2025),
   eight surviving (six 2017–18 + two deliberate 2025 re-likes).
   The forensics' 16 was a normalizer artifact;
   19 is the re-measured count.
2. The mechanism:
   the purge was session-bounded removal, not track-level filtering.
   WINDOWS is the datum that fixes it.
3. The bridge:
   the 2015–18 rap/electronic world connects to the 2025 library
   through exactly six continuously-liked tracks
   (EON BREAK, Pump It, Logos (Shanghai), Bounce, Sauce, Boy Red)
   plus two deliberate 2025 re-admissions.
   That is the whole continuity between the dump era and the working set.
4. Falsifier 11 stands.
   The closure reading survives its sharpest test.
5. The Filter 7 framing correction:
   the purge was not the filter stack's immune response at the library level.
   It was closure removing containers.
   The sibling entry's reject catalog should carry this correction.
6. The filter-constancy specimen:
   EON BREAK (2017) and "Kanye West" (2025 re-like)
   clear every 2025 filter except recency.
   The filters are old; the recency absolute is new.

**Stays open:**

1. *Why these eleven in the sessions.*
   The sessions' bulk is the emo/indie canon;
   the eleven are the rap/electronic tail.
   Was the tail liked as part of the same nostalgia impulse,
   or was the September 29 session doing something else
   (a 2016-listening reconstruction)?
   The `Added At` stamps say they were liked in the same sessions;
   they don't say why.
   The session's intent is [UNKNOWN].
2. *The two deliberate re-likes' selection.*
   Why Atmosphere's "Kanye West"
   (of all Atmosphere tracks — four others were purged)
   and why Sam Gellaitry's "LONG DISTANCE"
   (the residue's acousticness outlier)?
   Individual likes are choices, and these two choices are unexplained.
   Dan could answer in one sentence each [UNKNOWN — operator-answerable].
3. *Whether the purge's session-boundedness was itself deliberate.*
   The unit of operation was the session —
   but was that because he selected the sessions for deletion,
   or because the export diff just happens to show session-shaped absence
   (e.g., an account-level event, a sync artifact)?
   The timestamps and the snapshot playlist point to deliberate closure
   [INFERRED — MED-HIGH],
   but the alternative (mechanical loss) is not fully dead.
   A third export predating June 2026 would settle it;
   none exists in the haul [UNKNOWN].
4. *The residue's genre asymmetry.*
   Four of five electronic residue tracks survived;
   nine of thirteen rap tracks were purged.
   The asymmetry is mechanical
   (session membership correlates with era and genre),
   but it leaves the question of whether the 2017–18 electronic likes
   were kept *because* they were electronic —
   i.e., whether the fallow-decade ear was already filtering
   for the 2025 profile.
   EON BREAK suggests yes; n=1 suggests caution
   [INFERRED — LOW, flagged].

## Gaps

- The forensics' normalizer and this entry's normalizer disagree on 16 vs 19.
  The three delta tracks are not individually identified —
  the forensics' exact key function wasn't preserved,
  so the difference can't be decomposed track-by-track.
  A re-run of the 2026-09-11 pipeline with its original code would close this;
  the code isn't in the workspace [UNKNOWN — method gap, not a data gap].
- The ~21 purged URIs *outside* the two bulk sessions (498 − 477) are unexamined.
  If any of them are dump-overlapping, the residue grows.
  Checked: none of the nineteen fall outside the session dates
  except the eight survivors, which aren't purged —
  but the 21 themselves haven't been rostered
  [UNKNOWN — bounded: at most 21 tracks].
- The `LIKED SONGS 29SEP25` snapshot playlist's full contents
  weren't diffed against the residue.
  If the snapshot contains the six September 29 residue tracks,
  it confirms the session-as-nostalgia-haul reading directly
  [UNKNOWN — checkable from the Spotify account].
- Dan's own account of the two bulk-like sessions doesn't exist in the corpus.
  The "nostalgia haul" reading is timestamp-and-content inference.
  One operator sentence
  ("I was rebuilding my 2016 library that day"
  or "I don't remember doing that")
  would move it from MED-HIGH to settled
  [UNKNOWN — operator-answerable].
- The three lyric-exception songs
  (taste-as-filter-stack's open thread)
  are untouched by this entry.
  Noted because the purged cohort's verbalness (DNA., Front & Center)
  brushes the thread without engaging it.

## Limits of record

- Every `Added At` stamp is a Spotify-server timestamp, not a witnessed action.
  The inference "he liked these in a bulk session"
  rests on 191 tracks sharing one calendar day —
  strong, but the record doesn't show the hand, only the stamps.
- Audio features are Spotify's estimations, not measurements of his hearing.
  Energy, valence, and speechiness are used here as the industry's proxies;
  the entry's claims about what the tracks *are* rest on those proxies.
  The filter-pass verdict on WINDOWS is only as good as Spotify's energy model.
- The dump's artist fields contain curator-name artifacts
  ("trap sounds" at 162 is a channel, not an artist).
  The residue's nineteen were verified artist-by-artist,
  but the dump-side verification for the full 5,321 was not re-run here.
- The June 2026 exports are the latest liked snapshots in the haul.
  Likes added after 2026-06-09, or removals after that date, are invisible.
  The "purge is complete" verdict is complete *as of the record*.
- No corpus material postdates 2026-09-04 on this thread;
  Dan's own statements about the purge, if any exist in later messages,
  weren't consulted.
  The entry is built from the Spotify data alone, plus the two sibling synthesis entries.
- Normalization choices move the count (16 vs 19).
  Any downstream use of "the residue" should cite the normalizer, not just the number.
