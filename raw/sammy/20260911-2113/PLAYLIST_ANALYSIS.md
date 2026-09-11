# Playlist Analysis — Full Read of the Master Playlists
**Date:** 2026-09-11 · **Analyst:** Sammy (Muse Spark) · **Thread:** MUSIC THREAD

## 0. Sources & Method

Four files, all pulled from Dan's Google Drive on 2026-09-11 into `~/workspace/your_files/playlists/`:

| File | Rows | What it is |
|---|---|---|
| `2025_MASTER_CRATE.csv` | 232 tracks | DJ crate, full Spotify audio features per track, curated by `dfrank88`. Row 1 is a title row; the real header is row 2. |
| `FAVS_MASTERLIST.csv` | 2016 rows | General favorites log. Category split: Music 1860, Book 120, Movie 11, Art 25. |
| `Album_Masterlist.csv` | 154 rows | Album inventory: Artist, Album Title, Year, Genre, Speed, Grading, Potential Value, Notes. |
| `soundiiz_playlist_5321_tracks.txt` | 5321 lines | Bulk dump, format `"Artist" - Title`. |

**What was NOT used:** the wiki-brain GitHub repos no longer carry `raw/` (the rebuilds are portal-only, no raw tree), and the `Danfr4nk/RAWLOGS` repo does not exist yet as of 2026-09-11 — so Drive was the source of truth. The wiki's prior write-up of the crate (genre counts, 59% 2025 recency) was used only as a cross-check, not as data.

**Normalization for overlap matching:** lowercase, strip `feat.`/`ft.` parentheticals and bracketed text, strip non-alphanumeric, collapse whitespace. Artist fields split on `;` (crate format: `Skrillex;Noisia;josh pan;Dylan Brady`).

**Confidence convention used throughout:** **HIGH** = direct count from the files. **MED** = computed under stated assumptions (thresholds, normalization). **LOW** = interpretive claim. Anything the data cannot distinguish is flagged inline rather than smoothed over.

---

## 1. The Lyric Qualifier

Dan hears sung lyrics as **timbre, not language**. Words in songs do not resolve into semantic content for him — not even with a lyric sheet in front of him; interpreting meaning from a known lyric is harder still. Across his entire life, there are roughly **three** songs whose lyrics he has actually parsed as a conceptual message.

This is the mandatory first frame for everything below, and it changes how the numbers must be read:

- **Vocals = texture/instrument.** A sung line is processed the way a synth stab or a snare is processed: attack, tone, rhythm, placement — not proposition.
- **Spotify's `speechiness` is voice-as-instrument density, NOT wordiness.** A high-speechiness track means "a lot of voice-shaped sound is happening," not "a lot is being said." Nothing in the audio features can tell us whether a voice is delivering verses or chopped syllables.
- **His love of lyricists (JPEGMAFIA, Kanye West, Elliott Smith) is about delivery, not bars.** Flow, cadence, vocal tone, the voice as percussion — the *bars' meaning* is perceptually absent. The admiration is real; its object is the instrument, not the message. (Confidence: **MED** — inferred from the qualifier applied to his stated taste; the alternative, that he admires lyricists for wordplay he can't parse, is incoherent under his own report.)
- **The 96%-instrumental crate is therefore not a paradox.** A man who "loves lyricists" curating a DJ crate where 223 of 232 tracks carry no foregrounded vocal performance is only contradictory if you assume lyrics are language. Under the qualifier, there is no contradiction at all: the crate and the JPEGMAFIA fandom are the *same* appetite (voice-and-rhythm as physical material) in two different rooms.

**Where the data cannot distinguish (flagged, not fudged):** from audio features alone we cannot know whether a high-speechiness track is rapped verses, a sung hook, or vocal chops. The "vocal-forward" segment in §2.5 is therefore a *density* claim, never a *content* claim.

### The Three Exceptions (pending)

Dan has not yet named the ~3 songs whose lyrics he parsed as conceptual message. Placeholder — fill in when he provides them. When named, the correct analysis is not "why these lyrics" but "what broke the timbre-lock": delivery so foregrounded, repetition so insistent, or context so loaded that meaning punched through a perceptual wall that holds everywhere else. Each exception is evidence about the wall, not about the songs.

---

## 2. Crate Deep-Dive — `2025_MASTER_CRATE` (232 tracks)

### 2.1 Genre tags (multi-label; counts are tag occurrences, tracks carry several)

