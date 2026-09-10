+++
id            = "dat:0040-quoted-bankruptcy-message-absent"
layer         = 1
type          = "datum"
title         = "One of two quotes bracketing a weak source is verified; the other is not in the corpus"
claim         = "The prior wiki supported a bankruptcy account — sourced, by its own admission, to an AI-generated case audit — by bracketing it with two quoted messages. Checked against the authoritative corpus: \"I have to have a hearing\" is present verbatim, inbound 2026-06-22. \"I already AM bankrupt!\", attributed to November 2024, is absent; the word `bankrupt` occurs exactly twice in 192,140 messages, both in 2020 and both about politics rather than the speaker. November 2024 coverage is PARTIAL (367 messages against a median of 1,123)."
cites         = ["src:old-wiki-export-2026-09-04", "src:imessage-corpus-2026",
                 "src:wikitest-rebuild-session-2026-09-09"]
attributed_to = "src:old-wiki-export-2026-09-04"
confidence    = "high"
extraction    = "Corroboration run 2026-09-09 against the sha256-verified corpus and the Facebook archive. Phrase searches plus a bare `bankrupt` search across the full corpus; the Facebook channel returns one hit across bankrupt/bankruptcy/jeffries combined."
importance    = 4
tags          = ["places", "corroboration", "old-wiki"]
rechecked   = "2026-09-09"
updated     = "2026-09-09"
created       = "2026-09-09"

[when]
start = "2024-11"
end   = "2026-06"
+++

The prior wiki did the right thing and it still did not hold.

Its source for a detailed bankruptcy account — case number, scheduled liabilities,
a court "drop dead" provision, a price history — was **an AI-generated case
audit pasted into a message thread**, and the page says so plainly: *AI-secondary,
evidently built from what she had told him.* Knowing that source was weak, it
braced the account with two contemporaneous quotes.

One brace holds. One is not there.

| Quote | Result |
| :--- | :--- |
| *"I have to have a hearing"* (June 2026) | **verified verbatim**, inbound 2026-06-22 |
| *"I already AM bankrupt!"* (Nov 2024) | **absent** |

The second is not a coverage miss in the ordinary sense. `bankrupt` appears
**twice in the entire 192,140-message corpus**, in 2020, in messages about
medical debt and the Postal Service. Nothing resembling the quoted line exists
anywhere in the record, in any year, from anyone. November 2024 is only
PARTIAL (367 messages), so it could have been said in an uncaptured window — but
the phrasing does not recur, which is unusual for a fact someone is living
inside for two years.

## Why this matters more than a single missing quote

The bracing was the page's evidence that the AI audit was tracking reality.
Half of it is now unverified, which means the case number, the liability figure
and the price history rest on the AI audit **alone** — a source the page itself
graded as secondary and built from one person's account.

This is the same shape as [`dat:0028`](0028-prescriber-quotes-partly-unverifiable.md):
a claim whose supporting quotations turn out to be partly unlocatable, where the
underlying finding may well be true and the *stated grounds for believing it*
are thinner than presented.

## A second, weaker observation, recorded as a question

The page describes the buyers' contingency as the sale of *"their own property
(19 Jeffries, ≤$229.9k)"* — Jeffries as an address. The only occurrence of
`Jeffries` in the corpus is a **person**, in a legal context, in the same message
that verified above: *"Jen Jeffries retired. But herb mitchell from Brownsville
is handling the cases."*

One occurrence is not enough to conclude the AI audit turned an attorney into a
street. It is enough to note that the corpus knows Jeffries as a name and not as
a place, and that the audit is the sort of source that makes such a conflation
possible. Filed as an open question, not a finding.

## RECHECKED [2026-09-09] — the absent quote is still absent

Re-run after [`dat:0054`](0054-facebook-archive-completed-and-recounted.md) grew
the searchable Facebook archive from 15,558 to 15,923 messages, including 365
recovered from threads whose counterparty side the parser had been dropping. The
November 2024 line *"I already AM bankrupt!"* is still not there, and `bankrupt`
still occurs exactly twice in the iMessage corpus, both in 2020.

A null re-tested against a larger corpus and still null is worth more than the
first null was. It is still `never_observed` — November 2024 remains PARTIAL —
but the window it has now survived is wider.

## UPDATED [2026-09-09] — the bankruptcy is independently attested; the audit's figures still are not

The recheck above searched `bankrupt` as a whole word, which is correct for the
quoted line and wrong for everything around it. Searching `bankruptcy` as a
substring returns six more messages, four of them in 2025–2026 — the window this
page's account concerns — and they change the picture in both directions.

**The event is corroborated, independently of the AI audit.** Two outbound
messages, neither previously read here:

> *"Sorry I promise I will read but she got a letter that looks like something
> about her bankruptcy"* — 2025-09-16
>
> *"suz has absolutely zero money until her bankruptcy settles"* — 2026-05-13,
> in the same exchange as *"a little bit more than a month left before the house
> gets closed"*

Contemporaneous, first-person, eight months apart, and they do not depend on the
audit. This node said the case rested on a source the page itself graded
secondary; **that a bankruptcy exists and was pending does not.**

**The audit is in the corpus, and it is the subject's own model's output.** The
2026-03-30 message is the audit itself, pasted, opening
`**OFFICIAL DATA AUDIT: CASE #24-22285-GLT**` and giving `Case Type: Chapter 13
Voluntary Petition`. Two things follow.

The case number is now first-party rather than relayed — it is in the message
record, on a dated message, and a docket search could settle it.

And the decorative header — `₪🜁🜂🜃 ░▒▓█` — is the exact unicode scheme from the
persona prompt in [`dat:0050`](0050-corpus-traces-of-the-type-are-downstream-of-it.md),
which the subject was pasting to other people on 2026-03-21 and 2026-03-24, six
and nine days earlier. So the "AI-generated case audit" is output from **his own
configured assistant**, not a document from a third party. The prior wiki's
description — *"evidently built from what she had told him"* — is if anything
understated: it was built from what he told a model he had configured, and it
returned the material in his own house style.

**What still rests on the audit alone.** The scheduled liabilities, the
thirteen-month price history and the court drop-dead provision. Nothing found
today touches those, and their being restated inside a confidently formatted
document from a model the subject tuned is a reason for less confidence in them,
not more.
