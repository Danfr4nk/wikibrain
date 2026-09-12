+++
id = "dat:1415-corpus-abortion-messages-2017-2019"
layer = 1
type = "datum"
title = "Three outbound messages referencing 'the abortion' (Oct 2017 - May 2019)"
claim = "Dan's iMessage corpus contains three outbound references: 2017-10-12 ('but as we both know, it's an auto win to bring up the abortion...so i will stop before i dig myself a hole. i mean it's not like you've come to me even once to talk about it or anything'), 2018-04-06 ('......well not since the abortion.....'), and 2019-05-31 ('there are enough things now that we have gone through together : the abortion, gram, moving to nyc, etc')."
cites = ["src:imessage-corpus-2026"]
confidence = "high"
tags = ["annie-ulmer", "pregnancy", "imessage"]
importance = 4
created = "2026-09-11"

[when]
start = "2017-10-12"
end = "2019-05-31"

[[edges]]
rel = "about"
target = "ent:annie-ulmer"
strength = "moderate"
asserted_by = "llm"
+++

**Evidence class:** file metadata (platform timestamps) + audiovisual (message text).

Extraction: corpus/messages.csv rows 85091 (2017-10-12 6:59:26), 153451 (2018-04-06 22:57:32), 53924 (2019-05-31 4:47:01). All three are Dan-authored ('Me'). By 2019-05-31 the abortion is listed alongside Fran's decline ('gram') and the NYC move as settled shared history - 'gone through together'. Thread phone numbers are withheld; they are message-routing metadata, not evidence.

Load-bearing tension: the 2017-10-12 message speaks of the abortion in the *past tense*, 15 days before the sonogram's handwritten 10-27-17 date in dat:1414. The record does not establish whether one or two pregnancies are involved. Preserved in con:2017-pregnancy-sonogram-vs-oct12-message; not reconciled here.
