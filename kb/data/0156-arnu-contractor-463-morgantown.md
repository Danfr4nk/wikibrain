+++
id            = "dat:0156-arnu-contractor-463-morgantown"
layer         = 1
type          = "datum"
title         = "Arnu — contractor at 463 Morgantown St; 2026-02-10 no-show in Suz's iMessage; estimated mechanics-lien deadline ~2026-07-27 elapsed with no recorded outcome"
claim         = "Arnu is a contractor (painter/mechanical work) at 463 Morgantown St. The single piece of direct evidence is a 2026-02-10 20:18 iMessage from Suz (row 207027): *\"Great! It's mushy. Felix showed up but Arnu didn't. He's bringing Elijah over to do his homework until basketball practice and Felix is going to paint more. Do you want to come over?\"* The page organises around an estimated mechanics-lien deadline of ~2026-07-27 — an estimate **derived from the February 2026 work window, not a documented filing**: nothing on disk contains a lien notice, a contract, or a dollar figure for Arnu's work. The deadline elapsed 2026-08-02 with no recorded outcome; whether the lien was filed, settled, or never real is unresolved. Re-checked 2026-08-18 and 2026-08-20 against wiki/legal/463-morgantown with no claim contradicted. The page also notes parallel contractor exposure: John Carney (~10–20% complete, unreachable since ~Mar 2026) and Felix (associate painter, showed up when Arnu didn't; \"supply-adjacent\" per MAX_PRIME)."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Page body read directly from corpus__3.txt line 51974 (86 lines); matches the old-wiki export's arnu.md page (whole.txt line 45643ff) nearly verbatim — one deliberate difference: the corpus page redacts the Suz phone handle to '[phone redacted]' where the old wiki prints it in full; the redaction is respected here and no number is recorded in this node. The 2026-02-10 message was read directly from corpus/messages.csv (row 207027, 2026-02-10 20:18:31, inbound from Suz's handle): the page's quoted sentence is verbatim within the fuller message. The lien deadline, the no-show, and the Carney parallel are relayed from the prior wiki; no lien document is held in this repository. The Chapter 13 figures on the page (filed Oct 2024, ~$157,000 scheduled) are Suz's and are a separate datum, not re-verified here."
importance    = 3
tags          = ["people", "463-morgantown", "contractor", "imessage-corpus", "unresolved", "deadline"]
created       = "2026-09-09"

[when]
start = "2026-02"
end   = "2026-08"
+++

## What the check confirms

The one hard evidence on the page — the 2026-02-10 no-show message — is
verbatim in the held iMessage corpus, with its timestamp and inbound
direction. The page's honesty about the lien is its load-bearing feature:
the deadline is explicitly an estimate, explicitly without a filing on disk,
and explicitly elapsed without resolution. That makes the *absence* of the
lien the datum, not the lien.

## What it leaves open

Everything else is a relay of the prior wiki: the \"contractor
(painter/mechanical work)\" role label, the Felix supply-adjacent note from
MAX_PRIME, the John Carney ~10–20% completion figure, and the \"John carney
thing\" analysis of 2026-03-27 are not independently verified in this
repository. A Fayette County prothonotary search would answer the filed /
settled / never-real question the page leaves open. Note also that the old
wiki prints Suz's phone number in full on this page while the corpus copy
redacts it — the corpus's newer, redacting convention is the one this node
follows.
