---
domain: people
page_type: entity
status: stub
date_created: 2026-06-23
date_modified: 2026-09-19
date_range_start: 2018-03-12
date_range_end: 2018-11-26
sources: ["raw/self/message-csv/MASTER_MESSAGES_DB_DUMP.csv — ⚠ Source reference unresolved — original target no longer exists in current corpus.", "raw/imessage/messages-part1-2011-2019.csv", "corpus/manifest.json", "kb/data/1357-zaco-thread-recount.md", "kb/data/1214-zach-hendricks-unresolved-relationship.md"]
tags: [digital-footprint, uniontown-era]
knowledge: derived
infobox:
  name: "Zach Hendricks"
  aliases: ["Zaco", "Zack Hendricks"]
  relationship_to_dan: unknown
  handles: ["+1724***3381", "+1724***2745"]
  location: Fayette County, PA (724 area code)
  first_contact: 2018-03-12
  known_for: "Fayette County contact known as 'Zaco,' active during the 2018 Fran vigil and Annie relationship period"
connections:
  - page: wiki/mind/concepts/contact-gini
    type: instance-of
    claim: "A mid-volume Fayette County contact concentrated in a single 2018 window." 
  - page: wiki/people/zaco
    type: contradicts
    claim: "This page and wiki/people/zaco describe one thread under two names: the same primary handle, the same 2018-03-12 to 2018-11-26 range, and the same 58-message undercount of a 106-message thread. Whether the wiki should carry one entity or two is unresolved; the counts are corrected on both."
---

# Zach Hendricks

Zach Hendricks (self-styled "Zaco") is a Fayette County contact (724 area code, two phone numbers in Google Contacts — one under "Zach," one under "Zack") active across an eight-month window, March–November 2018. The timing places the contact squarely in the Fran caregiving and post-death period, and in the middle of the Annie relationship.

**This page and [[wiki/people/zaco]] are the same thread.** Same primary handle, same date range, same figures. That page carries the complete 106-message log and the supply context; this one holds the contact-card identification, which is the only thing it has that the other does not. Whether the wiki should carry one entity or two is a structural question left open — see Gaps.

## Corpus Dimensions

Held corpus (`raw/imessage/messages-part1-2011-2019.csv`, verified against `corpus/manifest.json`):

| Metric | Value |
|--------|-------|
| Messages | **106** — 58 received, 48 sent |
| Date range | 2018-03-12 – 2018-11-26 |
| Active days | 35 (34 in the March–June run, plus one night in November) |
| Primary handle | `+1724***3381` |
| Alternate handle | `+1724***2745` — **1 message in 192,140 rows**, Dan-sent, 2018-02-20, *"hey dude"*, no reply |
| Service | SMS on all 106 rows |

> **CORRECTED [2026-09-19]:** this page reported **58 messages, "all received (export artifact)."** The held corpus distinguishes directions cleanly: 58 received and 48 sent, 106 total. The 58 was the received half only — the page noticed the direction field looked wrong and kept the one-sided count anyway, which is the same error [[wiki/people/jay-lauer]] carried (`dat:0673`). The alternate handle is not a second relationship: it holds exactly one message, twenty days before the main thread opens.
> [`dat:1214`](../../kb/data/1214-zach-hendricks-unresolved-relationship.md) filed this page unverifiable because its handles were redacted and it quoted no text, so no held search was possible; [`dat:1357`](../../kb/data/1357-zaco-thread-recount.md) located the thread from the other page's anchor text and supplies the figures above.

## Gaps

- **Relationship to Dan unresolved.** The casual nickname and Fayette County location suggest a Uniontown social-circle friend; [[wiki/people/zaco]] documents the thread as a Suboxone-strip and cocaine supply line, which the nickname alone does not settle either way.
- **Which name is right is unestablished.** "Zaco" is self-given in one SMS; "Zach/Zack Hendricks" comes from a Google Contacts export not held in this repository.
- **Whether the two pages should be merged** is a structural call for the operator, not a fact. Both now carry the corrected count.
- No Facebook or other corpus cross-references found.



## Related

[[wiki/people/index]] · [[wiki/people/zaco]] · [[wiki/mind/synthesis/supply-network]] · [[wiki/timeline/periods/2018-deep-cycle]]
