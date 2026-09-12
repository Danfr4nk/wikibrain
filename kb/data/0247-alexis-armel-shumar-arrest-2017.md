+++
id            = "dat:0247-alexis-armel-shumar-arrest-2017"
layer         = 1
type          = "datum"
title         = "Alexis Armel: the Feb 14, 2017 Zac Shumar arrest — Lucas Thomas thread is the contemporaneous account, and its message count in the wiki is stale"
claim         = "After the breakup Alexis began dating **Zac (Zachary) Shumar** — a man who had previously dated Dan's sister Vanessa. On **Valentine's Day 2017** Zac went to collect a mail-order marijuana shipment and walked into staged police. The contemporaneous account is **Lucas Thomas's Facebook Messenger thread**: opened **February 11, 2017** with the news that Lex's place had caught fire and Lucas could not reach her, and continuing **February 16, 2017** (Dan reaching out first, unprompted, at 5:00 AM) with the granular arrest account — Zac picking up mail at a man named RT's house, RT having been around people who *\"may or may not have been getting government salaries,\"* **fifteen police** staged to swarm when Zac took the package (read by both men as a probable informant tip), bail at **$35,000 each**, a glass smoking rig Zac had loaned Lucas for the Philadelphia trip seized with everything else in Zac's car, Zac's parents learning of the arrest and the house fire in the same jail phone call, and their mutual friend \"Jericho\" asking Lucas to notify Zac's Philadelphia roommates. Later retellings add: the shipment was ten pounds from California; Zac hired paid counsel; the DA required all three defendants to accept the same plea; Alexis — *\"it legit wasn't her deal\"* — took it; within about a month she failed a drug test, violated probation, and was jailed around the end of October 2017; by April 2018 she was at **SCI Muncy**; Zac did no time. Dan's verdict to Tom in August 2018: *\"She honestly got a bad break… She stayed loyal to Zac,\"* and Zac *\"got a good lawyer and fucked her over.\"* **Count correction:** the Lucas Thomas page's corpus-record table says the thread is *\"~45 (Facebook Messenger, both directions)\"*; the completed Facebook enumeration (fetched 2026-09-09) records **118 messages, 63 from Dan**, all 2017. The ~45 figure is stale."
attributed_to = "src:old-wiki-export-2026-09-04"
cites         = ["src:old-wiki-export-2026-09-04",
                 "src:facebook-export-2026-06-23"]
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 45941; the Shumar section at lines 46648-46680. The Lucas Thomas page (corpus line 62873; old-wiki export line 56489) was read in full for the two-message account and the Jericho/RT/rig details. The thread itself is not held in this repository — raw/facebook-threads/ carries only MANIFEST.json (contents gitignored) — so the arrest details are relayed through the old wiki's transcription of the thread. The message count was read from raw/facebook-threads/MANIFEST.json: file 11828KBRlshmYpQAZlFogMNowWXpchz86.txt, 118 messages, 118 blocks, 63 from Dan, counterparties ['Lucas Thomas'], years ['2017','2017']; the ~45 figure was confirmed in the old-wiki export at line 56553. The Dec 13, 2017 Jamie-thread telling (earliest of three, placing the Alexis/Annie cam encounter in the Feb–Oct 2017 bail window) is carried at corpus lines 58450 and 112919."
importance    = 4
tags          = ["alexis-armel", "zac-shumar", "lucas-thomas", "legal", "facebook", "count-correction"]
created       = "2026-09-09"

[when]
start = "2017-02-11"
end   = "2018-04"
+++

## What the check confirms

The spine of the account is consistent across the Alexis page, the Lucas
Thomas page and the connections frontmatter: Feb 11 fire report, Feb 14
arrest, Feb 16 detailed account, fifteen officers, informant reading,
$35k bail, seized rig, plea, failed drug test, October 2017 jailing, SCI
Muncy by April 2018, Zac doing no time. The \"living together\" detail —
*\"All in the same house… Me and my ex, Annie and her ex… Dude they were
living with us\"* — is the arrangement's structural precondition sitting in
plain view a year before the November 2018 arrangement (see
[`dat:0248`](0248-alexis-armel-arrangement-and-last-message.md)).

## The count correction

The old wiki counted the Lucas thread at ~45 messages; the completed 2026-09-09
enumeration counts **118** (63 from Dan). Per this repository's own rule —
documented counts override generated figures — the page's corpus-record table
should read 118. The discrepancy is large enough to matter: a 45-message
thread is a tip; a 118-message thread is a correspondence, and the page leans
on the thread as \"the corpus's only contemporaneous, real-time account,\"
which the fuller count strengthens rather than weakens.

## Provenance soft edges

- The **$35,000 bail** figure is asserted as coming from the Lucas thread
  (connections claim and Alexis page), but the Lucas Thomas page's own
  \"what only his thread carries\" summary does not repeat it. It is
  attributed through the Alexis page, not double-carried.
- The thread file itself is gitignored; no independent re-read of the
  118 messages was possible here. The fire/arrest/bail/rig details rest on
  the old wiki's transcription.

## Flagged, not factual

The page correctly quarantines the CATO bootloader's claim that Zac Shumar
was also **Annie's first**: *\"it is an AI compression of the corpus
repeating itself, and it should not be cited as fact until a message says
it.\"* That quarantine is endorsed — the claim has no primary source
anywhere in the corpus and must not be promoted to fact.
