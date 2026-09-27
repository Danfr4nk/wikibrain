---
domain: self
page_type: synthesis
status: archived
date_created: 2026-06-22
date_modified: 2026-09-27
sources:
  - "raw/self/favorites/FAVS MASTERLIST.csv — ⚠ Source reference unresolved — original target no longer exists in current corpus."
  - raw/sammy/20260911-2113/PLAYLIST_ANALYSIS.md
  - kb/sources/playlist-analysis-2026-09-11.md
  - kb/sources/taste-forensics-20260911.md
  - kb/data/0438-favorites-masterlist-totals-2016-entries.md
  - kb/data/1021-favs-masterlist-counts-and-breadth-retraction.md
  - kb/data/0436-book-read-corpus-scale-120-books-98-authors.md
  - kb/data/0437-2025-goodreads-refresh-wolff-bacharach-sole-one-star.md
  - kb/data/0196-art-and-movies-favorites.md
  - kb/data/0480-eclecticism-count-spine.md
  - kb/data/1244-taste-profile-masterlist-aggregates.md
  - kb/data/1383-closing-the-set-rule.md
  - kb/data/0389-dan-carlin-favorites-masterlist-absent.md
  - kb/data/0955-cool-metric-favorites-analysis-never-run.md
  - kb/data/1158-electronic-bass-cluster-testimony.md
  - "raw/takeout/takeout-20260720T184122Z-1-001/Takeout/YouTube and YouTube Music/playlists/Favorites-videos.csv"
  - "raw/takeout/takeout-20260720T184122Z-1-001/Takeout/YouTube and YouTube Music/playlists/NON CLOUD FAVS-videos.csv"
  - raw/drive-sweep/20260911/gdocs/source-campaigns/goodreads-favs.md.from-gdoc.txt
synthesizes:
  - wiki/interests/music/concepts/sub-bass-signature
  - wiki/interests/favorites/index
  - wiki/mind/synthesis/totality-themes
related:
  - wiki/interests/music/concepts/sub-bass-signature
  - wiki/interests/music/aliases/gripnotic
  - wiki/interests/music/aliases/mogzart
  - wiki/mind/concepts/conflict-architecture
  - wiki/mind/concepts/attachment-model
  - wiki/mind/concepts/contact-gini
  - wiki/interests/favorites/index
  - wiki/self/facebook
  - wiki/mind/synthesis/totality-themes
  - wiki/interests/favorites/eclecticism
  - wiki/interests/favorites/music
  - wiki/interests/favorites/books
  - wiki/interests/favorites/art-and-movies
  - wiki/interests/favorites/taste-profile
  - wiki/mind/synthesis/closing-the-set
  - wiki/mind/profile/big-five-psychometrics
tags: [music-production, politics, forensic-analysis]
---

# Favorites Masterlist (Legacy)

**Note:** Favorites now have a dedicated top-level category at
[[wiki/interests/favorites/index]]. This page is the original 2026-06-22
synthesis of the masterlist spreadsheet, kept because it is the page that
first described the file. It has been rewritten on 2026-09-27 as the
wiki's record **of the file itself** — what it is, how it was built, every
count ever taken from it, and which of this page's own original readings
have since been withdrawn. Interpretation of the taste the file records
lives on [[wiki/interests/favorites/eclecticism]] and
[[wiki/mind/synthesis/closing-the-set]]; it is cross-linked here, not
repeated.

## What the masterlist is

Sometime before late June 2026 Dan built a single spreadsheet of the things
he likes. He called it `FAVS MASTERLIST.csv`. It has **2,016 rows**, and
every row is one favourite: a track, a book, an artwork or a film. He
dropped it into the wiki's staging folder around 2026-06-22, and this page
was written from it the same day
([`dat:0438`](../../kb/data/0438-favorites-masterlist-totals-2016-entries.md)).

