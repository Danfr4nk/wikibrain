+++
id            = "dat:0251-bill-ulmer-thread"
layer         = 1
type          = "datum"
title         = "Bill Ulmer: Annie's father — 58-message thread, Apr 2017–Jun 2020, the corpus's warmest non-family adult presence"
claim         = "The page `wiki/people/bill-ulmer.md` identifies **Bill Ulmer** as Annie's father — *\"the warmest and most consistently affectionate adult presence toward Dan documented anywhere in the corpus outside Dan's own immediate family.\"* The thread is **58 messages, 2017-04-22 to 2020-06-02**, sparse but unbroken: birthday greetings, condolences, small favors, repeated signs Bill treated Dan as family rather than as his daughter's boyfriend. Dated beats: **April 4, 2018**, days after Fran's death, an unprompted lengthy condolence calling Fran *\"a lady of class, friendliness to all and grace\"* whom he'd known over 40 years, paired with the note that Annie's love for her *\"grandmother-in-law-to-be\"* had *\"been given freely\"*; *\"Happy Birthday\"* every November without fail (2018, 2019); a 2020 sign-off *\"Miss and love you both. Dad/Bill\"*; late-2019 help coordinating a package delivery to Dan's NYC apartment (building-entry logistics, joking about taping names to the buzzer); and a recurring 2018 golf thread (tee-time deals at NWL courses, references to Dan caddying). Direction in the export is marked \"Received\" throughout and unreliable — read as mostly one-way, Bill to Dan. Gap: no message after June 2020; whether contact continued, and whether it survived the end of the Dan/Annie relationship, is undocumented."
cites         = ["src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 52298 (52 lines); verified against raw/old-wiki-export-2026-09-04/whole.txt lines 45966-46017 — text identical except that the corpus snapshot redacts the handle as [phone redacted] where the old-wiki export carries it unredacted (see Privacy note). The page's stated source (raw/self/message-csv/MASTER_MESSAGES_DB_DUMP.csv) is not held in this repository, so the 58-message count and the quoted passages are text-fidelity-verified against the prior wiki only. Consistent with the standing memory record ('58 warm messages 2017–2020, treated Dan as family, annual birthday texts')."
importance    = 3
tags          = ["people", "annie-ulmer", "family", "old-wiki", "attribution"]
created       = "2026-09-09"

[when]
start = "2017-04-22"
end   = "2020-06-02"
+++

## What the check confirms

Corpus page and old-wiki export agree on every substantive field — the
relationship characterisation, the 58-message count, the date range, the
Fran condolence with its 40-years detail, the November birthdays, the
\"Dad/Bill\" sign-off, the package-delivery logistics, the golf thread, and
the post-June-2020 gap. The memory index independently carries the same
summary (58 warm messages 2017–2020), which is a second transcription of
the same corpus rather than independent corroboration, but it rules out
transcription drift between the wiki's layers.

## Privacy note — read carefully

The current corpus snapshot redacts Bill's handle as `[phone redacted]`.
The old-wiki export held in this repository's `raw/` **still carries the
unredacted number** at whole.txt lines 45989 and 46004. The corpus layer
made the redaction decision; this node follows it and does not reproduce
the number. Flag for the coordinator: the raw export is the less-redacted
copy, and anything built from whole.txt directly (rather than from the
corpus layer) will surface a third-party phone number the corpus chose to
withhold. This is the same class of issue `dat:0037` documents for the
build pipeline, one layer down.
