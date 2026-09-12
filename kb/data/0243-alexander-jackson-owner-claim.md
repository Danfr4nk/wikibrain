+++
id            = "dat:0243-alexander-jackson-owner-claim"
layer         = 1
type          = "datum"
title         = "Alexander Jackson as owner of 463 Morgantown St: asserted through old-wiki materials only, with no primary record held here"
claim         = "The page `wiki/people/alexander-jackson.md` identifies **Alexander Jackson** as the owner / lessor of **463 Morgantown St, Uniontown PA**, the landlord for Dan + Suz's move-in around early 2026, with **no signed lease or POA at entry**. The page itself concedes the thinness of the record: *\"Limited direct corpus on Jackson himself (no messages/comm details surfaced in reviewed dox).\"* The ownership claim is sourced to the old wiki's `operating_manual.md`, `CONTEXT_CORE_EXPANDED.md`, `BFS_BOOTLOADER_v2.md` and a message CSV — none of which is held in this repository's `raw/`. The independently recorded Morgantown-call STT transcript (2026-09-09) mentions Jackson, the lease, and Morgantown **zero times**, so it neither confirms nor denies the claim. What does corroborate, from multiple corpus pages, is the surrounding exposure the claim explains: Suz's 2026-08-11 message *\"It's time for you to go.\"* (quoted verbatim on the suzanne-frank page with the follow-up *\"I'm so tired of you stealing from me. You have no respect for me and you don't care one single bit about me. I'm so disappointed.\"*), the 2026-08-17 Coles threat typing the address unprompted, and the standing-memory fact of residence at 463 Morgantown St with no signed lease as of August 2026."
attributed_to = "src:old-wiki-export-2026-09-04"
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:morgantown-call-independent-stt-transcript-2026-09-09"]
confidence    = "low"
extraction    = "Page body read directly from corpus__3.txt line 45846 (95 lines). Cross-checked against raw/old-wiki-export-2026-09-04/whole.txt: the page appears at line 39526 with the same ownership claim. The page's listed sources (raw/self/dox-md/operating_manual.md, raw/self/context-core/CONTEXT_CORE_EXPANDED.md, raw/self/message-csv/imessage_7243228715_both_2025-06-03_now.csv, raw/self/dox-md/BFS_BOOTLOADER_v2.md) were searched for under raw/ and are not held. The Morgantown-call transcript at raw/morgantown-call-independent-stt-transcript-2026-09-09/morgantown-call-independent-stt-transcript-2026-09-09.txt was grepped for jackson/lease/morgantown: no hits ('morgantown' 0; 'lease' matched only the substring in 'Please, no.'). The Suz message and Coles threat were read in the corpus: suzanne-frank page lines 68219-68228, and the 463-morgantown threat account at corpus lines 16797 and 16951. Privacy: no third-party identifiers beyond what existing nodes already carry; no new personal data is introduced."
importance    = 4
tags          = ["housing", "463-morgantown", "old-wiki", "attribution", "unverified"]
created       = "2026-09-09"
+++

## What the check confirms

The page is internally consistent and consistent with the record around it:
unpapered tenancy at 463 Morgantown, Suz's August 2026 eviction sentence,
the Coles address threat, the Arnu lien deadline of 2026-07-27 which the
page itself records as elapsed with no documented outcome. Every one of
those surrounding facts is carried by at least one other corpus page, and
the central premise — a property occupied with no signed lease — matches
the standing memory record.

## What the check does not confirm, and why it matters

The load-bearing fact — that the owner is a person named Alexander Jackson —
is the one fact with no document behind it here. It arrives via the old
wiki's context-core/operating-manual layer, which is AI-secondary synthesis
of materials this repository does not hold. The page's own honesty about
this (\"expand via owner comms or lease docs\") is to its credit, but it
leaves the claim exactly where the page found it: one provenance chain,
no primary record.

This matters because the whole page's risk analysis runs through him: a
mechanics lien attaches to *his* title, the tenancy's counterparty is
*him*, and the open lead the page records — whether Jackson knew his
tenant-agent is a Chapter 13 debtor — assumes he exists as described. If a
lease, deed, tax record or owner communication surfaces, this node should
be re-filed at higher confidence or corrected; until then the ownership
claim is carried as asserted, not established.

## Adjacent claims, filed for completeness

- **Arnu lien deadline ~2026-07-27**: the page records it as elapsed with
  no documented outcome (re-checked 2026-08-02). No lien filing is in
  `raw/` either way — unresolved, not contradicted.
- **John Carney**: ~10–20% complete, unreachable since March 2026;
  sourced to the old wiki's timeline and a 2026-03-27 Suz message
  (\"John carney thing\"). Not independently checkable here.
- **Suz Chapter 13** (Oct 2024, 24-22285-GLT, ~$157,000 scheduled, IRS
  priority claims 2018–2021, stated income $11,000–$14,000/yr): carried on
  this page as context for the 463-morgantown page's corrected finance
  characterization; the bankruptcy filing itself is a matter of public
  record but the docket was not pulled in this pass.
