+++
id         = "ent:morgantown-st-463"
layer      = 2
type       = "entity"
title      = "463 Morgantown St"
cites      = ["dat:0074-morgantown-housing-state-august-2026",
              "dat:0243-alexander-jackson-owner-claim",
              "dat:0168-morgantown-call-source-amendment-artifact-verified",
              "dat:0057-morgantown-audio-contradiction-reproduces",
              "dat:1262-337-saratoga-drive",
              "dat:1394-unpapered-address-rule",
              "src:old-wiki-export-2026-09-04"]
confidence = "moderate"
entity_kind = "other"
importance = 5
tags       = ["housing", "legal"]
created    = "2026-09-09"
rechecked  = "2026-09-10"
+++

## Summary

**463 Morgantown St, Uniontown PA** is Dan's current residence, moved
into with Suz in early 2026 — **no signed lease, no confirmed power of
attorney as of August 2026**, the seventh consecutive unpapered address
in sixteen years ([`dat:1394`](../data/1394-unpapered-address-rule.md)).
The asserted owner is **Alexander Jackson** (single provenance chain, no
primary record — [`dat:0243`](../data/0243-alexander-jackson-owner-claim.md)).
Contractor exposures (Arnu's lien, John Carney's abandonment) run
through the address, Suz's August 11, 2026 *"It's time for you to go."*
came from it, and the August 16, 2026 call recording that anchors the
relationship's terminal rupture was made from it — macOS Voice Memos
named the file for the street the device stood on.

entity_kind is "other": the schema enum has no "place"/"address" kind
("neighborhood" is too large; "household" is the people, not the
building). Least-wrong value, noted here.

## The arrangement

Dan and Suz moved in **early 2026** with no signed lease and no
confirmed POA ([`dat:0074`](../data/0074-morgantown-housing-state-august-2026.md)).
The counterparty to every unwritten arrangement is asserted to be
**Alexander Jackson** — but the load-bearing fact that the owner is a
person named Alexander Jackson has **no document behind it here**: it
arrives via the old wiki's context-core/operating-manual layer,
AI-secondary synthesis of materials this repository does not hold, and
the page itself concedes *"Limited direct corpus on Jackson himself"*
(dat:0243, confidence low). The independently recorded Morgantown-call
STT transcript (2026-09-09) mentions Jackson, the lease and Morgantown
**zero times** — neither confirming nor denying.

**Exposures:**
- **Arnu (contractor):** mechanics-lien estimate matured **~2026-07-27**;
  that date elapsed with no source recording what happened (filed,
  settled, or never real — the estimate was always derived; no filing
  or contract on disk). A Fayette County prothonotary/recorder search
  against the 463 parcel would settle it in one query (dat:0074).
- **John Carney (contractor):** ~10–20% complete, **unreachable since
  March 2026** (2026-03-27 Suz message: "John carney thing").

**The financial context:** Suz filed Chapter 13 in October 2024 (case
24-22285-GLT, ~$157,000 scheduled, IRS priority claims 2018–2021) on
stated income of $11,000–$14,000 a year; the only unencumbered asset,
**337 Saratoga Drive**, was liquidated in June 2026 — Compass MLS
**#1721561** records the sale at **$465,000 on 2026-06-24** (pending
2026-04-03; price cut to $500,000 on 2026-01-01; listing agent Suzanne
Frank of Park Place Realty Group), web-corroborated in
[`dat:1262`](../data/1262-337-saratoga-drive.md). The old-wiki page said
**June 23** — a **one-day discrepancy against the MLS record,
unresolved**, not resolved.

## 2026 timeline at the address

- **Early 2026** — move-in (exact date open).
- **2026-07-24** — Dan to Annie: *"I swear to god I moved the entire
  house by myself. It took an extra week - the people were so f[ucking
  mad]"* (corpus-verified; address unnamed, identification with the
  337 vacate inferential — dat:0074).
- **2026-08-11 15:04:23 UTC** — inbound from Suz's number: *"It's time
  for you to go."* — the newest housing datapoint, from the person who
  controls it (dat:0074). The page's follow-up, on the suzanne-frank
  page: *"I'm so tired of you stealing from me. You have no respect
  for me and you don't care one single bit about me. I'm so
  disappointed."* (dat:0243).
- **2026-08-16 23:37 → 23:53** — the Morgantown St call. Dan records a
  15-minute-27-second call on his MacBook; the file is named
  `Morgantown St.m4a` — macOS Voice Memos names recordings for the
  street, placing him at home, on a call, not at the scene
  ([`dat:0257`](../data/0257-morgantown-call-leverage-campaign.md)).
- **2026-08-17** — Coles types the address unprompted (address threat;
  dat:0073 via dat:0074); Dan is confirmed living at the address and
  claims cameras on the property.

## The recording and its validation

The Source Amendment page's artifact identifiers were verified
byte-for-byte in this repository: the held m4a is **13,097,702 bytes**,
duration **927.242449 s**, MD5 `96bd3df46d4b0f4c5278cc9d6978621d`,
SHA-256 matching the page exactly. The **2026-09-09 independent
validation report** corroborates artifact identity and core conduct
(phone search, interrogation, repeated exit demands, offer to drive,
parental-disclosure threat) and finds **one assertion fails**: the
Jerel Coles page still says Annie "never says yes" — contradicted by
the transcript ("Yes, save it," 04:43) and the 175-segment STT pass
([`dat:0168`](../data/0168-morgantown-call-source-amendment-artifact-verified.md)).
Epistemic boundaries stand: **not** proven unedited, speaker
attributions not independently acoustically verified, the alleged
assault not resolved.

The August 19 **audio contradiction** reproduces: within one day Dan
states both that he sent a recording to a third party's parents and
that he did not — four statements of sending vs *"I could have torn
your life apart. I still could and I don't"* (19:12:16). The corpus
does not establish which is true, and neither did the prior wiki
([`dat:0057`](../data/0057-morgantown-audio-contradiction-reproduces.md)).

## Evidence tiers

- **Corpus-verified:** the July 24 move message; the August 11 eviction
  sentence; Dan's residence at the address on August 17; the recording's
  artifact identity and core conduct.
- **Web-corroborated:** the Saratoga sale facts (not the buyer names,
  not the June 23/24 resolution).
- **Wiki-sourced:** Chapter 13 figures, sale buyers and closing
  details, the Arnu lien estimate, Carney status, no-lease/no-POA,
  the Jackson counterparty claim.

## Open questions

- Whether the Arnu lien was ever filed (Fayette County search would
  settle it).
- Whether Dan is still housed at 463 (the August 11 line's outcome
  unrecorded); whether a lease or POA has since been signed.
- Any direct communications with Alexander Jackson; the content of the
  "John carney thing" document; the exact move-in date.

## Cross-links

- Suz's Chapter 13 and the 337 Saratoga liquidation
  ([`dat:1262`](../data/1262-337-saratoga-drive.md)).
- The unpapered-address rule ([`dat:1394`](../data/1394-unpapered-address-rule.md))
  — 463 Morgantown is the seventh instance.
- [`dat:0074`](../data/0074-morgantown-housing-state-august-2026.md),
  [`dat:0243`](../data/0243-alexander-jackson-owner-claim.md),
  [`dat:0168`](../data/0168-morgantown-call-source-amendment-artifact-verified.md),
  [`dat:0057`](../data/0057-morgantown-audio-contradiction-reproduces.md).