It is not one list. It is five lists pasted together, and each row carries
an `Origin` field naming which. The only direct read of the file held in
this repository — a computed analysis run against Dan's Drive copy on
2026-09-11, filed at `raw/sammy/20260911-2113/PLAYLIST_ANALYSIS.md`
([`src:playlist-analysis-2026-09-11`](../../kb/sources/playlist-analysis-2026-09-11.md))
— gives the construction:

- a bulk import of his **Spotify Liked Songs**, tagged `SPOTIFY LIKED 2025-2026`;
- a hand-built **music list begun in 2024**, tagged `MUSIC LIST (start-2024)`;
- his **Goodreads read shelf**, tagged `BOOKS.csv`;
- an **art list**, tagged `ART MATRIX`;
- a **film list**, tagged `MOVIES FAVS.rtf`.

Three human facts come out of that construction before any analysis does.

**He rates books and art and never rates music.** Of 2,016 rows, 145 carry
a score, and all 145 are books (120) or artworks (25). None of the 1,860
music rows is rated (`PLAYLIST_ANALYSIS.md` §4.3). A track is either on the
list or it is not.

**The music rows have no dates.** The `Date Added` field is blank on every
music row: the list records *what*, not *when* (§4.2). The when is in a
different file — his Spotify exports — and it turns out to matter more than
anything in the masterlist itself (below, "When the likes happened").

**Every artwork is a five.** All twenty-five art rows are rated 5/5, one
maker per work ([`dat:0196`](../../kb/data/0196-art-and-movies-favorites.md)).
The art list is not graded; it is a hall.

The same analysis records a fact about how he listens that governs how the
music rows should be read: Dan hears sung lyrics as *timbre, not language*,
and across his life there are roughly three songs whose words he has parsed
as a message (`PLAYLIST_ANALYSIS.md` §1; [`src:taste-forensics-20260911`](../../kb/sources/taste-forensics-20260911.md)).
The masterlist's lyricist-heavy top of the table — JPEGMAFIA, Kanye West,
Elliott Smith, Gerard Way's band — is therefore a list of voices, not of
lyrics. The original version of this page did not know that and read the
list as a statement of themes.

## Where the file is, and is not

This page cites the masterlist at `raw/self/favorites/FAVS MASTERLIST.csv`.
That path does not exist in this repository, and never has since the
2026-09-04 rebuild. Three different locations are named across the wiki:

| Location named | Where | Status |
| :--- | :--- | :--- |
| `raw/self/favorites/FAVS MASTERLIST.csv` | this page, the favorites sub-tree | not held ([`dat:0389`](../../kb/data/0389-dan-carlin-favorites-masterlist-absent.md)) |
| `raw/interests/favs/` | the taste-profile page, per [`dat:1244`](../../kb/data/1244-taste-profile-masterlist-aggregates.md) | not held |
| `~/workspace/your_files/playlists/FAVS_MASTERLIST.csv` | Dan's Google Drive, pulled 2026-09-11 | read by `PLAYLIST_ANALYSIS.md`; not held |

The Drive sweep of 2026-09-11 filed a campaign card for it —
*"Source Campaign: Goodreads / FAVS · Path: raw/self/favorites/ · Total
files: 2 · Priority: MEDIUM"* — and no files
(`raw/drive-sweep/20260911/gdocs/source-campaigns/goodreads-favs.md.from-gdoc.txt`).

So every count on this page is one of two things: the prior wiki's pipeline
count (the June and August parses, relayed through
[`dat:0438`](../../kb/data/0438-favorites-masterlist-totals-2016-entries.md),
[`dat:1021`](../../kb/data/1021-favs-masterlist-counts-and-breadth-retraction.md),
[`dat:0436`](../../kb/data/0436-book-read-corpus-scale-120-books-98-authors.md)
and [`dat:1383`](../../kb/data/1383-closing-the-set-rule.md)), or the
September direct read held in `PLAYLIST_ANALYSIS.md`. Where the two agree,
the figure has two independent reads behind it. Where they differ, both are
printed.

## The complete counts

