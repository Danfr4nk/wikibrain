+++
id            = "dat:0451-archived-master-timeline-extraction-corrections"
layer         = 1
type          = "datum"
title         = "The archived master life-events timeline: auto-extraction metadata (175,358 messages → 1,104 events), the 2015-11-28 retrospective mis-dating correction, and the 2018 peak → named supply node reading"
claim         = "The archived master life-events timeline (wiki/timeline/events/timeline.md, status: archived — a different artifact from the tier-based 3,661-event master timeline covered by [`dat:0284`](0284-master-timeline-metadata-recount.md)) documents its own generation metadata: **175,358 iMessages (Nov 2015 – Mar 2026) scanned → 1,104 event entries, 633 unique dates, 66 contacts referenced**, sourced to raw/self/dox-md/LIFE_EVENTS_CALENDAR.md (unheld in this repo). Two items of note: (a) the page's connection to wiki/people/johnny-dealer states the 2018 peak of **254 events resolves to a named supply node** rather than a diffuse bad year — the handle carrying that period's logistics is a phone number the page itself redacts, which lets the event spike be read as a procurement pattern instead of a mood; (b) the page carries a dated self-correction (**corrected 2026-08-15**): the 2015-11-28 sample event (Dan narrating the 2009 origin of the Alexis relationship to Annie) was a LIFE_EVENTS_CALENDAR row that classified a **retrospective message by its send date** — 'Not a 2015 event' — cross-referenced to the bond-switch-2015 synthesis. That correction is the page's clearest documented case of the send-date-vs-event-date failure mode in the auto-extraction, and the page's own connection block notes the context-core curation 'has already resolved several date conflicts this page's own auto-extraction carries uncorrected.' The per-period tallies (2017: 85; 2018: 254; 2019: 158; 2020: 68; 2021: 5; 2024: 55; 2025: 259; 2026: 86) and the category distribution (Relationship 266 / Health 108 / Financial 105 / Legal 100) are the unheld extraction's, filed as the page's."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read from corpus__3.txt line 109132 (88 lines); page and the johnny-dealer page are both in raw/old-wiki-export-2026-09-04/whole.txt. The 1,104/633/175,358 figures are the page's own from LIFE_EVENTS_CALENDAR.md, which is not held in this repo's raw/ tree — not re-counted. The Johnny handle is redacted on the page and stays redacted here. Distinguished from dat:0284's 3,661-event tier-based timeline by the generation metadata (2026-08-14, bin/wiki-timeline) vs this page's (LIFE_EVENTS_CALENDAR.md auto-extraction); different artifacts, no duplication."
importance    = 3
tags          = ["timeline", "old-wiki", "correction", "extraction", "johnny-dealer"]
created       = "2026-09-09"

[when]
start = "2015-11-28"
end   = "2026-03-23"
+++

## What the check confirms

The page is explicit that it is the near-raw event list, not the curated read — its connection block says context-core already resolves date conflicts this page carries uncorrected. The 2026-08-15 Alexis correction is the one case where the page corrects itself, and it is a load-bearing methodological warning: any event date in the 1,104 rows that comes from a retrospective message is a send date, not an event date. The 2018→Johnny reading is analytical (spike → supply node) and attributed, not evidence.

## What it does not confirm

None of the 1,104 rows were re-verified against the held corpus (their source is unheld). The per-period and per-category tallies are the extraction's. The Johnny handle is not reproduced here (redacted on the page). The 2026-06-01 'Goodbye forever' sample rows point at the annie logs covered elsewhere (dat:0125, dat:0449). The pre-2015 markers from the Facebook archive (registered 2007-01-09, 650+ friends) are unheld — the Facebook export is gitignored.
