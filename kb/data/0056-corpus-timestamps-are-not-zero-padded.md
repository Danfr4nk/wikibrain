+++
id            = "dat:0056-corpus-timestamps-are-not-zero-padded"
layer         = 1
type          = "datum"
title         = "44% of the corpus's timestamps write the hour unpadded, so any text comparison of them is wrong"
claim         = "In `corpus/messages.csv`, 192,140 rows carry a `date_sent` in one of exactly two shapes: `YYYY-MM-DD HH:MM:SS` and `YYYY-MM-DD H:MM:SS`. Over the first 60,001 rows sampled, 33,576 are padded and 26,426 are not — 44% unpadded. The date prefix is therefore fixed-width and safe to slice, while the full string is not comparable as text: `\"2026-08-19 9:00:00\"` sorts after `\"2026-08-19 10:00:00\"`. Every row parses as a timestamp, and read as timestamps the file has zero inversions — it is in true chronological order."
cites         = ["src:imessage-corpus-2026",
                 "src:wikitest-rebuild-session-2026-09-09"]
measurement   = true
confidence    = "high"
extraction    = "Measured 2026-09-09 over the sha256-verified corpus. Shapes counted by substituting every digit and tallying the templates; ordering checked by parsing all 192,140 timestamps with a strict format and counting rows earlier than their predecessor. Reproducible as tests/test-corpus."
importance    = 4
tags          = ["corpus", "tooling", "trap"]
created       = "2026-09-09"

[when]
start = "2026-09-09"
end   = "2026-09-09"
+++

A format detail that produces no error and a wrong answer, found by hitting it
twice inside ten minutes.

## The two instances

**A window filter that returned nothing.** Selecting messages between 01:00 and
02:00 by comparing `date_sent[11:15]` against `"01:0"` and `"01:5"` matched zero
rows, because those messages are stamped `1:09:33`. The output was an empty
result set, which reads exactly like *the messages are not there* — and the
conclusion being tested was whether certain messages existed.

**A conversation printed out of order.** Sorting a day's messages by `date_sent`
as text interleaved them: 00:19, 00:23, 12:12, 12:36, 15:25, 18:22, 18:51, then
back to 01:09, 01:31, 01:40. Both hours are correct and the sequence is not, and
nothing in the output says so.

The second is the dangerous one. [`dat:0031`](0031-dui-belongs-to-the-other-speaker.md)
turned on twenty-four seconds of message order, and
[`dat:0030`](0030-combos-corroborated-first-person.md) on a line that reads as
recounting a remark *only because of where it sits in the sequence*. An
order-scrambling defect in that neighbourhood does not produce a visible error;
it produces a different story.

## The tools were not affected, and that was checked rather than assumed

`bin/wb-corroborate` slices `[:10]` and never touches the time, so coverage,
date windows and month tallies are unaffected. `--context` shows neighbours by
**file position**, and the file is in true chronological order — 192,140
timestamps parsed, zero inversions. So the sequence-dependent readings above
stand.

That the file happens to be ordered was an unexamined assumption underneath
`--context` until now. `tests/test-corpus` asserts it, and asserts the hazard is
still confined to the time portion: if the unpadded count ever drops to zero the
format has changed and this node should be re-checked; if any row stops parsing,
every date slice in the repository is suspect.

Like the Facebook archive checks, those tests **skip out loud** where the corpus
is absent — which is everywhere but a machine that has pulled it — rather than
passing quietly.

## Where it leaves the thing I was actually looking at

This surfaced while checking `timeline/events/august-2026-morgantown-call`, one
of the 49 open contradictions
([`dat:0049`](0049-old-wiki-live-contradictions-inventory.md)): the prior wiki
records the subject stating three times that he sent an audio recording to a
third party's parents, and twice that he did not, within fourteen hours.

**That check is not done and is not attempted here.** The minute-level windows
the page cites could not be selected until the format was understood, and the
three messages a keyword pass did surface are conditional — *"im going to send
this if you bail"*, *"why I don't need to send this"*, *"this is your last
fucking chance"* — which is a threat to send, not a claim of having sent. Whether
the page mischaracterised tense, or whether the completion claims sit elsewhere
in the 763 messages of that day, is exactly the sort of question a keyword slice
answers wrongly. It wants the day read in order, and that is recorded as the next
target rather than guessed at now.
