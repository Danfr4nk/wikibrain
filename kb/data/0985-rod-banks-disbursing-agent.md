+++
id            = "dat:0985-rod-banks-disbursing-agent"
layer         = 1
type          = "datum"
title         = "Rod Banks as the Coldren estate's disbursing agent — the role finding, with the thread itself a held-corpus gap"
claim         = "The prior wiki's correction (2026-09-04) settles Rod Banks's role: he is not family, not a caretaker, and not the decision-maker — he is the hand the Coldren estate's money passes through. From the dox-scan thread (92 messages, 51 sent / 41 received, 2017-04-19 to 2020-07-31, handle [phone redacted]): he authorises a title transfer (2017-05-23), cancels Fran's insurance (2017-05-30), routes a reimbursement against a prior payment, audits a utility notice (2017-11-10), pays Timeslips via Vicki (2017-12-22), collects Fran's mail weekly (2018-05), and writes five estate checks totalling $32,500 between 2019-10-12 and 2020-04-17, each one authorised by Jason Adams. Dan writes to him 'the way you write to somebody who controls a budget.' Critically: the held iMessage corpus contains ZERO rows on that handle — the entire thread is a held-corpus gap, and every line above is old-wiki testimony quoted from an unheld dox-scan dump. The estate-advance schedule itself was independently resolved corpus-first by dat:0051 (six advances, $42,500, executor-confirmed against held threads), which this node cross-references rather than duplicating."
cites         = ["src:old-wiki-export-2026-09-04", "src:imessage-corpus-2026"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "moderate"
extraction    = "Role finding read from the page body (corpus__3.txt line 66278); the 92/51/41 figures are the page's own dox-scan counts. Zero-hit check: Python scan of corpus/messages.csv 2026-09-09 on the exact handle string returns 0 rows — so the direction correction the page carries ('all received' → 51/41) is itself unre-verifiable in the authoritative corpus, which holds neither half. dat:0051 resolved the five-check schedule plus the sixth (2020-06-23, $10,000) from held estate threads at different handles."
importance    = 4
tags          = ["people", "old-wiki", "estate", "fran-coldren", "corpus-gap"]
created       = "2026-09-09"

[when]
start = "2017-04-19"
end   = "2020-07-31"
+++

An unusual node: the page's headline finding (the role) is its strongest
claim and its least checkable — it rests on a dump no held source contains.
What IS checkable is downstream of it: the $32,500 schedule survived
independent corpus verification in dat:0051, which lends the testimony
weight without making it first-party. The phone-number redaction and the
withheld payees (per the standing CLAUDE.md directive) are preserved as the
page states them.
