+++
id            = "dat:0067-modal-self-imperative-other-asymmetry"
layer         = 1
type          = "datum"
title         = "The medical-advice asymmetry (modal about himself, imperative about others) only partly verifies against the authoritative corpus"
claim         = "wiki/health/the-configured-body.md tabulates an asymmetry: every self-directed medical sentence is modal (\"I know you rly don't want me to go to a doctor but I'm telling you I should go\" 2017-09-28; \"i should get into a doctor for that before caddie season ends\" 2017-10-08; \"I might need to go see a doctor if my voice doesn't start coming back\" 2018-07-13; \"I'm probably going to need to go to the doctor\" 2018-07-15) while every other-directed one is imperative (\"I kept telling her to make an appointment with a doctor\" 2017-06-24; \"I wish she would have just gone to see her doctor months ago when I told her to\" 2017-06-25; \"if you are legitimately unable to not SHIT YOUR PANTS then go to a fucking doctor\" 2018-10-11; \"I just ran out of the apartment to get him to a doctor asap\" 2023-10-29, the cat). Checked against the authoritative message corpus (corpus/messages.csv, 203,626 rows, sha256-verified 2026-09-09): the self-directed lines verify — \"I'm telling you I should go\" (2017-09-28 19:37:41), \"but i should get into a doctor for that before caddie season ends\" (2017-10-09), \"Like I might need to go see a doctor if my voice doesn't start coming back by tomorrow\" (2018-07-14) — while none of the four other-directed imperatives appears in the corpus under the page's phrasing, nor under normalized variants (\"appointment with a doctor\", \"get him to a doctor\", \"wish she would have\"). The asymmetry as tabulated is therefore a reading of the superseded dump the census ran on, and its other-directed half does not survive contact with the authoritative export."
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:imessage-corpus-2026",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:wikitest-rebuild-session-2026-09-09"
confidence    = "moderate"
extraction    = "The table was read from wiki/health/the-configured-body.md's asymmetry section (corpus__3.txt line ~7950). Verification run 2026-09-09 by fixed-string grep over corpus/messages.csv, both raw and with curly-quote/case normalization attempted. The 2018-07-13 quote appears dated 2018-07-14 in the corpus (one-day offset; the page's date may follow a different dump). Absence is reported as never_observed, not known_not_to_occur — the authoritative corpus has coverage holes (2022 and 2026 missing), though all four other-directed quotes fall in 2017–2023, inside nominally covered range."
importance    = 4
tags          = ["health", "old-wiki", "corpus", "verification", "contradiction"]
created       = "2026-09-09"
+++

## What survives

The self-directed half of the asymmetry is real first-party text: four
distinct conditional formulations across 2017–2018, none of them followed
by a documented visit. That is enough to carry the page's narrower claim
— he talks about seeing a doctor in the conditional, repeatedly, and does
not go — without the other-directed half.

## What does not

The imperative half — the contrast the page uses to name the mechanism
("same speaker, same years, same subject matter") — could not be located
in the authoritative corpus. Three possibilities, none excluded: the lines
come from the superseded dump the census ran on (see
[`dat:0028`](0028-prescriber-quotes-partly-unverifiable.md) for the same
failure mode on the prescriber quotes), the phrasing differs beyond my
normalization, or they sit in a coverage hole. The 2023-10-29 cat line is
the most surprising miss given the corpus nominally covers 2023.

## Consequence

The page's genuine extension of the-deferred-audit — the body running both
clocks at once — leans on this table as its sharpest evidence. With the
imperative half unverified, the extension's textual base is the self-directed
modals alone: still evidence of deferral, no longer evidence of a split.
The table should be re-derived from the authoritative corpus before being
cited as a finding.
