+++
id            = "dat:0286-tan-calabrese-phantom-message-date"
layer         = 1
type          = "datum"
title         = "The '2000-12-31 Tan Calabrese message' is a phantom date: the held corpus contains exactly one such message, dated 2020-03-12, a retrospective"
claim         = "The master timeline (Tier 1) and the tan-calabrese page claim *\"A 2000-12-31 message in the corpus\"* records Dan writing *\"tan calabrese told me that our parents did tons of blow when i was 11 years old\"*. The held iMessage corpus (corpus/messages.csv, 192,140 records) contains exactly **one** message matching that text, dated **2020-03-12 02:37:42** (UTC), in full: *\"i mean i don't want to lie to the kid. \\n\\ntan calabrese told me that our parents did tons of blow when i was 11 years old and i turned out pretty fucking well adjusted 🙃\"*. There is no 2000-12-31 message in the held corpus. The 2000-12-31 date is a back-calculation from 'age 11' (born 1988-11-01 → ~2000) that the old wiki's 2026-08-09 REVISED block reified into a message date — *\"(2000-12-31)\"* — and the new wiki inherited."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Observed directly: full-text search of corpus/messages.csv for 'tan calabrese told me' returns one row (message_id 33352, 2020-03-12 02:37:42 UTC, is_from_me=1, chat +19165013615), and a case-insensitive search for 'tan calabrese' across all rows returns that same single row. The old-wiki export (whole.txt:62713 'first_contact: 2000-12-31'; 62726 REVISED [2026-08-09] block quoting the message with '(2000-12-31)'; 62732; and its own generated timeline at 103672/103674) shows where the date entered the record. The master-timeline entries (corpus__3.txt ~110106–110110) carry it forward verbatim."
importance    = 3
tags          = ["master-timeline", "tan-calabrese", "phantom-date", "corpus-verification", "correction"]
created       = "2026-09-09"

[when]
start = "2020-03-12"
end   = "2020-03-12"
+++

## Why it matters

The claim the date was attached to — *that the friendship predates the
Windell's ski-camp years* — is unaffected: a 2020 retrospective describing age
11 still places the relationship around 2000, before the camps. What is wrong
is the *form* of the evidence: the wiki presents a dated contemporaneous
message (a Tier-1 event) when what it holds is a 2020 recollection. A reader
trusting the timeline's date would believe there is year-2000 message traffic
in the corpus, which there is not — the held corpus's earliest rows are 2011.

## The mechanism

This is the date-displacement failure mode the wiki's own veracity ledger
documents (good-faith misremembering, not dishonesty): someone computed
2000-12-31 from 'age 11', wrote it into a REVISED block as if it were the
message's timestamp, and from then on every downstream page — including the
mechanically generated master timeline — treated it as observed. The generator
cannot detect this class of error; only the corpus check can.

## Caveat

The Facebook threads export is unavailable in this repository
(raw/facebook-threads/ holds only MANIFEST.json). If a Facebook message with
this text and a 2000-12-31 timestamp exists there, the 'phantom' verdict would
need revisiting. On the held evidence, the date is unsupported.
