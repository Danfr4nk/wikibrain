+++
id            = "dat:0196-art-and-movies-favorites"
layer         = 1
type          = "datum"
title         = "Art favorites: 25 works, one per creator, all rated 5; movies: 11 unrated titles"
claim         = "The favorites masterlist carries **25 art works, one per creator, all rated 5**, and **11 movies, unrated with minimal metadata**. The page's internal synthesis holds that twenty-four of the twenty-five art works carry at least one of six self-applied tags (wound, observer, collapse, glitch, rupture, fortress), with Edward Hopper's *New York Movie* (tags: dissociation, usherette, inside-outside) as the single exception. The movie list, in full: Parasite, The Prestige, Pulp Fiction, The Witch, The Shining, The King of Comedy, Taxi Driver, There Will Be Blood, The Graduate, Eyes Wide Shut, Kill Bill. The page's stated source is `raw/self/favorites/FAVS MASTERLIST.csv`, which is not held in this repository's raw/ tree; the counts and list are relayed through the prior wiki."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 8792 (75 lines). Cross-checked against raw/old-wiki-export-2026-09-04/whole.txt lines 2539-2613: the page matches the corpus page verbatim — the 'Minor categories in the masterlist (Art 25, Movies 11)' framing, the 24-of-25 tag claim with the Hopper exception, the five sample art rows, and the full 11-title movie list all identical. The 81st-percentile artistic-interests claim points at wiki/self/context-core and was not independently checked; it is the prior wiki's analytic, not a datum. The underlying FAVS MASTERLIST.csv was not found under raw/ or elsewhere in this repo."
importance    = 2
tags          = ["favorites", "old-wiki", "attribution"]
created       = "2026-09-09"
+++

## What the check confirms

Two independent retrievals (the corpus page and the old wiki's copy) agree on
every count and on the full movie list. The sample art rows (Piranesi's
*Carceri* Plate VII, David's *Oath of the Horatii*, Boullée's *Cenotaph for
Newton*, Gérôme's *Duel After the Masquerade*, de Chirico's *Melancholy and
Mystery of a Street*) are identical in both.

## What it does not confirm

The chain stops at the prior wiki. The masterlist CSV itself is not held
here, so the 25/11 counts, the all-rated-5 claim, and the tag distribution
were not checked against the primary document. The six-tag synthesis is the
prior wiki's own read of its data, not a re-derivation.

## Open item

If FAVS MASTERLIST.csv surfaces, re-check the counts, the per-creator
uniqueness, and the tag distribution against it; raise confidence or file the
discrepancy.