### By category

| Category | Rows | Share | Unique creators | Rated | Source of count |
| :--- | ---: | ---: | ---: | :--- | :--- |
| Music | 1,860 | 92.3% | 1,477 artists | 0 | both reads |
| Book | 120 | 6.0% | 98 authors | 120 | both reads |
| Art | 25 | 1.2% | 25 makers | 25 (all 5★) | both reads |
| Movie | 11 | 0.5% | — | 0 | both reads |
| **Total** | **2,016** | **100%** | — | **145** | both reads |

Sources: [`dat:0438`](../../kb/data/0438-favorites-masterlist-totals-2016-entries.md);
`PLAYLIST_ANALYSIS.md` §4.1, §4.3. 1,860 / 1,477 = 1.26 tracks per artist.

### By origin

The original page printed "Combined / overlapping: 13" without saying what
it meant. The direct read settles it: the origin field and the tag field
count differently.

| Origin (row-exclusive) | Rows | Tag count (rows carrying the tag) |
| :--- | ---: | ---: |
| `SPOTIFY LIKED 2025-2026` only | 1,384 | 1,397 |
| `MUSIC LIST (start-2024)` only | 463 | 476 |
| Both music tags | 13 | — |
| `BOOKS.csv` | 120 | 120 |
| `ART MATRIX` | 25 | 25 |
| `MOVIES FAVS.rtf` | 11 | 11 |
| **Total** | **2,016** | — |

1,384 + 463 + 13 = 1,860. Thirteen tracks were on the hand-built 2024 list
and were later liked on Spotify. The music log is 75% Spotify import
(1,397 of 1,860) (`PLAYLIST_ANALYSIS.md` §4.2;
[`dat:1021`](../../kb/data/1021-favs-masterlist-counts-and-breadth-retraction.md)).

### Music: most-repeated artists

| Artist | Tracks | Legacy page (June) | Direct read (Sept) |
| :--- | ---: | :---: | :---: |
| JPEGMAFIA | 13 | ✓ | ✓ |
| Kanye West | 11 | ✓ | ✓ |
| My Chemical Romance | 9 | ✓ | ✓ |
| New Found Glory | 8 | ✓ | ✓ |
| Elliott Smith | 7 | ✓ | ✓ |
| rSUN | 7 | ✓ | ✓ |
| LYNY | 7 | ✓ | ✓ |
| Taking Back Sunday | 6 | ✓ | ✓ |
| Fall Out Boy | 6 | ✓ | ✓ |
| Say Anything | 6 | ✓ | ✓ |
| Knock2 | 6 | ✓ | ✓ |
| Effin | 6 | ✓ | ✓ |
| Mau P | 6 | ✓ | not listed |
| A$AP Rocky | 5 | ✓ | not listed |
| Bloc Party | 5 | ✓ | not listed |

The September read stops its list at Effin, so Mau P's absence is a
truncation, not a disagreement; it is marked because it has not been
confirmed. The June index adds **Lil Wayne 5** under a "FB continuity"
heading ([[wiki/interests/favorites/index]]); read literally that is a
masterlist count, which would put a fourth artist at five tracks. The
five-track tier below this table has never been printed in full.

### Music: release years

As printed by the June parse, top years only
([`dat:1021`](../../kb/data/1021-favs-masterlist-counts-and-breadth-retraction.md)):

| Release year | Tracks |
| :--- | ---: |
| 2025 | 530 |
| 2026 | 197 |
| 2024 | 145 |
| 2023 | 88 |
| 2022 | 51 |
| 2017 | 51 |
| 2021 | 45 |
| 2020 | 40 |
| 2019 | 38 |
| **Printed subtotal** | **1,185** |

The remaining 675 tracks are in years the parse did not print. 872 of the
1,860 (47%) were released in 2024 or later, which is the figure
[[wiki/interests/favorites/eclecticism]] uses. This is a table of *release*
years. It says what era the music is from, not when he liked it.

