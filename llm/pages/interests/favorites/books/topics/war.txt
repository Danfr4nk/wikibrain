---
domain: interests
page_type: synthesis
status: active
knowledge: mixed
date_created: 2026-06-22
date_modified: 2026-09-17
sources: ["raw/self/favorites/FAVS MASTERLIST.csv — ⚠ Source reference unresolved — original target no longer exists in current corpus.", "raw/old-wiki-export-2026-09-04/whole.txt"]
synthesizes:
  - wiki/interests/favorites/books
  - wiki/self/context-core
  - wiki/interests/roman-republic
  - wiki/mind/synthesis/the-cato-seat
  - wiki/mind/concepts/non-fiction-only
  - wiki/mind/profile/intp
related: ["wiki/interests/favorites/books", "wiki/self/context-core", "wiki/interests/roman-republic", "wiki/interests/favorites/books/want-to-read", "wiki/mind/synthesis/closing-the-set", "wiki/mind/synthesis/the-cato-seat", "wiki/mind/concepts/non-fiction-only"]
tags: [taste, politics, personality-profile, forensic-analysis]
---

# War (Book Favorites)

Eighteen of the 120 books on Dan's read shelf carry the tag `war` — fifteen
per cent of the collection, tied exactly with `jan-6` and sitting two behind
`ancient-history` in the tag table on
[[wiki/interests/favorites/books]]. That number is the first thing this page
has ever said, because from 2026-06-22 until today the page carried no count
at all: a one-line Reflection ("Military and conflict history as part of
broader analytical framework"), `status: archived`, and nothing checkable.
The count was not missing from the wiki. It was one directory up the whole
time.

This page now says what the held record actually supports about the war
shelf, prints every war-tagged title the record names, states how many it
cannot name, and reads the tag against the rest of the corpus. The short
version of the finding is that **`war` is not a subject on this shelf. It is
a modifier** — a tag that never appears alone, always rides alongside
`history` and `non-fiction`, and attaches to books about institutions coming
apart rather than to books about fighting.

## Where the count comes from, and why the page never had it

The six topic pages under [[wiki/interests/favorites/books]] were generated in
one pass on 2026-06-22 and four of them carried a `## Count` section. Two did
not.

| Topic page | Count on the page | Count in the parent's tag table | Body words at `origin/main` |
| :--- | :--- | ---: | ---: |
| [[wiki/interests/favorites/books/topics/politics]] | "79 tagged books." | 79 | 45 words |
| [[wiki/interests/favorites/books/topics/history]] | "69 tagged books." | 69 | 31 words |
| [[wiki/interests/favorites/books/topics/trump]] | "40+ tagged around trump / president / election." | 40 | 33 words |
| [[wiki/interests/favorites/books/topics/journalism]] | "31 tagged." | 31 | 22 words |
| [[wiki/interests/favorites/books/topics/ancient-history]] | *none* | 20 | 23 words |
| **War (this page)** | *none* | **18** | **16 words** |

Body words are counted the way `bin/wiki-minimums` counts them — whitespace
tokens after the frontmatter fence — so every figure in the last column is
re-derivable from the files at `origin/main`. Sixteen words made this the
shortest article in the corpus.

`kb/data/0392-war-books-topic-counts-absent.md` filed the defect on 2026-09-09
in exactly those terms: the page "asserts nothing falsifiable — which also
means nothing on it can be independently confirmed," and its named source,
`raw/self/favorites/FAVS MASTERLIST.csv`, "is not held in this repository."
Both halves are still true. What the node did not say is that the count was
recoverable without the CSV, because the parent page's tag table carries it,
and the sibling case proves the table is a reliable place to read it from:
`kb/data/0346-journalism-topic-31-tagged.md` checked the journalism page's
"31 tagged" against the same table and the old-wiki export and found them
identical in three places.

So the 18 is a **table-to-page figure, not a primary-source figure** — the
same tier of evidence the journalism count sits on, no better. If the CSV
ever returns, 18 is the first number to re-derive.

## The complete log: every war-tagged book the record names

M3 requires the full log rather than a summary, and here the full log is
embarrassing in a way worth stating plainly: **the held record names four of
the eighteen.** All four come from the "Detailed Books Snapshot" on
[[wiki/interests/favorites/books]], which reproduces eleven rows of
`raw/self/dox-md/FAVORITES DATA (2).md` with their complete Goodreads shelf
strings. Those shelf strings are the only place in the entire wiki where the
`war` tag is visible attached to a specific title.

| Title | Author | Rating | Date read | Complete shelf string |
| :--- | :--- | :--- | :--- | :--- |
| Rubicon: The Last Years of the Roman Republic | Holland, Tom | ★★★★★ | Apr 07, 2024 | ancient-history, caesar, history, non-fiction, politics, roman-republic, top-shelf, **war** |
| The Rise and Fall of the Third Reich | Shirer, William L. | ★★★★★ | Jan 26, 2023 | gonzo, history, journalism, massive, non-fiction, politics, source, top-shelf, **war** |
| American Prometheus: The Triumph and Tragedy of J. Robert Oppenheimer | Bird, Kai | ★★★★★ | Jul 14, 2023 | american-history, biography, great-man-theory, history, massive, non-fiction, science, source, top-shelf, **war** |
| Lives of the Noble Romans | Plutarch | ★★★☆☆ | Jan 2024 | ancient-history, history, non-fiction, politics, roman-republic, stories, **war** |

**Fourteen war-tagged titles are unnamed anywhere in the corpus.** That is not
a gap in this page's research; it is a property of the archive. The tag counts
survived the old wiki's pipeline as aggregates and the per-title shelf strings
did not, except for the eleven rows somebody chose to transcribe.

The seven snapshot rows that do **not** carry `war` are as informative as the
four that do, because they rule out the lazy reading that anything violent or
ancient gets the tag:

| Title | Author | Rating | War-tagged? |
| :--- | :--- | :--- | :--- |
| Caesar: Life of a Colossus | Goldsworthy, Adrian | ★★★★★ | No |
| Cicero: The Life and Times of Rome's Greatest Politician | Everitt, Anthony | ★★★★☆ | No |
| The Assassination of Julius Caesar | Parenti, Michael | ★★★★☆ | No |
| Manhunt: The 12-Day Chase for Lincoln's Killer | Swanson, James L. | ★★★★☆ | No |
| Family of Secrets: The Bush Dynasty | Baker, Russ | ★★☆☆☆ | No |
| Personality Types | Riso, Don Richard | ★★★★☆ | No |
| Game Change: Obama and the Clintons | Heilemann, John | ★★★★☆ | No |

A biography of the most consequential Roman general of the late Republic, by a
military historian, does not carry `war`. A people's history of that general's
assassination does not carry it. A twelve-day manhunt through the closing days
of the American Civil War does not carry it. Whatever rule Dan was applying
when he shelved these, it was not "does this book contain fighting."

**Caution on the sample.** Four of eleven snapshot rows carry `war` — thirty-six
per cent — against fifteen per cent across the whole shelf. The snapshot is
described on the parent page as a "targeted extract of high-signal books," so
it is a deliberately non-random sample and nothing about the shelf's
composition should be extrapolated from that ratio.

## What the tag co-occurs with

Run the four complete shelf strings against each other and the pattern is
immediate.

| Tag | Appears with `war` in | Note |
| :--- | ---: | :--- |
| `history` | 4 of 4 | universal |
| `non-fiction` | 4 of 4 | universal |
| `politics` | 3 of 4 | absent only on American Prometheus |
| `top-shelf` | 3 of 4 | absent only on Plutarch |
| `ancient-history` | 2 of 4 | Rubicon, Plutarch |
| `roman-republic` | 2 of 4 | Rubicon, Plutarch |
| `source` | 2 of 4 | Third Reich, American Prometheus |
| `massive` | 2 of 4 | Third Reich, American Prometheus |
| `caesar` `gonzo` `journalism` `american-history` `biography` `great-man-theory` `science` `stories` | 1 of 4 each | — |

**`war` never appears alone, and it never appears as the lead term.** In every
one of the four cases it sits at the end of a string whose load-bearing tags
are `history` and `non-fiction`. It behaves the way a secondary facet behaves
in a shelving system: it says *this book has a war in it* rather than *this is
a book about war* — a facet, not a subject.

The `source` co-occurrence is the sharpest detail in the table. `source`
does not appear in the parent's tag table at all — that table lists every tag
down to `philosophy` at 12 — so it is rarer than any tag named there, and in
this sample it lands on exactly the two war-tagged books that are not about
Rome. The Third Reich and American Prometheus are the two titles he shelved as
*evidence* rather than as reading, which is the same operation
[[wiki/mind/concepts/forensic-method]] documents everywhere else in the corpus.
With a sample of four, that is a lead, not a finding.

## Where the other fourteen probably sit, and why this page will not say

The arithmetic constrains the answer without settling it.
[[wiki/mind/synthesis/closing-the-set]] establishes that 40 of the 120 books
are tagged `trump` or `jan-6` across thirty authors, that 20 are tagged
`roman-republic` / `ancient-history` / `caesar` across fourteen, and that the
two sets do not overlap — half the shelf, two subjects, forty-four hands.

Two of the four named war books are inside the Rome set. Zero are inside the
Trump set, and it is hard to see how a book about the 2020 election would
acquire a `war` tag. That leaves the remaining fourteen distributed across
some mixture of the Rome twenty and the sixty books that are neither Rome nor
Trump — and nothing in the held record says which. Titles that are named
elsewhere in the wiki and are plausible carriers, listed as **candidates with
their tag status unknown**:

| Title | Author | Where the wiki names it | Rating |
| :--- | :--- | :--- | :--- |
| Blueprint for Armageddon (Hardcore History) | Carlin, Dan | [[wiki/interests/favorites/books/authors/dan-carlin]] — WWI, Western Front | not recorded |
| Wrath of the Khans (Hardcore History) | Carlin, Dan | [[wiki/interests/favorites/books/authors/dan-carlin]] — Mongol conquests | not recorded |
| Death Throes of the Republic (Hardcore History #34–39) | Carlin, Dan | [[wiki/interests/roman-republic]] | ★★★★★, Jan 2024 |
| Nuclear War: A Scenario | Jacobsen, Annie | [[wiki/interests/favorites/books]], [[wiki/mind/synthesis/the-cato-seat]] | ★★★★★ |
| The Afghanistan Papers: A Secret History of the War | *author not recorded in the wiki* | [[wiki/mind/synthesis/the-cato-seat]] | 5-star set |
| In the Name of Rome | Goldsworthy, Adrian | [[wiki/interests/roman-republic]] | ★★★★☆, Jun 2024 |
| Philip and Alexander | Goldsworthy, Adrian | [[wiki/interests/roman-republic]] | ★★★★☆, Jul 30 2024 |
| Augustus: First Emperor of Rome | Goldsworthy, Adrian | [[wiki/interests/roman-republic]] | ★★★★☆, Jun 22 2024 |
| Complete Works of Plutarch | Plutarch | [[wiki/interests/roman-republic]] | ★★★★★, Jan 2024 |

The candidate list is offered as a research target and nothing more. **No tag
on it is attested.** Anyone closing this gap needs `FAVS MASTERLIST.csv` and
nothing else will do it; every other route is guessing from titles, which is
precisely the operation that put a war tag on Rubicon and withheld it from
*Caesar: Life of a Colossus*, which is a military historian's biography of a
general.

One grouping in the corpus does come close to naming a war shelf directly.
[[wiki/timeline/master-timeline]] carries a January 2023 entry reading
"War/history shelf: Carlin (5★), Annie Jacobsen's *Nuclear War* (5★),
Shirer's *Rise and Fall of the Third Reich* (5★, Jan 2023)." That is the
wiki's own clustering rather than Dan's tag, and only the Shirer is confirmed
`war`-tagged — but it is the closest thing the record holds to a curated
statement of what the war reading is.

## The want-to-read shelf, which is the better evidence

The 149-title "want to read" list at
[[wiki/interests/favorites/books/want-to-read]] carries no Dan-assigned tags
at all — it records Goodreads community averages, not his shelves — so nothing
below is a `war` tag. It is the better evidence anyway, for the reason
[[wiki/mind/synthesis/the-cato-seat]] gives: nothing on the queue has been
filtered by whether he enjoyed it, so it shows the appetite before the verdict.

Every title on that queue whose subject is a war, a campaign, or a state's
organised violence, complete. **The classification below is this page's, read
off the titles as the queue prints them — it is not Dan's and it is
contestable**; the borderline calls are named under Limits.

| Title | Author | Community rating |
| :--- | :--- | ---: |
| The Guns of August | Tuchman, Barbara W. | 4.18 |
| Stalingrad: The Fateful Siege, 1942–1943 | Beevor, Antony | 4.32 |
| Endgame at Stalingrad (Vol. 3) | Glantz, David M. | 4.52 |
| The Punic Wars | Goldsworthy, Adrian | 4.20 |
| Caesar's Civil War | Goldsworthy, Adrian | 4.03 |
| Hannibal: Rome's Greatest Enemy | Freeman, Philip | 4.21 |
| Carthage Must Be Destroyed | Miles, Richard | 3.95 |
| The War That Made the Roman Empire | Strauss, Barry S. | 4.05 |
| Alexander the Great | Freeman, Philip | 4.32 |
| Napoleon: A Life | Roberts, Andrew | 4.24 |
| Napoleon: A Life Told in Gardens and Shadows | Scurr, Ruth | 3.72 |
| Vienna 1814 | King, David | 3.99 |
| The Trigger: Hunting the Assassin Who Brought the World to War | Butcher, Tim | 3.81 |
| A People's Tragedy: The Russian Revolution, 1891–1924 | Figes, Orlando | 4.37 |
| The Gulag Archipelago 1918–1956 | Solzhenitsyn, Aleksandr | 4.33 |
| Operation Paperclip | Jacobsen, Annie | 4.14 |
| The Achilles Trap: Saddam Hussein, the CIA | Coll, Steve | 4.36 |
| The Jakarta Method | Bevins, Vincent | 4.61 |
| America's Good Terrorist: John Brown and the Harpers Ferry Raid | Poland, Charles P Jr. | 3.51 |
| 1776 | McCullough, David | 4.10 |
| The French Revolution: From Enlightenment to Tyranny | Davidson, Ian | 3.59 |
| Fall of Civilizations | Cooper, Paul M.M. | 4.37 |

Twenty-two of 149, and the shape of them is the argument. Two of the
twenty-two are the same battle. Six are Rome and its neighbours — the Punic
Wars, Carthage, Hannibal, Alexander, Caesar's civil war, the war that made the
empire — which is the Rome shelf extending outward rather than a new interest.
Two are Napoleon. *The Trigger* announces the recurring move in its own
subtitle — *Hunting the Assassin Who Brought the World to War* — a book about
the man who started it rather than about the thing started, and *The Jakarta
Method*, *The Achilles Trap* and *Operation Paperclip* are books about what
states did under cover of war rather than books about war.

**The 149-title queue contains no title naming Vietnam or Korea** — checked by
search across the full list — and **not one of the twenty-two is a first-person
account by a participant.** That is the same
negative [[wiki/mind/concepts/non-fiction-only]] found across every other
medium: the category is approached as an institutional record, never as an
experience.

## War as modality: audio, and the one exception

[[wiki/interests/favorites/books/authors/dan-carlin]] is the exception that
proves the shape, and it is worth dwelling on because Carlin is the shelf's
only sustained engagement with war as *felt* rather than war as *filed*, and
because it is where the war shelf meets the mechanism by which Dan reads. The
page describes *Blueprint for Armageddon* as a book that "doesn't explain the
strategic logic of trench warfare so much as it tries to make you understand
what it felt like to be in it," and *Wrath of the Khans* as doing the same with
Mongol conquest — "not the geopolitics, but the sheer staggering fact."

That is also the one place where the war reading connects to the consumption
mechanism the rest of the corpus documents.
[[wiki/mind/concepts/non-fiction-only]] records the modality as audio from
Dan's own messages — *"I'm convinced that Scribd is far superior to Audible if
you listen to a lot of audiobooks"* and *"Politics has been so boring that
I've plowed through a cumulative 92 hours of history audiobooks over the last
2 months."* The Carlin titles are described on the author page as "the
physical artifact of something first encountered as audio," and
[[wiki/interests/roman-republic]] has Dan saying so directly in April 2024:
Carlin "lays out the amazing scope of [Pompey's] military achievements in a
way I hadn't understood," and does it while "presenting the proto-Marxian
narrative that underlies the whole era in a way that's both fair and
fascinating."

Both halves of that sentence are the war shelf in miniature. He credits the
military history with fixing a gap in his understanding of a *political*
alignment — why Pompey ended up leading the anti-Caesarian faction — and in the
next breath credits the same source with the class analysis running underneath.
The battles are load-bearing for the politics. They are not the point.

The same April 2024 window has him rating the entire modern syllabus below an
animated YouTube channel: *"The books are wonderful, but none of them has come
close to compiling the story in a way that has pulled me in like videos with
squares."* Whatever the war shelf is, it is not a shelf assembled by somebody
who prefers the book form.

## War in the life, as against war on the shelf

The record holds very little, and what it holds is worth stating precisely so
nobody fills the space with inference.

**Dan has no military service in the record, and no page claims otherwise.**
The one documented family connection is his great-grandfather: [[wiki/self/ancestry]]
records Morley Jay Frank, born Brownsville, Pennsylvania, 20 August 1927, as
having "served in the military (enlisted 24 October 1945 in Pittsburgh)" —
that is, at eighteen, weeks after the Japanese surrender. [[wiki/timeline/master-timeline]]
separately carries a 1942 Fayette County WWII draft registration. Neither the
service nor the registration is discussed anywhere in the message corpus, in
the favorites record, or on any page that reasons about the reading. **The
record does not show Dan ever connecting the war shelf to his own family's
war.**

What the record does show is a dated refusal to treat military service as an
epistemic credential. [[wiki/self/twitter/2013]] carries the line — *"Being a
vet does NOT make your racism ok nor does it make you automatically correct"* —
and files it alongside his handling of the Boston Marathon bombing as evidence
for [[wiki/mind/synthesis/vertical-authority-skepticism]]. That is the war
shelf's operative ethic stated eleven years before most of it was read: the
soldier's account is testimony like any other and gets audited like any other.

And the history gets used as a working instrument rather than kept as a
subject. Within three weeks of the 2024 Rome binge,
[[wiki/interests/roman-republic]] records him reading the UCLA encampment as
"the Fabian strategy" and "Caesarian tactics" (1 May 2024) and joking about a
proscription list in the post-debate wreckage (28 June 2024). Military history
enters the corpus as vocabulary for domestic politics. It does not enter as
military history.

## Totality: what the war tag is doing in the larger model

Set the eighteen against the corpus's standing readings and the tag stops being
a genre label.

**Against [[wiki/mind/synthesis/the-cato-seat]].** That page's rule is that
every object Dan curates for identification occupies one seat — accurate,
early, unable to intervene — and it names three of the four confirmed war books
in its own 5-star set: the Third Reich, *Nuclear War: A Scenario*, *The
Afghanistan Papers*, and American Prometheus, "the physicist who was right,
built the thing, and was destroyed by the state he built it for." Rubicon is
the fall of a republic. Plutarch is the same fall through its participants.
**Every confirmed war-tagged title on this shelf is a book about a system
failing, with the war as the mechanism of failure rather than the subject.**
That is why `war` reads as a modifier: the subject is always the institution.

**Against [[wiki/mind/synthesis/closing-the-set]].** War does not behave like a
closed set. The Rome shelf closes at Augustus because the Republic does; the
O&A archive closes because the broadcasts run out. Eighteen war-tagged books
across at least four separate conflicts, with a twenty-two-title unread queue
still open on six more, has no findable edge — which is consistent with the
tag being a facet of two closed sets rather than a set of its own. If war were
a Dan subject in the sense that Rome and the Trump presidency are subjects, the
corpus would show a syllabus read back to back and stopping. It shows no such
thing.

**Against [[wiki/mind/concepts/non-fiction-only]].** The shelf's creator Gini
is 0.166, with 85 of 98 authors appearing exactly once — the shape that page
calls "subject-level monomania through many witnesses." The war titles obey it:
four confirmed books, four different authors, no overlap.

**Against [[wiki/interests/favorites/books/topics/ancient-history]] and
[[wiki/interests/roman-republic]].** Two of the four confirmed war books are
Rome books, and the boundary between this page and those is worth stating so
the three do not duplicate each other. The Rome pages own the 2024 binge, its
dating, its trigger and its hard stop at Augustus. This page owns the tag, its
distribution, and the negative space — what a war shelf that contains no combat
writing implies. Where they touch, the Rome pages are the narrative and this
one is the shelving.

**Against [[wiki/interests/favorites/books/topics/politics]],
[[wiki/interests/favorites/books/topics/trump]] and
[[wiki/interests/favorites/books/topics/journalism]].** Those three cover the
40-book Trump/Jan-6 mass, which carries no confirmed war tag and almost
certainly cannot. The war shelf is the part of the collection that is *not*
the Trump presidency — which makes it, with ancient history, the long-view half
of a two-half shelf.

## Complete log: this page's own history

| Date | Event |
| :--- | :--- |
| 2026-06-22 | Page created in the topic-page generation pass; one-line Reflection, `status: archived`, no count |
| 2026-07-11 | [[wiki/interests/favorites/books/authors/dan-carlin]] rewritten and links here as a destination; this page is not updated |
| 2026-08-19 | Parent page's CONTRADICTION block retires the "98 authors is range" reading; tag table unaffected |
| 2026-09-04 | Old-wiki export snapshots the page unchanged; text-identical in both surviving copies |
| 2026-09-09 | `kb/data/0392-war-books-topic-counts-absent.md` files the defect: no counts, unheld source, nothing falsifiable |
| 2026-09-16 | Sub-floor backlog measures the page at 16 body words — the shortest article in the corpus |
| 2026-09-17 | This rewrite. Count recovered from the parent tag table; four titles logged; `status` moved `archived` → `active` |

## Limits

- **The primary source is not held.** `raw/self/favorites/FAVS MASTERLIST.csv`
  is named by this page, by the parent, and by fourteen other favorites pages,
  and it exists nowhere in this repository. Every count here traces to the old
  wiki's pipeline, not to a re-derivation. `kb/data/0438-favorites-masterlist-totals-2016-entries.md`
  states the governing rule: these are snapshot counts of an export, not living
  totals.
- **Fourteen of eighteen titles are unnamed.** The complete log above is
  complete with respect to the record, not with respect to the shelf. Any
  reading of "the war shelf" that depends on the unnamed fourteen is a reading
  of four books wearing an eighteen-book label.
- **`war` is Dan's tag and has no stated definition.** Goodreads shelves are
  self-assigned, non-exclusive, and applied inconsistently by every user who
  has ever kept them. The co-occurrence table above describes four applications
  of the tag, not a rule he was following.
- **The ratings trap.** [[wiki/mind/synthesis/taste-as-filter-stack]] reports
  "145 rated rows" with a distribution beginning "5★ 54." That is books *and*
  art combined — 120 + 25 — and 54 is 29 five-star books plus 25 artworks all
  rated 5. It is not a book figure and must not be quoted as one.
- **One rating on a war-tagged title is disputed.** The parent page's snapshot
  rates Plutarch's *Lives of the Noble Romans* three stars;
  [[wiki/interests/roman-republic]] rates both Plutarch titles five.
  [[wiki/mind/concepts/non-fiction-only]] records the discrepancy and declines
  to adjudicate. This page does the same, and notes only that the disputed
  title is one of the four confirmed war books.
- **Two snapshots, not one history.** The 120-book masterlist and the 2025
  Goodreads refresh (103 rows, 63 marked read) are different exports taken at
  different times. The refresh names no war titles. Nothing here should be read
  as a running total.
- **No media.** No photograph, screenshot or scan in `media/registry.json`
  depicts this shelf, and none is embedded. The books are known only as rows.
- **The queue table's classification is contestable.** *The Gulag
  Archipelago*, *Fall of Civilizations*, *Vienna 1814*, *The Jakarta Method*
  and *Napoleon: A Life Told in Gardens and Shadows* are included on a reading
  of state violence, aftermath and campaign-life rather than of war proper, and
  a stricter classifier would return seventeen rather than twenty-two. The
  argument about what is absent does not depend on which count is used.
- **Inferred versus documented.** Documented: the 18 count, the four titles and
  their shelf strings, the co-occurrence table, the queue's 22 war titles, the
  family enlistment, the 2013 veteran tweet, the Carlin quotations. Inferred:
  that `war` functions as a modifier rather than a subject, that the tag
  clusters on institutional-failure books, and that the absence of combat
  writing is structural rather than incidental. The candidate table is neither
  — it is a research target, explicitly unattested.

## Sources

- `raw/self/favorites/FAVS MASTERLIST.csv` — named by the page since 2026-06-22;
  **not held in this repository**. Origin of the 18.
- `raw/self/dox-md/FAVORITES DATA (2).md` — the eleven-row detailed snapshot,
  reproduced on [[wiki/interests/favorites/books]]; the only surviving per-title
  shelf strings. Not held.
- `raw/self/dox-md/DAN_COMP.md` — the transcription of both Goodreads shelves;
  origin of the 149-title queue at [[wiki/interests/favorites/books/want-to-read]].
  Not held.
- `raw/old-wiki-export-2026-09-04/whole.txt` — held. Carries the tag table, the
  pre-rewrite page text and the sibling counts.
- `kb/data/0392-war-books-topic-counts-absent.md` — the defect filing this
  rewrite answers.
- `kb/data/0346-journalism-topic-31-tagged.md` — the sibling check establishing
  that the tag table is a reliable place to read a topic count from.
- `kb/data/0436-book-read-corpus-scale-120-books-98-authors.md` — shelf scale
  and the verified arithmetic.
- `kb/data/0438-favorites-masterlist-totals-2016-entries.md` — masterlist
  totals and the snapshot-not-living-total rule.
- `kb/data/0389-dan-carlin-favorites-masterlist-absent.md` — the Carlin
  two-book claim and its unheld provenance.
