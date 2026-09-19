+++
id            = "dat:1797-held-corpus-timestamps-are-utc-not-local"
layer         = 1
type          = "datum"
title         = "Correction: the held corpus stores date_sent in UTC, not local time — CORPUS_POLICY.md §Timestamps has the direction inverted, and dat:0057's summary contradicts its own worked example"
claim         = "`CORPUS_POLICY.md` §Timestamps states *'The prior wiki's times are UTC; this corpus is local'* and that *'a message the wiki cites at 11:25 is at 07:25 here.'* **The direction is inverted.** The held corpus stores `date_sent` in **UTC**; the prior wiki's page times are local Eastern. A message the wiki cites at 11:25 EDT is at **15:25** in the corpus, not 07:25. Three independent confirmations. **(1) Dated anchor.** The condolence to Ellen Ulmer that `wiki/people/jay-lauer` and `wiki/people/ellen-ulmer` both date to 19:09 on 2017-04-11 is held at `2017-04-11 23:09:29` — UTC-4, corpus ahead. Ellen's reply, which those pages place on the evening of the 11th, is held at `2017-04-12 01:16:06`, i.e. 21:16 EDT on the 11th; read as local it would be 1:16am on the 12th and the pages would be wrong. **(2) Independent prior verification.** [`dat:0673`](0673-jay-lauer-direction-and-count-corrections.md) states the 11:07 message as held at `2017-04-11 15:07:01 UTC (11:07 EDT)` and converts throughout on that basis. **(3) Circadian histogram, assumption-free.** Across all 192,140 rows the quietest stored hours are 10:00 (0.96%) and 11:00 (0.96%) and the busiest are 23:00–02:00 (7.08%, 7.17%, 6.82%, 7.11%). Read as local that is a person whose daily minimum is late morning and whose maximum is midnight-to-2am. Shifted -4 to Eastern it is an ordinary rhythm: trough 06:00-07:00, peak 19:00-22:00. **dat:0057 is half-right and contradicts itself:** its claim field says *'page time = corpus time + 4 in August'*, but its own worked example says the page's 11:25 and 15:12 land on corpus 15:25 and 19:12 — corpus = page + 4, the opposite of its summary. The worked example is correct; the summary sentence and the policy line drawn from it are not."
cites         = ["src:imessage-corpus-2026",
                 "src:old-wiki-export-2026-09-04"]
measurement   = true
confidence    = "high"
extraction    = "Run 2026-09-19 against the held two-part export (raw/imessage/messages-part1-2011-2019.csv + messages-part2-2019-2026.csv, 192,140 rows, column set and row count matching corpus/manifest.json). Anchor rows located by exact text match on the condolence opening and on Ellen's 'especially with B. E.' reply — one hit each. Histogram: hour field sliced from date_sent on all 192,140 rows, no parsing assumptions beyond the space delimiter; full 24-bin distribution computed, min and max reported above. The offset is not inferred from any single page's stated time: the histogram alone settles it, and the two dated anchors agree."
importance    = 4
tags          = ["corpus", "timestamps", "correction", "measurement", "held-verified", "policy"]
created       = "2026-09-19"
+++

## Why this one matters more than a clock error

`CORPUS_POLICY.md` is the document every message-derived claim is supposed to
be checked against, and §Timestamps exists specifically to stop people
mislocating quoted messages. With the direction inverted it does the opposite
of its job: anyone following it shifts the wrong way and lands **eight hours**
off the intended message rather than four, and — as the section itself warns
about the original trap — *nothing about the result will look wrong*.

The section's other trap is unaffected and stands: the hour is genuinely
unpadded in 44% of rows ([`dat:0056`](0056-corpus-timestamps-are-not-zero-padded.md)),
the first ten characters are still fixed-width and safe to slice, and the file
is still in true chronological order.

## What this does not touch

[`dat:0057`](0057-morgantown-audio-contradiction-reproduces.md)'s substantive
finding — that the August 2026 audio contradiction reproduces against the
corpus — **survives intact**, because it never depended on which side was UTC.
It depended only on the *magnitude* of the offset being four hours in August,
and four hours is right. The five statements it quotes are the five statements
that are there. Only the sentence naming which clock is which is wrong, and
that sentence is the one `CORPUS_POLICY.md` copied.

The supporting argument dat:0057 gives for its inverted summary is also worth
keeping separate: it observes that `wiki/meta/testimony-veracity` writes a
tweet time as *"2010-02-17 20:07 UTC (15:07 New York)"*, and concludes the
prior wiki works in UTC. That page does label a UTC time explicitly — but a
page that writes "UTC" where it means UTC is evidence about that page, not
about the unlabelled times on every other page. The morgantown page's
unlabelled 11:25 is local, which is why it lands on corpus 15:25.

## Practical rule

To locate a message this wiki quotes with a local time, **add** four hours in
summer and five in winter to get the corpus timestamp. To report a corpus
timestamp in local terms, subtract. Every local time on
[[wiki/people/betherin-mechling]], [[wiki/people/zaco]] and
[[wiki/interests/favorites/music/artists/elliott-smith]] is derived on that
basis and is consistent with this node.