| Tag | Tracks | Tag | Tracks |
|---|---|---|---|
| dubstep | 63 | bassline | 17 |
| bass music | 59 | future bass | 13 |
| bass house | 54 | edm trap | 12 |
| tech house | 34 | deathstep | 11 |
| riddim | 29 | moombahton | 10 |
| edm | 25 | electro house | 10 |
| house | 24 | drumstep | 9 |
| g-house | 24 | liquid funk | 9 |
| drum and bass | 22 | melodic techno | 8 |
| stutter house | 22 | melodic house | 8 |
| uk garage | 21 | future house | 8 |

Tail (each ≤7 tracks): afro house 7, dub 6, melodic bass 5, latin house 5, deep house 4, grime 4, big room 4, art pop 3. (Confidence: **HIGH**.)

Reading: the crate's center of gravity is the **bass-house/tech-house/dubstep triangle** with a riddim wing and a dnb/UKG flank. The "art pop: 3" tail (JENNIE, bbno$, etc.) is the pop flank — small but deliberate. Nothing here is accidental; the tags describe a working DJ's record box, not a listener's shuffle.

### 2.2 Tempo — the DJ-mixing map

Mean 133.1 BPM, median 132.0, SD 19.6, range 72.0–178.9. (Confidence: **HIGH**.)

| BPM band | Tracks | DJ reading |
|---|---|---|
| <100 | 15 | Halftime/trap-feel, intro/outro material |
| 100–115 | 6 | Moombahton pocket |
| 115–125 | 25 | Deep/tech-house low end |
| **125–135** | **90** | **The main room — house/tech-house/bass-house** |
| **135–145** | **56** | **High-energy house, bassline, speed house** |
| 145–155 | 16 | Transition zone |
| 155–165 | 5 | Drumstep bridge |
| 165+ | 19 | Drum & bass proper (~170–175) |

146 of 232 tracks (63%) sit in the 125–145 corridor — one continuous mixable block with ±8% pitch range covering most of it. The 165+ cluster (19 tracks, e.g. Mason/Princess Superstar/1991 "Perfect (Exceeder) - 1991 Remix" 174.1, Fourward "Lose Control" 175.0, Great Dane "Drop Top" 178.9) is a separate dnb set, and the sub-100 group (15 tracks, e.g. Jon Casey & PEEKABOO "GO!" 72.0, Shöckface "METANÖIA" 72.1) reads as halftime/opening material. Slowest-to-fastest is not a gradient, it's **three rooms**: halftime, house, dnb. (Distribution: **HIGH**; the "three rooms" reading: **MED**.)

### 2.3 Keys & harmonic mixing