### Books: ratings

The two reads report the rating distribution differently and are
consistent once the art rows are separated out.

| My Rating | Books (June parse) | Books + art (Sept direct read) |
| :--- | ---: | ---: |
| 5 | 29 | 54 |
| 4 | 42 | 42 |
| 3 | 32 | 32 |
| 2 | 7 | 7 |
| 1 | 1 | 1 |
| 0 | 9 | 9 |
| **Total** | **120** | **145** |

54 − 25 art rows (all 5★) = 29. Sources:
[`dat:0436`](../../kb/data/0436-book-read-corpus-scale-120-books-98-authors.md);
`PLAYLIST_ANALYSIS.md` §4.3. The single one-star is *None of This Rocks*,
the memoir of Fall Out Boy's Joe Trohman, read February 2023
([`dat:0437`](../../kb/data/0437-2025-goodreads-refresh-wolff-bacharach-sole-one-star.md)).
The nine zeros are unrated rows in a field that uses 0 for "none."

### Books: most-read authors

| Author | Books |
| :--- | ---: |
| Woodward, Bob | 5 |
| Wolff, Michael | 5 |
| Goldsworthy, Adrian | 4 |
| Karl, Jonathan | 3 |
| Carlin, Dan | 2 |
| Webb, Whitney Alyse | 2 |
| Plutarch | 2 |
| Shirer, William L. | 2 |
| Swanson, James L. | 2 |
| Sanders, Bernie | 2 |
| Greene, Robert | 2 |
| Strauss, Barry S. | 2 |
| Marx, Karl | 2 |

The original version of this page stopped at Sanders. The last three rows
are from [[wiki/interests/favorites/books]]; [`dat:0436`](../../kb/data/0436-book-read-corpus-scale-120-books-98-authors.md)
gives the two-book tier as ten authors, so one two-book author has still
not been printed on any page read for this rewrite. Eighty-five of the 98
authors appear exactly once (86.7%).

### Books: tags and read dates

| Tag | Books |
| :--- | ---: |
| non-fiction | 106 |
| politics | 79 |
| history | 69 |
| recent-history | 55 |
| american-history | 53 |
| trump | 40 |
| president | 35 |
| journalism | 31 |

Tags overlap; the column does not sum. Separately,
[[wiki/mind/synthesis/closing-the-set]] counted **40 books tagged `trump` or
`jan-6`** (30 authors) and **20 tagged `roman-republic`, `ancient-history`
or `caesar`** (14 authors), non-overlapping — half the shelf on two subjects
([`dat:1383`](../../kb/data/1383-closing-the-set-rule.md)). The original
version of this page listed `jan-6` as "inferred from titles"; it is a real
tag on the shelf.

| Year read | Books |
| :--- | ---: |
| 2024 | 53 |
| 2023 | 16 |
| 2025 | 5 |
| 2022 | 4 |
| 2019 | 1 |
| *no read date* | *41 (by subtraction)* |

Source: [[wiki/interests/favorites/books]] (Dimensions table). A later
Goodreads export with 103 rows, 63 marked read, is a different snapshot of
the same shelf, not a contradiction
([`dat:0437`](../../kb/data/0437-2025-goodreads-refresh-wolff-bacharach-sole-one-star.md)).

The September read names the five-star shelf, in its own words: *"Dan
Carlin's* Death Throes of the Republic*, Jonathan Karl's* Betrayal*,* The
Divider*, Whitney Webb's* One Nation Under Blackmail*, Plutarch's* Complete
Works*, Annie Jacobsen's* Nuclear War*, Parenti's* Assassination of Julius
Caesar*,* American Prometheus*, Goldsworthy's* Caesar." That list conflicts
with [[wiki/interests/favorites/books/authors/dan-carlin]], which names
Carlin's two masterlist titles as *Blueprint for Armageddon* and *Wrath of the
Khans*. Neither source is held; the conflict is recorded, not resolved.

### Art

