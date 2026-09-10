+++
id            = "dat:0057-morgantown-audio-contradiction-reproduces"
layer         = 1
type          = "datum"
title         = "The August 2026 audio contradiction reproduces, and the prior wiki's timestamps run four hours ahead of this corpus"
claim         = "The prior wiki's `timeline/events/august-2026-morgantown-call` holds open a contradiction: the subject states he sent an audio recording to a third party's parents, and states that he did not, within one day. It reproduces against the corpus. Reading 2026-08-19 in true chronological order, the outbound statements are: \"Okay sending now\" (05:46:31 corpus time — the page's 01:46), \"I already sent it\" (05:04:49), \"And I sent it already I told you\" (05:44:27), \"If it doesn't download by noon tomorrow im calling because it is a big file so just in case\" (05:48:27, presupposing a completed send), and \"Dont forget which one of us actually tried to ruin your life by exposing you to your parents\" (15:25:36). Against these, at 19:12:16 the same day: \"I could have torn your life apart. I still could and I don't.\" The page's cited timestamps map onto these exactly under a four-hour offset, and the prior wiki's timestamps are UTC — `wiki/meta/testimony-veracity` writes one as \"2010-02-17 20:07 UTC (15:07 New York)\" — while this corpus is local, so page time = corpus time + 4 in August."
cites         = ["src:imessage-corpus-2026", "src:old-wiki-export-2026-09-04"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Read 2026-09-09 against the sha256-verified corpus. The day's 763 messages were ordered by PARSED timestamp, not by string — see dat:0056, which is why the first attempt selected nothing. Statements quoted are outbound and from the thread the page concerns. The offset is established by two independent means: the page's two cited denial times land on relevant messages at +4h, and the prior wiki records times in UTC on an unrelated page."
importance    = 5
tags          = ["corpus", "old-wiki", "corroboration", "timestamps"]
created       = "2026-09-09"

[when]
date = "2026-08-19"
+++

## The contradiction is real

Within fourteen hours, in the same thread: four statements that the recording had
been sent or was being sent, one that it had not been. The 05:48 line is the
strongest of the four because it is incidental — a person arranging a follow-up
call about a large file that is downloading is not making a claim, he is assuming
one.

The corpus does not establish **which** is true, and neither did the prior wiki.
That is why the page holds it open, and it stays open. What this settles is that
the conflict is genuine and not an artefact of the page's reading.

## The four-hour offset, and why it matters beyond this page

The page cites its denials at 11:25 and 15:12. In this corpus those minutes hold
a message about a cat and a message about a name. Under a **+4 hour** shift they
land on 15:25 and 19:12 — the two statements above.

Independently: `wiki/meta/testimony-veracity` writes a tweet time as *"2010-02-17
20:07 UTC (15:07 New York)"*. The prior wiki works in UTC. This corpus is local.
In August that is exactly four hours.

**Every timestamp quoted from the prior wiki is four hours ahead of the same
message in this corpus** (five in winter). Nothing in this repository had noticed,
and it silently breaks any attempt to locate a wiki-cited message by its stated
time. That is a general fact about cross-referencing the two sources, not a fact
about this page.

## Three false negatives before the right answer, all mine

The honest part of this node. Each pass returned a clean, confident, wrong result,
and any one of them published would have contradicted a page that was correct.

**1. The window selected nothing.** Filtering by comparing the timestamp as text
returned zero rows, because the hour is unpadded
([`dat:0056`](0056-corpus-timestamps-are-not-zero-padded.md)). An empty result set
reads as *the messages are not there*.

**2. A keyword pass over `send|sent|audio|upload` found twelve messages and no
denial** — correctly, because the denial does not contain any of those words. It
says *"I could have torn your life apart."* A search for the vocabulary of an act
will not find the act described in other words.

**3. A second regex built specifically to catch denials** — `didn't send`,
`never sent`, `not going to send`, `didn't do it` — returned **zero across three
days**, and I was one step from recording that the contradiction did not
reproduce. It missed the same line for the same reason.

What found it was mapping the page's own timestamps onto the corpus and reading
what was actually there. Not a better pattern — **abandoning patterns and reading
the source**, which is the rule
[`EXTRACT.md`](../../raw/old-wiki-export-2026-09-04/EXTRACT.md) already carries and
which I had reduced to a keyword slice because the day is 763 messages long.

Three failures, all in the same direction: toward *the evidence is absent*. That
is [`pat:partial-data-confident-error`](../patterns/partial-data-confident-error.md)
again, and it is worth noting that no gate caught this one. The publication gate
and the table check catch what they were built for; nothing in this repository can
catch a search that asked the wrong question, and there may be no such thing.