Spotify key distribution (key = pitch class of the track's tonal center; mode = major/minor):

| Key | N | Key | N |
|---|---|---|---|
| C# | 44 | A | 19 |
| D | 27 | G# | 18 |
| B | 25 | G | 16 |
| F# | 25 | C | 13 |
| A# | 23 | F | 9 |
| | | E | 9 |
| | | D# | 4 |

Mode: major 137, minor 95. (Confidence: **HIGH** on the counts.)

Two honest caveats, stated plainly: (1) Spotify's key/mode estimation is noisy on atonal bass music — treat individual assignments skeptically, the *distribution* is the signal; (2) the C#/F#/B/A# cluster (117 of 232, just over half) is the sharp-key zone where minor-key bass music lives, consistent with a dark-leaning crate (see valence below). Harmonic-mixing verdict (**MED**): the crate is mixable but not key-curated — no single key dominates enough to suggest Camelot-wheel planning, and the spread is wide enough that a DJ would be mixing on energy and phrasing, not on key compatibility. The 59/41 major/minor split is close enough to even that mode isn't a selection criterion either.

### 2.4 Feature distributions

| Feature | Mean | Median | Q1 | Q3 | Min | Max |
|---|---|---|---|---|---|---|
| Energy | 0.799 | 0.836 | 0.704 | 0.920 | 0.184 | 0.999 |
| Danceability | 0.683 | 0.701 | 0.604 | 0.780 | 0.271 | 0.978 |
| Valence | 0.355 | 0.322 | 0.175 | 0.502 | 0.029 | 0.935 |
| Loudness (dB) | −5.04 | −4.98 | −6.48 | −3.30 | −18.31 | +1.04 |
| Speechiness | 0.112 | 0.074 | 0.046 | 0.133 | 0.029 | 0.655 |
| Instrumentalness | 0.271 | 0.098 | 0.004 | 0.572 | 0.000 | 0.927 |
| Acousticness | 0.064 | 0.019 | 0.005 | 0.074 | 0.000 | 0.984 |
| Liveness | 0.210 | 0.128 | 0.100 | 0.278 | 0.037 | 0.942 |

(Confidence: **HIGH** — direct computation, n=232, no missing values.)

Readings, each labeled:
- **Energy is the load-bearing filter.** Median 0.836, Q1 0.704 — three-quarters of the crate sits above 0.70. This is a high-energy box with a floor, not a ceiling. (**HIGH**)
- **Valence leans dark.** Median 0.322 against a 0.5 neutral midpoint; Q3 is 0.502, meaning three-quarters of the crate sits at or below neutral brightness. He plays heavy, not happy. (**HIGH** on the numbers; "heavy not happy" is **MED** interpretation.)
- **Acousticness is ~zero** (median 0.019). Fully electronic, no organic instruments to speak of. (**HIGH**)
- **Danceability median 0.701** — high but not extreme; the crate includes halftime and dnb that score lower, which is correct for those genres. (**HIGH**)
- **Loudness median −4.98 dB** — modern mastered-to-the-ceiling dance music. Unremarkable for the genre, confirms these are release-quality masters, not demos. (**MED** — loudness also reflects Spotify's normalization-era mastering norms.)
- **Speechiness median 0.074** — the voice is mostly absent as a *foreground* element. Read strictly as voice-density per the lyric qualifier. (**HIGH** on numbers, framing per §1.)

### 2.5 The vocal-texture axis (speechiness × instrumentalness)

Segmentation is my construction — thresholds stated so it can be re-cut:

- **Pure instrumental** (instrumentalness > 0.50): **65 tracks (28.0%)**
- **Chop/texture** (speechiness > 0.10 or instrumentalness > 0.05, not in the above): **110 tracks (47.4%)** — voice present as chopped, sampled, or one-line material
- **Low-vocal** (below both texture thresholds): **48 tracks (20.7%)**
- **Vocal-forward** (speechiness > 0.33, instrumentalness ≤ 0.50): **9 tracks (3.9%)**

223 of 232 (96.1%) carry no foregrounded vocal performance. The single largest segment is chop/texture — the voice as *sound object*, exactly what the lyric qualifier predicts. (Segment counts: **MED** — threshold-dependent, but the qualitative picture is robust to reasonable re-cuts: move the lines and the instrumental+texture bloc stays ~75%.)

The 9 vocal-forward tracks, highest voice-density first (read as density only — content unknown):
1. BERNZIKIAL — "The Largest" (0.655)
2. Chee & Mr. Carmack — "Fight Club" (0.556)
3. Jon Casey & PEEKABOO — "GO!" (0.555)
4. oskar med k — "Spellbound" (0.428)
5. Edison Cole — "Decimate" (0.411)
6. HYPERLIGHT — "Warrior Spirit" (0.369)
7. GHENGAR, Izzy Vadim & Ghastly — "HOOLIGANS" (0.363)
8. Eric Leo 108, Ghostface Killah & Lone Wolf — "Cups Up" (0.348)
9. Eliminate — "BodyMove" (0.338 — sits right at the boundary, instrumentalness 0.471)

Note "Cups Up" features Ghostface Killah and LYNY & Big Narstie "Spill" sits at the low-energy extreme — rap features exist in the crate, but under the qualifier they're heard as *flow-timbre*, which is consistent with the JPEGMAFIA/Kanye/Elliott Smith fandom being about delivery. Whether any of these 9 are "songs with verses" vs. "vocal chops" is **unknowable from the features — flagged, not assumed**.

Highest instrumentalness (the purest DJ tools): Zeds Dead & Scrufizzer "One Three Nine" (0.927), RÜFÜS DU SOL "Always - Monkey Safari Remix" (0.920), Dr. Fresch & Marten Hørger "Take A Step Back" (0.920), Flux Pavilion & Habstrakt "Stay With The Tempo" (0.878), Ashez & Gallium "Headway" (0.872).

### 2.6 Recency

| Release year | Tracks |
|---|---|
| 2025 | 138 |
| 2024 | 26 |
| 2023 | 20 |
| 2022 | 13 |
| 2021 | 8 |
| 2020 | 7 |
| 2019 | 6 |
| 2016 | 5 |
| 2017 | 3 |
| 2018 | 2 |
| 2015 | 2 |
| 2012 | 1 |
| 2002 | 1 |

138 of 232 (59.5%) were released in 2025; 164 (70.7%) in 2024–2025. This is a *current* crate — a DJ buying this month's records, not a nostalgia box. The tail back to 2002 is a handful of anchors, not a second era. (Confidence: **HIGH**.)

Added-to-playlist dates confirm the build was recent and burst-like: 2025-10-31 (129 tracks), 2025-11-05 (32), 2025-11-21 (45), 2025-11-08 (7), 2025-11-11 (2), 2025-12-09 (16), 2025-12-22 (1). The crate was substantially assembled in a ~7-week window, Oct 31 – Dec 22, 2025. (**HIGH**.)

### 2.7 Labels, artists, explicit, duration

- **Labels:** 162 unique. Top: Insomniac Records 6, Atlantic Records UK 6, Night Bass 4, Monstercat 4, Experts Only 4, Deadbeats 4, Confession 4. No label exceeds 6/232 (2.6%) — **no label loyalty; scene-wide sampling**. (**HIGH**)
- **Artists:** 321 unique across 232 tracks. Top: Fred again.. 6, rSUN 5, NGHTMRE 4, Diplo 4, AC Slater 4, LYNY 4, Odd Mob 4; then Mau P, YDG, Ashez, Jaenga, AHEE, Levity, ERBES, Wreckno, INZO, Know Good, CHYL at 3. The most-represented artist is 2.6% of the crate — **a curator's breadth, not a fan's depth**. (**HIGH**)
- **Explicit:** 34 of 232 (14.7%) flagged. (**HIGH**)
- **Duration:** mean 196s (3:16), median 192s (3:12), range 95s–452s. Standard DJ-format lengths. (**HIGH**)
- **Popularity:** mean 43.4, median 43.0, range 0–89. Dead-center mid — **neither obscurity-mining nor chart-chasing**; he picks records that work, at whatever fame level they sit. (**HIGH** on numbers; the reading is **MED**.)

### 2.8 Outliers worth naming (lossless detail)

- **Dmitri Shostakovich — "Jazz Suite No. 2: VI. Waltz 2"** (Russian State Symphony Orchestra, Dmitry Yablonsky). Energy 0.184 (crate minimum), instrumentalness 0.902, acousticness 0.984 (crate maximum by far). A classical waltz in a bass-house crate. Either a set-closer joke, a genuine left-turn, or mis-tagged curiosity — the numbers can't say which. Flagged, not explained.
- **Frank Ocean — "Thinkin Bout You"** (energy 0.329). Same category of outlier: slow, sung, sincere — inside a box that otherwise never does any of those three things.
- **Great Dane — "Drop Top"**: tempo 178.9 (crate max) at energy 0.273 — halftime feel at dnb speed. The tempo/energy mismatch is the interesting bit.
- **Fred again.. & Blanco — "solo"**: valence 0.935, the crate's brightest track by a wide margin (next: Matroda & KLP "Bullshit" 0.83, bbno$ "it boy" 0.823, JENNIE "like JENNIE" 0.815).
- Darkest: Romain Garcia "Next To You" (0.029), Heyz "Fantasy" (0.035), Circadian "Hold That Sucker Down" (0.036).

---

## 3. Cross-File: What the Crate Selects FOR

### 3.1 Crate (232) vs. soundiiz dump (5321)

- **Exact (artist + title) overlap: 0 tracks.** (**HIGH** — normalized matching; see §0 for the normalizer.)
- **Title-only overlap: 17**, nearly all generic one-word titles ("shake", "lost", "goons", "freedom", "the don", "123") — these are probable false positives from title collisions, not shared records. Treat the true track overlap as ~zero. (**MED** — the false-positive judgment is mine; the 17 count is **HIGH**.)
- **Shared artists: 50 of the crate's 321 artists** (15.6%) appear somewhere in the 5321-line dump (Skrillex, Diplo, Ghastly, JAUZ, Anna Lunoe, ODESZA, Don Diablo, Great Dane, Mr. Carmack, Branchez…).
- The dump's own top artists tell the era story: `trap sounds` 162, Diplo 39, Yellow Claw 34, Major Lazer 29, Tropkillaz 23, Hucci 22, Lil Uzi Vert 21, Jack Ü 20, Keys N Krates 20, RL Grime 20, Skrillex 19, Troyboi 17 — **the 2014–2017 trap/festival era**, 3371 unique artists deep.

**What the crate selects for, relative to the big list:** recency and current scene over history. The dump is the archive of everything; the crate is *this season's* box — 59.5% released in 2025, built Oct–Dec 2025, zero track carryover from the historical dump. The selection function is: **current bass-music releases, high energy (median 0.836), DJ-functional (125–145 BPM core + dnb wing), voice-as-texture.** It does not select for favorites, for the trap era that dominates his archive, or for popularity (median 43). (**MED** — the deltas on genre/tempo/energy are measured on the crate side only; the dump has no audio features, so the comparison is structural: overlap counts + era signatures, not feature deltas. Stated plainly because the task asked for feature deltas and they are not computable here.)

### 3.2 Crate artists vs. Album_Masterlist artists

**Overlap: 0.** (**HIGH**.) The album inventory (see §5) is a separate universe — mid-century vinyl, zero shared artists with either the crate or the dump. These are not two views of one taste; they are two different collections that happen to live in one Drive.

### 3.3 Crate vs. FAVS_MASTERLIST music entries

**98 of 232 crate tracks (42.3%) appear in the FAVS music log** (normalized creator+title match). (**MED** — the FAVS creator field uses "Last, First" for some entries, handled with a comma-split fallback; a few matches may be missed, so 42% is a floor.) Pipeline reading: roughly two-fifths of the crate passed through his Spotify Liked Songs (the FAVS music log is 75%+ Liked imports — see §4) before being promoted into the DJ box. The crate is not identical to his listening; it's a *selection from* it, filtered for dancefloor function.

---

## 4. FAVS_MASTERLIST — the 2016-row favorites log

### 4.1 Category breakdown

| Category | Rows | % |
|---|---|---|
| Music | 1860 | 92.3% |
| Book | 120 | 6.0% |
| Art | 25 | 1.2% |
| Movie | 11 | 0.5% |

(**HIGH**.)

### 4.2 Origins — how the log was built

| Origin | Rows |
|---|---|
| SPOTIFY LIKED 2025-2026 | 1384 |
| MUSIC LIST (start-2024) | 463 |
| Both tags | 13 |
| BOOKS.csv | 120 |
| ART MATRIX | 25 |
| MOVIES FAVS.rtf | 11 |

The music log is a bulk import of his Spotify Liked Songs (1397 rows carry the `SPOTIFY LIKED 2025-2026` tag, 476 the `MUSIC LIST (start-2024)` tag; 13 carry both). Date Added is blank on the music rows — the log records *what*, not *when*, for music. (**HIGH**.)

### 4.3 Ratings — the telling asymmetry

Only **145 of 2016 rows carry a My Rating at all** — and **all 145 are Books (120) or Art (25)**. Zero of the 1860 music rows are rated. Distribution of the rated: 5★: 54 · 4★: 42 · 3★: 32 · 2★: 7 · 1★: 1 · 0★: 9. All 25 Art rows are 5/5.

Reading (**MED**): he rates *books* (where judgment is verbal and deliberate) and does not rate *music* (where judgment is embodied and immediate — consistent with the lyric qualifier: you don't assign stars to timbre, you either keep the record or you don't). The 5★ book shelf: Dan Carlin's *Death Throes of the Republic*, Jonathan Karl's *Betrayal*, *The Divider*, Whitney Webb's *One Nation Under Blackmail*, Plutarch's *Complete Works*, Annie Jacobsen's *Nuclear War*, Parenti's *Assassination of Julius Caesar*, *American Prometheus*, Goldsworthy's *Caesar* — the Roman-republic + Trump-era-journalism canon, exactly as the wiki has it.

### 4.4 Who repeats in the music log (top creators)

JPEGMAFIA 13, Kanye West 11, My Chemical Romance 9, New Found Glory 8, Elliott Smith 7, rSUN 7, LYNY 7, Taking Back Sunday 6, Fall Out Boy 6, Say Anything 6, Knock2 6, Effin 6. (**HIGH**.)

The two poles of his listening, side by side in one count: the emo/pop-punk canon (MCR, NFG, TBS, FOB, Say Anything) and the current bass scene (rSUN, LYNY, Knock2, Effin) — with JPEGMAFIA, Kanye, and Elliott Smith on top of both. Under the lyric qualifier, the through-line isn't lyrics-as-meaning; it's **voice-as-delivery**: Peggy's flow, Kanye's cadence, Elliott's whisper, Gerard Way's wail — all *vocal instruments* first.

---

## 5. Album_Masterlist — the 154-row vinyl inventory

Headline: **the Grading column is 100% empty (154/154 blank), and so is Potential Value.** Nothing here has been evaluated — this is an *inventory*, not a ranking. (**HIGH**.)

| Field | Finding |
|---|---|
| Year range | 1945–1983 (decades: 1940s 4, 1950s 10, 1960s 10, 1970s 6, 1980s 3 — counts from rows with parseable years) |
| Top genres | Stage & Screen / Musical 13, Pop / Vocal / Easy Listening 9, Easy Listening / Classical 8, Christmas Compilation 7, Jazz / Dixieland 6, Jazz / Big Band 5, Country / Pop 4, Soundtrack / Musical 4 |
| Speed column | 12" LP entries throughout |
| Sample artists | Al Martino, Andy Williams, Arthur Fiedler & Boston Pops, Benny Goodman |

Reading (**LOW** — inference, stated as such): this is a **vinyl collection catalog, mid-century easy listening / jazz / musicals / Christmas records, 1945–1983** — a profile that matches an inherited collection (the Fran-era household, plausibly) far better than a 37-year-old bass producer's listening. The empty grading column says it was cataloged, never judged. Zero artist overlap with the crate or the dump (§3.2) confirms it belongs to a different universe of the archive. Do not use this file as evidence about Dan's taste — use it as evidence about his *archiving*.

---

## 6. Synthesis — Falsifiable Claims About His Taste

Each claim is stated so it can be killed by data. Confidence per claim.

1. **The crate's primary filter is energy ≥ ~0.70, not genre.** Q1 energy is 0.704; genre tags sprawl across 30+ labels. If you removed the energy floor, the genre coherence would dissolve. (**HIGH**)
2. **The tempo selection is bimodal by design: a 125–145 house corridor (146 tracks) plus a 165+ dnb wing (19 tracks), with a 15-track halftime basement.** This is three DJ sets, not one playlist. (**HIGH** on the distribution; "by design" is **MED**.)
3. **He buys current.** 59.5% of the crate released in 2025, 70.7% in 2024–2025, assembled in a 7-week burst (Oct 31–Dec 22, 2025). The crate has no canon-building function — it's ammunition. (**HIGH**)
4. **Popularity is not a criterion.** Median Spotify popularity 43, full range 0–89. He neither mines obscurity nor chases charts; the record either works or it doesn't. (**MED** — popularity is a Spotify-side metric, not his; the claim is about the *absence* of a pattern.)
5. **The emotional register is dark.** Median valence 0.322; 75% of the crate at or below neutral. The brightest track (Fred again.. & Blanco "solo", 0.935) is the exception that proves the rule. (**HIGH** on numbers, **MED** on the gloss.)
6. **The voice is an instrument.** 96.1% of the crate has no foregrounded vocal performance; the largest segment (47.4%) is voice-as-texture (chops/samples). His lyricist fandom (JPEGMAFIA 13 log entries, Kanye 11, Elliott Smith 7) is about delivery/timbre, per the qualifier — the numbers cannot confirm *what* he hears in them, only that the crate and the fandom share a voice-first, meaning-absent structure. (**HIGH** on the crate segmentation; **MED** on the fandom reading.)
7. **No label loyalty, no artist loyalty.** 162 labels (max 6 tracks each), 321 artists (max 6 tracks each). He follows the *scene*, not imprints or names. (**HIGH**)
8. **The crate is selected FROM his listening, not identical TO it.** 42.3% of crate tracks appear in his Liked-songs log; 0% of crate tracks appear in his historical 5321-track dump. The pipeline is: hear → Like → promote to crate if dancefloor-functional. (**MED** — the 42% is a floor due to name-format noise.)
9. **The Album_Masterlist is not his taste.** It's an ungraded vinyl inventory from 1945–1983 with zero overlap with anything he actually plays. Treat as archival, not aesthetic, evidence. (**MED** — the "inherited" part is **LOW**; the "not his taste" part is **MED**, grounded in the zero overlap + empty grades.)
10. **The crate's strangest entries (Shostakovich waltz, Frank Ocean "Thinkin Bout You") are load-bearing precisely because they're unexplained.** A crate this tightly filtered doesn't admit accidents; whatever function those two serve (set-closer, private joke, genuine left turn) is part of the taste, not noise. (**LOW** — this is a provocation for Dan to confirm or kill.)

### Open threads (for Dan)
- Name the **three exceptions** (§1) — the analysis wants them.
- Confirm or kill claim 10: what are the Shostakovich and Frank Ocean tracks *for*?
- The feature deltas crate-vs-dump (§3.1) need audio features on the dump side to be real — a Spotify lookup pass on the 5321 would close that gap.
- The vocal-forward 9 (§2.5): are any of these "songs with verses" to your ear, or all texture? Your answer calibrates the whole axis.

---

## 7. v2 — The Exportify Haul (2026-09-11)

15 Exportify CSVs landed in `exportify/`: three Liked Songs snapshots, the 9 VIP crates, a 170-row 2025_MASTER_CRATE snapshot, MASTER_COLLECTED_CRATES, and Your_Top_Songs_2025_b. All Exportify files carry Spotify audio features, so the VIP crates are now measurable. (§1, the lyric qualifier, stands unchanged — everything below is read through it.)

### 7.1 The canonical liked list

The three Liked exports are *not* nested snapshots. Compared by Track URI:

| Export | Rows | Newest `Added At` |
|---|---|---|
| Liked_Songs.csv | 1,391 | 2026-06-02 |
| Liked_Songs_big.CSV | 1,403 | 2025-11-10 |
| SPOTIFY_LIKED_2025-2026_JUNE.csv | 1,415 | 2026-06-09 |

Liked_Songs.csv is a strict subset of the June export (0 unique rows). But Liked_Songs_big.CSV — the *oldest* export — holds **498 URIs found in neither of the other two**. Union: **1,913 unique URIs** (1,864 name+artist keys). No single export is complete; the canonical list is the union, written to `exportify/canonical_liked_songs.csv`. (**HIGH**.)

The 498 are a real behavioral event, not an export artifact. Their `Added At` stamps cluster on two days: **2025-09-29 (191 tracks)** and **2025-11-08 (286 tracks)** — two bulk-like sessions — and they are absent from both June 2026 exports, i.e. liked in bulk, then purged. Content is the old canon: Elliott Smith (8), Paramore (6), All Time Low (5), Lana Del Rey (4), Bright Eyes (4), R.A. The Rugged Man (4), Tyler, The Creator, Pixies, Hey Monday, Atmosphere — emo/pop-punk/indie/alt-rap, the pre-dance taste. The Sep 29 session coincides with the `LIKED SONGS 29SEP25` Spotify playlist — a snapshot taken the same day. (**HIGH** on counts/dates; "nostalgia bulk-like then purge" is **MED-HIGH** — the timestamps and the disappearance both point there.)

Through the lyric qualifier this is suggestive (**MED**): the one batch containing his stated lyricist fandoms (Elliott Smith, 8 tracks) was bulk-liked and then *removed* from the active liked set, while the bass canon stayed. The fandom lives in memory; the working library is timbre-first.

### 7.2 The `Added At` timeline — dated listening history

Monthly histogram of the 1,913 canonical likes (**HIGH** — direct from timestamps):

| Period | Likes |
|---|---|
| 2017–2023 (all) | 88 |
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

He liked ~88 tracks in *seven years*, then 1,417 in 2025. The November 2025 spike (628) is the crate-build month: of the crate tracks that appear in liked, **172 of 209 were liked in November 2025**, plus 27 in May 2026 (a refresh wave). The re-entry isn't just visible in the crate — it's visible in the Like button.

### 7.3 Venn overlaps (name+artist keys, **HIGH**)

- **Liked ∩ 232-crate: 209/229 = 91.3%.** This corrects v1 §6 claim 8 (42.3%, inferred via the FAVS log) — the direct measurement is 91%. The pipeline *hear → Like → promote to crate* is nearly total.
- **Liked ∩ 5,321-dump: 16.** The liked universe and the historical dump are disjoint worlds — the re-entry touched nothing from the archive.
- **Crate ∩ dump: 0** (reconfirmed with the canonical liked set in the mix).
- **MASTER_COLLECTED_CRATES** (489 rows, 408 keys) is the **merged super-crate**: it contains all 9 VIP crates nearly whole (51/51, 58/58, 36/42, 40/40, 39/41, 63/63, 86/87, 62/65, 23/25 by name+artist) plus 166/232 of the master crate — and **zero tracks outside the crate∪VIP universe**. Its non-crate content is the 2026 intake layer (202 of 307 non-crate rows are 2026 releases).
- **20 crate tracks were never liked** — and 19 of the 20 belong to the post-Nov-11 batch (§7.4). Workflow change, stated plainly: the crate started as a selection *from* liked; the late additions went **direct-to-crate**.

### 7.4 The 170-vs-232 diff — four waves, one swap, one cut

Date correction first: the 170-row file's newest `Added At` is **2025-11-11** — its *content* reflects the crate as of ~Nov 11, even if the export session itself ran later (a Dec 29, 2025 Exportify session is on record; the 170 was likely a filtered view). The 64 tracks in the 232 but not the 170 break down by `Added At`: **Nov 21 (45), Dec 9 (16), Dec 22 (1)**, plus 2 on Oct 31. The "7-week burst" refines to four waves: **Oct 31 (170) → Nov 21 (+45) → Dec 9 (+16) → Dec 22 (+1)**. (**HIGH**.)

The late 64 shifted the crate's profile (**HIGH** on medians): energy 0.808 vs 0.849, tempo 130 vs 133, valence 0.30 vs 0.331 — and the genre lean moved housier: bass house 17, tech house 12, **stutter house 10** (the Fred again.. cluster: "..FEISTY", "Beto's Horns", "Facilita", "solo") against the first 170's dubstep dominance (54). The crate's tail is where the stutter-house wing lives.

Two removals between snapshot and final (**HIGH**):
- **HOOLIGANS** (GHENGAR;Izzy Vadim, riddim/deathstep) — *replaced* by the Ghastly-featuring version already in the 64. A version swap, not a cut.
- **ELECTRIC LOVE** (AVELLO, melodic bass) — cut outright. The only melodic-bass removal in the whole diff; the genre barely exists in the crate otherwise.

### 7.5 The nine VIP crates — one-line sketches (all **HIGH** on the numbers)

| Crate | n | Sketch |
|---|---|---|
| FINDERS_FEE_VIP_CRATE | 52 | The riddim weapon — dubstep/riddim/deathstep, 34 from 2025, 140 BPM, energy 0.853. |
| MaxOut | 59 | Current-year peak-time — tech house/bass, 33 from 2026, 131 BPM, JPEGMAFIA x3. |
| ULTRA_DEMi | 42 | 2026 house heat — bass/tech house, 31 from 2026, 135 BPM. |
| GOODBYE_BPD_GIRLZ | 40 | The dnb crate with a joke title — dnb/liquid funk, 31 from 2026, highest energy of the set at 0.891. |
| FALL_2025_MEGAMIX | 41 | Fall 2025 bass digest — dubstep/riddim, 140 BPM, Charli xcx/Billie Eilish in the mix. |
| ALPHABET_BOYS_JAN26 | 63 | January 2026 incoming — dubstep/bass house/stutter house, 132 BPM. |
| flat_circle_mix | 87 | The big house session — bass/tech house, 50 from 2025, 130 BPM. |
| what_huh | 65 | 2026 bass miscellany — mixed bass genres, 50 from 2026, 138 BPM. |
| FATSO_FLATSO | 25 | The pure liquid dnb crate — dnb/liquid funk, 23 of 25 from 2026, 174 BPM, energy 0.924. |

The dnb wing of the taste has its own crates (GOODBYE_BPD_GIRLZ, FATSO_FLATSO — both liquid-funk heavy); everything else works the 130–140 corridor. Same three rooms as §6 claim 2, now with dedicated boxes.

### 7.6 Spotify's yearlist vs his crate

Your_Top_Songs_2025_b (Spotify's own 100, **HIGH**): **45 overlap the crate, 89 overlap liked**. His crate is not his most-played — it's a DJ-functional selection *from* what he played. Reading (**MED**): the crate is the instrument, the yearlist is the listening; he doesn't confuse them.

### 7.7 Corrections to v1 (supersede, don't delete)

1. §6 claim 8: **42.3% → 91.3%** (direct URI/key measurement against the canonical liked union). The hear → Like → promote pipeline is nearly total, not two-fifths.
2. §6 claim 3: the "7-week burst (Oct 31–Dec 22)" refines to **four dated waves**: Oct 31 (170) → Nov 21 (+45) → Dec 9 (+16) → Dec 22 (+1).
3. The 170-row file's *content* reflects the crate as of **~Nov 11, 2025** (newest `Added At` 2025-11-11) — the Dec 29 Exportify session exported a filtered view of it.
4. New deliverable: `exportify/canonical_liked_songs.csv` — 1,913 rows, the union of all three Liked exports, the list to use going forward.
