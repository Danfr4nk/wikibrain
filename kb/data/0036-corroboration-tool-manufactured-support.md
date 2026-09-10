+++
id          = "dat:0036-corroboration-tool-manufactured-support"
layer       = 1
type        = "datum"
title       = "The corroboration tool matched inside words and returned 25 false hits"
claim       = "bin/wb-corroborate as first written matched query terms as substrings. A search for legal-process terms across 2015–2016 — including the three-letter term `ard`, for Pennsylvania's Accelerated Rehabilitative Disposition — returned 25 hits, of which the visible ones matched `heard`, `hardstyle` and `card` and none concerned a diversion programme. With word-boundary matching the same query returns 0 hits. A control confirms the fix is not over-broad: `ard` returns 0 with boundaries and 406 with `--substring`, while `suboxone`, `withdrawal` and `dentist` still return their expected hits."
cites       = ["src:wikitest-rebuild-session-2026-09-09"]
confidence  = "high"
measurement = true
extraction  = "Found 2026-09-09 by reading the output of a query whose hits were visibly irrelevant. Fixed the same session: single words now match on word boundaries, multi-word phrases keep substring semantics, and `--substring` restores the old behaviour explicitly."
importance  = 5
tags        = ["tooling", "epistemics", "error"]
created     = "2026-09-09"

[when]
date = "2026-09-09"
+++

The worst class of bug this system can have, in the one tool whose entire job is
to stop claims being trusted before they are checked.

A corroboration tool that returns false positives does not merely fail — it
**inverts**. Every hit it produces is an argument for believing something, and a
tool matching `ard` inside `heard` produces those arguments at scale, in a
format indistinguishable from real ones.

Had the output not been eyeballed, the natural next step was recording that the
2015 legal material is corroborated by 25 independent messages. It is
corroborated by none.

## What the corrected query establishes, and how little that is

Zero hits for `ard`, `lawyer`, `arraign`, `magistrate` or `probation` across
2015–2016, in months the coverage check grades COVERED (2015-02: 157 messages,
2015-12: 40, 2016-02: 100).

That is a real null and a weak one. Facebook Messenger is a different social
register from iMessage — an arrest gets discussed with a mother and a partner,
not with acquaintances — so absence of legal talk there is close to what one
would predict whether or not the arrest happened. It is `never_observed`, and
the reason it is uninformative is the *channel*, not the coverage.

## The general form

Both defects found in this tool point the same way. It called a 35-message month
"COVERED" against a median of 1,123, and it matched three-letter terms inside
longer words. Each was a default that **failed toward finding something** — toward
a usable answer rather than an honest one.

That is the direction to audit in. A tool that errs toward "insufficient
evidence" wastes time; a tool that errs toward "corroborated" corrupts the
record, and does it in a form that looks like diligence.

## The audit found a third instance immediately

`bin/wb-query` scored a bidirectional prefix match: `w.startswith(term) or
term.startswith(w)`. The second clause lets a **short word in a node claim a
match on a long search term** — a node whose only relevant content is `car`
scored 4.38 against a search for `cardiac`, which is **37% of a genuine title
match and three times a genuine body-only match at 1.25**. It would outrank a
node that actually mentions the term.

Its comment said the clause existed to catch `corpus`/`corpora` and
`fragment`/`fragments`. It does not even do that: neither of `corpus`/`corpora`
is a prefix of the other, and plurals are caught by the first clause alone. The
second clause contributed nothing but noise, and had been there since the tool
was written.

Fixed the same way — one-directional, minimum term length 4, and the matched word
no more than three characters longer, so `fragment`→`fragments` survives (1.60)
while `fragment`→`fragmentation` does not (0.00), and the spurious `car` node
drops to 0.00.

**Three instances in three tools, all failing the same direction.** This is now a
property of how the tooling was written rather than three coincidences, and the
remaining unaudited surface — `wb-build`'s exclusion logic, `wb-validate`'s
warning thresholds — should be read with that prior.