Twenty-five works, twenty-five makers, all rated 5. The five rows ever
printed ([[wiki/interests/favorites/art-and-movies]]):

| Title | Maker | Tags |
| :--- | :--- | :--- |
| The Drawbridge (Carceri d'Invenzione, Plate VII) | Giovanni Battista Piranesi | architecture, fortress, recursive, psyche, INTP |
| The Oath of the Horatii | Jacques-Louis David | roman, republic, code, fortress |
| Cenotaph for Newton | Étienne-Louis Boullée | architecture, geometric, fortress, utopia |
| The Duel After the Masquerade | Jean-Léon Gérôme | performance, mask, wound, hinge |
| The Melancholy and Mystery of a Street | Giorgio de Chirico | liminal, dread, observer |

Named without titles: Ilya Repin, Francis Bacon, Théodore Géricault,
Francisco Goya, Zdzisław Beksiński, and Edward Hopper (*New York Movie*,
the one work of twenty-five that carries none of the six recurring tags
`wound`, `observer`, `collapse`, `glitch`, `rupture`, `fortress`)
([`dat:0196`](../../kb/data/0196-art-and-movies-favorites.md)). Fourteen of
twenty-five makers have never been named on any page.

### Films

The complete list, eleven titles, unrated: *Parasite*, *The Prestige*,
*Pulp Fiction*, *The Witch*, *The Shining*, *The King of Comedy*, *Taxi
Driver*, *There Will Be Blood*, *The Graduate*, *Eyes Wide Shut*, *Kill
Bill* ([`dat:0196`](../../kb/data/0196-art-and-movies-favorites.md)).

### Concentration

Measured by [[wiki/mind/synthesis/closing-the-set]] from the August parse
([`dat:1383`](../../kb/data/1383-closing-the-set-rule.md)):

| Record | Units | Creator Gini | Singletons |
| :--- | :--- | ---: | ---: |
| Music | 1,860 tracks / 1,477 artists | 0.188 | 86.6% |
| Books | 120 books / 98 authors | 0.166 | 86.7% |
| Art | 25 works / 25 makers | 0.000 | 100% |
| *Contact graph (for contrast)* | *105,405 messages / 496 handles* | *0.9601* | — |

[[wiki/mind/concepts/contact-gini]] records the contact figure's 2026-09-09
independent replication at 0.9556 over 498 handles and uses the taste
figures as the bound on its claim: the concentration is relational, not
general.

## When the likes happened

The masterlist cannot say when Dan liked a song. His Spotify exports can,
and the September analysis pulled three of them
(`PLAYLIST_ANALYSIS.md` §7.1–7.2).

| Liked-songs export | Rows | Newest `Added At` |
| :--- | ---: | :--- |
| `Liked_Songs.csv` | 1,391 | 2026-06-02 |
| `Liked_Songs_big.CSV` | 1,403 | 2025-11-10 |
| `SPOTIFY_LIKED_2025-2026_JUNE.csv` | 1,415 | 2026-06-09 |
| **Union (canonical)** | **1,913 URIs** | — |

No single export is complete. The oldest holds 498 tracks found in neither
later one; their `Added At` stamps cluster on **2025-09-29 (191)** and
**2025-11-08 (286)**, and they are gone from both June 2026 exports — liked
in bulk and then removed. Their content is the old canon: Elliott Smith (8),
Paramore (6), All Time Low (5), Lana Del Rey (4), Bright Eyes (4), R.A. The
Rugged Man (4), Tyler, The Creator, Pixies, Hey Monday, Atmosphere.

The complete monthly log of the 1,913 canonical likes:

| Period | Likes |
| :--- | ---: |
| 2017–2023 (all seven years) | 88 |
| 2025-05 | 151 |
| 2025-06 | 28 |
| 2025-07 | 122 |
| 2025-08 | 7 |
| 2025-09 | 270 |
| 2025-10 | 153 |
| **2025-11** | **628** |
| 2025-12 | 58 |
| 2026-01 | 82 |
| 2026-02 | 115 |
| 2026-03 | 36 |
| 2026-04 | 19 |
| 2026-05 | 119 |
| 2026-06 | 37 |

Eighty-eight likes in seven years; then 1,417 in 2025. November 2025 is the
month he built his DJ crate — 172 of the 209 crate tracks that appear in his
likes were liked that month (§7.2) — and the source analysis reads the whole
2025 curve as a re-entry into music visible "in the Like button." That
dating matters for this page because the original version tied the
masterlist's "heavy 2025–2026 releases" to [[wiki/timeline/periods/2025-collapse]]
as a *reactivation*. The release-year table cannot carry that; the like-date
log can, and does, with the reactivation dated to May 2025 and peaking in
November.

It also puts the masterlist's two music origins in their real order. The
`MUSIC LIST (start-2024)` rows are the archive — the emo, pop-punk and indie
canon of 2007 onward, re-listed by hand. The `SPOTIFY LIKED 2025-2026` rows
are the working library of a producer building sets. The thirteen rows
carrying both tags are where the two met.

## Adjacent favourites records held in `raw/`

The masterlist is not the only list Dan has named "favourites." Two
YouTube playlists in the July 2026 Takeout carry the word and are held
here, as video IDs with timestamps and no titles.

| Playlist | Videos | First added | Last added | Added by year |
| :--- | ---: | :--- | :--- | :--- |
| `Favorites` | 13 | 2009-07-13 | 2026-04-06 | 2009: 2 · 2011: 1 · 2012: 7 · 2013: 1 · 2014: 1 · 2026: 1 |
| `NON CLOUD FAVS` | 19 | 2022-09-17 | 2023-11-18 | 2022: 5 · 2023: 14 |

Source: `raw/takeout/takeout-20260720T184122Z-1-001/Takeout/YouTube and
YouTube Music/playlists/`. The contents are unidentified — no titles are in
the export — so nothing is claimed about what is on them. They are listed
because a record of "what Dan marks as a favourite" that ignored the two
held instances of it would be the kind of silent partiality
[`CORPUS_POLICY.md`](../../CORPUS_POLICY.md) exists to prevent.

## What this page originally claimed, and what stands

The June 2026 version made eleven claims beyond its counts. Each is scored
here against the record, and the original wording is kept in quotation so
the movement is visible.

| # | Original claim | Status | Basis |
| :--- | :--- | :--- | :--- |
| 1 | "High artist count relative to library size indicates deliberate eclecticism rather than narrow genre loyalty." | **Withdrawn** | The 86.6% singleton rate is the book shelf's rate too, produced there by two subjects read through forty-four authors; "built for breadth" was retired by the music page and the eclecticism rewrite ([`dat:1021`](../../kb/data/1021-favs-masterlist-counts-and-breadth-retraction.md); [[wiki/interests/favorites/eclecticism]]). |
| 2 | Three clusters: experimental hip-hop, emo/pop-punk/2000s rock, modern electronic/bass. | **Stands** | Confirmed by the direct read's top-creator list and by the eclecticism page's "three functional clusters maintained in parallel, each ~5% of the library" ([`dat:0480`](../../kb/data/0480-eclecticism-count-spine.md)). |
| 3 | "3 balanced clusters (~90+ tracks indicative each)." | **Stands, small** | ~5% of 1,860 is ~93. The clusters are a minority of the library; the long tail is the rest. |
| 4 | "Aligns with production identity … and earlier self-corpus sub-bass signature confirmation." | **Unsupported by the file** | The CSV contains no "sub-bass" string ([`dat:0438`](../../kb/data/0438-favorites-masterlist-totals-2016-entries.md)); the 63–85% signature figure comes from `FULL PROFILE 2026`, which is not held ([[wiki/interests/music/concepts/sub-bass-signature]]; [`dat:1158`](../../kb/data/1158-electronic-bass-cluster-testimony.md)). The link is contextual, not measured. |
| 5 | "Heavy 2025–2026 releases (aligns 2025-collapse reactivation)." | **Right conclusion, wrong evidence** | Release year is not like date. The like-date log above supports the reactivation directly. |
| 6 | "FB music likes overlaps (Elliott Smith, FOB, Say Anything, Lil Wayne + 2007-14 continuity)." | **Stands, mislabelled** | The Elliott Smith / Fall Out Boy / Say Anything figures (7/6/6) are the masterlist's own track counts, not Facebook counts; Lil Wayne's 5 is confirmed by neither read. The continuity is real and separately documented: 2007 Facebook statuses name Fall Out Boy and Say Anything ([[wiki/self/facebook]]; [`dat:0480`](../../kb/data/0480-eclecticism-count-spine.md)). |
| 7 | "Music data is primarily consumption / 'liked' signal rather than rated." | **Confirmed** | 0 of 1,860 music rows rated (`PLAYLIST_ANALYSIS.md` §4.3). |
| 8 | "71 books rated 4 or 5 (high approval rate on completed reads)." | **Stands** | 29 + 42 = 71. |
| 9 | Book portion backs "institutional distrust, justice narratives" in [[wiki/mind/concepts/conflict-architecture]]. | **Reframed** | The subject column shows two closed sets — Trump-era politics and the Roman Republic — rather than a general theme ([`dat:1383`](../../kb/data/1383-closing-the-set-rule.md)). What the shelf evidences is a way of reading, not a political stance. |
| 10 | "Consistent with his systems-building profile and high Intellect / high Impulsiveness metrics." | **Partly withdrawn** | [[wiki/mind/profile/big-five-psychometrics]] reports Intellect 95 and Impulsiveness 96; its corpus audit finds Impulsiveness "silent" (0.92× baseline). Nothing in a favourites list measures either. |
| 11 | "This page should be updated on future masterlist exports." | **Not done** | No later export of the masterlist has been filed; the September read used Dan's Drive copy and was never staged into `raw/`. |

One more has to be recorded against the prior wiki rather than this page.
[`dat:0955`](../../kb/data/0955-cool-metric-favorites-analysis-never-run.md)
preserves the Cool Metric page's admission that *no quantitative analysis of
the favourites data was ever run* for that page's thesis. The counts on this
page are descriptive. The one test a sorting thesis would need — which
artists entered the library before they were popular — has still never been
built.

## How the masterlist sits against the rest of the wiki

Three points of contact, stated once.

**Production.** [[wiki/interests/music/aliases/gripnotic]] describes the
GRIPNOTIC-era DJ crate as "a wide, current-scene sampling rather than a small
set of favorites played heavily" — the same shape the September analysis
measured in it: 59.5% released in 2025, drawn from likes (209 of 229 matched), with
no artist or label loyalty (`PLAYLIST_ANALYSIS.md` §6–7). The masterlist's
Spotify half is the upstream of that crate. [[wiki/interests/music/aliases/mogzart]]
and the earlier aliases predate the file and are not measured by it.

**The contact graph.** The masterlist is the wiki's cleanest counter-sample
to Dan's relational concentration. A 0.96 Gini across people and a 0.19 Gini
across artists are the same measurement on two records, and
[[wiki/mind/concepts/contact-gini]] and [[wiki/mind/synthesis/totality-themes]]
both now use the taste figure to *bound* the relational claim rather than to
echo it. [[wiki/mind/concepts/attachment-model]]'s single-channel structure is
a fact about people; the masterlist is the evidence that it is not a fact
about attention in general.

**Closure.** [[wiki/mind/synthesis/closing-the-set]] reads the book and art
records as closed sets reached through many single witnesses, and uses the
eleven-year Annie bond as its negative control — the one set that could not
be closed from inside ([`dat:1383`](../../kb/data/1383-closing-the-set-rule.md)).
The masterlist is where that rule was first measured.

## Coverage limits

- **The file is not held.** Every count is either the prior wiki's parse or
  the September direct read, and neither re-derivation can be run from this
  repository. The September read is itself a computed document, not the CSV.
- **The two reads were taken three months apart from possibly different
  copies.** June (staging folder) and September (Drive). Their agreement on
  every shared count is evidence the copies match; it is not proof.
- **Most rows have never been printed.** Of 2,016 rows, the wiki has printed
  about sixty individually — fifteen artists, thirteen authors, five artworks,
  eleven films, and scattered titles. The five-track music tier, the full
  author list, fourteen art makers and the whole tail are unseen.
- **Release years are partial.** 675 tracks fall in years the parse did not
  print.
- **Tags are self-applied and unreliable.** The taste-profile page's own
  method note says the music/non-music tags are ignored as unreliable and
  some artists sit inside film rows ([`dat:1244`](../../kb/data/1244-taste-profile-masterlist-aggregates.md)).
- **The like-date log is Spotify's, not the masterlist's.** It covers only the
  Spotify half; the 463 hand-listed tracks have no dates anywhere.
- **Nothing here measures listening.** A like is not a play. Spotify's own
  2025 top-100 overlaps the likes on 89 tracks (`PLAYLIST_ANALYSIS.md` §7.6);
  play counts are not held.
- **No media.** No cover, artwork image or screenshot of the file is
  identified in `media/registry.json`, so this page embeds none.

## Sources

- `raw/sammy/20260911-2113/PLAYLIST_ANALYSIS.md` — the only held direct
  read of `FAVS_MASTERLIST.csv`, with the Spotify export analysis
  ([`src:playlist-analysis-2026-09-11`](../../kb/sources/playlist-analysis-2026-09-11.md);
  [`src:taste-forensics-20260911`](../../kb/sources/taste-forensics-20260911.md)).
- [`dat:0438`](../../kb/data/0438-favorites-masterlist-totals-2016-entries.md),
  [`dat:1021`](../../kb/data/1021-favs-masterlist-counts-and-breadth-retraction.md),
  [`dat:0436`](../../kb/data/0436-book-read-corpus-scale-120-books-98-authors.md),
  [`dat:0437`](../../kb/data/0437-2025-goodreads-refresh-wolff-bacharach-sole-one-star.md),
  [`dat:0196`](../../kb/data/0196-art-and-movies-favorites.md),
  [`dat:0480`](../../kb/data/0480-eclecticism-count-spine.md),
  [`dat:1244`](../../kb/data/1244-taste-profile-masterlist-aggregates.md),
  [`dat:1383`](../../kb/data/1383-closing-the-set-rule.md),
  [`dat:0389`](../../kb/data/0389-dan-carlin-favorites-masterlist-absent.md),
  [`dat:0955`](../../kb/data/0955-cool-metric-favorites-analysis-never-run.md),
  [`dat:1158`](../../kb/data/1158-electronic-bass-cluster-testimony.md) — the
  prior wiki's counts, as relayed.
- `raw/takeout/takeout-20260720T184122Z-1-001/Takeout/YouTube and YouTube Music/playlists/Favorites-videos.csv`
  and `NON CLOUD FAVS-videos.csv` — the two held YouTube favourites playlists.
- `raw/drive-sweep/20260911/gdocs/source-campaigns/goodreads-favs.md.from-gdoc.txt`
  — the empty source-campaign card.
- [[wiki/interests/favorites/index]], [[wiki/interests/favorites/music]],
  [[wiki/interests/favorites/books]], [[wiki/interests/favorites/art-and-movies]],
  [[wiki/interests/favorites/taste-profile]],
  [[wiki/interests/favorites/eclecticism]],
  [[wiki/mind/synthesis/closing-the-set]], [[wiki/mind/concepts/contact-gini]],
  [[wiki/mind/synthesis/totality-themes]],
  [[wiki/mind/profile/big-five-psychometrics]], [[wiki/self/facebook]],
  [[wiki/self/index]].
